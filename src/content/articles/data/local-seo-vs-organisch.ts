import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-vs-organisch",
  lang: "de",
  seoTitle: "Local SEO oder organisches SEO: Was braucht Ihr Betrieb?",
  seoDescription:
    "Local SEO oder organisches SEO? Wo beides bei Google erscheint, welcher Betrieb was zuerst braucht, ein Plan nach Priorität und wie Sie beides getrennt messen.",
  h1: "Local SEO oder organisches SEO: Was Ihr Betrieb zuerst braucht",
  kicker: "Strategie",
  lead:
    "Für Inhaber von Praxen, Geschäften, Hotels und Handwerksbetrieben, die entscheiden wollen, wo sie Zeit und Budget zuerst einsetzen. Sie erfahren, was beide Begriffe meinen, wo die Ergebnisse bei Google stehen, was Ihr Betriebstyp zuerst braucht und wie Sie beides messen. Wie Google die beiden Rankings im Einzelnen berechnet, erklärt der Artikel [Google Maps SEO und organisches SEO](/blog/google-maps-seo-vs-organic-seo).",
  answer:
    "Local SEO bringt Ihren Betrieb in den Kartenblock und in Google Maps, organisches SEO bringt Ihre Website in die normalen Treffer. Wer Kunden vor Ort empfängt oder in einem Einzugsgebiet zu ihnen fährt, beginnt mit dem **Unternehmensprofil** und baut die Website parallel aus. Wer nur online verkauft, bekommt laut Google kein Unternehmensprofil und setzt auf die **Website**. Gemessen wird getrennt.",
  takeaways: [
    "Local SEO zielt auf den Kartenblock und Google Maps, Grundlage ist das Unternehmensprofil. Organisches SEO zielt auf die normalen Treffer, Grundlage ist Ihre Website.",
    "Ein Unternehmensprofil gibt es laut Google nur bei persönlichem Kundenkontakt während der Geschäftszeiten. Unternehmen, die ausschließlich online tätig sind, sind ausgeschlossen.",
    "Betriebe mit Praxis, Laden oder Einzugsgebiet brauchen beides und beginnen mit dem Profil. Überregionale Anbieter ohne Kundenkontakt vor Ort beginnen mit der Website.",
    "Beide Wege teilen Grundlagen: Websites, die auf Ihren Betrieb verweisen, zählen laut Google für das lokale Ranking, und Links sind auch in der Websuche ein Signal.",
    "Messen Sie getrennt: Anrufe, Wegbeschreibungen und Websiteklicks in den Leistungsdaten des Profils, Klicks und Suchanfragen der Website in der Search Console.",
    "Feste Budgetquoten und Zeitversprechen wie „Local SEO wirkt in zwei Wochen“ sind nicht belegt. Entscheiden Sie nach Betriebstyp und eigenen Zahlen.",
  ],
  publishedAt: "2026-02-21",
  updatedAt: "2026-10-12",
  readingTime: 12,
  sections: [
    {
      id: "begriffe",
      title: "Was die beiden Begriffe meinen",
      answer:
        "Local SEO ist die Arbeit, mit der ein Betrieb bei Suchen mit Ortsbezug in den lokalen Ergebnissen von Google Suche und Google Maps erscheint. Organisches SEO ist die Arbeit an der Website, damit sie in den normalen, unbezahlten Treffern erscheint.",
      blocks: [
        {
          t: "p",
          text: "Beide Begriffe sind in der Praxis gebräuchlich. Google spricht in seiner Hilfe von **lokalen Ergebnissen**, die in Google Maps und in der Google Suche erscheinen, wenn jemand nach Unternehmen oder Orten in der Nähe sucht. Die normalen Treffer kommen aus dem Index der Websuche. Für Ihre Entscheidung reicht eine einfache Regel: Local SEO arbeitet vor allem am Unternehmensprofil, organisches SEO vor allem an der Website.",
        },
        {
          t: "table",
          caption: "Local SEO und organisches SEO auf einen Blick",
          head: ["Frage", "Local SEO", "Organisches SEO"],
          rows: [
            ["Wo Sie erscheinen", "Kartenblock in der Suche und Google Maps", "Normale Treffer der Google Suche"],
            ["Wichtigste Grundlage", "Google-Unternehmensprofil", "Ihre eigene Website"],
            ["Was Google laut eigener Dokumentation bewertet", "Relevanz, Entfernung und Bekanntheit", "Hunderte Faktoren, darunter Standort, Sprache und Gerät der suchenden Person"],
            ["Typische Handlung des Kunden", "Anrufen, Route planen, Website öffnen", "Seite lesen, anfragen, buchen oder kaufen"],
            ["Wer es nutzen kann", "Betriebe mit persönlichem Kundenkontakt", "Jede Website"],
            ["Wo Sie messen", "Leistungsdaten im Unternehmensprofil", "Search Console und Web-Analyse"],
          ],
        },
        {
          t: "note",
          label: "Abgrenzung",
          text: "Dieser Artikel hilft bei der Entscheidung, was Sie zuerst tun. Welche Signale Google für beide Rankings nennt und wo sie sich überschneiden, steht in [Google Maps SEO und organisches SEO im Vergleich](/blog/google-maps-seo-vs-organic-seo).",
        },
      ],
    },
    {
      id: "ergebnisseite",
      title: "Wo was auf der Google-Seite erscheint",
      answer:
        "Eine Suche wie „Zahnarzt Linz“ kann eine Übersicht mit KI, einen Kartenblock mit Betrieben und die normalen Treffer zeigen. Google Maps und der KI-Modus sind eigene Bereiche. Jeder Bereich speist sich aus anderen Quellen.",
      blocks: [
        {
          t: "table",
          caption: "Wo Ihr Betrieb bei Google erscheinen kann",
          head: ["Bereich", "Was dort steht", "Woraus er gespeist wird", "Zuständig"],
          rows: [
            ["Kartenblock (oft Local Pack genannt)", "Eine Auswahl lokaler Betriebe, meist mit Karte, Bewertungen und Schaltflächen wie Anrufen", "Unternehmensprofile", "Local SEO"],
            ["Google Maps", "Passende Betriebe im Kartenausschnitt", "Unternehmensprofile", "Local SEO"],
            ["Normale Treffer", "Websites mit Titel, Link und Textausschnitt", "Indexierte Seiten, also Ihre Website", "Organisches SEO"],
            ["Übersicht mit KI", "Eine zusammengefasste Antwort mit Links zum Weiterlesen", "Indexierte Seiten; Google nennt dazu aktuelle Angaben im Unternehmensprofil", "Beides"],
            ["KI-Modus", "Eigener Bereich für komplexe Fragen mit Folgefragen", "Mehrere Suchanfragen zu Unterthemen und Datenquellen", "Beides"],
          ],
        },
        {
          t: "p",
          text: "Übersichten mit KI zeigt Google laut eigener Hilfe allen Nutzern in Deutschland, Österreich und der Schweiz. Mit der Einführung des KI-Modus hat Google in diesen drei Ländern am 8. Oktober 2025 begonnen. Für beide gibt es laut Search Central **keine zusätzlichen Anforderungen**: Eine Seite muss indexiert und für ein Snippet geeignet sein. Zu den weiter geltenden Grundsätzen zählt Google ausdrücklich, die Angaben im Unternehmensprofil aktuell zu halten. KI-Antworten sind damit kein dritter Weg, sie stützen sich auf Profil und Website zugleich.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Welche Bereiche erscheinen, entscheidet Google für jede Suche neu. Laut Google bekommt jemand in Paris, der nach einer Fahrradwerkstatt sucht, andere Ergebnisse als jemand in Hongkong. Sehen Sie sich die Ergebnisseite für Ihre wichtigsten Suchen deshalb selbst an. Was Übersichten mit KI für lokale Betriebe bedeuten, steht in [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo).",
        },
      ],
    },
    {
      id: "welcher-betrieb",
      title: "Welcher Betrieb was zuerst braucht",
      answer:
        "Entscheidend ist, ob Kunden zu Ihnen kommen, ob Sie zu den Kunden fahren oder ob Sie ganz ohne persönlichen Kontakt verkaufen. Die ersten beiden Gruppen beginnen mit dem Unternehmensprofil, die dritte mit der Website.",
      blocks: [
        {
          t: "p",
          text: "Google lässt ein Unternehmensprofil nur zu, wenn während der angegebenen Geschäftszeiten normalerweise persönlicher Kundenkontakt stattfindet oder möglich ist. Ausdrücklich ausgeschlossen sind Unternehmen, die ausschließlich online tätig sind. Wer seine Kunden vor Ort besucht, sollte laut Google keine Geschäftsadresse anzeigen, sondern ein Einzugsgebiet, das in der Regel nicht weiter als etwa zwei Autostunden reicht. Hybridbetriebe dürfen Adresse und Einzugsgebiet gemeinsam angeben, wenn der Standort während der Geschäftszeiten besetzt ist.",
        },
        {
          t: "table",
          caption: "Was zuerst kommt, nach Betriebstyp",
          head: ["Betriebstyp", "Beispiele", "Zuerst", "Danach"],
          rows: [
            ["Kunden kommen zu Ihnen", "Praxis, Restaurant, Friseur, Hotel, Laden", "Unternehmensprofil vollständig und korrekt", "Website mit einer Seite je Leistung"],
            ["Sie fahren zum Kunden", "Elektriker, Gebäudereinigung, mobile Pflege, Umzug", "Unternehmensprofil mit Einzugsgebiet, Adresse ausgeblendet", "Leistungsseiten mit Einzugsgebiet und Ablauf"],
            ["Beides", "Werkstatt mit Abholdienst, Optiker mit Hausbesuch", "Profil mit Adresse und Einzugsgebiet", "Leistungs- und Standortseiten"],
            ["Überregional ohne Kundenkontakt vor Ort", "Onlineshop, Software, reine Online-Kurse", "Website und organisches SEO", "Kein Unternehmensprofil möglich"],
          ],
        },
        {
          t: "p",
          text: "Ein Onlinehändler mit Ladengeschäft gehört in die erste Zeile: Der Laden bekommt ein Profil, der Shop braucht organisches SEO. Betriebe mit mehreren Filialen finden die Regeln in [Mehrere Standorte bei Google verwalten](/blog/gbp-mehrere-standorte).",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Auch Betriebe mit Kundenverkehr sollten die Website nicht auf später verschieben. Viele Fragen vor einer Buchung, etwa zu Preisrahmen, Ablauf, Parken oder Barrierefreiheit, passen nicht ins Profil und sind auf der Website besser beantwortet. Umgekehrt nützt einem Handwerksbetrieb die beste Website wenig, wenn er bei „Elektriker“ im Kartenblock fehlt.",
        },
      ],
    },
    {
      id: "zusammenspiel",
      title: "Wie beide zusammenwirken",
      answer:
        "Profil und Website sind keine Gegensätze. Websites, die auf Ihren Betrieb verweisen, zählen laut Google zur lokalen Bekanntheit, Links sind auch in der Websuche ein Signal, und die KI-Funktionen der Google-Suche greifen auf beides zurück.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Links von anderen Websites:** Für die Bekanntheit im lokalen Ranking nennt Google die Anzahl der Websites, die auf Ihr Unternehmen verweisen. In der Websuche nutzt Google Links als Signal für die Relevanz von Seiten. Ein Link von Verband oder Lokalzeitung auf Ihre Website kann deshalb beiden helfen.",
            "**Website als Ziel des Profils:** Der Website-Link im Profil führt Interessenten auf Ihre Seiten, wo sie entscheiden, ob sie anfragen. Die Leistungsdaten des Profils zählen diese Klicks als Websiteklicks.",
            "**Gleiche Angaben:** Vollständige und korrekte Informationen im Profil erhöhen laut Google die Chance, angezeigt zu werden. Unsere Einschätzung: Name, Adresse, Telefon, Öffnungszeiten und Leistungen sollten auf der Website genauso lauten, sonst wird jede Zuordnung schwerer, auch in KI-Antworten.",
            "**Antworten auf Detailfragen:** Übersichten mit KI und KI-Modus stellen laut Google mehrere Suchanfragen zu Unterthemen. Unsere Einschätzung: Ausführliche Antworten auf Detailfragen gehören auf Ihre Website, das Profil bietet dafür wenig Platz.",
          ],
        },
        {
          t: "p",
          text: "Manches wirkt nur auf einer Seite. Die gewählten Kategorien wirken laut Google auf das Ranking in lokalen Suchergebnissen, die Entfernung hängt an Adresse oder Einzugsgebiet. Crawling, Indexierung und hilfreiche Inhalte betreffen dagegen nur die Website. Die Einzelheiten stehen im Abschnitt [Was nur in einem System zählt](/blog/google-maps-seo-vs-organic-seo#unterschiede).",
        },
      ],
    },
    {
      id: "plan",
      title: "Ein Plan nach Priorität",
      answer:
        "Beginnen Sie mit dem, was mit wenig Aufwand die meisten Kunden erreicht: Ergebnisseite ansehen, Profil sichern, Grunddaten korrigieren, Messung einrichten. Danach folgen Leistungsseiten, Bewertungen als Ablauf und lokale Links. Anbieter ohne Profil überspringen die Profil-Schritte zwei und drei.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Ergebnisseite ansehen",
              text: "Suchen Sie Ihre drei bis fünf wichtigsten Leistungen mit Ort. Notieren Sie, ob ein Kartenblock oder eine Übersicht mit KI erscheint und welche Betriebe und Websites dort stehen. So sehen Sie, wo Ihre Kunden überhaupt hinschauen.",
            },
            {
              title: "Profil übernehmen und bestätigen",
              text: "Laut Google wird ein bestätigtes Unternehmen mit größerer Wahrscheinlichkeit angezeigt. Prüfen Sie zuerst, ob schon ein Profil für Ihren Betrieb existiert, und übernehmen Sie es, statt ein zweites anzulegen.",
            },
            {
              title: "Grunddaten und Kategorie korrigieren",
              text: "Name wie im echten Leben, Adresse oder Einzugsgebiet, Öffnungs- und Sonderzeiten, die genaueste Hauptkategorie. Vollständige und korrekte Angaben erhöhen laut Google die Chance, in lokalen Ergebnissen zu erscheinen. Anleitung: [Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
            },
            {
              title: "Messung einrichten",
              text: "Website in der Search Console anmelden und die aktuellen Leistungsdaten des Profils als Ausgangswert notieren. Wer will, markiert den Website-Link im Profil mit Kampagnenparametern: Googles Richtlinien erwähnen das nicht, verbieten aber Weiterleitungs-URLs im Profil, der Link muss also direkt auf Ihre Seite führen. Prüfen Sie nach dem Speichern, ob er im Profil unverändert angezeigt wird.",
            },
            {
              title: "Leistungsseiten bauen",
              text: "Eine Seite je wichtiger Leistung mit Ort, Ablauf, Preisrahmen und den Fragen, die Kunden am Telefon stellen. Keine kopierten Seiten für jeden Nachbarort: Seiten, die auf einzelne Städte zielen und Nutzer zum selben Ziel leiten, zählt Google zu den Brückenseiten und damit zu Spam.",
            },
            {
              title: "Bewertungen als festen Ablauf einrichten",
              text: "Alle Kunden um eine ehrliche Bewertung bitten, ohne Gegenleistung und ohne Druck, und jede beantworten. Laut Google können mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern. Ablauf: [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
            },
            {
              title: "Lokale Links aufbauen",
              text: "Links von Verband, Kammer, Partnern und Lokalpresse, dort, wo Sie ohnehin aktiv sind. Ideen mit Augenmaß in [Lokales Linkbuilding](/blog/local-link-building).",
            },
            {
              title: "Monatlich vergleichen",
              text: "Leistungsdaten des Profils, Search Console und Ihren Anfrageeingang nebeneinanderlegen und den nächsten Schritt danach wählen.",
            },
          ],
        },
        {
          t: "p",
          text: "Einen Wochenplan mit Prüfpunkten bietet [Local SEO in 12 Wochen](/blog/local-seo-roadmap-90-tage). Wie lange es dauert, bis sich Positionen bewegen, sagt Google für keines der beiden Systeme. Das hängt vor allem vom Wettbewerb in Ihrem Ort und Ihrer Branche ab.",
        },
      ],
    },
    {
      id: "messen",
      title: "So messen Sie beide Seiten",
      answer:
        "Den lokalen Teil messen Sie in den Leistungsdaten des Unternehmensprofils (Aufrufe, Suchanfragen, Anrufe, Wegbeschreibungen, Websiteklicks), den organischen in der Search Console (Klicks, Impressionen, Suchanfragen Ihrer Website). Klicks aus Übersichten mit KI zählt die Search Console im Suchtyp „Web“ mit.",
      blocks: [
        {
          t: "table",
          caption: "Was Sie wo sehen",
          head: ["Frage", "Quelle", "Hinweis"],
          rows: [
            ["Wie oft wurde mein Profil in Suche und Maps angesehen?", "Unternehmensprofil, Bereich „Leistung“, Aufrufe", "Mehrfache Aufrufe derselben Person zählt Google höchstens einmal pro Tag"],
            ["Über welche Suchbegriffe wurde mein Profil gefunden?", "Unternehmensprofil, Suchanfragen", "Aktualisierung zu Monatsbeginn, Anzeige mit bis zu fünf Tagen Verzögerung"],
            ["Wie viele Anrufe, Wegbeschreibungen und Websiteklicks kamen aus dem Profil?", "Unternehmensprofil, Interaktionen", "Google nennt eine geänderte Zählung der Wegbeschreibungen, Vergleiche mit älteren Werten sind daher mit Vorsicht zu lesen"],
            ["Wie oft erschien meine Website in der Suche und wurde geklickt?", "Search Console, Leistungsbericht", "Klicks, Impressionen, Klickrate und durchschnittliche Position, nach Suchanfrage und Seite"],
            ["Wie oft wurden Links zu meiner Website in Übersichten mit KI und im KI-Modus gezeigt?", "Search Console, Leistungsbericht zu generativen KI-Funktionen", "Seit dem 31. August 2026, nur Impressionen; Klicks stehen im Suchtyp „Web“"],
            ["Was tun Besucher aus dem Profil auf meiner Website?", "Web-Analyse mit markiertem Profil-Link", "Kampagnenparameter wie utm_source, utm_medium und utm_campaign am Website-Link; Googles Profil-Richtlinien erwähnen sie nicht, Weiterleitungs-URLs sind dort verboten"],
            ["Wird aus Sichtbarkeit Umsatz?", "Ihr Anfrage- und Buchungseingang", "Neue Kunden fragen, wie sie Sie gefunden haben"],
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ob Klicks auf den Website-Link im Profil auch in der Search Console auftauchen, sagt Googles Hilfe zu den Leistungsdaten des Profils nicht. Mit einem markierten Link können Sie diese Besuche in Ihrer Web-Analyse von den organischen trennen, sofern der Link im Profil unverändert bleibt. Positionen im Kartenblock messen Sie am besten mit einem Raster über Ihr Einzugsgebiet, wie in [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern#ranking-messen) beschrieben.",
        },
      ],
    },
    {
      id: "mythen",
      title: "Was Sie nicht glauben müssen",
      answer:
        "Viele Vergleiche arbeiten mit festen Budgetquoten, Zeitangaben und Prozentwerten ohne nachprüfbare Quelle. Google veröffentlicht für keines der beiden Rankings eine Gewichtung und schließt bezahlte Verbesserungen aus.",
      blocks: [
        {
          t: "table",
          caption: "Verbreitete Aussagen und was belegt ist",
          head: ["Aussage", "Was belegt ist"],
          rows: [
            ["„Stecken Sie 60 bis 70 Prozent des Budgets in Local SEO“", "Für solche Quoten gibt es keine Quelle. Die richtige Aufteilung hängt von Betriebstyp, Wettbewerb und Ihren eigenen Zahlen ab."],
            ["„Local SEO wirkt in zwei bis vier Wochen, organisches SEO erst nach Monaten“", "Google nennt für keines der beiden Systeme Zeiträume. Wie schnell sich etwas bewegt, hängt vom Wettbewerb ab."],
            ["„Fast jede zweite Google-Suche ist lokal“", "Für diese oft zitierte Zahl haben wir keine aktuelle, offen gelegte Erhebung von Google gefunden. Planen Sie mit Ihren eigenen Suchbegriffen aus Profil und Search Console."],
            ["„Mit einer Seite je Nachbarort erscheinen Sie überall“", "Seiten, die auf einzelne Städte zielen und Nutzer zum selben Ziel leiten, zählt Google zu den Brückenseiten, also zu Spam."],
            ["„Gegen Bezahlung kommen Sie im Kartenblock nach oben“", "Ein besseres lokales Ranking lässt sich laut Google nicht einfordern, auch nicht gegen Bezahlung. Für die Websuche nimmt Google laut Search Central ebenfalls keine Zahlungen für ein höheres Ranking an. Bezahlte Anzeigen behandelt dieser Artikel nicht."],
            ["„Auch ein Onlineshop braucht ein Unternehmensprofil“", "Unternehmen, die ausschließlich online tätig sind, schließt Google vom Unternehmensprofil aus."],
          ],
        },
        {
          t: "p",
          text: "Weitere verbreitete Fehler, die lokale Sichtbarkeit kosten, beschreibt [Local SEO Fehler](/blog/local-seo-fehler).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich als lokaler Betrieb überhaupt organisches SEO?",
      a: "Ja, meist an zweiter Stelle. Die Website beantwortet Fragen, die nicht ins Profil passen, und ist der Ort, an dem Interessenten direkt anfragen oder buchen. Websites, die auf Ihren Betrieb verweisen, zählen laut Google außerdem zur Bekanntheit im lokalen Ranking.",
    },
    {
      q: "Kann ich als Onlineshop in Google Maps erscheinen?",
      a: "Nur mit einem Standort, an dem während der Geschäftszeiten persönlicher Kundenkontakt stattfindet, etwa einem Ladengeschäft. Unternehmen, die ausschließlich online tätig sind, schließt Google vom Unternehmensprofil aus. Für den Shop selbst ist organisches SEO der richtige Weg.",
    },
    {
      q: "Was ist der Kartenblock oder das Local Pack?",
      a: "So nennen Fachleute die Auswahl lokaler Betriebe mit Karte, die Google bei Suchen mit Ortsbezug zeigen kann. In Googles Hilfe zum lokalen Ranking heißt es „lokale Ergebnisse“. Die Einträge stammen aus Unternehmensprofilen. Für lokale Ergebnisse nennt Google Relevanz, Entfernung und Bekanntheit.",
    },
    {
      q: "Kann ich mit einem Profil in mehreren Städten gefunden werden?",
      a: "Mit Kundenverkehr nur dort, wo Sie einen echten, besetzten Standort haben. Betriebe, die zum Kunden fahren, geben ein Einzugsgebiet an, laut Google bis zu 20 Gebiete und in der Regel nicht weiter als etwa zwei Autostunden. Virtuelle Büros ohne Personal sind nicht zulässig.",
    },
    {
      q: "Wie sehe ich, ob Local SEO oder organisches SEO mehr bringt?",
      a: "Legen Sie die Interaktionen aus den Leistungsdaten des Profils (Anrufe, Wegbeschreibungen, Websiteklicks) neben die Klicks in der Search Console und neben Ihre tatsächlichen Anfragen. Ein markierter Website-Link im Profil kann beide Quellen in Ihrer Web-Analyse trennen, sofern er im Profil unverändert bleibt.",
    },
    {
      q: "Erscheine ich in Übersichten mit KI, wenn ich in Maps gut stehe?",
      a: "Das ist nicht garantiert. Als Quelle muss eine Seite laut Google indexiert und für ein Snippet geeignet sein, und Google nennt aktuelle Angaben im Unternehmensprofil als weiter geltende Grundlage. Nach unserer Einschätzung brauchen Sie dafür Profil und Website.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien zur Berechtigung und Inhaberschaft", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/13763036?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Einzugsgebiete für Unternehmen ohne festen Standort und Hybridunternehmen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9157481?hl=de" },
    { title: "Unternehmenskategorie verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7249669?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "KI-Funktionen und Ihre Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Umfassender Leitfaden zur Funktionsweise der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=de" },
    { title: "SEO-Link-Best-Practices für Google", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche (Brückenseiten)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Kampagnendaten mit benutzerdefinierten URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
  ],
  related: [
    { slug: "google-maps-seo-vs-organic-seo", title: "Google Maps SEO und organisches SEO im Vergleich" },
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "ai-search-vs-traditional-search", title: "KI-Suche oder klassische Suche" },
  ],
  cta: {
    title: "Wo sollte Ihr Betrieb anfangen?",
    text: "Wir sehen uns Ihr Google-Profil, Ihre Website und die Ergebnisseite für Ihre wichtigsten Suchen an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, mit denen Sie beginnen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
