---
title: "KI-Sichtbarkeit prüfen: die Checkliste für Website und Unternehmensprofil"
slug: ai-visibility-checklist
url: https://localdominate.org/blog/ai-visibility-checklist
canonical: https://localdominate.org/blog/ai-visibility-checklist
markdown_url: https://localdominate.org/blog-md/ai-visibility-checklist.md
language: de-DE
published: 2026-03-08
updated: 2026-10-10
reading_time_minutes: 11
category: "KI-Suche"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Checkliste für KI-Suche: Crawler-Zugang, lesbare Inhalte, klare Fakten, Profile und Messung, belegt mit Angaben von Google, OpenAI, Anthropic und Perplexity."
---

# KI-Sichtbarkeit prüfen: die Checkliste für Website und Unternehmensprofil

Für Inhaber lokaler Betriebe und ihre Website-Betreuer, die wissen wollen, ob ChatGPT, Perplexity, Claude und die KI-Funktionen der Google Suche ihre Seiten überhaupt lesen und richtig wiedergeben können. Sie bekommen eine Checkliste in sechs Bereichen, gestützt auf die Dokumentation der Anbieter, und eine Vorlage, um Ihre Sichtbarkeit in KI-Antworten selbst zu protokollieren.

## Die kurze Antwort

KI-Sichtbarkeit beginnt mit Technik: Die Such-Crawler der Anbieter müssen Ihre Seiten abrufen dürfen, und die Inhalte müssen als Text indexierbar sein. Google schreibt, dass für Übersichten mit KI und den KI-Modus **keine besonderen Optimierungen** nötig sind. Entscheidend sind klare, überprüfbare Angaben auf der Website, ein aktuelles Unternehmensprofil und eine regelmäßige Kontrolle der Antworten.

## Das Wichtigste in Kürze

- Prüfen Sie zuerst die robots.txt. OpenAI, Anthropic und Perplexity nutzen eigene Crawler für ihre Suche, die Sie getrennt vom Training erlauben oder sperren können.
- Google-Extended steuert laut Google nur Training und Fundierung für Gemini. Auf die Google Suche hat es keinen Einfluss.
- Für die KI-Funktionen der Google Suche gilt: Die Seite muss indexiert und für ein Snippet geeignet sein. Spezielle Dateien oder Schema-Typen sind laut Google nicht nötig.
- KI-Antworten greifen auf Fakten zurück. Leistungen, Preise, Einzugsgebiet und Öffnungszeiten gehören als Text auf die Website und stimmen mit dem Profil überein.
- Messen Sie selbst: feste Fragen, feste Abstände, Ergebnis in einer Tabelle.

## Woher KI-Dienste ihre Antworten nehmen

Die großen Dienste rufen für aktuelle Antworten Webseiten ab, über eigene Such-Crawler oder auf Anfrage eines Nutzers. Google nutzt für seine KI-Funktionen den Index der Google Suche.

Wenn jemand fragt „Welche Physiotherapie in Graz hat Abendtermine?“, sucht der Dienst passende Quellen und fasst sie zusammen. Was er nicht abrufen kann, kann er nicht zitieren. Darum steht der technische Zugang am Anfang dieser Checkliste.

*Wie die Anbieter Inhalte für Antworten finden*

| Dienst | Was der Anbieter dazu schreibt |
| --- | --- |
| Google Suche (Übersicht mit KI, KI-Modus) | Eine Seite muss indexiert und für die Anzeige mit Snippet geeignet sein. Zusätzliche technische Anforderungen gibt es laut Google nicht |
| ChatGPT-Suche | OAI-SearchBot wird genutzt, um Websites in den Suchergebnissen von ChatGPT anzuzeigen. Gesperrte Websites erscheinen dort laut OpenAI nicht in Suchantworten |
| Claude | Claude-SearchBot verbessert laut Anthropic die Suchergebnisse, Claude-User ruft Seiten ab, wenn Nutzer fragen |
| Perplexity | PerplexityBot soll Websites in den Suchergebnissen von Perplexity anzeigen und verlinken. Er wird laut Perplexity nicht für das Training von Modellen genutzt |

