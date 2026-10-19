import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ki-aufgaben-hotel-rezeption",
  lang: "de",
  seoTitle: "KI an der Hotel-Rezeption: Welche Aufgaben sie übernimmt",
  seoDescription:
    "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann: Anfragen, Angebote, Bewertungen, Berichte. Mit Aufgaben-Landkarte, Datenschutz und KI-Kompetenz.",
  h1: "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann",
  kicker: "KI in der Hotellerie",
  lead:
    "Für Hoteliers und Front-Office-Leitungen in Deutschland, Österreich und der Schweiz. Sie sehen, welche Aufgaben an Rezeption und Reservierung KI erledigen kann, welche sie vorbereitet und welche beim Menschen bleiben. Dazu: Gästedaten, Anbindung an Ihr PMS, Zeitmessung und die Pflicht zur KI-Kompetenz.",
  answer:
    "KI kann an der Rezeption vor allem Schreibarbeit übernehmen. Tagesberichte, Übergabenotizen, Übersetzungen und Standard-E-Mails vor der Anreise erledigt sie mit Stichproben. Antworten auf Anfragen, Angebote und Bewertungen bereitet sie vor, ein Mensch prüft und sendet. **Der Gast am Tresen, Beschwerden und Entscheidungen über Kulanz bleiben menschlich.** Ob sich das lohnt, zeigt erst eine Messung mit Ihren eigenen Zahlen.",
  takeaways: [
    "Zerlegen Sie Rezeption und Reservierung in einzelne Aufgaben und ordnen Sie jede einer von drei Klassen zu: KI erledigt es, KI bereitet vor und ein Mensch entscheidet, oder sie bleibt menschlich.",
    "Was öffentlich wird oder Geld betrifft, etwa Angebote und Bewertungsantworten, gibt immer ein Mensch frei.",
    "Gästedaten gehören nur in Werkzeuge mit Vertrag zur Auftragsverarbeitung, betrieblichen Konten und abgeschaltetem Training. So empfiehlt es die Datenschutzkonferenz.",
    "Seit dem 2. Februar 2025 müssen Betriebe, die KI einsetzen, Maßnahmen zur KI-Kompetenz ihres Personals ergreifen (Art. 4 KI-Verordnung). Ein Zertifikat verlangt die EU-Kommission nicht.",
    "Messen Sie die Zeit je Aufgabe in einer Woche vor und einer Woche nach der Einführung. Erst diese Zahlen zeigen, was KI in Ihrem Haus bringt.",
  ],
  publishedAt: "2026-10-10",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "aufgaben-landkarte",
      title: "Die Aufgaben-Landkarte: drei Klassen statt einer großen KI-Frage",
      answer:
        "Statt zu fragen, ob KI die Rezeption übernehmen kann, zerlegen Sie die Arbeit in einzelne Aufgaben. Jede Aufgabe bekommt eine von drei Klassen: KI erledigt es, KI bereitet vor und ein Mensch entscheidet, oder sie bleibt menschlich.",
      blocks: [
        {
          t: "p",
          text: "Eine Rezeption ist keine einzelne Tätigkeit. Zwischen Frühdienst und Nachtaudit liegen viele Aufgaben mit sehr unterschiedlichem Charakter: die Anfrage, ob der Hund mit aufs Zimmer darf, ein Paketangebot für ein Wellnesswochenende, die Antwort auf eine Drei-Sterne-Bewertung, der Bericht für die Morgenbesprechung. Manche davon sind reine Schreibarbeit. Andere leben vom Gespräch.",
        },
        {
          t: "ul",
          items: [
            "**KI erledigt es.** Die KI liefert das Ergebnis selbst, ein Mensch prüft regelmäßig Stichproben. Das passt für wiederkehrende Texte mit klarer Vorlage, bei denen ein kleiner Fehler keinen großen Schaden anrichtet.",
            "**KI bereitet vor, Mensch entscheidet.** Die KI schreibt den Entwurf, ein Mensch prüft Fakten, Preis und Ton und schickt ihn ab. Das passt für alles, was der Gast direkt liest oder was Geld betrifft.",
            "**Bleibt menschlich.** Gespräche am Tresen, Beschwerden und Entscheidungen mit Ermessen. Hier hilft KI höchstens danach, etwa beim Protokoll.",
          ],
        },
        {
          t: "p",
          text: "Diese Einteilung nutzen wir auch in der [Aufgaben-Landkarte](/de/ki#task-map) auf unserer KI-Seite. Dort können Sie die Rolle „Hotel-Rezeption“ wählen, die Stunden anpassen und jede Aufgabe per Tipp einer anderen Klasse zuordnen.",
        },
      ],
    },
    {
      id: "aufgaben-im-ueberblick",
      title: "Welche Rezeptionsaufgaben in welche Klasse gehören",
      answer:
        "Schreibarbeit nach festen Mustern kann KI erledigen. Texte an Gäste mit Preisen oder öffentlicher Wirkung bereitet sie vor, und alles, was Gespür, Gespräch oder eine Entscheidung verlangt, bleibt bei Ihrem Team.",
      blocks: [
        {
          t: "table",
          caption: "Aufgaben an Rezeption und Reservierung: ein Vorschlag für die Einteilung",
          head: ["Aufgabe", "Klasse", "Warum"],
          rows: [
            ["Tagesbericht (Anreisen, Abreisen, Belegung, Besonderheiten)", "KI erledigt es", "Fasst Daten aus einem täglichen Export zusammen. Feste Struktur, eine Stichprobe gegen das PMS genügt."],
            ["Übergabenotiz zum Schichtwechsel", "KI erledigt es", "Macht aus Stichpunkten und Logbuch eine geordnete Notiz. Die übergebende Person liest sie vor Dienstende gegen."],
            ["Standard-E-Mail vor der Anreise", "KI erledigt es", "Freigegebene Vorlage mit Check-in-Zeit, Anfahrt und Parken. Sobald ein Gast besondere Wünsche hat, wechselt die Mail in die mittlere Klasse."],
            ["Übersetzung freigegebener Standardtexte", "KI erledigt es", "Hausinfos und Vorlagen in weitere Sprachen. Wichtige Texte prüft einmal jemand mit Muttersprache."],
            ["Antworten auf Gästeanfragen", "KI bereitet vor", "Entwurf aus Ihrem Hauswissen. Verfügbarkeit und Preis müssen aus dem System stammen, ein Mensch prüft und sendet."],
            ["Angebots- und Paket-E-Mails", "KI bereitet vor", "Bausteine aus Ihren Paketbeschreibungen. Preis, Konditionen und Stornobedingungen gibt ein Mensch frei."],
            ["Antworten auf Bewertungen", "KI bereitet vor", "Die Antwort ist öffentlich, und der Gast wird benachrichtigt. Ton und Fakten prüft ein Mensch."],
            ["FAQ und Hausinfos für Gäste", "KI bereitet vor", "Entwurf aus Ihren Unterlagen. Zeiten, Preise und Hausregeln bestätigt das Team, bevor etwas veröffentlicht wird."],
            ["Gäste am Tresen, Check-in, Telefonate", "Bleibt menschlich", "Gastfreundschaft entsteht im Gespräch. Für diese Aufgabe soll die gewonnene Zeit da sein."],
            ["Beschwerden vor Ort", "Bleibt menschlich", "Verlangt Zuhören, eine Entschuldigung und sofortiges Handeln. Eine Nachfassmail kann KI danach vorbereiten."],
            ["Kulanz, Upgrades, Überbuchung, Stornogebühren", "Bleibt menschlich", "Ermessensentscheidungen mit Folgen für Gast und Umsatz. Sie brauchen Verantwortung und Kenntnis des Gastes."],
          ],
        },
        {
          t: "p",
          text: "Die Einteilung ist ein Vorschlag, keine feste Regel. Ein Haus mit vielen Gruppenanfragen ordnet Angebote vielleicht strenger ein als ein Stadthotel mit wenigen Zimmertypen. Wichtig ist, dass Sie die Entscheidung je Aufgabe bewusst treffen und schriftlich festhalten.",
        },
        {
          t: "p",
          text: "Bei Bewertungen lohnt der genaue Blick in Googles Hilfe: Antworten erscheinen öffentlich als Antwort des Unternehmens, der Verfasser wird benachrichtigt, und Google prüft die Antwort vor der Veröffentlichung. Formulierungshilfen für verschiedene Fälle finden Sie in unseren [Vorlagen für Bewertungsantworten](/blog/bewertungs-antworten-vorlagen).",
        },
      ],
    },
    {
      id: "beispielwoche",
      title: "Beispielwoche: wie viel Zeit im Spiel sein kann",
      answer:
        "Ein Rechenbeispiel mit angenommenen Stunden zeigt die Größenordnung, ersetzt aber keine Messung. Mit den Standardannahmen unseres Rechners ergeben sich im Beispiel rund sieben Stunden pro Woche und Person.",
      blocks: [
        {
          t: "table",
          caption: "Beispiel mit angenommenen Stunden für die Rolle Hotel-Rezeption, keine Messung",
          head: ["Aufgabe", "Stunden pro Woche (angenommen)", "Klasse", "Rechnerisch frei"],
          rows: [
            ["Antworten auf Gästeanfragen", "8", "KI bereitet vor", "3,2 Std."],
            ["Angebots- und Paket-E-Mails", "4", "KI bereitet vor", "1,6 Std."],
            ["Antworten auf Bewertungen", "2", "KI bereitet vor", "0,8 Std."],
            ["Tagesberichte", "2", "KI erledigt es", "1,4 Std."],
            ["Gäste an der Rezeption", "15", "Bleibt menschlich", "0 Std."],
            ["Summe", "31", "", "7,0 Std."],
          ],
        },
        {
          t: "p",
          text: "Die Rechnung nutzt die zwei Annahmen, die im Rechner offen neben dem Ergebnis stehen: Eine Aufgabe der Klasse „KI erledigt es“ spart 70 Prozent ihrer Zeit, eine Aufgabe der Klasse „KI bereitet vor“ 40 Prozent. Das sind Arbeitsannahmen, keine Messwerte. Sie können sie im Rechner ändern.",
        },
        {
          t: "p",
          text: "Auffällig ist das Verhältnis. Der größte Block, die Gäste am Tresen, bleibt unberührt. Die Zeit entsteht in der Schreibarbeit dahinter. Probieren Sie die Rechnung mit Ihren eigenen Stunden in der [Aufgaben-Landkarte](/de/ki#task-map) aus.",
        },
      ],
    },
    {
      id: "was-menschlich-bleibt",
      title: "Was an der Rezeption menschlich bleibt",
      answer:
        "Der Kontakt mit dem Gast vor Ort, der Umgang mit Beschwerden und jede Entscheidung mit Ermessen bleiben beim Menschen. KI soll Zeit für diese Aufgaben freimachen, nicht sie ersetzen.",
      blocks: [
        {
          t: "p",
          text: "Unsere Haltung nach sieben Jahren in der Hotellerie: Die Begrüßung, das Gespräch über die beste Wanderroute und die Lösung, wenn das Zimmer nicht passt, sind der Kern des Berufs. Genau dafür fehlt oft die Zeit, wenn der Posteingang voll ist.",
        },
        {
          t: "ul",
          items: [
            "**Begrüßung, Check-in und Gespräch.** Auch wo Self-Check-in technisch möglich ist, entscheiden Sie, wo Ihr Haus persönlichen Kontakt will.",
            "**Beschwerden.** Ein verärgerter Gast braucht einen Menschen, der zuhört und handeln darf. KI kann danach die Zusammenfassung oder die Nachfassmail vorbereiten.",
            "**Ermessen und Geld.** Kulanz, Upgrades, Umbuchung bei Überbuchung, Erlass von Stornogebühren. Die Datenschutzkonferenz weist darauf hin, dass Entscheidungen mit Rechtswirkung nach Art. 22 DS-GVO grundsätzlich Menschen treffen und dass eine nur formelle Beteiligung eines Menschen nicht ausreicht.",
            "**Sensible Situationen.** Krankheit, Unfall, Trauerfall, Streit zwischen Gästen.",
          ],
        },
        {
          t: "p",
          text: "Auch in der mittleren Klasse liegt die Verantwortung beim Menschen. Die Datenschutzkonferenz schreibt, dass Zeitdruck und knappes Personal nicht dazu führen dürfen, dass KI-Ergebnisse ungeprüft übernommen werden. Planen Sie die Prüfzeit deshalb fest ein, statt sie wegzurechnen.",
        },
      ],
    },
    {
      id: "datenschutz-gaestedaten",
      title: "Datenschutz: Gästedaten und KI",
      answer:
        "Gästedaten sind personenbezogene Daten. Nach der Orientierungshilfe der deutschen Datenschutzkonferenz brauchen Sie für jede Verarbeitung mit KI einen festgelegten Zweck und eine Rechtsgrundlage, bei Cloud-Diensten in der Regel auch einen Vertrag zur Auftragsverarbeitung.",
      blocks: [
        {
          t: "p",
          text: "Die Datenschutzkonferenz (DSK) der deutschen Aufsichtsbehörden hat im Mai 2024 eine Orientierungshilfe zu KI und Datenschutz veröffentlicht. Sie ersetzt keine Prüfung Ihres Einzelfalls, ist aber eine gute amtliche Checkliste für den Einstieg. Die wichtigsten Punkte für die Rezeption:",
        },
        {
          t: "ul",
          items: [
            "**Zweck vorher festlegen.** Schreiben Sie auf, wofür das Werkzeug genutzt wird, zum Beispiel „Entwürfe für Antworten auf Gästeanfragen“. Nur so lässt sich prüfen, welche Daten dafür nötig sind.",
            "**Vertrag mit dem Anbieter.** Wer eine KI als Cloud-Dienst nutzt, steht laut DSK häufig in einem Auftragsverarbeitungsverhältnis und muss eine Vereinbarung nach Art. 28 Abs. 3 DS-GVO schließen. Bei Übermittlungen in Drittstaaten gelten zusätzlich die Regeln in Kapitel V der DS-GVO.",
            "**Kein Training mit Gästedaten.** Die DSK hält Anwendungen für vorzugswürdig, die Ein- und Ausgaben nicht zum Training nutzen. Stellen Sie das und die Speicherung des Verlaufs schon beim Einrichten der Konten ein.",
            "**Betriebliche Konten statt privater.** Die DSK empfiehlt Konten und Geräte vom Arbeitgeber und Funktions-E-Mail-Adressen statt privater Zugänge.",
            "**Schriftliche Regeln mit Beispielen.** Legen Sie fest, welche Aufgaben mit welchem Werkzeug erlaubt sind und welche nicht. Die DSK empfiehlt dafür ausdrücklich konkrete Beispiele.",
            "**Namen weglassen reicht oft nicht.** Laut DSK kann sich der Personenbezug aus dem Zusammenhang ergeben, etwa aus Anreisedatum, Zimmer und Anlass der Reise.",
            "**Datenschutzbeauftragte und Betriebsrat einbinden.** Die DSK rät, beide früh zu beteiligen. Sie weist außerdem darauf hin, dass beim Einsatz von KI vielfach eine Datenschutz-Folgenabschätzung nötig sein wird.",
          ],
        },
        {
          t: "note",
          label: "Vorsicht bei Gesundheitsangaben",
          text: "Angaben zu Allergien, Unverträglichkeiten, Medikamenten oder einer Behinderung können Gesundheitsdaten sein. Deren Verarbeitung ist nach Art. 9 Abs. 1 DS-GVO grundsätzlich verboten und nur unter den Ausnahmen des Art. 9 Abs. 2 erlaubt. Lassen Sie solche Angaben aus KI-Eingaben heraus, solange Ihr Datenschutzbeauftragter keine Grundlage dafür bestätigt hat.",
        },
        {
          t: "p",
          text: "Die Orientierungshilfe stammt aus Deutschland. In Österreich gilt dieselbe DS-GVO, in der Schweiz eigenes Datenschutzrecht. Lassen Sie die konkrete Rechtsgrundlage für Ihr Haus von Ihrem Datenschutzbeauftragten oder einer Kanzlei prüfen.",
        },
      ],
    },
    {
      id: "pms-und-buchungstools",
      title: "Anbindung an PMS und Buchungstools",
      answer:
        "Wie eng KI mit Ihrem Property-Management-System (PMS) zusammenarbeitet, bestimmt den Nutzen und das Risiko. Es gibt drei Stufen: Arbeiten mit Vorlagen, Arbeiten mit Exporten und eine direkte Schnittstelle.",
      blocks: [
        {
          t: "ol",
          items: [
            "**Vorlagen und Hauswissen.** Das Team gibt die Gästeanfrage in ein KI-Projekt ein, das Ihre Hausinfos, Paketbeschreibungen und Tonregeln kennt. Verfügbarkeit und Preise schaut ein Mensch im PMS nach. Dafür ist kein technischer Eingriff nötig, das macht diese Stufe zum guten Einstieg.",
            "**Exporte.** Wenn Ihr System Listen wie Anreisen, Abreisen und Belegung als Datei ausgeben kann, wird ein täglicher Export zur Grundlage für Tagesbericht und Übergabe. Prüfen Sie, welche Felder der Export enthält, und lassen Sie Gästedaten weg, die der Bericht nicht braucht.",
            "**Schnittstelle.** Manche Systeme bieten eine Programmierschnittstelle (API), über die eine KI Daten lesen oder Entwürfe ablegen kann. Ob Ihr System das kann, was es kostet und welche Rechte dabei vergeben werden, klären Sie mit Ihrem Anbieter.",
          ],
        },
        {
          t: "p",
          text: "Fragen Sie auf jeder Stufe: Welche Daten fließen wohin, wer hat Zugriff, und darf die KI nur lesen oder auch schreiben? Lassen Sie KI keine Buchungen, Preise oder Verfügbarkeiten selbst ändern. Solche Schritte bleiben menschlich oder brauchen mindestens eine Freigabe.",
        },
        {
          t: "p",
          text: "Das gilt besonders für alles, was auf Ihrer Website, im Google-Profil oder in Buchungsportalen erscheint. Wie diese Kanäle für Direktbuchungen zusammenspielen, beschreibt der Artikel [Local SEO für Hotels](/blog/local-seo-hotels).",
        },
      ],
    },
    {
      id: "zeit-messen",
      title: "Zeit vorher und nachher messen",
      answer:
        "Ob KI Ihrer Rezeption Zeit spart, zeigt nur eine Messung mit Ihren eigenen Zahlen. Messen Sie eine normale Woche vor der Einführung und eine vergleichbare Woche danach, Aufgabe für Aufgabe.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Eine Woche protokollieren",
              text: "Jede Person notiert für die Aufgaben aus der Landkarte die Zeit, auf etwa fünf Minuten genau. Eine einfache Tabelle am Arbeitsplatz genügt.",
            },
            {
              title: "Menge mitzählen",
              text: "Zählen Sie, wie viele Anfragen, Angebote und Bewertungsantworten es waren. Erst die Zeit pro Stück macht Wochen mit unterschiedlicher Auslastung vergleichbar.",
            },
            {
              title: "Einen Ablauf auswählen",
              text: "Beginnen Sie mit einer Aufgabe, die viel Zeit kostet und wenig Risiko trägt, zum Beispiel Antworten auf Standardanfragen.",
            },
            {
              title: "Regeln und Vorlagen festlegen",
              text: "Zweck, erlaubte Daten, Prüfschritt und Vorlage schriftlich festhalten, bevor das Team startet.",
            },
            {
              title: "Nachher genauso messen",
              text: "Nach einer Eingewöhnung messen Sie eine vergleichbare Woche mit derselben Methode. Die Prüfzeit gehört mit in die Messung.",
            },
            {
              title: "Qualität mitprüfen",
              text: "Notieren Sie, wie oft Entwürfe korrigiert werden mussten und ob Rückfragen von Gästen zugenommen haben. Weniger Zeit bei schlechteren Antworten ist kein Gewinn.",
            },
            {
              title: "Entscheiden",
              text: "Behalten, anpassen oder zurück zur alten Arbeitsweise. Danach kommt die nächste Aufgabe an die Reihe.",
            },
          ],
        },
        {
          t: "p",
          text: "Vergleichen Sie Saisonzeiten fair. Eine Woche im Januar und eine im August sagen wenig übereinander. Die Zeit pro Anfrage ist deshalb aussagekräftiger als die Stunden pro Woche.",
        },
      ],
    },
    {
      id: "ki-kompetenz-und-transparenz",
      title: "KI-Kompetenz und Transparenz: was die KI-Verordnung verlangt",
      answer:
        "Seit dem 2. Februar 2025 verlangt Artikel 4 der EU-KI-Verordnung von Betrieben, die KI einsetzen, Maßnahmen zur KI-Kompetenz ihres Personals. Das gilt auch, wenn Ihr Team nur Texte entwerfen oder übersetzen lässt.",
      blocks: [
        {
          t: "p",
          text: "Nach Artikel 113 der KI-Verordnung gelten Kapitel I und II, darunter Artikel 4, ab dem 2. Februar 2025. Ein Hotel, das ein KI-Werkzeug beruflich nutzt, ist in der Sprache der Verordnung „Betreiber“ eines KI-Systems.",
        },
        {
          t: "p",
          text: "Mit dem sogenannten Digital-Omnibus wurde Artikel 4 im Juli 2026 angepasst. Nach Darstellung der EU-Kommission bleibt die Pflicht bestehen, ein bestimmtes oder „ausreichendes“ Niveau wird aber nicht mehr vorgeschrieben. In ihren Fragen und Antworten beschreibt die Kommission einen Fall, der der Rezeption sehr nahekommt: Beschäftigte, die ChatGPT für Werbetexte oder Übersetzungen nutzen, fallen unter Artikel 4 und sollten über die besonderen Risiken informiert werden, etwa erfundene Inhalte.",
        },
        {
          t: "ul",
          items: [
            "Ein Zertifikat ist laut Kommission nicht nötig. Ein internes Verzeichnis der Schulungen und Anleitungen kann als Dokumentation dienen.",
            "Eine eigene KI-Beauftragte oder ein KI-Gremium schreibt Artikel 4 nicht vor.",
            "Die Maßnahmen sollen zu Wissen, Erfahrung und Einsatzzweck passen. Für die Rezeption heißt das: was das Werkzeug kann, wo es Fehler macht, welche Daten nicht hineingehören und wer freigibt.",
          ],
        },
        {
          t: "p",
          text: "Wenn Sie Gästen einen KI-Chat auf der Website anbieten, kommt Artikel 50 hinzu, der seit dem 2. August 2026 gilt. KI-Systeme, die direkt mit Menschen interagieren, müssen so gestaltet sein, dass die Menschen erfahren, dass sie mit einer KI sprechen, es sei denn, das ist offensichtlich. Die Pflicht trifft zunächst den Anbieter des Systems. Achten Sie bei der Auswahl darauf und sagen Sie es Ihren Gästen ohnehin klar.",
        },
        {
          t: "p",
          text: "Unser [Claude-Team-Onboarding](/de/ki#prices) enthält ein halbtägiges Live-Training und einen Schulungsnachweis für Ihre Unterlagen.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann KI die Hotel-Rezeption komplett ersetzen?",
      a: "Nein, und das ist auch nicht das Ziel. KI kann einen Teil der Schreibarbeit erledigen oder vorbereiten. Der Kontakt mit Gästen vor Ort, Beschwerden und Entscheidungen mit Ermessen bleiben beim Team.",
    },
    {
      q: "Dürfen Gästedaten in ChatGPT, Claude oder ähnliche Werkzeuge?",
      a: "Nur mit festgelegtem Zweck, einer Rechtsgrundlage und bei Cloud-Diensten in der Regel einem Vertrag zur Auftragsverarbeitung mit dem Anbieter. Die Datenschutzkonferenz empfiehlt betriebliche Konten statt privater und Einstellungen, bei denen Eingaben nicht zum Training genutzt werden.",
    },
    {
      q: "Wie viel Zeit spart KI an der Rezeption?",
      a: "Das lässt sich seriös nur mit Ihren Zahlen sagen. Messen Sie die Zeit je Aufgabe eine Woche vor und eine Woche nach der Einführung. Ein Rechenbeispiel mit angenommenen Stunden finden Sie in der [Aufgaben-Landkarte](/de/ki#task-map). Eine pauschale Prozentzahl versprechen wir nicht.",
    },
    {
      q: "Brauchen Rezeptionsmitarbeiter eine KI-Schulung?",
      a: "Wenn Ihr Team KI beruflich nutzt, ja. Artikel 4 der KI-Verordnung verlangt seit dem 2. Februar 2025 Maßnahmen zur KI-Kompetenz. Ein Zertifikat ist laut EU-Kommission nicht nötig, ein internes Verzeichnis der Schulungen kann als Dokumentation dienen.",
    },
    {
      q: "Sollte KI Bewertungen automatisch beantworten?",
      a: "Wir raten davon ab. Antworten erscheinen öffentlich unter der Bewertung, und der Gast wird benachrichtigt. Lassen Sie KI Entwürfe schreiben und geben Sie jede Antwort von Hand frei, vor allem bei Kritik.",
    },
    {
      q: "Was kostet die Einführung bei LocalDominate?",
      a: "Der KI-Aufgaben-Check für eine Rolle ist kostenlos. Das AI Potential Audit kostet 1.490 € und wird voll angerechnet, wenn Sie innerhalb von 60 Tagen einen Sprint oder das System buchen. Das Claude-Team-Onboarding für bis zu zehn Personen kostet 2.900 €, ein Workflow-Sprint ab 4.900 €. Alle Preise netto, Details unter [Preise](/de/ki#prices).",
    },
  ],
  sources: [
    {
      title: "Verordnung (EU) 2024/1689 über künstliche Intelligenz (KI-Verordnung), Art. 4, Art. 50 und Art. 113",
      publisher: "Amtsblatt der Europäischen Union, EUR-Lex",
      url: "https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32024R1689",
    },
    {
      title: "AI Literacy: Questions & Answers",
      publisher: "Europäische Kommission, Shaping Europe's digital future",
      url: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
    },
    {
      title: "The Digital Omnibus on AI enters into force today (27. Juli 2026)",
      publisher: "Lewis Silkin",
      url: "https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo",
    },
    {
      title: "Orientierungshilfe Künstliche Intelligenz und Datenschutz, Version 1.0 (6. Mai 2024)",
      publisher: "Datenschutzkonferenz (DSK)",
      url: "https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf",
    },
    {
      title: "Kundenrezensionen verwalten",
      publisher: "Google Unternehmensprofil-Hilfe",
      url: "https://support.google.com/business/answer/3474050?hl=de",
    },
  ],
  related: [
    { slug: "claude-im-team-einfuehren", title: "Claude im Team einführen: Schritt für Schritt" },
    { slug: "ki-kompetenzpflicht-art-4-ki-verordnung", title: "KI-Kompetenzpflicht nach Art. 4 KI-Verordnung: Was KMU jetzt tun müssen" },
    { slug: "local-seo-hotels", title: "Local SEO für Hotels: So holen Sie mehr Direktbuchungen über Google" },
    { slug: "bewertungs-antworten-vorlagen", title: "Bewertungs-Antworten: 50 Vorlagen für jede Situation" },
  ],
  cta: {
    kicker: "Kostenloser KI-Check",
    title: "Was kann KI an Ihrer Rezeption übernehmen?",
    text: "Nennen Sie uns die Rolle Rezeption oder Reservierung. Sie erhalten innerhalb von zwei Werktagen eine schriftliche Aufgaben-Landkarte mit dem ersten Schritt, kostenlos und ohne Verpflichtung.",
    label: "Kostenlosen KI-Check anfordern",
    to: "/de/ki#ai-check",
  },
};

export default article;
