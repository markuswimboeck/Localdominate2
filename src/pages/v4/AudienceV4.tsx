import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { FaqList } from "@/components/v4/PageFaq";
import { CommissionCalculator } from "@/components/v4/industries/CommissionCalculator";
import { AUDIENCES, audienceBySlug, audiencePath } from "@/data/v4Audiences";
import type { Audience } from "@/data/v4Audiences";
import { CASES } from "@/data/v4Cases";
import { faqEntries } from "@/data/v4Faq";
import { INDUSTRY_WORLDS } from "@/data/v4Industries";
import { OFFERS } from "@/data/v4Offers";
import { pillarById, pillarPath } from "@/data/v4PillarIndex";
import { CHECK_REPLY_TIME } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const SITE = "https://localdominate.org";
const AREA = [
  { "@type": "Country", name: "Germany" },
  { "@type": "Country", name: "Austria" },
  { "@type": "Country", name: "Switzerland" },
];

/** Checks, builds, offers and first step: from the matching world on /industries, or the page's own. */
function contentOf(a: Audience) {
  if ("own" in a.source) return a.source.own;
  const id = a.source.world;
  const world = INDUSTRY_WORLDS.find((w) => w.id === id);
  if (!world) throw new Error(`Unknown world ${id}`);
  return world;
}

