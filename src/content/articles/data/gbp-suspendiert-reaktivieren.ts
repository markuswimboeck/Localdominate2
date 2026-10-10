import type { V4Article } from "../types";

const article: V4Article = {
  slug: "gbp-suspendiert-reaktivieren",
  lang: "de",
  seoTitle: "Google-Profil gesperrt: Einspruch Schritt für Schritt",
  seoDescription:
    "Google Unternehmensprofil gesperrt, deaktiviert oder eingeschränkt? Was der Status bedeutet, welche Nachweise Google annimmt und wie der Einspruch abläuft.",
  h1: "Google Unternehmensprofil gesperrt: Status verstehen und Einspruch einlegen",
  kicker: "Fehlerbehebung",
  lead:
    "Für Inhaber, deren Google Unternehmensprofil gesperrt, deaktiviert oder in einzelnen Funktionen eingeschränkt wurde. Sie erfahren, was Googles Status genau bedeutet, welche Verstöße typisch sind, welche Nachweise Google annimmt und wie Sie den Einspruch so einreichen, dass er geprüft werden kann.",
  answer:
    "Ein gesperrtes Profil ist laut Google nicht mehr öffentlich sichtbar, ein deaktiviertes erfüllt die Qualitätskriterien nicht. In beiden Fällen gilt dieselbe Reihenfolge: zuerst den Verstoß beheben, dann im Einspruchstool von Google Einspruch einlegen und Nachweise wie Gewerbeanmeldung oder Stromrechnung hochladen. Legen Sie währenddessen kein neues Profil an und zahlen Sie niemandem Geld für eine Reaktivierung.",
  takeaways: [
    "Google unterscheidet gesperrte Profile (nicht mehr öffentlich sichtbar), deaktivierte Profile (Qualitätsverstöße) und Einschränkungen einzelner Funktionen, etwa bei Rezensionen.",
    "Ist Ihr Google-Konto eingeschränkt, sind alle Profile darin gesperrt. Dann legen Sie zuerst gegen die Kontoeinschränkung Einspruch ein, danach für die einzelnen Profile.",
    "Google nimmt als Nachweis unter anderem Gewerbeanmeldung, Gewerbeerlaubnis, Steuerbescheinigungen und Strom-, Telefon-, Wasser- oder Internetrechnungen an. Name und Adresse müssen zum Profil passen.",
    "Ein geöffnetes Nachweisformular müssen Sie innerhalb von 60 Minuten absenden. Eine feste Bearbeitungszeit nennt Google nicht, die Entscheidung kommt per E-Mail.",
    "Ein neues Profil für denselben Betrieb oder ein bezahlter „Entsperr-Service“ machen die Lage schlimmer. Google nimmt für eine Reaktivierung kein Geld.",
  ],
  publishedAt: "2025-01-10",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "status-verstehen",
      title: "Gesperrt, deaktiviert, eingeschränkt: was Ihr Status bedeutet",
      answer:
        "Google verwendet drei Begriffe. Gesperrt heißt, das Profil ist nicht mehr öffentlich sichtbar. Deaktiviert heißt, der Standort erfüllt die Qualitätskriterien nicht. Eingeschränkt sind einzelne Funktionen, etwa Rezensionen, oder ein ganzes Konto. Der genaue Grund steht im Einspruchstool.",
      blocks: [
        {
          t: "table",
          caption: "Status von Unternehmensprofilen laut Google-Hilfe",
          head: ["Status", "Was Google darunter versteht", "Was Sie noch tun können"],
          rows: [
            ["Gesperrt", "Das Profil oder Konto hat gegen die Richtlinien verstoßen und ist nicht mehr öffentlich sichtbar.", "Inhaber und Administratoren können das Profil weiter bearbeiten und eine Reaktivierung beantragen."],
            ["Deaktiviert", "Der Standort erfüllt die Qualitätskriterien nicht.", "Reaktivierung beantragen, sobald das Profil den Richtlinien entspricht und alle erforderlichen Angaben enthält."],
            ["Eingeschränkt (Rezensionen)", "Wegen gefälschter Interaktionen können zeitweise keine neuen Rezensionen erscheinen, bestehende werden ausgeblendet oder ein Warnhinweis wird angezeigt.", "Einspruch über Googles Formular zur erneuten Prüfung einlegen."],
            ["Konto eingeschränkt", "Das Google-Konto wurde wegen wiederholter Verstöße eingeschränkt. Alle Profile darin sind gesperrt.", "Zuerst gegen die Kontoeinschränkung Einspruch einlegen, dann für die Profile."],
          ],
        },
        {
          t: "note",
          label: "Begriffe aus Foren",
          text: "„Soft Suspension“ und „Hard Suspension“ sind keine Begriffe von Google, sondern Bezeichnungen aus der Local-SEO-Szene für deaktivierte und gesperrte Profile. Verlassen Sie sich auf den Status und den Grund, den Google Ihnen im Einspruchstool anzeigt.",
        },
        {
          t: "p",
          text: "Ist Ihr Profil nicht gesperrt, aber trotzdem in der Suche verschwunden, liegt die Ursache meist woanders. Dann helfen die Artikel [Profil nicht in der Suche sichtbar](/blog/gbp-nicht-in-suche-sichtbar) und [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden). Scheitert schon die Bestätigung, lesen Sie [Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
      ],
    },
    {
      id: "ursachen",
      title: "Häufige Ursachen nach Googles Richtlinien",
      answer:
        "Die meisten Sperrungen gehen auf wenige Regeln zurück: Zusätze im Firmennamen, eine Adresse ohne echten Betrieb vor Ort, ein zu großes Einzugsgebiet, mehrere Profile für denselben Betrieb, Inhalte gegen Googles Inhaltsrichtlinien und gefälschte oder erkaufte Rezensionen.",
      blocks: [
        {
          t: "table",
          caption: "Typische Auslöser und die Regel dahinter",
          head: ["Auslöser", "Was Googles Richtlinien sagen"],
          rows: [
            ["Orte, Leistungen oder Slogans im Namen", "Unnötige Zusätze im Namen sind nicht erlaubt und können laut Google zur Sperrung führen."],
            ["Virtuelles Büro, Postfach, Briefkastenadresse", "Ein Betrieb, der eine Adresse nur mietet und dort nicht arbeitet, hat keinen Anspruch auf ein Profil."],
            ["Coworking-Platz ohne Kundenbetrieb", "Nur zulässig mit Schild, persönlicher Betreuung von Kunden und Personal vor Ort während der Öffnungszeiten."],
            ["Einzugsgebiet weit über das tatsächliche hinaus", "Die Grenzen sollen in der Regel nicht weiter als etwa zwei Autostunden vom Standort reichen."],
            ["Mehrere Profile für einen Betrieb oder Standort", "Ein Profil je Betrieb und Standort. Einzelne Fachleute sollen keine Profile je Spezialisierung anlegen."],
            ["Callcenter-, Weiterleitungs- oder Sondernummer", "Die Nummer muss zum Standort gehören und direkt vom Betrieb verwaltet werden. Sonderrufnummern sind nicht erlaubt."],
            ["Gekaufte, belohnte oder selbst geschriebene Rezensionen", "Verstößt gegen die Richtlinie zu gefälschten Interaktionen und kann zu Einschränkungen des Profils führen."],
          ],
        },
        {
          t: "p",
          text: "Google behält sich laut seinen Richtlinien vor, den Zugang zu Profilen bei Verstößen zu sperren. In der Richtlinienübersicht nennt Google außerdem das Löschen oder Deaktivieren von Profilen, die am angegebenen Ort nicht existieren. Wie Name, Kategorie und Adresse regelkonform aussehen, steht im Artikel [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren#name-kategorien). Die passende Kategorie finden Sie mit dem [Kategorien-Guide](/blog/google-business-kategorien-guide).",
        },
        {
          t: "note",
          label: "Betriebe ohne Ladenlokal",
          text: "Handwerker und mobile Dienste blenden die Adresse aus und geben ein Einzugsgebiet an. Eine sichtbare Wohnadresse ohne Kundenverkehr oder eine Liste aller Städte im Umkreis sind häufige Fehler. Mehr dazu in [Local SEO für Handwerker](/blog/local-seo-handwerker) und auf unserer englischen Seite [für Handwerksbetriebe](/industries/trades).",
        },
      ],
    },
    {
      id: "konto-oder-profil",
      title: "Konto eingeschränkt oder einzelnes Profil gesperrt",
      answer:
        "Prüfen Sie zuerst, ob nur ein Profil betroffen ist oder Ihr ganzes Google-Konto. Bei einer Kontoeinschränkung sind alle Profile darin gesperrt und Sie können keine neuen anlegen oder beanspruchen. Dann legen Sie zuerst auf der Seite für Kontoeinschränkungen Einspruch ein.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Ein Profil gesperrt oder deaktiviert:** Einspruch direkt für dieses Profil im Einspruchstool.",
            "**Konto eingeschränkt:** Laut Google zuerst Einspruch auf der Seite „Meine Kontoeinschränkungen“ einlegen und dort den Stand verfolgen. Erst nach Aufhebung der Kontoeinschränkung legen Sie Einspruch für die einzelnen Profile ein.",
            "**Konto eines anderen Google-Produkts eingeschränkt:** Wurde das Profil über ein anderes Google-Konto angelegt und dieses eingeschränkt, muss laut Richtlinienübersicht zuerst dieses Konto reaktiviert werden.",
            "**Konto eines Administrators entfernt:** Dann verliert nur diese Person den Zugriff. Die Standorte selbst sind laut Google nicht betroffen.",
          ],
        },
        {
          t: "p",
          text: "Wird das Konto des Inhabers entfernt, entfernt Google laut Hilfe alle Standorte dieses Inhabers. Wird das Konto reaktiviert, kommen die Standorte zurück. Deshalb lohnt es sich, Inhaber- und Administratorrollen sauber zu trennen, wie im Abschnitt [Zugriff regeln](/blog/google-my-business-optimieren#zugriff) beschrieben. Wer viele Standorte verwaltet, findet die Organisation in [mehrere Standorte verwalten](/blog/gbp-mehrere-standorte).",
        },
      ],
    },
    {
      id: "verstoss-beheben",
      title: "Vor dem Einspruch: den Verstoß beheben",
      answer:
        "Google verlangt, dass Ihr Profil alle Richtlinien erfüllt, bevor Sie Einspruch einlegen. Lesen Sie den Grund im Einspruchstool, gleichen Sie das Profil mit Ihrem Betrieb vor Ort ab und korrigieren Sie nur, was tatsächlich falsch ist.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Grund und Richtlinie lesen",
              text: "Im Einspruchstool zeigt Google das betroffene Profil, den Grund der Maßnahme und einen Link zur verletzten Richtlinie. Notieren Sie beides und machen Sie Bildschirmfotos für Ihre Unterlagen.",
            },
            {
              title: "Name mit Schild und Unterlagen abgleichen",
              text: "Der Profilname muss so lauten wie auf Schild, Rechnung und im Impressum. Entfernen Sie Orte, Leistungen und Slogans. Rechtsformen und Sonderzeichen dürfen nur bleiben, wenn sie nachweislich zum Namen gehören.",
            },
            {
              title: "Adresse und Einzugsgebiet prüfen",
              text: "Arbeiten Sie an der Adresse mit Schild und empfangen Sie dort Kunden? Wenn nicht, blenden Sie die Adresse aus und geben ein realistisches Einzugsgebiet an. Eine gemietete Briefkastenadresse lässt sich nicht nachbessern, sie ist nicht zulässig.",
            },
            {
              title: "Doppelte Profile suchen",
              text: "Suchen Sie in Google Maps nach Name, Adresse und Telefonnummer. Wie Sie Duplikate zusammenführen oder entfernen lassen, steht unter [Duplikate entfernen](/blog/duplicate-listing-entfernen).",
            },
            {
              title: "Telefonnummer und Links prüfen",
              text: "Eine lokale Nummer, die Sie selbst verwalten, und eine Website, die zu diesem Standort gehört. Keine Weiterleitungen und keine Sonderrufnummern.",
            },
            {
              title: "Inhalte und Rezensionen prüfen",
              text: "Entfernen Sie Fotos und Beiträge, die nicht Ihren Betrieb zeigen. Haben Sie Bewertungen belohnt oder Mitarbeiter um Bewertungen gebeten, stellen Sie das ein und dokumentieren Sie, was Sie geändert haben.",
            },
          ],
        },
        {
          t: "p",
          text: "Ändern Sie nichts, was richtig ist. Ein Profil, das während der Prüfung ständig neue Namen, Kategorien oder Adressen bekommt, ist schwerer mit Ihren Nachweisen abzugleichen. Einheitliche Firmendaten im Netz erleichtern den Abgleich, wie der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo) zeigt.",
        },
      ],
    },
    {
      id: "nachweise",
      title: "Welche Nachweise Google annimmt",
      answer:
        "Google nennt als Nachweise unter anderem eine offizielle Gewerbeanmeldung, eine Gewerbeerlaubnis, Steuerbescheinigungen und Rechnungen für Strom, Telefon, Wasser oder Internet. Entscheidend ist, dass Name und Adresse auf den Dokumenten mit dem Profil übereinstimmen.",
      blocks: [
        {
          t: "table",
          caption: "Nachweisarten laut Google und Beispiele aus Deutschland, Österreich und der Schweiz",
          head: ["Nachweisart laut Google", "Beispiele in DACH"],
          rows: [
            ["Offizielle Registrierung des Unternehmens", "Gewerbeanmeldung, Handelsregisterauszug, Auszug aus dem Gewerbeinformationssystem (Österreich), Handelsregisterauszug mit UID (Schweiz)"],
            ["Gewerbeerlaubnis oder Lizenz", "Konzession, Zulassung oder Erlaubnis Ihrer Kammer oder Behörde, falls Ihr Gewerbe eine braucht"],
            ["Steuerbescheinigung", "Schreiben des Finanzamts mit Firmenname und Anschrift"],
            ["Rechnungen von Versorgern", "Strom-, Telefon-, Wasser- oder Internetrechnung auf den Firmennamen und die Standortadresse"],
          ],
        },
        {
          t: "ul",
          items: [
            "**Name und Adresse identisch:** Ein Dokument mit Privatadresse oder altem Firmennamen hilft nicht, wenn das Profil etwas anderes zeigt.",
            "**Mehrere Dokumente bereitlegen:** Ein Register- und ein Versorgernachweis decken zusammen Firma und Standort ab.",
            "**Kurze Erläuterung:** Sie können eine Notiz beifügen, warum das Profil reaktiviert werden sollte. Nennen Sie sachlich, was Sie korrigiert haben.",
            "**Alles vorher scannen:** Ein geöffnetes Nachweisformular müssen Sie innerhalb von 60 Minuten absenden, sonst wird es nicht an den Einspruch angehängt.",
          ],
        },
      ],
    },
    {
      id: "einspruch",
      title: "Einspruch einlegen: Schritt für Schritt",
      answer:
        "Den Einspruch legen Sie im Einspruchstool von Google ein, angemeldet mit dem Konto, das mit dem Profil verknüpft ist. Sie wählen das Profil, prüfen Grund und Richtlinie, reichen den Einspruch ein und laden Nachweise hoch. Die Entscheidung schickt Google per E-Mail.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Einspruchstool öffnen",
              text: "Öffnen Sie über die Google-Hilfe das Tool „Einsprüche für Ihre Unternehmensprofile verwalten“ und melden Sie sich mit dem Google-Konto an, das mit dem Profil verknüpft ist. Bestätigen Sie das Konto oder wechseln Sie es.",
            },
            {
              title: "Profil auswählen",
              text: "Wählen Sie das betroffene Profil aus. Google zeigt das eingeschränkte Profil, den Grund und die verletzte Richtlinie.",
            },
            {
              title: "Einspruch einreichen",
              text: "Wählen Sie „Einspruch einlegen“. Fügen Sie Nachweise hinzu und senden Sie das Formular innerhalb von 60 Minuten ab.",
            },
            {
              title: "Status verfolgen",
              text: "Im Tool sehen Sie den Status: „Eingereicht“, „Genehmigt“, „Nicht genehmigt“, „Kein Einspruch möglich“ oder „Einspruch möglich“.",
            },
            {
              title: "Auf die E-Mail warten",
              text: "Google nennt keine feste Bearbeitungszeit. Sie werden per E-Mail benachrichtigt, sobald der Einspruch geprüft ist. Prüfen Sie auch den Spam-Ordner.",
            },
          ],
        },
        {
          t: "note",
          label: "Mehr als zehn Profile",
          text: "Betrifft der Einspruch mehr als zehn Profile, geben Sie das im Tool an und hängen eine Tabelle mit Nachweis und Profil-ID je Standort an. Laut Google ändert sich im Tool dann nur der Status des ausgewählten Profils, und Sie erhalten eine E-Mail für dieses Profil.",
        },
        {
          t: "p",
          text: "Bei Einschränkungen wegen gefälschter Rezensionen nennt Google ein eigenes Formular, mit dem Sie das Profil zur erneuten Prüfung einreichen. Google prüft dann das Profil und die zusätzlichen Informationen, die Sie mitschicken.",
        },
      ],
    },
    {
      id: "nach-der-entscheidung",
      title: "Nach der Entscheidung: genehmigt oder abgelehnt",
      answer:
        "Wird der Einspruch genehmigt, ist das Profil wieder sichtbar und Inhaber und Administratoren erhalten ihren Zugriff zurück. Wird er abgelehnt, können Sie über Googles Kontaktformular eine weitere Prüfung beantragen, aber nur mit neuen Nachweisen, die im ersten Einspruch fehlten.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Genehmigt:** Laut Google werden mit dem Profil auch Inhaber und Administratoren reaktiviert. Treten danach Probleme auf, wenden Sie sich an den Support der Unternehmensprofil-Hilfe.",
            "**Nicht genehmigt:** Eine weitere Prüfung ist erst nach einer Ablehnung möglich, über das Formular für lokale Einsprüche und nur mit neuen Nachweisen.",
            "**Kein Einspruch möglich:** Dann prüfen Sie, ob der Betrieb die Grundvoraussetzungen erfüllt, etwa persönlichen Kundenkontakt zu den angegebenen Zeiten. Reine Online-Betriebe sind laut Google nicht berechtigt.",
            "**EU und EWR:** Google weist darauf hin, dass Einwohner der EU und des EWR zusätzliche Rechtsbehelfe haben können. Nach dem Gesetz über digitale Dienste sind das zertifizierte außergerichtliche Streitbeilegungsstellen und der Rechtsweg.",
          ],
        },
        {
          t: "p",
          text: "Nach einer Reaktivierung dauert es oft eine Weile, bis Profil und Sichtbarkeit wieder so aussehen wie vorher. Wie Sie die Position systematisch prüfen, statt nur auf dem eigenen Handy zu suchen, beschreibt [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern). Fehlen danach Rezensionen, lesen Sie [Google-Bewertung löschen lassen](/blog/gbp-bewertung-loeschen-anleitung), um zu verstehen, wann Google Rezensionen entfernt.",
        },
      ],
    },
    {
      id: "was-nicht-tun",
      title: "Was Sie auf keinen Fall tun sollten",
      answer:
        "Legen Sie kein neues Profil für denselben Betrieb an, solange der Einspruch läuft, und zahlen Sie niemandem für eine angebliche Schnell-Reaktivierung. Google nimmt dafür kein Geld und fragt nie nach Einmalpasswörtern oder PINs.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Kein zweites Profil:** Google schreibt ausdrücklich, dass Sie während der Prüfung kein neues Profil für denselben Betrieb anlegen sollen. Ein neues Profil ist ein Duplikat und löst den Verstoß nicht.",
            "**Keine bezahlten „Entsperrer“:** Google warnt vor Anrufen, E-Mails und Nachrichten von Leuten, die Hilfe beim Profil anbieten, auch wenn sie sich als Google-Mitarbeiter ausgeben. Google nimmt für diese Leistung kein Geld.",
            "**Keine Codes weitergeben:** Google fragt nie nach Einmalpasswörtern oder PINs.",
            "**Keine Kulissen:** Ein Schild nur für die Prüfung oder eine angemietete Briefkastenadresse widersprechen den Richtlinien und führen früher oder später wieder zur Sperrung.",
            "**Keine fremden Inhaberrechte:** Bestätigen Sie keine Inhaber- oder Administratoranfragen von Personen, die Sie nicht kennen.",
          ],
        },
        {
          t: "note",
          label: "Hilfe von außen",
          text: "Eine Agentur kann Ihr Profil prüfen und den Einspruch vorbereiten. Eine Reaktivierung garantieren kann niemand, denn die Entscheidung trifft Google. Geben Sie Dienstleistern eine eigene Rolle im Profil und behalten Sie die Inhaberschaft selbst.",
        },
      ],
    },
    {
      id: "vorbeugen",
      title: "Eine erneute Sperrung verhindern",
      answer:
        "Halten Sie Name, Adresse, Einzugsgebiet und Telefonnummer so, wie sie im echten Betrieb sind, sammeln Sie Bewertungen nur ohne Gegenleistung und beschränken Sie den Zugriff auf wenige Personen. Wiederholte Verstöße können laut Google zur Einschränkung des ganzen Kontos führen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Änderungen bewusst machen:** Neuer Name, Umzug oder neue Ausrichtung des Betriebs sind heikel. Google kann wesentliche Änderungen ablehnen oder als verdächtig einstufen. Bei einem Umzug gilt laut Google: altes Profil als geschlossen markieren und ein neues anlegen.",
            "**Bewertungen sauber sammeln:** Keine Rabatte oder Geschenke, keine Auswahl nur zufriedener Kunden, kein Druck vor Ort und keine Quoten für Mitarbeiter. Ein erlaubter Ablauf steht unter [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
            "**Zugriff klein halten:** Je weniger Personen Zugriff haben, desto geringer das Risiko. Entfernen Sie ehemalige Mitarbeiter sofort.",
            "**Unterlagen griffbereit halten:** Gewerbeanmeldung und eine aktuelle Versorgerrechnung auf Firmenname und Standort sparen im Ernstfall Zeit.",
            "**Regelmäßig prüfen:** Einmal im Quartal Name, Adresse, Kategorie, Zeiten und Fotos durchgehen, zum Beispiel mit der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste).",
          ],
        },
        {
          t: "p",
          text: "Sehen Sie bei Mitbewerbern Keywords im Namen oder erfundene Standorte, können Sie das bei Google melden. Wie das geht, beschreibt [Google-Maps-Spam erkennen](/blog/google-maps-spam-erkennen). Einen Überblick über alle Bausteine der lokalen Sichtbarkeit gibt der [Local SEO Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert ein Einspruch bei Google?",
      a: "Google nennt keine feste Bearbeitungszeit. Fest steht nur: Ein geöffnetes Nachweisformular müssen Sie innerhalb von 60 Minuten absenden, und die Entscheidung kommt per E-Mail. Angaben wie „drei bis sieben Werktage“ stammen nicht von Google.",
    },
    {
      q: "Kann ich einfach ein neues Profil anlegen?",
      a: "Nein. Google schreibt ausdrücklich, dass Sie während der Prüfung kein neues Profil für denselben Betrieb anlegen sollen. Es wäre ein Duplikat, und der ursprüngliche Verstoß bliebe bestehen.",
    },
    {
      q: "Kann ich das Profil während der Sperrung bearbeiten?",
      a: "Ja. Laut Google können Inhaber und Administratoren ein gesperrtes Profil weiter bearbeiten und eine Reaktivierung beantragen. Beheben Sie den Verstoß vor dem Einspruch, aber ändern Sie keine korrekten Angaben.",
    },
    {
      q: "Mein Einspruch wurde abgelehnt. Was jetzt?",
      a: "Nach einer Ablehnung können Sie über Googles Formular für lokale Einsprüche eine weitere Prüfung beantragen. Das geht nur mit neuen Nachweisen, die im ersten Einspruch nicht enthalten waren. In der EU und im EWR gibt es zusätzlich außergerichtliche Streitbeilegungsstellen nach dem Gesetz über digitale Dienste.",
    },
    {
      q: "Jemand bietet mir an, das Profil gegen Gebühr zu entsperren. Ist das seriös?",
      a: "Seien Sie vorsichtig. Google warnt vor unaufgeforderten Angeboten, auch von Personen, die sich als Google-Support ausgeben. Google nimmt für eine Reaktivierung kein Geld und fragt nie nach Einmalpasswörtern oder PINs.",
    },
    {
      q: "Können Sie meinen Einspruch übernehmen?",
      a: "Wir prüfen Ihr Profil auf Verstöße und helfen, Korrekturen und Nachweise vorzubereiten. Der Profil Quick-Fix kostet 79 €. Eine Reaktivierung kann niemand garantieren, die Entscheidung trifft Google. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Status Ihres Unternehmensprofils bei Bulk-Uploads", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3480862?hl=de" },
    { title: "Einspruch gegen eingeschränkte oder gesperrte Profile", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4569145?hl=de" },
    { title: "Einschränkungen von Unternehmensprofilen bei Richtlinienverstößen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14114287?hl=de" },
    { title: "Guidelines for representing your business on Google", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/3038177?hl=en" },
    { title: "Overview of Google Business Profile policies", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/13762416?hl=en" },
    { title: "Prohibited & restricted content (Fake engagement)", publisher: "Google Maps User Generated Content Policy Help", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    { title: "Help protect your Google Business Profile", publisher: "Google Business Profile Help", url: "https://support.google.com/business/answer/14509283?hl=en" },
    { title: "European Union Digital Services Act Resolution Options", publisher: "Google", url: "https://support.google.com/european-union-digital-services-act-redress-options" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "gbp-verifizierung-fehlgeschlagen", title: "Google-Profil lässt sich nicht bestätigen" },
    { slug: "duplicate-listing-entfernen", title: "Doppelte Einträge entfernen" },
    { slug: "ranking-ploetzlich-verschwunden", title: "Ranking plötzlich verschwunden" },
  ],
  cta: {
    title: "Profil gesperrt oder in Sorge davor?",
    text: "Wir prüfen Ihr Google Unternehmensprofil auf die typischen Sperrgründe und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie vor dem Einspruch beheben sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
