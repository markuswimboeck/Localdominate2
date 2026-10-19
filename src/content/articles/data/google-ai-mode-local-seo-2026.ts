import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-ai-mode-local-seo-2026",
  lang: "de",
  seoTitle: "Google AI Mode und Local SEO: Was der KI-Modus ändert",
  seoDescription:
    "Google KI-Modus in Deutschland, Österreich und der Schweiz: wie das Fan-out sucht, wo Buchen schon geht, was Google verlangt und wie Sie Ihren Betrieb messen.",
  h1: "Google AI Mode (KI-Modus) und Local SEO: Was Google dokumentiert und was lokale Betriebe tun können",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, was der KI-Modus von Google für sie bedeutet. Sie erfahren, seit wann es ihn auf Deutsch gibt, wie er laut Google sucht, welche Buchungsfunktionen es wo gibt und wie Sie Ihre Sichtbarkeit prüfen.",
  answer:
    "Den KI-Modus gibt es seit dem 8. Oktober 2025 auf Deutsch in Deutschland, Österreich und der Schweiz. Er zerlegt eine Frage in Teilthemen und sucht dafür gleichzeitig. Google nennt **keine zusätzlichen Anforderungen**: Ihre Seiten müssen indexiert und für ein Snippet geeignet sein. Außerdem rät Google, das Unternehmensprofil aktuell zu halten. Reservieren im KI-Modus gibt es nach unserem Stand nur in den USA und Großbritannien. Eine Platzierung garantiert niemand.",
  takeaways: [
    "Google führt den KI-Modus seit dem 8. Oktober 2025 in Deutschland, Österreich und der Schweiz ein, auf Deutsch und in der Schweiz auch auf Französisch und Italienisch.",
    "Laut Google teilt der KI-Modus eine Frage in Unterthemen auf und sucht dafür gleichzeitig in mehreren Datenquellen (Fan-out). Wie viele Teilanfragen entstehen, veröffentlicht Google nicht.",
    "Zusätzliche Anforderungen nennt Google nicht: Seiten müssen indexiert und für ein Snippet geeignet sein. Spezielles Markup oder KI-Textdateien sind nicht nötig.",
    "Reservieren, Buchen und Anrufe durch Google gibt es bisher in den USA, Restaurantreservierungen seit April 2026 auch in Großbritannien. Für die DACH-Region haben wir keine Ankündigung gefunden.",
    "Die Search Console zählt den KI-Modus im Leistungsbericht unter „Web“ mit. Ein eigener Bericht für generative KI-Funktionen zeigt Impressionen, aber keine Klicks.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "was-ist-der-ki-modus",
      title: "Was der KI-Modus ist",
      answer:
        "Der KI-Modus (englisch AI Mode) ist ein eigener Bereich der Google-Suche für längere Fragen mit Rückfragen, der mit einem KI-Text und Links zu unterstützenden Websites antwortet. Ist sich das System unsicher, zeigt Google laut eigener Aussage stattdessen normale Suchergebnisse.",
      blocks: [
        {
          t: "p",
          text: "Sie erreichen ihn über die Google-Startseite, einen eigenen Reiter auf der Ergebnisseite und die Google-App für Android und iOS. Fragen lassen sich tippen, sprechen oder mit einem Foto stellen. Laut Google waren die Fragen der ersten Nutzer **zwei- bis dreimal so lang** wie übliche Suchanfragen. Der KI-Modus beruht auf Googles Gemini-Modellen; ein stärkeres Modell (Gemini 3 Pro) gibt es laut Google-Hilfe nur für Abonnenten und nur auf Englisch.",
        },
        {
          t: "table",
          caption: "Übersichten mit KI und KI-Modus im Vergleich (laut Google)",
          head: ["Merkmal", "Übersichten mit KI", "KI-Modus"],
          rows: [
            ["Wo", "Block auf der normalen Ergebnisseite", "Eigener Bereich: Startseite, Reiter oder App"],
            ["Wann", "Nur wenn Google sie für hilfreich hält, oft gar nicht", "Wenn jemand den KI-Modus aufruft"],
            ["Wofür", "Schneller Überblick mit Links zum Weiterlesen", "Fragen, die Erkunden, Abwägen oder Vergleiche brauchen"],
            ["Fan-out", "Kann genutzt werden", "Kann genutzt werden"],
          ],
        },
        {
          t: "p",
          text: "Dieser Artikel behandelt nur den KI-Modus. Wie Übersichten mit KI lokale Suchen verändern, steht in [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo). Was Optimierung für KI-Antworten überhaupt bedeutet, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
    {
      id: "verfuegbarkeit",
      title: "Seit wann es den KI-Modus auf Deutsch gibt",
      answer:
        "Google hat den KI-Modus am 8. Oktober 2025 in Deutschland, Österreich und der Schweiz gestartet, auf Deutsch und in der Schweiz zusätzlich auf Französisch und Italienisch.",
      blocks: [
        {
          t: "p",
          text: "Mit demselben Schritt kam er in mehr als 40 weitere Länder und Regionen und in 36 neue Sprachen. Damit ist er laut Google in über 200 Ländern verfügbar.",
        },
        {
          t: "table",
          caption: "Wichtige Daten zum KI-Modus",
          head: ["Datum", "Ereignis", "Quelle"],
          rows: [
            ["21. August 2025", "Englisch in rund 180 weiteren Ländern; erste Reservierungsfunktion als Test in den USA", "TechCrunch, Search Engine Journal"],
            ["8. Oktober 2025", "Start in Deutschland, Österreich und der Schweiz", "Google Blog Deutschland"],
            ["November 2025", "Restaurantreservierungen für alle Nutzer in den USA", "Search Engine Journal"],
            ["10. April 2026", "Restaurantreservierungen in Großbritannien", "Google Blog UK"],
            ["Juni 2026", "Search-Console-Bericht für generative KI-Funktionen, zunächst für einen Teil der Websites", "PPC Land"],
            ["31. August 2026", "Bericht für generative KI-Funktionen und Ausschluss-Einstellung für alle Websites weltweit", "Search-Console-Hilfe, Search Engine Land"],
          ],
        },
        {
          t: "p",
          text: "Im Startbeitrag nennt Google weder Mindestalter noch Anmeldepflicht. Personalisierte Antworten gibt es laut Google-Hilfe nur ab 18 Jahren und mit aktiviertem Suchverlauf.",
        },
      ],
    },
    {
      id: "fan-out",
      title: "Wie der KI-Modus sucht: das Fan-out",
      answer:
        "Laut Google teilt der KI-Modus eine Frage in Unterthemen auf und stellt dafür viele Suchanfragen gleichzeitig, über mehrere Datenquellen hinweg. Dabei findet er weitere passende Seiten und zeigt deshalb nach Googles Angaben eine breitere Auswahl an Links als die klassische Suche.",
      blocks: [
        {
          t: "p",
          text: "Google nennt diese Technik „query fan-out“, auf Deutsch etwa das Auffächern einer Frage. Wie viele Teilanfragen entstehen, welche das sind und wie die Ergebnisse gewichtet werden, veröffentlicht Google nicht. Feste Zahlen wie „5 bis 15 Teilanfragen“ aus manchen Ratgebern haben wir in keiner Google-Quelle gefunden.",
        },
        {
          t: "h3",
          text: "Was das bei einer lokalen Frage bedeuten kann",
        },
        {
          t: "p",
          text: "Angenommen, jemand fragt: „Welche Autowerkstatt in Salzburg-Lehen macht Klimaservice und hat samstags offen?“ Denkbar sind Teilsuchen zum Klimaservice, zu den Öffnungszeiten am Samstag, zur Lage und zu Bewertungen. Das Beispiel zeigt nur das Prinzip. Welche Teilanfragen Google tatsächlich stellt, ist von außen nicht einsehbar.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine Werkstatt, deren Website den Klimaservice auf einer eigenen Seite beschreibt und deren Profil die Samstagszeiten richtig angibt, liefert zu mehreren Teilfragen eine Antwort. „Ihr Partner rund ums Auto“ liefert zu keiner etwas. Das ist unsere Schlussfolgerung aus Googles Beschreibung, kein dokumentierter Rangfaktor.",
        },
      ],
    },
    {
      id: "lokale-betriebe",
      title: "Wie lokale Betriebe im KI-Modus erscheinen",
      answer:
        "Google dokumentiert nicht im Einzelnen, wie Betriebe im KI-Modus ausgewählt und dargestellt werden. Belegt ist, dass Google ausdrücklich empfiehlt, die Angaben im Unternehmensprofil aktuell zu halten, und für die Buchungsfunktionen laut Fachpresse den Knowledge Graph und Google Maps als Datenquellen nannte.",
      blocks: [
        {
          t: "table",
          caption: "Was zu lokalen Ergebnissen im KI-Modus belegt ist",
          head: ["Aussage", "Stand", "Quelle"],
          rows: [
            ["Angaben im Unternehmensprofil aktuell halten", "Empfehlung von Google für Übersichten mit KI und KI-Modus", "Google Search Central"],
            ["Antworten enthalten Links zu unterstützenden Websites", "Von Google dokumentiert", "Google Search Central"],
            ["Buchungen nutzen Partnerintegrationen, Knowledge Graph und Google Maps", "Von Google im August 2025 genannt", "Search Engine Journal"],
            ["Restaurantvorschläge auf Basis früherer Suchen und Klicks in Suche und Maps", "Test in den USA seit August 2025", "TechCrunch"],
            ["Rangfolge der Betriebe, Mindestzahl an Bewertungen, Gewichtung einzelner Profilfelder", "Nicht dokumentiert", "Keine"],
          ],
        },
        {
          t: "p",
          text: "Unsere Einschätzung: Das Profil liefert die Grunddaten wie Adresse, Öffnungszeiten und Kategorie, die Website die Details, nach denen Kunden im KI-Modus fragen. Welche Profilinformationen Google in seinen eigenen KI-Funktionen verwendet, beschreibt [Unternehmensprofil und KI-Funktionen](/blog/unternehmensprofil-ki-funktionen-2026). Wie Sie das Profil vollständig pflegen, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels nannte Prozentwerte für die Gewichtung von Profil, Bewertungen und Schema im KI-Modus sowie eine Mindestzahl von 30 Bewertungen. Dafür gibt es keine Quelle. Wir haben diese Angaben entfernt.",
        },
      ],
    },
    {
      id: "buchen-reservieren",
      title: "Reservieren, buchen, anrufen lassen: was es wo gibt",
      answer:
        "Agentische Funktionen, bei denen der KI-Modus Verfügbarkeiten sucht und zur Buchung führt, gibt es laut Google bisher in den USA, Restaurantreservierungen seit April 2026 auch in Großbritannien. Einen Start in Deutschland, Österreich oder der Schweiz haben wir bis zum 11. Oktober 2026 nicht gefunden.",
      blocks: [
        {
          t: "table",
          caption: "Agentische Funktionen und ihre Verfügbarkeit (Stand 11. Oktober 2026)",
          head: ["Funktion", "Wo verfügbar", "Hinweise"],
          rows: [
            ["Restaurantreservierung im KI-Modus", "USA (für alle seit November 2025), Großbritannien (seit 10. April 2026)", "In Großbritannien über Partner wie OpenTable, TheFork und SevenRooms; gebucht wird per Link beim Partner"],
            ["Tickets, Termine für Beauty und Wellness", "USA, Test in Search Labs", "Laut Google-Hilfe für Abonnenten von Google AI Pro und AI Ultra"],
            ["Google ruft Betriebe wegen Preis und Verfügbarkeit an", "USA, auf Englisch, angemeldete Nutzer ab 18", "Beispiele laut Google: Autowerkstatt, Friseursalon, Hundesalon, Fahrschule"],
            ["Google ruft Geschäfte wegen Lagerbestand an", "USA, seit November 2025 in der Suche", "Laut Fachpresse zunächst in wenigen Einkaufskategorien"],
            ["Alle genannten Funktionen", "Deutschland, Österreich, Schweiz", "Keine Ankündigung von Google gefunden"],
          ],
        },
        {
          t: "p",
          text: "Für Betriebe in der DACH-Region heißt das: Eine Reservierung oder einen Anruf, den Google im KI-Modus selbst anstößt, gibt es hier nach heutigem Stand nicht. Ob und wann Google die Funktionen ausweitet, ist offen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "In Großbritannien laufen die Reservierungen über bestehende Buchungssysteme. Kommt die Funktion in den deutschsprachigen Raum, dürften auch hier verbreitete Reservierungssysteme die Verfügbarkeiten liefern. Restaurants, die online reservierbar sind und deren Reservierungslink in Profil und Website stimmt, sind vorbereitet. Hinweise dazu stehen in [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants#reservierung-bestellung).",
        },
      ],
    },
    {
      id: "was-google-verlangt",
      title: "Was Google als Voraussetzung nennt",
      answer:
        "Für den KI-Modus gelten laut Google dieselben Voraussetzungen wie für die normale Suche: Eine Seite muss indexiert und für die Anzeige mit Snippet geeignet sein. Zusätzliche Anforderungen, besondere Optimierungen oder spezielle strukturierte Daten gibt es laut Google nicht, und eine Aufnahme ist nicht garantiert.",
      blocks: [
        {
          t: "p",
          text: "Google empfiehlt die üblichen Grundsätze der Suchmaschinenoptimierung und nennt unter anderem:",
        },
        {
          t: "ul",
          items: [
            "Crawling erlauben, in der robots.txt und in den Einstellungen von Hoster oder CDN.",
            "Wichtige Inhalte als Text bereitstellen, nicht nur in Bildern.",
            "Interne Links setzen, damit Google alle Leistungsseiten findet.",
            "Strukturierte Daten nur so verwenden, dass sie zum sichtbaren Text passen.",
            "Die Angaben im **Unternehmensprofil** (und bei Händlern im Merchant Center) aktuell halten.",
          ],
        },
        {
          t: "table",
          caption: "Was Sie für den KI-Modus nicht brauchen",
          head: ["Verbreitete Empfehlung", "Was Google dazu schreibt"],
          rows: [
            ["Spezielles „KI-Schema“", "Keine speziellen schema.org-Daten nötig. Vorhandene strukturierte Daten sollen zum sichtbaren Text passen."],
            ["llms.txt oder andere KI-Textdateien", "Nicht nötig. Mehr dazu in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026)."],
            ["Wikidata-Eintrag als Voraussetzung", "Kommt in Googles Dokumentation zu den KI-Funktionen nicht vor."],
            ["Garantierte Platzierung", "Indexierung und Ausspielung sind auch bei erfüllten Voraussetzungen nicht garantiert."],
          ],
        },
        {
          t: "h3",
          text: "Inhalte aus dem KI-Modus ausschließen",
        },
        {
          t: "p",
          text: "Mit nosnippet, data-nosnippet, max-snippet oder noindex steuern Sie, was aus einer Seite angezeigt wird. Seit dem 31. August 2026 gibt es außerdem für alle Websites eine Einstellung in der Search Console (englisch „Search generative AI“), die eine in der Search Console angelegte Property, meist also die ganze Website, aus Übersichten mit KI, KI-Modus und den KI-Funktionen in Discover herausnimmt. Laut Google greift sie meist nach ein bis zwei Tagen, wirkt nicht auf die übrige Suche und betrifft nicht das Training von KI-Modellen; dafür verweist Google auf Google-Extended.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für einen lokalen Betrieb ist der Ausschluss selten sinnvoll, denn er kostet Sichtbarkeit bei langen, konkreten Fragen zu Ihrer Leistung. Prüfen Sie aber, ob die Einstellung versehentlich gesetzt ist oder ein nosnippet aus einer alten Erweiterung Ihre Seiten einschränkt. Wie Sie Crawler insgesamt steuern, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
      ],
    },
    {
      id: "was-tun",
      title: "Was lokale Betriebe jetzt tun sollten",
      answer:
        "Sorgen Sie zuerst dafür, dass Google Ihre Seiten indexieren und mit Snippet zeigen darf. Halten Sie dann das Unternehmensprofil aktuell, beantworten Sie auf der Website die Detailfragen Ihrer Kunden, gleichen Sie Ihre Daten überall ab und prüfen Sie monatlich, was der KI-Modus über Ihren Betrieb sagt.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Indexierung prüfen", text: "Mit der URL-Prüfung der Search Console testen, ob Startseite, Leistungsseiten und Kontaktseite indexiert sind. Kein noindex und kein nosnippet auf Seiten, die gefunden werden sollen." },
            { title: "Unternehmensprofil aktuell halten", text: "Öffnungszeiten, Sonderzeiten, Kategorie, Leistungen und Website-Link. Google nennt das Profil ausdrücklich in seinen Hinweisen zu den KI-Funktionen." },
            { title: "Detailfragen beantworten", text: "Eine Seite je Leistung, mit Ort, Ablauf, Preisrahmen und Bedingungen als Text: Hausbesuche, Parkplätze, Barrierefreiheit, Samstagstermine. Jeder Abschnitt beginnt mit der direkten Antwort." },
            { title: "Daten abgleichen", text: "Name, Adresse, Telefon und Öffnungszeiten auf Website, Profil und Verzeichnissen gleich halten. Anleitung: [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Echte Bewertungen sammeln", text: "Alle Kunden fragen und nichts dafür anbieten. Anreize und das gezielte Einholen nur positiver Bewertungen schließen Googles Richtlinien aus. Ablauf: [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)." },
            { title: "Monatlich prüfen", text: "Search Console und Stichproben, wie in den nächsten beiden Abschnitten beschrieben." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Schritte 3 bis 5 sind keine von Google genannten Faktoren für den KI-Modus. Sie folgen aus dem Fan-out: Je mehr Teilfragen Ihre eigenen Seiten eindeutig beantworten und je weniger sich Quellen widersprechen, desto weniger muss das System raten.",
        },
      ],
    },
    {
      id: "search-console",
      title: "Den KI-Modus in der Search Console messen",
      answer:
        "Zugriffe aus dem KI-Modus zählt die Search Console im Leistungsbericht unter dem Suchtyp „Web“ mit, zusammen mit der normalen Suche. Ein zusätzlicher Bericht für generative KI-Funktionen zeigt seit dem 31. August 2026 für alle Websites Impressionen aus Übersichten mit KI und KI-Modus, aber keine Klicks.",
      blocks: [
        {
          t: "table",
          caption: "Wie die Search Console den KI-Modus zählt",
          head: ["Kennzahl", "Regel laut Google"],
          rows: [
            ["Klick", "Ein Klick auf einen externen Link im KI-Modus zählt als Klick"],
            ["Impression", "Es gelten die üblichen Regeln für Impressionen"],
            ["Position", "Wird berechnet wie auf einer normalen Ergebnisseite"],
            ["Rückfrage", "Gilt als neue Suchanfrage mit eigenen Daten"],
            ["Tests in Search Labs", "Im Bericht für generative KI-Funktionen nicht enthalten"],
          ],
        },
        {
          t: "p",
          text: "Die ersten vier Regeln stammen aus Googles Hilfe zum Leistungsbericht, wie Fachmedien sie im Juni 2025 wiedergegeben haben. Der Bericht für generative KI-Funktionen (englisch „Generative AI performance report“) zeigt, wie oft Links zu Ihrer Website dort angezeigt wurden, nach Seite, Land, Gerät und Datum. Eine Trennung zwischen Übersichten mit KI und KI-Modus beschreibt Google nicht, Suchanfragen nennt die Hilfeseite nicht. Fehlt der Bericht, hat Ihre Website laut Google meist noch zu wenige Impressionen oder ist von diesen Funktionen ausgeschlossen.",
        },
        {
          t: "steps",
          items: [
            { title: "Bericht öffnen", text: "In der Search Console unter Leistung den Bericht für generative KI-Funktionen aufrufen." },
            { title: "Nach Land filtern", text: "Deutschland, Österreich oder Schweiz wählen, je nach Einzugsgebiet." },
            { title: "Seiten notieren", text: "Festhalten, welche Seiten erscheinen und ob Ihre Leistungsseiten darunter sind." },
            { title: "Mit Anfragen abgleichen", text: "Steigen Impressionen, aber nicht Anrufe und Anfragen, prüfen Sie, ob die Seiten liefern, was Kunden zur Entscheidung brauchen." },
          ],
        },
      ],
    },
    {
      id: "stichproben",
      title: "Stichproben im KI-Modus",
      answer:
        "Was der KI-Modus über Ihren Betrieb schreibt, zeigt kein Bericht, deshalb stellen Sie einmal im Monat dieselben Fragen mit Ortsangabe und notieren Nennung, Angaben und verlinkte Seiten. Falsche Angaben melden Sie unter der Antwort und korrigieren sie an der Quelle.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Fragen festlegen", text: "Fünf bis zehn Fragen, wie Kunden sie stellen, immer mit Ort: „Physiotherapie mit Hausbesuch in Winterthur“, „Welcher Elektriker in Regensburg kommt am Wochenende?“" },
            { title: "Gleiche Bedingungen schaffen", text: "Ein privates Browserfenster ohne Anmeldung verwenden. Personalisierung setzt laut Google einen aktivierten Suchverlauf voraus." },
            { title: "Ergebnis festhalten", text: "Datum, Frage, genannt oder nicht, genannte Angaben wie Adresse, Zeiten und Preise, verlinkte Seiten, ein Bildschirmfoto." },
            { title: "Quellen auswerten", text: "Die verlinkten Seiten zeigen, woher die Angaben stammen. Dort müssen Ihre Daten stimmen." },
            { title: "Fehler melden und beheben", text: "Google schreibt selbst, dass der KI-Modus nicht immer richtig liegt. Unter jeder Antwort geben Sie mit dem Daumen-runter-Symbol eine Rückmeldung. Dauerhaft hilft nur die Korrektur an der Quelle, siehe [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)." },
          ],
        },
        {
          t: "p",
          text: "Unsere Erfahrung: Einzelne Antworten schwanken, auch bei gleicher Frage. Aussagekräftig wird die Stichprobe erst über mehrere Monate, zusammen mit der Search Console und Ihrem Anfrageeingang.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Gibt es den Google KI-Modus in Deutschland, Österreich und der Schweiz?",
      a: "Ja. Google hat ihn am 8. Oktober 2025 in allen drei Ländern gestartet, auf Deutsch und in der Schweiz auch auf Französisch und Italienisch. Sie erreichen ihn über die Google-Startseite, einen Reiter auf der Ergebnisseite und die Google-App.",
    },
    {
      q: "Brauche ich für den KI-Modus besonderes Markup oder eine llms.txt?",
      a: "Nein. Google schreibt, dass es für Übersichten mit KI und KI-Modus keine zusätzlichen Anforderungen, keine speziellen schema.org-Daten und keine KI-Textdateien braucht. Voraussetzung ist eine indexierte Seite, die für ein Snippet geeignet ist.",
    },
    {
      q: "Kann der KI-Modus in Deutschland schon Tische reservieren oder Termine buchen?",
      a: "Nach unserem Stand vom 11. Oktober 2026 nicht. Restaurantreservierungen im KI-Modus gibt es in den USA und seit April 2026 in Großbritannien, Tickets und Beauty-Termine nur in einem Test in den USA. Eine Ankündigung für die DACH-Region haben wir nicht gefunden.",
    },
    {
      q: "Wie sehe ich, ob meine Website im KI-Modus erscheint?",
      a: "Die Search Console zählt Klicks und Impressionen aus dem KI-Modus im Leistungsbericht unter „Web“ mit. Der Bericht für generative KI-Funktionen zeigt zusätzlich Impressionen, allerdings ohne Klicks; eine Trennung von Übersichten mit KI und KI-Modus beschreibt Google nicht. Was über Ihren Betrieb gesagt wird, sehen Sie nur mit eigenen Stichproben.",
    },
    {
      q: "Kann ich meine Website aus dem KI-Modus ausschließen?",
      a: "Ja. Seit dem 31. August 2026 nimmt eine Einstellung in der Search Console Ihre Website (genauer: die jeweilige Property) aus Übersichten mit KI, KI-Modus und den KI-Funktionen in Discover heraus. Einzelne Inhalte begrenzen Sie mit nosnippet, data-nosnippet, max-snippet oder noindex. Für die meisten lokalen Betriebe ist ein Ausschluss nicht sinnvoll.",
    },
    {
      q: "Kann mir jemand einen Platz im KI-Modus garantieren?",
      a: "Nein. Google schreibt, dass Indexierung und Ausspielung auch bei erfüllten Voraussetzungen nicht garantiert sind. Wer Ihnen einen festen Platz in den Antworten verspricht, verspricht etwas, das Google selbst nicht zusagt.",
    },
  ],
  sources: [
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Get AI-powered responses with AI Mode in Google Search", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/16011537?hl=en" },
    { title: "“AI Mode” in Search Labs", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/16296315" },
    { title: "How to check pricing for local businesses with AI in Google Search", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/16421135?hl=en" },
    { title: "Booking restaurants in the UK just got easier with AI in Search (10. April 2026)", publisher: "Google Blog UK", url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/ai-mode-restaurants-uk/" },
    { title: "Search generative AI control", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16908024?hl=en" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16984139" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "AI Mode in der Search Console: Zählweise laut Google-Hilfe (16. Juni 2025)", publisher: "Search Engine Land", url: "https://searchengineland.com/google-ai-mode-traffic-data-search-console-457076" },
    { title: "Search Console: KI-Bericht und Ausschluss-Einstellung weltweit (31. August 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-486269" },
    { title: "Google finally gives Search Console its own generative AI visibility reports (3. Juni 2026)", publisher: "PPC Land", url: "https://ppc.land/google-finally-gives-search-console-its-own-generative-ai-visibility-reports/" },
    { title: "Google AI Mode Adds Agentic Booking, Expands To More Countries (21. August 2025)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-ai-mode/561366/" },
    { title: "Google’s AI Mode expands globally, adds new agentic features (21. August 2025)", publisher: "TechCrunch", url: "https://www.techcrunch.com/2025/08/21/googles-ai-mode-expands-globally-adds-new-agentic-features" },
    { title: "Google AI Mode starts rolling out agentic booking in Labs (4. November 2025)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-ai-mode-starts-rolling-out-agentic-booking-in-labs/559973/" },
    { title: "Google adds AI shopping tools across Search and Gemini (13. November 2025)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-adds-ai-shopping-tools-across-search-gemini/560800/" },
    { title: "Google extends AI travel planning and agentic booking in Search (17. November 2025)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/google-extends-ai-travel-planning-and-agentic-booking-in-search/561251/" },
  ],
  related: [
    { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews und Local SEO" },
    { slug: "unternehmensprofil-ki-funktionen-2026", title: "Unternehmensprofil und KI-Funktionen" },
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
  ],
  cta: {
    title: "Wie erscheint Ihr Betrieb im KI-Modus?",
    text: "Wir prüfen, ob Google Ihre wichtigsten Seiten indexieren und mit Snippet zeigen darf, was der KI-Modus auf typische Fragen zu Ihrem Betrieb antwortet und ob Website und Unternehmensprofil übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
