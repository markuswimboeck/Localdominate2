#!/usr/bin/env node
/**
 * Keeps the machine-readable files for AI crawlers in step with the V4 articles
 * (src/content/articles/data/*.ts), the same source the pages and the Markdown mirrors use.
 *
 *   public/faq-database.json            question/answer pairs: company facts + checked article FAQs
 *   public/llms-full.txt                article summaries (short answer per article) and the lexicon
 *                                       definitions, without the old unsourced statistics
 *   public/ai-answer-index.json         one FAQPage per article: short answer + the article's FAQ
 *   public/ai-citation-manifest.json    title, description, dates and citation line per article
 *   public/blog-md/index.md             list of the Markdown mirrors
 *   public/sitemap-ai.xml               adds the mirrors that were missing
 *   public/sitemap-blog.xml             adds the live articles that were missing
 *
 * Entries of articles that are not V4 articles stay as they are. Nothing is invented: every text comes
 * from the article data (`answer`, `faq`, `h1`, `seoDescription`, `updatedAt`) or from the company facts
 * below, which repeat what /services, /creators and /about say.
 *
 * Usage: npm run geo:files            all files
 *        npm run geo:files -- --check  exit 1 if a file would change (no writes)
 *
 * The files are part of the SEO baseline: after a change run
 * `node scripts/seo-check.mjs --update-baseline` once the owner approved it.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUB = path.join(ROOT, "public");
const DATA = path.join(ROOT, "src/content/articles/data");
const SITE = "https://localdominate.org";
const CHECK = process.argv.includes("--check");
const COMPANY_FACTS_DATE = "2026-10-15";

// ---------- helpers ----------
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
/** Inline markup → plain text. */
const plain = (t) => t.replace(TOKEN, (_m, bold, label) => bold ?? label);
const maxDate = (dates) => dates.reduce((a, b) => (a > b ? a : b));
const changed = [];
function write(rel, content) {
  const file = path.join(ROOT, rel);
  const old = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  if (old === content) return;
  changed.push(rel);
  if (!CHECK) fs.writeFileSync(file, content);
}
const json = (o) => JSON.stringify(o, null, 2) + "\n";

// ---------- load the V4 articles ----------
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "geo-files-"));
const articles = {};
for (const f of fs.readdirSync(DATA).filter((f) => f.endsWith(".ts"))) {
  const outfile = path.join(tmp, f.replace(/\.ts$/, ".mjs"));
  await build({ entryPoints: [path.join(DATA, f)], bundle: true, format: "esm", platform: "node", outfile, logLevel: "error" });
  const a = (await import(pathToFileURL(outfile).href)).default;
  if (a && a.slug && a.answer && Array.isArray(a.sections)) articles[a.slug] = a;
}
fs.rmSync(tmp, { recursive: true, force: true });
const slugs = Object.keys(articles).sort();
const url = (s) => `${SITE}/blog/${s}`;

