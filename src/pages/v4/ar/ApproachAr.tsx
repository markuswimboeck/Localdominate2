import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { StepRailAr } from "@/components/v4/ar/approach/StepRailAr";
import { ShowreelFilmAr } from "@/components/v4/ar/approach/ShowreelFilmAr";
import { publishedCases } from "@/data/v4Cases";
import type { WorkCase } from "@/data/v4Cases";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { AR_APPROACH, AR_CASE_KIND, AR_CASE_NOTES, AR_CASE_STATUS, AR_PILLAR } from "@/data/ar/approach.ar";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { arPath } from "@/lib/v4Locale";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}${arPath(PILLAR_BASE)}`;
const EN_URL = `${SITE}${PILLAR_BASE}`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: AR_APPROACH.seoTitle,
      description: AR_APPROACH.seoDescription,
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
        { "@type": "ListItem", position: 1, name: AR_APPROACH.breadcrumbHome, item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: AR_APPROACH.breadcrumbHere, item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: AR_APPROACH.stepsListName,
      inLanguage: "ar",
      itemListElement: PILLAR_INDEX.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: AR_STEP_NAMES[p.id],
        url: `${SITE}${pillarPath(p.id)}`,
      })),
    },
  ],
};

const tagClass = "rounded-full border border-v4-ink/15 px-3 py-1 font-v4-sans text-xs text-v4-ink/70";
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

const caseLabelAr = (c: WorkCase): string =>
  [AR_CASE_KIND[c.kind], c.kind === c.status ? undefined : AR_CASE_STATUS[c.status]].filter(Boolean).join(" · ");

/** Marks a link target that exists only in English. */
function EnMark({ className }: { className?: string }) {
  return (
    <span className={className} lang="en" dir="ltr">
      <span aria-hidden="true">{AR_APPROACH.enMarker}</span>
      <span className="sr-only">{AR_APPROACH.enMarkerLabel}</span>
    </span>
  );
}

/** Which published project touched which step. Same data as the English matrix, Arabic text. */
function CaseMatrixAr() {
  const cases = publishedCases();
  return (
    <>
      <ul className="flex flex-col gap-4 lg:hidden">
        {cases.map((c) => {
          const covered = PILLAR_INDEX.filter((p) => AR_CASE_NOTES[p.id][c.id]);
          return (
            <li key={c.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5">
              <p className="font-v4-sans text-base font-semibold text-v4-ink">
                <span className="ltr-run">{c.name}</span>
              </p>
              <p className="mt-1 font-v4-sans text-xs text-v4-ink/70">{caseLabelAr(c)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {covered.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={pillarPath(p.id)}
                      className={`inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-v4-ink/20 px-4 font-v4-sans text-sm text-v4-ink hover:border-v4-ink/60 ${focusRing}`}
                    >
                      <span className="font-v4-mono text-xs tabular-nums text-v4-ink/60">{p.n}</span>
                      {AR_STEP_NAMES[p.id]}
                      <EnMark className="text-xs text-v4-ink/60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="relative hidden overflow-x-auto rounded-2xl border border-v4-ink/10 bg-v4-white lg:block">
        <table className="w-full min-w-[720px] border-collapse text-start">
          <caption className="sr-only">{AR_APPROACH.casesCaption}</caption>
          <thead>
            <tr className="border-b border-v4-ink/10">
              <th scope="col" className="px-5 py-4 text-start">
                <span className="font-v4-sans text-sm text-v4-ink/60">{AR_APPROACH.casesProject}</span>
              </th>
              {PILLAR_INDEX.map((p) => (
                <th key={p.id} scope="col" className="px-2 py-4 text-center">
                  <Link
                    to={pillarPath(p.id)}
                    className={`font-v4-sans text-sm font-medium text-v4-ink/70 hover:text-v4-ink ${focusRing}`}
                  >
                    <span className="block font-v4-mono text-xs tabular-nums">{p.n}</span>
                    {AR_STEP_NAMES[p.id]} <EnMark className="text-xs text-v4-ink/60" />
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-b border-v4-ink/10 last:border-b-0">
                <th scope="row" className="px-5 py-4 text-start align-top">
                  <span className="block font-v4-sans text-sm font-semibold text-v4-ink">
                    <span className="ltr-run">{c.name}</span>
                  </span>
                  <span className="mt-1 block font-v4-sans text-xs font-normal text-v4-ink/60">{caseLabelAr(c)}</span>
                </th>
                {PILLAR_INDEX.map((p) => {
                  const note = AR_CASE_NOTES[p.id][c.id];
                  return (
                    <td key={p.id} className="px-2 py-4 text-center align-middle">
                      {note ? (
                        <>
                          <span aria-hidden="true" className="mx-auto block h-3 w-3 rounded-full bg-v4-ink" />
                          <span className="sr-only">{`${AR_STEP_NAMES[p.id]}: ${note}`}</span>
                        </>
                      ) : (
                        <span className="sr-only">{`${AR_STEP_NAMES[p.id]}: ${AR_APPROACH.casesNotPart}`}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** LocalDominate V4, Arabic (RTL): the Approach hub with the seven steps. Step pages stay English. */
export default function ApproachAr() {
  return (
    <V4Page>
      <SEOHead
        title={AR_APPROACH.seoTitle}
        exactTitle
        description={AR_APPROACH.seoDescription}
        canonicalUrl={PAGE_URL}
        lang="ar"
        alternateUrls={{ en: EN_URL, ar: PAGE_URL }}
        jsonLd={JSON_LD}
        ogImage="https://localdominate.org/images/v4/social/ld-social-approach-1200x630.jpg"
      />

      <StateField field="dark" as="section" aria-labelledby="approach-hero">
        <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-10 md:py-32">
          <p className="font-v4-mono text-sm text-v4-ivory/50">{AR_APPROACH.eyebrow}</p>
          <h1
            id="approach-hero"
            className="mt-6 font-v4-sans text-[length:var(--v4-text-hero)] font-extrabold leading-[1.15] text-v4-ivory"
          >
            {AR_APPROACH.h1a}
            <br />
            {AR_APPROACH.h1b}
          </h1>
          <p className="mt-8 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {AR_APPROACH.intro}
          </p>
          <div className="mt-10">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="div" className="border-t border-v4-ivory/10">
        <StepRailAr />
      </StateField>

      <StateField
        field="dark"
        as="section"
        className="border-t border-v4-ivory/10"
        aria-label={AR_APPROACH.showreelLabel}
      >
        <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10">
          <ShowreelFilmAr />
          <p className="mt-4 font-v4-sans text-sm text-v4-ivory/60">{AR_APPROACH.showreelCaption}</p>
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="approach-steps">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <p id="approach-steps" className="mb-10 block font-v4-mono text-sm text-v4-ink/60">
            {AR_APPROACH.stepsHeading}
          </p>
          <ol className="flex flex-col">
            {PILLAR_INDEX.map((p) => {
              const copy = AR_PILLAR[p.id];
              return (
                <li key={p.id} className="border-t border-v4-ink/10 first:border-t-0">
                  <Link
                    to={pillarPath(p.id)}
                    className={`group grid gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr] md:gap-8 ${focusRing}`}
                  >
                    <span className="font-v4-serif text-5xl leading-none text-v4-ink/60 group-hover:text-v4-ink">
                      {p.n}
                    </span>
                    <span>
                      <span className="block font-v4-sans text-2xl font-semibold leading-snug text-v4-ink group-hover:underline">
                        {AR_STEP_NAMES[p.id]} <EnMark className="text-sm font-normal text-v4-ink/60" />
                      </span>
                      <span className="mt-2 block font-v4-sans text-sm text-v4-ink/70">{copy.question}</span>
                    </span>
                    <span>
                      <span className="block font-v4-sans text-sm text-v4-ink/80">{copy.lead}</span>
                      <span className="mt-3 block font-v4-sans text-sm text-v4-ink/80">
                        <span className="font-medium text-v4-ink">{AR_APPROACH.youGet}</span>
                        {copy.deliverables.join("، ")}.
                      </span>
                      <span className="mt-4 flex flex-wrap gap-2">
                        {copy.parts.map((part) => (
                          <span key={part} className={tagClass}>
                            {part}
                          </span>
                        ))}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="approach-cases">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
          <h2
            id="approach-cases"
            className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-snug text-v4-ink"
          >
            {AR_APPROACH.casesHeading}
          </h2>
          <p className="mt-4 max-w-2xl font-v4-sans text-sm text-v4-ink/70">{AR_APPROACH.casesIntroBefore}
            <span className="ltr-run whitespace-nowrap">Aurelian Grand</span> {AR_APPROACH.casesIntroAfter}
          </p>
          <div className="mt-10">
            <CaseMatrixAr />
          </div>
          <Link
            to={arPath("/work")}
            className={`mt-8 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline ${focusRing}`}
          >
            {AR_APPROACH.casesAll}
          </Link>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="approach-start">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-10">
          <p id="approach-start" className="font-v4-serif text-[length:var(--v4-text-major)] leading-snug text-v4-ivory">
            {AR_APPROACH.startLead}
          </p>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-sm text-v4-ivory/70">{AR_APPROACH.startBody}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
            <Link
              to={arPath("/services")}
              className={`font-v4-sans text-sm text-v4-ivory/70 underline-offset-4 hover:text-v4-ivory hover:underline ${focusRing}`}
            >
              {AR_APPROACH.startServices}
            </Link>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
