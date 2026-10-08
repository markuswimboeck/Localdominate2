import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { CreatorsHeroDe } from "@/components/v4/de/creators/CreatorsHeroDe";
import { BrandAnswersDe } from "@/components/v4/de/creators/BrandAnswersDe";
import { LiveDemoDe } from "@/components/v4/de/creators/LiveDemoDe";
import { PageSectionsDe } from "@/components/v4/de/creators/PageSectionsDe";
import { ComparisonDe } from "@/components/v4/de/creators/ComparisonDe";
import { PriceCardsDe } from "@/components/v4/de/creators/PriceCardsDe";
import { MoreServicesDe } from "@/components/v4/de/creators/MoreServicesDe";
import { CreatorRulesDe, CreatorStepsDe } from "@/components/v4/de/creators/CreatorStepsDe";
import { CreatorFormSectionDe, CreatorsFaqDe } from "@/components/v4/de/creators/CreatorsFaqDe";
import { CREATOR_ANCHOR_IDS } from "@/data/v4Creators";
import {
  CREATORS_DE_JSON_LD,
  CREATORS_DE_SEO,
  CREATORS_DE_URL,
  CREATORS_OG_IMAGE,
} from "@/data/de/creators.de";
import { alternatesFor } from "@/lib/v4Locale";

/**
 * LocalDominate V4, Deutsch: Creator (/de/creators). Spiegelt CreatorsV4 Abschnitt für Abschnitt mit
 * denselben Ankern; Preise und Formularverhalten sind identisch, die Texte stehen in
 * src/data/de/creators.de.ts. Die Demo unter /creator-demo ist englisch und als solche gekennzeichnet.
 */
export default function CreatorsDe() {
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
        title={CREATORS_DE_SEO.title}
        description={CREATORS_DE_SEO.description}
        canonicalUrl={CREATORS_DE_URL}
        alternateUrls={alternatesFor("/creators")}
        lang="de"
        exactTitle
        jsonLd={CREATORS_DE_JSON_LD}
        ogImage={CREATORS_OG_IMAGE}
      />
      <CreatorsHeroDe />
      <BrandAnswersDe />
      <LiveDemoDe />
      <PageSectionsDe />
      <PriceCardsDe />
      <CreatorStepsDe />
      <ComparisonDe />
      <CreatorRulesDe />
      <CreatorsFaqDe />
      <MoreServicesDe />
      <CreatorFormSectionDe />
    </V4Page>
  );
}
