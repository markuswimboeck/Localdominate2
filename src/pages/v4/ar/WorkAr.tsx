import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CaseSectionAr } from "@/components/v4/ar/work/CaseSectionAr";
import { FeaturedCaseAr } from "@/components/v4/ar/work/FeaturedCaseAr";
import { PageFaqSectionAr } from "@/components/v4/ar/work/PageFaqAr";
import { AR_WORK, WORK_FAQ_AR, arCases } from "@/data/ar/work.ar";
import { faqEntries } from "@/data/v4Faq";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { arPath } from "@/lib/v4Locale";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/ar/work`;
const EN_URL = `${SITE}/work`;

const WORK_AR_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: AR_WORK.seo.title,
      description: AR_WORK.seo.description,
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
        { "@type": "ListItem", position: 1, name: AR_WORK.breadcrumbHome, item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: AR_WORK.breadcrumbWork, item: PAGE_URL },
      ],
    },
    faqPageJsonLd(PAGE_URL, faqEntries(WORK_FAQ_AR)),
  ],
};

const cases = arCases();
const featured = cases.find((c) => c.hasVideo);
const others = cases.filter((c) => c !== featured);

const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "inline-flex min-h-[44px] items-center gap-1.5 font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4, Arabic: Work. Same sections and order as WorkV4. The cases come from
 * v4Cases.ts (Arabic wording in data/ar/work.ar.ts). Truth first: no figures, "pre-launch" and
 * "concept, not a client" are kept.
 */
export default function WorkAr() {
  return (
    <V4Page>
      <SEOHead
        ogImage={`${SITE}/images/v4/social/ld-social-work-1200x630.jpg`}
        title={AR_WORK.seo.title}
        description={AR_WORK.seo.description}
        canonicalUrl={PAGE_URL}
        lang="ar"
        exactTitle
        alternateUrls={{ en: EN_URL, ar: PAGE_URL }}
        jsonLd={WORK_AR_JSON_LD}
      />

      {/* 01 HERO */}
      <StateField field="dark" as="section" aria-labelledby="work-hero">
        <div className="mx-auto grid max-w-[1300px] gap-8 px-6 pb-12 pt-12 md:px-10 md:pb-14 md:pt-16 xl:grid-cols-[1.25fr_0.75fr] xl:items-end xl:gap-16">
          <div>
            <SystemLabel as="p" className="text-v4-ivory/60">
              {AR_WORK.hero.label}
            </SystemLabel>
            <h1
              id="work-hero"
              className="mt-6 font-v4-sans text-[length:clamp(2.5rem,1.4rem+3vw,4.5rem)] font-extrabold leading-[0.95] text-v4-ivory"
            >
              {AR_WORK.hero.h1a}
              <br />
              {AR_WORK.hero.h1b}
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:flex-col xl:items-start xl:justify-start xl:gap-6">
            <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {AR_WORK.hero.body}
            </p>
            <div className="flex shrink-0 flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      {/* 02 FEATURED */}
      {featured && (
        <StateField field="dark" as="section" id="featured" aria-labelledby="work-featured">
          <div className="mx-auto max-w-[1300px] px-6 pb-20 md:px-10 md:pb-28">
            <FeaturedCaseAr c={featured} />
          </div>
        </StateField>
      )}

      {/* 03 MORE PROJECTS */}
      {others.length > 0 && (
        <StateField field="light" as="section" aria-labelledby="work-more">
          <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-8 pb-14 md:pb-20 lg:grid-cols-2 lg:items-end lg:gap-20">
              <div>
                <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
                  {AR_WORK.more.label}
                </SystemLabel>
                <h2 id="work-more" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                  {AR_WORK.more.h2}
                </h2>
              </div>
              <p className="max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{AR_WORK.more.body}</p>
            </div>
            {others.map((c) => (
              <CaseSectionAr key={c.id} c={c} />
            ))}
          </div>
        </StateField>
      )}

      {/* 04 SHORT ANSWERS: same array as the FAQPage JSON-LD */}
      <PageFaqSectionAr id="work-faq" label={AR_WORK.faq.label} title={AR_WORK.faq.title} items={WORK_FAQ_AR} />

      {/* 05 THE INVITATION */}
      <StateField field="dark" as="section" aria-labelledby="work-cta">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="work-cta" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            {AR_WORK.cta.h2}
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {AR_WORK.cta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-1">
            <Link to={arPath("/services")} className={`${textLink} text-v4-ivory/70 hover:text-v4-ivory`}>
              {AR_WORK.cta.services} <span data-arrow aria-hidden="true">→</span>
            </Link>
            <Link to={arPath(PILLAR_BASE)} className={`${textLink} text-v4-ivory/70 hover:text-v4-ivory`}>
              {AR_WORK.cta.steps} <span data-arrow aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
