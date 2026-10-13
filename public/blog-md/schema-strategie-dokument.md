---
title: "Schema-Strategie als Dokument: Welche Seite welche strukturierten Daten bekommt und wer sie pflegt"
slug: schema-strategie-dokument
url: https://localdominate.org/blog/schema-strategie-dokument
canonical: https://localdominate.org/blog/schema-strategie-dokument
markdown_url: https://localdominate.org/blog-md/schema-strategie-dokument.md
language: de-DE
published: 2026-03-08
updated: 2026-10-13
reading_time_minutes: 12
category: "Technik"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Ein schriftlicher Plan für strukturierte Daten: welcher Seitentyp welches Markup bekommt, wer es pflegt und wie Sie es mit Googles Werkzeugen regelmäßig prüfen."
---

# Schema-Strategie als Dokument: Welche Seite welche strukturierten Daten bekommt und wer sie pflegt

Für Inhaber lokaler Betriebe und die Menschen, die deren Website betreuen. Sie bekommen eine Vorlage, mit der Sie auf einer Seite festhalten, welcher Seitentyp welche strukturierten Daten trägt, woher die Angaben stammen, wer sie ändert und wann zuletzt geprüft wurde. Wie das Markup im Einzelnen aussieht, erklären unsere Anleitungen, auf die wir an den passenden Stellen verweisen.

## Die kurze Antwort

Ein Schema-Plan ist eine Tabelle, die für jeden Seitentyp Ihrer Website festlegt, welche strukturierten Daten dort stehen, welche Felder Pflicht sind, aus welcher Quelle die Angaben kommen, wer sie pflegt und wann zuletzt geprüft wurde. Er verhindert doppeltes, veraltetes oder unzulässiges Markup. Für einen lokalen Betrieb reichen meist Organization, ein LocalBusiness-Untertyp, BreadcrumbList und Article.

## Das Wichtigste in Kürze

- Halten Sie in einer Tabelle fest, welcher Seitentyp welchen Typ trägt, aus welcher Quelle die Daten stammen, wer sie pflegt und wann zuletzt geprüft wurde.
- Für lokale Betriebe reichen meist ein LocalBusiness-Untertyp auf der Kontakt- oder Standortseite, Organization auf der Startseite, BreadcrumbList auf Unterseiten und Article oder BlogPosting im Blog.
- FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr, Anleitungs-Snippets (HowTo) seit 2023 nicht mehr. Sterne für Bewertungen über das eigene Unternehmen gibt es nicht.
- Strukturierte Daten müssen den sichtbaren Inhalt der Seite wiedergeben. Ändern sich Öffnungszeiten oder Telefonnummer, ändern Sie Seite, Markup und Unternehmensprofil gemeinsam.
- Prüfen Sie mit dem Test für Rich-Suchergebnisse, dem Schema Markup Validator und den Berichten der Search Console, nach jeder Änderung und in einem festen Rhythmus.

## Warum strukturierte Daten einen schriftlichen Plan brauchen

Markup entsteht auf vielen Websites nebenbei: durch das Theme, ein Plugin, eine Agentur und einen Mitarbeiter, der etwas nachträgt. Ohne Plan weiß niemand, was auf welcher Seite steht, und veraltete oder doppelte Angaben fallen erst auf, wenn ein Bericht in der Search Console Fehler meldet.

Strukturierte Daten helfen Google laut eigener Dokumentation, die Inhalte einer Seite zu verstehen. Sie sind außerdem Voraussetzung für bestimmte Darstellungen in der Suche. Eine Garantie gibt es nicht: Google schreibt ausdrücklich, dass korrekt ausgezeichnete Seiten trotzdem ohne Rich-Suchergebnis erscheinen können.

Das Problem in der Praxis ist selten fehlendes Markup, sondern ungepflegtes. Das kann etwa so aussehen: zwei LocalBusiness-Blöcke mit unterschiedlichen Telefonnummern, weil Theme und Plugin je einen ausgeben, Öffnungszeiten im Code, die seit der letzten Änderung im Unternehmensprofil nicht mehr stimmen, und Bewertungs-Markup, das Google für das eigene Unternehmen gar nicht auswertet.

