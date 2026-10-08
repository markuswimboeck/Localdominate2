import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { arPath } from "@/lib/v4Locale";
import { stepsOfCase } from "@/components/v4/work/caseSteps";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { AR_WORK } from "@/data/ar/work.ar";
import type { ArCase } from "@/data/ar/work.ar";

export type Tone = "light" | "dark";

const line = (tone: Tone) => (tone === "dark" ? "border-v4-ivory/15" : "border-v4-ink/15");
const muted = (tone: Tone) => (tone === "dark" ? "text-v4-ivory/60" : "text-v4-ink/60");
const strong = (tone: Tone) => (tone === "dark" ? "text-v4-ivory" : "text-v4-ink");
const body = (tone: Tone) => (tone === "dark" ? "text-v4-ivory/80" : "text-v4-ink/80");

/** Arabic copy of the Work case parts: Arabic labels, logical classes, mirrored arrows. */
export function Fact({ label, tone, children }: { label: string; tone: Tone; children: ReactNode }) {
  return (
    <div className={cn("grid content-start gap-3 border-t py-5", line(tone))}>
      <dt>
        <SystemLabel className={cn("leading-relaxed", muted(tone))}>{label}</SystemLabel>
      </dt>
      <dd className={cn("font-v4-sans text-sm leading-relaxed", body(tone))}>{children}</dd>
    </div>
  );
}

export function ScopeTags({ c, tone }: { c: ArCase; tone: Tone }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {c.scope.map((s) => (
        <li
          key={s}
          className={cn(
            "rounded-full border px-3 py-1 font-v4-sans text-xs",
            tone === "dark" ? "border-v4-ivory/20 text-v4-ivory/70" : "border-v4-ink/15 text-v4-ink/70"
          )}
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

/** Seven dots in the order of the system (covered ones filled), then one link per covered step. */
export function StepLinks({ c, tone }: { c: ArCase; tone: Tone }) {
  const steps = stepsOfCase(c.id);
  const covered = new Set(steps.map((s) => s.id));
  return (
    <div>
      <p className={cn("flex items-center gap-3 font-v4-sans text-sm", muted(tone))}>
        <span aria-hidden="true" className="flex items-center gap-1.5">
          {PILLAR_INDEX.map((p) => (
            <span
              key={p.id}
              className={cn(
                "h-2.5 w-2.5 rounded-full border",
                covered.has(p.id)
                  ? tone === "dark"
                    ? "border-v4-signal bg-v4-signal"
                    : "border-v4-ink bg-v4-ink"
                  : tone === "dark"
                    ? "border-v4-ivory/40"
                    : "border-v4-ink/40"
              )}
            />
          ))}
        </span>
        {AR_WORK.facts.stepsOf(steps.length, PILLAR_INDEX.length)}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {steps.map((p) => (
          <li key={p.id}>
            <Link
              to={arPath(pillarPath(p.id))}
              className={cn(
                "inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 font-v4-sans text-sm transition-colors",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                tone === "dark"
                  ? "border-v4-ivory/30 text-v4-ivory hover:border-v4-ivory/70 focus-visible:outline-v4-signal"
                  : "border-v4-ink/25 text-v4-ink hover:border-v4-ink/70 focus-visible:outline-v4-ink"
              )}
            >
              <span className="sr-only">{AR_WORK.facts.step}</span>
              <SystemLabel className={muted(tone)}>{p.n}</SystemLabel>
              {AR_STEP_NAMES[p.id] ?? p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StatusLine({ c, tone }: { c: ArCase; tone: Tone }) {
  return (
    <>
      <span className={cn("font-medium", strong(tone))}>{c.status}</span>
      <span className={muted(tone)}> · {c.period}</span>
    </>
  );
}

export function ProjectLink({ c, className }: { c: ArCase; className?: string }) {
  if (!c.url) return null;
  const host = c.url.replace(/^https:\/\//, "");
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-[44px] items-center gap-1.5 font-v4-sans text-sm text-v4-ink underline underline-offset-4 hover:text-v4-ink/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink",
        className
      )}
    >
      {AR_WORK.visit} <span className="ltr-run">{host}</span>
      <span data-arrow aria-hidden="true">↗</span>
      <span className="sr-only">{AR_WORK.opensNewTab}</span>
    </a>
  );
}
