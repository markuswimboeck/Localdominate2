---
title: "Technisches Local SEO: die Prüfliste für die Website eines lokalen Betriebs"
slug: technisches-local-seo-guide
url: https://localdominate.org/blog/technisches-local-seo-guide
canonical: https://localdominate.org/blog/technisches-local-seo-guide
markdown_url: https://localdominate.org/blog-md/technisches-local-seo-guide.md
language: de-DE
published: 2026-03-05
updated: 2026-10-12
reading_time_minutes: 13
category: "Technik"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Technisches Local SEO Schritt für Schritt: Search Console, Indexierung, Sitemap, Canonicals, HTTPS, Core Web Vitals, Standortseiten und KI-Crawler nach Google."
---

# Technisches Local SEO: die Prüfliste für die Website eines lokalen Betriebs

Für Inhaber lokaler Betriebe und ihre Webverantwortlichen, die wissen wollen, ob die Website technisch sauber steht. Sie bekommen eine Prüfliste in sinnvoller Reihenfolge, die sich an Googles eigener Dokumentation orientiert, und erfahren, welche Punkte Sie selbst prüfen können.

## Die kurze Antwort

Technisches Local SEO sorgt dafür, dass Google die Website eines lokalen Betriebs crawlen, indexieren und richtig zuordnen kann. Google nennt dafür drei Mindestanforderungen: Der Googlebot wird nicht blockiert, die Seite liefert den Statuscode 200 und enthält indexierbare Inhalte. Darauf bauen Search Console, Sitemap, eine eindeutige Hauptadresse mit HTTPS, eine schnelle mobile Version, passende strukturierte Daten und echte Standortseiten auf.

## Das Wichtigste in Kürze

- Google nennt drei technische Mindestanforderungen: kein blockierter Googlebot, Statuscode 200 und indexierbare Inhalte.
- Eine Domain-Property in der Search Console erfasst alle Varianten Ihrer Adresse, also mit und ohne www sowie http und https.
- Die robots.txt steuert das Crawling, nicht die Indexierung. Seiten, die nicht in Google erscheinen sollen, bekommen ein noindex und dürfen dann nicht gesperrt sein.
- Für die Core Web Vitals nennt Google als gute Werte: LCP bis 2,5 Sekunden, INP unter 200 Millisekunden, CLS unter 0,1. Eine Top-Position garantieren sie nicht.
- Standortseiten brauchen echten Inhalt je Ort. Viele fast gleiche Stadtseiten, die alle zum selben Ziel führen, beschreibt Google als Missbrauch von Brückenseiten.
- Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen. Die Seite muss indexiert und für ein Snippet geeignet sein.

## Technisches Local SEO: was dazugehört

Technisches Local SEO umfasst alles, was Google braucht, um Ihre Seiten zu finden, zu lesen und dem richtigen Ort zuzuordnen. Die Grundlage sind Googles drei Mindestanforderungen: Der Googlebot wird nicht blockiert, die Seite liefert den Statuscode 200 und enthält indexierbare Inhalte.

Inhalte, Bewertungen und das Unternehmensprofil entscheiden mit darüber, ob Kunden Sie wählen. Die Technik entscheidet, ob Google Ihre Website überhaupt richtig erfasst. Eine Schreinerei in Rosenheim kann die beste Leistungsseite haben: Ist sie versehentlich auf noindex gesetzt, erscheint sie nicht. Die Abschnitte unten gehen die Prüfpunkte einzeln durch, am Ende steht die Reihenfolge als kurze Liste.

