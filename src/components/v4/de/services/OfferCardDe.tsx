import { CheckButton } from "@/components/v4/CheckButton";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { SERVICES_DE } from "@/data/de/services.de";
import type { OfferDe } from "@/data/de/shared.de";

/** "ab 1.490 €": only the word "ab" is set smaller than the figure, as "from" on the English card. */
function Price({ offer }: { offer: OfferDe }) {
  return (
    <p className="whitespace-nowrap font-v4-serif text-[2.75rem] leading-none text-v4-ink lg:text-5xl">
      {offer.pricePrefix && (
        <span className="font-v4-sans text-base font-medium text-v4-ink/70">{offer.pricePrefix}</span>
      )}
      {offer.priceFigure}
    </p>
  );
}

/**
 * German copy of services/OfferCard. Same markup, classes and `offer-<id>` anchors as the English
 * card. All offer texts come from shared.de.ts (OFFERS_DE), the three labels from services.de.ts.
 */
export function OfferCardDe({ offer }: { offer: OfferDe }) {
  const t = SERVICES_DE.offers;
  return (
    <article
      aria-labelledby={`offer-${offer.id}`}
      className="flex flex-col gap-6 rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-8 lg:grid lg:grid-cols-[1fr_1.1fr_17rem] lg:gap-0 lg:p-10"
    >
      <div className="contents lg:block lg:pr-12">
        <div className="order-1">
          <h3
            id={`offer-${offer.id}`}
            className="scroll-mt-28 font-v4-sans text-2xl font-semibold leading-tight tracking-tight text-v4-ink"
          >
            {offer.name}
          </h3>
          <p className="mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/70">{offer.summary}</p>
        </div>
        <p className="order-4 font-v4-sans text-sm leading-relaxed text-v4-ink/70 lg:mt-6">
          <span className="font-medium text-v4-ink">{t.bestFor}</span>
          {offer.bestFor}
        </p>
      </div>

      <div className="order-3 lg:order-none lg:border-l lg:border-v4-ink/10 lg:px-12">
        <SystemLabel as="p" className="text-v4-ink/60">
          {t.included}
        </SystemLabel>
        <ul className="mt-4 border-b border-v4-ink/10">
          {offer.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-t border-v4-ink/10 py-3 font-v4-sans text-sm leading-relaxed text-v4-ink/80"
            >
              <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="contents lg:flex lg:flex-col lg:justify-between lg:gap-8 lg:border-l lg:border-v4-ink/10 lg:pl-10">
        <div className="order-2 flex items-end justify-between gap-4 border-y border-v4-ink/10 py-5 lg:block lg:border-y-0 lg:py-0">
          <div>
            <Price offer={offer} />
            {offer.priceNote && <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">{offer.priceNote}</p>}
          </div>
          {offer.delivery && (
            <dl className="shrink-0 text-right lg:mt-6 lg:text-left">
              <dt>
                <SystemLabel className="text-v4-ink/60">{t.delivery}</SystemLabel>
              </dt>
              <dd className="mt-2 font-v4-sans text-lg font-semibold leading-none tracking-tight text-v4-ink">
                {offer.delivery}
              </dd>
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