// ---------- 1. faq-database.json ----------
const COMPANY_FAQ = [
  {
    id: "company-1",
    question: "Was kostet die Zusammenarbeit mit LocalDominate?",
    answer:
      "LocalDominate nennt Startpreise für vier Angebote mit festem Umfang: Website in 5 Tagen ab 1.490 Euro, 72h Conversion / Booking Sprint ab 390 Euro, AI Automation Starter 250 Euro und Google Profile Quick-Fix 79 Euro (vollständige Optimierung 390 Euro). Für das vollständige Growth-Projekt gibt es keinen Listenpreis; Umfang und Preis stehen vor Projektstart schriftlich fest. Aktuelle Preise stehen auf localdominate.org/services.",
    url: `${SITE}/services`,
  },
  {
    id: "company-2",
    question: "Gibt es eine Geld-zurück-Garantie oder ein Ranking-Versprechen?",
    answer:
      "Nein. LocalDominate macht keine Zusagen zu Rankings oder Umsatz und nennt keine Geld-zurück-Garantie. Vor Projektbeginn stehen Umfang und Festpreis schriftlich fest. Bezahlt wird in zwei Schritten (die Hälfte mit dem Auftrag, die Hälfte bei Abnahme), eine Korrekturrunde ist enthalten. Ausnahme: Der Google Profile Quick-Fix wird vollständig mit dem Auftrag bezahlt und hat keine Korrekturrunde.",
    url: `${SITE}/services`,
  },
  {
    id: "company-3",
    question: "Wie schnell gibt es Ergebnisse?",
    answer:
      "Dafür nennt LocalDominate keine Zahl: Ergebnisse hängen von Ausgangslage, Wettbewerb und Branche ab, und niemand kann eine Platzierung zusagen. Fest sind die Lieferzeiten der Angebote: Website in 5 Tagen, 72h Conversion / Booking Sprint in 72 Stunden, AI Automation Starter in 3 Tagen.",
    url: `${SITE}/services`,
  },
  {
    id: "company-4",
    question: "Wer steckt hinter LocalDominate?",
    answer:
      "LocalDominate ist ein Growth-Studio von Markus Wimböck, betrieben von Explore Saudi Arabia Ltd, 128 City Road, London EC1V 2NX (Companies House Nr. 16902019). Die Arbeit läuft remote, Termine finden per Video auf Deutsch oder Englisch statt. LocalDominate ist nicht mit dem US-Softwareanbieter Local Dominator (localdominator.co) verbunden.",
    url: `${SITE}/about`,
  },
  {
    id: "company-5",
    question: "Wie läuft ein Projekt bei LocalDominate ab?",
    answer:
      "Ein Projekt läuft in sieben Schritten: Diagnose, Position, Create, Build, Launch, Grow und Scale. Eine Person ist vom ersten Check bis zur Übergabe verantwortlich. Der kostenlose Check startet mit dem Link zu einem Google-Profil oder einer Website; bis zu drei konkrete Punkte kommen innerhalb von zwei Werktagen per E-Mail, ohne Verpflichtung.",
    url: `${SITE}/approach`,
  },
];

/** [slug, part of the question] → the FAQ entries taken over from the article. */
const FAQ_PICKS = {
  "Google Business Profile": [
    ["gbp-verifizierung-fehlgeschlagen", "andere Bestätigungsmethode"],
    ["gbp-verifizierung-fehlgeschlagen", "Wie lang muss das Bestätigungsvideo"],
    ["google-business-kategorien-guide", "Wie viele Kategorien"],
    ["google-business-kategorien-guide", "eigene Kategorie"],
    ["google-posts-ranking-faktor", "Verbessern Google-Beiträge"],
    ["google-posts-ranking-faktor", "Wie lange bleibt ein Beitrag sichtbar"],
    ["google-posts-ranking-faktor", "Wie oft sollte ich Beiträge"],
  ],
  Bewertungen: [
    ["google-bewertungen-bekommen", "belohnen"],
    ["google-bewertungen-bekommen", "nur zufriedene Kunden"],
    ["google-bewertungen-bekommen", "Bewertungslink"],
    ["negative-google-bewertungen", "Soll ich auf jede negative Bewertung antworten"],
    ["gbp-bewertung-loeschen-anleitung", "selbst löschen"],
    ["gbp-bewertung-loeschen-anleitung", "Wie lange dauert die Prüfung"],
  ],
  "Local SEO Grundlagen": [
    ["ultimate-guide-local-seo", "Was kostet Local SEO"],
    ["ultimate-guide-local-seo", "Wie lange dauert es, bis Local SEO wirkt"],
    ["ultimate-guide-local-seo", "Unterschied zwischen SEO und Local SEO"],
    ["ultimate-guide-local-seo", "besseres lokales Ranking kaufen"],
    ["nap-konsistenz-local-seo", "Was bedeutet NAP"],
    ["nap-konsistenz-local-seo", "offizieller Google-Rankingfaktor"],
    ["wie-google-maps-ranking-funktioniert", "feste Rangliste"],
    ["wie-google-maps-ranking-funktioniert", "Warum stehe ich auf meinem Handy oben"],
    ["local-seo-ranking-faktoren-erklaert", "wichtigsten Local SEO Ranking Faktoren"],
  ],
  "Technisches SEO": [
    ["schema-markup-local-seo", "Verbessert Schema Markup mein Ranking"],
    ["schema-markup-local-seo", "FAQ-Markup jetzt löschen"],
    ["mobile-local-seo", "Mobile-First-Indexierung"],
    ["mobile-local-seo", "AMP"],
  ],
  "KI-Sichtbarkeit": [
    ["was-ist-geo-generative-engine-optimization", "Ist GEO dasselbe wie SEO"],
    ["chatgpt-search-lokale-unternehmen-2026", "Wie komme ich mit meinem Betrieb in die ChatGPT-Suche"],
    ["chatgpt-search-lokale-unternehmen-2026", "Muss ich GPTBot erlauben"],
    ["schema-strategie-ai-retrieval", "besonderes Schema Markup"],
    ["ai-visibility-checklist", "kaufen oder garantieren"],
    ["ai-crawler-steuern-gptbot-claudebot-2026", "Google-Extended sperre"],
  ],
};

