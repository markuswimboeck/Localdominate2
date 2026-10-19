import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AI_ANCHORS } from "@/data/v4Ai";
import type { AiTexts } from "@/data/v4Ai";

/** WHY ROLL-OUTS STALL. The problem in three plain points, then the turn to the task map. */
export function AiShift({ t }: { t: AiTexts }) {
  return (
    <StateField field="light" as="section" aria-labelledby="ai-shift">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {t.shift.label}
            </SystemLabel>
            <h2
              id="ai-shift"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ink"
            >
              {t.shift.title}
            </h2>
          </div>
          <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">{t.shift.text}</p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-v4-ink/15 bg-v4-ink/15 md:grid-cols-3">
          {t.shift.points.map((point, i) => (
            <li key={point.title} className="flex flex-col gap-4 bg-v4-ivory p-7 md:p-8">
              <span className="font-v4-mono text-[length:var(--v4-text-label)] tracking-[0.18em] text-v4-coral">0{i + 1}</span>
              <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{point.title}</h3>
              <p className="font-v4-sans text-base leading-relaxed text-v4-ink/70">{point.body}</p>
            </li>
          ))}
        </ol>

        <a
          href={`#${AI_ANCHORS.map}`}
          className="group mt-10 inline-flex min-h-[44px] items-center gap-3 font-v4-sans text-lg font-semibold tracking-tight text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink"
        >
          <span className="underline decoration-v4-signal decoration-[3px] underline-offset-[6px]">{t.shift.turn}</span>
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
        </a>
      </div>
    </StateField>
  );
}
