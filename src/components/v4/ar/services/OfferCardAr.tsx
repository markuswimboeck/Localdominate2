import { CheckButton } from "@/components/v4/CheckButton";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { SERVICES_AR } from "@/data/ar/services.ar";
import type { OfferAr } from "@/data/ar/services.ar";

/** "ابتداءً من" is set smaller than the figure; the figure stays left-to-right ("1,490 €"). */
function Price({ offer }: { offer: OfferAr }) {
  return (
    <p className="font-v4-serif text-[2.75rem] leading-none text-v4-ink lg:text-5xl">
      {offer.pricePrefix && (
        <span className="mb-1 block font-v4-sans text-base font-medium text-v4-ink/70">{offer.pricePrefix.trim()}</span>
      )}
      <span className="ltr-run whitespace-nowrap">{offer.priceFigure}</span>
    </p>
  );
}

/**
 * Arabic copy of services/OfferCard. Same structure and same `offer-<id>` anchors. Physical
 * left/right classes replaced by logical ones, so the three columns and their dividers mirror.
 */
export function OfferCardAr({ offer }: { offer: OfferAr }) {
  const t = SERVICES_AR.offers;
  return (
    <article
      aria-labelledby={`offer-${offer.id}`}
      className="flex flex-col gap-6 rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-8 lg:grid lg:grid-cols-[1fr_1.1fr_17rem] lg:gap-0 lg:p-10"
    >
      <div className="contents lg:block lg:pe-12">
        <div className="order-1">
          <h3
            id={`offer-${offer.id}`}
            className="scroll-mt-28 font-v4-sans text-2xl font-semibold leading-tight text-v4-ink"
          >
            {offer.name}
            <span lang="en" className="mt-1.5 block text-start text-base font-normal text-v4-ink/60">
              {offer.original}
            </span>
          </h3>
          <p className="mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/70">{offer.summary}</p>
        </div>
        <p className="order-4 font-v4-sans text-sm leading-relaxed text-v4-ink/70 lg:mt-6">
          <span className="font-medium text-v4-ink">{t.bestFor}</span>
          {offer.bestFor}
        </p>
      </div>

      <div className="order-3 lg:order-none lg:border-s lg:border-v4-ink/10 lg:px-12">
        <SystemLabel as="p" className="text-v4-ink/60">
          {t.included}
        </SystemLabel>
        <ul className="mt-4 border-b border-v4-ink/10">
          {offer.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-v4-ink/10 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80"
            >
              <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="contents lg:flex lg:flex-col lg:justify-between lg:gap-8 lg:border-s lg:border-v4-ink/10 lg:ps-10">
        <div className="order-2 flex items-end justify-between gap-4 border-y border-v4-ink/10 py-5 lg:block lg:border-y-0 lg:py-0">
          <div>
            <Price offer={offer} />
            {offer.priceNote && (
              <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">
                {offer.priceNote.replace(/ \d.*$/, " ")}
                <span className="ltr-run">{offer.priceNote.match(/\d.*$/)?.[0]}</span>
              </p>
            )}
          </div>
          {offer.delivery && (
            <dl className="shrink-0 text-end lg:mt-6 lg:text-start">
              <dt>
                <SystemLabel className="text-v4-ink/60">{t.delivery}</SystemLabel>
              </dt>
              <dd className="mt-2 font-v4-sans text-lg font-semibold leading-none text-v4-ink">{offer.delivery}</dd>
            </dl>
          )}
        </div>
        <div className="order-5">
          <CheckButton className="w-full" />
        </div>
      </div>
    </article>
  );
}
