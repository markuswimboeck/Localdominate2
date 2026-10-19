import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-voice-search",
  lang: "de",
  seoTitle: "Sprachsuche und Local SEO: die praktische Checkliste",
  seoDescription:
    "Wie gesprochene lokale Fragen funktionieren und welche Profilfelder und Seiten sie beantworten: Öffnungszeiten, Telefon, Anfahrt, Fragen-Seite und Checkliste.",
  h1: "Sprachsuche für lokale Betriebe: Welche Angaben gesprochene Fragen beantworten",
  kicker: "Sprachsuche",
  lead:
    "Für Inhaber lokaler Betriebe, deren Kunden ihr Smartphone fragen statt zu tippen. Sie erfahren, wie sich gesprochene Fragen von getippten unterscheiden, welche Felder im Unternehmensprofil und welche Stellen auf der Website sie beantworten und was Sie getrost weglassen können.",
  answer:
    "Gesprochene lokale Fragen zielen meist auf eine Handlung: Ist jetzt geöffnet, wie lautet die Nummer, wie komme ich hin. Beantwortet werden sie aus denselben Daten wie die normale Suche. Pflegen Sie deshalb Öffnungszeiten mit Sonderzeiten, Telefonnummer, Adresse, Leistungen und Attribute im Unternehmensprofil und schreiben Sie dieselben Fakten als Text auf Ihre Website. Eigene Sprach-Markups oder garantierte Plätze gibt es nicht.",
  takeaways: [
    "Für Sprachsuche gibt es bei Google keine eigene Optimierung. Für Übersichten mit KI und den KI-Modus nennt Google ausdrücklich keine zusätzlichen Anforderungen.",
    "Die häufigsten gesprochenen Fragen betreffen Öffnungszeiten, Anruf, Anfahrt und Angebot. Genau diese Felder müssen im Profil und auf der Website stimmen.",
    "Sonderzeiten für Feiertage gehören ins Profil. Google empfiehlt, Feiertage auch dann zu bestätigen, wenn die Zeiten gleich bleiben.",
    "Ein Fragen-und-Antworten-Bereich auf der Website bleibt sinnvoll, aber als normaler Inhalt. FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr.",
    "Sprachanfragen lassen sich nicht getrennt messen. Anrufe und Routenanfragen im Unternehmensprofil sowie eigene Sprechproben sind die brauchbaren Hinweise.",
  ],
  publishedAt: "2026-01-25",
  updatedAt: "2026-10-12",
  readingTime: 12,
  sections: [
    {
      id: "gesprochen-statt-getippt",
      title: "Wie sich gesprochene Fragen unterscheiden",
      answer:
        "Gesprochene Fragen sind meist ganze Sätze mit Bezug auf jetzt, heute oder die Nähe, und sie enden oft in einer Handlung wie Anrufen oder Losfahren. Zahlen dazu veröffentlichen die Anbieter nicht. Die Beobachtung hilft trotzdem, weil sie zeigt, welche Angaben stimmen müssen.",
      blocks: [
        {
          t: "p",
          text: "Wer tippt, schreibt „Zahnarzt Linz Notdienst“. Wer spricht, fragt „Welcher Zahnarzt in Linz hat heute noch Notdienst?“. Inhaltlich ist es dieselbe Suche. Der Unterschied liegt darin, was die Person als Nächstes tun will: meistens sofort anrufen, hinfahren oder prüfen, ob der Betrieb offen hat.",
        },
        {
          t: "table",
          caption: "Beispiele: getippte und gesprochene Suche und die Angabe, die sie beantwortet (erfundene Beispiele zur Veranschaulichung)",
          head: ["Getippt", "Gesprochen", "Welche Angabe antwortet"],
          rows: [
            ["Bäckerei Sonntag Freiburg", "„Hat in Freiburg am Sonntag eine Bäckerei offen?“", "Reguläre Öffnungszeiten im Profil"],
            ["Elektriker Notdienst Kassel", "„Ruf einen Elektriker-Notdienst in Kassel an“", "Telefonnummer und Hinweis auf Notdienst"],
            ["Tierarzt Winterthur", "„Wie komme ich zum nächsten Tierarzt?“", "Adresse, Route, Parkhinweise"],
            ["Friseur ohne Termin Salzburg", "„Kann ich in Salzburg heute ohne Termin zum Friseur?“", "Leistungsbeschreibung und Text auf der Website"],
            ["Restaurant Ostermontag Graz", "„Hat das Gasthaus am Ostermontag geöffnet?“", "Sonderzeiten für den Feiertag"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ältere Artikel nennen feste Anteile, etwa wie viele lokale Suchen per Sprache gestellt werden oder wie viele Wörter eine Sprachsuche hat. Für den deutschsprachigen Raum haben wir keine Quelle gefunden, die Google, Apple oder Amazon selbst veröffentlicht hätten. Wir lassen solche Zahlen deshalb weg. Wie Sie die Formulierungen Ihrer Kunden selbst sammeln, steht in [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "wo-gesprochen-wird",
      title: "Wo Ihre Kunden heute sprechen",
      answer:
        "Gesprochen wird vor allem in der Google-App, in Google Maps, mit Gemini auf Android-Smartphones und mit Siri auf Apple-Geräten. Soweit Google und Apple es beschreiben, stammen die Antworten aus den Daten der jeweiligen Suche und Karte; ein eigenes Sprachverzeichnis haben wir bei keinem Anbieter gefunden. Welche Quellen jeder Assistent nutzt, beschreibt unser Artikel zu den Sprachassistenten.",
      blocks: [
        {
          t: "table",
          caption: "Orte für gesprochene lokale Fragen im Überblick (Stand 11. Oktober 2026)",
          head: ["Ort", "Was dokumentiert ist", "Woraus die Antwort kommt"],
          rows: [
            ["Google-App, KI-Modus", "Fragen per Spracheingabe über das Mikrofonsymbol; KI-Modus seit 8. Oktober 2025 in Deutschland, Österreich und der Schweiz", "Google-Suche und Unternehmensprofile"],
            ["Search Live", "Gespräch per Stimme und Kamera im KI-Modus, seit 26. März 2026 überall dort, wo es den KI-Modus gibt", "Google-Suche mit Links ins Web"],
            ["Gemini auf Android", "Ersetzt Google Assistant auf Smartphones und gekoppelten Geräten; auf Lautsprechern und Displays läuft weiter Assistant, sofern der Haushalt nicht zu Gemini for Home wechselt, das in Deutschland, Österreich und der Schweiz als Vorabzugang verfügbar ist", "Google-Dienste, je nach Frage Suche und Maps"],
            ["Google Maps", "Im November 2025 angekündigt, laut Fachmedien seit Januar 2026 in Deutschland nutzbar: Gemini beantwortet während der Navigation gesprochene Fragen, etwa nach einem Restaurant entlang der Route", "Google Maps und Unternehmensprofile"],
            ["Siri", "Applebot liefert Inhalte für die Suche in Siri, Spotlight und Safari; Apple Business pflegt Ortsangaben für Apple Karten", "Apple Karten und Websuche von Apple"],
          ],
        },
        {
          t: "p",
          text: "Auf seinen Hilfeseiten nennt Google für den Wechsel von Google Assistant zu Gemini kein festes Datum. Laut einem Bericht von 9to5Google über eine E-Mail von Google an Nutzer wird der Wechsel auf Smartphones ab dem 4. September 2026 schrittweise verpflichtend. Die Gemini-Hilfe beschreibt den Wechsel zurück allerdings noch. Alexa, Siri und Gemini im Detail, mit Datenquellen und Verfügbarkeit in Deutschland, Österreich und der Schweiz, behandelt [Sprachassistenten und Local SEO](/blog/voice-search-sprachassistenten-local-seo-2026). Hier geht es nur um die Angaben, die Sie selbst pflegen.",
        },
        {
          t: "note",
          label: "Wichtig",
          text: "Niemand kann Ihnen garantieren, dass ein Assistent Ihren Betrieb vorliest. Google schreibt, dass ein besseres lokales Ranking nicht angefordert werden kann, auch nicht gegen Bezahlung. Für den KI-Modus erklärt [Google AI Mode und Local SEO](/blog/google-ai-mode-local-seo-2026), was Google dokumentiert.",
        },
      ],
    },
    {
      id: "vier-fragen",
      title: "Die vier Fragen, die fast immer kommen",
      answer:
        "Ist geöffnet, wie erreiche ich den Betrieb, wie komme ich hin und bietet er das Gesuchte an. Für jede dieser Fragen gibt es ein Feld im Unternehmensprofil und eine Stelle auf der Website, die übereinstimmen sollten.",
      blocks: [
        {
          t: "table",
          caption: "Gesprochene Frage, Profilfeld und Stelle auf der Website",
          head: ["Frage", "Feld im Google-Unternehmensprofil", "Stelle auf der Website"],
          rows: [
            ["„Hat … jetzt offen?“", "Öffnungszeiten und Sonderzeiten", "Öffnungszeiten als Text im Fußbereich und auf der Kontaktseite"],
            ["„Ruf … an“", "Telefonnummer", "Anklickbare Nummer auf jeder Seite"],
            ["„Wie komme ich zu …?“", "Adresse oder Einzugsgebiet", "Adresse als Text, Anfahrt, Parken, Eingang"],
            ["„Macht … auch …?“", "Kategorien, Leistungen, Attribute", "Eine Seite je Leistung mit Antwort im ersten Satz"],
          ],
        },
        {
          t: "p",
          text: "Google nennt Relevanz, Entfernung und Bekanntheit als Grundlage lokaler Ergebnisse. Für die Relevanz empfiehlt Google vollständige und genaue Angaben im Profil. Weil Assistenten oft nur ein Ergebnis vorlesen oder anzeigen, fällt ein Fehler in einem dieser vier Felder stärker ins Gewicht als in einer Ergebnisliste. Das ist unsere Einschätzung, keine Aussage von Google.",
        },
      ],
    },
    {
      id: "oeffnungszeiten",
      title: "Öffnungszeiten: die Antwort auf „Hat heute offen?“",
      answer:
        "Tragen Sie die regulären Zeiten für eine normale Woche ein und für Feiertage und Ausnahmen Sonderzeiten. Google empfiehlt, Feiertage auch dann zu bestätigen, wenn die Zeiten gleich bleiben. Sonderzeiten erscheinen nur an den festgelegten Tagen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Reguläre Zeiten** beschreiben laut Google die Öffnungszeiten einer normalen Woche.",
            "**Sonderzeiten** gelten für Feiertage, Veranstaltungen und andere Ausnahmen von bis zu sechs Tagen am Stück. Bei sieben Tagen oder mehr empfiehlt Google, den Betrieb als vorübergehend geschlossen zu markieren.",
            "**Feiertage bestätigen.** Google rät, die Zeiten an offiziellen Feiertagen zu bestätigen, auch wenn sie den regulären entsprechen. Dann wissen Kunden, dass die Angabe stimmt.",
            "**Termin ohne feste Zeiten.** Betriebe, die nur nach Vereinbarung arbeiten, sollen laut Google-Richtlinien keine Öffnungszeiten angeben.",
            "**Saisonbetriebe** geben in der Saison die aktuellen Zeiten als reguläre Zeiten an und markieren den Betrieb außerhalb der Saison als vorübergehend geschlossen.",
          ],
        },
        {
          t: "p",
          text: "Feiertage unterscheiden sich in Deutschland nach Bundesland, in Österreich und der Schweiz zum Teil nach Region. Eine Jahresübersicht und die Feinheiten für Mittagspause, Nachtbetrieb und weitere Zeiten wie Lieferung oder Abholung stehen in [Öffnungszeiten, Feiertage und Sonderzeiten](/blog/gbp-oeffnungszeiten-sondertage).",
        },
        {
          t: "note",
          label: "Praxistipp",
          text: "Schreiben Sie dieselben Zeiten als Text auf die Website, nicht nur als Bild. Ändern Sie beides am selben Tag. Widersprechen sich Website und Profil, kann ein Assistent die falsche Variante wiedergeben.",
        },
      ],
    },
    {
      id: "telefon-anfahrt",
      title: "Telefon und Anfahrt: die Antwort auf „Ruf an“ und „Wie komme ich hin?“",
      answer:
        "Geben Sie eine lokale Telefonnummer an, die Sie selbst verwalten, und die vollständige Adresse, wenn Kunden zu Ihnen kommen. Auf der Website gehören eine anklickbare Nummer, die Adresse als Text und ein Routenlink dazu.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt in den Richtlinien, Sie sollten nach Möglichkeit eine lokale Nummer statt einer Hotline angeben. Sondernummern sind unabhängig von den Kosten für Anrufer nicht erlaubt, und die Nummer muss direkt vom Unternehmen verwaltet werden. Nutzen Sie überall dieselbe Schreibweise. Wie Sie Name, Adresse und Telefon auf allen Plattformen angleichen, steht in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "steps",
          items: [
            { title: "Nummer anklickbar machen", text: "Auf dem Smartphone startet ein Fingertipp den Anruf. Wie Sie Telefon, Route und Formular für mobile Besucher anlegen, zeigt [Mobile Local SEO](/blog/mobile-local-seo#kontakt)." },
            { title: "Routenlink setzen", text: "Ein Link im Format google.com/maps/dir/?api=1&destination= mit Ihrer Adresse öffnet die Wegbeschreibung. Laut Google braucht ein solcher Link keinen API-Schlüssel." },
            { title: "Anfahrt in Worten", text: "Eingang, Stockwerk, Parkplätze, Haltestelle, Zufahrt für Lieferwagen. Solche Sätze kann ein System vorlesen, eine Kartengrafik nicht." },
            { title: "Einzugsgebiet nennen", text: "Wer zum Kunden fährt, etwa Handwerker, nennt die Orte, die er bedient, als Text auf der Website und als Einzugsgebiet im Profil." },
          ],
        },
        {
          t: "p",
          text: "Wer auf Apple-Geräten gefragt wird, braucht zusätzlich einen gepflegten Eintrag in Apple Karten. Apple zeigt Ortsangaben und Öffnungszeiten aus Apple Business unter anderem in Apple Karten, Safari und Spotlight. Die Einrichtung beschreibt [Apple Business und Local SEO](/blog/apple-business-connect-local-seo-2026).",
        },
      ],
    },
    {
      id: "leistungen-attribute",
      title: "Leistungen und Attribute: die Antwort auf „Macht der auch …?“",
      answer:
        "Viele gesprochene Fragen enthalten eine Bedingung: ohne Termin, barrierefrei, mit Kartenzahlung, für Kassenpatienten. Solche Bedingungen gehören als Attribut ins Profil, sofern es eines gibt, und immer als Satz auf die passende Seite der Website.",
      blocks: [
        {
          t: "p",
          text: "Attribute erscheinen laut Google im Unternehmensprofil in der Suche, in Maps und auf anderen Google-Plattformen. Bestimmte Attribute können helfen, dass ein Betrieb bei Suchen nach diesen Eigenschaften erscheint. Beispiele sind WLAN, Sitzplätze im Freien, Zahlungsarten und Barrierefreiheit von Eingang, Toilette und Parkplatz. Manche Attribute stehen nur in bestimmten Ländern oder Kategorien zur Verfügung, manche stammen aus Angaben von Kunden.",
        },
        {
          t: "ul",
          items: [
            "Wählen Sie nur Attribute, die zutreffen. Ein „rollstuhlgerechter Eingang“ hat bei Google feste Kriterien.",
            "Beschreiben Sie jede Leistung auf einer eigenen Seite. Der erste Satz beantwortet die Frage: „Wir schneiden Haare auch ohne Termin, Montag bis Freitag von 9 bis 12 Uhr.“",
            "Schreiben Sie Ausschlüsse dazu: „Keine Hausbesuche“, „Nur Privatpatienten“, „Keine Kartenzahlung unter 10 Euro“. Ein Assistent kann nur weitergeben, was irgendwo steht.",
          ],
        },
        {
          t: "p",
          text: "Welche Attribute es gibt und wie Sie sie setzen, steht in [Attribute im Google-Unternehmensprofil](/blog/gbp-attribute-richtig-nutzen). Wie Sie Leistungsseiten so schreiben, dass KI-Systeme sie richtig wiedergeben, behandelt [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen).",
        },
      ],
    },
    {
      id: "fragen-seite",
      title: "Eine Fragen-Seite als normaler Inhalt",
      answer:
        "Ein Bereich mit echten Kundenfragen und kurzen Antworten hilft Besuchern und kann als Quelle dienen. Er bringt aber keine Sonderdarstellung: FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr, und hervorgehobene Snippets lassen sich laut Google nicht gezielt anfordern.",
      blocks: [
        {
          t: "p",
          text: "Viele ältere Ratgeber empfehlen FAQPage-Markup, um „Position 0“ zu erobern und vorgelesen zu werden. Beides trägt nicht mehr. Google hat FAQ-Snippets eingestellt und die Dokumentation dazu im Juni 2026 entfernt. Zu hervorgehobenen Snippets schreibt Google auf die Frage, ob man eine Seite dafür markieren kann: „Das ist nicht möglich.“ Für Übersichten mit KI und den KI-Modus gibt es laut Google keine zusätzlichen Anforderungen und kein besonderes Markup. Die Seite muss indexiert sein und mit einem Snippet angezeigt werden dürfen.",
        },
        {
          t: "steps",
          items: [
            { title: "Echte Fragen sammeln", text: "Notieren Sie zwei Wochen lang, was am Telefon, an der Theke und per E-Mail gefragt wird. Diese Sätze sind näher an gesprochener Sprache als jede Keyword-Liste." },
            { title: "Frage als Überschrift", text: "Formulieren Sie die Frage so, wie Kunden sie stellen: „Kann ich mit dem Hund in den Gastgarten?“" },
            { title: "Antwort im ersten Satz", text: "Ja oder Nein und die wichtigste Bedingung, in einem kurzen Satz. Erklärungen folgen danach." },
            { title: "Fakten statt Werbung", text: "Zeiten, Preise als Rahmen, Bedingungen, Ort. Keine Superlative, die niemand nachprüfen kann." },
            { title: "Aktuell halten", text: "Ändert sich eine Regel, ändern Sie die Antwort am selben Tag, genau wie im Profil." },
          ],
        },
        {
          t: "note",
          label: "Beispiel (erfunden)",
          text: "Vorher: „Wir sind Ihr kompetenter Partner rund ums Auto in Wels.“ Nachher: „Kann ich ohne Termin zum Reifenwechsel kommen? Ja, Montag bis Freitag von 7:30 bis 11 Uhr. Samstags nur mit Termin.“ Die zweite Fassung beantwortet eine gesprochene Frage vollständig.",
        },
        {
          t: "p",
          text: "Vorhandenes FAQPage-Markup schadet nicht, bringt aber keine sichtbare Darstellung mehr. Hintergründe stehen in [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo#eingestellt). Den Fragenbereich im Unternehmensprofil selbst hat Google umgebaut; der aktuelle Stand steht in [Unternehmensprofil und KI](/blog/unternehmensprofil-ki-funktionen-2026#fragen-und-antworten).",
        },
      ],
    },
    {
      id: "was-nicht-hilft",
      title: "Was Sie weglassen können",
      answer:
        "Verzichten Sie auf Ratschläge, für die es keine Quelle gibt oder die gegen Google-Richtlinien verstoßen: Stichwörter im Firmennamen, eigene Fragen im Profil als Werbefläche, FAQ-Markup für Sonderdarstellungen und Listen angeblicher Rangfaktoren für die Sprachsuche.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Ratschläge zur Sprachsuche und ihr Stand",
          head: ["Ratschlag", "Stand"],
          rows: [
            ["„FAQPage-Markup, damit Google vorliest“", "FAQ-Snippets werden seit dem 7. Mai 2026 nicht mehr gezeigt."],
            ["„Mit Markup das hervorgehobene Snippet holen“", "Laut Google nicht möglich; Google entscheidet selbst."],
            ["„Stadt und Leistung in den Firmennamen“", "Google erlaubt keine unnötigen Informationen im Namen, auch keinen Ort und keine Leistung. Das Profil kann gesperrt werden."],
            ["„Sprachsuche hat eigene Rangfaktoren“", "Von Google nicht dokumentiert. Google nennt Relevanz, Entfernung und Bekanntheit."],
            ["„Eine Callcenter- oder Sondernummer reicht“", "Google empfiehlt nach Möglichkeit eine lokale Nummer; Sondernummern sind nicht erlaubt."],
            ["„Feste Prozentwerte für Sprachsuchen“", "Keine Zahl der Anbieter für den deutschsprachigen Raum gefunden."],
          ],
        },
        {
          t: "p",
          text: "Ladezeit und eine gut bedienbare mobile Seite bleiben wichtig, weil Menschen nach einer gesprochenen Frage oft auf dem Smartphone weiterklicken. Eine eigene Regel für Sprachsuche ist das nicht. Welche Fehler lokale Sichtbarkeit sonst kosten, zeigt [Local SEO Fehler](/blog/local-seo-fehler).",
        },
      ],
    },
    {
      id: "messen",
      title: "Was sich messen lässt",
      answer:
        "Sprachanfragen tauchen in keinem Bericht getrennt auf. Search Console bietet keinen Filter dafür. Brauchbar sind die Anrufe und Routenanfragen im Unternehmensprofil und regelmäßige eigene Sprechproben mit festen Fragen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Unternehmensprofil:** Die Leistungsstatistik zählt, wie oft jemand auf die Anrufschaltfläche getippt und wie oft jemand eine Wegbeschreibung abgefragt hat. Dazu kommen Websiteklicks und die Suchbegriffe. Ob die Suche gesprochen oder getippt war, zeigt Google nicht.",
            "**Search Console:** Der Leistungsbericht gliedert nach Suchanfragen, Seiten, Ländern, Geräten, Darstellung in der Suche und Datum. Eine Gruppe für Sprachsuche gibt es nicht.",
            "**Sprechproben:** Stellen Sie einmal im Monat dieselben fünf Fragen laut, in der Google-App, in Google Maps und mit Siri. Notieren Sie, ob Ihr Betrieb genannt wird und ob Zeiten, Nummer und Adresse stimmen.",
          ],
        },
        {
          t: "p",
          text: "Ergebnisse schwanken je nach Ort, Gerät und Verlauf. Google schreibt selbst, dass Suchergebnisse von Zeitpunkt, Ort, Gerät und Suchverlauf abhängen. Werten Sie deshalb den Verlauf über Monate aus, nicht eine einzelne Antwort. Eine Routine für solche Stichproben beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026).",
        },
      ],
    },
    {
      id: "checkliste",
      title: "Checkliste für gesprochene lokale Fragen",
      answer:
        "Prüfen Sie Öffnungszeiten mit Sonderzeiten, Telefonnummer, Adresse, Leistungen und Attribute im Profil, schreiben Sie dieselben Fakten als Text auf die Website und stellen Sie einmal im Monat Ihre wichtigsten Fragen laut.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Öffnungszeiten", text: "Reguläre Zeiten stimmen, Feiertage der nächsten drei Monate als Sonderzeiten eingetragen oder bestätigt." },
            { title: "Telefon", text: "Lokale Nummer, direkt vom Betrieb verwaltet, im Profil und auf jeder Seite der Website gleich geschrieben und anklickbar." },
            { title: "Adresse und Anfahrt", text: "Adresse oder Einzugsgebiet korrekt, Routenlink auf der Website, Parken und Eingang in Worten beschrieben." },
            { title: "Kategorien, Leistungen, Attribute", text: "Hauptkategorie passt, Leistungen vollständig, nur zutreffende Attribute gesetzt." },
            { title: "Website-Texte", text: "Eine Seite je Leistung, Antwort im ersten Satz, Bedingungen und Ausschlüsse als Text." },
            { title: "Fragen-Bereich", text: "Zehn echte Kundenfragen mit kurzen Antworten, als normaler Inhalt ohne Erwartung an Sonderdarstellungen." },
            { title: "Apple Karten", text: "Eintrag in Apple Business geprüft, Zeiten und Nummer wie bei Google." },
            { title: "Monatliche Probe", text: "Fünf feste Fragen laut stellen, Antworten notieren, Fehler an der Quelle korrigieren." },
          ],
        },
        {
          t: "p",
          text: "Die Grundlagen der lokalen Suche, auf denen das aufbaut, stehen im [Local SEO Leitfaden](/blog/ultimate-guide-local-seo). Wie Sie Ihr Profil vollständig einrichten, zeigt [Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich für die Sprachsuche eine eigene Optimierung?",
      a: "Nein. Gesprochene Fragen werden aus denselben Daten beantwortet wie getippte. Für Übersichten mit KI und den KI-Modus nennt Google ausdrücklich keine zusätzlichen Anforderungen. Entscheidend sind vollständige, richtige Angaben im Profil und auf der Website.",
    },
    {
      q: "Lohnt sich FAQ-Markup für die Sprachsuche noch?",
      a: "Für eine Sonderdarstellung nicht, denn Google zeigt FAQ-Snippets seit dem 7. Mai 2026 nicht mehr. Ein Fragenbereich als normaler Inhalt bleibt sinnvoll, weil er Kunden hilft und Fakten als Text bereitstellt. Vorhandenes Markup müssen Sie nicht entfernen.",
    },
    {
      q: "Welche Angabe ist für gesprochene Fragen am wichtigsten?",
      a: "Meist die Öffnungszeiten, gefolgt von Telefonnummer und Adresse, weil viele gesprochene Fragen sofort zu einem Anruf oder einer Fahrt führen. Pflegen Sie dazu Sonderzeiten für Feiertage. Google empfiehlt, Feiertage auch bei unveränderten Zeiten zu bestätigen.",
    },
    {
      q: "Kann ich sehen, wie viele Kunden per Sprache nach mir suchen?",
      a: "Nein, weder Search Console noch das Unternehmensprofil trennen gesprochene von getippten Suchen. Hinweise geben die Anrufe und Routenanfragen in der Leistungsstatistik Ihres Profils. Ergänzen Sie das mit monatlichen Sprechproben.",
    },
    {
      q: "Gibt es Google Assistant noch?",
      a: "Auf Smartphones ersetzt Google den Assistant durch Gemini, laut einem Bericht von 9to5Google über eine E-Mail von Google schrittweise verpflichtend ab dem 4. September 2026. Auf Lautsprechern und Displays läuft laut Google-Hilfe weiterhin Assistant, außer in Haushalten, die zu Gemini for Home gewechselt sind. Das ist in Deutschland, Österreich und der Schweiz als Vorabzugang verfügbar. Für Ihren Betrieb ändert das wenig, weil beide auf Google-Daten zugreifen.",
    },
  ],
  sources: [
    { title: "Hervorgehobene Snippets und deine Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/featured-snippets?hl=de" },
    { title: "KI-Funktionen und deine Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Latest documentation updates (FAQ-Snippets eingestellt am 7. Mai 2026, Dokumentation entfernt am 15. Juni 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Search Live is expanding globally (26. März 2026)", publisher: "Google Blog", url: "https://blog.google/products-and-platforms/products/search/search-live-global-expansion" },
    { title: "Get started with the Gemini mobile app (Android)", publisher: "Gemini Apps-Hilfe", url: "https://support.google.com/gemini/answer/14554984?hl=en" },
    { title: "Google Assistant shutting down on Android and Wear OS in September (4. August 2026)", publisher: "9to5Google", url: "https://9to5google.com/2026-08-04/google-assistant-september-2026-shutdown/" },
    { title: "Gemini hilft euch beim Navigieren in Google Maps (5. November 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/gemini-in-google-maps/" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Öffnungszeiten bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/15300403?hl=de" },
    { title: "Spezielle Öffnungszeiten festlegen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6303076?hl=de" },
    { title: "Manage your business attributes", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9049526?hl=en" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Get started with Maps URLs", publisher: "Google for Developers", url: "https://developers.google.com/maps/documentation/urls/get-started" },
    { title: "Introducing Apple Business (24. März 2026)", publisher: "Apple Newsroom", url: "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" },
    { title: "About Applebot", publisher: "Apple Support", url: "https://support.apple.com/en-us/119829" },
    { title: "Google Maps in Deutschland: Navigation mit Gemini-Unterstützung (Januar 2026)", publisher: "iPhone-Ticker", url: "https://www.iphone-ticker.de/google-maps-in-deutschland-navigation-mit-gemini-unterstuetzung-272161/" },
  ],
  related: [
    { slug: "voice-search-sprachassistenten-local-seo-2026", title: "Sprachassistenten und Local SEO" },
    { slug: "gbp-oeffnungszeiten-sondertage", title: "Öffnungszeiten, Feiertage und Sonderzeiten" },
    { slug: "mobile-local-seo", title: "Mobile Local SEO: vom Suchtreffer zum Anruf" },
    { slug: "google-ai-mode-local-seo-2026", title: "Google AI Mode (KI-Modus) und Local SEO" },
  ],
  cta: {
    title: "Stimmen Ihre Angaben, wenn Kunden fragen?",
    text: "Wir prüfen Öffnungszeiten, Sonderzeiten, Telefonnummer, Adresse und Leistungen in Ihrem Unternehmensprofil und vergleichen sie mit Ihrer Website. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
