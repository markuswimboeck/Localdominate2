import type { V4Article } from "../types";

const article: V4Article = {
  slug: "citation-tracking-template",
  lang: "de",
  seoTitle: "Citation-Tracking-Vorlage: alle Firmeneinträge im Blick",
  seoDescription:
    "Vorlage für Ihre Verzeichniseinträge: Stammdaten, Eintragsliste, Statuscodes und Änderungsprotokoll als Tabelle, dazu ein Ablauf für die Prüfung je Quartal.",
  h1: "Citation-Tracking-Vorlage: Ihre Firmeneinträge in einer Tabelle führen",
  kicker: "Vorlage",
  lead:
    "Für Inhaber und Büroteams lokaler Betriebe in Deutschland, Österreich und der Schweiz, die wissen wollen, wo ihr Betrieb überall eingetragen ist. Sie bekommen eine Tabellenvorlage zum Abschreiben, klare Statuscodes und einen Ablauf, mit dem Sie die Einträge einmal im Quartal prüfen.",
  answer:
    "Citation Tracking heißt: Sie führen eine Liste aller Stellen, an denen Name, Adresse und Telefonnummer Ihres Betriebs stehen. Die Vorlage hat vier Blätter: **Stammdaten**, **Eintragsliste**, **Änderungsprotokoll** und **Quartalsprüfung**. So sehen Sie jederzeit, welcher Eintrag stimmt, wer Zugang hat und was zuletzt geändert wurde.",
  takeaways: [
    "Zuerst legen Sie die Stammdaten fest. Jeder Eintrag wird mit genau dieser Schreibweise verglichen.",
    "Die Eintragsliste hält je Plattform fest: Link, Zugang, Status, Datum der letzten Prüfung und offene Punkte.",
    "Ein Änderungsprotokoll zeigt später, welche Korrektur wann gemacht wurde. Das hilft bei Ranking-Schwankungen und Rückfragen.",
    "Bei Google ist laut Richtlinien nur ein Profil pro Unternehmen vorgesehen. Doppelte Einträge gehören deshalb in die Liste und bereinigt.",
    "Korrigieren Sie zuerst falsche Einträge, dann erst legen Sie neue an. Eine einheitliche Datenbasis ist wichtiger als die Zahl der Einträge.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 9,
  sections: [
    {
      id: "warum-tracking",
      title: "Wozu eine Tabelle für Ihre Einträge",
      answer:
        "Ihr Betrieb steht an mehr Stellen im Netz, als Sie selbst angelegt haben. Eine Tabelle macht sichtbar, wo das ist, ob die Daten stimmen und wer den Eintrag ändern kann.",
      blocks: [
        {
          t: "p",
          text: "Eine **Citation** ist jede Nennung Ihres Firmennamens mit Adresse oder Telefonnummer, etwa im Google-Unternehmensprofil, in Branchenbüchern, auf Bewertungsportalen oder bei Ihrem Verband. Viele dieser Einträge entstehen ohne Ihr Zutun: Verlage übernehmen Daten, Kunden schlagen Orte vor, ehemalige Mitarbeitende haben vor Jahren ein Konto angelegt.",
        },
        {
          t: "p",
          text: "Google schreibt, dass Unternehmen mit vollständigen und korrekten Informationen eher in den lokalen Ergebnissen erscheinen. Für Ihre Kunden zählt das genauso: Wer eine alte Nummer anruft oder vor der alten Adresse steht, kommt selten ein zweites Mal. Warum einheitliche Daten wichtig sind, erklärt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo) ausführlich. Hier geht es um das Werkzeug, mit dem Sie den Überblick behalten.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ältere Ratgeber nennen Prozentwerte, wie stark Citations das Ranking beeinflussen. Das sind Einschätzungen aus Fachleute-Umfragen, keine Messungen von Google. Google selbst nennt Relevanz, Entfernung und Bekanntheit als Grundlage der lokalen Ergebnisse.",
        },
      ],
    },
    {
      id: "aufbau",
      title: "Der Aufbau der Vorlage: vier Blätter",
      answer:
        "Legen Sie in Google Sheets oder Excel eine Datei mit vier Blättern an. Jedes Blatt beantwortet eine Frage: Was ist richtig, wo stehen wir, was wurde geändert und wie war die letzte Prüfung.",
      blocks: [
        {
          t: "table",
          caption: "Die vier Blätter im Überblick",
          head: ["Blatt", "Frage, die es beantwortet", "Wie oft Sie es pflegen"],
          rows: [
            ["1 Stammdaten", "Wie lauten Name, Adresse, Telefon und Website richtig?", "Nur bei echten Änderungen"],
            ["2 Eintragsliste", "Wo ist der Betrieb eingetragen und stimmt der Eintrag?", "Bei jeder Prüfung"],
            ["3 Änderungsprotokoll", "Was wurde wann, wo und von wem geändert?", "Bei jeder Korrektur"],
            ["4 Quartalsprüfung", "Wie viele Einträge stimmen, wie viele sind offen?", "Einmal im Quartal"],
          ],
        },
      ],
    },
    {
      id: "stammdaten",
      title: "Blatt 1: Stammdaten festlegen",
      answer:
        "Die Stammdaten sind die eine verbindliche Schreibweise Ihrer Firmendaten. Jeder Eintrag in der Liste wird mit diesem Blatt verglichen.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 1: Stammdaten",
          head: ["Feld", "Ihr Eintrag", "Hinweis"],
          rows: [
            ["Name", "[Name wie auf Schild und Website]", "Ohne Zusätze wie Ort oder Leistung, sonst verstößt der Name gegen Googles Richtlinien"],
            ["Rechtlicher Name", "[z. B. Muster GmbH]", "Nur für Impressum und Verzeichnisse, die ihn verlangen"],
            ["Straße und Hausnummer", "[eine feste Schreibweise]", "Entscheiden Sie sich für „Straße“ oder „Str.“ und bleiben Sie dabei"],
            ["PLZ und Ort", "[PLZ] [Ort]", "In der Schweiz und in Österreich mit der dort üblichen Schreibweise"],
            ["Telefon", "[+49 …]", "Eine Hauptnummer in einem festen Format"],
            ["Website", "[https://www.beispiel.de]", "Immer dieselbe Variante, mit oder ohne www"],
            ["Öffnungszeiten", "[Mo bis Fr …]", "Sonderzeiten getrennt pflegen"],
            ["Hauptkategorie", "[z. B. Zahnarzt]", "So genau wie möglich"],
            ["Kurzbeschreibung", "[zwei Sätze]", "Sachlich, als Textbaustein für neue Einträge"],
          ],
        },
        {
          t: "p",
          text: "Legen Sie diese Werte einmal fest und ändern Sie sie nur bei echten Ereignissen wie Umzug, neuer Nummer oder Umfirmierung. Wer im Team Einträge anlegt, kopiert die Angaben aus diesem Blatt und tippt sie nicht neu.",
        },
      ],
    },
    {
      id: "eintragsliste",
      title: "Blatt 2: die Eintragsliste mit Statuscodes",
      answer:
        "Jede Zeile ist ein Eintrag. Die Spalten halten fest, wo er steht, wer Zugang hat, ob die Daten stimmen und wann Sie zuletzt geprüft haben.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 2: Spalten der Eintragsliste",
          head: ["Spalte", "Was Sie eintragen"],
          rows: [
            ["Plattform", "Name des Verzeichnisses oder Portals"],
            ["Link", "Direkter Link zu Ihrem Eintrag, nicht zur Startseite"],
            ["Zugang", "Mit welchem Konto oder welcher E-Mail-Adresse Sie den Eintrag verwalten"],
            ["Status", "Einer der Statuscodes aus der nächsten Tabelle"],
            ["Name / Adresse / Telefon / Website", "Je eine Spalte mit „stimmt“ oder „weicht ab“"],
            ["Letzte Prüfung", "Datum"],
            ["Offener Punkt", "Was zu tun ist, in einem Satz"],
            ["Zuständig", "Wer sich darum kümmert"],
          ],
        },
        {
          t: "table",
          caption: "Statuscodes für die Spalte „Status“",
          head: ["Code", "Bedeutung", "Nächster Schritt"],
          rows: [
            ["OK", "Eintrag vorhanden, alle Daten stimmen", "Bei der nächsten Prüfung wieder ansehen"],
            ["FEHLER", "Eintrag vorhanden, mindestens eine Angabe weicht ab", "Korrigieren und im Änderungsprotokoll festhalten"],
            ["OHNE ZUGANG", "Eintrag vorhanden, Sie können ihn nicht selbst bearbeiten", "Eintrag übernehmen oder Änderung beim Betreiber anfragen"],
            ["DOPPELT", "Zwei Einträge für denselben Standort", "Zusammenführen oder Entfernung beantragen"],
            ["OFFEN", "Noch kein Eintrag, aber sinnvoll", "Erst anlegen, wenn alle FEHLER behoben sind"],
            ["VERALTET", "Eintrag zu altem Namen, alter Adresse oder geschlossenem Standort", "Korrigieren oder als geschlossen melden"],
          ],
        },
        {
          t: "p",
          text: "Die Reihenfolge der Arbeit ergibt sich aus dem Status: erst DOPPELT und FEHLER, dann OHNE ZUGANG und VERALTET, zuletzt OFFEN. Ein neuer Eintrag mit richtigen Daten hilft wenig, solange daneben drei alte mit falscher Nummer stehen.",
        },
      ],
    },
    {
      id: "plattformen",
      title: "Welche Plattformen in die Liste gehören",
      answer:
        "Beginnen Sie mit den Diensten, die Karten und Suche speisen, dann die großen Branchenbücher Ihres Landes, dann Portale Ihrer Branche und Region. Wie Sie Einträge ändern, ist je Plattform verschieden.",
      blocks: [
        {
          t: "table",
          caption: "Startliste für Betriebe im DACH-Raum",
          head: ["Gruppe", "Beispiele", "So ändern Sie Angaben"],
          rows: [
            ["Karten und Suche", "Google-Unternehmensprofil, Apple Business, Bing Places", "Im eigenen, bestätigten Profil. Bei Google können Sie für fremde Einträge eine Änderung vorschlagen"],
            ["Branchenbücher Deutschland", "Gelbe Seiten, Das Örtliche, 11880", "Bei Gelbe Seiten im Eintrag über „Daten ändern“ oder über den Kundenservice des Verlags"],
            ["Branchenbücher Österreich", "Herold", "Haupteinträge im Telefonbuch ändert laut Herold Ihr Telefonanbieter"],
            ["Branchenbücher Schweiz", "local.ch, search.ch", "Über das Kundenkonto des Betreibers"],
            ["Branchenportale", "Jameda, Doctolib, Booking.com, Tripadvisor, MyHammer, Treatwell", "Im Partner- oder Inhaberkonto der jeweiligen Plattform"],
            ["Regional und Verband", "Kammer, Innung, Tourismusverband, Stadtportal, Werbegemeinschaft", "Meist per E-Mail an die Geschäftsstelle"],
            ["Eigene Kanäle", "Website mit Impressum und Kontaktseite, Facebook, Instagram, LinkedIn", "Selbst, am besten am selben Tag wie das Profil"],
          ],
        },
        {
          t: "p",
          text: "Apple hat Apple Business Connect 2026 in das neue Angebot **Apple Business** überführt. Laut Apple lassen sich dort Ortskarten mit Fotos, Öffnungszeiten und Standortdetails pflegen, die in Apple Karten, Safari und Spotlight erscheinen. Mehr dazu im Artikel [Apple Business für Local SEO](/blog/apple-business-connect-local-seo-2026).",
        },
        {
          t: "p",
          text: "Welche Branchenportale für Sie zählen, sehen Sie am schnellsten bei der Suche nach Ihrer Leistung und Ihrem Ort: Welche Portale erscheinen auf der ersten Seite, und wo stehen Ihre Wettbewerber? Hinweise zur Auswahl gibt der Artikel [Citation-Strategie](/blog/citation-strategie-verzeichnisse).",
        },
      ],
    },
    {
      id: "erstbefuellung",
      title: "Die Liste zum ersten Mal füllen",
      answer:
        "Für die erste Fassung suchen Sie systematisch nach Name, Telefonnummer und alten Adressen. Jeder Fund wird eine Zeile mit Status.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Bekannte Einträge eintragen",
              text: "Notieren Sie alle Plattformen, für die Sie Zugangsdaten haben. Fragen Sie auch im Team nach, wer früher Einträge angelegt hat.",
            },
            {
              title: "Nach dem Namen suchen",
              text: "Suchen Sie Ihren Firmennamen zusammen mit dem Ort und gehen Sie die ersten Ergebnisseiten durch. Jede Fundstelle mit Adresse oder Telefon kommt in die Liste.",
            },
            {
              title: "Nach der Telefonnummer suchen",
              text: "Suchen Sie die Nummer in verschiedenen Schreibweisen, mit und ohne Vorwahl. So finden Sie Einträge, in denen der Name falsch geschrieben ist.",
            },
            {
              title: "Nach alten Daten suchen",
              text: "Wenn Sie umgezogen sind oder die Nummer gewechselt haben, suchen Sie gezielt nach der alten Adresse und der alten Nummer. Diese Einträge bekommen den Status VERALTET.",
            },
            {
              title: "Google Maps prüfen",
              text: "Suchen Sie Ihren Betrieb in Google Maps und achten Sie auf zweite Einträge, etwa unter altem Namen. Google sieht laut Richtlinien nur ein Profil pro Unternehmen vor. Wie Sie Dubletten entfernen, zeigt der Artikel [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen).",
            },
          ],
        },
        {
          t: "note",
          label: "Werkzeuge",
          text: "Anbieter wie BrightLocal, Whitespark, Semrush oder Yext durchsuchen Verzeichnisse automatisch oder verteilen Daten an viele Portale. Das spart bei vielen Standorten Zeit. Prüfen Sie vorher, welche Verzeichnisse im DACH-Raum abgedeckt sind, was nach Ende eines Abos mit den Einträgen geschieht und was es kostet. Für einen Standort reicht die Tabelle meist aus.",
        },
      ],
    },
    {
      id: "protokoll",
      title: "Blatt 3: das Änderungsprotokoll",
      answer:
        "Jede Korrektur bekommt eine Zeile mit Datum, Plattform, alter und neuer Angabe. So können Sie später Veränderungen bei Anrufen oder Sichtbarkeit einer Ursache zuordnen.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Blatt 3: Änderungsprotokoll",
          head: ["Datum", "Plattform", "Feld", "Alt", "Neu", "Wer", "Bestätigt am"],
          rows: [
            ["TT.MM.JJJJ", "[Plattform]", "Telefon", "[alte Nummer]", "[neue Nummer]", "[Name]", "TT.MM.JJJJ"],
            ["TT.MM.JJJJ", "[Plattform]", "Öffnungszeiten", "[alt]", "[neu]", "[Name]", ""],
          ],
        },
        {
          t: "p",
          text: "Die Spalte „Bestätigt am“ ist wichtig. Manche Verzeichnisse prüfen Angaben, bevor sie online gehen. Gelbe Seiten zum Beispiel schreibt, dass neue Einträge vom zuständigen Verlag geprüft werden. Tragen Sie das Datum erst ein, wenn Sie die Änderung live gesehen haben.",
        },
      ],
    },
    {
      id: "quartalspruefung",
      title: "Blatt 4: die Prüfung einmal im Quartal",
      answer:
        "Einmal im Quartal gehen Sie die Eintragsliste von oben nach unten durch und tragen das Ergebnis in eine Zeile ein. Nach einem Umzug oder einer neuen Nummer prüfen Sie sofort.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Stammdaten bestätigen", text: "Stimmt Blatt 1 noch? Neue Nummer, neue Öffnungszeiten, neue Website-Adresse?" },
            { title: "Jeden Eintrag öffnen", text: "Über den Link in Blatt 2 aufrufen und Name, Adresse, Telefon und Website mit Blatt 1 vergleichen. Status und Prüfdatum aktualisieren." },
            { title: "Fehler beheben", text: "Was Sie selbst ändern können, ändern Sie gleich. Alles andere bekommt einen offenen Punkt und eine zuständige Person." },
            { title: "Neue Fundstellen suchen", text: "Die Suchen nach Name und Nummer aus der Erstbefüllung kurz wiederholen. Neue Funde kommen als Zeile dazu." },
            { title: "Ergebnis festhalten", text: "Zahlen in Blatt 4 eintragen und die nächste Prüfung im Kalender setzen." },
          ],
        },
        {
          t: "table",
          caption: "Vorlage Blatt 4: Quartalsprüfung",
          head: ["Quartal", "Geprüft am", "Einträge gesamt", "OK", "FEHLER", "DOPPELT", "Korrigiert", "Noch offen"],
          rows: [
            ["Q1", "", "", "", "", "", "", ""],
            ["Q2", "", "", "", "", "", "", ""],
            ["Q3", "", "", "", "", "", "", ""],
            ["Q4", "", "", "", "", "", "", ""],
          ],
        },
      ],
    },
    {
      id: "ereignisse",
      title: "Wann Sie nicht bis zum Quartal warten",
      answer:
        "Bei Umzug, neuer Telefonnummer, neuem Namen, neuer Website-Adresse oder Schließung gehen Sie die ganze Liste sofort durch. Beginnen Sie mit Google und Ihrer Website.",
      blocks: [
        {
          t: "ol",
          items: [
            "Stammdaten in Blatt 1 ändern und die alten Werte im Protokoll festhalten.",
            "Google-Unternehmensprofil, Website, Impressum und Kontaktseite am selben Tag anpassen.",
            "Apple Business und Bing Places nachziehen.",
            "Die großen Branchenbücher Ihres Landes und Ihre Branchenportale ändern.",
            "Verbände, Kammern und Partner per E-Mail informieren.",
            "Nach zwei bis vier Wochen prüfen, welche Änderungen live sind, und nachfassen.",
          ],
        },
        {
          t: "p",
          text: "Laut Google können Sie Ihr bestätigtes Profil direkt in der Google Suche oder in Google Maps bearbeiten. Für Einträge, die Ihnen nicht gehören, bietet Google die Funktion, eine Änderung vorzuschlagen. Die Prüfung der eigenen Angaben passt gut in Ihre [monatliche Local-SEO-Routine](/blog/local-seo-monthly-checklist).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Einträge braucht mein Betrieb?",
      a: "Eine feste Zahl gibt es nicht, und Google nennt keine. Wichtig sind die Dienste für Karten und Suche, die großen Branchenbücher Ihres Landes und die Portale, auf denen Ihre Kunden tatsächlich suchen. Ein richtiger Eintrag dort ist mehr wert als viele in Verzeichnissen ohne Bezug zu Ihrer Branche oder Region.",
    },
    {
      q: "Was ist schlimmer: ein fehlender oder ein falscher Eintrag?",
      a: "Ein falscher Eintrag schickt Kunden zur falschen Nummer oder Adresse und widerspricht Ihren übrigen Angaben. Ein fehlender Eintrag bringt nur keinen Nutzen. Deshalb korrigieren Sie zuerst bestehende Einträge und legen erst danach neue an.",
    },
    {
      q: "Wie oft sollte ich die Einträge prüfen?",
      a: "Einmal im Quartal reicht für die meisten Betriebe. Nach Umzug, neuer Telefonnummer, neuem Namen oder neuer Website prüfen Sie sofort die ganze Liste.",
    },
    {
      q: "Lohnt sich ein kostenpflichtiges Werkzeug?",
      a: "Bei einem Standort reicht in der Regel die Tabelle. Bei vielen Standorten sparen Werkzeuge für Verzeichnisverwaltung Zeit. Klären Sie vor dem Kauf, welche DACH-Verzeichnisse abgedeckt sind und was nach einer Kündigung mit den Einträgen geschieht.",
    },
    {
      q: "Können Sie die Einträge für mich prüfen?",
      a: "Ja. Im [kostenlosen Check](/de#check) sehen wir uns Ihr Google-Profil und die wichtigsten Einträge an. Den Profil Quick-Fix gibt es bei LocalDominate für 79 €, die vollständige Profil-Optimierung für 390 €. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Unternehmensprofil bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
    { title: "Daten- oder Inhaltsfehler auf Google Maps melden", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/3094088?hl=de" },
    { title: "Introducing Apple Business", publisher: "Apple Newsroom", url: "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" },
    { title: "Apple Business Connect: Benutzerhandbuch", publisher: "Apple Support", url: "https://support.apple.com/de-de/guide/apple-business-connect/welcome/web" },
    { title: "Häufige Fragen", publisher: "Gelbe Seiten", url: "https://www.gelbeseiten.de/gsservice/haeufige-fragen" },
    { title: "FAQ Telefonbuch", publisher: "Herold", url: "https://www.herold.at/faq-telefonbuch/" },
  ],
  related: [
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Firmendaten überall auf einem Stand" },
    { slug: "citation-strategie-verzeichnisse", title: "Citation-Strategie: welche Verzeichnisse zählen" },
    { slug: "duplicate-listing-entfernen", title: "Doppelte Google-Einträge entfernen" },
    { slug: "local-seo-monthly-checklist", title: "Local SEO jeden Monat: die Routine-Checkliste" },
  ],
  cta: {
    title: "Stimmen Ihre Einträge überall?",
    text: "Wir prüfen Ihr Google-Profil und die wichtigsten Verzeichniseinträge und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst korrigieren sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
