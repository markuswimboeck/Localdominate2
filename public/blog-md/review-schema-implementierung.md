---
title: "Review Schema richtig einsetzen: Wann Google Bewertungssterne zeigt"
slug: review-schema-implementierung
url: https://localdominate.org/blog/review-schema-implementierung
canonical: https://localdominate.org/blog/review-schema-implementierung
markdown_url: https://localdominate.org/blog-md/review-schema-implementierung.md
language: de-DE
published: 2026-03-05
updated: 2026-10-10
reading_time_minutes: 11
category: "Technik"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Review- und AggregateRating-Markup ehrlich erklärt: warum eigene Bewertungen lokaler Betriebe keine Sterne bringen, wo Markup erlaubt ist und wie Sie es testen."
---

# Review Schema richtig einsetzen: Wann Google Bewertungssterne zeigt

Für Inhaber und Website-Verantwortliche lokaler Betriebe, die Sterne in den Google-Treffern ihrer Website sehen möchten. Sie erfahren, warum das für Ihren eigenen Betrieb seit 2019 nicht mehr funktioniert, wo Bewertungs-Markup weiterhin sinnvoll ist und wie Sie es sauber umsetzen.

## Die kurze Antwort

Seit September 2019 zeigt Google keine Bewertungssterne mehr für Seiten mit LocalBusiness- oder Organization-Markup, wenn der Betrieb die Bewertungen über sich selbst kontrolliert. Das gilt auch für eingebettete Google-Bewertungen. Review- und AggregateRating-Markup lohnt sich nur für unterstützte Typen wie Produkte, Rezepte, Bücher, Kurse oder Software. Für lokale Betriebe zählen echte Rezensionen im Google-Unternehmensprofil.

## Das Wichtigste in Kürze

- Bewertungen über den eigenen Betrieb auf der eigenen Website gelten für Google als „self-serving“. Seiten mit LocalBusiness- oder Organization-Markup bekommen dafür keine Sterne.
- Das gilt auch, wenn Sie Google- oder Facebook-Bewertungen per Widget einbinden. Bewertungen von anderen Websites dürfen ohnehin nicht im Markup zusammengefasst werden.
- Für Produkte, Rezepte, Bücher, Kurse, Veranstaltungen, Filme und Software können Sterne weiterhin erscheinen, wenn die Bewertungen echt und auf der Seite sichtbar sind.
- Gefälschte oder nicht offengelegte bezahlte Bewertungen im Markup können zu einer manuellen Maßnahme führen. Die Seite verliert dann ihre Rich-Suchergebnisse.
- Wer in Deutschland Kundenbewertungen auf der Website zeigt, muss nach § 5b Abs. 3 UWG angeben, ob und wie er deren Echtheit prüft.

## Review und AggregateRating: die zwei Bausteine

Review beschreibt eine einzelne Bewertung mit Autor und Wertung. AggregateRating fasst viele Bewertungen zu einem Durchschnitt und einer Anzahl zusammen. Beide sind Typen aus schema.org, die Google in Form von Rezensions-Snippets auswerten kann.

Strukturierte Daten sind ein maschinenlesbarer Zusatz im Quelltext. Meist werden sie als JSON-LD in den Seitenkopf geschrieben. Für Bewertungen gibt es zwei Typen, die sich ergänzen.

*Die beiden Bewertungstypen im Vergleich*

| Typ | Beschreibt | Pflichtangaben laut Google |
| --- | --- | --- |
| Review | Eine einzelne Bewertung, etwa eines Kunden oder einer Redaktion | author (Person oder Organisation mit Namen unter 100 Zeichen), reviewRating mit ratingValue, Name des bewerteten Objekts |
| AggregateRating | Den Durchschnitt aus vielen Bewertungen | ratingValue, ratingCount oder reviewCount, Name des bewerteten Objekts |

Ohne Angabe nimmt Google eine Skala von 1 bis 5 an. Wer eine andere Skala nutzt, etwa 1 bis 10, gibt bestRating und worstRating ausdrücklich an. Zeigen Sie mehrere Einzelbewertungen, verlangt Google zusätzlich eine Gesamtbewertung.

> **Begriff:** Ein **Rezensions-Snippet** (Review Snippet) ist der kurze Auszug mit Sternen und Wertung, den Google unter einem Suchtreffer oder in einem Knowledge Panel zeigen kann. Ob es erscheint, entscheidet Google. Korrektes Markup macht die Anzeige nur möglich.

## Warum eigene Bewertungen keine Sterne bringen

