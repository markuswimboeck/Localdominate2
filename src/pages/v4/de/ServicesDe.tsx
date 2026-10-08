import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { FaqList } from "@/components/v4/PageFaq";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { FullProjectDe } from "@/components/v4/de/services/FullProjectDe";
import { OfferCardDe } from "@/components/v4/de/services/OfferCardDe";
import { OfferIndexDe } from "@/components/v4/de/services/OfferIndexDe";
import { SERVICES_DE, SERVICES_FAQ_DE } from "@/data/de/services.de";
import {
  CHECK_REPLY_TIME_DE,
  HERO_TERMS_DE,
  HOW_WE_WORK_DE,
  HOW_WE_WORK_NOTE_DE,
  OFFERS_DE,
  offerDeById,
} from "@/data/de/shared.de";
import type { OfferDe } from "@/data/de/shared.de";
import { faqEntries } from "@/data/v4Faq";
import { HERO_OFFER_ORDER } from "@/data/v4HomeData";
import { OFFERS } from "@/data/v4Offers";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { alternatesFor, dePath } from "@/lib/v4Locale";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/de/services`;
const T = SERVICES_DE;

/** The numeric starting price comes from the English source ("from 390 €" -> 390), so all languages always agree. */
const minPriceOf = (price: string): number => Number(price.replace(/[^\d,]/g, "").replace(",", ""));

const offerToJsonLd = (offer: OfferDe, englishPrice: string) => ({
  "@type": "Offer",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "EUR",
    minPrice: minPriceOf(englishPrice),
  },
  itemOffered: {
    "@type": "Service",
    name: offer.name,
    description: offer.summary,
    provider: { "@id": `${SITE}/#organization` },
  },
});

/** Mirrors the English @graph: same offer order (v4Offers.ts), same prices, plus a breadcrumb. */
const SERVICES_DE_JSON_LD = {
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
      inLanguage: "de",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: T.seo.breadcrumbHome, item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: T.seo.breadcrumbPage, item: PAGE_URL },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": `${PAGE_URL}#offers`,
      name: T.seo.catalogName,
      inLanguage: "de",
      itemListElement: OFFERS.flatMap((o) => {
        const de = offerDeById(o.id);
        return de ? [offerToJsonLd(de, o.price)] : [];
      }),
    },
    // Same array as the visible list under "Kurze Antworten".
    { ...faqPageJsonLd(PAGE_URL, faqEntries(SERVICES_FAQ_DE)), inLanguage: "de" },
  ],
};

/** Display order: the same as the English page (largest scope first). */
const offersInDisplayOrder: readonly OfferDe[] = [
  ...HERO_OFFER_ORDER.flatMap((id) => OFFERS_DE.filter((o) => o.id === id)),
  ...OFFERS_DE.filter((o) => !(HERO_OFFER_ORDER as readonly string[]).includes(o.id)),
];

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "inline-flex min-h-[44px] items-center font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4, German: Services (/de/services). Same sections, order, anchors and classes as
 * ServicesV4. Reused English components: HowWeWork (items and note passed in), FaqList (no fixed
 * text), StateField, SystemLabel, CheckButton and BookCallButton (German on /de paths).
 */
export default function ServicesDe() {
  return (
    <V4Page>
      <SEOHead
        ogImage={`${SITE}/images/v4/social/ld-social-services-1200x630.jpg`}
        title={T.seo.title}
        description={T.seo.description}
        canonicalUrl={PAGE_URL}
        alternateUrls={alternatesFor("/services")}
        lang="de"
        exactTitle
        jsonLd={SERVICES_DE_JSON_LD}
      />

      {/* 01 HERO: what can be ordered, what it costs, the one action */}
      <StateField field="dark" as="section" aria-labelledby="services-hero">
        <div className="mx-auto grid w-full max-w-[1300px] gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-7">
            <SystemLabel as="p" className="text-v4-ivory/60">
              {T.hero.label}
            </SystemLabel>
            <h1
              id="services-hero"
              className="font-v4-sans text-[length:clamp(2.75rem,1.4rem+3.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
            >
              {T.hero.h1[0]}
              <br />
              {T.hero.h1[1]}
              <br />
              {T.hero.h1[2]}
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {T.hero.pBefore}
              {CHECK_REPLY_TIME_DE}
              {T.hero.pAfter}
            </p>
            <div className="flex flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {HERO_TERMS_DE.map((term) => (
                <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
          <OfferIndexDe offers={offersInDisplayOrder} />
        </div>
      </StateField>

      {/* 02 THE OFFERS: one rate card, four rows */}
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
              <OfferCardDe key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </StateField>

      {/* 03 THE FULL PROJECT: no price, scope in writing */}
      <StateField field="light" as="section" aria-labelledby="services-full-project">
        <div className="mx-auto max-w-[1300px] px-6 pb-20 md:px-10 md:pb-28">
          <FullProjectDe />
        </div>
      </StateField>

      {/* 04 HOW WE WORK: the terms, once */}
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
            <Link to={dePath("/work")} className={`${textLink} mt-6 text-v4-ink/70`}>
              {T.how.link} →
            </Link>
          </div>
          <HowWeWork items={HOW_WE_WORK_DE} note={HOW_WE_WORK_NOTE_DE} />
        </div>
      </StateField>

      {/* 05 SHORT ANSWERS: only confirmed terms */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="services-faq">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            {T.faq.label}
          </SystemLabel>
          <h2 id="services-faq" className={`${h2Serif} max-w-2xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            {T.faq.h2}
          </h2>
          <div className="mt-12">
            <FaqList items={SERVICES_FAQ_DE} />
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
            {CHECK_REPLY_TIME_DE}
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
