/**
 * Blog articles in the V4 design ("V4 articles").
 *
 * One file per article in `./data/<slug>.ts` with a default export of type `V4Article`. Adding a
 * file is all it takes: the route, the prerendered page, hydration and the Markdown mirror
 * (`npm run blog:md`) are derived from the files in that folder. The old component in
 * `src/pages/blog/` stays in the repo until the whole blog is migrated, but its route is replaced.
 *
 * Inline markup in every text field: `**bold**` and `[link text](/path)` (internal path or
 * https URL). Nothing else is parsed.
 *
 * Truth rules (Project Bible V4, Hard Rule 06): no figure, study result, client, case or quote
 * without a source in `sources`. Google's own documentation beats agency studies. Where a number
 * cannot be sourced, describe the method instead.
 */

export type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: readonly string[] }
  | { t: "ol"; items: readonly string[] }
  | { t: "table"; caption: string; head: readonly string[]; rows: readonly (readonly string[])[] }
  /** A highlighted remark: practical tip, warning or definition. */
  | { t: "note"; label: string; text: string }
  /** Numbered steps with a short title each. */
  | { t: "steps"; items: readonly { title: string; text: string }[] };

export type Section = {
  /** Anchor id, lowercase with hyphens. Keep it stable once published (links point at it). */
  id: string;
  title: string;
  /** One or two sentences that answer the section on their own (shown first, used by AI search). */
  answer?: string;
  blocks: readonly Block[];
};

export type Source = { title: string; publisher: string; url: string };

export type V4Article = {
  slug: string;
  /** Language of the article body. All migrated articles are German for now. */
  lang: "de";
  /** <title>, max. 60 characters including " | LocalDominate" if it should appear. */
  seoTitle: string;
  /** Meta description, 140 to 160 characters. */
  seoDescription: string;
  h1: string;
  /** Topic label above the H1. */
  kicker: string;
  /** Two or three sentences under the H1: who it is for and what they get. */
  lead: string;
  /** The short answer to the main question of the article, 40 to 70 words. Shown before the body. */
  answer: string;
  /** "Das Wichtigste in Kürze": three to six points. */
  takeaways: readonly string[];
  /** ISO dates. `publishedAt` stays as it was; `updatedAt` is the date of the last real revision. */
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  sections: readonly Section[];
  faq: readonly { q: string; a: string }[];
  sources: readonly Source[];
  /** Up to four further articles (must exist in src/data/blogArticles.ts). */
  related: readonly { slug: string; title: string }[];
  /**
   * Where the article hands over to the offer. Without `to`, the button leads to the German free
   * check (/de#check). Articles about AI consulting point to /de/ki#ai-check instead.
   */
  cta: { title: string; text: string; kicker?: string; label?: string; to?: string };
};
