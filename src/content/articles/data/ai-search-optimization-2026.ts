import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-search-optimization-2026",
  lang: "de",
  seoTitle: "KI-Suche 2026: Was sich in einem Jahr geändert hat",
  seoDescription:
    "Zeitleiste der KI-Suche von Oktober 2025 bis Oktober 2026: was Google, ChatGPT, Bing und Apple geändert haben, was in DACH gilt und was ausgeblieben ist.",
  h1: "KI-Suche 2026: Was sich zwischen Oktober 2025 und Oktober 2026 geändert hat und was es für lokale Betriebe bedeutet",
  kicker: "KI-Suche",
  lead:
    "Ein Lagebericht für Inhaber lokaler Betriebe in Deutschland, Österreich und der Schweiz. Sie finden eine datierte Zeitleiste der wichtigsten Änderungen in der KI-Suche mit dem Gebiet, für das sie gelten, dazu das, was angekündigt, aber hier nicht angekommen ist, und was daraus für Ihre Arbeit folgt.",
  answer:
    "Zwischen Oktober 2025 und Oktober 2026 startete der KI-Modus in Deutschland, Österreich und der Schweiz, Google veröffentlichte einen Leitfaden für KI-Funktionen und eigene Messdaten in der Search Console, und OpenAI kündigte Anzeigen in ChatGPT auch für Deutschland und Österreich an. Viele neue Funktionen, etwa Buchen im KI-Modus oder Ask Maps, gibt es in DACH noch nicht. Die Grundlagen der lokalen Suche bleiben gültig.",
  takeaways: [
    "Der KI-Modus ist seit dem 8. Oktober 2025 in Deutschland, Österreich und der Schweiz verfügbar. Restaurantbuchungen darin gibt es laut Google bisher nur in den USA und in Großbritannien.",
    "Google sagt seit Mai 2026 ausdrücklich: Für Übersichten mit KI und den KI-Modus braucht es keine besonderen Dateien und kein spezielles Markup. Seit Juni 2026 steht dort auch, dass die Google-Suche llms.txt ignoriert.",
    "Seit dem 31. August 2026 zeigt die Search Console allen Websites Impressionen in Übersichten mit KI und im KI-Modus.",
    "Die alte Funktion für Fragen und Antworten baut Google weitgehend ab, die Schnittstelle ist seit November 2025 abgeschaltet. Ask Maps und die Profilverwaltung mit Gemini gibt es in Deutschland nicht.",
    "Kein Anbieter garantiert eine Platzierung in KI-Antworten, und keiner hat Rangfaktoren dafür veröffentlicht.",
  ],
  publishedAt: "2026-02-16",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "ueberblick",
      title: "Das Jahr in Kürze",
      answer:
        "Das Jahr brachte neue KI-Funktionen für Suchende, klarere Regeln der Anbieter für Websites und erste Messdaten für Betreiber. Für DACH zählen vor allem der KI-Modus, die neuen Berichte in Search Console und Bing sowie der Wegfall der Fragen im Unternehmensprofil.",
      blocks: [
        {
          t: "table",
          caption: "Stand Oktober 2025 und Stand Oktober 2026 im Vergleich",
          head: ["Bereich", "Oktober 2025", "Oktober 2026"],
          rows: [
            ["Google-Suche in DACH", "Übersicht mit KI seit März 2025; KI-Modus startet am 8. Oktober", "Übersicht mit KI laut Google-Hilfe für alle Nutzer; KI-Modus verfügbar"],
            ["Regeln von Google", "Seite „AI features and your website“", "Zusätzlich ein Leitfaden vom Mai 2026 zu llms.txt, Markup und GEO"],
            ["Messung", "Keine eigenen KI-Berichte", "KI-Bericht in der Search Console, „AI Performance“ in Bing"],
            ["Unternehmensprofil", "Fragen und Antworten noch vorhanden", "Schnittstelle abgeschaltet, Antworten in Maps automatisch"],
            ["ChatGPT", "Suche ohne Anzeigen", "Anzeigen laut OpenAI seit Ende August 2026 in 31 europäischen Märkten; Reservierungen über OpenTable weltweit"],
          ],
        },
        {
          t: "p",
          text: "Diese Seite ist ein Lagebericht mit Datum. Was Sie in den einzelnen Diensten konkret tun, steht in den verlinkten Fachartikeln. Den praktischen Gesamtüberblick gibt [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen), die Änderungen der lokalen Suche ohne KI-Schwerpunkt fasst [Lokale Suchmaschinenoptimierung 2026](/blog/lokale-suchmaschinenoptimierung-2026) zusammen.",
        },
      ],
    },
    {
      id: "zeitleiste",
      title: "Die Zeitleiste von Oktober 2025 bis Oktober 2026",
      answer:
        "Die Tabelle nennt jede Änderung mit Datum und dem Gebiet, für das der Anbieter sie angekündigt hat. Viele Neuerungen starteten in den USA; für DACH gilt nur, was ausdrücklich genannt ist.",
      blocks: [
        {
          t: "table",
          caption: "Datierte Änderungen in der KI-Suche (Stand 11. Oktober 2026)",
          head: ["Datum", "Änderung", "Gebiet laut Quelle"],
          rows: [
            ["3. Okt. 2025", "Bing Places zieht nach bing.com/forbusiness um", "Keine Länderliste"],
            ["8. Okt. 2025", "KI-Modus startet in mehr als 40 weiteren Ländern", "Deutschland, Österreich, Schweiz"],
            ["3. Nov. 2025", "Schnittstelle für Fragen und Antworten im Unternehmensprofil abgeschaltet", "Allgemein"],
            ["18. Nov. 2025", "Restaurantreservierungen im KI-Modus für alle Nutzer, Tickets und Termine im Test über Search Labs", "Nur USA"],
            ["19. Nov. 2025", "Google Maps zeigt Tipps, die Gemini aus Rezensionen erstellt", "Zuerst USA; laut Fachpresse 2026 auch Deutschland und Österreich"],
            ["9. Dez. 2025", "EU-Kommission eröffnet Kartellverfahren zu Inhalten in Übersicht mit KI und KI-Modus", "EU"],
            ["9. Feb. 2026", "OpenAI testet Anzeigen in ChatGPT", "USA"],
            ["10. Feb. 2026", "Bing Webmaster Tools: „AI Performance“ als öffentliche Vorschau", "Keine Einschränkung genannt"],
            ["12. März 2026", "Ask Maps startet", "USA und Indien"],
            ["10. Apr. 2026", "Restaurantbuchung im KI-Modus", "Großbritannien"],
            ["14. Apr. 2026", "Apple Business ersetzt Apple Business Connect", "Mehr als 200 Länder und Regionen"],
            ["7. Mai 2026", "FAQ-Rich-Results erscheinen nicht mehr", "Google-Suche allgemein"],
            ["15. Mai 2026", "Google-Leitfaden zu generativen KI-Funktionen", "Allgemein"],
            ["15. Juni 2026", "Klarstellung: Die Google-Suche ignoriert llms.txt", "Allgemein"],
            ["10. Aug. 2026", "ChatGPT sucht Restaurantreservierungen", "OpenTable weltweit, Resy in den USA, Yelp in den USA und Kanada"],
            ["18. Aug. 2026", "Anzeigen in ChatGPT für 31 europäische Märkte angekündigt", "Unter anderem Deutschland und Österreich"],
            ["31. Aug. 2026", "Search Console: KI-Bericht und Ausschluss-Einstellung für alle Websites", "Weltweit"],
            ["15. Sep. 2026", "Cloudflare trennt bei KI-Crawlern Suche und Training", "Cloudflare-Kunden"],
          ],
        },
      ],
    },
    {
      id: "google",
      title: "Google: KI-Modus in DACH und klare Regeln für Websites",
      answer:
        "Die größte Änderung für DACH war der Start des KI-Modus am 8. Oktober 2025. Ebenso wichtig ist Googles Leitfaden vom Mai 2026, laut dem Optimierung für KI-Funktionen normale Suchmaschinenoptimierung ist und keine besonderen Dateien oder Markups braucht.",
      blocks: [
        {
          t: "p",
          text: "Der KI-Modus beantwortet Fragen im Gespräch und teilt sie laut Google in Unterthemen auf, zu denen gleichzeitig viele Suchanfragen gestellt werden. Die Übersicht mit KI gibt es in DACH seit März 2025, zum Start nur für angemeldete Nutzer ab 18 Jahren. Die Google-Hilfe nennt heute Deutschland, Österreich, die Schweiz und Liechtenstein für alle Nutzer. Einzelheiten stehen in [Übersicht mit KI und Local SEO](/blog/google-ai-overviews-local-seo) und [KI-Modus und Local SEO](/blog/google-ai-mode-local-seo-2026).",
        },
        {
          t: "h3",
          text: "Was der Leitfaden vom Mai 2026 klärt",
        },
        {
          t: "ul",
          items: [
            "**Keine Zusatzdateien:** Sie müssen laut Google keine KI-Textdateien, Markups oder Markdown-Versionen anlegen. Seit dem 15. Juni 2026 steht dort, dass die Suche llms.txt ignoriert. Mehr in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026).",
            "**Strukturierte Daten** sind für die KI-Suche nicht erforderlich, bleiben aber für andere Darstellungen nützlich.",
            "**GEO ist SEO:** Optimierung für generative KI-Suche sei Optimierung für das Sucherlebnis und damit weiterhin SEO.",
            "**Unternehmensprofil:** Ein Google-Unternehmensprofil kann laut Leitfaden helfen, dass Leistungen in KI-Antworten sichtbar sind.",
            "**Keine Abkürzungen:** Kein externes Werkzeug hat Zugriff auf Googles Ranking- oder KI-Systeme, und unechte Erwähnungen im Netz helfen weniger, als es scheint.",
          ],
        },
        {
          t: "p",
          text: "Weggefallen sind die FAQ-Rich-Results: Sie erscheinen seit dem 7. Mai 2026 nicht mehr. Häufige Fragen auf Ihrer Website bleiben als normaler Inhalt sinnvoll, nur die besondere Darstellung fehlt. Seit April 2026 in allen Sprachen verfügbar ist die Funktion „bevorzugte Quellen“, mit der Nutzer eine Website markieren können; seit Mai 2026 können solche Websites auch im KI-Modus und in Übersichten mit KI ein Kennzeichen „bevorzugt“ erhalten. Unsere Einschätzung: Für Nachrichtenseiten ist das wichtiger als für einen Handwerksbetrieb oder eine Praxis.",
        },
      ],
    },
    {
      id: "messung",
      title: "Messung: Erste echte Zahlen von Google und Microsoft",
      answer:
        "Seit dem 31. August 2026 zeigt die Search Console allen Websites, wie oft Links zu ihnen in Übersichten mit KI und im KI-Modus erschienen, und Microsoft zeigt seit Februar 2026 Zitate in Copilot. Klicks aus KI-Antworten weist keiner der beiden Berichte gesondert aus.",
      blocks: [
        {
          t: "table",
          caption: "Neue Berichte für KI-Sichtbarkeit",
          head: ["Bericht", "Seit", "Was er zeigt", "Grenzen"],
          rows: [
            ["Search Console, Bericht für generative KI", "Juni 2026 für einen Teil der Websites (laut Fachpresse), 31. August 2026 für alle", "Impressionen in Übersichten mit KI und KI-Modus nach Seite, Land, Datum, Gerät", "Laut Hilfe keine Klicks, keine Daten aus Search Labs"],
            ["Search Console, Einstellung „Search generative AI“", "31. August 2026", "Ausschluss der Website aus KI-Funktionen innerhalb von ein bis zwei Tagen", "Kein Einfluss auf KI-Training, kein Rankingsignal für die übrige Suche"],
            ["Bing Webmaster Tools, AI Performance", "10. Februar 2026, öffentliche Vorschau", "Zitate in Copilot und KI-Zusammenfassungen in Bing; Suchanfragen als Stichprobe", "Laut Microsoft keine Aussage über Ranking oder Autorität"],
          ],
        },
        {
          t: "p",
          text: "Für ChatGPT gibt es keinen solchen Bericht; Besuche erkennen Sie am Parameter utm_source=chatgpt.com in der Web-Analyse. Wie Sie die Berichte mit eigenen Stichproben verbinden, zeigt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Den Ausschluss aus den KI-Funktionen halten wir für lokale Betriebe selten für sinnvoll, weil Wettbewerber weiter genannt werden können. Kleine Websites sehen im Bericht oft nichts: Laut Google fehlt er meist, wenn eine Website zu wenige Impressionen in KI-Funktionen hat.",
        },
      ],
    },
    {
      id: "maps-und-profil",
      title: "Google Maps und Unternehmensprofil",
      answer:
        "Die alte Funktion für Fragen und Antworten im Unternehmensprofil baut Google weitgehend ab; Kundenfragen in Maps bekommen laut Google eine sofortige Antwort, die auf Ihren Antworten und passenden Rezensionen beruht. Die Profilverwaltung mit Gemini ist im Europäischen Wirtschaftsraum nicht verfügbar, und Ask Maps nennt Google für Deutschland bisher nicht.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Fragen und Antworten:** Die Schnittstelle wurde am 3. November 2025 abgeschaltet. Im Dezember 2025 beschrieb ein Google-Mitarbeiter die neue sofortige Antwort für Kunden in Maps.",
            "**Tipps mit Gemini:** Seit November 2025 in den USA. Fachmedien berichteten im Juni 2026 von Tipps bei Restaurants in Hannover und im Juli 2026 von der Verfügbarkeit in Österreich. Eine Google-Ankündigung für DACH haben wir nicht gefunden.",
            "**Ask Maps:** Start im März 2026 in den USA und Indien, im August 2026 in sechs weiteren Ländern und laut Google in über 150 Ländern auf Englisch. Deutschland wird laut onlinemarketing.de nicht aufgeführt.",
            "**Profil mit Gemini verwalten:** Laut Google-Hilfe nicht im Europäischen Wirtschaftsraum und nicht in Großbritannien. Ob die Funktion in der Schweiz nutzbar ist, haben wir nicht geprüft.",
            "**KI-Vorschläge für Antworten auf Rezensionen:** Im März 2026 als begrenzter Test in den USA, Brasilien und Indien gesehen, laut Search Engine Land nicht breit in Europa.",
          ],
        },
        {
          t: "p",
          text: "Die Zusammenfassungen und Tipps in Maps entstehen aus Rezensionen. Wer regelmäßig echte Bewertungen bekommt und sachlich antwortet, liefert das Material dafür: alle Kunden fragen, nichts dafür anbieten, nicht vorab filtern. Welche Profilfelder Sie pflegen sollten, steht in [Unternehmensprofil und KI 2026](/blog/unternehmensprofil-ki-funktionen-2026#welche-felder).",
        },
        {
          t: "note",
          label: "Veralteter Ratschlag",
          text: "Anleitungen, die empfehlen, eigene Fragen im Profil anzulegen und zu beantworten, sind überholt. Beantworten Sie häufige Fragen auf Ihrer Website, wo jede Suchmaschine und jedes KI-System sie lesen kann.",
        },
      ],
    },
    {
      id: "chatgpt-bing-apple",
      title: "ChatGPT, Bing und Apple",
      answer:
        "ChatGPT nutzt seit Juni 2026 den Standort bei lokalen Fragen besser, sucht seit August 2026 Restaurantreservierungen und zeigt Anzeigen, die OpenAI im August 2026 auch für Deutschland und Österreich angekündigt hat. Microsoft und Apple haben ihre Plattformen für Firmeneinträge neu aufgestellt.",
      blocks: [
        {
          t: "p",
          text: "Laut OpenAI kann ChatGPT seit dem 10. August 2026 freie Tische suchen: mit OpenTable weltweit, mit Resy in den USA und mit Yelp in den USA und Kanada. Im Juli 2026 berichtete Axios, dass Yelp Bewertungen, Fotos und Firmendaten an OpenAI lizenziert; Länder nennt der Bericht nicht. Eine Platzierung in der Suche garantiert OpenAI weiterhin nicht. Was OpenAI zu lokalen Ergebnissen dokumentiert, steht in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026).",
        },
        {
          t: "p",
          text: "Anzeigen testet OpenAI seit dem 9. Februar 2026 in den USA, in Großbritannien führt OpenAI sie seit Juni 2026 ein. Am 18. August 2026 kündigte OpenAI sie für 31 europäische Märkte an, darunter Deutschland und Österreich. Die Ankündigung nennt nur neun der 31 Märkte namentlich, die Schweiz ist nicht darunter. Anzeigen sehen nur Nutzer der Tarife Free und Go, sie sind als gesponsert gekennzeichnet und beeinflussen laut OpenAI die Antworten nicht. Personalisierte Anzeigen gibt es im EWR und in der Schweiz zunächst nicht.",
        },
        {
          t: "p",
          text: "Bing Places läuft seit dem 3. Oktober 2025 unter bing.com/forbusiness, mit verbessertem Import aus Google; Einzelheiten in [Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026). In der Ankündigung von „AI Performance“ betont Microsoft, dass korrekte Firmendaten bei ortsbezogenen KI-Antworten besonders wichtig sind. Laut Search Engine Journal nennen Bings Richtlinien seit Februar 2026 GEO ausdrücklich und halten fest, dass GEO keine Zitate garantiert. Apple hat Apple Business Connect am 14. April 2026 durch Apple Business ersetzt, bestehende Daten wurden übernommen.",
        },
      ],
    },
    {
      id: "crawler-und-regulierung",
      title: "Crawler, Hoster und Regulierung",
      answer:
        "Technisch wichtig war vor allem Cloudflare: Seit dem 15. September 2026 trennt Cloudflare Suche und Training deutlicher, und die Einstellung „Block“ kann jetzt auch Such-Crawler wie den Googlebot aussperren. Politisch läuft seit Dezember 2025 ein Kartellverfahren der EU-Kommission zur Nutzung von Inhalten in Googles KI-Funktionen.",
      blocks: [
        {
          t: "p",
          text: "Viele kleine Websites liegen hinter Cloudflare, oft ohne dass der Inhaber es weiß. Laut Cloudflare schließt die neue Einstellung „Disallow AI Training“ das Training über Google-Extended und Applebot-Extended aus, die Suche bleibt erlaubt; für Bing ist das erst für Anfang 2027 geplant. Gleichzeitig gilt die Einstellung „Block“ jetzt auch für Crawler, die Suche und KI gemeinsam bedienen. Wer sie wählt, kann damit auch die Suche sperren. Wie Sie das prüfen, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026#cdn-firewall).",
        },
        {
          t: "p",
          text: "Die EU-Kommission prüft seit dem 9. Dezember 2025, ob Google Inhalte von Websites für Übersicht mit KI und KI-Modus nutzt, ohne angemessene Vergütung und ohne dass Betreiber widersprechen können, ohne den Zugang zur Suche zu verlieren. Die Eröffnung nimmt laut Kommission das Ergebnis nicht vorweg. Einen Abschluss haben wir bis zum 11. Oktober 2026 nicht gefunden.",
        },
      ],
    },
    {
      id: "was-nicht-passiert-ist",
      title: "Was in DACH nicht angekommen ist",
      answer:
        "Buchen im KI-Modus, Ask Maps, die Profilverwaltung mit Gemini und Anzeigen innerhalb der Übersicht mit KI gibt es in Deutschland bisher nicht. Ebenfalls nicht passiert: Kein Anbieter hat Rangfaktoren für KI-Antworten veröffentlicht oder eine Platzierung zugesagt.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Erwartungen und der Stand am 11. Oktober 2026",
          head: ["Erwartung", "Stand laut Quellen"],
          rows: [
            ["„Der KI-Modus bucht bald Tische in Deutschland“", "Restaurantbuchung gibt es laut Google in den USA und in Großbritannien. Für DACH haben wir keine Ankündigung gefunden."],
            ["„Ask Maps kommt 2026 nach Deutschland“", "Im August 2026 nicht unter den neuen Ländern; ein Datum für die EU gibt es nicht."],
            ["„Google zeigt Anzeigen in der Übersicht mit KI“", "Laut Google-Ads-Hilfe nur auf Englisch in zwölf Ländern, nicht in DACH."],
            ["„Mit llms.txt kommt man in die KI-Suche“", "Die Google-Suche ignoriert llms.txt laut Google ausdrücklich."],
            ["„Für KI braucht man spezielles Schema“", "Laut Google gibt es kein besonderes Markup für KI-Funktionen."],
            ["„Platzierung in KI-Antworten lässt sich kaufen“", "Google, Microsoft und OpenAI garantieren keine Platzierung. ChatGPT-Anzeigen sind getrennt gekennzeichnet."],
          ],
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels nannte ohne Quelle Anteile von Suchen mit Übersicht mit KI und Klickverluste und empfahl FAQ- und HowTo-Markup sowie llms.txt. Diese Angaben haben wir gestrichen. Belegte Zahlen zu Klicks aus KI-Antworten für DACH haben wir nicht gefunden.",
        },
      ],
    },
    {
      id: "was-es-bedeutet",
      title: "Was das für Ihren Betrieb bedeutet",
      answer:
        "Unsere Einschätzung: Das Jahr hat die Arbeit nicht umgekrempelt, sondern bestätigt, denn lesbare Seiten, ein gepflegtes Unternehmensprofil, einheitliche Daten und echte Bewertungen bleiben die Grundlage. Neu ist, dass Sie die Wirkung jetzt teilweise messen können.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Zugriff prüfen", text: "Robots.txt und Bot-Einstellungen beim Hoster oder bei Cloudflare kontrollieren, damit die Such-Crawler Ihre Seiten lesen dürfen." },
            { title: "Berichte einrichten", text: "Search Console und Bing Webmaster Tools verbinden und die KI-Berichte einmal im Monat ansehen." },
            { title: "Profile abgleichen", text: "Google-Unternehmensprofil, Bing Places und Apple Business auf denselben Stand bringen." },
            { title: "Fragen auf die Website holen", text: "Was früher im Profil unter Fragen und Antworten stand, als kurze Antworten auf die passenden Leistungsseiten schreiben." },
            { title: "Stichproben festhalten", text: "Monatlich dieselben Fragen mit Ortsangabe in Google, ChatGPT und Copilot stellen und das Ergebnis mit Datum notieren." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Restaurants und Hotels sollten ihre Einträge bei Reservierungspartnern wie OpenTable aktuell halten, weil ChatGPT OpenTable weltweit nutzt und Google im KI-Modus anderswo über Partner bucht. Ob das in DACH kommt, ist offen.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Seit wann gibt es den KI-Modus von Google in Deutschland?",
      a: "Seit dem 8. Oktober 2025, gleichzeitig in Österreich und der Schweiz, dort auch auf Französisch und Italienisch. Die Übersicht mit KI gibt es in DACH bereits seit März 2025.",
    },
    {
      q: "Brauche ich wegen der KI-Suche eine llms.txt oder spezielles Schema?",
      a: "Für Google nicht. Laut Googles Leitfaden sind keine besonderen Dateien oder Markups nötig, und die Suche ignoriert llms.txt. Strukturierte Daten bleiben für andere Darstellungen nützlich.",
    },
    {
      q: "Kann ich sehen, wie oft meine Website in KI-Antworten erscheint?",
      a: "Teilweise. Die Search Console zeigt seit dem 31. August 2026 allen Websites Impressionen in Übersichten mit KI und im KI-Modus, aber keine Klicks. Bing Webmaster Tools zeigen Zitate in Copilot, für ChatGPT bleibt der Parameter utm_source=chatgpt.com.",
    },
    {
      q: "Gibt es Anzeigen in ChatGPT auch in Deutschland?",
      a: "OpenAI hat sie am 18. August 2026 für 31 europäische Märkte angekündigt, darunter Deutschland und Österreich. Sie erscheinen nur in den Tarifen Free und Go, sind als gesponsert gekennzeichnet und beeinflussen laut OpenAI die Antworten nicht.",
    },
    {
      q: "Kann ich im KI-Modus schon Tische oder Termine buchen lassen?",
      a: "Für Deutschland, Österreich und die Schweiz haben wir bis zum 11. Oktober 2026 keine Ankündigung von Google gefunden. Restaurantbuchungen gibt es laut Google in den USA und seit April 2026 in Großbritannien, jeweils über Partner wie OpenTable oder TheFork.",
    },
  ],
  sources: [
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Übersicht mit KI startet in Deutschland und weiteren Ländern (26. März 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/uebersicht-mit-ki-start/" },
    { title: "Übersicht mit KI: Verfügbarkeit", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=en" },
    { title: "Updates zur Google-Suchdokumentation (Oktober 2025 bis Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "Preferred sources (Stand 18. September 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/preferred-sources" },
    { title: "Search generative AI control", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16908024?hl=en" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16984139" },
    { title: "Google finally gives Search Console its own generative AI visibility reports (3. Juni 2026)", publisher: "PPC Land", url: "https://ppc.land/google-finally-gives-search-console-its-own-generative-ai-visibility-reports/" },
    { title: "Booking restaurants in the UK just got easier with AI in Search (10. April 2026)", publisher: "Google Blog UK", url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/ai-mode-restaurants-uk/" },
    { title: "Google KI-Modus startet Buchungsfunktion (5. November 2025)", publisher: "Tageskarte", url: "https://www.tageskarte.io/technologie/detail/google-ki-modus-startet-buchungsfunktion.html" },
    { title: "Ads in AI Overviews", publisher: "Google Ads Hilfe", url: "https://support.google.com/google-ads/answer/16297775?hl=en" },
    { title: "My Business Q&A API: Change log", publisher: "Google for Developers", url: "https://developers.google.com/my-business/content/qanda/change-log" },
    { title: "Google Changing Q&A Feature In Google Maps For Ask (15. Dezember 2025)", publisher: "Search Engine Roundtable", url: "https://www.seroundtable.com/google-maps-qa-feature-ask-40594.html" },
    { title: "Google Maps launching insider tips built with Gemini (19. November 2025)", publisher: "Google Blog", url: "https://blog.google/products/maps/holiday-gemini-tips-new-explore-tab/" },
    { title: "Gemini in Google Maps: Wenn die Sushi-Empfehlung wichtiger ist als die Öffnungszeiten (21. Juni 2026)", publisher: "t3n", url: "https://t3n.de/news/google-maps-gemini-keinen-geschmack-wie-werde-ich-unerbetene-ki-tipps-loswerden-1748010" },
    { title: "Google Maps bekommt praktisches KI-Update (16. Juli 2026)", publisher: "VOL.AT", url: "https://www.vol.at/google-maps-bekommt-praktisches-ki-update/10328783" },
    { title: "Ask Maps and Immersive Navigation (12. März 2026)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/" },
    { title: "Google Maps’ Ask Maps gets more helpful with food ordering (6. August 2026)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/maps/order-food-in-ask-maps/" },
    { title: "Ask Maps kommt in mehr Märkte und kann Essen bestellen (7. August 2026)", publisher: "onlinemarketing.de", url: "https://onlinemarketing.de/technologie/ask-maps-mehr-maerkte-essen-bestellen" },
    { title: "Manage your Business Profile on Google with the Gemini web app", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/17142585?hl=en" },
    { title: "Google Business Profile tests AI-generated replies to reviews (20. März 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/google-business-profile-test-reply-to-reviews-with-ai-472167" },
    { title: "ChatGPT release notes (Einträge vom 4. Juni, 24. Juni und 10. August 2026)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
    { title: "Ads in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001047-ads-in-chatgpt" },
    { title: "ChatGPT ads expands across Europe (18. August 2026, aktualisiert 31. August 2026)", publisher: "OpenAI", url: "https://openai.com/blog/chatgpt-ads-expands-across-europe" },
    { title: "Exclusive: Yelp partners with ChatGPT to surface reviews (23. Juli 2026)", publisher: "Axios", url: "https://axios.com/2026/07/23/yelp-reviews-chatgpt-geo-partnership" },
    { title: "Introducing the New Bing Places for Business (3. Oktober 2025)", publisher: "Microsoft Bing Blogs", url: "https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Bing Adds GEO To Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442" },
    { title: "Introducing Apple Business (24. März 2026)", publisher: "Apple Newsroom", url: "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" },
    { title: "Have it both ways: stay discoverable in search while disallowing AI training (15. September 2026)", publisher: "Cloudflare Blog", url: "https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/" },
    { title: "Commission opens investigation into possible anticompetitive conduct by Google in the use of online content for AI purposes (IP/25/2964, 9. Dezember 2025)", publisher: "Europäische Kommission", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_25_2964" },
    { title: "Google's AI Mode expands agentic restaurant reservations (18. November 2025, Bericht)", publisher: "GSMArena", url: "https://www.gsmarena.com/googles_ai_mode_expands_agentic_restaurant_reservations_flight_deals_canvas-news-70334.php" },
  ],
  related: [
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
    { slug: "google-ai-mode-local-seo-2026", title: "KI-Modus und Local SEO" },
    { slug: "unternehmensprofil-ki-funktionen-2026", title: "Unternehmensprofil und KI 2026" },
    { slug: "ai-agents-lokale-buchungen-2026", title: "KI-Agenten und lokale Buchungen" },
  ],
  cta: {
    title: "Wo steht Ihr Betrieb in der KI-Suche?",
    text: "Wir prüfen, ob Suchmaschinen und KI-Dienste Ihre Website lesen dürfen, was Google, ChatGPT und Copilot zu Ihrem Betrieb antworten und ob Website und Profile übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
