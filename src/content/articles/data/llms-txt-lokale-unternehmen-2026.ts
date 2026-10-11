import type { V4Article } from "../types";

const article: V4Article = {
  slug: "llms-txt-lokale-unternehmen-2026",
  lang: "de",
  seoTitle: "llms.txt für lokale Unternehmen: Was belegt ist",
  seoDescription:
    "Was llms.txt ist, wer die Datei vorgeschlagen hat, was Google, OpenAI, Anthropic und Perplexity dazu sagen und ob sich der Aufwand für Ihren Betrieb lohnt.",
  h1: "llms.txt für lokale Unternehmen: Was die Datei kann, was nicht und ob sie sich lohnt",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, denen jemand eine llms.txt empfohlen oder angeboten hat. Sie erfahren, wer die Datei vorgeschlagen hat, was die großen Anbieter öffentlich dazu sagen, was sie für einen kleinen Betrieb leisten kann und wie eine schlanke Datei aussieht.",
  answer:
    "llms.txt ist ein freiwilliger Vorschlag aus dem Jahr 2024: eine Markdown-Datei, die KI-Agenten eine kurze Übersicht über die wichtigsten Seiten einer Website gibt. Google schreibt ausdrücklich, dass die Google Suche sie ignoriert. OpenAI, Anthropic und Perplexity beschreiben in ihren Dokumenten zu Crawlern und Suche keine Rolle für sie. Für lokale Betriebe ist sie eine kleine Ergänzung, keine Voraussetzung für KI-Sichtbarkeit.",
  takeaways: [
    "llms.txt ist ein Vorschlag von Jeremy Howard vom 3. September 2024, kein verbindlicher Standard. Seit August 2026 gibt es eine zweite Fassung.",
    "Google schreibt seit Juni 2026 ausdrücklich: Die Google Suche ignoriert llms.txt, die Datei schadet und hilft dort nicht.",
    "OpenAI, Anthropic und Perplexity beschreiben in ihren Dokumenten zu Crawlern und Suche keine Rolle für llms.txt. OpenAI und Perplexity verweisen dort nur auf die llms.txt ihrer eigenen Entwicklerdokumentation.",
    "Die Datei steuert keinen Zugriff. Ob KI-Suchen Ihre Seiten lesen dürfen, regeln robots.txt und Bot-Schutz.",
    "Für lokale Betriebe lohnt sie sich erst, wenn Crawler-Zugriff, Website und Profile stimmen, und nur, wenn sie mitgepflegt wird.",
  ],
  publishedAt: "2026-05-22",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "was-ist-llms-txt",
      title: "Was llms.txt ist und wer sie vorgeschlagen hat",
      answer:
        "llms.txt ist eine Textdatei im Markdown-Format, die KI-Agenten eine kurze Übersicht über eine Website und Links zu den wichtigsten Seiten gibt. Vorgeschlagen hat sie Jeremy Howard am 3. September 2024; der Vorschlag steht auf llmstxt.org und ist kein verbindlicher Standard.",
      blocks: [
        {
          t: "p",
          text: "Der Gedanke dahinter: Webseiten sind für Menschen gebaut. Ein KI-Agent, der für einen Nutzer etwas nachschlägt, braucht dagegen schnell die wesentlichen Fakten und die richtigen Seiten. Die Datei liegt deshalb wie die robots.txt unter einer festen Adresse, in der Regel ihredomain.de/llms.txt.",
        },
        {
          t: "p",
          text: "Laut Projektseite war die Datei vor allem für den Moment einer Anfrage gedacht, nicht für das Training von Sprachmodellen. Die zweite Fassung vom August 2026 begründet der Autor mit zwei Jahren Erfahrung: Tausende Websites veröffentlichten inzwischen eine llms.txt, und Programmier-Agenten nutzten sie zuverlässig. Eine unabhängige Messung ist das nicht.",
        },
        {
          t: "table",
          caption: "robots.txt, sitemap.xml und llms.txt im Vergleich",
          head: ["Datei", "Aufgabe", "Verhältnis zu llms.txt laut Vorschlag"],
          rows: [
            ["robots.txt", "Regelt, welche Crawler welche Bereiche lesen dürfen", "llms.txt ergänzt sie um Erklärungen zu den freigegebenen Inhalten, ersetzt sie aber nicht"],
            ["sitemap.xml", "Listet die Seiten einer Website für Suchmaschinen auf", "Für KI-Agenten oft zu umfangreich; llms.txt ist eine ausgewählte Übersicht"],
            ["llms.txt", "Kurze Zusammenfassung mit Links zu den wichtigsten Seiten", "Wird bei Bedarf gelesen, wenn ein Agent für einen Nutzer Informationen braucht"],
          ],
        },
        {
          t: "note",
          label: "Wichtig",
          text: "Eine llms.txt sperrt und erlaubt nichts. Welche Crawler Ihre Seiten lesen dürfen, steuern Sie über die robots.txt und den Bot-Schutz Ihres Hosters. Wie das für jeden einzelnen KI-Crawler geht, steht in [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026).",
        },
      ],
    },
    {
      id: "aufbau",
      title: "So ist die Datei nach llmstxt.org aufgebaut",
      answer:
        "Pflicht ist nur eine Überschrift erster Ebene mit dem Namen der Website. Danach sieht der Vorschlag eine Kurzbeschreibung als Zitatblock, etwas freien Text und Abschnitte mit Linklisten zu den wichtigsten Seiten vor.",
      blocks: [
        {
          t: "table",
          caption: "Bestandteile einer llms.txt laut Vorschlag (zweite Fassung)",
          head: ["Teil", "Schreibweise", "Pflicht", "Inhalt"],
          rows: [
            ["Titel", "Eine Raute am Zeilenanfang (#)", "Ja, als einziger Teil", "Name der Website oder des Betriebs"],
            ["Kurzbeschreibung", "Zitatblock, die Zeile beginnt mit >", "Nein", "Ein bis zwei Sätze, worum es geht"],
            ["Freier Text", "Absätze oder Listen, ohne Überschriften", "Nein", "Weitere Erklärungen"],
            ["Linklisten", "Zwei Rauten (##) als Abschnittsüberschrift, darunter Einträge mit Link und optionaler Notiz", "Nein", "Die Seiten, die ein Agent kennen sollte"],
            ["Abschnitt „Optional“", "Überschrift „## Optional“", "Nein", "Nebensächliche Links; seit der zweiten Fassung nur noch eine Gewohnheit ohne technische Bedeutung"],
          ],
        },
        {
          t: "p",
          text: "Zusätzlich schlägt llmstxt.org vor, wichtige Seiten auch als reine Markdown-Fassung mit der Endung „.md“ anzubieten. Die zweite Fassung ergänzt, wie Agenten die Datei finden: Eine Seite verweist mit der Link-Beziehung „describedby“ auf ihre llms.txt, entweder als link-Element im HTML-Kopf oder als Link-Header der HTTP-Antwort.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für eine Website mit zehn oder zwanzig Seiten brauchen Sie keine Markdown-Fassung jeder Seite. Google schreibt zudem, dass für die Google Suche keine Markdown-Versionen nötig sind. Eine einzelne llms.txt im Hauptverzeichnis reicht, wenn Sie überhaupt eine anlegen.",
        },
      ],
    },
    {
      id: "was-anbieter-sagen",
      title: "Was Google, OpenAI, Anthropic und Perplexity öffentlich sagen",
      answer:
        "Google schreibt seit dem 15. Juni 2026 ausdrücklich, dass die Google Suche llms.txt-Dateien ignoriert. OpenAI, Anthropic und Perplexity beschreiben in ihren Dokumenten zu Crawlern und Suche keine Rolle für die Datei; OpenAI und Perplexity verweisen dort nur auf die llms.txt ihrer eigenen Dokumentation. Beschrieben wird stattdessen der Zugriff ihrer Such-Crawler über die robots.txt.",
      blocks: [
        {
          t: "table",
          caption: "Öffentliche Aussagen zu llms.txt, geprüft am 11. Oktober 2026",
          head: ["Anbieter", "Was dokumentiert ist", "Was daraus folgt"],
          rows: [
            ["Google Suche", "Der Leitfaden zu generativen KI-Funktionen (seit 15. Mai 2026) zählt llms.txt zu den Taktiken, die Sie für die Google Suche ignorieren können. Seit 15. Juni 2026 steht dort: Die Suche ignoriert die Dateien, sie schaden und helfen nicht. Für Übersichten mit KI und den KI-Modus sind keine KI-Textdateien nötig.", "Für die Google Suche ohne Wirkung, in beide Richtungen"],
            ["Google Chrome (Lighthouse)", "Seit Version 13.3 im Mai 2026 prüft die Kategorie „Agentic Browsing“ laut Fachmedien, ob eine llms.txt vorhanden ist und Links enthält. Fehlt sie, gilt der Punkt als nicht anwendbar.", "Ein Prüfpunkt für KI-Agenten, kein Signal für die Google Suche"],
            ["OpenAI", "Für die ChatGPT-Suche nennt OpenAI den Zugriff von OAI-SearchBot. In der FAQ für Website-Betreiber kommt llms.txt nicht vor.", "Keine dokumentierte Rolle für die ChatGPT-Suche"],
            ["Anthropic", "Die Hilfeseite zu den Crawlern beschreibt ClaudeBot, Claude-User und Claude-SearchBot und verweist auf die robots.txt. llms.txt wird nicht erwähnt.", "Keine dokumentierte Rolle für die Suche in Claude"],
            ["Perplexity", "Die Crawler-Dokumentation beschreibt PerplexityBot für die Suche und Perplexity-User für Abrufe auf Nutzerwunsch. llms.txt erscheint dort nur als Inhaltsverzeichnis der eigenen Dokumentation.", "Keine dokumentierte Rolle für die Suche in Perplexity"],
          ],
        },
        {
          t: "p",
          text: "Google ergänzt: Die Suchmaschine kann neben HTML auch andere Dateien crawlen und indexieren. Taucht Ihre llms.txt in der Google Suche auf, wird sie deshalb nicht besonders behandelt. Es sei aber völlig in Ordnung, die Datei für andere Dienste zu pflegen, die sie nutzen.",
        },
        {
          t: "p",
          text: "Die Suche ignoriert die Datei, das Prüfwerkzeug Lighthouse fragt nach ihr; auf diesen Unterschied wies Search Engine Journal im Mai 2026 hin. Unsere Lesart: Lighthouse bewertet, wie gut KI-Agenten mit einer Website zurechtkommen, die Suche entscheidet über Rankings. Was für die KI-Funktionen der Google Suche zählt, steht in [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo).",
        },
      ],
    },
    {
      id: "eigene-dateien-der-anbieter",
      title: "Eine eigene llms.txt der Anbieter ist keine Zusage",
      answer:
        "OpenAI und Perplexity veröffentlichen für ihre Entwicklerdokumentation selbst eine llms.txt, Anthropic und Google laut llmstxt.org ebenfalls. Das zeigt, dass die Datei für technische Dokumentationen genutzt wird, nicht, dass die Suchdienste dieser Anbieter die Datei Ihres Betriebs auswerten.",
      blocks: [
        {
          t: "p",
          text: "Ein naheliegender Fehlschluss lautet: Wenn OpenAI und Anthropic selbst eine llms.txt haben, lesen ChatGPT und Claude sie auch. Der erste Teil stimmt. OpenAI verweist auf seiner Crawler-Seite für das Inhaltsverzeichnis seiner Entwicklerdokumentation auf eine llms.txt, Perplexity bietet ebenfalls eine an. llmstxt.org nennt zusätzlich die Dokumentationen von Anthropic und von Googles Gemini-Schnittstelle.",
        },
        {
          t: "p",
          text: "Der zweite Teil ist nicht belegt. Diese Dateien sind Inhaltsverzeichnisse für Entwickler und ihre Programmier-Werkzeuge, die eine Schnittstelle korrekt ansprechen wollen. Genau diesen Einsatz beschreibt die Projektseite als typisches Beispiel. Über die Auswahl von Quellen in einer Suche sagen diese Dateien nichts aus.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine Software-Dokumentation hat oft Hunderte Seiten, die Website eines Handwerksbetriebs oder einer Praxis meist nur wenige, die ein Crawler auch über die normale Navigation findet. Der zusätzliche Nutzen einer Übersicht ist deshalb klein.",
        },
      ],
    },
    {
      id: "was-sie-kann",
      title: "Was die Datei für einen lokalen Betrieb leisten kann und was nicht",
      answer:
        "Eine llms.txt kann einem KI-Agenten, der Ihre Website aufruft, die wichtigsten Fakten und Seiten auf einen Blick zeigen. Sie bringt Sie nicht in KI-Antworten, steuert keinen Crawler und ersetzt weder eine lesbare Website noch ein gepflegtes Unternehmensprofil.",
      blocks: [
        {
          t: "table",
          caption: "Was eine llms.txt kann und was nicht",
          head: ["Kann", "Kann nicht"],
          rows: [
            ["Einem Agenten, der Ihre Website liest, eine kurze Zusammenfassung und die wichtigsten Links anbieten", "Eine Nennung in ChatGPT, Claude, Perplexity oder den Übersichten mit KI bewirken oder garantieren"],
            ["Den Lighthouse-Prüfpunkt zu llms.txt erfüllen", "Das Ranking in der Google Suche beeinflussen"],
            ["Fakten wie Einzugsgebiet, Leistungen und Erreichbarkeit an einer Stelle bündeln", "Crawler zulassen oder sperren; das leistet die robots.txt"],
            ["Auf Seiten hinweisen, die in der Navigation weit hinten stehen, etwa Ablauf und Preise", "Inhalte ersetzen, die auf Ihrer Website fehlen, oder falsche Angaben auf anderen Plattformen korrigieren"],
          ],
        },
        {
          t: "p",
          text: "Ob ein bestimmter KI-Dienst die Datei bei einer Anfrage tatsächlich liest, dokumentiert keiner der genannten Anbieter. Hinweise darauf geben nur Ihre Server-Logs.",
        },
      ],
    },
    {
      id: "aufwand-und-nutzen",
      title: "Aufwand und Nutzen ehrlich abgewogen",
      answer:
        "Unsere Einschätzung: Der Aufwand ist klein, ein Nutzen für KI-Antworten ist nicht belegt. Lohnend ist die Datei erst, wenn Crawler-Zugriff, Website und Profile in Ordnung sind.",
      blocks: [
        {
          t: "table",
          caption: "Wann sich eine llms.txt lohnt (Einschätzung)",
          head: ["Ihre Lage", "Empfehlung"],
          rows: [
            ["Ihr Website-System erzeugt die Datei auf Knopfdruck", "Einschalten, das Ergebnis einmal lesen und Unpassendes entfernen"],
            ["robots.txt, Kernseiten und Profile sind sauber, Sie haben eine Stunde Zeit", "Eine kurze Datei von Hand anlegen und bei Änderungen mitpflegen"],
            ["Crawler-Zugriff ungeklärt, Öffnungszeiten auf Website und Profil widersprechen sich", "Erst das beheben, die llms.txt kann warten"],
            ["Jemand verkauft Ihnen eine llms.txt als Maßnahme für mehr KI-Sichtbarkeit", "Nach Belegen fragen; keiner der großen Anbieter dokumentiert eine solche Wirkung"],
          ],
        },
        {
          t: "p",
          text: "Laut llmstxt.org erzeugen unter anderem Yoast SEO und AIOSEO für WordPress sowie der Baukasten Wix die Datei. Lesen Sie das Ergebnis trotzdem durch: Eine automatisch erzeugte Liste kann jede Seite enthalten, auch Impressum und abgelaufene Aktionen, und ist dann keine ausgewählte Übersicht mehr.",
        },
        {
          t: "note",
          label: "Einschätzung zum Risiko",
          text: "Der größte Nachteil ist eine veraltete Datei. Stehen in der llms.txt andere Öffnungszeiten oder Leistungen als auf der Website, liefern Sie einem Agenten widersprüchliche Angaben. Wer die Datei anlegt, muss sie bei jeder Änderung mitpflegen.",
        },
      ],
    },
    {
      id: "beispiel",
      title: "Ein Beispiel für einen Handwerksbetrieb",
      answer:
        "Für einen kleinen Betrieb reichen nach unserer Einschätzung zehn bis fünfzehn Zeilen: Name, ein Satz zum Angebot, Einzugsgebiet und Erreichbarkeit, dann je ein Abschnitt für Leistungen und Kontakt. Das folgende Beispiel ist erfunden, Name und Adressen sind Platzhalter.",
      blocks: [
        {
          t: "table",
          caption: "Beispiel, Teil 1: die Zeilen ohne Links (erfundene Schreinerei Muster in Rosenheim)",
          head: ["Zeile in der Datei", "Was sie ist"],
          rows: [
            ["# Schreinerei Muster", "Titel, der einzige Pflichtteil"],
            ["> Schreinerei in Rosenheim für Möbel nach Maß, Innenausbau und Reparaturen.", "Kurzbeschreibung als Zitatblock"],
            ["Einzugsgebiet: Stadt und Landkreis Rosenheim. Werkstatt Montag bis Freitag 7 bis 16 Uhr, Beratung nach Vereinbarung.", "Freier Text mit den wichtigsten Fakten"],
            ["## Leistungen", "Erster Abschnitt mit Linkliste"],
            ["## Kontakt und Anfahrt", "Zweiter Abschnitt mit Linkliste"],
            ["## Optional", "Nebensächliche Links"],
          ],
        },
        {
          t: "table",
          caption: "Beispiel, Teil 2: die Einträge der Linklisten",
          head: ["Abschnitt", "Linktext", "Adresse", "Notiz"],
          rows: [
            ["Leistungen", "Möbel nach Maß", "https://www.example.com/moebel-nach-mass", "Einbauschränke, Küchen, Möbel für Dachschrägen"],
            ["Leistungen", "Innenausbau", "https://www.example.com/innenausbau", "Türen, Treppen, Wand- und Deckenverkleidungen"],
            ["Leistungen", "Reparaturen", "https://www.example.com/reparaturen", "Fenster, Türen und Möbel, auch kleine Aufträge"],
            ["Kontakt und Anfahrt", "Kontakt", "https://www.example.com/kontakt", "Adresse, Telefon, Öffnungszeiten, Anfahrt"],
            ["Kontakt und Anfahrt", "Ablauf und Preise", "https://www.example.com/ablauf", "Aufmaß, Angebot, Lieferzeiten, Preisrahmen"],
            ["Optional", "Referenzen", "https://www.example.com/referenzen", "Fotos abgeschlossener Arbeiten"],
          ],
        },
        {
          t: "note",
          label: "So schreiben Sie eine Linkzeile",
          text: "Jeder Eintrag steht in einer eigenen Zeile unter seiner Abschnittsüberschrift: ein Bindestrich und ein Leerzeichen, dann der Linktext in eckigen Klammern, direkt danach ohne Leerzeichen die Adresse in runden Klammern, dann ein Doppelpunkt und die Notiz. Das ist die übliche Markdown-Schreibweise für Links. Fehlt sie, meldet Lighthouse laut Search Engine Journal, die Datei enthalte keine Links.",
        },
        {
          t: "p",
          text: "Werbesprüche, Angaben, die nicht auch auf Ihrer Website stehen, und interne Bereiche wie Kundenportale gehören nicht hinein; die Datei ist für jeden abrufbar. Verwenden Sie dieselben Daten wie auf der Kontaktseite und im [Unternehmensprofil](/blog/google-my-business-optimieren), Zeichen für Zeichen.",
        },
      ],
    },
    {
      id: "anlegen-und-pflegen",
      title: "Datei anlegen, prüfen und pflegen",
      answer:
        "Legen Sie die Datei als einfache Textdatei mit dem Namen llms.txt im Hauptverzeichnis Ihrer Website ab und rufen Sie sie im Browser auf. Danach prüfen Sie in den Server-Logs, ob sie überhaupt abgerufen wird, und passen sie bei jeder Änderung an Leistungen oder Zeiten an.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Inhalt schreiben", text: "Titel, ein Satz zum Angebot, Einzugsgebiet und Erreichbarkeit, dann die fünf bis zehn wichtigsten öffentlichen Seiten mit kurzer Notiz." },
            { title: "Als Textdatei speichern", text: "Dateiname llms.txt, Zeichenkodierung UTF-8 für korrekte Umlaute, abgelegt im Hauptverzeichnis. Bei WordPress oder Wix prüfen Sie zuerst, ob Ihr SEO-Plugin oder der Baukasten das übernimmt." },
            { title: "Im Browser aufrufen", text: "Die Datei muss ohne Anmeldung lesbar sein und darf nicht durch die robots.txt gesperrt werden. Klicken Sie jeden Link einmal an." },
            { title: "Bei Bedarf mit Lighthouse testen", text: "Ab Version 13.3 zeigt die Kategorie „Agentic Browsing“, ob die Datei gefunden wurde und Links enthält. Über Ihre Sichtbarkeit in KI-Antworten sagt das nichts." },
            { title: "Abrufe beobachten", text: "In den Server-Logs oder der Statistik Ihres Hosters sehen Sie, ob und welche Crawler /llms.txt abrufen." },
            { title: "Mitpflegen", text: "Bei jeder Änderung an Leistungen, Öffnungszeiten oder Seitenadressen auch die llms.txt anpassen, am besten zusammen mit dem Unternehmensprofil." },
          ],
        },
        {
          t: "p",
          text: "Unsere Einschätzung: Eine Wirkung auf Nennungen in KI-Antworten lässt sich kaum für sich allein messen, weil sich die Antworten auch ohne Ihr Zutun ändern. Wer trotzdem vergleichen will, stellt vor und nach der Änderung dieselben Fragen und hält die Ergebnisse fest, wie in [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026) beschrieben.",
        },
      ],
    },
    {
      id: "was-mehr-zaehlt",
      title: "Was für KI-Sichtbarkeit mehr zählt",
      answer:
        "Wichtiger als jede llms.txt sind drei Dinge: Such-Crawler wie OAI-SearchBot, Claude-SearchBot, PerplexityBot und Googlebot dürfen Ihre Seiten lesen, die Seiten nennen Leistungen, Ort und Bedingungen als Text, und Ihre Angaben stimmen überall überein.",
      blocks: [
        {
          t: "table",
          caption: "Reihenfolge für lokale Betriebe",
          head: ["Rang", "Maßnahme", "Grundlage", "Weiterlesen"],
          rows: [
            ["1", "Such-Crawler in robots.txt und Bot-Schutz zulassen", "Von OpenAI, Anthropic und Perplexity dokumentiert; Google verlangt für KI-Funktionen eine indexierte Seite mit Snippet", "[KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026)"],
            ["2", "Kernseiten mit einer Antwort im ersten Satz, Ort und Konditionen als Text", "Google rät zu hilfreichen Inhalten statt zu Kniffen für KI", "[KI-Sichtbarkeit prüfen](/blog/ai-visibility-checklist)"],
            ["3", "Gleiche Daten auf Website, im Unternehmensprofil und in Verzeichnissen", "Einschätzung: Widersprüche können in Antworten landen", "[NAP-Konsistenz](/blog/nap-konsistenz-local-seo)"],
            ["4", "Sichtbarkeit regelmäßig mit festen Fragen prüfen", "Methode, keine Kennzahl der Anbieter", "[ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026#sichtbarkeit-pruefen)"],
            ["5", "llms.txt anlegen, wenn Zeit bleibt", "Freiwilliger Vorschlag ohne dokumentierte Wirkung", "Dieser Artikel"],
          ],
        },
        {
          t: "p",
          text: "Wie ChatGPT Quellen für lokale Fragen auswählt und verlinkt, beschreibt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen). Perplexity und Claude behandelt [Perplexity und Claude für lokale Sichtbarkeit](/blog/perplexity-claude-lokale-sichtbarkeit). Was hinter dem Begriff GEO steckt und was davon belegt ist, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
        {
          t: "p",
          text: "Auch localdominate.org veröffentlicht unter /llms.txt eine solche Datei. Ob und wie KI-Dienste sie nutzen, lässt sich daraus nicht ablesen, und wir leiten daraus keine Wirkung ab.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich eine llms.txt, um in ChatGPT genannt zu werden?",
      a: "Nein. OpenAI nennt für die ChatGPT-Suche den Zugriff des Crawlers OAI-SearchBot, eine llms.txt kommt in den Hinweisen für Website-Betreiber nicht vor. Websites, die OAI-SearchBot aussperren, zeigt die ChatGPT-Suche laut OpenAI nicht in ihren Antworten, höchstens noch als Navigationslink.",
    },
    {
      q: "Liest ClaudeBot meine llms.txt?",
      a: "Anthropic beschreibt das nicht. ClaudeBot sammelt laut Anthropic Inhalte, die zum Training beitragen können; für die Qualität der Suchergebnisse in Claude nennt Anthropic den Claude-SearchBot. Ob einer dieser Crawler die Datei abruft, sehen Sie nur in Ihren Server-Logs.",
    },
    {
      q: "Schadet eine llms.txt meinem Google-Ranking?",
      a: "Nein. Google schreibt, dass die Google Suche llms.txt-Dateien ignoriert und die Datei der Sichtbarkeit weder schadet noch hilft. Es sei in Ordnung, sie für andere Dienste zu pflegen.",
    },
    {
      q: "Kann ich mit einer llms.txt KI-Crawler sperren?",
      a: "Nein. Die Datei ist eine Übersicht, keine Zugriffsregel. Crawler steuern Sie über die robots.txt, bei OpenAI und Anthropic getrennt für Suche und Training. Abrufe, die ein Nutzer direkt auslöst, folgen der robots.txt laut OpenAI und Perplexity nicht immer.",
    },
    {
      q: "Warum prüft Lighthouse die llms.txt, wenn die Google Suche sie ignoriert?",
      a: "Lighthouse bewertet seit Version 13.3 auch, wie gut KI-Agenten mit einer Website zurechtkommen; über Rankings entscheidet die Suche. Fehlt die Datei, gilt der Lighthouse-Punkt laut Fachberichten als nicht anwendbar, nicht als Fehler. Für die Google Suche bleibt sie ohne Bedeutung.",
    },
  ],
  sources: [
    { title: "The /llms.txt file (Jeremy Howard, 3. September 2024, zweite Fassung)", publisher: "llmstxt.org", url: "https://llmstxt.org/" },
    { title: "Changes: v2 (August 2026)", publisher: "llmstxt.org", url: "https://llmstxt.org/changes.html" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "KI-Funktionen und deine Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Updates zur Google-Suchdokumentation (15. Mai und 15. Juni 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "llms.txt der OpenAI-Entwicklerdokumentation", publisher: "OpenAI Developers", url: "https://developers.openai.com/llms.txt" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Claude Help Center", url: "https://support.claude.com/en/articles/8896518" },
    { title: "Perplexity Crawlers", publisher: "Perplexity", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md" },
    { title: "llms.txt der Perplexity-Dokumentation", publisher: "Perplexity", url: "https://docs.perplexity.ai/llms.txt" },
    { title: "Google’s llms.txt Guidance Depends On Which Product You Ask (20. Mai 2026)", publisher: "Search Engine Journal", url: "https://searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/" },
    { title: "How to Interpret the New Agentic Browsing Audit in Lighthouse (25. Juni 2026)", publisher: "Locomotive Agency", url: "https://locomotive.agency/blog/lighthouse-agentic-browsing-audit/" },
    { title: "Lighthouse Fails Your Llms.txt Without Markdown Links (3. Juli 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/lighthouse-fails-your-llms-txt-without-markdown-links/577590/" },
  ],
  related: [
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "ai-crawler-steuern-gptbot-claudebot-2026", title: "KI-Crawler steuern: GPTBot, ClaudeBot und Co." },
    { slug: "ai-visibility-checklist", title: "KI-Sichtbarkeit prüfen: die Checkliste" },
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
  ],
  cta: {
    title: "Ist Ihre Website für KI-Suchen lesbar?",
    text: "Wir prüfen, ob die Such-Crawler von Google, OpenAI, Anthropic und Perplexity Ihre Seiten lesen dürfen, ob Website und Unternehmensprofil dieselben Angaben machen und ob eine vorhandene llms.txt dazu passt. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
