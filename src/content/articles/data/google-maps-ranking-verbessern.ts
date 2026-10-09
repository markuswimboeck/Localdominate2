import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-ranking-verbessern",
  lang: "de",
  seoTitle: "Google-Maps-Ranking verbessern: Leitfaden für Betriebe",
  seoDescription:
    "Wie Google Maps lokale Treffer sortiert, wie Sie Ihr Ranking mit einem Messraster prüfen und welche Schritte im Profil, bei Bewertungen und Website wirken.",
  h1: "Google-Maps-Ranking verbessern: messen, verstehen, gezielt handeln",
  kicker: "Google Maps",
  lead:
    "Für Inhaber von Hotels, Praxen, Handwerksbetrieben und Geschäften in Deutschland, Österreich und der Schweiz, die in Google Maps weiter oben stehen wollen. Sie erfahren, wie Google die Reihenfolge festlegt, wie Sie Ihre Position ehrlich messen und welche Schritte tatsächlich etwas bewegen.",
  answer:
    "Google sortiert Treffer in Maps nach **Relevanz, Entfernung und Bekanntheit**, und eine bessere Position lässt sich laut Google nicht kaufen. Messen Sie zuerst mit einem Raster aus Punkten über Ihr Einzugsgebiet, wo Sie heute stehen. Verbessern Sie dann Kategorie, Leistungen und Daten im Profil, sammeln Sie laufend echte Bewertungen und stärken Sie Website und lokale Erwähnungen.",
  takeaways: [
    "Google nennt drei Faktoren: Relevanz, Entfernung und Bekanntheit. Gegen Bezahlung gibt es laut Google kein besseres lokales Ranking.",
    "Ein Blick auf das eigene Handy sagt wenig. Ein Raster aus Messpunkten über Ihr Einzugsgebiet zeigt, wo Sie gefunden werden und wo nicht.",
    "Den größten eigenen Hebel haben die Hauptkategorie, die eingetragenen Leistungen und vollständige, korrekte Profildaten.",
    "Echte, laufend neue Bewertungen und Links von lokalen Websites zählen laut Google zur Bekanntheit.",
    "Keywords im Firmennamen, virtuelle Adressen und gekaufte oder gefilterte Bewertungen verstoßen gegen Googles Richtlinien und gefährden das Profil.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-09",
  readingTime: 12,
  sections: [
    {
      id: "wie-google-sortiert",
      title: "Wie Google Maps die Reihenfolge festlegt",
      answer:
        "Google nennt in seiner Hilfe drei Faktoren: Relevanz, Entfernung und Bekanntheit. Eine bessere Position kann laut Google nicht eingefordert werden, auch nicht gegen Bezahlung.",
      blocks: [
        {
          t: "p",
          text: "Wer in Maps oder im Kartenblock der Suche nach „Zahnarzt“, „Pension Kitzbühel“ oder „Elektriker Notdienst“ sucht, bekommt eine Auswahl von Betrieben in einer bestimmten Reihenfolge. Diese Reihenfolge berechnet Google für jede Suche neu, abhängig davon, was gesucht wird und wo sich die suchende Person befindet.",
        },
        {
          t: "table",
          caption: "Die drei Faktoren nach Google und was Sie tun können",
          head: ["Faktor", "Was Google damit meint", "Was Sie tun können"],
          rows: [
            ["Relevanz", "Wie gut ein Unternehmensprofil zum Gesuchten passt", "Hauptkategorie, Leistungen, Beschreibung und Website so genau wie möglich auf Ihr Angebot ausrichten"],
            ["Entfernung", "Wie weit der Betrieb vom Suchenden entfernt ist; ohne geteilten Standort nutzt Google, was es über den Standort weiß", "Adresse und Kartenpunkt korrekt halten, bei Betrieben ohne Kundenverkehr ein ehrliches Einzugsgebiet angeben"],
            ["Bekanntheit", "Wie bekannt der Betrieb ist, unter anderem gemessen an Websites, die auf ihn verweisen, und an Rezensionen", "Echte Bewertungen sammeln, in lokalen Medien, Verbänden und bei Partnern erwähnt werden"],
          ],
        },
        {
          t: "p",
          text: "Daraus folgt eine unbequeme, aber nützliche Erkenntnis: Sie können nicht überall im Umkreis oben stehen. Ein Betrieb am Stadtrand wird für Suchende in der Innenstadt meist hinter näher gelegenen Wettbewerbern erscheinen. Ziel ist, im eigenen Einzugsgebiet für die richtigen Suchen so weit vorne zu stehen, wie es Ihr Angebot rechtfertigt.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Fachleute versuchen in jährlichen Umfragen, die Gewichtung einzelner Signale zu schätzen. Das sind Meinungen, keine Messungen von Google. Prozentangaben zu „Ranking-Faktoren“ sollten Sie deshalb nicht als Tatsache lesen. Wie Google die drei Faktoren zusammensetzt, ist nicht veröffentlicht.",
        },
      ],
    },
    {
      id: "ranking-messen",
      title: "Ranking richtig messen: das Raster über Ihr Einzugsgebiet",
      answer:
        "Weil die Entfernung zählt, sieht jede Person eine andere Reihenfolge. Aussagekräftig ist erst ein Raster aus Messpunkten über Ihr Einzugsgebiet, an denen Sie dieselbe Suche wiederholen und Ihre Position notieren.",
      blocks: [
        {
          t: "p",
          text: "Wenn Sie in Ihrem Betrieb „Physiotherapie“ suchen, stehen Sie vermutlich weit oben. Ein Patient drei Kilometer entfernt sieht womöglich eine ganz andere Liste. Eine Messung mit einem Raster (oft **Geo-Grid** oder Suchraster genannt) legt gleichmäßig verteilte Punkte über die Karte und prüft an jedem Punkt, auf welcher Position Ihr Betrieb für einen bestimmten Suchbegriff erscheint. Das Ergebnis ist eine Art Wärmekarte: Wo sind Sie stark, wo verschwinden Sie?",
        },
        {
          t: "h3",
          text: "Mit einem Werkzeug messen",
        },
        {
          t: "p",
          text: "Mehrere Anbieter bieten solche Raster-Messungen an, darunter BrightLocal, Local Falcon, Whitespark, Semrush, Places Scout und Localo. Sie wählen einen Suchbegriff, die Rastergröße (zum Beispiel 5 × 5 Punkte) und den Abstand zwischen den Punkten. Jeder Punkt ist eine eigene Suchanfrage, deshalb rechnen die meisten Werkzeuge nach Punkten oder Guthaben ab. Prüfen Sie Preise und Bedingungen direkt beim Anbieter.",
        },
        {
          t: "h3",
          text: "Von Hand messen",
        },
        {
          t: "p",
          text: "Für einen ersten Eindruck geht es auch ohne Werkzeug, es kostet nur Zeit. Wichtig ist, dass Sie jedes Mal gleich vorgehen.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Suchbegriffe festlegen",
              text: "Wählen Sie drei bis fünf Begriffe, die Kunden tatsächlich nutzen, etwa „Zahnarzt“, „Zahnreinigung“ und „Zahnarzt Notdienst“. Welche das sind, zeigen die Suchanfragen in den Leistungsdaten Ihres Profils.",
            },
            {
              title: "Punkte auf der Karte festlegen",
              text: "Legen Sie ein einfaches Raster über Ihr Einzugsgebiet, zum Beispiel neun Punkte: Ihr Standort, vier Punkte in mittlerer Entfernung und vier am Rand. Notieren Sie für jeden Punkt eine Adresse oder Koordinaten.",
            },
            {
              title: "Standort simulieren",
              text: "Öffnen Sie ein privates Browserfenster, ohne bei Google angemeldet zu sein. In den Entwicklertools von Chrome lässt sich unter „Sensors“ ein Standort einstellen. Rufen Sie dann Google Maps auf und suchen Sie den Begriff ohne Ortsangabe.",
            },
            {
              title: "Position notieren",
              text: "Zählen Sie, an welcher Stelle Ihr Betrieb erscheint, und tragen Sie die Zahl in eine Tabelle ein: Zeilen für die Punkte, Spalten für die Suchbegriffe. Anzeigen zählen Sie nicht mit.",
            },
            {
              title: "Regelmäßig wiederholen",
              text: "Messen Sie einmal im Monat, mit denselben Punkten und Begriffen und etwa zur selben Uhrzeit, möglichst während Ihrer Öffnungszeiten. Nur so sind die Ergebnisse vergleichbar.",
            },
          ],
        },
        {
          t: "h3",
          text: "Das Raster lesen",
        },
        {
          t: "table",
          caption: "Typische Muster und was sie nahelegen",
          head: ["Was Sie sehen", "Mögliche Ursache", "Wo Sie ansetzen"],
          rows: [
            ["Vorne in der Nähe, nach außen schwächer", "Normaler Einfluss der Entfernung", "Kein Fehler. Bekanntheit und Relevanz stärken, um den Kreis langsam zu vergrößern"],
            ["Schon am eigenen Standort weit hinten", "Profil passt schlecht zur Suche", "Hauptkategorie, Leistungen und Website-Inhalte prüfen"],
            ["Ein Begriff gut, ein verwandter schlecht", "Leistung fehlt im Profil oder auf der Website", "Leistung eintragen und eine eigene Seite dafür anlegen"],
            ["Ein Wettbewerber überall vor Ihnen", "Mehr Bekanntheit oder genauere Kategorie", "Profil des Wettbewerbers vergleichen: Kategorie, Bewertungen, Website, Erwähnungen"],
            ["Plötzlich überall verschwunden", "Profil gesperrt, geändert oder Daten widersprüchlich", "Profilstatus und letzte Änderungen prüfen"],
          ],
        },
        {
          t: "note",
          label: "Grenzen der Messung",
          text: "Ein Raster zeigt Positionen, keine Kunden. Ob aus Sichtbarkeit Anrufe, Routen und Buchungen werden, sehen Sie in den Leistungsdaten Ihres Profils und in Ihrem Anfrageeingang. Beides gehört zusammen.",
        },
      ],
    },
    {
      id: "relevanz",
      title: "Relevanz: Kategorie, Leistungen, Beschreibung",
      answer:
        "Die Hauptkategorie entscheidet mit, für welche Suchen Ihr Profil überhaupt in Frage kommt. Leistungen und Beschreibung ergänzen, was Sie konkret anbieten.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Hauptkategorie so genau wie möglich.** „Pension“ statt „Unterkunft“, „Kieferorthopäde“ statt „Arzt“. Google verlangt so wenige Kategorien wie möglich und keine Kategorien als Ersatz für Suchbegriffe. Mehr dazu im [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
            "**Weitere Kategorien nur, wenn sie zutreffen.** Eine Kategorie beschreibt, was Ihr Betrieb ist, nicht was er nebenbei hat.",
            "**Leistungen einzeln eintragen.** Jede Leistung, die Kunden gezielt suchen, gehört als eigener Eintrag ins Profil, mit kurzer, sachlicher Beschreibung.",
            "**Beschreibung sachlich halten.** Erklären Sie, was Sie anbieten und für wen, ohne Aufzählung von Suchbegriffen, ohne Preise und ohne Links.",
            "**Attribute pflegen,** soweit sie für Ihre Kategorie angeboten werden und zutreffen, etwa Barrierefreiheit oder Zahlungsarten.",
          ],
        },
        {
          t: "p",
          text: "Die Website verstärkt die Relevanz. Eine eigene Seite je wichtiger Leistung, mit Ort, Ablauf und den Fragen, die Kunden am Telefon stellen, gibt Google mehr Anhaltspunkte als eine Sammelseite „Leistungen“. Strukturierte Daten vom Typ LocalBusiness helfen beim Zuordnen, wie im Artikel [Schema Markup für Local SEO](/blog/schema-markup-local-seo) beschrieben.",
        },
      ],
    },
    {
      id: "grunddaten",
      title: "Vollständige und korrekte Grunddaten",
      answer:
        "Google schreibt, dass Unternehmen mit vollständigen und korrekten Informationen eher in lokalen Ergebnissen erscheinen. Auch ein bestätigtes Profil wird laut Google eher angezeigt.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Profil bestätigen",
              text: "Prüfen Sie zuerst, ob es bereits ein Profil für Ihren Betrieb gibt, und übernehmen Sie es, statt ein zweites anzulegen. Mit der Bestätigung zeigen Sie Google, dass Sie den Betrieb vertreten dürfen.",
            },
            {
              title: "Name wie im echten Leben",
              text: "Verwenden Sie den Namen, der auf Schild, Briefpapier und Website steht. Zusätze wie Orte, Leistungen oder Slogans sind laut Googles Richtlinien nicht erlaubt.",
            },
            {
              title: "Adresse oder Einzugsgebiet",
              text: "Mit Kundenverkehr vor Ort: die echte Adresse und ein korrekt gesetzter Kartenpunkt. Ohne Kundenverkehr: Adresse ausblenden und ein Einzugsgebiet angeben, das laut Google in der Regel nicht weiter als etwa zwei Autostunden reicht.",
            },
            {
              title: "Öffnungszeiten und Sonderzeiten",
              text: "Tragen Sie Feiertage, Saisonzeiten und Betriebsurlaub als Sonderöffnungszeiten ein. Für Hotels und Ferienbetriebe mit Saisonpause ist das besonders wichtig.",
            },
            {
              title: "Telefon und Website",
              text: "Eine Nummer, die während der Öffnungszeiten erreichbar ist, und ein Link auf die passende Seite Ihrer Website, bei mehreren Standorten auf die jeweilige Standortseite.",
            },
          ],
        },
        {
          t: "p",
          text: "Dieselben Angaben sollten auf Ihrer Website, im Impressum und in den wichtigsten Verzeichnissen gleich lauten. Wie Sie Abweichungen finden, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen: laufend, echt, beantwortet",
      answer:
        "Laut Google können mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern. Sie müssen echt sein, und Sie dürfen nicht nur zufriedene Kunden gezielt fragen.",
      blocks: [
        {
          t: "p",
          text: "Machen Sie die Bitte um eine Bewertung zu einem festen Schritt im Ablauf: nach dem Check-out, nach der Behandlung, bei der Übergabe der Rechnung. Ein direkter Link oder QR-Code senkt die Hürde. Fragen Sie alle Kunden, nicht nur die, von denen Sie Lob erwarten.",
        },
        {
          t: "table",
          caption: "Was Googles Richtlinien für Rezensionen erlauben",
          head: ["Erlaubt", "Nicht erlaubt"],
          rows: [
            ["Alle Kunden um eine ehrliche Bewertung bitten", "Nur zufriedene Kunden gezielt fragen oder negative Bewertungen verhindern"],
            ["Link in Bestätigungsmail, auf Rechnung oder als QR-Code am Empfang", "Geld, Rabatte oder Gratisleistungen für eine Bewertung"],
            ["Auf jede Bewertung sachlich antworten", "Bewertungen von Mitarbeitenden oder über mehrere eigene Konten"],
          ],
        },
        {
          t: "p",
          text: "Antworten auf Bewertungen zeigen laut Google, dass Sie das Feedback schätzen, und helfen, sich von Wettbewerbern abzuheben. Ob Antworten selbst das Ranking beeinflussen, sagt Google nicht. Für Menschen, die zwischen drei Einträgen wählen, zählen sie in jedem Fall. Praktische Abläufe finden Sie in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen) und [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
        },
      ],
    },
    {
      id: "bekanntheit",
      title: "Bekanntheit: Website, Links und lokale Erwähnungen",
      answer:
        "Google nennt als Teil der Bekanntheit ausdrücklich die Anzahl der Websites, die auf Ihr Unternehmen verweisen. Lokale Links mit echtem Bezug sind dafür wertvoller als viele beliebige.",
      blocks: [
        {
          t: "ul",
          items: [
            "Eintrag mit Link bei Kammer, Innung, Tourismusverband, Ärztenetz oder Werbegemeinschaft.",
            "Berichte in der Lokalzeitung zu echten Anlässen: Eröffnung, Jubiläum, neue Leistung, Ausbildung.",
            "Partner, Lieferanten und Veranstalter, die Sie auf ihrer Website nennen.",
            "Sponsoring im Verein oder bei lokalen Veranstaltungen, wenn es zu Ihnen passt.",
          ],
        },
        {
          t: "p",
          text: "Gekaufte Linkpakete und Einträge in Verzeichnissen ohne Bezug zu Ihrer Branche oder Region bringen lokal wenig und können schaden. Mehr Ideen mit Augenmaß im Artikel [Lokales Linkbuilding](/blog/local-link-building).",
        },
      ],
    },
    {
      id: "fotos-beitraege",
      title: "Fotos und Beiträge: was sie leisten und was nicht",
      answer:
        "Fotos und Beiträge helfen Kunden bei der Entscheidung. Dass sie das Ranking direkt verbessern, bestätigt Google nicht, deshalb sollten Sie sie als Werbemittel sehen, nicht als Ranking-Hebel.",
      blocks: [
        {
          t: "p",
          text: "Google beschreibt Fotos und Videos als Möglichkeit, Kunden zu zeigen, was Sie anbieten. Beiträge (Aktuelles, Angebote, Veranstaltungen) erscheinen in der Suche und in Maps. Eine Aussage, dass regelmäßige Fotos oder Beiträge die Position verbessern, findet sich in Googles Hilfe nicht. Viele ältere Ratgeber behaupten das, oft mit Zahlen ohne nachprüfbare Quelle.",
        },
        {
          t: "ul",
          items: [
            "**Fotos:** eigene, aktuelle Bilder von außen, Eingang, Räumen, Team und typischer Arbeit. Ein Gast soll den Eingang wiedererkennen. Tipps im Artikel [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
            "**Beiträge:** sinnvoll für Saisonangebote, Veranstaltungen oder geänderte Abläufe. Halten Sie sie kurz, sachlich und aktuell.",
          ],
        },
        {
          t: "note",
          label: "Veraltete Ratschläge",
          text: "Die Chat-Funktion im Unternehmensprofil gibt es seit dem 31. Juli 2024 nicht mehr. Die Funktion „Fragen und Antworten“ hat Google Ende 2025 eingestellt und durch KI-Antworten ersetzt, die sich auf Ihre Profilangaben und Rezensionen stützen. Anleitungen, die Ihnen noch beides empfehlen, sind nicht aktuell.",
        },
      ],
    },
    {
      id: "fehler",
      title: "Was Ihrem Ranking schadet",
      answer:
        "Die meisten Abstürze und Sperrungen gehen auf Abkürzungen zurück, die gegen Googles Richtlinien verstoßen. Sie wirken kurzfristig verlockend und gefährden das ganze Profil.",
      blocks: [
        {
          t: "table",
          caption: "Häufige Fehler und ihre Folgen",
          head: ["Fehler", "Warum er schadet"],
          rows: [
            ["Ort oder Leistung im Firmennamen („Hotel Alpenblick Wellness Zell am See“, wenn das Haus nur „Hotel Alpenblick“ heißt)", "Verstößt gegen die Namensrichtlinie, kann gemeldet und korrigiert werden, das Profil kann gesperrt werden"],
            ["Virtuelles Büro oder Briefkastenadresse, um näher an der Stadtmitte zu sein", "Laut Google nicht zulässig, häufiger Grund für eine Sperrung"],
            ["Zweites Profil für denselben Standort", "Google erlaubt ein Profil je Standort, Duplikate werden zusammengeführt oder entfernt"],
            ["Gekaufte, belohnte oder gefilterte Bewertungen", "Werden als manipuliert entfernt, das Profil kann eingeschränkt werden"],
            ["Viele Kategorien „zur Sicherheit“", "Verwässert die Relevanz und widerspricht Googles Vorgabe, so wenige wie möglich zu wählen"],
            ["Ein Anbieter garantiert „Platz 1 in Maps“", "Google schließt bezahlte Verbesserungen des lokalen Rankings aus"],
          ],
        },
        {
          t: "p",
          text: "Ist Ihr Profil plötzlich nicht mehr zu finden, hilft der Artikel [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden) bei der Ursachensuche.",
        },
      ],
    },
    {
      id: "plan",
      title: "Ein Plan für die nächsten drei Monate",
      answer:
        "Messen Sie zuerst, korrigieren Sie dann Profil und Daten, und bauen Sie danach Bewertungen und Bekanntheit als laufende Abläufe auf. Nach jedem Monat vergleichen Sie Raster und Leistungsdaten.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Woche 1: Ausgangslage messen", text: "Raster für drei bis fünf Suchbegriffe anlegen, Leistungsdaten des Profils notieren, zwei bis drei Wettbewerber festhalten, die im Raster vor Ihnen stehen." },
            { title: "Woche 1 bis 2: Profil korrigieren", text: "Name, Adresse oder Einzugsgebiet, Kartenpunkt, Hauptkategorie, Leistungen, Öffnungs- und Sonderzeiten." },
            { title: "Woche 2 bis 4: Daten abgleichen", text: "Website, Impressum und die wichtigsten Verzeichnisse auf denselben Stand bringen." },
            { title: "Ab Woche 3: Leistungsseiten", text: "Für die Suchbegriffe, bei denen das Raster schwach ist, eine eigene Seite auf der Website anlegen oder verbessern." },
            { title: "Ab Woche 3: Bewertungen als Ablauf", text: "Eine feste Stelle im Kundenkontakt, an der Sie alle Kunden um eine Bewertung bitten, und Antworten innerhalb weniger Tage." },
            { title: "Laufend: lokale Erwähnungen", text: "Verband, Kammer, Partner, Presse: dort, wo Sie ohnehin aktiv sind." },
            { title: "Monatlich: vergleichen", text: "Raster mit denselben Punkten wiederholen und neben Anrufe, Routen, Website-Klicks und Anfragen legen." },
          ],
        },
        {
          t: "p",
          text: "Rechnen Sie mit Wochen bis Monaten, bis sich Veränderungen stabil im Raster zeigen. Wie schnell es geht, hängt vom Wettbewerb in Ihrem Ort und Ihrer Branche ab. Wenn Sie Hilfe beim ersten Schritt wollen, prüfen wir Ihr Profil im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert es, bis sich mein Maps-Ranking verbessert?",
      a: "Korrekturen an den Profildaten sind oft nach Googles Prüfung sichtbar. Bis sich Positionen über Ihr Einzugsgebiet stabil verändern, vergehen meist Wochen bis Monate, je nach Wettbewerb. Feste Zeiträume oder Plätze kann niemand seriös zusagen.",
    },
    {
      q: "Warum sehe ich mich auf dem Handy oben, meine Kunden aber nicht?",
      a: "Google berücksichtigt die Entfernung zwischen Suchendem und Betrieb. Sie suchen meist aus dem eigenen Betrieb oder dessen Nähe. Ein Raster aus Messpunkten über Ihr Einzugsgebiet zeigt, was Kunden an anderen Orten sehen.",
    },
    {
      q: "Kann ich in mehreren Städten in Maps erscheinen?",
      a: "Mit Kundenverkehr nur dort, wo Sie einen echten Standort haben, mit je einem Profil. Betriebe ohne Kundenverkehr können ein Einzugsgebiet angeben. Virtuelle Büros sind nicht zulässig. Mehr im Artikel [Multi-Location SEO](/blog/multi-location-seo).",
    },
    {
      q: "Bringen Google-Anzeigen ein besseres Maps-Ranking?",
      a: "Nein. Anzeigen erscheinen getrennt und gekennzeichnet, und Google schreibt, dass ein besseres lokales Ranking auch gegen Bezahlung nicht eingefordert werden kann. Anzeigen können sinnvoll sein, ersetzen aber kein gepflegtes Profil.",
    },
    {
      q: "Helfen regelmäßige Beiträge und Fotos beim Ranking?",
      a: "Google bestätigt das nicht. Fotos und Beiträge helfen Kunden bei der Entscheidung und lohnen sich deshalb. Den Platz von Kategorie, korrekten Daten und echten Bewertungen nehmen sie nicht ein.",
    },
    {
      q: "Was kostet es, das Profil professionell zu verbessern?",
      a: "Selbst gemacht kostet es nur Zeit. Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Umfang und Preis stehen vor dem Start fest, eine bestimmte Position versprechen wir nicht. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Beiträge in Ihrem Unternehmensprofil erstellen und verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7342169?hl=de" },
    { title: "Änderungen an der Chatfunktion und Anrufliste in Google Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14919056?hl=de" },
    { title: "Google quietly kills Q&A for an AI button most won't use", publisher: "PPC Land", url: "https://ppc.land/google-quietly-kills-q-a-for-an-ai-button-most-wont-use/" },
    { title: "Geo Grid Ranking Tools Compared", publisher: "BrightLocal", url: "https://www.brightlocal.com/resources/geo-grid-ranking-tool-comparison-guide/" },
  ],
  related: [
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-bewertungen-bekommen", title: "Mehr Google-Bewertungen bekommen" },
    { slug: "google-business-kategorien-guide", title: "Die richtige Kategorie im Unternehmensprofil" },
  ],
  cta: {
    title: "Wo stehen Sie in Ihrem Einzugsgebiet?",
    text: "Wir sehen uns Ihr Google-Profil, Ihre Kategorie und Ihre Sichtbarkeit in Maps an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Ihr Ranking am ehesten verbessern. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
