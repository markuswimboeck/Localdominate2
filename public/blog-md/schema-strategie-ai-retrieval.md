---
title: "Schema-Strategie für KI-Suche: Was strukturierte Daten bei Google und KI-Assistenten bewirken und was nicht"
slug: schema-strategie-ai-retrieval
url: https://localdominate.org/blog/schema-strategie-ai-retrieval
canonical: https://localdominate.org/blog/schema-strategie-ai-retrieval
markdown_url: https://localdominate.org/blog-md/schema-strategie-ai-retrieval.md
language: de-DE
published: 2026-05-20
updated: 2026-10-11
reading_time_minutes: 13
category: "KI-Suche"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Was Google, Microsoft, OpenAI und Perplexity zu strukturierten Daten dokumentieren, was Schema für KI-Antworten nicht leistet und welcher Satz Betrieben reicht."
---

# Schema-Strategie für KI-Suche: Was strukturierte Daten bei Google und KI-Assistenten bewirken und was nicht

Für Inhaber lokaler Betriebe und ihre Webdienstleister, denen Schema Markup als Schlüssel zu ChatGPT und Co. angeboten wird. Sie erfahren, was Google, Microsoft, OpenAI, Perplexity und Anthropic tatsächlich über strukturierte Daten schreiben, was Markup nicht leistet und wie ein kleiner, korrekter Satz für Ihren Betrieb aussieht.

## Die kurze Antwort

Strukturierte Daten helfen Suchmaschinen, die Angaben einer Seite sicher zuzuordnen. Für die Übersicht mit KI und den KI-Modus sind sie laut Google nicht erforderlich, ein besonderes Schema gibt es nicht. Microsoft schreibt, Schema helfe Suchmaschinen und KI-Systemen beim Verstehen. OpenAI, Perplexity und Anthropic erwähnen es in ihren Hinweisen für Websites nicht. Für lokale Betriebe genügt ein kleiner, korrekter Satz.

## Das Wichtigste in Kürze

- Google nutzt strukturierte Daten, um Seiten zu verstehen und Informationen über die Welt zu sammeln. Für seine KI-Funktionen sind sie laut Google nicht erforderlich, ein besonderes Schema dafür gibt es nicht.
- Microsoft beschreibt Schema als Code, der Suchmaschinen und KI-Systemen hilft, Inhalte zu verstehen. OpenAI, Perplexity und Anthropic erwähnen strukturierte Daten auf ihren Seiten für Website-Betreiber nicht.
- Kein Anbieter sagt für Markup eine Nennung oder Quellenangabe in KI-Antworten zu. Wer das verspricht, kann es nicht belegen.
- Für einen Betrieb mit einem Standort genügt meist ein LocalBusiness-Block mit dem genauesten Untertyp. Organization kommt bei mehreren Standorten hinzu, Event nur für echte, öffentliche Veranstaltungen.
- Alles im Markup muss sichtbar auf der Seite stehen und zum Unternehmensprofil passen. Liefern Sie den Block im HTML aus, denn ob die Crawler von OpenAI, Perplexity und Anthropic JavaScript ausführen, dokumentieren diese Anbieter nicht.

## Was strukturierte Daten sind und wofür Google sie nutzt

Strukturierte Daten sind ein Datenblock im Quelltext, der mit dem Vokabular von schema.org beschreibt, was auf der Seite steht. Google nutzt sie laut eigener Dokumentation, um den Inhalt einer Seite zu verstehen und um Informationen über das Web und die Welt zu sammeln, etwa über Unternehmen.

Der Block nennt Dinge beim Namen: Dies ist ein Installationsbetrieb, das ist seine Adresse, so lauten die Öffnungszeiten. Google empfiehlt dafür das Format **JSON-LD**, weil das Markup dabei nicht mit dem sichtbaren Text verwoben ist. Microdata und RDFa sind laut Google gleichwertig, solange sie gültig und richtig umgesetzt sind.

