import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { WorldNavDe } from "@/components/v4/de/industries/WorldNavDe";
import { WorldSectionDe } from "@/components/v4/de/industries/WorldSectionDe";
import { CommissionCalculatorDe } from "@/components/v4/de/industries/CommissionCalculatorDe";
import { FaqSectionDe } from "@/components/v4/de/industries/FaqSectionDe";
import { INDUSTRIES_FAQ_DE, INDUSTRY_WORLDS_DE, IND_DE } from "@/data/de/industries.de";
import { CALCULATOR_ANCHOR, INDUSTRY_ANCHORS } from "@/data/v4Industries";
import { faqEntries } from "@/data/v4Faq";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { alternatesFor } from "@/lib/v4Locale";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/de/industries`;
const TITLE = IND_DE.seoTitle;
const DESCRIPTION = IND_DE.seoDescription;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
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
        { "@type": "ListItem", position: 1, name: IND_DE.breadcrumbHome, item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: IND_DE.breadcrumbHere, item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#worlds`,
      name: IND_DE.worldsListName,
      itemListElement: INDUSTRY_WORLDS_DE.map((world, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: world.navLabel,
        url: `${PAGE_URL}#${world.id}`,
      })),
    },
    faqPageJsonLd(PAGE_URL, faqEntries(INDUSTRIES_FAQ_DE)),
  ],
};

/**
 * LocalDominate V4: Industries. Four kinds of business, each a full section with its own anchor
 * (`#hospitality`, `#holiday-rentals`, `#trades`, `#premium-services`), rendered one after the
 * other so the page reads the same without JavaScript. The commission calculator sits inside the
 * hospitality section and serves hotels and hosts alike.
 */
export default function IndustriesDe() {
  // React Router does not scroll to a hash, so a link such as /industries#trades needs this once
  // after mount. Web fonts can still be loading then and move the sections, so the position is set
  // again when they are ready. Both jumps are instant: a smooth scroll that is still running would
  // fight the second one. Anchor clicks inside the page are left to the browser.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!INDUSTRY_ANCHORS.includes(id)) return;
    let cancelled = false;
    const align = () => {
      if (!cancelled) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    };
    const frame = requestAnimationFrame(align);
    document.fonts?.ready.then(align).catch(() => undefined);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <V4Page>
      <SEOHead title={TITLE} description={DESCRIPTION} canonicalUrl={PAGE_URL}
        alternateUrls={alternatesFor("/industries")}
        lang="de"
        exactTitle
        jsonLd={JSON_LD}
        ogImage="https://localdominate.org/images/v4/social/ld-social-industries-1200x630.jpg"
      />

      <StateField field="dark" as="section" aria-labelledby="industries-hero">
        <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {IND_DE.heroLabel}
          </SystemLabel>
          <h1
            id="industries-hero"
            className="mt-6 max-w-[1150px] text-balance font-v4-sans text-[length:clamp(2.25rem,1.1rem+3.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
          >
            {IND_DE.h1}
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <p className="max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {IND_DE.heroText}
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      <WorldNavDe />

      {INDUSTRY_WORLDS_DE.map((world) => (
        <WorldSectionDe key={world.id} world={world}>
          {world.id === "hospitality" && (
            <StateField field="dark" as="div">
              <CommissionCalculatorDe id={CALCULATOR_ANCHOR} />
            </StateField>
          )}
        </WorldSectionDe>
      ))}

      <FaqSectionDe id="industries-faq" label={IND_DE.faqLabel} title={IND_DE.faqTitle} items={INDUSTRIES_FAQ_DE} />

      <StateField field="dark" as="section" aria-labelledby="industries-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            id="industries-start"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ivory"
          >
            {IND_DE.startTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {IND_DE.startText}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <p className="mx-auto mt-8 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
            {IND_DE.startNote}
          </p>
        </div>
      </StateField>
    </V4Page>
  );
}
