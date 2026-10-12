---
title: "Schema-Strategie für die KI-Suche: Was strukturierte Daten leisten und was ein Mythos ist"
slug: schema-strategie-ai-retrieval
url: https://localdominate.org/blog/schema-strategie-ai-retrieval
canonical: https://localdominate.org/blog/schema-strategie-ai-retrieval
markdown_url: https://localdominate.org/blog-md/schema-strategie-ai-retrieval.md
language: de-DE
published: 2026-05-20
updated: 2026-10-12
reading_time_minutes: 11
category: "KI-Suche"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Brauchen KI-Antworten eigenes Schema Markup? Was Google und Microsoft dokumentieren, welche Daten lokalen Betrieben helfen und welche Versprechen Mythen sind."
---

# Schema-Strategie für die KI-Suche: Was strukturierte Daten leisten und was ein Mythos ist

Für Inhaber und Webverantwortliche lokaler Betriebe, denen jemand „KI-Schema“ verkaufen will oder die wissen möchten, ob ihr Markup für ChatGPT, Copilot oder die Übersicht mit KI reicht. Sie erfahren, was die Anbieter selbst schreiben, welche Daten sinnvoll bleiben und welche Aussagen keine Grundlage haben.

## Die kurze Antwort

Für die KI-Funktionen der Google-Suche brauchen Sie laut Google kein besonderes Schema Markup. Strukturierte Daten bleiben trotzdem sinnvoll: LocalBusiness und Organization beschreiben Ihren Betrieb eindeutig, sameAs verbindet Ihre Profile. Microsoft schreibt, Schema helfe auch KI-Systemen beim Verstehen. Entscheidend ist, dass Markup, sichtbarer Text und Unternehmensprofil übereinstimmen. Eine Nennung in KI-Antworten garantiert kein Markup.

## Das Wichtigste in Kürze

- Google schreibt ausdrücklich, dass es für die generative KI-Suche kein spezielles schema.org-Markup gibt und strukturierte Daten dafür nicht erforderlich sind.
- Google empfiehlt strukturierte Daten trotzdem weiter, vor allem wegen der Rich-Suchergebnisse. In seiner Liste bewährter Verfahren für KI-Funktionen steht: Markup muss zum sichtbaren Text passen.
- Microsoft schreibt, Schema helfe Suchmaschinen und KI-Systemen, Inhalte zu verstehen. OpenAI, Perplexity und Anthropic erwähnen strukturierte Daten in den hier geprüften Seiten nicht.
- Für lokale Betriebe reichen LocalBusiness mit genauem Untertyp und Organization mit Logo und sameAs. Für Google Maps ist das Unternehmensprofil maßgeblich, strukturierte Daten nennt Google dort nicht als Faktor.
- FAQ-Markup und Bewertungsmarkup für den eigenen Betrieb bringen in der Google-Suche keine Sonderdarstellung mehr, ein eigenes „KI-Schema“ gibt es nicht. FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr an.

## Was die Anbieter zu strukturierten Daten und KI dokumentieren

Google sagt klar, dass KI-Funktionen kein besonderes Markup brauchen. Microsoft beschreibt Schema als Hilfe für Suchmaschinen und KI-Systeme. OpenAI, Perplexity und Anthropic nennen strukturierte Daten in ihren Seiten zu Suche und Crawlern nicht.

Viele Anleitungen behaupten, KI-Systeme würden JSON-LD „bevorzugt lesen“. Prüft man die Dokumentation der Anbieter, sieht das Bild nüchterner aus. Die folgende Tabelle fasst zusammen, was wir im Oktober 2026 in den offiziellen Quellen gefunden haben.

*Strukturierte Daten in der Dokumentation der KI-Anbieter (Stand 11. Oktober 2026)*

