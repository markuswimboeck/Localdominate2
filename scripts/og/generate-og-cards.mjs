// Generates the branded 1200x630 social preview cards (Open Graph / Twitter / LinkedIn / WhatsApp)
// for every blog article (src/data/blogArticles.ts, English title) and every page listed in
// scripts/og/pages.json, plus the site-wide default card (public/og-image.png + .webp).
//
// Output:
//   public/images/og/blog/<slug>.jpg      one card per article
//   public/images/og/<page-key>.jpg       one card per page in pages.json
//   src/data/ogCards.json                 path -> card URL, read by SEOHead / ArticleLayout
//
// Run after adding or renaming an article (cards are committed; nothing runs at build time):
//   npm i --no-save playwright@1.56.0
//   node scripts/og/generate-og-cards.mjs            # all cards
//   node scripts/og/generate-og-cards.mjs --only=/blog/my-new-slug
// Uses CHROMIUM_PATH if set, otherwise Playwright's bundled Chromium.
import { build } from "esbuild";
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const SITE = "https://localdominate.org";
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);

const font = (file) => `data:font/woff2;base64,${readFileSync(join(ROOT, "scripts/og/fonts", file)).toString("base64")}`;
const FONT_CSS = `
@font-face{font-family:Geist;font-weight:500;src:url(${font("Geist-Medium.woff2")}) format("woff2")}
@font-face{font-family:Geist;font-weight:600;src:url(${font("Geist-SemiBold.woff2")}) format("woff2")}
@font-face{font-family:Geist;font-weight:700;src:url(${font("Geist-Bold.woff2")}) format("woff2")}
@font-face{font-family:Plex;font-weight:500;src:url(${font("IBMPlexMono-Medium.woff2")}) format("woff2")}`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Headline ends on the signal-green full stop, like the V4 wordmark ("LocalDominate.").
const headlineHtml = (text) => {
  const t = text.trim();
  if (/[?!…:]$/.test(t)) return esc(t);
  return `${esc(t.replace(/\.$/, ""))}<span class="dot">.</span>`;
};

const cardHtml = ({ kicker, headline, meta }) => `<!doctype html><html><head><meta charset="utf-8"><style>
${FONT_CSS}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{position:relative;background:#0A0A09;color:#F4F0E7;font-family:Geist,sans-serif;-webkit-font-smoothing:antialiased}
.glow{position:absolute;inset:0;background:
  radial-gradient(ellipse 70% 80% at 92% 115%,rgba(23,53,43,.95) 0%,rgba(23,53,43,.45) 38%,rgba(10,10,9,0) 72%),
  radial-gradient(ellipse 40% 40% at 0% 0%,rgba(244,240,231,.035) 0%,rgba(10,10,9,0) 70%)}
.top{position:absolute;top:56px;left:72px;right:72px;display:flex;justify-content:space-between;align-items:flex-start;
  font-family:Plex,monospace;font-weight:500;font-size:21px;letter-spacing:.09em;text-transform:uppercase}
.brand{display:flex;flex-direction:column;gap:14px}
.brand i{display:block;width:44px;height:4px;background:#B7F52A}
.kicker{color:rgba(244,240,231,.62);text-align:right;max-width:640px}
h1{position:absolute;left:72px;right:110px;bottom:132px;font-weight:700;letter-spacing:-.035em;line-height:1.03;
  text-wrap:balance;font-size:92px}
.dot{color:#B7F52A}
.foot{position:absolute;left:72px;right:72px;bottom:54px;display:flex;justify-content:space-between;align-items:baseline}
.wm{font-weight:600;font-size:27px;letter-spacing:-.02em}
.meta{font-family:Plex,monospace;font-weight:500;font-size:19px;letter-spacing:.09em;text-transform:uppercase;color:rgba(244,240,231,.62)}
</style></head><body><div class="glow"></div>
<div class="top"><div class="brand">localdominate.org<i></i></div><div class="kicker">${esc(kicker)}</div></div>
<h1 id="h">${headlineHtml(headline)}</h1>
<div class="foot"><div class="wm">LocalDominate<span class="dot">.</span></div><div class="meta">${esc(meta)}</div></div>
</body></html>`;

const loadArticles = async () => {
  const out = await build({
    entryPoints: [join(ROOT, "src/data/blogArticles.ts")],
    bundle: true, write: false, format: "esm", platform: "node", logLevel: "silent",
    alias: { "@": join(ROOT, "src") },
  });
  const mod = await import(`data:text/javascript;base64,${Buffer.from(out.outputFiles[0].text).toString("base64")}`);
  return mod.blogArticles;
};

const pageKey = (path) => (path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-"));

const jobs = [];
const pages = JSON.parse(readFileSync(join(ROOT, "scripts/og/pages.json"), "utf8")).pages;
const pagePaths = new Set(pages.map((p) => p.path));
for (const a of await loadArticles()) {
  const path = `/blog/${a.slug}`;
  if (pagePaths.has(path)) continue;
  const c = a.en ?? a.de;
  jobs.push({
    path, file: `images/og/blog/${a.slug}.jpg`,
    kicker: `Insights · ${c.category}`, headline: c.title, meta: `${a.readingTime} min read`,
  });
}
for (const p of pages) jobs.push({ ...p, file: `images/og/${pageKey(p.path)}.jpg` });

const browser = await chromium.launch({
  ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

const manifestPath = join(ROOT, "src/data/ogCards.json");
const manifest = existsSync(manifestPath) && only ? JSON.parse(readFileSync(manifestPath, "utf8")) : {};

const render = async (job, target, type = "jpeg") => {
  await page.setContent(cardHtml(job), { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    // Shrink the headline until it clears the header area (max ~4 lines) without overflowing.
    const h = document.getElementById("h");
    let size = 92;
    while (size > 44 && (h.getBoundingClientRect().top < 170 || h.scrollWidth > h.clientWidth + 1)) {
      size -= 2;
      h.style.fontSize = size + "px";
    }
  });
  mkdirSync(dirname(target), { recursive: true });
  await page.screenshot({ path: target, type, ...(type === "jpeg" ? { quality: 84 } : {}) });
};

let n = 0;
for (const job of jobs) {
  if (only && job.path !== only) continue;
  await render(job, join(ROOT, "public", job.file));
  manifest[job.path] = `${SITE}/${job.file}`;
  if (job.path === "/") await render(job, join(ROOT, "public/og-image.png"), "png"); // site-wide default
  n++;
}
await browser.close();

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manifestPath, JSON.stringify(sorted, null, 2) + "\n");
console.log(`[og] ${n} cards written, manifest has ${Object.keys(sorted).length} entries`);
