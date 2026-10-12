---
title: "LocalBusiness Schema implementieren: ein vollständiges Beispiel, Feld für Feld erklärt und getestet"
slug: localbusiness-schema-implementierung
url: https://localdominate.org/blog/localbusiness-schema-implementierung
canonical: https://localdominate.org/blog/localbusiness-schema-implementierung
markdown_url: https://localdominate.org/blog-md/localbusiness-schema-implementierung.md
language: de-DE
published: 2026-03-05
updated: 2026-10-12
reading_time_minutes: 12
category: "Technik"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "LocalBusiness Schema Schritt für Schritt einbauen: ein vollständiges JSON-LD-Beispiel, jedes Feld erklärt, Einbau in HTML oder CMS, Test und typische Fehler."
---

# LocalBusiness Schema implementieren: ein vollständiges Beispiel, Feld für Feld erklärt und getestet

Für Inhaber und Webverantwortliche lokaler Betriebe, die strukturierte Daten selbst einbauen oder den Einbau durch eine Agentur prüfen wollen. Sie bekommen ein vollständiges Beispiel für einen fiktiven Betrieb, die Erklärung jedes Feldes, die Wege in Ihre Website und eine Anleitung zum Testen.

## Die kurze Antwort

LocalBusiness Schema bauen Sie als JSON-LD-Block in ein Skript vom Typ application/ld+json ein, im Kopf oder Körper der Seite mit Ihren Unternehmensangaben. Pflicht sind laut Google nur Name und Adresse. Ergänzen Sie den genauesten Untertyp, Koordinaten, Öffnungszeiten, Telefon mit Vorwahlen und URL. Danach prüfen Sie den Code mit dem Test für Rich-Suchergebnisse und dem Schema Markup Validator.

## Das Wichtigste in Kürze

- Google empfiehlt JSON-LD. Der Block darf im Kopf oder im Körper der Seite stehen und darf auch per JavaScript oder Tag Manager eingefügt werden.
- Pflicht sind nur name und address. Empfohlen sind unter anderem geo mit mindestens fünf Nachkommastellen, openingHoursSpecification, telephone mit Landes- und Ortsvorwahl und url.
- Jede Angabe im Code muss auch sichtbar auf der Seite stehen und mit dem Google-Unternehmensprofil übereinstimmen.
- Bewertungen über das eigene Unternehmen gehören nicht ins Markup. Google empfiehlt aggregateRating und review nur für Websites, die andere Betriebe bewerten.
- Fehlerfreies Markup garantiert keine besondere Darstellung und keinen besseren Platz in Google Maps.

## Was dieser Artikel zeigt und was nicht

Dieser Artikel ist die praktische Anleitung: Code schreiben, einbauen, testen. Warum strukturierte Daten sinnvoll sind und welche Typen sich lohnen, steht im Artikel Schema Markup für Local SEO.

