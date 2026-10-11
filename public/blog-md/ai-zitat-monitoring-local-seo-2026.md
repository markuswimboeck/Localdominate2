---
title: "KI-Zitate überwachen: die Monatsroutine für lokale Betriebe mit Stichproben, Berichten und Logs"
slug: ai-zitat-monitoring-local-seo-2026
url: https://localdominate.org/blog/ai-zitat-monitoring-local-seo-2026
canonical: https://localdominate.org/blog/ai-zitat-monitoring-local-seo-2026
markdown_url: https://localdominate.org/blog-md/ai-zitat-monitoring-local-seo-2026.md
language: de-DE
published: 2026-08-08
updated: 2026-10-11
reading_time_minutes: 12
category: "KI-Suche"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "So prüfen Sie, ob KI-Dienste Ihren Betrieb nennen: Stichproben, Search Console, Bing AI Performance, utm_source=chatgpt.com, Server-Logs und ihre Grenzen."
---

# KI-Zitate überwachen: die Monatsroutine für lokale Betriebe mit Stichproben, Berichten und Logs

Für Inhaber lokaler Betriebe, die wissen wollen, ob ChatGPT, Google, Copilot und andere KI-Dienste sie nennen und richtig beschreiben. Sie erfahren, welche Werkzeuge es dafür gibt, was jedes davon zeigt und was nicht, und wie Sie daraus eine Routine machen, die etwa eine Stunde im Monat kostet.

## Die kurze Antwort

Ob KI-Dienste Ihren Betrieb nennen, zeigt kein einzelnes Werkzeug vollständig. Sie kombinieren monatliche Stichproben mit festen Fragen, den Bericht für generative KI-Funktionen in der Search Console, den Bericht AI Performance in den Bing Webmaster Tools, Besuche mit utm_source=chatgpt.com in der Web-Analyse und die Server-Logs. Zusammen ergibt das ein ehrliches Bild, aber keine Garantie und keine exakte Quote.

## Das Wichtigste in Kürze

- Manuelle Stichproben sind die einzige Methode, die zeigt, was eine KI-Antwort tatsächlich über Ihren Betrieb sagt. Alle Berichte zeigen nur Ausschnitte.
- Die Search Console zeigt seit dem 31. August 2026 für alle Websites Impressionen aus Übersichten mit KI und KI-Modus, aber laut Google nur Impressionen, keine Klicks.
- Bing Webmaster Tools zählt im Bericht AI Performance, wie oft Ihre Seiten in Copilot und Bing als Quelle erscheinen. Seit Juni 2026 kommen Absichten, Themen, Zitatanteil und Zeitvergleich als Vorschau dazu.
- ChatGPT hängt laut OpenAI an Links den Parameter utm_source=chatgpt.com an. Für andere KI-Dienste ist ein solcher Parameter in den geprüften Dokumenten nicht beschrieben.
- Server-Logs zeigen, welche KI-Crawler Ihre Seiten abrufen. Sie zeigen nicht, ob Ihr Betrieb danach genannt wird.

## Was sich messen lässt und was nicht

Messbar sind drei Dinge: was eine KI-Antwort über Sie sagt (Stichprobe), wie oft Ihre Seiten als Quelle angezeigt oder besucht werden (Berichte und Web-Analyse) und ob KI-Crawler Ihre Seiten lesen (Logs). Nicht messbar ist eine verlässliche Gesamtquote, wie oft Ihr Betrieb in allen Antworten aller Nutzer vorkommt.

*Die fünf Messwege im Überblick*