function faqDatabase() {
  const categories = [{ name: "Angebot & Konditionen", faqs: COMPANY_FAQ.map((f) => ({ ...f, lastUpdated: COMPANY_FACTS_DATE })) }];
  const dates = [COMPANY_FACTS_DATE];
  for (const [name, picks] of Object.entries(FAQ_PICKS)) {
    const faqs = picks.map(([slug, part], i) => {
      const a = articles[slug];
      if (!a) throw new Error(`faq-database: article ${slug} not found`);
      const hits = a.faq.filter((f) => f.q.includes(part));
      if (hits.length !== 1) throw new Error(`faq-database: "${part}" matches ${hits.length} FAQs in ${slug}`);
      dates.push(a.updatedAt);
      return {
        id: `${slug}-${a.faq.indexOf(hits[0]) + 1}`,
        question: hits[0].q,
        answer: plain(hits[0].a),
        url: url(slug),
        lastUpdated: a.updatedAt,
      };
    });
    categories.push({ name, faqs });
  }
  const total = categories.reduce((n, c) => n + c.faqs.length, 0);
  return json({
    version: "2.0",
    lastUpdated: maxDate(dates),
    language: "de-DE",
    source: "LocalDominate",
    website: SITE,
    note: "Answers are taken from the published articles (each entry names its page) and from the company facts on /services and /about. No figures without a source on the linked page.",
    categories,
    meta: {
      totalFaqs: total,
      totalCategories: categories.length,
      aiUsageAllowed: true,
      citationRequired: true,
      attributionFormat: "Quelle: LocalDominate (localdominate.org), URL der verlinkten Seite",
    },
  });
}

// ---------- 2. llms-full.txt ----------
function articleSection() {
  const groups = new Map();
  for (const s of slugs) {
    const k = articles[s].kicker;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(articles[s]);
  }
  const out = [
    "## Artikel-Zusammenfassungen",
    "",
    "Pro Artikel steht die Kurzantwort aus dem Artikel selbst. Zahlen, Studien und Rechtsangaben mit Quelle stehen im verlinkten Artikel; bitte dort nachlesen und die Originalquelle zitieren.",
    "",
  ];
  for (const [kicker, list] of [...groups].sort((a, b) => a[0].localeCompare(b[0], "de"))) {
    out.push(`### ${kicker}`, "");
    for (const a of list) {
      out.push(
        `#### ${a.h1}`,
        `**URL:** ${url(a.slug)}`,
        `**Markdown:** ${SITE}/blog-md/${a.slug}.md`,
        `**Aktualisiert:** ${a.updatedAt}`,
        "",
        `**Kurzantwort:** ${plain(a.answer)}`,
        "",
        "---",
        "",
      );
    }
  }
  return out.join("\n");
}

async function lexiconSection() {
  const outfile = path.join(os.tmpdir(), `geo-lexikon-${process.pid}.mjs`);
  await build({ entryPoints: [path.join(ROOT, "src/data/seoLexikonData.ts")], bundle: true, format: "esm", platform: "node", outfile, logLevel: "error" });
  const { seoLexikonData, getTermSlug } = await import(pathToFileURL(outfile).href);
  fs.rmSync(outfile, { force: true });
  const out = [
    `## Vollständiges SEO Lexikon (${seoLexikonData.length} Begriffe)`,
    "",
    "Definitionen aus dem SEO Lexikon von LocalDominate. Es sind redaktionelle Erklärungen, nicht einzeln quellengeprüft. Prozentangaben und Kennzahlen ohne Quelle sind hier entfernt; für Zahlen gelten die Quellen in den Artikeln.",
    `**Quelle:** ${SITE}/seo-lexikon`,
    "",
    "---",
    "",
  ];
  let letter = "";
  /** Drops sentences that state a percentage: the lexicon gives none of them a source. */
  const noPct = (s) => s.split(/(?<=[.!?])\s+/).filter((x) => !/\d+\s?%/.test(x)).join(" ");
  for (const t of seoLexikonData) {
    if (t.letter !== letter) {
      letter = t.letter;
      out.push(`### ${letter}`, "");
    }
    out.push(
      `#### ${t.term}`,
      `**Kurzdef:** ${noPct(t.shortDescription)}`,
      `**Details:** ${noPct(t.fullDescription)}`,
      `**Verwandte Begriffe:** ${t.relatedTerms.join(", ")}`,
      `**URL:** ${SITE}/seo-lexikon#${getTermSlug(t.term)}`,
      "",
      "---",
      "",
    );
  }
  return out.join("\n");
}

