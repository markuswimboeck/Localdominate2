import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { ClassDot } from "@/components/v4/ai/TaskChip";
import { AI_DE, AI_EN } from "@/data/v4Ai";
import type { AiTexts, TaskClass } from "@/data/v4Ai";

const auditFigure = (t: AiTexts): string => t.ladder.tiers.find((tier) => tier.id === "audit")?.figure ?? "";

const TEXTS = {
  en: {
    label: "New · AI consulting",
    title: "Which work can AI take off your team?",
    body: `We map every role into tasks AI does, tasks AI drafts and tasks that stay human. Then we build the workflows and set up Claude for the team. Free task check, audit for ${auditFigure(AI_EN)}.`,
    cta: "See AI consulting",
    to: AI_EN.path,
  },
  de: {
    label: "Neu · KI-Beratung",
    title: "Welche Arbeit kann KI Ihrem Team abnehmen?",
    body: `Wir zerlegen jede Rolle in Aufgaben, die KI erledigt, die KI vorbereitet und die menschlich bleiben. Dann bauen wir die Abläufe und richten Claude fürs Team ein. Kostenloser Aufgaben-Check, Audit für ${auditFigure(AI_DE)}.`,
    cta: "Zur KI-Beratung",
    to: AI_DE.path,
  },
} as const;

const SAMPLE: readonly TaskClass[] = ["automate", "automate", "assist", "assist", "assist", "human"];

/**
 * A band that links other V4 pages to the AI landing page. Uses the same price source as the
 * landing page (the audit tier of its text set), so the teaser never shows a stale figure.
 */
export function AiTeaser({ lang }: { lang: "en" | "de" }) {
  const t = TEXTS[lang];
  return (
    <StateField field="dark" as="section" aria-labelledby={`ai-teaser-${lang}`}>
      <div className="mx-auto max-w-[1300px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 rounded-[1.75rem] border border-v4-ivory/15 bg-v4-ivory/[0.035] p-7 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-12 md:p-10">
          <div className="flex flex-col gap-4">
            <SystemLabel as="p" className="text-v4-signal">
              {t.label}
            </SystemLabel>
            <h2 id={`ai-teaser-${lang}`} className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] leading-[1.06] text-v4-ivory">
              {t.title}
            </h2>
            <p className="max-w-xl font-v4-sans text-base leading-relaxed text-v4-ivory/70">{t.body}</p>
            <Link
              to={t.to}
              className="mt-2 inline-flex min-h-[46px] w-fit items-center gap-2 rounded-full bg-v4-signal px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              {t.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div aria-hidden="true" className="flex flex-col gap-2.5">
            {SAMPLE.map((cls, i) => (
              <div key={i} className="flex items-center gap-3">
                <ClassDot cls={cls} className="text-v4-ivory/50" />
                <span
                  className={
                    "h-2 rounded-full " +
                    (cls === "automate" ? "bg-v4-signal" : cls === "assist" ? "bg-v4-cobalt" : "bg-v4-ivory/20")
                  }
                  style={{ width: `${[78, 55, 92, 66, 48, 70][i]}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StateField>
  );
}
