import type { V4Article } from "../types";

const article: V4Article = {
  slug: "was-ist-geo-generative-engine-optimization",
  lang: "de",
  seoTitle: "Was ist GEO? Generative Engine Optimization erklärt",
  seoDescription:
    "GEO erklärt: woher der Begriff stammt, was die Studie dahinter wirklich gemessen hat, was Google offiziell sagt und was lokale Betriebe davon brauchen.",
  h1: "Was ist GEO? Generative Engine Optimization zwischen Forschung, Google-Aussagen und Agenturversprechen",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, denen GEO als neue Pflicht angeboten wird. Sie erfahren, woher der Begriff stammt, was die Studie dahinter gemessen hat, was Google offiziell sagt und welche Schritte für Ihren Betrieb zählen.",
  answer:
    "GEO (Generative Engine Optimization) bezeichnet Maßnahmen, mit denen Inhalte in KI-Antworten wie der Übersicht mit KI, dem KI-Modus oder der ChatGPT-Suche genannt und als Quelle verlinkt werden sollen. Der Begriff stammt aus einer Forschungsarbeit von 2023. Google schreibt, Optimierung für generative KI-Suche sei **weiterhin SEO**. Für lokale Betriebe zählen dieselben Grundlagen: lesbare Website, gepflegtes Profil, einheitliche Daten.",
  takeaways: [
    "GEO meint Maßnahmen, damit Inhalte in KI-Antworten genannt oder als Quelle verlinkt werden. Eine verbindliche Definition gibt es nicht.",
    "Der Begriff stammt aus einer Studie von 2023. Ihre „bis zu 40 Prozent“ gelten für ein Versuchssystem mit vorgegebenen Quellen, nicht für lokale Suchen, Klicks oder Umsatz.",
    "Google schreibt, Optimierung für generative KI-Suche sei weiterhin SEO. Für Googles KI-Funktionen sind weder zusätzliche Anforderungen noch llms.txt oder spezielles Schema nötig.",
    "Eine Übersichtsarbeit vom Juli 2026 findet in 45 Studien keine Technik mit belegtem stabilem, plattformübergreifendem Effekt. Weder Google noch OpenAI noch Microsoft sagen eine Nennung zu.",
    "Für lokale Betriebe zählen Zugang für die Such-Crawler, Fakten als Text, ein gepflegtes Unternehmensprofil, einheitliche Daten und echte Bewertungen.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "was-ist-geo",
      title: "Was GEO bedeutet",
      answer:
        "GEO steht für Generative Engine Optimization und meint alles, was Inhalte dafür vorbereitet, in Antworten generativer Suchsysteme genannt, zusammengefasst oder als Quelle verlinkt zu werden. Eine verbindliche Definition gibt es nicht, den Begriff verwenden Forscher, Agenturen und inzwischen auch Google und Microsoft.",
      blocks: [
        {
          t: "p",
          text: "Eine **generative Suchmaschine** antwortet nicht mit einer Liste von Treffern, sondern mit einem geschriebenen Text. Die Forscher, die den Begriff geprägt haben, beschreiben sie so: Das System nimmt eine Anfrage entgegen, holt sich Quellen und gibt eine Antwort in natürlicher Sprache zurück. Beispiele sind die Übersicht mit KI und der KI-Modus in der Google-Suche, die Suche in ChatGPT, Perplexity und Microsoft Copilot.",
        },
        {
          t: "p",
          text: "Für einen Betrieb zählt dann nicht nur der Platz in einer Liste, sondern ob eine Antwort Ihren Namen nennt, Ihre Angaben richtig wiedergibt und auf Ihre Seite verweist. Einen Vergleich der beiden Arten von Suche bietet [KI-Suche und klassische Suche im Vergleich](/blog/ai-search-vs-traditional-search).",
        },
        {
          t: "note",
          label: "Begriffe bei Google",
          text: "Google nennt die KI-Antworten über den Treffern auf Deutsch „Übersicht mit KI“, im Alltag oft KI-Übersichten oder AI Overviews. Den Bereich für längere Fragen mit Rückfragen nennt Google „KI-Modus“ (AI Mode). In Deutschland, Österreich und der Schweiz gibt es die Übersicht mit KI seit März 2025, den KI-Modus seit Oktober 2025.",
        },
      ],
    },
    {
      id: "herkunft",
      title: "Woher der Begriff kommt: die Studie von 2023",
      answer:
        "Der Begriff stammt aus der Arbeit „GEO: Generative Engine Optimization“ von Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan und Ameet Deshpande. Sie erschien im November 2023 als Vorabveröffentlichung und im August 2024 im Tagungsband der Fachkonferenz KDD in Barcelona.",
      blocks: [
        {
          t: "p",
          text: "Die Autoren kamen von der Princeton University und dem Indian Institute of Technology Delhi, zwei forschten unabhängig. Die Kurzform „Princeton-Studie“ stimmt also nur zum Teil. Veröffentlicht wurde die Arbeit auf der 30. ACM SIGKDD Conference on Knowledge Discovery and Data Mining, einer begutachteten Fachkonferenz.",
        },
        {
          t: "table",
          caption: "Was die Studie gemessen hat",
          head: ["Punkt", "Aufbau der Studie"],
          rows: [
            ["Testfragen", "GEO-bench: 10.000 Fragen aus 25 Themenbereichen"],
            ["Suchsystem", "Ein Nachbau: die ersten fünf Google-Treffer, aus denen GPT-3.5-turbo eine Antwort schreibt"],
            ["Eingriff", "Je Frage schrieb ein Sprachmodell eine zufällig gewählte der fünf Quellen um, einmal je Methode"],
            ["Messgröße", "Wie viel Text der Antwort auf diese Quelle zurückgeht und wie weit oben er steht"],
            ["Neun Methoden", "Unter anderem Zitate, Statistiken oder Quellenangaben einfügen, flüssiger formulieren, Schlüsselwörter häufen"],
            ["Ergebnis", "Zitate, Statistiken und Quellenangaben erhöhten den gemessenen Textanteil um bis zu rund 40 Prozent, am stärksten eingefügte Zitate. Bei der Bewertung durch ein Sprachmodell lag der beste Wert bei 28 Prozent. Gehäufte Schlüsselwörter senkten den Textanteil unter den des unveränderten Texts"],
            ["Praxistest", "200 Fragen in Perplexity, Quellen als Dateien hochgeladen: bis zu 22 Prozent mehr Textanteil und bis zu 37 Prozent bei der Bewertung durch ein Sprachmodell"],
          ],
        },
        {
          t: "p",
          text: "Zwei Nebenbefunde: Quellen, die unter den fünf Treffern weiter unten standen, profitierten stärker. Für „Quellen angeben“ berichten die Autoren bei der fünften Quelle eine relative Steigerung von 115 Prozent. Die jeweils erste Quelle verlor dagegen mit allen dort aufgeführten Methoden Anteile, mit „Quellen angeben“ rund 30 Prozent. Und welche Methode wirkte, hing vom Themenbereich ab.",
        },
      ],
    },
    {
      id: "grenzen",
      title: "Was die Studie nicht zeigt",
      answer:
        "Die Studie misst, wie viel Raum eine Quelle in einer Antwort bekommt, wenn sie schon unter den fünf ausgewählten Quellen ist. Ob eine Seite überhaupt ausgewählt wird, ob mehr Menschen klicken oder anrufen und ob das Ergebnis für lokale Suchen gilt, hat sie nicht untersucht.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Die Auswahl war vorgegeben.** Die umgeschriebene Seite lag dem System bereits vor. Gemessen wurde ihr Anteil an der Antwort, nicht ihre Chance, gefunden zu werden.",
            "**Ein Versuchssystem, kein Produkt.** Getestet wurde vor allem ein Nachbau. Google etwa schreibt, seine KI-Funktionen beruhen auf den zentralen Systemen der Suche für Rangfolge und Qualität.",
            "**Keine lokalen Fragen.** Die Testfragen stammen aus Bereichen wie Kunst, Gesundheit oder Spiele, nicht aus der Suche nach Betrieben in einem Ort.",
            "**Kein Geschäftsergebnis.** Gemessen wurden Textanteile und Einschätzungen durch ein Sprachmodell, keine Klicks, Anrufe oder Buchungen.",
            "**Ein Stand von 2023 und 2024.** Die Autoren schreiben selbst, dass die Methoden sich wohl anpassen müssen, wenn sich die Systeme weiterentwickeln.",
          ],
        },
        {
          t: "h3",
          text: "Was spätere Forschung zeigt",
        },
        {
          t: "p",
          text: "Die Arbeit **C-SEO Bench** (NeurIPS 2025) hat solche Methoden systematisch geprüft. Die meisten waren weitgehend wirkungslos und verschlechterten oft sogar die Position eines Dokuments. Deutlich mehr brachte es, wenn ein Dokument in der Quellenliste des Sprachmodells weiter oben stand. So bilden die Autoren klassische Suchmaschinenoptimierung nach. Und je mehr Anbieter dieselben Methoden einsetzen, desto kleiner wird der Gewinn.",
        },
        {
          t: "p",
          text: "Eine Übersichtsarbeit vom Juli 2026 wertet 45 Studien aus. Ihr Ergebnis: Für keine der untersuchten Techniken ist ein stabiler, über längere Zeit gemessener und plattformübergreifender ursächlicher Effekt belegt, und Behauptungen über den wirtschaftlichen Nutzen von GEO gehen deutlich über die Belege hinaus. Anders als C-SEO Bench ist diese Arbeit bisher nur als Vorabveröffentlichung eines einzelnen Autors erschienen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Die Studie von 2023 ist ein ernsthafter Beginn der Forschung, aber keine Anleitung für Ihren Betrieb. Wer mit „plus 40 Prozent Sichtbarkeit durch GEO“ wirbt, überträgt ein Laborergebnis auf eine Lage, die nie gemessen wurde.",
        },
      ],
    },
    {
      id: "geo-seo-aeo",
      title: "GEO, SEO, AEO und LLMO: was die Begriffe trennt",
      answer:
        "Die Begriffe überschneiden sich stark: Google nennt AEO (Answer Engine Optimization) und GEO und schreibt, Optimierung für generative KI-Suche sei Optimierung für das Sucherlebnis und damit weiterhin SEO. Ein Produktmanager von Microsoft Bing schreibt, ob GEO, AIO oder SEO, Sichtbarkeit bleibe entscheidend. Für LLMO haben wir bei keinem Anbieter eine Definition gefunden.",
      blocks: [
        {
          t: "table",
          caption: "Die Begriffe im Überblick",
          head: ["Begriff", "Gemeint ist meist", "Wer ihn verwendet"],
          rows: [
            ["SEO (Search Engine Optimization)", "Sichtbarkeit in Suchmaschinen, auch in deren KI-Funktionen", "Alle. Google zählt GEO und AEO ausdrücklich dazu"],
            ["GEO (Generative Engine Optimization)", "Als Quelle oder Nennung in KI-Antworten vorkommen", "Forschung seit 2023, Agenturen, Google und Microsoft"],
            ["AEO (Answer Engine Optimization)", "Als direkte Antwort erscheinen, etwa in KI-Zusammenfassungen oder hervorgehobenen Snippets", "Vor allem Agenturen. Google nennt den Begriff in seinem Leitfaden"],
            ["LLMO (Large Language Model Optimization)", "Wie Sprachmodelle Inhalte lesen und wiedergeben", "Agenturen und Berater. Keine Definition eines Anbieters gefunden"],
          ],
        },
        {
          t: "p",
          text: "Ein Produktmanager von Microsoft Bing schrieb im Oktober 2025 sinngemäß: Ob man es GEO, AIO oder SEO nennt, eines habe sich nicht geändert: Sichtbarkeit sei alles. Seinen Bericht zu KI-Zitierungen in den Bing Webmaster Tools nennt Microsoft einen ersten Schritt zu Werkzeugen für GEO.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für einen lokalen Betrieb ist der Begriff unerheblich. Entscheidend ist, dass Menschen, Suchmaschinen und KI-Systeme überall dasselbe richtige Bild von Ihrem Betrieb bekommen.",
        },
      ],
    },
    {
      id: "was-google-sagt",
      title: "Was Google offiziell sagt",
      answer:
        "Google schreibt, dass es für die Übersicht mit KI und den KI-Modus keine zusätzlichen Anforderungen gibt: Eine Seite muss indexiert und für die Anzeige mit Snippet geeignet sein. Ein Leitfaden vom Mai 2026 weist verbreitete GEO-Ratschläge wie llms.txt oder spezielles Schema ausdrücklich zurück.",
      blocks: [
        {
          t: "p",
          text: "Maßgeblich sind zwei Seiten in Googles Dokumentation für Website-Betreiber: „AI features and your website“ und der Leitfaden „Google's Guide to Optimizing for Generative AI Features on Google Search“, zuletzt aktualisiert im Juli 2026.",
        },
        {
          t: "table",
          caption: "Googles Aussagen zu seinen KI-Funktionen (Stand Oktober 2026)",
          head: ["Thema", "Was Google schreibt"],
          rows: [
            ["Zusätzliche Anforderungen", "Keine. Die Seite muss indexiert und für die Anzeige mit Snippet geeignet sein"],
            ["Einstellung in der Search Console", "Die Website muss für die generativen KI-Funktionen der Suche zugelassen sein. Das ist laut Google die Standardeinstellung"],
            ["llms.txt und ähnliche Dateien", "Nicht nötig. Die Google-Suche ignoriert sie, sie schaden und nützen dort nicht"],
            ["Spezielle strukturierte Daten", "Kein besonderes schema.org-Markup nötig. Strukturierte Daten bleiben für Rich-Suchergebnisse sinnvoll und müssen zum sichtbaren Text passen"],
            ["Inhalte zerstückeln oder eigens für KI umschreiben", "Nicht nötig. Googles Systeme erkennen mehrere Themen auf einer Seite und verstehen Synonyme"],
            ["Erwähnungen im Netz streuen", "Unechte Erwähnungen helfen weniger, als man denken könnte"],
            ["Unternehmensprofil", "Kann helfen, Produkte und Leistungen in KI-Antworten und anderen Suchergebnissen sichtbar zu machen"],
          ],
        },
        {
          t: "p",
          text: "Zum Ablauf beschreibt Google das sogenannte **Fan-out**: Das System erzeugt aus einer Frage mehrere verwandte Suchanfragen und holt dazu weitere Treffer. Laut Leitfaden können KI-Antworten, wo es passt, Informationen über lokale Unternehmen enthalten. Google verweist dafür auf die Pflege der Unternehmensangaben, also auf das Unternehmensprofil.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Seit dem 31. August 2026 können alle Websites ihre Inhalte in der Search Console aus den generativen KI-Funktionen der Suche ausschließen. Standardmäßig sind sie zugelassen. Prüfen Sie einmal, ob jemand den Ausschluss aktiviert hat. Das Training von KI-Modellen regelt diese Einstellung nicht, dafür nennt Google das Token Google-Extended.",
        },
      ],
    },
    {
      id: "belege-und-versprechen",
      title: "Belegt, vermutet, verkauft: GEO-Versprechen im Faktencheck",
      answer:
        "Belegt ist wenig, aber Wichtiges: Seiten müssen erreichbar, indexiert und hilfreich sein, und niemand kann eine Nennung garantieren. Vieles, was als GEO verkauft wird, widerspricht Googles Dokumentation oder stützt sich auf ein Laborergebnis von 2023.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und was die Quellen sagen",
          head: ["Aussage", "Einordnung"],
          rows: [
            ["„GEO bringt 40 Prozent mehr Sichtbarkeit“", "Ein Laborwert: Textanteil einer Quelle, die schon unter fünf Treffern stand, in einem Versuchssystem von 2023. Kein Maß für Anfragen oder Umsatz"],
            ["„Ohne llms.txt finden KI-Systeme Sie nicht“", "Die Google-Suche ignoriert die Datei. Was andere Anbieter dazu sagen, steht in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026)"],
            ["„Sie brauchen spezielles KI-Schema“", "Laut Google nicht. Normales Markup passend zum sichtbaren Text genügt, siehe [Schema Markup für Local SEO](/blog/schema-markup-local-seo)"],
            ["„Texte müssen in kleine Häppchen zerlegt werden“", "Google: nicht nötig. Microsoft empfiehlt klare Überschriften, Listen und für sich verständliche Sätze. Gute Gliederung hilft, Zerstückeln ist keine Pflicht"],
            ["„Wir bringen Sie garantiert in ChatGPT“", "OpenAI schreibt, die Platzierung sei nicht garantiert. Microsoft schreibt, nichts garantiere eine Auswahl"],
            ["„Unser Werkzeug misst Ihre KI-Sichtbarkeit exakt“", "Google: Kein Drittanbieter hat Zugriff auf Googles interne Systeme für Rangfolge und KI. Antworten schwanken, Messwerte sind Stichproben"],
            ["„Eine Seite je Nachbarort, von KI geschrieben“", "Massenhaft erzeugte Seiten ohne Mehrwert, ausdrücklich auch mit generativer KI erstellte, und Brückenseiten verstoßen gegen Googles Spam-Richtlinien"],
          ],
        },
        {
          t: "p",
          text: "Dass KI-Antworten schwanken, ist belegt. Eine in der Übersichtsarbeit von 2026 zitierte Studie (Kirsten und Kollegen, ACL 2026) verglich die Seiten, die Googles Übersichten mit KI im Abstand von zwei Monaten nannten: Die Überschneidung lag bei 18 Prozent, bei den normalen Google-Treffern bei 45 Prozent. Ein einzelner Test sagt deshalb wenig.",
        },
      ],
    },
    {
      id: "lokale-betriebe",
      title: "Was GEO für einen kleinen lokalen Betrieb bedeutet",
      answer:
        "Für einen Handwerksbetrieb, eine Praxis oder ein Hotel heißt GEO vor allem: die bekannten Grundlagen ordentlich erledigen und dabei mehr Systeme mitdenken. Die Website muss für die Such-Crawler erreichbar sein, Fakten als Text nennen und mit Unternehmensprofil und Verzeichnissen übereinstimmen.",
      blocks: [
        {
          t: "p",
          text: "Ein Beispiel: Ein Malerbetrieb in Wels möchte genannt werden, wenn jemand fragt: „Welcher Maler in Wels streicht Fassaden und hat im Frühjahr noch Termine frei?“ Ein System mit Fan-out sucht dafür nach Teilthemen wie Leistung, Ort und Verfügbarkeit. Steht auf der Website nur „Ihr Partner für Farbe“, findet es keine Antwort. Steht dort „Fassadenanstrich in Wels und im Bezirk Wels-Land, Termine ab März, Angebot nach Besichtigung“, gibt es etwas zu zitieren.",
        },
        {
          t: "steps",
          items: [
            { title: "Zugang sichern", text: "Die Such-Crawler von Google (Googlebot), OpenAI (OAI-SearchBot) und Perplexity (PerplexityBot) müssen Ihre Seiten lesen dürfen, in der robots.txt und in Firewall oder CDN." },
            { title: "Fakten als Text", text: "Leistungen, Einzugsgebiet, Öffnungszeiten, Preisrahmen und Bedingungen als Text, nicht nur in Bildern oder PDF-Dateien. Das empfehlen Google und Microsoft gleichermaßen." },
            { title: "Eigenes Wissen zeigen", text: "Google rät zu Inhalten aus eigener Erfahrung. Für einen Betrieb sind das Antworten auf die Fragen, die Kunden am Telefon stellen, mit einem klaren ersten Satz." },
            { title: "Unternehmensprofil pflegen", text: "Kategorien, Leistungen, Öffnungszeiten und Fotos aktuell halten, siehe [Unternehmensprofil optimieren](/blog/google-my-business-optimieren)." },
            { title: "Daten überall angleichen", text: "Gleiche Angaben in Profil, Website, Bing Places, Apple Business und den Verzeichnissen Ihrer Branche." },
            { title: "Echte Bewertungen", text: "Alle Kunden um eine Bewertung bitten, ohne Gegenleistung und ohne Vorauswahl, und jede Bewertung sachlich beantworten." },
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Welche Quellen die KI-Systeme für lokale Angaben nutzen, legen die Anbieter nicht vollständig offen. Deshalb sollten Ihre Daten überall stimmen. Keiner der Schritte garantiert eine Nennung, aber sie sorgen dafür, dass ein System richtige Angaben über Ihren Betrieb findet.",
        },
      ],
    },
    {
      id: "plattformen",
      title: "Die einzelnen Plattformen: wo Sie weiterlesen",
      answer:
        "Jede Plattform dokumentiert andere Dinge: Google seine KI-Funktionen und das Unternehmensprofil, OpenAI und Perplexity ihre Crawler, Microsoft seinen Bericht zu Zitierungen. Die Einzelheiten stehen in eigenen Artikeln dieser Reihe.",
      blocks: [
        {
          t: "table",
          caption: "Vertiefung nach Thema",
          head: ["Thema", "Worum es geht", "Artikel"],
          rows: [
            ["Übersicht mit KI", "Verfügbarkeit, Quellenauswahl, Steuerung, Messung", "[Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo)"],
            ["KI-Modus", "Fan-out, lokale Ergebnisse und Karten", "[Google AI Mode und Local SEO](/blog/google-ai-mode-local-seo-2026)"],
            ["Unternehmensprofil", "Welche Profilangaben Googles KI-Funktionen nutzen", "[Unternehmensprofil und KI-Funktionen](/blog/unternehmensprofil-ki-funktionen-2026)"],
            ["ChatGPT", "Crawler, Zugang und lokale Ergebnisse", "[ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026)"],
            ["ChatGPT-Quellen", "Welche Seiten bei lokalen Fragen zitiert werden", "[Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen)"],
            ["Perplexity und Claude", "Wie beide Dienste Quellen finden und nennen", "[Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit)"],
            ["Bing und Copilot", "Bing Places, Webmaster Tools, Copilot", "[Bing, Copilot und Local SEO](/blog/bing-copilot-local-seo-2026)"],
            ["Crawler", "Alle KI-Crawler, robots.txt, Bot-Schutz", "[KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026)"],
            ["Falsche Angaben", "Quelle finden, korrigieren, melden", "[KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)"],
          ],
        },
      ],
    },
    {
      id: "messen",
      title: "Messen ohne Wunderwerkzeug",
      answer:
        "Seit dem 31. August 2026 zeigt die Search Console allen Websites, wie oft Links zu ihnen in der Übersicht mit KI und im KI-Modus erschienen. Besuche aus ChatGPT erkennen Sie am Parameter utm_source=chatgpt.com, Zitierungen in Copilot zählen die Bing Webmaster Tools.",
      blocks: [
        {
          t: "table",
          caption: "Kostenlose Messquellen",
          head: ["Plattform", "Wo", "Was Sie sehen"],
          rows: [
            ["Google", "Search Console, Bericht zu generativen KI-Funktionen", "Wie oft Links zu Ihrer Seite in Übersicht mit KI und KI-Modus gezeigt wurden"],
            ["Google", "Search Console, Leistungsbericht, Suchtyp „Web“", "Klicks einschließlich der KI-Funktionen, nicht getrennt"],
            ["ChatGPT", "Web-Analyse", "Besuche mit utm_source=chatgpt.com"],
            ["Copilot und Bing", "Bing Webmaster Tools, Bericht „AI Performance“", "Zitierungen und zitierte Seiten, ohne Position in der Antwort"],
            ["Alle", "Ihr Anfrageeingang", "Ob aus Nennungen Anrufe, Termine und Buchungen werden"],
          ],
        },
        {
          t: "p",
          text: "Dazu kommt eine feste Stichprobe: dieselben fünf bis zehn Fragen mit Ortsangabe, einmal im Monat, Ergebnis mit Datum festgehalten. Weil die Antworten schwanken, zählt der Verlauf über Monate. Eine Vorlage enthält [KI-Sichtbarkeit prüfen](/blog/ai-visibility-checklist#messen).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ist GEO dasselbe wie SEO?",
      a: "Google sagt im Kern ja: Optimierung für generative KI-Suche sei Optimierung für das Sucherlebnis und damit weiterhin SEO. Bei anderen Anbietern kommen einzelne Punkte hinzu, etwa der Zugang für deren eigene Crawler wie OAI-SearchBot oder PerplexityBot. Unsere Einschätzung: Eine getrennte Disziplin mit eigenen Regeln ist GEO nach heutigem Stand nicht.",
    },
    {
      q: "Wer hat den Begriff GEO geprägt?",
      a: "Der Begriff stammt aus der Forschungsarbeit „GEO: Generative Engine Optimization“ von Pranjal Aggarwal und fünf Mitautoren. Sie erschien im November 2023 als Vorabveröffentlichung und 2024 im Tagungsband der Konferenz KDD. Die Autoren kamen von der Princeton University, dem IIT Delhi und aus der unabhängigen Forschung.",
    },
    {
      q: "Brauche ich als kleiner Betrieb eine GEO-Agentur?",
      a: "Nicht für etwas anderes als gute lokale Suchmaschinenoptimierung. Wenn ein Angebot garantierte Nennungen, spezielle KI-Dateien für Google oder massenhaft erzeugte Ortsseiten verspricht, widerspricht es den Aussagen von Google und OpenAI. Fragen Sie bei jeder Maßnahme, welche Quelle sie stützt.",
    },
    {
      q: "Kann ich meine Website aus Googles KI-Antworten heraushalten?",
      a: "Ja. Seit dem 31. August 2026 steht dafür allen Websites weltweit eine Einstellung in der Search Console zur Verfügung. Ihre Inhalte dienen dann nicht mehr als Grundlage für solche Antworten, und Sie bekommen von dort keine Besucher. Die normale Platzierung in der Suche bleibt laut Google davon unberührt.",
    },
    {
      q: "Wie schnell wirkt GEO?",
      a: "Dafür gibt es keine belastbare Zahl. KI-Antworten können sich von Anfrage zu Anfrage ändern, und die genannten Quellen wechseln stark. Unsere Einschätzung: Planen Sie in Monaten und messen Sie Anfragen und Buchungen, nicht einzelne Antworten.",
    },
  ],
  sources: [
    { title: "GEO: Generative Engine Optimization (arXiv 2311.09735, Version 3)", publisher: "Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande, arXiv", url: "https://arxiv.org/html/2311.09735v3" },
    { title: "GEO: Generative Engine Optimization (KDD 2024, Tagungsband, DOI 10.1145/3637528.3671900)", publisher: "Princeton University, Forschungsportal (Verlag: ACM)", url: "https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/" },
    { title: "C-SEO Bench: Does Conversational SEO Work?", publisher: "Puerto, Gubri, Green, Oh, Yun, arXiv (NeurIPS 2025)", url: "https://arxiv.org/abs/2506.11097" },
    { title: "Optimizing Visibility in Generative Engines: A Critical Survey of Generative Engine Optimization (15. Juli 2026, Vorabveröffentlichung)", publisher: "Olivier Martinez, arXiv", url: "https://arxiv.org/pdf/2607.14035" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "A new resource for optimizing for generative AI in Google Search (Mai 2026)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing" },
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Search generative AI control", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16908024?hl=en" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=en" },
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "Übersicht mit KI startet in Deutschland und weiteren Ländern (26. März 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/uebersicht-mit-ki-start/" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Spam-Richtlinien für die Google Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)", publisher: "Microsoft Advertising Blog", url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers" },
    { title: "Introducing AI Performance in Bing Webmaster Tools Public Preview (10. Februar 2026)", publisher: "Microsoft Bing Webmaster Blog", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { title: "ChatGPT search", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
    { title: "AEO vs. GEO vs. LLMO: What Do All These New Terms Actually Mean For SEO?", publisher: "OMCP (Branchenbeitrag)", url: "https://omcp.org/aeo-vs-geo-vs-llmo-vs-seo/" },
  ],
  related: [
    { slug: "google-ai-overviews-local-seo", title: "Google AI Overviews und Local SEO" },
    { slug: "google-ai-mode-local-seo-2026", title: "Google AI Mode und Local SEO" },
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "ai-search-vs-traditional-search", title: "KI-Suche und klassische Suche im Vergleich" },
  ],
  cta: {
    title: "Wie steht Ihr Betrieb in KI-Antworten da?",
    text: "Wir prüfen, ob die Such-Crawler von Google, OpenAI und Perplexity Ihre Website lesen dürfen, was KI-Antworten zu Ihrem Betrieb sagen und ob Website und Unternehmensprofil übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