| Anbieter | Was dokumentiert ist | Was daraus folgt |
| --- | --- | --- |
| Google (Übersicht mit KI, KI-Modus) | Kein spezielles schema.org-Markup nötig, keine zusätzlichen technischen Voraussetzungen. Strukturierte Daten sollen zum sichtbaren Text passen | Normales, korrektes Markup genügt. Ein „KI-Schema“ gibt es nicht |
| Microsoft (Bing, Copilot) | Schema helfe Suchmaschinen und KI-Systemen, Inhalte zu verstehen (Blogbeitrag von Microsoft Bing, Oktober 2025) | Markup ist bei Microsoft ein ausdrücklich genanntes Hilfsmittel, keine Voraussetzung |
| OpenAI (ChatGPT-Suche) | Strukturierte Daten werden nicht erwähnt. Genannt wird, dass OAI-SearchBot nicht gesperrt sein darf | Für ChatGPT ist der Crawler-Zugriff die dokumentierte Bedingung |
| Perplexity | Seite zu den Crawlern ohne Hinweis auf strukturierte Daten | Nicht belegt, ob und wie Markup genutzt wird |
| Anthropic (Claude) | Hilfeseite zu den Crawlern ohne Hinweis auf strukturierte Daten | Nicht belegt, ob und wie Markup genutzt wird |

