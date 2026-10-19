import type { V4Article } from "../types";

const article: V4Article = {
  slug: "gbp-nicht-in-suche-sichtbar",
  lang: "de",
  seoTitle: "Google-Profil nicht sichtbar? Ursachen und Lösungen",
  seoDescription:
    "Ihr Unternehmensprofil erscheint nicht bei Google? So klären Sie, ob es um Status, Bestätigung, Sperrung oder Duplikat geht oder nur um das lokale Ranking.",
  h1: "Google-Unternehmensprofil nicht in der Suche sichtbar: Ursachen finden und beheben",
  kicker: "Google Unternehmensprofil",
  lead:
    "Für Inhaber, deren Profil bei Google nicht auftaucht, obwohl es angelegt ist. Sie erfahren, wie Sie in wenigen Minuten klären, ob Google das Profil gar nicht zeigt oder ob es nur bei Suchen nach Ihrer Leistung fehlt, und was in jedem Fall zu tun ist.",
  answer:
    "Erscheint Ihr Profil nicht einmal bei der Suche nach Ihrem Namen und Ort, liegt fast immer ein Statusproblem vor: nicht bestätigt, noch in Prüfung, gesperrt oder als Duplikat markiert. Erscheint es beim Namen, aber nicht bei Suchen wie „Elektriker Graz“, ist es sichtbar und verliert nur im Ranking. Dort zählen **Relevanz, Entfernung und Bekanntheit**.",
  takeaways: [
    "Suchen Sie zuerst nach Ihrem genauen Firmennamen und Ort. Das Ergebnis teilt das Problem in zwei Fälle mit völlig unterschiedlichen Lösungen.",
    "Laut Google können nur bestätigte Unternehmen ihre Angaben in Maps und der Suche anzeigen lassen. Gesperrte, deaktivierte und als Duplikat markierte Profile sehen andere Nutzer nicht.",
    "Google nennt für neue Unternehmen bis zu einen Monat, bis sie in Rankings aufgenommen werden. Änderungen werden meist in Minuten geprüft, in Einzelfällen bis zu 30 Tage.",
    "Fehlt das Profil nur bei Leistungssuchen, helfen eine genaue Kategorie, vollständige Angaben, eine passende Website und echte Bewertungen. Keywords im Namen oder ein zweites Profil machen es schlimmer.",
    "War das Profil früher gut sichtbar und ist plötzlich weg, lesen Sie den Artikel zum plötzlichen Rankingverlust. Dieser Artikel behandelt Profile, die nie oder derzeit gar nicht erscheinen.",
  ],
  publishedAt: "2025-01-10",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "zwei-faelle",
      title: "Zwei Fälle: gar nicht sichtbar oder nur nicht gefunden",
      answer:
        "„Nicht sichtbar“ meint zwei verschiedene Probleme. Fall A: Das Profil erscheint auch bei der Suche nach dem eigenen Namen nicht. Fall B: Es erscheint beim Namen, aber nicht bei Suchen nach Leistung und Ort. Fall A ist ein Status- oder Richtlinienthema, Fall B ein Rankingthema.",
      blocks: [
        {
          t: "p",
          text: "Viele Inhaber vermischen beides und arbeiten deshalb an der falschen Stelle. Wer bei Fall A Fotos hochlädt und um Bewertungen bittet, ändert nichts, solange Google das Profil nicht freigegeben hat. Wer bei Fall B die Bestätigung neu anstößt, riskiert im schlimmsten Fall ein Duplikat.",
        },
        {
          t: "table",
          caption: "Die zwei Fälle im Vergleich",
          head: ["", "Fall A: gar nicht sichtbar", "Fall B: nur bei Leistungssuchen unsichtbar"],
          rows: [
            ["Suche nach Name und Ort", "Kein Profil, kein Kartenpunkt", "Profil erscheint"],
            ["Suche nach Leistung und Ort", "Kein Profil", "Profil fehlt oder steht weit hinten"],
            ["Typische Ursache", "Nicht bestätigt, in Prüfung, gesperrt, deaktiviert, Duplikat", "Relevanz, Entfernung, Bekanntheit"],
            ["Wo Sie ansetzen", "Status im Profil, Richtlinien, Support", "Kategorie, Angaben, Website, Bewertungen"],
          ],
        },
        {
          t: "note",
          label: "Abgrenzung",
          text: "War Ihr Profil früher bei Leistungssuchen gut platziert und ist dann innerhalb weniger Tage abgerutscht, ist das ein dritter Fall. Dafür gibt es den Artikel [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden).",
        },
      ],
    },
    {
      id: "selbsttest",
      title: "Der Selbsttest in drei Minuten",
      answer:
        "Google empfiehlt, nach Name und Stadt zu suchen, in der Google Suche und in Google Maps. Angemeldet mit dem Konto des Profils finden Sie es zusätzlich über „mein Unternehmen“. Was Kunden sehen, prüfen Sie zusätzlich in einem privaten Browserfenster ohne Anmeldung.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Mit dem Profilkonto anmelden",
              text: "Melden Sie sich mit dem Google-Konto an, das das Profil verwaltet, und suchen Sie nach „mein Unternehmen“. Erscheint Ihr Profil zur Verwaltung nicht, ist es mit einem anderen Konto verknüpft oder Sie haben keinen Zugriff.",
            },
            {
              title: "Status lesen",
              text: "Achten Sie in der Verwaltungsansicht auf Hinweise wie „Bestätigen“, eine laufende Prüfung, eine Sperrung oder eine Duplikat-Meldung. Diese Hinweise entscheiden über alles Weitere.",
            },
            {
              title: "Als Kunde suchen",
              text: "Öffnen Sie ein privates Fenster ohne Anmeldung und suchen Sie nach genauem Namen und Ort, in der Suche und in Maps. So sehen Sie, was andere sehen, und nicht Ihre eigene Verwaltungsansicht.",
            },
            {
              title: "Nach Leistung und Ort suchen",
              text: "Suchen Sie danach nach Ihrer wichtigsten Leistung mit Ort, etwa „Physiotherapie Linz Urfahr“. Notieren Sie, ob und wo Ihr Profil in Maps erscheint.",
            },
          ],
        },
        {
          t: "p",
          text: "Eine einzelne Leistungssuche vom eigenen Standort sagt wenig, weil Google die Entfernung zum Suchenden einrechnet. Wie Sie Sichtbarkeit über Ihr Einzugsgebiet verteilt messen, beschreibt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker).",
        },
      ],
    },
    {
      id: "status-pruefen",
      title: "Fall A: Den Status des Profils prüfen",
      answer:
        "Google schreibt: Nur bestätigte Unternehmen können ihre Angaben auf Google Maps und in der Suche anzeigen lassen. Profile, die gegen die Richtlinien verstoßen, werden deaktiviert oder gesperrt, und als Duplikat markierte Profile erscheinen laut Google weder in der Suche noch in Maps.",
      blocks: [
        {
          t: "table",
          caption: "Status, Bedeutung und nächster Schritt",
          head: ["Was Sie sehen", "Was es bedeutet", "Nächster Schritt"],
          rows: [
            ["Aufforderung „Bestätigen“", "Das Profil ist nicht bestätigt und wird nicht als Ihr Unternehmen angezeigt", "Bestätigung abschließen, siehe [Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen)"],
            ["Bestätigung eingereicht, Prüfung läuft", "Google prüft Ihre Angaben oder Ihr Video", "Abwarten, keine Daten ändern, kein zweites Profil anlegen"],
            ["Hinweis auf Sperrung oder Deaktivierung", "Ein Richtlinienverstoß wurde festgestellt, andere Nutzer sehen das Profil nicht", "Verstoß beheben, dann Einspruch, siehe [gesperrtes Profil reaktivieren](/blog/gbp-suspendiert-reaktivieren)"],
            ["Hinweis „Duplikat“", "Es gibt bereits ein Profil für denselben Betrieb", "Bestehendes Profil übernehmen oder zusammenführen, siehe [doppelte Einträge entfernen](/blog/duplicate-listing-entfernen)"],
            ["Profil fehlt in der Verwaltung", "Es gehört einem anderen Konto oder existiert noch nicht", "Mit Name und Adresse in Maps suchen und Inhaberschaft anfordern statt neu anlegen"],
          ],
        },
        {
          t: "p",
          text: "Laut Google bekommen Sie bei einer Sperrung eine Benachrichtigung im Google-Konto, mit dem Sie das Profil verwalten. Prüfen Sie deshalb auch das Postfach dieses Kontos, nicht nur die Profilansicht.",
        },
      ],
    },
    {
      id: "wartezeiten",
      title: "Neue Profile und Änderungen: die Zeiten, die Google nennt",
      answer:
        "Google nennt für neue Unternehmen bis zu einen Monat, bis sie in Rankings aufgenommen werden. Änderungen an Angaben werden laut Google meist innerhalb von zehn Minuten geprüft, gelegentlich dauert es bis zu 30 Tage. Bis zur Freigabe bleibt die alte Angabe sichtbar.",
      blocks: [
        {
          t: "table",
          caption: "Zeitangaben aus der Google-Hilfe",
          head: ["Vorgang", "Angabe von Google"],
          rows: [
            ["Neues Unternehmen erscheint in Rankings", "Bis zu einem Monat"],
            ["Neue Angaben erscheinen in der Suche", "Bis zu drei Tage (Hilfeseite „Ihr Unternehmen auf Google finden“)"],
            ["Prüfung einer Änderung", "Meist bis zu zehn Minuten, gelegentlich bis zu 30 Tage (Hilfeseite zum Bearbeitungsstatus)"],
            ["Status einer Änderung", "Ausstehend, akzeptiert oder nicht genehmigt"],
          ],
        },
        {
          t: "p",
          text: "Die beiden Hilfeseiten nennen unterschiedliche Zeiten für Änderungen. Rechnen Sie im Normalfall mit wenigen Tagen und behalten Sie den Status der Änderung im Blick. Steht eine Änderung auf „nicht genehmigt“, konnte Google sie nicht als korrekt bestätigen. Laut Google können Sie in manchen Fällen Einspruch einlegen.",
        },
        {
          t: "p",
          text: "Angaben wie „Indexierung dauert ein bis drei Wochen“ oder „aktive Profile werden schneller indexiert“ stammen nicht von Google. Wir haben sie aus dieser Anleitung entfernt. Häufige Änderungen an Name, Adresse oder Kategorie während einer laufenden Prüfung beschleunigen nichts. Jede Änderung muss selbst wieder geprüft werden.",
        },
      ],
    },
    {
      id: "sperrung-duplikat",
      title: "Gesperrt, deaktiviert oder als Duplikat markiert",
      answer:
        "Bei Sperrung oder Deaktivierung prüfen Sie zuerst die Richtlinien, beheben den Verstoß und reichen dann über Googles Einspruchstool einen Einspruch ein. Bei einem Duplikat gilt: Ein Unternehmen darf nur ein Profil haben. Übernehmen oder bereinigen Sie das bestehende, statt ein weiteres anzulegen.",
      blocks: [
        {
          t: "h3",
          text: "Sperrung und Deaktivierung",
        },
        {
          t: "p",
          text: "Google erlaubt beim Einspruch Nachweise wie Gewerbeanmeldung, Lizenz, Steuerbescheinigung oder Versorgerrechnung, die zu Name und Adresse passen. Während ein Einspruch läuft, sollen Sie laut Google kein neues Profil für denselben Betrieb anlegen. Den vollständigen Ablauf beschreibt [gesperrtes Profil reaktivieren](/blog/gbp-suspendiert-reaktivieren).",
        },
        {
          t: "h3",
          text: "Duplikat",
        },
        {
          t: "p",
          text: "Laut Google wird ein Profil als Duplikat markiert, wenn es bereits ein bestätigtes Profil für den Betrieb gibt, wenn mehrere Profile an derselben Adresse bestehen oder wenn für einzelne Leistungen eigene Profile angelegt wurden. Mehrere Leistungen gehören in ein Profil. Nach einem Umzug ändern Sie die Adresse im bestehenden Profil.",
        },
        {
          t: "ul",
          items: [
            "Gehört das bestätigte Profil jemand anderem, fordern Sie die Inhaberschaft an. Der bisherige Inhaber hat laut Google drei Tage Zeit zu antworten.",
            "Haben Sie versehentlich ein zweites Profil angelegt, können Sie es entfernen. Dabei gehen dessen Inhalte und Verwalter verloren.",
            "Teilen sich mehrere eigenständige Betriebe eine Adresse, darf jeder ein Profil haben, wenn Name und Beschilderung klar verschieden sind.",
          ],
        },
        {
          t: "p",
          text: "Schritt für Schritt erklärt das der Artikel [doppelte Einträge entfernen](/blog/duplicate-listing-entfernen). Für Betriebe mit mehreren Filialen gilt die Regel je Standort, siehe [mehrere Standorte verwalten](/blog/gbp-mehrere-standorte).",
        },
      ],
    },
    {
      id: "eignung",
      title: "Wenn Adresse oder Name gegen die Richtlinien verstoßen",
      answer:
        "Ein Profil ist nur zulässig, wenn Kunden den Betrieb während der Öffnungszeiten vor Ort erreichen oder der Betrieb zu den Kunden fährt. Virtuelle Büros, Postfächer und Namen mit Zusätzen wie Ort oder Leistung verstoßen gegen Googles Richtlinien und sind häufige Gründe für Ablehnung oder Sperrung.",
      blocks: [
        {
          t: "table",
          caption: "Häufige Richtlinienprobleme hinter Fall A",
          head: ["Problem", "Was Google dazu sagt", "Korrektur"],
          rows: [
            ["Virtuelles Büro oder gemietete Postadresse", "Nicht zulässig, wenn der Betrieb dort nicht arbeitet", "Echte Betriebsadresse oder Einzugsgebiet angeben"],
            ["Postfach als Adresse", "Postfächer und entfernte Briefkästen sind nicht zulässig", "Physische Adresse, Zusatz wie Suite in Adresszeile 2"],
            ["Coworking-Fläche", "Nur mit klarer Beschilderung und Kundenempfang durch eigenes Personal zu den Öffnungszeiten", "Bedingungen erfüllen oder als Einzugsgebiet führen"],
            ["Ort, Leistung oder Slogan im Namen", "Nicht erlaubt, kann zur Sperrung führen", "Name wie auf Schild, Website und Briefpapier"],
            ["Privatadresse sichtbar bei Betrieb ohne Kundenverkehr", "Adresse soll ausgeblendet werden", "Adresse ausblenden, Einzugsgebiet festlegen"],
          ],
        },
        {
          t: "p",
          text: "Ein Betrieb ohne Kundenverkehr, der seine Adresse ausblendet, bleibt sichtbar. Er erscheint dann ohne Kartenpunkt an der Hausadresse, aber mit seinem Einzugsgebiet. Wie Handwerksbetriebe das sauber einrichten, steht in [Local SEO für Handwerker](/blog/local-seo-handwerker), eine englische Übersicht bietet unsere Seite für [Handwerksbetriebe (englische Seite)](/industries/trades).",
        },
        {
          t: "note",
          label: "Warnung",
          text: "Ein „optimierter“ Name wie „Schlüsseldienst Müller Notdienst München 24h“ ist kein Rankingtrick, sondern ein Verstoß. Wettbewerber können ihn melden. Welche Muster Google als Spam einstuft, zeigt [Spam in Google Maps erkennen](/blog/google-maps-spam-erkennen).",
        },
      ],
    },
    {
      id: "fall-b",
      title: "Fall B: Beim Namen sichtbar, bei Leistungssuchen nicht",
      answer:
        "Erscheint Ihr Profil bei der Namenssuche, ist es freigegeben. Fehlt es bei Suchen nach Leistung und Ort, entscheidet das lokale Ranking. Google nennt dafür drei Faktoren: Relevanz für die Suche, Entfernung zum Suchenden und Bekanntheit des Betriebs. Eine bessere Position lässt sich laut Google nicht kaufen.",
      blocks: [
        {
          t: "table",
          caption: "Symptom in Fall B und wahrscheinlicher Faktor",
          head: ["Symptom", "Wahrscheinlicher Faktor", "Was Sie prüfen"],
          rows: [
            ["Sichtbar bei „Kanzlei Huber“, unsichtbar bei „Anwalt Mietrecht“", "Relevanz", "Hauptkategorie, Leistungen, Beschreibung, Inhalte der Website"],
            ["Sichtbar in der Nähe des Betriebs, wenige Straßen weiter nicht mehr", "Entfernung", "Normal bei vielen Wettbewerbern, Sichtbarkeit im Raster messen"],
            ["Wettbewerber mit ähnlichem Angebot stehen stets vor Ihnen", "Bekanntheit", "Bewertungen, Erwähnungen, Links von lokalen Seiten"],
            ["Sichtbar in Maps, nicht im Kartenblock der Suche", "Alle drei", "Der Kartenblock zeigt meist nur drei Einträge, Maps zeigt mehr"],
          ],
        },
        {
          t: "p",
          text: "Die Entfernung können Sie nicht beeinflussen, nur korrekt angeben. Eine falsche Adresse oder ein falsch gesetzter Kartenpunkt verschlechtert sie allerdings. Prüfen Sie in Maps, ob die Markierung tatsächlich auf Ihrem Eingang liegt.",
        },
        {
          t: "p",
          text: "Wie Google die drei Faktoren gewichtet, legt Google nicht offen. Eine Einordnung der bekannten Signale finden Sie unter [Ranking-Faktoren in Google Maps](/blog/google-maps-seo-ranking-faktoren). Wie Sie Ihre Wettbewerber im Ort strukturiert vergleichen, zeigt die [Konkurrenzanalyse für Google Maps](/blog/google-maps-konkurrenzanalyse).",
        },
      ],
    },
    {
      id: "massnahmen-fall-b",
      title: "Was in Fall B hilft und was schadet",
      answer:
        "Google empfiehlt für ein besseres lokales Ranking: das Profil bestätigen, Adresse, Öffnungszeiten, Kategorie und Merkmale vollständig und aktuell halten, auf Rezensionen antworten und Fotos ergänzen. Schaden richten Abkürzungen an: Keywords im Namen, zusätzliche Profile, falsche Adressen und gekaufte Bewertungen. Sie bringen kurzfristig wenig und gefährden das ganze Profil.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Hauptkategorie schärfen",
              text: "Die Hauptkategorie beschreibt, was Ihr Betrieb ist. Eine zu allgemeine Wahl kostet Relevanz. Hilfe bei der Auswahl gibt der [Kategorien-Guide](/blog/google-business-kategorien-guide).",
            },
            {
              title: "Leistungen und Attribute ausfüllen",
              text: "Tragen Sie jede wichtige Leistung einzeln ein und nutzen Sie die passenden Merkmale, siehe [Attribute richtig nutzen](/blog/gbp-attribute-richtig-nutzen).",
            },
            {
              title: "Website und Profil abgleichen",
              text: "Eine eigene Seite je Leistung mit Ortsbezug und dieselben Firmendaten wie im Profil. Wie Sie Abweichungen finden, steht unter [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
            },
            {
              title: "Echte Bewertungen als Routine",
              text: "Bitten Sie nach jedem Auftrag um eine Bewertung, ohne Gegenleistung und ohne Auswahl. Der Ablauf steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
            },
            {
              title: "Öffnungszeiten aktuell halten",
              text: "Sonderzeiten an Feiertagen gehören ins Profil, siehe [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage).",
            },
          ],
        },
        {
          t: "p",
          text: "Die Suchbegriffe, für die Sie sichtbar sein wollen, finden Sie mit der Methode aus [Local SEO Keywords finden](/blog/local-seo-keywords-finden). Den vollständigen Optimierungsablauf beschreibt [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren), die Rankingseite vertieft [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern).",
        },
      ],
    },
    {
      id: "nie-oder-ploetzlich",
      title: "Nie sichtbar oder plötzlich verschwunden: der Unterschied",
      answer:
        "Dieser Artikel behandelt Profile, die nie erschienen sind oder derzeit gar nicht erscheinen. War ein Profil sichtbar und gut platziert und fällt dann plötzlich ab, sind die Ursachen oft andere: eine abgelehnte Änderung, eine Sperrung, ein Filter durch einen Nachbarbetrieb oder eine Änderung bei Google.",
      blocks: [
        {
          t: "table",
          caption: "Welcher Artikel passt zu Ihrer Lage",
          head: ["Ihre Lage", "Passender Artikel"],
          rows: [
            ["Neues Profil, noch nie gesehen", "Dieser Artikel, Abschnitte Selbsttest und Status"],
            ["Bestätigung klappt nicht", "[Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen)"],
            ["Profil war da, jetzt auch beim Namen weg", "Dieser Artikel, Abschnitt Sperrung und Duplikat"],
            ["Profil war gut platziert, jetzt bei Leistungssuchen weit hinten", "[Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden)"],
            ["Profil sichtbar, aber nie bei Leistungssuchen", "Dieser Artikel, Abschnitte Fall B"],
          ],
        },
      ],
    },
    {
      id: "checkliste",
      title: "Checkliste nach Symptom",
      answer:
        "Gehen Sie die Tabelle von oben nach unten durch. Die oberen Zeilen betreffen Fall A und müssen gelöst sein, bevor Maßnahmen für das Ranking in Fall B etwas bewirken. Notieren Sie Datum und Ergebnis jeder Prüfung, das hilft bei einem späteren Kontakt mit dem Support.",
      blocks: [
        {
          t: "table",
          caption: "Symptom, Prüfung und Lösung",
          head: ["Symptom", "Prüfen", "Lösung"],
          rows: [
            ["Profil auch beim Namen nicht zu finden, Aufforderung „Bestätigen“", "Status in der Verwaltung", "Bestätigung abschließen"],
            ["Bestätigung eingereicht, Profil noch unsichtbar", "Datum der Einreichung", "Prüfung abwarten, nichts ändern, kein zweites Profil"],
            ["Profil verschwunden, Hinweis auf Sperrung", "Benachrichtigung im Konto, Richtlinien", "Verstoß beheben, Einspruch mit Nachweisen"],
            ["Hinweis „Duplikat“", "Gibt es ein zweites Profil in Maps", "Inhaberschaft anfordern, Duplikat entfernen oder zusammenführen"],
            ["Neues Unternehmen, bestätigt, kaum sichtbar", "Datum der Bestätigung", "Bis zu einem Monat Zeit geben, Profil vollständig ausfüllen"],
            ["Änderung erscheint nicht", "Status der Änderung", "Ausstehend abwarten, bei „nicht genehmigt“ Angabe belegen oder Einspruch"],
            ["Beim Namen sichtbar, bei Leistungssuchen nicht", "Kategorie, Leistungen, Website", "Relevanz verbessern, Bewertungen aufbauen"],
            ["Nur nahe am Betrieb sichtbar", "Kartenpunkt, Wettbewerb im Umfeld", "Adresse prüfen, Sichtbarkeit im Raster messen"],
          ],
        },
        {
          t: "p",
          text: "Eine allgemeine Prüfliste für das gesamte Profil und die Website finden Sie in der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste). Häufige Fehler, die zu Fall A und Fall B führen, sammelt der Artikel [Local-SEO-Fehler](/blog/local-seo-fehler).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert es, bis ein neues Profil bei Google erscheint?",
      a: "Google schreibt, dass es bis zu einem Monat dauern kann, bis neue Unternehmen in Rankings aufgenommen werden. Voraussetzung ist eine abgeschlossene Bestätigung. Nennt eine Anleitung kürzere oder längere feste Fristen, stammen diese nicht von Google.",
    },
    {
      q: "Mein Profil erscheint bei meinem Namen, aber nicht bei „[Leistung] + [Ort]“. Ist es gesperrt?",
      a: "Nein. Ein gesperrtes Profil sehen andere Nutzer gar nicht, auch nicht bei der Namenssuche. Erscheint es beim Namen, ist es freigegeben, und es geht um das Ranking: Relevanz, Entfernung und Bekanntheit.",
    },
    {
      q: "Soll ich ein neues Profil anlegen, wenn das alte nicht erscheint?",
      a: "Nein. Ein Unternehmen darf nur ein Profil haben. Ein zweites wird als Duplikat markiert und laut Google weder in der Suche noch in Maps angezeigt. Während eines Einspruchs rät Google ausdrücklich davon ab.",
    },
    {
      q: "Wird ein Betrieb ohne Ladengeschäft angezeigt?",
      a: "Ja. Betriebe, die zu ihren Kunden fahren, blenden die Adresse aus und legen ein Einzugsgebiet fest. Das verlangt Google sogar, wenn an der Adresse kein Kundenverkehr stattfindet. Virtuelle Büros sind dagegen nicht zulässig.",
    },
    {
      q: "Helfen regelmäßige Beiträge, damit Google ein neues Profil schneller zeigt?",
      a: "Dafür gibt es keinen Beleg von Google. Beiträge, Fotos und Bewertungen können die Sichtbarkeit eines freigegebenen Profils unterstützen. Ein nicht bestätigtes, gesperrtes oder als Duplikat markiertes Profil wird dadurch nicht sichtbar.",
    },
    {
      q: "Können Sie mein Profil prüfen?",
      a: "Ja. Im kostenlosen Check sehen wir uns Profil und Website an und schicken Ihnen bis zu drei Punkte. Wenn Sie Korrekturen wünschen: Der Profil Quick-Fix kostet 79 €, die vollständige Profil-Optimierung 390 €.",
    },
  ],
  sources: [
    { title: "Ihr Unternehmen auf Google finden", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/145585?hl=de" },
    { title: "Understand what happens to your Business Profile edits", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3038311?hl=en" },
    { title: "Fix suspended or disabled profiles", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/4569145?hl=en" },
    { title: "Resolve duplicate profiles & ownership issues", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/12756178?hl=en" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
  ],
  related: [
    { slug: "ranking-ploetzlich-verschwunden", title: "Ranking plötzlich verschwunden" },
    { slug: "gbp-verifizierung-fehlgeschlagen", title: "Bestätigung des Profils fehlgeschlagen" },
    { slug: "gbp-suspendiert-reaktivieren", title: "Gesperrtes Profil reaktivieren" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Unsicher, ob Fall A oder Fall B?",
    text: "Wir prüfen, ob Ihr Profil freigegeben ist und woran es bei Leistungssuchen scheitert. Innerhalb von zwei Werktagen erhalten Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
