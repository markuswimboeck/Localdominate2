import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-voice-search",
  lang: "de",
  seoTitle: "Sprachsuche und Local SEO: Wie Assistenten Betriebe finden",
  seoDescription:
    "Woher Google, Siri und Alexa Angaben zu lokalen Betrieben nehmen, was Sie pflegen sollten, welche Faustregeln zur Sprachsuche nicht stimmen und wie Sie messen.",
  h1: "Local SEO und Sprachsuche: Wie Google, Siri und Alexa lokale Betriebe finden",
  kicker: "Sprachsuche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, woher ein Sprachassistent die Antwort auf „Wo ist der nächste Schlüsseldienst?“ nimmt. Dieser Grundlagenartikel erklärt die Datenquellen von Google, Apple und Amazon, was Sie pflegen sollten und welche alten Faustregeln nicht stimmen. Was sich 2026 durch Gemini, Siri AI und Alexa+ ändert, steht in [Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026).",
  answer:
    "Google beantwortet lokale Sprachanfragen mit der Google-Suche und Google Maps. Apple nennt Siri als einen der Wege, über die Einträge aus Apple Business Kunden erreichen. Woher die klassische Alexa in Deutschland lokale Angaben nimmt, legt Amazon nicht offen. Für die Sprachsuche optimieren heißt deshalb vor allem, Unternehmensprofil, Apple-Eintrag und Website vollständig und übereinstimmend zu halten.",
  takeaways: [
    "Google beantwortet lokale Fragen mit Google-Suche und Google Maps, Apple nennt Siri als Kanal für Einträge aus Apple Business. Eine eigene Liste nur für Sprachanfragen, in die man sich eintragen kann, haben wir bei keinem Anbieter gefunden.",
    "Für lokale Ergebnisse nennt Google drei Faktoren: Relevanz, Entfernung und Bekanntheit. Einen eigenen Faktor für Sprachsuche nennt Google nicht.",
    "Bei Apple pflegen Sie Ihren Eintrag seit dem 14. April 2026 kostenlos über Apple Business, das Apple Business Connect ersetzt hat. Apple nennt Siri als einen der Wege, über die Betriebe damit Kunden erreichen.",
    "Amazon legt für die klassische Alexa in Deutschland nicht offen, woher Angaben zu lokalen Betrieben stammen. Prüfen Sie deshalb selbst, was Alexa über Ihren Betrieb sagt.",
    "Sprachsuche lässt sich nicht direkt messen: Die Search Console hat keine Auswertung für gesprochene Anfragen. Anrufe und Routenanfragen im Unternehmensprofil sind nach unserer Einschätzung die besten Hinweise.",
    "Speakable-Markup ist laut Google eine Betafunktion für Nachrichten auf Englisch in den USA, und FAQ-Rich-Results zeigt Google seit dem 7. Mai 2026 nicht mehr an. Beides hilft lokalen Betrieben bei der Sprachsuche nicht.",
  ],
  publishedAt: "2026-01-25",
  updatedAt: "2026-10-11",
  readingTime: 11,
  sections: [
    {
      id: "woher-die-antworten-kommen",
      title: "Woher Sprachassistenten lokale Antworten nehmen",
      answer:
        "Google sucht in der Google-Suche und in Google Maps, und Apple nennt Siri als einen der Wege, über die Einträge aus Apple Business Kunden erreichen. Amazon nennt für Deutschland keine Datenquelle für lokale Antworten der klassischen Alexa.",
      blocks: [
        {
          t: "table",
          caption: "Sprachassistenten und ihre Datenquellen für lokale Fragen",
          head: ["Assistent", "Woher lokale Angaben kommen", "Was Sie pflegen"],
          rows: [
            ["Google: Sprachsuche in der Google-App, KI-Modus, Assistant und Gemini", "Google-Suche und Google Maps; Gemini sucht Orte laut Google mit öffentlichen Informationen aus Google Maps", "Unternehmensprofil und Website"],
            ["Apple: Siri", "Apple nennt Siri neben Apple Karten, Mail und Wallet als Weg, über den Betriebe mit Apple Business Kunden erreichen", "Ortskarte in Apple Business, früher Apple Business Connect"],
            ["Amazon: Alexa", "Für die klassische Alexa in Deutschland nicht offengelegt; für Alexa+ nennt Amazon Partner je Land", "Einheitliche Daten in allen Verzeichnissen; eigene Stichprobe"],
            ["Microsoft: Cortana", "Als eigene App unter Windows seit Frühjahr 2023 eingestellt", "Nichts mehr. Für die Bing-Suche und Bing Maps pflegen Sie Bing Places"],
          ],
        },
        {
          t: "p",
          text: "Daraus folgt der wichtigste Grundsatz dieses Artikels: Eine eigene Liste nur für Sprachanfragen, in die man sich eintragen kann, haben wir bei keinem Anbieter gefunden. Wer in den Karten- und Suchdiensten richtig und vollständig steht, hat die Grundlage für Sprachanfragen gelegt. Wie Bing und Copilot lokale Daten nutzen, steht in [Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026).",
        },
      ],
    },
    {
      id: "google",
      title: "Google: Sprachsuche, KI-Modus und Gemini",
      answer:
        "Bei Google landet eine gesprochene Frage in denselben Systemen wie eine getippte: in der Google-Suche, in Google Maps oder im KI-Modus. Für lokale Ergebnisse nennt Google drei Faktoren, nämlich Relevanz, Entfernung und Bekanntheit; einen eigenen Faktor für Sprachsuche nennt Google nicht.",
      blocks: [
        {
          t: "p",
          text: "In der Google-App tippen Nutzer auf das Mikrofon und sprechen ihre Frage. Ob und welche Sprachbefehle funktionieren, hängt laut Google von Sprache, Land und Region ab. Im KI-Modus, den es seit dem 8. Oktober 2025 auf Deutsch in Deutschland, Österreich und der Schweiz gibt, lässt sich eine Frage ebenfalls über das Mikrofon stellen.",
        },
        {
          t: "table",
          caption: "Die drei Faktoren für lokale Ergebnisse (laut Google)",
          head: ["Faktor", "Was Google darunter versteht", "Ihr Hebel"],
          rows: [
            ["Relevanz", "Wie gut ein Unternehmensprofil zur Suche passt", "Richtige Kategorie, Leistungen, vollständige Angaben"],
            ["Entfernung", "Wie weit der Betrieb vom Suchenden entfernt ist", "Richtige Adresse oder richtiges Einzugsgebiet"],
            ["Bekanntheit", "Wie bekannt der Betrieb ist, unter anderem an verweisenden Websites und Rezensionen erkennbar", "Echte Bewertungen, Erwähnungen in der Region"],
          ],
        },
        {
          t: "p",
          text: "Gemini, das den Assistant auf Smartphones ablöst, sucht Orte laut Google mit öffentlichen Informationen aus Google Maps und zeigt Adresse, Website, Bewertungen, Öffnungszeiten und eine KI-Zusammenfassung. Die Hilfeseite nennt als Voraussetzung im Oktober 2026 noch Fragen auf Englisch. Eine bessere Platzierung in den lokalen Ergebnissen kann man laut Google nicht kaufen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für Google gilt: Sprachsuche optimieren heißt Unternehmensprofil und Website optimieren. Wie Sie das Profil vollständig pflegen, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "apple",
      title: "Apple: Siri und Apple Karten",
      answer:
        "Apple nennt Siri neben Apple Karten, Mail und Wallet als einen der Kanäle, über die Einträge aus Apple Business Kunden erreichen. Ihren Eintrag pflegen Sie seit dem 14. April 2026 kostenlos über Apple Business.",
      blocks: [
        {
          t: "p",
          text: "Apple Business hat Apple Business Connect ersetzt; bestehende Einträge hat Apple laut eigener Ankündigung übernommen. Für die Ortskarte pflegen Sie Fotos, genaue Standortangaben, Öffnungszeiten und weitere Angaben. Sie erscheint laut Apple in Apple Karten, Safari und Spotlight. Die Schritte stehen in [Apple Business Connect 2026](/blog/apple-business-connect-local-seo-2026).",
        },
        {
          t: "p",
          text: "Welche Datenlieferanten Apple für Karten nutzt, sagt Apple nur teilweise: Auf der Rechtsseite zu Apple Karten stehen TomTom, OpenStreetMap und „andere Datenanbieter“. Die oft gelesene Aussage, Siri beziehe ihre Angaben von Yelp, findet sich dort nicht.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Weil Apple nicht offenlegt, wie Siri Betriebe auswählt, ist der beanspruchte und gepflegte Eintrag in Apple Karten der wichtigste Hebel, den Sie selbst in der Hand haben. Gleichen Sie ihn mit Ihrem Google-Profil ab, siehe [Daten mit Google und Website abgleichen](/blog/apple-business-connect-local-seo-2026#abgleich-mit-google).",
        },
      ],
    },
    {
      id: "amazon",
      title: "Amazon: Alexa",
      answer:
        "Amazon legt nicht offen, woher die klassische Alexa in Deutschland Angaben zu lokalen Betrieben bezieht. Für die neue Alexa+ nennt Amazon Partner je Land, für Deutschland bisher als angekündigte Dienste Kinoheld, GMX und Web.de, aber keinen Anbieter für Restaurants oder Termine.",
      blocks: [
        {
          t: "p",
          text: "Alexa+ gibt es seit dem 7. Mai 2026 in Deutschland und Österreich im Vorabzugang. In anderen Ländern nennt Amazon Partner: OpenTable in Großbritannien und TheFork in Spanien. In einer Mitteilung vom Dezember 2025 nennt Amazon außerdem Thumbtack und Vagaro und kündigt für 2026 Yelp, Angi, Square und Expedia an, ohne Länder zu nennen. Mehr dazu in [Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026#amazon-alexa).",
        },
        {
          t: "note",
          label: "So prüfen Sie Alexa",
          text: "Ohne dokumentierte Quelle bleibt nur die Stichprobe: Fragen Sie Alexa nach Ihrer Leistung in Ihrem Ort und nach Ihrem Betrieb mit Namen. Notieren Sie, was sie sagt. Stimmen Angaben nicht, lässt sich die Quelle nicht nachvollziehen, weil Amazon sie nicht nennt; einheitliche Daten in allen Verzeichnissen sind dann nach unserer Einschätzung der sicherste Weg.",
        },
      ],
    },
    {
      id: "wie-kunden-fragen",
      title: "Wie Kunden fragen und welche Daten antworten",
      answer:
        "Wer einen Assistenten nach einem Betrieb fragt, will meist etwas tun: anrufen, hinfahren oder wissen, ob offen ist. Jede dieser Absichten beantwortet ein bestimmtes Feld in Profil oder Website, und dieses Feld muss stimmen.",
      blocks: [
        {
          t: "table",
          caption: "Typische Sprachanfragen und die Angabe, die sie beantwortet (Beispiele)",
          head: ["Frage", "Antwort kommt aus", "Möglicher Fehler"],
          rows: [
            ["„Hat die Apotheke am Marktplatz jetzt offen?“", "Öffnungszeiten und spezielle Öffnungszeiten im Unternehmensprofil", "Feiertage nicht eingetragen"],
            ["„Ruf den Schlüsseldienst in Bregenz an.“", "Telefonnummer im Profil", "Alte Nummer oder Zentrale statt Standort"],
            ["„Navigiere zum Fahrradladen Huber.“", "Adresse und Markierung auf der Karte", "Markierung am falschen Eingang"],
            ["„Welcher Italiener in Bern hat eine Terrasse?“", "Merkmale im Profil, Angaben auf der Website", "Terrasse nur auf Fotos, nicht als Text"],
            ["„Was kostet ein Herrenhaarschnitt in Kassel?“", "Leistungen und Preise im Profil und auf der Website", "Preise nur in einem PDF"],
          ],
        },
        {
          t: "p",
          text: "Die Formulierungen Ihrer Kunden kennen Sie aus Anrufen und Gesprächen am Tresen. Wie Sie daraus Suchbegriffe machen, zeigt [Local SEO Keywords finden](/blog/local-seo-keywords-finden). Wie Sie Feiertage und Sonderzeiten eintragen, steht in [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage#spezielle-zeiten).",
        },
      ],
    },
    {
      id: "snippets-und-website",
      title: "Hervorgehobene Snippets und die eigene Website",
      answer:
        "Google schreibt, dass hervorgehobene Snippets hilfreich sind, wenn man ein Smartphone nutzt oder mit seinem Gerät spricht. Auswählen kann man sie nicht: Google entscheidet automatisch, und ein Markup dafür gibt es nicht.",
      blocks: [
        {
          t: "p",
          text: "Für Ihre Website heißt das: Schreiben Sie Antworten so, dass ein einzelner Satz die Frage beantwortet. Unter einer Zwischenüberschrift wie „Machen Sie Hausbesuche?“ steht zuerst „Ja, in Graz und im Umkreis von 20 Kilometern“ und danach die Einzelheiten. Wer keine Snippets will, kann sie laut Google mit nosnippet verhindern; für einen lokalen Betrieb ist das selten sinnvoll.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Dieselbe Schreibweise hilft Lesern, hervorgehobenen Snippets und KI-Antworten. Ein eigenes Textformat nur für Sprachsuche ist nicht nötig. Wie Sie Seiten für KI-Antworten aufbauen, steht in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization#lokale-betriebe).",
        },
      ],
    },
    {
      id: "grundausstattung",
      title: "Die Grundausstattung für Sprachanfragen",
      answer:
        "Vier Einträge bilden die Grundlage: das Unternehmensprofil bei Google, die Ortskarte bei Apple, der Eintrag bei Bing und die eigene Website. Dazu kommen übereinstimmende Daten in den wichtigen Verzeichnissen und echte Bewertungen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Unternehmensprofil vervollständigen", text: "Kategorie, Leistungen, Adresse oder Einzugsgebiet, Telefonnummer, Öffnungszeiten, spezielle Öffnungszeiten und Merkmale wie Parkplätze. Laut Google werden Betriebe mit vollständigen und korrekten Angaben mit größerer Wahrscheinlichkeit angezeigt." },
            { title: "Apple Business einrichten", text: "Organisation verifizieren, Standort beanspruchen, Ortskarte füllen. Anleitung: [Apple Business Connect 2026](/blog/apple-business-connect-local-seo-2026#standort-beanspruchen)." },
            { title: "Bing Places prüfen", text: "Für die Bing-Suche und Bing Maps. Was Microsoft zur Rolle von Bing Places für Copilot sagt, steht in [Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026#bing-places-2026)." },
            { title: "Website mit Antworten", text: "Eine Seite je Leistung, Preise oder Preisrahmen, Einzugsgebiet, Anfahrt und Parken als Text." },
            { title: "Daten abgleichen", text: "Name, Adresse, Telefon und Öffnungszeiten überall gleich. Anleitung: [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Bewertungen sammeln", text: "Alle Kunden um eine Bewertung bitten und Bewertungen beantworten. Wie das nach Googles Regeln geht, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)." },
          ],
        },
      ],
    },
    {
      id: "faustregeln",
      title: "Faustregeln, die nicht stimmen oder nicht belegt sind",
      answer:
        "Viele Ratschläge zur Sprachsuche stammen aus der Zeit, als smarte Lautsprecher neu waren. Einige beziehen sich auf Funktionen, die es nicht mehr gibt, andere auf Zahlen oder Datenquellen, für die wir keinen Beleg gefunden haben.",
      blocks: [
        {
          t: "table",
          caption: "Alte Faustregeln im Faktencheck",
          head: ["Faustregel", "Was belegt ist"],
          rows: [
            ["„40 Prozent aller lokalen Suchen sind Sprachsuchen“", "Dafür haben wir keine aktuelle Quelle gefunden. Google weist Sprachsuchen in der Search Console nicht gesondert aus."],
            ["„Sprachsuchen sind im Schnitt 29 Wörter lang“", "Keine belastbare Quelle gefunden."],
            ["„Speakable-Markup bringt Ihren Betrieb in Sprachantworten“", "Speakable ist laut Google eine Betafunktion für Nachrichteninhalte. Sie funktioniert für Nutzer in den USA mit Google-Home-Geräten auf Englisch."],
            ["„FAQ-Markup ist der wichtigste Hebel für Sprachsuche“", "FAQ-Rich-Results zeigt Google seit dem 7. Mai 2026 nicht mehr an. Fragen und Antworten als sichtbarer Text auf der Website bleiben sinnvoll."],
            ["„Legen Sie Fragen und Antworten im Unternehmensprofil selbst an“", "Google hat im September 2025 angekündigt, diese Funktion zu überarbeiten, und die zugehörige Schnittstelle am 3. November 2025 eingestellt. Mehr in [Unternehmensprofil und KI-Funktionen](/blog/unternehmensprofil-ki-funktionen-2026#fragen-und-antworten)."],
            ["„Siri nutzt Yelp, Alexa nutzt Bing“", "Nicht belegt. Apple nennt auf seiner Rechtsseite zu Apple Karten TomTom, OpenStreetMap und andere Datenanbieter, Yelp nicht. Amazon nennt für die klassische Alexa in Deutschland keine Quelle."],
            ["„Optimieren Sie auch für Cortana“", "Cortana ist als eigene App unter Windows seit dem Frühjahr 2023 eingestellt."],
            ["„Sprachergebnisse laden 52 Prozent schneller, 70 Prozent sind HTTPS“", "Dafür haben wir keine Google-Quelle gefunden. Einen eigenen Rankingfaktor für Sprachsuche nennt Google nicht."],
          ],
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Fassung dieses Artikels enthielt mehrere dieser Zahlen und empfahl FAQ-Markup, HowTo-Markup und selbst angelegte Fragen im Profil. Wir haben die Zahlen entfernt und die Empfehlungen an den Stand vom Oktober 2026 angepasst.",
        },
      ],
    },
    {
      id: "messen",
      title: "Sprachsuche messen",
      answer:
        "Direkt messen lässt sich Sprachsuche nicht: Die Search Console gliedert nach Suchanfragen, Seiten, Ländern, Geräten, Darstellungsformen und Datum, aber nicht nach gesprochenen Anfragen. Hinweise liefern die Leistungsdaten im Unternehmensprofil und eigene Stichproben.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profildaten beobachten", text: "Das Unternehmensprofil zählt Klicks auf die Anruftaste, Routenanfragen, Website-Klicks und Buchungen. Steigen Anrufe und Routen, ohne dass sich die Website-Besuche ändern, kann das auch an Sprachanfragen liegen; beweisen lässt es sich nicht." },
            { title: "Stichproben je Assistent", text: "Einmal im Monat dieselben fünf Fragen an Google, Siri und, wenn vorhanden, Alexa. Notieren Sie, ob Ihr Betrieb genannt wird und ob Zeiten, Nummer und Adresse stimmen." },
            { title: "Kunden fragen", text: "Bei Anrufen kurz nachfragen, wie der Kunde auf Sie gekommen ist." },
          ],
        },
        {
          t: "p",
          text: "Wie sich die Assistenten 2026 verändern und worauf Sie bei der Stichprobe achten, steht in [Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026#testen-und-messen).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Muss ich meine Website extra für Sprachsuche umbauen?",
      a: "Nein. Google nennt keinen eigenen Faktor für Sprachsuche. Was hilft, ist dasselbe wie für jede lokale Suche: vollständige Profile, eine Website, die Fragen im ersten Satz beantwortet, und übereinstimmende Daten.",
    },
    {
      q: "Welcher Sprachassistent ist in Deutschland, Österreich und der Schweiz am wichtigsten?",
      a: "Belastbare Marktanteile für Sprachanfragen in DACH haben wir nicht gefunden. Gemini greift für Orte auf Google Maps zurück, und Apple nennt Siri als einen der Wege, über die Einträge aus Apple Business Kunden erreichen. Deshalb sind diese beiden Einträge die Grundlage.",
    },
    {
      q: "Hilft es, Dialektwörter auf die Website zu schreiben?",
      a: "Dazu gibt es keine Aussage der Anbieter. Unsere Einschätzung: Schreiben Sie die Begriffe, die Ihre Kunden tatsächlich verwenden. Wenn in Ihrer Region „Semmel“ gesagt wird, gehört das Wort auch auf die Seite.",
    },
    {
      q: "Wie bringe ich Alexa dazu, meinen Betrieb zu nennen?",
      a: "Einen dokumentierten Weg für die klassische Alexa in Deutschland haben wir nicht gefunden. Halten Sie Ihre Daten in allen Verzeichnissen einheitlich und prüfen Sie per Stichprobe, was Alexa sagt. Für Alexa+ nennt Amazon für Deutschland bisher keine Partner für Restaurants oder Termine.",
    },
    {
      q: "Bringt Speakable-Markup etwas für meinen Betrieb?",
      a: "Nein. Google beschreibt Speakable als Betafunktion für Nachrichteninhalte, die nur für Nutzer in den USA mit Google-Home-Geräten auf Englisch funktioniert.",
    },
    {
      q: "Was ist mit Sprachsuche im Auto?",
      a: "Laut einer E-Mail von Google an Nutzer, über die 9to5Google berichtete, ersetzt Gemini ab dem 4. September 2026 schrittweise den Google Assistant auch in Android Auto, wenn es vom Smartphone aus läuft; Autos mit Google built-in behalten ihn vorerst. Für Orte nutzt Gemini laut Google Informationen aus Google Maps. Einzelheiten stehen in [Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026#google-gemini).",
    },
  ],
  sources: [
    { title: "Use Google Voice Search", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/2940021?hl=en" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Find places & get directions in Gemini Apps", publisher: "Gemini Apps Hilfe", url: "https://support.google.com/gemini/answer/16622866?hl=en&co=GENIE.Platform%3DAndroid" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Understand your Business Profile performance and insights", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=en" },
    { title: "Performance report (Search results): Dimensions and data groupings", publisher: "Search Console Hilfe", url: "https://support.google.com/webmasters/answer/17011259?hl=en" },
    { title: "How Google’s featured snippets work", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/9351707?hl=en" },
    { title: "Featured snippets and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/featured-snippets?hl=en" },
    { title: "Speakable (Article, WebPage) structured data (BETA)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/data-types/speakable?hl=en" },
    { title: "Latest Google Search Documentation Updates (Einträge vom 8. Mai und 15. Juni 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "My Business Q&A API: Change log", publisher: "Google for Developers", url: "https://developers.google.com/my-business/content/qanda/change-log?hl=en" },
    { title: "Introducing Apple Business, a new all-in-one platform for businesses of all sizes (24. März 2026)", publisher: "Apple Newsroom", url: "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" },
    { title: "Apple Maps: Legal (Datenanbieter)", publisher: "Apple", url: "https://www.apple.com/legal/internet-services/maps/legal-en.html" },
    { title: "Alexa+ arrives in India as Amazon’s next-generation AI assistant expands internationally (mit Abschnitten zu Deutschland und Österreich, Stand 16. September 2026)", publisher: "Amazon", url: "https://aboutamazon.com/news/devices/alexa-plus-international-launch" },
    { title: "Expedia, Yelp, Angi, and Square to build new agentic experiences for Alexa+ (23. Dezember 2025)", publisher: "Amazon", url: "https://www.aboutamazon.com/news/devices/alexa-plus-voice-booking-integrations" },
    { title: "End of support for Cortana", publisher: "Microsoft Support", url: "https://support.microsoft.com/cortana" },
    { title: "Google Assistant shutting down on Android and Wear OS in September (4. August 2026)", publisher: "9to5Google", url: "https://9to5google.com/2026-08-04/google-assistant-september-2026-shutdown/" },
  ],
  related: [
    { slug: "voice-search-sprachassistenten-local-seo-2026", title: "Sprachassistenten 2026" },
    { slug: "apple-business-connect-local-seo-2026", title: "Apple Business Connect 2026" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "gbp-oeffnungszeiten-sondertage", title: "Öffnungszeiten und Sondertage" },
  ],
  cta: {
    title: "Was antworten Sprachassistenten über Ihren Betrieb?",
    text: "Wir prüfen Ihr Unternehmensprofil, Ihren Eintrag in Apple Karten und Ihre Website auf die Angaben, nach denen Kunden per Sprache fragen: Öffnungszeiten, Telefonnummer, Adresse und Leistungen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
