import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { TaskChip } from "@/components/v4/ai/TaskChip";
import { AI_ANCHORS } from "@/data/v4Ai";
import type { AiTexts, TaskClass } from "@/data/v4Ai";

/** Each service card carries a small row of chips, so the motif tells what the service does. */
const MOTIF: readonly (readonly TaskClass[])[] = [
  ["automate", "assist", "human"],
  ["assist", "automate", "automate"],
  ["assist", "assist", "assist"],
  ["automate", "assist", "human", "automate"],
];

/** WHAT WE DO. Four kinds of work in a two-by-two grid. */
export function AiServices({ t }: { t: AiTexts }) {
  return (
    <StateField field="light" as="section" id={AI_ANCHORS.services} aria-labelledby="ai-services" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {t.services.label}
            </SystemLabel>
            <h2
              id="ai-services"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ink"
            >
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">{t.services.text}</p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {t.services.items.map((item, i) => (
            <li
              key={item.title}
              className="group flex flex-col gap-5 rounded-[1.5rem] border border-v4-ink/12 bg-v4-white p-7 shadow-[0_1px_0_rgba(10,10,9,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(10,10,9,0.35)] md:p-9"
            >
              <div className="flex items-center justify-between gap-4">
                <SystemLabel className="text-v4-ink/55">
                  0{i + 1} · {item.kicker}
                </SystemLabel>
                <span className="flex gap-1.5" aria-hidden="true">
                  {MOTIF[i].map((cls, j) => (
                    <TaskChip key={j} cls={cls} surface="light" className="h-3 w-7 px-0 py-0" >
                      {""}
                    </TaskChip>
                  ))}
                </span>
              </div>
              <h3 className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight text-v4-ink">{item.title}</h3>
              <p className="font-v4-sans text-base leading-relaxed text-v4-ink/70">{item.body}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-v4-ink/15 px-3 py-1.5 font-v4-sans text-xs font-medium text-v4-ink/75"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-v4-ink/15 pt-10">
          <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-none tracking-[0.18em] text-v4-ink/60">
            {t.services.forLabel}
          </h3>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.audiences.map((audience) => (
              <li key={audience.title} className="flex flex-col gap-3">
                <h4 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{audience.title}</h4>
                <p className="font-v4-sans text-sm leading-relaxed text-v4-ink/70">{audience.body}</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {audience.tasks.map((task) => (
                    <li
                      key={task}
                      className="rounded-full border border-v4-ink/15 bg-v4-white px-3 py-1.5 font-v4-sans text-xs font-medium text-v4-ink/75"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StateField>
  );
}
