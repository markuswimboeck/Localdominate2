import { SystemLabel } from "@/components/v4/SystemLabel";
import { stepsOfCase } from "@/components/v4/work/caseSteps";
import { DE_WORK } from "@/data/de/work.de";
import type { DeCase } from "@/data/de/work.de";
import { Fact, ProjectLink, ScopeTags, StatusLine, StepLinks } from "./CasePartsDe";

const factColumn = "[&>div:first-child]:border-t-0";

/** Deutsche Fassung von CaseSection: ein Projekt als volle Sektion auf hellem Feld. */
export function CaseSectionDe({ c }: { c: DeCase }) {
  const hasSteps = stepsOfCase(c.id).length > 0;
  return (
    <article aria-labelledby={`case-${c.id}`} className="pt-14 first:pt-0 md:pt-20">
      <div className="flex flex-col gap-x-10 gap-y-3 border-b border-v4-ink/40 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SystemLabel
            as="p"
            className="inline-block rounded-full border border-v4-ink/25 px-3 py-2 text-v4-ink/70"
          >
            {c.kind}
          </SystemLabel>
          <h3
            id={`case-${c.id}`}
            className="mt-5 scroll-mt-28 font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.05] text-v4-ink"
          >
            {c.name}
          </h3>
        </div>
        <ProjectLink c={c} className="shrink-0 self-start md:self-auto" />
      </div>

      <div className="grid gap-x-20 lg:grid-cols-2">
        <dl className={factColumn}>
          <Fact label={DE_WORK.facts.task} tone="light" stacked>
            <span className="text-lg font-semibold leading-snug tracking-tight text-v4-ink">{c.title}</span>
          </Fact>
          <Fact label={DE_WORK.facts.built} tone="light" stacked>
            <span className="block max-w-xl">{c.summary}</span>
          </Fact>
          <Fact label={DE_WORK.facts.status} tone="light" stacked>
            <StatusLine c={c} tone="light" />
          </Fact>
        </dl>
        <dl className="lg:[&>div:first-child]:border-t-0">
          <Fact label={DE_WORK.facts.scope} tone="light" stacked>
            <ScopeTags c={c} tone="light" />
          </Fact>
          {hasSteps && (
            <Fact label={DE_WORK.facts.steps} tone="light" stacked>
              <StepLinks c={c} tone="light" />
            </Fact>
          )}
        </dl>
      </div>
    </article>
  );
}
