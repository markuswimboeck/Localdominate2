---
title: "Schema Markup für lokale Unternehmen: was Google 2026 nutzt und was Sie weglassen können"
slug: schema-markup-local-seo
url: https://localdominate.org/blog/schema-markup-local-seo
canonical: https://localdominate.org/blog/schema-markup-local-seo
markdown_url: https://localdominate.org/blog-md/schema-markup-local-seo.md
language: de-DE
published: 2026-01-16
updated: 2026-10-10
reading_time_minutes: 11
category: "Technik"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Welche strukturierten Daten lokale Unternehmen 2026 brauchen, welche Google nicht mehr anzeigt und warum Sterne für das eigene Unternehmen nicht erscheinen."
---

# Schema Markup für lokale Unternehmen: was Google 2026 nutzt und was Sie weglassen können

Für Inhaber und Webverantwortliche lokaler Betriebe, die wissen wollen, welche strukturierten Daten sich auf ihrer Website lohnen. Sie bekommen einen Überblick über die Typen, die Google heute auswertet, die Felder, auf die es ankommt, und die Darstellungen, die es nicht mehr gibt.

## Die kurze Antwort

Für die meisten lokalen Betriebe reichen strukturierte Daten vom Typ **LocalBusiness** mit dem genauesten Untertyp, ergänzt um Organization und, wenn Sie Veranstaltungen anbieten, Event. Sterne für das eigene Unternehmen zeigt Google nicht an, FAQ- und Anleitungs-Snippets gibt es nicht mehr. Wichtig ist, dass die Daten mit dem sichtbaren Inhalt übereinstimmen und mit dem Test für Rich-Suchergebnisse geprüft sind.

## Das Wichtigste in Kürze

- Strukturierte Daten helfen Google, Inhalte zu verstehen. Eine besondere Darstellung ermöglichen sie, garantieren sie aber nicht.
- Bei LocalBusiness verlangt Google nur Name und Adresse. Empfohlen sind unter anderem Koordinaten, Öffnungszeiten, Telefon mit Vorwahl und URL.
- Bewertungen über Ihr eigenes Unternehmen führen auf Ihrer Website nicht zu Sternen in der Suche, auch nicht über ein eingebettetes Google-Widget.
- FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr an, Anleitungs-Snippets schon seit 2023 nicht mehr. Vorhandenes Markup schadet nicht.
- Google empfiehlt JSON-LD und kann es auch lesen, wenn es per JavaScript eingefügt wird.

## Was strukturierte Daten leisten und was nicht

Strukturierte Daten beschreiben Inhalte einer Seite in einem festen Format, damit Google sie sicher zuordnen kann. Sie können besondere Darstellungen ermöglichen, eine Garantie dafür gibt es laut Google nicht.

Ein Mensch erkennt „Mo bis Fr 8 bis 18 Uhr“ sofort als Öffnungszeiten. Eine Maschine muss raten. Strukturierte Daten nehmen ihr das Raten ab: Sie stehen als kleiner Datenblock im Quelltext und sagen, was Name, Adresse, Telefonnummer und Öffnungszeiten sind. Das Vokabular dafür kommt von **schema.org**, daher der Name Schema Markup.

Google schreibt in seinen Richtlinien ausdrücklich, dass strukturierte Daten eine Funktion in der Suche ermöglichen, aber nicht garantieren. Selbst korrektes Markup kann ohne besondere Darstellung bleiben, abhängig von Suchverlauf, Standort und Gerät. Rechnen Sie also nicht mit Sternen oder Zusatzzeilen, nur weil der Code fehlerfrei ist.

> **Maßgeblich ist Google, nicht schema.org:** Schema.org kennt hunderte Typen und Felder. Welche davon Google für die Suche nutzt, steht in der Dokumentation von Google Search Central. Google weist selbst darauf hin, dass diese Dokumentation maßgeblich ist und nicht die von schema.org. Viele Felder, die Generatoren anbieten, haben für Google keine Wirkung.

Für die Platzierung im Kartenblock von Google Maps ist das Unternehmensprofil entscheidend, nicht der Code auf Ihrer Website. Google nennt für das lokale Ranking Relevanz, Entfernung und Bekanntheit. Strukturierte Daten sind eine Ergänzung, die Ihre Website eindeutig mit Ihrem Betrieb verbindet.

## Welche Typen sich für lokale Betriebe lohnen

Lohnend sind LocalBusiness, Organization und, bei Veranstaltungen, Event. Sterne für das eigene Unternehmen, FAQ und Anleitungen bringen in der Google-Suche keine Darstellung mehr.

*Strukturierte Daten für lokale Betriebe im Überblick (Stand Oktober 2026)*