function jsonLd(a: Audience, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: a.seoTitle,
        description: a.seoDescription,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: SEO_DATE_MODIFIED,
        inLanguage: "en",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: a.h1,
        description: a.inShort,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: AREA,
        audience: { "@type": "BusinessAudience", name: a.name, audienceType: a.descriptor },
        serviceType: "Website design, Google Business Profile optimisation and local SEO",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries` },
          { "@type": "ListItem", position: 3, name: a.name, item: url },
        ],
      },
      faqPageJsonLd(url, faqEntries(a.faq)),
    ],
  };
}

const linkLight =
  "font-v4-sans text-sm text-v4-ink/70 underline underline-offset-4 hover:text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink";

/** One audience page, e.g. /industries/hotels. The audience is taken from the URL. */
export default function AudienceV4() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  const a = audienceBySlug(slug);
  if (!a) return null; // unreachable: routes exist only for known audiences

  const url = `${SITE}${audiencePath(a.slug)}`;
  const c = contentOf(a);
  const step = pillarById(c.step.id);
  const offers = c.offers.flatMap((ref) => {
    const offer = OFFERS.find((o) => o.id === ref.offerId);
    return offer ? [{ offer, why: ref.why }] : [];
  });
  const workCase = a.caseRef ? CASES.find((x) => x.id === a.caseRef?.id && x.published) : undefined;
  const others = AUDIENCES.filter((x) => x.slug !== a.slug);

  return (
    <V4Page>
      <SEOHead title={a.seoTitle} description={a.seoDescription} canonicalUrl={url} lang="en" jsonLd={jsonLd(a, url)} />

      <StateField field="dark" as="section" aria-labelledby="audience-hero">
        <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24">
          <nav aria-label="Breadcrumb" className="font-v4-sans text-sm text-v4-ivory/60">
            <Link to="/industries" className="underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal">
              Industries
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span>{a.name}</span>
          </nav>
          <SystemLabel as="p" className="mt-8 text-v4-ivory/60">
            {a.descriptor}
          </SystemLabel>
          <h1
            id="audience-hero"
            className="mt-6 max-w-[1100px] text-balance font-v4-sans text-[length:clamp(2.25rem,1.1rem+3.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
          >
            {a.h1}
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <p className="max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{a.lead}</p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="audience-short">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <SystemLabel as="p" id="audience-short" className="text-v4-ink/60">
              In short
            </SystemLabel>
            <p className="mt-5 max-w-[46ch] text-pretty font-v4-serif text-[clamp(1.35rem,2.3vw,1.85rem)] leading-[1.32] text-v4-ink">{a.inShort}</p>
          </div>
          <div className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
            <SystemLabel as="p" className="text-v4-ink/60">
              Sounds familiar?
            </SystemLabel>
            <ul className="mt-5 flex flex-col gap-3">
              {a.signs.map((s) => (
                <li key={s} className="flex gap-3 font-v4-sans text-sm leading-relaxed text-v4-ink/85">
                  <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal ring-1 ring-v4-ink/20" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="audience-situation">
        <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
          <h2 id="audience-situation" className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            {c.claim}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/75">{c.situation}</p>

          <SystemLabel as="p" className="mb-6 mt-16 block text-v4-ink/60">
            What we check first
          </SystemLabel>
          <ol className="grid gap-x-14 md:grid-cols-2">
            {c.checks.map((check, i) => (
              <li key={check.where} className="border-t border-v4-ink/15 py-6">
                <p className="font-v4-mono text-[11px] uppercase tracking-[0.16em] text-v4-ink/50">{`${String(i + 1).padStart(2, "0")} · ${check.where}`}</p>
                <p className="mt-3 max-w-[58ch] text-pretty font-v4-sans text-base leading-relaxed text-v4-ink/85">{check.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="audience-build">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 id="audience-build" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory">
              What we build
            </h2>
            {c.buildNote && <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{c.buildNote}</p>}
            {step && (
              <div className="mt-10 border-t border-v4-ivory/15 pt-6">
                <SystemLabel as="p" className="text-v4-signal">{`Usually first · Step ${step.n} ${step.name}`}</SystemLabel>
                <p className="mt-3 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{c.step.why}</p>
                <Link to={pillarPath(step.id)} className="mt-4 inline-block font-v4-sans text-sm text-v4-ivory/80 underline underline-offset-4 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal">
                  {`How the ${step.name} step works`}
                </Link>
              </div>
            )}
          </div>
          <ul className="flex flex-col">
            {c.builds.map((b) => (
              <li key={b} className="flex gap-4 border-t border-v4-ivory/15 py-5 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                <span className="text-pretty font-v4-sans text-lg leading-snug text-v4-ivory">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </StateField>

      {a.calculator && (
        <StateField field="dark" as="div" className="border-t border-v4-ivory/10">
          <CommissionCalculator id="commission-calculator" />
        </StateField>
      )}

      <StateField field="light" as="section" aria-labelledby="audience-offers">
        <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
          <SystemLabel as="p" className="text-v4-ink/60">
            Where to start
          </SystemLabel>
          <h2 id="audience-offers" className="mt-5 max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            Fixed scope, fixed price, in writing before work starts.
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {offers.map(({ offer, why }) => (
              <li key={offer.id} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                <p className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{offer.name}</p>
                <p className="mt-3 font-v4-sans text-sm leading-relaxed text-v4-ink/75">{why}</p>
                <p className="mt-6 font-v4-serif text-3xl text-v4-ink">{offer.price}</p>
                {offer.delivery && <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{`Delivery: ${offer.delivery}`}</p>}
              </li>
            ))}
          </ul>
          <Link to="/services" className={`mt-8 inline-block ${linkLight}`}>
            Scope and details of all offers
          </Link>

          {workCase && a.caseRef && (
            <div className="mt-16 grid gap-6 border-t border-v4-ink/10 pt-10 md:grid-cols-[0.6fr_1.4fr]">
              <SystemLabel as="p" className="text-v4-ink/60">{`${workCase.kind} · ${workCase.status}`}</SystemLabel>
              <div>
                <p className="font-v4-sans text-lg font-semibold text-v4-ink">{workCase.name}</p>
                <p className="mt-2 max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/75">{a.caseRef.note}</p>
                <Link to="/work" className={`mt-4 inline-block ${linkLight}`}>
                  See the project on the Work page
                </Link>
              </div>
            </div>
          )}
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="audience-faq">
        <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            Questions
          </SystemLabel>
          <h2 id="audience-faq" className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            {`Short answers for ${a.name.toLowerCase()}.`}
          </h2>
          <div className="mt-12">
            <FaqList items={a.faq} />
          </div>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="audience-reading">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="audience-reading" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
              Guides for your business
            </h2>
            <p className="mt-3 font-v4-sans text-sm text-v4-ink/60">In German.</p>
            <ul className="mt-6 flex flex-col">
              {a.articles.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/blog/${r.slug}`}
                    lang="de"
                    className="group flex items-baseline justify-between gap-6 border-t border-v4-ink/10 py-4 font-v4-sans text-base text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink"
                  >
                    <span className="underline-offset-4 group-hover:underline">{r.title}</span>
                    <span aria-hidden="true" className="text-v4-ink/40 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">Other kinds of business</h2>
            <ul className="mt-6 flex flex-col">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to={audiencePath(o.slug)}
                    className="group flex items-baseline justify-between gap-6 border-t border-v4-ink/10 py-4 font-v4-sans text-base text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink"
                  >
                    <span className="underline-offset-4 group-hover:underline">{o.name}</span>
                    <span aria-hidden="true" className="text-v4-ink/40 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="audience-start">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="audience-start" className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.08] text-v4-ivory">
            Send the link. We tell you where we would start.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {`${c.checkLine} A person looks at it and sends you up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}.`}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <p className="mx-auto mt-8 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">
            Scope and a fixed price in writing before any work starts. No ranking promises.
          </p>
        </div>
      </StateField>
    </V4Page>
  );
}
