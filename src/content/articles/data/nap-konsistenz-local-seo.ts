import type { V4Article } from "../types";

const article: V4Article = {
  slug: "nap-konsistenz-local-seo",
  lang: "de",
  seoTitle: "NAP-Konsistenz: Firmendaten finden, prüfen, korrigieren",
  seoDescription:
    "NAP-Konsistenz für Betriebe in DACH: wie Sie widersprüchliche Firmendaten finden, Verzeichnisse und Google-Profil korrigieren und nach Umzug sauber bleiben.",
  h1: "NAP-Konsistenz: So bringen Sie Ihre Firmendaten überall auf einen Stand",
  kicker: "Firmendaten",
  lead:
    "Für Inhaber und Verantwortliche lokaler Betriebe, deren Name, Adresse oder Telefonnummer im Netz in mehreren Varianten steht. Sie erfahren, wie Sie Abweichungen systematisch finden, wo Sie Einträge in Deutschland, Österreich und der Schweiz tatsächlich ändern und was bei Umzug oder neuer Nummer zu tun ist.",
  answer:
    "NAP steht für Name, Adresse und Telefonnummer. Konsistent sind diese Daten, wenn sie im Google-Unternehmensprofil, auf der Website, im Impressum und in Verzeichnissen gleich lauten, ergänzt um Website und Öffnungszeiten. Google schreibt, dass vollständige und korrekte Angaben die Chance auf lokale Sichtbarkeit erhöhen. Widersprüche kosten vor allem Vertrauen und Anrufe, die beim falschen Anschluss landen.",
  takeaways: [
    "Legen Sie zuerst eine verbindliche Stammdatenliste fest. Jede Korrektur richtet sich danach.",
    "Google spricht nicht von NAP, sondern von vollständigen und korrekten Angaben. Dass übereinstimmende Verzeichnisdaten helfen, ist Branchenpraxis, keine veröffentlichte Google-Regel.",
    "Bei Das Örtliche und Herold laufen Änderungen an Name, Adresse und Nummer im Grundeintrag über Ihren Telefonanbieter. In der Schweiz geht es über den Anbieter oder direkt bei localsearch.",
    "Doppelte Google-Profile bereinigen Sie über Googles eigenen Weg: entfernen, Zugriff anfordern oder Zusammenführung beantragen. Nach einem Umzug legen Sie kein neues Profil an.",
    "Impressum, Kontaktseite und strukturierte Daten auf Ihrer Website sollten exakt die Stammdaten wiedergeben.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-ist-nap",
      title: "Was NAP-Konsistenz bedeutet",
      answer:
        "NAP ist die Abkürzung für Name, Address, Phone, also Firmenname, Adresse und Telefonnummer. Konsistent heißt: Diese Angaben und meist auch Website und Öffnungszeiten stehen überall in derselben Form.",
      blocks: [
        {
          t: "p",
          text: "Gemeint sind alle Stellen, an denen Menschen oder Suchsysteme Ihre Firmendaten lesen: das [Google-Unternehmensprofil](/blog/google-my-business-optimieren), Ihre Website mit Impressum und Kontaktseite, Telefon- und Branchenbücher, Kartendienste von Apple und Microsoft, Bewertungs- und Branchenportale sowie Ihre Social-Media-Profile.",
        },
        {
          t: "table",
          caption: "Typische Abweichungen und was sie bedeuten",
          head: ["Angabe", "Beispiel für Abweichung", "Warum es auffällt"],
          rows: [
            ["Name", "„Huber Elektro“ hier, „Elektro Huber GmbH & Co. KG“ dort, „Huber Elektrotechnik München“ im dritten Portal", "Drei Schreibweisen wirken wie drei Betriebe, der Zusatz mit Ort verstößt im Google-Profil zudem gegen die Richtlinien"],
            ["Adresse", "Alte Adresse vor dem Umzug, fehlende Hausnummer, Hinterhaus nur in einem Eintrag", "Kunden stehen vor der falschen Tür, Einträge lassen sich schwerer einem Ort zuordnen"],
            ["Telefon", "Alte Festnetznummer, private Mobilnummer, Nummer einer Agentur", "Anrufe gehen ins Leere oder an den falschen Empfänger"],
            ["Website", "Alte Domain, Startseite statt Standortseite", "Besucher landen auf einer Weiterleitung oder einer unpassenden Seite"],
            ["Öffnungszeiten", "Sommerzeiten im Profil, Winterzeiten auf der Website", "Kunden kommen bei geschlossener Tür"],
          ],
        },
        {
          t: "note",
          label: "Schreibweise oder Widerspruch",
          text: "„Str.“ statt „Straße“ oder ein anderes Leerzeichen in der Nummer sind kleine Unterschiede. Eine andere Hausnummer, eine alte Nummer oder ein anderer Name sind echte Widersprüche. Korrigieren Sie zuerst die Widersprüche, dann die Schreibweisen.",
        },
      ],
    },
    {
      id: "warum-wichtig",
      title: "Warum einheitliche Daten zählen",
      answer:
        "Google schreibt, dass Unternehmen mit vollständigen und korrekten Informationen eher in lokalen Ergebnissen erscheinen. Für Ihre Kunden zählt etwas Einfacheres: Die Nummer muss klingeln und die Adresse muss stimmen.",
      blocks: [
        {
          t: "p",
          text: "In Googles Hilfe zum lokalen Ranking stehen drei Faktoren: Relevanz, Entfernung und Bekanntheit. Dort steht auch, dass ein Profil mit falschen Angaben möglicherweise nicht angezeigt wird. Den Begriff NAP oder eine Regel zur Übereinstimmung mit Verzeichnissen nennt Google nicht. Wie die Faktoren im Detail wirken, erklärt der [Leitfaden zum Maps-Ranking](/blog/google-maps-ranking-verbessern).",
        },
        {
          t: "p",
          text: "In der Local-SEO-Praxis gelten übereinstimmende Angaben in Verzeichnissen seit Jahren als Bestätigung, dass ein Betrieb an diesem Ort existiert. Das ist eine Erfahrung aus der Branche, keine Aussage von Google. Unabhängig davon ist der direkte Schaden leicht zu sehen: Ein Verzeichnis mit der alten Nummer schickt Ihnen keine Anrufe, egal wie gut Ihr Profil sonst ist.",
        },
        {
          t: "ul",
          items: [
            "**Für Kunden:** falsche Nummer, falsche Adresse, falsche Zeiten führen zu verlorenen Anfragen und Ärger vor Ort.",
            "**Für Google:** widersprüchliche Angaben erschweren es, Einträge einem Betrieb zuzuordnen, und begünstigen doppelte Profile.",
            "**Für Sie selbst:** Wer seine Daten an einer Stelle festlegt, spart bei jedem neuen Eintrag und bei jeder Änderung Zeit.",
          ],
        },
      ],
    },
    {
      id: "ki-assistenten",
      title: "Einheitliche Daten und KI-Assistenten",
      answer:
        "KI-Übersichten und Assistenten wie ChatGPT oder Perplexity fassen Angaben aus mehreren Quellen zusammen. Wenn diese Quellen sich widersprechen, steigt aus unserer Erfahrung das Risiko, dass eine falsche Nummer oder Zeit genannt wird.",
      blocks: [
        {
          t: "p",
          text: "Wie einzelne KI-Systeme Quellen gewichten, legen die Anbieter nicht im Detail offen. Belegbar ist nur, dass sie auf öffentlich lesbare Angaben zurückgreifen: Profil, Website, Verzeichnisse, Bewertungen. Die praktische Folgerung ist dieselbe wie für Google. Je weniger Varianten es gibt, desto weniger kann falsch zusammengesetzt werden.",
        },
        {
          t: "p",
          text: "Wenn ein KI-Assistent bereits falsche Angaben über Ihren Betrieb macht, finden Sie das Vorgehen im Artikel [KI-Falschangaben korrigieren](/blog/ai-falschangaben-korrigieren-2026). Die Grundlage bleibt aber, die Quellen selbst zu bereinigen.",
        },
      ],
    },
    {
      id: "stammdaten",
      title: "Die Stammdaten festlegen",
      answer:
        "Bevor Sie etwas korrigieren, schreiben Sie die eine richtige Version Ihrer Daten auf. Diese Stammdatenliste ist die Vorlage für jeden Eintrag, und Sie kopieren daraus, statt neu zu tippen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Name wie im echten Leben",
              text: "Googles Richtlinien verlangen den Namen, den Sie einheitlich auch außerhalb von Google verwenden, etwa auf Ladenschild, Website und Briefpapier. Zusätze wie Leistungen, Orte oder Slogans gehören nicht in den Namen.",
            },
            {
              title: "Rechtlichen Namen danebenstellen",
              text: "Im Impressum und in Registern steht der rechtliche Name mit Rechtsform, etwa „Huber Elektrotechnik GmbH“. Herold verwendet für Firmen den Wortlaut laut Firmenbuch. Notieren Sie beide Varianten und legen Sie fest, wo welche gilt.",
            },
            {
              title: "Adresse vollständig und in einer Schreibweise",
              text: "Straße, Hausnummer, Zusatz wie Hinterhaus oder Stockwerk, Postleitzahl, Ort. Ein Postfach oder ein Briefkasten an einem fremden Standort ist im Google-Profil nicht zulässig, eine virtuelle Büroadresse ebenfalls nicht.",
            },
            {
              title: "Eine Hauptnummer",
              text: "Google empfiehlt eine örtliche Nummer statt Callcenter oder Hotline und untersagt Weiterleitungsnummern, über die Anrufer nicht direkt mit Ihnen verbunden werden. Legen Sie ein Format fest, für strukturierte Daten mit Landesvorwahl, etwa +49 89 1234567.",
            },
            {
              title: "Website, Öffnungszeiten, Kategorie",
              text: "Die URL der Standortseite, reguläre Zeiten und Sonderzeiten sowie die Hauptkategorie gehören ebenfalls in die Liste. Wie Sie Feiertage pflegen, steht in [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage).",
            },
          ],
        },
        {
          t: "note",
          label: "Impressum als Anker",
          text: "In Deutschland verlangt § 5 Digitale-Dienste-Gesetz unter anderem Name und Anschrift der Niederlassung, bei juristischen Personen Rechtsform und Vertretungsberechtigte, Angaben für eine schnelle elektronische Kontaktaufnahme einschließlich E-Mail-Adresse sowie gegebenenfalls Register und Registernummer. Weil das Impressum ohnehin vollständig und aktuell sein muss, eignet es sich als Referenz für alle anderen Einträge. Für Österreich und die Schweiz gelten eigene Vorschriften.",
        },
        {
          t: "p",
          text: "Betriebe ohne Kundenverkehr, etwa Handwerker mit Einzugsgebiet, blenden die Adresse im Google-Profil aus. In Verzeichnissen und im Impressum bleibt die Adresse trotzdem stehen, sie muss dann ebenso einheitlich sein. Mehr dazu in [Local SEO für Handwerker](/blog/local-seo-handwerker).",
        },
      ],
    },
    {
      id: "audit",
      title: "Abweichungen finden: das Audit in fünf Schritten",
      answer:
        "Sie suchen gezielt nach Ihrem Namen, Ihren alten und neuen Nummern und Ihren alten Adressen, tragen jeden Fund in eine Tabelle ein und vergleichen ihn mit der Stammdatenliste. Ein bezahltes Werkzeug brauchen Sie dafür nicht.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Bekannte Quellen auflisten",
              text: "Google-Profil, Website, Impressum, Apple Maps, Bing Places, Das Örtliche, Gelbe Seiten, Das Telefonbuch, Herold oder local.ch und search.ch je nach Land, Branchenportale, Bewertungsportale, Facebook, Instagram, LinkedIn, Mitgliedseinträge bei Kammer und Verband.",
            },
            {
              title: "Nach dem Namen suchen",
              text: "Suchen Sie bei Google nach „Firmenname“ Ort und nach jeder früheren Schreibweise, jeweils in Anführungszeichen. Wiederholen Sie die Suche in Google Maps, Apple Maps und Bing Maps.",
            },
            {
              title: "Nach Nummern suchen",
              text: "Suchen Sie nach der aktuellen und nach jeder alten Telefonnummer in mehreren Schreibweisen, etwa „089 1234567“, „089/1234567“ und „+49 89 1234567“. Alte Nummern führen Sie oft zu vergessenen Einträgen.",
            },
            {
              title: "Nach alten Adressen suchen",
              text: "Suchen Sie nach Firmenname plus früherer Straße. Auf diese Weise finden Sie Einträge, die einen Umzug nicht mitbekommen haben.",
            },
            {
              title: "Vergleichen und priorisieren",
              text: "Tragen Sie jeden Fund in die Tabelle ein und markieren Sie Widersprüche. Zuerst kommen falsche Nummern und Adressen in viel genutzten Quellen, dann Namensvarianten, zuletzt reine Schreibweisen.",
            },
          ],
        },
        {
          t: "table",
          caption: "Vorlage für die Audit-Tabelle",
          head: ["Spalte", "Was Sie eintragen"],
          rows: [
            ["Quelle und Link", "Name des Portals und direkter Link zum Eintrag"],
            ["Name, Adresse, Telefon", "Genau so, wie es dort steht, abgeschrieben, nicht korrigiert"],
            ["Website und Öffnungszeiten", "Verlinkte URL und angezeigte Zeiten"],
            ["Abweichung", "Was nicht zur Stammdatenliste passt"],
            ["Zugang", "Haben Sie ein Konto für den Eintrag, oder wer ändert ihn"],
            ["Status und Datum", "Offen, beantragt, korrigiert, mit Datum der letzten Prüfung"],
          ],
        },
        {
          t: "p",
          text: "Eine fertige Struktur zum Nachverfolgen bietet die [Citation-Tracking-Vorlage](/blog/citation-tracking-template). Weitere Prüfschritte ohne Budget finden Sie im [Leitfaden für kostenloses SEO](/blog/kostenloses-seo-guide).",
        },
      ],
    },
    {
      id: "verzeichnisse-korrigieren",
      title: "Einträge in DACH-Verzeichnissen korrigieren",
      answer:
        "Bei den klassischen Telefon- und Branchenbüchern ist oft nicht das Portal zuständig, sondern Ihr Telefonanbieter. Das Örtliche und Herold verweisen Änderungen an Name, Adresse und Nummer im Grundeintrag ausdrücklich an ihn.",
      blocks: [
        {
          t: "table",
          caption: "Wo Sie Einträge ändern (Stand der Verlagsangaben, siehe Quellen)",
          head: ["Verzeichnis", "Woher die Grunddaten kommen", "So ändern Sie"],
          rows: [
            ["Das Örtliche (Deutschland)", "Kostenloser Grundeintrag auf Basis des Telefonbucheintrags Ihres Anbieters", "Name, Adresse, Nummer, Löschung: beim Telefonanbieter. Bestehende Online-Einträge zusätzlich über den Ändern-Knopf im Eintrag"],
            ["Herold (Österreich)", "Kostenloser Eintrag für jeden Telefonteilnehmer, Firmen mit Wortlaut laut Firmenbuch", "Haupteinträge nur über den Telefonanbieter. Ein eigener Firmeneintrag lässt sich auf herold.at beantragen und danach im Konto verwalten"],
            ["local.ch und search.ch (Schweiz)", "Daten vom Fernmeldedienstanbieter oder vom Kunden, Ersteintrag für Firmen grundsätzlich kostenlos", "Änderung beim Fernmeldedienstanbieter oder direkt bei localsearch, online, per Post oder Telefon. Ein Identitätsnachweis kann verlangt werden"],
          ],
        },
        {
          t: "p",
          text: "Gelbe Seiten und Das Telefonbuch prüfen Sie nach derselben Methode: Eintrag aufrufen, mit der Stammdatenliste vergleichen und den Änderungsweg nutzen, den das Portal im Eintrag anbietet. Wenn Name, Adresse oder Nummer falsch sind, fragen Sie zuerst bei Ihrem Telefonanbieter nach, welcher Telefonbucheintrag dort hinterlegt ist. Ein falscher Eintrag an dieser Stelle taucht sonst nach jeder Korrektur wieder auf.",
        },
        {
          t: "h3",
          text: "Kartendienste und Portale mit Inhaberkonto",
        },
        {
          t: "ul",
          items: [
            "**Apple Maps:** Ortskarten verwalten Sie über Apples Portal für Unternehmen. Prüfen Sie Name, Adresse, Nummer, Website und Zeiten gegen Ihre Stammdaten.",
            "**Bing Places:** Microsofts Portal für Einträge in Bing und Bing Maps. Wenn Sie Daten aus dem Google-Profil übernehmen, prüfen Sie das Ergebnis Feld für Feld.",
            "**Yelp, Tripadvisor, Arzt- und Handwerkerportale:** Übernehmen Sie den Eintrag als Inhaber, wo das Portal es anbietet, und korrigieren Sie ihn dort. Wo es kein Inhaberkonto gibt, nutzen Sie das Kontakt- oder Meldeformular des Portals.",
          ],
        },
        {
          t: "note",
          label: "Qualität statt Masse",
          text: "Angebote, die pauschal Hunderte neue Verzeichniseinträge versprechen, lösen das Problem nicht. Jeder Eintrag ist eine weitere Stelle, die Sie bei der nächsten Änderung pflegen müssen. Welche Verzeichnisse für Ihre Branche zählen, beschreibt der Überblick [Top-Verzeichnisse DACH](/blog/local-citations-2025).",
        },
      ],
    },
    {
      id: "duplikate",
      title: "Doppelte Einträge bei Google bereinigen",
      answer:
        "Google erlaubt ein Profil pro Unternehmen und Standort. Für Duplikate gibt es drei offizielle Wege: ein eigenes doppeltes Profil entfernen, beim fremden Inhaber Zugriff anfordern oder eine Zusammenführung beantragen.",
      blocks: [
        {
          t: "table",
          caption: "Welcher Weg für welches Duplikat (nach Googles Hilfe)",
          head: ["Situation", "Was Google vorsieht"],
          rows: [
            ["Ihr Betrieb steht in Maps, das Profil ist aber nicht bestätigt", "Profil beanspruchen und bestätigen, statt ein neues anzulegen"],
            ["Sie verwalten selbst zwei bestätigte Profile für denselben Standort", "Das doppelte Profil entfernen. Das wirkt sich nicht auf das bestätigte aus, löscht aber Inhalte und Verwalter des entfernten Profils. Wählen Sie also sorgfältig, welches bleibt"],
            ["Das Duplikat gehört jemand anderem, etwa einer früheren Agentur", "Zugriff beim Inhaber anfordern. Antwortet er nicht innerhalb von drei Tagen, ist eine Übernahme unter Umständen möglich"],
            ["Zwei Einträge in Maps zeigen denselben Betrieb", "Zusammenführung über „Änderung vorschlagen“ beantragen. Google prüft jeden Antrag. Rezensionen werden zusammengelegt, Antworten darauf können verloren gehen"],
          ],
        },
        {
          t: "p",
          text: "Ein als Duplikat markiertes Profil erscheint laut Google weder in der Suche noch in Maps. Wurden zwei tatsächlich getrennte Betriebe fälschlich zusammengeführt, können Sie beim Support Einspruch einlegen. Eine Schritt-für-Schritt-Anleitung finden Sie in [Doppelte Google-Einträge löschen](/blog/duplicate-listing-entfernen).",
        },
      ],
    },
    {
      id: "umzug-name-nummer",
      title: "Umzug, neuer Name, neue Nummer: die Checkliste",
      answer:
        "Bei jeder Änderung der Stammdaten gilt dieselbe Reihenfolge: zuerst die Liste aktualisieren, dann Google-Profil und Website, dann Telefonanbieter und Verzeichnisse. Nach einem Umzug ändern Sie die Adresse im bestehenden Profil und legen kein neues an.",
      blocks: [
        {
          t: "ol",
          items: [
            "**Stammdatenliste aktualisieren** und das Datum der Änderung notieren.",
            "**Google-Profil ändern:** Adresse, Name oder Nummer im bestehenden Profil anpassen. Google schreibt ausdrücklich, dass Sie bei einem Umzug kein neues Profil für den neuen Standort erstellen.",
            "**Website anpassen:** Impressum, Kontaktseite, Fußzeile, Anfahrtsbeschreibung, eingebettete Karte und strukturierte Daten.",
            "**Telefonanbieter informieren**, damit der Telefonbucheintrag und damit Das Örtliche, Herold oder local.ch die neuen Daten bekommen.",
            "**Kartendienste und Portale** nach Ihrer Audit-Tabelle abarbeiten, beginnend mit den meistgenutzten.",
            "**Social-Media-Profile, Mitgliedseinträge, E-Mail-Signatur, Rechnungsvorlagen** nicht vergessen.",
            "**Alte Nummer nicht sofort abschalten**, wenn es sich vermeiden lässt. Eine Weiterleitung oder Ansage für eine Übergangszeit fängt Anrufe aus Einträgen ab, die Sie noch nicht gefunden haben.",
            "**Nach einigen Wochen erneut suchen**, mit den Suchanfragen aus dem Audit, und Reste nachziehen.",
          ],
        },
        {
          t: "note",
          label: "Bei einer Namensänderung",
          text: "Ändert sich nur der rechtliche Name, etwa durch eine neue Rechtsform, bleibt der Name im Google-Profil oft gleich, weil er dem Namen im Alltag folgt. Impressum und Register ändern sich trotzdem. Halten Sie in der Stammdatenliste fest, welche Quelle welchen Namen zeigt.",
        },
      ],
    },
    {
      id: "website-schema",
      title: "Website und strukturierte Daten abgleichen",
      answer:
        "Die Website ist die Quelle, die Sie vollständig selbst kontrollieren. Name, Adresse, Telefon und Zeiten sollten dort als Text stehen und in strukturierten Daten vom Typ LocalBusiness dieselben Werte tragen wie im Google-Profil.",
      blocks: [
        {
          t: "p",
          text: "Laut Google Search Central sind bei LocalBusiness-Markup nur der Name und die Adresse Pflicht. Empfohlen sind unter anderem Telefonnummer mit Landes- und Ortsvorwahl, die URL des Standorts, Öffnungszeiten und Geokoordinaten mit mindestens fünf Nachkommastellen. Je mehr Eigenschaften Sie angeben, desto informativer ist das Ergebnis für Nutzer.",
        },
        {
          t: "ul",
          items: [
            "Verwenden Sie im Markup exakt die Werte aus der Stammdatenliste, nicht eine dritte Variante.",
            "Nehmen Sie den spezifischsten Typ, der passt, etwa Dentist, Plumber oder Hotel.",
            "Bei mehreren Standorten bekommt jede Standortseite ihr eigenes Markup mit ihren eigenen Daten.",
            "Prüfen Sie nach jeder Änderung von Adresse, Nummer oder Zeiten auch das Markup. Es wird bei Umzügen besonders oft vergessen.",
          ],
        },
        {
          t: "p",
          text: "Wie das Markup aufgebaut ist, zeigt der Artikel [Schema Markup für Local SEO](/blog/schema-markup-local-seo). Wo strukturierte Daten im Gesamtbild stehen, erklärt der [Local-SEO-Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
    {
      id: "pflege",
      title: "Daten dauerhaft sauber halten",
      answer:
        "Einheitliche Daten sind kein einmaliges Projekt. Legen Sie fest, wer die Stammdatenliste verwaltet, und prüfen Sie die wichtigsten Einträge in einem festen Rhythmus, etwa einmal im Quartal und nach jeder Änderung.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Eine verantwortliche Person** pflegt die Stammdatenliste und die Zugänge zu allen Konten.",
            "**Zugänge im Betrieb halten:** Profile und Verzeichniskonten sollten auf eine Firmenadresse laufen, nicht auf eine Agentur oder einen ehemaligen Mitarbeiter.",
            "**Vorgeschlagene Änderungen prüfen:** Im Google-Profil können Dritte Änderungen vorschlagen. Schauen Sie regelmäßig nach, ob Angaben ohne Ihr Zutun geändert wurden.",
            "**Wiederholungstermin im Kalender:** dieselben Suchanfragen wie im Audit, dieselbe Tabelle, neues Prüfdatum.",
            "**Bei vielen Standorten** kann ein Listing-Management-Dienst Arbeit sparen. Lassen Sie sich vorher schriftlich geben, welche Verzeichnisse er tatsächlich bedient und was nach Vertragsende mit den Einträgen geschieht.",
          ],
        },
        {
          t: "p",
          text: "Wenn Sie wissen wollen, wo Ihre Daten sich heute widersprechen, sehen wir uns das im [kostenlosen Check](/de#check) an. Unsere Leistungen rund um das Unternehmensprofil finden Sie unter [Leistungen](/services).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was bedeutet NAP?",
      a: "NAP steht für Name, Address, Phone, also Firmenname, Adresse und Telefonnummer. In der Praxis gehören Website und Öffnungszeiten dazu. NAP-Konsistenz heißt, dass diese Angaben in allen Quellen gleich lauten.",
    },
    {
      q: "Ist NAP-Konsistenz ein offizieller Google-Rankingfaktor?",
      a: "Google nennt den Begriff nicht. Google schreibt, dass vollständige und korrekte Unternehmensinformationen die Chance erhöhen, in lokalen Ergebnissen zu erscheinen. Dass übereinstimmende Verzeichnisdaten zusätzlich helfen, ist eine verbreitete Einschätzung aus der Branche.",
    },
    {
      q: "Warum ändert Das Örtliche meinen Eintrag nicht selbst?",
      a: "Laut den Eintragsstandards des Verlags beruht der kostenlose Grundeintrag auf dem Telefonbucheintrag Ihres Anbieters. Änderungen an Name, Adresse und Nummer richten Sie deshalb an Ihren Telefonanbieter. Bei Herold in Österreich gilt dasselbe für Haupteinträge.",
    },
    {
      q: "Muss ich überall exakt dieselbe Schreibweise verwenden?",
      a: "Widersprüche wie eine alte Nummer oder eine andere Hausnummer sollten Sie immer beheben. Kleine Formatunterschiede wie „Str.“ und „Straße“ sind weniger dringend. Wo Sie selbst schreiben, verwenden Sie trotzdem eine Form aus Ihrer Stammdatenliste.",
    },
    {
      q: "Darf ich im Google-Profil eine Tracking-Nummer angeben?",
      a: "Googles Richtlinien untersagen Weiterleitungsnummern, über die Anrufer nicht direkt mit Ihrem Unternehmen verbunden werden, und empfehlen eine örtliche Nummer statt Callcenter oder Hotline. Die Nummer muss direkt vom Unternehmen verwaltet werden.",
    },
    {
      q: "Was kostet es, die Firmendaten bereinigen zu lassen?",
      a: "Selbst erledigt kostet es nur Zeit. Bei LocalDominate kostet der Google Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Welche Korrekturen darin enthalten sind, legen wir vor dem Start im Gespräch fest.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Probleme mit doppelten Profilen und Eigentumsrechten beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/12756178?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Digitale-Dienste-Gesetz (DDG), § 5 Allgemeine Informationspflichten", publisher: "Bundesministerium der Justiz, gesetze-im-internet.de", url: "https://www.gesetze-im-internet.de/ddg/__5.html" },
    { title: "Eintragstandards Das Örtliche (Stand Mai 2023)", publisher: "Schlütersche", url: "https://archiv.schluetersche.de/wp-content/uploads/2023/08/Eintragstandards_OeTB.pdf" },
    { title: "Häufige Fragen zum Telefonbuch (Eintrag ändern, kostenloser Eintrag)", publisher: "HEROLD Business Data", url: "https://www.herold.at/faq-telefonbuch/" },
    { title: "Eintragsbestimmungen für Verzeichniseinträge", publisher: "localsearch (Swisscom Directories AG)", url: "https://www.localsearch.ch/app/uploads/2023/11/Eintragsbestimmungen.pdf" },
  ],
  related: [
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
  ],
  cta: {
    title: "Wo widersprechen sich Ihre Firmendaten?",
    text: "Wir vergleichen Ihr Google-Profil, Ihre Website und die wichtigsten Verzeichnisse und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Stellen, an denen Ihre Daten sich widersprechen, mit dem Weg zur Korrektur. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
