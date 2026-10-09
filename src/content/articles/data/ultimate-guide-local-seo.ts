import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ultimate-guide-local-seo",
  lang: "de",
  seoTitle: "Local SEO Leitfaden 2026: So werden Sie lokal gefunden",
  seoDescription:
    "Local SEO für Betriebe in Deutschland, Österreich und der Schweiz: wie Google lokal sortiert, was im Unternehmensprofil zählt und ein Plan in zehn Schritten.",
  h1: "Local SEO: Der Leitfaden für lokale Unternehmen",
  kicker: "Grundlagen",
  lead:
    "Für Inhaber von Hotels, Praxen, Handwerksbetrieben und Geschäften, die bei Suchen wie „in meiner Nähe“ oder „[Leistung] + [Ort]“ gefunden werden wollen. Sie erfahren, wie Google lokale Ergebnisse sortiert, was Sie selbst tun können und welche Abkürzungen Ihnen schaden.",
  answer:
    "Local SEO sind alle Maßnahmen, mit denen ein Betrieb bei ortsbezogenen Suchen in Google Maps, im Kartenblock der Suche und zunehmend in KI-Antworten erscheint. Google sortiert dabei nach **Relevanz, Entfernung und Bekanntheit**. Den größten Hebel haben ein vollständiges Unternehmensprofil, eine klare Website, einheitliche Firmendaten und echte Bewertungen.",
  takeaways: [
    "Google sortiert lokale Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Eine bessere Position lässt sich laut Google nicht kaufen.",
    "Das Google-Unternehmensprofil ist der wichtigste Einzelbaustein. Es muss vollständig, korrekt und aktuell sein.",
    "Keywords im Firmennamen, gekaufte Bewertungen und mehrere Profile für einen Standort verstoßen gegen Googles Richtlinien und können zur Sperrung führen.",
    "Die Website liefert die Inhalte, mit denen Google und KI-Assistenten Ihre Leistungen verstehen: eine Seite je Leistung, klare Ortsangaben, strukturierte Daten.",
    "Messen Sie mit den Leistungsdaten des Profils, der Search Console und markierten Links, nicht mit dem Gefühl, „oben“ zu stehen.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-09",
  readingTime: 14,
  sections: [
    {
      id: "was-ist-local-seo",
      title: "Was ist Local SEO?",
      answer:
        "Local SEO (lokale Suchmaschinenoptimierung) sorgt dafür, dass ein Betrieb bei Suchen mit Ortsbezug gefunden wird: in Google Maps, im Kartenblock oberhalb der normalen Treffer und in den lokalen Treffern darunter.",
      blocks: [
        {
          t: "p",
          text: "Eine lokale Suche erkennen Sie am Ortsbezug. Er steht entweder in der Anfrage („Zahnarzt Innsbruck“, „Hotel am Tegernsee“) oder Google leitet ihn aus dem Standort des Suchenden ab („Bäckerei in der Nähe“, „Elektriker Notdienst“). In beiden Fällen zeigt Google meist einen Kartenblock mit drei Betrieben, oft **Local Pack** genannt, und darunter die normalen Suchergebnisse.",
        },
        {
          t: "p",
          text: "Klassische Suchmaschinenoptimierung zielt auf Rankings unabhängig vom Ort. Local SEO zielt auf ein Einzugsgebiet: eine Stadt, ein Tal, einen Bezirk. Deshalb spielen hier Dinge eine Rolle, die bei normalem SEO kaum zählen, etwa die Adresse, die Entfernung zum Suchenden und Bewertungen auf Google.",
        },
        {
          t: "table",
          caption: "Wo lokale Suchen sichtbar werden",
          head: ["Fläche", "Was dort erscheint", "Was den Eintrag speist"],
          rows: [
            ["Kartenblock in der Suche", "Meist drei Betriebe mit Karte, Bewertung, Öffnungszeiten", "Google-Unternehmensprofil"],
            ["Google Maps", "Alle passenden Betriebe im Kartenausschnitt", "Google-Unternehmensprofil"],
            ["Organische Treffer", "Websites mit Bezug zur Suche und zum Ort", "Ihre Website"],
            ["KI-Übersichten und KI-Assistenten", "Zusammengefasste Antworten mit Nennungen und Links", "Profil, Website und Erwähnungen im Netz"],
          ],
        },
      ],
    },
    {
      id: "wie-google-sortiert",
      title: "Wie Google lokale Ergebnisse sortiert",
      answer:
        "Google nennt drei Faktoren: Relevanz (passt der Eintrag zur Suche), Entfernung (wie weit ist der Betrieb vom Suchenden oder vom gesuchten Ort entfernt) und Bekanntheit (wie bekannt ist der Betrieb online und offline).",
      blocks: [
        {
          t: "p",
          text: "Diese drei Faktoren stehen in Googles eigener Hilfe zum lokalen Ranking. Dort steht auch der wichtigste Satz für jeden Inhaber: Ein besseres lokales Ranking kann nicht eingefordert werden, **auch nicht gegen Bezahlung**. Anzeigen erscheinen getrennt und gekennzeichnet. Wer Ihnen eine „garantierte Top-3-Position“ verkauft, verspricht etwas, das Google ausschließt.",
        },
        {
          t: "table",
          caption: "Die drei Faktoren nach Google und was Sie beeinflussen können",
          head: ["Faktor", "Was Google damit meint", "Ihr Einfluss"],
          rows: [
            ["Relevanz", "Wie gut das Profil zur Suchanfrage passt", "Hoch: Kategorie, Leistungen, Beschreibung, Website-Inhalte"],
            ["Entfernung", "Abstand zum Suchenden oder zum Ort in der Suche", "Gering: Sie können den Standort nicht verschieben, nur korrekt angeben"],
            ["Bekanntheit", "Wie bekannt der Betrieb ist, unter anderem über Links, Erwähnungen und Rezensionen", "Mittel: echte Bewertungen, Erwähnungen in lokalen Medien und Verbänden"],
          ],
        },
        {
          t: "p",
          text: "Branchenumfragen wie die jährliche Expertenbefragung von Whitespark versuchen, die Gewichtung einzelner Signale zu schätzen. Das sind Einschätzungen von Fachleuten, keine Messungen. Sie stimmen aber mit Googles Aussage überein: Das Unternehmensprofil, die Website und Bewertungen tragen am meisten.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Weil die Entfernung zählt, sieht jeder Suchende eine etwas andere Reihenfolge. Ein einzelner Blick auf das eigene Handy sagt wenig. Aussagekräftiger ist ein Raster aus Messpunkten über Ihr Einzugsgebiet, wie wir es im [Ranking-Leitfaden](/blog/google-maps-ranking-verbessern) beschreiben.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Das Google-Unternehmensprofil richtig pflegen",
      answer:
        "Das Unternehmensprofil (früher Google My Business) ist der Eintrag, den Menschen in Maps und im Kartenblock sehen. Je vollständiger und genauer es ist, desto besser kann Google es den passenden Suchen zuordnen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Name wie im echten Leben",
              text: "Der Name muss dem Namen auf Schild, Briefpapier und Website entsprechen. Zusätze wie Leistungen, Orte oder Slogans sind laut Googles Richtlinien nicht erlaubt.",
            },
            {
              title: "Kategorie so genau wie möglich",
              text: "Wählen Sie die spezifischste Hauptkategorie („Pension“ statt „Unterkunft“) und nur wenige weitere. Google sagt: so wenige wie möglich, und danach, was der Betrieb ist, nicht was er hat.",
            },
            {
              title: "Adresse oder Einzugsgebiet",
              text: "Mit Kundenverkehr vor Ort: echte Adresse. Ohne Kundenverkehr (Handwerk, mobile Dienste): Adresse ausblenden und ein Einzugsgebiet angeben. Virtuelle Büros sind nicht zulässig.",
            },
            {
              title: "Öffnungszeiten und Sonderzeiten",
              text: "Pflegen Sie Feiertage und Betriebsurlaub als Sonderöffnungszeiten. Falsche Zeiten kosten Vertrauen schneller als jede fehlende Optimierung.",
            },
            {
              title: "Leistungen und Beschreibung",
              text: "Tragen Sie Ihre Leistungen einzeln ein. Die Beschreibung (bis 750 Zeichen) erklärt sachlich, was Sie besonders macht, ohne Preise, Aktionen oder Links.",
            },
            {
              title: "Fotos, die echt sind",
              text: "Außenansicht, Eingang, Räume, Team, typische Arbeiten. Eigene Fotos statt Bilddatenbank. Mehr dazu im Artikel [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
            },
          ],
        },
        {
          t: "p",
          text: "Die Fragen-und-Antworten-Funktion im Profil hat Google Ende 2025 eingestellt und durch eine KI-Funktion ersetzt, die aus Ihren Profildaten, Rezensionen und Ihrer Website antwortet. Umso wichtiger ist, dass diese Quellen vollständig und widerspruchsfrei sind. Eine ausführliche Anleitung finden Sie in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "website",
      title: "Die Website als Grundlage",
      answer:
        "Das Profil zeigt, dass es Sie gibt. Die Website erklärt, was Sie genau anbieten und wo. Ohne sie fehlen Google und KI-Assistenten die Inhalte, um Sie bestimmten Suchen zuzuordnen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Eine Seite je Leistung.** „Badsanierung“, „Heizungswartung“ und „Notdienst“ sind drei Suchabsichten. Eine Sammelseite „Leistungen“ deckt keine davon gut ab.",
            "**Ort sichtbar machen.** Adresse, Einzugsgebiet und Anfahrt gehören in Text, Fußzeile und Kontaktseite, nicht nur in ein Kartenbild.",
            "**Title und Überschrift mit Leistung und Ort**, zum Beispiel „Zahnarztpraxis in Graz-Geidorf | Praxis Muster“. Ohne Aufzählung von Städten, die Sie gar nicht bedienen.",
            "**Strukturierte Daten** vom Typ LocalBusiness (oder spezifischer: Dentist, Hotel, Plumber) mit Name, Adresse, Telefon und Öffnungszeiten. Wie das geht, steht im Artikel [Schema Markup für Local SEO](/blog/schema-markup-local-seo).",
            "**Schnell und mobil bedienbar.** Lokale Suchen passieren oft unterwegs. Telefonnummer und Route müssen mit einem Tipp erreichbar sein.",
            "**Impressum und Kontakt.** In Deutschland verlangt § 5 Digitale-Dienste-Gesetz (seit Mai 2024, früher Telemediengesetz) ein vollständiges Impressum. Es ist zugleich eine Quelle für einheitliche Firmendaten.",
          ],
        },
        {
          t: "note",
          label: "Was strukturierte Daten nicht leisten",
          text: "Sternebewertungen aus eigenem Review-Markup zeigt Google für lokale Unternehmen auf deren eigener Website nicht an. FAQ-Ergebnisse in der Suche gibt es seit 2023 fast nur noch für Behörden- und Gesundheitsseiten. Strukturierte Daten helfen beim Verstehen, sie sind kein Trick für mehr Platz in der Suche.",
        },
        {
          t: "p",
          text: "Welche Begriffe Ihre Kunden tatsächlich suchen, finden Sie mit der Methode aus [Local SEO Keywords finden](/blog/local-seo-keywords-finden).",
        },
      ],
    },
    {
      id: "firmendaten-verzeichnisse",
      title: "Einheitliche Firmendaten und Verzeichnisse in DACH",
      answer:
        "Name, Adresse und Telefonnummer (kurz NAP) sollten überall gleich geschrieben sein: im Profil, auf der Website, in Verzeichnissen und sozialen Netzwerken. Widersprüche machen es Google schwerer, die Einträge einem Betrieb zuzuordnen.",
      blocks: [
        {
          t: "p",
          text: "Es geht nicht um möglichst viele Einträge, sondern um richtige. Ein alter Eintrag mit der früheren Telefonnummer schadet mehr, als zehn neue nützen. Beginnen Sie mit den Plattformen, die in Ihrem Land und Ihrer Branche tatsächlich genutzt werden.",
        },
        {
          t: "table",
          caption: "Verbreitete Verzeichnisse nach Land (Auswahl, ohne Rangfolge)",
          head: ["Land", "Allgemein", "Übergreifend"],
          rows: [
            ["Deutschland", "Das Örtliche, Gelbe Seiten, Das Telefonbuch", "Apple Business Connect, Bing Places"],
            ["Österreich", "Herold", "Apple Business Connect, Bing Places"],
            ["Schweiz", "local.ch, search.ch", "Apple Business Connect, Bing Places"],
          ],
        },
        {
          t: "p",
          text: "Dazu kommen Branchenportale, die Ihre Kunden ohnehin nutzen: Tripadvisor und Buchungsportale für Hotels, Arzt- und Bewertungsportale für Praxen, Handwerkerportale für Betriebe. Wie Sie Abweichungen finden und bereinigen, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen: was zählt und was verboten ist",
      answer:
        "Google schreibt selbst, dass mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern können. Entscheidend ist, dass sie echt sind und laufend dazukommen.",
      blocks: [
        {
          t: "p",
          text: "Bewertungen wirken doppelt: als Signal für Google und als Entscheidungshilfe für Menschen, die zwischen drei Einträgen im Kartenblock wählen. Antworten Sie auf jede Bewertung, sachlich und ohne persönliche Daten des Gastes oder Patienten.",
        },
        {
          t: "table",
          caption: "Bewertungen sammeln: erlaubt und nicht erlaubt",
          head: ["Erlaubt", "Nicht erlaubt"],
          rows: [
            ["Kunden nach dem Termin um eine Bewertung bitten, mit direktem Link", "Geld, Rabatte oder Geschenke für Bewertungen anbieten"],
            ["Den Link auf Rechnung, Bestätigungsmail oder QR-Code am Empfang setzen", "Nur zufriedene Kunden gezielt fragen und andere aussortieren"],
            ["Auf alle Bewertungen antworten, auch auf kritische", "Bewertungen von Mitarbeitern, Familie oder gekaufte Bewertungen"],
          ],
        },
        {
          t: "p",
          text: "Die rechte Spalte verstößt gegen Googles Richtlinien für Rezensionen und in Deutschland meist auch gegen das Wettbewerbsrecht. Google entfernt solche Bewertungen und kann das Profil einschränken. Ein praktischer Ablauf steht im Artikel [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "inhalte-erwaehnungen",
      title: "Lokale Inhalte und Erwähnungen",
      answer:
        "Bekanntheit entsteht nicht nur auf Google. Erwähnungen und Links von lokalen Zeitungen, Verbänden, Partnern und Veranstaltungen zeigen, dass Ihr Betrieb vor Ort eine Rolle spielt.",
      blocks: [
        {
          t: "ul",
          items: [
            "Mitgliedschaft in Kammer, Innung, Tourismusverband oder Werbegemeinschaft, mit Eintrag und Link auf deren Website.",
            "Lokale Presse: ein Jubiläum, eine Ausbildungsinitiative, ein neues Angebot sind echte Anlässe.",
            "Partner und Lieferanten, die Sie als Kunden oder Partner nennen.",
            "Inhalte, die nur Sie schreiben können: Anfahrt im Winter, Parken in der Altstadt, was bei einem Wasserschaden zuerst zu tun ist.",
          ],
        },
        {
          t: "p",
          text: "Gekaufte Linkpakete und Massen-Gastartikel bringen lokal wenig und sind ein Risiko. Ein einziger Link vom Tourismusverband Ihres Ortes sagt Google mehr über Ihre Bedeutung vor Ort als hundert Links von Seiten ohne Bezug.",
        },
      ],
    },
    {
      id: "ki-suche",
      title: "Local SEO und KI-Suche",
      answer:
        "Google zeigt seit März 2025 auch in Deutschland KI-Übersichten, und viele Menschen fragen ChatGPT oder Perplexity nach Empfehlungen. Diese Systeme stützen sich auf dieselben Quellen: Profil, Website, Bewertungen und Erwähnungen.",
      blocks: [
        {
          t: "p",
          text: "Für KI-Antworten zählt, ob Ihre Angaben eindeutig und überall gleich sind. Ein KI-System, das auf der Website „ab 2025 neue Öffnungszeiten“ und im Profil die alten findet, nennt im Zweifel keinen von beiden Werten oder den falschen.",
        },
        {
          t: "ol",
          items: [
            "Beantworten Sie auf Ihrer Website die Fragen, die Kunden am Telefon stellen, jeweils mit einem klaren ersten Satz.",
            "Nennen Sie Leistungen, Orte, Preise ab und Bedingungen als Text, nicht nur in Bildern oder PDFs.",
            "Halten Sie Profil, Website und wichtige Verzeichnisse auf demselben Stand.",
            "Lassen Sie KI-Crawler zu, wenn Sie in KI-Antworten erscheinen wollen (robots.txt prüfen).",
          ],
        },
        {
          t: "p",
          text: "Was KI-Übersichten konkret für lokale Betriebe bedeuten, beschreibt der Artikel [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo).",
        },
      ],
    },
    {
      id: "fehler",
      title: "Abkürzungen, die Ihnen schaden",
      answer:
        "Die meisten Sperrungen und Abstürze im lokalen Ranking gehen auf wenige Fehler zurück, die alle nach schnellem Erfolg aussehen.",
      blocks: [
        {
          t: "table",
          caption: "Häufige Fehler und ihre Folgen",
          head: ["Fehler", "Warum er schadet"],
          rows: [
            ["Ort oder Leistung im Firmennamen („Malerbetrieb Huber München Fassade“)", "Verstößt gegen die Namensrichtlinie, Wettbewerber können ihn melden, das Profil kann gesperrt werden"],
            ["Zweites Profil für denselben Standort", "Duplikate werden zusammengeführt oder entfernt, Bewertungen können verloren gehen"],
            ["Coworking- oder virtuelle Adresse", "Nicht zulässig, häufiger Grund für eine Sperrung"],
            ["Gekaufte oder gefilterte Bewertungen", "Werden entfernt, Profil kann eingeschränkt werden, rechtliches Risiko"],
            ["Website und Profil widersprechen sich", "Google und KI-Systeme vertrauen den Angaben weniger"],
            ["Jemand verspricht „Platz 1 garantiert“", "Google schließt bezahlte Platzierungen im lokalen Ranking aus"],
          ],
        },
      ],
    },
    {
      id: "plan",
      title: "Ein Plan in zehn Schritten",
      answer:
        "Wenn Sie heute beginnen: zuerst das Fundament (Profil, Daten, Website), dann Bewertungen und Inhalte, zuletzt die Messung. Jeder Schritt baut auf dem vorigen auf.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profil beanspruchen und bestätigen", text: "Prüfen Sie, ob es bereits ein Profil gibt, und übernehmen Sie es, statt ein neues anzulegen." },
            { title: "Grunddaten korrigieren", text: "Name, Adresse oder Einzugsgebiet, Telefon, Website, Öffnungszeiten, Sonderzeiten." },
            { title: "Kategorie und Leistungen festlegen", text: "Eine genaue Hauptkategorie, wenige weitere, alle Leistungen einzeln." },
            { title: "Fotos ergänzen", text: "Echte Bilder von außen, innen, Team und Arbeit." },
            { title: "Firmendaten abgleichen", text: "Website, Impressum und die wichtigsten Verzeichnisse auf denselben Stand bringen." },
            { title: "Leistungsseiten bauen", text: "Eine Seite je wichtiger Leistung, mit Ort, Ablauf, Preisrahmen und Fragen." },
            { title: "Strukturierte Daten einbauen", text: "LocalBusiness-Markup mit den gleichen Angaben wie im Profil." },
            { title: "Bewertungen als Ablauf", text: "Feste Stelle im Kundenkontakt, an der Sie um eine Bewertung bitten, und Antworten innerhalb weniger Tage." },
            { title: "Lokale Erwähnungen aufbauen", text: "Verband, Kammer, Partner, Presse: dort, wo Sie ohnehin aktiv sind." },
            { title: "Messen und nachsteuern", text: "Monatlich Profil-Leistungsdaten, Search Console und Anfragen vergleichen." },
          ],
        },
        {
          t: "p",
          text: "Zum Abhaken eignet sich die [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste). Wenn Sie lieber wissen wollen, wo Ihr Betrieb heute steht, prüfen wir das im [kostenlosen Check](/de#check).",
        },
      ],
    },
    {
      id: "messen",
      title: "Erfolg messen",
      answer:
        "Messen Sie Anrufe, Routenanfragen, Website-Klicks und Anfragen, nicht nur Positionen. Die Zahlen dafür liefern das Profil selbst, die Google Search Console und Ihre Web-Analyse.",
      blocks: [
        {
          t: "table",
          caption: "Kostenlose Messquellen",
          head: ["Quelle", "Was sie zeigt"],
          rows: [
            ["Leistungsdaten im Unternehmensprofil", "Aufrufe, Suchbegriffe, Anrufe, Routen, Website-Klicks"],
            ["Google Search Console", "Suchanfragen und Klicks auf Ihre Website, auch für Leistungsseiten"],
            ["Web-Analyse mit markiertem Profil-Link", "Was Besucher aus dem Profil auf der Website tun, wenn der Website-Link im Profil einen UTM-Parameter trägt"],
            ["Ihr Anfrage- und Buchungseingang", "Ob aus Sichtbarkeit tatsächlich Umsatz wird"],
          ],
        },
        {
          t: "p",
          text: "Rechnen Sie mit Wochen bis Monaten, bis sich Änderungen stabil zeigen. Eine seriöse Zeitangabe für Ihren Fall hängt vom Wettbewerb im Ort ab, nicht von einer Faustregel.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was kostet Local SEO?",
      a: "Die Grundlagen kosten nur Zeit: Das Unternehmensprofil ist kostenlos. Externe Hilfe reicht von einer einmaligen Korrektur bis zur laufenden Betreuung. Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €, Umfang und Preis stehen vor dem Start schriftlich fest.",
    },
    {
      q: "Wie lange dauert es, bis Local SEO wirkt?",
      a: "Korrekturen an Profildaten sind oft nach Googles Prüfung sichtbar. Bis sich Positionen und Anfragen stabil verändern, vergehen meist Wochen bis Monate, je nach Wettbewerb im Ort. Garantierte Zeiträume oder Plätze kann niemand seriös zusagen.",
    },
    {
      q: "Was ist der Unterschied zwischen SEO und Local SEO?",
      a: "SEO zielt auf Suchergebnisse unabhängig vom Ort. Local SEO zielt auf Suchen mit Ortsbezug und bezieht das Google-Unternehmensprofil, die Entfernung zum Suchenden, einheitliche Firmendaten und Bewertungen ein.",
    },
    {
      q: "Brauche ich Local SEO ohne Ladengeschäft?",
      a: "Ja. Handwerker, mobile Dienste und Berater ohne Kundenverkehr können im Profil die Adresse ausblenden und ein Einzugsgebiet angeben. Sie erscheinen dann bei Suchen in diesem Gebiet.",
    },
    {
      q: "Geht Local SEO ohne eigene Website?",
      a: "Ein Unternehmensprofil funktioniert auch ohne Website. Ihnen fehlen dann aber die Inhalte, mit denen Google und KI-Assistenten Ihre einzelnen Leistungen verstehen, und ein Ort, an dem Interessenten direkt anfragen oder buchen.",
    },
    {
      q: "Kann man ein besseres lokales Ranking kaufen?",
      a: "Nein. Google schreibt, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung. Bezahlt werden können nur Anzeigen, die getrennt und gekennzeichnet erscheinen.",
    },
    {
      q: "Was gilt bei mehreren Standorten?",
      a: "Jeder Standort mit Kundenverkehr bekommt ein eigenes Profil und eine eigene Standortseite auf der Website. Name und Kategorien sollten über alle Standorte gleich sein, wenn dort dieselben Leistungen angeboten werden.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Änderungen an Rich-Suchergebnissen für Anleitungen und FAQs (August 2023)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=de" },
    { title: "With Google Q&A gone, you need a Maps “Ask a question” strategy", publisher: "Whitespark", url: "https://whitespark.ca/blog/with-google-qa-gone-you-need-a-maps-ask-a-question-strategy/" },
    { title: "Local Search Ranking Factors (Expertenumfrage)", publisher: "Whitespark", url: "https://whitespark.ca/local-search-ranking-factors/" },
    { title: "Digitale-Dienste-Gesetz (DDG), § 5 Allgemeine Informationspflichten", publisher: "Bundesministerium der Justiz, gesetze-im-internet.de", url: "https://www.gesetze-im-internet.de/ddg/__5.html" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "google-bewertungen-bekommen", title: "Mehr Google-Bewertungen bekommen" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
  ],
  cta: {
    title: "Wo steht Ihr Betrieb heute?",
    text: "Wir sehen uns Ihr Google-Profil und Ihre Website an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
