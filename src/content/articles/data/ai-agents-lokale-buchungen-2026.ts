import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-agents-lokale-buchungen-2026",
  lang: "de",
  seoTitle: "KI-Agenten und lokale Buchungen 2026: Stand für DACH",
  seoDescription:
    "Welche KI-Agenten 2026 Tische und Termine buchen, über welche Partner, in welchen Ländern und was Hotels, Restaurants und Salons in DACH jetzt vorbereiten.",
  h1: "KI-Agenten und lokale Buchungen 2026: Was wirklich gebucht wird und was Betriebe in DACH vorbereiten",
  kicker: "KI-Agenten",
  lead:
    "Für Inhaber von Restaurants, Hotels, Salons und Praxen, die wissen wollen, ob KI-Assistenten schon für ihre Kunden reservieren. Sie erfahren, welche Funktionen es im Oktober 2026 gibt, in welchen Ländern, über welche Buchungspartner sie laufen und was Sie vorbereiten können, ohne auf Versprechen zu setzen.",
  answer:
    "KI-Agenten, die freie Tische, Termine oder Tickets suchen und bis zur Buchung führen, gibt es vor allem in den USA. Google findet im KI-Modus freie Restauranttische in den USA und seit April 2026 in Großbritannien, gebucht wird bei Partnern wie OpenTable. Für Deutschland, Österreich und die Schweiz ist das nicht angekündigt. ChatGPT sucht freie Tische weltweit über OpenTable. Vorbereitet ist, wer online buchbar ist und überall dieselben Daten zeigt.",
  takeaways: [
    "Google findet im KI-Modus freie Restauranttische: in den USA seit November 2025 auch ohne Search Labs, in Großbritannien seit April 2026. Gebucht wird bei Partnern wie OpenTable, Resy oder TheFork, nicht bei Google selbst.",
    "Für Deutschland, Österreich und die Schweiz haben wir bis zum 11. Oktober 2026 keine Ankündigung von Google für agentische Buchungen gefunden. Den Agenten Gemini Spark schließt Google im Europäischen Wirtschaftsraum und in der Schweiz ausdrücklich aus.",
    "ChatGPT sucht seit August 2026 freie Tische, über OpenTable weltweit, über Resy nur in den USA und über Yelp in den USA und Kanada. Den ChatGPT-Agenten gibt es laut OpenAI nicht mehr; der Cloud-Browser von ChatGPT Work fragt vor Reservierungen und Zahlungen nach.",
    "Die dokumentierten Buchungsfunktionen laufen über bestehende Buchungssysteme oder die Website des Betriebs. Wer bei einem verbreiteten Anbieter buchbar ist und im Unternehmensprofil den richtigen Buchungslink hinterlegt, ist am besten vorbereitet.",
    "Spezielles Markup verlangt Google für seine KI-Funktionen in der Suche nicht. Wichtiger sind aus unserer Sicht Preise und Regeln als Text und Formulare, die Mensch und Software bedienen können.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-11",
  readingTime: 13,
  sections: [
    {
      id: "was-agenten-tun",
      title: "Was ein KI-Agent bei einer Buchung tut",
      answer:
        "Ein KI-Agent sucht nicht nur, er handelt: Er prüft Verfügbarkeiten, füllt Formulare aus oder ruft an. Bei den meisten dokumentierten Funktionen bestätigt am Ende der Nutzer, und gebucht wird beim Partner oder auf der Website des Betriebs.",
      blocks: [
        {
          t: "p",
          text: "Man kann drei Arten unterscheiden. Sie unterscheiden sich darin, wo der Agent arbeitet und was Ihr Betrieb dafür braucht.",
        },
        {
          t: "table",
          caption: "Drei Arten, wie KI-Assistenten für Kunden buchen",
          head: ["Art", "Wie es funktioniert", "Beispiele (Oktober 2026)", "Was Ihr Betrieb braucht"],
          rows: [
            ["Suche mit Buchungsweg", "Der Assistent zeigt freie Zeiten aus angebundenen Buchungssystemen und führt zur Buchung beim Partner", "Reservierungen im KI-Modus von Google, Tischsuche in ChatGPT", "Einen Buchungsanbieter, mit dem der Assistent zusammenarbeitet"],
            ["Browser-Agent", "Der Agent öffnet Websites im Browser des Nutzers oder in einem Cloud-Browser, klickt und füllt Formulare aus", "ChatGPT Work mit Cloud-Browser, Gemini in Chrome, Browse with Copilot", "Eine Buchungsstrecke, die sich ohne Umwege bedienen lässt"],
            ["Anruf", "Eine KI ruft im Auftrag des Nutzers an, fragt Preise ab oder vereinbart Termine", "Google und Gemini, bisher nur in den USA", "Eine erreichbare Telefonnummer und klare Auskünfte"],
          ],
        },
        {
          t: "p",
          text: "Dieser Artikel vergleicht alle Anbieter. Wie der KI-Modus von Google sucht und was er darüber hinaus leistet, steht in [Google AI Mode und Local SEO](/blog/google-ai-mode-local-seo-2026#buchen-reservieren). Wie ChatGPT Betriebe und Quellen auswählt, erklärt [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "google",
      title: "Google: KI-Modus, Gemini und Anrufe",
      answer:
        "Google hat die meisten Buchungsfunktionen, fast alle aber nur in den USA. Restaurantreservierungen im KI-Modus gibt es zusätzlich seit dem 10. April 2026 in Großbritannien.",
      blocks: [
        {
          t: "table",
          caption: "Agentische Funktionen von Google (Stand 11. Oktober 2026)",
          head: ["Funktion", "Verfügbar laut Google", "Partner und Hinweise"],
          rows: [
            ["Restaurantreservierung im KI-Modus", "USA: seit 21. August 2025 im Test für Abonnenten von Google AI Ultra, seit 17. November 2025 auch ohne Anmeldung bei Search Labs. Großbritannien: seit 10. April 2026", "USA unter anderem OpenTable, Resy und Tock. Großbritannien: TheFork, SevenRooms, ResDiary, Mozrest, Foodhub, Dojo, DesignMyNight und OpenTable. Abgeschlossen wird die Buchung beim Partner"],
            ["Tickets sowie Termine für Beauty und Wellness im KI-Modus", "USA, im Test in Search Labs: laut Blog vom November 2025 für alle Labs-Nutzer, laut aktueller Hilfeseite für Abonnenten von Google AI Pro und AI Ultra", "Partner unter anderem Ticketmaster, StubHub, SeatGeek, Vivid Seats, Booksy, Fresha und Vagaro"],
            ["Buchungen für weitere lokale Erlebnisse und Dienstleistungen", "Im Mai 2026 für alle Nutzer in den USA für den Sommer angekündigt", "Google zeigt Preise und Verfügbarkeit und verlinkt zum Anbieter Ihrer Wahl"],
            ["Google ruft Betriebe wegen Preis und Verfügbarkeit an", "USA, auf Englisch, angemeldete Nutzer ab 18", "Beispiele laut Google: Autowerkstatt, Friseursalon, Hundesalon, Wellnesscenter, Fahrschule. Dabei entsteht keine Buchung"],
            ["Gemini Spark, der Agent in der Gemini-App", "Abonnenten von Google AI Pro und Ultra ab 18; ausdrücklich nicht im Europäischen Wirtschaftsraum, in der Schweiz, in Großbritannien und in Nigeria", "Kann über Chrome Websites bedienen, etwa für Tischreservierungen, und bittet vor Käufen und abgeschickten Formularen um Bestätigung"],
            ["Gemini in Chrome mit „auto browse“", "USA, ab 18, Gerätesprache Englisch, mit Google AI Pro oder Ultra", "Beispiele laut Google: Restaurantreservierungen und Termine. Fragt vor dem Absenden von Formularen nach"],
            ["Gemini ruft für den Nutzer an und bucht Termine", "USA, ab 18, mit Google-AI-Abo, Pixel 11 mit US-SIM, Gerätesprache Englisch, nur US-Rufnummern", "Jeder Anruf beginnt mit dem Hinweis, dass ein KI-Assistent von Google anruft"],
          ],
        },
        {
          t: "p",
          text: "Für die Restaurantsuche im KI-Modus nannte Google im August 2025 vier Grundlagen: das Surfen im Web durch den Agenten Project Mariner, direkte Partnerintegrationen, den Knowledge Graph und Google Maps. Im Mai 2026 kündigte Google auf der Entwicklerkonferenz I/O an, die Buchungsfunktionen auf viele weitere Aufgaben auszuweiten. Für Anrufe nannte Google dabei Reparaturen im Haus, Beauty und Tierpflege als Beispiele. Länder außerhalb der USA nannte Google nicht.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "In Großbritannien kam die Reservierung über die Buchungssysteme, die Restaurants dort bereits nutzen. Sollte Google sie im deutschsprachigen Raum starten, erwarten wir dasselbe Muster. Angekündigt ist das nicht.",
        },
      ],
    },
    {
      id: "chatgpt-und-andere",
      title: "ChatGPT, Perplexity, Copilot und Alexa",
      answer:
        "ChatGPT ist nach unserem Stand der einzige große Assistent, dessen Tischsuche der Anbieter ausdrücklich weltweit anbietet, und zwar über OpenTable. Die übrigen Buchungsfunktionen sind auf einzelne Länder beschränkt oder ohne Länderangabe.",
      blocks: [
        {
          t: "table",
          caption: "Weitere Assistenten mit Buchungsfunktionen (Stand 11. Oktober 2026)",
          head: ["Funktion", "Verfügbarkeit laut Anbieter", "Hinweise"],
          rows: [
            ["ChatGPT: freie Restauranttische finden", "Seit 10. August 2026 in den Tarifen für Privatnutzer, nicht in Business, Enterprise und Edu; OpenTable weltweit, Resy in den USA, Yelp in den USA und Kanada", "Man nennt Ort, Zeit und Personenzahl und wählt eine freie Zeit aus. Nicht im Sprachmodus und nicht in ChatGPT Work"],
            ["ChatGPT Work (gestartet am 9. Juli 2026) mit Cloud-Browser", "Bezahlte Tarife außer Free und Go, in den unterstützten Regionen; Einführung schrittweise", "Bedient Websites, etwa um Verfügbarkeiten bei Restaurants zu prüfen. Fragt vor Reservierungen und Zahlungen immer nach"],
            ["Expedia-App in ChatGPT (Hotels)", "Beim Start im Oktober 2025 nur außerhalb der EU", "Ob sich das geändert hat, haben wir in keiner Quelle gefunden"],
            ["Perplexity", "Keine Länderangabe gefunden", "Laut TechRadar Reservierungen über OpenTable (August 2025), laut Tageskarte Hotelbuchungen über Selfbook mit Daten von Tripadvisor (April 2025). Eine eigene Dokumentation von Perplexity dazu haben wir nicht gefunden"],
            ["Browse with Copilot in Microsoft Edge", "Für Abonnenten von Microsoft 365 Premium in den USA, weitere Märkte angekündigt", "Bittet vor einer Reservierung um Bestätigung"],
            ["Alexa+ von Amazon", "Early Access in Deutschland und Österreich seit 7. Mai 2026", "Für Deutschland nennt Amazon als kommende Dienste Kinoheld, GMX und Web.de, aber keinen Partner für Reservierungen oder Termine. In anderen Ländern nennt Amazon etwa OpenTable (Großbritannien) und TheFork (Spanien)"],
          ],
        },
        {
          t: "note",
          label: "Was aus Operator wurde",
          text: "OpenAI hat Operator im Juli 2025 in den ChatGPT-Agenten integriert. Diesen Agenten gibt es laut OpenAI-Hilfe nicht mehr; für längere Aufgaben verweist OpenAI auf ChatGPT Work. Den Browser Atlas hat OpenAI zum 9. August 2026 eingestellt. Wer heute damit wirbt, dass Operator für Ihre Kunden bucht, beschreibt den Stand von 2025.",
        },
        {
          t: "p",
          text: "Wie sich Sprachassistenten wie Alexa+, Gemini und Siri 2026 verändern, beschreibt [Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026).",
        },
      ],
    },
    {
      id: "dach",
      title: "Was davon in Deutschland, Österreich und der Schweiz ankommt",
      answer:
        "Für Betriebe in der DACH-Region ist heute nur eine Buchungsfunktion ausdrücklich für alle Länder dokumentiert: ChatGPT findet freie Tische über OpenTable. Reservierungen im KI-Modus, Anrufe durch Google und Gemini Spark gibt es hier nicht.",
      blocks: [
        {
          t: "table",
          caption: "Verfügbarkeit in DACH nach Funktion (Stand 11. Oktober 2026)",
          head: ["Funktion", "Deutschland", "Österreich", "Schweiz"],
          rows: [
            ["Reservierung im KI-Modus", "Nicht angekündigt", "Nicht angekündigt", "Nicht angekündigt"],
            ["Google ruft Betriebe an", "Nein, nur USA", "Nein, nur USA", "Nein, nur USA"],
            ["Gemini Spark", "Nein, EWR ausgeschlossen", "Nein, EWR ausgeschlossen", "Nein, ausdrücklich ausgeschlossen"],
            ["Gemini in Chrome mit „auto browse“", "Nein, nur USA", "Nein, nur USA", "Nein, nur USA"],
            ["ChatGPT: Tische über OpenTable", "Ja, wenn das Restaurant über OpenTable buchbar ist", "Ja, unter derselben Bedingung", "Ja, unter derselben Bedingung"],
            ["ChatGPT Work mit Cloud-Browser", "Keine Einschränkung genannt", "Keine Einschränkung genannt", "Keine Einschränkung genannt"],
            ["Alexa+", "Early Access", "Early Access", "Nicht genannt"],
          ],
        },
        {
          t: "p",
          text: "Unabhängig von KI-Agenten gibt es bei Google Buchungsbuttons über „Mit Google reservieren“. Die Maps-Hilfe nennt dafür ausdrücklich die USA und schreibt, der Dienst sei nur in bestimmten Ländern verfügbar. Die Partnerliste ist nicht nach Ländern geordnet, enthält aber neben OpenTable auch Anbieter wie Quandoo, Shore, cituro, Gastronovi und Lunchgate. Welche Anbieter es in Ihrem Land gibt, sehen Sie laut Google im Unternehmensprofil unter „Buchungen“.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Neue Funktionen kommen meist zuerst in den USA, dann in Großbritannien. Für die EU gibt es bei mehreren Anbietern spätere Starts oder Ausnahmen, wie bei Gemini Spark. Planen Sie deshalb nicht auf ein Datum hin, sondern so, dass Ihr Betrieb für Menschen und Agenten gleich gut buchbar ist.",
        },
      ],
    },
    {
      id: "vorbereiten",
      title: "Was Hotels, Restaurants und Salons jetzt vorbereiten",
      answer:
        "Bereiten Sie sich auf Agenten so vor wie auf Gäste mit wenig Zeit: online buchbar über einen verbreiteten Anbieter, mit dem richtigen Buchungslink im Unternehmensprofil, mit gleichen Daten überall und mit Preisen und Regeln als Text.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Online buchbar werden", text: "Die dokumentierten Reservierungsfunktionen zeigen freie Zeiten aus Buchungssystemen. Restaurants prüfen, ob ihr Reservierungssystem mit Google verbunden ist und ob sie über OpenTable gefunden werden wollen. Salons und Praxen klären die Google-Anbindung ihres Terminsystems, siehe [Local SEO für Friseure und Beauty](/blog/local-seo-friseursalon-beauty#buchung). Hotels nutzen die kostenlosen Buchungslinks in Google Hotels, siehe [Local SEO für Hotels](/blog/local-seo-hotels#free-booking-links)." },
            { title: "Buchungslink im Unternehmensprofil setzen", text: "Google unterscheidet Aktionslinks wie „Termin vereinbaren“ und „Tisch reservieren“. Pro Kategorie sind bis zu zehn Links möglich, ein bevorzugter Link erscheint oben. Beantragen Sie, dass ein Drittanbieter seinen Link entfernt, muss er das laut Google innerhalb von fünf Tagen tun." },
            { title: "Daten überall gleich halten", text: "Name, Adresse, Telefonnummer, Öffnungszeiten und spezielle Öffnungszeiten müssen in Profil, Buchungssystem und Website übereinstimmen. Google rät für seine KI-Funktionen ausdrücklich, die Angaben im Unternehmensprofil aktuell zu halten. Anleitung: [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Preise und Regeln als Text", text: "Schreiben Sie Preise oder Preisspannen, Stornobedingungen, Anzahlungen, Gruppengrößen, Regeln für Kinder und Hunde und Angaben zur Barrierefreiheit als Text auf die Website und ins Buchungssystem." },
            { title: "Telefon nicht vergessen", text: "Anrufe durch KI gibt es bisher nur in den USA. Wer erreichbar ist und am Telefon klare Auskünfte zu Preis und Verfügbarkeit gibt, ist trotzdem vorbereitet. In den USA lassen sich solche Anrufe im Unternehmensprofil unter den erweiterten Einstellungen abschalten." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Schritt 4 nennt kein Anbieter als Voraussetzung. Er folgt daraus, dass Browser-Agenten Websites lesen und bedienen wie Menschen und dass ihre Nutzer vor dem Abschluss bestätigen sollen. Was nicht lesbar dasteht, kann weder der Agent vergleichen noch der Nutzer prüfen.",
        },
      ],
    },
    {
      id: "buchungsstrecke",
      title: "Die eigene Buchungsstrecke für Agenten bedienbar machen",
      answer:
        "Browser-Agenten klicken sich durch Ihre Website wie ein Mensch. Google empfiehlt Entwicklern dafür echte Schaltflächen, beschriftete Formularfelder und ein ruhiges Layout. Manche Agenten, etwa der Cloud-Browser von ChatGPT Work, lassen sich an einer Signatur erkennen, statt sie pauschal auszusperren.",
      blocks: [
        {
          t: "p",
          text: "Auf web.dev, einer Entwicklerseite von Google, stehen Empfehlungen für Websites, die Agenten bedienen sollen. Für eine Buchungs- oder Kontaktstrecke sind diese besonders wichtig:",
        },
        {
          t: "ul",
          items: [
            "Echte Schaltflächen und Links statt umgebauter Elemente, die nur wie Schaltflächen aussehen.",
            "Jedes Formularfeld mit einer verknüpften Beschriftung, damit klar ist, was „Personen“ oder „Datum“ bedeutet.",
            "Keine durchsichtigen Ebenen über Schaltflächen, etwa von Pop-ups oder Chat-Fenstern.",
            "Ein Layout, das nicht ständig springt. Agenten, die mit Bildschirmfotos arbeiten, kommen laut Google sonst durcheinander.",
            "Eine geprüfte Struktur für Barrierefreiheit, damit der Aufbau der Seite maschinenlesbar und stabil ist.",
          ],
        },
        {
          t: "p",
          text: "Viele Buchungsstrecken laufen über ein eingebettetes Widget Ihres Anbieters. Dann liegt die Bedienbarkeit bei ihm. Fragen Sie nach, wie das Widget mit Agenten und Bildschirmlesern zurechtkommt. Wie gut Ihre Formulare auf dem Handy funktionieren, prüfen Sie mit [Mobile Local SEO](/blog/mobile-local-seo#formulare).",
        },
        {
          t: "h3",
          text: "Bot-Schutz: seriöse Agenten erkennen",
        },
        {
          t: "p",
          text: "Der Cloud-Browser von ChatGPT Work signiert seine Anfragen nach dem Verfahren Web Bot Auth und schickt den Header Signature-Agent mit dem Wert https://chatgpt.com mit. OpenAI beschreibt, wie Sie ihn bei Akamai, Cloudflare, HUMAN und Vercel zulassen; Cloudflare führt ihn als signierten Agenten. Agenten auf Googles Infrastruktur melden sich als Google-Agent. Solche Abrufe auf Nutzeranfrage folgen laut Google in der Regel nicht der robots.txt. Mehr dazu in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Seit Februar 2026 gibt es für Chrome ein frühes Vorschauprogramm für WebMCP, einen Vorschlag, mit dem Websites Agenten Funktionen wie eine Buchung als strukturierte Werkzeuge direkt anbieten. Für einen einzelnen Betrieb ist es heute kein Thema, für Anbieter von Buchungssystemen schon.",
        },
      ],
    },
    {
      id: "nicht-belegt",
      title: "Was Sie nicht glauben sollten",
      answer:
        "Zahlen zum Anteil von Agenten-Buchungen, Gewichtungen von „Agenten-Rankingfaktoren“ und ein Pflicht-Markup für Agenten haben wir in keiner Quelle der Anbieter gefunden. Wer so etwas verspricht, kann es nicht belegen.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Behauptungen und was belegt ist",
          head: ["Behauptung", "Was belegt ist"],
          rows: [
            ["„8 bis 12 Prozent der Buchungen in DACH laufen über Agenten“", "Dafür gibt es keine Quelle. Keiner der Anbieter veröffentlicht solche Zahlen für die DACH-Region."],
            ["„Reservation- und LocalBusiness-Schema sind Pflicht“", "Google schreibt, dass für Übersichten mit KI und KI-Modus keine speziellen schema.org-Daten nötig sind. Strukturierte Daten bleiben nützlich, wenn sie zum sichtbaren Text passen, siehe [Schema Markup für Local SEO](/blog/schema-markup-local-seo)."],
            ["„Agenten bevorzugen Betriebe ab 4,2 Sternen und 30 Bewertungen“", "Kein Anbieter nennt solche Schwellen."],
            ["„Agenten-Besuche erkennt man an Google-Extended“", "Agenten auf Googles Infrastruktur melden sich laut Google als Google-Agent. Google-Extended ist etwas anderes, siehe [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026)."],
            ["„Operator bucht selbstständig für Ihre Kunden“", "Operator ging im Juli 2025 im ChatGPT-Agenten auf, den es laut OpenAI nicht mehr gibt. Der Cloud-Browser von ChatGPT Work fragt vor Reservierungen und Zahlungen nach."],
            ["„In sechs bis zehn Wochen messbar mehr Agenten-Buchungen“", "Dafür gibt es keine Datengrundlage."],
          ],
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Eine frühere Version dieses Artikels nannte Anteile von Agenten-Buchungen, prozentuale Gewichtungen für Signale, Mindestwerte für Bewertungen und Zeiträume für Effekte. Keine dieser Angaben ließ sich belegen. Wir haben sie entfernt.",
        },
      ],
    },
    {
      id: "pruefen-und-messen",
      title: "Prüfen, ob Agenten bei Ihnen ankommen",
      answer:
        "Direkt messen lässt sich das kaum. Brauchbare Hinweise liefern die Buchungsquellen in Ihrem Reservierungssystem, die Buchungen im Unternehmensprofil, signierte Agentenzugriffe in den Server-Protokollen und eigene Testläufe.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Buchungsquelle auswerten", text: "Fragen Sie Ihren Anbieter, ob er ausweist, über welchen Kanal eine Buchung kam, etwa Google, OpenTable oder einen KI-Assistenten." },
            { title: "Leistungsdaten im Profil lesen", text: "Das Unternehmensprofil zählt unter anderem abgeschlossene Buchungen (wenn sie über einen Buchungsanbieter laufen), Klicks auf den Website-Link und Klicks auf die Anruftaste. Vergleichen Sie die Werte Monat für Monat." },
            { title: "Server-Protokolle prüfen", text: "Ihr Hoster kann Zugriffe mit der Kennung Google-Agent oder mit dem Header Signature-Agent von chatgpt.com auswerten. Ein Zugriff heißt noch nicht, dass gebucht wurde." },
            { title: "Selbst testen", text: "Fragen Sie ChatGPT nach einem freien Tisch für Ihre Stadt, eine Uhrzeit und eine Personenzahl. Erscheint Ihr Restaurant mit den richtigen Zeiten? Prüfen Sie in Google und Maps, ob jeder Buchungsbutton zum richtigen Standort führt." },
            { title: "Monatlich festhalten", text: "Datum, Frage, Ergebnis und ein Bildschirmfoto. Antworten schwanken; aussagekräftig wird erst der Verlauf über mehrere Monate." },
          ],
        },
        {
          t: "p",
          text: "Wie Sie KI-Antworten über Ihren Betrieb systematisch prüfen, zeigt die Quellenkarte in [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen#quellenkarte).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann Google in Deutschland schon für Gäste einen Tisch reservieren?",
      a: "Nicht als Agent im KI-Modus. Diese Funktion gibt es laut Google in den USA und seit dem 10. April 2026 in Großbritannien. Unabhängig davon kann Ihr Unternehmensprofil Reservierungslinks zeigen, die zu Ihrem Buchungsanbieter führen.",
    },
    {
      q: "Muss mein Restaurant bei OpenTable sein?",
      a: "Nein. ChatGPT sucht freie Tische laut OpenAI aber weltweit nur über OpenTable; Resy und Yelp gelten nur in Nordamerika. Google nennt für Großbritannien acht Partner. Ob sich ein Anbieter für Sie rechnet, hängt von seinen Gebühren und Ihren Gästen ab.",
    },
    {
      q: "Was passiert, wenn ein Agent falsch bucht?",
      a: "Die Anbieter beschreiben Bestätigungsschritte: ChatGPT Work fragt vor Reservierungen und Zahlungen nach, Gemini vor Käufen und abgeschickten Formularen, Copilot vor Reservierungen. Für Ihren Betrieb gelten die Regeln Ihres Buchungssystems. Stornobedingungen und Anzahlungen sollten deshalb klar im Buchungsablauf stehen.",
    },
    {
      q: "Soll ich KI-Agenten auf meiner Website sperren?",
      a: "Nicht auf der Buchungsstrecke, wenn Sie dort Buchungen wollen. Manche Agenten, etwa der Cloud-Browser von ChatGPT Work, weisen sich mit einer Signatur aus und lassen sich gezielt zulassen. Wie Sie Crawler und Agenten insgesamt steuern, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
    },
    {
      q: "Rufen KI-Assistenten schon bei mir an?",
      a: "Anrufe im Auftrag von Nutzern, bei denen Google Preise oder Verfügbarkeit abfragt oder Gemini Termine vereinbart, gibt es laut Google nur in den USA. Unabhängig davon kann Google Betriebe anrufen, um Angaben im Profil zu bestätigen.",
    },
    {
      q: "Brauche ich eine eigene Schnittstelle für Agenten?",
      a: "Nein. WebMCP, ein Vorschlag für solche Schnittstellen, ist laut Google ein frühes Vorschauprogramm. Wichtiger ist, dass Ihr Buchungssystem mit den großen Plattformen verbunden ist und Ihre Website sich ohne Hürden bedienen lässt.",
    },
  ],
  sources: [
    { title: "AI Mode in Search gets new agentic features and expands globally (21. August 2025)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/search/ai-mode-agentic-personalized/" },
    { title: "New ways to plan travel with AI in Search (17. November 2025)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/search/agentic-plans-booking-travel-canvas-ai-mode/" },
    { title: "Booking restaurants in the UK just got easier with AI in Search (10. April 2026)", publisher: "Google Blog UK", url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/ai-mode-restaurants-uk/" },
    { title: "A new era for AI Search (Google I/O, 19. Mai 2026)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/search/search-io-2026/" },
    { title: "“AI Mode” in Search Labs", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/16296315" },
    { title: "How to check pricing for local businesses with AI in Google Search", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/16421135?hl=en" },
    { title: "About automated calls from Google on behalf of customers", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/16190256?hl=en-GB" },
    { title: "Use Gemini Spark to manage your tasks and workflows in Gemini Apps", publisher: "Gemini Apps Hilfe", url: "https://support.google.com/gemini/answer/16596215?co=GENIE.Platform%3DDesktop&hl=en-CM" },
    { title: "Ask Gemini in Chrome to complete tasks for you with auto browse", publisher: "Google Chrome Hilfe", url: "https://support.google.com/chrome/answer/16821166?hl=en" },
    { title: "Ask Gemini to handle your everyday phone calls", publisher: "Gemini Apps Hilfe", url: "https://support.google.com/gemini/answer/18336420?hl=en" },
    { title: "ChatGPT release notes (Einträge vom 9. Juli, 10. August und 25. August 2026)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes?stream=top" },
    { title: "ChatGPT agent (Hinweis: „ChatGPT agent is no longer available“)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/11752874-chatgpt-agent" },
    { title: "Using cloud browser in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt" },
    { title: "ChatGPT Work’s cloud browser allowlisting", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/11845367-chatgpt-works-cloud-browser-allowlisting" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Introducing Operator (mit Hinweis vom 17. Juli 2025)", publisher: "OpenAI", url: "https://openai.com/index/introducing-operator/?amp=" },
    { title: "Smart trip planning: new Expedia app in ChatGPT (6. Oktober 2025)", publisher: "Expedia Newsroom", url: "https://www.expedia.com/newsroom/smart-trip-planning-new-expedia-app-in-chatgpt-to-plan-your-trip" },
    { title: "Browse with Copilot", publisher: "Microsoft Support", url: "https://support.microsoft.com/en-us/microsoft-copilot/browse-with-copilot" },
    { title: "Alexa+ launches in India: Amazon’s next-gen AI assistant expands internationally (mit Abschnitten zu Deutschland und Österreich, Stand 16. September 2026)", publisher: "Amazon", url: "https://aboutamazon.com/news/devices/alexa-plus-international-launch" },
    { title: "Make a reservation in Google Maps", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/9322362" },
    { title: "Reserve with Google: Partner", publisher: "Google", url: "https://www.google.com/maps/reserve/partners" },
    { title: "Set up bookings through a provider", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7475773?hl=en" },
    { title: "Links in lokalen Brancheneinträgen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6218037?hl=de" },
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Google-Agent (List of Google user-triggered fetchers)", publisher: "Google Crawling Docs", url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent" },
    { title: "Build agent-friendly websites", publisher: "web.dev (Google)", url: "https://web.dev/articles/ai-agent-site-ux" },
    { title: "WebMCP is available for early preview (10. Februar 2026)", publisher: "Chrome for Developers", url: "https://developer.chrome.com/blog/webmcp-epp" },
    { title: "Understand your Business Profile performance and insights", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=en" },
    { title: "Perplexity can help you figure out where to eat, and book your table too (6. August 2025)", publisher: "TechRadar via Yahoo Tech", url: "https://tech.yahoo.com/ai/articles/perplexity-help-figure-where-eat-112631425.html" },
    { title: "Perplexity macht direkte Hotelbuchungen via KI möglich (2. April 2025)", publisher: "Tageskarte", url: "https://www.tageskarte.io/technologie/detail/perplexity-macht-direkte-hotelbuchungen-via-ki-moeglich.html" },
  ],
  related: [
    { slug: "google-ai-mode-local-seo-2026", title: "Google AI Mode und Local SEO" },
    { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants" },
    { slug: "local-seo-hotels", title: "Local SEO für Hotels" },
    { slug: "voice-search-sprachassistenten-local-seo-2026", title: "Sprachassistenten 2026" },
  ],
  cta: {
    title: "Ist Ihr Betrieb für Buchungen über KI bereit?",
    text: "Wir prüfen, ob Ihr Betrieb online buchbar ist, ob die Buchungslinks im Unternehmensprofil stimmen und ob Ihre Daten in Profil, Buchungssystem und Website übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
