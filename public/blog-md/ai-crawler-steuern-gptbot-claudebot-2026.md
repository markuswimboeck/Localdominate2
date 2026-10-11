---
title: "KI-Crawler steuern: GPTBot, ClaudeBot, PerplexityBot und Google-Extended richtig einstellen"
slug: ai-crawler-steuern-gptbot-claudebot-2026
url: https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026
canonical: https://localdominate.org/blog/ai-crawler-steuern-gptbot-claudebot-2026
markdown_url: https://localdominate.org/blog-md/ai-crawler-steuern-gptbot-claudebot-2026.md
language: de-DE
published: 2026-08-08
updated: 2026-10-11
reading_time_minutes: 13
category: "KI-Suche"
author: LocalDominate Redaktion
accountable: Markus Wimböck
publisher: LocalDominate
description: "Welche KI-Crawler es gibt und wie Sie sie per robots.txt und Bot-Schutz steuern: geprüfte Tabelle, fertige Beispiele und eine Entscheidungshilfe für Betriebe."
---

# KI-Crawler steuern: GPTBot, ClaudeBot, PerplexityBot und Google-Extended richtig einstellen

Für Inhaber lokaler Betriebe und ihre Webdienstleister, die entscheiden wollen, welche KI-Systeme ihre Website lesen dürfen. Sie bekommen eine geprüfte Übersicht der wichtigen Crawler, fertige Beispiele für die robots.txt, die neuen Schalter bei Cloudflare und einen Weg, echte Zugriffe zu erkennen.

## Die kurze Antwort

KI-Anbieter trennen ihre Zugriffe meist nach Zweck: Suche, Training und Abrufe auf Nutzeranfrage. Wer in KI-Antworten als Quelle erscheinen will, lässt die Such-Crawler wie **OAI-SearchBot**, **Claude-SearchBot** und **PerplexityBot** sowie Googlebot, bingbot und Applebot zu. Das Training sperren Sie getrennt, etwa über GPTBot, ClaudeBot und Google-Extended. Abrufe auf Nutzeranfrage halten sich laut mehreren Anbietern nicht immer an die robots.txt.

## Das Wichtigste in Kürze

- Bei OpenAI, Anthropic und Meta sind Suche und Training über getrennte Crawler steuerbar. Sie können das Training sperren und in der KI-Suche sichtbar bleiben.
- Google-Extended und Applebot-Extended sind Kennungen ohne eigenen Crawler. Auf die normale Suche wirken sie laut Google und Apple nicht.
- Übersichten mit KI und KI-Modus steuert Google-Extended nicht. Dafür gibt es eine eigene Einstellung in der Search Console, laut Google seit dem 31. August 2026 für alle Websites weltweit.
- Abrufe auf Nutzeranfrage durch ChatGPT-User, Perplexity-User, Google-Agent und Meta-ExternalFetcher folgen laut den Anbietern nicht immer der robots.txt.
- Bei Cloudflare sperrt die Option „Block“ für Training auch Googlebot, Bingbot und Applebot. „Disallow AI Training“ lässt die Suche offen.

## Suche, Training, Nutzerabruf: drei Arten von Zugriffen

KI-Anbieter besuchen Websites, um einen Suchindex aufzubauen, um Inhalte für das Training von Modellen zu sammeln oder um eine Seite abzurufen, weil ein Nutzer gerade danach fragt. Für jeden Zweck gibt es meist einen eigenen Namen, den Sie in der robots.txt getrennt behandeln können.

Ein **Such-Crawler** entscheidet mit darüber, ob Ihre Seiten in den Antworten einer KI-Suche als Quelle erscheinen können. Ein **Trainings-Crawler** sammelt Inhalte, die in künftige Modelle einfließen können. Ein **Nutzerabruf** passiert, wenn jemand eine Frage stellt und der Assistent dafür Ihre Seite öffnet.

