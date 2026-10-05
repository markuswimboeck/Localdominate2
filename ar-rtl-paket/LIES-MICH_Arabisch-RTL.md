# Arabisch (RTL): sieben Hauptseiten, Stand 05.10.2026

Basis: origin/main (ef59ba3, PR #23). Fünf Patches, in dieser Reihenfolge anwenden.

## Live schalten (zum Einfügen in die Eingabeaufforderung / Git Bash im Projektordner)

```
git fetch origin
git checkout -b feature/ar-rtl origin/main
git am "ar-rtl-paket/0001-Add-Arabic-RTL-foundation-locale-from-path-Arabic-fo.patch" "ar-rtl-paket/0002-Add-Arabic-RTL-versions-of-Home-Services-Work-Approa.patch" "ar-rtl-paket/0003-Add-the-seven-Arabic-pages-to-sitemap.xml-and-its-ba.patch" "ar-rtl-paket/0004-Arabic-home-link-the-seven-steps-to-ar-approach.patch" "ar-rtl-paket/0005-Proofread-the-Arabic-copy-one-wording-for-offers-ste.patch"
git push -u origin feature/ar-rtl
```

Dann auf GitHub den Pull Request öffnen, die Vercel-Preview prüfen (siehe unten) und mergen. Vercel baut main automatisch.
Hinweis: Dein lokaler Ordner hat viele "geänderte" Dateien durch Zeilenenden (CRLF). Falls `git checkout` meckert, vorher `git stash` oder einen frischen Klon verwenden.

## Die sieben Seiten

| Englisch | Arabisch |
|---|---|
| / | /ar |
| /services | /ar/services |
| /work | /ar/work |
| /approach | /ar/approach |
| /industries | /ar/industries |
| /creators | /ar/creators |
| /start-a-project | /ar/start-a-project |

Die sieben Schritt-Seiten (/approach/diagnose …), About, Insights, Blog und Rechtstexte bleiben Englisch bzw. Deutsch. Auf den arabischen Seiten sind diese Links mit (EN) oder (DE) markiert.

## Was gebaut wurde

- Eigene arabische Seiten unter /ar, vollständig RTL (dir="rtl", lang="ar"), mit selbst gehosteten arabischen Schriften (IBM Plex Sans Arabic, Noto Naskh Arabic).
- Englische Seiten bleiben unverändert, bis auf zwei Dinge: ein Link "العربية" im Footer, der zur passenden arabischen Seite führt, und die Buttons (Check, Call), die sich nach der URL richten.
- Arabische Navigation und Footer mit Sprachumschalter "English", arabisches Cookie-Banner.
- Jede Seite hat eigenen Title, Description, Canonical (/ar/…), hreflang (en/ar), JSON-LD mit inLanguage ar und FAQ-Daten aus derselben Liste wie die sichtbare FAQ.
- Formulare (Check, Creators) senden dieselben Daten wie die englischen (Backend unverändert).
- Prüfung am Produktions-Build: alle sieben Seiten hydrieren ohne Konsolenfehler, kein horizontales Scrollen bei 1440 px und 390 px, Typecheck sauber, 311 Seiten vorgerendert.

## Zur Freigabe nach CLAUDE.md (SEO-Regel 1)

1. Neue URLs und Sitemap-Einträge: Patch 0003 (getrennt, lässt sich weglassen).
2. Der Footer-Link "العربية" fügt jeder V4-Seite einen internen Link auf /ar… hinzu. Der SEO-Check meldet deshalb bei `internalLinks` eine Abweichung. Nach deiner Freigabe: `node scripts/seo-check.mjs --update-baseline`.
3. Die englischen Seiten tragen noch kein hreflang auf die arabische Fassung. Die arabischen Seiten verweisen auf die englischen. Für ein sauberes Paar muss die englische Seite zurückverweisen (alternateUrls in SEOHead). Das habe ich nicht angefasst, weil es die englischen Heads ändert.
4. Der SEO-Check meldet außerdem viele Abweichungen auf /blog/… (Autoren, JSON-LD-Blöcke, Titel "BuiltLocal"). Die betreffen nur Blog-Seiten, die ich nicht angefasst habe. Vermutlich kommen sie von den früheren Artikel- und GEO-Änderungen (#22, #23), deren Baseline noch nicht nachgezogen ist. Einen Vergleichslauf auf unverändertem main habe ich nicht gemacht.

## Zur inhaltlichen Bestätigung

- Arabische Angebotsnamen (überall gleich): "سباق التحويل والحجز خلال 72 ساعة", "بداية الأتمتة بالذكاء الاصطناعي", "إصلاح سريع لملف Google", "موقع في 5 أيام".
- Markenschreibweise in den arabischen Titeln: "LocalDominate" (die englischen Titel tragen "| Local Dominator").
- "Two working days" (Antwortzeit) ist als "يومي عمل" übersetzt.
- Hootsuite-Zitat auf /ar/creators ist eine eigene Übersetzung und als solche gekennzeichnet.
- Das Showreel-Poster/-Video enthält eingebrannten englischen Text ("Growth isn't luck. It's a system.").
- Das Creator-Demo (iframe) bleibt Englisch. Das steht auf der Seite.
- Empfehlung: einmal von einer arabischen Muttersprachlerin oder einem Muttersprachler gegenlesen lassen, bevor du aktiv Werbung auf Arabisch schaltest.
