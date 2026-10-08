import { SystemLabel } from "@/components/v4/SystemLabel";
import { stepsOfCase } from "@/components/v4/work/caseSteps";
import { DE_WORK } from "@/data/de/work.de";
import type { DeCase } from "@/data/de/work.de";
import { DadicationFilmDe } from "./VideoPlayerDe";
import { Fact, ScopeTags, StatusLine, StepLinks } from "./CasePartsDe";

/** Deutsche Fassung von FeaturedCase: erst der Film, dann die Fakten. Layout wie im Englischen. */
export function FeaturedCaseDe({ c }: { c: DeCase }) {
  const hasSteps = stepsOfCase(c.id).length > 0;
  return (
    <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="lg:col-span-2 xl:col-span-1">
        <DadicationFilmDe priority className="ring-1 ring-v4-ivory/10" />
        <p className="mt-4 max-w-xl font-v4-sans text-xs leading-relaxed text-v4-ivory/60">
          {DE_WORK.featuredCaption}
        </p>
      </div>

      <div>
        <SystemLabel
          as="p"
          className="inline-block rounded-full border border-v4-ivory/30 px-3 py-2 text-v4-ivory/70"
        >
          {c.kind}
        </SystemLabel>
        <h2
          id="work-featured"
          className="mt-5 scroll-mt-28 font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-none text-v4-ivory"
        >
          {c.name}
        </h2>
        <dl className="mt-8 border-v4-ivory/15 lg:border-b xl:border-b-0">
          <Fact label={DE_WORK.facts.task} tone="dark" stacked>
            <span className="text-lg font-semibold leading-snug tracking-tight text-v4-ivory">{c.title}</span>
          </Fact>
          <Fact label={DE_WORK.facts.built} tone="dark" stacked>
            {c.summary}
          </Fact>
          <Fact label={DE_WORK.facts.status} tone="dark" stacked>
            <StatusLine c={c} tone="dark" />
          </Fact>
        </dl>
      </div>

      <dl className="-mt-10 border-b border-v4-ivory/15 lg:mt-0 lg:self-end xl:col-span-2 xl:grid xl:grid-cols-[1.25fr_0.75fr] xl:gap-x-16 xl:self-auto">
        <Fact label={DE_WORK.facts.scope} tone="dark" stacked>
          <ScopeTags c={c} tone="dark" />
        </Fact>
        {hasSteps && (
          <Fact label={DE_WORK.facts.steps} tone="dark" stacked>
            <StepLinks c={c} tone="dark" />
          </Fact>
        )}
      </dl>
    </div>
  );
}