OpenAI schreibt ausdrücklich, dass die Einstellungen für seine Crawler unabhängig voneinander sind. Auch Anthropic, Perplexity und Meta nutzen je Zweck eigene Namen. Bei Google, Apple und Microsoft liest dagegen derselbe Crawler für Suche und KI. Den größeren Zusammenhang erklärt [Was ist GEO?](https://localdominate.org/blog/was-ist-geo-generative-engine-optimization).

## Die wichtigen KI-Crawler im Überblick

Die Tabelle nennt für acht Anbieter die Namen für die robots.txt, ihren Zweck und was der Anbieter selbst zur robots.txt schreibt. Jede Zeile ist auf der Seite des Anbieters geprüft, Stand 11. Oktober 2026.

*KI-Crawler und Kennungen laut Dokumentation der Anbieter (Stand Oktober 2026)*

| Name in robots.txt | Anbieter | Zweck | robots.txt laut Anbieter |
| --- | --- | --- | --- |
| OAI-SearchBot | OpenAI | Suche in ChatGPT | Wird beachtet, Änderung wirkt nach etwa 24 Stunden |
| GPTBot | OpenAI | Training | Wird beachtet |
| ChatGPT-User | OpenAI | Nutzerabruf | Gilt möglicherweise nicht |
| Claude-SearchBot | Anthropic | Suche in Claude | Wird beachtet |
| ClaudeBot | Anthropic | Training | Wird beachtet, auch Crawl-delay |
| Claude-User | Anthropic | Nutzerabruf | Wird beachtet |
| PerplexityBot | Perplexity | Suche in Perplexity, nicht für Training | Steuerbar, Änderung bis zu 24 Stunden |
| Perplexity-User | Perplexity | Nutzerabruf | Wird in der Regel ignoriert |
| Googlebot | Google | Google Suche mit allen Suchfunktionen, auch Übersichten mit KI und KI-Modus | Wird beachtet |
| Google-Extended | Google | Kein Crawler: Kennung für Gemini-Training und Fundierung in Gemini-Apps und Vertex AI | Nur als Regel; kein Einfluss auf die Google Suche |
| Google-Agent | Google | Nutzerabruf durch Agenten | Wird in der Regel ignoriert; kein eigenes robots.txt-Token dokumentiert |
| Applebot | Apple | Suche in Spotlight, Siri und Safari; Daten können Apples Modelle trainieren | Wird beachtet; ohne eigene Regel gelten die für Googlebot |
| Applebot-Extended | Apple | Kein Crawler: Kennung für das Training von Apples Basismodellen | Nur als Regel; Seiten bleiben in der Apple-Suche |
| bingbot | Microsoft | Bing-Suche; Inhalte aus dem Bing-Index können auch in Copilot erscheinen | Wird beachtet; keine eigene KI-Kennung |
| Meta-ExternalAgent | Meta | Training und Indexierung für Produkte | Sperrbar |
| Meta-WebIndexer | Meta | Suche in Meta AI | Sperrbar; Zulassen hilft laut Meta beim Zitieren |
| Meta-ExternalFetcher | Meta | Nutzerabruf, auch für KI-Agenten | Kann robots.txt umgehen |
| CCBot | Common Crawl | Offenes Web-Archiv, das jeder nutzen kann | Wird beachtet, auch Crawl-delay |

> **Einordnung:** Die letzte Spalte gibt wieder, was der Anbieter schreibt. Google betont selbst, dass die robots.txt Crawler nicht zwingen kann. Ob ein Crawler sich daran hält, sehen Sie nur in Ihren Logs. Seltene Zugriffe wie OAI-AdsBot, der nur Zielseiten von Anzeigen in ChatGPT besucht, fehlen in der Tabelle.

## Google, Apple und Microsoft: ein Crawler für Suche und KI

Google, Apple und Microsoft haben keinen getrennten KI-Such-Crawler: Google-Extended und Applebot-Extended steuern das Training, Google-Extended zusätzlich die Fundierung in den Gemini-Apps. Microsoft bietet statt einer Kennung in der robots.txt die Meta-Tags noarchive und nocache.

### Google

Google-Extended hat laut Google keinen eigenen User-Agent, die Kennung wirkt nur als Regel in der robots.txt. Sie entscheidet, ob Ihre Inhalte für das Training künftiger Gemini-Modelle und für die Fundierung (Grounding) in den Gemini-Apps und in Vertex AI genutzt werden. Auf die Aufnahme in die Google Suche hat sie keinen Einfluss, und sie ist kein Ranking-Signal.

**Übersichten mit KI und KI-Modus steuert Google-Extended nicht.** Sie gehören zur Suche und hängen an Googlebot. Seit dem 31. August 2026 gibt es dafür weltweit eine Einstellung in der Search Console, in Googles englischer Hilfe „Search generative AI“ genannt. Wer seine Website dort ausschließt, verschwindet aus Übersichten mit KI, KI-Modus und den KI-Funktionen in Discover, samt Links. Mehr dazu in [Google AI Overviews und Local SEO](https://localdominate.org/blog/google-ai-overviews-local-seo).

### Apple

Applebot crawlt für die Suche in Spotlight, Siri und Safari, die Daten können laut Apple auch Apples Basismodelle trainieren. Mit einer Sperre für Applebot-Extended widersprechen Sie diesem Training, gesperrte Seiten können weiter in den Suchergebnissen erscheinen. Zum Eintrag in Apple Karten siehe [Apple Business Connect](https://localdominate.org/blog/apple-business-connect-local-seo-2026).

### Microsoft

Microsoft nennt nur bingbot. Mit dem Meta-Tag **noarchive** erscheinen Inhalte laut Bing nicht in Copilot-Antworten und werden nicht für das Training von Microsofts Modellen genutzt. Mit **nocache** zeigt Copilot nur URL, Titel und Ausschnitt. Laut Cloudflare arbeitet Microsoft an einer robots.txt-Regel gegen Training, geplant für Anfang 2027. Mehr in [Bing, Copilot und Local SEO](https://localdominate.org/blog/bing-copilot-local-seo-2026).

## Die Entscheidung für Ihren Betrieb

Für die meisten lokalen Betriebe lohnt es sich, alle Such-Crawler zuzulassen, weil sie mit darüber entscheiden, ob Ihre Seiten in KI-Antworten als Quelle erscheinen können. Ob Sie das Training erlauben, ist eine eigene Grundsatzfrage, und keine Einstellung garantiert eine Nennung.

*Was Sie erreichen wollen und welche Einstellung dazu passt*

| Ihr Ziel | Einstellung | Was Sie beachten sollten |
| --- | --- | --- |
| In KI-Suchen als Quelle erscheinen | OAI-SearchBot, Claude-SearchBot, PerplexityBot und Meta-WebIndexer zulassen; Googlebot, bingbot und Applebot nie sperren | Technische Voraussetzung, keine Garantie für eine Nennung |
| Kein Training mit Ihren Inhalten | GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent und CCBot sperren | Google-Extended sperrt auch die Fundierung in den Gemini-Apps; bei Microsoft geht es nur über Meta-Tags: noarchive schließt das Training aus, nocache beschränkt es auf URL, Titel und Ausschnitt |
| Nicht in Übersichten mit KI und KI-Modus | Einstellung in der Search Console | Entfernt auch Ihre Links aus diesen Flächen |
| Gar keine KI-Nutzung | Alle Such- und Trainingskennungen sperren | Nicht vollständig erreichbar, weil Nutzerabrufe die robots.txt teils übergehen |

> **Einschätzung:** Unsere Empfehlung für Handwerk, Praxen, Gastronomie und Hotels: Suche und Nutzerabrufe offen lassen, Übersichten mit KI nicht abschalten. Beim Training gibt es kein Richtig oder Falsch. Bei OpenAI, Google und Apple steht ausdrücklich in der Dokumentation, dass eine Trainingssperre die Suche nicht berührt. CCBot zählen wir zum Training, weil Common Crawl seine Daten jedem zur Verfügung stellt.

Wie Sie danach prüfen, ob Ihr Betrieb genannt wird, beschreiben [ChatGPT Search für lokale Unternehmen](https://localdominate.org/blog/chatgpt-search-lokale-unternehmen-2026#crawler) und [Perplexity und Claude für lokale Sichtbarkeit](https://localdominate.org/blog/perplexity-claude-lokale-sichtbarkeit).

## Wie Crawler Ihre robots.txt lesen

Die robots.txt liegt im Hauptverzeichnis jeder Domain und Subdomain, und ein Crawler folgt nur der Gruppe, die seinen Namen am genauesten trifft. Hat er eine eigene Gruppe, gelten die Regeln unter „User-agent: *“ für ihn nicht mehr.

- **Ort:** Die Datei gilt nur für den Host, auf dem sie liegt. Eine Subdomain wie shop.ihrbetrieb.de braucht eine eigene robots.txt; das schreiben Google und für seine Bots auch Anthropic.
- **Eine Gruppe je Crawler:** Nach Googles Auslegung des Standards kommen die Regeln unter „User-agent: *“ nicht zu einer eigenen Gruppe hinzu. Wiederholen Sie gemeinsame Sperren wie /admin/ deshalb in jeder eigenen Gruppe.
- **Schreibweise:** Bei Crawler-Namen spielt Groß- und Kleinschreibung keine Rolle, bei Pfaden schon. „/Preise“ und „/preise“ sind zwei Pfade.
- **Wartezeit:** Google speichert die robots.txt in der Regel bis zu 24 Stunden zwischen, OpenAI nennt etwa 24 Stunden, Perplexity und Meta bis zu 24 Stunden.
- **Apple:** Steht Applebot nicht in der Datei, wohl aber Googlebot, folgt Applebot laut Apple den Regeln für Googlebot.

> **Wichtig:** Die robots.txt ist kein Zugriffsschutz. Laut Google kann eine gesperrte Seite trotzdem im Index landen, wenn andere Seiten auf sie verlinken; Privates gehört hinter ein Passwort. Was eine llms.txt leisten kann, steht in [llms.txt für lokale Unternehmen](https://localdominate.org/blog/llms-txt-lokale-unternehmen-2026).

## Fertige Beispiele für die robots.txt

Drei Beispiele decken die häufigsten Wünsche ab: alles offen, Suche ja und Training nein, sowie möglichst wenig KI bei voller Google-Suche. In der Tabelle ist jede Zeile eine Gruppe aus User-agent-Zeile und Regel, getrennt durch eine Leerzeile.

### Beispiel 1: alles offen

Enthält Ihre robots.txt nur die Gruppe „User-agent: *“ mit „Allow: /“ und keine Disallow-Zeilen, dürfen alle Crawler alles lesen. Für KI-Suchen müssen Sie nichts ergänzen.

### Beispiel 2: Suche ja, Training nein

*robots.txt für Sichtbarkeit in KI-Suchen ohne Training*

| User-agent-Zeile | Regel | Wirkung |
| --- | --- | --- |
| User-agent: GPTBot | Disallow: / | Kein Training bei OpenAI |
| User-agent: ClaudeBot | Disallow: / | Kein Training bei Anthropic |
| User-agent: Google-Extended | Disallow: / | Kein Gemini-Training, keine Fundierung in Gemini-Apps; Google Suche unberührt |
| User-agent: Applebot-Extended | Disallow: / | Kein Training von Apples Basismodellen; Apple-Suche unberührt |
| User-agent: Meta-ExternalAgent | Disallow: / | Kein Training und keine Produktindexierung bei Meta |
| User-agent: CCBot | Disallow: / | Keine Aufnahme in das Archiv von Common Crawl |
| User-agent: * | Disallow: /admin/ | Alle anderen, auch die Such-Crawler, lesen alles außer /admin/ |

Ersetzen Sie /admin/ durch Ihre internen Pfade; haben Sie keine, schreiben Sie „Allow: /“. Für Microsoft gibt es keine passende Zeile. Dort bleibt das Meta-Tag noarchive, das Ihre Seiten auch aus Copilot-Antworten nimmt; nocache beschränkt das Training laut Bing auf URL, Titel und Ausschnitt.

### Beispiel 3: möglichst wenig KI, Google-Suche bleibt

Ergänzen Sie Beispiel 2 um je eine Gruppe mit „Disallow: /“ für OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Meta-WebIndexer und Meta-ExternalFetcher. Damit nehmen Sie sich weitgehend aus den Suchfunktionen von ChatGPT, Claude, Perplexity und Meta AI heraus; reine Navigationslinks in ChatGPT bleiben laut OpenAI möglich. ChatGPT-User, Perplexity-User und Meta-ExternalFetcher halten die Sperre laut den Anbietern unter Umständen nicht ein.

> **Einschätzung:** Für einen lokalen Betrieb halten wir Beispiel 3 selten für sinnvoll. Wer Kunden auch über KI-Assistenten gewinnen will, nimmt sich damit die technische Grundlage.

## Bot-Schutz bei Hoster und CDN: das Beispiel Cloudflare

Firewalls und CDN-Dienste können Crawler abweisen, bevor diese Ihre robots.txt lesen. Wählen Sie bei Cloudflare für Training „Disallow AI Training“ statt „Block“, denn „Block“ sperrt seit dem 15. September 2026 auch Googlebot, Bingbot und Applebot.

Cloudflare hat im Juli 2026 drei Kategorien eingeführt, die die alte Einstellung „Block AI bots“ ablösen: **Search** für Crawler, die Inhalte für spätere Antworten erfassen, **Training** für Crawler, die Modelle trainieren, und **Agent** für Abrufe in Echtzeit im Auftrag einer Person. Die Schalter gibt es laut Cloudflare in allen Tarifen.

*Optionen für die Kategorie Training bei Cloudflare (Stand Oktober 2026)*

| Option | Was laut Cloudflare passiert |
| --- | --- |
| Allow | Keine Sperre |
| Disallow AI Training | Widerspruch gegen Training in der robots.txt, alle übrigen Trainings-Crawler werden gesperrt; Googlebot, Bingbot und Applebot bleiben für die Suche zugelassen. Bing erreicht der Widerspruch laut Cloudflare erst, wenn Microsoft ihn unterstützt, geplant für Anfang 2027 |
| Block | Sperrt auch Googlebot, Bingbot und Applebot, die Suche eingeschlossen |
| Block on pages with ads | Sperre nur auf Seiten mit Werbung, dort aber auch für Googlebot, Bingbot und Applebot und damit auch für die Suche |

Für neue Domains ohne Werbung schlägt Cloudflare vor, alles zu erlauben. Mit Werbung steht Training auf „Disallow AI Training“ und Agent auf „Block on pages with ads“. Bestehende Einstellungen bleiben laut Cloudflare weitgehend erhalten, frühere Trainingssperren wurden auf „Disallow AI Training“ umgestellt. Wer die alte Einstellung „Block AI bots“ genutzt hat, hat seitdem zusätzlich Agent auf „Block on pages with ads“.

1. **Einstellungen öffnen.** Im Cloudflare-Dashboard in den Sicherheitseinstellungen die Richtlinien für KI-Bots aufrufen.
2. **Search und Agent prüfen.** Search auf Allow. Agent nach unserer Einschätzung ebenfalls, weil hier Abrufe ankommen, die ein Interessent gerade selbst ausgelöst hat.
3. **Training bewusst wählen.** „Allow“ oder „Disallow AI Training“. „Block“ nur, wenn Sie auch aus Google, Bing und der Apple-Suche verschwinden wollen.
4. **robots.txt live ansehen.** Cloudflare kann Zeilen in Ihre robots.txt einfügen. Rufen Sie die Datei im Browser auf, um zu sehen, was Crawler tatsächlich lesen.

> **Einschätzung:** Auch andere Hoster, Website-Baukästen und Sicherheits-Plugins haben Schalter gegen Bots, die leicht übersehen werden, weil sie nicht in der robots.txt stehen. Fragen Sie Ihren Dienstleister, welche Bots seine Firewall abweist.

## Echte Crawler von Fälschungen unterscheiden

Den Namen im User-Agent kann jeder fälschen, deshalb prüfen Sie die IP-Adresse gegen die Liste des Anbieters oder per Reverse-DNS. Anthropic veröffentlicht derzeit keine IP-Bereiche und warnt, dass Sperren nach IP-Adresse nicht zuverlässig wirken, weil die Bots dann Ihre robots.txt nicht lesen können.

*So prüfen Sie, ob ein Zugriff wirklich vom Anbieter kommt*

| Anbieter | Prüfweg laut Anbieter |
| --- | --- |
| OpenAI | IP-Listen je Crawler: openai.com/searchbot.json, openai.com/gptbot.json, openai.com/chatgpt-user.json |
| Anthropic | Keine IP-Listen; IP-Sperren können verhindern, dass die Bots Ihre robots.txt lesen |
| Perplexity | perplexity.com/perplexitybot.json und perplexity.com/perplexity-user.json; Firewall-Regeln sollen Name und IP kombinieren |
| Google | Reverse-DNS auf googlebot.com, google.com oder googleusercontent.com, dann Forward-DNS auf dieselbe IP; alternativ IP-Listen wie common-crawlers.json |
| Apple | Reverse-DNS auf *.applebot.apple.com oder search.developer.apple.com/applebot.json |
| Microsoft | Reverse-DNS auf search.msn.com, dann Forward-DNS; laut Fachpresse zusätzlich bing.com/toolbox/bingbot.json |
| Meta | IP-Bereiche des Netzes AS32934, die Meta per whois-Abfrage nennt |
| Common Crawl | Reverse-DNS auf crawl.commoncrawl.org oder index.commoncrawl.org/ccbot.json; Common Crawl warnt vor gefälschten CCBots |

Die Listen ändern sich, Perplexity empfiehlt deshalb automatische Aktualisierungen der Firewall-Regeln. Nach unserer Einschätzung lohnt die Prüfung vor allem, wenn Sie bestimmte Crawler per Firewall ausdrücklich durchlassen.

## Zugriffe in den Server-Logs prüfen

Ob ein Crawler Ihre Seiten wirklich liest, zeigen nur die Zugriffsprotokolle von Server oder CDN. Filtern Sie nach den Namen aus der Tabelle, prüfen Sie die Statuscodes und gleichen Sie verdächtige Zugriffe mit den IP-Listen ab.

1. **Protokolle besorgen.** Die Zugriffsprotokolle (Access-Logs) finden Sie meist im Kundenbereich Ihres Hosters. Bei einem CDN sehen Sie abgewiesene Abrufe oft nur in dessen Protokoll.
2. **Nach Namen filtern.** Suchen Sie im Feld User-Agent nach den Namen aus der Tabelle, etwa „GPTBot/1.4“. Google-Extended und Applebot-Extended tauchen nicht auf, weil sie keine Crawler sind.
3. **Statuscodes ansehen.** 200 heißt ausgeliefert. 403 oder 429 bei einem Crawler, den Sie zulassen wollen, deutet auf eine Sperre durch Firewall oder Bot-Schutz.
4. **Echtheit prüfen und wiederholen.** Verdächtige Zugriffe mit den Prüfwegen oben abgleichen. Nach jeder Änderung einige Tage warten und erneut nachsehen.

Die Logs zeigen den Zugriff, nicht die Sichtbarkeit. Ob Ihr Betrieb genannt wird, prüfen Sie mit festen Testfragen, wie in [KI-Zitate überwachen](https://localdominate.org/blog/ai-zitat-monitoring-local-seo-2026) beschrieben. Bing zeigt Zitate in Copilot im Bericht „AI Performance“ der Bing Webmaster Tools. Weitere Punkte stehen in der [Checkliste zur KI-Sichtbarkeit](https://localdominate.org/blog/ai-visibility-checklist).

## Häufige Fragen

### Verschwinde ich aus Google, wenn ich Google-Extended sperre?

Nein. Google-Extended hat laut Google keinen Einfluss auf die Aufnahme in die Google Suche und ist kein Ranking-Signal. Die Kennung steuert das Training künftiger Gemini-Modelle und die Fundierung in den Gemini-Apps und in Vertex AI.

### Kann ich ChatGPT über die robots.txt vollständig aussperren?

Nicht vollständig. OAI-SearchBot und GPTBot beachten die robots.txt laut OpenAI, für ChatGPT-User gelten die Regeln möglicherweise nicht, weil ein Nutzer den Abruf auslöst. Eine harte Sperre geht nur über Firewall oder CDN.

### Muss ich jeden KI-Crawler einzeln erlauben?

Nein. Ein Crawler ohne eigene Gruppe folgt der Gruppe „User-agent: *“. Sperrt diese nichts, darf er alles lesen.

### Sperrt Cloudflare KI-Crawler automatisch?

Für neue Domains ohne Werbung schlägt Cloudflare vor, alles zu erlauben, bei Websites mit Werbung sind Training und Agenten eingeschränkt. Bestehende Einstellungen bleiben erhalten, deshalb lohnt ein Blick ins Dashboard.

### Wie schnell wirkt eine Änderung an der robots.txt?

Google, OpenAI, Perplexity und Meta nennen bis zu etwa 24 Stunden, bis eine neue robots.txt gelesen ist. Bis sich Antworten ändern, kann es länger dauern. Für seine KI-Funktionen schreibt Google, dass erneutes Crawling einige Tage bis mehrere Monate dauern kann.

## Quellen

- [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots), OpenAI Developers
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.claude.com/en/articles/8896518), Claude Help Center (Anthropic)
- [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md), Perplexity Docs
- [List of Google's common crawlers (Googlebot, Google-Extended)](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), Google Search Central
- [List of Google user-triggered fetchers (Google-Agent)](https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent), Google Search Central
- [Verify requests from Google crawlers and fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests), Google Search Central
- [How Google interprets the robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec), Google Search Central
- [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro), Google Search Central
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), Google Search Central
- [Search generative AI control](https://support.google.com/webmasters/answer/16908024), Search Console-Hilfe
- [About Applebot](https://support.apple.com/en-euro/119829), Apple Support
- [Announcing new options for webmasters to control usage of their content in Bing Chat (2023)](https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat), Bing Webmaster Blog
- [Introducing AI Performance in Bing Webmaster Tools Public Preview (Februar 2026)](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), Bing Webmaster Blog
- [How to Verify that Bingbot is Bingbot](https://blogs.bing.com/webmaster/August-2012/How-to-Verify-that-Bingbot-is-Bingbot/), Bing Webmaster Blog
- [Bing Adds GEO to Official Guidelines, Expands AI Abuse Definitions (Februar 2026)](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442), Search Engine Journal
- [BingBot's IP Addresses in JSON File Officially from Microsoft Bing (2021)](https://seroundtable.com/bingbots-ip-addresses-32428.html), Search Engine Roundtable
- [Meta Web Crawlers](https://developers.facebook.com/docs/sharing/webmasters/web-crawlers), Meta for Developers
- [CCBot](https://commoncrawl.org/ccbot), Common Crawl
- [Frequently Asked Questions](https://commoncrawl.org/faq), Common Crawl
- [Have it both ways: stay discoverable in search while disallowing AI training (15. September 2026)](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/), Cloudflare Blog
- [Your site, your rules: new AI traffic options for all customers (1. Juli 2026)](https://blog.cloudflare.com/content-independence-day-ai-options/), Cloudflare Blog
- [Block AI Bots (Stand 1. Juli 2026, vor der Änderung vom 15. September 2026)](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/), Cloudflare Docs

---

LocalDominate Redaktion, fachlich verantwortet von Markus Wimböck. Stand: 2026-10-11. Fehler gefunden? info@localdominate.org
