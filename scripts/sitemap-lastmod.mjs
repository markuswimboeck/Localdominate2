#!/usr/bin/env node
/**
 * Sets <lastmod> of every blog entry in the static sitemaps to the article's real change date, taken
 * from `updatedAt` in src/data/blogArticles.ts (the registry the article pages and JSON-LD read).
 *
 * Covers /blog/<slug> in public/sitemap.xml and public/sitemap-blog.xml, and the Markdown mirror
 * /blog-md/<slug>.md in public/sitemap-ai.xml. Entries without a registry match keep their date.
 * Only <lastmod> values change; no entry is added or removed.
 *
 *   node scripts/sitemap-lastmod.mjs          # rewrite the sitemaps
 *   node scripts/sitemap-lastmod.mjs --check  # exit 1 if any date is out of date (no writes)
 *
 * Run it after changing `updatedAt` of an article. The sitemaps are in the SEO baseline, so update
 * docs/baseline with `node scripts/seo-check.mjs --update-baseline` once the owner approved.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");
const ORIGIN = "https://localdominate.org";

// slug -> updatedAt from the registry. Each article object has `slug` first and `updatedAt` later.
function readRegistry() {
  const src = readFileSync(resolve(root, "src/data/blogArticles.ts"), "utf8");
  const slugRe = /\n\s{4}slug:\s*"([^"]+)"/g;
  const starts = [];
  for (let m; (m = slugRe.exec(src)); ) starts.push({ slug: m[1], at: m.index });
  const dates = new Map();
  starts.forEach((s, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].at : src.length;
    const m = /\n\s{4}updatedAt:\s*"(\d{4}-\d{2}-\d{2})"/.exec(src.slice(s.at, end));
    if (m && !dates.has(s.slug)) dates.set(s.slug, m[1]);
  });
  return dates;
}

const dates = readRegistry();
if (dates.size === 0) {
  console.error("No slug/updatedAt pairs found in src/data/blogArticles.ts");
  process.exit(2);
}

const FILES = [
  { file: "public/sitemap.xml", slugOf: (loc) => loc.match(/^\/blog\/([^/?#]+)$/)?.[1] },
  { file: "public/sitemap-blog.xml", slugOf: (loc) => loc.match(/^\/blog\/([^/?#]+)$/)?.[1] },
  { file: "public/sitemap-ai.xml", slugOf: (loc) => loc.match(/^\/blog-md\/([^/?#]+)\.md$/)?.[1] },
];

let stale = 0;
for (const { file, slugOf } of FILES) {
  const path = resolve(root, file);
  const xml = readFileSync(path, "utf8");
  let changed = 0;
  let unmatched = 0;
  const out = xml.replace(
    /(<loc>([^<]+)<\/loc>\s*<lastmod>)(\d{4}-\d{2}-\d{2})(<\/lastmod>)/g,
    (all, head, loc, current, tail) => {
      const slug = slugOf(loc.replace(ORIGIN, ""));
      if (!slug) return all;
      const date = dates.get(slug);
      if (!date) {
        unmatched += 1;
        return all;
      }
      if (date === current) return all;
      changed += 1;
      return head + date + tail;
    },
  );
  stale += changed;
  console.log(`${file}: ${changed} lastmod ${CHECK ? "out of date" : "updated"}, ${unmatched} blog entries without a registry date`);
  if (!CHECK && changed) writeFileSync(path, out);
}

if (CHECK && stale) process.exit(1);
