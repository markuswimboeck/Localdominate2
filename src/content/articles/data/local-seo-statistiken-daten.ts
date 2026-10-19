import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-statistiken-daten",
  lang: "de",
  seoTitle: "Local-SEO-Zahlen: was belegt ist und was Sie selbst messen",
  seoDescription:
    "Welche Local-SEO-Zahlen eine echte Quelle haben, warum viele Statistiken nicht taugen und welche Daten Sie kostenlos selbst erheben, mit Monatsvorlage.",
  h1: "Local-SEO-Zahlen: was belegt ist und wie Sie Ihre eigenen Daten erheben",
  kicker: "Daten",
  lead:
    "Für Inhaber lokaler Betriebe, die Zahlen zur lokalen Suche lesen, in Angeboten von Agenturen sehen oder selbst verwenden wollen. Sie erfahren, welche wenigen Zahlen eine prüfbare Quelle haben, woran Sie unzuverlässige Statistiken erkennen und welche Daten zu Ihrem eigenen Betrieb Sie jeden Monat kostenlos erheben können.",
  answer:
    "Belastbare Zahlen zur lokalen Suche sind selten. Amtliche Statistiken zeigen, wie verbreitet das Internet ist, Verbraucherumfragen wie die von BrightLocal beschreiben vor allem die USA. Viele kursierende Prozentwerte haben keine Quelle. Aussagekräftiger für Ihren Betrieb sind eigene Daten: Leistungsdaten im Unternehmensprofil, die Search Console mit dem Bericht zu generativen KI-Funktionen und Ihre Web-Analyse.",
  takeaways: [
    "Laut Eurostat nutzten 2025 in der EU 94 % der Menschen von 16 bis 74 Jahren das Internet in den letzten drei Monaten. Das ist eine amtliche Zahl mit Jahr, Region und Altersgruppe.",
    "Die bekannte Verbraucherumfrage von BrightLocal befragte 2026 laut eigener Angabe 1.002 Erwachsene in den USA. Für Deutschland, Österreich und die Schweiz ist sie höchstens ein Hinweis.",
    "Wir haben keine aktuelle Angabe von Google zum Anteil „lokaler Suchen“ an allen Suchen gefunden. Die einzige, die wir gefunden haben, stammt von 2016 und betraf nur mobile Suchen: Laut Google bezog sich damals fast ein Drittel davon auf einen Ort. Zahlen wie „46 % aller Suchen sind lokal“ sollten Sie ohne Originalquelle nicht verwenden.",
    "Eine Zahl ohne Herausgeber, Jahr, Land und Stichprobe ist keine Statistik, sondern eine Behauptung.",
    "Ihre eigenen Daten aus Unternehmensprofil, Search Console und Web-Analyse sagen mehr über Ihren Betrieb als jede Branchenstatistik. Eine Tabelle mit sechs bis acht Werten pro Monat reicht für den Anfang.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-13",
  readingTime: 12,
  sections: [
    {
      id: "warum-diese-seite",
      title: "Warum diese Seite neu geschrieben wurde",
      answer:
        "Die frühere Fassung dieser Seite listete viele Prozentwerte ohne prüfbare Quelle. Wir haben sie entfernt. Diese Fassung nennt nur Zahlen, deren Herkunft wir selbst geöffnet und geprüft haben, und zeigt, wie Sie Ihre eigenen Daten erheben.",
      blocks: [
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Version dieses Artikels enthielt unter dem Titel „88+ Datenpunkte“ zahlreiche Statistiken, etwa zum Anteil lokaler Suchen, zur Wirkung von Fotos und Beiträgen oder zur Gewichtung von Rankingfaktoren. Für die meisten dieser Zahlen gab es keine nachvollziehbare Originalquelle, einige waren veraltet oder stammten aus Studien über den US-Markt. Wir haben sie vollständig entfernt und ersetzen sie hier nicht durch neue Schätzungen.",
        },
        {
          t: "p",
          text: "Zuerst kommen die wenigen Zahlen mit echter Quelle, dann die Frage, woran Sie unzuverlässige Statistiken erkennen, und zum Schluss, was Sie zu Ihrem eigenen Betrieb kostenlos messen können. Diese eigenen Zahlen sind für Entscheidungen fast immer nützlicher als Durchschnittswerte über ganze Länder.",
        },
      ],
    },
    {
      id: "amtliche-statistik",
      title: "Amtliche Statistik: wie verbreitet das Internet ist",
      answer:
        "Laut Eurostat nutzten 2025 in der EU 94 % der Menschen von 16 bis 74 Jahren das Internet in den letzten drei Monaten, 72 % suchten online nach Informationen zu Waren und Dienstleistungen. Statistik Austria meldet für 2025 eine Internetnutzung von 75 % bei den 65- bis 84-Jährigen in Österreich.",
      blocks: [
        {
          t: "p",
          text: "Amtliche Statistiken beruhen auf großen Befragungen nach einheitlicher Methode. Sie sagen nichts über Google Maps oder Rankings, aber sie zeigen, wie viele Ihrer möglichen Kunden überhaupt online sind.",
        },
        {
          t: "table",
          caption: "Amtliche Zahlen mit Herausgeber, Jahr, Region und Gruppe",
          head: ["Aussage", "Wert", "Region und Jahr", "Gruppe", "Quelle"],
          rows: [
            ["Internet in den letzten drei Monaten genutzt", "94 %", "EU, 2025", "16 bis 74 Jahre", "Eurostat, Erhebung zur IKT-Nutzung, Artikel vom Februar 2026"],
            ["Ganzes Jahr ohne Internetnutzung", "4 %", "EU, 2025", "16 bis 74 Jahre", "Eurostat, wie oben"],
            ["Online nach Informationen zu Waren und Dienstleistungen gesucht", "72 %", "EU, 2025", "16 bis 74 Jahre", "Eurostat, wie oben"],
            ["Internet in den letzten drei Monaten genutzt", "75 % (2023: 69 %)", "Österreich, 2025", "65 bis 84 Jahre, 1.617 Befragte dieser Gruppe", "Statistik Austria, Pressemitteilung vom 23. Oktober 2025"],
          ],
        },
        {
          t: "p",
          text: "Für Betriebe mit vielen älteren Kunden, etwa Apotheken, Optiker oder Praxen, ist die österreichische Zahl besonders aufschlussreich: Auch in dieser Altersgruppe ist die Mehrheit online. Was das für Ihre Region bedeutet, beschreibt [Local SEO in Österreich 2026](/blog/local-seo-trends-oesterreich).",
        },
        {
          t: "note",
          label: "Grenzen",
          text: "Diese Zahlen messen Internetnutzung, nicht die Nutzung von Google Maps oder die Suche nach Betrieben in der Nähe. Wer daraus „so viele Menschen suchen lokal“ macht, überdehnt sie. Für Deutschland und die Schweiz veröffentlichen das Statistische Bundesamt und das Bundesamt für Statistik eigene Zahlen aus derselben Art von Erhebung. Wir haben sie für diese Fassung nicht im Original geprüft und nennen sie deshalb nicht.",
        },
      ],
    },
    {
      id: "verbraucherumfragen",
      title: "Verbraucherumfragen: BrightLocal 2026 richtig lesen",
      answer:
        "Die meistzitierte Umfrage zu Bewertungen ist der Local Consumer Review Survey von BrightLocal. Die Ausgabe 2026 befragte laut BrightLocal 1.002 Erwachsene in den USA über SurveyMonkey. BrightLocal verkauft selbst Software für lokales Marketing. Die Ergebnisse sind ein Hinweis auf Verhalten, keine Zahlen für den deutschsprachigen Raum.",
      blocks: [
        {
          t: "table",
          caption: "Ausgewählte Ergebnisse des BrightLocal Local Consumer Review Survey 2026 (USA, 1.002 Befragte, veröffentlicht 11. Februar 2026)",
          head: ["Aussage laut BrightLocal", "Wert", "Was Sie daraus ableiten können"],
          rows: [
            ["Befragte, die Online-Bewertungen lesen", "97 %", "Bewertungen sind für fast alle Befragten Teil der Entscheidung, zumindest in den USA"],
            ["Anteil von Google als Quelle für Bewertungen", "71 % (2025: 83 %)", "Google bleibt laut BrightLocal mit Abstand die meistgenutzte Quelle, verliert aber Anteile, während etwa Videoplattformen zulegen"],
            ["Befragte, die Bewertungen der letzten drei Monate suchen", "74 %", "Laufende Bewertungen zählen mehr als eine große, alte Zahl"],
            ["Nutzung von ChatGPT und anderer generativer KI für lokale Empfehlungen", "45 % (Vorjahr: 6 %)", "Ein starker Sprung in einem Jahr. BrightLocal nennt die genaue Fragestellung auf der Ergebnisseite nicht, zitieren Sie die Zahl deshalb vorsichtig"],
          ],
        },
        {
          t: "p",
          text: "So verwendet ist die Umfrage nützlich: als Richtung, nicht als Messwert für Ihren Markt. Dass aktuelle Bewertungen wichtig sind, deckt sich mit dem, was Sie in Ihrem eigenen Profil beobachten können. Wie Sie fair um Bewertungen bitten, ohne gegen Googles Richtlinien zu verstoßen, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ob sich Verbraucher in Deutschland, Österreich und der Schweiz ähnlich verhalten, lässt sich aus einer US-Umfrage nicht ableiten. Eine gleichwertige, öffentlich dokumentierte Erhebung für den deutschsprachigen Raum haben wir nicht gefunden. Wer Ihnen eine solche Zahl nennt, sollte die Originalquelle mitliefern können.",
        },
      ],
    },
    {
      id: "was-google-angibt",
      title: "Was Google selbst angibt und was nicht",
      answer:
        "Eine aktuelle Angabe von Google zum Anteil lokaler Suchen an allen Suchen und eine Gewichtung von Rankingfaktoren haben wir nicht gefunden. Google dokumentiert aber genau, was die Leistungsdaten im Unternehmensprofil und die Berichte der Search Console zählen. Diese Definitionen sind die verlässlichste Grundlage für eigene Zahlen.",
      blocks: [
        {
          t: "p",
          text: "Viele Statistiken werden Google zugeschrieben, ohne dass es eine Google-Seite dazu gibt. Typisch sind Sätze wie „fast die Hälfte aller Google-Suchen hat lokale Absicht“. Eine aktuelle Veröffentlichung von Google mit dieser Zahl haben wir nicht gefunden. Was Google zum lokalen Ranking tatsächlich schreibt und was nur vermutet wird, ordnet [Google-Maps-Ranking-Faktoren](/blog/google-maps-seo-ranking-faktoren) ein.",
        },
        {
          t: "p",
          text: "Genau beschreibt Google dagegen die eigenen Messwerte, etwa was im Unternehmensprofil als „Aufruf“ zählt. Diese Definitionen brauchen Sie, um Ihre eigenen Zahlen richtig zu lesen. Mehr dazu im Abschnitt zu den [Leistungsdaten](/blog/local-seo-statistiken-daten#unternehmensprofil).",
        },
      ],
    },
    {
      id: "warum-unzuverlaessig",
      title: "Warum die meisten Local-SEO-Statistiken nicht taugen",
      answer:
        "Die meisten Listen mit Local-SEO-Statistiken haben eines von vier Problemen: keine Originalquelle, veraltete Daten, Werte nur aus den USA oder eine Studie eines Anbieters, der vom Ergebnis profitiert. Oft werden Zahlen von Liste zu Liste kopiert, bis niemand mehr weiß, woher sie stammen.",
      blocks: [
        {
          t: "table",
          caption: "Typische Schwächen kursierender Statistiken",
          head: ["Problem", "Woran Sie es erkennen", "Folge"],
          rows: [
            ["Keine Originalquelle", "Link führt zu einer anderen Statistikliste oder fehlt ganz", "Die Zahl ist nicht prüfbar und oft erfunden oder verfälscht"],
            ["Veraltet", "Erhebungsjahr fehlt oder liegt viele Jahre zurück, oft vor der Verbreitung von KI-Antworten", "Das Suchverhalten hat sich seither geändert"],
            ["Nur USA oder Großbritannien", "Stichprobe in der Methodik genannt, aber im Zitat weggelassen", "Übertragung auf DACH ist eine Annahme"],
            ["Studie eines Anbieters", "Herausgeber verkauft Software oder Dienstleistungen zum Thema", "Fragen und Auswahl können das Ergebnis begünstigen"],
            ["Relative Werte ohne Basis", "Ein Vielfaches an Anrufen, ohne Ausgangswert und Vergleichsgruppe", "Klingt groß, sagt aber nichts über Ihren Betrieb"],
            ["Korrelation als Ursache", "„Profile mit vielen Fotos bekommen mehr Anrufe“", "Große, aktive Betriebe haben oft beides, das eine verursacht nicht das andere"],
          ],
        },
        {
          t: "p",
          text: "Studien von Softwareanbietern sind nicht automatisch falsch. BrightLocal legt Stichprobe, Land und Panel offen, das ist mehr als viele andere tun. Umfragen unter SEO-Fachleuten, etwa zu Rankingfaktoren, geben aber Meinungen wieder, keine gemessenen Wirkungen. Wie Sie fremde Erfolgsberichte prüfen, beschreibt [Google-Maps-Ranking-Fallstudien](/blog/google-maps-ranking-case-studies#fremde-fallstudie-pruefen).",
        },
      ],
    },
    {
      id: "zahl-pruefen",
      title: "Eine Statistik in fünf Schritten prüfen",
      answer:
        "Verfolgen Sie jede Zahl bis zur Originalquelle und notieren Sie Herausgeber, Datum, Land, Stichprobe und genaue Fragestellung. Fehlt eines davon oder findet sich die Zahl in der Quelle nicht, verwenden Sie sie nicht. Das dauert pro Zahl meist nur wenige Minuten.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Originalquelle suchen", text: "Folgen Sie dem Link bis zur Seite oder zum Bericht des Herausgebers. Eine Statistikliste oder ein Blogartikel ist keine Originalquelle." },
            { title: "Zahl in der Quelle finden", text: "Suchen Sie den genauen Wert im Original. Oft steht dort etwas anderes, etwa ein anderer Bezug, eine andere Gruppe oder ein anderes Jahr." },
            { title: "Land, Jahr und Stichprobe notieren", text: "Wer wurde wann wo befragt, und wie viele? „1.002 Erwachsene in den USA, 2026“ ist eine prüfbare Angabe, „Studien zeigen“ nicht." },
            { title: "Herausgeber einordnen", text: "Amtliche Statistik, Plattform selbst, Hochschule oder Anbieter mit eigenem Produkt? Bei Anbietern zusätzlich fragen, ob das Ergebnis ihr Produkt nahelegt." },
            { title: "Richtig zitieren", text: "Zahl immer mit Herausgeber, Land und Jahr nennen. Lässt sich das nicht vollständig angeben, beschreiben Sie lieber die Methode als eine Zahl." },
          ],
        },
        {
          t: "note",
          label: "Praxistipp",
          text: "Wenn Ihnen jemand eine Zahl wie „die ersten drei Einträge bekommen drei Viertel aller Klicks“ vorlegt, wie sie auch in der früheren Fassung dieser Seite ohne Quelle stand, fragen Sie nach Quelle, Land und Jahr. Seriöse Anbieter können das beantworten.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Eigene Daten 1: Leistungsdaten im Unternehmensprofil",
      answer:
        "Die Leistungsdaten im Google-Unternehmensprofil zeigen kostenlos Aufrufe, Suchanfragen, Anrufe, Routenanfragen, Website-Klicks und je nach Branche Buchungen oder Klicks auf die Speisekarte. Sie stehen laut Google nur für bestätigte Profile zur Verfügung.",
      blocks: [
        {
          t: "table",
          caption: "Wichtige Werte im Leistungsbericht laut Google-Hilfe",
          head: ["Wert", "Was Google zählt", "Worauf Sie achten"],
          rows: [
            ["Aufrufe", "Nutzer, die Ihr Profil in Suche und Maps angesehen haben, je Nutzer höchstens einmal pro Tag", "Zeigt Reichweite, nicht Interesse"],
            ["Suchanfragen", "Suchbegriffe, bei denen Ihr Profil angezeigt wurde; Aktualisierung zu Monatsbeginn", "Zeigt, ob Leistungsbegriffe oder nur Ihr Name gesucht werden"],
            ["Anrufe", "Klicks auf die Anrufschaltfläche", "Ein Klick ist noch kein angenommenes Gespräch"],
            ["Wegbeschreibungen", "Routenanfragen; wiederholte Tipps und Spam werden laut Google herausgerechnet", "Wichtig für Ladengeschäfte und Gastronomie"],
            ["Website-Klicks", "Klicks auf den Link zu Ihrer Website", "Mit den Besuchen in Ihrer Web-Analyse vergleichen"],
            ["Buchungen, Speisekarte, Angebote", "Nur wenn für Ihren Betrieb relevant und eingerichtet", "Fehlt der Wert, fehlt oft die Funktion"],
          ],
        },
        {
          t: "p",
          text: "Laut Google kann es nach der monatlichen Aktualisierung bis zu fünf Tage dauern, bis die Suchanfragen erscheinen. Lesen Sie die Werte deshalb einmal im Monat ab, nicht täglich. Wie Sie die Werte mit Maßnahmen im Profil verbinden, steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "search-console",
      title: "Eigene Daten 2: Search Console und der Bericht zu generativen KI-Funktionen",
      answer:
        "Die Search Console zeigt kostenlos Klicks, Impressionen, Klickrate und durchschnittliche Position Ihrer Website in der Google Suche. Seit dem 31. August 2026 gibt es laut Google für alle Websites weltweit zusätzlich einen Bericht mit den Impressionen in Übersichten mit KI und im KI-Modus.",
      blocks: [
        {
          t: "p",
          text: "Der normale Leistungsbericht zeigt standardmäßig die letzten drei Monate. Die neuesten Daten sind laut Google vorläufig und können sich noch ändern. Filtern Sie nach Seiten und Suchanfragen, um zu sehen, ob Ihre Leistungsseiten für Begriffe mit Ortsbezug angezeigt werden.",
        },
        {
          t: "p",
          text: "Der **Leistungsbericht zu generativen KI-Funktionen** zählt, wie oft Links zu Ihrer Website in Übersichten mit KI und im KI-Modus angezeigt wurden. Sie können nach Seiten, Ländern, Datum und Gerät auswerten. Klicks und Suchanfragen nennt die Hilfeseite für diesen Bericht nicht. Bei zu wenigen Impressionen erscheint der Bericht laut Google in der Regel nicht, ebenso wenn Ihre Website von diesen Funktionen ausgeschlossen ist. Die Einzelheiten stehen in [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026#search-console).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für viele kleine Betriebe werden die Impressionen in KI-Funktionen anfangs gering sein oder der Bericht fehlt ganz. Das ist kein Fehler, sondern eine Frage der Menge. Vergleichen Sie über mehrere Monate statt einzelne Werte zu bewerten.",
        },
      ],
    },
    {
      id: "web-analyse",
      title: "Eigene Daten 3: Web-Analyse und Anfragen",
      answer:
        "Ihre Web-Analyse zeigt, wie viele Besucher aus der Google Suche, aus dem Unternehmensprofil und aus KI-Diensten kommen. Besuche aus ChatGPT erkennen Sie laut OpenAI am Parameter utm_source=chatgpt.com. Am Ende zählen aber Anfragen, Anrufe und Buchungen, die Sie im Betrieb selbst festhalten.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Zugriffsquellen** in Google Analytics oder einem anderen Werkzeug monatlich ablesen: organische Suche, Verweise und direkte Zugriffe.",
            "**ChatGPT** hängt laut OpenAI an Links in Suchantworten automatisch utm_source=chatgpt.com an. So sehen Sie diese Besuche getrennt. Voraussetzung ist laut OpenAI, dass Sie OAI-SearchBot den Zugriff erlauben.",
            "**Website-Link im Profil** mit eigenen UTM-Parametern versehen, damit Besuche aus dem Unternehmensprofil nicht in der organischen Suche verschwinden. Das ist eine verbreitete Praxis, keine Vorgabe von Google.",
            "**Anfragen im Betrieb** zählen: Kontaktformulare, Anrufe, Terminbuchungen. Fragen Sie neue Kunden kurz, wie sie Sie gefunden haben.",
          ],
        },
        {
          t: "p",
          text: "Klären Sie vor dem Einsatz einer Web-Analyse mit Ihrem Datenschutzberater, ob und wie Sie eine Einwilligung einholen müssen. Ein vollständiges System mit Kennzahlen für KI-Antworten beschreibt [Sichtbarkeit in KI-Antworten messen](/blog/ai-visibility-index-local-seo-metrik).",
        },
      ],
    },
    {
      id: "monatstabelle",
      title: "Die einfache Monatstabelle",
      answer:
        "Tragen Sie einmal im Monat sechs bis acht Werte in eine Tabelle ein, immer am gleichen Tag und für denselben Zeitraum. Notieren Sie daneben, was Sie in diesem Monat geändert haben. Nach einigen Monaten sehen Sie Ihre eigene Entwicklung, ohne fremde Durchschnittswerte.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage für die monatliche Erhebung (Spalten für Ihre Werte frei lassen)",
          head: ["Wert", "Woher", "Monat 1", "Monat 2", "Monat 3"],
          rows: [
            ["Profilaufrufe", "Unternehmensprofil, Leistung", "", "", ""],
            ["Anrufe, Routen, Website-Klicks", "Unternehmensprofil, Leistung", "", "", ""],
            ["Klicks und Impressionen aus der Suche", "Search Console, Leistungsbericht", "", "", ""],
            ["Impressionen in Übersichten mit KI und KI-Modus", "Search Console, Bericht zu generativen KI-Funktionen", "", "", ""],
            ["Besuche aus Profil, Suche und ChatGPT", "Web-Analyse", "", "", ""],
            ["Neue Bewertungen und Durchschnitt", "Unternehmensprofil", "", "", ""],
            ["Anfragen und Buchungen", "Eigene Strichliste oder Buchungssystem", "", "", ""],
            ["Was wurde geändert?", "Eigene Notiz", "", "", ""],
          ],
        },
        {
          t: "p",
          text: "Wer zusätzlich Positionen in Google Maps verfolgen will, findet die Methode in [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker). Die passende Routine für jeden Monat steht in [Local SEO jeden Monat](/blog/local-seo-monthly-checklist).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Google-Suchen sind lokal?",
      a: "Eine aktuelle, von Google veröffentlichte Zahl dafür haben wir nicht gefunden. Die einzige Angabe von Google, die wir kennen, stammt von 2016 und betraf mobile Suchen. Werte wie „46 %“ kursieren seit Jahren ohne nachvollziehbare Originalquelle. Verwenden Sie stattdessen Ihre eigenen Suchanfragen im Unternehmensprofil und in der Search Console.",
    },
    {
      q: "Kann ich die BrightLocal-Zahlen für meinen Betrieb in Deutschland verwenden?",
      a: "Nur als Hinweis auf eine Richtung. Die Ausgabe 2026 beruht laut BrightLocal auf 1.002 Befragten in den USA, und BrightLocal verkauft selbst Software für lokales Marketing. Wenn Sie die Zahlen zitieren, nennen Sie Land, Jahr und Stichprobe dazu.",
    },
    {
      q: "Welche Zahlen kann ich kostenlos selbst messen?",
      a: "Leistungsdaten im Google-Unternehmensprofil, Klicks und Impressionen in der Search Console, seit 31. August 2026 auch Impressionen in Übersichten mit KI und im KI-Modus, sowie Besucher und Quellen in Ihrer Web-Analyse. Dazu kommen Anfragen und Anrufe, die Sie im Betrieb selbst zählen.",
    },
    {
      q: "Warum fehlt bei mir der Bericht zu generativen KI-Funktionen?",
      a: "Laut Google erscheint der Bericht in der Regel nicht, wenn Ihre Website zu wenige Impressionen in diesen Funktionen hatte oder davon ausgeschlossen ist. Bei kleinen Websites ist das häufig. Prüfen Sie den Bericht nach einigen Monaten erneut.",
    },
    {
      q: "Was ist mit den Zahlen aus der früheren Fassung dieser Seite?",
      a: "Wir haben sie entfernt, weil für die meisten keine nachvollziehbare Originalquelle vorlag. Bitte verwenden Sie sie nicht weiter. Wenn Sie eine davon zitiert haben, ersetzen Sie sie durch eine Zahl mit Quelle oder durch Ihre eigenen Daten.",
    },
  ],
  sources: [
    { title: "Digital economy and society statistics, households and individuals (Stand Februar 2026, Daten 2025)", publisher: "Eurostat, Statistics Explained", url: "https://ec.europa.eu/eurostat/statistics-explained/SEPDF/cache/33472.pdf" },
    { title: "Internetnutzung der Altersgruppe 65+ steigt stark (Pressemitteilung vom 23. Oktober 2025)", publisher: "Statistik Austria", url: "https://www.statistik.at/fileadmin/announcement/2025/10/20251023IKTHaushalte2025.pdf" },
    { title: "Local Consumer Review Survey 2026 (veröffentlicht 11. Februar 2026)", publisher: "BrightLocal", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "4 things small businesses should know", publisher: "Google Blog (2016)", url: "https://blog.google/outreach-initiatives/small-business/4-things-small-businesses-should-know" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
  ],
  related: [
    { slug: "ai-zitat-monitoring-local-seo-2026", title: "KI-Zitate überwachen" },
    { slug: "google-maps-seo-ranking-faktoren", title: "Google-Maps-Ranking-Faktoren: was belegt ist" },
    { slug: "ai-visibility-index-local-seo-metrik", title: "Sichtbarkeit in KI-Antworten messen" },
    { slug: "local-seo-monthly-checklist", title: "Local SEO jeden Monat" },
  ],
  cta: {
    title: "Was zeigen die Daten Ihres Betriebs?",
    text: "Wir prüfen Ihr Unternehmensprofil, Ihre Website und Ihre Sichtbarkeit in der Suche und in KI-Antworten. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten, und einen Hinweis, welche Werte Sie monatlich festhalten sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
