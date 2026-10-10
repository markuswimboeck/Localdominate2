# Blog articles in the V4 layout

Owner decisions (9 Oct 2026): articles stay German for now (English versions later), formal "Sie",
blanket approval to improve title, meta description and H1 of migrated articles. URLs never change.
Migration runs top-down in the order of `src/data/blogArticles.ts`, five articles per wave.
Duplicates are not skipped: they get a distinct angle (owner decision 3 Oct 2026).

## How an article is migrated

1. Create `src/content/articles/data/<slug>.ts` (type `V4Article`, see `src/content/articles/types.ts`).
   Reference quality: `ultimate-guide-local-seo.ts`. Keep `publishedAt` from the registry, set
   `updatedAt` to the day of the rewrite.
2. In `src/App.tsx` delete the old `<Route path="/blog/<slug>" …>` line and, if unused afterwards,
   its `lazy(() => import("./pages/blog/…"))` line. The V4 route is created automatically.
   Leave the old component file in place.
3. `npm run blog:md` writes `public/blog-md/<slug>.md` and copies title, meta, reading time and
   update date into the German block of the registry entry.
4. Check: `npx tsc --noEmit -p tsconfig.app.json`, `npm run build:static -- --only=/blog/<slug>,…`,
   then load each page with browser locale de-DE and en-US through a server that maps `/path` to
   `dist/path/index.html` (not `vite preview`): no console errors, no React #418/#423, no horizontal
   overflow at 390 px, exactly one H1.

## Content rules

- Truth first: every figure, study, legal statement or platform rule needs a source in `sources`
  that was actually opened. Google's own help pages first. No invented cases, quotes or volumes.
  Where no number exists, describe the method.
- Never recommend what Google's guidelines forbid (keywords in the business name, incentivised or
  gated reviews, virtual offices, doorway city pages). Do not recommend retired features
  (GBP Q&A and chat, HowTo rich results, FAQ rich results (no longer shown at all since 7 May 2026, see Search Central documentation updates), FID, Mobile-Friendly Test). Google forbids pressuring customers to review while on the premises, staff review quotas and reviews that must name a staff member.
- German, "Sie", short concrete sentences, no dashes as punctuation, no exclamation marks.
- `answer` 40–70 words; every section starts with a one- or two-sentence `answer`.
- Prices only from `src/data/v4Offers.ts`. CTA goes to the German free check (`/de#check`).
- Internal links only to slugs that exist in the registry, plus `/de#check`, `/services`, `/insights`.
