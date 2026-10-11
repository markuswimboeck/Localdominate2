import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-visibility-index-local-seo-metrik",
  lang: "de",
  seoTitle: "AI Visibility Index: Warum eine Zahl in die Irre führt",
  seoDescription:
    "Warum ein einzelner Index für KI-Sichtbarkeit wenig aussagt, welche Signale sich wirklich messen lassen und wie Sie eine ehrliche Scorecard bauen.",
  h1: "AI Visibility Index: Warum eine einzige Kennzahl für KI-Sichtbarkeit in die Irre führt und was Sie stattdessen berichten",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, denen ein „KI-Sichtbarkeitsindex“ angeboten wird, und für alle, die KI-Sichtbarkeit an Geschäftsführung oder Kunden berichten. Sie erfahren, warum eine Gesamtzahl mehr versteckt als zeigt, welche Signale messbar sind und wie eine ehrliche Scorecard aussieht. Wie Sie die Daten jeden Monat erheben, beschreibt [KI-Zitat-Monitoring](/blog/ai-zitat-monitoring-local-seo-2026).",
  answer:
    "Ein einzelner Index für KI-Sichtbarkeit verrechnet Signale, die Verschiedenes messen, mit Gewichten, die jemand festgelegt hat. Belastbarer ist eine Scorecard mit getrennten Zeilen: Impressionen und Zitierungen aus den Berichten von Google und Microsoft, Besuche aus KI-Diensten, die Nennungsquote in einem festen Fragenset, die Richtigkeit Ihrer Angaben und die Anfragen, die am Ende ankommen.",
  takeaways: [
    "In den geprüften Unterlagen von Google, Microsoft und OpenAI gibt es keinen Index für KI-Sichtbarkeit, sondern einzelne Zahlen: Impressionen, Zitierungen und einen Parameter für die Web-Analyse.",
    "Gewichte in einem Index sind laut dem Handbuch von OECD und Gemeinsamer Forschungsstelle der EU-Kommission im Kern Werturteile. Eine Gesamtzahl kann ernste Schwächen in einzelnen Bereichen verdecken.",
    "KI-Antworten schwanken stark. Rangplätze in Antworten sind kaum stabil, aussagekräftiger ist, wie oft Ihr Betrieb über viele Durchläufe vorkommt.",
    "Eine ehrliche Scorecard zeigt jede Zahl mit Basis und Quelle, verzichtet auf eine Gesamtsumme und behandelt falsche Angaben als Warnsignal, das keine andere Zahl ausgleicht.",
    "Schema, Bewertungen und Verzeichniseinträge sind Maßnahmen, keine Sichtbarkeit. Sie gehören in eine Aufgabenliste, nicht in die Kennzahl.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-11",
  readingTime: 11,
  sections: [
    {
      id: "fruehere-fassung",
      title: "Was die frühere Fassung behauptete",
      answer:
        "Die frühere Fassung dieses Artikels stellte einen „AI Visibility Index“ als eigene Metrik mit fünf gewichteten Säulen und festen Schwellenwerten vor. Für die Gewichte, die Schwellen und die versprochene Aussagekraft gab es keine Quelle, deshalb haben wir den Artikel neu geschrieben.",
      blocks: [
        {
          t: "p",
          text: "Die Fassung vom Mai 2026 nannte Gewichte wie 25 Prozent für „Entity Authority“ und Stufen von „Critical“ bis „Dominant“. Diese Werte waren gesetzt, nicht gemessen. Sie beruhten weder auf Daten der Anbieter noch auf einer Studie.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Falls Sie den alten Index für Ihren Betrieb berechnet haben: Der Wert setzte sich vor allem aus Maßnahmen wie strukturierten Daten und Bewertungen mit gesetzten Gewichten zusammen. Ob KI-Dienste Ihren Betrieb tatsächlich nennen, zeigt er nicht. Nutzen Sie stattdessen die Einzelwerte, die dieser Artikel beschreibt.",
        },
      ],
    },
    {
      id: "warum-eine-zahl-irrefuehrt",
      title: "Warum eine einzige Zahl in die Irre führt",
      answer:
        "Eine Gesamtzahl verrechnet unterschiedliche Dinge, und ihre Gewichte sind laut dem Handbuch zu zusammengesetzten Indikatoren von OECD und EU-Kommission im Kern Werturteile. Sie kann ernste Schwächen verdecken, etwa eine falsche Telefonnummer in ChatGPT hinter guten Zahlen bei Google.",
      blocks: [
        {
          t: "p",
          text: "Das Handbuch von 2008, erschienen bei der OECD und laut Vorwort gemeinsam von der OECD und der Gemeinsamen Forschungsstelle (JRC) der EU-Kommission erarbeitet, beschreibt, wie man Kennzahlen baut, die mehrere Einzelwerte zu einer Zahl verdichten. Es listet ausdrücklich auch die Nachteile solcher Kennzahlen auf, unter anderem:",
        },
        {
          t: "ul",
          items: [
            "Sie können irreführende Botschaften senden, wenn sie schlecht gebaut oder falsch gelesen werden.",
            "Sie können zu vereinfachten Schlüssen verleiten.",
            "Sie können ernste Mängel in einzelnen Bereichen verdecken und die passende Gegenmaßnahme schwerer erkennbar machen.",
            "Sie können missbraucht werden, wenn ihr Aufbau nicht offengelegt ist.",
          ],
        },
        {
          t: "p",
          text: "Zu den Gewichten heißt es dort: Gleich welche Methode man wählt, Gewichte sind im Kern Werturteile. Wer festlegt, dass Bewertungen 20 Prozent eines KI-Index ausmachen, trifft also eine Entscheidung. Eine Messung ist das nicht.",
        },
        {
          t: "table",
          caption: "Drei Gründe, warum ein KI-Sichtbarkeitsindex besonders wackelt",
          head: ["Problem", "Was dahintersteckt"],
          rows: [
            ["Verschiedene Größen", "Google zählt Impressionen, Microsoft Zitierungen, Ihre Web-Analyse Besuche, Ihre Stichprobe Nennungen. Diese Größen haben verschiedene Einheiten und verschiedene Lücken."],
            ["Maßnahmen statt Wirkung", "Manche Indizes, auch die frühere Fassung dieses Artikels, mischen, was Sie tun, etwa strukturierte Daten oder Bewertungen, mit dem, was passiert, etwa Nennungen. Steigt der Index, weil Sie Markup ergänzt haben, ist noch kein Kunde mehr gekommen."],
            ["Schwankung", "Antworten von Sprachmodellen variieren schon bei gleicher Eingabe. Ein Index aus einer kleinen Stichprobe kann von Monat zu Monat springen, ohne dass sich etwas geändert hat."],
          ],
        },
        {
          t: "p",
          text: "Selbst die Forschungsarbeit, die den Begriff GEO geprägt hat, misst Sichtbarkeit nicht mit einer einzigen Zahl. Die Autoren beschreiben Sichtbarkeit in generativen Suchmaschinen als vielschichtiger als in der klassischen Suche und schlagen eine Reihe von Kennzahlen vor, darunter einen nach Position gewichteten Wortanteil und eine Bewertung aus sieben Aspekten wie Relevanz und Klickwahrscheinlichkeit. Mehr zur Studie steht in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
    {
      id: "was-werkzeuge-messen",
      title: "Was Werkzeuge für KI-Sichtbarkeit tatsächlich messen",
      answer:
        "Werkzeuge für KI-Sichtbarkeit stellen Testfragen an KI-Dienste und zählen, was zurückkommt. Das ist eine Stichprobe wie Ihre eigene, nur größer, denn Zugang zu Googles internen Ranking- oder KI-Systemen hat laut Google kein Drittanbieter.",
      blocks: [
        {
          t: "p",
          text: "Wie solche Messungen aussehen, zeigt die Methode des Softwareanbieters BrightLocal für eine Studie vom August 2026: fünf Fragen je Standort, gestellt an neun verschiedenen Koordinaten, in Übersichten mit KI, im KI-Modus und in ChatGPT, für 1.355 Standorte in den USA, Großbritannien und Australien. Das ist sorgfältiger als eine einzelne Abfrage. Es bleibt aber eine Auswahl von Fragen, Orten und Zeitpunkten, die jemand getroffen hat.",
        },
        {
          t: "p",
          text: "Wie stark die Ergebnisse schwanken, zeigt eine Untersuchung von SparkToro und Gumshoe vom Januar 2026. Bei knapp 3.000 Durchläufen in ChatGPT, Claude und Googles Übersichten mit KI wiederholten sich die Listen empfohlener Marken fast nie, dieselbe Reihenfolge noch seltener. SparkToro-Gründer Rand Fishkin hält Rangplätze in KI-Antworten deshalb für nicht aussagekräftig. Brauchbar ist für ihn der Anteil der Antworten mit Nennung, gemessen über Dutzende bis Hunderte Fragen, die jeweils mehrfach gestellt werden. Dazu passt eine Studie vom Workshop Eval4NLP 2025: Selbst mit Einstellungen, die gleichbleibende Ausgaben liefern sollen, gaben fünf über Programmierschnittstellen genutzte Modelle nicht immer dasselbe aus.",
        },
        {
          t: "h3",
          text: "Fragen an jeden Anbieter eines KI-Index",
        },
        {
          t: "ul",
          items: [
            "Welche Fragen werden gestellt, und kann ich sie sehen und mitbestimmen?",
            "Wie oft wird jede Frage gestellt, an welchen Orten und in welcher Sprache?",
            "Welche Dienste und Modi werden abgefragt, und wird je Antwort das Datum gespeichert?",
            "Wie sind die Gewichte festgelegt, und kann ich die Einzelwerte ohne Gewichtung sehen?",
            "Kann ich die Rohdaten mit dem Wortlaut der Antworten exportieren?",
            "Wird geprüft, ob die Angaben über meinen Betrieb stimmen?",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein Anbieter, der diese Fragen offen beantwortet, kann nützlich sein, gerade bei vielen Standorten. Ein Anbieter, der nur eine Zahl von 0 bis 100 liefert, verkauft nach unserer Einschätzung eine Darstellung, keine Messung.",
        },
      ],
    },
    {
      id: "messbare-signale",
      title: "Diese Signale lassen sich messen",
      answer:
        "Sieben Signale können Sie selbst erheben oder aus kostenlosen Berichten ablesen. Jedes beantwortet eine eigene Frage, und keines ersetzt ein anderes.",
      blocks: [
        {
          t: "table",
          caption: "Messbare Signale für KI-Sichtbarkeit",
          head: ["Signal", "Quelle", "Was es zeigt", "Grenze"],
          rows: [
            ["Impressionen in Übersichten mit KI und KI-Modus", "Search Console, Leistungsbericht zu generativen KI-Funktionen, laut Google seit 31. August 2026 für alle Websites", "Wie oft Links zu Ihrer Website dort angezeigt wurden, je Seite, Land, Gerät und Datum", "Keine Klicks; eine Trennung der beiden Funktionen beschreibt Google nicht"],
            ["Klicks aus der Google-Suche", "Search Console, Leistungsbericht, Suchtyp „Web“", "Klicks einschließlich der KI-Funktionen", "Nicht nach KI-Funktion getrennt"],
            ["Zitierungen in Copilot und Bing", "Bing Webmaster Tools, AI Performance, im Februar 2026 als öffentliche Vorschau eingeführt", "Zitierungen, zitierte Seiten, Grounding Queries als Stichprobe", "Laut Microsoft kein Hinweis auf Rang oder Platzierung"],
            ["Besuche aus KI-Assistenten", "Google Analytics, Kanal „KI-Assistent“ seit Mai 2026; Matomo, Bericht für KI-Assistenten; Parameter utm_source=chatgpt.com", "Besuche und was die Besucher danach tun", "Nur mit Klick und übermittelter Herkunft; Übersichten mit KI zählen laut Google zur organischen Suche"],
            ["Nennungsquote im Fragenset", "Eigene Stichprobe", "Anteil der Antworten, die Ihren Betrieb nennen", "Stichprobe, schwankt"],
            ["Richtigkeit der Angaben", "Eigene Prüfung der Antworten", "Anteil der Nennungen mit korrekten Angaben", "Gilt nur für die geprüften Antworten"],
            ["Ergebnis im Betrieb", "Leistungsdaten im Unternehmensprofil, eigener Anfrageeingang", "Anrufe, Website-Klicks, Routenanfragen, Buchungen, Anfragen", "Nicht nach KI-Herkunft trennbar"],
          ],
        },
        {
          t: "p",
          text: "Die Richtigkeit verdient eine eigene Zeile. Eine Studie von 2023 zu vier generativen Suchmaschinen, darunter Bing Chat und Perplexity, fand, dass im Schnitt nur 51,5 Prozent der erzeugten Sätze vollständig durch ihre Quellen gestützt waren. Die Systeme von damals sind nicht die von heute. Für einen Betrieb bleibt die Folgerung: Eine Nennung ist erst etwas wert, wenn Adresse, Zeiten und Leistungen stimmen.",
        },
        {
          t: "p",
          text: "Im Unternehmensprofil zeigt Google für bestätigte Profile Interaktionen wie Anrufe, Website-Klicks, Routenanfragen und Buchungen sowie die Suchbegriffe, mit denen Kunden das Profil gefunden haben. Eine Aufteilung nach KI-Funktionen nennt Google dort nicht. In die Scorecard gehören sie trotzdem, weil sie zeigen, ob am Ende Kunden kommen.",
        },
      ],
    },
    {
      id: "scorecard",
      title: "So bauen Sie eine ehrliche Scorecard",
      answer:
        "Eine ehrliche Scorecard hat eine Zeile je Signal, nennt bei jeder Zahl Basis und Quelle, zeigt den Verlauf über mehrere Monate und verzichtet auf eine Gesamtsumme. Die Richtigkeit Ihrer Angaben steht ganz oben, weil keine andere Zahl einen Fehler ausgleicht.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Zeilen festlegen", text: "Eine Zeile je Signal aus der Tabelle oben. Lassen Sie weg, was Sie nicht erheben können, statt es zu schätzen." },
            { title: "Basis nennen", text: "Schreiben Sie „in x von 30 Antworten genannt“ statt „37 Punkte“. Wer die Basis sieht, erkennt sofort, wie belastbar eine Zahl ist." },
            { title: "Quelle und Zeitraum angeben", text: "Bei jeder Zahl steht, woher sie stammt und für welchen Kalendermonat sie gilt. Die Search Console rechnet Tage laut Google in pazifischer Zeit; notieren Sie, wann Sie abgelesen haben." },
            { title: "Richtigkeit als Ampel", text: "Jede falsche Angabe in einer Antwort ist rot, gleich wie gut die übrigen Zahlen aussehen. Die Korrektur hat Vorrang." },
            { title: "Verlauf statt Momentaufnahme", text: "Mindestens drei Monate nebeneinander. Maßnahmen und Änderungen an der Messung stehen in einer eigenen Zeile." },
            { title: "Keine Gesamtsumme", text: "Verlangt jemand eine einzige Zahl, nennen Sie die Nennungsquote mit Basis und daneben die Richtigkeit." },
          ],
        },
        {
          t: "table",
          caption: "Vorlage: Scorecard für einen Monat (Platzhalter statt Werte)",
          head: ["Signal", "Wert", "Basis und Quelle", "Vormonat", "Bemerkung"],
          rows: [
            ["Richtigkeit der Angaben", "x von y Nennungen korrekt", "Eigene Prüfung, Fragenset", "…", "z. B. falsche Öffnungszeiten bei Dienst A"],
            ["Nennungsquote", "x von y Antworten", "Fragenset, nur Fragen ohne Ihren Namen", "…", "zwei Durchläufe je Frage"],
            ["Impressionen in KI-Funktionen von Google", "Zahl", "Search Console, gefiltert nach Land", "…", ""],
            ["Klicks aus der Google-Suche", "Zahl", "Search Console, Suchtyp „Web“", "…", "enthält normale Treffer"],
            ["Zitierungen bei Bing", "Zahl", "Bing Webmaster Tools, AI Performance", "…", ""],
            ["Besuche aus KI-Assistenten", "Zahl", "Google Analytics oder Matomo", "…", "davon Anfragen: Zahl"],
            ["Anrufe und Anfragen", "Zahl", "Unternehmensprofil, Anfrageeingang", "…", "nicht nach Herkunft trennbar"],
          ],
        },
      ],
    },
    {
      id: "lesen",
      title: "Wie Sie die Scorecard lesen",
      answer:
        "Lesen Sie die Zeilen von oben nach unten: erst Richtigkeit, dann Sichtbarkeit, dann Besuche, dann Anfragen. Widersprüche zwischen den Zeilen sagen oft mehr als jede einzelne Zahl.",
      blocks: [
        {
          t: "table",
          caption: "Muster und ihre mögliche Bedeutung (unsere Einschätzung)",
          head: ["Muster", "Mögliche Bedeutung", "Was Sie prüfen"],
          rows: [
            ["Impressionen steigen, Klicks und Anfragen nicht", "Ihre Links werden gezeigt, aber die Antwort genügt den Nutzern, oder die Seite überzeugt nicht", "Gezeigte Seiten öffnen: Stehen Preise, Ablauf und Kontakt darauf?"],
            ["Nennungsquote sinkt, Berichte bleiben gleich", "Schwankung der Stichprobe oder andere Quellen in den Antworten", "Quellen der Antworten vergleichen, erst nach mehreren Monaten handeln"],
            ["Bing zitiert eine Ratgeberseite oft, Leistungsseiten nie", "Ihr Fachwissen wird genutzt, Ihr Angebot nicht", "Leistungsseiten um klare Antworten auf Kundenfragen ergänzen"],
            ["Besuche aus KI-Assistenten, aber keine Anfragen", "Besucher finden keinen nächsten Schritt", "Zielseiten in der Web-Analyse ansehen"],
            ["Alle Zahlen klein", "Für kleine Betriebe normal", "Auf Richtigkeit und Verlauf achten, nicht auf Prozente"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine Scorecard ist ein Anlass zum Nachsehen, kein Urteil. Die Erklärung für eine Zahl finden Sie in den Antworten selbst und in den Quellen, die dort verlinkt sind. Wie Sie diese Quellen systematisch erfassen, zeigt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen#quellenkarte).",
        },
      ],
    },
    {
      id: "wenn-eine-zahl",
      title: "Wenn es doch eine Zahl sein muss",
      answer:
        "Muss es eine Zahl sein, wählen Sie eine direkt beobachtete Größe wie die Nennungsquote mit Basis und stellen Sie die Richtigkeit daneben. Wer mehrere Werte verrechnet, sollte Gewichte und Einzelwerte offenlegen.",
      blocks: [
        {
          t: "p",
          text: "Das Handbuch von OECD und EU-Kommission warnt, dass zusammengesetzte Kennzahlen missbraucht werden können, wenn ihr Aufbau nicht transparent ist. Daraus leiten wir drei Regeln für Berichte an Inhaber, Geschäftsführung oder Kunden ab:",
        },
        {
          t: "ul",
          items: [
            "**Offenlegen:** welche Werte, welche Gewichte, welche Quelle. Ohne diese Angaben lässt sich eine Zahl nicht überprüfen.",
            "**Einzelwerte mitliefern:** Die Gesamtzahl steht nie allein, die Zeilen der Scorecard stehen darunter.",
            "**Gegenprobe machen:** Ändert sich die Gesamtzahl stark, wenn Sie die Gewichte leicht verschieben, trägt sie wenig Information.",
          ],
        },
        {
          t: "p",
          text: "Für die meisten lokalen Betriebe reicht ein Satz wie: „Im September wurden wir in x von 30 Antworten genannt, alle Angaben stimmten, die Search Console zeigte y Impressionen in KI-Funktionen, und wir hatten z Anfragen.“ Das ist überprüfbar und ehrlicher als jeder Index.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Gibt es einen offiziellen AI Visibility Index von Google oder OpenAI?",
      a: "In den Unterlagen, die wir geprüft haben, nicht. Google bietet in der Search Console einen Bericht mit Impressionen in Übersichten mit KI und KI-Modus, Microsoft einen Bericht mit Zitierungen, OpenAI einen Parameter, an dem Sie Besuche aus ChatGPT in Ihrer Web-Analyse erkennen. Eine Gesamtnote vergibt keiner dieser Anbieter.",
    },
    {
      q: "Welcher Wert ist gut?",
      a: "Einen belegten Richtwert kennen wir nicht. Nennungsquoten hängen von Branche, Ort, Fragen und Dienst ab. Vergleichen Sie Ihren Betrieb mit sich selbst über mehrere Monate und mit den Wettbewerbern, die in denselben Antworten vorkommen.",
    },
    {
      q: "Ist die Nennungsquote nicht auch nur eine Zahl?",
      a: "Ja, aber eine direkt beobachtete mit bekannter Basis. „In x von 30 Antworten genannt“ lässt sich nachprüfen, weil jede Antwort als Bildschirmfoto vorliegt. Ein gewichteter Index lässt sich dagegen nicht auf einzelne Antworten zurückführen.",
    },
    {
      q: "Warum messen Sie nicht die Position in der Antwort?",
      a: "Weil sie kaum stabil ist. In der Untersuchung von SparkToro und Gumshoe wiederholte sich die Reihenfolge empfohlener Marken noch seltener als die Liste selbst. Microsoft schreibt, dass seine Zitierzahlen nichts über Rang oder Platzierung aussagen, und in der Search Console erhalten alle Links einer Übersicht mit KI dieselbe Position.",
    },
    {
      q: "Gehören Schema, Bewertungen und Verzeichnisse nicht in einen KI-Index?",
      a: "Das sind Maßnahmen, die Sichtbarkeit fördern können, aber keine Sichtbarkeit. Führen Sie sie in einer Aufgabenliste, etwa mit der [Checkliste KI-Sichtbarkeit](/blog/ai-visibility-checklist), und messen Sie getrennt davon, was in den Antworten ankommt.",
    },
  ],
  sources: [
    { title: "Handbook on Constructing Composite Indicators: Methodology and User Guide (2008), Box 1 und Abschnitt 1.6", publisher: "Nardo, Saisana, Saltelli, Tarantola, Hoffmann, Giovannini; OECD und Gemeinsame Forschungsstelle der EU-Kommission", url: "https://knowledge4policy.ec.europa.eu/sites/default/files/jrc47008_handbook_final.pdf" },
    { title: "Handbook on Constructing Composite Indicators (Eintrag JRC47008)", publisher: "JRC Publications Repository, Europäische Kommission", url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC47008" },
    { title: "GEO: Generative Engine Optimization (arXiv 2311.09735v3, KDD 2024)", publisher: "Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande, arXiv", url: "https://arxiv.org/pdf/2311.09735" },
    { title: "Evaluating Verifiability in Generative Search Engines (Findings of EMNLP 2023, DOI 10.18653/v1/2023.findings-emnlp.467)", publisher: "Liu, Zhang, Liang, arXiv", url: "https://arxiv.org/abs/2304.09848v2" },
    { title: "Non-Determinism of “Deterministic” LLM System Settings in Hosted Environments (Eval4NLP 2025)", publisher: "Atıl u. a., ACL Anthology", url: "https://aclanthology.org/2025.eval4nlp-1.12" },
    { title: "NEW Research: AIs are highly inconsistent when recommending brands or products (27. Januar 2026, mit Gumshoe)", publisher: "Rand Fishkin, SparkToro", url: "https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/" },
    { title: "Top sources and directories for local AI search (26. August 2026), Methodik", publisher: "BrightLocal", url: "https://www.brightlocal.com/resources/ai-directory-sources/" },
    { title: "Optimizing your website for generative AI features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "What are impressions, position, and clicks?", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7042828?hl=en" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "Standard-Channelgruppe", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/9756891?hl=de" },
    { title: "What's new in Google Analytics (Eintrag vom 13. Mai 2026)", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/9164320" },
    { title: "What are AI assistants in Matomo? (Stand 10. Juni 2026)", publisher: "Matomo", url: "https://matomo.org/faq/reports/what-are-ai-assistants-in-matomo/" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856" },
    { title: "Understand your Business Profile performance and insights", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=en" },
  ],
  related: [
    { slug: "ai-zitat-monitoring-local-seo-2026", title: "KI-Zitat-Monitoring: die Monatsroutine" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews und Local SEO" },
    { slug: "ai-visibility-checklist", title: "KI-Sichtbarkeit prüfen: Checkliste" },
  ],
  cta: {
    title: "Was sagen KI-Dienste wirklich über Ihren Betrieb?",
    text: "Statt eines Index bekommen Sie konkrete Befunde: Wir stellen typische Fragen Ihrer Kunden, prüfen Nennungen und Angaben und sehen uns Ihre Search Console an. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
