import type { V4Article } from "../types";

const article: V4Article = {
  slug: "seo-ferienwohnungen",
  lang: "de",
  seoTitle: "SEO für Ferienwohnungen: mehr Direktbuchungen",
  seoDescription:
    "SEO für Ferienwohnungen in DE, AT und CH: warum es meist kein Google-Profil gibt, wie die eigene Website Direktbuchungen bringt und was Portale leisten.",
  h1: "SEO für Ferienwohnungen: so kommen Gäste direkt zu Ihnen",
  kicker: "Branche",
  lead:
    "Für Gastgeber mit einer oder mehreren Ferienwohnungen in Deutschland, Österreich und der Schweiz, die mehr Buchungen über die eigene Website wollen. Sie erfahren, was bei Google für Ferienwohnungen anders ist als für Hotels, wie Sie Ihre Website aufbauen und wie Portale, Bewertungen und Stammgäste zusammenspielen.",
  answer:
    "Eine einzelne Ferienwohnung bekommt laut Google kein Unternehmensprofil, ein Vermietungsbüro mit Kundenkontakt schon. Der wichtigste Baustein ist deshalb die **eigene Website**: eine Seite je Wohnung mit Fotos, Preisen, Verfügbarkeit und Hausregeln als Text. Portale bringen neue Gäste, die eigene Website holt sie zurück. Bewertungen, Erwähnungen beim Tourismusverband und gepflegte Stammgäste verstärken beides.",
  takeaways: [
    "Google nennt Ferienwohnungen ausdrücklich als nicht berechtigt für ein Unternehmensprofil. Ein Vermietungsbüro mit Kundenkontakt zu festen Zeiten kann eines haben, aber nur eines, nicht je Wohnung.",
    "Die eigene Website ist der Kern: eine Seite je Wohnung, Preise und Verfügbarkeit sichtbar, Hausregeln und Anreise als Text.",
    "In Googles Ferienunterkunftssuche erscheinen nur Anbieter, deren Buchungssystem oder Portal mit Google verbunden ist. Einzelne private Vermieter können laut Google nicht direkt teilnehmen.",
    "Portale sind ein Vertriebskanal mit Kosten. Rechnen Sie mit Ihrem eigenen Vertrag, nicht mit Prozentzahlen aus dem Internet.",
    "Stammgäste sind der günstigste Direktkanal. Wer schon einmal da war, braucht keine Suchmaschine, nur einen Grund und einen Link.",
  ],
  publishedAt: "2026-02-25",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "ausgangslage",
      title: "Warum Ferienwohnungen bei Google anders funktionieren",
      answer:
        "Hotels und Pensionen bekommen ein Unternehmensprofil und erscheinen im Kartenblock. Einzelne Ferienwohnungen nicht. Ihre Sichtbarkeit entsteht über die eigene Website, über Portale und über Googles Ferienunterkunftssuche, die nur über angebundene Partner gespeist wird.",
      blocks: [
        {
          t: "p",
          text: "Wer „Ferienwohnung Garmisch“ oder „Ferienwohnung am Wolfgangsee“ sucht, sieht bei Google meist eine Mischung: Portalseiten, Websites von Vermietern und Tourismusverbänden und, je nach Region und Anbieterlage, einen Block mit Ferienunterkünften samt Preisen. Ein Kartenblock mit einzelnen Wohnungen wie bei Restaurants oder Handwerkern ist dagegen die Ausnahme, weil Google dafür kein Unternehmensprofil vorsieht.",
        },
        {
          t: "table",
          caption: "Wo Gäste Ferienwohnungen bei Google finden",
          head: ["Fläche", "Wer dort erscheint", "Was Sie dafür brauchen"],
          rows: [
            ["Organische Suchergebnisse", "Websites von Vermietern, Portalen, Tourismusverbänden", "Eigene Website mit einer Seite je Wohnung"],
            ["Ferienunterkünfte in der Suche und in Google Maps", "Angebote von Partnern, die Preise und Verfügbarkeit an Google übermitteln", "Ein mit Google verbundenes Buchungssystem oder Portal"],
            ["Kartenblock mit Unternehmensprofil", "Vermietungsbüros mit Kundenkontakt, Pensionen, Hotels", "Ein berechtigter Standort mit Personal zu festen Zeiten"],
            ["KI-Antworten", "Was Website, Portale und Erwähnungen über die Unterkunft hergeben", "Klare, einheitliche Angaben als Text"],
          ],
        },
        {
          t: "p",
          text: "Die allgemeinen Grundlagen der lokalen Suche erklärt der [Local-SEO-Leitfaden](/blog/ultimate-guide-local-seo). Hier geht es um das, was für Ferienwohnungen und Gastgeber mit mehreren Objekten speziell gilt. Wenn Sie ein Haus mit Rezeption führen, ist [Local SEO für Hotels](/blog/local-seo-hotels) der passendere Artikel.",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Google-Unternehmensprofil: wer eines bekommt",
      answer:
        "Googles Berechtigungsrichtlinien nennen Ferienhäuser und zu vermietende Wohnungen ausdrücklich als nicht berechtigt. Vermietungsbüros sind dagegen zulässig, wenn sie Kunden zu den angegebenen Zeiten persönlich empfangen. Ein Profil je Wohnung ist in keinem Fall erlaubt.",
      blocks: [
        {
          t: "p",
          text: "Die Grundregel steht in Googles Richtlinien zur Berechtigung: Ein Betrieb muss während seiner angegebenen Zeiten **persönlichen Kontakt mit Kunden** haben. Ferienhäuser, Musterhäuser und leerstehende Wohnungen sind als Beispiele für nicht berechtigte Standorte genannt. Verkaufs- und Vermietungsbüros können dagegen bestätigt werden.",
        },
        {
          t: "table",
          caption: "Welche Konstellation ein Profil bekommt",
          head: ["Ihre Situation", "Unternehmensprofil", "Was Sie stattdessen oder zusätzlich tun"],
          rows: [
            ["Eine oder zwei Wohnungen, Schlüsselübergabe per Box", "Nein", "Eigene Website, Portale, Eintrag beim Tourismusverband"],
            ["Mehrere Wohnungen, Büro mit festen Öffnungszeiten für Gäste", "Ein Profil für das Büro", "Je Wohnung eine Seite auf der Website, nicht je Wohnung ein Profil"],
            ["Pension oder Gästehaus mit Empfang", "Ja, als Unterkunft", "Siehe [Local SEO für Hotels](/blog/local-seo-hotels)"],
          ],
        },
        {
          t: "note",
          label: "Achtung",
          text: "Ein Profil je Wohnung, eine Adresse ohne Personal oder ein Ortsname im Firmennamen verstoßen gegen Googles Richtlinien. Google schreibt, dass unnötige Zusätze im Namen zur Sperrung führen können, und erlaubt nur ein Profil je Standort. Das gefährdet auch ein Büro-Profil, das an sich zulässig wäre.",
        },
        {
          t: "p",
          text: "Haben Sie ein berechtigtes Vermietungsbüro, gelten die üblichen Regeln: genaue Kategorie, echter Name, vollständige Angaben. Die Anleitung dazu steht in [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren). Scheitert die Bestätigung, hilft [GBP-Verifizierung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
      ],
    },
    {
      id: "website",
      title: "Die eigene Website als Kern",
      answer:
        "Die Website ist der einzige Kanal, den Sie selbst kontrollieren. Sie braucht eine eigene Seite je Wohnung mit Fotos, Ausstattung, Preisen, Verfügbarkeit und Buchungsmöglichkeit. Hausregeln, Anreise und Stornobedingungen gehören als lesbarer Text auf die Seite, nicht nur in ein PDF.",
      blocks: [
        {
          t: "p",
          text: "Gäste, die über ein Portal gebucht haben, suchen beim zweiten Mal oft nach dem Namen der Unterkunft. Gäste, die eine Empfehlung bekommen, ebenso. Findet Google dann nur die Portalseite, landet die Buchung wieder dort. Eine eigene Website mit klarem Namen fängt genau diese Suchen auf.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Eine Seite je Wohnung",
              text: "Jede Wohnung bekommt eine eigene Adresse auf der Website, etwa /wohnung-bergblick und /wohnung-seeseite, mit eigenem Titel, eigenen Fotos und eigener Beschreibung. Eine Sammelseite mit allen Objekten reicht nicht.",
            },
            {
              title: "Fakten als Text",
              text: "Größe, Zimmer, Betten, Personenzahl, Küche, Parkplatz, Haustiere, WLAN, Barrierefreiheit. Was nicht als Text auf der Seite steht, können weder Google noch KI-Assistenten zuverlässig lesen.",
            },
            {
              title: "Preise und Verfügbarkeit sichtbar",
              text: "Ein Kalender oder eine Preisübersicht nach Saison, dazu Mindestaufenthalt, Endreinigung und Kurtaxe. Gäste brechen ab, wenn sie den Endpreis erst nach drei Klicks erfahren.",
            },
            {
              title: "Hausregeln und Anreise",
              text: "Check-in, Schlüsselübergabe, Ruhezeiten, Stornierung, Anfahrt im Winter, Busverbindung. Das beantwortet Fragen, bevor sie per Mail kommen.",
            },
            {
              title: "Buchung ohne Umweg",
              text: "Ein Buchungsformular oder eine Buchungsmaschine, die auf dem Handy funktioniert. Wie schnell die Seite laden sollte, beschreibt [Core Web Vitals für Local SEO](/blog/core-web-vitals-local-seo).",
            },
            {
              title: "Ort und Umgebung",
              text: "Eine Seite oder ein Abschnitt zur Lage: was zu Fuß erreichbar ist, wo der nächste Lift oder Badesteg liegt. Echte Ortskenntnis statt einer Liste von Nachbarorten, die Sie gar nicht bedienen.",
            },
          ],
        },
        {
          t: "note",
          label: "Keine Ortsseiten auf Vorrat",
          text: "Zehn fast gleiche Seiten für zehn Nachbarorte, in denen Sie keine Wohnung haben, bringen Gästen nichts und gelten als Brückenseiten, die Suchmaschinen abwerten. Eine Seite je echter Wohnung und eine Seite zur tatsächlichen Lage sind ehrlicher und nützlicher.",
        },
        {
          t: "p",
          text: "Welche Begriffe Ihre Gäste tatsächlich eingeben, etwa „Ferienwohnung mit Hund“ oder „Chalet mit Sauna“, finden Sie mit der Methode aus [Local SEO Keywords finden](/blog/local-seo-keywords-finden). Gäste aus dem Ausland erreichen Sie mit einer zweiten Sprachversion, nicht mit einer automatischen Übersetzung. Was in der Schweiz mit mehreren Landessprachen gilt, steht in [Local SEO in der Schweiz](/blog/local-seo-schweiz).",
        },
      ],
    },
    {
      id: "google-ferienunterkuenfte",
      title: "Ferienunterkünfte bei Google: wer dort erscheint",
      answer:
        "Google zeigt Ferienunterkünfte mit Preisen in der Suche, in Maps und in der Unterkunftssuche. Teilnehmen können laut Google registrierte Vermietungsunternehmen mit eigener Buchungswebsite oder Anbieter, die über eine mit Google verbundene Buchungsseite gelistet sind. Einzelne private Vermieter sind derzeit nicht direkt zugelassen.",
      blocks: [
        {
          t: "p",
          text: "Laut Googles Hotel-Center-Hilfe erscheinen Ferienunterkünfte neben den normalen Suchergebnissen, in Google Maps und über den Filter in der Unterkunftssuche. Partner, die genaue Preise, aktuelle Verfügbarkeit und gute Inhalte liefern, können auf ihre eigene Buchungsseite verlinken. Für diese **kostenlosen Buchungslinks** berechnet Google nach eigener Aussage keine Gebühr.",
        },
        {
          t: "ul",
          items: [
            "**Einzelne private Vermieter:** laut Google derzeit nicht direkt berechtigt. Ihre Wohnung kann dort trotzdem erscheinen, wenn sie auf einem Portal gelistet ist, das mit Google verbunden ist. Der Klick führt dann zum Portal.",
            "**Vermietungsunternehmen mit eigener Buchungswebsite:** können über eine Anbindung teilnehmen. In der Praxis läuft das über ein Buchungssystem oder einen Channel Manager, der Preise und Verfügbarkeit an Google übermittelt.",
            "**Gastgeber mit mehreren Objekten ohne Firma dahinter:** Fragen Sie Ihren Softwareanbieter, ob er mit Google verbunden ist und unter welchen Bedingungen er Ihre Objekte dort anmeldet.",
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ob Ihr Buchungssystem angebunden ist, steht selten auf der Startseite des Anbieters. Fragen Sie konkret nach „Vacation Rentals on Google“ und „Free Booking Links“. Wie dieselbe Mechanik für Hotels funktioniert, beschreibt [Local SEO für Hotels](/blog/local-seo-hotels).",
        },
      ],
    },
    {
      id: "portale",
      title: "Portale nüchtern betrachten",
      answer:
        "Airbnb, Booking.com und FeWo-direkt bringen Reichweite, besonders für neue Gäste und Gäste aus dem Ausland. Sie kosten Gebühren oder Provision, deren Höhe vom Portal, vom Modell und von Ihrem Vertrag abhängt. Sinnvoll ist meist eine Mischung: Portale für die Erstbuchung, die eigene Website für Wiederkehrer und Empfehlungen.",
      blocks: [
        {
          t: "p",
          text: "Portale sind kein Gegner, sondern ein Vertriebskanal mit Preis. Wie hoch dieser Preis ist, steht in Ihrem Vertrag oder in der Hilfe des Portals. Airbnb beschreibt zum Beispiel auf seiner offiziellen Hilfeseite zwei Gebührenmodelle: eine geteilte Gebühr, bei der Gastgeber meist 3 Prozent zahlen und der Gast eine eigene Servicegebühr, und eine reine Gastgebergebühr, bei der die meisten Gastgeber 15,5 Prozent zahlen. Airbnb stellt Gastgeber von Privatunterkünften nach eigener Aussage schrittweise auf das zweite Modell um.",
        },
        {
          t: "table",
          caption: "Portal und eigene Website im Vergleich",
          head: ["Punkt", "Portal", "Eigene Website"],
          rows: [
            ["Reichweite bei neuen Gästen", "Hoch, auch international", "Gering ohne Suchmaschinen- oder Stammgastarbeit"],
            ["Kosten je Buchung", "Gebühr oder Provision laut Vertrag", "Buchungssystem, Zahlungsgebühren, Website"],
            ["Kontakt zum Gast", "Über das Portal", "Direkt, mit Einwilligung auch nach dem Aufenthalt"],
            ["Bewertungen", "Auf dem Portal, nicht übertragbar", "Eigene Sammlung, Google-Bewertungen nur mit berechtigtem Profil"],
            ["Regeln und Stornobedingungen", "Teilweise vom Portal vorgegeben", "Von Ihnen festgelegt"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie die Provision mit Ihren eigenen Zahlen ausrechnen, zeigt der Rechenweg im Artikel [Local SEO für Hotels](/blog/local-seo-hotels). Er funktioniert für Ferienwohnungen genauso, wenn Sie statt Zimmern Wohnungen und statt Zimmerpreis den durchschnittlichen Nachtpreis einsetzen. Achten Sie darauf, dass Name, Adresse und Telefonnummer auf allen Portalen und auf Ihrer Website gleich geschrieben sind, wie in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo) beschrieben.",
        },
        {
          t: "note",
          label: "Registrierungsnummer in der EU",
          text: "Seit dem 20. Mai 2026 gilt die EU-Verordnung 2024/1028 über Daten zur kurzfristigen Vermietung. Wo ein Mitgliedstaat oder eine Region ein Registrierungsverfahren hat, müssen Portale die Registrierungsnummer vor dem Inserieren abfragen und im Inserat anzeigen. Ob und wo das für Ihre Wohnung gilt, erfahren Sie bei Ihrer Gemeinde oder Landesbehörde. Für die Schweiz gilt die Verordnung nicht.",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Bewertungen sammeln und beantworten",
      answer:
        "Bewertungen entstehen bei Ferienwohnungen meist auf den Portalen. Bitten Sie alle Gäste gleich um eine Bewertung, ohne Gegenleistung und ohne Vorauswahl. Antworten Sie sachlich, auch auf Kritik. Google-Bewertungen sind nur möglich, wenn Sie ein berechtigtes Profil für ein Vermietungsbüro haben.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Gleich für alle:** Eine kurze Nachricht nach der Abreise mit Dank und Link zur Bewertung. Nur zufriedene Gäste gezielt zu fragen, schließen Googles Richtlinien für Rezensionen ausdrücklich aus.",
            "**Keine Gegenleistung:** Kein Rabatt für die nächste Buchung im Tausch gegen eine Bewertung.",
            "**Antworten:** Bedanken Sie sich konkret, gehen Sie auf Kritik ein und sagen Sie, was Sie geändert haben. Keine persönlichen Daten des Gastes nennen.",
            "**Lernen:** Wiederkehrende Kritik (Matratzen, WLAN, Schlüsselübergabe) gehört auf die To-do-Liste, nicht nur in eine Antwort.",
          ],
        },
        {
          t: "p",
          text: "Einen Ablauf zum Bitten um Bewertungen beschreibt [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen), den Umgang mit unfairer Kritik [Negative Google-Bewertungen](/blog/negative-google-bewertungen). Auf der eigenen Website dürfen Sie Gästestimmen zeigen. Sterne in den Suchergebnissen entstehen daraus für eigene Unterkünfte allerdings nicht, warum, steht in [Review Schema implementieren](/blog/review-schema-implementierung).",
        },
      ],
    },
    {
      id: "fotos",
      title: "Fotos, die die Wohnung ehrlich zeigen",
      answer:
        "Fotos entscheiden bei Ferienwohnungen oft vor dem Preis. Zeigen Sie jedes Zimmer, das Bad, die Küche, den Außenbereich und den Blick aus dem Fenster. Echte, aktuelle Bilder vermeiden Enttäuschungen und damit schlechte Bewertungen.",
      blocks: [
        {
          t: "ul",
          items: [
            "Jede Wohnung mit eigenem Fotosatz, kein Austausch von Bildern zwischen Objekten.",
            "Mindestens ein Foto je Schlafzimmer, Bad und Wohnbereich. Google verlangt in seinen Vorgaben für Ferienunterkünfte von angebundenen Partnern ebenfalls mindestens acht Bilder, darunter Schlafzimmer, Bad und Gemeinschaftsbereich.",
            "Jahreszeiten zeigen, wenn Sie Sommer und Winter vermieten.",
            "Dateinamen und Alternativtexte mit Inhalt („Wohnküche mit Blick auf den See“) statt „IMG_4711“.",
            "Bilder für das Web verkleinern, damit die Seite auf dem Handy schnell lädt.",
          ],
        },
        {
          t: "p",
          text: "Haben Sie ein Profil für Ihr Vermietungsbüro, gelten dort die Hinweise aus [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "Strukturierte Daten für Ferienwohnungen",
      answer:
        "Google hat eigene strukturierte Daten für Ferienunterkünfte (VacationRental). Sie sind laut Google aber für Websites gedacht, die bereits mit Google verbunden sind und Zugang zum Hotel Center haben. Für eine normale Vermieter-Website helfen sauber ausgezeichnete Grunddaten beim Verstehen, ein besonderes Suchergebnis ist damit nicht verbunden.",
      blocks: [
        {
          t: "p",
          text: "Die Dokumentation zu VacationRental verlangt unter anderem eine feste Objektnummer, Koordinaten mit mindestens fünf Nachkommastellen, die maximale Belegung und mindestens acht Bilder. Google schreibt dazu, dass die Funktion auf Websites beschränkt ist, die bestimmte Voraussetzungen erfüllen. Andere können über ein Formular Interesse anmelden, ohne Anspruch auf Aufnahme.",
        },
        {
          t: "table",
          caption: "Was strukturierte Daten bei Ferienwohnungen leisten",
          head: ["Fall", "Was sinnvoll ist", "Was Sie nicht erwarten sollten"],
          rows: [
            ["Vermietungsunternehmen, mit Google verbunden", "VacationRental nach Googles Dokumentation, abgestimmt mit dem Anbieter", "Eine Aufnahme ohne Freigabe durch Google"],
            ["Vermieter-Website ohne Anbindung", "Grunddaten zu Unterkunft, Adresse und Kontakt, die genau dem Text auf der Seite entsprechen", "Preise oder Sterne als Sonderdarstellung in der Suche"],
            ["Vermietungsbüro mit Profil", "LocalBusiness-Markup für das Büro mit den gleichen Daten wie im Profil", "Ein besseres Ranking allein durch Markup"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie Markup aufbauen und prüfen, steht in [Schema Markup für Local SEO](/blog/schema-markup-local-seo). Für KI-Assistenten zählt ohnehin vor allem, dass die Fakten als Text auf der Seite stehen. Mehr dazu in [ChatGPT Search und lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026).",
        },
      ],
    },
    {
      id: "lokale-erwaehnungen",
      title: "Tourismusverband, Gästekarte und lokale Partner",
      answer:
        "Viele Gäste planen über die Website des Ortes oder der Region. Ein vollständiger Eintrag beim Tourismusverband mit Link auf Ihre Website ist für Ferienwohnungen oft wertvoller als jeder Verzeichniseintrag. Dazu kommen Partner vor Ort: Skischule, Bergbahn, Fahrradverleih, Restaurant.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Tourismusverband oder Gästeinformation:** Prüfen Sie, ob Ihre Wohnung im Unterkunftsverzeichnis steht, ob der Link auf Ihre eigene Website zeigt und ob Fotos und Beschreibung aktuell sind.",
            "**Gästekarte:** Wenn Ihr Ort eine Gästekarte mit Leistungen ausgibt, nennen Sie diese Leistungen auf Ihrer Website. Das beantwortet eine häufige Gästefrage und verbindet Ihre Seite mit dem Ort.",
            "**Partner:** Anbieter, die Sie Ihren Gästen ohnehin empfehlen, verlinken oft gern zurück. Das ist ein echter lokaler Bezug, kein gekaufter Link.",
            "**Weitere Plattformen:** Wer ein Vermietungsbüro hat, prüft zusätzlich Einträge wie [Apple Business Connect](/blog/apple-business-connect-local-seo-2026).",
          ],
        },
        {
          t: "p",
          text: "Warum solche Erwähnungen in der lokalen Suche zählen, erklärt [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern). Wie sich die Lage in Österreich entwickelt, beschreibt [Local-SEO-Trends Österreich](/blog/local-seo-trends-oesterreich).",
        },
      ],
    },
    {
      id: "stammgaeste",
      title: "Stammgäste: der günstigste Direktkanal",
      answer:
        "Wer einmal da war und zufrieden ist, bucht oft wieder. Dafür braucht er keine Suchmaschine, sondern Ihren Namen, Ihre Website und einen Anlass. Sorgen Sie dafür, dass Gäste nach dem Aufenthalt wissen, wie sie direkt bei Ihnen buchen können.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Name merkbar machen",
              text: "In der Wohnung eine Karte oder Mappe mit Website-Adresse und Kontakt. Der Name der Unterkunft sollte überall gleich lauten, damit die Suche danach Ihre Website findet.",
            },
            {
              title: "Einwilligung einholen",
              text: "Fragen Sie bei der Direktbuchung, ob Gäste Neuigkeiten und Termine per E-Mail erhalten möchten. Klären Sie die rechtlichen Voraussetzungen mit Ihrer Beratung.",
            },
            {
              title: "Anlässe nutzen",
              text: "Freie Termine in der Nebensaison, ein neu renoviertes Bad, ein Ortsfest. Eine kurze Nachricht zweimal im Jahr reicht.",
            },
            {
              title: "Direktbuchung messen",
              text: "Notieren Sie bei jeder Direktbuchung, wie der Gast Sie gefunden hat: Website, Wiederkehrer, Empfehlung, Tourismusverband. Nach einer Saison sehen Sie, welcher Kanal trägt.",
            },
          ],
        },
        {
          t: "p",
          text: "Wenn Sie mehrere Objekte vermieten und mehr Gäste direkt buchen lassen wollen, finden Sie unser Angebot auf der englischen Seite [Holiday rentals](/industries/holiday-rentals). Die Leistungen im Überblick stehen unter [Leistungen](/services).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Bekommt meine Ferienwohnung ein Google-Unternehmensprofil?",
      a: "Eine einzelne Ferienwohnung nicht. Google nennt Ferienhäuser und zu vermietende Wohnungen ausdrücklich als nicht berechtigt. Ein Vermietungsbüro, das Gäste zu festen Zeiten persönlich empfängt, kann ein Profil haben, und zwar eines für das Büro, nicht eines je Wohnung.",
    },
    {
      q: "Wie erscheint meine Ferienwohnung in Googles Unterkunftssuche?",
      a: "Über ein Portal oder Buchungssystem, das mit Google verbunden ist. Laut Google können einzelne private Vermieter derzeit nicht direkt teilnehmen. Registrierte Vermietungsunternehmen mit eigener Buchungswebsite können über eine Anbindung eigene kostenlose Buchungslinks erhalten.",
    },
    {
      q: "Lohnt sich eine eigene Website, wenn ich auf Airbnb und Booking.com gut gebucht bin?",
      a: "Meist ja, als Ergänzung. Die Website fängt Gäste ab, die nach Ihrem Namen suchen, Empfehlungen folgen oder wiederkommen. Für diese Buchungen fallen keine Portalgebühren an. Ob sich der Aufwand rechnet, zeigt der Vergleich Ihrer Portalkosten mit den Kosten für Website und Buchungssystem.",
    },
    {
      q: "Wie viel Provision zahle ich an Portale?",
      a: "Das hängt vom Portal, vom Modell und von Ihrem Vertrag ab. Airbnb nennt auf seiner Hilfeseite für die reine Gastgebergebühr meist 15,5 Prozent und für das geteilte Modell meist 3 Prozent für Gastgeber. Für andere Portale gilt der Satz aus Ihrem Partnervertrag.",
    },
    {
      q: "Darf ich für jede Wohnung eine eigene Seite anlegen?",
      a: "Ja, auf Ihrer Website ist das sogar sinnvoll: eine Seite je Wohnung mit eigenen Fotos und Angaben. Nicht zulässig sind dagegen mehrere Google-Profile für Wohnungen ohne Personal und fast gleiche Seiten für Orte, in denen Sie gar keine Wohnung haben.",
    },
    {
      q: "Was kostet eine Website für Direktbuchungen bei LocalDominate?",
      a: "Die Website in 5 Tagen für Ferienwohnungen und Hotels kostet ab 1.490 €. Wenn Sie schon eine Website haben, die zu wenig Buchungen bringt, gibt es den 72h Conversion Sprint ab 390 €. Umfang und Inhalte stimmen wir vor dem Start in einem Gespräch ab.",
    },
  ],
  sources: [
    { title: "Richtlinien zur Berechtigung und Inhaberschaft (Business Profile eligibility)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/13763036?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "About vacation rentals on Google", publisher: "Google Hotel Center-Hilfe", url: "https://support.google.com/hotelprices/answer/10062327?hl=en" },
    { title: "Starter guide overview", publisher: "Google Hotel Center-Hilfe", url: "https://support.google.com/hotelprices/answer/11949903?hl=en" },
    { title: "Vacation rental (VacationRental) structured data", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/vacation-rental" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Airbnb service fees", publisher: "Airbnb Hilfe-Center", url: "https://www.airbnb.com/help/article/1857" },
    { title: "Verordnung (EU) 2024/1028 über die Erhebung und Weitergabe von Daten im Zusammenhang mit Dienstleistungen zur kurzfristigen Vermietung von Unterkünften", publisher: "EUR-Lex, Amt für Veröffentlichungen der EU", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1028" },
  ],
  related: [
    { slug: "local-seo-hotels", title: "Local SEO für Hotels" },
    { slug: "google-bewertungen-bekommen", title: "Mehr Google-Bewertungen bekommen" },
    { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
  ],
  cta: {
    title: "Wie direkt buchen Gäste bei Ihnen?",
    text: "Wir sehen uns Ihre Website, Ihre Portal-Inserate und gegebenenfalls das Profil Ihres Vermietungsbüros an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Ihnen am schnellsten mehr Direktbuchungen bringen. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
