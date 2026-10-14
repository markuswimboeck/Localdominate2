import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-tracking-kpis",
  lang: "de",
  seoTitle: "Local SEO KPIs: was Sie messen und woher die Zahl kommt",
  seoDescription:
    "Welche Local-SEO-KPIs zählen, aus welcher Quelle sie stammen und wie Sie sie lesen: Unternehmensprofil, Search Console mit KI-Bericht, GA4 und Anrufe.",
  h1: "Local SEO Tracking: die richtigen KPIs, ihre Quellen und wie Sie sie lesen",
  kicker: "Messen",
  lead:
    "Für Inhaber lokaler Betriebe und Agenturen, die ihre Messung einmal sauber aufsetzen wollen. Sie erfahren, welche Kennzahlen eine Entscheidung stützen, aus welchem Werkzeug jede Zahl kommt, wie Sie Google Analytics 4 und den Profil-Link einrichten und wo die Grenzen jeder Quelle liegen.",
  answer:
    "Für Local SEO reichen wenige Kennzahlen entlang einer Kette: Sichtbarkeit, Handlung, Anfrage, Auftrag. Sichtbarkeit und Handlungen im Profil liefern die Leistungsdaten des Unternehmensprofils, die Website-Seite die Search Console mit dem Bericht zu generativen KI-Funktionen, Anfragen die Schlüsselereignisse in GA4. Aufträge zählen Sie selbst. Jede Quelle misst etwas anderes, deshalb werden die Werte nie addiert.",
  takeaways: [
    "Ordnen Sie jede Kennzahl einer Stufe zu: Sichtbarkeit, Handlung, Anfrage oder Auftrag. Eine Zahl ohne Entscheidung, die sie stützt, gehört nicht in die Messung.",
    "Die Leistungsdaten im Unternehmensprofil zählen Klicks auf die Anruftaste und enthalten laut Google auch Werte aus Google Ads.",
    "Die Search Console zeigt Klicks und Impressionen der Website. Der Bericht zu generativen KI-Funktionen ist seit 31. August 2026 für alle Websites verfügbar und zeigt nur Impressionen.",
    "In GA4 markieren Sie Anfragen als Schlüsselereignisse, bis zu 30 in Standard-Properties. Das gilt nur für künftige Daten, nicht rückwirkend.",
    "Die Telefonnummer im Profil muss direkt zu Ihrem Betrieb führen. Getrennte Nummern für Website oder Anzeigen sind eine Ergänzung, kein Ersatz.",
  ],
  publishedAt: "2026-03-30",
  updatedAt: "2026-10-13",
  readingTime: 11,
  sections: [
    {
      id: "kpi-kette",
      title: "Welche KPIs zählen: die Kette von der Suche zum Auftrag",
      answer:
        "Gute Local-SEO-KPIs bilden den Weg eines Kunden ab: Er sieht Ihr Profil oder Ihre Website, handelt (Anruf, Route, Klick), stellt eine Anfrage und wird Kunde. Für jede Stufe gibt es eine Hauptquelle. Unsere Einschätzung: Sichtbarkeit allein ist kein Erfolg, sie erklärt nur, woher Anfragen kommen könnten.",
      blocks: [
        {
          t: "table",
          caption: "Kennzahlen nach Stufe und Quelle",
          head: ["Stufe", "Kennzahl", "Quelle", "Frage, die sie beantwortet"],
          rows: [
            ["Sichtbarkeit", "Aufrufe des Profils", "Unternehmensprofil, Leistung", "Sehen Menschen mein Profil?"],
            ["Sichtbarkeit", "Impressionen und Klicks ohne Markensuchen", "Search Console, Leistung", "Findet man meine Website über Leistungsbegriffe?"],
            ["Sichtbarkeit", "Impressionen in KI-Funktionen", "Search Console, generative KI-Funktionen", "Wird meine Website in Übersichten mit KI verlinkt?"],
            ["Sichtbarkeit", "Positionen im Einzugsgebiet", "Eigene Rastermessung", "Wo stehe ich in Google Maps, je nach Ort des Suchenden?"],
            ["Handlung", "Anrufe, Wegbeschreibungen, Websiteklicks", "Unternehmensprofil, Leistung", "Handeln Menschen nach dem Ansehen?"],
            ["Anfrage", "Formulare, Telefonklicks, Buchungen auf der Website", "GA4, Schlüsselereignisse", "Wird aus dem Besuch eine Anfrage?"],
            ["Anfrage", "Angenommene und verpasste Anrufe", "Telefonanlage", "Erreichen Anrufer uns tatsächlich?"],
            ["Auftrag", "Neue Kunden mit Quelle Google", "Eigener Eingang, Anmeldebogen", "Bringt Google Umsatz?"],
          ],
        },
        {
          t: "p",
          text: "Nicht jede Zeile passt zu jedem Betrieb. Ein Café ohne Terminbuchung braucht keine Buchungszahl, ein Notdienst ohne Laufkundschaft kaum Wegbeschreibungen. Streichen Sie, was keine Entscheidung stützt. Wie Sie aus den gewählten Zahlen einen Monatsbericht auf einer Seite machen, zeigt [Local-SEO-Reporting](/blog/local-seo-reporting-template). Dieser Artikel beschreibt die Stufe davor: welche Zahl Sie wie erheben.",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Die wichtigste Kennzahl ist fast immer die letzte: neue Kunden, die Google als Quelle nennen. Sie ist ungenau, weil Kunden zwischen Profil, Suche und Anzeige nicht unterscheiden. Sie ist aber die einzige, die einen echten Auftrag mit Google verbindet.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "KPIs aus dem Unternehmensprofil",
      answer:
        "Aus den Leistungsdaten des Profils eignen sich vor allem Anrufe, Wegbeschreibungen, Websiteklicks und, falls eingerichtet, Buchungen als KPI. Aufrufe und Suchanfragen sind Kontext. Alle Werte gibt es nur für bestätigte Profile, und sie enthalten organische Ergebnisse und Google Ads.",
      blocks: [
        {
          t: "table",
          caption: "Leistungsdaten als KPI (Definitionen laut Google-Hilfe)",
          head: ["Wert", "Was Google zählt", "Als KPI geeignet?"],
          rows: [
            ["Aufrufe", "Personen, die das Profil gesehen haben, je Person höchstens einmal pro Tag", "Als Kontext, nicht als Ziel"],
            ["Suchanfragen", "Suchbegriffe, über die das Profil gefunden wurde, aktualisiert zu Monatsbeginn", "Für die Auswahl von Leistungen und Kategorien"],
            ["Anrufe", "Klicks auf die Anrufschaltfläche", "Ja, neben den angenommenen Anrufen"],
            ["Wegbeschreibungen", "Routenanfragen, bereinigt um Mehrfachtipps, Abbrüche und Spam", "Ja, bei Kundenverkehr vor Ort"],
            ["Websiteklicks", "Klicks auf den Website-Link", "Ja, mit den Besuchen in GA4 vergleichen"],
            ["Buchungen", "Abgeschlossene Buchungen über einen Buchungsanbieter", "Ja, wenn eingerichtet"],
          ],
        },
        {
          t: "p",
          text: "Eine ausführliche Erklärung jedes Messwerts mit Googles Einschränkungen steht in [Google Business Insights verstehen](/blog/google-business-insights-verstehen#messwerte). Für die KPI-Messung sind zwei Punkte entscheidend: Ein Anruf in den Leistungsdaten ist ein Tippen, kein Gespräch. Und wer Google Ads schaltet, sieht in diesen Zahlen Profil und Anzeige zusammen.",
        },
      ],
    },
    {
      id: "search-console",
      title: "KPIs aus der Search Console, mit KI-Bericht",
      answer:
        "Die Search Console liefert Klicks, Impressionen, Klickrate und durchschnittliche Position Ihrer Website in der Google Suche. Als KPI eignen sich vor allem Klicks ohne Markensuchen und Impressionen der Leistungsseiten. Der Bericht zu generativen KI-Funktionen zeigt seit 31. August 2026 Impressionen in Übersichten mit KI und im KI-Modus.",
      blocks: [
        {
          t: "table",
          caption: "Search Console als Quelle (laut Search Console-Hilfe)",
          head: ["Kennzahl", "Wo", "Was Sie wissen sollten"],
          rows: [
            ["Klicks", "Leistung, Suchergebnisse", "Gezählt wird ein Klick, der die Google Suche zu einer externen Seite verlässt"],
            ["Impressionen", "Leistung, Suchergebnisse", "Meist gezählt, sobald das Ergebnis auf der aktuellen Ergebnisseite zu sehen ist"],
            ["Durchschnittliche Position", "Leistung, Suchergebnisse", "Mittelwert der höchsten Position je Suchanfrage. Ohne Impression keine Position"],
            ["Klicks ohne Markensuchen", "Filter für Markensuchanfragen", "Nicht für Websites mit wenigen Impressionen. Einzelne Suchanfragen können falsch eingeordnet sein"],
            ["Impressionen in KI-Funktionen", "Leistungsbericht zu generativen KI-Funktionen", "Nur Impressionen, keine Klicks. Erscheint bei zu wenigen Impressionen meist nicht"],
          ],
        },
        {
          t: "p",
          text: "Der KI-Bericht zählt laut Google eine Impression, wenn ein Link zu Ihrer Website in einer generativen KI-Funktion angezeigt wurde. Mehrere Links derselben Website in einer Antwort zählen im Diagramm als eine Impression. Sie können nach Seite, Land, Gerät und Datum filtern. Die neuesten Daten können vorläufig sein. Wie Sie den Bericht im Detail lesen, steht in [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026#search-console).",
        },
        {
          t: "ul",
          items: [
            "**16 Monate:** Die Search Console hält laut Google die Daten der letzten 16 Monate vor. Für Vorjahresvergleiche über längere Zeit tragen Sie die Werte monatlich in eine eigene Tabelle ein.",
            "**Standardzeitraum:** Der Leistungsbericht zeigt zunächst die letzten drei Monate. Für KPIs stellen Sie ganze Kalendermonate ein.",
            "**Leistung plus Ort:** Filtern Sie nach den Seiten Ihrer wichtigsten Leistungen. So sehen Sie, ob die Seite für Ihre Leistungsbegriffe überhaupt erscheint, unabhängig von Suchen nach Ihrem Namen.",
          ],
        },
        {
          t: "note",
          label: "Grenze",
          text: "Ob Klicks aus dem Kartenblock oder aus dem Unternehmensprofil auf Ihre Website in der Search Console erscheinen, beschreibt die Hilfeseite zu Klicks und Impressionen nicht. Messen Sie Profil-Klicks deshalb über den markierten Link in GA4, nicht über die Search Console.",
        },
      ],
    },
    {
      id: "ga4",
      title: "GA4: Anfragen als Schlüsselereignisse und der markierte Profil-Link",
      answer:
        "In Google Analytics 4 markieren Sie die Handlungen, die eine Anfrage bedeuten, als Schlüsselereignisse: Formular gesendet, Telefonnummer angetippt, Termin gebucht. Den Website-Link im Profil versehen Sie mit UTM-Parametern, damit Sie Besuche aus dem Profil von anderen Google-Besuchen trennen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Ereignisse festlegen", text: "Schreiben Sie auf, was bei Ihnen eine Anfrage ist. Für einen Handwerksbetrieb sind das oft Formular, Telefonklick und E-Mail-Klick, für eine Praxis die Online-Terminbuchung." },
            { title: "Automatische Ereignisse prüfen", text: "Die optimierten Analysen von GA4 erfassen unter anderem Formularinteraktionen (form_start, form_submit), Klicks auf externe Links und Dateidownloads. Klicks auf Telefonnummern nennt die Hilfeseite nicht. Dafür legen Sie ein eigenes Ereignis an, etwa über den Google Tag Manager." },
            { title: "Als Schlüsselereignis markieren", text: "Unter Verwaltung, Datenanzeige, Ereignisse den Stern neben dem Ereignis setzen. Möglich sind bis zu 30 Schlüsselereignisse in Standard-Properties. Vorhandene Daten ändern sich nicht, die Markierung gilt ab jetzt. Bis ein Schlüsselereignis in Standardberichten erscheint, kann es bis zu 24 Stunden dauern." },
            { title: "Profil-Link markieren", text: "Website-Link im Profil zum Beispiel so ergänzen: „?utm_source=google&utm_medium=organic&utm_campaign=unternehmensprofil“. utm_source, utm_medium und utm_campaign sind laut Google immer anzugeben." },
            { title: "Schreibweise festhalten", text: "Werte unterscheiden Groß- und Kleinschreibung, Google empfiehlt Kleinbuchstaben. Ändern Sie die Schreibweise später nicht mehr, sonst zerfallen Ihre Monatswerte in mehrere Zeilen." },
          ],
        },
        {
          t: "p",
          text: "Daraus ergibt sich eine einfache KPI: Schlüsselereignisse aus Besuchen mit der Kampagne „unternehmensprofil“. Sie zeigt, wie viele Anfragen über den Website-Link im Profil kamen. Anrufe direkt aus dem Profil erreichen Ihre Website nie und fehlen in GA4. Sie stehen in den Leistungsdaten.",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Websiteklicks im Profil und Besuche in GA4 weichen fast immer voneinander ab. Sie zählen Verschiedenes, und Besuche ohne Einwilligung können je nach Einrichtung in GA4 fehlen. Zeigen Sie beide Werte nebeneinander und addieren Sie sie nie.",
        },
      ],
    },
    {
      id: "anrufe",
      title: "Anrufe messen, ohne die Profilnummer zu gefährden",
      answer:
        "Die Telefonnummer im Profil muss laut Google unmittelbar vom Betrieb verwaltet werden und direkt zu ihm führen. Weiterleitungsrufnummern, die Anrufer nicht direkt verbinden, sind nicht erlaubt. Angenommene Anrufe zählen Sie in Ihrer Telefonanlage, getrennte Nummern nutzen Sie, wenn überhaupt, auf Website oder in Anzeigen.",
      blocks: [
        {
          t: "table",
          caption: "Wege, Anrufe zu messen",
          head: ["Methode", "Was sie misst", "Grenze"],
          rows: [
            ["Leistungsdaten, Anrufe", "Klicks auf die Anruftaste im Profil", "Kein Hinweis, ob das Gespräch zustande kam"],
            ["Telefonanlage oder Mobilfunkvertrag", "Angenommene und verpasste Anrufe je Zeitraum", "Keine Quelle des Anrufers"],
            ["GA4-Ereignis Telefonklick", "Tippen auf die Nummer auf Ihrer Website", "Nur Website, nur mit Einwilligung je nach Einrichtung"],
            ["Eigene Nummer nur auf der Website", "Anrufe über die Website getrennt vom Profil", "Pflege einer zweiten Nummer, Datenschutz mit Anbieter klären"],
            ["Frage am Telefon", "„Wie sind Sie auf uns gekommen?“", "Ungenau, aber die einzige Verbindung zum Auftrag"],
          ],
        },
        {
          t: "p",
          text: "Googles Richtlinien verlangen eine Nummer, unter der der Standort erreichbar ist, nach Möglichkeit eine örtliche statt einer Hotline. Sonderrufnummern sind nicht zulässig. Neben der primären Nummer können Sie bis zu zwei weitere Nummern angeben. Eine ausdrückliche Regel zu Tracking-Nummern haben wir in den Richtlinien nicht gefunden.",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Lassen Sie im Profil Ihre echte Hauptnummer. Anrufe aus dem Profil zählen die Leistungsdaten ohnehin. Eine abweichende Nummer im Profil macht Ihre Kontaktdaten im Netz uneinheitlich, siehe [NAP-Konsistenz](/blog/nap-konsistenz-local-seo#umzug-name-nummer).",
        },
      ],
    },
    {
      id: "rankings",
      title: "Positionen als KPI: nur mit Rastermessung",
      answer:
        "Eine einzelne Position in Google Maps eignet sich nach unserer Einschätzung nicht als KPI, weil die Entfernung zum Suchenden laut Google in das lokale Ranking einfließt. Wer Positionen messen will, misst sie an vielen Punkten im Einzugsgebiet nach derselben Methode und vergleicht die Ergebnisse über Monate.",
      blocks: [
        {
          t: "p",
          text: "Google nennt für das lokale Ranking Relevanz, Entfernung und Bekanntheit. Dieselbe Suche kann deshalb in der Innenstadt ein anderes Ergebnis liefern als am Stadtrand. Eine Rastermessung legt ein Netz von Punkten über Ihr Gebiet und prüft an jedem Punkt die Position. Wie Sie das einrichten, zeigt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker#kennzahlen).",
        },
        {
          t: "ul",
          items: [
            "**Gleiche Begriffe:** jeden Monat dieselben drei bis fünf Suchbegriffe ohne Ihren Namen (unsere Empfehlung).",
            "**Gleiches Raster:** dieselben Punkte, derselbe Abstand, derselbe Wochentag (unsere Empfehlung).",
            "**Eine Zahl je Begriff:** zum Beispiel der Anteil der Rasterpunkte, an denen Sie unter den ersten drei stehen. Diese Kennzahl ist unser Vorschlag, kein Google-Wert.",
          ],
        },
      ],
    },
    {
      id: "lesen",
      title: "KPIs lesen: Definitionsblatt und erfundenes Beispiel",
      answer:
        "Legen Sie für jede KPI einmal fest, was sie zählt, woher sie kommt und wer sie wann einträgt. Lesen Sie dann Sichtbarkeit, Handlung und Anfrage zusammen. Ein Anstieg auf einer Stufe ohne Bewegung auf der nächsten zeigt Ihnen, wo Kunden verloren gehen.",
      blocks: [
        {
          t: "note",
          label: "Erfundenes Beispiel",
          text: "„Elektro Beispiel“ in Linz gibt es nicht. Alle Zahlen sind ausgedacht und dienen nur dazu, das Lesen zu üben. Sie sind weder ein Ergebnis noch ein Richtwert für Ihren Betrieb.",
        },
        {
          t: "table",
          caption: "Drittes Quartal, Elektro Beispiel, Linz (erfundene Werte, ohne Google Ads)",
          head: ["Stufe", "Kennzahl", "Q3 2026", "Q3 2025"],
          rows: [
            ["Sichtbarkeit", "Profil: Aufrufe", "3.400", "3.100"],
            ["Sichtbarkeit", "Search Console: Klicks ohne Markensuchen", "260", "250"],
            ["Sichtbarkeit", "Search Console: Impressionen in KI-Funktionen", "380", "nicht verfügbar"],
            ["Handlung", "Profil: Anrufe (Klicks)", "190", "150"],
            ["Handlung", "Profil: Websiteklicks", "210", "205"],
            ["Anfrage", "GA4: Schlüsselereignisse aus Kampagne „unternehmensprofil“", "24", "23"],
            ["Anfrage", "Telefonanlage: verpasste Anrufe", "61", "35"],
            ["Auftrag", "Neue Kunden mit Quelle Google", "29", "27"],
          ],
        },
        {
          t: "p",
          text: "**So lässt sich das Beispiel lesen:** Aufrufe und Anruf-Klicks sind gestiegen, neue Kunden kaum. Gleichzeitig ist die Zahl verpasster Anrufe um rund drei Viertel gestiegen. Der Engpass liegt also nicht in der Sichtbarkeit, sondern am Telefon. Die sinnvolle Maßnahme wäre Erreichbarkeit, nicht mehr Profilpflege. Die KI-Impressionen haben noch keinen Vorjahreswert und stehen deshalb ohne Bewertung da.",
        },
        {
          t: "table",
          caption: "Definitionsblatt (Vorlage)",
          head: ["Feld", "Inhalt"],
          rows: [
            ["Name der KPI", "Zum Beispiel „Anfragen über den Profil-Link“"],
            ["Definition", "Schlüsselereignisse in GA4 aus Besuchen mit utm_campaign=unternehmensprofil"],
            ["Quelle und Pfad", "GA4, Bericht Akquisition, Filter Kampagne"],
            ["Zeitraum", "Kalendermonat, verglichen mit dem Vorjahresmonat"],
            ["Verantwortlich", "Name, Eintrag bis zum fünften Werktag"],
            ["Bekannte Grenze", "Besuche ohne Einwilligung können fehlen"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie die Rohdaten jeden Monat in eine eigene Tabelle übertragen, zeigt [Local-SEO-Zahlen](/blog/local-seo-statistiken-daten#monatstabelle). Branchenwerte ohne Quelle eignen sich nicht als Ziel. Ihr eigener Vorjahreswert ist der bessere Vergleich.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Gestrichen haben wir die Behauptung, Search-Console-Impressionen seien ein Frühindikator, der Wochen vor Klicks und Anfragen steigt. Dafür haben wir keinen Beleg gefunden. Den festen Kanon von „sechs Kennzahlen, die genügen“ haben wir durch eine Auswahl nach Stufe ersetzt. Die frühere Empfehlung „separate Rufnummer je Kanal“ ist jetzt mit Googles Regeln zur Profilnummer eingeordnet. Neu sind der Bericht zu generativen KI-Funktionen, der Filter für Markensuchanfragen und die Schlüsselereignisse in GA4.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Welche KPIs zählen bei Local SEO wirklich?",
      a: "Die Kennzahlen, die eine Entscheidung stützen: Anrufe, Wegbeschreibungen und Websiteklicks aus dem Profil, Klicks ohne Markensuchen aus der Search Console, Anfragen als Schlüsselereignisse in GA4 und neue Kunden mit Quelle Google aus Ihrem eigenen Eingang. Aufrufe und Positionen erklären, sind aber kein Ziel.",
    },
    {
      q: "Wie messe ich Besuche aus dem Google-Unternehmensprofil auf meiner Website?",
      a: "Hängen Sie an den Website-Link im Profil UTM-Parameter an, mindestens utm_source, utm_medium und utm_campaign, in Kleinbuchstaben. In GA4 sehen Sie dann Besuche und Schlüsselereignisse dieser Kampagne getrennt von anderen Google-Besuchen.",
    },
    {
      q: "Darf ich im Profil eine Tracking-Nummer eintragen?",
      a: "Google verlangt eine Nummer, die unmittelbar vom Betrieb verwaltet wird und direkt zu ihm führt. Weiterleitungsrufnummern, die Anrufer nicht direkt verbinden, sind nicht erlaubt. Eine ausdrückliche Regel zu Tracking-Nummern haben wir nicht gefunden. Wir raten, im Profil die echte Hauptnummer zu lassen.",
    },
    {
      q: "Zeigt die Search Console, wie oft ich in Übersichten mit KI erscheine?",
      a: "Ja, seit 31. August 2026 für alle Websites. Der Leistungsbericht zu generativen KI-Funktionen zeigt, wie oft Links zu Ihrer Website in Übersichten mit KI und im KI-Modus angezeigt wurden. Er zeigt nur Impressionen, keine Klicks, und erscheint bei wenigen Impressionen meist nicht.",
    },
    {
      q: "Wie oft sollte ich lokale KPIs auswerten?",
      a: "Wir empfehlen monatlich, im Vergleich zum Vorjahresmonat. Die Suchanfragen im Profil aktualisiert Google ohnehin nur zu Monatsbeginn, und kürzere Zeiträume zeigen bei kleinen Betrieben nach unserer Einschätzung vor allem Zufall. Für das Format des Berichts siehe unsere Vorlage zum Local-SEO-Reporting.",
    },
  ],
  sources: [
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Google-Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Was sind Impressionen, Position und Klicks?", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7042828?hl=de" },
    { title: "Filter für Markensuchanfragen (Performance report dimensions)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/17011259" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "Search Console data in Google Analytics (16 Monate Speicherdauer)", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/13682862?hl=en" },
    { title: "Ereignisse als Schlüsselereignisse markieren", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/13128484?hl=de" },
    { title: "Optimierte Analysen (automatisch erfasste Ereignisse)", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/9216061?hl=de" },
    { title: "Kampagnendaten mithilfe benutzerdefinierter URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Telefonnummer hinzufügen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/16750496?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
  ],
  related: [
    { slug: "local-seo-reporting-template", title: "Local-SEO-Reporting: Monatsbericht auf einer Seite" },
    { slug: "google-business-insights-verstehen", title: "Google Business Insights verstehen" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
    { slug: "ai-zitat-monitoring-local-seo-2026", title: "KI-Zitate überwachen" },
  ],
  cta: {
    title: "Messen Sie die richtigen Zahlen?",
    text: "Wir prüfen, ob Ihr Profil-Link markiert ist, ob Ihre Anfragen in GA4 als Schlüsselereignisse zählen und welche Kennzahlen für Ihren Betrieb eine Entscheidung stützen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
