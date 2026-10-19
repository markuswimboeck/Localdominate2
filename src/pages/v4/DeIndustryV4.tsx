import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { FaqList } from "@/components/v4/PageFaq";
import { CheckButton } from "@/components/v4/CheckButton";
import { DeBookCallButton } from "@/components/v4/de/DeBookCallButton";
import { DeCheckSection } from "@/components/v4/de/DeCheckSection";
import { ANCHORS, CHECK_FORM_DE, HERO } from "@/data/v4De";
import { DE_INDUSTRIES, deIndustryBySlug, deIndustryPath } from "@/data/v4DeIndustries";
import type { DeIndustry } from "@/data/v4DeIndustries";
import { faqEntries } from "@/data/v4Faq";
import { CHECK_DE } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";
import { faqPageJsonLd } from "@/lib/seoFaq";

const SITE = "https://localdominate.org";
const AREA = [
  { "@type": "Country", name: "Deutschland" },
  { "@type": "Country", name: "Österreich" },
  { "@type": "Country", name: "Schweiz" },
];

/** Das Formular dieser Seiten kennt Friseure und Fitnessstudios als Betriebsart; /de bleibt unverändert. */
const FORM_TEXTS = {
  ...CHECK_FORM_DE,
  businessTypes: ["Friseur oder Beautystudio", "Fitnessstudio", "Hotel oder Pension", "Ferienvermieter", "Handwerksbetrieb", "Anderes"],
};

function jsonLd(i: DeIndustry, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: i.seoTitle,
        description: i.seoDescription,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: SEO_DATE_MODIFIED,
        inLanguage: "de",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: i.h1,
        description: i.inShort,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: AREA,
        audience: { "@type": "BusinessAudience", name: i.name, audienceType: i.descriptor },
        serviceType: "Website-Erstellung, Google-Unternehmensprofil und lokale Suchmaschinenoptimierung",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Deutsch", item: `${SITE}/de` },
          { "@type": "ListItem", position: 3, name: i.name, item: url },
        ],
      },
      faqPageJsonLd(url, faqEntries(i.faq)),
    ],
  };
}

const linkLight =
  "font-v4-sans text-sm text-v4-ink/70 underline underline-offset-4 hover:text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink";
const rowLink =
  "group flex items-baseline justify-between gap-6 border-t border-v4-ink/10 py-4 font-v4-sans text-base text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink";