Google nennt Bewertungen „self-serving“, wenn Bewertungen über Unternehmen A auf der Website von Unternehmen A stehen. Seit dem 16. September 2019 zeigt Google dafür bei LocalBusiness und Organization samt Untertypen keine Sterne mehr, egal ob das Markup selbst geschrieben oder über ein Widget eingebunden ist.

Vor 2019 reichte es oft, auf der Startseite ein AggregateRating für den eigenen Betrieb einzubauen, und schon erschienen Sterne neben dem Treffer. Google hat das im Blogbeitrag „Making Review Rich Results more helpful“ beendet. Begründung: Bewertungen, die ein Betrieb über sich selbst auswählt und auszeichnet, helfen Suchenden wenig.

Die heutige Dokumentation zu Rezensions-Snippets sagt es deutlich: Kontrolliert das bewertete Unternehmen die Bewertungen über sich selbst, sind seine Seiten mit LocalBusiness- oder einem anderen Organization-Markup **nicht für Sterne berechtigt**. Als Beispiel nennt Google ausdrücklich eingebettete Widgets für Google-Bewertungen oder Facebook-Bewertungen.

*Typische Fälle bei lokalen Betrieben*

| Situation | Sterne in der Google-Suche? |
| --- | --- |
| Hotel zeichnet auf der eigenen Website Gästebewertungen als AggregateRating im Typ Hotel aus | Nein, Hotel ist ein Untertyp von LocalBusiness |
| Praxis bindet ein Widget mit ihren Google-Rezensionen ein | Nein, Google sieht das Einbetten als Kontrolle über die Bewertungen |
| Handwerksbetrieb schreibt Kundenstimmen von einem Bewertungsportal ins Markup | Nein, zusätzlich verboten: Bewertungen anderer Websites dürfen nicht zusammengefasst werden |
| Ein unabhängiges Portal sammelt Bewertungen über viele Restaurants | Möglich, das Portal bewertet andere Betriebe |

Laut Googles FAQ zum Blogbeitrag müssen Sie vorhandenes Markup dieser Art nicht entfernen. Sie erhalten dafür allein auch keine manuelle Maßnahme. Es bringt nur keine Sterne mehr. Das Google-Unternehmensprofil ist von der Regel nicht betroffen, sie betrifft nur die organische Suche.

## Wann Bewertungs-Markup erlaubt ist und angezeigt werden kann

Google kann Rezensions-Snippets für Bücher, Kurslisten, Veranstaltungen, Filme, Produkte, Rezepte und Software zeigen, außerdem für lokale Betriebe und Organisationen, wenn eine Website über andere Betriebe berichtet. Voraussetzung sind echte Bewertungen, die auf der Seite sichtbar sind.

*Wo Rezensions-Snippets laut Google möglich sind (Stand Oktober 2026)*

| Typ | Beispiel aus der Praxis | Hinweis |
| --- | --- | --- |
| Product | Ein Onlineshop zeigt Kundenbewertungen zu einem eigenen Produkt | Auch im eigenen Shop möglich, die Regel gegen self-serving betrifft nur Betriebe und Organisationen |
| Recipe | Ein Restaurant veröffentlicht ein Rezept, Besucher bewerten es | Bewertet wird das Rezept, nicht das Restaurant |
| Book | Ein Verlag oder Autor mit Leserbewertungen zu einem Buch |  |
| Course | Eine Schule zeigt Bewertungen zu einem bestimmten Kurs | Bewertet wird der Kurs, nicht die Schule |
| Event | Bewertungen zu einer wiederkehrenden Veranstaltung |  |
| Movie | Filmkritiken |  |
| SoftwareApplication | Bewertungen zu einer App oder Software |  |
| LocalBusiness, Organization | Ein Portal, das Bewertungen über andere Betriebe sammelt | Nur für Bewertungen über fremde Betriebe |

Daneben akzeptiert Google Bewertungen für weitere schema.org-Typen wie Game, Episode, MusicRecording oder MediaObject. Für lokale Betriebe sind sie selten relevant.

Auch eine **redaktionelle Bewertung** ist ein Review: Ein Testmagazin bewertet ein Produkt, ein Kritiker einen Film. Dann steht als author die Person und als publisher die Redaktion. Für lokale Betriebe gilt eine Einschränkung: Wertungen müssen direkt von Nutzern stammen, nicht von Redakteuren zusammengestellt sein.

## Google-Bewertungen auf der eigenen Website zeigen

Sie dürfen Ihre Google-Bewertungen auf der Website zeigen, sie bringen dort aber keine Sterne in der Suche. In Deutschland müssen Sie bei veröffentlichten Kundenbewertungen angeben, ob und wie Sie ihre Echtheit sicherstellen. Das verlangt § 5b Abs. 3 UWG.