| Typ | Wofür Google ihn nutzt | Empfehlung |
| --- | --- | --- |
| LocalBusiness mit Untertyp | Geschäftsangaben wie Öffnungszeiten und Adresse, unter anderem für das Knowledge Panel | Ja, auf der Seite mit Ihren Unternehmensangaben, je Standort einmal |
| Organization | Name, Logo, Kontakt und Unternehmenskennungen, etwa für Knowledge Panels | Ja, meist auf der Startseite |
| Event | Veranstaltungen in der Google-Suche und in anderen Google-Produkten wie Maps | Ja, wenn Sie öffentliche Veranstaltungen mit Datum und Ort anbieten |
| Review und AggregateRating für das eigene Unternehmen | Keine Sterne, wenn das Unternehmen die Bewertungen über sich selbst kontrolliert | Weglassen |
| FAQPage | Keine Darstellung mehr seit dem 7. Mai 2026 | Nicht neu einbauen. Vorhandenes Markup schadet nicht |
| HowTo | Keine Darstellung mehr seit September 2023 | Nicht einbauen |
| BreadcrumbList | Navigationspfad in den Ergebnissen, laut Google nur noch am Computer | Optional |

Für Typen wie Service oder OfferCatalog gibt es in Googles Übersicht der unterstützten Funktionen keinen eigenen Eintrag. Andere Suchmaschinen und Dienste können sie nutzen. Wenn Sie sie einsetzen, dann sparsam und nur für Leistungen, die auf der Seite auch beschrieben sind.

## LocalBusiness: die Felder, auf die es ankommt

Pflicht sind nur Name und Adresse. Ergänzen Sie den genauesten Untertyp, Koordinaten mit mindestens fünf Nachkommastellen, Öffnungszeiten, Telefon mit Landes- und Ortsvorwahl und die URL der Standortseite.

*Felder für LocalBusiness laut Google Search Central*

| Feld | Status | Worauf Sie achten |
| --- | --- | --- |
| @type | Pflicht | So genau wie möglich, etwa Restaurant, Dentist, HealthClub oder Plumber. Mehrere Typen als Liste, additionalType unterstützt Google nicht |
| name | Pflicht | Der echte Name, wie im Unternehmensprofil und auf dem Schild |
| address | Pflicht | Vollständige Postanschrift mit Straße, Ort, Postleitzahl und Land |
| geo | Empfohlen | Breiten- und Längengrad mit mindestens fünf Nachkommastellen |
| openingHoursSpecification | Empfohlen | Tage und Uhrzeiten; mit validFrom und validThrough lassen sich saisonale Schließungen angeben |
| telephone | Empfohlen | Mit Landes- und Ortsvorwahl, etwa +49 89 … |
| url | Empfohlen | Die Seite dieses Standorts |
| priceRange | Empfohlen | Kurze Angabe unter 100 Zeichen, etwa „€€“ oder „20 bis 40 €“ |
| department | Empfohlen | Für Abteilungen mit eigenen Öffnungszeiten oder Telefonnummern |
| menu, servesCuisine | Empfohlen für Gastronomie | Link zur Speisekarte, Art der Küche |

Google empfiehlt außerdem, die Felder für Organization zu ergänzen, weil LocalBusiness ein Untertyp davon ist, etwa Logo und Profile in sozialen Netzwerken. Die Daten können auf jeder Seite stehen. Sinnvoll ist die Seite, die Ihre Unternehmensangaben auch für Menschen zeigt, bei mehreren Standorten jeweils die Standortseite.

