import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/booking";
import { TEXTS, langForPath, nextStepLink } from "./salesChatTexts";
import type { ChatLang, NextStep } from "./salesChatTexts";

/**
 * The sales chat widget (lazy chunk, mounted by SalesChatMount). It talks to /api/chat, which calls
 * the Claude API. A lead the assistant collects (with the visitor's consent) is sent from here
 * through the same Web3Forms key as the free-check form, together with the chat transcript.
 */

type Role = "user" | "assistant" | "notice";
type Msg = { role: Role; content: string; nextSteps?: NextStep[]; mailto?: string };
type Lead = {
  name: string;
  email: string;
  business: string;
  link: string;
  city: string;
  goal: string;
  recommended_offer: string;
};
type Stored = { messages: Msg[]; open: boolean; leadSent: boolean; lang: ChatLang };

const STORAGE_KEY = "ld-saleschat-v1";
const TEASER_KEY = "ld-saleschat-teaser";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FORM_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() ?? "";
const CONTACT = "info@localdominate.org";
/** Pages with a sticky call-to-action bar at the bottom on mobile: lift the launcher above it. */
const MOBILE_BAR_PATHS = /^\/(hairdressers-munich|dentists-munich|gyms-munich|restaurants-munich|barbers-munich|plumbers-berlin|lawyers-hamburg|physiotherapy-vienna|dentists-zurich|bakeries-cologne)$/;

const read = (): Stored | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Stored) : null;
  } catch {
    return null;
  }
};
const write = (s: Stored) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* storage blocked: the chat still works for this page view */
  }
};

const track = (event: string, params: Record<string, unknown> = {}) => {
  try {
    window.gtag?.("event", event, { ...params, chat_location: window.location.pathname });
  } catch {
    /* analytics is optional */
  }
};

// ---------------------------------------------------------------------------------------------
// Minimal, safe rich text: **bold**, [text](url) and "- " lists. Builds React nodes, no HTML.
// ---------------------------------------------------------------------------------------------
const SAFE_URL = /^(https:\/\/(www\.)?localdominate\.org[^\s]*|\/[^\s]*|mailto:[^\s]+)$/;

