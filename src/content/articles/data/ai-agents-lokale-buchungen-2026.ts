import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-agents-lokale-buchungen-2026",
  lang: "de",
  seoTitle: "KI-Agenten und lokale Buchungen: Stand Oktober 2026",
  seoDescription:
    "Welche KI-Agenten Tische reservieren, Termine buchen oder Betriebe anrufen, in welchen Ländern das geht und wie Sie Buchung und Kontakt für Agenten vorbereiten.",
  h1: "KI-Agenten, die buchen und anrufen: Was es gibt, wo es funktioniert und was lokale Betriebe vorbereiten sollten",
  kicker: "KI-Agenten",
  lead:
    "Für Inhaber von Restaurants, Praxen, Salons, Hotels und Handwerksbetrieben, die wissen wollen, ob KI-Assistenten schon heute im Namen ihrer Kunden buchen oder anrufen. Sie erfahren, was Google, OpenAI, Microsoft, Perplexity und Anthropic dokumentieren, was davon in Deutschland, Österreich und der Schweiz verfügbar ist und wie Sie Buchung und Kontakt so einrichten, dass Mensch und Agent gleichermaßen durchkommen.",
  answer:
    "KI-Agenten, die Tische reservieren, Termine suchen oder Betriebe anrufen, gibt es bei Google, OpenAI, Microsoft, Perplexity und Anthropic. Die meisten Buchungs- und Anruffunktionen starten in den USA oder Großbritannien. Für Deutschland, Österreich und die Schweiz ist vieles nicht angekündigt oder ausdrücklich ausgeschlossen. Vorbereiten können Sie sich trotzdem: mit einem Online-Buchungsweg, klaren Kontaktdaten und einer Website, die ohne Hürden bedienbar ist.",
  takeaways: [
    "Google sucht im KI-Modus freie Restauranttische und verlinkt zur Buchung bei Partnern, aber nur in den USA und seit dem 10. April 2026 in Großbritannien. Für DACH haben wir bis zum 11. Oktober 2026 keine Ankündigung gefunden.",
    "Automatische Anrufe von Google im Auftrag von Kunden gibt es laut Google nur in den USA, und dort nicht in allen Bundesstaaten. Im Unternehmensprofil lassen sie sich unter den erweiterten Einstellungen abschalten.",
    "ChatGPT zeigt seit dem 10. August 2026 in den Tarifen für Privatnutzer freie Tische bei OpenTable (weltweit), Resy (USA) und Yelp (USA und Kanada), laut OpenAI nicht in Business, Enterprise und Edu. Nutzer wählen eine Uhrzeit und buchen.",
    "Gemini Spark steuert Chrome für Aufgaben wie Tischreservierungen, ist aber im Europäischen Wirtschaftsraum und in der Schweiz nicht verfügbar.",
    "Kein Anbieter dokumentiert, nach welchen Kriterien ein Agent einen Betrieb auswählt. Listen mit „Agenten-Rankingfaktoren“ sind nicht belegt.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-12",
  readingTime: 13,
  sections: [
    {
      id: "was-ist-ein-ki-agent",
      title: "Was ein KI-Agent ist und was ihn von der KI-Suche unterscheidet",
      answer:
        "Ein KI-Agent beantwortet nicht nur Fragen, sondern erledigt im Auftrag des Nutzers Schritte: Websites öffnen, Formulare ausfüllen, Verfügbarkeiten prüfen oder einen Betrieb anrufen. Vor Zahlungen und verbindlichen Buchungen fragen die Agenten laut Anbieter nach, Zahlungsdaten gibt in der Regel der Nutzer selbst ein.",
      blocks: [
        {
          t: "p",
          text: "Die KI-Suche, etwa die Übersicht mit KI oder die Suche in ChatGPT, liefert eine Antwort mit Quellen. Ein Agent geht einen Schritt weiter. Er führt eine Aufgabe aus, etwa „Finde für Samstag 19 Uhr einen Tisch für vier Personen in Salzburg“. Dafür nutzt er einen von drei Wegen: einen **Buchungspartner** wie OpenTable, dessen freie Zeiten er anzeigt, einen **Browser**, in dem er Ihre Website wie ein Mensch bedient, oder, bei Google in den USA, einen **automatischen Telefonanruf**.",
        },
      ],
    },
    {
      id: "ueberblick-anbieter",
      title: "Überblick: Welche Agenten es gibt und in welchen Ländern",
      answer:
        "Stand 11. Oktober 2026 ist die Verfügbarkeit sehr unterschiedlich. ChatGPT und Claude in Chrome nennen keine Ausnahme für DACH. Googles Buchungs- und Anruffunktionen sind auf die USA und Großbritannien beschränkt, Gemini Spark schließt den Europäischen Wirtschaftsraum und die Schweiz ausdrücklich aus.",
      blocks: [
        {
          t: "table",
          caption: "Agenten-Funktionen und ihre dokumentierte Verfügbarkeit (geprüft am 11. Oktober 2026)",
          head: ["Funktion", "Was sie für lokale Betriebe tut", "Wo verfügbar laut Anbieter", "Tarif"],
          rows: [
            ["Google KI-Modus: Restaurantbuchung", "Sucht passende Tische und verlinkt zur Buchung beim Partner", "USA; Großbritannien seit 10. April 2026", "Keine Angabe"],
            ["Google KI-Modus: Labs-Experiment", "Reservierungen, Veranstaltungstickets, Termine für Beauty und Wellness", "USA", "Google AI Pro oder Ultra"],
            ["Google: Preise bei Betrieben abfragen", "Ruft mehrere Betriebe an und schickt die Angebote per E-Mail", "USA, Englisch, angemeldet, ab 18", "Keine Angabe"],
            ["Gemini Spark mit Chrome", "Erledigt Aufgaben im Browser, etwa Tischreservierungen", "Nicht im EWR, in der Schweiz, in Großbritannien und Nigeria; Chrome-Steuerung zunächst USA", "Google AI Pro oder Ultra"],
            ["ChatGPT: Restaurant-Reservierung", "Zeigt freie Zeiten, Buchung beim Partner", "OpenTable weltweit, Resy USA, Yelp USA und Kanada", "Tarife für Privatnutzer, nicht Business, Enterprise, Edu"],
            ["ChatGPT Work", "Agent für längere Aufgaben mit eigenem Browser", "Alle unterstützten Regionen, dazu gehören Deutschland, Österreich, Schweiz", "Bezahltarife außer Go"],
            ["Microsoft Copilot Actions", "Aufgaben wie Tischreservierungen im Hintergrund", "Je nach Plattform, Markt und Sprache; keine Länderliste", "Keine Angabe"],
            ["Perplexity mit OpenTable", "Laut TechRadar Schaltfläche „Reserve“ bei verfügbaren Restaurants", "Keine Länderangabe gefunden", "Keine Angabe"],
            ["Claude in Chrome", "Liest Seiten, klickt, füllt Formulare aus", "Keine Länderausnahme genannt", "Alle Bezahltarife"],
          ],
        },
        {
          t: "p",
          text: "Was in den Apps erscheint, kann abweichen, weil Funktionen schrittweise ausgerollt werden. Welche KI-Dienste lokale Betriebe überhaupt nennen, beschreibt [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen).",
        },
      ],
    },
    {
      id: "google",
      title: "Google: Buchen und Anrufen im KI-Modus",
      answer:
        "Google bietet im KI-Modus Restaurantbuchungen über Partner in den USA und in Großbritannien an, weitere Buchungsarten nur im US-Labs-Experiment. Automatische Anrufe bei Betrieben, um Preise und Verfügbarkeit zu erfragen, gibt es laut Google nur in den USA.",
      blocks: [
        {
          t: "p",
          text: "Am 10. April 2026 hat Google die Restaurantbuchung im KI-Modus in Großbritannien gestartet. Nutzer beschreiben ihren Wunsch, etwa Gruppengröße oder Ernährungsbedürfnisse, und bekommen eine Auswahl mit direkten Links. Abgeschlossen wird die Buchung bei Partnern wie TheFork, SevenRooms, ResDiary, Mozrest, Foodhub, Dojo, DesignMyNight und OpenTable. In den USA gibt es zusätzlich ein Experiment in Search Labs für Abonnenten von Google AI Pro und Ultra, das auch Veranstaltungstickets und Termine für Beauty und Wellness abdeckt.",
        },
        {
          t: "p",
          text: "Die Anruffunktion beschreibt Google so: Google kontaktiert Betriebe im Auftrag des Nutzers, um Verfügbarkeit und Preise zu prüfen, und schickt die Angebote per E-Mail. Als Beispiele nennt Google Autowerkstatt, Friseur, Hundesalon, Wellness-Center und Fahrschule. Gebucht wird dabei nicht automatisch. Verfügbar ist das auf Englisch für angemeldete Nutzer ab 18 Jahren in den USA.",
        },
        {
          t: "h3",
          text: "Anrufe von Google im Unternehmensprofil steuern",
        },
        {
          t: "p",
          text: "Laut Hilfe zum Unternehmensprofil kann Google Betriebe auch anrufen, um Angaben wie Öffnungszeiten zu bestätigen, und Informationen aus solchen Gesprächen ins Profil übernehmen. Anrufe im Auftrag von Kunden, etwa für Terminbuchungen oder Wartezeiten, sind laut Google derzeit nur in den USA verfügbar. Abschalten lässt sich beides in den Profileinstellungen unter den erweiterten Einstellungen im Bereich für automatische Anrufe und Nachrichten von Google. Voraussetzung ist ein bestätigtes Profil.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für Betriebe in DACH sind Anrufe im Auftrag von Kunden heute nicht relevant. Anrufe zur Bestätigung von Angaben gibt es laut Google in ausgewählten Regionen und Sprachen, ohne dass Google diese nennt. Merken Sie sich trotzdem, wo der Schalter liegt. Mehr zum KI-Modus allgemein steht in [Google KI-Modus und Local SEO](/blog/google-ai-mode-local-seo-2026).",
        },
      ],
    },
    {
      id: "chatgpt",
      title: "ChatGPT: Reservierungen über Partner und ChatGPT Work",
      answer:
        "ChatGPT sucht seit August 2026 in den Tarifen für Privatnutzer nach freien Restaurant-Tischen bei OpenTable (weltweit), Resy und Yelp (nur Nordamerika). Für längere Aufgaben gibt es seit Juli 2026 ChatGPT Work, das laut OpenAI inzwischen auch einen eigenen Cloud-Browser nutzt. Der frühere ChatGPT agent ist laut OpenAI-Hilfe nicht mehr verfügbar.",
      blocks: [
        {
          t: "p",
          text: "Laut den Versionshinweisen vom 10. August 2026 hilft ChatGPT, freie Reservierungen bei OpenTable, Resy und Yelp zu finden. Nutzer wählen eine Uhrzeit und buchen. OpenTable ist laut OpenAI weltweit verfügbar, Resy nur in den USA, Yelp in den USA und Kanada. Die Versionshinweise sprachen von allen Tarifen; die OpenAI-Hilfe nennt inzwischen nur die Tarife für Privatnutzer und schließt Business, Enterprise und Edu aus. Wichtig ist der Zusatz: ChatGPT Work enthält diese Reservierungssuche nicht.",
        },
        {
          t: "p",
          text: "ChatGPT Work ist laut OpenAI „ein Agent für längere, aufwendigere Aufgaben“. Er wurde am 9. Juli 2026 eingeführt, steht in allen unterstützten Regionen zur Verfügung und steht in den Bezahltarifen außer Go zur Verfügung. Seit dem 25. August 2026 kann Work in den Tarifen Plus und Pro auch auf Websites mit Anmeldung arbeiten. Der Nutzer gibt die Zugangsdaten selbst ein, und vor folgenreichen Handlungen wie einer Reservierung oder Zahlung fragt ChatGPT nach. Die Hilfeseite zum früheren ChatGPT agent verweist inzwischen auf Work.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Version dieses Artikels nannte „OpenAI Operator“ und einen Anteil von 8 bis 12 Prozent aller Online-Buchungen in DACH, die über Agenten laufen. Für diese Zahl gibt es keine Quelle, und die genannten Produkte gibt es in dieser Form nicht mehr. Auch den Browser Atlas hat OpenAI eingestellt; er sollte laut OpenAI ab dem 9. August 2026 nicht mehr funktionieren.",
        },
        {
          t: "p",
          text: "Für Restaurants bedeutet das: Wer über OpenTable buchbar ist, kann in ChatGPT mit freien Zeiten erscheinen. Branchenbezogene Hinweise stehen in [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants).",
        },
      ],
    },
    {
      id: "weitere-anbieter",
      title: "Gemini, Microsoft, Perplexity und Claude",
      answer:
        "Gemini Spark kann in Chrome Aufgaben wie Tischreservierungen erledigen, ist im EWR und in der Schweiz aber nicht verfügbar. Microsoft hat Copilot Actions mit Partnern wie OpenTable angekündigt, ohne Länderliste. Perplexity bindet laut TechRadar OpenTable ein, Anthropic bietet Claude in Chrome für alle Bezahltarife an.",
      blocks: [
        {
          t: "h3",
          text: "Gemini Spark",
        },
        {
          t: "p",
          text: "Google beschreibt Gemini Spark als persönlichen KI-Agenten. Mit dem automatischen Browsen in Chrome auf dem Desktop kann er Aufgaben wie Einkaufen, Reisebuchungen oder Tischreservierungen erledigen. Vor Käufen und dem Absenden von Formularen fragt er nach, Zahlungsdaten gibt der Nutzer selbst auf der Website ein. Voraussetzung ist ein Abo von Google AI Pro oder Ultra. Die Hilfe nennt als Ausnahme den Europäischen Wirtschaftsraum, Nigeria, die Schweiz und Großbritannien. Damit ist Spark in Deutschland, Österreich und der Schweiz nicht nutzbar.",
        },
        {
          t: "h3",
          text: "Microsoft Copilot",
        },
        {
          t: "p",
          text: "Microsoft hat 2025 Copilot Actions vorgestellt: Copilot soll im Hintergrund Tickets buchen oder Tische reservieren. Als Startpartner nennt Microsoft unter anderem Booking.com, Expedia, OpenTable, Tripadvisor und Vrbo. Die Verfügbarkeit hängt laut Microsoft von Plattform, Markt und Sprache ab. Den Copilot Mode in Edge gibt es laut Microsoft in allen Copilot-Märkten für Privatnutzer. Ob Actions in Deutschland, Österreich oder der Schweiz funktioniert, konnten wir in Microsofts Unterlagen nicht finden. Hintergrund zu Bing und Copilot steht in [Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026).",
        },
        {
          t: "h3",
          text: "Perplexity",
        },
        {
          t: "p",
          text: "Laut einem Bericht von TechRadar vom August 2025 hat Perplexity das Reservierungssystem von OpenTable eingebunden. Bei verfügbaren Restaurants erscheint demnach eine Schaltfläche „Reserve“, die Buchung selbst übernimmt OpenTable. Den Browser Comet mit integriertem Assistenten gibt Perplexity seit dem 2. Oktober 2025 kostenlos ab. Länderangaben für die Reservierungsfunktion haben wir nicht gefunden. Mehr zu Perplexity steht in [Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit).",
        },
        {
          t: "h3",
          text: "Claude",
        },
        {
          t: "p",
          text: "Anthropic beschreibt Claude in Chrome als Browser-Erweiterung, mit der Claude Websites lesen, klicken und navigieren kann, auch Formulare ausfüllen. Sie steht laut Anthropic in allen Bezahltarifen zur Verfügung, nur in Chrome und nicht auf Mobilgeräten. Buchungspartner nennt Anthropic nicht.",
        },
      ],
    },
    {
      id: "was-in-dach-fehlt",
      title: "Was in Deutschland, Österreich und der Schweiz noch nicht verfügbar ist",
      answer:
        "In DACH fehlen nach unserer Prüfung bis zum 11. Oktober 2026 Googles Buchungen im KI-Modus, Googles automatische Anrufe und Gemini Spark. Verfügbar sind vor allem Browser-Agenten wie ChatGPT Work und Claude in Chrome sowie die OpenTable-Reservierung in ChatGPT.",
      blocks: [
        {
          t: "table",
          caption: "Verfügbarkeit in DACH nach Dokumentation der Anbieter",
          head: ["Funktion", "Deutschland, Österreich", "Schweiz", "Grundlage"],
          rows: [
            ["Google KI-Modus: Restaurantbuchung", "Nicht angekündigt", "Nicht angekündigt", "Google nennt nur USA und Großbritannien"],
            ["Google: Anrufe im Auftrag von Kunden", "Nein", "Nein", "Google: nur USA"],
            ["Gemini Spark", "Nein (EWR ausgenommen)", "Nein (ausdrücklich ausgenommen)", "Gemini-Hilfe"],
            ["ChatGPT: OpenTable-Reservierung", "Ja, soweit der Betrieb auf OpenTable ist", "Ja, soweit der Betrieb auf OpenTable ist", "OpenAI: OpenTable weltweit"],
            ["ChatGPT Work", "Ja, Bezahltarife", "Ja, Bezahltarife", "OpenAI: alle unterstützten Regionen"],
            ["Claude in Chrome", "Keine Ausnahme genannt", "Keine Ausnahme genannt", "Anthropic-Hilfe"],
            ["Copilot Actions, Perplexity-Reservierung", "Unklar", "Unklar", "Keine Länderangaben gefunden"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Mehrere Anbieter starten neue Funktionen ausdrücklich ohne den EWR und die Schweiz, ohne Gründe zu nennen. Wir rechnen damit, dass Buchungsfunktionen in DACH später kommen als in den USA, können aber keinen Zeitpunkt nennen. Prüfen Sie den Stand selbst, bevor Sie Geld in Anpassungen nur für Agenten stecken.",
        },
      ],
    },
    {
      id: "buchung-maschinenfreundlich",
      title: "Buchung und Kontakt so einrichten, dass Mensch und Agent durchkommen",
      answer:
        "Kein Anbieter dokumentiert, wie ein Agent einen Betrieb auswählt. Was hilft, sind Dinge, die auch menschlichen Kunden nützen: ein Online-Buchungsweg mit freien Zeiten, eindeutige Kontaktdaten überall, Preise und Bedingungen als Text und Formulare, die ohne Umwege funktionieren.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Einen Online-Buchungsweg anbieten", text: "Partnerbuchungen laufen bei Google, OpenAI und laut TechRadar auch bei Perplexity über Reservierungsdienste. Für Restaurants ist OpenTable der Partner, den OpenAI und Google beide nennen; für Praxen, Salons und Handwerk nennen die Anbieter in DACH keine Partner." },
            { title: "Buchungslink im Profil eintragen", text: "Hinterlegen Sie den Link zur Terminbuchung oder Reservierung im Google-Unternehmensprofil und auf der Website an einer festen Stelle." },
            { title: "Kontaktdaten überall gleich halten", text: "Telefonnummer, Adresse, Öffnungszeiten und Sonderzeiten müssen auf Website, Google, Bing Places, Apple und Branchenportalen übereinstimmen. Ein Agent, der eine alte Nummer findet, ruft die falsche an. Anleitung: [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Preise und Bedingungen als Text", text: "Preisrahmen, Mindestgruppengröße, Stornobedingungen, Anzahlung, Einzugsgebiet: als HTML-Text auf der Seite, nicht nur als PDF oder Bild. Wie solche Seiten aufgebaut sind, beschreibt [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen)." },
            { title: "Formulare ohne Umwege", text: "Klar beschriftete Felder und Schaltflächen („Termin anfragen“ statt „Weiter“), wenige Pflichtfelder, eine Bestätigung mit Datum und Uhrzeit. Testen Sie das Formular selbst auf dem Smartphone." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Browser-Agenten bedienen Websites laut Anthropic so, wie ein Mensch es tun würde. Daraus schließen wir: Was für Menschen schwer bedienbar ist, etwa unbeschriftete Symbole, Pop-ups über dem Formular oder ein Buchungsweg über viele Seiten, ist auch für Agenten ein Hindernis. Dafür gibt es keine Messwerte der Anbieter. Anmeldungen und Zahlungen geben die Agenten ohnehin an den Menschen zurück.",
        },
        {
          t: "p",
          text: "Spezielle Auszeichnungen nur für Agenten nennt keiner der geprüften Anbieter. Was strukturierte Daten für KI-Systeme leisten und was nicht, steht in [Schema-Strategie für KI](/blog/schema-strategie-ai-retrieval).",
        },
      ],
    },
    {
      id: "agenten-zugriffe-erkennen",
      title: "Zugriffe von Agenten erkennen und nicht versehentlich blockieren",
      answer:
        "Agenten, die im Auftrag eines Nutzers handeln, melden sich mit eigenen Kennungen, etwa ChatGPT-User oder Google-Agent. Für solche nutzergesteuerten Abrufe gelten robots.txt-Regeln laut OpenAI, Google und Perplexity möglicherweise oder in der Regel nicht; Anthropic beachtet sie auch hier. Blockieren kann sie eher eine Firewall oder ein Bot-Schutz Ihres Hosters.",
      blocks: [
        {
          t: "table",
          caption: "Kennungen nutzergesteuerter Zugriffe laut Anbieter",
          head: ["Kennung", "Anbieter", "Zweck laut Dokumentation", "robots.txt"],
          rows: [
            ["ChatGPT-User", "OpenAI", "Besucht Seiten, wenn Nutzer in ChatGPT oder einem GPT etwas fragen", "Gilt laut OpenAI möglicherweise nicht"],
            ["Google-Agent", "Google", "Agenten auf Google-Infrastruktur, die im Auftrag von Nutzern navigieren und handeln", "Nutzergesteuerte Abrufe ignorieren robots.txt laut Google in der Regel"],
            ["Claude-User", "Anthropic", "Abruf von Websites, wenn Nutzer Claude etwas fragen", "Wird laut Anthropic beachtet; Sperre kann Sichtbarkeit in Claude-Suchen verringern"],
            ["Perplexity-User", "Perplexity", "Nutzeraktionen in Perplexity", "Wird laut Perplexity in der Regel ignoriert"],
          ],
        },
        {
          t: "p",
          text: "Google weist darauf hin, dass sich die Kennung fälschen lässt, und veröffentlicht die IP-Bereiche von Google-Agent. Außerdem testet Google ein Verfahren zur Signatur von Agenten-Anfragen (Web Bot Auth). Wie Sie KI-Zugriffe gezielt erlauben oder sperren und wo Bot-Schutz im Hosting greift, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026#cdn-firewall).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für einen lokalen Betrieb empfehlen wir, nutzergesteuerte Agenten nicht zu blockieren. Ein Kunde, der seinen Assistenten bittet, bei Ihnen einen Termin anzufragen, ist ein Kunde. Prüfen Sie einmal, ob Ihr Hoster oder CDN-Dienst Agenten pauschal abweist. Browser-Erweiterungen wie Claude in Chrome laufen im Browser des Nutzers; ob sie sich in Ihren Logs von normalen Besuchern unterscheiden, dokumentieren die Anbieter nicht. Wie Sie Nennungen und Besuche aus KI-Diensten beobachten, beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026).",
        },
      ],
    },
    {
      id: "reihenfolge",
      title: "Was Sie jetzt tun sollten, in sinnvoller Reihenfolge",
      answer:
        "Zuerst die Grundlagen, die auch ohne Agenten Kunden bringen: Online-Buchung, richtige Kontaktdaten, lesbare Website. Danach prüfen Sie Bot-Schutz und Einstellungen. Agentenspezifische Investitionen lohnen sich erst, wenn Buchungsfunktionen in DACH tatsächlich ankommen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Buchungsweg klären", text: "Gibt es eine Online-Buchung oder Reservierung? Ist der Link im Unternehmensprofil und auf der Website eingetragen?" },
            { title: "Daten abgleichen", text: "Telefon, Adresse, Öffnungszeiten und Sonderzeiten auf allen Plattformen auf denselben Stand bringen." },
            { title: "Formular selbst testen", text: "Eine Buchung auf dem Smartphone vom Anfang bis zur Bestätigung durchspielen und Stolpersteine notieren." },
            { title: "Zugriffe prüfen", text: "Bot-Schutz und Firewall auf pauschale Sperren für KI-Agenten prüfen, Einstellung zu automatischen Anrufen im Profil ansehen." },
            { title: "Stand halbjährlich prüfen", text: "Nachsehen, ob Google, OpenAI, Microsoft oder Perplexity Buchungsfunktionen für Ihr Land oder Ihre Branche ankündigen." },
          ],
        },
        {
          t: "p",
          text: "Eine Platzierung in den Vorschlägen eines Agenten kann Ihnen niemand garantieren, auch wir nicht. Die Schritte oben verbessern aber den Weg zur Buchung für alle Kunden.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann ein KI-Agent heute schon bei meinem Betrieb in Deutschland buchen?",
      a: "Teilweise. ChatGPT findet freie Tische bei Restaurants, die über OpenTable buchbar sind, und ChatGPT Work oder Claude in Chrome können Website-Formulare im Auftrag eines Nutzers ausfüllen. Googles Buchungen im KI-Modus und Gemini Spark sind in Deutschland, Österreich und der Schweiz bis zum 11. Oktober 2026 nicht verfügbar.",
    },
    {
      q: "Ruft Google meinen Betrieb mit einer KI an?",
      a: "Anrufe im Auftrag von Kunden, etwa um Preise oder Verfügbarkeit zu erfragen, gibt es laut Google nur in den USA. Google kann Betriebe aber auch anrufen, um Angaben wie Öffnungszeiten zu bestätigen. Beides lässt sich im Unternehmensprofil unter den erweiterten Einstellungen abschalten.",
    },
    {
      q: "Brauche ich ein spezielles Buchungssystem, damit Agenten buchen können?",
      a: "Für Partnerbuchungen ja: Bei ChatGPT und Google wird der Tisch über Reservierungsdienste gebucht, beide nennen OpenTable. Für Perplexity berichtet TechRadar ebenfalls über OpenTable. Browser-Agenten nutzen dagegen das Formular auf Ihrer Website. Ein klar bedienbares Online-Formular ist deshalb die Grundlage, unabhängig vom Anbieter.",
    },
    {
      q: "Nach welchen Kriterien wählt ein Agent einen Betrieb aus?",
      a: "Das dokumentiert kein Anbieter. Aussagen wie „ab 4,2 Sternen“ oder feste Gewichtungen von Signalen sind nicht belegt. Sinnvoll bleibt, was auch in der normalen lokalen Suche hilft: vollständige, richtige Angaben und echte Bewertungen.",
    },
    {
      q: "Sollte ich KI-Agenten in der robots.txt sperren?",
      a: "Für einen lokalen Betrieb raten wir davon ab, weil die Zugriffe von Kunden ausgelöst werden. Für ChatGPT-User oder Google-Agent gilt die robots.txt laut OpenAI und Google ohnehin möglicherweise oder in der Regel nicht. Wichtiger ist, dass Ihr Bot-Schutz diese Zugriffe nicht pauschal abweist.",
    },
  ],
  sources: [
    { title: "ChatGPT agent", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/11752874-chatgpt-agent" },
    { title: "ChatGPT Release Notes (Einträge 9. Juli, 10. August, 25. August 2026)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Using cloud browser in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt" },
    { title: "ChatGPT Supported Countries", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/7947663-chatgpt-supported-countries" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Booking restaurants in the UK just got easier with AI in Search (10. April 2026)", publisher: "Google Blog", url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/ai-mode-restaurants-uk/" },
    { title: "“AI Mode” in Search Labs", publisher: "Google Search Help", url: "https://support.google.com/websearch/answer/16296315?hl=en" },
    { title: "How to check pricing for local businesses with AI in Google Search", publisher: "Google Search Help", url: "https://support.google.com/websearch/answer/16421135?hl=en" },
    { title: "About automated calls from Google on behalf of customers", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/16190256?hl=en" },
    { title: "About automated calls and texts from Google to your business", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/7690269?hl=en" },
    { title: "Use Gemini Spark to manage your tasks & workflows in Gemini Apps", publisher: "Gemini Apps Help", url: "https://support.google.com/gemini/answer/17094507?hl=en" },
    { title: "Gemini Spark updates (30. Juli 2026)", publisher: "Google Blog", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/" },
    { title: "Google-Agent (user-triggered fetcher)", publisher: "Google for Developers", url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent" },
    { title: "Your AI companion (Copilot Actions, 2025)", publisher: "Microsoft", url: "https://blogs.microsoft.com/blog/2025/04/04/your-ai-companion/" },
    { title: "Copilot Mode in Edge: FAQ", publisher: "Microsoft", url: "https://explore.microsoft.com/en-us/edge/ai-powered/copilot-mode/faqs" },
    { title: "Comet is now available to everyone worldwide (2. Oktober 2025)", publisher: "Perplexity", url: "https://www.perplexity.ai/hub/blog/comet-is-now-available-to-everyone-worldwide" },
    { title: "Perplexity can help you figure out where to eat and book your table too (6. August 2025)", publisher: "TechRadar", url: "https://www.techradar.com/ai-platforms-assistants/perplexity-can-help-you-figure-out-where-to-eat-and-book-your-table-too" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Anthropic, Claude Help Center", url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" },
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/guides/bots" },
    { title: "Get started with Claude in Chrome", publisher: "Anthropic, Claude Help Center", url: "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome" },
    { title: "Google's AI Mode expands agentic restaurant reservations (18. November 2025, Bericht)", publisher: "GSMArena", url: "https://www.gsmarena.com/googles_ai_mode_expands_agentic_restaurant_reservations_flight_deals_canvas-news-70334.php" },
  ],
  related: [
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
    { slug: "google-ai-mode-local-seo-2026", title: "Google KI-Modus und Local SEO" },
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern" },
  ],
  cta: {
    title: "Ist Ihr Buchungsweg bereit für Kunden und ihre Assistenten?",
    text: "Wir prüfen Ihren Buchungs- und Kontaktweg, ob Website und Profile dieselben Daten zeigen und ob Ihr Bot-Schutz KI-Zugriffe pauschal abweist. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
