import type { V4Article } from "../types";

const article: V4Article = {
  slug: "perplexity-claude-lokale-sichtbarkeit",
  lang: "de",
  seoTitle: "Perplexity und Claude für lokale Betriebe: Was belegt ist",
  seoDescription:
    "Wie Perplexity und Claude im Web suchen und Quellen zeigen, welche Crawler zählen, was in DACH gilt und wie lokale Betriebe ihre Sichtbarkeit selbst testen.",
  h1: "Perplexity und Claude: Wie lokale Betriebe dort gefunden und zitiert werden",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, ob Perplexity und Claude sie Kunden empfehlen können. Sie erfahren, was beide Anbieter selbst über Websuche, Quellen und Crawler schreiben, was nur berichtet wird und wie Sie Ihre Sichtbarkeit mit einer festen Routine prüfen.",
  answer:
    "Perplexity und Claude durchsuchen bei passenden Fragen das Web und verlinken ihre Quellen. Beide können einen ungefähren Standort aus der Internetverbindung ableiten. Damit Ihre Website als Quelle in Frage kommt, sollten **PerplexityBot**, **Claude-SearchBot** und **Claude-User** sie lesen dürfen. Rangfaktoren nennen beide Anbieter nicht, eine Platzierung kann niemand garantieren. Klare Fakten auf der Website und einheitliche Profile bleiben der verlässlichste Weg.",
  takeaways: [
    "Perplexity versieht jede Antwort mit nummerierten Quellenverweisen. Claude liefert Zitate, sobald es die Websuche nutzt. Wer als Quelle erscheint, bekommt einen Link.",
    "Für die Suche zählen PerplexityBot sowie Claude-SearchBot und Claude-User. ClaudeBot sammelt laut Anthropic Inhalte, die zum Training der Modelle beitragen können, und lässt sich getrennt davon sperren.",
    "Perplexity-User beachtet die robots.txt laut Perplexity in der Regel nicht, weil ein Nutzer den Abruf auslöst. Anthropic schreibt, dass seine Bots die robots.txt beachten.",
    "Claude ist laut Anthropic in Deutschland, Österreich, der Schweiz und Liechtenstein verfügbar, die Websuche seit Mai 2025 in allen Tarifen. Eine Länderliste von Perplexity haben wir nicht gefunden.",
    "Karten, Hotel- und Restaurantdaten in Perplexity kennt man vor allem aus Berichten über Partnerschaften mit Yelp, Tripadvisor und OpenTable. Ob sie in DACH gelten, ist nicht dokumentiert.",
    "Testen Sie monatlich mit festen Fragen inklusive Ortsangabe und werten Sie die verlinkten Quellen aus. Dort müssen Ihre Angaben stimmen.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "ueberblick",
      title: "Perplexity und Claude im Überblick",
      answer:
        "Perplexity ist eine Antwortmaschine, die Fragen mit einer Suche im Web in Echtzeit beantwortet. Claude, der KI-Assistent von Anthropic, durchsucht das Web, wenn die Websuche eingeschaltet ist; beide zeigen ihre Quellen als Links.",
      blocks: [
        {
          t: "table",
          caption: "Perplexity und Claude laut Dokumentation der Anbieter",
          head: ["Thema", "Perplexity", "Claude"],
          rows: [
            ["Websuche", "Sucht laut Perplexity in Echtzeit im Web", "Eigene Funktion, im Chat einschaltbar, seit Mai 2025 in allen Tarifen"],
            ["Quellen", "Nummerierte Verweise auf die Originalquellen in jeder Antwort", "Zitate mit Links in jeder Antwort, die die Websuche nutzt"],
            ["Standort", "Aus der Netzwerkverbindung abgeleitet oder im Profil von Hand gesetzt", "Kann aus der IP-Adresse abgeleitet werden, wenn lokale Ergebnisse gefragt sind"],
            ["Suchcrawler", "PerplexityBot", "Claude-SearchBot"],
            ["Abruf auf Nutzerwunsch", "Perplexity-User", "Claude-User"],
            ["Trainingscrawler", "Keiner dokumentiert; PerplexityBot dient laut Perplexity nicht dem Training von Basismodellen", "ClaudeBot"],
            ["Karten und lokale Daten", "Nur aus Berichten über Partnerschaften bekannt", "In den geprüften Hilfeseiten nicht beschrieben"],
          ],
        },
        {
          t: "p",
          text: "Wo beide Dienste im Gesamtbild der KI-Suche stehen, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization). Die Besonderheiten von ChatGPT stehen in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "perplexity-suche",
      title: "Wie Perplexity sucht und Quellen zeigt",
      answer:
        "Perplexity interpretiert die Frage, sucht in Echtzeit im Web und fasst die Funde zu einer Antwort mit nummerierten Quellenverweisen zusammen. Wie Quellen ausgewählt und gewichtet werden, legt Perplexity nicht offen.",
      blocks: [
        {
          t: "p",
          text: "Perplexity beschreibt in seiner Hilfe zwei Suchmodi. Die schnelle Suche liefert kurze, direkte Antworten. **Pro Search** geht laut Perplexity tiefer: Die Frage wird in kleinere Schritte zerlegt, bei Bedarf stellt Perplexity Rückfragen und zieht mehr Quellen heran. Jede Antwort enthält Verweise, die zur Originalquelle führen. Geantwortet wird standardmäßig in der Sprache der Frage, im Profil lässt sich eine andere Antwortsprache einstellen.",
        },
        {
          t: "p",
          text: "Für die Suche betreibt Perplexity einen eigenen Index. In der Ankündigung seiner Search API beschreibt der Anbieter einen Index mit hunderten Milliarden Webseiten, der auf derselben Infrastruktur läuft wie die öffentliche Antwortmaschine. Die oft wiederholte Behauptung, Perplexity stütze sich vor allem auf den Bing-Index, findet sich in der Dokumentation nicht.",
        },
        {
          t: "note",
          label: "Standort",
          text: "Perplexity leitet den Standort aus der Netzwerkverbindung ab. Nutzer können ihn im Profil von Hand festlegen. Für Ihre Tests heißt das: Schreiben Sie den Ort in die Frage, sonst sehen Sie nur die Ergebnisse für den Standort Ihres Büros.",
        },
      ],
    },
    {
      id: "perplexity-lokal",
      title: "Lokale Funktionen bei Perplexity: was berichtet wird",
      answer:
        "Eine offizielle Hilfeseite zu Karten oder Branchendaten haben wir bei Perplexity nicht gefunden, wohl aber Berichte über Partnerschaften mit Yelp, Tripadvisor, Selfbook und OpenTable für Restaurants und Hotels. Ob diese Funktionen in Deutschland, Österreich und der Schweiz verfügbar sind, ist nicht dokumentiert.",
      blocks: [
        {
          t: "table",
          caption: "Berichtete lokale Funktionen bei Perplexity",
          head: ["Bericht vom", "Was berichtet wird", "Art der Quelle", "Angabe zu DACH"],
          rows: [
            ["Februar 2024", "Kartenfenster bei lokalen Suchen mit einer Liste von Orten; Kartendienst Mapbox laut Nutzerbeobachtungen", "Fachblog, ausdrücklich ohne offizielle Ankündigung", "Keine"],
            ["März 2024", "Daten von Yelp zu lokalen Betrieben, darunter Karten, Bewertungen und Fotos, vor allem für Restaurants und Cafés", "Fachmedien", "Keine"],
            ["Januar 2025", "Hotelinformationen von Tripadvisor, etwa Zusammenfassungen, Bewertungen und Bilder", "Mitteilung von Tripadvisor, Fachmedien", "Keine"],
            ["März 2025", "Hotelbuchung direkt in Perplexity über Selfbook, zunächst im Web", "Fachmedien", "Keine"],
            ["August 2025", "Tischreservierung über OpenTable mit der Schaltfläche „Reserve“", "Fachmedien", "Keine"],
          ],
        },
        {
          t: "p",
          text: "Alle Einträge stammen aus Berichten und Mitteilungen von Partnern, nicht aus einer Hilfeseite von Perplexity. Wie Perplexity diese Daten heute einbindet und in welchen Ländern, lässt sich daraus nicht ablesen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Wenn Perplexity für Hotels und Restaurants Daten solcher Plattformen nutzt, sollten Ihre Angaben dort stimmen, sofern Sie ohnehin gelistet sind. Ein Grund, sich bei einer Plattform anzumelden, die in Ihrer Region kaum jemand nutzt, ist das nicht. Branchenhinweise stehen in [Local SEO für Hotels](/blog/local-seo-hotels) und [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants).",
        },
      ],
    },
    {
      id: "claude-suche",
      title: "Wie Claude im Web sucht und zitiert",
      answer:
        "Ist die Websuche eingeschaltet, sucht Claude im Web, wenn es für die Antwort hilft, versieht solche Antworten mit Zitaten und kann für lokale Anfragen einen aus der IP-Adresse abgeleiteten Standort nutzen. Eine Karten- oder Branchenfunktion beschreibt Anthropic in den geprüften Hilfeseiten nicht.",
      blocks: [
        {
          t: "p",
          text: "Die Websuche startete im März 2025 zunächst für zahlende Nutzer in den USA. Seit dem 27. Mai 2025 ist sie laut Anthropic weltweit in allen Tarifen verfügbar. Eingeschaltet wird sie im Chat über das Schieberegler-Symbol im Eingabefeld. In Team- und Enterprise-Konten muss zuerst der Inhaber des Arbeitsbereichs sie für alle freigeben. In kostenlosen Konten zählen Suche und Seitenabruf zu den täglichen Nutzungsgrenzen.",
        },
        {
          t: "p",
          text: "Neben der Suche kann Claude ganze Seiten abrufen, wenn ein Nutzer eine Adresse angibt. Anthropic nennt das **Web Fetch**. Ein Interessent kann also die Adresse Ihrer Website einfügen und Claude bitten, Leistungen oder Öffnungszeiten zusammenzufassen. Das gelingt nur, wenn Claude die Seite lesen kann.",
        },
        {
          t: "p",
          text: "Welchen Suchindex Claude nutzt, schreibt Anthropic in den Hilfeseiten nicht. Fachmedien berichteten im März 2025, dass Anthropic **Brave Search** in seine Liste der Unterauftragsverarbeiter aufgenommen hat. Daneben betreibt Anthropic mit Claude-SearchBot einen eigenen Crawler, der laut Anthropic die Qualität der Suchergebnisse verbessern soll.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Weil die Datenquellen nicht vollständig dokumentiert sind, prüfen wir bei Tests zusätzlich, ob die Website in Brave Search gefunden wird. Das ist eine Vorsichtsmaßnahme auf Grundlage der Berichte, keine Empfehlung von Anthropic.",
        },
      ],
    },
    {
      id: "crawler",
      title: "Die Crawler von Perplexity und Anthropic",
      answer:
        "Perplexity nutzt PerplexityBot für die Suche und Perplexity-User für Abrufe auf Nutzerwunsch, Anthropic entsprechend Claude-SearchBot und Claude-User sowie ClaudeBot für Trainingsdaten. Wer in den Antworten als Quelle erscheinen will, lässt die Such- und Nutzeragenten zu.",
      blocks: [
        {
          t: "table",
          caption: "Crawler laut Dokumentation der Anbieter",
          head: ["User-Agent", "Zweck", "robots.txt", "Folge einer Sperre"],
          rows: [
            ["PerplexityBot", "Websites in den Suchergebnissen von Perplexity anzeigen und verlinken; nicht für das Training von Basismodellen", "Steuerbar; Perplexity empfiehlt, ihn zuzulassen", "Perplexity empfiehlt die Freigabe, damit Ihre Website in den Suchergebnissen erscheint; gesperrt kann der Suchcrawler Ihre Seiten nicht lesen"],
            ["Perplexity-User", "Seiten abrufen, wenn ein Nutzer eine Frage stellt; weder für Crawling noch für Training", "In der Regel nicht beachtet, weil ein Nutzer den Abruf auslöst", "Über robots.txt kaum steuerbar"],
            ["Claude-SearchBot", "Das Web durchsuchen, um die Suchergebnisse für Nutzer zu verbessern", "Wird beachtet", "Keine Indexierung für die Suche; Sichtbarkeit und Genauigkeit können sinken"],
            ["Claude-User", "Websites aufrufen, wenn Nutzer Claude Fragen stellen", "Wird beachtet", "Kein Abruf auf Nutzeranfragen; Sichtbarkeit kann sinken"],
            ["ClaudeBot", "Webinhalte sammeln, die zum Training der Modelle beitragen können", "Wird beachtet", "Signal, künftige Inhalte vom Training auszuschließen"],
          ],
        },
        {
          t: "p",
          text: "Eine mögliche Einstellung für einen Betrieb, der in den Antworten erscheinen, aber kein Trainingsmaterial liefern will: PerplexityBot, Claude-SearchBot und Claude-User erlauben, ClaudeBot sperren. Ob Sie das Training ausschließen, ist eine eigene Entscheidung. Änderungen wirken bei Perplexity laut Anbieter nach bis zu 24 Stunden. Anthropic weist darauf hin, dass die Regeln in der robots.txt jeder Subdomain stehen müssen, die Sie ausschließen wollen, und unterstützt zusätzlich die Angabe Crawl-delay.",
        },
        {
          t: "p",
          text: "Bot-Schutz kann Crawler abweisen, obwohl die robots.txt sie erlaubt. Perplexity veröffentlicht seine IP-Bereiche als JSON-Dateien und beschreibt, wie Sie in Cloudflare oder AWS WAF eine Ausnahme einrichten. Anthropic veröffentlicht keine IP-Bereiche und schreibt, dass Sperren nach IP-Adresse möglicherweise nicht richtig funktionieren. Bei Cloudflare lassen sich KI-Crawler inzwischen getrennt nach Suche, Training und Agenten steuern; die aktuellen Einstellungen beschreibt [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026#cdn-firewall).",
        },
        {
          t: "note",
          label: "Mehr zur Steuerung",
          text: "Beispiele für die robots.txt, alle weiteren KI-Crawler und eine Entscheidungshilfe stehen in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
      ],
    },
    {
      id: "verfuegbarkeit-dach",
      title: "Verfügbarkeit in Deutschland, Österreich und der Schweiz",
      answer:
        "Claude steht laut Anthropic in Deutschland, Österreich, der Schweiz und Liechtenstein zur Verfügung, die Websuche in allen Tarifen. Perplexity wird in Deutschland unter anderem von der Telekom angeboten, eine offizielle Länderliste haben wir aber nicht gefunden.",
      blocks: [
        {
          t: "table",
          caption: "Verfügbarkeit nach Stand der geprüften Quellen",
          head: ["Land", "Perplexity", "Claude"],
          rows: [
            ["Deutschland", "Nutzbar; die Telekom bot Privatkunden Anfang 2025 ein Jahr Perplexity Pro an und stellt Privatkunden Perplexity laut Stand November 2025 in der MeinMagenta-App hinter der Schaltfläche „Magenta AI“ bereit", "Auf Anthropics Liste der unterstützten Länder"],
            ["Österreich", "Keine offizielle Angabe gefunden", "Auf der Liste"],
            ["Schweiz und Liechtenstein", "Keine offizielle Angabe gefunden", "Auf der Liste"],
            ["Lokale Partnerfunktionen", "Verfügbarkeit in DACH nicht dokumentiert", "Keine beschrieben"],
          ],
        },
        {
          t: "p",
          text: "Nutzerzahlen für die DACH-Region haben wir in den geprüften Quellen nicht gefunden. Wie viele Ihrer Kunden dort fragen, zeigt nur Ihre eigene Messung. Weil Perplexity in der Sprache der Frage antwortet, lohnt es sich in mehrsprachigen Regionen, die Testfragen in den Sprachen Ihrer Kunden zu stellen.",
        },
      ],
    },
    {
      id: "was-sie-tun-koennen",
      title: "Was lokale Betriebe tun können",
      answer:
        "Sorgen Sie zuerst dafür, dass die Such- und Nutzeragenten Ihre Website lesen können; danach zählen klare Fakten als Text, gleiche Angaben in allen Profilen, echte Bewertungen und lokale Erwähnungen. Eine bestimmte Platzierung kann niemand garantieren.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Zugang sichern", text: "PerplexityBot, Claude-SearchBot und Claude-User in robots.txt und Bot-Schutz zulassen. ClaudeBot nach eigener Entscheidung erlauben oder sperren." },
            { title: "Fakten als Text", text: "Leistung, Ort, Einzugsgebiet, Öffnungszeiten, Preisrahmen und Bedingungen als HTML-Text, nicht nur in Bildern oder PDFs. Der erste Satz unter einer Überschrift beantwortet die Frage. Details in der [Checkliste für KI-Sichtbarkeit](/blog/ai-visibility-checklist#klare-fakten)." },
            { title: "Profile abgleichen", text: "Google-Unternehmensprofil, Bing Places, Apple Business und die Portale Ihrer Branche auf denselben Stand bringen. Das Vorgehen beschreibt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Bewertungen als Ablauf", text: "Alle Kunden fragen, nichts dafür anbieten, niemanden aussortieren. Einen festen Ablauf zeigt [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)." },
            { title: "In lokalen Quellen vorkommen", text: "Kammer, Innung, Tourismusverband, Lokalzeitung, Partnerbetriebe. Beide Dienste verlinken Seiten Dritter, nicht nur Ihre eigene Website." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Weder Perplexity noch Anthropic beschreiben, wie Inhalte gewichtet werden. Nur Schritt 1 stützt sich direkt auf ihre Dokumentation. Die Schritte 2 bis 5 sind unsere Einschätzung: Sie wirken unabhängig davon, aus welcher Quelle ein System Ihre Angaben bezieht, und nützen auch bei Google.",
        },
      ],
    },
    {
      id: "testroutine",
      title: "Sichtbarkeit testen: eine Routine für jeden Monat",
      answer:
        "Stellen Sie einmal im Monat dieselben fünf bis zehn Fragen mit Ortsangabe in Perplexity und in Claude mit eingeschalteter Websuche. Notieren Sie, ob Ihr Betrieb genannt wird, mit welchen Angaben und welche Quellen verlinkt sind.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Fragen festlegen", text: "So, wie Kunden fragen: „Welche Physiotherapie in Linz hat samstags Termine?“, „Hotel mit Hund am Bodensee“, „Schlüsseldienst Winterthur Notdienst“. Immer mit Ort im Text, weil beide Dienste sonst den Standort Ihrer Internetverbindung verwenden können." },
            { title: "Bedingungen gleich halten", text: "Jedes Mal eine neue Unterhaltung. In Perplexity prüfen, ob im Profil ein Standort fest eingestellt ist, und ihn bei Bedarf entfernen. In Claude die Websuche über das Schieberegler-Symbol prüfen, denn nur mit ihr greift Claude auf aktuelle Daten zu und liefert Zitate." },
            { title: "Ergebnis festhalten", text: "Datum, Dienst, Frage, genannt ja oder nein, genannte Angaben wie Adresse, Zeiten und Preise, verlinkte Quellen. Dazu ein Bildschirmfoto als Beleg." },
            { title: "Quellen auswerten", text: "Klicken Sie die Verweise an. Sie zeigen, welche Seiten für diese Frage herangezogen werden, und damit, wo Ihre Angaben stimmen müssen. Falsche Angaben korrigieren Sie an der Quelle, den Ablauf beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)." },
            { title: "Server-Logs prüfen", text: "Suchen Sie nach den User-Agents PerplexityBot, Perplexity-User, Claude-SearchBot und Claude-User. Zugriffe von Perplexity lassen sich mit den veröffentlichten IP-Listen abgleichen; für Anthropic gibt es keine solche Liste." },
            { title: "Verlauf vergleichen", text: "Antworten schwanken, auch bei gleicher Frage. Erst der Vergleich über mehrere Monate zeigt eine Richtung." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Einen Parameter wie utm_source=chatgpt.com, den OpenAI dokumentiert, beschreiben weder Perplexity noch Anthropic in den geprüften Seiten. Besuche erkennen Sie in der Web-Analyse allenfalls an verweisenden Websites wie perplexity.ai oder claude.ai, wenn der Browser die Herkunft mitsendet. Nennungen ohne Klick zeigt nur die Stichprobe.",
        },
      ],
    },
    {
      id: "nicht-belegt",
      title: "Was nicht belegt ist",
      answer:
        "Weder Perplexity noch Anthropic nennen Rangfaktoren, Mindestzahlen an Bewertungen oder eine Rolle von llms.txt und strukturierten Daten. Aussagen wie „Claude bevorzugt strukturierte Inhalte“ oder „Perplexity nutzt den Bing-Index“ stehen nicht in der Dokumentation der Anbieter.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und der Stand der geprüften Quellen",
          head: ["Aussage", "Stand der Dokumentation"],
          rows: [
            ["„Perplexity nutzt vor allem den Bing-Index“", "Perplexity beschreibt einen eigenen Index mit hunderten Milliarden Webseiten. Eine Bestätigung für Bing fanden wir nicht."],
            ["„Perplexity und Claude lesen llms.txt“", "In den geprüften Seiten beider Anbieter kommt llms.txt nicht vor."],
            ["„Schema-Markup bringt Sie in die Antworten“", "Ob strukturierte Daten ausgewertet werden, dokumentiert keiner der beiden Anbieter."],
            ["„Claude bevorzugt strukturierte, faktenbasierte Inhalte“", "Keine Aussage von Anthropic. Beschrieben sind nur Websuche, Zitate, Standort und Crawler."],
            ["„Ab einer bestimmten Zahl an Bewertungen wird man empfohlen“", "Keine Quelle. Keiner der Anbieter nennt Schwellenwerte."],
          ],
        },
        {
          t: "p",
          text: "Deshalb führen wir in diesem Artikel keine Rangfaktoren auf. Was llms.txt leisten kann und was nicht, steht in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie komme ich mit meinem Betrieb in Perplexity?",
      a: "Ein Formular für lokale Betriebe haben wir in Perplexitys Dokumentation nicht gefunden. Ihre Website kann als Quelle erscheinen, wenn PerplexityBot sie lesen darf; Perplexity empfiehlt, ihn zuzulassen. Danach helfen klare Fakten, einheitliche Profile und Erwähnungen in lokalen Quellen, ohne dass eine Platzierung garantiert ist.",
    },
    {
      q: "Muss ich ClaudeBot erlauben, um in Claude zu erscheinen?",
      a: "Nein. ClaudeBot sammelt laut Anthropic Inhalte, die zum Training der Modelle beitragen können. Für die Suche sind Claude-SearchBot und Claude-User zuständig. Sie können ClaudeBot sperren und die beiden anderen zulassen.",
    },
    {
      q: "Kann ich Perplexity-User mit der robots.txt aussperren?",
      a: "Nur eingeschränkt. Perplexity schreibt, dass dieser Agent die robots.txt in der Regel nicht beachtet, weil ein Nutzer den Abruf auslöst. Wer ihn trotzdem aussperrt, etwa über die Firewall, verhindert auch, dass Perplexity Ihre Seite auf eine konkrete Nutzerfrage hin liest.",
    },
    {
      q: "Zeigt Claude lokale Betriebe auf einer Karte?",
      a: "In den geprüften Hilfeseiten beschreibt Anthropic keine Kartenfunktion. Claude kann für lokale Anfragen einen aus der IP-Adresse abgeleiteten Standort nutzen und belegt Antworten mit Websuche durch Zitate.",
    },
    {
      q: "Funktioniert Perplexity auf Deutsch?",
      a: "Ja. Perplexity antwortet standardmäßig in der Sprache der Frage, im Profil lässt sich eine andere Antwortsprache einstellen. In Deutschland stellt die Telekom Privatkunden Perplexity zudem in der MeinMagenta-App hinter der Schaltfläche „Magenta AI“ bereit (Stand November 2025).",
    },
    {
      q: "Kann ich mir eine Nennung in Perplexity oder Claude kaufen?",
      a: "Keiner der beiden Anbieter beschreibt in seiner Dokumentation einen solchen Weg, und Rangfaktoren veröffentlichen beide nicht. Wer Ihnen einen festen Platz in den Antworten verspricht, verspricht etwas, das sich nicht belegen lässt.",
    },
  ],
  sources: [
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
    { title: "How does Perplexity work?", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/faq/how-does-perplexity-work" },
    { title: "Getting started with Perplexity (1. Oktober 2024)", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/blog/getting-started-with-perplexity" },
    { title: "Profile, settings and languages", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/faq/ai-profile" },
    { title: "Introducing the Perplexity Search API", publisher: "Perplexity", url: "https://hub-prod.perplexity.ai/hub/blog/introducing-the-perplexity-search-api" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/8896518" },
    { title: "Enabling and Using Web Search", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/10684626-enabling-and-using-web-search" },
    { title: "Claude can now search the web (20. März 2025, Update 27. Mai 2025)", publisher: "Anthropic", url: "https://claude.com/blog/web-search" },
    { title: "Supported countries and regions", publisher: "Anthropic", url: "https://anthropic.com/supported-countries" },
    { title: "Anthropic appears to be using Brave to power web searches for its Claude chatbot (21. März 2025)", publisher: "TechCrunch", url: "https://techcrunch.com/2025/03/21/anthropic-appears-to-be-using-brave-to-power-web-searches-for-its-claude-chatbot/" },
    { title: "Anthropic Trust Center: Brave Search added as a subprocessor (21. März 2025)", publisher: "Simon Willison’s Weblog", url: "https://simonwillison.net/2025/Mar/21/anthropic-use-brave/" },
    { title: "ICYMI: Perplexity can show a live map for local searches (20. Februar 2024)", publisher: "TestingCatalog", url: "https://www.testingcatalog.com/icymi-perplexity-rolls-out-live-local-search-maps-powered-by-mapbox/" },
    { title: "Perplexity enhances AI search engine with direct Yelp data integration (12. März 2024)", publisher: "Maginative", url: "https://www.maginative.com/article/perplexity-enhances-ai-search-engine-with-direct-yelp-data-integration/" },
    { title: "Perplexity will now show hotel information from TripAdvisor (9. Januar 2025)", publisher: "Engadget", url: "https://www.engadget.com/ai/perplexity-will-now-show-hotel-information-from-tripadvisor-202923788.html" },
    { title: "Tripadvisor and Perplexity Partner to Redefine Travel Planning (10. Januar 2025)", publisher: "Tripadvisor über Hospitality Net", url: "https://www.hospitalitynet.org/news/4125323.html" },
    { title: "Perplexity partners with Selfbook, Tripadvisor to offer hotel booking (25. März 2025)", publisher: "PhocusWire", url: "https://www.phocuswire.com/perplexity-selfbook-agentic-ai-travel-booking-tripadvisor" },
    { title: "Perplexity can help you figure out where to eat, and book your table too (6. August 2025)", publisher: "TechRadar", url: "https://www.techradar.com/ai-platforms-assistants/perplexity-can-help-you-figure-out-where-to-eat-and-book-your-table-too" },
    { title: "Telekom brings Perplexity to the streets (29. Januar 2025)", publisher: "Deutsche Telekom", url: "https://www.telekom.com/en/media/media-information/archive/telekom-brings-perplexity-to-the-streets-1086544" },
    { title: "Geschäftskunden: Gutschein für Perplexity Enterprise Pro (18. November 2025)", publisher: "Deutsche Telekom", url: "https://www.telekom.com/de/newsroom/aktuelles/news/2025/11/perplexity-enterprise-pro-gutschein" },
  ],
  related: [
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern: GPTBot, ClaudeBot und Co." },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "chatgpt-zitiert-lokale-unternehmen", title: "Wie ChatGPT lokale Unternehmen zitiert" },
  ],
  cta: {
    title: "Wie erscheint Ihr Betrieb in Perplexity und Claude?",
    text: "Wir prüfen, ob PerplexityBot, Claude-SearchBot und Claude-User Ihre Website lesen dürfen, was beide Dienste zu Ihrem Betrieb antworten und ob Website und Profile übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
