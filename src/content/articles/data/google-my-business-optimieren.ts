import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-my-business-optimieren",
  lang: "de",
  seoTitle: "Google Unternehmensprofil optimieren: Anleitung 2026",
  seoDescription:
    "Google Unternehmensprofil (früher Google My Business) Feld für Feld einrichten: Bestätigung, Name, Kategorien, Zeiten, Fotos, Beiträge, Zugriff und Sperrungen.",
  h1: "Google Unternehmensprofil optimieren: die praktische Anleitung",
  kicker: "Google Unternehmensprofil",
  lead:
    "Für Inhaber von Praxen, Hotels, Restaurants, Handwerksbetrieben und Geschäften, die ihr Profil bei Google selbst pflegen wollen. Sie gehen jedes Feld der Reihe nach durch und erfahren, was Google erlaubt, was es verbietet und welche Funktionen es nicht mehr gibt.",
  answer:
    "Das Google Unternehmensprofil, früher Google My Business, ist Ihr kostenloser Eintrag in der Google-Suche und in Maps. Optimieren heißt: das Profil übernehmen und bestätigen, Name, Kategorie, Adresse oder Einzugsgebiet und Öffnungszeiten nach Googles Richtlinien eintragen, Leistungen, Beschreibung und echte Fotos ergänzen, den Zugriff sauber regeln und die Leistungsdaten monatlich ansehen.",
  takeaways: [
    "Prüfen Sie zuerst, ob es schon ein Profil gibt, und übernehmen Sie es. Welche Bestätigungsmethode Sie bekommen, legt Google fest.",
    "Der Name muss dem echten Namen entsprechen. Zusätze wie Orte, Leistungen oder Slogans können laut Google zur Sperrung führen.",
    "Eine genaue Hauptkategorie und nur wenige weitere. Google erlaubt bis zu neun zusätzliche, empfiehlt aber so wenige wie möglich.",
    "Die Beschreibung hat höchstens 750 Zeichen und darf keine Links enthalten. Chat und Fragen und Antworten gibt es nicht mehr.",
    "Geben Sie Mitarbeitern und Agenturen eigene Zugänge als Administrator, nicht Ihr Passwort, und behalten Sie selbst die Rolle als primärer Inhaber.",
  ],
  publishedAt: "2026-01-07",
  updatedAt: "2026-10-10",
  readingTime: 13,
  sections: [
    {
      id: "was-ist-das-profil",
      title: "Was das Google Unternehmensprofil ist",
      answer:
        "Das Unternehmensprofil ist der Eintrag, den Menschen sehen, wenn sie Ihren Betrieb in der Google-Suche oder in Google Maps finden. Google hat Google My Business umbenannt, gemeint ist dasselbe Produkt, und es ist kostenlos.",
      blocks: [
        {
          t: "p",
          text: "Im Profil stehen Name, Adresse oder Einzugsgebiet, Telefonnummer, Website, Öffnungszeiten, Fotos und Bewertungen. Aus diesen Angaben baut Google den Eintrag im Kartenblock und in Maps. Sie bearbeiten das Profil direkt in der Google-Suche, wenn Sie mit dem verknüpften Google-Konto angemeldet sind, oder in der Google-Maps-App. Google prüft Änderungen, bevor sie sichtbar werden.",
        },
        {
          t: "p",
          text: "Dieser Artikel ist die Anleitung für die einzelnen Felder. Wie Google die Reihenfolge der Treffer festlegt und wie Sie Ihre Position ehrlich messen, steht im Artikel [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern). Den Gesamtzusammenhang mit Website, Firmendaten und Bewertungen erklärt der [Local-SEO-Leitfaden](/blog/ultimate-guide-local-seo).",
        },
        {
          t: "table",
          caption: "Die Felder im Überblick und wo Sie mehr dazu finden",
          head: ["Bereich", "Worauf es ankommt", "Abschnitt"],
          rows: [
            ["Bestätigung", "Bestehendes Profil übernehmen, Methode nach Googles Vorgabe", "Profil beanspruchen und bestätigen"],
            ["Name und Kategorien", "Echter Name, genaue Hauptkategorie", "Name und Kategorien"],
            ["Adresse, Telefon, Website", "Echter Standort oder Einzugsgebiet, lokale Nummer", "Adresse oder Einzugsgebiet"],
            ["Öffnungszeiten", "Regelzeiten, Feiertage, vorübergehend geschlossen", "Öffnungszeiten und Sonderzeiten"],
            ["Leistungen und Beschreibung", "Sachlich, ohne Links, höchstens 750 Zeichen", "Leistungen, Beschreibung, Attribute"],
            ["Fotos und Beiträge", "Echte Bilder, Beiträge als Kundeninformation", "Fotos, Videos und Beiträge"],
            ["Zugriff", "Eigene Rollen statt geteilter Passwörter", "Inhaber und Administratoren"],
          ],
        },
      ],
    },
    {
      id: "beanspruchen-bestaetigen",
      title: "Profil beanspruchen und bestätigen",
      answer:
        "Suchen Sie zuerst nach Ihrem Betrieb in Maps und übernehmen Sie ein vorhandenes Profil, statt ein zweites anzulegen. Danach bestätigen Sie es mit der Methode, die Google Ihnen anbietet: Telefon oder SMS, E-Mail, Videoaufnahme, Live-Videoanruf oder Postkarte.",
      blocks: [
        {
          t: "p",
          text: "Welche Methoden zur Wahl stehen, entscheidet Google für jeden Betrieb selbst. Sie können das nicht beeinflussen. Mit der Bestätigung zeigen Sie Google, dass Sie den Betrieb vertreten dürfen.",
        },
        {
          t: "table",
          caption: "Bestätigungsmethoden laut Google-Hilfe",
          head: ["Methode", "Was Sie brauchen", "Hinweis"],
          rows: [
            ["Telefon oder SMS", "Zugang zur geschäftlichen Nummer im Profil", "Der Code kommt nur an diese Nummer"],
            ["E-Mail", "Zugang zur Adresse, die Google bei der Bestätigung anzeigt", "Nicht frei wählbar"],
            ["Videoaufnahme", "Ein kurzes Video von Standort, Betrieb und Nachweis, dass Sie ihn führen", "Google empfiehlt diese Methode, wenn sie angeboten wird"],
            ["Live-Videoanruf", "Ein Gerät mit Kamera, Anwesenheit vor Ort", "Nur während Ihrer Öffnungszeiten möglich"],
            ["Postkarte", "Briefkasten an der Geschäftsadresse", "Die meisten Codes kommen laut Google innerhalb von 14 Tagen, der Code läuft nach 30 Tagen ab"],
          ],
        },
        {
          t: "h3",
          text: "Was bei der Bestätigung per Video zu sehen sein sollte",
        },
        {
          t: "ul",
          items: [
            "**Der Ort:** Straßenschild mit Straßennamen, Hausnummer oder benachbarte Geschäfte.",
            "**Der Betrieb:** Schild, Produkte, Fahrzeug mit Firmenbeschriftung, Werkzeug oder Werbematerial.",
            "**Ihr Zugang:** Bereiche nur für Mitarbeiter wie Kasse, Küche oder Lager, nicht vertrauliche Geschäftsunterlagen oder das Aufschließen der Tür mit Ihrem Schlüssel.",
          ],
        },
        {
          t: "p",
          text: "Nach dem Einreichen prüft Google die Angaben, laut Hilfe meist innerhalb von bis zu fünf Werktagen, selten länger. Wenn Sie nach der Bestätigung umziehen, müssen Sie das Profil erneut bestätigen. Hängt die Bestätigung fest, hilft der Artikel [Verifizierung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
        {
          t: "note",
          label: "Doppelte Profile vermeiden",
          text: "Google erlaubt ein Profil je Standort. Legen Sie kein neues Profil an, nur weil das alte von einem früheren Mitarbeiter oder einer Agentur verwaltet wurde. Fordern Sie stattdessen den Zugriff an. Wie Sie bereits vorhandene Duplikate bereinigen, steht unter [Duplikate entfernen](/blog/duplicate-listing-entfernen).",
        },
      ],
    },
    {
      id: "name-kategorien",
      title: "Name und Kategorien",
      answer:
        "Tragen Sie den Namen so ein, wie er auf Schild, Briefpapier und Website steht. Wählen Sie die genaueste Hauptkategorie für Ihr Kerngeschäft und nur so viele weitere, wie wirklich zutreffen.",
      blocks: [
        {
          t: "p",
          text: "Laut Googles Richtlinien dürfen Sie dem Namen keine unnötigen Informationen hinzufügen: keine Slogans, Orte, Leistungen, Telefonnummern, Webadressen oder Hinweise auf Öffnungszeiten. Google nennt ausdrücklich, dass Profile deswegen gesperrt werden können. Auch Großbuchstaben in ganzen Wörtern und Sonderzeichen sind nur erlaubt, wenn sie nachweislich zum offiziellen Namen gehören.",
        },
        {
          t: "table",
          caption: "Beispiele für den Firmennamen",
          head: ["Erlaubt", "Nicht erlaubt"],
          rows: [
            ["Zahnarztpraxis Dr. Huber", "Zahnarztpraxis Dr. Huber Bleaching Implantate München"],
            ["Hotel Alpenblick", "Hotel Alpenblick Wellness Zell am See Bestpreis"],
            ["Malerbetrieb Gruber", "MALERBETRIEB GRUBER 24h Notdienst"],
          ],
        },
        {
          t: "h3",
          text: "Kategorien",
        },
        {
          t: "p",
          text: "Die erste Kategorie ist die Hauptkategorie. Dazu können Sie bis zu neun weitere wählen. Google verlangt, so wenige Kategorien wie möglich zu nehmen und sie so genau wie möglich auf Ihr Kerngeschäft zu beziehen. Eine Kategorie beschreibt, was Ihr Betrieb ist, nicht was er hat. Ein Hotel mit Restaurant für Hausgäste ist ein Hotel. Kategorien sind kein Ersatz für Suchbegriffe.",
        },
        {
          t: "p",
          text: "Welche Begriffe Ihre Kunden tatsächlich nutzen, finden Sie mit der Methode aus [Local SEO Keywords finden](/blog/local-seo-keywords-finden). Diese Begriffe gehören in Leistungen und Website, nicht in Name oder Kategorienliste. Mehr zur Auswahl im [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
        },
      ],
    },
    {
      id: "adresse-einzugsgebiet",
      title: "Adresse oder Einzugsgebiet, Telefon und Website",
      answer:
        "Mit Kundenverkehr vor Ort tragen Sie Ihre echte Adresse ein. Fahren Sie zu Ihren Kunden, blenden Sie die Adresse aus und geben ein Einzugsgebiet an, das laut Google nicht weiter als etwa zwei Autostunden reicht.",
      blocks: [
        {
          t: "p",
          text: "Ein Profil gibt es nur für einen tatsächlichen Standort. Postfächer und virtuelle Büros sind laut Google nicht zulässig. Ein Coworking-Büro ist nur erlaubt, wenn es beschildert ist, während der Öffnungszeiten besetzt ist und dort Kunden empfangen werden. Das Einzugsgebiet legen Sie über Städte, Postleitzahlen oder andere Gebiete fest.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Adresse prüfen",
              text: "Schreibweise wie im Impressum, Kartenpunkt auf dem richtigen Eingang. Gäste und Patienten folgen der Route aus Maps.",
            },
            {
              title: "Einzugsgebiet ehrlich wählen",
              text: "Nur Orte, die Sie tatsächlich bedienen. Für Betriebe ohne Ladenlokal beschreibt der Artikel [Local SEO für Handwerker](/blog/local-seo-handwerker) das Vorgehen genauer.",
            },
            {
              title: "Lokale Telefonnummer",
              text: "Google verlangt eine Nummer, die der Betrieb selbst verwaltet. Callcenter, Weiterleitungen ohne direkte Verbindung und Sonderrufnummern sind nicht zulässig. Neben der Hauptnummer können Sie zwei weitere Nummern angeben.",
            },
            {
              title: "Website auf die richtige Seite",
              text: "Verlinken Sie eine Seite, die genau diesen Standort zeigt, bei mehreren Standorten die jeweilige Standortseite. Weiterleitungen auf Social-Media-Profile statt einer Website erlaubt Google nicht.",
            },
          ],
        },
        {
          t: "p",
          text: "Dieselben Angaben sollten auf Website, Impressum und in Verzeichnissen gleich lauten. Wie Sie Abweichungen finden, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
      ],
    },
    {
      id: "oeffnungszeiten",
      title: "Öffnungszeiten und Sonderzeiten",
      answer:
        "Tragen Sie die regulären Zeiten ein und pflegen Sie Feiertage, Betriebsurlaub und Saisonzeiten als besondere Öffnungszeiten. Bei längerer Schließung markieren Sie den Betrieb als vorübergehend geschlossen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Reguläre Zeiten:** die Zeiten, zu denen Kunden kommen oder anrufen können.",
            "**Besondere Öffnungszeiten:** für Feiertage, Brückentage und kurze Schließungen. Die regulären Zeiten bleiben dabei unverändert.",
            "**Zusätzliche Zeiten:** für einzelne Leistungen mit eigenen Zeiten, etwa Abholung, Lieferung oder Frühstück, soweit Ihre Kategorie das anbietet.",
            "**Vorübergehend geschlossen:** für Saisonpausen und längere Schließungen, statt das Profil zu löschen.",
          ],
        },
        {
          t: "note",
          label: "Nicht jeder Betrieb gibt Zeiten an",
          text: "Laut Googles Richtlinien sollen manche Betriebe keine Öffnungszeiten angeben, darunter Hotels und Betriebe, die nur nach Terminvereinbarung arbeiten. Mehr zu den Besonderheiten von Unterkünften im Artikel [Local SEO für Hotels](/blog/local-seo-hotels).",
        },
        {
          t: "p",
          text: "Falsche Zeiten führen dazu, dass Kunden vor verschlossener Tür stehen und das in Bewertungen schreiben. Tragen Sie die Feiertage des nächsten Quartals deshalb vorab ein. Für Gastronomie mit wechselnden Zeiten gibt der Artikel [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants) weitere Hinweise.",
        },
      ],
    },
    {
      id: "leistungen-beschreibung",
      title: "Leistungen, Beschreibung, Attribute und Links",
      answer:
        "Tragen Sie jede Leistung, die Kunden gezielt suchen, einzeln ein. Die Beschreibung erklärt in höchstens 750 Zeichen sachlich, was Sie anbieten, ohne Links und ohne Werbeaktionen.",
      blocks: [
        {
          t: "h3",
          text: "Leistungen und Produkte",
        },
        {
          t: "p",
          text: "Je nach Kategorie können Sie im Profil Leistungen eintragen. Halten Sie die Bezeichnungen kurz und sachlich, etwa „Badsanierung“ oder „Professionelle Zahnreinigung“, und ergänzen Sie eine kurze Beschreibung. Ein Handel kann zusätzlich Produkte zeigen, ein Restaurant pflegt seine Speisekarte im Menü-Editor, der laut Google nur für Gastronomie und Hotellerie verfügbar ist.",
        },
        {
          t: "h3",
          text: "Beschreibung",
        },
        {
          t: "p",
          text: "Die Beschreibung darf laut Google höchstens 750 Zeichen lang sein und keine URLs oder HTML enthalten. Google empfiehlt, sich auf das Unternehmen zu konzentrieren und nicht auf Aktionen, Preise und Angebote. Gut funktioniert dieser Aufbau:",
        },
        {
          t: "ol",
          items: [
            "Was Sie anbieten und für wen, in einem Satz.",
            "Was Sie unterscheidet: Spezialisierung, Erfahrung, Sprachen, Ausstattung.",
            "Wo Sie arbeiten oder wie man Sie erreicht, ohne Aufzählung von Orten.",
            "Ein praktischer Hinweis, etwa Parkplätze, Termine oder Barrierefreiheit.",
          ],
        },
        {
          t: "h3",
          text: "Attribute",
        },
        {
          t: "p",
          text: "Attribute sind Merkmale wie WLAN, Sitzplätze im Freien, Zahlungsarten oder ein rollstuhlgerechter Eingang. Welche angeboten werden, hängt von Ihrer Kategorie ab. Wählen Sie nur, was zutrifft. Ein falsches Attribut zur Barrierefreiheit führt zu Ärger bei genau den Gästen, die sich darauf verlassen.",
        },
        {
          t: "h3",
          text: "Links für Termine, Reservierungen und Bestellungen",
        },
        {
          t: "p",
          text: "Je nach Kategorie können Sie im Profil Links für Terminbuchung, Tischreservierung oder Bestellung hinterlegen. Führen Sie diese direkt auf die passende Seite Ihres Buchungssystems, nicht auf die Startseite. Prüfen Sie in der Suche, welche Buchungslinks bei Ihrem Profil tatsächlich erscheinen und ob sie funktionieren.",
        },
      ],
    },
    {
      id: "fotos-videos",
      title: "Fotos und Videos",
      answer:
        "Laden Sie eigene, aktuelle Bilder hoch, an denen Kunden Ihren Betrieb wiedererkennen: Logo, Außenansicht mit Eingang, Räume, Team und typische Arbeiten. Bilddatenbank-Fotos helfen niemandem bei der Entscheidung.",
      blocks: [
        {
          t: "table",
          caption: "Welche Bilder sich lohnen",
          head: ["Motiv", "Warum"],
          rows: [
            ["Logo", "Wiedererkennung im Profil"],
            ["Außenansicht und Eingang", "Kunden finden die Tür, besonders bei Hinterhof oder Einkaufszentrum"],
            ["Räume", "Zimmer, Gastraum, Behandlungsraum, Werkstatt"],
            ["Team", "Gesichter schaffen Vertrauen, mit Einverständnis der Abgebildeten"],
            ["Arbeiten und Produkte", "Zeigen, was Sie konkret leisten"],
          ],
        },
        {
          t: "p",
          text: "Wie andere Änderungen prüft Google auch neue Inhalte, bevor sie sichtbar werden. Ersetzen Sie veraltete Bilder, wenn sich Räume, Fassade oder Team ändern, damit Kunden vor Ort nicht überrascht werden. Tipps zu Motiven und Technik finden Sie im Artikel [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
    {
      id: "beitraege",
      title: "Beiträge und Funktionen, die es nicht mehr gibt",
      answer:
        "Beiträge informieren Kunden in Suche und Maps über Neuigkeiten, Angebote und Veranstaltungen. Dass sie das Ranking verbessern, bestätigt Google nicht. Chat und Fragen und Antworten im Profil gibt es nicht mehr.",
      blocks: [
        {
          t: "table",
          caption: "Beitragsarten laut Google-Hilfe",
          head: ["Art", "Wofür", "Pflichtangaben"],
          rows: [
            ["Aktuelles", "Neuigkeiten, geänderte Abläufe, neue Leistung", "Text, optional Bild und Button mit Link"],
            ["Angebot", "Aktionen und Rabatte", "Titel und Zeitraum"],
            ["Veranstaltung", "Termine wie Tag der offenen Tür, Weinabend, Kurs", "Titel, Start und Ende"],
          ],
        },
        {
          t: "p",
          text: "Beiträge, die älter als sechs Monate sind, archiviert Google, sofern Sie keinen Zeitraum festlegen. Sie lassen sich vorplanen und wiederholen. Google prüft Beiträge vor der Veröffentlichung. Eine Telefonnummer im Text kann zur Ablehnung führen, wenn Google sie nicht Ihrem Betrieb zuordnen kann. Schreiben Sie Beiträge, wenn Sie etwas mitzuteilen haben, nicht nach einem festen Takt.",
        },
        {
          t: "note",
          label: "Veraltete Ratschläge",
          text: "Die Chat-Funktion im Unternehmensprofil wurde am 31. Juli 2024 eingestellt. Die öffentliche Funktion „Fragen und Antworten“ hat Google Ende 2025 durch eine KI-Funktion ersetzt, die aus Ihren Profilangaben und Rezensionen antwortet. Umso wichtiger sind vollständige Leistungen, Beschreibung und Attribute. Anleitungen, die Ihnen noch Chat oder selbst gestellte Fragen empfehlen, sind nicht aktuell.",
        },
        {
          t: "p",
          text: "Bewertungen sind kein Profilfeld, das Sie ausfüllen, gehören aber zum Profil. Wie Sie regelkonform um Bewertungen bitten und darauf antworten, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "leistungsdaten",
      title: "Leistungsdaten lesen",
      answer:
        "Unter „Leistung“ zeigt Google, wie oft Ihr Profil gesehen wurde, mit welchen Suchbegriffen und was Menschen danach getan haben: anrufen, Route planen, Website besuchen oder buchen.",
      blocks: [
        {
          t: "table",
          caption: "Kennzahlen in den Leistungsdaten (je nach Branche)",
          head: ["Kennzahl", "Was sie zeigt", "Was Sie damit tun"],
          rows: [
            ["Aufrufe", "Einzelne Nutzer, die das Profil gesehen haben, höchstens einmal pro Tag gezählt", "Entwicklung über Monate vergleichen"],
            ["Suchanfragen", "Begriffe, bei denen Ihr Profil angezeigt wurde", "Fehlende Leistungen erkennen und eintragen"],
            ["Anrufe", "Anrufe über den Button im Profil", "Mit Ihrer Telefonstatistik abgleichen"],
            ["Routen", "Routenanfragen zu Ihrem Standort", "Für Betriebe mit Kundenverkehr die wichtigste Zahl"],
            ["Website-Klicks", "Klicks auf den Website-Link", "Link mit UTM-Parameter versehen und in der Web-Analyse verfolgen"],
            ["Buchungen, Menü, Angebote", "Nur bei passenden Branchen", "Prüfen, ob Buchungslinks genutzt werden"],
          ],
        },
        {
          t: "p",
          text: "Die Suchanfragen werden laut Google zu Beginn jedes Monats aktualisiert und können bis zu fünf Tage später erscheinen. Notieren Sie die Zahlen einmal im Monat. Für einen Blick auf Ihre Sichtbarkeit an verschiedenen Orten Ihres Einzugsgebiets reicht das nicht, dafür beschreibt der [Ranking-Leitfaden](/blog/google-maps-ranking-verbessern) ein Messraster. Welche kostenlosen Werkzeuge daneben helfen, zeigt [Kostenloses SEO](/blog/kostenloses-seo-guide).",
        },
      ],
    },
    {
      id: "zugriff",
      title: "Inhaber und Administratoren: den Zugriff regeln",
      answer:
        "Jedes Profil hat genau einen primären Inhaber, dazu weitere Inhaber und Administratoren. Geben Sie Mitarbeitern und Dienstleistern eine eigene Rolle über ihre E-Mail-Adresse, statt Zugangsdaten weiterzugeben.",
      blocks: [
        {
          t: "table",
          caption: "Rollen im Unternehmensprofil",
          head: ["Rolle", "Darf", "Darf nicht"],
          rows: [
            ["Primärer Inhaber", "Alles, auch die Inhaberschaft übertragen", "Sich selbst entfernen, bevor die Inhaberschaft übertragen ist"],
            ["Inhaber", "Volle Kontrolle, Nutzer hinzufügen und entfernen, Profil löschen", "Nichts Wesentliches eingeschränkt"],
            ["Administrator", "Profil bearbeiten wie ein Inhaber", "Nutzer hinzufügen oder entfernen, Profil löschen"],
          ],
        },
        {
          t: "p",
          text: "Nutzer fügen Sie im Profil über das Menü mit den drei Punkten unter „Einstellungen für das Unternehmensprofil“ und „Personen und Zugriff“ hinzu. Neue Inhaber und Administratoren müssen laut Google sieben Tage warten, bevor sie bestimmte Funktionen nutzen können, etwa andere Nutzer entfernen oder die primäre Inhaberschaft übernehmen.",
        },
        {
          t: "note",
          label: "Praxis-Tipp",
          text: "Behalten Sie als Inhaber selbst die Rolle des primären Inhabers. Eine Agentur bekommt die Rolle Administrator. Wenn die Zusammenarbeit endet, entfernen Sie den Zugang, und das Profil bleibt bei Ihnen.",
        },
      ],
    },
    {
      id: "sperrung",
      title: "Sperrung: Gründe und Einspruch",
      answer:
        "Gesperrt werden Profile, die gegen Googles Richtlinien verstoßen, etwa durch Zusätze im Namen, virtuelle Adressen oder doppelte Profile. Beheben Sie zuerst den Verstoß, dann legen Sie über Googles Einspruchstool Einspruch ein und reichen Nachweise ein.",
      blocks: [
        {
          t: "table",
          caption: "Verstöße gegen Googles Richtlinien, die zu Sperrungen führen können",
          head: ["Auslöser", "Was Google verlangt"],
          rows: [
            ["Orte, Leistungen oder Slogans im Namen", "Name wie im echten Leben"],
            ["Postfach oder virtuelles Büro als Adresse", "Ein Profil nur für einen tatsächlichen Standort"],
            ["Mehrere Profile für denselben Standort", "Ein Profil je Standort"],
            ["Einzugsgebiet weit über das tatsächliche hinaus", "Nicht mehr als etwa zwei Autostunden"],
            ["Callcenter- oder Sonderrufnummer", "Eine lokale Nummer, die der Betrieb selbst verwaltet"],
          ],
        },
        {
          t: "steps",
          items: [
            {
              title: "Verstoß beheben",
              text: "Laut Google muss das Profil alle Richtlinien erfüllen, bevor Sie Einspruch einlegen. Im Einspruchstool sehen Sie den Grund der Einschränkung und die betroffene Richtlinie.",
            },
            {
              title: "Nachweise vorbereiten",
              text: "Zum Beispiel Gewerbeanmeldung, Handelsregisterauszug, Steuerbescheinigung oder eine Strom- oder Telefonrechnung. Name und Adresse müssen mit dem Profil übereinstimmen.",
            },
            {
              title: "Einspruch einlegen",
              text: "Mit dem Google-Konto anmelden, das mit dem Profil verknüpft ist, Profil auswählen, „Einspruch einlegen“ wählen. Ein geöffnetes Nachweisformular müssen Sie innerhalb von 60 Minuten senden.",
            },
            {
              title: "Abwarten, kein neues Profil anlegen",
              text: "Legen Sie während der Prüfung kein neues Profil für denselben Betrieb an. Die Entscheidung kommt per E-Mail.",
            },
          ],
        },
        {
          t: "p",
          text: "Eine ausführliche Anleitung für den Fall der Fälle finden Sie unter [Profil gesperrt: so reaktivieren Sie es](/blog/gbp-suspendiert-reaktivieren). Ob Ihr Profil heute Angaben enthält, die zu einer Sperrung führen können, prüfen wir im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ist das Google Unternehmensprofil kostenlos?",
      a: "Ja. Anlegen, Bestätigen und Pflegen kosten nichts. Bezahlt werden nur Anzeigen, die getrennt vom Profil gebucht werden.",
    },
    {
      q: "Wie lange dauert die Bestätigung?",
      a: "Nach dem Einreichen prüft Google laut Hilfe meist innerhalb von bis zu fünf Werktagen. Bei der Postkarte kommen die meisten Codes innerhalb von 14 Tagen an, der Code läuft nach 30 Tagen ab.",
    },
    {
      q: "Darf ich meinen Ort oder meine Leistung in den Namen schreiben?",
      a: "Nur, wenn er genau so offiziell heißt und so auf Schild und Briefpapier steht. Zusätze verstoßen gegen Googles Richtlinien und können zur Sperrung führen. Leistungen gehören in die Leistungsliste und auf die Website.",
    },
    {
      q: "Ich arbeite von zu Hause und fahre zu Kunden. Muss meine Adresse sichtbar sein?",
      a: "Nein. Blenden Sie die Adresse aus und geben Sie ein Einzugsgebiet an. Bestätigen müssen Sie den Standort trotzdem. Ein virtuelles Büro oder Postfach als Ersatz ist nicht zulässig.",
    },
    {
      q: "Was mache ich, wenn eine frühere Agentur mein Profil verwaltet?",
      a: "Fordern Sie den Zugriff an oder bitten Sie die Agentur, Sie als Inhaber einzutragen und die primäre Inhaberschaft zu übertragen. Legen Sie kein zweites Profil an. Neue Inhaber müssen sieben Tage warten, bevor sie die primäre Inhaberschaft übernehmen können.",
    },
    {
      q: "Was kostet es, das Profil professionell prüfen und korrigieren zu lassen?",
      a: "Selbst gemacht kostet es nur Zeit. Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Umfang und Preis stehen vor dem Start fest, eine bestimmte Position versprechen wir nicht. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Unternehmen bei Google bestätigen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7107242?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Unternehmensprofil bearbeiten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
    { title: "Beiträge in Ihrem Unternehmensprofil erstellen und verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7342169?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Nutzer eines Unternehmensprofils verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3403100?hl=de" },
    { title: "Einspruch gegen eingeschränkte oder gesperrte Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4569145?hl=de" },
    { title: "Google quietly kills Q&A for an AI button most won't use", publisher: "PPC Land", url: "https://ppc.land/google-quietly-kills-q-a-for-an-ai-button-most-wont-use/" },
  ],
  related: [
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "google-bewertungen-bekommen", title: "Mehr Google-Bewertungen bekommen" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "local-seo-handwerker", title: "Local SEO für Handwerker" },
  ],
  cta: {
    title: "Ist Ihr Profil vollständig und regelkonform?",
    text: "Wir sehen uns Ihr Google Unternehmensprofil Feld für Feld an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst korrigieren sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
