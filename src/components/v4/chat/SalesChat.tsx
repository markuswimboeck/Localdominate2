import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { CHECK_DE, CHECK_PATH } from "@/lib/check";
import { CHAT_TEXTS } from "@/components/v4/chat/chatTexts";
import type { ChatCta, ChatLead } from "@/components/v4/chat/chatTexts";

/**
 * Sales assistant widget (V4). Talks to the Netlify Function at /api/chat (netlify/functions/chat.mts).
 * Mounted after hydration from V4Page, so it never affects the prerendered HTML.
 *
 * A lead the assistant collects (with the visitor's explicit yes, asked for in the conversation) is
 * delivered like the free-check form: Web3Forms when VITE_WEB3FORMS_KEY is set, otherwise a
 * pre-filled email the visitor sends themselves. Nothing is written to the database.
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FALLBACK_ADDRESS = "info@localdominate.org";
const formKey = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() ?? "";
const STORAGE_KEY = "ld_chat_v1";
const MAX_INPUT = 1000;

type Message = { role: "user" | "assistant"; content: string; ctas?: ChatCta[]; note?: string };

const readStored = (): Message[] => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.slice(-40) : [];
  } catch {
    return [];
  }
};

const mailtoForLead = (lead: ChatLead, subject: string): string => {
  const body = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Link: ${lead.link}`,
    `Business: ${lead.business_type}`,
    `Interest: ${lead.interest}`,
    "",
    lead.summary,
  ].join("\n");
  return `mailto:${FALLBACK_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function SalesChat() {
  const { pathname } = useLocation();
  const german = pathname === CHECK_DE.prefix || pathname.startsWith(`${CHECK_DE.prefix}/`);
  const t = german ? CHAT_TEXTS.de : CHAT_TEXTS.en;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(readStored);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const leadSent = useRef(false);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* storage unavailable: the chat still works for this page view */
    }
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const deliverLead = async (lead: ChatLead): Promise<string> => {
    if (leadSent.current) return "";
    leadSent.current = true;
    if (!formKey) return t.leadMail;
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: formKey,
          subject: `${t.leadSubject}: ${lead.business_type}`,
          from_name: "localdominate.org chat",
          name: lead.name,
          email: lead.email,
          link: lead.link,
          business_type: lead.business_type,
          interest: lead.interest,
          goal: lead.summary,
          page: window.location.pathname,
          source: "sales-chat",
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (response.ok && result.success) return t.leadSent;
    } catch {
      /* fall through to the mail fallback */
    }
    leadSent.current = false;
    return t.leadFailed;
  };

  const send = async (event?: FormEvent) => {
    event?.preventDefault();
    const text = input.trim().slice(0, MAX_INPUT);
    if (!text || busy) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang: german ? "de" : "en",
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      const data = (await response.json()) as { reply: string; ctas?: ChatCta[]; lead?: ChatLead | null };
      const note = data.lead ? await deliverLead(data.lead) : undefined;
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply, ctas: data.ctas, note: note || undefined },
      ]);
      if (data.lead && note === t.leadMail) {
        window.open(mailtoForLead(data.lead, t.leadSubject), "_self");
      }
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }]);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  };

  const reset = () => {
    setMessages([]);
    leadSent.current = false;
  };

  const ctaProps = (cta: ChatCta) => {
    if (cta.kind === "call") {
      return {
        label: t.ctaCall,
        href: BOOKING_URL,
        external: BOOKING_IS_EXTERNAL,
        internal: false,
      };
    }
    return {
      label: t.ctaCheck,
      href: german ? CHECK_DE.path : CHECK_PATH,
      external: false,
      internal: true,
    };
  };

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-v4-signal px-5 py-3 font-v4-sans text-sm font-medium text-v4-ink shadow-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ivory"
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-v4-ink" />
          {t.launcher}
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed inset-x-3 bottom-3 z-40 flex max-h-[min(640px,calc(100vh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-v4-ivory/15 bg-v4-ink font-v4-sans text-v4-ivory shadow-2xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[390px]"
        >
          <header className="flex items-start justify-between gap-3 border-b border-v4-ivory/15 px-5 py-4">
            <div>
              <p className="text-sm font-medium">{t.title}</p>
              <p className="mt-0.5 text-xs text-v4-ivory/60">{t.disclosure}</p>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  className="rounded px-2 py-1 text-xs text-v4-ivory/60 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                >
                  {t.reset}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                aria-label={t.close}
                className="rounded px-2 py-1 text-lg leading-none text-v4-ivory/70 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
              >
                ×
              </button>
            </div>
          </header>

          <div ref={listRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-5 py-4 text-sm leading-relaxed">
            <Bubble role="assistant">{t.greeting}</Bubble>
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {t.starters.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => setInput(starter)}
                    className="rounded-full border border-v4-ivory/25 px-3 py-1.5 text-xs text-v4-ivory/85 hover:border-v4-ivory/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className="space-y-2">
                <Bubble role={message.role}>{message.content}</Bubble>
                {message.ctas?.map((cta) => {
                  const props = ctaProps(cta);
                  const classes =
                    "inline-flex rounded-full bg-v4-signal px-4 py-2 text-xs font-medium text-v4-ink hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ivory";
                  return props.internal ? (
                    <Link key={cta.kind} to={props.href} className={classes}>
                      {props.label}
                    </Link>
                  ) : (
                    <a
                      key={cta.kind}
                      href={props.href}
                      className={classes}
                      {...(props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {props.label}
                    </a>
                  );
                })}
                {message.note && <p className="text-xs text-v4-ivory/60">{message.note}</p>}
              </div>
            ))}
            {busy && <p className="text-xs text-v4-ivory/50">{t.typing}</p>}
          </div>

          <form onSubmit={send} className="border-t border-v4-ivory/15 px-4 py-3">
            <div className="flex items-end gap-2">
              <label htmlFor="ld-chat-input" className="sr-only">
                {t.inputLabel}
              </label>
              <textarea
                id="ld-chat-input"
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send();
                  }
                }}
                rows={1}
                maxLength={MAX_INPUT}
                placeholder={t.placeholder}
                className="max-h-28 min-h-[40px] flex-1 resize-none rounded-lg border border-v4-ivory/25 bg-transparent px-3 py-2 text-sm text-v4-ivory placeholder:text-v4-ivory/40 focus:border-v4-signal focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className={cn(
                  "rounded-full bg-v4-signal px-4 py-2 text-sm font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ivory",
                  (busy || !input.trim()) && "opacity-40",
                )}
              >
                {t.send}
              </button>
            </div>
            <p className="mt-2 text-[11px] text-v4-ivory/45">
              {t.privacyBefore}{" "}
              <Link to="/datenschutz" className="underline underline-offset-2 hover:text-v4-ivory/80">
                {t.privacyLink}
              </Link>
              .
            </p>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  return (
    <div className={cn("flex", role === "user" ? "justify-end" : "justify-start")}>
      <p
        className={cn(
          "max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-2.5",
          role === "user" ? "bg-v4-ivory text-v4-ink" : "bg-v4-ivory/10 text-v4-ivory",
        )}
      >
        {children}
      </p>
    </div>
  );
}
