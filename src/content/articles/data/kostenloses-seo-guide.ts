import type { V4Article } from "../types";

const article: V4Article = {
  slug: "kostenloses-seo-guide",
  lang: "de",
  seoTitle: "Kostenloses SEO: Anleitung für lokale Betriebe 2026",
  seoDescription:
    "SEO ohne Budget: welche kostenlosen Google-Werkzeuge genügen, was Sie selbst erledigen können und welche alten Tipps Sie sich sparen. Mit Plan in 8 Schritten.",
  h1: "Kostenloses SEO: Was Sie ohne Budget selbst erledigen können",
  kicker: "Grundlagen",
  lead:
    "Für Inhaber von Hotels, Praxen, Handwerksbetrieben und Geschäften in Deutschland, Österreich und der Schweiz, die ihre Sichtbarkeit bei Google zuerst selbst verbessern wollen. Sie erfahren, welche kostenlosen Werkzeuge genügen, in welcher Reihenfolge Sie vorgehen und wo der eigene Aufwand an Grenzen stößt.",
  answer:
    "Ja, die Grundlagen von SEO kosten kein Geld, nur Zeit. Mit dem Google-Unternehmensprofil, der Google Search Console und PageSpeed Insights haben Sie die wichtigsten Werkzeuge kostenlos. Entscheidend ist die Reihenfolge: zuerst Profil und Firmendaten, dann Technik und klare Leistungsseiten, danach Bewertungen, Erwähnungen und regelmäßiges Messen.",
  takeaways: [
    "Die wichtigsten Werkzeuge sind kostenlos und stammen von Google selbst: Unternehmensprofil, Search Console und PageSpeed Insights.",
    "Für lokale Betriebe ist das Unternehmensprofil der größte Einzelhebel. Ein besseres lokales Ranking lässt sich laut Google nicht kaufen.",
    "Viele verbreitete Tipps sind veraltet, etwa das Keywords-Meta-Tag, der Test auf Optimierung für Mobilgeräte oder FAQ-Markup für mehr Platz in der Suche.",
    "Gekaufte Links, gekaufte Bewertungen und Orte im Firmennamen verstoßen gegen Googles Richtlinien. Sie kosten am Ende mehr, als sie sparen.",
    "Kostenloses SEO braucht vor allem regelmäßige Zeit. Planen Sie feste Termine ein, statt alles an einem Wochenende zu erledigen.",
  ],
  publishedAt: "2026-01-09",
  updatedAt: "2026-10-10",
  readingTime: 13,
  sections: [
    {
      id: "was-kostenlos-geht",
      title: "Was kostenloses SEO leisten kann und was nicht",
      answer:
        "Kostenlos heißt bei SEO: kein Geld für Werkzeuge oder Dienstleister, aber eigene Zeit. Für die meisten lokalen Betriebe reicht das, um das Fundament sauber zu legen.",
      blocks: [
        {
          t: "p",
          text: "SEO (Suchmaschinenoptimierung) umfasst alles, was dazu beiträgt, dass Google Ihre Website und Ihr Unternehmensprofil versteht und bei passenden Suchen zeigt. Für einen lokalen Betrieb heißt das konkret: bei Suchen wie „Physiotherapie Linz“, „Pension am Ammersee“ oder „Schlüsseldienst in der Nähe“ auftauchen und dann angerufen oder gebucht werden.",
        },
        {
          t: "p",
          text: "Google verkauft keine besseren Plätze in den normalen Suchergebnissen und im Kartenblock. Bezahlte Anzeigen erscheinen getrennt und gekennzeichnet. Deshalb können Sie mit eigener Arbeit grundsätzlich dasselbe erreichen wie mit einem Dienstleister. Der Unterschied liegt in Zeit, Erfahrung und darin, Fehler früher zu erkennen.",
        },
        {
          t: "table",
          caption: "Was Sie selbst schaffen und wo es aufwendiger wird",
          head: ["Gut selbst machbar", "Aufwendiger ohne Erfahrung"],
          rows: [
            ["Unternehmensprofil vollständig ausfüllen und pflegen", "Gesperrte oder doppelte Profile wiederherstellen"],
            ["Search Console einrichten und Berichte lesen", "Indexierungsprobleme auf großen oder alten Websites lösen"],
            ["Titel, Beschreibungen und Texte der eigenen Seiten verbessern", "Ladezeit-Probleme beheben, die im Theme oder Baukasten stecken"],
            ["Kunden um Bewertungen bitten und antworten", "Strukturierte Daten fehlerfrei einbauen und pflegen"],
          ],
        },
        {
          t: "note",
          label: "Realistische Erwartung",
          text: "Google schreibt in seinem SEO-Startleitfaden, dass manche Änderungen innerhalb weniger Stunden wirken, andere erst nach mehreren Monaten. Planen Sie deshalb in Monaten, nicht in Tagen.",
        },
      ],
    },
    {
      id: "werkzeuge",
      title: "Die kostenlosen Werkzeuge, die Sie wirklich brauchen",
      answer:
        "Sie brauchen keine fünfzig Tools. Drei kostenlose Google-Werkzeuge decken das Wichtigste ab, dazu kommt die Google-Suche selbst als Ideenquelle.",
      blocks: [
        {
          t: "table",
          caption: "Kostenlose Werkzeuge für den Anfang",
          head: ["Werkzeug", "Wofür Sie es nutzen"],
          rows: [
            ["Google-Unternehmensprofil", "Ihr Eintrag in Google Maps und im Kartenblock: Daten, Fotos, Bewertungen, Leistungsdaten wie Anrufe und Routen"],
            ["Google Search Console", "Welche Suchanfragen zu Klicks führen, welche Seiten indexiert sind, Fehlermeldungen, Core-Web-Vitals-Bericht"],
            ["PageSpeed Insights", "Ladezeit und Bedienbarkeit einer Seite, mit Daten echter Nutzer, sofern genug vorhanden sind"],
            ["Test für Rich-Suchergebnisse", "Ob Ihre strukturierten Daten (etwa LocalBusiness) fehlerfrei gelesen werden"],
            ["Die Google-Suche selbst", "Autovervollständigung und „Ähnliche Fragen“ zeigen, wie Menschen nach Ihrer Leistung suchen"],
          ],
        },
        {
          t: "p",
          text: "Die Search Console ist laut Google ein **kostenloser Dienst**. Sie müssen sich nicht anmelden, um in der Suche zu erscheinen, aber ohne sie sehen Sie nicht, wie Google Ihre Website wahrnimmt. Richten Sie sie als Erstes ein, damit Daten gesammelt werden, während Sie an anderen Punkten arbeiten.",
        },
        {
          t: "note",
          label: "Nicht mehr verfügbar",
          text: "Den „Test auf Optimierung für Mobilgeräte“ und den gleichnamigen Search-Console-Bericht hat Google im Dezember 2023 eingestellt. Für die Prüfung der mobilen Darstellung nutzen Sie heute Lighthouse in Chrome oder PageSpeed Insights.",
        },
        {
          t: "p",
          text: "Einen Vergleich weiterer kostenloser Prüfwerkzeuge finden Sie im Artikel [Kostenlose Local SEO Audit-Tools](/blog/kostenlose-local-seo-audit-tools).",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Das Google-Unternehmensprofil: der größte kostenlose Hebel",
      answer:
        "Für Betriebe mit Kunden vor Ort entscheidet das Unternehmensprofil, ob Sie im Kartenblock und in Google Maps erscheinen. Es ist kostenlos und lässt sich ohne Vorkenntnisse pflegen.",
      blocks: [
        {
          t: "p",
          text: "Google sortiert lokale Ergebnisse nach drei Faktoren: **Relevanz, Entfernung und Bekanntheit**. Die Entfernung können Sie nicht ändern. Relevanz und Bekanntheit beeinflussen Sie mit einem vollständigen Profil, einer passenden Website und echten Bewertungen.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Vorhandenes Profil übernehmen",
              text: "Suchen Sie zuerst, ob es bereits einen Eintrag gibt, und beanspruchen Sie ihn. Ein zweites Profil für denselben Standort führt zu Duplikaten.",
            },
            {
              title: "Name wie auf dem Schild",
              text: "Keine Orte, Leistungen oder Slogans im Namen. „Malerei Huber“, nicht „Malerei Huber Maler München günstig“. Zusätze verstoßen gegen Googles Richtlinien und können zur Sperrung führen.",
            },
            {
              title: "Wenige, genaue Kategorien",
              text: "Google empfiehlt so wenige Kategorien wie möglich, und zwar danach, was der Betrieb ist, nicht was er hat. „Zahnarzt“ statt „Gesundheit“.",
            },
            {
              title: "Adresse oder Einzugsgebiet",
              text: "Mit Kundenverkehr vor Ort: echte Adresse. Ohne Kundenverkehr, etwa im Handwerk: Adresse ausblenden und Einzugsgebiet angeben. Eine angemietete Postadresse ohne Betrieb ist nicht zulässig.",
            },
            {
              title: "Zeiten, Leistungen, Fotos",
              text: "Öffnungszeiten inklusive Feiertagen, jede Leistung einzeln, eigene Fotos von außen, innen, Team und Arbeit.",
            },
          ],
        },
        {
          t: "p",
          text: "Eine ausführliche Anleitung Feld für Feld steht im Artikel [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "technik",
      title: "Technische Grundlagen prüfen, ohne Spezialsoftware",
      answer:
        "Die technische Prüfung für eine typische Betriebswebsite gelingt mit Search Console und PageSpeed Insights. Wichtig ist, dass Google Ihre Seiten finden, lesen und auf dem Handy gut darstellen kann.",
      blocks: [
        {
          t: "ul",
          items: [
            "**HTTPS:** Die Adresse beginnt mit https und der Browser zeigt keine Warnung. Bei den meisten Hostern ist ein Zertifikat inklusive.",
            "**Indexierung:** Im Bericht „Seiten“ der Search Console sehen Sie, welche Seiten im Index sind und warum andere fehlen. Mit der URL-Prüfung testen Sie einzelne Seiten.",
            "**Sitemap:** Reichen Sie die XML-Sitemap Ihrer Website in der Search Console ein. Die meisten Baukästen und Systeme wie WordPress erzeugen sie automatisch.",
            "**robots.txt:** Prüfen Sie, dass wichtige Seiten nicht gesperrt sind. Ein vergessenes „Disallow: /“ aus der Entwicklungsphase blockiert die ganze Website.",
            "**Mobil bedienbar:** Telefonnummer, Route und Buchung müssen auf dem Handy mit einem Tipp erreichbar sein, ohne seitliches Scrollen.",
          ],
        },
        {
          t: "table",
          caption: "Core Web Vitals: die Zielwerte nach Google",
          head: ["Messwert", "Was er misst", "Guter Wert"],
          rows: [
            ["Largest Contentful Paint (LCP)", "Wie schnell der größte sichtbare Inhalt geladen ist", "höchstens 2,5 Sekunden"],
            ["Interaction to Next Paint (INP)", "Wie schnell die Seite auf Tippen und Klicken reagiert", "unter 200 Millisekunden"],
            ["Cumulative Layout Shift (CLS)", "Ob Inhalte beim Laden verrutschen", "unter 0,1"],
          ],
        },
        {
          t: "p",
          text: "INP hat 2024 den früheren Messwert First Input Delay (FID) abgelöst. Wenn eine Anleitung noch FID nennt, ist sie veraltet. Was bei lokalen Websites meist bremst, etwa große Bilder oder eingebettete Buchungs-Widgets, beschreibt der Artikel [Core Web Vitals für lokale Websites](/blog/core-web-vitals-local-seo).",
        },
      ],
    },
    {
      id: "seiten",
      title: "Seiten so schreiben, dass Google sie versteht",
      answer:
        "Jede wichtige Leistung braucht eine eigene Seite mit klarem Titel, verständlicher Überschrift und Text, der die Fragen Ihrer Kunden beantwortet. Das kostet nur Zeit und bringt oft am meisten.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Eine Seite je Leistung",
              text: "„Zahnreinigung“, „Implantate“ und „Angstpatienten“ sind drei verschiedene Suchen. Eine Sammelseite „Leistungen“ deckt keine davon gut ab.",
            },
            {
              title: "Eindeutiger Titel",
              text: "Google rät zu einem Titel, der für jede Seite einzigartig ist, klar und knapp beschreibt, was auf der Seite steht. Zum Beispiel „Badsanierung in Salzburg | Installateur Muster“. Lange Titel kürzt Google in der Anzeige.",
            },
            {
              title: "Beschreibung als Einladung",
              text: "Die Meta-Beschreibung kann als Textausschnitt unter dem Titel erscheinen, Google nimmt aber oft auch Text aus der Seite selbst. Schreiben Sie in zwei Sätzen, was der Suchende auf der Seite findet.",
            },
            {
              title: "Überschriften und Text",
              text: "Eine Hauptüberschrift, die sagt, worum es geht, darunter Abschnitte zu Ablauf, Preisrahmen, Einzugsgebiet und häufigen Fragen. Die Länge allein spielt laut Google keine Rolle.",
            },
            {
              title: "Bilder beschreiben",
              text: "Dateinamen und Alt-Texte, die das Bild beschreiben („Doppelzimmer mit Seeblick, Hotel Muster“), helfen Google und Menschen mit Screenreader.",
            },
            {
              title: "Interne Links mit klarem Text",
              text: "Verlinken Sie verwandte Seiten mit beschreibendem Linktext statt „hier klicken“. Google nutzt den Linktext, um das Ziel zu verstehen.",
            },
          ],
        },
        {
          t: "note",
          label: "Das können Sie sich sparen",
          text: "Das Keywords-Meta-Tag nutzt Google laut eigenem Startleitfaden nicht. FAQ-Ergebnisse zeigt Google seit dem 7. Mai 2026 gar nicht mehr in der Suche, Anleitungs-Ergebnisse (HowTo) schon seit 2023 nicht mehr. Strukturierte Daten vom Typ LocalBusiness bleiben dagegen sinnvoll, siehe [Schema Markup für Local SEO](/blog/schema-markup-local-seo).",
        },
      ],
    },
    {
      id: "suchbegriffe",
      title: "Suchbegriffe finden ohne bezahlte Tools",
      answer:
        "Die besten Suchbegriffe für einen lokalen Betrieb kennen Sie oft schon: Es sind die Fragen am Telefon. Ergänzen Sie sie mit der Google-Suche und den Daten aus Search Console und Unternehmensprofil.",
      blocks: [
        {
          t: "ol",
          items: [
            "**Kundenfragen sammeln.** Notieren Sie zwei Wochen lang, wonach Kunden am Telefon und am Empfang fragen, in deren Worten.",
            "**Autovervollständigung nutzen.** Geben Sie Ihre Leistung und Ihren Ort in die Google-Suche ein und notieren Sie die Vorschläge. Achten Sie auch auf „Ähnliche Fragen“ und verwandte Suchen am Seitenende.",
            "**Search Console auswerten.** Im Leistungsbericht sehen Sie, bei welchen Suchanfragen Ihre Seiten bereits erscheinen, auch solche mit vielen Einblendungen und wenigen Klicks.",
            "**Profil-Leistungsdaten lesen.** Das Unternehmensprofil zeigt die Suchbegriffe, über die Menschen Ihren Eintrag gefunden haben.",
            "**Suchabsicht prüfen.** Schauen Sie, was Google für einen Begriff heute zeigt: Kartenblock, Ratgeber oder Shops. Daran erkennen Sie, welche Art von Seite dafür passt.",
          ],
        },
        {
          t: "p",
          text: "Spezifische Begriffe wie „Notdienst Heizung Graz Wochenende“ werden seltener gesucht als „Heizung“, passen aber genau zu dem, was Sie anbieten. Für einen lokalen Betrieb sind sie meist wertvoller. Die ausführliche Methode steht in [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "bewertungen-erwaehnungen",
      title: "Bewertungen und Erwähnungen ohne Budget",
      answer:
        "Bewertungen und Erwähnungen von anderen Websites tragen zur Bekanntheit bei, die Google für das lokale Ranking nennt. Beides können Sie kostenlos aufbauen, solange Sie sich an die Regeln halten.",
      blocks: [
        {
          t: "table",
          caption: "Kostenlos und erlaubt, oder gegen Googles Richtlinien",
          head: ["Erlaubt", "Verstößt gegen Googles Richtlinien"],
          rows: [
            ["Alle Kunden nach dem Termin um eine Bewertung bitten, mit direktem Link oder QR-Code", "Rabatte, Geschenke oder Geld für eine Bewertung anbieten"],
            ["Auf jede Bewertung sachlich antworten, auch auf kritische", "Nur zufriedene Kunden fragen oder negative Bewertungen verhindern"],
            ["Eintrag und Link bei Kammer, Innung, Tourismusverband oder Verein", "Links kaufen oder verkaufen, die das Ranking verbessern sollen"],
            ["Lokale Presse bei einem echten Anlass informieren", "Exzessiver Linktausch oder Gastbeiträge mit optimiertem Linktext"],
          ],
        },
        {
          t: "p",
          text: "Achten Sie außerdem darauf, dass Name, Adresse und Telefonnummer überall gleich geschrieben sind: im Profil, auf der Website, im Impressum und in Verzeichnissen wie Das Örtliche, Herold oder local.ch. Wie Sie Abweichungen finden, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo). Einen Ablauf für mehr Bewertungen finden Sie in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "plan",
      title: "Ein Plan in acht Schritten",
      answer:
        "Beginnen Sie mit den Schritten, die Daten sammeln und Fehler aufdecken, dann folgen Inhalte und Bewertungen. Mit einem festen Termin pro Woche kommen Sie in einigen Wochen durch die Liste.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Search Console einrichten", text: "Website bestätigen und Sitemap einreichen, damit ab sofort Daten gesammelt werden." },
            { title: "Unternehmensprofil übernehmen", text: "Beanspruchen, bestätigen und alle Grunddaten korrigieren." },
            { title: "Firmendaten abgleichen", text: "Profil, Website, Impressum und die zwei, drei wichtigsten Verzeichnisse auf denselben Stand bringen." },
            { title: "Technik prüfen", text: "HTTPS, Indexierung, robots.txt und PageSpeed Insights für Startseite und wichtigste Leistungsseite." },
            { title: "Suchbegriffe sammeln", text: "Kundenfragen, Autovervollständigung und Search-Console-Daten in einer einfachen Liste." },
            { title: "Leistungsseiten verbessern", text: "Je Woche eine Seite: Titel, Überschrift, Text, Bilder, interne Links." },
            { title: "Bewertungen als Ablauf", text: "Eine feste Stelle im Kundenkontakt, an der Sie um eine Bewertung bitten." },
            { title: "Monatlich messen", text: "Einmal im Monat dieselben Zahlen vergleichen und den nächsten Schritt festlegen." },
          ],
        },
        {
          t: "p",
          text: "Zum Abhaken eignet sich die [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste). Den Gesamtzusammenhang erklärt der [Local SEO Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
    {
      id: "messen",
      title: "Erfolg messen mit kostenlosen Daten",
      answer:
        "Messen Sie, was zu Kunden führt: Anrufe, Routenanfragen, Klicks auf die Website und Anfragen. Positionen allein sagen wenig, weil Google lokal je nach Standort des Suchenden anders sortiert.",
      blocks: [
        {
          t: "table",
          caption: "Kennzahlen und woher sie kommen",
          head: ["Kennzahl", "Quelle", "Was sie Ihnen sagt"],
          rows: [
            ["Anrufe, Routen, Website-Klicks", "Leistungsdaten im Unternehmensprofil", "Wie oft aus dem Eintrag ein Kontakt wird"],
            ["Klicks und Einblendungen", "Search Console, Leistungsbericht", "Ob Ihre Seiten bei den richtigen Suchen erscheinen und angeklickt werden"],
            ["Klickrate je Seite", "Search Console", "Ob Titel und Beschreibung zum Klicken einladen"],
            ["Indexierte Seiten und Fehler", "Search Console, Bericht „Seiten“", "Ob Google alle wichtigen Seiten kennt"],
            ["Anfragen und Buchungen", "Ihr Posteingang, Kalender oder Buchungssystem", "Ob aus Sichtbarkeit Umsatz wird"],
          ],
        },
        {
          t: "p",
          text: "Notieren Sie die Werte jeden Monat am selben Tag in einer Tabelle. Vergleichen Sie Monate miteinander und nicht einzelne Tage, besonders in Saisonbetrieben wie Hotels oder Gartenbau.",
        },
      ],
    },
    {
      id: "grenzen",
      title: "Wo kostenloses SEO an Grenzen stößt",
      answer:
        "Eigene Arbeit reicht, solange Profil und Website grundsätzlich in Ordnung sind. Externe Hilfe lohnt sich, wenn ein Profil gesperrt ist, die Technik blockiert oder Ihnen schlicht die Zeit fehlt.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Gesperrtes oder doppeltes Profil:** Die Wiederherstellung verlangt genaue Nachweise. Fehler im Antrag verlängern das Verfahren.",
            "**Technik im Baukasten:** Wenn die Ladezeit am Theme, an Plugins oder am Hosting liegt, helfen Texte und Fotos nicht weiter.",
            "**Starker Wettbewerb im Ort:** In Städten mit vielen gleichartigen Betrieben braucht es mehr Inhalte und Erwähnungen, bis sich etwas bewegt.",
            "**Keine Zeit:** SEO wirkt nur, wenn es regelmäßig passiert. Ein Plan, der liegen bleibt, bringt nichts.",
          ],
        },
        {
          t: "p",
          text: "Misstrauen Sie Angeboten mit „Platz 1 garantiert“. Google schreibt selbst, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung. Wenn Sie nur das Profil sauber aufsetzen lassen wollen: Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Alle Leistungen stehen unter [Leistungen](/services).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann man SEO wirklich kostenlos machen?",
      a: "Ja. Die wichtigsten Werkzeuge, also Unternehmensprofil, Search Console und PageSpeed Insights, sind kostenlos. Sie investieren Zeit statt Geld. Bezahlte Tools sparen vor allem Zeit bei der Recherche, sie sind für einen einzelnen lokalen Betrieb aber kein Muss.",
    },
    {
      q: "Womit sollte ich anfangen?",
      a: "Mit der Search Console, damit Daten gesammelt werden, und mit dem Unternehmensprofil, weil es für lokale Suchen am meisten bewirkt. Danach prüfen Sie die Technik und verbessern Ihre wichtigsten Leistungsseiten.",
    },
    {
      q: "Wie lange dauert es, bis kostenloses SEO wirkt?",
      a: "Google schreibt, dass manche Änderungen innerhalb von Stunden wirken und andere Monate brauchen. Korrekturen im Profil sind oft nach Googles Prüfung sichtbar. Für stabile Veränderungen bei Anfragen sollten Sie mit Monaten rechnen, je nach Wettbewerb im Ort.",
    },
    {
      q: "Brauche ich Programmierkenntnisse?",
      a: "Für die Grundlagen nicht. Titel, Beschreibungen, Texte und Bilder ändern Sie in den meisten Website-Systemen ohne Code. Bei strukturierten Daten oder Ladezeit-Problemen im Theme kann technische Hilfe nötig werden.",
    },
    {
      q: "Wie viel Zeit sollte ich einplanen?",
      a: "Dafür gibt es keine feste Regel. Bewährt hat sich ein fester Termin pro Woche, an dem Sie einen Schritt des Plans erledigen, und ein Termin pro Monat zum Messen. Regelmäßigkeit bringt mehr als ein einzelner großer Einsatz.",
    },
    {
      q: "Lohnt sich ein Google-Unternehmensprofil auch ohne Ladengeschäft?",
      a: "Ja. Handwerker und mobile Dienste blenden ihre Adresse aus und geben ein Einzugsgebiet an. Sie erscheinen dann bei Suchen in diesem Gebiet. Eine reine Postadresse ohne Betrieb ist dafür nicht zulässig.",
    },
  ],
  sources: [
    { title: "Startleitfaden zur Suchmaschinenoptimierung (SEO)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Informationen zur Search Console", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9128668?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Präsentation Ihres Unternehmens auf Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Änderungen an Rich-Suchergebnissen für Anleitungen und FAQs (August 2023)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=de" },
  ],
  related: [
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
    { slug: "kostenlose-local-seo-audit-tools", title: "Kostenlose Local SEO Audit-Tools im Vergleich" },
  ],
  cta: {
    title: "Sie wollen wissen, wo Sie anfangen sollen?",
    text: "Wir sehen uns Ihr Google-Profil und Ihre Website an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie selbst und ohne Budget zuerst angehen können. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