Wer seine Website umfassender prüfen will, auch Profil und Bewertungen, findet die vollständige Liste in [Local SEO Audit: die Checkliste](https://localdominate.org/blog/local-seo-audit-checkliste).

## Search Console einrichten

Die Google Search Console ist das kostenlose Werkzeug, mit dem Sie sehen, wie Google Ihre Website erfasst. Richten Sie eine Domain-Property ein: Sie umfasst alle Subdomains und Protokolle und wird über einen DNS-Eintrag bestätigt.

Google unterscheidet zwei Arten von Properties. Eine **URL-Präfix-Property** enthält nur Adressen, die genau mit dem angegebenen Präfix beginnen, einschließlich http oder https. Eine **Domain-Property** fasst die Daten aller Subdomains, Protokolle und Pfade zusammen. Für einen lokalen Betrieb ist die Domain-Property die bessere Wahl, weil Sie damit auch Probleme auf einer alten http-Adresse oder einer vergessenen Subdomain sehen.

1. **Property anlegen.** In der Search Console eine Domain-Property mit Ihrer Domain ohne www und ohne https anlegen, also etwa „ihredomain.de“.
2. **DNS-Eintrag setzen.** Den angezeigten TXT-Eintrag im Kundenbereich Ihres Domainanbieters eintragen oder von Ihrem Dienstleister eintragen lassen. Danach in der Search Console bestätigen.
3. **Zugriff vergeben.** Ihrer Agentur oder Ihrem Webdesigner eigenen Zugang geben, statt Passwörter zu teilen. So behalten Sie die Inhaberschaft.
4. **Berichte merken.** Für dieses Thema zählen vor allem: Seitenindexierung, Sitemaps, HTTPS, Core Web Vitals und das URL-Prüftool.

## Indexierung prüfen und steuern

Der Bericht zur Seitenindexierung zeigt, welche Ihrer Seiten Google kennt und warum manche nicht im Index sind. Nicht jede nicht indexierte Seite ist ein Fehler. Entscheidend ist, dass Startseite, Leistungsseiten, Standortseiten und Kontaktseite indexiert sind.

Google schreibt selbst, dass Sie nicht davon ausgehen sollten, dass jede Adresse Ihrer Website indexiert ist. Prüfen Sie deshalb gezielt die Seiten, mit denen Sie Kunden gewinnen. Das **URL-Prüftool** zeigt für eine einzelne Adresse, ob sie im Index ist. Mit „Live-URL testen“ sehen Sie die aktuelle Fassung samt Screenshot, mit „Indexierung beantragen“ bitten Sie um einen neuen Besuch. Google weist darauf hin, dass ein solcher Antrag keine Aufnahme garantiert und die Zahl der Anträge pro Tag begrenzt ist.

*Häufige Gründe im Bericht zur Seitenindexierung*

| Grund laut Search Console | Was er meist bedeutet | Was Sie tun |
| --- | --- | --- |
| URL wird von der robots.txt-Datei blockiert | Eine Regel in der robots.txt sperrt die Seite | Prüfen, ob die Sperre gewollt ist; wichtige Seiten freigeben |
| Alternative Seite mit richtigem kanonischen Tag | Die Seite verweist korrekt auf eine Hauptversion | In der Regel nichts |
| Duplikat, vom Nutzer nicht als kanonisch festgelegt | Google hält die Seite für eine Kopie, ohne Canonical von Ihnen | Hauptversion festlegen, siehe Abschnitt zu Canonicals |
| Soft 404 | Die Seite liefert Statuscode 200, wirkt aber leer oder wie eine Fehlerseite | Echte Fehlerseiten mit 404 ausliefern, dünne Seiten füllen |
| Status „Gecrawlt“ oder „Gefunden“ mit dem Zusatz „zurzeit nicht indexiert“ | Google kennt die Seite, hat sie aber nicht aufgenommen oder bei „Gefunden“ noch nicht gecrawlt | Inhalt und interne Verlinkung der Seite prüfen |

### noindex oder robots.txt

Die robots.txt dient laut Google vor allem dazu, den Crawler-Verkehr zu steuern. Sie ist kein Mittel, um Seiten aus der Suche herauszuhalten: Eine gesperrte Adresse kann trotzdem erscheinen, dann ohne Beschreibung. Wer eine Seite wie die Danke-Seite nach dem Formular aus dem Index halten will, setzt ein **noindex** im Meta-Tag oder im HTTP-Header. Damit Google das sieht, darf die Seite nicht zugleich in der robots.txt gesperrt sein.

### Websites mit viel JavaScript

Viele Baukästen und moderne Websites erzeugen den Inhalt erst im Browser. Google kann JavaScript verarbeiten, nennt serverseitiges Rendern oder Pre-Rendering aber eine sehr gute Option, weil nicht alle Bots JavaScript ausführen können. Bei solchen Websites liefern unbekannte Adressen oft eine Fehlermeldung mit Statuscode 200. Google empfiehlt dann eine Weiterleitung auf eine Adresse mit echtem 404 oder ein noindex auf der Fehlerseite. Links sollten echte Links mit href-Attribut sein, sonst findet Google die Unterseiten nicht.

## XML-Sitemap und robots.txt

Eine XML-Sitemap listet die Seiten, die Google kennen soll, mit vollständigen Adressen. Reichen Sie sie im Sitemaps-Bericht der Search Console ein und tragen Sie sie zusätzlich in die robots.txt ein.

- **Nur indexierbare Hauptversionen:** keine weitergeleiteten Adressen, keine Seiten mit noindex, keine http-Adressen, wenn Ihre Website auf https läuft.
- **Absolute Adressen:** Google verlangt vollständige Adressen mit https und Domain, keine relativen Pfade.
- **Grenzen:** Eine einzelne Sitemap darf höchstens 50 MB unkomprimiert oder 50.000 Adressen enthalten. Für eine lokale Website reicht fast immer eine Datei.
- **lastmod ehrlich pflegen:** Google nutzt das Änderungsdatum, wenn es nachweisbar stimmt. Die Angaben priority und changefreq ignoriert Google.
- **Eintrag in der robots.txt:** Eine Zeile wie „Sitemap: https://ihredomain.de/sitemap.xml“ an beliebiger Stelle der Datei.

Google betont, dass eine eingereichte Sitemap nur ein Hinweis ist. Sie garantiert nicht, dass alle Adressen gecrawlt oder indexiert werden. Wichtiger ist, dass jede wichtige Seite über normale Links von anderen Seiten Ihrer Website erreichbar ist.

> **Häufiger Fehler:** Nach einem Relaunch bleibt oft die Sperre „Disallow: /“ aus der Testphase in der robots.txt stehen. Öffnen Sie nach jeder größeren Änderung ihredomain.de/robots.txt im Browser und prüfen Sie, ob dort etwas gesperrt ist, das Kunden finden sollen.

## Eine Hauptadresse mit HTTPS und sauberen Canonicals

Ihre Website sollte unter genau einer Adressvariante erreichbar sein, zum Beispiel https://www.ihredomain.de. Alle anderen Varianten leiten dauerhaft dorthin weiter, und doppelte Seiten verweisen per Canonical auf ihre Hauptversion.

Für Google sind http://ihredomain.de, https://ihredomain.de und https://www.ihredomain.de unterschiedliche Adressen. Laut Google sind Weiterleitungen und das Element rel="canonical" starke Signale für die bevorzugte Adresse, eine Sitemap ist ein schwaches Signal. Google kann trotzdem eine andere Version als Hauptversion wählen, wenn die Signale sich widersprechen.

*Weiterleitung und Canonical richtig einsetzen*

| Situation | Mittel | Hinweis aus Googles Dokumentation |
| --- | --- | --- |
| Alte Adresse oder http-Variante | Dauerhafte Weiterleitung (301) | Starkes Signal; eine vorübergehende Weiterleitung (302) nutzt Google nicht als Signal für die Hauptversion |
| Gleiche Seite mit Filter- oder Kampagnenparametern | rel="canonical" auf die Hauptversion | Starkes Signal |
| Sie wollen Duplikate ausblenden | Nicht robots.txt und nicht noindex | Google rät von beiden für die Kanonisierung ab |
| http und https parallel | Weiterleitung auf https | Google bevorzugt gleichwertige HTTPS-Seiten als kanonische Adressen |

### HTTPS ohne Lücken

Der **HTTPS-Bericht** der Search Console zeigt, wie viele indexierte Adressen über http oder https laufen. Als typische Ursachen nennt Google ein ungültiges Zertifikat, ein Canonical, das auf die http-Version zeigt, eine Sitemap mit http-Adressen und Weiterleitungen von https zurück auf http. Prüfen Sie außerdem, ob das Zertifikat automatisch verlängert wird. Ein abgelaufenes Zertifikat zeigt Besuchern eine Warnung, bevor sie Ihre Seite sehen.

## Mobile Version und Core Web Vitals mit INP

Google indexiert und bewertet die mobile Version Ihrer Seiten. Für die Core Web Vitals nennt Google als gute Werte einen LCP bis 2,5 Sekunden, einen INP unter 200 Millisekunden und einen CLS unter 0,1.

Google crawlt mit einem Smartphone-Agenten und empfiehlt responsives Webdesign. Mobile und Desktop-Fassung sollten dieselben Inhalte, Metadaten und strukturierten Daten haben. Inhalte, die erst nach Tippen oder Wischen geladen werden, lädt Google nicht. Die Prüfung am eigenen Gerät beschreibt [Mobile Local SEO](https://localdominate.org/blog/mobile-local-seo) Schritt für Schritt.

*Core Web Vitals laut Google*

| Messwert | Was er misst | Guter Wert |
| --- | --- | --- |
| LCP (Largest Contentful Paint) | Ladezeit des größten sichtbaren Inhalts | bis 2,5 Sekunden |
| INP (Interaction to Next Paint) | Reaktion auf Tippen und Klicken | unter 200 Millisekunden |
| CLS (Cumulative Layout Shift) | Springende Inhalte beim Laden | unter 0,1 |

Google schreibt, dass es kein einzelnes Signal für die Nutzerfreundlichkeit gibt und dass gute Werte keine Position ganz oben garantieren. Die Suche zeigt die relevantesten Inhalte, auch wenn die Nutzerfreundlichkeit nicht in jeder Hinsicht gut ist. Gute Werte helfen dort, wo viele ähnlich hilfreiche Seiten konkurrieren. Ihre Werte sehen Sie im Bericht Core Web Vitals der Search Console, einzelne Seiten prüfen Sie mit PageSpeed Insights. Praktische Maßnahmen stehen in [Core Web Vitals für lokale Websites](https://localdominate.org/blog/core-web-vitals-local-seo).

> **Veraltet:** Ältere Anleitungen nennen noch First Input Delay (FID) oder den Test auf Optimierung für Mobilgeräte. FID wurde durch INP ersetzt, den Test hat Google eingestellt.

## Strukturierte Daten kurz geprüft

Mit LocalBusiness-Markup können Sie Google Angaben wie Öffnungszeiten und Abteilungen mitteilen. Pflicht sind laut Google nur Name und Adresse, und alle Angaben müssen zum sichtbaren Text der Seite passen.

Technisch genügt für den Anfang eine Prüfung: Steht auf Startseite oder Kontaktseite ein LocalBusiness-Markup, und zeigt der Test für Rich-Suchergebnisse keine kritischen Fehler? Google empfiehlt unter anderem Telefon, Website-Adresse, Koordinaten und Öffnungszeiten als zusätzliche Felder. Die Angaben sollten exakt mit Ihrem Google-Unternehmensprofil und der Seite übereinstimmen.

- Welche Typen sich lohnen und welche nicht, erklärt [Schema Markup für lokale Unternehmen](https://localdominate.org/blog/schema-markup-local-seo).
- Ein vollständiges Beispiel zum Einbauen und Testen steht in [LocalBusiness Schema implementieren](https://localdominate.org/blog/localbusiness-schema-implementierung).

> **Stand Oktober 2026:** FAQ-Snippets erscheinen seit dem 7. Mai 2026 nicht mehr in der Google-Suche. Vorhandenes FAQPage-Markup bringt keine Darstellung mehr. Eine Garantie für irgendeine Darstellung gibt es bei strukturierten Daten ohnehin nicht.

## Standortseiten ohne Brückenseiten

Jeder echte Standort verdient eine eigene Seite mit Adresse, Zeiten und Leistungen vor Ort. Als Missbrauch von Brückenseiten nennt Google unter anderem mehrere Seiten, die auf bestimmte Regionen oder Städte ausgerichtet sind und Nutzer alle zur selben Seite weiterleiten.

Google nennt als Beispiel für Brückenseiten ausdrücklich mehrere Seiten, die auf bestimmte Regionen oder Städte ausgerichtet sind, Nutzer aber alle zur selben Seite führen. Eine Physiotherapie mit Praxen in Linz und Wels braucht zwei Standortseiten mit eigenem Inhalt. Fünfzig Seiten „Physiotherapie in [Ort]“, die nur den Ortsnamen tauschen und alle auf dieselbe Seite führen, entsprechen genau Googles Beispiel. Auch ohne Weiterleitung sind sie nach unserer Einschätzung ein Risiko.

*Echte Standortseite oder Brückenseite*

| Echte Standortseite | Brückenseite (Googles Beispiel und unsere Einschätzung) |
| --- | --- |
| Eigene Adresse, Telefonnummer und Öffnungszeiten des Standorts | Nur der Ortsname wechselt (unsere Einschätzung) |
| Team, Anfahrt, Parkmöglichkeiten, Leistungen vor Ort | Allgemeiner Text, auf vielen Seiten gleich |
| Im Unternehmensprofil des Standorts als Website hinterlegt | Nur für die Suche angelegt, nirgends verlinkt (unsere Einschätzung) |

Im Unternehmensprofil erlaubt Google ausdrücklich eine Website, auf der Ihr konkreter Standort vorgestellt wird. Bei mehreren Filialen verweist jedes Profil deshalb am besten auf die passende Standortseite. Weiterleitungs-Adressen, etwa auf soziale Netzwerke, sind im Website-Feld nicht erlaubt. Mehr zu Filialen steht in [Mehrere Standorte bei Google verwalten](https://localdominate.org/blog/gbp-mehrere-standorte). Wie Betriebe ohne Ladenlokal ihr Einzugsgebiet zeigen, ohne Stadtseiten zu kopieren, beschreibt [Heizung Sanitär Notdienst SEO](https://localdominate.org/blog/local-seo-heizung-sanitaer).

### Mehrsprachige Seiten in der Schweiz

Wer Seiten auf Deutsch und Französisch anbietet, kann Google die Sprachversionen mit **hreflang** zeigen, etwa mit dem Code de-CH. Jede Version muss sich selbst und alle anderen Versionen aufführen. Mehr zu den Besonderheiten im Land steht in [Local SEO in der Schweiz](https://localdominate.org/blog/local-seo-schweiz).

## robots.txt und KI-Crawler

Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen: Die Seite muss indexiert und für ein Snippet geeignet sein. Andere KI-Dienste nutzen eigene Crawler, die Sie in der robots.txt und beim Hoster zulassen oder sperren.

Google rät, das Crawling in der robots.txt und bei CDN oder Hoster zuzulassen, wichtige Inhalte als Text anzubieten und strukturierte Daten passend zum sichtbaren Text zu halten. Das sind dieselben Grundlagen wie in diesem Artikel. Eine Aufnahme in KI-Antworten kann niemand garantieren, auch kein Dienstleister.

Anbieter wie OpenAI, Anthropic und Perplexity unterscheiden Crawler für Suche, Training und Abrufe durch Nutzer. Welche Sie zulassen, ist eine eigene Entscheidung. Die Namen, fertige Beispiele für die robots.txt und den Bot-Schutz bei Hostern beschreibt [KI-Crawler steuern](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026), besonders der Abschnitt [Bot-Schutz bei Hoster und CDN](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026#cdn-firewall). Was Google für seine KI-Funktionen dokumentiert, steht in [Übersichten mit KI und Local SEO](https://localdominate.org/blog/google-ai-overviews-local-seo).

> **llms.txt:** Google hat im Juni 2026 klargestellt, dass die Google-Suche keine llms.txt-Datei braucht. Andere Dienste können sie nutzen. Einordnung in [llms.txt für lokale Unternehmen](https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026).

## Die Prüfliste in sinnvoller Reihenfolge

Beginnen Sie mit Zugang und Indexierung, weil alle anderen Maßnahmen nur wirken, wenn Google die Seiten aufnimmt. Danach folgen Hauptadresse und HTTPS, mobile Version und Ladezeit, strukturierte Daten und zuletzt Standortseiten und KI-Crawler.

1. **Search Console einrichten.** Domain-Property per DNS bestätigen und Sitemap einreichen.
2. **Wichtige Seiten prüfen.** Startseite, Leistungs-, Standort- und Kontaktseite im URL-Prüftool aufrufen. Alle müssen indexiert sein.
3. **robots.txt lesen.** Keine Sperre für Bereiche, die Kunden finden sollen. Sitemap-Zeile vorhanden.
4. **Adressvarianten testen.** http, https, mit und ohne www im Browser eingeben. Alle landen auf derselben https-Adresse.
5. **Mobile Version und Werte ansehen.** Seite am Smartphone durchgehen, Bericht Core Web Vitals öffnen, Ausreißer mit PageSpeed Insights prüfen.
6. **Markup testen.** Test für Rich-Suchergebnisse auf Startseite und Standortseiten, Angaben mit dem Unternehmensprofil abgleichen.
7. **Standortseiten durchsehen.** Eine Seite je echtem Standort, Profil verlinkt auf die passende Seite, keine kopierten Stadtseiten.
8. **Nach jeder Änderung wiederholen.** Nach Relaunch, Hosterwechsel oder neuem Baukasten die Schritte 2 bis 4 sofort erneut prüfen.

> **Einschätzung:** Die Reihenfolge ist unsere Empfehlung aus Prüfungen, keine Vorgabe von Google. Sie folgt der Logik, dass eine nicht indexierte Seite von keiner anderen Maßnahme profitiert. Für die laufende Pflege eignet sich die [monatliche Routine-Checkliste](https://localdominate.org/blog/local-seo-monthly-checklist).

## Häufige Fragen

### Was ist technisches Local SEO?

Technisches Local SEO umfasst die Maßnahmen, mit denen Google die Website eines lokalen Betriebs crawlen, indexieren und dem richtigen Ort zuordnen kann. Dazu gehören Search Console, Sitemap, robots.txt, eine Hauptadresse mit HTTPS, eine schnelle mobile Version, strukturierte Daten und echte Standortseiten.

### Muss jede Seite meiner Website indexiert sein?

Nein. Google schreibt selbst, dass Sie nicht davon ausgehen sollten, dass jede Adresse Ihrer Website indexiert ist. Wichtig ist, dass die Seiten indexiert sind, mit denen Sie Kunden gewinnen: Startseite, Leistungsseiten, Standortseiten und Kontaktseite.

### Reicht eine robots.txt, um eine Seite aus Google herauszuhalten?

Nein. Die robots.txt steuert das Crawling. Eine gesperrte Seite kann trotzdem ohne Beschreibung in den Ergebnissen erscheinen. Dafür ist ein noindex gedacht, und die Seite darf dann nicht in der robots.txt gesperrt sein.

### Sind die Core Web Vitals ein Rankingfaktor?

Google zählt sie zur Nutzerfreundlichkeit von Seiten, die seine Ranking-Systeme berücksichtigen. Es gibt aber kein einzelnes Signal, und gute Werte garantieren keine Position ganz oben. Relevanz geht vor.

### Darf ich für jede Stadt in meinem Einzugsgebiet eine eigene Seite anlegen?

Nur wenn jede Seite echten, eigenen Inhalt für diesen Ort hat. Viele fast gleiche Stadtseiten, die Nutzer alle zum selben Ziel führen, nennt Google als Beispiel für Missbrauch von Brückenseiten. Für Betriebe mit Einzugsgebiet ist eine gute Leistungsseite mit klarer Gebietsangabe meist die bessere Lösung.

### Brauche ich für KI-Suchen besondere Technik?

Für Übersichten mit KI und den KI-Modus nennt Google keine zusätzlichen technischen Anforderungen. Die Seite muss indexiert und für ein Snippet geeignet sein. Für andere KI-Dienste sollten deren Such-Crawler in robots.txt und Bot-Schutz nicht gesperrt sein.

## Quellen

- [Technische Anforderungen der Google Suche](https://developers.google.com/search/docs/essentials/technical?hl=de), Google Search Central
- [Property in der Search Console hinzufügen](https://support.google.com/webmasters/answer/34592?hl=de), Search Console-Hilfe
- [Bericht zur Seitenindexierung](https://support.google.com/webmasters/answer/7440203?hl=de), Search Console-Hilfe
- [URL-Prüftool](https://support.google.com/webmasters/answer/9012289?hl=de), Search Console-Hilfe
- [Einführung in robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=de), Google Search Central
- [Indexierung mit noindex blockieren](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=de), Google Search Central
- [Grundlagen zu JavaScript-SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=de), Google Search Central
- [Sitemap erstellen und einreichen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=de), Google Search Central
- [Doppelte URLs zusammenführen (Kanonisierung)](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=de), Google Search Central
- [HTTP-Statuscodes, Netzwerk- und DNS-Fehler](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=de), Google Search Central
- [HTTPS-Bericht](https://support.google.com/webmasters/answer/11396518?hl=de), Search Console-Hilfe
- [Best Practices für die Mobile-First-Indexierung](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=de), Google Search Central
- [Core Web Vitals und Google-Suchergebnisse](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de), Google Search Central
- [Nutzerfreundlichkeit von Seiten in den Google-Suchergebnissen](https://developers.google.com/search/docs/appearance/page-experience?hl=de), Google Search Central
- [Strukturierte Daten für lokale Unternehmen (LocalBusiness)](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de), Google Search Central
- [Spamrichtlinien für die Google-Websuche (Brückenseiten)](https://developers.google.com/search/docs/essentials/spam-policies?hl=de), Google Search Central
- [Richtlinien für die Darstellung Ihres Unternehmens bei Google](https://support.google.com/business/answer/3038177?hl=de), Google Unternehmensprofil-Hilfe
- [Lokalisierte Versionen deiner Seiten (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=de), Google Search Central
- [KI-Funktionen und deine Website](https://developers.google.com/search/docs/appearance/ai-features?hl=de), Google Search Central
- [A new mobile friendly testing tool (mit Hinweis: seit Dezember 2023 eingestellt)](https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool), Google Search Central Blog
- [Latest documentation updates (FAQ-Snippets eingestellt, llms.txt, INP ersetzt FID)](https://developers.google.com/search/updates), Google Search Central
- [Weiterleitungen und Google Suche](https://developers.google.com/search/docs/crawling-indexing/301-redirects?hl=de), Google Search Central

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-12. Fehler gefunden? info@localdominate.org
