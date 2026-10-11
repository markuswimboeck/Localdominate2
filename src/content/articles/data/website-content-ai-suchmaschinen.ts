import type { V4Article } from "../types";

const article: V4Article = {
  slug: "website-content-ai-suchmaschinen",
  lang: "de",
  seoTitle: "Website-Content für KI-Suchmaschinen: Seiten richtig bauen",
  seoDescription:
    "Wie lokale Betriebe Leistungsseiten, Kontakt, Preise und Fragen so schreiben, dass Menschen, Google und KI-Systeme sie verstehen. Nach Googles Dokumentation.",
  h1: "Website-Content für KI-Suchmaschinen: Wie lokale Betriebe Leistungsseiten, Kontakt, Preise und Fragen schreiben",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber und Website-Betreuer von Handwerksbetrieben, Praxen, Hotels und Restaurants. Sie erfahren, welche Seiten eine lokale Website braucht, was auf jede gehört und wie Sie Texte so schreiben, dass Menschen, Suchmaschinen und KI-Systeme sie verstehen und richtig wiedergeben. Den Überblick über die Systeme gibt [KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen), Arbeitsplan und Angebotsprüfung stehen in [AI Search Optimization 2026](/blog/ai-search-optimization-2026).",
  answer:
    "Schreiben Sie für Ihre Kunden, nicht für eine KI: Google verlangt für seine KI-Funktionen keine besondere Schreibweise, keine zerlegten Texte und keine KI-Dateien. Sinnvoll sind eine eigene Seite je Leistung, Fakten wie Ort, Zeiten, Preise und Bedingungen als Text, eine Antwort im ersten Satz jedes Abschnitts und Angaben, die mit Ihrem Unternehmensprofil übereinstimmen. Google rät zu Inhalten aus eigener Erfahrung, die über Allgemeinwissen hinausgehen.",
  takeaways: [
    "Google schreibt, Sie müssten weder eigens für KI schreiben noch Inhalte zerstückeln, und es gebe keine ideale Seitenlänge. Semantisches HTML hält Google für sinnvoll, wo es möglich ist.",
    "Jede Hauptleistung braucht eine eigene Seite mit Ort, Ablauf, Preisrahmen und Bedingungen. Seiten für Orte ohne Standort sind keine Lösung, Google nennt sie als Beispiel für Brückenseiten.",
    "Fakten gehören als Text in das HTML der Seite, nicht nur in Bilder, PDFs, Aufklappmenüs oder Inhalte, die erst JavaScript nachlädt. Google schreibt selbst, dass nicht alle Bots JavaScript ausführen können.",
    "Fragen und Antworten auf der passenden Seite bleiben nützlich, obwohl Google FAQ-Rich-Results seit dem 7. Mai 2026 nicht mehr zeigt.",
    "Strukturierte Daten vom Typ LocalBusiness müssen dem sichtbaren Text entsprechen. Für Googles KI-Funktionen sind sie laut Google nicht nötig, für Rich Results bleiben sie sinnvoll.",
  ],
  publishedAt: "2026-03-05",
  updatedAt: "2026-10-11",
  readingTime: 14,
  sections: [
    {
      id: "grundsaetze",
      title: "Was Google und Microsoft über Inhalte für KI-Antworten schreiben",
      answer:
        "Google verlangt für Übersicht mit KI und KI-Modus keine besondere Schreibweise: Inhalte sollen für Menschen geschrieben, gut formuliert und leicht nachvollziehbar sein. Microsoft wird konkreter und empfiehlt klare Überschriften, Listen und Sätze, die auch allein verständlich sind.",
      blocks: [
        {
          t: "table",
          caption: "Hinweise der Anbieter zu Inhalten (Stand Oktober 2026)",
          head: ["Thema", "Google", "Microsoft"],
          rows: [
            ["Schreibweise", "Nicht eigens für KI schreiben; Inhalte für Menschen, gut geschrieben und leicht zu folgen", "Inhalte aktuell, fundiert, gut gegliedert und eindeutig"],
            ["Gliederung", "Leser schätzen Absätze und Abschnitte mit Überschriften; Zerstückeln ist nicht nötig; semantisches HTML, wo möglich", "Überschriften zeigen, wo ein Gedanke endet und der nächste beginnt; Listen, nummerierte Schritte und Tabellen"],
            ["Länge", "Keine ideale Seitenlänge, keine magische Wortzahl", "Keine Angabe in den geprüften Quellen"],
            ["Versteckte Inhalte", "Wichtige Inhalte in Textform bereitstellen", "Wichtige Antworten nicht in Tabs oder Aufklappmenüs, nicht nur in Bildern, nicht in PDFs"],
            ["Einzelne Sätze", "Keine Angabe in den geprüften Quellen", "Sätze, die auch aus dem Zusammenhang gelöst verständlich sind"],
            ["Inhalt", "Eigene Erfahrung und Fachwissen statt Wiederholung von Allgemeinwissen", "Laut Bericht von Search Engine Journal empfehlen die Bing-Richtlinien, ein Thema je URL zu behandeln, Wichtiges nach oben zu stellen, Fakten direkt zu nennen und Namen einheitlich zu verwenden"],
          ],
        },
        {
          t: "p",
          text: "Die Hinweise widersprechen sich nicht. Microsoft beschreibt nur genauer, was gute Gliederung bedeutet. Google unterscheidet zusätzlich zwischen Inhalten aus **Allgemeinwissen**, die jeder schreiben könnte, und Inhalten, die mit eigener Erfahrung oder Expertise darüber hinausgehen. Ein Erfahrungsbericht aus erster Hand biete eine eigene Sicht, schreibt Google, und rät, nicht nur zu wiederholen, was andere im Netz schon gesagt haben.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für einen lokalen Betrieb ist eigene Erfahrung leicht zu liefern, weil nur Sie wissen, wie Ihre Arbeit abläuft, was sie kostet und was Kunden fragen. Genau das fehlt den meisten Texten, die nach Vorlage geschrieben sind.",
        },
      ],
    },
    {
      id: "seiten",
      title: "Welche Seiten eine lokale Website braucht",
      answer:
        "Eine Startseite, eine Seite je Hauptleistung, eine Kontakt- und Standortseite, eine Seite über Team und Betrieb und, wo sinnvoll, eine Seite zu Preisen und Bedingungen. Jede Seite beantwortet eine Hauptfrage des Kunden und behandelt ein Thema.",
      blocks: [
        {
          t: "table",
          caption: "Die Seiten einer lokalen Website und ihre Aufgabe",
          head: ["Seite", "Hauptfrage des Kunden", "Was hineingehört"],
          rows: [
            ["Startseite", "Bin ich hier richtig?", "Was Sie anbieten, für wen und wo; Links zu den wichtigsten Leistungen; Telefon und Zeiten sichtbar"],
            ["Leistungsseite, eine je Hauptleistung", "Machen Sie genau das, hier, für mich?", "Leistung, Einzugsgebiet, Ablauf, Dauer, Preisrahmen, Bedingungen, häufige Fragen, Kontakt"],
            ["Kontakt und Standort", "Wann und wie erreiche ich Sie?", "Adresse, Telefon, Öffnungszeiten mit Sonderzeiten, Anfahrt, Parken, Barrierefreiheit, Zahlungsarten"],
            ["Preise und Bedingungen", "Was kostet es ungefähr?", "Preise oder Preisrahmen mit dem, was enthalten ist, Storno und Zahlungsweise, Stand der Angaben"],
            ["Team und Betrieb", "Wer macht das?", "Namen, Qualifikationen, Mitgliedschaften, Geschichte, echte Fotos"],
            ["Ratgeber, wenn Sie Zeit dafür haben", "Was muss ich vorher wissen?", "Antworten auf Fragen aus Ihrem Alltag, mit eigenen Beispielen"],
          ],
        },
        {
          t: "p",
          text: "**Mehrere Standorte:** Haben Sie mehrere echte Standorte, bekommt jeder eine eigene Seite mit eigener Adresse, eigenen Zeiten und eigenem Team. Wie das zum Unternehmensprofil passt, steht in [Mehrere Standorte im Unternehmensprofil](/blog/gbp-mehrere-standorte).",
        },
        {
          t: "p",
          text: "**Einzugsgebiet ohne Standort:** Seiten für einzelne Städte oder Regionen, die Nutzer am Ende zu derselben Seite führen, nennt Google als Beispiel für Brückenseiten, die gegen die Spam-Richtlinien verstoßen. Blöcke mit Städtenamen, für die eine Seite ranken soll, nennt Google als Beispiel für Keyword-Stuffing. Schreiben Sie stattdessen auf der Leistungsseite in einem Satz, wo Sie arbeiten, und auf der Kontaktseite, wie weit Sie fahren.",
        },
      ],
    },
    {
      id: "leistungsseite",
      title: "Die Leistungsseite: Aufbau an einem Beispiel",
      answer:
        "Eine gute Leistungsseite beginnt mit einer Überschrift, die Leistung und Ort nennt, und mit einem ersten Absatz, der die Hauptfrage vollständig beantwortet. Danach folgen Ablauf, Dauer, Preisrahmen, Bedingungen und die Fragen, die Kunden am Telefon stellen.",
      blocks: [
        {
          t: "p",
          text: "Das folgende Beispiel zeigt den Aufbau für einen erfundenen Heizungsbetrieb in Freiburg. Die Zahlen sind Platzhalter, ersetzen Sie sie durch das, was in Ihrem Betrieb tatsächlich gilt.",
        },
        {
          t: "steps",
          items: [
            { title: "Überschrift mit Leistung und Ort", text: "„Heizungswartung in Freiburg und im Breisgau“ statt „Service“. Google fragt in seinen Leitlinien für hilfreiche Inhalte, ob Hauptüberschrift und Seitentitel eine beschreibende, hilfreiche Zusammenfassung des Inhalts liefern." },
            { title: "Erster Absatz mit der vollständigen Antwort", text: "„Wir warten Gas- und Ölheizungen gängiger Hersteller in Freiburg und im Umkreis von etwa 25 Kilometern. Eine Wartung dauert meist ein bis zwei Stunden, Termine gibt es montags bis freitags.“ Wer nur diesen Absatz liest, weiß das Wichtigste." },
            { title: "Ablauf in Schritten", text: "Was beim Termin passiert, als nummerierte Liste: Anmeldung, Prüfung, Reinigung, Messung, Protokoll. Microsoft nennt nummerierte Schritte als Form, die sich gut in Antworten übernehmen lässt." },
            { title: "Preisrahmen und Bedingungen", text: "Was der Preis enthält, was zusätzlich kostet, etwa Ersatzteile oder Anfahrt außerhalb des Stadtgebiets, und ab wann die Angaben gelten." },
            { title: "Fragen von Kunden", text: "Drei bis sechs Fragen, die wirklich gestellt werden, je mit eigener Zwischenüberschrift und der Antwort im ersten Satz. Mehr dazu im Abschnitt [Fragen und Antworten auf der Seite](#fragen)." },
            { title: "Belege aus dem eigenen Betrieb", text: "Fotos eigener Arbeiten mit beschreibendem Alternativtext, Qualifikationen und Mitgliedschaften, die tatsächlich bestehen. Keine Siegel oder Auszeichnungen, die Sie nicht belegen können." },
            { title: "Kontakt am Ende und oben", text: "Telefon, Formular und Erreichbarkeit, dazu ein Link auf die Kontaktseite mit allen Zeiten." },
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Wie ChatGPT Quellen anzeigt und welche Arten von Seiten bei lokalen Fragen auftauchen, zeigt [Wie ChatGPT lokale Unternehmen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen#eigene-seiten-zitierfaehig). Dort finden Sie auch Beispiele für Formulierungen vorher und nachher.",
        },
      ],
    },
    {
      id: "fakten",
      title: "Ort, Zeiten, Preise: Fakten, die stimmen müssen",
      answer:
        "Nennen Sie überall dieselben Fakten: Name, Adresse, Telefon, Öffnungszeiten mit Sonderzeiten, Einzugsgebiet, Preisrahmen und Bedingungen. Laut Google werden Unternehmen mit vollständigen und korrekten Angaben eher in lokalen Ergebnissen gezeigt, und für die KI-Funktionen nennt Google ausdrücklich ein aktuelles Unternehmensprofil.",
      blocks: [
        {
          t: "table",
          caption: "Fakten unklar und klar formuliert (Beispiele mit Platzhaltern)",
          head: ["Angabe", "Unklar", "Klar"],
          rows: [
            ["Öffnungszeiten", "„Zu den üblichen Zeiten“", "„Montag bis Freitag 8 bis 17 Uhr, samstags 9 bis 12 Uhr. Vom 24. Dezember bis 6. Januar geschlossen.“"],
            ["Einzugsgebiet", "„In der ganzen Region“", "„Freiburg, Emmendingen und Breisach; weiter entfernte Orte nach Absprache.“"],
            ["Preise", "„Faire Preise“", "„Wartung ab … Euro einschließlich Anfahrt im Stadtgebiet, Ersatzteile nach Aufwand. Stand: Oktober 2026.“"],
            ["Erreichbarkeit", "„Rufen Sie uns an“", "„Telefonisch Montag bis Freitag 7 bis 17 Uhr, bei Heizungsausfall im Winter auch am Wochenende.“"],
            ["Zugang", "„Gut erreichbar“", "„Eingang ebenerdig, zwei Kundenparkplätze im Hof, Haltestelle 200 Meter entfernt.“"],
            ["Sprachen", "„International“", "„Beratung auf Deutsch, Englisch und Italienisch.“"],
          ],
        },
        {
          t: "p",
          text: "Dieselben Angaben müssen im Unternehmensprofil, bei Apple Business, Bing Places und in Verzeichnissen stehen. Google nennt in seinen Tipps zum lokalen Ranking ausdrücklich die Öffnungszeiten einschließlich spezieller Öffnungszeiten. Wie Sie Feiertage und Betriebsferien eintragen, steht in [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage), wie Sie Abweichungen finden, in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein sichtbarer Stand bei Preisen und Zeiten, etwa „Stand: Oktober 2026“, hilft Lesern, die Aktualität einzuschätzen. OpenAI weist selbst darauf hin, dass Suchergebnisse veraltet sein können. Setzen Sie den Stand aber nur neu, wenn sich etwas geändert hat; Google warnt davor, Daten zu ändern, damit Seiten frisch wirken.",
        },
      ],
    },
    {
      id: "fragen",
      title: "Fragen und Antworten auf der Seite",
      answer:
        "Fragen, die Kunden wirklich stellen, gehören als normale Abschnitte auf die Seite, zu der sie passen: die Frage als Zwischenüberschrift, die Antwort im ersten Satz darunter. Als Rich Result zeigt Google FAQs seit dem 7. Mai 2026 nicht mehr, für Leser bleiben sie nützlich.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Echte Fragen sammeln:** aus Telefonaten, E-Mails, Angebotsgesprächen und Bewertungen. Eine Woche lang mitschreiben reicht für den Anfang. Weitere Wege zeigt [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
            "**Dort beantworten, wo die Frage entsteht:** Fragen zur Wartung auf die Wartungsseite, Fragen zum Parken auf die Kontaktseite. Eine Sammelseite mit allem ist für Leser schwerer zu nutzen.",
            "**Antwort zuerst:** „Ja, wir behandeln auch Privatpatienten ohne Überweisung.“ Danach folgen die Einzelheiten.",
            "**Nicht verstecken:** Microsoft rät, wichtige Antworten nicht in Tabs oder Aufklappmenüs zu legen. Wer Aufklappelemente nutzt, sollte zumindest prüfen, ob der Text im HTML der Seite steht.",
            "**Keine Werbefragen:** „Warum sind wir die beste Wahl?“ beantwortet keine Frage, die ein Kunde stellt.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "In Googles Leitfaden zu generativen KI-Funktionen haben wir keine Aussage zu FAQs gefunden. Dass Frage-Antwort-Abschnitte für KI-Antworten nützlich sind, ist deshalb unsere Einschätzung: Ein System, das eine Kundenfrage beantworten soll, findet dort eine passende Stelle mit direkter Antwort. Strukturierte Daten vom Typ FAQPage brauchen Sie dafür nicht.",
        },
      ],
    },
    {
      id: "schreiben",
      title: "Sätze, die richtig wiedergegeben werden",
      answer:
        "Schreiben Sie kurze Sätze, die auch allein verständlich sind, nennen Sie Fakten direkt und verwenden Sie für Betrieb und Leistungen immer dieselben Namen. Was ein Mensch beim Überfliegen sofort versteht, kann auch ein System leichter zusammenfassen.",
      blocks: [
        {
          t: "table",
          caption: "Formulierungen im Vergleich (Beispiele)",
          head: ["Schwer wiederzugeben", "Besser", "Warum"],
          rows: [
            ["„Unser Haus bietet Ihnen mehr, als Sie erwarten.“", "„Das Hotel hat 24 Zimmer, eine Sauna und kostenlose Parkplätze; Hunde sind erlaubt.“", "Fakten statt Andeutung; laut Bericht empfehlen die Bing-Richtlinien, Fakten direkt zu nennen"],
            ["„Wie oben erwähnt, gilt das auch hier.“", "„Die erste Behandlung dauert 60 Minuten.“", "Microsoft empfiehlt Sätze, die auch aus dem Zusammenhang gelöst verständlich sind"],
            ["Mal „Physio Müller“, mal „Praxis am Markt“, mal „MüllerPhysio“", "Überall derselbe Name wie im Unternehmensprofil und am Eingang", "Einheitliche Namen empfehlen laut Bericht die Bing-Richtlinien; Google verlangt im Profil den Namen, den Sie auch sonst verwenden"],
            ["„Zahnarzt Linz, Zahnarzt Urfahr, Zahnarzt Leonding, …“", "„Unsere Praxis liegt in Linz-Urfahr; viele Patienten kommen aus Leonding und Puchenau.“", "Ortslisten nennt Google als Beispiel für Keyword-Stuffing"],
            ["„Wir sind die Nummer 1 der Region.“", "„Familienbetrieb seit 1998, Meisterbetrieb, Mitglied der Innung“, sofern es stimmt", "Belegbare Angaben statt Selbstlob"],
          ],
        },
        {
          t: "p",
          text: "Google fragt in seinen Leitlinien für hilfreiche Inhalte unter anderem, ob ein Inhalt eigene Informationen bietet, ob er Fachwissen aus erster Hand zeigt und ob er leicht überprüfbare Fehler enthält. Eine bevorzugte Wortzahl gibt es laut Google nicht, und häufig wiederholte Suchbegriffe ermüden Leser und verstoßen als Keyword-Stuffing gegen Googles Spam-Richtlinien.",
        },
      ],
    },
    {
      id: "technik",
      title: "Text, Bilder, PDFs und JavaScript",
      answer:
        "Wichtige Inhalte müssen als Text auf der Seite stehen, am besten schon im HTML, das der Server ausliefert. Google schreibt, dass nicht alle Bots JavaScript ausführen können, und Microsoft rät, Kerninformationen nicht nur in Bildern oder PDFs abzulegen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Text statt Bild:** Speisekarte, Preisliste und Öffnungszeiten als Text, nicht nur als Foto oder Grafik. Google nennt Inhalte in Textform ausdrücklich unter den Grundlagen für seine KI-Funktionen.",
            "**PDF nur als Ergänzung:** Ein PDF zum Ausdrucken ist in Ordnung, wenn dieselben Angaben auch auf der Seite stehen.",
            "**Bilder mit Zusammenhang:** Google rät, Bilder nahe an passendem Text zu platzieren und einen kurzen, beschreibenden Alternativtext zu schreiben, der den Bezug zum Inhalt erklärt.",
            "**JavaScript:** Google verarbeitet JavaScript in drei Schritten, Crawling, Rendering und Indexierung, hält serverseitiges Rendern oder Vorab-Rendern aber weiter für eine gute Idee, weil nicht alle Bots JavaScript ausführen können. Ob die Crawler von OpenAI, Perplexity und Anthropic JavaScript ausführen, steht in den von uns geprüften Seiten dieser Anbieter nicht.",
            "**Überschriften:** Für die Google-Suche spielt die Reihenfolge der Überschriftenebenen laut Google keine Rolle, für Screenreader ist eine saubere Ordnung trotzdem gut. Semantisches HTML hält Google generell für sinnvoll.",
            "**Barrierefreiheit:** Laut OpenAI hilft eine barrierearme Website dem ChatGPT-Agenten in Atlas, sie besser zu verstehen. OpenAI empfiehlt dafür, bedienbaren Elementen beschreibende Rollen, Beschriftungen und Zustände nach WAI-ARIA zu geben.",
          ],
        },
        {
          t: "p",
          text: "Prüfen können Sie das ohne Werkzeug: Öffnen Sie eine Leistungsseite, lassen Sie sich den Quelltext anzeigen (Strg+U) und suchen Sie nach Ihren Öffnungszeiten und Preisen. Stehen sie dort, kann sie auch ein Crawler ohne JavaScript lesen. Mehr in der [Checkliste zur KI-Sichtbarkeit](/blog/ai-visibility-checklist#inhalte-indexierbar).",
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "Strukturierte Daten passend zum Text",
      answer:
        "Strukturierte Daten vom Typ LocalBusiness beschreiben Name, Adresse, Öffnungszeiten und weitere Angaben in maschinenlesbarer Form und müssen dem sichtbaren Text entsprechen. Für Googles KI-Funktionen sind sie laut Google nicht nötig, für Rich Results und als Teil guter Suchmaschinenoptimierung bleiben sie sinnvoll.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Pflicht und Empfehlung:** Google verlangt für LocalBusiness die Angaben name und address und empfiehlt unter anderem openingHoursSpecification, telephone, url, geo und priceRange, bei Restaurants auch menu und servesCuisine.",
            "**Genauer Typ:** Google rät, den spezifischsten Untertyp von LocalBusiness zu verwenden, etwa Restaurant statt LocalBusiness.",
            "**Nur Sichtbares auszeichnen:** Strukturierte Daten müssen den Inhalt der Seite wahrheitsgetreu wiedergeben. Inhalte, die Leser nicht sehen, dürfen laut Google nicht ausgezeichnet werden.",
            "**Keine Garantie:** Google garantiert nicht, dass strukturierte Daten in den Suchergebnissen erscheinen.",
            "**Andere Anbieter:** Microsoft nennt Schema in seinen Hinweisen zu KI-Antworten als Teil guter Struktur. OpenAI äußert sich in den geprüften Hilfeseiten nicht zu strukturierten Daten.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie das Markup aufbauen und testen, zeigt [Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo).",
        },
      ],
    },
    {
      id: "wer-und-wie",
      title: "Wer schreibt, wie der Text entsteht, welcher Stand gilt",
      answer:
        "Google rät, erkennbar zu machen, wer einen Inhalt erstellt hat und wie er entstanden ist, und warnt davor, Daten nur zu ändern, damit Seiten frisch wirken. Texte, die mit KI entstehen, sollen vor der Veröffentlichung von Hand auf Richtigkeit geprüft werden.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Wer:** Google fragt, ob Seiten dort, wo man es erwartet, einen Autorennamen tragen. Für einen Betrieb heißt das: Ratgebertexte mit Namen und Funktion, Leistungsseiten mit dem Team, das die Arbeit macht.",
            "**Wie:** Laut Google hilft es Lesern zu wissen, wie ein Inhalt entstanden ist. Wer KI beim Schreiben einsetzt, kann das in einem Satz erklären, so wie es für die Leser sinnvoll ist.",
            "**Stand:** Für Seiten mit Datum empfiehlt Google, das Datum für Leser gut sichtbar anzuzeigen und zu beschriften, etwa mit „Zuletzt aktualisiert“. Das Datum muss die tatsächliche Veröffentlichung oder Aktualisierung der Seite beschreiben. Ein neues Datum ohne wesentliche Änderung am Inhalt nennt Google in seinen Leitlinien für hilfreiche Inhalte als Warnzeichen.",
            "**KI als Werkzeug:** Generative KI kann laut Google bei der Recherche helfen, ihre Ergebnisse können aber Fehler enthalten. Google nennt es entscheidend, alle KI-Inhalte vor der Veröffentlichung von Hand auf Richtigkeit und Vertrauenswürdigkeit zu prüfen. Viele Seiten mit KI ohne Mehrwert zu erzeugen, kann gegen die Spam-Richtlinien verstoßen.",
            "**Vertrauen:** Von Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit ist laut Google Vertrauen der wichtigste Aspekt. Ein eigener Rankingfaktor ist das laut Google nicht.",
          ],
        },
      ],
    },
    {
      id: "pruefen",
      title: "So prüfen Sie, ob Ihre Seiten verstanden werden",
      answer:
        "Prüfen Sie in vier Schritten: ob der Text im ausgelieferten HTML steht, ob Google die Seite indexiert hat, ob sie Impressionen in den KI-Funktionen bekommt und ob KI-Antworten Ihre Fakten richtig wiedergeben. Abweichungen korrigieren Sie zuerst auf der Seite und im Profil.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Quelltext ansehen", text: "Je Leistungsseite und Kontaktseite: Stehen Öffnungszeiten, Preise und Einzugsgebiet im Quelltext?" },
            { title: "Indexierung prüfen", text: "In der Search Console nachsehen, ob die Seite indexiert ist und mit Snippet erscheinen darf. Beides setzt Google für seine KI-Funktionen voraus." },
            { title: "Bericht für KI-Funktionen ansehen", text: "Der Bericht für generative KI-Funktionen in der Search Console zeigt Impressionen in Übersicht mit KI und KI-Modus nach Seiten. Fehlt er, hat Ihre Website laut Google meist noch zu wenige Impressionen dort." },
            { title: "Fragen stellen", text: "Drei bis fünf typische Kundenfragen je Leistung im KI-Modus und in ChatGPT stellen, mit Ort in der Frage. Stimmen Zeiten, Preise und Leistungen mit Ihrer Seite überein?" },
            { title: "Abweichungen beheben", text: "Zuerst Seite und Profil korrigieren, dann Verzeichnisse. Den Ablauf beschreibt [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026)." },
          ],
        },
        {
          t: "p",
          text: "Wiederholen Sie die Fragen einmal im Monat. Aussagekräftig ist nach unserer Einschätzung der Verlauf über mehrere Monate, nicht eine einzelne Antwort. Eine vollständige Prüfliste für Technik, Inhalte und Profile bietet die [Checkliste zur KI-Sichtbarkeit](/blog/ai-visibility-checklist).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Muss ich meine Texte für KI-Suchen umschreiben?",
      a: "Nicht eigens für KI. Google schreibt, Sie müssten nicht auf eine bestimmte Weise für generative KI-Suche schreiben und Inhalte nicht zerstückeln. Überarbeiten sollten Sie Seiten, auf denen Fakten fehlen, nur in Bildern stehen oder erst nach einer langen Einleitung kommen.",
    },
    {
      q: "Wie lang sollte eine Leistungsseite sein?",
      a: "Laut Google gibt es keine ideale Seitenlänge und keine magische Wortzahl. Eine Leistungsseite ist lang genug, wenn sie die Fragen beantwortet, die Kunden vor einer Anfrage stellen: was, wo, wie, wie lange, zu welchen Bedingungen.",
    },
    {
      q: "Brauche ich eine eigene FAQ-Seite?",
      a: "Nicht unbedingt. Fragen wirken besser auf der Seite, zu der sie gehören. FAQ-Rich-Results zeigt Google seit dem 7. Mai 2026 nicht mehr, ein FAQPage-Markup bringt in der Google-Suche also keine besondere Darstellung mehr. Als Text bleiben die Antworten für Leser nützlich.",
    },
    {
      q: "Darf ich Texte von einer KI schreiben lassen?",
      a: "Google beschreibt generative KI als Hilfe bei der Recherche und beim Strukturieren eigener Inhalte. Die Texte müssen aber dieselben Anforderungen erfüllen wie andere, und Google nennt es entscheidend, KI-Texte vor der Veröffentlichung von Hand auf Richtigkeit zu prüfen. Viele Seiten mit KI ohne Mehrwert zu erzeugen, kann als Missbrauch skalierter Inhalte gelten.",
    },
    {
      q: "Soll ich für jeden Nachbarort eine eigene Seite anlegen?",
      a: "Nicht, wenn Sie dort keinen Standort haben. Seiten für einzelne Städte oder Regionen, die zu derselben Seite führen, nennt Google als Beispiel für Brückenseiten. Nennen Sie Ihr Einzugsgebiet stattdessen auf der Leistungs- und der Kontaktseite.",
    },
    {
      q: "Hilft Schema-Markup, damit ChatGPT meine Seite zitiert?",
      a: "Dazu sagt OpenAI in den geprüften Hilfeseiten nichts. Google schreibt, für seine generativen KI-Funktionen seien strukturierte Daten nicht nötig, Microsoft zählt Schema zu guter Struktur. Unsere Einschätzung: LocalBusiness-Markup passend zum sichtbaren Text ist sinnvoll, wichtiger sind die Fakten als Text.",
    },
  ],
  sources: [
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "AI features and your website (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Creating helpful, reliable, people-first content (Stand 5. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { title: "SEO Starter Guide (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { title: "Spam policies for Google web search (Stand 28. August 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { title: "Google Search’s guidance on using generative AI content on your website (Stand 1. Oktober 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { title: "Google Search Central: Documentation updates (Einträge vom 8. Mai und 15. Juni 2026 zu FAQ-Rich-Results)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Local business (LocalBusiness) structured data (Stand 8. September 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business" },
    { title: "General structured data guidelines (Stand 10. Juli 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies" },
    { title: "Understand the JavaScript SEO basics (Stand 4. März 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
    { title: "Add a Byline Date to Google Search Results (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/publication-dates" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Präsentation Ihres Unternehmens auf Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Searching the web with ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Perplexity Crawlers", publisher: "Perplexity Docs", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Claude Help Center (Anthropic)", url: "https://support.claude.com/en/articles/8896518" },
    { title: "Optimizing Your Content for Inclusion in AI Search Answers (8. Oktober 2025)", publisher: "Microsoft Advertising Blog", url: "https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers" },
    { title: "Bing Adds GEO to Official Guidelines, Expands AI Abuse Definitions (27. Februar 2026)", publisher: "Search Engine Journal", url: "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442" },
  ],
  related: [
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
    { slug: "ai-search-optimization-2026", title: "AI Search Optimization 2026" },
    { slug: "chatgpt-zitiert-lokale-unternehmen", title: "Wie ChatGPT lokale Unternehmen zitiert" },
    { slug: "schema-markup-local-seo", title: "Schema Markup für lokale Unternehmen" },
  ],
  cta: {
    title: "Verstehen Suchmaschinen und KI Ihre Leistungsseiten?",
    text: "Wir sehen uns Ihre Startseite, eine Leistungsseite und die Kontaktseite an: ob die wichtigsten Fakten als Text im HTML stehen, ob sie mit Ihrem Unternehmensprofil übereinstimmen und was KI-Antworten bei typischen Fragen daraus machen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
