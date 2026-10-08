import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { FaqList } from "@/components/v4/PageFaq";
import { CheckFormDe } from "@/components/v4/de/check/CheckFormDe";
import { CHECK_FORM_DE, START_DE as T, START_FAQ_DE } from "@/data/de/startproject.de";
import { HOW_WE_WORK_DE, HOW_WE_WORK_NOTE_DE } from "@/data/de/shared.de";
import { faqText } from "@/data/v4Faq";
import { alternatesFor, dePath } from "@/lib/v4Locale";
import { CHECK_PATH } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}${dePath(CHECK_PATH)}`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: T.title,
      description: T.description,
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
        { "@type": "ListItem", position: 1, name: T.breadcrumbHome, item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: T.breadcrumbCheck, item: PAGE_URL },
      ],
    },
    faqPageJsonLd(PAGE_URL, START_FAQ_DE.map((faq) => ({ q: faq.q, a: faqText(faq) }))),
  ],
};

/** LocalDominate V4, German: the free check. Mirrors StartProjectV4 section by section. */
export default function StartProjectDe() {
  return (
    <V4Page>
      <SEOHead
        title={T.title}
        description={T.description}
        canonicalUrl={PAGE_URL}
        lang="de"
        exactTitle
        alternateUrls={alternatesFor(CHECK_PATH)}
        jsonLd={JSON_LD}
        ogImage="https://localdominate.org/images/v4/social/ld-social-start-a-project-1200x630.jpg"
      />

      <StateField field="dark" as="section" aria-labelledby="check-title">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 pb-20 pt-16 md:px-10 md:pt-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SystemLabel className="text-v4-ivory/50">{T.label}</SystemLabel>
            <h1
              id="check-title"
              className="font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
            >
              {T.h1}
            </h1>
            <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">{T.lead}</p>
            <ul className="flex max-w-lg flex-col">
              {T.whatYouGet.map((point) => (
                <li key={point} className="flex gap-4 border-t border-v4-ivory/15 py-4 font-v4-sans text-sm leading-relaxed text-v4-ivory/80">
                  <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <CheckFormDe texts={CHECK_FORM_DE} className="self-start" />
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="check-next">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {T.nextLabel}
          </SystemLabel>
          <h2 id="check-next" className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            {T.nextTitle}
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {T.nextSteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                <span className="font-v4-serif text-4xl text-v4-ink/30">{i + 1}</span>
                <h3 className="mt-4 font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{step.title}</h3>
                <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="check-how">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {T.howLabel}
            </SystemLabel>
            <h2 id="check-how" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
              {T.howTitle}
            </h2>
          </div>
          <HowWeWork items={HOW_WE_WORK_DE} note={HOW_WE_WORK_NOTE_DE} />
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="check-faq">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {T.faqLabel}
          </SystemLabel>
          <h2 id="check-faq" className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            {T.faqTitle}
          </h2>
          <div className="mt-12">
            <FaqList items={START_FAQ_DE} />
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="check-call">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 id="check-call" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory">
              {T.callTitle}
            </h2>
            <p className="mt-3 max-w-md font-v4-sans text-sm text-v4-ivory/70">{T.callBody}</p>
          </div>
          <BookCallButton tone="outline" className="self-start md:self-auto" />
        </div>
      </StateField>
    </V4Page>
  );
}
