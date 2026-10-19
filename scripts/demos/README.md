# Industry demos (`/demo/salon/`, `/demo/fitness/`, `/demo/beauty/`)

Three concept websites for fictional local businesses, in German (`/demo/<slug>/`) and English
(`/demo/<slug>/en/`). They show what LocalDominate builds for hair salons, gyms and beauty studios
and are linked from the industry pages and from `/work`.

| Slug | Business (fictional) | What it shows |
|---|---|---|
| `salon` | Atelier Aurin, hair salon, Leipzig | colour-swatch picker that leads to a service, services with duration and price, booking in five steps, live opening hours, team |
| `fitness` | Ostwerk Athletik, gym, Dresden | trial-session booking in the first screen, class timetable as text with day tabs and filters, busy-times chart, prices with term and notice, staffed hours, § 312k BGB cancellation button |
| `beauty` | Velin, beauty studio, Hamburg | treatment finder (three questions), treatments with duration and price, booking in four steps, consent-only before/after slot |

Rules, same as `/creator-demo/`:

- Every page is `noindex, nofollow`, carries a "Konzept-Demo / Concept demo" bar and says in the
  footer that the business is fictional. Addresses use "Beispiel…" street names, phone numbers are
  marked as demo numbers.
- No invented reviews, testimonials, results or client names. Review and before/after areas are
  empty slots that say what goes there in a real project.
- Forms send nothing; the last step shows what the confirmation would look like.
- Busy times and free places are example values and are labelled as such.

Build after editing a source file:

```sh
node scripts/demos/build.mjs
```

Sources: `shell.mjs` (shared head, demo bar, opening-hours helper), one module per demo with all
copy for both languages in `T`. Fonts (OFL) live in `public/demo/fonts/`: Bodoni Moda, Hanken
Grotesk, Archivo, Marcellus, Karla, latin subset from Fontsource.
