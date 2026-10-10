import { Link } from "react-router-dom";
import SEOHead, { getOgCard } from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CHECK_DE } from "@/lib/check";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { Inline, plain } from "@/content/articles/inline";
import type { Block, Section, V4Article } from "@/content/articles/types";

const SITE = "https://localdominate.org";
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

/** "2026-10-09" → "9. Oktober 2026". Pure string work, so prerender and browser agree. */
const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${MONTHS[m - 1]} ${y}`;
};

function jsonLd(a: V4Article) {
  const url = `${SITE}/blog/${a.slug}`;
  return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: a.h1,
          description: a.seoDescription,
          abstract: plain(a.answer),
          image: getOgCard(`/blog/${a.slug}`) ?? `${SITE}/og-image.png`,
          inLanguage: "de-DE",
          datePublished: a.publishedAt,
          dateModified: a.updatedAt,
          isAccessibleForFree: true,
          mainEntityOfPage: { "@id": `${url}#webpage` },
          author: {
            "@type": "Organization",
            "@id": `${SITE}/#editorial-team`,
            name: "LocalDominate Redaktion",
            url: `${SITE}/blog`,
            parentOrganization: { "@id": `${SITE}/#organization` },
          },
          accountablePerson: {
            "@type": "Person",
            "@id": `${SITE}/#person-markus-wimboeck`,
            name: "Markus Wimböck",
            jobTitle: "Founder",
            url: `${SITE}/about`,
            worksFor: { "@id": `${SITE}/#organization` },
          },
          publisher: { "@id": `${SITE}/#organization` },
          articleSection: a.kicker,
          citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: s.publisher })),
        },
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: a.seoTitle,
          description: a.seoDescription,
          inLanguage: "de-DE",
          isPartOf: { "@id": `${SITE}/#website` },
          breadcrumb: { "@id": `${url}#breadcrumb` },
          dateModified: a.updatedAt,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
            { "@type": "ListItem", position: 3, name: a.h1, item: url },
          ],
        },
        ...(a.faq.length > 0 ? [faqPageJsonLd(url, a.faq.map((f) => ({ q: f.q, a: plain(f.a) })))] : []),
      ],
  };
}

/* ---------------------------------------------------------------------------------------- */

