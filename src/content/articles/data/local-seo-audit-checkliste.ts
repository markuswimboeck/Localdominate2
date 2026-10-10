import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-audit-checkliste",
  lang: "de",
  seoTitle: "Local SEO Audit: Die Checkliste für lokale Betriebe",
  seoDescription:
    "Local SEO Audit in ein bis zwei Stunden: Google-Profil, Website, Verzeichnisse, Bewertungen, KI-Sichtbarkeit und Messung prüfen, mit klaren nächsten Schritten.",
  h1: "Local SEO Audit: Die Checkliste zum Selbstprüfen",
  kicker: "Strategie",
  lead:
    "Für Inhaber und Mitarbeitende, die selbst prüfen wollen, wo ihr Betrieb in der lokalen Suche steht. Sie gehen sechs Bereiche durch, jeweils mit der Frage, was Sie prüfen, woran Sie ein Problem erkennen und was Sie dann tun. Für die Details verlinken wir auf die passenden Leitfäden.",
  answer:
    "Ein Local SEO Audit ist eine geordnete Bestandsaufnahme Ihrer lokalen Sichtbarkeit. Sie prüfen der Reihe nach das **Google-Unternehmensprofil**, die **Website**, Ihre **Einträge in Verzeichnissen**, den **Umgang mit Bewertungen**, die Grundlagen für **KI-Antworten** und Ihre **Messung**. Mit dieser Checkliste schaffen Sie das in etwa ein bis zwei Stunden und wissen danach, welche drei Punkte Sie zuerst angehen.",
  takeaways: [
    "Prüfen Sie in fester Reihenfolge: Profil, Website, Verzeichnisse, Bewertungen, KI-Grundlagen, Messung. Spätere Bereiche bauen auf den früheren auf.",
    "Notieren Sie zu jedem Punkt nur drei Dinge: in Ordnung, Problem oder unklar. Die Erklärung steht im verlinkten Leitfaden.",
    "Die häufigsten Fundstellen sind Widersprüche: andere Öffnungszeiten, alte Telefonnummern, ein zweites Profil für denselben Standort.",
    "Ohne markierten Profil-Link und Search Console sehen Sie nicht, ob Ihre Arbeit Anfragen bringt.",
    "Am Ende zählt die Reihenfolge: zuerst, was Kunden falsch informiert oder gegen Googles Richtlinien verstößt, dann der Rest.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "vorbereitung",
      title: "Vorbereitung: was Sie für das Audit brauchen",
      answer:
        "Sie brauchen Zugang zum Google-Unternehmensprofil, zur Google Search Console und zu Ihrer Web-Analyse, ein Smartphone und eine einfache Tabelle für Notizen. Legen Sie vorher Ihre Stammdaten fest, damit Sie jede Fundstelle damit vergleichen können. Ohne diesen Maßstab diskutieren Sie bei jedem Eintrag neu, welche Schreibweise stimmt.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Stammdaten aufschreiben",
              text: "Name wie auf dem Schild, Adresse in einer Schreibweise, Hauptnummer, Website-Adresse, Öffnungszeiten. Diese Zeile ist der Maßstab für alle weiteren Prüfungen. Wie Sie sie festlegen, steht in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
            },
            {
              title: "Zugänge klären",
              text: "Prüfen Sie, wer Inhaber des Unternehmensprofils ist und ob Sie die Search Console und Google Analytics öffnen können. Fehlt ein Zugang, ist das bereits der erste Befund.",
            },
            {
              title: "Notizblatt anlegen",
              text: "Eine Tabelle mit den Spalten Bereich, Punkt, Status (in Ordnung, Problem, unklar) und nächster Schritt reicht. Mehr Struktur brauchen Sie für eine Selbstprüfung nicht.",
            },
            {
              title: "Zeit blocken",
              text: "Planen Sie einen ungestörten Termin ein. Die meisten Punkte dauern wenige Minuten. Korrigieren Sie während des Audits nichts Großes, sondern notieren Sie es, damit Sie am Ende sinnvoll priorisieren.",
            },
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Eine Prüfung mit Punktesystem wirkt genau, misst aber meist nur, wie viele Kästchen angehakt sind. Für die Entscheidung, was Sie zuerst tun, ist die Frage wichtiger, ob ein Fehler Kunden falsch informiert oder gegen Googles Richtlinien verstößt.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Bereich 1: Das Google-Unternehmensprofil",
      answer:
        "Das Profil ist das, was Menschen in Maps und im Kartenblock zuerst sehen. Prüfen Sie Name, Kategorien, Adresse, Öffnungszeiten, Fotos, Bewertungsantworten und ob es Ihren Standort doppelt gibt. Fehler hier wirken sofort auf Kunden, denn sie rufen die falsche Nummer an oder stehen vor verschlossener Tür.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Unternehmensprofil",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Inhaberschaft und Bestätigung",
              "Sie können das Profil nicht bearbeiten, oder ein ehemaliger Mitarbeiter oder eine Agentur ist alleiniger Inhaber",
              "Zugriff regeln, wie in [Unternehmensprofil optimieren](/blog/google-my-business-optimieren) beschrieben",
            ],
            [
              "Name",
              "Der Name enthält Orte, Leistungen oder Slogans, die nicht auf Ihrem Schild stehen",
              "Auf den echten Namen kürzen. Google erlaubt keine zusätzlichen Angaben im Namen",
            ],
            [
              "Hauptkategorie und weitere Kategorien",
              "Eine allgemeine Hauptkategorie oder eine lange Liste, die einzelne Leistungen aufzählt",
              "Die genaueste Hauptkategorie wählen und so wenige weitere wie möglich, siehe [Kategorien-Leitfaden](/blog/google-business-kategorien-guide)",
            ],
            [
              "Adresse oder Einzugsgebiet",
              "Postfach, Briefkasten- oder virtuelle Adresse ohne Präsenz, oder sichtbare Privatadresse bei einem Betrieb ohne Kundenverkehr",
              "Echte Adresse angeben oder Adresse ausblenden und Einzugsgebiet wählen, siehe [Local SEO für Handwerker](/blog/local-seo-handwerker)",
            ],
            [
              "Öffnungszeiten und Sonderzeiten",
              "Feiertage fehlen, Zeiten weichen von der Website ab",
              "Zeiten angleichen und Sonderzeiten eintragen, siehe [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage)",
            ],
            [
              "Telefon und Website-Link",
              "Alte Nummer, Link auf eine nicht mehr vorhandene Seite oder nur auf die Startseite, obwohl es eine passende Standortseite gibt",
              "Hauptnummer eintragen, Link auf die passende Seite setzen und markieren (siehe Bereich 6)",
            ],
            [
              "Leistungen und Beschreibung",
              "Leistungen fehlen, Beschreibung ist leer oder voller Werbesprüche",
              "Leistungen einzeln eintragen, Beschreibung sachlich formulieren",
            ],
            [
              "Fotos",
              "Nur Logo oder Bilddatenbank, keine Außenansicht, alte Räume",
              "Echte, aktuelle Fotos ergänzen, siehe [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren)",
            ],
            [
              "Doppelte Profile",
              "Bei der Suche nach Ihrem Namen erscheint ein zweiter Eintrag für denselben Standort, etwa unter alter Adresse",
              "Duplikat melden oder zusammenführen lassen, siehe [NAP-Konsistenz](/blog/nap-konsistenz-local-seo#duplikate). Kein neues Profil anlegen",
            ],
          ],
        },
        {
          t: "p",
          text: "Google schreibt in den Richtlinien, dass es nur ein Profil pro Unternehmen und Standort geben soll. Haben Sie mehrere Standorte, prüfen Sie jedes Profil einzeln nach dieser Tabelle. Hinweise dazu stehen in [Mehrere Standorte](/blog/gbp-mehrere-standorte).",
        },
        {
          t: "note",
          label: "Branchenbesonderheit",
          text: "Hotels geben laut Googles Richtlinien keine Öffnungszeiten an. Saisonbetriebe können sich in der Nebensaison als vorübergehend geschlossen kennzeichnen, statt das Profil zu löschen.",
        },
      ],
    },
    {
      id: "website-inhalte",
      title: "Bereich 2: Inhalte und Firmendaten auf der Website",
      answer:
        "Die Website muss Google und Menschen klar sagen, was Sie anbieten und wo. Prüfen Sie, ob jede wichtige Leistung eine eigene Seite hat, ob Name, Adresse und Telefon überall gleich stehen und ob strukturierte Daten vom Typ LocalBusiness vorhanden sind.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Website-Inhalte",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Eine Seite je Leistung",
              "Alle Leistungen stehen auf einer Sammelseite oder nur als Stichworte",
              "Für jede wichtige Leistung eine eigene Seite mit Ort, Ablauf und typischen Fragen, siehe [Local SEO Keywords finden](/blog/local-seo-keywords-finden#keyword-map)",
            ],
            [
              "Seitentitel und Überschrift",
              "Titel wie „Startseite“ oder „Leistungen“ ohne Leistung und Ort",
              "Leistung und Ort in Titel und Hauptüberschrift, ohne Städtelisten",
            ],
            [
              "Städteseiten",
              "Viele fast gleiche Seiten, bei denen nur der Ortsname wechselt",
              "Zusammenlegen oder mit echtem Inhalt je Ort füllen, siehe [Keine Städteseiten auf Vorrat](/blog/local-seo-handwerker#leistungsseiten)",
            ],
            [
              "Name, Adresse, Telefon",
              "Abweichende Schreibweisen in Fußzeile, Kontakt, Impressum und Profil",
              "Alle Stellen auf Ihre Stammdaten bringen",
            ],
            [
              "Strukturierte Daten",
              "Kein LocalBusiness-Markup, oder es enthält andere Daten als das Profil",
              "Markup mit dem genauesten Untertyp ergänzen und mit dem Test für Rich-Suchergebnisse prüfen, siehe [Schema Markup für Local SEO](/blog/schema-markup-local-seo)",
            ],
            [
              "Wichtige Angaben als Text",
              "Preise ab, Einzugsgebiet oder Öffnungszeiten stehen nur in Bildern oder PDFs",
              "Diese Angaben als normalen Text auf die Seite stellen",
            ],
          ],
        },
        {
          t: "p",
          text: "Für strukturierte Daten nennt Google zwei Pflichtangaben: den Namen und die Adresse des Betriebs. Empfohlen sind unter anderem Telefon, Website, Öffnungszeiten und Koordinaten. Wichtiger als Vollständigkeit ist, dass die Werte mit dem Profil übereinstimmen.",
        },
      ],
    },
    {
      id: "website-technik",
      title: "Bereich 3: Technik, Mobilansicht und Indexierung",
      answer:
        "Lokale Suchen passieren oft auf dem Handy. Prüfen Sie, ob Ihre Seiten mobil gut bedienbar sind, ob sie die Grenzwerte der Core Web Vitals einhalten und ob Google Ihre wichtigen Seiten überhaupt indexiert hat. Alle drei Prüfungen gehen mit kostenlosen Google-Werkzeugen.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Technik",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Mobilansicht",
              "Auf dem Handy müssen Sie zoomen, Telefonnummer und Route sind nicht mit einem Tipp erreichbar",
              "Kontakt und Route oben sichtbar platzieren, siehe [Mobile Local SEO](/blog/mobile-local-seo)",
            ],
            [
              "Core Web Vitals",
              "Bericht in der Search Console zeigt Seiten als „Schlecht“ oder „Optimierung erforderlich“",
              "Ursachen mit PageSpeed Insights eingrenzen, siehe [Core Web Vitals für Local SEO](/blog/core-web-vitals-local-seo)",
            ],
            [
              "Indexierung",
              "Leistungs- oder Standortseiten stehen im Bericht „Seitenindexierung“ unter „Nicht indexiert“",
              "Grund im Bericht lesen, die URL mit dem URL-Prüftool testen und nach der Korrektur die Indexierung beantragen",
            ],
            [
              "Ungewollter Ausschluss",
              "Grund „URL als ‚noindex‘ markiert“ bei einer Seite, die gefunden werden soll",
              "Das noindex-Tag entfernen lassen",
            ],
          ],
        },
        {
          t: "table",
          caption: "Grenzwerte für „gut“ bei den Core Web Vitals nach Google",
          head: ["Messwert", "Was er misst", "Gut, wenn"],
          rows: [
            ["Largest Contentful Paint (LCP)", "Wie schnell der Hauptinhalt lädt", "innerhalb von 2,5 Sekunden"],
            ["Interaction to Next Paint (INP)", "Wie schnell die Seite auf Tippen und Klicken reagiert", "unter 200 Millisekunden"],
            ["Cumulative Layout Shift (CLS)", "Wie stark sich der Inhalt beim Laden verschiebt", "unter 0,1"],
          ],
        },
        {
          t: "note",
          label: "Nicht verwechseln",
          text: "„Gecrawlt, zurzeit nicht indexiert“ ist laut Google nicht immer ein Fehler, und Sie müssen die URL dafür nicht erneut einreichen. Kritisch wird es erst, wenn genau Ihre wichtigen Leistungsseiten dauerhaft fehlen. Dann lohnt ein Blick auf Inhalt und interne Verlinkung.",
        },
      ],
    },
    {
      id: "verzeichnisse",
      title: "Bereich 4: Verzeichnisse und Plattformen",
      answer:
        "Prüfen Sie, ob Ihr Betrieb in den wichtigsten Verzeichnissen Ihres Landes und Ihrer Branche mit denselben Daten steht wie im Profil. Es geht um richtige Einträge, nicht um viele. Ein alter Eintrag mit falscher Nummer kostet mehr als ein fehlender.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Verzeichnisse",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Allgemeine Verzeichnisse im Land",
              "Einträge mit alter Adresse, alter Nummer oder anderem Namen",
              "Einträge übernehmen und korrigieren, siehe [Verzeichnisse korrigieren](/blog/nap-konsistenz-local-seo#verzeichnisse-korrigieren)",
            ],
            [
              "Apple und Bing",
              "Kein gepflegter Eintrag in Apple Business (früher Apple Business Connect) oder Bing Places",
              "Einträge anlegen oder übernehmen, mit denselben Stammdaten, siehe [Apple und Bing](/blog/lokale-suchmaschinenoptimierung-2026#apple-und-bing)",
            ],
            [
              "Branchenportale",
              "Ihr Betrieb fehlt auf dem Portal, das Ihre Kunden tatsächlich nutzen, oder steht dort doppelt",
              "Den einen richtigen Eintrag pflegen, Dubletten beim Portal melden",
            ],
            [
              "Alte Daten nach Umzug oder Namenswechsel",
              "Suche nach alter Adresse oder alter Nummer findet noch Treffer",
              "Treffer abarbeiten, siehe [Umzug, neuer Name, neue Nummer](/blog/nap-konsistenz-local-seo#umzug-name-nummer)",
            ],
          ],
        },
        {
          t: "p",
          text: "Eine schnelle Methode: Suchen Sie bei Google nach Ihrer alten Telefonnummer in Anführungszeichen und danach nach Ihrem Namen mit dem Ort. Jeder Treffer mit abweichenden Daten kommt auf die Liste. Welche Verzeichnisse in der Schweiz zählen, steht in [Local SEO Schweiz](/blog/local-seo-schweiz). Eine Auswahl nach Ländern finden Sie in der [Citation-Strategie](/blog/citation-strategie-verzeichnisse).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bereich 5: Bewertungen als fester Ablauf",
      answer:
        "Prüfen Sie nicht nur den Durchschnitt, sondern den Ablauf dahinter: Kommen regelmäßig neue Bewertungen, beantworten Sie alle, und fragen Sie Kunden so, wie Google es erlaubt. Ohne festen Ablauf bleiben Bewertungen dem Zufall überlassen, und eine einzelne kritische Bewertung prägt dann lange das Bild.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Bewertungen",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Regelmäßigkeit",
              "Die letzte neue Bewertung ist Monate alt",
              "Eine feste Stelle im Kundenkontakt bestimmen, an der Sie um eine Bewertung bitten",
            ],
            [
              "Antworten",
              "Bewertungen, besonders kritische, sind unbeantwortet",
              "Sachlich antworten, ohne persönliche Daten, siehe [Negative Bewertungen](/blog/negative-google-bewertungen)",
            ],
            [
              "Bewertungslink",
              "Kunden müssen Ihr Profil erst suchen",
              "Direkten Link oder QR-Code erstellen, siehe [Bewertungslink erstellen](/blog/google-bewertungen-bekommen#bewertungslink)",
            ],
            [
              "Wie Sie fragen",
              "Rabatt oder Geschenk für eine Bewertung, nur zufriedene Kunden werden gefragt, Mitarbeitende bewerten selbst",
              "Sofort einstellen. Das verstößt gegen Googles Richtlinien für Rezensionen",
            ],
          ],
        },
        {
          t: "p",
          text: "Google erlaubt, Kunden um eine Bewertung ihrer echten Erfahrung zu bitten. Nicht erlaubt sind Anreize wie Geld, Rabatte oder Gratisprodukte, gezieltes Bitten nur um positive Bewertungen und Bewertungen von Personen mit Interessenkonflikt, etwa Mitarbeitenden. Einen vollständigen Ablauf finden Sie in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "ki-sichtbarkeit",
      title: "Bereich 6: Grundlagen für KI-Antworten",
      answer:
        "KI-Übersichten und Assistenten wie ChatGPT stützen sich auf Ihr Profil, Ihre Website und Erwähnungen im Netz. Prüfen Sie, ob Ihre Kernfakten überall gleich sind und ob Ihre robots.txt die Crawler zulässt, über die Sie in KI-Suchen erscheinen können. Beides prüfen Sie in wenigen Minuten ohne Fachwissen.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste KI-Grundlagen",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Kernfakten",
              "Öffnungszeiten, Leistungen oder Einzugsgebiet unterscheiden sich zwischen Website, Profil und Verzeichnissen",
              "Eine Quelle der Wahrheit festlegen und alle Stellen angleichen",
            ],
            [
              "Was KI-Assistenten sagen",
              "Fragen Sie ChatGPT, Gemini oder Perplexity nach Ihrem Betrieb. Die Antwort nennt falsche Zeiten oder Leistungen",
              "Die Quelle der falschen Angabe suchen und dort korrigieren, siehe [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)",
            ],
            [
              "Crawler-Zugang",
              "Ihre robots.txt (ihre-website.de/robots.txt) sperrt alle Bots oder ausdrücklich OAI-SearchBot",
              "Freigabe für Such-Crawler prüfen, siehe [KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026)",
            ],
            [
              "Antworten auf Kundenfragen",
              "Häufige Telefonfragen werden auf der Website nirgends beantwortet",
              "Die Fragen auf den passenden Seiten mit einem klaren ersten Satz beantworten",
            ],
          ],
        },
        {
          t: "p",
          text: "OpenAI trennt seine Crawler: OAI-SearchBot ist für die Suche in ChatGPT zuständig, GPTBot für das Training von Modellen. Laut OpenAI erscheinen Websites, die OAI-SearchBot aussperren, nicht in den Suchantworten von ChatGPT. Sie können das Training ablehnen und die Suche trotzdem zulassen. Was sich durch KI in der lokalen Suche verändert hat, beschreibt [Lokale Suchmaschinenoptimierung 2026](/blog/lokale-suchmaschinenoptimierung-2026).",
        },
      ],
    },
    {
      id: "messung",
      title: "Bereich 7: Messung einrichten",
      answer:
        "Ein Audit ohne Messung zeigt nur den Ist-Zustand. Prüfen Sie, ob der Website-Link im Profil einen UTM-Parameter trägt, ob die Search Console eingerichtet ist und ob Google Analytics 4 Anfragen als Ereignis erfasst. Erst dann sehen Sie, was Ihre Arbeit an Anrufen und Anfragen bringt.",
      blocks: [
        {
          t: "table",
          caption: "Checkliste Messung",
          head: ["Was prüfen", "Woran Sie ein Problem erkennen", "Was tun"],
          rows: [
            [
              "Markierter Profil-Link",
              "Besuche aus dem Profil tauchen in Google Analytics nur als normale Google-Suche auf",
              "Den Website-Link im Profil mit utm_source, utm_medium und utm_campaign versehen",
            ],
            [
              "Leistungsdaten im Profil",
              "Niemand sieht sich Anrufe, Routen, Website-Klicks und Suchbegriffe an",
              "Einmal im Monat ansehen und notieren",
            ],
            [
              "Search Console",
              "Keine Property für Ihre Domain oder kein Zugriff",
              "Property anlegen und bestätigen, Berichte Leistung und Seitenindexierung regelmäßig prüfen",
            ],
            [
              "Google Analytics 4",
              "Kontaktformular, Klick auf die Telefonnummer oder Buchung werden nicht erfasst",
              "Diese Handlungen als wichtige Ereignisse einrichten",
            ],
          ],
        },
        {
          t: "p",
          text: "Ein markierter Link sieht zum Beispiel so aus: ihre-website.de/?utm_source=google&utm_medium=organic&utm_campaign=unternehmensprofil. Google nennt utm_source, utm_medium und utm_campaign als Angaben, die immer gesetzt sein müssen. In Google Analytics finden Sie die Besuche dann unter Akquisition im Bericht zu den Zugriffen, nach Sitzungsquelle und Kampagne getrennt. Welche Kennzahlen sich lohnen, beschreibt [Local SEO Tracking und KPIs](/blog/local-seo-tracking-kpis).",
        },
      ],
    },
    {
      id: "priorisieren",
      title: "Auswerten: was Sie zuerst angehen",
      answer:
        "Sortieren Sie Ihre Funde in drei Gruppen: Fehler, die Kunden falsch informieren oder gegen Richtlinien verstoßen, Lücken im Fundament und Verbesserungen. Arbeiten Sie die Gruppen in dieser Reihenfolge ab und nehmen Sie sich höchstens drei Punkte auf einmal vor. So bleibt jede Änderung nachvollziehbar.",
      blocks: [
        {
          t: "table",
          caption: "Reihenfolge nach Wirkung und Risiko",
          head: ["Gruppe", "Typische Funde", "Wann"],
          rows: [
            [
              "1. Sofort",
              "Falsche Zeiten oder Nummer, Keywords im Namen, doppeltes Profil, Anreize für Bewertungen, wichtige Seiten mit noindex",
              "Diese Woche",
            ],
            [
              "2. Fundament",
              "Ungenaue Kategorie, fehlende Leistungsseiten, abweichende Verzeichnisdaten, fehlende Messung",
              "In den nächsten vier Wochen",
            ],
            [
              "3. Verbesserung",
              "Fotos ergänzen, strukturierte Daten verfeinern, Ladezeit verbessern, Antworten auf Kundenfragen schreiben",
              "Laufend, nach Aufwand",
            ],
          ],
        },
        {
          t: "p",
          text: "Wenn Sie wissen wollen, wie sich die Arbeit auf Ihre Sichtbarkeit im Einzugsgebiet auswirkt, messen Sie vorher und nachher mit dem Raster aus [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern#ranking-messen). Eine Übersicht über alle Hebel bietet der [Local SEO Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
    {
      id: "rhythmus",
      title: "Wie oft Sie das Audit wiederholen",
      answer:
        "Gehen Sie die vollständige Checkliste etwa alle drei bis sechs Monate durch und zusätzlich nach jedem Umzug, Namens- oder Nummernwechsel, Relaunch der Website oder neuen Standort. Profil, Bewertungen und Leistungsdaten sehen Sie sich besser monatlich an, weil sich dort am schnellsten etwas ändert.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Monatlich:** neue Bewertungen beantworten, Leistungsdaten des Profils und Search-Console-Leistung notieren, Sonderöffnungszeiten für den kommenden Monat eintragen.",
            "**Vierteljährlich bis halbjährlich:** die ganze Checkliste, einschließlich Verzeichnisse und KI-Antworten.",
            "**Anlassbezogen:** nach Umzug, neuem Namen, neuer Nummer, neuer Website oder wenn das Profil plötzlich nicht mehr erscheint.",
          ],
        },
        {
          t: "p",
          text: "Branchenbeispiele, worauf es bei der Prüfung jeweils besonders ankommt, finden Sie in [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants), [Local SEO für Arztpraxen](/blog/local-seo-aerzte-praxen) und [Local SEO für Handwerker](/blog/local-seo-handwerker). Wer ohne Budget startet, findet die passenden Werkzeuge in [Kostenloses SEO](/blog/kostenloses-seo-guide).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert ein Local SEO Audit?",
      a: "Mit dieser Checkliste und vorhandenen Zugängen schaffen Sie einen Standort in etwa ein bis zwei Stunden. Mehrere Standorte, viele Verzeichniseinträge oder fehlende Zugänge verlängern die Prüfung. Die Korrekturen selbst planen Sie danach getrennt ein.",
    },
    {
      q: "Kann ich das Audit selbst machen?",
      a: "Ja. Alle Prüfungen in dieser Checkliste gehen mit kostenlosen Werkzeugen: dem Unternehmensprofil, der Google Search Console, PageSpeed Insights, Google Analytics und einer normalen Google-Suche. Hilfe lohnt sich vor allem bei der Umsetzung technischer Punkte.",
    },
    {
      q: "Welche Werkzeuge brauche ich?",
      a: "Zugang zum Unternehmensprofil, die Search Console mit den Berichten Leistung, Seitenindexierung und Core Web Vitals, PageSpeed Insights, den Test für Rich-Suchergebnisse und Google Analytics 4. Bezahlte Tools sparen Zeit bei vielen Standorten, sind für eine Selbstprüfung aber nicht nötig.",
    },
    {
      q: "Was sind die häufigsten Funde?",
      a: "Meist Widersprüche zwischen Profil, Website und Verzeichnissen, eine zu allgemeine Hauptkategorie, fehlende Seiten für einzelne Leistungen und ein Website-Link im Profil ohne Markierung. Seltener, aber folgenreicher sind doppelte Profile und Zusätze im Firmennamen.",
    },
    {
      q: "Was mache ich, wenn mein Profil gesperrt ist?",
      a: "Legen Sie kein neues Profil an. Beheben Sie zuerst den Verstoß, sammeln Sie Nachweise für Adresse und Betrieb und legen Sie dann Einspruch ein. Der Ablauf steht in [Unternehmensprofil optimieren](/blog/google-my-business-optimieren#sperrung).",
    },
    {
      q: "Ersetzt das Audit eine Ranking-Messung?",
      a: "Nein. Das Audit prüft, ob die Grundlagen stimmen. Wie sichtbar Sie in Ihrem Einzugsgebiet sind, zeigt erst eine Messung über mehrere Punkte auf der Karte. Beides zusammen zeigt, ob eine Korrektur gewirkt hat.",
    },
  ],
  sources: [
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Leistung des Unternehmensprofils ansehen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Bericht zur Seitenindexierung", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7440203?hl=de" },
    { title: "Kampagnendaten mit benutzerdefinierten URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI", url: "https://developers.openai.com/api/docs/bots" },
  ],
  related: [
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Lieber einen zweiten Blick auf Ihr Audit?",
    text: "Wir prüfen Ihr Google-Profil und Ihre Website nach dieser Checkliste und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
