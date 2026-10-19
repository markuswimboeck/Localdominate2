import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { FaqList } from "@/components/v4/PageFaq";
import { FullProjectAr } from "@/components/v4/ar/services/FullProjectAr";
import { OfferCardAr } from "@/components/v4/ar/services/OfferCardAr";
import { OfferIndexAr } from "@/components/v4/ar/services/OfferIndexAr";
import {
  CHECK_REPLY_TIME_AR,
  HERO_TERMS_AR,
  HOW_WE_WORK_AR,
  HOW_WE_WORK_NOTE_AR,
  OFFERS_AR,
  SERVICES_AR,
  SERVICES_FAQ_AR,
  offerNameAr,
} from "@/data/ar/services.ar";
import type { OfferAr } from "@/data/ar/services.ar";
import { faqEntries } from "@/data/v4Faq";
import { HERO_OFFER_ORDER } from "@/data/v4HomeData";
import { OFFERS } from "@/data/v4Offers";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { arPath } from "@/lib/v4Locale";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/ar/services`;
const EN_URL = `${SITE}/services`;
const T = SERVICES_AR;

/** The numeric starting price comes from the English source ("from 390 €" -> 390), so both pages always agree. */
const minPriceOf = (price: string): number => Number(price.replace(/[^\d,]/g, "").replace(",", ""));
const englishPrice = (id: string): string => OFFERS.find((o) => o.id === id)?.price ?? "";

const offerToJsonLd = (offer: OfferAr) => ({
  "@type": "Offer",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "EUR",
    minPrice: minPriceOf(englishPrice(offer.id)),
  },
  itemOffered: {
    "@type": "Service",
    name: offerNameAr(offer),
    description: offer.summary,
    provider: { "@id": `${SITE}/#organization` },
  },
});

/** Mirrors the English @graph: same offer order (v4Offers.ts), same prices, plus a breadcrumb. */
const SERVICES_AR_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: T.seo.pageName,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      dateModified: SEO_DATE_MODIFIED,
      inLanguage: "ar",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: T.seo.breadcrumbHome, item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: T.seo.breadcrumbPage, item: PAGE_URL },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: T.seo.catalogName,
      inLanguage: "ar",
      itemListElement: OFFERS.map((o) => offerToJsonLd(OFFERS_AR.find((a) => a.id === o.id) as OfferAr)),
    },
    // Same array as the visible list under "إجابات قصيرة".
    { ...faqPageJsonLd(PAGE_URL, faqEntries(SERVICES_FAQ_AR)), inLanguage: "ar" },
  ],
};

/** Display order: the same as the English page (largest scope first). */
const offersInDisplayOrder: readonly OfferAr[] = [
  ...HERO_OFFER_ORDER.flatMap((id) => OFFERS_AR.filter((o) => o.id === id)),
  ...OFFERS_AR.filter((o) => !(HERO_OFFER_ORDER as readonly string[]).includes(o.id)),
];

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "inline-flex min-h-[44px] items-center gap-2 font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4, Arabic: Services (/ar/services). Same sections, order and anchors as ServicesV4.
 * Reused English components: HowWeWork (text passed in), FaqList (no fixed text), StateField,
 * SystemLabel, CheckButton, BookCallButton (all switch to Arabic on /ar paths or take props).
 */
export default function ServicesAr() {
  return (
    <V4Page>
      <SEOHead
        ogImage={`${SITE}/images/v4/social/ld-social-services-1200x630.jpg`}
        title={T.seo.title}
        description={T.seo.description}
        canonicalUrl={PAGE_URL}
        alternateUrls={{ en: EN_URL, ar: PAGE_URL }}
        lang="ar"
        exactTitle
        jsonLd={SERVICES_AR_JSON_LD}
      />

      {/* 01 HERO */}
      <StateField field="dark" as="section" aria-labelledby="services-hero">
        <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-7">
            <SystemLabel as="p" className="text-v4-ivory/60">
              {T.hero.label}
            </SystemLabel>
            <h1
              id="services-hero"
              className="font-v4-sans text-[length:clamp(2.5rem,1.4rem+3vw,4.25rem)] font-extrabold text-v4-ivory"
            >
              {T.hero.h1[0]}
              <br />
              {T.hero.h1[1]}
              <br />
              {T.hero.h1[2]}
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {T.hero.pBefore}
              {CHECK_REPLY_TIME_AR}
              {T.hero.pAfter}
            </p>
            <div className="flex flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {HERO_TERMS_AR.map((term) => (
                <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
          <OfferIndexAr offers={offersInDisplayOrder} />
        </div>
      </StateField>

      {/* 02 THE OFFERS */}
      <StateField field="light" as="section" id="offers" aria-labelledby="services-offers">
        <div className="mx-auto max-w-[1300px] px-6 pb-10 pt-20 md:px-10 md:pb-12 md:pt-28">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                {T.offers.label}
              </SystemLabel>
              <h2 id="services-offers" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                {T.offers.h2}
              </h2>
            </div>
            <p className="max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{T.offers.p}</p>
          </div>
          <div className="mt-12 flex flex-col gap-5">
            {offersInDisplayOrder.map((offer) => (
              <OfferCardAr key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </StateField>

      {/* 03 THE FULL PROJECT */}
      <StateField field="light" as="section" aria-labelledby="services-full-project">
        <div className="mx-auto max-w-[1300px] px-6 pb-20 md:px-10 md:pb-28">
          <FullProjectAr />
        </div>
      </StateField>

      {/* 04 HOW WE WORK */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="services-how">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              {T.how.label}
            </SystemLabel>
            <h2 id="services-how" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
              {T.how.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{T.how.p}</p>
            <Link to={arPath("/work")} className={`${textLink} mt-6 text-v4-ink/70`}>
              {T.how.link}
              <span data-arrow aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <div>
            {/* The note is rendered here (not via HowWeWork's `note` string) so the price can sit in an LTR run. */}
            <HowWeWork items={HOW_WE_WORK_AR} note="" />
            <p className="border-t border-v4-ink/15 pt-5 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
              {HOW_WE_WORK_NOTE_AR.before}
              <span className="ltr-run">{HOW_WE_WORK_NOTE_AR.latin}</span>
              {HOW_WE_WORK_NOTE_AR.mid}
              <span className="ltr-run">{HOW_WE_WORK_NOTE_AR.price}</span>
              {HOW_WE_WORK_NOTE_AR.after}
            </p>
          </div>
        </div>
      </StateField>

      {/* 05 SHORT ANSWERS */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="services-faq">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            {T.faq.label}
          </SystemLabel>
          <h2 id="services-faq" className={`${h2Serif} max-w-2xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            {T.faq.h2}
          </h2>
          <div className="mt-12">
            <FaqList items={SERVICES_FAQ_AR} />
          </div>
        </div>
      </StateField>

      {/* 06 THE INVITATION */}
      <StateField field="dark" as="section" aria-labelledby="services-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="services-start" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            {T.start.h2}
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {T.start.pBefore}
            {CHECK_REPLY_TIME_AR}
            {T.start.pAfter}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