/** Deutsche Branchenseite, z. B. /de/friseur. Die Branche kommt aus der URL. */
export default function DeIndustryV4() {
  const { pathname, hash, key } = useLocation();
  const checkRef = useRef<HTMLDivElement>(null);
  const slug = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  const i = deIndustryBySlug(slug);

  // Der Check-Knopf springt zum Formular auf dieser Seite (Anker #check).
  useEffect(() => {
    if (hash !== `#${ANCHORS.check}`) return;
    const target = document.getElementById(ANCHORS.check);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    checkRef.current?.focus({ preventScroll: true });
  }, [hash, key]);

  if (!i) return null; // unreachable: routes exist only for known industries

  const url = `${SITE}${deIndustryPath(i.slug)}`;
  const others = DE_INDUSTRIES.filter((x) => x.slug !== i.slug);

  return (
    <V4Page>
      <SEOHead
        title={i.seoTitle}
        description={i.seoDescription}
        canonicalUrl={url}
        lang="de"
        jsonLd={jsonLd(i, url)}
        alternateUrls={{ de: url, en: `${SITE}${i.enPath}` }}
      />
      <div lang="de">
        <StateField field="dark" as="section" aria-labelledby="dei-hero">
          <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24">
            <nav aria-label="Brotkrumen" className="font-v4-sans text-sm text-v4-ivory/60">
              <Link to="/de" className="underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal">
                Deutsch
              </Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span>{i.name}</span>
            </nav>
            <SystemLabel as="p" className="mt-8 text-v4-ivory/60">{i.descriptor}</SystemLabel>
            <h1
              id="dei-hero"
              className="mt-6 max-w-[1100px] text-balance font-v4-sans text-[length:clamp(2.25rem,1.1rem+3.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
            >
              {i.h1}
            </h1>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
              <p className="max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{i.lead}</p>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <CheckButton to={CHECK_DE.path.replace("/de", deIndustryPath(i.slug))} label={CHECK_DE.label} />
                <DeBookCallButton label={HERO.callLabel} />
              </div>
            </div>
          </div>
        </StateField>

        <StateField field="light" as="section" aria-labelledby="dei-short">
          <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <SystemLabel as="p" id="dei-short" className="text-v4-ink/60">Kurz gesagt</SystemLabel>
              <p className="mt-5 max-w-[46ch] text-pretty font-v4-serif text-[clamp(1.35rem,2.3vw,1.85rem)] leading-[1.32] text-v4-ink">{i.inShort}</p>
            </div>
            <div className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
              <SystemLabel as="p" className="text-v4-ink/60">Kommt Ihnen bekannt vor?</SystemLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {i.signs.map((s) => (
                  <li key={s} className="flex gap-3 font-v4-sans text-sm leading-relaxed text-v4-ink/85">
                    <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal ring-1 ring-v4-ink/20" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </StateField>

        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="dei-situation">
          <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
            <h2 id="dei-situation" className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
              {i.claim}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/75">{i.situation}</p>
            <SystemLabel as="p" className="mb-6 mt-16 block text-v4-ink/60">Das prüfe ich zuerst</SystemLabel>
            <ol className="grid gap-x-14 md:grid-cols-2">
              {i.checks.map((c, n) => (
                <li key={c.where} className="border-t border-v4-ink/15 py-6">
                  <p className="font-v4-mono text-[11px] uppercase tracking-[0.16em] text-v4-ink/50">{`${String(n + 1).padStart(2, "0")} · ${c.where}`}</p>
                  <p className="mt-3 max-w-[58ch] text-pretty font-v4-sans text-base leading-relaxed text-v4-ink/85">{c.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </StateField>

        <StateField field="dark" as="section" aria-labelledby="dei-build">
          <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 id="dei-build" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory">Das baue ich</h2>
              <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{i.buildNote}</p>
            </div>
            <ul className="flex flex-col">
              {i.builds.map((b) => (
                <li key={b} className="flex gap-4 border-t border-v4-ivory/15 py-5 first:border-t-0 first:pt-0">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                  <span className="text-pretty font-v4-sans text-lg leading-snug text-v4-ivory">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </StateField>

        <StateField field="light" as="section" aria-labelledby="dei-offers">
          <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
            <SystemLabel as="p" className="text-v4-ink/60">Womit Sie starten können</SystemLabel>
            <h2 id="dei-offers" className="mt-5 max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
              Fester Umfang, fester Preis, schriftlich vor dem Start.
            </h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {i.offers.map((o) => (
                <li key={o.name} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                  <p className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{o.name}</p>
                  <p className="mt-3 font-v4-sans text-sm leading-relaxed text-v4-ink/75">{o.why}</p>
                  <p className="mt-6 font-v4-serif text-3xl text-v4-ink">{o.price}</p>
                  {o.delivery && <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{`Lieferzeit: ${o.delivery}`}</p>}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/70">
              Eine komplette Website hat Umfang und Preis schriftlich, bevor die Arbeit beginnt. Das klären wir im Gespräch.
            </p>

            <div className="mt-16 grid gap-6 border-t border-v4-ink/10 pt-10 md:grid-cols-[0.6fr_1.4fr]">
              <SystemLabel as="p" className="text-v4-ink/60">Konzept-Demo · kein Kunde</SystemLabel>
              <div>
                <p className="font-v4-sans text-lg font-semibold text-v4-ink">{i.demo.name}</p>
                <p className="mt-2 max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/75">{i.demo.note}</p>
                <div className="mt-4 flex flex-col gap-1">
                  {/* Statische Dateien unter /demo/, daher normale Links statt Router-Links. */}
                  <a href={i.demo.href} className={`inline-flex min-h-11 items-center ${linkLight}`}>
                    Demo ansehen<span aria-hidden="true">&nbsp;→</span>
                  </a>
                  {i.demo.extraHref && (
                    <a href={i.demo.extraHref} className={`inline-flex min-h-11 items-center ${linkLight}`}>
                      {i.demo.extraLabel}
                      <span aria-hidden="true">&nbsp;→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </StateField>

        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="dei-faq">
          <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-24">
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">Fragen</SystemLabel>
            <h2 id="dei-faq" className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
              Kurze Antworten für {i.name}.
            </h2>
            <div className="mt-12">
              <FaqList items={i.faq} />
            </div>
          </div>
        </StateField>

        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="dei-reading">
          <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 id="dei-reading" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">Leitfäden für Ihren Betrieb</h2>
              <ul className="mt-6 flex flex-col">
                {i.articles.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className={rowLink}>
                      <span className="underline-offset-4 group-hover:underline">{r.title}</span>
                      <span aria-hidden="true" className="text-v4-ink/40 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">Weitere Seiten</h2>
              <ul className="mt-6 flex flex-col">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={deIndustryPath(o.slug)} className={rowLink}>
                      <span className="underline-offset-4 group-hover:underline">{o.name}</span>
                      <span aria-hidden="true" className="text-v4-ink/40 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/de" className={rowLink}>
                    <span className="underline-offset-4 group-hover:underline">Hotels, Ferienvermieter und Handwerk</span>
                    <span aria-hidden="true" className="text-v4-ink/40 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </StateField>

        <DeCheckSection ref={checkRef} formTexts={FORM_TEXTS} backTo={i.enPath} />
      </div>
    </V4Page>
  );
}
