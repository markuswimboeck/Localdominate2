import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { SystemOrbitDe } from "@/components/v4/de/home/SystemOrbitDe";
import { SystemStepsDe } from "@/components/v4/de/home/SystemStepsDe";
import { OfferBandDe } from "@/components/v4/de/home/OfferBandDe";
import { PageFaqSectionDe } from "@/components/v4/de/home/FaqDe";
import { DadicationFilmDe, ShowreelFilmDe } from "@/components/v4/de/home/FilmsDe";
import { HANDOVERS_DE, HOME_DE, HOME_DE_SEO, HOME_FAQ_DE, WORLDS_DE } from "@/data/de/home.de";
import { HERO_TERMS_DE, HOW_WE_WORK_DE, HOW_WE_WORK_NOTE_DE } from "@/data/de/shared.de";
import { DE_LANDING } from "@/data/de/chrome.de";
import { verifiedProof } from "@/data/v4Proof";
import { publishedCases } from "@/data/v4Cases";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { faqEntries } from "@/data/v4Faq";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { alternatesFor, dePath } from "@/lib/v4Locale";
import journeyImg from "@/assets/v4/ld-home-4-5-1600.webp";
import journeyImgSmall from "@/assets/v4/ld-home-4-5-800.webp";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}/de`;
const T = HOME_DE;

/**
 * LocalDominate V4, Home auf Deutsch. Live on `/de` (the former landing page for hotels, hosts and
 * trades now lives on `/de/direktbuchung`). Same sections, order, anchors and classes as HomeV4;
 * copy in src/data/de/home.de.ts. Reused English components: StateField, SystemLabel, HowWeWork
 * (items and note passed in), CheckButton and BookCallButton (German on /de paths).
 */
const homeCases = publishedCases().filter((c) => !c.hasVideo).slice(0, 3);

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: HOME_DE_SEO.title,
    description: HOME_DE_SEO.description,
    inLanguage: "de",
    dateModified: SEO_DATE_MODIFIED,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [{ "@type": "ListItem", position: 1, name: HOME_DE_SEO.breadcrumbHome, item: PAGE_URL }],
  },
  // Same array as the visible "Kurze Antworten" section below.
  { "@context": "https://schema.org", ...faqPageJsonLd(PAGE_URL, faqEntries(HOME_FAQ_DE)), inLanguage: "de" },
];

export default function HomeDe() {
  return (
    <V4Page>
      <SEOHead
        title={HOME_DE_SEO.title}
        description={HOME_DE_SEO.description}
        canonicalUrl={PAGE_URL}
        alternateUrls={alternatesFor("/")}
        lang="de"
        exactTitle
        jsonLd={JSON_LD}
      />

      {/* 01 HERO: what LocalDominate is (headline and the animated system), what can be ordered (band) */}
      <StateField field="dark" as="section" aria-labelledby="beat-hero">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="flex flex-col gap-7">
            <SystemLabel className="leading-relaxed text-v4-ivory/60">{T.hero.label}</SystemLabel>
            <h1
              id="beat-hero"
              className="font-v4-sans text-[length:clamp(2.75rem,1.6rem+3.8vw,5.75rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
            >
              {T.hero.h1[0]}
              <br />
              {T.hero.h1[1]}
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {T.hero.body}
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
          <SystemOrbitDe className="mx-auto w-full max-w-[440px] lg:max-w-none" />
        </div>
        <OfferBandDe />
      </StateField>

      {/* TRUSTED BY: renders only verified, evidenced entries (none yet) */}
      {verifiedProof().length > 0 && (
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-trusted">
          <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">
            <SystemLabel id="beat-trusted" as="p" className="mb-6 block text-center text-v4-ink/60">
              {T.trusted}
            </SystemLabel>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {verifiedProof().map((c) => (
                <span key={c.name} className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink/70">
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </StateField>
      )}

      {/* 02 THE PROBLEM: five jobs, five hand-overs nobody owns */}
      <StateField field="light" as="section" aria-labelledby="beat-fragmentation">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              {T.problem.label}
            </SystemLabel>
            <h2 id="beat-fragmentation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ink`}>
              {T.problem.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
              {T.problem.body}
            </p>
          </div>
          <ol className="flex flex-col self-end">
            {HANDOVERS_DE.map((h) => (
              <li
                key={h.from}
                className="grid gap-2 border-t border-v4-ink/15 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6"
              >
                <SystemLabel className="leading-relaxed text-v4-ink/60">
                  {h.from} <span aria-hidden="true">→</span>
                  <span className="sr-only"> {T.problem.to} </span> {h.to}
                </SystemLabel>
                <span className="font-v4-sans text-base text-v4-ink">{h.question}</span>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      {/* 03 THE SYSTEM: the seven steps as one chain (signature moment), then the showreel */}
      <StateField field="dark" as="section" aria-labelledby="beat-steps">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-6 pt-20 md:px-10 md:pt-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
              {T.system.label}
            </SystemLabel>
            <h2 id="beat-steps" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
              {T.system.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {T.system.body}
            </p>
            <Link to={dePath(PILLAR_BASE)} className={`${textLink} mt-8 inline-block text-v4-ivory/80`}>
              {T.system.link} →
            </Link>
          </div>
          <SystemStepsDe />
        </div>

        <div className="mx-auto max-w-[1300px] px-6 pb-20 pt-20 md:px-10 md:pb-28">
          <div className="grid gap-8 border-t border-v4-ivory/15 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
                {T.system.showreelLabel}
              </SystemLabel>
              <h3 className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ivory`}>{T.system.showreelH3}</h3>
              <p className="mt-5 max-w-sm font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
                {T.system.showreelBody}
              </p>
            </div>
            <ShowreelFilmDe title={T.system.showreelTitle} />
          </div>
        </div>
      </StateField>

      {/* 04 THE WORK: published cases (src/data/v4Cases.ts); no figures unless verified */}
      <StateField field="light" id="evidence" as="section" aria-labelledby="beat-evidence">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            {T.work.label}
          </SystemLabel>
          <h2 id="beat-evidence" className={`${h2Serif} max-w-3xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            {T.work.h2}
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <DadicationFilmDe title={T.work.dadicationFilmTitle} />
              <p className="mt-4 font-v4-sans text-sm text-v4-ink/70">
                <span className="font-medium text-v4-ink">{T.work.dadication}</span>
                {T.work.dadicationText}
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {homeCases.map((c) => {
                const de = T.cases[c.id];
                return (
                  <li key={c.id}>
                    <Link
                      to={dePath("/work")}
                      className="group block rounded-2xl border border-v4-ink/10 bg-v4-white p-6 transition-colors hover:border-v4-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                    >
                      <SystemLabel className="text-v4-ink/60">{de?.label ?? ""}</SystemLabel>
                      <span className="mt-3 flex items-baseline justify-between gap-4">
                        <span className="font-v4-sans text-lg font-semibold text-v4-ink">{c.name}</span>
                        <span
                          aria-hidden="true"
                          className="text-v4-ink/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-v4-ink"
                        >
                          →
                        </span>
                      </span>
                      <span className="mt-1 block font-v4-sans text-sm text-v4-ink/60">{de?.title ?? ""}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={dePath("/work")} className={`${textLink} mt-10 inline-block text-v4-ink/70`}>
            {T.work.all} →
          </Link>
        </div>
      </StateField>

      {/* 05 WHO IT IS FOR: the four kinds of business */}
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
                alt={T.who.imgAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="px-7 py-10 md:px-12 md:py-14">
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                {T.who.label}
              </SystemLabel>
              <h2 id="beat-context" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                {T.who.h2}
              </h2>
              <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
                {WORLDS_DE.map((world) => (
                  <li key={world.anchor} className="border-t border-v4-ink/15 py-5">
                    <Link
                      to={`${dePath("/industries")}#${world.anchor}`}
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
              <Link to={DE_LANDING.path} className={`${textLink} mt-8 inline-block text-v4-ink/70`}>
                {T.who.landing} →
              </Link>
            </div>
          </div>
        </div>
      </StateField>

      {/* 06 HOW WE WORK: the terms, spelled out */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-operating-model">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              {T.how.label}
            </SystemLabel>
            <h2 id="beat-operating-model" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
              {T.how.h2}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{T.how.body}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link to={dePath("/services")} className={`${textLink} text-v4-ink/70`}>
                {T.how.services} →
              </Link>
              <Link to="/insights" className={`${textLink} text-v4-ink/70`}>
                {T.how.insights} (EN) →
              </Link>
            </div>
          </div>
          <HowWeWork items={HOW_WE_WORK_DE} note={HOW_WE_WORK_NOTE_DE} />
        </div>
      </StateField>

      {/* 07 SHORT ANSWERS: same array as the FAQPage JSON-LD */}
      <PageFaqSectionDe id="home-faq" label={T.faq.label} title={T.faq.h2} items={HOME_FAQ_DE} />

      {/* 08 THE INVITATION */}
      <StateField field="dark" id="invitation" as="section" aria-labelledby="beat-invitation">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="beat-invitation" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            {T.invite.h2}
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {T.invite.body}
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
