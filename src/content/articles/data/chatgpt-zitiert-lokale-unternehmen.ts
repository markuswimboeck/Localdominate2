import type { V4Article } from "../types";

const article: V4Article = {
  slug: "chatgpt-zitiert-lokale-unternehmen",
  lang: "de",
  seoTitle: "Wie ChatGPT lokale Unternehmen zitiert: Quellen verstehen",
  seoDescription:
    "Wie ChatGPT Quellen anzeigt, welche Seiten bei lokalen Fragen verlinkt werden und wie Sie für Ihre Branche und Ihren Ort eine eigene Quellenkarte erstellen.",
  h1: "Wie ChatGPT lokale Unternehmen zitiert: Quellen verstehen und eigene Seiten zitierfähig machen",
  kicker: "KI-Suche",
  lead:
    "Für Inhaber lokaler Betriebe, die wissen wollen, warum ChatGPT bei Fragen nach ihrer Branche bestimmte Seiten verlinkt. Sie erfahren, was OpenAI über Quellen dokumentiert, wie Sie die Quellen für Ihren Ort selbst ermitteln und wie Sie eigene Seiten als Beleg tauglich machen.",
  answer:
    "ChatGPT kann bei Antworten mit Websuche einzelne Seiten als **Quellenangaben** im Text verlinken, weitere Links stehen, falls verfügbar, hinter der Schaltfläche „Quellen“. Wie die Quellen ausgewählt werden, beschreibt OpenAI nur grob: mehrere Faktoren, keine garantierte Platzierung. Für lokale Fragen kommen eigene Websites, Verzeichnisse, Bewertungsportale, Medien und Foren in Frage. Welche davon in Ihrem Ort zählen, zeigt eine eigene Quellenkarte.",
  takeaways: [
    "ChatGPT zeigt Quellen auf zwei Ebenen: als Quellenangaben im Text und über die Schaltfläche „Quellen“, die laut OpenAI weitere relevante Links enthält.",
    "Wie Quellen ausgewählt werden, dokumentiert OpenAI nur grob. Eine Platzierung ist nicht garantiert, und Anzeigen beeinflussen die Antworten laut OpenAI nicht.",
    "Für lokale Fragen kommen Websites, Verzeichnisse, Bewertungs- und Buchungsportale, lokale Medien und Foren in Frage. Welche zählen, zeigt ein Test in Ihrem Markt.",
    "Eine Quellenkarte aus zehn bis fünfzehn Kundenfragen zeigt, welche Seiten in Ihrer Branche und Ihrem Ort verlinkt werden und wo Ihre Angaben stimmen müssen.",
    "Zitierfähige Seiten beantworten eine Frage im ersten Satz, nennen Fakten als Text, liefern Einzelheiten, die nur Sie kennen, und zeigen einen Stand.",
  ],
  publishedAt: "2026-05-20",
  updatedAt: "2026-10-11",
  readingTime: 12,
  sections: [
    {
      id: "begriffe",
      title: "Nennung, Quellenangabe, Firmeneintrag: drei verschiedene Dinge",
      answer:
        "Eine Nennung ist Ihr Betriebsname im Antworttext, eine Quellenangabe ist ein Link auf die Seite, aus der eine Aussage stammt. Beides ist etwas anderes als ein Firmeneintrag in einem Verzeichnis, den man in der lokalen Suchmaschinenoptimierung ebenfalls „Citation“ nennt.",
      blocks: [
        {
          t: "table",
          caption: "Was in einer ChatGPT-Antwort zu Ihrem Betrieb auftauchen kann",
          head: ["Begriff", "Was es ist", "Wo Sie ansetzen"],
          rows: [
            ["Nennung", "Ihr Betriebsname steht im Antworttext, mit oder ohne Link", "Bei allen Seiten, aus denen ChatGPT Angaben übernimmt"],
            ["Quellenangabe auf Ihre Website", "Ein Link führt auf Ihre eigene Seite", "Auf Ihrer Website"],
            ["Quellenangabe auf eine fremde Seite", "Ein Link führt zu einem Verzeichnis, Portal, Medium oder Forum", "Bei Ihrem Eintrag oder Ihrer Erwähnung dort"],
            ["Firmeneintrag („Citation“ im Local SEO)", "Name, Adresse und Telefon in einem Verzeichnis, unabhängig von ChatGPT", "In einer gepflegten Liste aller Einträge"],
          ],
        },
        {
          t: "p",
          text: "Am meisten bringt die Kombination: Ihr Betrieb wird genannt, und die verlinkte Quelle enthält richtige Angaben. Wie Sie Firmeneinträge in einer Tabelle führen, zeigt die [Citation-Tracking-Vorlage](/blog/citation-tracking-template). Wie das Thema in die Optimierung für KI-Antworten insgesamt passt, erklärt [Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization).",
        },
      ],
    },
    {
      id: "wie-chatgpt-quellen-zeigt",
      title: "So zeigt ChatGPT seine Quellen",
      answer:
        "Antworten mit Websuche können Quellenangaben im Text enthalten, die per Klick zur Quelle führen. Die Schaltfläche „Quellen“ zeigt laut OpenAI die zitierten Quellen und weitere relevante Links, in den Apps für iOS und Android kann zusätzlich eine Karte erscheinen.",
      blocks: [
        {
          t: "p",
          text: "ChatGPT kann laut OpenAI automatisch im Web suchen, wenn eine Frage von aktuellen Informationen profitiert. Nutzer können die Suche auch selbst wählen: im Menü „Alle Tools anzeigen“ unter „Suchen“ oder mit einem Schrägstrich. Quellenangaben beschreibt OpenAI nur für Antworten mit Websuche, und nur diese zählen für Ihre Auswertung.",
        },
        {
          t: "table",
          caption: "Wie Quellen in ChatGPT erscheinen (laut OpenAI-Hilfe)",
          head: ["Element", "Was OpenAI beschreibt", "Was das für Sie heißt"],
          rows: [
            ["Quellenangabe im Text", "Ein Klick öffnet die Quelle; am Computer zeigt das Darüberfahren mit der Maus eine Vorschau", "Diese Seiten stützen einzelne Aussagen"],
            ["Schaltfläche „Quellen“", "Zeigt, wenn verfügbar, die zitierten Quellen und weitere relevante Links", "Hier stehen auch Seiten, die im Text nicht verlinkt sind"],
            ["Karte", "In den Apps für iOS und Android können relevante Ergebnisse eine Karte enthalten", "Betriebe können als Punkt auf einer Karte erscheinen"],
            ["Reservierungen", "Je nach Restaurant OpenTable (weltweit), Resy (USA) oder Yelp (USA und Kanada)", "In Deutschland, Österreich und der Schweiz kommt davon nur OpenTable in Frage"],
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "OpenAI schreibt selbst, dass Suchergebnisse und Quellenangaben unvollständig, veraltet oder falsch sein können, und rät Nutzern, die Quellen zu öffnen und Veröffentlichungs- oder Aktualisierungsdaten zu prüfen. Wer auf eine Quelle zu Ihrem Betrieb klickt, prüft also dort nach.",
        },
        {
          t: "p",
          text: "Die Darstellung ändert sich mit neuen Versionen: Bei der Einführung im Oktober 2024 öffnete die Schaltfläche „Quellen“ eine Seitenleiste; wie die Quellen heute aussehen, kann je nach Gerät und Version abweichen. Ob Ihre Seiten überhaupt mit Ausschnitten erscheinen dürfen, hängt vom Crawler OAI-SearchBot ab, wie [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026#crawler) beschreibt.",
        },
      ],
    },
    {
      id: "auswahl-der-quellen",
      title: "Was OpenAI über die Auswahl der Quellen sagt",
      answer:
        "OpenAI schreibt nur, dass ChatGPT Suchergebnisse nach mehreren Faktoren für relevante und verlässliche Informationen ordnet, teils mit Suchanbietern anderer Firmen zusammenarbeitet, Inhalte von Partnern nutzt und keine Platzierung garantiert. Eine Gewichtung einzelner Faktoren veröffentlicht OpenAI nicht.",
      blocks: [
        {
          t: "table",
          caption: "Was OpenAI zur Auswahl der Quellen dokumentiert",
          head: ["Frage", "Was OpenAI sagt"],
          rows: [
            ["Nach welchen Kriterien wird sortiert?", "Nach mehreren Faktoren für relevante und verlässliche Informationen. Welche das sind, steht nicht da."],
            ["Woher kommen die Treffer?", "Laut Hilfe arbeitet die Suche „manchmal“ mit Suchanbietern anderer Firmen zusammen; laut Einführungsbeitrag von 2024 nutzt sie auch Inhalte, die Partner direkt liefern. Im Abschnitt über Suchanbieter verweist die Hilfe auf die Datenschutzerklärungen von Microsoft und Shopify."],
            ["Wie viele Quellen werden gezeigt?", "OpenAI nennt keine Zahl. Für die Websuche über seine Programmierschnittstelle, ein eigenes Produkt für Entwickler, schreibt OpenAI: Im Text stehen nur die wichtigsten Belege, herangezogen werden oft mehr Seiten. Für ChatGPT selbst beschreibt OpenAI das nicht; wir halten es für wahrscheinlich, dass auch dort Seiten gelesen werden, ohne im Text verlinkt zu sein."],
            ["Kann man einen Platz in der Antwort kaufen?", "Nein. Anzeigen beeinflussen die Antworten laut OpenAI nicht; sie sind bezahlte Plätze, als gesponsert gekennzeichnet und von der Antwort abgesetzt. Eine Platzierung in den Suchergebnissen ist nicht garantiert."],
            ["Gibt es ein Antragsformular für Websites?", "In den geprüften Seiten nennt OpenAI keines. Jede öffentliche Website kann in der Suche erscheinen."],
          ],
        },
        {
          t: "p",
          text: "Lokale Fragen sind für OpenAI ausdrücklich ein Thema. In den Versionshinweisen vom 24. Juni 2026 heißt es, Fragen nach lokalen Betrieben sollten nützlicher werden und das Modell nutze den Standortkontext besser, um passende Angebote in der Nähe zu zeigen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Weil OpenAI keine Gewichtung nennt, sind Listen mit „ChatGPT-Rankingfaktoren“ Vermutungen. Belastbarer ist, was Sie bei den Fragen Ihrer Kunden selbst sehen.",
        },
      ],
    },
    {
      id: "seitentypen",
      title: "Welche Arten von Seiten bei lokalen Fragen auftauchen",
      answer:
        "Für lokale Fragen kommen fünf Arten von Quellen in Frage: Websites von Betrieben, Verzeichnisse, Bewertungs- und Buchungsportale, lokale Medien und Verbände sowie Foren. Welche davon in Ihrer Branche und Ihrem Ort verlinkt werden, dokumentiert OpenAI nicht, das müssen Sie selbst prüfen.",
      blocks: [
        {
          t: "table",
          caption: "Quellentypen für lokale Fragen und was dazu belegt ist",
          head: ["Quellentyp", "Beispiele in DACH", "Was belegt ist"],
          rows: [
            ["Website eines Betriebs", "Leistungsseite, Kontaktseite, Speisekarte als Text", "Jede öffentliche Website kann laut OpenAI erscheinen."],
            ["Verzeichnisse", "Das Örtliche, Gelbe Seiten, Herold, local.ch, search.ch", "Keine Aussage von OpenAI zu einzelnen Verzeichnissen."],
            ["Bewertungs- und Buchungsportale", "Tripadvisor, OpenTable, Buchungsportale, Arzt- und Handwerkerportale", "OpenTable ist laut OpenAI weltweit Reservierungspartner. Yelp lizenziert laut Axios Bewertungen und Fotos an OpenAI, ohne Angabe der Länder."],
            ["Lokale Medien und Verbände", "Regionalzeitung, Stadtmagazin, Innung, Tourismusverband", "OpenAI nennt Partnerschaften mit Verlagen und Datenanbietern, aber keine Regel für lokale Medien."],
            ["Foren", "Stadtforen, Fachforen, Reddit", "In den geprüften OpenAI-Seiten nicht beschrieben. Laut OpenAI kann jede öffentliche Website erscheinen; geschlossene Gruppen sind nicht öffentlich."],
          ],
        },
        {
          t: "p",
          text: "Eine große Auswertung stammt von BrightLocal, einem Anbieter von Software für Firmeneinträge. Sie erschien im August 2026 und untersucht Antworten von ChatGPT und Googles KI-Funktionen für Betriebe in den USA, Großbritannien und Australien. Über alle drei untersuchten KI-Funktionen hinweg waren rund 93 % der zitierten Domains Websites einzelner Betriebe. Der Anteil bezieht sich auf verschiedene Domains, nicht darauf, wie oft eine Seite zitiert wird. Bei ChatGPT erschien Yelp laut BrightLocal „in 80 % aller Antworten“; die Tabelle der Studie zeigt Yelp bei 1.068 von 1.355 Standorten, gemeint ist also eher der Anteil der Betriebe. Den Zeitraum der Datenerhebung nennt die Studie nicht.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Auf Deutschland, Österreich und die Schweiz lassen sich diese Zahlen nicht übertragen. Wir erwarten je nach Branche andere Muster, etwa bei Restaurants und Hotels mehr Bewertungs- und Buchungsportale als bei Handwerk und Praxen. Das ist eine Arbeitshypothese, keine Messung.",
        },
      ],
    },
    {
      id: "quellenkarte",
      title: "Schritt für Schritt: die Quellenkarte für Ihre Branche und Ihren Ort",
      answer:
        "Eine Quellenkarte ist eine Tabelle: Sie stellen ChatGPT zehn bis fünfzehn typische Kundenfragen mit Ortsangabe, notieren alle verlinkten Quellen und zählen, welche Seiten immer wieder auftauchen. Das Ergebnis zeigt, wo Ihre Angaben stimmen müssen und wo Ihr Betrieb fehlt.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Fragen sammeln",
              text: "Schreiben Sie zehn bis fünfzehn Fragen auf, so wie Kunden sie stellen. Mischen Sie Empfehlungen („Welche Physiotherapie in Salzburg hat abends Termine?“), Fakten zu Ihrem Betrieb („Hat [Ihr Betrieb] in Lörrach sonntags geöffnet?“) und Ratgeberfragen („Fliesenleger in Winterthur: worauf achten?“). Passende Formulierungen finden Sie mit [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
            },
            {
              title: "Gleiche Bedingungen schaffen",
              text: "Jede Frage in einem neuen Chat, ohne Anmeldung oder in einem temporären Chat ohne Personalisierung; ein solcher Chat nutzt laut OpenAI keine Erinnerungen und keine eigenen Anweisungen. Wählen Sie die Suche ausdrücklich aus. Schreiben Sie den Ort in die Frage; ChatGPT kann laut OpenAI außerdem den ungefähren Standort aus der IP-Adresse Ihres Büros verwenden.",
            },
            {
              title: "Quellen erfassen",
              text: "Notieren Sie zwei Listen: die Quellenangaben im Text und die übrigen Links hinter „Quellen“. Halten Sie fest, ob Ihr Betrieb genannt wird und welche Wettbewerber vorkommen. Ein Bildschirmfoto dient als Beleg.",
            },
            {
              title: "Einordnen und zählen",
              text: "Ordnen Sie jede Domain einem Typ zu und zählen Sie, bei wie vielen Fragen sie auftaucht. Seiten, die bei mehreren Fragen verlinkt werden, sind Ihre wichtigsten Fremdquellen.",
            },
            {
              title: "Eigene Präsenz prüfen",
              text: "Öffnen Sie jede wichtige Quelle: Gibt es dort einen Eintrag oder eine Erwähnung Ihres Betriebs? Stimmen Name, Adresse, Telefon, Öffnungszeiten und Leistungen?",
            },
            {
              title: "Mit Ortsbezug nachfassen",
              text: "OpenAI rät, bei zweifelhaften Ergebnissen erneut suchen zu lassen und dabei eine Quelle, ein Datum oder einen Ort anzugeben. So sehen Sie, welche Quellen für einen Stadtteil oder Nachbarort auftauchen.",
            },
          ],
        },
        {
          t: "table",
          caption: "Vorlage für die Quellenkarte (Beispielzeile mit Platzhaltern)",
          head: ["Datum", "Frage", "Genannt?", "Quellen im Text", "Weitere Quellen", "Ihr Eintrag dort korrekt?"],
          rows: [
            ["TT.MM.JJJJ", "„Tierarzt mit Notdienst in Graz“", "Nein", "Praxis A (Website), Verzeichnis X", "Regionalzeitung Y, Forum Z", "Verzeichnis X: alte Telefonnummer"],
          ],
        },
        {
          t: "p",
          text: "Eine Stichprobe ist eine Momentaufnahme. Rechnen Sie damit, dass Antworten auch bei gleicher Frage schwanken, und wiederholen Sie die Karte über mehrere Monate. Wie Sie Wettbewerber systematisch vergleichen, zeigt die [Google-Maps-Konkurrenzanalyse](/blog/google-maps-konkurrenzanalyse).",
        },
      ],
    },
    {
      id: "eigene-seiten-zitierfaehig",
      title: "Eigene Seiten zitierfähig machen",
      answer:
        "Eine Seite ist zitierfähig, wenn ein einzelner Satz daraus eine Kundenfrage beantwortet und dieser Satz als Text auf der Seite steht. Dazu kommen Einzelheiten, die nur Sie liefern können, und ein sichtbarer Stand, damit Leser die Aktualität prüfen können.",
      blocks: [
        {
          t: "p",
          text: "Welche Eigenschaften eine Quellenangabe wahrscheinlicher machen, beschreibt OpenAI nicht. Die folgenden Regeln sind unsere Einschätzung, abgeleitet daraus, dass ChatGPT Quellen zu einzelnen Aussagen verlinkt und Nutzer die Quelle prüfen sollen.",
        },
        {
          t: "ul",
          items: [
            "**Fakten als Text.** Öffnungszeiten, Preisrahmen, Einzugsgebiet, Sprachen, Parkplätze und Zahlungsarten gehören in den Text der Seite, nicht in Bilder oder PDFs.",
            "**Antwort zuerst.** Unter jeder Zwischenüberschrift steht im ersten Satz die Antwort. „Ja, wir behandeln auch Kassenpatienten“ statt einer Einleitung über die Praxisphilosophie.",
            "**Eine Frage, eine Stelle.** Häufige Kundenfragen bekommen einen eigenen Abschnitt mit eigener Überschrift.",
            "**Einzelheiten, die nur Sie kennen.** Wie lange ein Termin dauert, welche Marken Sie warten, ob Hunde in den Gastraum dürfen, wo man im Winter parkt. Solche Angaben stehen meist in keinem Verzeichnis.",
            "**Sichtbarer Stand.** Ein Hinweis wie „Stand: Oktober 2026“ bei Preisen und Zeiten, passend zu OpenAIs Rat an Nutzer, Daten zu prüfen.",
          ],
        },
        {
          t: "table",
          caption: "Vorher und nachher (Beispiele)",
          head: ["Schwer zitierbar", "Zitierfähig"],
          rows: [
            ["„Wir sind Ihr kompetenter Partner rund ums Bad.“", "„Wir sanieren Bäder in Regensburg und im Umkreis von 30 Kilometern. Ein Komplettbad dauert bei uns meist drei Wochen.“"],
            ["„Rufen Sie uns gerne an.“", "„Telefonisch erreichbar Montag bis Freitag 7 bis 17 Uhr, bei Wasserschäden auch am Wochenende.“"],
            ["Speisekarte als PDF", "Speisekarte als Text, mit Kennzeichnung veganer Gerichte und Datum des Stands"],
          ],
        },
        {
          t: "p",
          text: "Welche Fakten auf eine Website gehören, listet der Abschnitt [klare, überprüfbare Fakten](/blog/ai-visibility-checklist#klare-fakten) unserer KI-Checkliste auf.",
        },
      ],
    },
    {
      id: "fremde-quellen",
      title: "In die fremden Quellen Ihrer Karte kommen",
      answer:
        "Für jede Fremdquelle, die auf Ihrer Karte oft vorkommt, gibt es einen erlaubten Weg: Verzeichniseinträge korrigieren, Profile auf Bewertungsportalen pflegen, echte Anlässe für lokale Medien schaffen. Gekaufte Bewertungen oder erfundene Forenbeiträge sind keine Abkürzung, sondern ein Risiko.",
      blocks: [
        {
          t: "table",
          caption: "Was Sie je Quellentyp tun können",
          head: ["Quellentyp", "Was Sie tun können", "Was Sie lassen sollten"],
          rows: [
            ["Verzeichnisse", "Eintrag beanspruchen, Daten an Ihre Stammdaten angleichen, Leistungen ergänzen", "Zweite Einträge für denselben Standort"],
            ["Bewertungs- und Buchungsportale", "Profil vervollständigen, alle Kunden um eine Bewertung bitten, sachlich antworten", "Bewertungen kaufen, belohnen oder nur zufriedene Kunden fragen"],
            ["Lokale Medien und Verbände", "Mitgliedschaften mit Eintrag, echte Anlässe wie Jubiläum, Ausbildung oder neue Leistung", "Verdeckt bezahlte Beiträge"],
            ["Foren", "Fragen unter Ihrem echten Namen beantworten, wenn das Forum das erlaubt", "Erfundene Empfehlungen oder Konten, die sich als Kunden ausgeben"],
          ],
        },
        {
          t: "p",
          text: "Verbreitet eine Quelle falsche Angaben über Sie, korrigieren Sie zuerst dort, wie in [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026) beschrieben. Für Verzeichnisse hilft [NAP-Konsistenz](/blog/nap-konsistenz-local-seo), für Medien und Verbände der Abschnitt zur Presse in [Local Link Building](/blog/local-link-building#presse).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ob ein Verzeichniseintrag Ihre Chance auf eine Nennung erhöht, dokumentiert OpenAI nicht. Sicher ist nur: Verlinkt ChatGPT eine Seite mit falschen Angaben, sehen Interessenten diese. Pflegen Sie deshalb zuerst die Quellen, die auf Ihrer Karte vorkommen.",
        },
      ],
    },
    {
      id: "messen",
      title: "Zitate messen",
      answer:
        "Messen Sie mit der monatlichen Quellenkarte, mit Besuchen über den Parameter utm_source=chatgpt.com in Ihrer Web-Analyse und mit Abrufen durch ChatGPT-User in den Server-Protokollen. Keine dieser Zahlen ist vollständig, zusammen ergeben sie ein brauchbares Bild.",
      blocks: [
        {
          t: "table",
          caption: "Vier Messquellen und ihre Grenzen",
          head: ["Messquelle", "Was sie zeigt", "Grenze"],
          rows: [
            ["Quellenkarte, monatlich", "Ob Sie genannt werden und welche Seiten verlinkt sind", "Stichprobe; Antworten können schwanken"],
            ["Web-Analyse mit utm_source=chatgpt.com", "Besuche über einen Link in ChatGPT und was die Besucher danach tun", "Nur Klicks; Nennungen ohne Klick fehlen"],
            ["Server-Protokolle mit ChatGPT-User", "Seiten, die ChatGPT abruft, wenn Nutzer eine Frage stellen", "Ein Abruf heißt nicht, dass die Seite zitiert wurde"],
            ["Nachfrage bei Neukunden", "Ob Kunden über eine KI-Antwort auf Sie gekommen sind", "Hängt von der Erinnerung der Kunden ab"],
          ],
        },
        {
          t: "p",
          text: "Laut OpenAI hängt ChatGPT den Parameter utm_source=chatgpt.com automatisch an Links an. In Ihrer Web-Analyse können Sie danach filtern. ChatGPT-User ruft laut OpenAI Seiten auf, wenn Nutzer eine Frage stellen, und crawlt nicht automatisch. Ob Sie Zugriffe nach User-Agent auswerten können, sagt Ihnen Ihr Hoster. Die Grundform der Stichprobe steht in [ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026#sichtbarkeit-pruefen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Häufen sich Abrufe durch ChatGPT-User auf einer Seite, wird sie vermutlich für Fragen von Nutzern herangezogen. Ein Beweis für eine Quellenangabe ist das nicht. Werten Sie es zusammen mit der Quellenkarte aus.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Warum nennt ChatGPT meinen Betrieb, verlinkt aber nicht meine Website?",
      a: "Die Angaben können aus einer fremden Quelle stammen, etwa einem Verzeichnis oder Bewertungsportal, das dann verlinkt wird. Hinter der Schaltfläche „Quellen“ sehen Sie, falls verfügbar, die zitierten Quellen und weitere relevante Links. Stimmen die Angaben dort nicht, korrigieren Sie zuerst diese Quelle.",
    },
    {
      q: "Wie viele Quellen zeigt ChatGPT bei einer Antwort?",
      a: "OpenAI nennt keine feste Zahl. Im Text stehen Quellenangaben zu einzelnen Aussagen, hinter „Quellen“ zeigt ChatGPT laut OpenAI weitere relevante Links. Werten Sie beide Listen aus.",
    },
    {
      q: "Kann ich bezahlen, damit ChatGPT meine Website zitiert?",
      a: "Nein. OpenAI schreibt, dass eine Platzierung nicht garantiert ist. Anzeigen beeinflussen die Antworten laut OpenAI nicht und sind als gesponsert gekennzeichnet und von der Antwort abgesetzt. Wer bezahlte Zitate verspricht, verspricht etwas, das OpenAI nicht anbietet.",
    },
    {
      q: "Warum sehe ich bei derselben Frage andere Quellen als meine Kollegin?",
      a: "ChatGPT kann laut OpenAI einen ungefähren Standort aus der IP-Adresse nutzen, und angemeldete Nutzer können Erinnerungen und eigene Anweisungen aktiviert haben. Außerdem entscheidet ChatGPT selbst, ob es sucht. Schreiben Sie den Ort in die Frage, wählen Sie die Suche aus und nutzen Sie einen neuen Chat ohne Personalisierung.",
    },
    {
      q: "Muss ich bei Yelp eingetragen sein?",
      a: "Laut einem Bericht von Axios vom Juli 2026 lizenziert Yelp Bewertungen, Fotos und Geschäftsinformationen an OpenAI. Für welche Länder das gilt, wurde nicht genannt, und Reservierungen über Yelp nennt OpenAI nur für die USA und Kanada. Ob Yelp in Ihrer Branche und Ihrem Ort als Quelle auftaucht, zeigt Ihre Quellenkarte.",
    },
  ],
  sources: [
    { title: "Mit ChatGPT das Web durchsuchen", publisher: "OpenAI Help Center", url: "https://help.openai.com/de-de/articles/9237897-searching-the-web-with-chatgpt" },
    { title: "Searching the web with ChatGPT (englische Fassung)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
    { title: "Publishers and Developers FAQ", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { title: "Overview of OpenAI Crawlers", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/bots" },
    { title: "Introducing ChatGPT search (31. Oktober 2024, mit Updates)", publisher: "OpenAI", url: "https://openai.com/index/introducing-chatgpt-search/" },
    { title: "ChatGPT release notes (Einträge vom 24. Juni und 10. August 2026)", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    { title: "Web search (Entwicklerdokumentation zur Websuche)", publisher: "OpenAI Developers", url: "https://developers.openai.com/api/docs/guides/tools-web-search" },
    { title: "Ads in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001047-ads-in-chatgpt" },
    { title: "Temporary chat in ChatGPT", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/8914046-temporary-chat-faq" },
    { title: "Top sources and directories for local AI search (26. August 2026)", publisher: "BrightLocal", url: "https://www.brightlocal.com/resources/ai-directory-sources/" },
    { title: "Exclusive: Yelp partners with ChatGPT to surface reviews (23. Juli 2026)", publisher: "Axios", url: "https://axios.com/2026/07/23/yelp-reviews-chatgpt-geo-partnership" },
  ],
  related: [
    { slug: "chatgpt-search-lokale-unternehmen-2026", title: "ChatGPT Search für lokale Unternehmen" },
    { slug: "perplexity-claude-lokale-sichtbarkeit", title: "Perplexity und Claude: lokale Sichtbarkeit" },
    { slug: "ai-falschangaben-korrigieren-2026", title: "KI-Falschangaben korrigieren" },
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
  ],
  cta: {
    title: "Welche Quellen nutzt ChatGPT in Ihrer Branche?",
    text: "Wir stellen ChatGPT typische Fragen Ihrer Kunden für Ihren Ort, werten die verlinkten Quellen aus und prüfen, ob Ihre Angaben dort stimmen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