Eine Schritt-für-Schritt-Anleitung mit Codebeispielen finden Sie im Artikel [LocalBusiness Schema implementieren](https://localdominate.org/blog/localbusiness-schema-implementierung).

## Daten müssen zum sichtbaren Inhalt passen

Google verlangt, dass strukturierte Daten den sichtbaren Inhalt der Seite wiedergeben. Was im Code steht, muss auch auf der Seite zu lesen sein, und es darf nicht irreführend sein.

- **Keine unsichtbaren Angaben.** Öffnungszeiten, Telefonnummer und Adresse im Markup müssen auch im Text der Seite stehen.
- **Nichts Irreführendes.** Google nennt gefälschte Rezensionen ausdrücklich als Beispiel für unzulässiges Markup.
- **Mobil und Desktop gleich.** Google indexiert die mobile Version. Fehlen die Daten dort, fehlen sie für Google.
- **Gleiche Angaben wie im Profil.** Name, Adresse, Telefon und Öffnungszeiten sollten im Markup, auf der Seite und im Unternehmensprofil identisch sein, damit keine widersprüchlichen Angaben entstehen.

Ändern sich Öffnungszeiten oder Telefonnummer, ändern Sie alle drei Stellen am selben Tag. Wie Sie Abweichungen systematisch finden, steht im Artikel [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo).

> **Bei Verstößen:** Verstößt Markup gegen die Richtlinien, kann Google manuelle Maßnahmen gegen die Website ergreifen. Nach der Korrektur stellen Sie in der Search Console einen Antrag auf erneute Überprüfung.

## Warum Ihre eigenen Bewertungen keine Sterne bringen

Kontrolliert ein Unternehmen die Bewertungen über sich selbst, zeigt Google für dessen Seite keine Sterne an. Das gilt auch, wenn die Bewertungen über ein Widget von Google oder Facebook eingebunden sind.

Viele ältere Anleitungen empfehlen, die Durchschnittsnote mit AggregateRating auszuzeichnen, um gelbe Sterne in der Suche zu bekommen. Google hat das für lokale Unternehmen und Organisationen ausgeschlossen. In der Dokumentation zu LocalBusiness sind aggregateRating und review nur für Websites empfohlen, die Bewertungen zu **anderen** lokalen Unternehmen sammeln, also etwa Bewertungsportale.

Ihre Bewertungen bleiben trotzdem wertvoll. Zeigen Sie ausgewählte Stimmen auf der Website für Menschen, verlinken Sie auf Ihr Google-Profil und sammeln Sie dort laufend neue Rezensionen. Dort zählen sie laut Google zur Bekanntheit. Mehr dazu im Artikel [Review Schema implementieren](https://localdominate.org/blog/review-schema-implementierung) und in [Google-Bewertungen bekommen](https://localdominate.org/blog/google-bewertungen-bekommen).

## FAQ und Anleitungen: eingestellte Darstellungen

Google zeigt FAQ-Snippets seit dem 7. Mai 2026 nicht mehr an und hat die Dokumentation dazu entfernt. Anleitungs-Snippets gibt es seit September 2023 nicht mehr.

Schon im August 2023 hatte Google FAQ-Snippets auf bekannte Behörden- und Gesundheitswebsites beschränkt. Im Mai 2026 folgte das Ende für alle. Wer heute noch „mehr Platz in den Suchergebnissen durch FAQ Schema“ verspricht, beschreibt einen Zustand, den es nicht mehr gibt.

Ein Fragen-und-Antworten-Bereich auf der Seite bleibt sinnvoll, weil er Besuchern hilft und Rückfragen am Telefon spart. Vorhandenes FAQPage-Markup müssen Sie laut Google nicht entfernen. Ungenutzte strukturierte Daten verursachen keine Probleme, haben aber auch keine sichtbare Wirkung.

## Testen und überwachen

Prüfen Sie das Markup vor der Veröffentlichung mit dem Test für Rich-Suchergebnisse und danach mit dem URL-Prüftool und den Berichten der Search Console.

1. **Format wählen.** Google empfiehlt JSON-LD, weil es am einfachsten zu pflegen ist. Microdata und RDFa sind ebenfalls zulässig, wenn sie gültig sind.
2. **Test für Rich-Suchergebnisse.** Kritische Fehler beheben, nicht kritische Hinweise möglichst auch. Das Werkzeug zeigt, ob eine Seite für eine Darstellung in Frage kommt.
3. **Schema Markup Validator.** Prüft das Markup gegen das gesamte schema.org-Vokabular, auch Typen, die Google nicht nutzt.
4. **URL-Prüftool.** Zeigt, ob Google die veröffentlichte Seite crawlen kann und die Daten findet. Die Seite darf nicht durch robots.txt, noindex oder eine Anmeldung blockiert sein.
5. **Berichte beobachten.** Die Statusberichte der Search Console zeigen Fehler, die erst nach Änderungen an Vorlagen oder am System auftreten.

Wird Ihr Markup per JavaScript eingefügt, etwa durch ein Plugin oder ein Website-System, kann Google es laut eigener Dokumentation trotzdem lesen. Prüfen Sie mit dem URL-Prüftool, dass es in der gerenderten Seite tatsächlich ankommt.

## Häufige Fehler

Die meisten Probleme entstehen durch zu allgemeine Typen, veraltete Angaben und Markup, das etwas anderes sagt als die Seite.

*Fehler und Korrektur*

| Fehler | Korrektur |
| --- | --- |
| Nur „LocalBusiness“ statt eines Untertyps | Den genauesten passenden Untertyp wählen, bei mehreren als Liste |
| AggregateRating mit eigenen Bewertungen | Entfernen, Bewertungen nur für Menschen zeigen |
| Öffnungszeiten im Markup veraltet | Bei jeder Änderung Markup, Seite und Profil gemeinsam anpassen |
| Koordinaten zu ungenau | Mindestens fünf Nachkommastellen, Punkt aus dem Profil übernehmen |
| Telefon ohne Landesvorwahl | Internationales Format mit Landes- und Ortsvorwahl |
| Ein Standort-Markup für alle Filialen | Je Standort eine eigene Seite mit eigenem LocalBusiness-Block |
| Markup nur auf der Desktop-Version | Mobile und Desktop mit denselben strukturierten Daten ausliefern |

## So gehen Sie vor

Bestandsaufnahme, Bereinigung, Ergänzung, Test. Für einen Betrieb mit einem Standort ist das meist in wenigen Stunden erledigt.

1. **Bestand prüfen.** Startseite und Kontakt- oder Standortseite im Test für Rich-Suchergebnisse aufrufen und notieren, welche Typen schon vorhanden sind.
2. **Bereinigen.** AggregateRating und Review für das eigene Unternehmen entfernen. HowTo-Markup kann weg, FAQPage darf bleiben.
3. **LocalBusiness vervollständigen.** Untertyp, Name, Adresse, Koordinaten, Öffnungszeiten, Telefon und URL so eintragen, wie sie im Profil stehen.
4. **Organization ergänzen.** Logo, Kontakt und Profile in sozialen Netzwerken auf der Startseite.
5. **Event, falls zutreffend.** Öffentliche Veranstaltungen mit Datum, Ort und Ticketlink auszeichnen.
6. **Testen und Search Console beobachten.** Nach der Veröffentlichung URL-Prüftool und Berichte prüfen.

Wenn Sie wissen wollen, ob Website und Profil zusammenpassen, prüfen wir beides im [kostenlosen Check](https://localdominate.org/de#check).

## Häufige Fragen

### Verbessert Schema Markup mein Ranking?

Google beschreibt strukturierte Daten als Hilfe, Inhalte zu verstehen, und als Voraussetzung für bestimmte Darstellungen. Eine bessere Position wird nicht versprochen. Für den Kartenblock in Maps ist das Unternehmensprofil entscheidend.

### Wie lange dauert es, bis Google mein Markup berücksichtigt?

Google muss die Seite erst neu crawlen und indexieren. Das kann laut Google einige Tage dauern. Mit dem URL-Prüftool können Sie ein erneutes Crawlen anfordern. Ob eine besondere Darstellung erscheint, entscheidet Google je Suche.

### Wie zeichne ich mehrere Standorte aus?

Jeder Standort bekommt eine eigene Seite mit eigenem LocalBusiness-Block, eigener Adresse, eigenen Öffnungszeiten und eigener Telefonnummer. Mehr im Artikel [Multi-Location SEO](https://localdominate.org/blog/multi-location-seo).

### Muss ich FAQ-Markup jetzt löschen?

Nein. Google schreibt, dass ungenutzte strukturierte Daten keine Probleme verursachen. Sie können das Markup entfernen, müssen es aber nicht. Den sichtbaren Fragenbereich sollten Sie behalten, wenn er Besuchern hilft.

### Reicht ein Plugin für WordPress?

Für viele Betriebe ja. Google weist selbst darauf hin, dass ein Plugin für das eigene Website-System der einfachere Weg sein kann. Prüfen Sie danach im Test für Rich-Suchergebnisse, was das Plugin tatsächlich ausgibt, und entfernen Sie Bewertungs-Markup für das eigene Unternehmen.

### Was kostet es, Profil und Website abstimmen zu lassen?

Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Was zum Umfang gehört, klären wir vorab im Gespräch. Details auf der Seite [Leistungen](https://localdominate.org/services).

## Quellen

- [Einführung in strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de), Google Search Central
- [Allgemeine Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de), Google Search Central
- [Strukturierte Daten für lokale Unternehmen (LocalBusiness)](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de), Google Search Central
- [Rezensions-Snippet: Richtlinien zu eigennützigen Rezensionen](https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=de), Google Search Central
- [Unterstützte Funktionen für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=de), Google Search Central
- [Strukturierte Daten für Veranstaltungen (Event)](https://developers.google.com/search/docs/appearance/structured-data/event?hl=de), Google Search Central
- [Änderungen an Rich-Suchergebnissen für Anleitungen und FAQs](https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=de), Google Search Central Blog
- [Latest documentation updates (FAQ-Snippets eingestellt, Navigationspfade nur am Computer)](https://developers.google.com/search/updates), Google Search Central
- [Best Practices für die Mobile-First-Indexierung](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=de), Google Search Central
- [Ranking in lokalen Suchergebnissen auf Google verbessern](https://support.google.com/business/answer/7091?hl=de), Google Unternehmensprofil-Hilfe

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-10. Fehler gefunden? info@localdominate.org