Für Besucher sind echte Kundenstimmen auf der Website trotzdem nützlich. Ein Gast, der zwischen zwei Pensionen schwankt, liest gern, was andere erlebt haben. Zeigen Sie die Bewertungen also, wenn sie Ihnen helfen, aber erwarten Sie davon keine Sterne in der Suche.

- **Offenlegen, woher die Bewertungen kommen.** Ein Satz wie „Diese Bewertungen stammen aus unserem Google-Unternehmensprofil. Wir prüfen nicht selbst, ob die Verfasser bei uns Kunden waren.“ erfüllt den Zweck von § 5b Abs. 3 UWG.
- **Nicht nur die besten auswählen, ohne es zu sagen.** Wer gefiltert zeigt, sollte das kennzeichnen, etwa „Auswahl aktueller Bewertungen“, und auf das vollständige Profil verlinken.
- **Keine Bewertungen umschreiben oder kürzen**, sodass der Sinn sich ändert.
- **Kein AggregateRating aus Google-Bewertungen ins Markup schreiben.** Google verbietet, Bewertungen anderer Websites im Markup zusammenzufassen, und Sterne gibt es dafür ohnehin nicht.

Die rechtlichen Regeln in Deutschland, darunter die Verbote aus dem Anhang des UWG zu gefälschten Bewertungen, erklärt der Artikel [Google-Bewertungen bekommen](https://localdominate.org/blog/google-bewertungen-bekommen) ausführlicher. Für Österreich und die Schweiz gelten eigene Gesetze. Dieser Abschnitt ist kein Rechtsrat.

## Was lokale Betriebe stattdessen tun sollten

Für einen lokalen Betrieb erscheinen Sterne dort, wo Suchende ohnehin entscheiden: im Google-Unternehmensprofil in Maps und im Kartenblock. Investieren Sie die Zeit in echte Rezensionen dort, in Antworten darauf und in sauberes LocalBusiness-Markup ohne Bewertungen.

1. **Rezensionen im Profil aufbauen.** Bitten Sie jeden Kunden nach dem Termin um eine Bewertung, mit direktem Link. Ohne Gegenleistung und ohne vorher auszusortieren. Den Ablauf beschreibt [Google-Bewertungen bekommen](https://localdominate.org/blog/google-bewertungen-bekommen).
2. **Auf Bewertungen antworten.** Antworten Sie sachlich, auch auf Kritik. Wie Sie mit unfairen oder falschen Bewertungen umgehen, steht in [Negative Google-Bewertungen](https://localdominate.org/blog/negative-google-bewertungen).
3. **LocalBusiness-Markup ohne Sterne pflegen.** Name, Adresse, Telefon, Öffnungszeiten und Website im passenden Typ (Dentist, Hotel, Restaurant, Plumber). Das hilft Google beim Verstehen. Die Anleitung steht in [Schema Markup für Local SEO](https://localdominate.org/blog/schema-markup-local-seo).
4. **Profil und Website abgleichen.** Dieselben Firmendaten überall. Wie Sie Abweichungen finden, zeigt [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo).
5. **Auf das Profil verweisen.** Verlinken Sie von der Website auf Ihr Unternehmensprofil, etwa mit „Alle Bewertungen bei Google lesen“. So sehen Interessenten die vollständige, nicht von Ihnen kontrollierte Liste.

Google schreibt in seiner Hilfe zum lokalen Ranking, dass mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern können. Mehr dazu in [Google-Maps-Ranking verbessern](https://localdominate.org/blog/google-maps-ranking-verbessern) und [Google Unternehmensprofil optimieren](https://localdominate.org/blog/google-my-business-optimieren).

## Review und AggregateRating korrekt umsetzen, wo es erlaubt ist

Betten Sie die Bewertung in den Typ des bewerteten Objekts ein, etwa in Product oder Recipe. Zeichnen Sie nur Bewertungen aus, die auf der Seite sichtbar sind, nehmen Sie alle sichtbaren auf und halten Sie Durchschnitt und Anzahl mit der Anzeige gleich.

1. **Berechtigung prüfen.** Ist das bewertete Objekt ein unterstützter Typ (Produkt, Rezept, Kurs, Buch, Veranstaltung, Software)? Bewerten die Kunden dieses Objekt und nicht Ihren Betrieb als Ganzes? Nur dann weitermachen.
2. **Bewertungen sichtbar machen.** Die Bewertungen und der Durchschnitt müssen auf derselben Seite für Besucher lesbar sein. Google verlangt außerdem, dass das Markup alle sichtbaren Bewertungen umfasst.
3. **Markup einbetten.** AggregateRating und einzelne Reviews gehören als Eigenschaft in das Objekt, das bewertet wird. Dann entfällt itemReviewed, Google übernimmt den Namen des übergeordneten Objekts.
4. **Werte automatisch erzeugen.** Lassen Sie Durchschnitt und Anzahl aus derselben Datenquelle berechnen, die auch die Anzeige speist. Von Hand gepflegte Zahlen weichen schnell ab.
5. **Testen und veröffentlichen.** Code im Test für Rich-Suchergebnisse prüfen, einige Seiten live stellen, mit der URL-Prüfung in der Search Console kontrollieren, dann ausrollen.

> **Bewertungen mit Gegenleistung:** Google schließt gefälschte Bewertungen und nicht offengelegte Bewertungen gegen Vorteile wie Rabatte, Gutscheine oder Gratisprodukte aus, sowohl auf der Seite als auch im Markup. Für Bewertungen im Google-Unternehmensprofil sind Anreize ganz verboten.

## Beispiel: Produktbewertungen im eigenen Onlineshop

Ein Hofladen verkauft online ein Glas Honig, Kunden haben es auf der Produktseite bewertet. Hier ist Markup erlaubt, weil das Produkt bewertet wird. Die Tabelle zeigt die JSON-LD-Angaben Zeile für Zeile, mit Beispielwerten.

*JSON-LD für ein Produkt mit Bewertungen (Beispielwerte, keine echten Daten)*

| Eigenschaft | Beispielwert | Erklärung |
| --- | --- | --- |
| @context | https://schema.org | Immer gleich |
| @type | Product | Das bewertete Objekt |
| name | Blütenhonig 500 g | Name wie auf der Seite |
| aggregateRating › @type | AggregateRating | Gesamtbewertung, eingebettet im Produkt |
| aggregateRating › ratingValue | 4,6 (im Code mit Punkt: 4.6) | Durchschnitt, genau wie angezeigt |
| aggregateRating › reviewCount | 27 | Anzahl der Bewertungen, genau wie angezeigt |
| review › @type | Review | Je eine Einzelbewertung, alle sichtbaren aufnehmen |
| review › author › @type und name | Person, „Anna K.“ | Name, wie er auf der Seite steht |
| review › reviewRating › ratingValue | 5 | Wertung dieser Einzelbewertung |
| review › datePublished | 2026-09-14 | Datum im ISO-Format |
| review › reviewBody | Text der Bewertung | Optional, aber hilfreich |

bestRating und worstRating fehlen hier absichtlich: Bei einer Skala von 1 bis 5 nimmt Google diese Werte an. Der Code steht als Skript vom Typ application/ld+json im Kopf oder Körper der Produktseite. Viele Shopsysteme erzeugen ihn über ein Bewertungs-Plugin, das prüfen Sie dann nur noch.

Für ein Restaurant mit eigenem Rezeptblog funktioniert dasselbe mit Recipe statt Product. Branchenbezogene Hinweise finden Sie in [Local SEO für Restaurants](https://localdominate.org/blog/local-seo-fuer-restaurants). Für Onlineshops haben wir eine [englische Seite zu Online Stores](https://localdominate.org/industries/online-stores).

## Testen mit dem Test für Rich-Suchergebnisse

Prüfen Sie den Code oder die URL im Test für Rich-Suchergebnisse von Google und beheben Sie kritische Fehler. Nach dem Livegang zeigt die URL-Prüfung in der Search Console, wie Google die Seite sieht. Ein fehlerfreier Test garantiert aber keine Sterne.

1. Test für Rich-Suchergebnisse öffnen (search.google.com/test/rich-results) und URL oder Code eingeben.
2. Kritische Fehler beheben. Hinweise auf fehlende empfohlene Angaben sind kein Ausschlussgrund, verbessern aber die Daten.
3. Bei einer URL: Die Seite muss ohne Anmeldung aus dem Internet erreichbar sein.
4. Nach dem Livegang die URL-Prüfung in der Search Console nutzen und später die Berichte zu Rich-Suchergebnissen beobachten.

> **Grenzen des Tests:** Der Test prüft Syntax und Pflichtangaben. Ob eine Seite die inhaltlichen Richtlinien erfüllt, etwa die Regel gegen self-serving Bewertungen, beurteilt er nicht vollständig. Google schreibt selbst, dass auch korrekt ausgezeichnete Seiten keine Garantie auf Rich-Suchergebnisse haben.

## Risiko: manuelle Maßnahme bei Spam im Markup

Verstößt Markup gegen Googles Richtlinien, kann Google eine manuelle Maßnahme verhängen. Die betroffenen Seiten verlieren dann ihre Berechtigung für Rich-Suchergebnisse. Laut Google ändert eine solche Maßnahme für strukturierte Daten das Ranking in der Websuche nicht.

*Häufige Verstöße und ihre Folgen*

| Verstoß | Was Google dazu sagt |
| --- | --- |
| Bewertungen im Markup, die auf der Seite nicht zu sehen sind | Nicht sichtbare Inhalte dürfen nicht ausgezeichnet werden |
| Erfundene Bewertungen oder Wertungen nicht von echten Nutzern | Kann zu einer manuellen Maßnahme führen |
| Nur ausgewählte Bewertungen ins Markup, andere sichtbare weglassen | Alle sichtbaren Bewertungen sollen enthalten sein |
| Bewertungen von anderen Websites zusammenfassen | Ausdrücklich nicht erlaubt |
| Ein Rating für eine ganze Kategorie oder Liste statt für ein Objekt | Bewertungen müssen ein bestimmtes Objekt betreffen |
| Self-serving Markup für den eigenen Betrieb | Keine Sterne, aber allein dafür keine manuelle Maßnahme |

Ob gegen Ihre Website eine Maßnahme vorliegt, sehen Sie im Bericht „Manuelle Maßnahmen“ der Search Console. Nach der Behebung können Sie dort einen Antrag auf erneute Überprüfung stellen. Eine vollständige Prüfliste für Ihre Website finden Sie in der [Local-SEO-Audit-Checkliste](https://localdominate.org/blog/local-seo-audit-checkliste).

## Häufige Fragen

### Bekomme ich Sterne in Google, wenn ich Review Schema für meinen Betrieb einbaue?

Nein. Seit September 2019 zeigt Google für Seiten mit LocalBusiness- oder Organization-Markup keine Sterne, wenn der Betrieb die Bewertungen über sich selbst kontrolliert. Das gilt für selbst geschriebenes Markup und für Widgets.

### Darf ich Google-Bewertungen per Widget auf meiner Website zeigen?

Ja. Sterne in der Suche bringen sie dort aber nicht, weil Google das Einbetten als Kontrolle über die Bewertungen wertet. In Deutschland sollten Sie bei den Bewertungen angeben, ob und wie Sie deren Echtheit prüfen.

### Muss ich altes AggregateRating-Markup von meiner Startseite entfernen?

Laut Google nicht zwingend, allein dafür gibt es keine manuelle Maßnahme. Es bringt nur keine Sterne mehr. Enthält es aber Werte, die nicht auf der Seite stehen oder aus anderen Websites stammen, sollten Sie es korrigieren oder entfernen.

### Für welche Inhalte lohnt sich Review-Markup?

Für Produkte im eigenen Shop, Rezepte, Bücher, Kurse, Veranstaltungen, Filme und Software, jeweils mit echten Bewertungen auf der Seite. Und für Portale, die Bewertungen über andere Betriebe sammeln.

### Beeinflussen Sterne das Ranking?

Sterne sind eine Darstellungsform im Suchergebnis. Google nennt Bewertungsmarkup nicht als Rankingfaktor. Eine manuelle Maßnahme wegen strukturierter Daten kostet laut Google die Rich-Suchergebnisse, nicht die Position in der Websuche.

### Zeigt der Test für Rich-Suchergebnisse, ob ich Sterne bekomme?

Nein. Er zeigt, ob der Code gültig ist und die Pflichtangaben enthält. Ob Google Sterne anzeigt, entscheidet der Algorithmus. Google garantiert die Anzeige auch bei korrektem Markup nicht.

## Quellen

- [Making Review Rich Results more helpful (16. September 2019)](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful), Google Search Central Blog
- [Strukturierte Daten für Rezensions-Snippets (Review, AggregateRating)](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), Google Search Central
- [Allgemeine Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), Google Search Central
- [Test für Rich-Suchergebnisse](https://support.google.com/webmasters/answer/7445569), Search Console-Hilfe
- [Bericht zu manuellen Maßnahmen](https://support.google.com/webmasters/answer/9044175), Search Console-Hilfe
- [Tipps zur Verbesserung des lokalen Rankings bei Google](https://support.google.com/business/answer/7091?hl=de), Google Unternehmensprofil-Hilfe
- [Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte](https://support.google.com/contributionpolicy/answer/7400114?hl=de), Google Maps-Hilfe
- [Gesetz gegen den unlauteren Wettbewerb (UWG), § 5b Wesentliche Informationen](https://www.gesetze-im-internet.de/uwg_2004/__5b.html), Bundesministerium der Justiz, gesetze-im-internet.de

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-10. Fehler gefunden? info@localdominate.org
