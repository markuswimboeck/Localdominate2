import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { SystemOrbitAr } from "@/components/v4/ar/home/SystemOrbitAr";
import { SystemStepsAr } from "@/components/v4/ar/home/SystemStepsAr";
import { OfferBandAr } from "@/components/v4/ar/home/OfferBandAr";
import { HowWeWorkAr } from "@/components/v4/ar/home/HowWeWorkAr";
import { PageFaqSectionAr } from "@/components/v4/ar/home/FaqAr";
import { DadicationFilmAr, ShowreelFilmAr } from "@/components/v4/ar/home/FilmsAr";
import { verifiedProof } from "@/data/v4Proof";
import { publishedCases } from "@/data/v4Cases";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { faqEntries } from "@/data/v4Faq";
import {
  HANDOVERS_AR,
  HOME_AR,
  HOME_AR_SEO,
  HOME_AR_URL,
  HOME_EN_URL,
  HOME_FAQ_AR,
  WORLDS_AR,
} from "@/data/ar/home.ar";
import { arPath } from "@/lib/v4Locale";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";
import journeyImg from "@/assets/v4/ld-home-4-5-1600.webp";
import journeyImgSmall from "@/assets/v4/ld-home-4-5-800.webp";

/**
 * LocalDominate V4, Home in Arabic (right-to-left). Live on `/ar`. Same sections, same order and
 * same anchors as HomeV4; copy in src/data/ar/home.ar.ts. Renders inside <V4Page> (Arabic nav,
 * footer, skip link and cookie banner).
 */
const homeCases = publishedCases().filter((c) => !c.hasVideo).slice(0, 3);

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal text-balance";
const textLink =
  "inline-flex min-h-[44px] items-center font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

const Arrow = () => (
  <>
    {" "}
    <span data-arrow aria-hidden="true">→</span>
  </>
);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${HOME_AR_URL}#webpage`,
    url: HOME_AR_URL,
    name: HOME_AR_SEO.title,
    description: HOME_AR_SEO.description,
    inLanguage: "ar",
    dateModified: SEO_DATE_MODIFIED,
    isPartOf: { "@id": "https://localdominate.org/#website" },
    about: { "@id": "https://localdominate.org/#organization" },
    breadcrumb: { "@id": `${HOME_AR_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${HOME_AR_URL}#breadcrumb`,
    itemListElement: [{ "@type": "ListItem", position: 1, name: HOME_AR.crumbHome, item: HOME_AR_URL }],
  },
  { "@context": "https://schema.org", ...faqPageJsonLd(HOME_AR_URL, faqEntries(HOME_FAQ_AR)) },
];

