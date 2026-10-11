import type { V4Article } from "../types";

const article: V4Article = {
  slug: "bing-copilot-local-seo-2026",
  lang: "de",
  seoTitle: "Bing Local SEO: Bing Places, Copilot, Webmaster Tools",
  seoDescription:
    "Bing Places, Bing Webmaster Tools und Microsoft Copilot für lokale Betriebe in DACH: was Microsoft dokumentiert, was offen ist und wie Sie selbst testen.",
  h1: "Bing und Microsoft Copilot für lokale Betriebe: Bing Places, Webmaster Tools und was Microsoft dokumentiert",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe in Deutschland, Österreich und der Schweiz, die wissen wollen, welche Rolle Bing und Microsoft Copilot für sie spielen. Sie erfahren, was Microsoft zu Bing Places, den Bing Webmaster Tools und den Quellen von Copilot dokumentiert, was nur behauptet wird und wie Sie Ihre Sichtbarkeit jeden Monat selbst prüfen.",
  answer:
    "Für Bing und Microsoft Copilot zählen zwei Dinge, die Sie selbst steuern: ein gepflegter Eintrag in **Bing Places for Business** und eine Website, die **bingbot** lesen darf. Copilot stützt Antworten bei bestimmten Informationsfragen laut Microsoft auf Websuchergebnisse und verlinkt die Quellen. Wie oft Ihre Seiten dort zitiert werden, zeigt der Bericht AI Performance in den Bing Webmaster Tools. Eine Platzierung garantiert Microsoft nicht.",
  takeaways: [
    "Bing Places liegt seit Oktober 2025 unter bing.com/forbusiness. Bestehende Einträge werden laut Microsoft automatisch übernommen, der Import aus Google wurde verbessert.",
    "Laut Microsoft können Angaben aus Bing Places in KI-Antworten einfließen, Copilot nennt Microsoft dabei aber nicht. Tiefere Integrationen mit Copilot sind nur angekündigt.",
    "Copilot stützt sich bei bestimmten Informationsfragen auf Websuchergebnisse und listet verlinkte Quellen. Microsoft spricht von Copilot-Erlebnissen, die von Bing angetrieben werden.",
    "Einen eigenen Crawler für Copilot nennt Microsoft in den hier geprüften Quellen nicht. Gesteuert wird über bingbot, robots.txt und Meta-Angaben wie NOARCHIVE.",
    "Der Bericht AI Performance, im Februar 2026 als öffentliche Vorschau eingeführt, zählt Zitierungen in Copilot und in KI-Zusammenfassungen von Bing. Klicks und Positionen gehören nicht zu den beschriebenen Kennzahlen.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "ueberblick",
      title: "Bing, Copilot und Bing Places: wer was macht",
      answer:
        "Bing Places for Business ist das kostenlose Portal für Ihren Eintrag in der Bing-Suche und in Bing Maps. Microsoft Copilot ist der KI-Assistent, der laut Microsoft bei bestimmten Informationsfragen auf Websuchergebnisse zurückgreift und die Quellen verlinkt.",
      blocks: [
        {
          t: "p",
          text: "Microsoft verwendet den Namen Copilot für mehrere Produkte: den Assistenten für Privatpersonen, die Copilot-Suche in Bing und Copilot im Unternehmen, das früher Microsoft 365 Copilot hieß. Was Generative Engine Optimization insgesamt bedeutet, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
        {
          t: "table",
          caption: "Microsofts Flächen und was Sie dort beeinflussen",
          head: ["Fläche", "Was dort erscheint (laut Microsoft)", "Was Sie beeinflussen"],
          rows: [
            ["Bing-Suche und Bing Maps", "Einträge aus Bing Places und Websites aus dem Bing-Index", "Eintrag in Bing Places, Website, die bingbot lesen darf"],
            ["Microsoft Copilot", "Antworten auf Grundlage von Websuchergebnissen, mit verlinkten Quellen", "Klare Fakten auf Ihrer Website"],
            ["Copilot-Suche und KI-Zusammenfassungen in Bing", "KI-Antworten in der Bing-Suche mit zitierten Quellen; die Copilot-Suche gibt es seit April 2025", "Wie bei Copilot"],
            ["Copilot im Unternehmen", "Antworten mit Websuche über den Bing-Suchdienst, wenn die Organisation sie zulässt", "Ihre öffentliche Website"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Nutzerzahlen für Bing oder Copilot in Ihrer Region haben wir bei Microsoft nicht gefunden. Der Aufwand ist aber gering, weil Sie Daten aus Google übernehmen und die Website ohnehin pflegen.",
        },
      ],
    },
    {
      id: "bing-places-2026",
      title: "Bing Places for Business: was sich geändert hat",
      answer:
        "Seit dem 3. Oktober 2025 liegt Bing Places unter bing.com/forbusiness, bestehende Konten und Einträge werden laut Microsoft automatisch übernommen. Neu sind ein schnellerer Import aus Google, Übersichten mit Statusmeldungen, Massenbearbeitung und ein Empfehlungswerkzeug.",
      blocks: [
        {
          t: "p",
          text: "Microsoft beschreibt Bing Places als kostenlose Plattform, auf der Betriebe ihre Einträge für die Bing-Suche und Bing Maps anlegen und verwalten. Wer sich mit den bisherigen Zugangsdaten anmeldet, landet auf der neuen Oberfläche. Eine Länderliste nennt Microsoft in der Ankündigung nicht.",
        },
        {
          t: "table",
          caption: "Neuerungen vom Oktober 2025 laut Microsoft",
          head: ["Bereich", "Was Microsoft beschreibt"],
          rows: [
            ["Import aus Google", "Schneller und zuverlässiger; Name, Öffnungszeiten und Kontaktdaten bleiben besser erhalten"],
            ["Verwaltung", "Beanspruchen, Öffnungszeiten ändern und Fotos hochladen an einer Stelle; Massenbearbeitung und Statusmeldungen in Echtzeit"],
            ["Empfehlungswerkzeug", "Hinweise auf Fotos und fehlende Angaben wie Website, Öffnungszeiten und soziale Netzwerke; für Restaurants etwa ein Link zur Speisekarte oder Onlinebestellung"],
            ["Copilot", "Nur angekündigt: tiefere Integrationen mit Bing Maps und Copilot"],
          ],
        },
        {
          t: "note",
          label: "Wichtig",
          text: "Dass ein Eintrag in Bing Places Sie in Copilot-Antworten bringt, sagt Microsoft nirgends. Microsoft empfiehlt Bing Places aber ausdrücklich: Der Eintrag helfe, Adresse, Öffnungszeiten und Kontaktdaten aktuell zu halten, damit sie für KI-Antworten in Frage kommen, was bei ortsbezogenen Fragen besonders wichtig sei.",
        },
      ],
    },
    {
      id: "eintrag-anlegen",
      title: "Eintrag anlegen oder aus Google übernehmen",
      answer:
        "Melden Sie sich unter bing.com/forbusiness an, beanspruchen Sie den vorhandenen Eintrag oder übernehmen Sie Ihre Daten aus dem Google-Unternehmensprofil, und prüfen Sie danach jedes Feld. Wie die Bestätigung im Einzelnen abläuft, beschreibt Microsoft in den hier geprüften Quellen nicht.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Bestehenden Eintrag suchen", text: "In Bing und Bing Maps nach Firmenname und Ort suchen. Einen vorhandenen Eintrag beanspruchen, statt einen zweiten anzulegen." },
            { title: "Mit einem Firmenkonto anmelden", text: "Ein Konto nutzen, auf das der Betrieb dauerhaft Zugriff hat, nicht das private Konto einer Aushilfe." },
            { title: "Daten übernehmen", text: "Der Import übernimmt laut Microsoft Name, Öffnungszeiten und Kontaktdaten. Den Namen so schreiben wie auf Schild und Website, ohne Zusätze. Grundlage ist ein sauberes [Google-Unternehmensprofil](/blog/google-my-business-optimieren)." },
            { title: "Bestätigen", text: "Ein Fachmedium berichtet zum Neustart, dass aus Google importierte Einträge sofort bestätigt werden; in Microsofts Ankündigung steht das nicht. Ein Nutzer in Microsofts Hilfeforum nennt eine PIN per E-Mail und erwähnt Post und SMS als weitere Wege." },
            { title: "Feld für Feld prüfen", text: "Kategorie, Adresse oder Einzugsgebiet, Telefon, Website, Öffnungszeiten, Sonderzeiten und Fotos. Die Hinweise des Empfehlungswerkzeugs abarbeiten." },
            { title: "Veröffentlichung verfolgen", text: "Im Hilfeforum berichtet ein Nutzer von über sieben Wochen Wartezeit, obwohl Bing Places 7 bis 12 Tage angezeigt hatte. Die Moderation von Microsoft verweist auf eine Supportanfrage im angemeldeten Bereich oder auf placesfeedback@microsoft.com." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein Import kopiert auch Fehler. Bringen Sie zuerst Google, Website und Impressum auf einen Stand und importieren Sie dann. Wie Sie Abweichungen finden, zeigt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo). Für Apple Karten gilt dieselbe Logik: [Apple Business und Local SEO](/blog/apple-business-connect-local-seo-2026).",
        },
      ],
    },
    {
      id: "webmaster-tools",
      title: "Bing Webmaster Tools und IndexNow einrichten",
      answer:
        "Bestätigen Sie Ihre Website in den Bing Webmaster Tools, zum Beispiel per Import aus der Google Search Console, reichen Sie die Sitemap ein und prüfen Sie mit URL-Prüfung und robots.txt-Tester, ob bingbot Ihre Seiten lesen kann. IndexNow meldet Änderungen sofort an Bing.",
      blocks: [
        {
          t: "table",
          caption: "Wege zur Bestätigung der Website (laut Microsoft, Juni 2025)",
          head: ["Weg", "Was Sie tun"],
          rows: [
            ["Import aus der Google Search Console", "Zugriff erlauben, Websites auswählen; importierte Websites gelten automatisch als bestätigt, Sitemaps werden übernommen"],
            ["XML-Datei", "Datei herunterladen und ins Hauptverzeichnis der Website laden"],
            ["Meta-Tag", "Tag in den head-Bereich der Startseite einfügen"],
            ["DNS-Eintrag", "Code als TXT-Eintrag beim Domainanbieter hinterlegen"],
            ["Domain Connect", "Beim DNS-Anbieter anmelden, die Bestätigung läuft automatisch"],
          ],
        },
        {
          t: "p",
          text: "Bei importierten Websites prüft Bing die Inhaberschaft laut Microsoft regelmäßig über die Search Console. Danach helfen drei Werkzeuge: Die **URL-Prüfung** zeigt Indexierungsstatus, Statuscodes und blockierte Ressourcen einzelner Seiten. Der **robots.txt-Tester** zeigt, ob bingbot wichtige Inhalte lesen darf. Die **Suchleistung** zeigt Impressionen, Klicks und durchschnittliche Position für bis zu 16 Monate.",
        },
        { t: "h3", text: "IndexNow und Sitemap" },
        {
          t: "p",
          text: "IndexNow ist laut Microsoft ein Protokoll, das Bing und andere teilnehmende Suchmaschinen sofort benachrichtigt, wenn Sie Inhalte hinzufügen, ändern oder löschen. Shopify und Milestone unterstützten es laut Microsoft schon im Mai 2025. Ob Ihr Baukasten IndexNow anbietet, erfahren Sie beim Anbieter. Die Sitemap bleibt trotzdem nötig: Bing liest sie laut Microsoft in der Regel mindestens einmal am Tag.",
        },
        {
          t: "ul",
          items: [
            "**lastmod ehrlich setzen.** Microsoft nennt das Feld ein wichtiges Signal für erneutes Crawlen. Es soll nur echte Änderungen anzeigen, nicht den Zeitpunkt, zu dem die Sitemap erzeugt wurde.",
            "**changefreq und priority** ignoriert Bing laut Microsoft.",
            "**Sitemap in der robots.txt nennen**, damit Bing sie automatisch findet.",
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Wann Inhalte in KI-Antworten erscheinen, kann laut Microsoft kein Werkzeug garantieren, auch IndexNow nicht.",
        },
      ],
    },
    {
      id: "copilot-quellen",
      title: "Wie Copilot Quellen nutzt und zitiert",
      answer:
        "Laut Microsofts Transparenzhinweis stützt sich Copilot bei bestimmten Informationsfragen auf hochrangige Inhalte aus der Websuche und listet verlinkte Quellen unter der Antwort. Für Copilot im Unternehmen schreibt Microsoft ausdrücklich, dass die Suchanfragen an den Bing-Suchdienst gehen.",
      blocks: [
        {
          t: "table",
          caption: "Was Microsoft zu Copilot und Quellen dokumentiert",
          head: ["Produkt", "Aussage von Microsoft", "Bedeutung für Ihren Betrieb"],
          rows: [
            ["Copilot für Privatpersonen", "Auf Websuchergebnisse gestützt; verlinkte Quellen unter dem Text", "Als Quelle kommen Seiten in Frage, die in der Websuche gut gefunden werden"],
            ["Copilot-Suche in Bing", "Klassische Suche und KI-Antworten mit klar zitierten Quellen", "Ihre Website kann als Quelle verlinkt werden"],
            ["Copilot im Unternehmen", "Kurze Suchanfrage an den Bing-Suchdienst, die Copilot Chat bei den Quellen anzeigt", "Auch Geschäftskunden erreichen Sie über Ihre öffentliche Website"],
          ],
        },
        {
          t: "p",
          text: "An anderer Stelle spricht Microsoft von Copilot-Erlebnissen, die von Bing angetrieben werden. Was Microsoft nicht beschreibt: wie Copilot lokale Betriebe auswählt. Der Transparenzhinweis erwähnt weder Karten noch Bing Places noch die Auswahl lokaler Betriebe, und Bing nennt er gar nicht. Er weist aber darauf hin, dass die Qualität je nach Sprache schwanken kann und zur Einführung Englisch am besten funktionierte.",
        },
        {
          t: "note",
          label: "Was das für Ihre Website heißt",
          text: "Leistung, Ort, Öffnungszeiten und Bedingungen gehören als Text auf die Seite, die Antwort in den ersten Satz. Laut Search Engine Journal empfehlen Bings überarbeitete Richtlinien vom Februar 2026 genau das: Fakten direkt nennen, Namen einheitlich verwenden, eine Seite je Thema, Wichtiges nach oben. Versuche, die Sprachmodelle von Bing oder Copilot zu manipulieren, führen die Richtlinien als Missbrauch.",
        },
      ],
    },
    {
      id: "bingbot-robots-txt",
      title: "bingbot, robots.txt und Meta-Angaben",
      answer:
        "Laut Microsoft beachtet Bing robots.txt und weitere Steuerungen auch für KI-Antworten, einen eigenen Copilot-Crawler nennt Microsoft in den hier geprüften Quellen nicht. Sie müssen bingbot nicht ausdrücklich erlauben, dürfen ihn aber nicht versehentlich sperren.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Nur ein Regelblock zählt.** bingbot folgt laut einem Microsoft-Beitrag von 2012 genau einem Abschnitt: zuerst „User-agent: bingbot“, sonst „msnbot“, sonst „*“. Ohne eigenen bingbot-Block sperrt eine alte Sperre für msnbot also auch bingbot.",
            "**Ein eigener bingbot-Block ersetzt die allgemeinen Regeln.** Laut einem Bing-Mitarbeiter (2019) ignoriert bingbot dann alle Regeln unter „*“ außer Crawl-delay. Kopieren Sie alle gewünschten Regeln hinein oder verzichten Sie auf den Block.",
            "**Änderungen wirken verzögert.** bingbot beachtet eine geänderte Datei erst, wenn er sie neu abgerufen hat.",
            "**Jede Subdomain hat ihre eigene robots.txt.** Für shop.ihredomain.de gilt nicht die Datei von www.ihredomain.de.",
          ],
        },
        {
          t: "p",
          text: "In den Server-Logs erkennen Sie den Crawler an der Kennung „bingbot“ im User-Agent. Bei der Einführung der Copilot-Suche betonte Microsoft-Manager Jordi Ribas laut Search Engine Roundtable, man folge strikt robots.txt und weiteren Meta-Angaben wie schon bei Bing Chat.",
        },
        {
          t: "table",
          caption: "Meta-Angaben, die KI-Antworten von Bing und Copilot betreffen",
          head: ["Angabe", "Wirkung laut Microsoft", "Für lokale Betriebe sinnvoll?"],
          rows: [
            ["NOCACHE", "In KI-Antworten nur URL, Titel und Ausschnitt", "Selten"],
            ["NOARCHIVE", "Inhalt erscheint nicht in KI-Antworten; die Seite bleibt in der normalen Suche", "Nein, wenn Sie zitiert werden wollen"],
            ["NOCACHE und NOARCHIVE zusammen", "Bing behandelt die Seite wie NOCACHE", "Selten"],
            ["data-nosnippet", "Markierte Abschnitte fehlen in Ausschnitten und KI-Zusammenfassungen; die Seite bleibt indexiert", "Für einzelne Abschnitte"],
          ],
        },
        {
          t: "p",
          text: "Microsoft hat NOCACHE und NOARCHIVE 2023 für Bing Chat eingeführt. Laut Search Engine Journal beziehen die Richtlinien vom Februar 2026 sie ausdrücklich auf Copilot. Sehen Sie im Quelltext Ihrer wichtigsten Seiten nach, ob ein Plugin solche Angaben gesetzt hat. Alle übrigen KI-Crawler behandelt [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine korrekte robots.txt nützt nichts, wenn Bot-Schutz oder Firewall bingbot vorher abweisen. Das ist unsere Erfahrung aus Prüfungen, keine Aussage von Microsoft. Ob Bing eine Seite abrufen kann, zeigt die URL-Prüfung.",
        },
      ],
    },
    {
      id: "andere-ki-dienste",
      title: "Fließen Bing-Daten in andere KI-Dienste?",
      answer:
        "Microsoft schreibt, dass der Bericht AI Performance auch ausgewählte Partnerintegrationen erfasst, nennt die Partner aber nicht. Dass ChatGPT oder andere Assistenten Daten aus Bing Places nutzen, dokumentiert Microsoft in den hier geprüften Quellen nicht.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und was belegt ist",
          head: ["Aussage", "Stand der Dokumentation"],
          rows: [
            ["„Copilot zitiert Seiten aus dem Bing-Index“", "Gut gestützt: Microsoft zählt Copilot-Zitierungen in den Bing Webmaster Tools."],
            ["„Daten aus Bing Places landen in Copilot“", "Microsoft schreibt im Februar 2026, dass Angaben aus Bing Places für KI-Antworten in Frage kommen können, ohne Copilot zu nennen. Tiefere Integrationen mit Copilot sind nur angekündigt."],
            ["„ChatGPT nutzt Bing als Hauptquelle“", "In den hier geprüften Microsoft-Quellen nicht dokumentiert. Was OpenAI selbst schreibt, steht in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026)."],
            ["„Bing-Places-Daten erscheinen in Outlook, Windows und Sprachassistenten“", "Behauptet ein Dienstleister für Firmeneinträge. Von Microsoft in den hier geprüften Quellen nicht bestätigt."],
            ["„Es gibt feste Rankingfaktoren für Copilot“", "Microsoft nennt keine. Laut Bericht über die Richtlinien garantiert auch GEO keine Zitierungen."],
          ],
        },
        {
          t: "p",
          text: "Pflegen Sie Bing Places also, weil Bing und Bing Maps den Eintrag zeigen, nicht weil er Sie sicher in andere KI-Dienste bringt. Wie Perplexity und Claude Quellen finden, beschreibt [Perplexity und Claude für lokale Sichtbarkeit](/blog/perplexity-claude-lokale-sichtbarkeit).",
        },
      ],
    },
    {
      id: "ai-performance",
      title: "Zitierungen messen: der Bericht AI Performance",
      answer:
        "Der Bericht AI Performance, den Microsoft im Februar 2026 als öffentliche Vorschau eingeführt hat, zeigt, wie oft Ihre Seiten in Copilot, in KI-Zusammenfassungen von Bing und bei ausgewählten Partnern als Quelle erscheinen. Klicks gehören nicht zu den beschriebenen Kennzahlen, die Position innerhalb einer Antwort zeigt er ausdrücklich nicht.",
      blocks: [
        {
          t: "table",
          caption: "Kennzahlen im Bericht AI Performance (laut Microsoft)",
          head: ["Kennzahl", "Was sie zeigt", "Was sie nicht zeigt"],
          rows: [
            ["Total Citations", "Wie oft Ihre Inhalte im Zeitraum als Quelle angezeigt wurden", "Wo in der Antwort"],
            ["Average Cited Pages", "Durchschnittliche Zahl verschiedener zitierter Seiten pro Tag", "Rang oder Rolle einer Seite"],
            ["Grounding Queries", "Suchbegriffe, mit denen die KI Ihre zitierten Inhalte abgerufen hat, als Stichprobe", "Alle Anfragen vollständig"],
            ["Zitierungen je Seite", "Welche URLs wie oft zitiert wurden", "Bedeutung oder Platzierung der Seite"],
          ],
        },
        {
          t: "p",
          text: "Seit März 2026 führt Microsoft laut einem Fachmedium weltweit eine Ansicht ein, die Grounding Queries und zitierte Seiten verknüpft. Für einen lokalen Betrieb ist das die nützlichste Ansicht: Taucht etwa „Heizungsnotdienst Innsbruck“ auf, und welche Seite wird dafür genannt?",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Rechnen Sie bei einer kleinen Website mit niedrigen Zahlen. Werten Sie den Bericht monatlich aus und ergänzen Sie ihn um eigene Stichproben, wie in [KI-Zitat-Monitoring](/blog/ai-zitat-monitoring-local-seo-2026) beschrieben.",
        },
      ],
    },
    {
      id: "testroutine",
      title: "Die Testroutine für jeden Monat",
      answer:
        "Prüfen Sie einmal im Monat Eintrag, Indexierung, fünf feste Fragen mit Ortsangabe in Copilot und den Bericht AI Performance, und halten Sie Datum, Frage, Nennung und Quellen fest. Einzelne Antworten schwanken, aussagekräftig ist erst der Verlauf.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Eintrag prüfen", text: "In Bing und Bing Maps nach Firmenname und Ort suchen. Stimmen Name, Adresse, Telefon, Öffnungszeiten und Website mit Google und Ihrer Website überein?" },
            { title: "Indexierung prüfen", text: "Startseite, Kontaktseite und wichtigste Leistungsseiten mit der URL-Prüfung testen, Sitemap-Status ansehen." },
            { title: "Fragen stellen", text: "Fünf Fragen so formulieren, wie Kunden fragen, immer mit Ort: „Welcher Elektriker in Graz hat am Samstag Notdienst?“ Jede Frage in einem neuen Gespräch in Copilot stellen und, wo verfügbar, in der Copilot-Suche von Bing." },
            { title: "Ergebnis festhalten", text: "Datum, Frage, genannt ja oder nein, genannte Angaben, verlinkte Quellen, Bildschirmfoto. Die Quellen zeigen, wo Ihre Angaben stimmen müssen." },
            { title: "Bericht auswerten", text: "Zitierungen, Grounding Queries und zitierte Seiten mit dem Vormonat vergleichen, dazu Impressionen und Klicks in der Suchleistung." },
            { title: "Fehler an der Quelle beheben", text: "Falsche Angaben auf der Website, in Bing Places oder im Verzeichnis korrigieren. Den Ablauf beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)." },
          ],
        },
        {
          t: "p",
          text: "Eine Tabelle zum Ausfüllen bietet die [Citation-Tracking-Vorlage](/blog/citation-tracking-template).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Einen eigenen Kennzeichnungsparameter für Besuche aus Copilot, wie ihn ChatGPT anhängt, haben wir in Microsofts Unterlagen nicht gefunden. Laut dem Bericht über Bings Richtlinien bedeuten sinkende Klicks zudem nicht immer weniger Sichtbarkeit, weil Inhalte als Zitat in Copilot erscheinen können.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich Bing Places, wenn ich schon ein Google-Unternehmensprofil habe?",
      a: "Ja, denn Bing und Bing Maps zeigen die Einträge aus Bing Places. Der Aufwand ist gering, weil Sie Ihre Daten aus Google übernehmen können. Eine Garantie für Copilot-Antworten ist damit nicht verbunden.",
    },
    {
      q: "Muss ich bingbot in der robots.txt ausdrücklich erlauben?",
      a: "Nein. bingbot darf alles lesen, was nicht gesperrt ist. Gefährlich sind ein „Disallow: /“ unter „User-agent: *“, alte Sperren für msnbot und ein eigener bingbot-Abschnitt, in dem Regeln fehlen.",
    },
    {
      q: "Hat Copilot einen eigenen Crawler, den ich getrennt steuern kann?",
      a: "In den hier geprüften Microsoft-Quellen nicht. Wer Inhalte aus KI-Antworten heraushalten, aber in der Suche bleiben will, nutzt laut Microsoft NOARCHIVE oder für einzelne Abschnitte data-nosnippet. NOCACHE beschränkt die Nutzung auf URL, Titel und Ausschnitt.",
    },
    {
      q: "Wie sehe ich, ob Copilot meine Website zitiert?",
      a: "Im Bericht AI Performance der Bing Webmaster Tools. Er zählt Zitierungen in Copilot und in KI-Zusammenfassungen von Bing. Ob Ihr Betrieb genannt wird, ohne dass Ihre Seite als Quelle erscheint, sehen Sie nur mit eigenen Stichproben.",
    },
    {
      q: "Wie lange dauert es, bis ein Eintrag in Bing Places sichtbar ist?",
      a: "Microsoft nennt in den hier geprüften Quellen keine verbindliche Frist. Laut einem Nutzer in Microsofts Hilfeforum zeigte Bing Places eine voraussichtliche Veröffentlichung nach 7 bis 12 Tagen an, tatsächlich wartete er über sieben Wochen. Tut sich nichts, stellen Sie im angemeldeten Bereich eine Supportanfrage.",
    },
  ],
  sources: [
    { title: "Introducing the New Bing Places for Business (3. Oktober 2025)", publisher: "Microsoft Bing Blogs", url: "https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Start Using Bing Webmaster Tools to Improve Your Site Visibility (17. Juni 2025)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/" },
    { title: "Import sites from Search Console to Bing Webmaster Tools (2019, aktualisiert Juni 2025)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools" },
    { title: "Keeping Content Discoverable with Sitemaps in AI Powered Search (31. Juli 2025)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/" },
    { title: "IndexNow Drives Smarter and Faster Content Discovery (Mai 2025)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/2025/5/IndexNow-Drives-Smarter-and-Faster-Content-Discovery/" },
    { title: "Bing Introduces Support for the data-nosnippet HTML Attribute (15. Oktober 2025)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/2025/10/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute/" },
    { title: "Announcing new options for webmasters to control usage of their content in Bing Chat (22. September 2023)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat" },
    { title: "To crawl or not to crawl, that is BingBot's question (Mai 2012)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/May-2012/To-crawl-or-not-to-crawl,-that-is-BingBot-s-questi/" },
    { title: "Bing crawler bingbot on the horizon (Juni 2010)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/June-2010/Bing-crawler-bingbot-on-the-horizon" },
    { title: "Transparency Note for Microsoft Copilot (for individuals), Stand 18. August 2026", publisher: "Microsoft Support", url: "https://support.microsoft.com/en-US/Privacy/microsoft-copilot/transparency-note" },
    { title: "Websuche in Microsoft Copilot und Copilot Chat verwalten, Stand 18. August 2026", publisher: "Microsoft Learn", url: "https://learn.microsoft.com/copilot/microsoft-365/manage-public-web-access" },
    { title: "Bing Places for Business Pending Publishing for over 7 weeks (16. Januar 2026)", publisher: "Microsoft Q&A", url: "https://learn.microsoft.com/en-nz/answers/questions/5721268/bing-places-for-business-pending-publishing-for-ov" },
    { title: "How to verify business (Dezember 2025)", publisher: "Microsoft Q&A", url: "https://learn.microsoft.com/en-us/answers/a/12408094" },
    { title: "Robots.txt tip from Bing: Include all relevant directives if you have a Bingbot section (3. Januar 2019)", publisher: "Search Engine Land", url: "https://searchengineland.com/robots-txt-tip-from-bing-include-all-relevant-directives-if-you-have-a-bingbot-section-309970" },
    { title: "Microsoft officially launches Copilot Search in Bing (April 2025)", publisher: "Search Engine Land", url: "https://searchengineland.com/microsoft-officially-launches-copilot-search-in-bing-453958" },
    { title: "Copilot Search in Bing Now Officially Live (7. April 2025)", publisher: "Search Engine Roundtable", url: "https://seroundtable.com/copilot-search-in-bing-39183.html" },
    { title: "Bing Adds GEO To Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442" },
    { title: "Bing's AI search tool now maps which pages fuel your brand's citations (24. März 2026)", publisher: "PPC Land", url: "https://ppc.land/bings-ai-search-tool-now-maps-which-pages-fuel-your-brands-citations/" },
    { title: "Bing Places for Business migrates to bing.com domain with import tools (4. Oktober 2025)", publisher: "PPC Land", url: "https://ppc.land/bing-places-for-business-migrates-to-bing-com-domain-with-import-tools/" },
    { title: "Bing partnership (Angaben eines Dienstleisters, Stand 13. Mai 2026)", publisher: "PinMeTo", url: "https://www.pinmeto.com/knowledge-hub/bing-partnership/" },
  ],
  related: [
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern: GPTBot, ClaudeBot und Co." },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "apple-business-connect-local-seo-2026", title: "Apple Business und Local SEO" },
  ],
  cta: {
    title: "Wie sieht Microsoft Ihren Betrieb?",
    text: "Wir prüfen Ihren Eintrag in Bing Places, ob bingbot Ihre Website lesen darf und was Copilot zu Ihrem Betrieb antwortet. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