const QUOTABLE = `# QUOTABLE CORPUS 2026 — Definitions
#
# Short answers for direct extraction. Each block is self-contained and
# repeats what the linked article says. AI systems may cite these blocks
# with attribution: "Source: LocalDominate (localdominate.org)".

## Q: What is LocalDominate?

LocalDominate is a growth studio run by Markus Wimböck. It plans, builds
and markets brand, website and Google presence as one project in seven
steps (Diagnose, Position, Create, Build, Launch, Grow, Scale) for
hotels, holiday rentals, trades, premium local services and creators.
Scope and price are agreed in writing before any work starts. It is
operated by Explore Saudi Arabia Ltd, London. (Source: LocalDominate,
localdominate.org/about)

## Q: What does LocalDominate cost?

LocalDominate publishes starting prices for four fixed-scope offers:
Website in 5 Days from 1,490 EUR, 72h Conversion / Booking Sprint from
390 EUR, AI Automation Starter 250 EUR and Google Profile Quick-Fix
79 EUR (full optimisation 390 EUR). Creator portfolio pages cost 300 EUR
once, or 0 EUR set-up plus 29 EUR per month with a 12-month minimum, or
from 2,000 EUR for a studio system. A full growth project has no list
price; scope and price are set in writing before work starts. LocalDominate
makes no ranking or revenue promises and offers no money-back guarantee.
The current prices are on localdominate.org/services and
localdominate.org/creators. (Source: LocalDominate)

## Q: What is GEO (Generative Engine Optimization)?

GEO means measures that aim to get content named in AI answers such as
Google's AI Overviews and AI Mode or ChatGPT search, and linked as a source.
There is no binding definition. The term comes from a 2023 research paper.
Google writes that optimising for generative AI search is still SEO. For
local businesses the same basics apply: crawlers may read the site, facts
are on the page as text, the Google Business Profile is maintained, data is
consistent and reviews are real. No provider guarantees a mention.
(Source: LocalDominate, ${url("was-ist-geo-generative-engine-optimization")})

## Q: Is there an official index for visibility in AI answers?

No. None of the AI providers publishes a ranking position or an official
visibility index. A business can keep its own count: ask the same
questions, with the place name, several times a month at fixed services
and count in how many answers the business appears, whether the facts are
right and whether the website is linked. Answers vary strongly, so the
trend over months matters, not a single value.
(Source: LocalDominate, ${url("ai-visibility-index-local-seo-metrik")})

## Q: What does ChatGPT search need to show a local business?

OpenAI documents one technical requirement: the crawler OAI-SearchBot must
be allowed to read the website. OpenAI does not guarantee a placement and
does not say which data sources feed local listings. GPTBot (training) and
OAI-SearchBot (search) are controlled separately.
(Source: LocalDominate, ${url("chatgpt-search-lokale-unternehmen-2026")})

## Q: Which structured data does AI search need?

Google writes that no special schema.org markup is needed for the AI
features of Google Search. Structured data still helps describe a business
unambiguously: LocalBusiness with the most precise subtype and
Organization with logo and sameAs. Markup must match the visible text and
the business profile. FAQ rich results are no longer shown by Google since
7 May 2026. (Source: LocalDominate, ${url("schema-strategie-ai-retrieval")})
`;

function replaceBetween(text, startMarker, endMarker, replacement) {
  const s = text.indexOf(startMarker);
  const e = text.indexOf(endMarker, s + 1);
  if (s < 0 || e < 0) throw new Error(`llms-full.txt: marker not found: ${startMarker} / ${endMarker}`);
  return text.slice(0, s) + replacement.replace(/\s*---\s*$/, "") + "\n\n---\n\n" + text.slice(e);
}