| Messweg | Was er zeigt | Was er nicht zeigt | Aufwand |
| --- | --- | --- | --- |
| Manuelle Stichprobe | Ob und wie Ihr Betrieb in konkreten Antworten genannt wird, mit Quellen | Wie oft das bei anderen Nutzern so ist | Je nach Umfang 30 Minuten bis mehrere Stunden im Monat |
| Search Console, Bericht für generative KI-Funktionen | Impressionen Ihrer Links in Übersichten mit KI und KI-Modus, nach Seite, Land, Gerät, Datum | Klicks, Suchanfragen, den Text der Antwort | Gering, wenn die Search Console eingerichtet ist |
| Bing Webmaster Tools, AI Performance | Zitierungen in Copilot, KI-Zusammenfassungen in Bing und bei ausgewählten Partnern, mit Grounding Queries als Stichprobe | Position in der Antwort; Klicks nennt Microsoft nicht | Gering, wenn die Website verifiziert ist |
| Web-Analyse | Besuche aus ChatGPT über utm_source=chatgpt.com, bei anderen Diensten teils über den Verweis | Nennungen ohne Klick | Ein Filter, einmal angelegt |
| Server-Logs | Welche KI-Crawler und Nutzer-Abrufe Ihre Seiten erreichen | Ob Ihr Betrieb danach genannt wird | Mittel, je nach Hoster |

