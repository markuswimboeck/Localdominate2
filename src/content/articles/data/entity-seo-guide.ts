import type { V4Article } from "../types";

const article: V4Article = {
  slug: "entity-seo-guide",
  lang: "de",
  seoTitle: "Entity SEO für lokale Unternehmen: der Leitfaden",
  seoDescription:
    "Entity SEO verständlich erklärt: wie Google Ihren Betrieb als eindeutige Entität erkennt, welche Rolle Profil, Website und sameAs spielen und wie Sie es prüfen.",
  h1: "Entity SEO für lokale Unternehmen: so erkennt Google Ihren Betrieb eindeutig",
  kicker: "KI und Suche",
  lead:
    "Für Inhaber lokaler Betriebe und alle, die deren Website betreuen. Sie erfahren, was Google unter einer Entität versteht, welche Angaben Ihren Betrieb eindeutig machen und wie Sie mit einfachen Mitteln prüfen, ob Google Sie richtig zuordnet.",
  answer:
    "Entity SEO heißt, Ihren Betrieb so darzustellen, dass Suchmaschinen ihn als ein bestimmtes, eindeutiges Ding erkennen: mit Name, Adresse, Kategorie, Website und Profilen, die überall zusammenpassen. Für lokale Betriebe ist das **Google-Unternehmensprofil** der wichtigste Baustein. Website, strukturierte Daten mit sameAs und gleichlautende Angaben in Verzeichnissen bestätigen es.",
  takeaways: [
    "Google stellte den Knowledge Graph 2012 unter dem Motto „things, not strings“ vor: Dinge statt Zeichenketten.",
    "Knowledge Panels entstehen automatisch aus Quellen im Web. Lokale Betriebe pflegen ihre Angaben über das Unternehmensprofil.",
    "Eindeutig wird ein Betrieb durch gleiche Angaben an allen Stellen: Profil, Impressum, Kontaktseite, strukturierte Daten und Verzeichnisse.",
    "Strukturierte Daten helfen Google beim Zuordnen. Eine Garantie für eine bestimmte Darstellung geben sie laut Google nicht.",
    "Ein Wikipedia-Artikel ist für lokale Betriebe nicht nötig.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-ist-entity-seo",
      title: "Was eine Entität ist",
      answer:
        "Eine Entität ist ein eindeutig bestimmbares Ding: eine Person, ein Ort, ein Unternehmen, ein Produkt. Suchmaschinen versuchen, hinter Wörtern solche Dinge und ihre Beziehungen zu erkennen.",
      blocks: [
        {
          t: "p",
          text: "Google hat den **Knowledge Graph** im Mai 2012 vorgestellt. Das Beispiel damals: Wer „taj mahal“ sucht, kann das Bauwerk meinen, einen Musiker, ein Casino oder das indische Restaurant um die Ecke. Ein Suchsystem, das nur Wörter abgleicht, kann das nicht unterscheiden. Eines, das Dinge kennt, schon. Laut Google enthielt der Knowledge Graph zum Start mehr als 500 Millionen Objekte und mehr als 3,5 Milliarden Fakten über diese Objekte und ihre Beziehungen.",
        },
        {
          t: "p",
          text: "Für einen lokalen Betrieb heißt das: Google soll „Bäckerei Huber“ in Ihrer Straße als **Ihren** Betrieb erkennen, nicht als eine andere Bäckerei Huber, nicht als Person namens Huber und nicht als Ihr altes Geschäft vor dem Umzug.",
        },
        {
          t: "table",
          caption: "Keyword-Denken und Entitäten-Denken im Vergleich",
          head: ["Frage", "Keyword-Denken", "Entitäten-Denken"],
          rows: [
            ["Worum geht es?", "Welche Wörter stehen auf der Seite?", "Welches Ding wird beschrieben?"],
            ["Was zählt?", "Wiederholung von Suchbegriffen", "Eindeutige, widerspruchsfreie Angaben"],
            ["Was verbindet Seiten?", "Gleiche Begriffe", "Beziehungen: Betrieb liegt in Ort, bietet Leistung, gehört zu Verband"],
          ],
        },
      ],
    },
    {
      id: "knowledge-panel",
      title: "Knowledge Panel und Unternehmensprofil",
      answer:
        "Das Infofeld rechts in der Suche heißt Knowledge Panel. Google erstellt es automatisch aus Quellen im Web. Bei lokalen Betrieben zeigt Google an dieser Stelle in der Regel das Unternehmensprofil.",
      blocks: [
        {
          t: "p",
          text: "Laut Google werden Knowledge Panels automatisch erzeugt und aktualisiert, wenn sich Informationen im Web ändern. Personen und Organisationen können ihr Knowledge Panel beanspruchen und Änderungen vorschlagen. Für Unternehmen verweist Google auf das **Unternehmensprofil**: Dort fordern Sie ein Profil an oder legen es an und pflegen die Angaben selbst.",
        },
        {
          t: "ul",
          items: [
            "Bestätigen Sie Ihr Unternehmensprofil. Laut Google wird ein bestätigtes Unternehmen mit größerer Wahrscheinlichkeit in den Suchergebnissen angezeigt.",
            "Verwenden Sie den Namen, der auch auf Schild, Website und Briefpapier steht.",
            "Halten Sie pro Unternehmen ein Profil. Mehrere Profile führen laut Google zu Problemen bei der Darstellung.",
            "Nutzen Sie bei falschen Angaben in einem Knowledge Panel die Feedback-Funktion im Panel.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie das Profil vollständig pflegen, beschreibt der Artikel [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "signale",
      title: "Was Ihren Betrieb eindeutig macht",
      answer:
        "Eindeutig wird ein Betrieb, wenn dieselben Kernangaben an allen wichtigen Stellen stehen und sich gegenseitig bestätigen. Widersprüche, etwa alte Adressen oder abweichende Namen, machen die Zuordnung schwerer.",
      blocks: [
        {
          t: "table",
          caption: "Bausteine einer eindeutigen Unternehmens-Entität",
          head: ["Baustein", "Wo", "Was zählt"],
          rows: [
            ["Unternehmensprofil", "Google", "Bestätigt, richtiger Name, genaue Hauptkategorie, Adresse oder Einzugsgebiet, Website-Link"],
            ["Impressum und Kontaktseite", "Ihre Website", "Derselbe Name, dieselbe Adresse, dieselbe Telefonnummer wie im Profil"],
            ["Strukturierte Daten", "Ihre Website, Startseite oder Kontaktseite", "LocalBusiness oder passende Unterart, Organization mit logo und sameAs"],
            ["Profile auf anderen Plattformen", "Verzeichnisse, Bewertungsportale, soziale Netzwerke", "Gleiche Kernangaben, Link zurück auf Ihre Website"],
            ["Erwähnungen", "Lokalzeitung, Kammer, Verband, Partner", "Ihr Name im Zusammenhang mit Ort und Leistung"],
            ["Eigene Inhalte", "Leistungsseiten, Team-Seite, Über uns", "Wer Sie sind, was Sie tun, wo, seit wann, mit welchen Qualifikationen"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie Abweichungen in Verzeichnissen finden und beheben, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo). Wie Sie Fachwissen und Erfahrung auf der Website sichtbar machen, beschreibt [E-E-A-T für lokale Unternehmen](/blog/e-e-a-t-lokale-unternehmen).",
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "Strukturierte Daten: LocalBusiness, Organization und sameAs",
      answer:
        "Mit strukturierten Daten beschreiben Sie Ihren Betrieb in einer Form, die Maschinen direkt lesen können. Google nennt für LocalBusiness Name und Adresse als erforderlich und dokumentiert sameAs als Verweis auf Ihre Profile auf anderen Websites.",
      blocks: [
        {
          t: "table",
          caption: "Wichtige Eigenschaften für einen lokalen Betrieb",
          head: ["Eigenschaft", "Inhalt", "Hinweis"],
          rows: [
            ["@type", "LocalBusiness oder eine genauere Unterart, etwa Dentist oder Bakery", "So genau wie möglich, passend zur Hauptkategorie"],
            ["name", "Name des Betriebs", "Bei Google für LocalBusiness erforderlich"],
            ["address", "Postanschrift", "Bei Google für LocalBusiness erforderlich"],
            ["telephone, url", "Telefonnummer und Website", "Von Google empfohlen"],
            ["geo", "Breiten- und Längengrad", "Von Google empfohlen"],
            ["openingHoursSpecification", "Öffnungszeiten", "Gleich wie im Unternehmensprofil"],
            ["logo", "Adresse Ihres Logos", "In Googles Dokumentation für Organization beschrieben"],
            ["sameAs", "Adressen Ihrer Profile auf anderen Websites", "Laut Google zum Beispiel soziale Netzwerke oder Bewertungsseiten, mehrere Angaben möglich"],
          ],
        },
        {
          t: "note",
          label: "Grenzen",
          text: "Google kann nicht garantieren, dass strukturierte Daten in den Suchergebnissen angezeigt werden, auch wenn sie fehlerfrei sind. Die Angaben müssen zum sichtbaren Inhalt der Seite passen. Markieren Sie nichts, was Besucher nicht sehen, und keine gefälschten Rezensionen.",
        },
        {
          t: "p",
          text: "Prüfen Sie das Markup mit dem Test für Rich-Suchergebnisse. Eine Schritt-für-Schritt-Anleitung finden Sie im Artikel [LocalBusiness-Schema implementieren](/blog/localbusiness-schema-implementierung).",
        },
      ],
    },
    {
      id: "pruefen",
      title: "Prüfen, ob Google Ihren Betrieb richtig zuordnet",
      answer:
        "Suchen Sie nach Ihrem Namen mit Ort. Erscheint Ihr Unternehmensprofil mit den richtigen Angaben, ist die Grundlage gelegt. Weitere Hinweise liefern der Test für Rich-Suchergebnisse und die Knowledge Graph Search API.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Markensuche",
              text: "Suchen Sie nach „Name Ort“ ohne Anmeldung. Prüfen Sie, ob Ihr Profil erscheint und ob Adresse, Telefon, Öffnungszeiten und Website stimmen.",
            },
            {
              title: "Namensvarianten",
              text: "Suchen Sie auch nach Abkürzungen und alten Namen. Tauchen alte Adressen oder doppelte Einträge auf, bereinigen Sie diese zuerst.",
            },
            {
              title: "Markup testen",
              text: "Geben Sie Start- und Kontaktseite in den Test für Rich-Suchergebnisse ein und beheben Sie gemeldete Fehler.",
            },
            {
              title: "Knowledge Graph abfragen",
              text: "Mit der Knowledge Graph Search API lässt sich prüfen, ob ein Eintrag zu einem Namen existiert. Google bezeichnet die API als nur lesend und nicht für produktionskritische Zwecke geeignet und empfiehlt Neukunden das Nachfolgeprodukt Enterprise Knowledge Graph. Für kleine Betriebe ist die Abfrage kein Muss.",
            },
          ],
        },
      ],
    },
    {
      id: "ki-suche",
      title: "Entitäten und KI-Antworten",
      answer:
        "Auch KI-Assistenten müssen erkennen, welcher Betrieb gemeint ist. Klare, gleichlautende Angaben im Netz verringern das Risiko, dass sie Sie verwechseln oder veraltete Daten wiedergeben. Eine Garantie, genannt zu werden, gibt es nicht.",
      blocks: [
        {
          t: "p",
          text: "KI-Antworten stützen sich auf Inhalte aus dem Web. Wenn Ihr Name, Ihre Adresse und Ihre Leistungen an vielen Stellen gleich und eindeutig beschrieben sind, ist die Wahrscheinlichkeit geringer, dass ein Assistent Sie mit einem anderen Betrieb verwechselt. Zahlen, um wie viel häufiger Betriebe mit sauberen Entitätsdaten zitiert werden, gibt es nicht in belastbarer Form. Wir nennen deshalb keine.",
        },
        {
          t: "p",
          text: "Was Sie tun können, wenn ein Assistent falsche Angaben über Ihren Betrieb macht, beschreibt der Artikel [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026). Wie Sie Inhalte für KI-Suchen aufbereiten, zeigt [Website-Inhalte für KI-Suchmaschinen](/blog/website-content-ai-suchmaschinen).",
        },
      ],
    },
    {
      id: "fehler",
      title: "Häufige Fehler",
      answer:
        "Die meisten Probleme entstehen durch Widersprüche: verschiedene Namen, alte Adressen, doppelte Profile oder Markup, das nicht zur Seite passt.",
      blocks: [
        {
          t: "table",
          caption: "Fehler und Abhilfe",
          head: ["Fehler", "Folge", "Abhilfe"],
          rows: [
            ["Name im Profil mit Zusätzen wie Ort oder Leistung", "Widerspricht Googles Richtlinien, das Profil kann gesperrt werden", "Den echten Namen verwenden"],
            ["Alte Adresse in Verzeichnissen nach einem Umzug", "Zwei Orte für denselben Betrieb", "Verzeichnisse aktualisieren, alte Einträge schließen lassen"],
            ["Zwei Profile für denselben Standort", "Darstellungsprobleme in Maps und Suche", "Doppeltes Profil entfernen lassen"],
            ["sameAs verweist auf fremde oder leere Seiten", "Falsche Verknüpfungen", "Nur eigene, gepflegte Profile angeben"],
            ["Markup mit Angaben, die auf der Seite fehlen", "Verstößt gegen Googles Richtlinien für strukturierte Daten", "Markup und sichtbaren Inhalt angleichen"],
          ],
        },
        {
          t: "p",
          text: "Hilfe bei doppelten Einträgen bietet der Artikel [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen).",
        },
      ],
    },
    {
      id: "checkliste",
      title: "Checkliste in sieben Schritten",
      answer:
        "Beginnen Sie mit dem Unternehmensprofil, gleichen Sie dann Website und Verzeichnisse an und ergänzen Sie zuletzt strukturierte Daten und Erwähnungen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Kernangaben festlegen", text: "Name, Adresse, Telefon, Website und Hauptkategorie einmal verbindlich aufschreiben." },
            { title: "Unternehmensprofil bestätigen und prüfen", text: "Alle Angaben mit der festgelegten Fassung abgleichen." },
            { title: "Website angleichen", text: "Impressum, Kontaktseite und Fußzeile auf dieselbe Fassung bringen." },
            { title: "Strukturierte Daten ergänzen", text: "LocalBusiness mit Name, Adresse, Telefon, Öffnungszeiten, geo und sameAs. Mit dem Test für Rich-Suchergebnisse prüfen." },
            { title: "Verzeichnisse bereinigen", text: "Die wichtigsten Branchen- und Regionalverzeichnisse prüfen und korrigieren." },
            { title: "Über uns ausbauen", text: "Wer arbeitet hier, seit wann, mit welchen Qualifikationen, in welchen Verbänden." },
            { title: "Erwähnungen pflegen", text: "Kammer, Verband, Partner und Lokalpresse bei echten Anlässen." },
          ],
        },
        {
          t: "p",
          text: "Wenn Sie wissen möchten, wie eindeutig Ihr Betrieb heute bei Google dasteht, prüfen wir das im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was ist der Unterschied zwischen Entity SEO und klassischem SEO?",
      a: "Klassisches SEO denkt oft in Suchbegriffen. Entity SEO fragt, ob Suchmaschinen erkennen, welches Ding gemeint ist und wie es mit anderen zusammenhängt. Für lokale Betriebe überschneidet sich beides stark: Ein gutes Profil und eine klare Website erfüllen beide Ziele.",
    },
    {
      q: "Brauche ich einen Wikipedia-Artikel?",
      a: "Nein. Für lokale Betriebe ist das Unternehmensprofil die Quelle, die Sie selbst pflegen können. Website, strukturierte Daten und Einträge in Verzeichnissen ergänzen es.",
    },
    {
      q: "Wie erkenne ich, ob Google meinen Betrieb kennt?",
      a: "Suchen Sie nach Name und Ort. Erscheint Ihr Unternehmensprofil mit korrekten Angaben, kennt Google Ihren Betrieb. Fehlt es oder erscheinen falsche Daten, beginnen Sie mit dem Profil.",
    },
    {
      q: "Was bewirkt sameAs?",
      a: "Mit sameAs nennen Sie in den strukturierten Daten Seiten auf anderen Websites, die ebenfalls Ihren Betrieb beschreiben, etwa Profile in sozialen Netzwerken oder auf Bewertungsseiten. Das erleichtert die Zuordnung. Eine bestimmte Darstellung in der Suche garantiert es nicht.",
    },
    {
      q: "Wie lange dauert es, bis Google Änderungen übernimmt?",
      a: "Das ist unterschiedlich. Google schreibt, dass manche Änderungen nach wenigen Stunden wirken und andere mehrere Monate brauchen. Änderungen im Unternehmensprofil werden vor der Veröffentlichung geprüft.",
    },
  ],
  sources: [
    { title: "Introducing the Knowledge Graph: things, not strings (16. Mai 2012)", publisher: "Google Blog", url: "https://blog.google/products/search/introducing-knowledge-graph-things-not/" },
    { title: "Knowledge Panels", publisher: "Infobox-Hilfe (Google)", url: "https://support.google.com/knowledgepanel/answer/9163198?hl=de" },
    { title: "Identität auf Google bestätigen", publisher: "Infobox-Hilfe (Google)", url: "https://support.google.com/knowledgepanel/answer/7534902?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Strukturierte Daten für Organisationen (Organization)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/organization?hl=de" },
    { title: "Allgemeine Richtlinien für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de" },
    { title: "Knowledge Graph Search API", publisher: "Google for Developers", url: "https://developers.google.com/knowledge-graph" },
    { title: "Startleitfaden zur Suchmaschinenoptimierung (SEO)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Unternehmensprofil bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
  ],
  related: [
    { slug: "semantic-seo-topical-authority", title: "Semantic SEO und Themenautorität" },
    { slug: "localbusiness-schema-implementierung", title: "LocalBusiness-Schema implementieren" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "e-e-a-t-lokale-unternehmen", title: "E-E-A-T für lokale Unternehmen" },
  ],
  cta: {
    title: "Erkennt Google Ihren Betrieb eindeutig?",
    text: "Wir prüfen Ihr Unternehmensprofil, Ihre Website und die wichtigsten Verzeichnisse auf Widersprüche und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die wir zuerst angleichen würden. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