Wie lokale Betriebe in KI-Antworten insgesamt vorkommen, erklärt der Artikel [KI-Suche für lokale Unternehmen](https://localdominate.org/blog/ai-suche-lokale-unternehmen).

## Bereich 1: Zugang für Crawler

Prüfen Sie, ob Ihre robots.txt und Ihre Firewall die Such-Crawler der Anbieter durchlassen. Training und Suche sind bei OpenAI, Anthropic und Google getrennt steuerbar.

*Crawler der großen Anbieter und was eine Sperre bewirkt*

| Token in robots.txt | Anbieter | Zweck | Folge einer Sperre laut Anbieter |
| --- | --- | --- | --- |
| OAI-SearchBot | OpenAI | Suche in ChatGPT | Keine Anzeige in ChatGPT-Suchantworten, Navigationslinks bleiben möglich |
| GPTBot | OpenAI | Training von Modellen | Inhalte sollen nicht für das Training genutzt werden |
| Claude-SearchBot | Anthropic | Suche in Claude | Inhalte werden nicht für die Suche indexiert, die Sichtbarkeit kann sinken |
| Claude-User | Anthropic | Abruf auf Nutzeranfrage | Claude kann Ihre Seiten auf Nutzerfragen nicht abrufen |
| ClaudeBot | Anthropic | Training von Modellen | Künftige Inhalte werden vom Training ausgeschlossen |
| PerplexityBot | Perplexity | Suche in Perplexity | Keine Anzeige in den Suchergebnissen von Perplexity |
| Google-Extended | Google | Training und Fundierung für Gemini-Apps und Vertex AI | Kein Einfluss auf die Google Suche und kein Ranking-Signal |
| Googlebot | Google | Google Suche einschließlich KI-Funktionen | Seiten fallen aus der Suche und damit aus Übersichten mit KI |

1. **robots.txt öffnen.** Rufen Sie ihredomain.de/robots.txt im Browser auf. Suchen Sie nach den Tokens aus der Tabelle und nach Regeln für alle Crawler („User-agent: *“) mit „Disallow: /“.
2. **Entscheiden, was Sie wollen.** Wer in KI-Suchantworten erscheinen will, lässt die Such-Crawler zu. Ob Sie Training erlauben, ist eine eigene Entscheidung. OpenAI schreibt ausdrücklich, dass beide Einstellungen unabhängig voneinander sind.
3. **Firewall und CDN prüfen.** Google empfiehlt, das Crawling auch in CDN und Hosting zuzulassen. Bot-Schutz bei Cloudflare oder Ihrem Hoster kann Crawler blockieren, obwohl die robots.txt sie erlaubt. OpenAI und Perplexity veröffentlichen dafür ihre IP-Bereiche.
4. **Wartezeit einplanen.** OpenAI und Perplexity nennen bis zu etwa 24 Stunden, bis Änderungen an der robots.txt wirken.

> **Wichtig:** Die robots.txt ist laut Google kein Mittel, um Seiten aus der Google Suche herauszuhalten. Dafür gibt es noindex oder einen Passwortschutz. Abrufe auf direkte Nutzeranfrage, etwa durch ChatGPT-User oder Perplexity-User, folgen laut den Anbietern der robots.txt unter Umständen nicht. Details und Beispiele im Artikel [KI-Crawler steuern](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026).

## Bereich 2: Inhalte, die sich lesen lassen

Wichtige Inhalte müssen als Text auf der Seite stehen, über interne Links erreichbar und ohne Anmeldung zugänglich sein. Diese Punkte nennt Google ausdrücklich auch für seine KI-Funktionen.

- **Text statt Bild:** Preise, Öffnungszeiten, Leistungen und Speisekarten nicht nur als Bild oder PDF, sondern als Text auf der Seite.
- **Erreichbar über Links:** jede wichtige Seite ist über das Menü oder interne Links erreichbar, nicht nur über die Suche auf der Website.
- **Ohne Hürde:** keine Anmeldung, kein Pop-up, das den Inhalt verdeckt.
- **Indexiert:** im URL-Prüftool der Search Console nachsehen, ob Google die wichtigsten Seiten indexiert hat.
- **Ohne JavaScript lesbar:** Prüfen Sie im Quelltext der Seite (Strg+U), ob Ihre Texte dort stehen. Dann können sie auch Crawler lesen, die kein JavaScript ausführen.

## Bereich 3: klare, überprüfbare Fakten

KI-Antworten nennen Fakten: was Sie anbieten, wo, für wen, zu welchen Zeiten und Konditionen. Je klarer diese Angaben auf Ihrer Website stehen, desto weniger muss ein Dienst raten.

*Fakten, die auf Ihre Website gehören*

| Angabe | Wo | Beispiel für eine klare Formulierung |
| --- | --- | --- |
| Leistungen | Eigene Seite je Hauptleistung | „Wir bieten Zahnreinigung, Füllungen und Implantate an.“ |
| Ort und Einzugsgebiet | Startseite, Kontakt, Leistungsseiten | „Wir arbeiten in Linz und im Umkreis von etwa 30 Kilometern.“ |
| Öffnungszeiten und Erreichbarkeit | Kontaktseite, Fußzeile | „Montag bis Freitag 8 bis 18 Uhr, Notdienst am Wochenende.“ |
| Preise oder Preisrahmen | Leistungsseite | „Erstgespräch kostenlos, Stundensatz ab …“ |
| Merkmale | Leistungsseite, Kontakt | „Barrierefreier Eingang, Parkplätze im Hof, Termine auch auf Englisch.“ |
| Wer dahintersteht | Über uns, Impressum | Namen, Qualifikationen, Mitgliedschaften |

Dieselben Angaben müssen im Google-Unternehmensprofil stehen. Google nennt in seinen Hinweisen zu KI-Funktionen ausdrücklich, dass Informationen im Unternehmensprofil auf dem neuesten Stand sein sollen. Widersprüche zwischen Website, Profil und Verzeichnissen sind eine häufige Quelle falscher KI-Antworten, wie im Artikel [Falschangaben in KI-Antworten korrigieren](https://localdominate.org/blog/ai-falschangaben-korrigieren-2026) beschrieben.

> **Ehrlich bleiben:** Schreiben Sie nur, was stimmt und was Sie belegen können. Erfundene Auszeichnungen, Kundenzahlen oder Bestwerte machen Ihre Seite nicht zitierfähiger, sondern angreifbar.

## Bereich 4: strukturierte Daten mit Augenmaß

Strukturierte Daten vom Typ LocalBusiness helfen Suchmaschinen beim Zuordnen von Name, Adresse und Öffnungszeiten. Für die KI-Funktionen der Google Suche braucht es laut Google aber keine besonderen Schema-Typen.

- **LocalBusiness** oder ein passender Untertyp auf der Startseite oder Kontaktseite, mit Name, Adresse, Telefon und Öffnungszeiten. Anleitung im Artikel [LocalBusiness-Schema](https://localdominate.org/blog/localbusiness-schema-implementierung).
- **Sichtbar und gleich:** Die Angaben im Markup müssen laut Google dem sichtbaren Text der Seite entsprechen.
- **Testen:** nach jeder Änderung mit dem Test für Rich-Suchergebnisse prüfen.
- **Keine Wunderwirkung erwarten:** FAQ-Ergebnisse zeigt Google seit dem 7. Mai 2026 gar nicht mehr, vorher seit 2023 nur für bekannte Behörden- und Gesundheitswebsites. Anleitungs-Ergebnisse (HowTo) hat Google im September 2023 ganz eingestellt. Fragen und Antworten auf der Seite sind trotzdem nützlich, als normaler Text.

## Bereich 5: Profile, Bewertungen und Erwähnungen

Neben Ihrer Website lesen KI-Dienste Profile, Bewertungsportale und Berichte über Sie. Halten Sie die wichtigsten Profile aktuell und sorgen Sie für echte Bewertungen.

- **Google-Unternehmensprofil:** vollständig und aktuell. In Google Maps hat Google die frühere Funktion „Fragen und Antworten“ Ende 2025 durch eine KI-Funktion ersetzt, die Antworten aus Ihren Angaben und passenden Rezensionen erzeugt. Mehr im Artikel [KI-Funktionen im Unternehmensprofil](https://localdominate.org/blog/unternehmensprofil-ki-funktionen-2026).
- **Apple Business und Bing Places:** gleiche Daten wie bei Google. Siehe [Apple Business für Local SEO](https://localdominate.org/blog/apple-business-connect-local-seo-2026) und [Bing und Copilot](https://localdominate.org/blog/bing-copilot-local-seo-2026).
- **Bewertungen:** echte, laufende Bewertungen von allen Kunden, ohne Anreize und ohne Vorauswahl. Was erlaubt ist, steht in [Google-Bewertungen bekommen](https://localdominate.org/blog/google-bewertungen-bekommen).
- **Erwähnungen:** Verband, Kammer, Lokalpresse, Partner. Seiten, die Sie mit Namen und Ort nennen, sind mögliche Quellen für Antworten.

## Bereich 6: selbst messen

Stellen Sie jeden Monat dieselben Fragen an dieselben Dienste und protokollieren Sie, ob und wie Ihr Betrieb genannt wird. Die Search Console zählt Auftritte in den KI-Funktionen von Google im Suchtyp „Web“ mit.

1. **Fragen festlegen.** Fünf bis zehn Fragen, die Kunden stellen würden, mit Ort: „Welcher Elektriker in Pasing macht E-Ladestationen?“ Dazu eine Frage nach Ihrem Namen: „Was weißt du über [Betrieb] in [Ort]?“
2. **Dienste festlegen.** Zum Beispiel ChatGPT, Perplexity, Claude, Gemini und die Google Suche. Immer abgemeldet oder in einem neutralen Konto fragen.
3. **Protokollieren.** Für jede Frage notieren: genannt ja oder nein, verlinkt ja oder nein, Angaben richtig oder falsch, welche Quellen zitiert werden.
4. **Webanalyse prüfen.** In der Webanalyse unter den verweisenden Websites nach Domains von KI-Diensten suchen, etwa chatgpt.com oder perplexity.ai.
5. **Search Console einordnen.** Laut Google fließen Auftritte in Übersichten mit KI und im KI-Modus in den Leistungsbericht im Suchtyp „Web“ ein.

*Vorlage: Protokoll für KI-Antworten*

| Datum | Dienst | Frage | Genannt | Verlinkt | Angaben richtig | Zitierte Quellen |
| --- | --- | --- | --- | --- | --- | --- |
| TT.MM.JJJJ | [Dienst] | [Frage 1] | ja / nein | ja / nein | ja / nein / teilweise | [Domains] |
| TT.MM.JJJJ | [Dienst] | [Frage 2] |  |  |  |  |

KI-Antworten schwanken von Abfrage zu Abfrage. Ein einzelnes Ergebnis sagt wenig, der Verlauf über Monate mehr. Ein ausführliches Vorgehen beschreibt der Artikel [KI-Zitate überwachen](https://localdominate.org/blog/ai-zitat-monitoring-local-seo-2026).

## Und llms.txt?

Die Datei llms.txt ist ein Vorschlag für eine Übersicht in Markdown, die KI-Agenten das Lesen einer Website erleichtern soll. Für die Google Suche brauchen Sie sie laut Google nicht.

Google schreibt in seinen Hinweisen zu KI-Funktionen, dass Sie keine neuen maschinenlesbaren Dateien oder KI-Textdateien erstellen müssen, um dort zu erscheinen. Der llms.txt-Vorschlag selbst beschreibt die Datei als freiwillige Hilfe für Agenten. Sie schadet nicht, wenn sie stimmt und gepflegt wird. Sie ersetzt aber weder eine lesbare Website noch ein aktuelles Profil. Mehr im Artikel [llms.txt für lokale Unternehmen](https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026).

## Die Checkliste zum Abhaken

Gehen Sie die Liste einmal vollständig durch und wiederholen Sie Bereich 6 jeden Monat. Die übrigen Bereiche prüfen Sie nach Änderungen an Website oder Hosting.

*KI-Sichtbarkeit: Prüfliste*

| Bereich | Prüfpunkt | Erledigt |
| --- | --- | --- |
| 1 Zugang | robots.txt lässt OAI-SearchBot, Claude-SearchBot, PerplexityBot und Googlebot zu |  |
| 1 Zugang | Entscheidung zu GPTBot, ClaudeBot und Google-Extended bewusst getroffen |  |
| 1 Zugang | Bot-Schutz in CDN oder Firewall blockiert diese Crawler nicht |  |
| 2 Inhalte | Leistungen, Preise und Öffnungszeiten stehen als Text auf der Seite |  |
| 2 Inhalte | Wichtige Seiten über interne Links erreichbar und indexiert |  |
| 2 Inhalte | Texte stehen im Quelltext, nicht nur nach JavaScript |  |
| 3 Fakten | Je Hauptleistung eine Seite mit Ort, Ablauf und Konditionen |  |
| 3 Fakten | Website und Unternehmensprofil nennen dieselben Daten |  |
| 4 Daten | LocalBusiness-Markup vorhanden, entspricht dem sichtbaren Text, Test ohne Fehler |  |
| 5 Profile | Google, Apple und Bing mit gleichen, aktuellen Angaben |  |
| 5 Profile | Bewertungen laufen als fester Ablauf, Antworten auf alle neuen Bewertungen |  |
| 6 Messen | Fragenliste und Protokoll angelegt, monatlicher Termin im Kalender |  |

Wenn Sie KI nicht nur für Ihre Sichtbarkeit, sondern auch im eigenen Betrieb einsetzen wollen, finden Sie unseren Ansatz auf der Seite [KI-Beratung](https://localdominate.org/de/ki).

## Häufige Fragen

### Muss ich GPTBot erlauben, um in ChatGPT zu erscheinen?

Nein. OpenAI trennt die Einstellungen: OAI-SearchBot steuert die Anzeige in der ChatGPT-Suche, GPTBot das Training. Sie können die Suche erlauben und das Training sperren.

### Verliere ich Google-Rankings, wenn ich Google-Extended sperre?

Laut Google nicht. Google-Extended hat keinen Einfluss auf die Aufnahme in die Google Suche und ist kein Ranking-Signal. Die KI-Funktionen der Google Suche steuern Sie über den Googlebot und die Snippet-Einstellungen.

### Brauche ich spezielles Schema-Markup für KI-Antworten?

Für die Google Suche nicht. Google schreibt, dass keine speziellen strukturierten Daten nötig sind. LocalBusiness-Markup bleibt trotzdem sinnvoll, um Ihre Firmendaten eindeutig zuzuordnen.

### Kann ich eine Nennung in ChatGPT oder Perplexity kaufen oder garantieren?

Eine Garantie kann niemand seriös geben. Sie können dafür sorgen, dass Ihre Seiten abrufbar sind, Ihre Angaben klar und überall gleich sind und echte Bewertungen und Erwähnungen entstehen. Was Dienste daraus machen, entscheiden die Anbieter.

### Wie oft sollte ich die Checkliste durchgehen?

Einmal vollständig, danach nach jeder Änderung an Website, Hosting oder Firewall. Das Protokoll der KI-Antworten führen Sie jeden Monat.

## Quellen

- [KI-Funktionen und deine Website](https://developers.google.com/search/docs/appearance/ai-features?hl=de), Google Search Central
- [Gewöhnliche Crawler von Google (Google-Extended)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers?hl=de), Google for Developers
- [Einführung und Leitfaden zu robots.txt-Dateien](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=de), Google Search Central
- [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots), OpenAI
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), Claude Help Center
- [Perplexity Crawlers](https://docs.perplexity.ai/guides/bots), Perplexity
- [Strukturierte Daten für lokale Unternehmen (LocalBusiness)](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de), Google Search Central
- [Allgemeine Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de), Google Search Central
- [Änderungen an Rich-Suchergebnissen für Anleitungen und FAQs](https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=de), Google Search Central Blog
- [URL-Prüftool](https://support.google.com/webmasters/answer/9012289?hl=de), Search Console-Hilfe
- [Google quietly kills Q&A for an AI button most won't use](https://ppc.land/google-quietly-kills-q-a-for-an-ai-button-most-wont-use/), PPC Land
- [The /llms.txt file](https://llmstxt.org/), llmstxt.org

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-10. Fehler gefunden? info@localdominate.org