Strukturierte Daten vom Typ LocalBusiness sagen Google in einem festen Format, wie Ihr Betrieb heißt, wo er liegt und wann er geöffnet hat. Welche Typen Google auswertet, welche Darstellungen es nicht mehr gibt und warum eigene Bewertungen keine Sterne bringen, erklärt [Schema Markup für Local SEO](https://localdominate.org/blog/schema-markup-local-seo). Diese Grundlagen wiederholen wir hier nicht.

Hier geht es um das Handwerk: welche Daten Sie vorher bereitlegen, wie ein vollständiger Block aussieht, was jedes Feld bedeutet, wo der Code in Ihre Website kommt und wie Sie ihn prüfen. Als Beispiel dient ein **fiktiver** Elektrobetrieb in Rosenheim. Alle Werte sind erfunden und nur zur Veranschaulichung gedacht.

> **Erwartungen richtig setzen:** Google schreibt, dass strukturierte Daten eine Darstellung ermöglichen, aber nicht garantieren, auch wenn der Test keine Fehler meldet. Für den Platz im Kartenblock nennt Google Relevanz, Entfernung und Beliebtheit. Ein besseres lokales Ranking lässt sich laut Google nicht einfordern, auch nicht gegen Bezahlung.

## Vorbereitung: Stammdaten und Untertyp festlegen

Legen Sie vor dem ersten Zeichen Code eine Stammdatenliste an, mit Name, Adresse, Telefon, Öffnungszeiten und Koordinaten genau so, wie sie im Google-Unternehmensprofil stehen. Wählen Sie dann den genauesten passenden Untertyp von LocalBusiness.

Die meisten Fehler im Markup entstehen nicht im Code, sondern in den Daten: eine alte Telefonnummer, ein anderer Firmenname, Öffnungszeiten vom Vorjahr. Arbeiten Sie deshalb mit einer einzigen Stammdatenliste und übernehmen Sie die Werte von dort. Wie Sie eine solche Liste anlegen und Abweichungen finden, zeigt [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo#stammdaten).

- **Name:** der echte Name, wie auf Schild, Briefkopf und im Profil. Keine angehängten Suchbegriffe.
- **Adresse:** Straße mit Hausnummer, Postleitzahl, Ort, Land.
- **Telefon:** im internationalen Format mit Landes- und Ortsvorwahl, etwa +49 8031 …
- **Öffnungszeiten:** je Wochentag, so wie sie auf der Website und im Profil stehen.
- **Koordinaten:** Breiten- und Längengrad mit mindestens fünf Nachkommastellen, am besten vom Kartenpunkt Ihres Profils.
- **Links:** die URL der Seite mit Ihren Angaben, das Logo und die Profile in sozialen Netzwerken.

Für den Typ empfiehlt Google den genauesten möglichen Untertyp. Schema.org führt zum Beispiel Electrician, Plumber, Dentist, Restaurant oder HairSalon. Ein Elektrobetrieb ist laut schema.org ein Electrician, ein Untertyp von HomeAndConstructionBusiness und damit von LocalBusiness. Passt Ihr Betrieb zu zwei Typen, geben Sie beide als Liste an. Das Feld additionalType unterstützt Google laut eigener Dokumentation nicht.

## Ein vollständiges LocalBusiness Schema am Beispiel

Der Beispielblock enthält die Pflichtfelder name und address, die von Google empfohlenen Felder geo, openingHoursSpecification, telephone, url und priceRange sowie logo und sameAs aus der Dokumentation für Organization.

So sieht der Block für den fiktiven Betrieb „Elektro Huber“ in Rosenheim aus. Er steht auf der Seite www.example.com/kontakt, auf der dieselben Angaben auch für Besucher zu lesen sind:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://www.example.com/kontakt#betrieb",
  "name": "Elektro Huber",
  "url": "https://www.example.com/kontakt",
  "telephone": "+49 8031 000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Beispielstraße 12",
    "postalCode": "83022",
    "addressLocality": "Rosenheim",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.85637,
    "longitude": 12.12247
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:30",
      "closes": "17:00"
    }
  ],
  "priceRange": "€€",
  "logo": "https://www.example.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/beispiel",
    "https://www.instagram.com/beispiel"
  ]
}
</script>
```

> **Beispielwerte:** Name, Adresse, Telefonnummer, Koordinaten und Links sind erfunden. Übernehmen Sie nur die Struktur und setzen Sie Ihre eigenen Werte aus der Stammdatenliste ein.

Ein Feld für Bewertungen fehlt mit Absicht. Google empfiehlt aggregateRating und review bei LocalBusiness nur für Websites, die Bewertungen über **andere** Betriebe sammeln. Warum das so ist und was Sie stattdessen tun, steht in [Review Schema implementieren](https://localdominate.org/blog/review-schema-implementierung#self-serving).

## Jedes Feld erklärt

Jedes Feld hat eine klare Aufgabe: Typ und Name bestimmen, wer Sie sind, Adresse und Koordinaten, wo Sie sind, Öffnungszeiten und Telefon, wie man Sie erreicht. Die Tabelle zeigt Status, Beispielwert und worauf Sie achten.

*Die Felder des Beispiels laut Google Search Central (Beispielwerte, keine echten Daten)*

| Feld | Status bei Google | Beispielwert | Worauf Sie achten |
| --- | --- | --- | --- |
| @context | Immer nötig | https://schema.org | Sagt, aus welchem Vokabular die Begriffe stammen |
| @type | Immer nötig | Electrician | Genauester Untertyp; mehrere Typen als Liste in eckigen Klammern |
| @id | Optional | https://www.example.com/kontakt#betrieb | Eine feste Kennung, mit der Sie zusammengehörige Blöcke verknüpfen können |
| name | Pflicht | Elektro Huber | Exakt wie im Unternehmensprofil |
| address | Pflicht | PostalAddress mit Straße, PLZ, Ort, Land | Vollständig; Land als Kürzel wie DE, AT oder CH |
| geo | Empfohlen | 47.85637 und 12.12247 | Mindestens fünf Nachkommastellen, Punkt statt Komma |
| openingHoursSpecification | Empfohlen | Mo bis Fr 07:30 bis 17:00 | Wochentage auf Englisch, Uhrzeiten wie in Googles Beispielen |
| telephone | Empfohlen | +49 8031 000000 | Hauptnummer für Kunden, mit Landes- und Ortsvorwahl |
| url | Empfohlen | https://www.example.com/kontakt | Vollständige URL der Standortseite, die funktionieren muss |
| priceRange | Empfohlen | €€ | Unter 100 Zeichen, Symbole oder Spanne wie „20 bis 40 €“ |
| logo | Empfohlen für Organization | https://www.example.com/logo.png | Mindestens 112 × 112 Pixel, für Google abrufbar |
| sameAs | Empfohlen für Organization | Links zu Ihren Profilen | Nur Profile, die wirklich Ihnen gehören |

LocalBusiness ist ein Untertyp von Organization. Google empfiehlt deshalb, auch die Felder aus der Dokumentation für Organization zu nutzen, etwa logo, sameAs, email oder die Umsatzsteuer-Identifikationsnummer vatID, wenn vorhanden. Mehr zu sameAs und zur eindeutigen Zuordnung Ihres Betriebs finden Sie in [Entity SEO](https://localdominate.org/blog/entity-seo-guide#strukturierte-daten).

Für Gastronomie kommen menu mit der vollständigen URL der Speisekarte und servesCuisine für die Art der Küche hinzu. Für Abteilungen mit eigenen Zeiten oder Telefonnummern gibt es department. Google empfiehlt dort den Namen im Muster „Betriebsname Abteilungsname“.

## Öffnungszeiten, mehrere Standorte und Einzugsgebiet

Für besondere Öffnungszeiten beschreibt Google feste Muster, etwa opens und closes beide 00:00 für ganztägig geschlossen. Mehrere Standorte bekommen je eine eigene Seite mit eigenem Block. Für reine Servicebetriebe ohne sichtbare Adresse gibt es keine eigene Regel von Google.

*Öffnungszeiten im Markup laut Google Search Central*

| Fall | So schreiben Sie es |
| --- | --- |
| Zwei Zeitblöcke am Tag, etwa mit Mittagspause | Zwei Einträge für dieselben Tage, je mit eigenem opens und closes |
| Über Mitternacht | Ein Eintrag, bei dem closes früher liegt als opens, etwa 18:00 bis 03:00 |
| 24 Stunden geöffnet | opens 00:00 und closes 23:59 |
| Ganztägig geschlossen | opens und closes beide 00:00 |
| Saisonale Schließung | opens und closes 00:00 mit validFrom und validThrough im Format JJJJ-MM-TT |

Die Zeile mit der Mittagspause ist keine eigene Vorgabe von Google, sondern folgt daraus, dass openingHoursSpecification laut Google eine Liste mehrerer Einträge sein darf. Feiertage und kurzfristige Änderungen pflegen Sie vor allem im Profil als Sonderzeiten, denn Ihr Eintrag bei Google stützt sich auf das Unternehmensprofil. Wie das geht, steht in [Öffnungszeiten und Sonderzeiten](https://localdominate.org/blog/gbp-oeffnungszeiten-sondertage#spezielle-zeiten).

**Mehrere Standorte:** Jede Filiale bekommt eine eigene Seite mit eigenem Block, eigener Adresse, eigener Telefonnummer und eigenen Öffnungszeiten. Ein gemeinsamer Block mit allen Adressen auf der Startseite ist nach unserer Einschätzung die schwächere Lösung, denn Google empfiehlt, strukturierte Daten auf die Seite zu setzen, die sie beschreiben. Wie Standortseiten aufgebaut sind, zeigt [Mehrere Standorte bei Google verwalten](https://localdominate.org/blog/gbp-mehrere-standorte#standortseiten).

> **Einschätzung: Betriebe ohne Ladenlokal:** Google verlangt bei LocalBusiness eine Adresse, und Markup darf nur zeigen, was auf der Seite sichtbar ist. Wenn Sie als Handwerker im Profil keine Adresse anzeigen, aber auf der Website eine Anschrift nennen, können Sie diese auszeichnen. Nennen Sie keine Anschrift auf der Seite, lassen Sie den LocalBusiness-Block weg und nutzen Sie Organization, für das Google keine Pflichtfelder nennt. Das Feld areaServed kennt schema.org, in Googles Dokumentation zu LocalBusiness kommt es nicht vor. Mehr zum Einzugsgebiet in [Local SEO für Handwerker](https://localdominate.org/blog/local-seo-handwerker#einzugsgebiet).

## Wo der Code hingehört: HTML, Website-Baukasten, Plugin

Der Block steht als Skript vom Typ application/ld+json im Kopf oder im Körper der Seite. Sie können ihn direkt ins HTML schreiben, über ein Feld für eigenen Code im Website-System einfügen, von einem Plugin erzeugen lassen oder per Tag Manager ausspielen.

1. **Seite wählen.** Die Seite, die Ihre Unternehmensangaben auch für Menschen zeigt, meist Kontakt oder Standort. Google erlaubt LocalBusiness auf jeder Seite, hält eine Seite mit Angaben zum Betrieb aber für sinnvoller. Organization empfiehlt Google auf der Startseite oder einer einzelnen Seite wie „Über uns“.
2. **Eigenes HTML.** Bei selbst gepflegten Seiten fügen Sie den Block vor dem schließenden head-Tag oder an einer beliebigen Stelle im body ein.
3. **Website-Baukasten oder CMS.** Viele Systeme haben ein Feld für eigenen Code im Kopfbereich, je Seite oder für die ganze Website. Nutzen Sie die Einstellung je Seite, sonst erscheint der Block auf allen Seiten.
4. **Plugin.** SEO-Plugins erzeugen LocalBusiness oft aus einem Formular. Prüfen Sie aber, was das Plugin ausgibt, und schalten Sie Bewertungs-Markup für das eigene Unternehmen ab.
5. **Tag Manager.** Google beschreibt den Weg über ein benutzerdefiniertes HTML-Tag im Google Tag Manager. Das per JavaScript eingefügte Markup kann Google lesen. Testen Sie dann mit der URL der Seite, nicht mit dem kopierten Code.

Achten Sie darauf, dass nur **ein** LocalBusiness-Block je Standort entsteht. Wer Plugin, Theme und Tag Manager gleichzeitig nutzt, hat schnell zwei Blöcke mit unterschiedlichen Daten. Das sehen Sie im Test sofort, weil dort zwei Einträge für Lokales Unternehmen auftauchen. Die übrigen technischen Grundlagen der Website stehen in [Technisches Local SEO](https://localdominate.org/blog/technisches-local-seo-guide).

## Testen mit dem Test für Rich-Suchergebnisse und dem Schema Markup Validator

Der Test für Rich-Suchergebnisse zeigt, ob Google den Block als Lokales Unternehmen erkennt und welche Fehler es gibt. Der Schema Markup Validator prüft gegen das gesamte schema.org-Vokabular. Nach der Veröffentlichung kontrollieren Sie die Seite mit dem URL-Prüftool der Search Console.

1. **Vor der Veröffentlichung: Code testen.** Im Test für Rich-Suchergebnisse (search.google.com/test/rich-results) können Sie ein Code-Snippet einfügen. Lokales Unternehmen gehört zu den Typen, die der Test erkennt. Kritische Fehler müssen Sie beheben. Hinweise auf fehlende empfohlene Felder sind keine Fehler. Ergänzen Sie diese Felder, wenn Sie die Angaben haben.
2. **Gegen schema.org prüfen.** Der Schema Markup Validator (validator.schema.org) prüft alle schema.org-Angaben ohne Google-spezifische Hinweise. So sehen Sie auch Tippfehler in Feldnamen und Angaben zu Typen, die Google nicht auswertet.
3. **Nach der Veröffentlichung: URL testen.** Geben Sie die vollständige URL in den Test für Rich-Suchergebnisse ein. Standard ist laut Google der User-Agent für Smartphones.
4. **URL-Prüftool.** In der Search Console sehen Sie, ob Google die Seite abrufen kann. Sie darf nicht per robots.txt, noindex oder Anmeldung gesperrt sein. Dort können Sie auch ein erneutes Crawlen anfordern. Laut Google kann das Crawling einige Tage oder mehrere Wochen dauern.
5. **Search Console beobachten.** Prüfen Sie die Berichte zu strukturierten Daten und zu manuellen Maßnahmen, vor allem nach Änderungen an Theme oder Plugin.

> **Grün heißt nicht sichtbar:** Auch wenn beide Werkzeuge keine Fehler melden, entscheidet Google je Suche, ob es eine besondere Darstellung zeigt. Der Test prüft nur, ob die Daten technisch in Frage kommen.

## Häufige Fehler beim Einbau

Typische Fehler sind Syntaxfehler wie fehlende Kommas, zu allgemeine Typen, Daten, die nicht zur Seite oder zum Profil passen, doppelte Blöcke und Bewertungs-Markup für das eigene Unternehmen.

*Fehler, Ursache und Korrektur*

| Fehler | Woran Sie ihn erkennen | Korrektur |
| --- | --- | --- |
| Komma oder Klammer fehlt | Der Test meldet einen Parsing-Fehler, kein Element erkannt | Code in einem Editor mit JSON-Prüfung kontrollieren, Komma nach jedem Feld außer dem letzten |
| Typografische Anführungszeichen | Nach dem Kopieren aus Word oder einer Präsentation lässt sich der Block nicht lesen | Nur gerade Anführungszeichen verwenden |
| Nur „LocalBusiness“ als Typ | Kein Fehler im Test, aber ungenau | Genauesten Untertyp wählen |
| Komma statt Punkt in Koordinaten | Ungültige Zahl oder falscher Ort | 47.85637 statt 47,85637 |
| Telefon ohne Landesvorwahl | Nummer wie 08031 … | +49 8031 … im internationalen Format |
| Wochentage auf Deutsch | „Montag“ wird nicht erkannt | Monday bis Sunday verwenden |
| Zwei Blöcke je Standort | Zwei Einträge Lokales Unternehmen im Test | Plugin, Theme und Tag Manager abstimmen, nur eine Quelle |
| aggregateRating mit eigenen Bewertungen | Feld im Block vorhanden | Entfernen; Bewertungen nur für Menschen zeigen |
| Angaben im Code, nicht auf der Seite | Zeiten oder Telefon nur im Markup | Alles, was im Code steht, auch sichtbar auf die Seite |

Die Zeile zu den deutschen Wochentagen ist eine Ableitung: Google und schema.org verwenden in allen Beispielen die englischen Namen. Weitere Fehler auf Profil- und Websiteseite finden Sie in [Local SEO Fehler](https://localdominate.org/blog/local-seo-fehler).

## Nach dem Einbau: pflegen statt vergessen

Markup veraltet still. Ändern Sie bei jeder Änderung von Adresse, Telefon oder Öffnungszeiten Profil, sichtbare Seite und Code am selben Tag und testen Sie die Seite danach erneut.

- **Bei Umzug, neuer Nummer, neuen Zeiten:** Profil, Seite und Block gemeinsam ändern, dann URL im Test prüfen.
- **Nach Updates von Theme oder Plugin:** kurz im Test nachsehen, ob der Block noch da ist und nicht doppelt.
- **Einmal im Quartal:** Stammdatenliste mit Profil und Markup vergleichen. Das passt gut in die [monatliche Local-SEO-Routine](https://localdominate.org/blog/local-seo-monthly-checklist).

Unsere Einschätzung: Für einen Betrieb mit einem Standort ist der Einbau mit vorbereiteter Stammdatenliste in ein bis zwei Stunden erledigt. Die meiste Zeit kostet nicht der Code, sondern der Abgleich der Daten. Wie strukturierte Daten mit der Sichtbarkeit in KI-Antworten zusammenhängen, ordnet [Schema-Strategie für KI-Suche](https://localdominate.org/blog/schema-strategie-ai-retrieval) ein.

## Häufige Fragen

### Wo genau kommt das LocalBusiness Schema hin?

In ein Skript vom Typ application/ld+json im Kopf oder Körper der Seite. Am besten auf die Seite, die Ihre Unternehmensangaben auch für Besucher zeigt, bei mehreren Standorten auf jede Standortseite. Organization empfiehlt Google auf der Startseite oder einer Seite wie „Über uns“.

### Brauche ich Programmierkenntnisse?

Nein. Sie können das Beispiel anpassen und über ein Feld für eigenen Code einfügen oder ein Plugin nutzen. Wichtig ist, danach mit dem Test für Rich-Suchergebnisse zu prüfen, was tatsächlich auf der Seite ausgegeben wird.

### Liest Google Markup, das per JavaScript oder Tag Manager eingefügt wird?

Ja, laut Google kann JSON-LD auch dynamisch eingefügt werden, Google beschreibt den Weg über den Tag Manager selbst. Testen Sie in diesem Fall mit der URL der Seite und nicht mit dem kopierten Code.

### Soll ich meine Google-Bewertungen als aggregateRating auszeichnen?

Nein. Google empfiehlt aggregateRating und review bei LocalBusiness nur für Websites, die andere Betriebe bewerten. Für Bewertungen über das eigene Unternehmen zeigt Google keine Sterne. Zeigen Sie ausgewählte Bewertungen für Besucher und verlinken Sie auf Ihr Profil.

### Wie lange dauert es, bis Google das Markup verarbeitet?

Google muss die Seite erneut crawlen. Über das URL-Prüftool können Sie das anfordern. Laut Google kann das einige Tage oder mehrere Wochen dauern. Ob eine besondere Darstellung erscheint, entscheidet Google je Suche.

## Quellen

- [Strukturierte Daten für lokale Unternehmen (LocalBusiness)](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de), Google Search Central
- [Einführung in strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de), Google Search Central
- [Allgemeine Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de), Google Search Central
- [Strukturierte Daten für Organisationen (Organization)](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=de), Google Search Central
- [Strukturierte Daten mit JavaScript generieren](https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript?hl=de), Google Search Central
- [Testtool für Schema-Markup](https://developers.google.com/search/docs/appearance/structured-data?hl=de), Google Search Central
- [Test für Rich-Suchergebnisse](https://support.google.com/webmasters/answer/7445569?hl=de), Search Console-Hilfe
- [Electrician (Typhierarchie und Eigenschaften)](https://schema.org/Electrician), schema.org
- [Ranking in lokalen Suchergebnissen auf Google verbessern](https://support.google.com/business/answer/7091?hl=de), Google Unternehmensprofil-Hilfe
- [Google bitten, Ihre URLs noch einmal zu crawlen](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=de), Google Search Central

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-12. Fehler gefunden? info@localdominate.org
