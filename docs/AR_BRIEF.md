# Arabic (RTL) versions of the seven main pages: working brief

Repo: /home/claude/ld (branch feature/ar-rtl). Site: LocalDominate (localdominate.org), a Vite + React 18 + TypeScript SPA,
Tailwind 3.4, prerendered at build time and hydrated. The English V4 pages live in src/pages/v4/*.tsx.
Arabic pages live at /ar, /ar/services, /ar/work, /ar/approach, /ar/industries, /ar/creators, /ar/start-a-project.
The owner is Markus Wimboeck (German-speaking, Munich). Read CLAUDE.md first (hard rules).

## Already built (do NOT edit these; report problems to the lead instead)
- src/lib/v4Locale.ts: locale from URL path (`useV4Locale()`, `arPath()`, `enPathOf()`).
- src/components/v4/V4Page.tsx: wraps every page. On /ar paths it adds `dir="rtl" lang="ar"` and the class `v4-ar`,
  Arabic nav (ar/V4NavAr.tsx) and footer (ar/V4FooterAr.tsx), Arabic skip link, Arabic cookie banner.
  EVERY Arabic page MUST render inside <V4Page> (the English HomeV4 uses V4Nav/V4Footer directly; HomeAr must not).
- src/styles/v4-ar.css (scoped .v4-ar): Arabic fonts (IBM Plex Sans Arabic for text, Noto Naskh Arabic for `font-v4-serif`),
  letter-spacing off, text-transform off, taller line-height for h1-h4/p/li, `data-arrow` (flips "→"), `.ltr-run` (isolates LTR runs).
- src/data/ar/chrome.ar.ts: Arabic nav/footer/button labels. CheckButton and BookCallButton already switch to Arabic on /ar paths.
- Routing, v4Pages.tsx loaders and the prerender list already contain the seven /ar paths. Placeholder pages exist at
  src/pages/v4/ar/{HomeAr,ServicesAr,WorkAr,ApproachAr,IndustriesAr,CreatorsAr,StartProjectAr}.tsx. Replace YOUR placeholder.

## Rules
1. Do not edit any English file (pages, data, components, nav, footer, CSS tokens, App.tsx, v4Pages, prerender). English pages and
   their SEO must stay byte-identical. Create new files only:
   - page: src/pages/v4/ar/<Name>.tsx (default export, replaces the placeholder)
   - copy/data: src/data/ar/<name>.ar.ts
   - Arabic copies of shared components that contain English text or physical left/right classes: src/components/v4/ar/<name>/...
   Reusing an English component is fine when it has no visible English text and works in RTL; if you reuse it, check it in RTL.
   Never use git (the lead commits). Do not install dependencies.
2. Translation: Modern Standard Arabic, clear business tone for owners of hotels, holiday rentals, trades and local services (and
   creators on /creators). Natural Arabic, not word-for-word. Keep brand and product names in Latin script (LocalDominate, Google,
   Google Business Profile, Shopify, GA4, Booking.com ...). Use Western digits (0-9) and the euro sign exactly as in the English
   source, so prices stay identical. Keep every number, price, scope, duration and condition identical to the English source.
   "Truth first": add no claim, number, client name, result or guarantee that the English page does not contain; drop nothing that
   limits a claim (footnotes, "not a promise", "concept, not a client" etc. must be translated).
   Quoted search phrases that guests type in German (e.g. "Hotel [Ort]") stay as they are.
   Headings must read like real Arabic headlines, buttons short. No machine-translation feel. No emoji.
3. Mirror the English page structure section by section (same order, same landmarks, same anchors/ids so links like #check work).
4. RTL layout: use Tailwind logical utilities in new code (ms-/me-/ps-/pe-/start-/end-/text-start/text-end/border-s/border-e/
   rounded-s/rounded-e/inset-s etc.), never ml-/mr-/pl-/pr-/left-/right-/text-left/text-right/border-l/border-r/rounded-l/rounded-r
   unless the thing really must not flip. Check for `translate-x`, gradients (`bg-gradient-to-r`), absolutely positioned items,
   scroll-snap rows, sliders, arrows ("→" -> keep the glyph inside <span data-arrow aria-hidden="true">→</span> so CSS mirrors it),
   chevrons, progress bars and timelines: they must read right-to-left. Emails, URLs, phone numbers, prices with currency, code,
   percentages and Latin names inside Arabic sentences: wrap in <span className="ltr-run"> (or dir="ltr") when they would reorder.
   Form inputs for email/URL/numbers: dir="ltr", text-start. Do not set `tracking-*` or `uppercase` (the CSS removes it anyway).
   Keep the visual design (dark/light fields, signal green, serif headings), just mirrored and properly typeset in Arabic.
5. SEO and structured data on the Arabic page: <SEOHead lang="ar" canonicalUrl="https://localdominate.org/ar/..." ... />
   with Arabic title and description (title about 50-60 characters incl. brand, description about 140-160 characters),
   alternateUrls={{ en: "<English URL>", ar: "<Arabic URL>" }}, the same ogImage as the English page, JSON-LD @graph mirroring the
   English one with inLanguage "ar", Arabic text, URLs pointing at the /ar page, breadcrumb, dateModified from
   src/lib/seo-dates.ts, and a FAQPage built from the same array that renders the visible FAQ (src/lib/seoFaq.ts).
6. Hydration safety: the page is prerendered then hydrated. No Date.now/Math.random/window checks in render, no browser-language
   dependent rendering (do not use useLanguage()); everything derives from the path or static data. Anything that needs the
   browser goes into effects.
7. Links: internal links inside Arabic pages go to the /ar equivalent (use arPath()) when that page exists (the seven pages),
   otherwise to the English page. The seven steps pages (/approach/diagnose ...), blog, about, insights stay English: link to them,
   and where it helps the reader add a small "(EN)" marker like the footer does. Free check links go to /ar/start-a-project
   (CheckButton does this). Booking uses BookCallButton.
8. Accessibility: keep landmarks, aria-labelledby, focus rings, 44px touch targets; Arabic aria-labels; `lang="en"` on Latin-only
   brand fragments is optional.

## How to check your work (required)
- Typecheck: `npx tsc --noEmit -p tsconfig.app.json` (fix errors in YOUR files only; other agents are editing other files in the
  same tree at the same time, so unrelated errors can appear and disappear).
- Look at it: start your own dev server on YOUR port in the background (`npx vite --host 127.0.0.1 --port <PORT> --strictPort &`),
  then take screenshots with Playwright using the preinstalled Chromium:
  `node -e` or a script in /tmp with `const { chromium } = require('/home/claude/ld/node_modules/playwright')` is NOT installed;
  instead run `cd /tmp && npm i --no-save --no-audit --no-fund playwright@1.56.0` once in a scratch folder of your own
  (e.g. /tmp/pw-<name>) and launch with `chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })`
  (check the exact path with ls). Take full-page screenshots at 1440x900 and 390x844 (set localStorage cookieConsent="essential"
  first so the banner does not cover things), save as PNG in /tmp/shots-<name>/ and LOOK at them with the Read tool.
  Also measure: `document.documentElement.scrollWidth <= window.innerWidth` on both widths (no horizontal overflow), and read the
  console for errors. Fix everything you see: mirrored layout, overlapping text, clipped Arabic (line-height), wrong arrows,
  Latin fragments out of order, misaligned numbers, images/overlays on the wrong side.
- Kill your dev server when done.

## Report back (max 150 words)
Files created, which shared components you reused or copied, anything you could not do, any copy you are unsure about
(facts needing the owner's confirmation), and any bug in the shared infra you hit.
