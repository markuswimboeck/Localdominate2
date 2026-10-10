import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton } from "@/components/v4/creators/AnchorButton";
import { BAR_FILL, ClassDot } from "@/components/v4/ai/TaskChip";
import { cn } from "@/lib/utils";
import { AI_ANCHORS, DEFAULT_SAVING, TASK_CLASS_ORDER, selectAiOption } from "@/data/v4Ai";
import type { AiTexts } from "@/data/v4Ai";

/**
 * HERO. Claim and actions on the left, on the right an example task map for one role: a bar for
 * the week split by class, the tasks as rows and the hours that come back. Static on purpose, so
 * it reads the same in the prerender, without JavaScript and with reduced motion. The live,
 * editable version is the calculator further down.
 */
export function AiHero({ t }: { t: AiTexts }) {
  const { card } = t.hero;
  const total = card.tasks.reduce((sum, task) => sum + task.hours, 0);
  const byClass = TASK_CLASS_ORDER.map((cls) => ({
    cls,
    hours: card.tasks.filter((task) => task.cls === cls).reduce((sum, task) => sum + task.hours, 0),
  }));
  const freed = card.tasks.reduce((sum, task) => sum + (task.hours * DEFAULT_SAVING[task.cls]) / 100, 0);

  return (
    <StateField field="dark" as="section" aria-labelledby="ai-hero" className="relative overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-v4-cobalt/20 blur-[120px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-v4-signal/10 blur-[110px]"
      />
      <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-7">
          <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
            {t.hero.label}
          </SystemLabel>
          <h1
            id="ai-hero"
            className="font-v4-sans text-[length:clamp(min(2.4rem,10vw),1.1rem+3vw,4.25rem)] font-extrabold leading-[1] tracking-tight text-v4-ivory"
          >
            <span className="block text-balance">{t.hero.titleLines[0]}</span>{" "}
            <span className="mt-2 block text-balance font-v4-serif font-normal italic tracking-normal text-v4-signal">
              {t.hero.titleLines[1]}
            </span>
          </h1>
          <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/75">
            {t.hero.text}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <AnchorButton
              href={`#${AI_ANCHORS.form}`}
              onClick={() => selectAiOption({ option: t.ladder.tiers[0].option })}
            >
              {t.hero.primary}
            </AnchorButton>
            <AnchorButton href={`#${AI_ANCHORS.map}`} tone="outline">
              {t.hero.secondary}
            </AnchorButton>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {t.hero.terms.map((term) => (
              <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/65">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                {term}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="rounded-[1.75rem] border border-v4-ivory/15 bg-[#121211]/90 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-inset ring-white/5 backdrop-blur sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <SystemLabel as="p" className="text-v4-ivory/50">
                  {card.label}
                </SystemLabel>
                <p className="mt-3 font-v4-serif text-[1.75rem] leading-none text-v4-ivory sm:text-[2rem]">{card.role}</p>
                <p className="mt-2 font-v4-sans text-sm text-v4-ivory/55">{card.week}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-v4-ivory/15 font-v4-mono text-[11px] text-v4-ivory/60"
              >
                {total}h
              </span>
            </div>

            {/* the week, split by class */}
            <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-v4-ivory/10" aria-hidden="true">
              {byClass.map(({ cls, hours }) => (
                <span key={cls} className={cn("h-full", BAR_FILL[cls])} style={{ width: `${(hours / total) * 100}%` }} />
              ))}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {TASK_CLASS_ORDER.map((cls) => (
                <li key={cls} className="flex items-center gap-1.5 font-v4-sans text-[11px] text-v4-ivory/60">
                  <ClassDot cls={cls} className="h-2 w-2 text-v4-ivory/60" />
                  {card.legend[cls]}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-col">
              {card.tasks.map((task) => (
                <li
                  key={task.name}
                  className="flex items-center justify-between gap-3 border-t border-v4-ivory/10 py-2.5 font-v4-sans text-sm text-v4-ivory/85"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <ClassDot cls={task.cls} className="text-v4-ivory/60" />
                    <span className="truncate">{task.name}</span>
                  </span>
                  <span className="font-v4-mono text-xs tabular-nums text-v4-ivory/50">{task.hours} h</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-baseline justify-between gap-4 rounded-2xl bg-v4-signal px-5 py-4 text-v4-ink">
              <span className="font-v4-sans text-sm font-medium">{card.result}</span>
              <span className="font-v4-sans text-3xl font-extrabold tabular-nums tracking-tight">
                {Math.round(freed)}
                <span className="ml-0.5 text-base font-semibold">h</span>
              </span>
            </div>
          </div>
          <figcaption className="mt-4 text-center font-v4-sans text-xs text-v4-ivory/50">{card.caption}</figcaption>
        </figure>
      </div>
    </StateField>
  );
}