Wie die einzelnen Dienste lokale Betriebe auswählen, steht in eigenen Artikeln: [ChatGPT-Suche](https://localdominate.org/blog/chatgpt-search-lokale-unternehmen-2026), [Bing und Copilot](https://localdominate.org/blog/bing-copilot-local-seo-2026) sowie [Perplexity und Claude](https://localdominate.org/blog/perplexity-claude-lokale-sichtbarkeit). Hier geht es nur um die Frage, welche Rolle strukturierte Daten dabei spielen.

## Google: kein besonderes Markup, aber weiterhin sinnvoll

Laut Google sind strukturierte Daten für die generative KI-Suche nicht erforderlich. Google rät trotzdem, sie weiter zu nutzen, weil sie für Rich-Suchergebnisse in Frage kommen, und verlangt, dass sie zum sichtbaren Text passen.

Im Mai 2026 hat Google einen eigenen Leitfaden zur Optimierung für generative KI-Funktionen veröffentlicht, auch auf Deutsch unter dem Titel „Website für generative KI-Funktionen in der Google Suche optimieren“. Dort heißt es sinngemäß: Strukturierte Daten sind für die generative KI-Suche nicht erforderlich, und es gibt kein besonderes schema.org-Markup, das Sie hinzufügen müssen. Es sei aber sinnvoll, sie als Teil der gesamten Suchmaschinenoptimierung weiter zu verwenden, weil sie für Rich-Suchergebnisse in Frage kommen.

Auf der Seite „KI-Funktionen und deine Website“ nennt Google eine Liste bewährter Verfahren, die auch für die [Übersicht mit KI](https://localdominate.org/blog/google-ai-overviews-local-seo) und den [KI-Modus](https://localdominate.org/blog/google-ai-mode-local-seo-2026) gelten. Darin stehen unter anderem: Crawling erlauben, wichtige Inhalte als Text anbieten, strukturierte Daten an den sichtbaren Text anpassen und die Angaben im Unternehmensprofil aktuell halten.

> **Für lokale Betriebe wichtig:** Im Leitfaden zur Optimierung für generative KI-Funktionen schreibt Google, dass Merchant Center und Unternehmensprofile Produkten und Leistungen helfen können, in KI-Antworten und anderen Suchergebnissen sichtbar zu werden. Für einen Handwerksbetrieb oder eine Praxis ist das gepflegte [Google-Unternehmensprofil](https://localdominate.org/blog/google-my-business-optimieren) deshalb wichtiger als jede Zeile Markup.

Google schreibt außerdem, dass weder spezielle Textdateien für KI noch eine Aufteilung von Inhalten in kleine Stücke nötig sind. Was das für llms.txt bedeutet, erklärt [llms.txt für lokale Unternehmen](https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026).

## Was strukturierte Daten bei der KI-Suche realistisch leisten

Strukturierte Daten machen Fakten über Ihren Betrieb eindeutig: Name, Adresse, Telefon, Öffnungszeiten und Verbindungen zu Ihren Profilen. Wie stark einzelne KI-Systeme diese Daten beim Abruf nutzen, legt keiner der hier geprüften Anbieter im Detail offen.

Google beschreibt den Zweck strukturierter Daten allgemein: Sie helfen, den Inhalt einer Seite zu verstehen und Informationen über das Web und die Welt zu erfassen. Für Organization schreibt Google, das Markup helfe, die Verwaltungsangaben eines Unternehmens zu verstehen und es in den Suchergebnissen von anderen zu unterscheiden. Das ist für lokale Betriebe mit häufigen Namen wie „Malerbetrieb Huber“ oder „Physiotherapie am Markt“ besonders nützlich.

- **Eindeutigkeit.** Markup sagt maschinenlesbar, welcher Betrieb gemeint ist, wo er sitzt und welche Profile zu ihm gehören.
- **Rich-Suchergebnisse.** Für bestimmte Typen kann Google besondere Darstellungen zeigen. Eine Garantie dafür gibt es laut Google nicht.
- **Abgleich.** Wenn Markup, Seitentext und Profil dieselben Angaben enthalten, entstehen keine widersprüchlichen Daten über Ihren Betrieb.

> **Einschätzung:** KI-Antworten geben vor allem wieder, was als Text auf Seiten und in Profilen steht. Ob ein Sprachmodell beim Abruf den JSON-LD-Block selbst sieht oder nur den sichtbaren Text, beschreibt keiner der hier geprüften Anbieter im Detail. Unsere Folgerung: Jede wichtige Angabe muss als lesbarer Text auf der Seite stehen. Markup bestätigt diese Angaben, ersetzt sie aber nicht. Wie Sie Seiten so schreiben, dass sie richtig zitiert werden, zeigt [Website-Inhalte für KI-Suchmaschinen](https://localdominate.org/blog/website-content-ai-suchmaschinen).

## Die Grundausstattung für lokale Betriebe

Für die meisten lokalen Betriebe genügen zwei Typen: LocalBusiness mit dem genauesten Untertyp auf der Seite mit Ihren Unternehmensangaben und Organization mit Logo und sameAs. Pflicht sind bei LocalBusiness laut Google nur Name und Adresse.

*Strukturierte Daten, die lokalen Betrieben laut Google-Dokumentation nützen*

| Typ | Wichtige Felder | Wo es hingehört |
| --- | --- | --- |
| LocalBusiness mit Untertyp (etwa Dentist, Restaurant, Plumber) | Pflicht: name, address. Empfohlen unter anderem: geo, openingHoursSpecification, telephone, url, priceRange | Startseite oder Kontaktseite, bei mehreren Standorten jede Standortseite |
| Organization | Keine Pflichtfelder. Sinnvoll: logo, url, sameAs, Kontaktangaben, bei Bedarf vatID | Meist die Startseite |
| Event | Name, Datum, Ort | Nur wenn Sie öffentliche Veranstaltungen anbieten |

Google empfiehlt, für ein lokales Geschäft den genauesten LocalBusiness-Untertyp zu wählen und die Felder von Organization zu ergänzen. Wie die einzelnen Felder richtig gefüllt werden, steht ausführlich in [Schema Markup für lokale Unternehmen](https://localdominate.org/blog/schema-markup-local-seo#localbusiness). Dieser Artikel wiederholt das nicht.

> **Fiktives Beispiel:** Ein Malerbetrieb in Linz zeichnet auf seiner Kontaktseite LocalBusiness mit dem Untertyp HousePainter aus: Name wie auf dem Firmenschild, Adresse, Telefon mit +43, Öffnungszeiten Mo bis Fr 7 bis 16 Uhr und Koordinaten. Auf der Startseite steht Organization mit Logo und sameAs auf das Unternehmensprofil, die Facebook-Seite und den Eintrag bei der Wirtschaftskammer. Dieselben Angaben stehen als Text im Seitenfuß. Das Beispiel ist erfunden und zeigt nur den Aufbau.

## sameAs: Ihre Profile eindeutig verbinden

Mit sameAs nennen Sie Seiten auf anderen Websites, die denselben Betrieb beschreiben, etwa Ihr Unternehmensprofil, Branchenportale oder soziale Netzwerke. Das hilft bei der eindeutigen Zuordnung, wenn alle verlinkten Profile gepflegt sind und übereinstimmen.

Schema.org beschreibt sameAs als Adresse einer Referenzseite, die die Identität eines Dings eindeutig angibt. Google beschreibt das Feld bei Organization als Adresse einer Seite auf einer anderen Website mit zusätzlichen Informationen über Ihr Unternehmen. Gemeint sind Profile, die Sie selbst verwalten oder die Ihren Betrieb offiziell führen.

1. **Profile sammeln.** Notieren Sie alle Profile, die Ihnen gehören und aktuell sind: Unternehmensprofil, Bing Places, Apple Business, soziale Netzwerke, Kammer- oder Verbandseintrag, wichtige Branchenportale.
2. **Angaben abgleichen.** Name, Adresse, Telefon und Öffnungszeiten müssen auf jedem Profil gleich sein. Abweichungen zuerst beheben, siehe [NAP-Konsistenz](https://localdominate.org/blog/nap-konsistenz-local-seo).
3. **Nur Gepflegtes verlinken.** Verwaiste Konten, fremde Seiten oder Verzeichnisse mit falschen Daten gehören nicht in sameAs.
4. **Regelmäßig prüfen.** Wenn ein Profil gelöscht oder umbenannt wird, passen Sie die Liste an. Ein toter Link verbindet nichts.

Wie sameAs mit dem Unternehmensprofil und den Angaben in Verzeichnissen zusammenwirkt, damit Suchmaschinen Ihren Betrieb als eine eindeutige Einheit erkennen, beschreibt [Entity SEO für lokale Unternehmen](https://localdominate.org/blog/entity-seo-guide#strukturierte-daten).

## Markup, Seite und Profil müssen übereinstimmen

Google verlangt, dass strukturierte Daten den sichtbaren Inhalt realitätsgetreu wiedergeben und nicht in die Irre führen. Für KI-Antworten ist das doppelt wichtig, weil widersprüchliche Angaben direkt in einer Antwort landen können.

In Googles allgemeinen Richtlinien für strukturierte Daten steht: Markieren Sie keine Inhalte, die für Leser der Seite nicht sichtbar sind. Die Daten müssen eine realitätsgetreue Darstellung der Seiteninhalte sein und dürfen Nutzer nicht täuschen. Verstöße können zu einer manuellen Maßnahme führen.

*Typische Widersprüche und ihre Folgen*

| Widerspruch | Beispiel | Lösung |
| --- | --- | --- |
| Alte Öffnungszeiten im Markup | Seite sagt Sa geschlossen, JSON-LD sagt Sa 9 bis 13 Uhr | Markup aus derselben Quelle wie den Seitentext erzeugen oder bei jeder Änderung mitpflegen |
| Unsichtbare Angaben | Leistungen oder Orte nur im Markup, nicht im Text | Alles, was im Markup steht, auch sichtbar auf die Seite schreiben |
| Abweichung zum Profil | Andere Telefonnummer im Unternehmensprofil als auf der Website | Alle drei Stellen am selben Tag ändern |
| Werbender Name | Ortsnamen oder Leistungen im Feld name, die nicht zum echten Firmennamen gehören | Den echten Namen verwenden, wie auf Schild und Profil |

> **Einschätzung:** Die Regel „Markup passt zum sichtbaren Text“ ist von Google dokumentiert. Dass Widersprüche zwischen Website und Profilen in KI-Antworten falsch wiedergegeben werden, ist unsere Beobachtung aus Prüfungen. Wie Sie eine falsche Angabe an der Quelle berichtigen, steht in [KI-Falschangaben korrigieren](https://localdominate.org/blog/ai-falschangaben-korrigieren-2026).

## Was ein Mythos ist

Weder Google noch Microsoft, OpenAI, Perplexity oder Anthropic dokumentieren ein eigenes KI-Markup, eine Bevorzugung bestimmter Schema-Typen oder einen Zusammenhang zwischen Menge an Markup und Zitaten. Solche Aussagen sind Vermutungen oder Verkaufsargumente.

*Verbreitete Aussagen und der Stand der offiziellen Dokumentation*

| Aussage | Stand der Dokumentation |
| --- | --- |
| „Für KI-Antworten braucht man ein spezielles KI-Schema“ | Google schreibt ausdrücklich, dass es kein besonderes schema.org-Markup für KI-Funktionen gibt. Andere Anbieter nennen keines. |
| „ChatGPT liest JSON-LD bevorzugt“ | OpenAI erwähnt strukturierte Daten in den geprüften Seiten nicht. Nicht belegt. |
| „FAQPage-Markup bringt Sie in KI-Antworten“ | Nicht belegt. Google zeigt FAQ-Snippets seit dem 7. Mai 2026 gar nicht mehr an. Fragen und Antworten als normaler Text auf der Seite bleiben nützlich. |
| „Je mehr Schema-Typen, desto mehr Zitate“ | Kein Anbieter nennt einen solchen Zusammenhang. Markup für Inhalte, die nicht auf der Seite stehen, verstößt sogar gegen Googles Richtlinien. |
| „Bewertungssterne im eigenen Markup stärken das Vertrauen der KI“ | Nicht belegt. Für Bewertungen über das eigene Unternehmen zeigt Google keine Sterne an, siehe [Review Schema](https://localdominate.org/blog/review-schema-implementierung#self-serving). |
| „Mit dem richtigen Markup ist die Nennung sicher“ | Google schreibt, dass Indexierung und Ausspielung nicht garantiert sind, auch wenn alle Anforderungen erfüllt sind. |

> **Korrektur zur früheren Fassung:** Eine frühere Version dieses Artikels empfahl fünf „Pflicht-Typen“ einschließlich FAQPage und ein Beispiel mit AggregateRating für den eigenen Betrieb. Beides ist überholt: FAQ-Snippets gibt es nicht mehr, und eigene Bewertungen führen nicht zu Sternen. Was mit vorhandenem FAQ- und HowTo-Markup geschieht, steht in [Schema Markup für lokale Unternehmen](https://localdominate.org/blog/schema-markup-local-seo#eingestellt).

Einordnung des Begriffs GEO und dazu, welche Versprechen zur KI-Optimierung belegt sind und welche nicht, finden Sie in [Was ist GEO?](https://localdominate.org/blog/was-ist-geo-generative-engine-optimization).

## So gehen Sie vor

Prüfen Sie zuerst den Bestand, bereinigen Sie überholtes Markup, vervollständigen Sie LocalBusiness und Organization mit sameAs und gleichen Sie alles mit Seitentext und Profil ab. Danach testen Sie technisch und beobachten die KI-Antworten in Stichproben.

1. **Bestand prüfen.** Startseite und Kontaktseite im Test für Rich-Suchergebnisse aufrufen. Notieren Sie, welche Typen vorhanden sind und welche Fehler gemeldet werden.
2. **Bereinigen.** AggregateRating und Review für den eigenen Betrieb entfernen. Neues FAQ- oder HowTo-Markup nicht mehr einbauen.
3. **LocalBusiness vervollständigen.** Genauester Untertyp, Name, Adresse, Telefon, Öffnungszeiten, Koordinaten und URL, exakt wie im Unternehmensprofil.
4. **Organization mit sameAs ergänzen.** Logo und die Liste Ihrer gepflegten Profile auf der Startseite.
5. **Mit dem Seitentext abgleichen.** Jede Angabe im Markup muss auch als Text auf der Seite stehen. Fehlendes ergänzen, nicht das Markup aufblähen.
6. **Technisch testen.** Test für Rich-Suchergebnisse für Googles Anforderungen, Schema Markup Validator für das gesamte schema.org-Vokabular, URL-Prüftool in der Search Console für die veröffentlichte Seite.
7. **KI-Antworten beobachten.** Einmal im Monat dieselben Fragen mit Ortsangabe in den wichtigsten KI-Diensten stellen und festhalten, welche Angaben über Ihren Betrieb genannt werden.

Wie Sie diese Stichproben sauber dokumentieren, beschreibt [KI-Zitate überwachen](https://localdominate.org/blog/ai-zitat-monitoring-local-seo-2026). Wo lokale Betriebe in KI-Diensten überhaupt erscheinen und was jeder Dienst braucht, fasst [KI-Suche für lokale Unternehmen](https://localdominate.org/blog/ai-suche-lokale-unternehmen) zusammen.

## Häufige Fragen

### Brauche ich besonderes Schema Markup, um in der Übersicht mit KI zu erscheinen?

Nein. Google schreibt, dass es für die KI-Funktionen der Suche kein besonderes schema.org-Markup gibt und keine zusätzlichen technischen Voraussetzungen. Normales, korrektes Markup, das zum sichtbaren Text passt, genügt.

### Liest ChatGPT meine strukturierten Daten?

OpenAI dokumentiert das nicht. In den Hilfeseiten zur Suche wird als Bedingung genannt, dass OAI-SearchBot nicht gesperrt sein darf, auch nicht durch Hoster oder CDN. Sorgen Sie deshalb dafür, dass alle wichtigen Angaben auch als Text auf der Seite stehen.

### Lohnt sich strukturiertes Markup dann überhaupt noch?

Ja, in überschaubarem Umfang. Google empfiehlt strukturierte Daten weiterhin, unter anderem wegen der Rich-Suchergebnisse, und Microsoft beschreibt Schema als Hilfe für Suchmaschinen und KI-Systeme. Für lokale Betriebe genügen meist LocalBusiness und Organization mit sameAs.

### Soll ich vorhandenes FAQPage-Markup entfernen?

Unsere Einschätzung: Entfernen ist nicht dringend, solange das Markup zum sichtbaren Text passt. Google zeigt FAQ-Snippets seit dem 7. Mai 2026 aber nicht mehr an, neu einbauen lohnt sich daher nicht. Die Fragen und Antworten als Text auf der Seite bleiben für Besucher und KI-Systeme lesbar.

### Welche Seiten gehören in sameAs?

Seiten auf anderen Websites, die Ihren Betrieb beschreiben und die Sie pflegen: Unternehmensprofile, soziale Netzwerke, Kammer- oder Verbandseinträge und wichtige Branchenportale. Verlinken Sie nur Profile mit korrekten, aktuellen Angaben.

### Kann eine Agentur mir mit Schema eine Nennung in KI-Antworten garantieren?

Nein. Google schreibt, dass Indexierung und Ausspielung nicht garantiert sind, selbst wenn eine Seite alle Anforderungen erfüllt. Kein KI-Anbieter dokumentiert, dass bestimmtes Markup zu Nennungen führt.

## Quellen

- [Optimizing your website for generative AI features on Google Search (zuletzt aktualisiert 10. Juli 2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), Google Search Central
- [AI features and your website (zuletzt aktualisiert 10. Dezember 2025)](https://developers.google.com/search/docs/appearance/ai-features), Google Search Central
- [Einführung in strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de), Google Search Central
- [Allgemeine Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de), Google Search Central
- [Local business (LocalBusiness) structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=en), Google Search Central
- [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=en), Google Search Central
- [Latest documentation updates (FAQ-Snippets ab 7. Mai 2026 eingestellt)](https://developers.google.com/search/updates), Google Search Central
- [Ranking in lokalen Suchergebnissen auf Google verbessern](https://support.google.com/business/answer/7091?hl=de), Google Unternehmensprofil-Hilfe
- [Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers), Microsoft Advertising Blog (Microsoft Bing)
- [Microsoft Bing/Copilot use schema for its LLMs (Bericht, 20. März 2025)](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455), Search Engine Land
- [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), OpenAI Help Center
- [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), Perplexity Docs
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518), Claude Help Center
- [sameAs](https://schema.org/sameAs), Schema.org
- [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search), OpenAI Help Center

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-12. Fehler gefunden? info@localdominate.org
