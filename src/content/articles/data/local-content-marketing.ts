import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-content-marketing",
  lang: "de",
  seoTitle: "Local Content Marketing: Inhalte mit echtem Ortsbezug",
  seoDescription:
    "Local Content Marketing für kleine Betriebe: Themen aus Kundenfragen finden, Leistungs- und Ortsseiten ohne Brückenseiten, Beiträge im Profil, Erfolg messen.",
  h1: "Local Content Marketing: Inhalte, die Kunden vor Ort wirklich helfen",
  kicker: "Strategie",
  lead:
    "Für Inhaber und Marketingverantwortliche kleiner Betriebe in Deutschland, Österreich und der Schweiz, die mit eigenen Inhalten mehr Anfragen aus ihrer Region gewinnen wollen. Sie erfahren, woher gute Themen kommen, wie Leistungs- und Ortsseiten aussehen, die Google nicht als Spam wertet, und wie Sie mit wenig Zeit regelmäßig veröffentlichen.",
  answer:
    "Lokales Content Marketing heißt, Inhalte zu erstellen, die Menschen in Ihrem Einzugsgebiet bei einer konkreten Entscheidung helfen: Seiten zu Ihren Leistungen mit echten Ortsangaben, Antworten auf häufige Kundenfragen, Termine und Neuigkeiten im Unternehmensprofil. Google empfiehlt Inhalte mit **Wissen aus erster Hand**, geschrieben für Menschen statt für Suchmaschinen. Austauschbare Stadtseiten können als Brückenseiten gelten.",
  takeaways: [
    "Die besten Themen kommen aus Ihrem Alltag: Fragen am Telefon, am Empfang und vor dem Angebot.",
    "Google fragt in seiner Anleitung zu hilfreichen Inhalten, ob Inhalte Wissen aus erster Hand zeigen. Eine bevorzugte Wortzahl gibt es laut Google nicht.",
    "Seiten, die sich nur im Ortsnamen unterscheiden, und Listen von Städten im Text nennt Google als Spam. Jede Ortsseite braucht eigene Inhalte.",
    "Beiträge im Unternehmensprofil eignen sich für Neuigkeiten, Angebote und Veranstaltungen. Beiträge ohne Zeitraum archiviert Google nach sechs Monaten.",
    "Den Erfolg messen Sie mit der Search Console je Seite und mit den Leistungsdaten des Profils, nicht mit der Zahl veröffentlichter Texte.",
  ],
  publishedAt: "2026-01-26",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-zaehlt",
      title: "Was Google unter hilfreichen Inhalten versteht",
      answer:
        "Google empfiehlt nutzerorientierte Inhalte statt Inhalten, die vor allem Suchmaschinen bedienen sollen. Für lokale Betriebe ist das ein Vorteil: Sie haben Wissen aus erster Hand, das kein Textgenerator hat.",
      blocks: [
        {
          t: "p",
          text: "In seiner Anleitung zu hilfreichen Inhalten stellt Google Fragen, mit denen Sie Ihre Texte prüfen können. Zeigen Ihre Inhalte fundiertes Wissen aus erster Hand, etwa aus der Nutzung eines Produkts oder dem Besuch eines Orts? Hat jemand nach dem Lesen genug gelernt, um sein Ziel zu erreichen? Als Warnzeichen nennt Google unter anderem Inhalte, die hauptsächlich für Suchmaschinen erstellt werden, Texte auf eine bestimmte Wortzahl hin und das Ändern von Datumsangaben ohne wesentliche Änderung des Inhalts.",
        },
        {
          t: "table",
          caption: "Hilfreich oder suchmaschinenorientiert (Beispiele)",
          head: ["Hilfreich", "Suchmaschinenorientiert"],
          rows: [
            ["„Was kostet ein Badumbau in unserer Region und wovon hängt der Preis ab“, mit Ihren echten Erfahrungswerten", "„Badumbau München, Badumbau Schwabing, Badumbau Pasing“ als Textblock"],
            ["Anfahrt und Parken zu Ihrer Praxis während des Wochenmarkts", "Ein allgemeiner Text über „die schönste Stadt Bayerns“ ohne Bezug zu Ihrer Leistung"],
            ["Eine Seite je Leistung mit Ablauf, Dauer, Einzugsgebiet", "Zehn fast gleiche Seiten, bei denen nur der Ortsname wechselt"],
            ["Ein Artikel, der nach echten Änderungen aktualisiert wird", "Ein neues Datum ohne neuen Inhalt"],
          ],
        },
      ],
    },
    {
      id: "themen-finden",
      title: "Themen finden: aus Kundenfragen und Suchdaten",
      answer:
        "Gute Themen sammeln Sie an drei Stellen: bei Ihren Kunden, in den Suchanfragen Ihres Unternehmensprofils und im Leistungsbericht der Search Console. Was dort mehrfach auftaucht, verdient eine eigene Antwort.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Team fragen", text: "Welche Fragen stellen Kunden am Telefon, am Empfang, im Angebotsgespräch? Lassen Sie das Team zwei Wochen lang mitschreiben." },
            { title: "Suchanfragen im Profil ansehen", text: "Die Leistungsdaten des Unternehmensprofils zeigen die Suchbegriffe, mit denen Nutzer Ihr Profil gefunden haben. Google aktualisiert sie zu Beginn jedes Monats." },
            { title: "Search Console auswerten", text: "Der Leistungsbericht zeigt Suchanfragen, Klicks und Impressionen Ihrer Seiten. Suchen mit vielen Impressionen und wenig Klicks sind Kandidaten für bessere Antworten." },
            { title: "Gruppieren", text: "Fassen Sie ähnliche Fragen zusammen. Jede Gruppe wird eine Seite, ein Abschnitt oder ein Beitrag." },
          ],
        },
        {
          t: "table",
          caption: "Themenarten mit Beispielen",
          head: ["Themenart", "Beispiel Handwerk", "Beispiel Gastgewerbe", "Beispiel Praxis"],
          rows: [
            ["Kosten und Ablauf", "Ablauf einer Heizungsmodernisierung", "Was im Halbpensionspreis enthalten ist", "Ablauf des ersten Termins"],
            ["Vor Ort", "Einzugsgebiet und Anfahrtszeiten", "Anreise ohne Auto", "Parken und barrierefreier Zugang"],
            ["Saison", "Heizungscheck vor dem Winter", "Was im Ort zwischen den Saisons geöffnet hat", "Termine in den Schulferien"],
            ["Entscheidungshilfe", "Reparatur oder Austausch", "Zimmerkategorien im Vergleich", "Welche Leistungen die Kasse übernimmt, mit Verweis auf die offizielle Stelle"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie Suchbegriffe mit Ortsbezug systematisch finden, zeigt der Artikel [Local-SEO-Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "leistungs-und-ortsseiten",
      title: "Leistungs- und Ortsseiten ohne Brückenseiten",
      answer:
        "Eine Seite je Hauptleistung ist die Grundlage. Eigene Seiten für einzelne Orte oder Stadtteile lohnen sich nur, wenn Sie dort wirklich tätig sind und für jeden Ort eigene Inhalte haben, sonst können sie als Brückenseiten gelten.",
      blocks: [
        {
          t: "p",
          text: "Googles Spamrichtlinien nennen als Brückenseiten unter anderem mehrere Seiten oder Domains, die auf Regionen oder Städte ausgerichtet sind, Nutzer aber zum selben Ziel führen, und im Wesentlichen ähnliche Seiten, die eher Suchergebnissen ähneln als einer klaren Gliederung. Unter überflüssigen Keywords nennt Google ausdrücklich Textblöcke mit Städten und Regionen, für die eine Seite ranken soll.",
        },
        { t: "h3", text: "Was auf eine gute Leistungsseite gehört" },
        {
          t: "ul",
          items: [
            "Was die Leistung ist, für wen sie passt und wie der Ablauf aussieht.",
            "Ihr Einzugsgebiet in Worten, so wie es auch im Unternehmensprofil steht.",
            "Preise oder ein Preisrahmen, soweit Sie ihn nennen können, und wovon er abhängt.",
            "Häufige Fragen zu genau dieser Leistung.",
            "Echte Fotos aus Ihrer Arbeit und ein klarer Kontaktweg.",
          ],
        },
        { t: "h3", text: "Wann eine eigene Ortsseite sinnvoll ist" },
        {
          t: "ul",
          items: [
            "Sie haben dort einen eigenen Standort, oder Sie arbeiten dort regelmäßig.",
            "Sie können ortsspezifisch etwas sagen: Anfahrt, typische Gebäude, örtliche Vorschriften mit Quelle, Referenzen mit Einverständnis der Kunden.",
            "Die Seite wäre auch ohne Suchmaschine nützlich für jemanden aus diesem Ort.",
          ],
        },
        {
          t: "note",
          label: "Faustregel",
          text: "Wenn Sie den Ortsnamen auf einer Seite austauschen können, ohne dass ein Satz falsch wird, ist die Seite nicht eigenständig. Aufbau und Beispiele zeigt der Artikel [Lokale Landingpages](/blog/lokale-landing-pages).",
        },
      ],
    },
    {
      id: "ratgeber",
      title: "Ratgeber und lokale Guides",
      answer:
        "Ratgeber mit Ortsbezug funktionieren, wenn sie zu Ihrer Leistung passen und auf eigener Erfahrung beruhen. Ein Gastgeber kennt die Wanderwege, ein Fahrradhändler die Radrouten, eine Physiotherapeutin die Laufstrecken im Park.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Passend zur Leistung:** Ein Hotel schreibt über Ausflugsziele, die Gäste wirklich erreichen. Ein Elektriker schreibt über Förderprogramme für Wallboxen mit Verweis auf die zuständige Stelle.",
            "**Nur, was Sie kennen:** Empfehlen Sie Orte und Betriebe, die Sie selbst besucht haben. Das ist genau das Wissen aus erster Hand, nach dem Google fragt.",
            "**Mit Quellen:** Öffnungszeiten, Termine und Regeln verlinken Sie bei der offiziellen Stelle, damit Leser die aktuelle Fassung finden.",
            "**Pflegen:** Prüfen Sie Ratgeber mindestens einmal im Jahr. Ändern Sie das Datum nur, wenn sich der Inhalt wirklich geändert hat.",
          ],
        },
      ],
    },
    {
      id: "termine-und-neuigkeiten",
      title: "Termine und Neuigkeiten im Unternehmensprofil",
      answer:
        "Beiträge im Unternehmensprofil zeigen Neuigkeiten, Angebote und Veranstaltungen direkt in der Google-Suche und in Google Maps. Sie sind der schnellste Weg, Aktuelles dort sichtbar zu machen, wo lokale Kunden suchen.",
      blocks: [
        {
          t: "table",
          caption: "Beitragsarten im Unternehmensprofil",
          head: ["Art", "Wofür", "Pflichtangaben laut Google"],
          rows: [
            ["Aktuelles", "Neuigkeiten und Wissenswertes", "Beschreibung, optional Foto oder Video und Button"],
            ["Angebot", "Aktionen und Angebote", "Titel, Datum und Uhrzeit"],
            ["Veranstaltung", "Termine wie Tag der offenen Tür", "Titel, Start- und Enddatum"],
          ],
        },
        {
          t: "ul",
          items: [
            "Beiträge ohne Zeitraum archiviert Google nach sechs Monaten.",
            "Beiträge lassen sich planen und wiederholen.",
            "Eine Telefonnummer im Beitragstext kann zur Ablehnung führen, wenn Google sie nicht Ihrem Unternehmen zuordnen kann.",
          ],
        },
        {
          t: "p",
          text: "Veranstaltungen in Ihrem Ort sind gute Anlässe: Was ist bei Ihnen in der Woche des Stadtfests anders, welche Öffnungszeiten gelten am Brückentag? Mehr dazu in den Artikeln [Google Posts als Rankingfaktor](/blog/google-posts-ranking-faktor) und [Lokales Event-Marketing](/blog/lokale-events-marketing).",
        },
      ],
    },
    {
      id: "kundeninhalte",
      title: "Fotos, Stimmen und Rezensionen von Kunden",
      answer:
        "Inhalte von Kunden wirken glaubwürdig, wenn sie echt sind und Sie sie mit Erlaubnis verwenden. Für Rezensionen gelten Googles Regeln und, wenn Sie Bewertungen auf Ihrer Website zeigen, auch Pflichten aus dem Wettbewerbsrecht.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Erlaubnis einholen:** Bevor Sie Namen, Fotos oder Zitate von Kunden auf Website oder Social Media verwenden, fragen Sie schriftlich.",
            "**Keine Anreize für Rezensionen:** Rabatte oder Geschenke für Google-Rezensionen verbietet Google. Das gilt auch für Gewinnspiele, bei denen eine Rezension die Teilnahme ist.",
            "**Kein Sterne-Markup für eigene Bewertungen:** Google zeigt Rezensions-Snippets für lokale Unternehmen nur auf Websites, die Rezensionen über andere Unternehmen sammeln. Auf Ihrer eigenen Website bringt das Markup keine Sterne in der Suche.",
            "**Herkunft angeben:** Wer in Deutschland Verbraucherbewertungen zugänglich macht, muss nach § 5b Abs. 3 UWG informieren, ob und wie er sicherstellt, dass sie von echten Kunden stammen.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie fair zu mehr Rezensionen kommen, steht im Artikel [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "mehrfach-nutzen",
      title: "Einen Inhalt mehrfach nutzen",
      answer:
        "Ein gut recherchierter Inhalt lässt sich in mehreren Formen nutzen: als Seite auf der Website, als Beitrag im Unternehmensprofil, als Abschnitt im Newsletter und als Beitrag in sozialen Medien. So sparen Sie Zeit, ohne Inhalte massenhaft zu vervielfältigen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Grundtext schreiben", text: "Eine ausführliche Antwort auf eine Kundenfrage auf Ihrer Website." },
            { title: "Kurzfassung fürs Profil", text: "Zwei, drei Sätze mit Link zur Seite als Beitrag „Aktuelles“." },
            { title: "Newsletter", text: "Ein Absatz mit Link, nur an Empfänger, die dem Newsletter zugestimmt haben." },
            { title: "Soziale Medien", text: "Ein Foto oder kurzes Video mit der wichtigsten Aussage." },
            { title: "Aktualisieren", text: "Wenn sich etwas ändert, zuerst die Seite, dann die übrigen Formen." },
          ],
        },
        {
          t: "note",
          label: "Grenze",
          text: "Google nennt als Spam das massenhafte Erzeugen von Seiten ohne Mehrwert, etwa durch Umformulieren oder Übersetzen fremder Inhalte oder mit generativer KI ohne Nutzen für Leser. Mehrfach nutzen heißt: denselben Inhalt in passenden Formen zeigen, nicht viele fast gleiche Seiten erzeugen.",
        },
      ],
    },
    {
      id: "redaktionsplan",
      title: "Ein Redaktionsplan, der in den Alltag passt",
      answer:
        "Für einen kleinen Betrieb reicht ein Plan, der pro Monat eine neue oder überarbeitete Seite, einige Beiträge im Profil und neue Fotos vorsieht. Regelmäßigkeit zählt mehr als Menge.",
      blocks: [
        {
          t: "table",
          caption: "Beispiel für einen Monatsplan",
          head: ["Woche", "Website", "Unternehmensprofil", "Sonstiges"],
          rows: [
            ["1", "Eine Kundenfrage ausführlich beantworten", "Beitrag „Aktuelles“ mit Link zur neuen Seite", "Fotos einer aktuellen Arbeit"],
            ["2", "Bestehende Leistungsseite prüfen und ergänzen", "Rezensionen beantworten", "Newsletter, falls vorhanden"],
            ["3", "Saisonthema vorbereiten", "Angebot oder Veranstaltung, falls vorhanden", "Social-Media-Beitrag zum Thema aus Woche 1"],
            ["4", "Zahlen in der Search Console ansehen", "Öffnungszeiten für den nächsten Monat prüfen", "Themen für den nächsten Monat sammeln"],
          ],
        },
        {
          t: "p",
          text: "Feste Termine im Jahr wie Saisonbeginn, Feiertage, Schulferien und örtliche Feste tragen Sie einmal jährlich ein. Hilfe dabei geben die Artikel [Saisonales Local SEO](/blog/saisonales-local-seo) und [Local-SEO-Jahresplanung](/blog/local-seo-jahresplanung).",
        },
      ],
    },
    {
      id: "messen",
      title: "Den Erfolg messen",
      answer:
        "Messen Sie je Seite, wie oft sie in der Google-Suche erscheint und angeklickt wird, und im Unternehmensprofil, wie viele Websiteklicks, Anrufe und Wegbeschreibungen entstehen. Vergleichen Sie gleich lange Zeiträume.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Search Console:** Klicks, Impressionen und Klickrate je Seite und je Suchanfrage.",
            "**Unternehmensprofil:** Websiteklicks, Anrufe, Wegbeschreibungen und die Suchbegriffe, mit denen Ihr Profil gefunden wurde.",
            "**Anfragen:** Fragen Sie neue Kunden, wie sie auf Sie aufmerksam wurden, und notieren Sie die Antwort.",
          ],
        },
        {
          t: "p",
          text: "Eine Seite ohne Klicks nach mehreren Monaten ist kein Grund, sie zu löschen. Prüfen Sie zuerst, ob sie die Frage wirklich beantwortet und ob sie von Ihren Leistungsseiten aus verlinkt ist. Welche Kennzahlen sich eignen, erklärt der Artikel [Local SEO Tracking und KPIs](/blog/local-seo-tracking-kpis).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was ist lokales Content Marketing?",
      a: "Das Erstellen von Inhalten mit Ortsbezug, die Menschen in Ihrem Einzugsgebiet bei einer Entscheidung helfen: Leistungsseiten, Antworten auf Kundenfragen, Ratgeber, Beiträge im Unternehmensprofil. Ziel sind mehr Anfragen aus der Region, nicht möglichst viele Texte.",
    },
    {
      q: "Wie oft sollte ich etwas veröffentlichen?",
      a: "Eine feste Zahl nennt Google nicht. Google warnt sogar davor, viele Inhalte nur hinzuzufügen, um eine Website neu erscheinen zu lassen. Für kleine Betriebe empfehlen wir einen Monatsrhythmus, den Sie durchhalten: eine neue oder überarbeitete Seite und einige Beiträge im Profil.",
    },
    {
      q: "Wie lang sollte ein Text sein?",
      a: "So lang, wie die Antwort braucht. Google schreibt, dass es keine bevorzugte Wortzahl hat. Ein Text auf eine bestimmte Wortzahl hin ist laut Google ein Warnzeichen für suchmaschinenorientierte Inhalte.",
    },
    {
      q: "Darf ich für jeden Stadtteil eine eigene Seite anlegen?",
      a: "Nur wenn jede Seite eigene, nützliche Inhalte hat und Sie dort wirklich tätig sind. Fast gleiche Seiten, bei denen nur der Ortsname wechselt, nennt Google als Brückenseiten, Textblöcke mit Städtenamen als Keyword-Spam.",
    },
    {
      q: "Darf ich Texte mit KI schreiben?",
      a: "Google verbietet KI nicht grundsätzlich, wertet aber das massenhafte Erzeugen von Seiten ohne Mehrwert als Spam, unabhängig vom Werkzeug. Nutzen Sie KI für Entwürfe und ergänzen Sie Ihr eigenes Wissen, Ihre Fotos und Ihre Erfahrungen.",
    },
    {
      q: "Wie nutze ich Kundenbewertungen auf meiner Website?",
      a: "Mit Erlaubnis bei Namen und Fotos, mit einem Hinweis, woher die Bewertungen stammen und ob Sie sie prüfen. Sterne-Markup für Bewertungen über den eigenen Betrieb führt bei Google nicht zu Sternen in der Suche.",
    },
  ],
  sources: [
    { title: "Hilfreiche, zuverlässige und nutzerorientierte Inhalte erstellen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Startleitfaden zur Suchmaschinenoptimierung (SEO)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Beiträge in Ihrem Unternehmensprofil erstellen und verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7342169?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Strukturierte Daten für Rezensions-Snippets", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Richtlinien für Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Gesetz gegen den unlauteren Wettbewerb (UWG), § 5b Wesentliche Informationen", publisher: "Bundesministerium der Justiz, gesetze-im-internet.de", url: "https://www.gesetze-im-internet.de/uwg_2004/__5b.html" },
  ],
  related: [
    { slug: "lokale-landing-pages", title: "Lokale Landingpages" },
    { slug: "google-posts-ranking-faktor", title: "Google Posts als Rankingfaktor" },
    { slug: "saisonales-local-seo", title: "Saisonales Local SEO" },
    { slug: "local-link-building", title: "Local Link Building" },
  ],
  cta: {
    title: "Welche Inhalte fehlen Ihrer Website?",
    text: "Wir sehen uns Ihr Google-Profil und Ihre Website an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, mit denen Ihre Inhalte mehr Anfragen aus der Region bringen können. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
