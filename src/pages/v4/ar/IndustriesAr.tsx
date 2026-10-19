import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { WorldNavAr } from "@/components/v4/ar/industries/WorldNavAr";
import { WorldSectionAr } from "@/components/v4/ar/industries/WorldSectionAr";
import { CommissionCalculatorAr } from "@/components/v4/ar/industries/CommissionCalculatorAr";
import { FaqSectionAr } from "@/components/v4/ar/industries/FaqSectionAr";
import { INDUSTRIES_FAQ_AR, INDUSTRY_WORLDS_AR, IND_AR } from "@/data/ar/industries.ar";
import { CALCULATOR_ANCHOR, INDUSTRY_ANCHORS } from "@/data/v4Industries";
import { faqEntries } from "@/data/v4Faq";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/ar/industries`;
const EN_URL = `${SITE}/industries`;
const TITLE = "SEO محلي ومواقع للفنادق والإيجارات والحرف | LocalDominate";
const DESCRIPTION =
  "للفنادق والإيجارات السياحية والحرف والخدمات المحلية الراقية: ما نفحصه في LocalDominate أولًا، وما نبنيه، والعرض ذو السعر الثابت المناسب للبداية.";

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
      inLanguage: "ar",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: IND_AR.breadcrumbHome, item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: IND_AR.breadcrumbHere, item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#worlds`,
      name: IND_AR.worldsListName,
      itemListElement: INDUSTRY_WORLDS_AR.map((world, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: world.navLabel,
        url: `${PAGE_URL}#${world.id}`,
      })),
    },
    faqPageJsonLd(PAGE_URL, faqEntries(INDUSTRIES_FAQ_AR)),
  ],
};

/**
 * LocalDominate V4, Arabic Industries page (/ar/industries). Mirrors IndustriesV4 section by
 * section: hero, world navigation, four worlds (hospitality with the commission calculator),
 * FAQ, closing call to action. Everything derives from the path and static data.
 */
export default function IndustriesAr() {
  // Same hash handling as the English page: React Router does not scroll to a hash after mount.
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
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonicalUrl={PAGE_URL}
        lang="ar"
        exactTitle
        alternateUrls={{ en: EN_URL, ar: PAGE_URL }}
        jsonLd={JSON_LD}
        ogImage="https://localdominate.org/images/v4/social/ld-social-industries-1200x630.jpg"
      />

      <StateField field="dark" as="section" aria-labelledby="industries-hero">
        <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {IND_AR.heroLabel}
          </SystemLabel>
          <h1
            id="industries-hero"
            className="mt-6 max-w-[1150px] text-balance font-v4-sans text-[length:clamp(2rem,1rem+3.2vw,4rem)] font-extrabold leading-[0.98] text-v4-ivory"
          >
            {IND_AR.h1}
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <p className="max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {IND_AR.heroText}
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      <WorldNavAr />

      {INDUSTRY_WORLDS_AR.map((world) => (
        <WorldSectionAr key={world.id} world={world}>
          {world.id === "hospitality" && (
            <StateField field="dark" as="div">
              <CommissionCalculatorAr id={CALCULATOR_ANCHOR} />
            </StateField>
          )}
        </WorldSectionAr>
      ))}

      <FaqSectionAr id="industries-faq" label={IND_AR.faqLabel} title={IND_AR.faqTitle} items={INDUSTRIES_FAQ_AR} />

      <StateField field="dark" as="section" aria-labelledby="industries-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            id="industries-start"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ivory"
          >
            {IND_AR.startTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {IND_AR.startText}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <p className="mx-auto mt-8 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{IND_AR.startNote}</p>
        </div>
      </StateField>
    </V4Page>
  );
}
