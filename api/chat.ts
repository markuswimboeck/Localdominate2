/**
 * POST /api/chat — the sales chat on localdominate.org (Vercel Node function).
 *
 * The browser sends the visible conversation; this function adds the system prompt (rules in
 * api/_lib/prompt.ts, facts from public/llms.txt), calls the Claude Messages API and returns the
 * reply text plus any next-step buttons and a lead the assistant collected with the visitor's consent.
 *
 * The lead itself is NOT stored here: it goes back to the browser, which sends it through the same
 * Web3Forms key the free-check form already uses. So there is no new database and no new email
 * service, and nothing is kept on this server.
 *
 * Environment (Vercel project "localdominate"):
 *   ANTHROPIC_API_KEY  required, server-side only (never prefix it with VITE_)
 *   CLAUDE_MODEL       optional, default "claude-sonnet-5-5"
 *   VITE_BOOKING_URL   optional, the same Cal.com link the "Book a 15-min call" button uses
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { buildPageContext, buildSystemPrompt, type ChatLang } from "./_lib/prompt.js";

const API_URL = "https://api.anthropic.com/v1/messages";
const DEFAULT_MODEL = "claude-sonnet-5-5";
const MAX_TOKENS = 900;
const MAX_MESSAGES = 40; // 20 visitor turns
const MAX_MESSAGE_CHARS = 2000;
const MAX_TOOL_ROUNDS = 3;
const FACTS_URL = "https://localdominate.org/llms.txt";

const ALLOWED_ORIGIN = /^https:\/\/((www\.)?localdominate\.org|[a-z0-9-]+\.vercel\.app)$|^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const NEXT_STEPS = ["free_check", "book_call", "ai_check", "services", "creators"] as const;
type NextStep = (typeof NEXT_STEPS)[number];

type ChatMessage = { role: "user" | "assistant"; content: string };

export type Lead = {
  name: string;
  email: string;
  business: string;
  link: string;
  city: string;
  goal: string;
  recommended_offer: string;
};

// ---------------------------------------------------------------------------------------------
// Tools the assistant can use. Both are "client-side": the function collects them and the
// browser acts (shows a button / sends the lead).
// ---------------------------------------------------------------------------------------------
const TOOLS = [
  {
    name: "suggest_next_step",
    description:
      "Show the visitor one button for the next step under your message. Use it when the visitor's need is clear or they ask how to start. At most once per answer.",
    input_schema: {
      type: "object",
      properties: {
        step: {
          type: "string",
          enum: NEXT_STEPS,
          description:
            "free_check = free check form; book_call = 15-min video call; ai_check = free AI task check; services = offers page; creators = creator portfolio page",
        },
      },
      required: ["step"],
    },
  },
  {
    name: "save_lead",
    description:
      "Pass the visitor's contact details and the chat to Markus so he can reply by email. Only call this after the visitor gave name and email AND clearly agreed that the details and the chat may be saved for that purpose.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Visitor's name" },
        email: { type: "string", description: "Visitor's email address" },
        business: { type: "string", description: "Type of business, e.g. 'owner-run hotel', 'plumber'" },
        link: { type: "string", description: "Website or Google profile link, empty if none" },
        city: { type: "string", description: "City or region, empty if unknown" },
        goal: { type: "string", description: "What the visitor wants, in one sentence" },
        recommended_offer: { type: "string", description: "The offer you recommended, or 'open'" },
        consent_given: {
          type: "boolean",
          description: "true only if the visitor explicitly agreed to their details and the chat being saved and passed on",
        },
      },
      required: ["name", "email", "business", "goal", "recommended_offer", "consent_given"],
    },
  },
] as const;

// ---------------------------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------------------------
const json = (body: unknown, status = 200, origin?: string | null): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...(origin ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
    },
  });

let factsCache: { text: string; at: number } | null = null;
async function loadFacts(): Promise<string> {
  if (factsCache && Date.now() - factsCache.at < 60 * 60 * 1000) return factsCache.text;
  let text = "";
  try {
    text = await readFile(join(process.cwd(), "public", "llms.txt"), "utf8");
  } catch {
    try {
      const r = await fetch(FACTS_URL);
      if (r.ok) text = await r.text();
    } catch {
      /* handled below */
    }
  }
  if (!text) throw new Error("facts unavailable");
  factsCache = { text, at: Date.now() };
  return text;
}

/** Best-effort limit per function instance: 30 requests per IP in 10 minutes. */
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;
  const list = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 30;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clip = (v: unknown, n: number): string => (typeof v === "string" ? v.trim().slice(0, n) : "");

function parseMessages(raw: unknown): ChatMessage[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) return null;
  const out: ChatMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.trim().slice(0, MAX_MESSAGE_CHARS);
    if (!text) return null;
    // Merge accidental same-role neighbours so the API always gets alternating turns.
    const prev = out[out.length - 1];
    if (prev && prev.role === role) prev.content += `\n\n${text}`;
    else out.push({ role, content: text });
  }
  // The API needs the first turn to be the visitor's; the widget's greeting is client-only.
  while (out.length && out[0].role === "assistant") out.shift();
  if (!out.length || out[out.length - 1].role !== "user") return null;
  return out;
}