export default function HomeAr() {
  const t = HOME_AR;
  return (
    <V4Page>
      <SEOHead
        title={HOME_AR_SEO.title}
        description={HOME_AR_SEO.description}
        canonicalUrl={HOME_AR_URL}
        lang="ar"
        exactTitle
        alternateUrls={{ en: HOME_EN_URL, ar: HOME_AR_URL }}
        jsonLd={jsonLd}
      />

      {/* 01 HERO */}
      <StateField field="dark" as="section" aria-labelledby="beat-hero">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="flex flex-col gap-7">
            <SystemLabel className="leading-relaxed text-v4-ivory/60">{t.hero.label}</SystemLabel>
            <h1
              id="beat-hero"
              className="font-v4-sans text-[length:clamp(2.5rem,1.5rem+3.4vw,5rem)] font-extrabold text-balance text-v4-ivory"
            >
              {t.hero.h1a}
              <br />
              {t.hero.h1b}
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {t.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {t.terms.map((term) => (
                <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-v4-signal" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
          <SystemOrbitAr className="mx-auto w-full max-w-[440px] lg:max-w-none" />
        </div>
        <OfferBandAr />
      </StateField>

      {/* TRUSTED BY: renders only verified entries (none yet) */}
      {verifiedProof().length > 0 && (
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-trusted">
          <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">
            <SystemLabel id="beat-trusted" as="p" className="mb-6 block text-center text-v4-ink/60">
              عملاء مختارون
            </SystemLabel>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {verifiedProof().map((c) => (
                <span key={c.name} className="font-v4-sans text-lg font-semibold text-v4-ink/70">
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </StateField>
      )}

      {/* 02 THE PROBLEM */}
      <StateField field="light" as="section" aria-labelledby="beat-fragmentation">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              {t.problem.label}
            </SystemLabel>
            <h2 id="beat-fragmentation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ink`}>
              {t.problem.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
              {t.problem.body}
            </p>
          </div>
          <ol className="flex flex-col self-end">
            {HANDOVERS_AR.map((h) => (
              <li
                key={h.from}
                className="grid gap-2 border-t border-v4-ink/15 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6"
              >
                <SystemLabel className="leading-relaxed text-v4-ink/60">
                  {h.from} <span data-arrow aria-hidden="true">→</span>
                  <span className="sr-only"> {t.problem.to} </span> {h.to}
                </SystemLabel>
                <span className="font-v4-sans text-base text-v4-ink">{h.question}</span>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      {/* 03 THE SYSTEM */}
      <StateField field="dark" as="section" aria-labelledby="beat-steps">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-6 pt-20 md:px-10 md:pt-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
              {t.system.label}
            </SystemLabel>
            <h2 id="beat-steps" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
              {t.system.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {t.system.body}
            </p>
            <Link to={PILLAR_BASE} className={`${textLink} mt-8 text-v4-ivory/80`}>
              {t.system.link} (EN)
              <Arrow />
            </Link>
          </div>
          <SystemStepsAr />
        </div>

        <div className="mx-auto max-w-[1300px] px-6 pb-20 pt-20 md:px-10 md:pb-28">
          <div className="grid gap-8 border-t border-v4-ivory/15 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
                {t.system.showreelLabel}
              </SystemLabel>
              <h3 className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ivory`}>{t.system.showreelH3}</h3>
              <p className="mt-5 max-w-sm font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{t.system.showreelBody}</p>
            </div>
            <ShowreelFilmAr title={t.system.showreelTitle} />
          </div>
        </div>
      </StateField>

      {/* 04 THE WORK */}
      <StateField field="light" id="evidence" as="section" aria-labelledby="beat-evidence">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            {t.work.label}
          </SystemLabel>
          <h2 id="beat-evidence" className={`${h2Serif} max-w-3xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            {t.work.h2}
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <DadicationFilmAr title={t.work.dadicationFilmTitle} />
              <p className="mt-4 font-v4-sans text-sm text-v4-ink/70">
                <span lang="en" className="font-medium text-v4-ink">
                  {t.work.dadication}
                </span>
                {t.work.dadicationText}
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {homeCases.map((c) => {
                const ar = t.cases[c.id];
                return (
                  <li key={c.id}>
                    <Link
                      to={arPath("/work")}
                      className="group block rounded-2xl border border-v4-ink/10 bg-v4-white p-6 transition-colors hover:border-v4-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                    >
                      <SystemLabel className="text-v4-ink/60">{ar?.label ?? ""}</SystemLabel>
                      <span className="mt-3 flex items-baseline justify-between gap-4">
                        <span lang="en" className="font-v4-sans text-lg font-semibold text-v4-ink">
                          {c.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="inline-block text-v4-ink/30 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-v4-ink"
                        >
                          <span data-arrow>→</span>
                        </span>
                      </span>
                      <span className="mt-1 block font-v4-sans text-sm text-v4-ink/60">{ar?.title ?? ""}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={arPath("/work")} className={`${textLink} mt-10 text-v4-ink/70`}>
            {t.work.all}
            <Arrow />
          </Link>
        </div>
      </StateField>

      {/* 05 WHO IT IS FOR */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-context">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[240px]">
              <img
                src={journeyImgSmall}
                srcSet={`${journeyImgSmall} 800w, ${journeyImg} 1600w`}
                sizes="(max-width: 1023px) 92vw, 520px"
                width={1600}
                height={2000}
                alt={t.who.imgAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-7 py-10 md:px-12 md:py-14">
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                {t.who.label}
              </SystemLabel>
              <h2 id="beat-context" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                {t.who.h2}
              </h2>
              <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
                {WORLDS_AR.map((world) => (
                  <li key={world.anchor} className="border-t border-v4-ink/15 py-5">
                    <Link
                      to={`${arPath("/industries")}#${world.anchor}`}
                      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink"
                    >
                      <span className="font-v4-sans text-base font-semibold text-v4-ink group-hover:underline">
                        {world.title}
                      </span>
                      <span className="mt-2 block font-v4-sans text-sm leading-relaxed text-v4-ink/70">{world.body}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </StateField>

      {/* 06 HOW WE WORK */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-operating-model">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              {t.how.label}
            </SystemLabel>
            <h2 id="beat-operating-model" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
              {t.how.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{t.how.body}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-1">
              <Link to={arPath("/services")} className={`${textLink} text-v4-ink/70`}>
                {t.how.services}
                <Arrow />
              </Link>
              <Link to="/insights" className={`${textLink} text-v4-ink/70`}>
                {t.how.insights}
                <Arrow />
              </Link>
            </div>
          </div>
          <HowWeWorkAr />
        </div>
      </StateField>

      {/* 07 SHORT ANSWERS: same array as the FAQPage JSON-LD */}
      <PageFaqSectionAr id="home-faq" label={t.faq.label} title={t.faq.h2} items={HOME_FAQ_AR} />

      {/* 08 THE INVITATION */}
      <StateField field="dark" id="invitation" as="section" aria-labelledby="beat-invitation">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="beat-invitation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            {t.invite.h2}
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {t.invite.body}
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
