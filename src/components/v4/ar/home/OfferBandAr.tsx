import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { HOME_AR, OFFERS_AR } from "@/data/ar/home.ar";
import { arPath } from "@/lib/v4Locale";

/** Arabic hero band "what you can order". Mirrors OfferBand (columns run right to left). */
export function OfferBandAr() {
  const t = HOME_AR.offerBand;
  return (
    <aside aria-labelledby="hero-offers" className="border-t border-v4-ivory/15">
      <div className="mx-auto grid max-w-[1400px] gap-x-8 px-6 py-7 md:px-10 lg:grid-cols-[1.25fr_repeat(4,1fr)] lg:py-8">
        <div className="pb-6 lg:pb-0 lg:pe-4">
          <SystemLabel as="p" id="hero-offers" className="text-v4-ivory/60">
            {t.label}
          </SystemLabel>
          <p className="mt-3 font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.1] text-v4-ivory">
            {t.fullTitle}
          </p>
          <p className="mt-2 max-w-xs font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{t.fullBody}</p>
        </div>
        {OFFERS_AR.map((offer) => (
          <Link
            key={offer.id}
            to={arPath("/services")}
            className="group flex min-h-[44px] items-baseline justify-between gap-4 border-t border-v4-ivory/15 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal lg:flex-col lg:justify-start lg:gap-2 lg:border-s lg:border-t-0 lg:py-0 lg:ps-6"
          >
            <span>
              <span className="block font-v4-sans text-sm font-semibold text-v4-ivory group-hover:underline lg:text-base">
                {offer.name}
              </span>
              <span className="mt-1 block font-v4-sans text-xs text-v4-ivory/60">
                {offer.delivery ? `${t.delivery} ${offer.delivery}` : t.fixedPrice}
              </span>
            </span>
            <span className="shrink-0 font-v4-serif text-2xl text-v4-ivory lg:mt-auto lg:pt-2 lg:text-3xl">
              {offer.pricePrefix && <span className="me-1.5 font-v4-sans text-xs text-v4-ivory/60">{offer.pricePrefix}</span>}
              <span className="ltr-run">{offer.price}</span>
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
