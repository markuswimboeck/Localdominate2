import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-keywords-finden",
  lang: "de",
  seoTitle: "Local SEO Keywords finden: Anleitung für Betriebe",
  seoDescription:
    "Lokale Keywords finden ohne teure Tools: Kundensprache, Google-Vorschläge, Search Console und Profildaten nutzen und jedem Begriff die richtige Seite zuordnen.",
  h1: "Local SEO Keywords finden: So suchen Ihre Kunden wirklich",
  kicker: "Strategie",
  lead:
    "Für Inhaber von Hotels, Praxen, Handwerksbetrieben und Geschäften in Deutschland, Österreich und der Schweiz, die wissen wollen, mit welchen Worten Kunden nach ihnen suchen. Sie bekommen eine Methode, die mit kostenlosen Google-Werkzeugen auskommt, und erfahren, wo diese Begriffe hingehören und wo nicht.",
  answer:
    "Lokale Keywords sind die Suchbegriffe, mit denen Menschen einen Betrieb in ihrer Nähe suchen, etwa „Physiotherapie Hausbesuch Graz“ oder „Hotel mit Hund Zillertal“. Sie finden sie in der Sprache Ihrer Kunden, in Googles Suchvorschlägen, in der **Search Console** und in den Suchanfragen Ihres Unternehmensprofils. Danach ordnen Sie jedem wichtigen Begriff genau eine passende Seite zu.",
  takeaways: [
    "Die besten Ideen stammen aus Ihrem Alltag: Wörter, die Kunden am Telefon, in Anfragen und in Bewertungen benutzen.",
    "Google-Vorschläge, „Ähnliche Fragen“, die Search Console und die Suchanfragen im Unternehmensprofil sind kostenlos und zeigen echtes Suchverhalten.",
    "Suchvolumen aus dem Keyword-Planer sind gerundete Schätzungen. Ein Begriff mit wenigen Suchen kann für einen lokalen Betrieb trotzdem der wichtigste sein.",
    "Jeder wichtige Begriff bekommt eine Seite. Ortsseiten lohnen sich nur dort, wo Sie wirklich tätig sind und etwas Eigenes zu sagen haben.",
    "Keywords gehören nicht in den Firmennamen im Profil und nicht als Städteliste in den Text. Beides verstößt gegen Googles Richtlinien.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-09",
  readingTime: 12,
  sections: [
    {
      id: "was-sind-lokale-keywords",
      title: "Was sind lokale Keywords?",
      answer:
        "Lokale Keywords sind Suchanfragen, bei denen der Suchende einen Anbieter in einem bestimmten Ort oder in seiner Nähe erwartet. Der Ort steht entweder in der Anfrage oder Google leitet ihn aus dem Standort des Suchenden ab.",
      blocks: [
        {
          t: "p",
          text: "Wer „Laufschuhe Test“ eingibt, will lesen. Wer „Laufschuhe kaufen Winterthur“ eingibt, will in ein Geschäft gehen. Der zweite Begriff ist ein lokales Keyword: Er verbindet eine **Leistung oder ein Produkt** mit einem **Ort** oder mit dem Wunsch, etwas in der Nähe zu finden.",
        },
        {
          t: "p",
          text: "Für lokale Betriebe sind diese Begriffe wertvoll, weil hinter ihnen meist ein konkreter Bedarf steht. Wer „Heizungsnotdienst Augsburg“ sucht, hat ein Problem, das heute gelöst werden soll. Sie konkurrieren dabei nicht mit dem ganzen Land, sondern mit den Anbietern in Ihrem Einzugsgebiet.",
        },
        {
          t: "table",
          caption: "Allgemeine und lokale Suchanfrage im Vergleich",
          head: ["", "Allgemeine Suche", "Lokale Suche"],
          rows: [
            ["Beispiel", "„Zahnimplantat Kosten“", "„Zahnarzt Implantat Linz“"],
            ["Was der Suchende will", "Informationen", "Einen Anbieter in der Nähe"],
            ["Was Google zeigt", "Ratgeber, Portale, Websites", "Meist Kartenblock mit Betrieben, darunter Websites"],
            ["Mit wem Sie konkurrieren", "Anbieter im ganzen Sprachraum", "Anbieter in Ihrem Ort und Umland"],
          ],
        },
      ],
    },
    {
      id: "arten-lokaler-suchen",
      title: "Vier Arten lokaler Suchanfragen",
      answer:
        "Lokale Suchen lassen sich grob in vier Gruppen teilen: mit Ortsangabe, ohne Ortsangabe, mit zusätzlichem Merkmal und als Frage. Jede Gruppe braucht eine etwas andere Antwort auf Ihrer Website und im Profil.",
      blocks: [
        {
          t: "table",
          caption: "Arten lokaler Suchanfragen (Beispiele ohne Suchvolumen)",
          head: ["Art", "Beispiele", "Was dabei zählt"],
          rows: [
            ["Mit Ortsangabe", "„Friseur Salzburg Lehen“, „Steuerberater Luzern“", "Leistung und Ort klar auf der passenden Seite und im Profil"],
            ["Ohne Ortsangabe oder „in der Nähe“", "„Apotheke in der Nähe“, „Tierarzt Notdienst“", "Google nutzt den Standort des Suchenden, hier entscheidet vor allem das Unternehmensprofil"],
            ["Mit Merkmal", "„Hotel mit Hund Zillertal“, „Kinderzahnarzt Angstpatienten Köln“", "Eigene Abschnitte oder Seiten zu diesen Merkmalen, passende Attribute im Profil"],
            ["Als Frage", "„Was kostet ein Wasserschaden-Gutachten?“, „Wo kann ich in Bern Velo reparieren lassen?“", "Klare Antworten auf der Website, jeweils mit einem verständlichen ersten Satz"],
          ],
        },
        {
          t: "p",
          text: "Die Gruppe „ohne Ortsangabe“ zeigt, warum Keywords allein nicht reichen: Wer „Bäckerei in der Nähe“ sucht, nennt keinen Ort, den Sie auf Ihrer Website einbauen könnten. Hier sortiert Google nach Relevanz, Entfernung und Bekanntheit. Ein vollständiges und korrektes Unternehmensprofil ist dafür die Grundlage.",
        },
        {
          t: "note",
          label: "Regionale Wörter beachten",
          text: "In Österreich sucht man eher den „Installateur“, in Deutschland den „Sanitärbetrieb“ oder „Klempner“. In der Schweiz ist das Fahrrad ein „Velo“, in Österreich heißt die Arztpraxis oft „Ordination“. Prüfen Sie, welches Wort Ihre Kunden vor Ort benutzen, statt das Wort aus Ihrer Fachsprache zu nehmen.",
        },
      ],
    },
    {
      id: "startliste",
      title: "Schritt 1: Die Startliste aus Ihrem Alltag",
      answer:
        "Beginnen Sie nicht mit einem Tool, sondern mit den Worten Ihrer Kunden. Eine Liste aus Leistungen, Orten und Merkmalen, die Sie in einer Stunde aus Telefonaten, Anfragen und Bewertungen ziehen, ist die beste Grundlage für alle weiteren Schritte.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Leistungen aufschreiben",
              text: "Jede Leistung, die Sie verkaufen wollen, einzeln: „Badsanierung“, „Heizungswartung“, „Notdienst“. Nicht „Sanitär und mehr“.",
            },
            {
              title: "Kundensprache sammeln",
              text: "Wie fragen Kunden am Telefon? Welche Wörter stehen in E-Mail-Anfragen und Buchungsnachrichten? Kunden sagen oft „Kassenzahnarzt“ oder „Zimmer mit Bergblick“, auch wenn Sie selbst anders formulieren würden.",
            },
            {
              title: "Bewertungen lesen",
              text: "In Ihren eigenen Google-Bewertungen und denen anderer Betriebe stehen die Begriffe, die Kunden wichtig sind, etwa „barrierefrei“, „Parkplatz“ oder „spontaner Termin“.",
            },
            {
              title: "Orte festlegen",
              text: "Ihr Ort, die Stadtteile oder Nachbargemeinden, aus denen Kunden tatsächlich kommen, und bei Hotels die Region, nach der Gäste suchen („Tegernseer Tal“, „Bregenzerwald“).",
            },
            {
              title: "Merkmale ergänzen",
              text: "Was unterscheidet Ihr Angebot: Notdienst, Hausbesuch, Termine am Samstag, hundefreundlich, englischsprachig, Kassenpatienten.",
            },
          ],
        },
        {
          t: "p",
          text: "Aus diesen Bausteinen kombinieren Sie die ersten Suchbegriffe: Leistung plus Ort, Leistung plus Merkmal plus Ort. Halten Sie die Liste in einer einfachen Tabelle fest. Die Vorlage im Artikel [Local Keyword Research Template](/blog/local-keyword-research-template) zeigt eine mögliche Struktur.",
        },
      ],
    },
    {
      id: "google-vorschlaege",
      title: "Schritt 2: Google selbst befragen",
      answer:
        "Googles Suchvorschläge, der Kasten „Ähnliche Fragen“ und die verwandten Suchanfragen am Ende der Ergebnisseite zeigen, was Menschen rund um Ihre Begriffe suchen. Laut Google spiegeln die Vorschläge tatsächliche Suchanfragen wider.",
      blocks: [
        {
          t: "p",
          text: "Die automatische Vervollständigung beruht nach Googles eigener Erklärung auf echten Suchanfragen. Sie berücksichtigt unter anderem die Sprache, den Ort, von dem aus gesucht wird, die aktuelle Beliebtheit und frühere Suchen. Für Ihre Recherche heißt das: Was dort erscheint, wird gesucht. Wie oft, verrät es nicht.",
        },
        {
          t: "ol",
          items: [
            "Öffnen Sie ein privates Browserfenster, damit Ihre eigenen früheren Suchen die Vorschläge möglichst wenig beeinflussen.",
            "Geben Sie eine Leistung aus Ihrer Liste ein und danach Ihren Ort: „Zahnarzt Graz“. Notieren Sie die Vorschläge.",
            "Ergänzen Sie nach der Leistung einzelne Buchstaben („Zahnarzt Graz a“, „Zahnarzt Graz b“) und Fragewörter („Zahnarzt Graz wer“, „was kostet Zahnarzt“).",
            "Lesen Sie in den Suchergebnissen den Kasten „Ähnliche Fragen“, wenn er erscheint. Die Fragen dort eignen sich für Abschnitte auf Leistungsseiten.",
            "Schauen Sie am Ende der Ergebnisseite nach verwandten Suchanfragen.",
            "Wiederholen Sie das in Google Maps. Auch dort schlägt Google beim Tippen Begriffe vor.",
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Weil der Ort des Suchenden die Vorschläge beeinflusst, sehen Sie in München andere Vorschläge als ein Kunde in Rosenheim. Wenn Sie ein großes Einzugsgebiet haben, suchen Sie auch mit den Ortsnamen der Nachbargemeinden.",
        },
      ],
    },
    {
      id: "eigene-daten",
      title: "Schritt 3: Was Ihre eigenen Daten zeigen",
      answer:
        "Die Google Search Console zeigt, bei welchen Suchanfragen Ihre Website bereits in den Ergebnissen erscheint. Die Leistungsdaten im Unternehmensprofil zeigen, mit welchen Suchbegriffen Menschen Ihr Profil gefunden haben. Beides ist kostenlos und beruht auf echtem Verhalten.",
      blocks: [
        {
          t: "h3",
          text: "Google Search Console",
        },
        {
          t: "p",
          text: "Im Leistungsbericht unter dem Reiter „Suchanfragen“ sehen Sie für jede Anfrage **Impressionen** (wie oft Ihre Website in den Ergebnissen erschien), **Klicks**, **Klickrate** und die **durchschnittliche Position**. Standardmäßig zeigt der Bericht die letzten drei Monate.",
        },
        {
          t: "ul",
          items: [
            "**Viele Impressionen, wenige Klicks:** Die Seite erscheint, überzeugt aber nicht. Prüfen Sie, ob Title und Beschreibung die Suche wirklich beantworten.",
            "**Durchschnittliche Position auf der zweiten Ergebnisseite:** Google hält die Seite für passend, aber nicht für die beste. Oft hilft ein eigener, ausführlicherer Abschnitt zu genau diesem Thema.",
            "**Anfragen, mit denen Sie nicht gerechnet haben:** Das sind Hinweise auf Leistungen oder Fragen, für die es noch keine eigene Seite gibt.",
            "**Filter nach Seite:** Klicken Sie eine Leistungsseite an und sehen Sie, für welche Begriffe genau diese Seite erscheint.",
          ],
        },
        {
          t: "h3",
          text: "Suchanfragen im Unternehmensprofil",
        },
        {
          t: "p",
          text: "In den Leistungsdaten Ihres Google-Unternehmensprofils finden Sie die Suchbegriffe, mit denen Nutzer Ihr Unternehmen gefunden haben. Google aktualisiert diesen Wert jeweils zu Beginn des Monats. Vergleichen Sie die Liste mit Ihrer Startliste: Tauchen Ihre wichtigsten Leistungen auf, oder finden Menschen Sie fast nur über Ihren Firmennamen? Im zweiten Fall fehlt dem Profil Relevanz für Leistungssuchen. Mehr dazu im Artikel [Google Business Insights verstehen](/blog/google-business-insights-verstehen).",
        },
        {
          t: "note",
          label: "Neue Website ohne Daten",
          text: "Für eine neue Website oder ein neues Profil gibt es noch keine Werte. Arbeiten Sie dann mit Startliste und Google-Vorschlägen und schauen Sie regelmäßig nach, ob erste Werte erscheinen.",
        },
      ],
    },
    {
      id: "suchvolumen",
      title: "Schritt 4: Suchvolumen richtig einordnen",
      answer:
        "Der Keyword-Planer von Google Ads zeigt geschätzte durchschnittliche Suchanfragen pro Monat, gerundet und abhängig von den gewählten Standort-Einstellungen. Nutzen Sie die Zahlen zum Vergleichen von Varianten, nicht als Entscheidung, ob ein Begriff wichtig ist.",
      blocks: [
        {
          t: "p",
          text: "Den Keyword-Planer finden Sie in Google Ads, Sie brauchen dafür ein Google-Ads-Konto. Die angezeigten Werte hängen laut Google vom gewählten Zeitraum und von den Standort- und Netzwerkeinstellungen ab. Stellen Sie den Standort deshalb auf Ihre Stadt oder Region und die Sprache auf Deutsch.",
        },
        {
          t: "ul",
          items: [
            "**Die Werte sind gerundet.** Google weist selbst darauf hin, dass sich Werte für mehrere Orte deshalb nicht einfach addieren lassen.",
            "**Kleine Werte sind normal.** Begriffe mit Stadtteil oder Merkmal zeigen oft sehr niedrige oder gar keine Werte. Das heißt nicht, dass niemand so sucht.",
            "**Der Durchschnitt verdeckt Saisons.** Schauen Sie auf den Verlauf über zwölf Monate. „Skiverleih“ oder „Klimaanlage einbauen“ haben klare Spitzen.",
            "**Wenig heißt nicht unwichtig.** Ein Begriff, den im Monat nur wenige Menschen suchen, kann für eine Praxis oder einen Handwerksbetrieb mehrere Anfragen bedeuten, wenn die Absicht klar ist.",
          ],
        },
        {
          t: "p",
          text: "Für saisonale Verläufe und Vergleiche zwischen Begriffen eignet sich zusätzlich Google Trends. Es zeigt relatives Interesse, keine absoluten Zahlen.",
        },
      ],
    },
    {
      id: "wettbewerber",
      title: "Schritt 5: Bei Wettbewerbern nachsehen",
      answer:
        "Die Betriebe, die bei Ihren wichtigsten Begriffen im Kartenblock erscheinen, zeigen Ihnen, welche Kategorien, Leistungen und Seiten Google dort für passend hält. Übernehmen Sie Ideen, aber suchen Sie vor allem nach Lücken.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Kategorie im Profil",
              text: "Suchen Sie Ihr wichtigstes Keyword in Google Maps. Unter dem Namen der vorderen Betriebe steht ihre Hauptkategorie. Passt Ihre eigene Kategorie genauso gut? Hilfe bei der Wahl gibt der [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
            },
            {
              title: "Seitentitel der Websites",
              text: "Der Text im Browser-Tab und in der Ergebnisliste zeigt, womit sich eine Seite selbst beschreibt. Notieren Sie, welche Leistungen und Orte dort stehen.",
            },
            {
              title: "Aufbau der Websites",
              text: "Welche Leistungsseiten gibt es? Eine eigene Seite für „Implantate“ oder „Notdienst“ deutet darauf hin, dass der Betrieb dafür gefunden werden will.",
            },
            {
              title: "Bewertungen der Wettbewerber",
              text: "Was loben oder vermissen Kunden? Ein häufiges „leider kein Parkplatz“ ist ein Hinweis, dass Parken ein Thema ist, das Sie auf Ihrer Anfahrtsseite beantworten sollten.",
            },
          ],
        },
        {
          t: "note",
          label: "Nicht übernehmen",
          text: "Sehen Sie bei Wettbewerbern Ortsnamen oder Leistungen im Firmennamen des Profils, ist das kein Vorbild, sondern ein Verstoß gegen Googles Richtlinien. Google nennt als mögliche Folge die Sperrung des Profils.",
        },
      ],
    },
    {
      id: "keyword-map",
      title: "Schritt 6: Begriffe ordnen und Seiten zuordnen",
      answer:
        "Sortieren Sie die Begriffe nach Absicht und ordnen Sie jeder Absicht genau eine Seite zu. So weiß Google, welche Seite für welche Suche gedacht ist, und Ihre Seiten machen sich nicht gegenseitig Konkurrenz.",
      blocks: [
        {
          t: "table",
          caption: "Beispiel einer Zuordnung für einen Friseursalon in Hamburg-Altona (ohne Suchvolumen)",
          head: ["Suchabsicht", "Beispielbegriffe", "Zielseite"],
          rows: [
            ["Betrieb finden", "„Friseur Altona“, „Friseur in der Nähe“", "Startseite und Unternehmensprofil"],
            ["Bestimmte Leistung", "„Balayage Hamburg Altona“", "Leistungsseite Balayage"],
            ["Leistung mit Merkmal", "„Kinderhaarschnitt Altona“", "Leistungsseite Kinder oder eigener Abschnitt"],
            ["Termin", "„Friseur Altona Termin online“", "Seite mit Online-Buchung"],
            ["Frage vor der Entscheidung", "„Was kostet Balayage?“", "Abschnitt mit Preisrahmen auf der Leistungsseite"],
            ["Name des Betriebs", "„Salon Muster Öffnungszeiten“", "Kontaktseite und Profil mit korrekten Zeiten"],
          ],
        },
        {
          t: "p",
          text: "Eine Seite darf mehrere eng verwandte Begriffe abdecken. „Balayage Altona“ und „Balayage Hamburg“ brauchen keine zwei Seiten. Eine eigene Seite lohnt sich, wenn die Absicht sich unterscheidet, etwa „Balayage“ und „Herrenhaarschnitt“.",
        },
        {
          t: "h3",
          text: "Ortsseiten: nur mit echtem Bezug",
        },
        {
          t: "p",
          text: "Google nennt in seinen Spam-Richtlinien ausdrücklich Seiten, die nur für einzelne Städte oder Regionen angelegt werden und Besucher dann zum selben Ziel führen, als **Brückenseiten**. Eine Seite pro Nachbarort mit ausgetauschtem Ortsnamen ist genau das. Eine Standortseite ist sinnvoll, wenn Sie dort einen Standort haben oder regelmäßig arbeiten und etwas Eigenes zu sagen haben: Anfahrt, Ansprechpartner, typische Aufträge im Ort. Mehr dazu im Artikel [Lokale Landing Pages](/blog/lokale-landing-pages).",
        },
      ],
    },
    {
      id: "keywords-einsetzen",
      title: "Wo Keywords hingehören und wo nicht",
      answer:
        "Setzen Sie Ihre Begriffe dort ein, wo sie Menschen und Google helfen, Ihr Angebot zu verstehen: in Kategorie und Leistungen des Profils, in Title, Überschrift und Text der passenden Seite. Nicht in den Firmennamen und nicht als Aufzählung.",
      blocks: [
        {
          t: "table",
          caption: "Keywords im Unternehmensprofil und auf der Website",
          head: ["Stelle", "So ist es richtig", "Das schadet"],
          rows: [
            ["Firmenname im Profil", "Der echte Name wie auf Schild und Website", "„Malerbetrieb Huber München Fassade“: Ort und Leistung im Namen sind laut Google nicht erlaubt"],
            ["Kategorien", "Die genaueste Hauptkategorie und so wenige weitere wie möglich", "Kategorien als Keyword-Ersatz für alles, was Sie auch anbieten"],
            ["Leistungen im Profil", "Jede Leistung einzeln, in Kundensprache", "Dieselbe Leistung mehrfach mit Ortsnamen"],
            ["Beschreibung im Profil", "Sachlich, was Sie anbieten und für wen", "Aneinandergereihte Suchbegriffe und Ortslisten"],
            ["Title und Hauptüberschrift", "Leistung und Ort, eindeutig für diese Seite: „Balayage in Hamburg-Altona | Salon Muster“", "Derselbe Title auf allen Seiten oder fünf Städte in einem Title"],
            ["Fließtext", "Natürlich geschrieben, Fragen der Kunden beantwortet", "Absätze mit Städten und Regionen, für die Sie ranken möchten"],
          ],
        },
        {
          t: "p",
          text: "Google schreibt in seinem SEO-Leitfaden, dass die mehrfache Wiederholung derselben Wörter Leser ermüdet und überflüssige Keywords gegen die Spam-Richtlinien verstoßen. Als Beispiel für Keyword-Stuffing nennt Google ausdrücklich **Textblöcke mit Städten und Regionen**, für die eine Seite erscheinen soll. Feste Quoten wie „ein Keyword pro 100 Wörter“ gibt es von Google nicht.",
        },
        {
          t: "note",
          label: "Was kaum etwas bringt",
          text: "Das Meta-Keywords-Tag verwendet Google laut eigener Aussage nicht. Keywords in Domain oder URL haben nach Googles Angaben für das Ranking allein kaum Auswirkungen. Eine kurze, lesbare URL ist trotzdem sinnvoll, ein Domainwechsel wegen eines Keywords nicht.",
        },
        {
          t: "p",
          text: "Wie Sie Leistungen und Produkte im Profil sauber anlegen, zeigt der Artikel [Produkte und Leistungen im Unternehmensprofil](/blog/google-business-produkte-services).",
        },
      ],
    },
    {
      id: "pruefen",
      title: "Prüfen und nachschärfen",
      answer:
        "Eine Keyword-Liste ist nie fertig. Prüfen Sie einmal im Monat die Suchanfragen in Search Console und Profil und einmal im Quartal, ob Ihre Seiten noch zu den Begriffen passen, die Kunden tatsächlich verwenden.",
      blocks: [
        {
          t: "ol",
          items: [
            "Monatlich: Suchbegriffe im Unternehmensprofil mit dem Vormonat vergleichen. Erscheinen neue Leistungen, fehlen alte?",
            "Monatlich: In der Search Console nach Seiten filtern und prüfen, ob jede Leistungsseite für ihre Begriffe erscheint.",
            "Vierteljährlich: Neue Anfragen und Bewertungen auf neue Wörter durchsehen und die Startliste ergänzen.",
            "Vor der Saison: Saisonale Begriffe (Winterdienst, Sommerferien, Weihnachtsfeier) rechtzeitig auf den passenden Seiten behandeln.",
            "Bei neuen Leistungen: zuerst Seite und Profil-Leistung anlegen, dann intern verlinken.",
          ],
        },
        {
          t: "p",
          text: "Ob aus Sichtbarkeit tatsächlich Anfragen werden, zeigen Anrufe, Routenanfragen und Website-Klicks im Profil. Welche Kennzahlen sich dafür eignen, beschreibt der Artikel [Local SEO Tracking und KPIs](/blog/local-seo-tracking-kpis).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Keywords braucht ein lokaler Betrieb?",
      a: "Eine feste Zahl gibt es nicht. Sinnvoll ist ein Hauptbegriff je Leistung, ergänzt um die Orte und Merkmale, die Ihre Kunden wirklich verwenden. Für einen Betrieb mit fünf Leistungen ergibt das eine überschaubare Liste, die Sie mit Daten aus Search Console und Profil laufend erweitern.",
    },
    {
      q: "Brauche ich bezahlte SEO-Tools?",
      a: "Für den Anfang nicht. Kundensprache, Google-Vorschläge, „Ähnliche Fragen“, Search Console, die Suchbegriffe im Unternehmensprofil und der Keyword-Planer reichen für die meisten lokalen Betriebe. Bezahlte Tools helfen vor allem bei vielen Standorten oder bei der Beobachtung von Wettbewerbern über längere Zeit.",
    },
    {
      q: "Darf ich Keywords in meinen Firmennamen bei Google schreiben?",
      a: "Nein. Googles Richtlinien erlauben im Namen keine zusätzlichen Informationen wie Ortsangaben oder Leistungen. Der Name muss dem echten Namen auf Schild, Website und Briefpapier entsprechen. Bei Verstößen kann Google das Profil sperren.",
    },
    {
      q: "Soll ich für jeden Nachbarort eine eigene Seite anlegen?",
      a: "Nur, wenn Sie dort wirklich tätig sind und für jeden Ort etwas Eigenes schreiben können. Seiten, die sich nur im Ortsnamen unterscheiden, bezeichnet Google als Brückenseiten und damit als Spam. Für ein Einzugsgebiet ohne eigene Standorte reicht oft eine gute Leistungsseite mit klarer Angabe, wo Sie arbeiten.",
    },
    {
      q: "Wie wichtig ist das Suchvolumen bei lokalen Keywords?",
      a: "Weniger, als es scheint. Die Werte im Keyword-Planer sind gerundete Schätzungen, und für sehr spezielle lokale Begriffe zeigt er oft kaum etwas an. Ein Begriff mit klarer Absicht und wenigen Suchen kann für einen lokalen Betrieb wertvoller sein als ein allgemeiner Begriff mit vielen.",
    },
    {
      q: "Wie finde ich heraus, für welche Begriffe ich schon gefunden werde?",
      a: "In der Google Search Console unter Leistung und dem Reiter „Suchanfragen“ für Ihre Website, und in den Leistungsdaten Ihres Unternehmensprofils für Ihr Profil. Beides ist kostenlos und zeigt Begriffe, bei denen Sie tatsächlich erschienen sind.",
    },
  ],
  sources: [
    { title: "Funktionsweise der automatischen Vervollständigung in der Google Suche", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/7368877?hl=de" },
    { title: "Leistungsbericht (Suchergebnisse)", publisher: "Google Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistungsdaten des Unternehmensprofils ansehen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7689763?hl=de" },
    { title: "Prognosen im Keyword-Planer", publisher: "Google Ads-Hilfe", url: "https://support.google.com/google-ads/answer/3022575?hl=de" },
    { title: "SEO-Startleitfaden", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
  ],
  related: [
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "lokale-landing-pages", title: "Lokale Landing Pages erstellen" },
    { slug: "google-business-kategorien-guide", title: "Die richtige Kategorie im Unternehmensprofil" },
    { slug: "google-business-insights-verstehen", title: "Google Business Insights verstehen" },
  ],
  cta: {
    title: "Passen Ihre Seiten zu den Suchen Ihrer Kunden?",
    text: "Wir sehen uns Ihr Google-Profil, Ihre Website und die Suchen in Ihrem Ort an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, bei denen Ihnen heute Anfragen entgehen. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