> **Abgrenzung:** Dieser Artikel behandelt die Planung und die Zuständigkeiten. Welche Typen sich überhaupt lohnen, steht in [Schema Markup für Local SEO](https://localdominate.org/blog/schema-markup-local-seo), den vollständigen Code mit Erklärung jedes Felds zeigt [LocalBusiness Schema implementieren](https://localdominate.org/blog/localbusiness-schema-implementierung).

## Bestandsaufnahme: Seitentypen und vorhandenes Markup

Listen Sie zuerst alle Seitentypen Ihrer Website auf, nicht alle Einzelseiten. Prüfen Sie dann je Seitentyp eine typische Seite im Test für Rich-Suchergebnisse und notieren Sie, welche Typen gefunden werden und von welcher Stelle sie stammen.

Eine lokale Website hat meist sechs bis acht Seitentypen. Alle Seiten eines Typs entstehen meist aus derselben Vorlage und tragen dasselbe Markup.

1. **Seitentypen auflisten.** Startseite, Kontakt oder Standort, Leistungsseiten, Blogartikel, Blogübersicht, Über uns, Impressum und Datenschutz, bei Bedarf Onlineshop oder Veranstaltungen.
2. **Je Typ eine Seite testen.** Die Adresse im Test für Rich-Suchergebnisse eingeben. Das Werkzeug zeigt, welche von Google unterstützten Typen es erkennt.
3. **Gegenprüfen.** Dieselbe Adresse im Schema Markup Validator prüfen. Er zeigt auch Typen, die Google nicht für Darstellungen nutzt, etwa ein vom Theme ausgegebenes WebPage-Markup.
4. **Herkunft klären.** Für jeden gefundenen Block notieren, ob er vom Theme, von einem Plugin, vom Website-Baukasten oder aus eigenem Code stammt. Doppelte Blöcke entstehen fast immer an dieser Stelle.

Wenn mehrere Standorte im Spiel sind, gehört jede Standortseite als eigener Seitentyp in die Liste. Wie solche Seiten aufgebaut sind, beschreibt [Mehrere Standorte bei Google verwalten](https://localdominate.org/blog/gbp-mehrere-standorte#standortseiten).

## Zuordnung: welcher Seitentyp welche strukturierten Daten bekommt

Die Kontakt- oder Standortseite trägt den genauesten LocalBusiness-Untertyp, die Startseite Organization, Unterseiten einen Navigationspfad (BreadcrumbList) und Blogartikel Article oder BlogPosting. Product nur, wenn Sie Produkte mit Preis auf der Seite anbieten.

*Zuordnung für eine typische lokale Website (Stand Oktober 2026)*

| Seitentyp | Strukturierte Daten | Hinweis aus Googles Dokumentation |
| --- | --- | --- |
| Startseite | Organization; bei nur einem Standort alternativ der LocalBusiness-Untertyp | Google empfiehlt die Startseite oder eine einzelne Seite über das Unternehmen. Auf jeder Seite muss es nicht stehen |
| Kontakt- oder Standortseite | LocalBusiness mit dem genauesten Untertyp, etwa Bakery, Dentist oder Plumber | Laut Google auf jeder Seite erlaubt, sinnvoll ist eine Seite mit Angaben zum Unternehmen. Je Standort ein eigener Block |
| Alle Unterseiten | BreadcrumbList | Navigationspfade zeigt Google laut Dokumentation auf Computern, nicht in der mobilen Suche |
| Blogartikel | Article oder BlogPosting | Keine Pflichtfelder, empfohlen sind unter anderem Autor, Titel, Bild und beide Datumsangaben |
| Leistungsseiten | Meist kein eigenes Markup nötig | Für Service gibt es in Googles Übersicht der unterstützten Funktionen keinen Eintrag |
| Onlineshop | Product mit Angebot | Seiten mit Kaufmöglichkeit fallen unter Händlereinträge, Seiten ohne Kaufmöglichkeit unter Produkt-Snippets |
| Impressum, Datenschutz, Blogübersicht | Nur BreadcrumbList | Kein Typ in Googles Übersicht passt zu diesen Seiten |

Google verlangt in den allgemeinen Richtlinien, die **spezifischsten geeigneten Typen** zu verwenden und strukturierte Daten auf der Seite zu platzieren, die sie beschreiben, sofern die Dokumentation einer Funktion nichts anderes sagt. Für LocalBusiness erlaubt Google ausdrücklich jede Seite. Ein LocalBusiness-Block auf jedem Blogartikel, wie ihn manche Themes ausgeben, beschreibt nicht den Inhalt des Artikels. Unsere Einschätzung: Er gehört auf die Kontakt- oder Standortseite und nicht in jede Vorlage.

> **Einschätzung zu Service:** Service-Markup ist im schema.org-Vokabular vorhanden und kann von anderen Diensten ausgewertet werden. Eine Darstellung in der Google-Suche gibt es dafür nicht. Setzen Sie es nur ein, wenn jemand es pflegt, und nur für Leistungen, die auf der Seite beschrieben sind. Was die KI-Suche aus strukturierten Daten macht und was nicht, steht in [Schema-Strategie für die KI-Suche](https://localdominate.org/blog/schema-strategie-ai-retrieval).

## Was nicht mehr in den Plan gehört

Planen Sie kein neues FAQPage- oder HowTo-Markup ein, weil Google beide Darstellungen eingestellt hat. Bewertungs-Markup für das eigene Unternehmen bringt keine Sterne, gefälschte Rezensionen und solche mit nicht offengelegter Gegenleistung sind unzulässig.

*Typen, die ein lokaler Betrieb nicht mehr einplanen sollte*

| Typ | Stand laut Google | Im Plan |
| --- | --- | --- |
| FAQPage | Wird seit dem 7. Mai 2026 nicht mehr in der Google-Suche angezeigt, die Dokumentation wurde im Juni 2026 entfernt | Nicht neu einbauen. Den sichtbaren Fragenbereich behalten, wenn er Besuchern hilft |
| HowTo | Seit September 2023 nicht mehr in den Suchergebnissen, Dokumentation entfernt | Nicht einbauen |
| Review oder AggregateRating für das eigene Unternehmen | Keine Sternebewertung, wenn das Unternehmen die Rezensionen über sich selbst kontrolliert | Weglassen |

Bei Bewertungen nennt Google zwei Grenzen. Erstens gibt es für Seiten mit LocalBusiness- oder Organization-Markup keine Sterne, wenn das Unternehmen die Rezensionen über sich selbst kontrolliert. Zweitens dürfen gefälschte Rezensionen und solche, für die eine nicht offengelegte Gegenleistung angeboten wurde, nicht ausgezeichnet werden. Diese Regel hat Google im Juli 2026 in die Dokumentation aufgenommen. Wann Bewertungs-Markup trotzdem erlaubt ist, etwa für Produkte im eigenen Shop, erklärt [Review Schema richtig einsetzen](https://localdominate.org/blog/review-schema-implementierung).

Die Hintergründe zu FAQ und HowTo stehen im Abschnitt [eingestellte Darstellungen](https://localdominate.org/blog/schema-markup-local-seo#eingestellt). Im Plan genügt der Vermerk „Bestand, nicht ausbauen“.

## Die Vorlage: eine Zeile je Seitentyp

Die Vorlage hat sechs Spalten: Seite, Typ, Pflichtfelder, Quelle der Daten, gepflegt von und letzte Prüfung. Jede Zeile beschreibt einen Seitentyp, nicht eine Einzelseite.

Das folgende Beispiel ist für eine erfundene Bäckerei mit einem Laden in Linz ausgefüllt. Die Pflichtfelder sind die, die Google für den jeweiligen Typ nennt. Wo Google keine Pflichtfelder nennt, stehen die empfohlenen Felder, die Sie sinnvoll befüllen können.

*Schema-Plan, Beispiel (Namen und Zuständigkeiten erfunden)*

| Seite | Typ | Pflichtfelder | Quelle der Daten | Gepflegt von | Letzte Prüfung |
| --- | --- | --- | --- | --- | --- |
| Startseite | Organization | Keine laut Google; empfohlen u. a. name, url, logo, telephone, sameAs | Stammdatenblatt | Inhaberin | [Datum] |
| Kontakt | Bakery (LocalBusiness) | name, address | Stammdatenblatt, Öffnungszeiten aus dem Unternehmensprofil | Inhaberin | [Datum] |
| Alle Unterseiten | BreadcrumbList | itemListElement; je Eintrag position, name, item | Menüstruktur der Website | Webagentur | [Datum] |
| Blogartikel | BlogPosting | Keine laut Google; empfohlen headline, author, datePublished, dateModified, image | Redaktionssystem | Webagentur | [Datum] |
| Bestellseite für Torten | Kein Markup | Entfällt | Entfällt | Entfällt | [Datum] |

- **Quelle der Daten** ist die wichtigste Spalte. Sie sagt, wo eine Angabe zuerst geändert wird, damit Seite, Markup und Profil gleich bleiben.
- **Gepflegt von** nennt eine Person, bei Agenturen die Ansprechperson.
- **Letzte Prüfung** enthält das Datum und das Werkzeug, mit dem geprüft wurde.
- **Eine Zeile „Kein Markup“** ist erlaubt und nützlich. Sie zeigt, dass die Entscheidung bewusst getroffen wurde.

Wer schon einen Monatsbericht führt, kann die Spalte „Letzte Prüfung“ dort mitführen, siehe [Vorlage für das Local-SEO-Reporting](https://localdominate.org/blog/local-seo-reporting-template).

## Eine Quelle für die Stammdaten

Name, Adresse, Telefonnummer und Öffnungszeiten stehen in einem Stammdatenblatt, und alle anderen Stellen übernehmen sie von dort. So stimmen Seite, Markup und Google-Unternehmensprofil überein, wie Google es für strukturierte Daten verlangt.

Google verlangt, dass strukturierte Daten eine **realitätsgetreue Darstellung der Seiteninhalte** sind, und verbietet Markup für Inhalte, die Leser auf der Seite nicht sehen. Steht im Code eine andere Telefonnummer als im Seitentext, verletzt das diese Regel. Weicht beides vom Unternehmensprofil ab, entstehen widersprüchliche Angaben über Ihren Betrieb.

1. **Stammdatenblatt anlegen.** Offizieller Name, Adresse, Telefonnummer im internationalen Format, Öffnungszeiten, Website, Logo-Adresse, Profile in sozialen Netzwerken. Ein Dokument, ein Ort.
2. **Reihenfolge festlegen.** Änderungen zuerst im Stammdatenblatt, dann am selben Tag im Unternehmensprofil, im Seitentext und im Markup.
3. **Markup aus Daten erzeugen.** Wenn Ihr Website-System das kann, lesen Seite und Markup dieselben Felder. Dann ist eine abweichende Nummer im Code technisch ausgeschlossen.
4. **Verzeichnisse nachziehen.** Branchenbücher und Kammerverzeichnisse übernehmen die Angaben aus demselben Blatt.

Wie Sie Abweichungen in Verzeichnissen finden und korrigieren, steht in [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo#stammdaten). Wie Google aus diesen Angaben ein Bild Ihres Unternehmens zusammensetzt, erklärt [Entity SEO](https://localdominate.org/blog/entity-seo-guide#strukturierte-daten).

## Ein kompaktes Beispiel für die Kontaktseite

Auf der Kontaktseite der Beispielbäckerei stehen zwei Typen in einem JSON-LD-Block: der LocalBusiness-Untertyp Bakery und der Navigationspfad. Jede Angabe im Code steht auch sichtbar auf der Seite.

Google empfiehlt JSON-LD, weil es sich am einfachsten umsetzen und pflegen lässt. Mehrere Typen auf einer Seite sind laut Google zulässig.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Bakery",
      "@id": "https://www.beispiel-baeckerei.at/kontakt#betrieb",
      "name": "Bäckerei Beispiel",
      "url": "https://www.beispiel-baeckerei.at/kontakt",
      "telephone": "+43 732 000000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 1",
        "postalCode": "4020",
        "addressLocality": "Linz",
        "addressCountry": "AT"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:30",
        "closes": "18:00"
      }]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.beispiel-baeckerei.at/" },
        { "@type": "ListItem", "position": 2, "name": "Kontakt" }
      ]
    }
  ]
}
```

Beim letzten Eintrag des Navigationspfads darf die Adresse laut Google fehlen. Die Kennung unter „@id“ ist eine feste Adresse für den Betrieb. Unsere Einschätzung: Sie erleichtert die Pflege, weil andere Blöcke, etwa der Herausgeber eines Blogartikels, auf diese Kennung verweisen können, statt Name und Adresse zu wiederholen. Die einzelnen Felder erklärt die oben verlinkte Anleitung zum LocalBusiness-Markup.

## Testen mit drei Werkzeugen

Vor der Veröffentlichung prüfen Sie mit dem Test für Rich-Suchergebnisse und dem Schema Markup Validator, danach mit den Berichten der Search Console. Jedes Werkzeug beantwortet eine andere Frage.

*Welches Werkzeug welche Frage beantwortet*

| Werkzeug | Frage | Wann im Plan |
| --- | --- | --- |
| Test für Rich-Suchergebnisse | Welche von Google unterstützten Darstellungen kann die Seite erhalten, und welche Probleme meldet das Werkzeug? | Vor jeder Veröffentlichung einer Vorlage, mit Adresse oder Code-Ausschnitt |
| Schema Markup Validator (validator.schema.org) | Ist das Markup nach dem gesamten schema.org-Vokabular gültig, auch für Typen ohne Google-Darstellung? | Bei der Bestandsaufnahme und für Typen wie WebPage oder Service |
| Search Console, Berichte zu Rich-Suchergebnissen | Welche Elemente sind gültig oder ungültig, und seit wann tritt ein Problem auf? | Monatlich und nach jeder größeren Änderung |
| Search Console, URL-Prüfung | Kann Google die Seite live abrufen, und welche strukturierten Daten erkennt es darauf? | Nach dem Einbau und bei Auffälligkeiten |
| Search Console, Bericht „Manuelle Maßnahmen“ | Hat Google eine Maßnahme wegen unzulässigen Markups verhängt? | Monatlich |

Der Test für Rich-Suchergebnisse prüft standardmäßig mit dem Smartphone-Crawler und unterstützt JSON-LD, RDFa und Mikrodaten. Die Berichte der Search Console zählen Elemente, nicht Seiten, und zeigen nur Beispiele. Einen Bericht gibt es nur für Typen, die Google unterstützt und auf Ihrer Website gefunden hat. Findet die Search Console für einen Typ keinen Bericht, prüfen Sie die Seiten dieses Typs selbst mit dem Test für Rich-Suchergebnisse und der URL-Prüfung.

> **Einschätzung:** Ein Problem in einem Bericht betrifft fast immer eine Vorlage, nicht eine einzelne Seite. Tragen Sie es deshalb in die Zeile des Seitentyps ein und beheben Sie es dort. Den technischen Rahmen dazu beschreibt [Technisches Local SEO](https://localdominate.org/blog/technisches-local-seo-guide#strukturierte-daten).

## Pflege: Auslöser, Rhythmus und Protokoll

Prüfen Sie das Markup bei festen Auslösern, etwa geänderten Öffnungszeiten, einem neuen Theme oder einem Plugin-Update, und zusätzlich in einem festen Rhythmus. Jede Änderung kommt mit Datum und Namen in ein kurzes Protokoll.

*Auslöser für eine Prüfung*

| Auslöser | Betroffene Zeilen | Was zu tun ist |
| --- | --- | --- |
| Neue Öffnungszeiten, Telefonnummer oder Adresse | Kontakt, Startseite | Stammdatenblatt, Profil, Seitentext und Markup am selben Tag ändern, danach testen |
| Neues Theme, neuer Baukasten oder Relaunch | Alle | Bestandsaufnahme wiederholen, doppelte Blöcke entfernen |
| Plugin-Update oder neues SEO-Plugin | Alle | Je Seitentyp eine Seite im Test für Rich-Suchergebnisse prüfen |
| Neuer Standort | Neue Zeile | Eigene Standortseite mit eigenem LocalBusiness-Block |
| Änderung in Googles Dokumentation | Je nach Typ | Plan anpassen, etwa wie beim Ende der FAQ-Snippets |

> **Unsere Einschätzung zum Rhythmus:** Für einen Betrieb mit einem Standort reicht aus unserer Sicht eine vollständige Prüfung je Quartal, dazu ein monatlicher Blick in die Search Console. Google schreibt keinen Rhythmus vor.

- Das Protokoll hat drei Spalten: Datum, was geändert wurde, wer es geändert hat.
- Änderungen in Googles Dokumentation verfolgen Sie auf der Seite „Latest documentation updates“ von Google Search Central.
- Verstößt Markup gegen die Richtlinien, kann Google eine manuelle Maßnahme verhängen. Ob das der Fall ist, zeigt der Bericht „Manuelle Maßnahmen“ in der Search Console.

## Häufige Fragen

### Brauche ich als kleiner Betrieb wirklich ein eigenes Dokument für strukturierte Daten?

Eine Tabelle mit fünf bis acht Zeilen reicht. Sie spart Zeit, sobald eine Agentur wechselt, ein Plugin aktualisiert wird oder sich Öffnungszeiten ändern, weil dann klar ist, wo die Angaben stehen und wer sie ändert.

### Soll LocalBusiness-Markup auf jeder Seite stehen?

Das ist nicht nötig. Google erlaubt LocalBusiness-Markup auf jeder Seite, hält aber eine Seite mit Angaben zu Ihrem Unternehmen für sinnvoller. Bei mehreren Standorten bekommt jeder Standort einen eigenen Block, am besten auf seiner Standortseite.

### Muss ich vorhandenes FAQPage-Markup jetzt entfernen?

Google zeigt FAQ-Snippets seit dem 7. Mai 2026 nicht mehr an. Das Markup bringt also keine Darstellung mehr. Im Plan vermerken Sie es als Bestand, der nicht ausgebaut wird, und bauen es spätestens bei der nächsten Überarbeitung der Vorlage aus.

### Bringen strukturierte Daten bessere Rankings?

Google beschreibt strukturierte Daten als Hilfe, Seiten zu verstehen, und als Voraussetzung für bestimmte Darstellungen. Eine bessere Position wird nicht versprochen, und auch korrekt ausgezeichnete Seiten erhalten nicht immer ein Rich-Suchergebnis.

### Wer sollte den Schema-Plan pflegen?

Die Stammdaten pflegt am besten die Person, die auch das Google-Unternehmensprofil betreut, meist der Inhaber. Vorlagen und Code pflegt, wer die Website technisch betreut. Wichtig ist, dass in jeder Zeile ein Name steht.

## Quellen

- [Allgemeine Richtlinien für strukturierte Daten (zuletzt aktualisiert 16. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de), Google Search Central
- [Einführung in strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de), Google Search Central
- [Strukturierte Daten für lokale Unternehmen (LocalBusiness)](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de), Google Search Central
- [Strukturierte Daten für Organisationen (Organization)](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=de), Google Search Central
- [Strukturierte Daten für Artikel (Article, BlogPosting)](https://developers.google.com/search/docs/appearance/structured-data/article?hl=de), Google Search Central
- [Strukturierte Daten für Navigationspfade (BreadcrumbList)](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?hl=de), Google Search Central
- [Rezensions-Snippet (Review, AggregateRating; zuletzt aktualisiert 8. September 2026)](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=de), Google Search Central
- [Strukturierte Daten für Produkte](https://developers.google.com/search/docs/appearance/structured-data/product?hl=de), Google Search Central
- [Unterstützte Funktionen für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=de), Google Search Central
- [Latest documentation updates (FAQ-Snippets ab 7. Mai 2026 eingestellt, HowTo-Dokumentation 2023 entfernt)](https://developers.google.com/search/updates), Google Search Central
- [Testtools für strukturierte Daten (Test für Rich-Suchergebnisse, Schema Markup Validator)](https://developers.google.com/search/docs/appearance/structured-data?hl=de), Google Search Central
- [Test für Rich-Suchergebnisse](https://support.google.com/webmasters/answer/7445569?hl=de), Search Console-Hilfe
- [Bericht zu Rich-Suchergebnissen: Übersicht](https://support.google.com/webmasters/answer/7552505?hl=de), Search Console-Hilfe

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-13. Fehler gefunden? info@localdominate.org
