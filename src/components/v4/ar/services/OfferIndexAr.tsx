import { SystemLabel } from "@/components/v4/SystemLabel";
import { SERVICES_AR } from "@/data/ar/services.ar";
import type { OfferAr } from "@/data/ar/services.ar";

/** Arabic copy of services/OfferIndex: the hero's price list, each row a jump link to its card. */
export function OfferIndexAr({ offers }: { offers: readonly OfferAr[] }) {
  return (
    <nav aria-labelledby="services-index">
      <SystemLabel as="p" id="services-index" className="text-v4-ivory/60">
        {SERVICES_AR.hero.indexLabel}
      </SystemLabel>
      <ul className="mt-5 border-t border-v4-ivory/15">
        {offers.map((offer) => (
          <li key={offer.id} className="border-b border-v4-ivory/15">
            <a
              href={`#offer-${offer.id}`}
              className="group flex min-h-[44px] items-baseline justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              <span>
                <span className="block font-v4-sans text-lg font-semibold leading-tight text-v4-ivory group-hover:underline group-hover:underline-offset-4">
                  {offer.name}
                  <span lang="en" className="mt-1 block text-start text-sm font-normal text-v4-ivory/60">
                    {offer.original}
                  </span>
                </span>
                {(offer.delivery || offer.priceNote) && (
                  <span className="mt-1.5 block font-v4-sans text-sm text-v4-ivory/60">
                    {offer.delivery ? (
                      `${SERVICES_AR.hero.delivery}${offer.delivery}`
                    ) : (
                      <>
                        {offer.priceNote?.replace(/ \d.*$/, " ")}
                        <span className="ltr-run">{offer.priceNote?.match(/\d.*$/)?.[0]}</span>
                      </>
                    )}
                  </span>
                )}
              </span>
              <span className="shrink-0 whitespace-nowrap text-end font-v4-serif text-2xl text-v4-ivory md:text-[1.75rem]">
                {offer.pricePrefix && (
                  <span className="block font-v4-sans text-sm font-medium text-v4-ivory/60">{offer.pricePrefix.trim()}</span>
                )}
                <span className="ltr-run">{offer.priceFigure}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