const prose = "max-w-[68ch] text-pretty font-v4-sans text-[1.0625rem] leading-[1.75] text-v4-ink/85";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <p className={prose}>
          <Inline text={block.text} />
        </p>
      );
    case "h3":
      return (
        <h3 className="mt-4 max-w-[60ch] font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">
          <Inline text={block.text} />
        </h3>
      );
    case "ul":
    case "ol": {
      const Tag = block.t;
      return (
        <Tag className={`${prose} flex flex-col gap-3 pl-0`}>
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-4">
              {block.t === "ol" ? (
                <span aria-hidden="true" className="mt-[0.2rem] w-6 shrink-0 font-v4-mono text-sm text-v4-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : (
                <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink/45" />
              )}
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <figure className="m-0 max-w-[80ch]">
          <div className="overflow-x-auto rounded-2xl border border-v4-ink/10 bg-v4-white">
            <table className="w-full min-w-[520px] border-collapse text-left font-v4-sans text-sm">
              <caption className="sr-only">{block.caption}</caption>
              <thead>
                <tr>
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="border-b border-v4-ink/10 px-5 py-4 align-bottom font-v4-mono text-[11px] font-normal uppercase tracking-[0.14em] text-v4-ink/60">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-b border-v4-ink/[0.07] last:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className={`px-5 py-4 align-top leading-relaxed ${i === 0 ? "font-medium text-v4-ink" : "text-v4-ink/75"}`}>
                        <Inline text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-3 font-v4-sans text-xs text-v4-ink/55">{block.caption}</figcaption>
        </figure>
      );
    case "note":
      return (
        <aside className="max-w-[68ch] border-l-2 border-v4-signal bg-v4-white px-6 py-5">
          <SystemLabel as="p" className="text-v4-ink/60">
            {block.label}
          </SystemLabel>
          <p className="mt-3 text-pretty font-v4-sans text-base leading-relaxed text-v4-ink/85">
            <Inline text={block.text} />
          </p>
        </aside>
      );
    case "steps":
      return (
        <ol className="grid max-w-[80ch] gap-px overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-ink/10 md:grid-cols-2">
          {block.items.map((s, i) => (
            <li key={s.title} className="bg-v4-ivory p-6 md:[&:last-child:nth-child(odd)]:col-span-2">
              <SystemLabel as="p" className="text-v4-ink/50">{`Schritt ${String(i + 1).padStart(2, "0")}`}</SystemLabel>
              <p className="mt-3 font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{s.title}</p>
              <p className="mt-2 text-pretty font-v4-sans text-sm leading-relaxed text-v4-ink/75">
                <Inline text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      );
  }
}

function SectionView({ section, n }: { section: Section; n: number }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-h`} className="scroll-mt-24 border-t border-v4-ink/10 pt-12 first:border-t-0 first:pt-0">
      <SystemLabel as="p" className="text-v4-ink/45">
        {String(n).padStart(2, "0")}
      </SystemLabel>
      <h2 id={`${section.id}-h`} className="mt-4 max-w-[24ch] text-balance font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-[1.12] text-v4-ink md:max-w-[30ch]">
        {section.title}
      </h2>
      {section.answer && (
        <p className="mt-5 max-w-[62ch] text-pretty font-v4-sans text-base font-medium leading-relaxed text-v4-ink md:text-lg">
          <Inline text={section.answer} />
        </p>
      )}
      <div className="mt-6 flex flex-col gap-6">
        {section.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>
    </section>
  );
}

function Contents({ sections, faq }: { sections: readonly Section[]; faq: boolean }) {
  const items = [...sections.map((s) => ({ id: s.id, title: s.title })), ...(faq ? [{ id: "fragen", title: "Häufige Fragen" }] : [])];
  return (
    <ol className="flex flex-col">
      {items.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-3 border-t border-v4-ink/10 py-3 font-v4-sans text-sm leading-snug text-v4-ink/70 transition-colors hover:text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink"
          >
            <span aria-hidden="true" className="w-5 shrink-0 font-v4-mono text-[11px] leading-5 text-v4-ink/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

function Cta({ title, text, kicker = "Kostenloser Check", label = CHECK_DE.label, to = CHECK_DE.path }: V4Article["cta"]) {
  return (
    <StateField field="dark" as="section" aria-labelledby="article-cta">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <SystemLabel as="p" className="text-v4-signal">
          {kicker}
        </SystemLabel>
        <h2 id="article-cta" className="mt-5 max-w-[22ch] text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-pretty font-v4-sans text-base text-v4-ivory/70">{text}</p>
        <div className="mt-8">
          <CheckButton label={label} to={to} />
        </div>
      </div>
    </StateField>
  );
}

/** A blog article in the V4 design. The data comes from src/content/articles/data/<slug>.ts. */
export default function ArticleV4({ article: a }: { article: V4Article }) {
  const half = Math.ceil(a.sections.length / 2);
  return (
    <V4Page>
      <SEOHead
        title={a.seoTitle}
        description={a.seoDescription}
        canonicalUrl={`${SITE}/blog/${a.slug}`}
        lang="de"
        ogType="article"
        articlePublishedTime={a.publishedAt}
        articleModifiedTime={a.updatedAt}
        articleAuthor="LocalDominate Redaktion"
        articleSection={a.kicker}
        jsonLd={jsonLd(a)}
      />

      <div lang="de">
        <StateField field="dark" as="section" aria-labelledby="article-title">
          <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
            <nav aria-label="Brotkrumen" className="font-v4-sans text-sm text-v4-ivory/60">
              <Link to="/insights" className="underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal">
                Insights
              </Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span>{a.kicker}</span>
            </nav>
            <h1 id="article-title" className="mt-8 max-w-[20ch] text-balance font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[1.02] tracking-tight text-v4-ivory md:max-w-[24ch]">
              {a.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-pretty font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/75">
              <Inline text={a.lead} />
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-v4-ivory/15 pt-6 font-v4-sans text-sm">
              <div>
                <dt className="font-v4-mono text-[11px] uppercase tracking-[0.16em] text-v4-ivory/50">Aktualisiert</dt>
                <dd className="mt-1 text-v4-ivory/85">
                  <time dateTime={a.updatedAt}>{formatDate(a.updatedAt)}</time>
                </dd>
              </div>
              <div>
                <dt className="font-v4-mono text-[11px] uppercase tracking-[0.16em] text-v4-ivory/50">Lesezeit</dt>
                <dd className="mt-1 text-v4-ivory/85">{`${a.readingTime} Minuten`}</dd>
              </div>
              <div>
                <dt className="font-v4-mono text-[11px] uppercase tracking-[0.16em] text-v4-ivory/50">Redaktion</dt>
                <dd className="mt-1 text-v4-ivory/85">
                  {"LocalDominate Redaktion, verantwortlich "}
                  <Link to="/about" className="underline underline-offset-4 hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal">
                    Markus Wimböck
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </StateField>

        <StateField field="light" as="section" aria-labelledby="article-answer">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <SystemLabel as="p" id="article-answer" className="text-v4-ink/60">
                Die kurze Antwort
              </SystemLabel>
              <p className="mt-5 max-w-[46ch] text-pretty font-v4-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.3] text-v4-ink">
                <Inline text={a.answer} />
              </p>
            </div>
            <div className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
              <SystemLabel as="p" className="text-v4-ink/60">
                Das Wichtigste in Kürze
              </SystemLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {a.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 font-v4-sans text-sm leading-relaxed text-v4-ink/85">
                    <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal ring-1 ring-v4-ink/20" />
                    <span>
                      <Inline text={t} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </StateField>

        <StateField field="light" as="div" className="border-t border-v4-ink/10">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[240px_1fr] lg:gap-20">
            <aside aria-label="Inhalt" className="lg:sticky lg:top-24 lg:self-start">
              <details className="group lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl border border-v4-ink/15 px-5 py-4 font-v4-sans text-sm font-medium text-v4-ink">
                  Inhalt
                  <span aria-hidden="true" className="transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3">
                  <Contents sections={a.sections} faq={a.faq.length > 0} />
                </div>
              </details>
              <div className="hidden lg:block">
                <SystemLabel as="p" className="mb-4 text-v4-ink/50">
                  Inhalt
                </SystemLabel>
                <Contents sections={a.sections} faq={a.faq.length > 0} />
              </div>
            </aside>
            <div className="flex min-w-0 flex-col gap-12">
              {a.sections.slice(0, half).map((s, i) => (
                <SectionView key={s.id} section={s} n={i + 1} />
              ))}
            </div>
          </div>
        </StateField>

        {a.sections.length > half && (
          <>
            <Cta {...a.cta} />
            <StateField field="light" as="div">
              <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[240px_1fr] lg:gap-20">
                <div aria-hidden="true" className="hidden lg:block" />
                <div className="flex min-w-0 flex-col gap-12">
                  {a.sections.slice(half).map((s, i) => (
                    <SectionView key={s.id} section={s} n={half + i + 1} />
                  ))}
                </div>
              </div>
            </StateField>
          </>
        )}

        {a.faq.length > 0 && (
          <StateField field="light" as="section" id="fragen" className="scroll-mt-24 border-t border-v4-ink/10" aria-labelledby="fragen-h">
            <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
              <SystemLabel as="p" className="text-v4-ink/60">
                Fragen
              </SystemLabel>
              <h2 id="fragen-h" className="mt-5 font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
                Häufige Fragen
              </h2>
              <div className="mt-10 border-b border-v4-ink/15">
                {a.faq.map((f) => (
                  <div key={f.q} className="grid gap-2 border-t border-v4-ink/15 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                    <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{f.q}</h3>
                    <p className="max-w-xl font-v4-sans text-[0.95rem] leading-relaxed text-v4-ink/75">
                      <Inline text={f.a} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </StateField>
        )}

        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="article-sources">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 id="article-sources" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
                Quellen
              </h2>
              <ol className="mt-6 flex flex-col">
                {a.sources.map((s) => (
                  <li key={s.url} className="border-t border-v4-ink/10 py-4">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-v4-sans text-sm font-medium text-v4-ink underline decoration-v4-ink/30 underline-offset-4 hover:decoration-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-ink">
                      {s.title}
                    </a>
                    <p className="mt-1 font-v4-sans text-xs text-v4-ink/55">{s.publisher}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 max-w-md font-v4-sans text-xs leading-relaxed text-v4-ink/55">
                Wir nennen nur Zahlen, die wir belegen können. Wo es keine verlässliche Zahl gibt, beschreiben wir die
                Methode. Fehler gefunden? Schreiben Sie an info@localdominate.org.
              </p>
            </div>
            {a.related.length > 0 && (
              <div>
                <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">Weiterlesen</h2>
                <ul className="mt-6 flex flex-col">
                  {a.related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/blog/${r.slug}`}
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
                <Link to="/insights" className="mt-6 inline-block font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline">
                  Alle Artikel
                </Link>
              </div>
            )}
          </div>
        </StateField>

        {a.sections.length <= half && <Cta {...a.cta} />}
      </div>
    </V4Page>
  );
}
