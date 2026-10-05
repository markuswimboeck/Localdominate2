import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { CreatorsHeroAr } from "@/components/v4/ar/creators/CreatorsHeroAr";
import { BrandAnswersAr } from "@/components/v4/ar/creators/BrandAnswersAr";
import { LiveDemoAr } from "@/components/v4/ar/creators/LiveDemoAr";
import { PageSectionsAr } from "@/components/v4/ar/creators/PageSectionsAr";
import { ComparisonAr } from "@/components/v4/ar/creators/ComparisonAr";
import { PriceCardsAr } from "@/components/v4/ar/creators/PriceCardsAr";
import { MoreServicesAr } from "@/components/v4/ar/creators/MoreServicesAr";
import { CreatorRulesAr, CreatorStepsAr } from "@/components/v4/ar/creators/CreatorStepsAr";
import { CreatorFormSectionAr, CreatorsFaqAr } from "@/components/v4/ar/creators/CreatorsFaqAr";
import { CREATOR_ANCHOR_IDS } from "@/data/v4Creators";
import {
  CREATORS_AR_JSON_LD,
  CREATORS_AR_SEO,
  CREATORS_AR_URL,
  CREATORS_EN_URL,
  CREATORS_OG_IMAGE,
} from "@/data/ar/creators.ar";

/**
 * LocalDominate V4, Arabic (RTL): Creators. Mirrors CreatorsV4 section by section with the same
 * anchors; prices and form behaviour are identical, copy lives in src/data/ar/creators.ar.ts.
 * The demo portfolio in /creator-demo is English and is labelled as such.
 */
export default function CreatorsAr() {
  // React Router does not scroll to a hash: jump once after mount and again when the fonts are in.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!CREATOR_ANCHOR_IDS.includes(id)) return;
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
        title={CREATORS_AR_SEO.title}
        description={CREATORS_AR_SEO.description}
        canonicalUrl={CREATORS_AR_URL}
        alternateUrls={{ en: CREATORS_EN_URL, ar: CREATORS_AR_URL }}
        lang="ar"
        jsonLd={CREATORS_AR_JSON_LD}
        ogImage={CREATORS_OG_IMAGE}
      />
      <CreatorsHeroAr />
      <BrandAnswersAr />
      <LiveDemoAr />
      <PageSectionsAr />
      <PriceCardsAr />
      <CreatorStepsAr />
      <ComparisonAr />
      <CreatorRulesAr />
      <CreatorsFaqAr />
      <MoreServicesAr />
      <CreatorFormSectionAr />
    </V4Page>
  );
}
