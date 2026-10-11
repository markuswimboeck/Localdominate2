import type { V4Article } from "../types";

const article: V4Article = {
  slug: "website-content-ai-suchmaschinen",
  lang: "de",
  seoTitle: "Website-Inhalte für KI-Suche: richtig zitiert werden",
  seoDescription:
    "Wie lokale Betriebe Seiten schreiben, die KI-Systeme korrekt wiedergeben: Antwort zuerst, Fakten als Text, passende Seitentypen und was Google dazu sagt.",
  h1: "Website-Inhalte für KI-Suche: So schreiben Sie Seiten, die KI-Systeme richtig wiedergeben",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber von Handwerksbetrieben, Praxen, Restaurants, Hotels und Dienstleistern, die ihre Website so aufbauen wollen, dass Google, ChatGPT und andere KI-Dienste sie korrekt zusammenfassen. Sie erfahren, was die Anbieter selbst empfehlen, welche Seiten ein lokaler Betrieb braucht und woran Sie eine gute Seite erkennen.",
  answer:
    "Google sagt, dass Sie für KI-Funktionen nicht anders schreiben müssen als für Menschen. Was hilft, ist Sorgfalt: Die Antwort steht im ersten Satz, wichtige Fakten stehen als Text auf der Seite, jede Kundenfrage hat ihren Platz und die Angaben sind eigene Erfahrung statt Allgemeinwissen. Eine Nennung in KI-Antworten garantiert keiner der Anbieter.",
  takeaways: [
    "Google nennt für die Übersicht mit KI und den KI-Modus keine zusätzlichen Anforderungen. Kein besonderer Schreibstil, keine Aufteilung in kleine Stücke, kein spezielles Markup.",
    "Wichtige Inhalte gehören laut Google als Text auf die Seite. Microsoft rät, entscheidende Angaben nicht nur in PDFs oder Bildern zu zeigen.",
    "Ein erster Satz, der die Frage allein beantwortet, nützt Lesern und KI-Systemen. Konkrete Angaben schlagen allgemeine Werbesprache.",
    "Lokale Betriebe brauchen wenige, klare Seitentypen: Leistung, Standort, Preise, Team, häufige Fragen, Kontakt. Erfundene Stadtseiten verstoßen gegen Googles Spam-Richtlinien.",
    "Texte mit KI-Hilfe sind erlaubt, wenn Sie jede Angabe prüfen. Massenhaft erzeugte Seiten ohne Mehrwert sind es nicht.",
  ],
  publishedAt: "2026-03-05",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "wie-ki-seiten-nutzt",
      title: "Wie KI-Dienste Ihre Seiten nutzen",
      answer:
        "KI-Dienste wie die Übersicht mit KI, der KI-Modus oder die ChatGPT-Suche suchen zu einer Frage passende Seiten und fassen deren Inhalt zusammen. Ihre Seite muss also zuerst gefunden werden und dann einen Satz enthalten, der sich korrekt zusammenfassen lässt.",
      blocks: [
        {
          t: "p",
          text: "Google beschreibt, dass der KI-Modus und die Übersicht mit KI zu einer Frage mehrere verwandte Suchen gleichzeitig stellen können, die sogenannte Auffächerung der Anfrage (englisch „query fan-out“). Die Antwort stützt sich auf Seiten aus dem normalen Google-Index. Um als Link in einer Übersicht mit KI zu erscheinen, muss eine Seite indexiert sein und mit einem Textausschnitt angezeigt werden dürfen. Zusätzliche Anforderungen gibt es laut Google nicht.",
        },
        {
          t: "p",
          text: "OpenAI schreibt, dass jede öffentliche Website in der ChatGPT-Suche erscheinen kann, wenn der Crawler OAI-SearchBot sie lesen darf. Die Reihenfolge hängt von mehreren Faktoren ab, die OpenAI nicht einzeln nennt. Die Platzierung ist ausdrücklich nicht garantiert. Welche Dienste für lokale Betriebe zählen, zeigt [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Genutzt werden meist einzelne Aussagen, die zu einer Teilfrage passen, nicht die ganze Seite. Je eindeutiger eine Aussage für sich steht, desto geringer ist das Risiko einer falschen Wiedergabe. Das ist unsere Ableitung, keine dokumentierte Regel.",
        },
      ],
    },
    {
      id: "was-google-sagt",
      title: "Was Google zu Inhalten für KI-Funktionen sagt",
      answer:
        "Google sagt klar: Sie müssen für generative KI-Suche nicht auf eine besondere Art schreiben, Inhalte nicht in kleine Stücke teilen und kein spezielles Markup ergänzen. Empfohlen werden eigene, wertvolle Inhalte, eine verständliche Gliederung und wichtige Angaben als Text.",
      blocks: [
        {
          t: "p",
          text: "Google hat einen eigenen Leitfaden zur Optimierung für generative KI-Funktionen in der Suche veröffentlicht, zuletzt aktualisiert am 10. Juli 2026. Er ordnet die meisten verbreiteten Ratschläge ein. Auf die Frage, ob Suchmaschinenoptimierung für generative KI-Suche noch zählt, antwortet Google mit Ja: Die bewährten Methoden gelten weiter, weil die KI-Funktionen auf den Ranking-Systemen der Suche aufbauen. Mehr zum Begriff steht in [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
        {
          t: "table",
          caption: "Aussagen aus Googles Dokumentation zu KI-Funktionen (Stand Oktober 2026)",
          head: ["Thema", "Was Google schreibt", "Was das für Ihre Website heißt"],
          rows: [
            ["Schreibstil", "Kein besonderer Schreibstil für generative KI-Suche nötig; Synonyme und Bedeutung werden verstanden", "Schreiben Sie für Kunden, nicht für Maschinen"],
            ["Länge und Aufteilung", "Keine Pflicht, Inhalte in kleine Stücke zu teilen; keine ideale Seitenlänge", "Kein künstliches Zerhacken in Kurzabsätze"],
            ["Eigene Inhalte", "Inhalte mit eigener Erfahrung oder Fachwissen, die über Allgemeinwissen hinausgehen", "Schreiben Sie auf, was nur Ihr Betrieb weiß"],
            ["Gliederung", "Überschriften, die eine klare Struktur zum Navigieren geben", "Eine Überschrift je Thema, verständlich formuliert"],
            ["Text", "Wichtige Inhalte in Textform verfügbar machen", "Zeiten, Preise, Leistungen nicht nur im Bild"],
            ["Strukturierte Daten", "Nicht erforderlich, kein spezielles Markup; wenn vorhanden, passend zum sichtbaren Text", "Markup ergänzt den Text, ersetzt ihn nicht"],
            ["Zusatzdateien", "Keine neuen maschinenlesbaren Dateien, KI-Textdateien oder Markdown nötig; die Google Suche nutzt sie nicht", "llms.txt ist für Google ohne Wirkung"],
            ["Unternehmensdaten", "Google-Unternehmensprofil kann Sichtbarkeit in KI-Antworten unterstützen", "Profil und Website auf denselben Stand bringen"],
          ],
        },
        {
          t: "p",
          text: "Google warnt außerdem davor, Inhalte vor allem zu erstellen, um Rankings oder KI-Antworten zu beeinflussen, und rät zur Vorsicht bei Werkzeugen, die Ranking-Erfolg versprechen. Wie die Übersicht mit KI lokale Betriebe einbezieht, beschreibt [Übersicht mit KI und Local SEO](/blog/google-ai-overviews-local-seo).",
        },
      ],
    },
    {
      id: "was-microsoft-empfiehlt",
      title: "Was Microsoft für Bing und Copilot empfiehlt",
      answer:
        "Microsoft wird konkreter als Google: Überschriften wie Kapiteltitel, Fragen mit direkter Antwort, Listen und Tabellen, Sätze, die auch ohne Zusammenhang verständlich sind, und genaue Angaben statt vager Wörter. Auch Microsoft sagt, dass nichts eine Auswahl garantiert.",
      blocks: [
        {
          t: "p",
          text: "Im Oktober 2025 hat ein Produktmanager von Microsoft Bing beschrieben, wie Inhalte in KI-Antworten aufgenommen werden können. Die wichtigsten Punkte für lokale Betriebe:",
        },
        {
          t: "ul",
          items: [
            "**Überschriften als Kapiteltitel.** Statt „Mehr erfahren“ eine Überschrift, die die Frage nennt.",
            "**Frage und Antwort.** Direkte Fragen mit klaren Antworten entsprechen der Art, wie Menschen suchen. Laut Microsoft können Assistenten solche Paare oft wörtlich in ihre Antworten übernehmen.",
            "**Listen, Schritte und Tabellen** zerlegen komplexe Angaben in gut verwendbare Teile.",
            "**Sätze, die allein stehen.** Eine Aussage soll auch ohne den Absatz davor verständlich sein.",
            "**Genauigkeit.** Wörter wie „innovativ“ oder „öko“ sagen ohne Einzelheiten wenig.",
            "**Kein verstecktes Wissen.** Entscheidende Angaben nicht nur in PDFs oder Bildern; versteckte Inhalte werden von KI-Systemen möglicherweise nicht gelesen.",
          ],
        },
        {
          t: "p",
          text: "Das widerspricht Google nicht: Google sagt, dass keine besondere Form nötig ist, Microsoft beschreibt, welche Form das Auslesen erleichtert.",
        },
      ],
    },
    {
      id: "antwort-zuerst",
      title: "Antwort zuerst: der erste Satz entscheidet",
      answer:
        "Beginnen Sie jeden Abschnitt mit einem Satz, der die Frage der Überschrift vollständig beantwortet, mit Ort, Zahl oder Bedingung. Begründungen, Details und Werbung folgen danach.",
      blocks: [
        {
          t: "p",
          text: "Das Prinzip stammt aus dem Journalismus: das Wichtigste nach oben. Jede Zwischenüberschrift benennt eine Kundenfrage, der erste Satz darunter beantwortet sie.",
        },
        {
          t: "steps",
          items: [
            { title: "Frage formulieren", text: "Schreiben Sie die Frage so auf, wie Kunden sie am Telefon stellen: „Kommen Sie auch nach Feldkirch?“, „Muss ich vorher einen Termin machen?“" },
            { title: "Antwort in einem Satz", text: "Ja oder nein, dazu die wichtigste Bedingung: „Ja, wir arbeiten in ganz Vorarlberg, ab 30 Kilometer berechnen wir eine Anfahrtspauschale.“" },
            { title: "Allein lesen", text: "Lesen Sie den Satz ohne Überschrift und ohne den Rest der Seite. Fehlt dann Ort, Leistung oder Firmenname, ergänzen Sie ihn. Details folgen danach." },
          ],
        },
        {
          t: "note",
          label: "Typischer Fehler",
          text: "Pronomen ohne Bezug. „Das bieten wir auch samstags an“ ist allein nicht verständlich. „Die Zahnreinigung bieten wir auch samstags von 8 bis 12 Uhr an“ ist es. Für Microsoft ist genau diese Eigenschaft wichtig: Sätze, die auch aus dem Zusammenhang gelöst noch stimmen.",
        },
      ],
    },
    {
      id: "fakten-als-text",
      title: "Fakten als Text, nicht in Bild, PDF oder Widget",
      answer:
        "Öffnungszeiten, Preise, Speisekarten, Einzugsgebiet und Bedingungen gehören als normaler Text auf die Seite. Google nennt Inhalte in Textform ausdrücklich als bewährte Praxis, Microsoft warnt vor Angaben, die nur in PDFs oder Bildern stehen.",
      blocks: [
        {
          t: "p",
          text: "Viele lokale Websites zeigen ihre wichtigsten Angaben als Grafik: Preise im Flyer, Speisekarte als PDF, Öffnungszeiten im Foto der Eingangstür. Für Crawler ist das oft schwer lesbar. Prüfen Sie diese Angaben:",
        },
        {
          t: "table",
          caption: "Fakten, die ein lokaler Betrieb als Text zeigen sollte",
          head: ["Angabe", "Gutes Beispiel als Text", "Häufige Schwachstelle"],
          rows: [
            ["Öffnungszeiten", "„Mo bis Fr 8 bis 18 Uhr, Sa 9 bis 13 Uhr, an Feiertagen geschlossen“", "Nur im Bild oder nur im Kartenausschnitt"],
            ["Einzugsgebiet", "„Wir arbeiten in Augsburg, Friedberg und Königsbrunn“", "Nur „und Umgebung“"],
            ["Preisrahmen", "„Erstberatung 30 Minuten, kostenlos“, „Mittagsmenü ab 12,50 Euro“", "Preisliste als PDF ohne Datum"],
            ["Bedingungen", "„Hunde im Gastgarten erlaubt“, „Termine auch für Kassenpatienten“", "Gar nicht erwähnt"],
            ["Stand", "„Preise gültig ab 1. September 2026“", "Kein Datum, veraltete Angaben"],
          ],
        },
        {
          t: "p",
          text: "Die gleichen Angaben müssen im Google-Unternehmensprofil und in Verzeichnissen übereinstimmen, siehe [NAP-Konsistenz](/blog/nap-konsistenz-local-seo). Google rät außerdem, strukturierte Daten nur so zu setzen, dass sie zum sichtbaren Text passen. Was dabei für KI-Dienste gilt, steht in [Schema-Strategie für KI](/blog/schema-strategie-ai-retrieval).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Aufklappbare Bereiche sind für Besucher praktisch. Microsoft rät ausdrücklich, wichtige Antworten nicht in Reitern oder aufklappbaren Menüs zu verstecken, weil KI-Systeme versteckte Inhalte möglicherweise nicht darstellen. Die wichtigste Angabe einer Seite sollte deshalb immer sichtbar im Text stehen.",
        },
      ],
    },
    {
      id: "seitentypen",
      title: "Welche Seiten ein lokaler Betrieb braucht",
      answer:
        "Ein lokaler Betrieb braucht wenige, klar abgegrenzte Seitentypen: Startseite, je eine Seite pro Hauptleistung und pro echtem Standort, Preise oder Ablauf, Team, häufige Fragen und Kontakt. Jede beantwortet eine bestimmte Art von Frage.",
      blocks: [
        {
          t: "table",
          caption: "Seitentypen und die Fragen, die sie beantworten",
          head: ["Seitentyp", "Beantwortet Fragen wie", "Erster Satz (Muster)"],
          rows: [
            ["Startseite", "Wer seid ihr, was macht ihr, wo?", "„[Betrieb] ist ein Meisterbetrieb für Elektrotechnik in Linz mit acht Mitarbeitern.“"],
            ["Leistungsseite", "Macht ihr X? Wie läuft X ab? Was kostet X ungefähr?", "„Wir installieren Wallboxen für Ein- und Mehrfamilienhäuser im Raum Linz.“"],
            ["Standortseite", "Wo genau, wann geöffnet, wie komme ich hin?", "„Unsere Filiale in Winterthur liegt an der [Straße], fünf Gehminuten vom Bahnhof.“"],
            ["Preise oder Ablauf", "Was kostet es, was ist inbegriffen, wie lange dauert es?", "„Ein Herrenhaarschnitt kostet bei uns 34 Franken, mit Waschen 42 Franken.“"],
            ["Team oder Über uns", "Wer arbeitet dort, mit welcher Qualifikation?", "„Die Praxis wird von zwei Fachärztinnen für Dermatologie geführt.“"],
            ["Häufige Fragen", "Kurze Einzelfragen zu Bedingungen", "„Ja, Hunde sind in allen Zimmern erlaubt, gegen 15 Euro pro Nacht.“"],
            ["Kontakt", "Telefon, Zeiten, Anfahrt, Parken", "„Sie erreichen uns Mo bis Fr 7 bis 17 Uhr unter [Nummer].“"],
          ],
        },
        {
          t: "p",
          text: "Eine Seite mit häufigen Fragen ist als normaler Inhalt sinnvoll. Die erweiterten Suchergebnisse für FAQ zeigt Google seit dem 7. Mai 2026 nicht mehr an, das FAQ-Markup bringt in der Suche also keine Sonderdarstellung mehr. Der Text selbst bleibt nützlich.",
        },
        {
          t: "note",
          label: "Warnung",
          text: "Standortseiten nur für Orte, an denen Sie tatsächlich einen Standort haben oder regelmäßig arbeiten, und mit eigenem Inhalt. Viele fast gleiche Seiten für Nachbarorte, die alle auf dieselbe Anfrage zielen, sind laut Googles Spam-Richtlinien Brückenseiten. Auch Textblöcke, die nur Städtenamen aufzählen, gelten dort als Keyword-Stuffing.",
        },
      ],
    },
    {
      id: "vorher-nachher",
      title: "Vorher und nachher: drei Beispiele",
      answer:
        "Die folgenden Beispiele sind erfunden und dienen nur der Veranschaulichung. Sie zeigen, wie aus allgemeiner Werbesprache Sätze werden, die eine Kundenfrage allein beantworten und sich korrekt zusammenfassen lassen.",
      blocks: [
        {
          t: "table",
          caption: "Drei fiktive Beispiele",
          head: ["Seite", "Vorher", "Nachher"],
          rows: [
            ["Sanitärbetrieb in Graz, Leistung", "„Ihr Traumbad wird wahr. Wir sind Ihr kompetenter Partner rund ums Bad.“", "„Badsanierung in Graz: Wir sanieren Bäder in Graz und Graz-Umgebung. Ein Komplettbad dauert bei uns in der Regel drei Wochen.“"],
            ["Sanitärbetrieb in Graz, Ablauf", "Ablauf als Infografik", "Ablauf als nummerierte Liste: Besichtigung, Angebot, Termin, Umbau, Abnahme"],
            ["Physiotherapie in Bern, Termine", "„Termine nach Vereinbarung“", "„Termine Mo bis Fr 7 bis 19 Uhr, online buchbar oder telefonisch unter [Nummer].“"],
            ["Physiotherapie in Bern, Leistungen", "„Modernste Therapie in angenehmer Atmosphäre“", "„Schwerpunkte: Rückenschmerzen, Sportverletzungen, Rehabilitation nach Knieoperationen.“"],
            ["Hotel in Lindau, Lage", "„Erleben Sie unvergessliche Tage in einzigartiger Lage.“", "„Das Hotel liegt an der Uferpromenade in Lindau, 400 Meter vom Bahnhof Lindau-Insel.“"],
            ["Hotel in Lindau, Hunde", "Keine Angabe", "„Hunde sind in sechs Zimmern im Erdgeschoss erlaubt.“"],
          ],
        },
        {
          t: "p",
          text: "Gemeinsam ist allen Fassungen: Ort, Leistung und Bedingung stehen im selben Satz. Weitere Beispiele aus Sicht von ChatGPT zeigt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen#eigene-seiten-zitierfaehig). Eine ausfüllbare Vorlage für einzelne Seiten finden Sie im [GEO-Content-Briefing](/blog/geo-content-briefing-vorlage-2026).",
        },
      ],
    },
    {
      id: "wer-wie-warum",
      title: "Wer schreibt, wie entsteht der Text, wie aktuell ist er",
      answer:
        "Google fragt in seinen Leitlinien für hilfreiche Inhalte, ob erkennbar ist, wer einen Text verfasst hat, ob er eigene Erfahrung zeigt und ob das Datum ehrlich ist. Für lokale Betriebe heißt das: Namen und Qualifikation nennen, Erfahrung aus der eigenen Arbeit beschreiben und das Datum nur bei echter Überarbeitung ändern.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Wer.** Google fragt, ob für Besucher erkennbar ist, wer den Inhalt verfasst hat, und ob dort, wo man es erwartet, ein Autorenhinweis steht. Bei einem Ratgeber auf der Praxis-Website ist das die Ärztin oder der Therapeut.",
            "**Erfahrung.** Google fragt, ob Inhalte Fachwissen aus erster Hand zeigen. Ein Elektriker, der beschreibt, welche Fehler er bei Altbauten in der Region regelmäßig findet, liefert genau das.",
            "**Datum.** Google fragt ausdrücklich, ob Daten geändert werden, damit Seiten frisch wirken, obwohl sich der Inhalt kaum geändert hat. Ein „Stand“ bei Preisen und Zeiten ist sinnvoll, wenn er stimmt.",
          ],
        },
        {
          t: "p",
          text: "Texte mit KI-Hilfe zu schreiben ist nach Googles Leitlinien erlaubt. Google verlangt aber, alle KI-erzeugten Inhalte vor der Veröffentlichung von Hand auf Fakten zu prüfen, auch Titel und Beschreibung. Viele Seiten mit generativer KI ohne Mehrwert zu erzeugen, kann gegen die Richtlinie zu massenhaft erstellten Inhalten verstoßen. Welche Werkzeuge sich im Alltag eignen, steht in [KI-Tools für Local SEO](/blog/ki-tools-local-seo).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ihre eigene Erfahrung ist der größte Vorteil gegenüber Ratgeberportalen. Ein KI-Werkzeug kennt Ihre Region und Ihre Abläufe nicht. Google rät ausdrücklich zu Inhalten, die nicht einfach von einem KI-Modell erzeugt werden könnten.",
        },
      ],
    },
    {
      id: "was-sie-weglassen-koennen",
      title: "Was Sie weglassen können",
      answer:
        "Viele Ratschläge zu KI-optimierten Inhalten sind nicht belegt oder von Google ausdrücklich verneint. Dazu gehören feste Antwortblöcke mit vorgegebener Wortzahl, spezielles Markup für KI, llms.txt für Google und erfundene HTML-Attribute.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Ratschläge und was die Anbieter dazu sagen",
          head: ["Ratschlag", "Stand der Dokumentation"],
          rows: [
            ["„Antwortblöcke mit 40 bis 60 Wörtern werden bevorzugt“", "Keine Quelle. Google: keine Pflicht zur Aufteilung, keine ideale Seitenlänge."],
            ["„Ohne Schema-Markup keine KI-Zitate“", "Google: strukturierte Daten nicht erforderlich, kein spezielles Markup für KI."],
            ["„llms.txt ist Pflicht“", "Google: Die Google Suche nutzt solche Dateien nicht, sie schaden und nützen dort nicht. Mehr in [llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026)."],
            ["„FAQ-Markup bringt Sonderdarstellung“", "FAQ-Ergebnisse zeigt Google seit 7. Mai 2026 nicht mehr an."],
            ["„Attribute wie data-ai-summary markieren Kernaussagen für KI“", "In keiner der hier geprüften Dokumentationen von Google, Microsoft oder OpenAI beschrieben."],
            ["„Eine Seite pro Nachbarort bringt Sichtbarkeit“", "Ortsseiten, die Nutzer nur auf eine Seite weiterleiten, nennt Google als Beispiel für Brückenseiten-Missbrauch."],
          ],
        },
        {
          t: "p",
          text: "Eine gute Faustregel: Was Besuchern nicht hilft, hilft auch in der KI-Suche nicht verlässlich.",
        },
      ],
    },
    {
      id: "pruefen",
      title: "So prüfen Sie Ihre Seiten",
      answer:
        "Lesen Sie nur die ersten Sätze unter jeder Überschrift, suchen Sie Angaben, die nur im Bild stehen, und stellen Sie typische Kundenfragen in Google und ChatGPT. Wird Ihr Betrieb falsch wiedergegeben, korrigieren Sie zuerst Ihre eigene Seite.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Erste-Satz-Test", text: "Lesen Sie nur die Überschriften und den jeweils ersten Satz. Ergibt das eine vollständige, richtige Beschreibung Ihres Angebots mit Ort, ist die Seite gut gebaut." },
            { title: "Text-Test", text: "Markieren Sie auf der Seite mit der Maus allen Text. Was sich nicht markieren lässt, etwa Zeiten im Bild oder Preise im PDF, ist für Maschinen schwer lesbar und gehört zusätzlich als Text auf die Seite." },
            { title: "Abgleich", text: "Vergleichen Sie Zeiten, Telefonnummer und Leistungen der Seite mit Ihrem Google-Unternehmensprofil. Jeder Widerspruch ist eine mögliche Fehlerquelle in KI-Antworten." },
            { title: "Fragen stellen", text: "Stellen Sie fünf typische Kundenfragen mit Ortsnamen in der Google Suche und in ChatGPT. Notieren Sie, ob Ihre Seite als Quelle erscheint und ob die Angaben stimmen." },
            { title: "Messen", text: "Der Bericht zu generativer KI in der Google Search Console ist seit dem 31. August 2026 für alle Websites freigeschaltet und zeigt Impressionen in der Übersicht mit KI und im KI-Modus, sofern genügend Daten vorliegen. ChatGPT hängt an Links den Parameter utm_source=chatgpt.com an, den Ihre Web-Analyse auswerten kann." },
          ],
        },
        {
          t: "p",
          text: "Eine regelmäßige Routine für solche Prüfungen beschreibt [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026). Falsche Angaben in KI-Antworten korrigieren Sie zuerst an der Quelle.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Muss ich meine Website für KI-Suchmaschinen komplett neu schreiben?",
      a: "Nein. Google sagt, dass für generative KI-Suche kein besonderer Schreibstil nötig ist. Überarbeiten Sie zuerst die wichtigsten Seiten: erster Satz als Antwort, Fakten als Text, klare Überschriften. Das hilft Besuchern genauso wie KI-Diensten.",
    },
    {
      q: "Wie lang sollte ein Abschnitt für KI-Antworten sein?",
      a: "Google nennt keine ideale Seitenlänge und verlangt keine Aufteilung in kleine Stücke. Feste Wortzahlen für Antwortblöcke sind nicht belegt. Wichtig ist, dass der erste Satz eines Abschnitts die Frage allein beantwortet.",
    },
    {
      q: "Brauche ich Schema-Markup, damit KI-Dienste meine Seite zitieren?",
      a: "Laut Google sind strukturierte Daten für generative KI-Suche nicht erforderlich, und es gibt kein spezielles Markup dafür. Für erweiterte Suchergebnisse bleiben sie nützlich, wenn sie zum sichtbaren Text passen. Die Grundlagen erklärt der Artikel zu Schema Markup für lokale Unternehmen.",
    },
    {
      q: "Darf ich Website-Texte mit ChatGPT oder anderen KI-Werkzeugen schreiben?",
      a: "Ja, Google erlaubt das. Sie müssen aber jede Angabe vor der Veröffentlichung prüfen. Viele Seiten mit KI zu erzeugen, die Nutzern nichts bieten, kann gegen Googles Spam-Richtlinien verstoßen.",
    },
    {
      q: "Kann ich garantieren, dass meine Seite in KI-Antworten genannt wird?",
      a: "Nein. Google, Microsoft und OpenAI sagen übereinstimmend, dass weder Anzeige noch Platzierung garantiert sind. Gute Inhalte erhöhen nach unserer Einschätzung die Chance, korrekt wiedergegeben zu werden, mehr nicht.",
    },
  ],
  sources: [
    { title: "Optimizing your website for generative AI features on Google Search (zuletzt aktualisiert 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Creating helpful, reliable, people-first content", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { title: "Using generative AI content on your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { title: "Spam policies for Google web search", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "Latest documentation updates (FAQ-Rich-Results ab 7. Mai 2026 eingestellt, Dokumentation am 15. Juni 2026 entfernt)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "Generative AI performance report (Search)", publisher: "Google Search Console Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=en" },
    { title: "Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)", publisher: "Microsoft Advertising Blog", url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "ChatGPT search", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
  ],
  related: [
    { slug: "schema-strategie-ai-retrieval", title: "Schema-Strategie für KI-Suche" },
    { slug: "geo-content-briefing-vorlage-2026", title: "GEO-Content-Briefing: die Vorlage" },
    { slug: "chatgpt-zitiert-lokale-unternehmen", title: "Wie ChatGPT lokale Unternehmen zitiert" },
    { slug: "google-ai-overviews-local-seo", title: "Übersicht mit KI und Local SEO" },
  ],
  cta: {
    title: "Wie lesen KI-Dienste Ihre Website?",
    text: "Wir prüfen Ihre wichtigsten Seiten: ob die Antwort im ersten Satz steht, ob Fakten als Text lesbar sind und ob Website und Unternehmensprofil übereinstimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
