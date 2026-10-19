import { SystemLabel } from "@/components/v4/SystemLabel";
import { stepsOfCase } from "@/components/v4/work/caseSteps";
import { AR_WORK } from "@/data/ar/work.ar";
import type { ArCase } from "@/data/ar/work.ar";
import { DadicationFilmAr } from "./VideoPlayerAr";
import { Fact, ScopeTags, StatusLine, StepLinks } from "./CasePartsAr";

/** Arabic copy of FeaturedCase: the film first, then the facts. Grid order follows the DOM, so it mirrors in RTL. */
export function FeaturedCaseAr({ c }: { c: ArCase }) {
  const hasSteps = stepsOfCase(c.id).length > 0;
  return (
    <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="lg:col-span-2 xl:col-span-1">
        <DadicationFilmAr priority className="ring-1 ring-v4-ivory/10" />
        <p className="mt-4 max-w-xl font-v4-sans text-xs leading-relaxed text-v4-ivory/60">
          {AR_WORK.featuredCaption}
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
          <bdi lang="en">{c.name}</bdi>
        </h2>
        <dl className="mt-8 border-v4-ivory/15 lg:border-b xl:border-b-0">
          <Fact label={AR_WORK.facts.task} tone="dark">
            <span className="text-lg font-semibold leading-snug text-v4-ivory">{c.title}</span>
          </Fact>
          <Fact label={AR_WORK.facts.built} tone="dark">
            {c.summary}
          </Fact>
          <Fact label={AR_WORK.facts.status} tone="dark">
            <StatusLine c={c} tone="dark" />
          </Fact>
        </dl>
      </div>

      <dl className="-mt-10 border-b border-v4-ivory/15 lg:mt-0 lg:self-end xl:col-span-2 xl:grid xl:grid-cols-[1.25fr_0.75fr] xl:gap-x-16 xl:self-auto">
        <Fact label={AR_WORK.facts.scope} tone="dark">
          <ScopeTags c={c} tone="dark" />
        </Fact>
        {hasSteps && (
          <Fact label={AR_WORK.facts.steps} tone="dark">
            <StepLinks c={c} tone="dark" />
          </Fact>
        )}
      </dl>
    </div>
  );
}