Google nennt zwei Wirkungen. Erstens helfen die Daten beim Verstehen der Seite. Zweitens können sie eine Seite für besondere Darstellungen in der Suche qualifizieren, etwa für Veranstaltungen oder Produkte. Eine Garantie gibt es laut Google nicht: Auch Markup, das alle Tests besteht, kann ohne besondere Darstellung bleiben.

> **Maßgeblich ist Googles Dokumentation:** Schema.org ist ein allgemeines Vokabular. Für das Verhalten der Google-Suche sollen Sie sich laut Google auf die Dokumentation von Google Search Central verlassen, nicht auf die von schema.org. Ein Typ, den schema.org kennt, ist deshalb noch keine Funktion in der Google-Suche.

Welche Typen und Felder Google für lokale Betriebe auswertet und welche Darstellungen eingestellt sind, steht ausführlich in [Schema Markup für lokale Unternehmen](https://localdominate.org/blog/schema-markup-local-seo). Dieser Artikel klärt eine andere Frage: Was bringt Markup für KI-Antworten, und welcher kleinste Satz ist für Ihren Betrieb richtig?

## Was die Anbieter von KI-Suche dokumentieren

Google schreibt, strukturierte Daten seien für die generative KI-Suche nicht erforderlich, empfiehlt sie aber weiter als Teil der SEO, und Microsoft nennt Schema eine Hilfe für Suchmaschinen und KI-Systeme. OpenAI, Perplexity und Anthropic äußern sich auf ihren Seiten für Website-Betreiber nicht dazu.

*Strukturierte Daten in der Dokumentation der Anbieter (geprüft am 11. Oktober 2026)*

| Anbieter | Was dokumentiert ist | Was offen bleibt |
| --- | --- | --- |
| Google (Übersicht mit KI, KI-Modus) | Strukturierte Daten sind für die generative KI-Suche nicht erforderlich, ein besonderes schema.org-Markup gibt es nicht. Als Teil der SEO bleiben sie sinnvoll und müssen zum sichtbaren Text passen. | Ob und wie die KI-Funktionen das Markup einzelner Seiten auswerten |
| Microsoft (Bing, Copilot) | Ein Produktmanager von Bing schreibt im Blog von Microsoft Advertising, Schema helfe Suchmaschinen und KI-Systemen, Inhalte zu verstehen. Eingebunden werde es meist als JSON-LD. | Welche Typen Copilot nutzt und mit welchem Gewicht |
| OpenAI (ChatGPT-Suche) | Jede öffentliche Website kann erscheinen, OAI-SearchBot darf nicht gesperrt sein. Strukturierte Daten erwähnt die Seite für Website-Betreiber nicht. Für Produktergebnisse nennt OpenAI strukturierte Metadaten eigener und fremder Anbieter sowie direkte Produktfeeds. | Ob Markup auf Websites in die Auswahl lokaler Ergebnisse einfließt |
| Perplexity | PerplexityBot soll Websites in den Suchergebnissen auffinden und verlinken. Strukturierte Daten erwähnt die Crawler-Dokumentation nicht. | Jede Aussage zu Markup |
| Anthropic (Claude) | Claude-SearchBot soll die Qualität der Suchergebnisse verbessern, eine Sperre kann die Sichtbarkeit verringern. Strukturierte Daten erwähnt die Hilfeseite nicht. | Jede Aussage zu Markup |

Daneben gibt es einen Bericht von Search Engine Land vom 20. März 2025 über einen Vortrag von Fabrice Canel (Microsoft Bing) auf der SMX München. Die Aussage, Schema helfe den Sprachmodellen von Microsoft beim Verstehen von Inhalten, stammt laut dem Bericht aus einem LinkedIn-Beitrag von David Mihm über den Vortrag. Canel habe die Angaben in den Kommentaren bestätigt. Ein wörtliches Zitat von Canel zu Schema enthält der Bericht nicht. Belastbarer ist der Microsoft-Beitrag vom Oktober 2025, der dasselbe allgemein beschreibt.

> **Einschätzung:** Dass KI-Assistenten Seiten mit Schema „bevorzugen“ oder „direkt zitieren“, steht in keiner der geprüften Dokumentationen. Belegt ist nur: Google und Microsoft beschreiben strukturierte Daten als Hilfe zum Verstehen. Sinnvoll ist Markup trotzdem, weil es Ihre Grunddaten eindeutig macht. Eine Nennung sollten Sie davon nicht erwarten. Was Google insgesamt zur Optimierung für KI-Antworten sagt, fasst [Was ist GEO?](https://localdominate.org/blog/was-ist-geo-generative-engine-optimization#was-google-sagt) zusammen.

## Was strukturierte Daten nicht tun

Strukturierte Daten garantieren weder eine besondere Darstellung noch eine Nennung in KI-Antworten. Sie ersetzen keinen sichtbaren Text, kein gepflegtes Unternehmensprofil und keinen Zugang für die Crawler.

*Verbreitete Behauptungen und was die Quellen sagen*

| Behauptung | Was die Quellen sagen |
| --- | --- |
| „Mit Schema zitiert die KI Sie direkt“ | Keiner der geprüften Anbieter sagt das zu. Für Übersicht mit KI und KI-Modus gibt es laut Google keine zusätzlichen Anforderungen. Laut einem Bericht von Search Engine Journal halten Bings Richtlinien fest, dass GEO keine Quellenangaben garantiert, so wie SEO keine Rankings garantiert. |
| „FAQPage, Service und Article sind Pflicht für KI“ | Google: Ein besonderes Schema ist nicht nötig. FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr. Service und HowTo stehen nicht in Googles Liste der unterstützten Funktionen. |
| „Je mehr Markup, desto besser“ | Google: Markup muss den Inhalt der Seite wahrheitsgemäß wiedergeben. Unsichtbare, irrelevante oder irreführende Inhalte dürfen nicht ausgezeichnet werden. |
| „Eigene Bewertungen als AggregateRating bringen Sterne“ | Kontrolliert ein Unternehmen die Bewertungen über sich selbst, zeigt Google bei LocalBusiness und Organization keine Sterne, auch nicht bei eingebetteten Widgets. Gefälschte oder nicht offengelegte belohnte Bewertungen gehören laut Google weder auf die Seite noch ins Markup. |
| „Schema ersetzt Text auf der Seite“ | Google empfiehlt, wichtige Inhalte als Text bereitzustellen und das Markup passend zum sichtbaren Text zu halten. Microsoft rät, wichtige Angaben nicht nur in Bildern zu zeigen. |
| „Schema ist ein Rankingfaktor“ | Google beschreibt Markup als Hilfe zum Verstehen und als Voraussetzung für besondere Darstellungen. Eine manuelle Maßnahme wegen strukturierter Daten kostet laut Google die Eignung für Rich-Suchergebnisse, wirkt sich aber nicht auf das Ranking in der Websuche aus. |

> **Korrektur zur früheren Fassung:** Eine frühere Version dieses Artikels nannte FAQPage, Service und Article „Must-have“ für KI-Suchmaschinen und zeigte ein Beispiel mit eigener Durchschnittsbewertung als AggregateRating. Beides widerspricht der Dokumentation von Google. Wir haben es entfernt, ebenso die Behauptung, alle großen Sprachmodelle würden JSON-LD verstehen und bevorzugen. Dafür gibt es keine Quelle.

## Steht das Markup dort, wo Crawler es lesen?

Google kann JSON-LD lesen, das per JavaScript in die Seite eingefügt wird. Ob die Crawler von OpenAI, Perplexity und Anthropic JavaScript ausführen, steht auf deren Seiten für Website-Betreiber nicht.

Viele Website-Baukästen und Plugins fügen strukturierte Daten erst im Browser ein. Für Google ist das laut Dokumentation kein Hindernis, auch wenn ein Widget im Content-Management-System den Block einfügt. Für die anderen Systeme fehlt eine Aussage, und eine fehlende Aussage ist keine Zusage.

> **Einschätzung:** Liefern Sie den JSON-LD-Block im HTML aus, das der Server schickt. Dann ist er auch für Systeme lesbar, die kein JavaScript ausführen. Dasselbe gilt für die Angaben selbst: Adresse, Telefon und Öffnungszeiten gehören als Text in die Seite, nicht nur in ein Bild oder ein Skript.

1. **Quelltext ansehen.** Rufen Sie die Kontaktseite im Browser auf und öffnen Sie die Quelltextansicht. Suchen Sie nach „application/ld+json“. Steht der Block dort, liefert der Server ihn aus.
2. **Gerenderte Seite prüfen.** Der Test für Rich-Suchergebnisse zeigt, was Google findet. Er prüft standardmäßig mit dem User-Agent für Smartphones.
3. **Zugang prüfen.** Markup nützt nur, wenn Crawler die Seite lesen dürfen. Welche Crawler Sie zulassen sollten, zeigt [KI-Crawler steuern](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026#crawler-tabelle).

## Der kleinste sinnvolle Satz für einen lokalen Betrieb

Für einen Betrieb mit einem Standort reicht meist ein LocalBusiness-Block mit dem genauesten Untertyp auf der Seite mit Adresse und Öffnungszeiten. Organization kommt bei mehreren Standorten auf die Startseite, Event und Product nur, wenn Sie echte Veranstaltungen oder Produkte anbieten.

*Bausteine und wann Sie sie brauchen (Stand der Google-Dokumentation Oktober 2026)*

| Baustein | Wann | Wohin | Was Google dazu schreibt |
| --- | --- | --- | --- |
| LocalBusiness mit Untertyp | Für jeden Standort mit Postanschrift | Kontakt- oder Standortseite, je Standort ein eigener Block | Pflicht sind name und address. Empfohlen unter anderem geo, telephone, url, openingHoursSpecification und priceRange |
| Organization-Angaben | Ein Standort: als Felder im LocalBusiness-Block. Mehrere Standorte: zusätzlich ein Block für das Unternehmen | Startseite oder eine Seite über das Unternehmen | Keine Pflichtfelder. Empfohlen unter anderem logo, url, sameAs, legalName und vatID. Für physische Standorte rät Google zum genauesten LocalBusiness-Untertyp |
| Event | Nur für öffentliche Termine mit Datum und Ort, etwa Weinabend, Tag der offenen Tür oder Kurs | Seite der Veranstaltung | Pflicht sind name, startDate und location. Öffnungszeiten, Gutscheine und kurzfristige Rabatte sind keine Veranstaltungen |
| Product mit Offer | Nur für Produktseiten. Mit Kaufmöglichkeit gilt die Variante für Händlereinträge, ohne Kaufmöglichkeit die für Produkt-Snippets | Die jeweilige Produktseite | Strukturierte Daten und ein Feed im Merchant Center ergänzen sich |
| Nicht nötig | AggregateRating für eigene Bewertungen, neues FAQPage-Markup, HowTo | Nirgends | Keine Sterne bei eigenen Bewertungen. FAQ-Snippets gibt es seit Mai 2026 nicht mehr, HowTo fehlt in der Liste der unterstützten Funktionen |

Für Hotels, Praxen und Gaststätten gibt es eigene Untertypen. Laut schema.org steht Hotel unter LodgingBusiness, das wiederum ein Untertyp von LocalBusiness ist, und Dentist ist ein direkter Untertyp von LocalBusiness. Google nennt als Beispiele unter anderem Restaurant und HealthClub und erlaubt mehrere Typen als Liste, etwa Elektriker, Installateur und Schlüsseldienst. Das Feld additionalType unterstützt Google nicht.

> **Veranstaltungen in Österreich und der Schweiz:** Die besondere Darstellung von Veranstaltungen führt Google für Deutschland auf Deutsch auf. Österreich und die Schweiz stehen nicht in der Länderliste. Das Markup beschreibt die Veranstaltung trotzdem eindeutig, eine besondere Darstellung ist für diese Länder aber nicht dokumentiert.

## Beispiel: ein LocalBusiness-Block Zeile für Zeile

Das Beispiel beschreibt einen erfundenen Installationsbetrieb mit einem Standort. Jede Zeile der Tabelle ist eine Eigenschaft im JSON-LD-Block, die Werte übernehmen Sie aus Ihrem Unternehmensprofil und Ihrer Kontaktseite.

*LocalBusiness-Block für einen Betrieb mit einem Standort (erfundene Beispieldaten, X steht für Ihre Ziffern)*

| Eigenschaft | Zeile im JSON-LD | Worauf Sie achten |
| --- | --- | --- |
| Rahmen | script-Element mit type="application/ld+json", darin { "@context": "https://schema.org", … } | Ein Block im HTML der Kontaktseite |
| @type | "@type": "Plumber" | Genauester Untertyp. Mehrere als Liste, etwa ["Plumber", "Electrician"] |
| name | "name": "Haustechnik Beispiel GmbH" | Wie auf Schild, Website und Unternehmensprofil |
| address | "address": { "@type": "PostalAddress", "streetAddress": "Beispielstraße 1", "postalCode": "93047", "addressLocality": "Regensburg", "addressCountry": "DE" } | Pflichtfeld. So vollständig wie möglich |
| telephone | "telephone": "+49 941 XXXXXXX" | Mit Landes- und Ortsvorwahl |
| url | "url": "https://www.example.com/kontakt" | Die Seite dieses Standorts |
| geo | "geo": { "@type": "GeoCoordinates", "latitude": 49.01234, "longitude": 12.09876 } | Mindestens fünf Nachkommastellen, am besten der Punkt aus dem Profil |
| openingHoursSpecification | "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:30", "closes": "17:00" }] | Dieselben Zeiten wie auf der Seite und im Profil. Ganztägig geschlossen: opens und closes auf 00:00. Saisonale Zeiten mit validFrom und validThrough |
| logo | "logo": "https://www.example.com/logo.png" | Feld aus Organization. Mindestens 112 × 112 Pixel |
| sameAs | "sameAs": ["https://www.facebook.com/…", "https://www.instagram.com/…"] | Feld aus Organization. Links zu Ihren Profilen auf anderen Websites |

1. **Werte sammeln.** Name, Adresse, Telefon, Öffnungszeiten und Koordinaten aus dem Unternehmensprofil übernehmen, nicht aus dem Gedächtnis.
2. **Untertyp wählen.** Den genauesten passenden Typ auf schema.org suchen. Passt keiner, bleibt es bei LocalBusiness.
3. **Block einbauen.** Im HTML der Kontakt- oder Standortseite. Bei mehreren Standorten bekommt jede Standortseite einen eigenen Block.
4. **Sichtbarkeit prüfen.** Jede Angabe im Block muss auch im Text der Seite stehen. Was Besucher nicht sehen, gehört nicht ins Markup.
5. **Testen.** Test für Rich-Suchergebnisse mit der veröffentlichten Adresse, danach die URL-Prüfung in der Search Console.

Weitere Felder wie priceRange (unter 100 Zeichen), department für einzelne Abteilungen sowie menu und servesCuisine für Gastronomie beschreibt [Schema Markup für lokale Unternehmen](https://localdominate.org/blog/schema-markup-local-seo#localbusiness). Eine ausführliche Anleitung bietet [LocalBusiness Schema implementieren](https://localdominate.org/blog/localbusiness-schema-implementierung), mehrere Standorte behandelt [Mehrere Standorte bei Google verwalten](https://localdominate.org/blog/gbp-mehrere-standorte).

## Eine Quelle für alle Angaben: Markup, Seite und Profil

Google verlangt, dass Markup den Inhalt der Seite wiedergibt, und empfiehlt für seine KI-Funktionen, die Angaben im Unternehmensprofil aktuell zu halten. Ändert sich eine Angabe, ändern Sie deshalb Profil, sichtbaren Text und Markup am selben Tag.

*Wo Sie eine Änderung nachziehen*

| Änderung | Unternehmensprofil | Seite und Markup | Weitere Stellen |
| --- | --- | --- | --- |
| Neue Telefonnummer | Telefonnummer ändern | Text und telephone | Verzeichnisse, Bing Places, Apple Business Connect |
| Neue Öffnungszeiten | Reguläre Öffnungszeiten | Text und openingHoursSpecification | Aushang an der Tür, Verzeichnisse |
| Betriebsferien oder Feiertag | Spezielle Öffnungszeiten für bis zu sechs Tage am Stück, bei längerer Schließung „vorübergehend geschlossen“ | Hinweis auf der Seite, im Markup mit validFrom und validThrough | Ansage am Telefon, soziale Netzwerke |
| Umzug | Adresse ändern | Text, address und geo | Alle Verzeichnisse |

Wie Sie Abweichungen in Verzeichnissen finden, beschreibt [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo). Feiertage im Markup behandelt [Öffnungszeiten und Sondertage pflegen](https://localdominate.org/blog/gbp-oeffnungszeiten-sondertage#website-markup). Wie Suchmaschinen Ihren Betrieb als eindeutige Einheit erkennen, erklärt [Entity SEO für lokale Unternehmen](https://localdominate.org/blog/entity-seo-guide#strukturierte-daten).

> **Einschätzung:** Für KI-Antworten ist Übereinstimmung wichtiger als Vollständigkeit. Ein Assistent, der auf Ihrer Seite andere Öffnungszeiten findet als im Profil, muss sich für eine Angabe entscheiden. Ein kleiner Block mit richtigen Werten ist besser als ein großer mit veralteten.

## Testen und die Wirkung ehrlich messen

Technisch prüfen Sie Markup mit dem Test für Rich-Suchergebnisse und der URL-Prüfung der Search Console. Ob Markup Ihre Nennungen in KI-Antworten verändert, kann kein Werkzeug direkt zeigen.

1. **Test für Rich-Suchergebnisse.** Prüft JSON-LD, RDFa und Mikrodaten per URL oder Code. Beheben Sie zuerst die Fehler, danach die Warnungen.
2. **URL-Prüfung.** Zeigt, ob Google die veröffentlichte Seite crawlen kann und die strukturierten Daten gefunden hat.
3. **Statusberichte.** Die Berichte zu Rich-Suchergebnissen in der Search Console melden Fehler, die später durch Änderungen an Vorlagen entstehen. Manuelle Maßnahmen zeigt der gleichnamige Bericht.
4. **Bericht für generative KI-Funktionen.** Zeigt seit dem 31. August 2026 für alle Websites, wie oft Links zu Ihren Seiten in Übersicht mit KI und KI-Modus erschienen, nach Seite, Land, Gerät und Datum.
5. **Feste Stichprobe.** Dieselben fünf bis zehn Fragen mit Ortsangabe jeden Monat in Google, ChatGPT und Perplexity stellen und festhalten, welche Angaben über Ihren Betrieb erscheinen.

> **Einschätzung:** Ändern Sie Markup, Texte und Profil gleichzeitig, lässt sich eine Veränderung keiner einzelnen Maßnahme zuordnen. Laut Google hat außerdem kein Werkzeug eines Drittanbieters Zugang zu Googles internen Ranking- oder KI-Systemen. Messen Sie deshalb vor allem, ob Ihre Angaben richtig wiedergegeben werden. Eine Vorlage bietet [KI-Sichtbarkeit prüfen](https://localdominate.org/blog/ai-visibility-checklist#messen).

## Häufige Fragen

### Brauche ich Schema, damit ChatGPT meinen Betrieb findet?

OpenAI nennt dafür keine strukturierten Daten. Laut OpenAI kann jede öffentliche Website in der ChatGPT-Suche erscheinen, wichtig ist, dass OAI-SearchBot nicht gesperrt ist. Korrektes Markup bleibt für Google und Bing sinnvoll, ersetzt aber weder den Zugang für die Crawler noch klare Angaben im Text.

### Hilft FAQPage-Markup bei KI-Antworten?

Dafür gibt es keinen Beleg. Google schreibt, für seine KI-Funktionen sei kein besonderes Schema nötig, und zeigt FAQ-Snippets seit dem 7. Mai 2026 nicht mehr. Ein sichtbarer Bereich mit Fragen und Antworten kann Kunden helfen. Entscheidend ist der Text, nicht das Markup darum.

### Darf ich meine Google-Bewertungen als AggregateRating auszeichnen?

Für Sterne in der Suche bringt das nichts. Kontrolliert ein Unternehmen die Bewertungen über sich selbst, zeigt Google bei LocalBusiness und Organization keine Sterne, auch nicht bei eingebetteten Widgets von Google oder Facebook. Mehr dazu in [Review Schema](https://localdominate.org/blog/review-schema-implementierung#self-serving).

### Reicht ein Plugin, oder muss das Markup von Hand geschrieben werden?

Ein Plugin genügt, wenn die Ausgabe stimmt. Google liest auch JSON-LD, das per JavaScript eingefügt wird. Für andere KI-Systeme fehlt eine solche Aussage, deshalb sollte der Block im ausgelieferten HTML stehen. Prüfen Sie die Ausgabe im Test für Rich-Suchergebnisse und in der Quelltextansicht.

### Kann falsches Markup meiner Website schaden?

Verstößt Markup gegen Googles Richtlinien, kann eine manuelle Maßnahme folgen. Die Seite verliert dann laut Google die Eignung für Rich-Suchergebnisse, auf das Ranking in der Websuche wirkt sich das laut Google nicht aus. Ob eine solche Maßnahme besteht, zeigt der Bericht „Manuelle Maßnahmen“ in der Search Console.

## Quellen

- [Introduction to structured data markup in Google Search (Stand 10. Dezember 2025)](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), Google Search Central
- [General structured data guidelines (Stand 10. Juli 2026)](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), Google Search Central
- [Local business (LocalBusiness) structured data (Stand 8. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/local-business), Google Search Central
- [Organization (Organization) structured data (Stand 8. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/organization), Google Search Central
- [Event (Event) structured data (Stand 8. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/event), Google Search Central
- [Introduction to Product structured data (Stand 10. Dezember 2025)](https://developers.google.com/search/docs/appearance/structured-data/product), Google Search Central
- [Review snippet (Review, AggregateRating) structured data (Stand 8. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), Google Search Central
- [Structured data markup that Google Search supports (Stand 15. Juni 2026)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery), Google Search Central
- [Latest documentation updates (FAQ-Snippets ab 7. Mai 2026 eingestellt)](https://developers.google.com/search/updates), Google Search Central
- [AI features and your website (Stand 10. Dezember 2025)](https://developers.google.com/search/docs/appearance/ai-features), Google Search Central
- [Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), Google Search Central
- [Spezielle Öffnungszeiten festlegen](https://support.google.com/business/answer/6303076?hl=de), Google Unternehmensprofil-Hilfe
- [Test für Rich-Suchergebnisse](https://support.google.com/webmasters/answer/7445569?hl=de), Search Console-Hilfe
- [Generative AI performance report (Search)](https://support.google.com/webmasters/answer/16984139?hl=en), Search Console-Hilfe
- [Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers), Microsoft Advertising Blog
- [Microsoft Bing/Copilot use schema for its LLMs (20. März 2025)](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455), Search Engine Land
- [Bing Adds GEO to Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442), Search Engine Journal
- [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), OpenAI Help Center
- [Improved shopping results from ChatGPT search](https://help.openai.com/en/articles/11128490-improved-shopping-results-from-chatgpt-search), OpenAI Help Center
- [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md), Perplexity Docs
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518), Claude Help Center (Anthropic)
- [LocalBusiness (Version 30.1)](https://schema.org/LocalBusiness), schema.org
- [Hotel (Version 30.1)](https://meta.schema.org/Hotel), schema.org

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-11. Fehler gefunden? info@localdominate.org
