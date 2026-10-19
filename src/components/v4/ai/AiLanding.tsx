import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { AiHero } from "@/components/v4/ai/AiHero";
import { AiShift } from "@/components/v4/ai/AiShift";
import { TaskMapCalculator } from "@/components/v4/ai/TaskMapCalculator";
import { AiServices } from "@/components/v4/ai/AiServices";
import { AiLadder } from "@/components/v4/ai/AiLadder";
import { AiProof, AiSteps } from "@/components/v4/ai/AiStepsProof";
import { AiFaq, AiForm, AiRules } from "@/components/v4/ai/AiRulesFaqForm";
import { AI_ANCHOR_IDS, AI_URL_DE, AI_URL_EN, aiJsonLd } from "@/data/v4Ai";
import type { AiTexts } from "@/data/v4Ai";

/**
 * LocalDominate V4: the AI landing page, shared by /ai (English) and /de/ki (German).
 *
 * Top to bottom: claim with an example task map, why AI roll-outs stall, the interactive task map
 * (lead magnet), the four kinds of work, the price ladder, the four steps, proof of work, the rules,
 * the FAQ and the free-check form. The primary action everywhere is the free AI task check, an
 * anchor to the form on this page (the navigation follows it, see V4Nav).
 */
export function AiLanding({ t }: { t: AiTexts }) {
  // React Router does not scroll to a hash on load; align once after mount and after the fonts.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!AI_ANCHOR_IDS.includes(id)) return;
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
        title={t.seo.title}
        description={t.seo.description}
        canonicalUrl={t.url}
        lang={t.lang}
        jsonLd={aiJsonLd(t)}
        alternateUrls={{ de: AI_URL_DE, en: AI_URL_EN }}
      />
      <div lang={t.lang}>
        <AiHero t={t} />
        <AiShift t={t} />
        <TaskMapCalculator t={t} />
        <AiServices t={t} />
        <AiLadder t={t} />
        <AiSteps t={t} />
        <AiProof t={t} />
        <AiRules t={t} />
        <AiFaq t={t} />
        <AiForm t={t} />
      </div>
    </V4Page>
  );
}
