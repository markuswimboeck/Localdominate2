#!/usr/bin/env node
/**
 * Writes the Markdown mirror public/blog-md/<slug>.md for every V4 article
 * (src/content/articles/data/*.ts). The mirror is the full article text for AI crawlers
 * (linked from llms.txt), generated from the same data as the page, so the two never drift.
 *
 * It also copies title, meta title, meta description, reading time and update date of each V4
 * article into its entry in src/data/blogArticles.ts (German block), so lists, Insights and
 * related-article boxes show the same values as the page.
 *
 * Usage: npm run blog:md            all V4 articles
 *        npm run blog:md -- --only=ultimate-guide-local-seo
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA = path.join(ROOT, "src/content/articles/data");
const OUT = path.join(ROOT, "public/blog-md");
const SITE = "https://localdominate.org";
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");

const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
/** Inline markup → Markdown with absolute links. */
const md = (t) =>
  t.replace(TOKEN, (_m, bold, label, href) => (bold ? `**${bold}**` : `[${label}](${href.startsWith("/") ? SITE + href : href})`));
const cell = (t) => md(t).replace(/\|/g, "\\|");
const q = (t) => JSON.stringify(t);

function block(b) {
  switch (b.t) {
    case "p":
      return md(b.text);
    case "h3":
      return `### ${md(b.text)}`;
    case "ul":
      return b.items.map((i) => `- ${md(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${md(i)}`).join("\n");
    case "table":
      return [
        `*${b.caption}*`,
        "",
        `| ${b.head.map(cell).join(" | ")} |`,
        `| ${b.head.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
      ].join("\n");
    case "note":
      return `> **${b.label}:** ${md(b.text)}`;
    case "steps":
      return b.items.map((s, n) => `${n + 1}. **${s.title}.** ${md(s.text)}`).join("\n");
    default:
      throw new Error(`Unknown block type ${b.t}`);
  }
}

function render(a) {
  const url = `${SITE}/blog/${a.slug}`;
  const parts = [
    "---",
    `title: ${q(a.h1)}`,
    `slug: ${a.slug}`,
    `url: ${url}`,
    `canonical: ${url}`,
    `markdown_url: ${SITE}/blog-md/${a.slug}.md`,
    "language: de-DE",
    `published: ${a.publishedAt}`,
    `updated: ${a.updatedAt}`,
    `reading_time_minutes: ${a.readingTime}`,
    `category: ${q(a.kicker)}`,
    "author: LocalDominate Redaktion",
    "accountable: Markus Wimböck",
    "publisher: LocalDominate",
    `description: ${q(a.seoDescription)}`,
    "---",
    "",
    `# ${a.h1}`,
    "",
    md(a.lead),
    "",
    "## Die kurze Antwort",
    "",
    md(a.answer),
    "",
    "## Das Wichtigste in Kürze",
    "",
    a.takeaways.map((t) => `- ${md(t)}`).join("\n"),
  ];
  for (const s of a.sections) {
    parts.push("", `## ${s.title}`, "");
    if (s.answer) parts.push(md(s.answer), "");
    parts.push(s.blocks.map(block).join("\n\n"));
  }
  if (a.faq.length) {
    parts.push("", "## Häufige Fragen", "");
    parts.push(a.faq.map((f) => `### ${f.q}\n\n${md(f.a)}`).join("\n\n"));
  }
  parts.push("", "## Quellen", "", a.sources.map((s) => `- [${s.title}](${s.url}), ${s.publisher}`).join("\n"));
  parts.push(
    "",
    "---",
    "",
    `LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: ${a.updatedAt}. Fehler gefunden? info@localdominate.org`,
    "",
  );
  return parts.join("\n");
}

const REGISTRY = path.join(ROOT, "src/data/blogArticles.ts");
function syncRegistry(a) {
  let src = fs.readFileSync(REGISTRY, "utf8");
  const start = src.indexOf(`slug: "${a.slug}"`);
  if (start < 0) throw new Error(`${a.slug}: no entry in src/data/blogArticles.ts`);
  const next = src.indexOf("slug:", start + 6);
  const end = next < 0 ? src.length : next;
  let entry = src.slice(start, end);
  const deStart = entry.indexOf("de: {");
  const deEnd = entry.indexOf("}", deStart);
  let de = entry.slice(deStart, deEnd);
  const set = (key, value) => { de = de.replace(new RegExp(`${key}: "(?:[^"\\\\]|\\\\.)*"`), `${key}: ${JSON.stringify(value)}`); };
  set("title", a.h1);
  set("metaTitle", a.seoTitle);
  set("metaDescription", a.seoDescription);
  set("excerpt", a.seoDescription);
  entry = entry.slice(0, deStart) + de + entry.slice(deEnd);
  entry = entry.replace(/readingTime: \d+/, `readingTime: ${a.readingTime}`).replace(/updatedAt: "[^"]*"/, `updatedAt: "${a.updatedAt}"`);
  src = src.slice(0, start) + entry + src.slice(end);
  fs.writeFileSync(REGISTRY, src);
}

const files = fs.readdirSync(DATA).filter((f) => f.endsWith(".ts") && (!only || only.includes(f.replace(/\.ts$/, ""))));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "blog-md-"));
for (const f of files) {
  const outfile = path.join(tmp, f.replace(/\.ts$/, ".mjs"));
  await build({ entryPoints: [path.join(DATA, f)], bundle: true, format: "esm", platform: "node", outfile, logLevel: "error" });
  const { default: article } = await import(pathToFileURL(outfile).href);
  if (article.slug !== f.replace(/\.ts$/, "")) throw new Error(`${f}: slug "${article.slug}" does not match the file name`);
  fs.writeFileSync(path.join(OUT, `${article.slug}.md`), render(article));
  syncRegistry(article);
  console.log(`blog-md/${article.slug}.md`);
}
fs.rmSync(tmp, { recursive: true, force: true });