Nur Google und Microsoft liefern Website-Betreibern eigene Zahlen, und nur für ihre eigenen Dienste. Für ChatGPT, Perplexity und Claude bleiben Stichprobe, Web-Analyse und Logs. Welche KI-Dienste für lokale Betriebe überhaupt zählen, steht im Überblick [KI-Suche für lokale Unternehmen](https://localdominate.org/blog/ai-suche-lokale-unternehmen).

> **Keine Garantie:** Monitoring macht sichtbar, was passiert, garantiert aber keine Nennung. Google schreibt ausdrücklich, dass Indexierung und Anzeige nicht garantiert sind. Einen festen Platz in KI-Antworten vergibt kein Anbieter.

## Manuelle Stichproben: die Grundlage

Stellen Sie einmal im Monat dieselben zehn bis zwanzig Fragen mit Ortsangabe in den KI-Diensten, die für Ihre Kunden zählen, unter möglichst gleichen Bedingungen. Halten Sie fest, ob Ihr Betrieb genannt wird, ob die Angaben stimmen und welche Quellen verlinkt sind.

1. **Fragen festlegen.** Schreiben Sie Fragen so, wie Kunden sie stellen, immer mit Ort im Text: „Welche Zahnarztpraxis in Graz behandelt Angstpatienten?“, „Elektriker Notdienst Augsburg am Sonntag“, „Hotel in Luzern mit Parkplatz und Hund erlaubt“. Ergänzen Sie zwei oder drei Fragen mit Ihrem Namen, um Fakten wie Adresse und Öffnungszeiten zu prüfen.
2. **Dienste wählen.** Meist genügen Google (Übersicht mit KI und KI-Modus), ChatGPT und je nach Zielgruppe Copilot oder Perplexity. Lieber wenige Dienste regelmäßig als viele sporadisch.
3. **Bedingungen gleich halten.** Neues Gespräch, ohne Anmeldung oder mit ausgeschalteter Gedächtnisfunktion. OpenAI schreibt, dass ChatGPT gespeicherte Erinnerungen beim Umformulieren einer Suchanfrage nutzen kann. Auch der Standort wirkt: ChatGPT kann laut OpenAI einen ungefähren Standort aus der IP-Adresse ableiten. Der Ort in der Frage macht das Ergebnis unabhängiger vom Standort Ihres Büros.
4. **Ergebnis festhalten.** Datum, Dienst, Frage, genannt ja oder nein, genannte Fakten, verlinkte Quellen und ein Bildschirmfoto als Beleg.
5. **Zweimal fragen.** Stellen Sie wichtige Fragen zweimal in getrennten Gesprächen. Weichen die Antworten ab, notieren Sie beide. Das zeigt Ihnen, wie stark die Antworten schwanken.

Die Quellen unter einer Antwort zeigen, welche Seiten ein Dienst heranzieht: Ihre Website, ein Branchenportal, ein Verzeichnis oder ein Zeitungsartikel. Wie Sie daraus eine Quellenkarte machen, beschreibt [Wie ChatGPT lokale Unternehmen zitiert](https://localdominate.org/blog/chatgpt-zitiert-lokale-unternehmen#quellenkarte).

> **Einschätzung:** Zehn bis zwanzig Fragen sind unser Erfahrungswert für einen kleinen Betrieb, keine Vorgabe eines Anbieters. Wie Sie die Ergebnisse zu einer einfachen Kennzahl verdichten, steht in [AI Visibility Index](https://localdominate.org/blog/ai-visibility-index-local-seo-metrik).

## Search Console: der Bericht für generative KI-Funktionen

Der Bericht für generative KI-Funktionen in der Search Console zeigt, wie oft Links zu Ihrer Website in Übersichten mit KI und im KI-Modus angezeigt wurden, und ist laut Google seit dem 31. August 2026 für alle Websites weltweit verfügbar. Er nennt nur Impressionen, keine Klicks.

*Was der Bericht laut Google enthält*

| Merkmal | Laut Google-Hilfe |
| --- | --- |
| Kennzahl | Impressionen: wie oft Links zu Ihrer Website in einer generativen KI-Funktion angezeigt wurden |
| Erfasste Funktionen | Übersichten mit KI und KI-Modus; Tests in Search Labs sind nicht enthalten, Discover hat einen eigenen Bericht |
| Aufschlüsselung | Seiten, Länder (Herkunft der Suche), Datum, Geräte |
| Suchtyp | Web mit Text oder Web multimodal, etwa Suchen mit Google Lens oder Circle to Search |
| Aktualität | Die neuesten Daten sind vorläufig und können sich noch ändern; die Grafik zeigt sie gestrichelt |
| Fehlender Bericht | Zu wenige Impressionen in generativen KI-Funktionen oder Ausschluss von diesen Funktionen |

Für einen lokalen Betrieb ist der Länderfilter am wichtigsten: Wählen Sie Ihr Land und sehen Sie nach, ob Ihre Leistungsseiten Impressionen bekommen oder nur ein alter Blogartikel. Klicks aus Übersichten mit KI und KI-Modus zählt Google laut seiner Dokumentation im normalen Leistungsbericht unter dem Suchtyp „Web“ mit, zusammen mit allen anderen Suchergebnissen. Getrennt ausweisen lassen sie sich dort nicht.

Wie die Search Console den KI-Modus im Einzelnen zählt, beschreibt [Google KI-Modus und Local SEO](https://localdominate.org/blog/google-ai-mode-local-seo-2026#search-console).

> **Einschätzung:** Fehlt der Bericht bei Ihnen, ist das bei kleinen Websites kein Alarmsignal, sondern oft eine Frage der Menge. Prüfen Sie aber, ob Sie die Einstellung für generative KI in der Search Console oder Regeln wie nosnippet versehentlich so gesetzt haben, dass Ihre Seiten ausgeschlossen sind.

## Bing Webmaster Tools: der Bericht AI Performance

Der Bericht AI Performance in den Bing Webmaster Tools zählt, wie oft Ihre Seiten in Microsoft Copilot, in KI-Zusammenfassungen von Bing und bei ausgewählten Partnern als Quelle erscheinen. Microsoft hat ihn im Februar 2026 als öffentliche Vorschau eingeführt und im Juni 2026 um vier Vorschau-Funktionen erweitert.

*Funktionen im Bericht AI Performance (laut Microsoft, Stand Juni 2026)*

| Funktion | Was sie zeigt | Grenze laut Microsoft |
| --- | --- | --- |
| Total Citations | Wie oft Ihre Inhalte im Zeitraum als Quelle angezeigt wurden | Keine Aussage über die Stelle in der Antwort |
| Grounding Queries | Suchbegriffe, mit denen die KI Ihre zitierten Inhalte abgerufen hat | Nur eine Stichprobe |
| Zitierungen je Seite | Welche URLs wie oft zitiert wurden | Keine Aussage über Bedeutung oder Rang |
| Intents | Ordnet Grounding Queries groben Absichten zu, darunter „Local“ | Einteilung durch maschinelles Lernen, bei Nischenthemen teils noch grob |
| Topics | Fasst verwandte Grounding Queries zu Themen zusammen | Wie bei Intents |
| Citation Share | Ihr Anteil an allen Zitierungen für eine bestimmte Grounding Query | Laut Microsoft ein Beobachtungswert, keine Rangliste; Wettbewerber werden nicht genannt |
| Compare | Vergleich mit einem früheren Zeitraum, etwa 30 Tage gegen die 30 Tage davor | Schwankungen können viele Ursachen haben, etwa Modelländerungen |

Für einen lokalen Betrieb lohnt der Blick auf die Absicht „Local“ und auf die Grounding Queries mit Ortsnamen. Erscheint dort zum Beispiel „Zahnarzt Angstpatienten Graz“, sehen Sie, welche Ihrer Seiten dafür zitiert wird. Klicks nennt Microsoft in den Beschreibungen nicht. Einrichtung und Verifizierung der Bing Webmaster Tools erklärt [Bing, Copilot und Local SEO](https://localdominate.org/blog/bing-copilot-local-seo-2026#webmaster-tools).

> **Einschätzung:** Rechnen Sie bei einer kleinen Website mit kleinen Zahlen. Zwei statt fünf Zitierungen in einem Monat sind noch kein Trend.

## Besuche aus KI-Diensten in der Web-Analyse

ChatGPT hängt laut OpenAI an Links in seinen Antworten automatisch utm_source=chatgpt.com an. In Google Analytics finden Sie diese Besuche über die Sitzungsquelle, für andere KI-Dienste nennen die geprüften Dokumentationen keinen solchen Parameter.

1. **Bericht öffnen.** In Google Analytics 4 den Bericht zur Besucherakquisition (englisch „Traffic acquisition“) öffnen und die Dimension für Sitzungsquelle und Medium (englisch „Session source/medium“) wählen. Google nennt diesen Weg in seiner Hilfe zu Kampagnenparametern.
2. **Nach chatgpt.com filtern.** Besuche mit der Quelle chatgpt.com stammen aus Links in ChatGPT. In anderen Analysewerkzeugen heißt das Feld oft Quelle, Verweis oder Kampagnenquelle.
3. **Weitere Verweise ansehen.** Suchen Sie in der Liste der Quellen nach Einträgen, die zu anderen KI-Diensten gehören, etwa perplexity.ai. Das ist unsere Einschätzung, keine dokumentierte Regel dieser Anbieter.
4. **Zielseiten notieren.** Auf welchen Seiten landen diese Besucher? Das zeigt, welche Inhalte ein KI-Dienst für verlinkenswert hält.
5. **Mit Anfragen verbinden.** Erfassen Sie Anrufe, Formulare oder Buchungen als Ereignisse, sehen Sie, ob daraus Anfragen werden.

> **Grenze:** Die Web-Analyse sieht nur Klicks. Viele Menschen lesen eine KI-Antwort, rufen dann direkt an oder fahren vorbei, ohne Ihre Website zu öffnen. Für Klicks aus Übersichten mit KI und KI-Modus beschreibt Google keine eigene Kennzeichnung, sie erscheinen in der Web-Analyse in der Regel als Google-Suche. Wer der Analyse im Einwilligungsbanner nicht zustimmt, fehlt ganz. Fragen Sie deshalb neue Kunden zusätzlich, wie sie auf Sie gekommen sind.

## Server-Logs: Welche KI-Crawler Ihre Seiten lesen

Die Zugriffsprotokolle Ihres Servers zeigen, ob die Suchcrawler und Nutzer-Abrufe der KI-Dienste Ihre Seiten erreichen. Für lokale Betriebe zählen vor allem die Zugriffe für Suche und Nutzerfragen, nicht die Trainings-Crawler. Ob Ihr Betrieb danach genannt wird, zeigen Logs nicht.

*Kennungen, die für Suche und Nutzerfragen stehen (laut Anbieter)*

| Anbieter | Suche | Abruf auf Nutzerwunsch | robots.txt |
| --- | --- | --- | --- |
| OpenAI | OAI-SearchBot | ChatGPT-User | OAI-SearchBot beachtet sie; für ChatGPT-User gilt sie laut OpenAI möglicherweise nicht |
| Perplexity | PerplexityBot | Perplexity-User | Perplexity-User ignoriert sie laut Perplexity in der Regel |
| Anthropic | Claude-SearchBot | Claude-User | Laut Anthropic beachten die Bots robots.txt |
| Google | Googlebot (kein eigener KI-Crawler genannt) | keine eigene Kennung dokumentiert | Google-Extended ist nur eine Steuerkennung ohne eigenen User-Agent |

Ein Abruf durch ChatGPT-User, Perplexity-User oder Claude-User heißt, dass ein Dienst Ihre Seite für eine Nutzerfrage geöffnet hat. Unsere Einschätzung: Das zeigt, welche Seiten bei Kundenfragen eine Rolle spielen, aber nicht, ob die Antwort Sie empfohlen hat. Bei Google sehen Sie nur Googlebot, weil Google für Übersichten mit KI und KI-Modus keinen eigenen Crawler nennt.

User-Agent-Namen lassen sich fälschen. OpenAI, Perplexity und Anthropic veröffentlichen die IP-Bereiche ihrer Crawler als JSON-Dateien, Google beschreibt die Prüfung über DNS-Abfragen und eigene IP-Listen. Wie Sie Logs filtern, Statuscodes lesen und Zugriffe auf Echtheit prüfen, steht ausführlich in [KI-Crawler steuern](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026#logs-pruefen).

> **Praxis:** Wenn Ihr Hoster keine Logs anbietet, fragen Sie danach. Nutzen Sie ein CDN wie Cloudflare, zeigt dessen Dashboard KI-Zugriffe oft übersichtlicher als das Rohprotokoll. Cloudflare beschreibt dafür AI Crawl Control, laut eigener Dokumentation in allen Tarifen verfügbar, mit Crawler-Aktivität und der Angabe, welche Crawler Ihre robots.txt befolgen.

## Tracking-Werkzeuge von Drittanbietern

Kommerzielle Werkzeuge stellen automatisch feste Fragen an mehrere KI-Dienste und zählen, wie oft eine Marke genannt wird. Das spart Zeit, ersetzt aber nicht den Blick auf echte Antworten. Prüfen Sie vor dem Kauf, wie das Werkzeug fragt, von welchem Ort aus und wie viele Wiederholungen es macht.

*Arten von Werkzeugen und ihre Grenzen*

| Art | Was sie leisten | Worauf Sie achten sollten |
| --- | --- | --- |
| Fragen-Tracker für KI-Antworten | Stellen eine Fragenliste regelmäßig an mehrere Dienste und zählen Nennungen und Quellen | Fragen sie über eine Programmierschnittstelle oder wie ein echter Nutzer? Von welchem Standort? Wie oft je Frage? |
| Erweiterungen von SEO-Programmen | Ergänzen bekannte Rankingberichte um Angaben zu KI-Antworten | Prüfen, ob deutsche Fragen mit Ortsangabe und Ihr Land unterstützt werden |
| Log- und CDN-Auswertung | Zeigen Crawler-Zugriffe übersichtlich, teils mit Sperrfunktion | Zeigen Zugriffe, keine Nennungen |
| Eigene Tabelle | Ihre Stichproben in einer festen Vorlage | Kostet Zeit, zeigt dafür die echten Antworten mit Quellen |

Antworten über eine Programmierschnittstelle können von dem abweichen, was ein Nutzer in der App sieht. Ein Werkzeug, das aus einem Rechenzentrum in den USA fragt, sagt wenig über die Antwort für eine Kundin in Linz.

> **Einschätzung:** Für einen Betrieb mit einem Standort reichen meist die eigene Tabelle und die kostenlosen Berichte von Google und Microsoft. Vorsicht bei Werkzeugen, die einen „Sichtbarkeitswert“ ohne offengelegte Methode ausgeben.

## Die Monatsroutine in sechs Schritten

Legen Sie einen festen Tag im Monat fest und arbeiten Sie dieselben sechs Schritte ab: Stichprobe, Search Console, Bing Webmaster Tools, Web-Analyse, Logs und eine kurze Auswertung. Mit etwas Übung dauert das etwa eine Stunde. Wichtig ist die Regelmäßigkeit, nicht die Menge.

1. **Stichprobe.** Fragenliste in den gewählten Diensten abarbeiten, Ergebnisse und Bildschirmfotos ablegen.
2. **Search Console.** Bericht für generative KI-Funktionen öffnen, nach Ihrem Land filtern, die fünf Seiten mit den meisten Impressionen notieren.
3. **Bing Webmaster Tools.** AI Performance öffnen, Zitierungen, wichtigste Grounding Queries mit Ortsbezug und zitierte Seiten notieren.
4. **Web-Analyse.** Besuche mit utm_source=chatgpt.com und weitere KI-Verweise zählen, Zielseiten notieren.
5. **Logs.** Prüfen, ob die Suchcrawler weiter mit Statuscode 200 durchkommen. Ein plötzliches Fehlen deutet oft auf eine neue Sperre im Bot-Schutz.
6. **Auswertung.** Eine Aufgabe für den nächsten Monat festlegen, zum Beispiel eine falsche Angabe korrigieren oder eine fehlende Leistungsseite schreiben.

*Vorlage für Ihre Monatstabelle (Beispielzeilen, fiktiv)*

| Datum | Dienst | Frage | Genannt | Fakten korrekt | Quellen | Notiz |
| --- | --- | --- | --- | --- | --- | --- |
| 06.10.2026 | ChatGPT | Elektriker Notdienst Augsburg am Sonntag | ja | nein, alte Telefonnummer | eigene Website, Branchenportal | Portal korrigieren |
| 06.10.2026 | Google KI-Modus | Elektriker Notdienst Augsburg am Sonntag | nein | entfällt | drei Wettbewerber, ein Verzeichnis | Notdienstseite prüfen |
| 06.10.2026 | Search Console | Impressionen generative KI, Land Deutschland | entfällt | entfällt | Startseite, Seite Notdienst | Vormonat vergleichen |

Die Routine passt in die Messwoche der [monatlichen Local-SEO-Checkliste](https://localdominate.org/blog/local-seo-monthly-checklist#woche-4-messen).

## Ergebnisse auswerten und handeln

Jeder Befund führt zu einer konkreten Aufgabe: Falsche Fakten korrigieren Sie an der zitierten Quelle, fehlende Nennungen deuten auf Lücken auf Ihrer Website oder in Profilen, fehlende Crawler-Zugriffe auf eine technische Sperre. Bewerten Sie Veränderungen erst über mehrere Monate.

*Vom Befund zur Aufgabe*

| Befund | Wahrscheinliche Ursache | Nächster Schritt |
| --- | --- | --- |
| Falsche Telefonnummer oder Öffnungszeit in einer Antwort | Veraltete Angabe auf einer zitierten Seite | [KI-Falschangaben korrigieren](https://localdominate.org/blog/ai-falschangaben-korrigieren-2026) |
| Betrieb wird bei Leistungsfragen nie genannt | Die Leistung steht nicht klar als Text auf einer eigenen Seite | [Website-Inhalte für KI-Suchmaschinen](https://localdominate.org/blog/website-content-ai-suchmaschinen) |
| Andere Quellen beschreiben Sie, die eigene Website nie | Website schwer lesbar oder für Crawler gesperrt | [KI-Crawler steuern](https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026) |
| Angaben weichen zwischen Diensten ab | Unterschiedliche Daten in Profilen und Verzeichnissen | Name, Adresse, Telefon und Zeiten überall angleichen |
| Impressionen steigen, Anfragen nicht | Seiten beantworten die Frage, aber nicht, wie man bucht oder anruft | Kontaktweg und Preisrahmen auf der Seite klarer machen |

> **Einschätzung:** KI-Antworten schwanken auch ohne Ihr Zutun. Microsoft nennt selbst Modelländerungen, Aktualität und konkurrierende Inhalte als Gründe für Veränderungen beim Zitatanteil. Ziehen Sie Schlüsse deshalb erst, wenn sich ein Befund in mehreren Monaten oder mehreren Diensten wiederholt.

Wenn Sie eine neue Seite für eine wichtige Frage schreiben, hilft eine feste Struktur. Eine Vorlage dafür bietet das [GEO-Content-Briefing](https://localdominate.org/blog/geo-content-briefing-vorlage-2026).

## Häufige Fragen

### Kann ich sehen, wie oft ChatGPT meinen Betrieb nennt?

Nicht direkt. OpenAI bietet Website-Betreibern keinen Bericht über Nennungen an. Sie sehen Besuche mit utm_source=chatgpt.com in der Web-Analyse und Abrufe durch OAI-SearchBot und ChatGPT-User in den Logs. Ob und wie Sie genannt werden, zeigen nur eigene Stichproben.

### Zeigt die Search Console Klicks aus Übersichten mit KI?

Nicht getrennt. Der Bericht für generative KI-Funktionen enthält laut Google nur Impressionen. Klicks aus Übersichten mit KI und KI-Modus zählt Google im normalen Leistungsbericht unter dem Suchtyp „Web“ zusammen mit den übrigen Suchergebnissen.

### Wie oft sollte ich KI-Antworten prüfen?

Einmal im Monat genügt für die meisten Betriebe. Häufiger lohnt sich nur nach einer Änderung, etwa einer neuen Telefonnummer. Einzelne Antworten schwanken, deshalb zählt der Verlauf über mehrere Monate.

### Brauche ich ein kostenpflichtiges Tracking-Werkzeug?

Für einen Betrieb mit einem Standort meist nicht. Die Berichte in Search Console und Bing Webmaster Tools sind kostenlos, die Stichprobe kostet nur Zeit. Ein Werkzeug lohnt sich eher bei vielen Standorten, sofern es offenlegt, von welchem Ort und in welcher Sprache es fragt.

### Warum fehlt bei mir der Bericht für generative KI-Funktionen?

Laut Google erscheint der Bericht nicht, wenn Ihre Website zu wenige Impressionen in diesen Funktionen hat oder davon ausgeschlossen ist. Bei kleinen Websites ist das häufig. Prüfen Sie trotzdem, ob Ihre Einstellungen in der Search Console oder Regeln wie nosnippet die Anzeige verhindern.

## Quellen

- [Generative AI performance report (Search)](https://support.google.com/webmasters/answer/16984139), Google Search Console Help
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), Google Search Central
- [Google Search Console AI performance reports and search generative AI control rolling out globally (31. August 2026)](https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-486269), Search Engine Land
- [Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), Microsoft Bing Webmaster Blog
- [New AI Visibility Insights in Bing Webmaster Tools: Intents, Topics, Citation Share, Compare (16. Juni 2026)](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare), Microsoft Bing Blogs
- [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), OpenAI Help Center
- [Search in ChatGPT](https://help.openai.com/en/articles/9237897-search-in-chatgpt), OpenAI Help Center
- [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots), OpenAI Developers
- [Perplexity Crawlers](https://docs.perplexity.ai/guides/bots), Perplexity Docs
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), Claude Help Center
- [Verifying Googlebot and other Google crawlers](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot), Google Search Central
- [Google's common crawlers (Google-Extended)](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), Google Crawling Infrastructure
- [URL builders: Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952), Google Analytics Help
- [AI Crawl Control](https://developers.cloudflare.com/ai-crawl-control/), Cloudflare Docs

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-11. Fehler gefunden? info@localdominate.org