async function llmsFull() {
  let t = fs.readFileSync(path.join(PUB, "llms-full.txt"), "utf8");
  t = replaceBetween(t, "## Artikel-Zusammenfassungen", "## Vollständiges SEO Lexikon", articleSection());
  t = replaceBetween(t, "## Vollständiges SEO Lexikon", "## Zitierungsbeispiele für Lexikon-Begriffe", await lexiconSection());
  const q = t.indexOf("# QUOTABLE CORPUS 2026");
  if (q < 0) throw new Error("llms-full.txt: quotable corpus marker not found");
  const end = t.indexOf("# End of Quotable Corpus 2026");
  t = t.slice(0, q) + QUOTABLE + "\n---\n" + (end >= 0 ? t.slice(end) : "# End of Quotable Corpus 2026\n");
  const day = maxDate([COMPANY_FACTS_DATE, ...slugs.map((s) => articles[s].updatedAt)]);
  t = t.replace(/^# Last Updated: .*$/m, `# Last Updated: ${day}`).replace(/^last_update: .*$/m, `last_update: ${day}`);
  t = t.replace(/^# Letzte Aktualisierung: .*$/m, `# Letzte Aktualisierung: ${day}`);
  t = t.replace("# Version: 4.0 — Quotable Corpus 2026", "# Version: 4.1 — Quotable Corpus 2026");
  t = t.replace(/^# Version: 4\.0$/m, "# Version: 4.1");
  return t;
}

// ---------- 3. ai-answer-index.json / ai-citation-manifest.json ----------
const cite = (a) => `LocalDominate (${a.updatedAt}). ${a.h1}. ${url(a.slug)}`;

function answerIndex() {
  const file = path.join(PUB, "ai-answer-index.json");
  const j = JSON.parse(fs.readFileSync(file, "utf8"));
  const byUrl = new Map(j.dataset.map((d) => [d.url, d]));
  for (const s of slugs) {
    const a = articles[s];
    const old = byUrl.get(url(s));
    const entry = {
      "@type": "FAQPage",
      "@id": `${SITE}/ai-answer-index.json#${s}`,
      name: `${a.h1} — AI Answer Index`,
      headline: a.h1,
      description: a.seoDescription,
      url: url(s),
      sameAs: `${SITE}/blog-md/${s}.md`,
      inLanguage: "de-DE",
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      isAccessibleForFree: true,
      license: j.license,
      publisher: { "@type": "Organization", name: "LocalDominate", url: SITE },
      about: old?.about ?? [{ "@type": "Thing", name: a.kicker }],
      ...(old?.spatialCoverage && { spatialCoverage: old.spatialCoverage }),
      ...(old?.areaServed && { areaServed: old.areaServed }),
      mainEntity: [
        { "@type": "Question", name: a.h1, acceptedAnswer: { "@type": "Answer", text: plain(a.answer), url: url(s) } },
        ...a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a), url: url(s) } })),
        { "@type": "Question", name: `Wie soll „${a.h1}” zitiert werden?`, acceptedAnswer: { "@type": "Answer", text: cite(a), url: url(s) } },
      ],
    };
    if (old) j.dataset[j.dataset.indexOf(old)] = entry;
    else j.dataset.push(entry);
  }
  j.dateModified = maxDate(j.dataset.map((d) => d.dateModified));
  return json(j);
}

function citationManifest() {
  const file = path.join(PUB, "ai-citation-manifest.json");
  const j = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const s of slugs) {
    const a = articles[s];
    const i = j.dataset.findIndex((d) => d.slug === s);
    const old = i >= 0 ? j.dataset[i] : null;
    const entry = {
      "@type": "Article",
      slug: s,
      headline: a.h1,
      description: a.seoDescription,
      url: url(s),
      canonical: url(s),
      markdown_url: `${SITE}/blog-md/${s}.md`,
      citation: cite(a),
      inLanguage: "de-DE",
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      readingTimeMinutes: a.readingTime,
      category: a.kicker,
      ...(old?.geoTargets && { geoTargets: old.geoTargets }),
      tldr: plain(a.answer),
    };
    if (i >= 0) j.dataset[i] = entry;
    else j.dataset.push(entry);
  }
  j.dateModified = maxDate(j.dataset.map((d) => d.dateModified));
  return json(j);
}