function inline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|(https:\/\/(?:www\.)?localdominate\.org[^\s),.]*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[1]) out.push(<strong key={k}>{m[1]}</strong>);
    else {
      const label = m[2] ?? m[4];
      const raw = m[3] ?? m[4];
      const url = raw === BOOKING_URL ? raw : raw.replace(/^https:\/\/(www\.)?localdominate\.org/, "") || "/";
      if (SAFE_URL.test(url) || url === BOOKING_URL) {
        const external = /^https?:/.test(url);
        out.push(
          <a
            key={k}
            href={url}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="underline underline-offset-2 hover:opacity-80"
            onClick={() => track("sales_chat_link", { link_url: url })}
          >
            {label}
          </a>
        );
      } else out.push(label);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function RichText({ text }: { text: string }) {
  // Group lines into paragraphs and lists: "- " lines form a list, blank lines end a paragraph.
  const groups: { list: boolean; lines: string[] }[] = [];
  for (const line of text.split("\n")) {
    const isItem = /^\s*[-•*]\s+/.test(line);
    if (!line.trim()) {
      groups.push({ list: false, lines: [] });
      continue;
    }
    const last = groups[groups.length - 1];
    if (last && last.list === isItem && last.lines.length) last.lines.push(line);
    else groups.push({ list: isItem, lines: [line] });
  }
  return (
    <>
      {groups
        .filter((g) => g.lines.length)
        .map((g, b) =>
          g.list ? (
            <ul key={b} className="my-1.5 list-disc space-y-1 pl-5 [&:not(:first-child)]:mt-2">
              {g.lines.map((l, i) => (
                <li key={i}>{inline(l.replace(/^\s*[-•*]\s+/, ""), `${b}-${i}`)}</li>
              ))}
            </ul>
          ) : (
            <p key={b} className="[&:not(:first-child)]:mt-2">
              {g.lines.map((l, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {inline(l, `${b}-${i}`)}
                </Fragment>
              ))}
            </p>
          )
        )}
    </>
  );
}

// ---------------------------------------------------------------------------------------------

export default function SalesChat({ pathname }: { pathname: string }) {
  const stored = useRef<Stored | null>(read());
  const [lang] = useState<ChatLang>(() => stored.current?.lang ?? langForPath(pathname));
  const t = TEXTS[lang];
  const [open, setOpen] = useState<boolean>(() => stored.current?.open ?? false);
  const [messages, setMessages] = useState<Msg[]>(() => stored.current?.messages ?? [{ role: "assistant", content: t.greeting }]);
  const [leadSent, setLeadSent] = useState<boolean>(() => stored.current?.leadSent ?? false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => write({ messages, open, leadSent, lang }), [messages, open, leadSent, lang]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  }, [open]);

  // A one-time, dismissible hint after 20 s on the page (not on the form page itself).
  useEffect(() => {
    if (open || messages.length > 1 || /^\/(start-a-project)/.test(pathname)) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (seen) return;
    const id = window.setTimeout(() => {
      setTeaser(true);
      track("sales_chat_teaser_shown");
      try {
        sessionStorage.setItem(TEASER_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 20000);
    return () => window.clearTimeout(id);
  }, [open, messages.length, pathname]);

  const openChat = (source: string) => {
    setOpen(true);
    setTeaser(false);
    track("sales_chat_open", { source });
  };
  const closeChat = () => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  };

  const sendLead = useCallback(
    async (lead: Lead, history: Msg[]) => {
      const transcript = history
        .filter((m) => m.role !== "notice")
        .map((m) => `${m.role === "user" ? "Besucher" : "Assistent"}: ${m.content}`)
        .join("\n\n")
        .slice(-12000);
      const summary = [
        `Name: ${lead.name}`,
        `E-Mail: ${lead.email}`,
        `Betrieb: ${lead.business}`,
        lead.city && `Ort: ${lead.city}`,
        lead.link && `Link: ${lead.link}`,
        `Ziel: ${lead.goal}`,
        `Empfohlen: ${lead.recommended_offer}`,
      ]
        .filter(Boolean)
        .join("\n");
      const mailto = `mailto:${CONTACT}?subject=${encodeURIComponent(`${t.leadSubject}: ${lead.business}`)}&body=${encodeURIComponent(summary)}`;

      if (!FORM_KEY) {
        setMessages((prev) => [...prev, { role: "notice", content: t.leadFailed, mailto }]);
        return;
      }
      try {
        const r = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: FORM_KEY,
            subject: `${t.leadSubject}: ${lead.business || lead.name}`,
            from_name: "localdominate.org (Chat)",
            replyto: lead.email,
            name: lead.name,
            email: lead.email,
            link: lead.link,
            business_type: lead.business,
            city: lead.city,
            goal: lead.goal,
            recommended_offer: lead.recommended_offer,
            source: "sales_chat",
            page: window.location.pathname,
            transcript,
          }),
        });
        const result = (await r.json()) as { success?: boolean };
        if (!r.ok || !result.success) throw new Error("web3forms");
        setLeadSent(true);
        setMessages((prev) => [...prev, { role: "notice", content: t.leadSent }]);
        track("generate_lead", { method: "sales_chat", offer: lead.recommended_offer });
      } catch {
        setMessages((prev) => [...prev, { role: "notice", content: t.leadFailed, mailto }]);
      }
    },
    [t]
  );

  const send = async (text: string) => {
    const content = text.trim().slice(0, 2000);
    if (!content || busy) return;
    const history: Msg[] = [...messages, { role: "user", content }];
    setMessages(history);
    setInput("");
    setBusy(true);
    track("sales_chat_message", { message_number: history.filter((m) => m.role === "user").length });

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page: pathname,
          lang,
          messages: history
            .filter((m) => m.role !== "notice")
            .slice(-40)
            .map(({ role, content: c }) => ({ role, content: c })),
        }),
      });
      if (r.status === 429) {
        setMessages((prev) => [...prev, { role: "notice", content: t.limit }]);
        return;
      }
      const data = (await r.json()) as { reply?: string; nextSteps?: NextStep[]; lead?: Lead | null };
      if (!r.ok || !data.reply) throw new Error(String(r.status));
      const reply: Msg = { role: "assistant", content: data.reply, nextSteps: data.nextSteps?.slice(0, 2) };
      const next = [...history, reply];
      setMessages(next);
      if (data.lead && !leadSent) await sendLead(data.lead, next);
    } catch {
      setMessages((prev) => [...prev, { role: "notice", content: t.error }]);
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      void send(input);
    }
  };
  const restart = () => {
    setMessages([{ role: "assistant", content: t.greeting }]);
    setLeadSent(false);
    track("sales_chat_restart");
  };

  const userTurns = messages.filter((m) => m.role === "user").length;
  const liftOnMobile = MOBILE_BAR_PATHS.test(pathname);

  return (
    <div className="v4 font-v4-sans" lang={lang}>
      {!open && (
        <div className={cn("fixed right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6", liftOnMobile ? "bottom-24" : "bottom-4")}>
          {teaser && (
            <div className="relative max-w-[260px] rounded-2xl bg-v4-white p-4 pr-9 text-sm leading-snug text-v4-ink shadow-xl ring-1 ring-v4-ink/10">
              <button type="button" onClick={() => openChat("teaser")} className="text-left">
                {t.teaser}
              </button>
              <button
                type="button"
                aria-label={t.teaserClose}
                onClick={() => setTeaser(false)}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-v4-ink/50 hover:text-v4-ink"
              >
                ×
              </button>
            </div>
          )}
          <button
            ref={launcherRef}
            type="button"
            onClick={() => openChat("launcher")}
            aria-haspopup="dialog"
            className="flex h-14 items-center gap-2 rounded-full bg-v4-ink pl-4 pr-5 text-sm font-medium text-v4-ivory shadow-xl ring-1 ring-v4-ivory/10 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
          >
            <span aria-hidden="true" className="relative flex h-7 w-7 items-center justify-center rounded-full bg-v4-signal text-v4-ink">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="hidden sm:inline">{t.launcher}</span>
            <span className="sm:hidden">{t.launcherShort}</span>
          </button>
        </div>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={t.title}
          onKeyDown={(e) => e.key === "Escape" && closeChat()}
          className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-v4-ivory text-v4-ink shadow-2xl sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(640px,calc(100dvh-3rem))] sm:w-[400px] sm:rounded-2xl sm:ring-1 sm:ring-v4-ink/10"
        >
          <header className="flex items-center gap-3 bg-v4-ink px-4 py-3 text-v4-ivory">
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-v4-signal font-v4-sans text-xs font-bold tracking-tight text-v4-ink">
              LD
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{t.title}</p>
              <p className="flex items-center gap-1.5 text-xs text-v4-ivory/60">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                {t.subtitle}
              </p>
            </div>
            {userTurns > 0 && (
              <button
                type="button"
                onClick={restart}
                aria-label={t.restart}
                title={t.restart}
                className="flex h-9 w-9 items-center justify-center rounded-full text-v4-ivory/60 hover:bg-v4-ivory/10 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>
            )}
            <button
              type="button"
              onClick={closeChat}
              aria-label={t.close}
              className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-v4-ivory/80 hover:bg-v4-ivory/10 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              ×
            </button>
          </header>

          <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-[15px] leading-relaxed">
            <p className="rounded-lg bg-v4-ink/5 px-3 py-2 text-[11px] leading-snug text-v4-ink/60">
              {t.privacy}{" "}
              <a href="/datenschutz" className="underline underline-offset-2">
                {t.privacyLink}
              </a>
            </p>

            {messages.map((m, i) =>
              m.role === "notice" ? (
                <p key={i} role="status" className="mx-auto max-w-[90%] rounded-xl bg-v4-forest px-3 py-2 text-center text-xs leading-snug text-v4-ivory">
                  {m.content}
                  {m.mailto && (
                    <>
                      {" "}
                      <a href={m.mailto} className="underline underline-offset-2">
                        {CONTACT}
                      </a>
                    </>
                  )}
                </p>
              ) : (
                <div key={i} className={cn("flex flex-col gap-2", m.role === "user" ? "items-end" : "items-start")}>
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-2.5",
                      m.role === "user" ? "rounded-br-md bg-v4-ink text-v4-ivory" : "rounded-bl-md bg-v4-white text-v4-ink ring-1 ring-v4-ink/5"
                    )}
                  >
                    {m.role === "assistant" ? <RichText text={m.content} /> : <p className="whitespace-pre-wrap">{m.content}</p>}
                  </div>
                  {m.nextSteps?.map((step) => {
                    const link = nextStepLink(step, lang);
                    return (
                      <a
                        key={step}
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        onClick={() => track("sales_chat_cta", { step })}
                        className="inline-flex items-center gap-2 rounded-full bg-v4-signal px-5 py-2.5 text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                      >
                        {link.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    );
                  })}
                </div>
              )
            )}

            {userTurns === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {t.starters.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void send(s)}
                    className="rounded-full border border-v4-ink/20 bg-v4-white px-3 py-1.5 text-left text-xs text-v4-ink hover:border-v4-ink/60"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {busy && (
              <div className="flex items-center gap-2 text-xs text-v4-ink/50" aria-label={t.typing}>
                <span className="flex gap-1 rounded-2xl rounded-bl-md bg-v4-white px-4 py-3 ring-1 ring-v4-ink/5">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-v4-ink/40" style={{ animationDelay: `${d * 150}ms` }} />
                  ))}
                </span>
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-v4-ink/10 bg-v4-white px-3 py-3">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={2000}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl border border-v4-ink/15 bg-v4-ivory/60 px-3 py-2.5 text-[16px] text-v4-ink placeholder:text-v4-ink/40 focus:border-v4-ink focus:outline-none sm:text-[15px]"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label={t.send}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-v4-ink text-v4-ivory transition-opacity disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
