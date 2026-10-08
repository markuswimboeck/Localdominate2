import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { WorldVisualAr } from "@/components/v4/ar/industries/WorldVisualAr";
import { AR_OFFERS, AR_STEP_QUESTIONS, WORLD_AR } from "@/data/ar/industries.ar";
import type { ArWorld } from "@/data/ar/industries.ar";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { pillarById, pillarPath } from "@/data/v4PillarIndex";
import { arPath } from "@/lib/v4Locale";

/**
 * Arabic copy of WorldSection. All four worlds are rendered one after the other (no tabs). The
 * timeline of checks and the bullets use logical utilities, so they sit on the right in RTL.
 */

const h3Class = "font-v4-sans text-xl font-semibold tracking-tight text-v4-ink";
const textLink =
  "font-v4-sans text-sm font-medium underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

function OfferCard({ offerId, why, headingId }: { offerId: string; why: string; headingId: string }) {
  const offer = AR_OFFERS[offerId];
  if (!offer) return null;
  return (
    <article aria-labelledby={headingId} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-7">
      <SystemLabel as="p" className="text-v4-ink/60">
        {WORLD_AR.offerLabel}
      </SystemLabel>
      <h4 id={headingId} className="mt-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">
        {offer.name}
      </h4>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-v4-serif text-3xl leading-none text-v4-ink">
          {offer.pricePrefix && <span className="text-2xl">{offer.pricePrefix} </span>}
          <span className="ltr-run">{offer.price}</span>
        </span>
        {offer.priceNote && (
          <span className="font-v4-sans text-sm text-v4-ink/70">
            {offer.priceNote.label} <span className="ltr-run">{offer.priceNote.amount}</span>
          </span>
        )}
      </p>
      {offer.delivery && (
        <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">
          {WORLD_AR.delivery} {offer.delivery}
        </p>
      )}
      <p className="mt-5 border-t border-v4-ink/10 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/70">{why}</p>
      <Link to={arPath("/services")} className={`${textLink} mt-auto self-start pt-6 text-v4-ink focus-visible:outline-v4-ink`}>
        {WORLD_AR.fullScope}
      </Link>
    </article>
  );
}

export function WorldSectionAr({ world, children }: { world: ArWorld; children?: React.ReactNode }) {
  const titleId = `${world.id}-title`;
  const step = pillarById(world.step.id);
  const stepName = step ? (AR_STEP_NAMES[step.id] ?? step.name) : "";

  return (
    <section id={world.id} aria-labelledby={titleId} className="scroll-mt-[114px] lg:scroll-mt-[130px]">
      <StateField field="light" as="div" className="border-t border-v4-ink/10">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-5 border-b border-v4-ink/15 pb-8 md:flex-row-reverse md:items-end md:justify-between md:gap-10 md:pb-10">
            <SystemLabel as="p" className="leading-relaxed text-v4-ink/60 md:max-w-xs md:pb-2 md:text-end">
              {world.descriptor}
            </SystemLabel>
            <h2
              id={titleId}
              className="font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1] text-v4-ink"
            >
              {world.name}
            </h2>
          </div>

          <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start lg:block">
              <div>
                <p className="text-balance font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.12] text-v4-ink">
                  {world.claim}
                </p>
                <p className="mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
                  {world.situation}
                </p>
              </div>
              <div className="lg:mt-10">
                <WorldVisualAr kind={world.visual} />
              </div>
            </div>

            <div className="flex flex-col gap-14">
              <div>
                <h3 className={h3Class}>{WORLD_AR.checks}</h3>
                <ol className="mt-7 flex flex-col">
                  {world.checks.map((check, i) => (
                    <li key={check.where} className="relative pb-7 ps-9 last:pb-0">
                      {i < world.checks.length - 1 && (
                        <span aria-hidden="true" className="absolute bottom-0 start-[5px] top-3 w-px bg-v4-ink/20" />
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute start-0 top-[7px] h-[11px] w-[11px] rounded-full border-[1.5px] border-v4-ink bg-v4-ivory"
                      />
                      <SystemLabel as="p" className="leading-relaxed text-v4-ink/60">
                        {check.where}
                      </SystemLabel>
                      <p className="mt-2 max-w-xl font-v4-sans text-base leading-relaxed text-v4-ink">{check.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-8">
                <h3 className={h3Class}>{WORLD_AR.builds}</h3>
                <ul className="mt-5 flex flex-col">
                  {world.builds.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-t border-v4-ink/10 py-4 font-v4-sans text-base leading-relaxed text-v4-ink last:pb-0"
                    >
                      <span aria-hidden="true" className="mt-[0.9rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
                {world.buildNote && (
                  <p className="mt-5 border-t border-v4-ink/10 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/70">
                    {world.buildNote}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <h3 className={h3Class}>{WORLD_AR.start}</h3>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {world.offers.map(({ offerId, why }) => (
                <OfferCard key={offerId} offerId={offerId} why={why} headingId={`${world.id}-offer-${offerId}`} />
              ))}
              {step && (
                <article
                  aria-labelledby={`${world.id}-step`}
                  className="flex flex-col rounded-2xl bg-v4-ink p-6 text-v4-ivory md:col-span-2 md:p-7 lg:col-span-1"
                >
                  <SystemLabel as="p" className="text-v4-ivory/60">
                    {WORLD_AR.stepLabel}
                  </SystemLabel>
                  <h4 id={`${world.id}-step`} className="mt-4 flex items-baseline gap-3">
                    <span dir="ltr" className="font-v4-mono text-sm tracking-[0.18em] text-v4-signal">
                      {step.n}
                    </span>
                    <span className="font-v4-serif text-3xl leading-none text-v4-ivory">{stepName}</span>
                  </h4>
                  <p className="mt-3 font-v4-sans text-sm font-medium leading-snug text-v4-ivory">
                    {AR_STEP_QUESTIONS[step.id] ?? step.question}
                  </p>
                  <p className="mt-5 border-t border-v4-ivory/15 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
                    {world.step.why}
                  </p>
                  <Link
                    to={arPath(pillarPath(step.id))}
                    className={`${textLink} mt-auto self-start pt-6 text-v4-ivory focus-visible:outline-v4-signal`}
                  >
                    {WORLD_AR.readStep} <span dir="ltr">{step.n}</span>: {stepName}
                  </Link>
                </article>
              )}
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-v4-ink/15 pt-8 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="max-w-2xl font-v4-sans text-base leading-relaxed text-v4-ink">
                {world.checkLine} {WORLD_AR.checkSuffix}
              </p>
              <CheckButton className="shrink-0 self-start md:self-auto" />
            </div>
          </div>
        </div>
      </StateField>
      {children}
    </section>
  );
}
