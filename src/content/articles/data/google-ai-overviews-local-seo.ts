import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-ai-overviews-local-seo",
  lang: "de",
  seoTitle: "Google AI Overviews und Local SEO: Was belegt ist",
  seoDescription:
    "Übersicht mit KI in Deutschland, Österreich und der Schweiz: wie Google die Quellen wählt, was Sie steuern, wie die Search Console zählt und was Betriebe tun.",
  h1: "Google AI Overviews (Übersicht mit KI) und Local SEO: Was Google dokumentiert und was Betriebe tun können",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, was die KI-Zusammenfassungen oben in der Google-Suche für sie bedeuten. Sie erfahren, seit wann es sie gibt, wie Google die Quellen auswählt, was Sie steuern und messen können und was zu tun ist.",
  answer:
    "Die Übersicht mit KI (englisch AI Overviews) zeigt Google in Deutschland, Österreich und der Schweiz seit März 2025. Als verlinkte Quelle kommt laut Google jede Seite infrage, die indexiert ist, mit Snippet erscheinen darf und in der Search Console nicht ausgeschlossen ist. Zusätzliche Anforderungen nennt Google nicht, eine Platzierung garantiert niemand. Für lokale Betriebe zählen eine klare Website und ein aktuelles Unternehmensprofil.",
  takeaways: [
    "Google zeigt die Übersicht mit KI seit dem 25. März 2025 in Deutschland, Österreich und der Schweiz, anfangs nur angemeldeten Nutzern ab 18 Jahren.",
    "Die Quellen holt Google mit den normalen Ranking-Systemen aus dem Suchindex. Eine Liste von Rangfaktoren für die Übersicht gibt es nicht.",
    "Voraussetzung ist eine indexierte Seite, die mit Snippet erscheinen darf. llms.txt, spezielles Schema oder Texte „für KI“ braucht es laut Google nicht.",
    "Google-Extended steuert die Übersicht mit KI nicht. Dafür gibt es nosnippet, data-nosnippet, max-snippet, noindex und seit dem 31. August 2026 für alle Websites eine Einstellung in der Search Console.",
    "Wie Übersicht und Kartenblock zusammenspielen, dokumentiert Google nicht. Unternehmensprofile können laut Google zur Sichtbarkeit in KI-Antworten beitragen.",
  ],
  publishedAt: "2026-01-10",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "was-ist-die-uebersicht-mit-ki",
      title: "Was die Übersicht mit KI ist",
      answer:
        "Die Übersicht mit KI ist eine von Google erzeugte Zusammenfassung oben auf der Ergebnisseite, mit Links zu den Websites, auf die sie sich stützt. Google zeigt sie nur, wenn seine Systeme sie als Ergänzung zur klassischen Suche für hilfreich halten.",
      blocks: [
        {
          t: "p",
          text: "Google verwendet auf Deutsch den Namen „Übersicht mit KI“, in der Mehrzahl „Übersichten mit KI“. In Fachmedien und im Alltag heißen sie oft KI-Übersichten oder AI Overviews. Wir bleiben bei Googles Bezeichnung. Gemeint ist der Block über den normalen Treffern, nicht der KI-Modus, den Nutzer gezielt aufrufen. Dazu gibt es einen eigenen Artikel: [Google AI Mode und Local SEO](/blog/google-ai-mode-local-seo-2026).",
        },
        {
          t: "p",
          text: "Abschalten können Nutzer die Übersicht laut Google-Hilfe nicht. Wer nur Links sehen will, wählt nach der Suche den Filter „Web“, der laut Google nur textbasierte Links ohne Übersichten mit KI zeigt.",
        },
      ],
    },
    {
      id: "verfuegbarkeit",
      title: "Seit wann es die Übersicht mit KI in Deutschland, Österreich und der Schweiz gibt",
      answer:
        "Google hat die Übersicht mit KI am 25. März 2025 in Deutschland, Österreich und der Schweiz gestartet, zunächst für angemeldete Nutzer ab 18 Jahren. Heute führt die Google-Hilfe alle drei Länder und Liechtenstein auf, Deutsch gehört zu den unterstützten Sprachen.",
      blocks: [
        {
          t: "table",
          caption: "Übersicht mit KI im deutschsprachigen Raum",
          head: ["Land", "Sprachen beim Start im März 2025", "Google-Hilfe im Oktober 2026"],
          rows: [
            ["Deutschland", "Deutsch und Englisch", "Aufgeführt"],
            ["Österreich", "Deutsch und Englisch", "Aufgeführt"],
            ["Schweiz", "Deutsch, Französisch, Italienisch und Englisch", "Aufgeführt"],
            ["Liechtenstein", "Im Startbeitrag nicht genannt", "Aufgeführt"],
          ],
        },
        {
          t: "p",
          text: "Im Startbeitrag schrieb Google, dass angemeldete Nutzer ab 18 Jahren die Übersichten sehen. Die heutige Hilfeseite nennt diese Einschränkung nicht mehr und spricht von allen Nutzern in den aufgeführten Ländern. Den KI-Modus hat Google am 8. Oktober 2025 in denselben drei Ländern eingeführt.",
        },
      ],
    },
    {
      id: "quellenauswahl",
      title: "Wie Google die verlinkten Quellen auswählt",
      answer:
        "Laut Google stützt sich die Übersicht mit KI auf die normalen Ranking-Systeme der Suche: Sie holt passende, aktuelle Seiten aus dem Suchindex und kann dafür mehrere verwandte Suchanfragen zu Teilthemen stellen. Eine eigene Liste von Rangfaktoren für die Übersicht veröffentlicht Google nicht.",
      blocks: [
        {
          t: "p",
          text: "Google beschreibt zwei Techniken. Beim **Grounding** (Fachbegriff: Retrieval-Augmented Generation) ruft das System mit den zentralen Ranking-Systemen der Suche relevante, aktuelle Seiten aus dem Index ab und stützt die Antwort darauf. Beim **Fan-out** stellt das Modell gleichzeitig mehrere verwandte Suchanfragen zu Unterthemen und Datenquellen. Dadurch kann laut Google eine breitere Auswahl an Links erscheinen als in der klassischen Suche.",
        },
        {
          t: "table",
          caption: "Was Google zur Quellenauswahl schreibt und was offen bleibt",
          head: ["Frage", "Stand der Google-Dokumentation"],
          rows: [
            ["Woher kommen die Quellen?", "Aus dem Google-Suchindex, abgerufen mit den zentralen Ranking-Systemen der Suche"],
            ["Wann erscheint eine Übersicht?", "Nur wenn Googles Systeme sie als Ergänzung zur klassischen Suche für hilfreich halten"],
            ["Dieselben Links wie im KI-Modus?", "Nicht unbedingt. Beide Funktionen können unterschiedliche Modelle und Techniken nutzen, die Links unterscheiden sich daher"],
            ["Gewichtung einzelner Signale", "Nicht veröffentlicht"],
            ["Werkzeuge, die Googles KI-Auswahl „sehen“", "Laut Google hat kein Werkzeug eines Drittanbieters Zugang zu Googles internen Ranking- oder KI-Systemen"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Weil die Übersicht auf den normalen Ranking-Systemen aufbaut, führt kein Weg an der Suchmaschinenoptimierung vorbei. Eine Seite, die zu keiner Teilfrage gut passt, wird nach unserer Einschätzung kaum als Quelle verlinkt. Was Google zum Begriff GEO sagt, steht in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization#was-google-sagt).",
        },
      ],
    },
    {
      id: "voraussetzungen",
      title: "Was eine Seite erfüllen muss",
      answer:
        "Eine Seite muss indexiert sein und in der Google-Suche mit Snippet erscheinen dürfen, und die Website darf in der Search Console nicht von den generativen KI-Funktionen ausgeschlossen sein. Zusätzliche Anforderungen oder besondere Optimierungen gibt es laut Google nicht, und auch erfüllte Voraussetzungen garantieren keine Aufnahme.",
      blocks: [
        {
          t: "p",
          text: "Google empfiehlt dieselben Grundlagen wie für die normale Suche. Ausdrücklich genannt werden unter anderem:",
        },
        {
          t: "ul",
          items: [
            "Crawling erlauben, auch in den Einstellungen von Hoster oder CDN.",
            "Wichtige Inhalte als Text, über interne Links auffindbar.",
            "Eine gute Nutzererfahrung auf der Seite.",
            "Strukturierte Daten nur passend zum sichtbaren Text, siehe [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo#uebereinstimmung).",
            "Die Angaben im **Unternehmensprofil** aktuell halten, bei Händlern auch im Merchant Center.",
          ],
        },
        {
          t: "table",
          caption: "Was Sie für die Übersicht mit KI laut Google nicht brauchen",
          head: ["Verbreiteter Rat", "Was Google schreibt"],
          rows: [
            ["llms.txt oder andere KI-Textdateien", "Nicht nötig, ebenso wenig Markdown-Fassungen. Mehr in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026)."],
            ["Spezielles Schema für KI", "Strukturierte Daten sind für die generative Suche nicht erforderlich, ein besonderes schema.org-Markup müssen Sie dafür nicht ergänzen"],
            ["Texte in kleine Häppchen zerlegen", "Nicht erforderlich"],
            ["Eigens „für KI“ schreiben", "Nicht nötig"],
            ["Erwähnungen im Netz streuen", "Unechte Erwähnungen sind laut Google weniger hilfreich, als es scheinen mag"],
          ],
        },
        {
          t: "p",
          text: "Google hebt stattdessen Inhalte hervor, die über Allgemeinwissen hinausgehen: eigene Erfahrung und Fachwissen. Für einen Sanitärbetrieb in Graz ist das etwa die Erklärung, wie eine Badsanierung im Altbau abläuft und was sie verzögert, nicht ein Text über „moderne Bäder“.",
        },
      ],
    },
    {
      id: "kartenblock-und-profil",
      title: "Übersicht mit KI, Kartenblock und Unternehmensprofil",
      answer:
        "Google schreibt, dass generative KI-Antworten Informationen über lokale Unternehmen enthalten können und dass Unternehmensprofile helfen können, in KI-Antworten und in den übrigen Suchergebnissen sichtbar zu sein. Wie die Übersicht mit KI und der Kartenblock auf einer Ergebnisseite zusammenspielen, dokumentiert Google nicht.",
      blocks: [
        {
          t: "table",
          caption: "Lokale Ergebnisse und Übersicht mit KI: was belegt ist",
          head: ["Aussage", "Stand", "Quelle"],
          rows: [
            ["Generative KI-Antworten können Informationen über lokale Unternehmen enthalten", "Von Google dokumentiert", "Google-Leitfaden zu generativen KI-Funktionen"],
            ["Unternehmensprofile können zur Sichtbarkeit in KI-Antworten und anderen Suchergebnissen beitragen", "Von Google dokumentiert", "Google-Leitfaden zu generativen KI-Funktionen"],
            ["Angaben im Unternehmensprofil aktuell halten", "Empfehlung von Google für die KI-Funktionen der Suche", "Google Search Central"],
            ["Bei welchen lokalen Suchen eine Übersicht erscheint", "Nicht dokumentiert", "Keine"],
            ["Ob Übersicht und Kartenblock dieselben Betriebe zeigen", "Nicht dokumentiert", "Keine"],
            ["Welche Profilfelder in die Übersicht einfließen", "Nicht im Einzelnen dokumentiert", "Keine"],
          ],
        },
        {
          t: "p",
          text: "Welche Profilinformationen Google in seinen KI-Funktionen verwendet, etwa bei Zusammenfassungen von Rezensionen, beschreibt [Unternehmensprofil und KI-Funktionen](/blog/unternehmensprofil-ki-funktionen-2026). Wie Sie das Profil vollständig pflegen, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
        {
          t: "h3",
          text: "So prüfen Sie Ihre eigenen Suchanfragen",
        },
        {
          t: "steps",
          items: [
            { title: "Suchanfragen auswählen", text: "Zehn Suchen, wie Kunden sie stellen, mit Ort im Text: „Zahnarzt Linz Angstpatienten“, „Heizung entlüften Notdienst Freiburg“, „Restaurant mit Terrasse Luzern“." },
            { title: "Unter gleichen Bedingungen suchen", text: "Privates Browserfenster ohne Anmeldung, immer dasselbe Gerät. Der Gerätestandort beeinflusst lokale Ergebnisse, deshalb gehört der Ort in die Suche." },
            { title: "Festhalten, was erscheint", text: "Übersicht mit KI, Kartenblock oder beides? Welche Betriebe werden genannt, welche Websites verlinkt? Ein Bildschirmfoto als Beleg." },
            { title: "Monatlich wiederholen", text: "Ergebnisse können sich von Tag zu Tag ändern. Erst der Verlauf über Monate ist aussagekräftig." },
          ],
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels behauptete, Übersichten mit KI erschienen bei Suchen wie „in der Nähe“ selten, und nannte Anteile von Suchen mit Übersicht und Klickverluste. Dafür gab es keine Quelle. Wir haben diese Angaben entfernt.",
        },
      ],
    },
    {
      id: "steuerung",
      title: "Was Sie steuern können und was Google-Extended nicht steuert",
      answer:
        "Was aus Ihren Seiten in der Suche und damit in der Übersicht mit KI erscheint, steuern Sie mit nosnippet, data-nosnippet, max-snippet und noindex, die ganze Website mit einer Einstellung in der Search Console, die es seit dem 31. August 2026 für alle Websites gibt. Google-Extended wirkt dagegen nicht auf die Google-Suche.",
      blocks: [
        {
          t: "table",
          caption: "Steuerungsmöglichkeiten laut Google",
          head: ["Mittel", "Wirkung laut Google", "Folge für einen lokalen Betrieb"],
          rows: [
            ["nosnippet (Meta-Tag)", "Kein Snippet für die Seite in den Suchergebnissen", "Voraussetzung „mit Snippet“ nicht erfüllt, also keine Verlinkung als Quelle; auch in der normalen Suche fehlt der Textauszug"],
            ["data-nosnippet (HTML-Attribut)", "Einzelne Textstellen erscheinen nicht im Snippet", "Für Passagen, die ohne Zusammenhang missverständlich wären"],
            ["max-snippet (Meta-Tag)", "Legt die Höchstlänge des Snippets fest", "Begrenzt, wie viel Text Google aus der Seite zeigt"],
            ["noindex", "Seite erscheint nicht in der Google-Suche", "Weder Übersicht mit KI noch normaler Treffer"],
            ["Einstellung „Search generative AI“ in der Search Console", "Links und Inhalte der Website fehlen in Übersicht mit KI, KI-Modus und den KI-Funktionen in Discover", "Kein Einfluss auf die übrige Suche, aber keine Verlinkung mehr in diesen Funktionen"],
            ["Google-Extended (robots.txt)", "Training von Gemini-Modellen, Grounding in den Gemini-Apps und Vertex AI", "Kein Einfluss auf die Aufnahme in die Google-Suche, kein Ranking-Signal"],
          ],
        },
        {
          t: "p",
          text: "Laut Google ist KI fester Bestandteil der Suche, deshalb gelten die robots.txt-Regeln für Googlebot auch für die KI-Funktionen. Wer Googlebot sperrt, sperrt die Seiten für die gesamte Suche: Google kann sie nicht mehr lesen, die Adresse erscheint höchstens noch ohne Beschreibung. Die Einstellung in der Search Console greift laut Google meist nach wenigen Tagen, betrifft nicht das Training von KI-Modellen und ist kein Ranking-Signal für andere Teile der Suche.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für Handwerk, Praxen, Gastronomie und Hotels ist ein Ausschluss selten sinnvoll. Laut Google können Inhalte anderer Websites weiter erscheinen, also auch Portale, die über Ihren Betrieb schreiben; nur Ihre eigene Seite fehlt dann. Prüfen Sie lieber, ob ein nosnippet aus einem alten Plugin Ihre Seiten einschränkt. Alle KI-Crawler im Vergleich zeigt [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026#google-apple-microsoft).",
        },
      ],
    },
    {
      id: "search-console",
      title: "Wie die Search Console Übersichten mit KI zählt",
      answer:
        "Zugriffe aus der Übersicht mit KI zählt die Search Console im Leistungsbericht unter dem Suchtyp „Web“ mit, zusammen mit den normalen Treffern. Seit dem 31. August 2026 zeigt zusätzlich ein eigener Bericht für alle Websites, wie oft Links zu Ihrer Website in den generativen KI-Funktionen der Suche angezeigt wurden.",
      blocks: [
        {
          t: "table",
          caption: "Zählweise in der Search Console",
          head: ["Punkt", "Regel", "Beleg"],
          rows: [
            ["Leistungsbericht", "Auftritte in KI-Funktionen sind im Suchtyp „Web“ enthalten", "Google Search Central"],
            ["Bericht für generative KI-Funktionen", "Impressionen in Übersicht mit KI und KI-Modus, nach Seite, Land, Gerät und Datum", "Search-Console-Hilfe"],
            ["Mehrere Links einer Website in derselben Antwort", "Zählen in der Gesamtzahl des Diagramms als eine Impression", "Search-Console-Hilfe"],
            ["Links hinter „Mehr anzeigen“", "Zählen erst, wenn der Nutzer die Antwort aufklappt", "Fachbericht über eine Aussage von John Mueller (Google), Juni 2026"],
            ["Position", "Alle Links einer Übersicht erhalten die Position des gesamten Blocks", "Fachbericht: John Mueller (Google) bestätigte im September 2026 eine Zusammenfassung auf Reddit"],
          ],
        },
        {
          t: "p",
          text: "Die beiden letzten Zeilen beruhen auf Fachberichten, nicht auf einer von uns geprüften Google-Seite. Fehlt der neue Bericht, hat Ihre Website laut Google meist noch zu wenige Impressionen in diesen Funktionen. Klicks beschreibt die Hilfeseite für diesen Bericht nicht, ebenso wenig eine Trennung zwischen Übersicht mit KI und KI-Modus. Wie der KI-Modus gezählt wird, steht in [Google AI Mode und Local SEO](/blog/google-ai-mode-local-seo-2026#search-console).",
        },
        {
          t: "p",
          text: "Google schreibt, Klicks von Ergebnisseiten mit Übersicht mit KI seien hochwertiger, Besucher blieben eher länger. Zahlen nennt Google dazu nicht. Prüfen Sie es selbst: Legen Sie die Impressionen neben Anrufe, Anfragen und Buchungen desselben Zeitraums.",
        },
      ],
    },
    {
      id: "falsche-angaben",
      title: "Falsche Angaben in einer Übersicht melden",
      answer:
        "Unter jeder Übersicht mit KI können Sie über das Daumen-runter-Symbol „Problem melden“ wählen. Dauerhaft hilft aber nur, die Angabe an der Quelle zu korrigieren, auf die sich die Übersicht stützt: Ihre Website, Ihr Profil oder ein Verzeichnis.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Quelle finden", text: "Öffnen Sie die verlinkten Seiten. Oft steht die falsche Angabe dort, etwa eine alte Telefonnummer." },
            { title: "An der Quelle korrigieren", text: "Eigene Website und Unternehmensprofil sofort anpassen, Feiertage als Sonderöffnungszeiten eintragen, bei fremden Verzeichnissen eine Korrektur beantragen." },
            { title: "Rückmeldung geben", text: "Daumen runter, dann „Problem melden“ und die passende Kategorie wählen. So beschreibt es die Google-Hilfe." },
            { title: "Erneut prüfen", text: "Google crawlt Seiten laut eigener Aussage nach einigen Tagen bis Monaten erneut; in der Search Console können Sie das beantragen. Danach dieselbe Suche wiederholen." },
          ],
        },
        {
          t: "p",
          text: "Den vollständigen Ablauf, auch für andere KI-Dienste, beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026).",
        },
      ],
    },
    {
      id: "was-tun",
      title: "Was lokale Betriebe jetzt tun sollten",
      answer:
        "Stellen Sie zuerst sicher, dass Google Ihre wichtigsten Seiten indexieren und mit Snippet zeigen darf und dass die Search Console Ihre Website für KI-Funktionen zulässt. Danach halten Sie das Unternehmensprofil aktuell, beantworten auf der Website die Fragen Ihrer Kunden konkret und prüfen monatlich, was erscheint.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Indexierung prüfen", text: "Startseite, Leistungsseiten und Kontaktseite mit der URL-Prüfung der Search Console testen. Kein noindex, kein nosnippet." },
            { title: "Einstellung kontrollieren", text: "In der Search Console unter Einstellungen prüfen, ob die Website für generative KI-Funktionen eingeschlossen ist (Voreinstellung)." },
            { title: "Unternehmensprofil pflegen", text: "Kategorie, Leistungen, Öffnungszeiten, Sonderzeiten, Website-Link. Google nennt das Profil ausdrücklich in seinen Hinweisen zu KI-Funktionen." },
            { title: "Fragen auf der Website beantworten", text: "Eine Seite je Leistung mit Ort, Ablauf, Preisrahmen und Bedingungen als Text. Jeder Abschnitt beginnt mit der direkten Antwort." },
            { title: "Daten abgleichen", text: "Name, Adresse, Telefon und Öffnungszeiten auf Website, Profil und Verzeichnissen gleich halten." },
            { title: "Echte Bewertungen sammeln", text: "Alle Kunden fragen, nichts dafür anbieten und keine Vorauswahl nur zufriedener Kunden treffen. Ablauf: [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)." },
            { title: "Monatlich messen", text: "Bericht für generative KI-Funktionen ansehen, Stichprobe wiederholen." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Schritte 4 bis 6 nennt Google nicht als Faktoren für die Übersicht mit KI. Sie folgen aus Googles Beschreibung: Die Übersicht stützt sich auf Seiten, die die normale Suche findet. Je klarer Ihre Seiten die Fragen Ihrer Kunden beantworten und je weniger sich Quellen widersprechen, desto weniger muss das System raten. Einen Platz garantiert niemand.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Gibt es die Übersicht mit KI auch in Österreich und der Schweiz?",
      a: "Ja. Google hat sie am 25. März 2025 in Deutschland, Österreich und der Schweiz gestartet, in der Schweiz auf Deutsch, Französisch, Italienisch und Englisch. Die Google-Hilfe führt heute auch Liechtenstein auf.",
    },
    {
      q: "Erscheint bei Suchen wie „Friseur in der Nähe“ eine Übersicht mit KI?",
      a: "Das legt Google nicht für bestimmte Arten von Suchen fest. Laut Google erscheint eine Übersicht nur, wenn die Systeme sie als hilfreiche Ergänzung zur klassischen Suche einschätzen. Ob das bei Ihren wichtigsten Suchen der Fall ist, zeigen nur eigene Stichproben.",
    },
    {
      q: "Verschwinde ich aus der Übersicht mit KI, wenn ich Google-Extended sperre?",
      a: "Nein. Laut Google hat Google-Extended keinen Einfluss auf die Aufnahme in die Google-Suche und ist kein Ranking-Signal. Es betrifft das Training von Gemini-Modellen und das Grounding in den Gemini-Apps und Vertex AI. Für die Übersicht mit KI gibt es die Einstellung in der Search Console und die Snippet-Steuerung.",
    },
    {
      q: "Wie sehe ich, ob meine Website in Übersichten mit KI verlinkt wird?",
      a: "In der Search Console. Der Bericht für generative KI-Funktionen zeigt seit dem 31. August 2026 für alle Websites, wie oft Links zu Ihrer Website dort angezeigt wurden, nach Seite, Land, Gerät und Datum. Was die Übersicht über Ihren Betrieb schreibt, zeigen nur eigene Stichproben.",
    },
    {
      q: "Kann mir jemand einen Platz in der Übersicht mit KI garantieren?",
      a: "Nein. Google schreibt, dass Indexierung und Ausspielung auch bei erfüllten Voraussetzungen nicht garantiert sind. Außerdem hat laut Google kein Werkzeug eines Drittanbieters Zugang zu Googles internen Ranking- oder KI-Systemen.",
    },
  ],
  sources: [
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "Übersicht mit KI startet in Deutschland und weiteren Ländern (26. März 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/uebersicht-mit-ki-start/" },
    { title: "We’re bringing the helpfulness of AI Overviews to more countries in Europe (25. März 2025)", publisher: "Google, The Keyword", url: "https://blog.google/feed/were-bringing-the-helpfulness-of-ai-overviews-to-more-countries-in-europe/" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Search generative AI control", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16908024?hl=en" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16984139" },
    { title: "List of Google’s common crawlers: Google-Extended (Stand 14. Juli 2026)", publisher: "Google Crawling Infrastructure", url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=en" },
    { title: "Control your snippets in search results (Stand 20. April 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/snippet" },
    { title: "Google's John Mueller Clarifies How Impressions Are Counted in Search Console's AI Performance Report (26. Juni 2026)", publisher: "TechWyse", url: "https://www.techwyse.com/?p=76975" },
    { title: "Mueller: Search Console gives every AI Overview link the same position (13. September 2026)", publisher: "Relevant Audience", url: "https://www.relevantaudience.com/seo/mueller-search-console-ai-overview-position-counted-as-block/" },
  ],
  related: [
    { slug: "google-ai-mode-local-seo-2026", title: "Google AI Mode und Local SEO" },
    { slug: "unternehmensprofil-ki-funktionen-2026", title: "Unternehmensprofil und KI-Funktionen" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern: GPTBot, ClaudeBot und Co." },
  ],
  cta: {
    title: "Erscheint Ihr Betrieb in der Übersicht mit KI?",
    text: "Wir prüfen, ob Google Ihre wichtigsten Seiten indexieren und mit Snippet zeigen darf, ob Ihre Website in der Search Console für KI-Funktionen zugelassen ist und was die Übersicht mit KI bei typischen Suchen zu Ihrem Betrieb zeigt. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
