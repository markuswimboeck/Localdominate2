#!/usr/bin/env node
/**
 * Checks the links inside V4 articles (src/content/articles/data/*.ts).
 *
 * A link to /blog/<slug> is only valid when that page exists: a V4 data file or a
 * <Route path="/blog/<slug>"> in src/App.tsx. Being listed in src/data/blogArticles.ts is not enough,
 * because about thirty registry entries have no page and render NotFound.
 * A link with #anchor to a V4 article must name one of that article's section ids (or "faq").
 * `related` entries are checked the same way.
 *
 * Usage: node scripts/check-article-links.mjs   (exit 1 on any broken link)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA = path.join(ROOT, "src/content/articles/data");
const app = fs.readFileSync(path.join(ROOT, "src/App.tsx"), "utf8");

const files = fs.readdirSync(DATA).filter((f) => f.endsWith(".ts"));
const v4 = new Map(); // slug -> source
for (const f of files) v4.set(f.replace(/\.ts$/, ""), fs.readFileSync(path.join(DATA, f), "utf8"));

const routed = new Set([...app.matchAll(/<Route\s+path="\/blog\/([^"#?]+)"/g)].map((m) => m[1]));
const exists = (slug) => v4.has(slug) || routed.has(slug);

const anchorsOf = (src) => new Set([...src.matchAll(/^\s{6}id: "([^"]+)"/gm)].map((m) => m[1]).concat(["faq"]));

const problems = [];
for (const [slug, src] of v4) {
  for (const m of src.matchAll(/\]\((\/blog\/[^)\s]+)\)/g)) {
    const [p, anchor] = m[1].replace(/^\/blog\//, "").split("#");
    if (!exists(p)) problems.push(`${slug}: link to /blog/${p} has no page`);
    else if (anchor && v4.has(p) && !anchorsOf(v4.get(p)).has(anchor)) problems.push(`${slug}: /blog/${p}#${anchor} has no such section`);
  }
  const related = src.match(/^ {2}related: \[([\s\S]*?)^ {2}\],/m);
  for (const m of related ? related[1].matchAll(/slug: "([^"]+)"/g) : []) {
    if (!exists(m[1])) problems.push(`${slug}: related entry ${m[1]} has no page`);
  }
}

if (problems.length) {
  console.log(problems.join("\n"));
  console.log(`\n${problems.length} broken link(s) in ${v4.size} V4 articles`);
  process.exit(1);
}
console.log(`OK: all /blog links and related entries in ${v4.size} V4 articles resolve`);