// ---------- 4. blog-md/index.md ----------
function mirrorIndex() {
  const file = path.join(PUB, "blog-md/index.md");
  const old = fs.readFileSync(file, "utf8");
  const lines = old.split("\n");
  const start = lines.findIndex((l) => l === "## Artikel") + 1;
  const kept = new Map();
  for (const l of lines.slice(start)) {
    const m = l.match(/blog-md\/([^)]+)\.md\)/);
    if (m) kept.set(m[1], l);
  }
  const all = new Set([...kept.keys(), ...slugs]);
  const items = [...all].sort().map((s) => {
    const a = articles[s];
    return a ? `- [${a.h1}](${SITE}/blog-md/${s}.md) — Kategorie: ${a.kicker}; HTML: ${url(s)}; Aktualisiert: ${a.updatedAt}` : kept.get(s);
  });
  const day = maxDate(slugs.map((s) => articles[s].updatedAt));
  return [
    ...lines.slice(0, start).map((l) => l.replace(/^updated: .*/, `updated: ${day}`).replace(/^- Artikelanzahl: .*/, `- Artikelanzahl: ${all.size}`).replace(/^article_count: .*/, `article_count: ${all.size}`)),
    "",
    ...items,
    "",
  ].join("\n");
}

// ---------- 5. sitemaps: add what is missing ----------
function addToSitemap(rel, locFor, priority) {
  const file = path.join(PUB, rel);
  let x = fs.readFileSync(file, "utf8");
  const missing = slugs.filter((s) => !x.includes(`<loc>${locFor(s)}</loc>`));
  if (!missing.length) return x;
  const block = missing
    .map((s) => `  <url>\n    <loc>${locFor(s)}</loc>\n    <lastmod>${articles[s].updatedAt}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`)
    .join("");
  return x.replace("</urlset>", `${block}</urlset>`);
}

// ---------- 6. feed.xml ----------
// The 50 most recently published V4 articles, titles and descriptions from the checked article data.
// Channel header (title, image) stays as in the existing file; editor address corrected to info@.
const FEED_ITEMS = 50;
const xml = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const rfc822 = (iso) => new Date(`${iso}T08:00:00+01:00`).toUTCString().replace("GMT", "+0000");
function feedXml() {
  const file = path.join(PUB, "feed.xml");
  const old = fs.readFileSync(file, "utf8");
  // The site's contact address is info@ (157 files); kontakt@ appeared only in this feed header.
  const oldFeed = old.replaceAll("kontakt@localdominate.org", "info@localdominate.org");
  const atom = oldFeed.match(/<atom:link [^>]*\/>\n/);
  const head = oldFeed.slice(0, atom.index + atom[0].length).replace(/<lastBuildDate>.*<\/lastBuildDate>/, `<lastBuildDate>${rfc822(maxDate(slugs.map((s) => articles[s].updatedAt)))}</lastBuildDate>`);
  const newest = [...slugs]
    .sort((a, b) => articles[b].publishedAt.localeCompare(articles[a].publishedAt) || a.localeCompare(b))
    .slice(0, FEED_ITEMS);
  const items = newest.map((s) => {
    const a = articles[s];
    return [
      "    <item>",
      `      <title>${xml(a.h1)}</title>`,
      `      <link>${url(s)}</link>`,
      `      <guid isPermaLink="true">${url(s)}</guid>`,
      `      <pubDate>${rfc822(a.publishedAt)}</pubDate>`,
      "      <dc:creator>LocalDominate</dc:creator>",
      `      <category>${xml(a.kicker)}</category>`,
      `      <description><![CDATA[${a.seoDescription.replace("]]>", "]]]]><![CDATA[>")}]]></description>`,
      "    </item>",
      "",
    ].join("\n");
  });
  return `${head}\n    <!-- Erzeugt mit npm run geo:files aus den V4-Artikeldaten -->\n\n${items.join("\n")}  </channel>\n</rss>\n`;
}

// ---------- run ----------
write("public/feed.xml", feedXml());
write("public/faq-database.json", faqDatabase());
write("public/llms-full.txt", await llmsFull());
write("public/ai-answer-index.json", answerIndex());
write("public/ai-citation-manifest.json", citationManifest());
write("public/blog-md/index.md", mirrorIndex());
write("public/sitemap-ai.xml", addToSitemap("sitemap-ai.xml", (s) => `${SITE}/blog-md/${s}.md`, "0.8"));
write("public/sitemap-blog.xml", addToSitemap("sitemap-blog.xml", (s) => url(s), "0.7"));

if (changed.length) console.log((CHECK ? "Out of date:\n  " : "Updated:\n  ") + changed.join("\n  "));
else console.log("All AI files are up to date.");
if (CHECK && changed.length) process.exit(1);