type ContentBlock =
  | { type: "text"; text: string }
  | { type: "tool_use"; id: string; name: string; input: Record<string, unknown> }
  | { type: string; [k: string]: unknown };

// ---------------------------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------------------------
export async function OPTIONS(request: Request): Promise<Response> {
  const origin = request.headers.get("origin");
  if (!origin || !ALLOWED_ORIGIN.test(origin)) return new Response(null, { status: 403 });
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const origin = request.headers.get("origin");
  // Browsers always send Origin on a cross-origin POST and on same-origin fetch POSTs. Rejecting
  // foreign origins keeps other sites from using this endpoint (and the API budget) from a browser.
  if (origin && !ALLOWED_ORIGIN.test(origin)) return json({ error: "forbidden" }, 403);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: "not_configured" }, 503, origin);

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return json({ error: "rate_limited" }, 429, origin);

  let body: { messages?: unknown; page?: unknown; lang?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400, origin);
  }
  const messages = parseMessages(body.messages);
  if (!messages) return json({ error: "bad_request" }, 400, origin);
  const page = clip(body.page, 200).replace(/[^\w\-/#.?=&%]/g, "") || "/";
  const lang: ChatLang = body.lang === "de" ? "de" : "en";

  let facts: string;
  try {
    facts = await loadFacts();
  } catch {
    return json({ error: "unavailable" }, 503, origin);
  }

  const configuredBooking = (process.env.VITE_BOOKING_URL ?? "").trim();
  const bookingUrl = /^https:\/\//.test(configuredBooking) ? configuredBooking : "mailto:info@localdominate.org (subject: 15-min call request)";

  const system = [
    // Large and identical for every visitor: cached, so repeat turns are cheap and fast.
    { type: "text", text: buildSystemPrompt({ facts, bookingUrl }), cache_control: { type: "ephemeral" } },
    { type: "text", text: buildPageContext({ page, lang }) },
  ];

  // The conversation sent to the API. Tool rounds append to it; the browser only ever sees text.
  const apiMessages: { role: "user" | "assistant"; content: string | ContentBlock[] }[] = messages.map((m) => ({ ...m }));
  const nextSteps: NextStep[] = [];
  let lead: Lead | null = null;
  const textParts: string[] = [];

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    let data: { content?: ContentBlock[]; stop_reason?: string };
    try {
      const r = await fetch(API_URL, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.CLAUDE_MODEL?.trim() || DEFAULT_MODEL,
          max_tokens: MAX_TOKENS,
          system,
          tools: TOOLS,
          messages: apiMessages,
        }),
      });
      if (!r.ok) {
        console.error("claude api error", r.status, (await r.text()).slice(0, 500));
        return json({ error: "upstream" }, 502, origin);
      }
      data = await r.json();
    } catch (e) {
      console.error("claude api fetch failed", e);
      return json({ error: "upstream" }, 502, origin);
    }

    const content = data.content ?? [];
    for (const block of content) if (block.type === "text" && typeof block.text === "string") textParts.push(block.text);

    const toolUses = content.filter((b): b is Extract<ContentBlock, { type: "tool_use" }> => b.type === "tool_use");
    if (data.stop_reason !== "tool_use" || toolUses.length === 0) break;

    const results = toolUses.map((use) => {
      if (use.name === "suggest_next_step") {
        const step = use.input.step as NextStep;
        if (NEXT_STEPS.includes(step) && !nextSteps.includes(step)) nextSteps.push(step);
        return { type: "tool_result", tool_use_id: use.id, content: "The button is shown under your message. Do not repeat the link." };
      }
      if (use.name === "save_lead") {
        const i = use.input;
        const email = clip(i.email, 200);
        if (i.consent_given !== true) {
          return { type: "tool_result", tool_use_id: use.id, is_error: true, content: "Not saved: the visitor has not clearly agreed yet. Ask for consent first." };
        }
        if (!EMAIL.test(email) || !clip(i.name, 120)) {
          return { type: "tool_result", tool_use_id: use.id, is_error: true, content: "Not saved: name or email address missing or invalid. Ask the visitor to check it." };
        }
        lead = {
          name: clip(i.name, 120),
          email,
          business: clip(i.business, 200),
          link: clip(i.link, 300),
          city: clip(i.city, 120),
          goal: clip(i.goal, 500),
          recommended_offer: clip(i.recommended_offer, 200),
        };
        return {
          type: "tool_result",
          tool_use_id: use.id,
          content:
            "Saved and passed to Markus. Tell the visitor he replies by email within two working days, and that they can also book a call if they prefer. Do not ask for the details again.",
        };
      }
      return { type: "tool_result", tool_use_id: use.id, is_error: true, content: "Unknown tool." };
    });

    // Keep the assistant turn exactly as returned (thinking blocks included) before the results.
    apiMessages.push({ role: "assistant", content });
    apiMessages.push({ role: "user", content: results as unknown as ContentBlock[] });
  }

  const reply = textParts.join("\n\n").trim();
  if (!reply) return json({ error: "empty" }, 502, origin);
  return json({ reply, nextSteps, lead }, 200, origin);
}
