import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ranking-ploetzlich-verschwunden",
  lang: "de",
  seoTitle: "Aus Google Maps verschwunden? Ursachen prüfen",
  seoDescription:
    "Ihr Betrieb ist plötzlich nicht mehr in Google Maps oder im Kartenblock? So prüfen Sie Profilstatus, Änderungen, Duplikate, Kategorie und Google-Updates.",
  h1: "Plötzlich nicht mehr in Google Maps: Ursachen finden und richtig handeln",
  kicker: "Fehlersuche",
  lead:
    "Für Inhaber, deren Betrieb gestern noch im Kartenblock stand und heute nicht mehr auftaucht. Sie bekommen eine Prüfreihenfolge, die Stellen, an denen Sie nachsehen, und für jede Ursache den passenden nächsten Schritt.",
  answer:
    "Prüfen Sie zuerst, ob der Betrieb wirklich verschwunden ist: Suche nach dem Namen, Messung von mehreren Punkten im Einzugsgebiet. Dann folgt der Profilstatus (gesperrt, eingeschränkt, als Duplikat eingestuft), danach kürzliche Änderungen an Name, Adresse oder Kategorie. Erst wenn das alles stimmt, lohnt der Blick auf Wettbewerber, Spam und bestätigte Google-Updates.",
  takeaways: [
    "Eine einzelne Suche auf dem eigenen Handy ist keine Messung. Google sortiert lokale Ergebnisse auch nach der Entfernung zum Suchenden.",
    "Findet die Suche nach dem eigenen Namen das Profil nicht, liegt meist ein Problem am Profil selbst vor: Sperrung, Einschränkung oder Duplikat.",
    "Änderungen am Profil prüft Google vorab. Das dauert laut Google meist bis zu zehn Minuten, manchmal bis zu 30 Tage. Nach einer Änderung von Name, Adresse oder Kategorie kann eine erneute Bestätigung nötig werden.",
    "Ob ein grundlegendes Google-Update lief, sehen Sie im Search Status Dashboard. Namen von Updates aus Foren und Tools sind Vermutungen.",
    "Legen Sie während einer Prüfung oder eines Einspruchs kein zweites Profil an. Das macht die Lage schlechter.",
  ],
  publishedAt: "2025-01-10",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "wirklich-weg",
      title: "Ist der Betrieb wirklich verschwunden?",
      answer:
        "Oft ist der Betrieb nicht weg, sondern nur an einer anderen Stelle zu sehen, als Sie erwarten. Prüfen Sie deshalb zwei Dinge getrennt: Erscheint das Profil bei der Suche nach dem eigenen Namen, und auf welchen Positionen steht es für die wichtigsten Suchbegriffe im ganzen Einzugsgebiet?",
      blocks: [
        {
          t: "p",
          text: "Google sortiert lokale Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Zur Entfernung schreibt Google, dass berücksichtigt wird, wie weit ein Unternehmen vom suchenden Kunden entfernt ist. Teilt jemand seinen Standort nicht, nutzt Google die Informationen, die über seinen Standort bekannt sind. Wer also im eigenen Laden sucht und dann zwei Kilometer weiter, sieht zwei verschiedene Listen.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Nach dem Namen suchen",
              text: "Suchen Sie in Google Maps und in der Google Suche nach dem genauen Firmennamen und dem Ort. Erscheint das Profil hier nicht, liegt das Problem sehr wahrscheinlich am Profil selbst. Dann gehen Sie direkt zum Abschnitt über den Profilstatus.",
            },
            {
              title: "Nach der Leistung suchen",
              text: "Suchen Sie nach dem Begriff, für den Sie früher sichtbar waren, zum Beispiel „Physiotherapie Augsburg“. Notieren Sie Datum, Uhrzeit, Gerät und Standort.",
            },
            {
              title: "Mit einem Raster messen",
              text: "Wiederholen Sie dieselbe Suche an mehreren Punkten im Einzugsgebiet. Wie das geht, von Hand oder mit einem Werkzeug, steht im Abschnitt [Ranking richtig messen](/blog/google-maps-ranking-verbessern#ranking-messen).",
            },
            {
              title: "Am nächsten Tag wiederholen",
              text: "Ein einzelner Ausreißer ist noch kein Verlust. Erst wenn sich das Bild mit denselben Einstellungen bestätigt, beginnt die Ursachensuche.",
            },
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Wer seine Positionen schon vor dem Einbruch protokolliert hat, sieht sofort, ob alle Begriffe fallen oder nur einzelne, und ob das ganze Gebiet betroffen ist oder nur ein Teil. Eine Vorlage dafür finden Sie im [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker).",
        },
      ],
    },
    {
      id: "entscheidungsbaum",
      title: "Der Entscheidungsbaum: vom Symptom zur Ursache",
      answer:
        "Das Muster des Verlusts verrät viel über die Ursache. Fehlt das Profil auch bei der Namenssuche, liegt es fast immer am Profil. Fällt es nur bei bestimmten Begriffen oder in einem Teil des Gebiets, sind eher Kategorie, Wettbewerber oder Spam zu prüfen.",
      blocks: [
        {
          t: "table",
          caption: "Symptom, mögliche Ursache und wo Sie nachsehen",
          head: ["Was Sie beobachten", "Mögliche Ursache", "Wo Sie prüfen"],
          rows: [
            ["Profil auch bei Namenssuche nicht zu finden", "Gesperrt, deaktiviert oder als Duplikat eingestuft", "Unternehmensprofil, Einspruchstool, E-Mails von Google"],
            ["Profil verwaltbar, aber Hinweis auf Einschränkung", "Verstoß gegen Richtlinien oder eingeschränktes Konto", "Hinweise im Profil, Einspruchstool"],
            ["Verlust kurz nach einer eigenen Änderung", "Änderung in Prüfung, abgelehnt oder erneute Bestätigung nötig", "„Status Ihrer Änderungen prüfen“ im Profil"],
            ["Angaben im Profil stimmen plötzlich nicht mehr", "Google hat Angaben nach Nutzermeldungen aktualisiert", "Hinweis im Bereich „Profil bearbeiten“"],
            ["Nur einzelne Suchbegriffe betroffen", "Hauptkategorie geändert oder unpassend", "Kategorien im Profil"],
            ["Nur ein Teil des Gebiets betroffen", "Neuer Wettbewerber oder Spam-Einträge in der Nähe", "Wer jetzt an Ihren früheren Plätzen steht"],
            ["Auch die Website verliert Besucher aus der Suche", "Grundlegendes Google-Update oder manuelle Maßnahme", "Search Status Dashboard, Search Console"],
          ],
        },
        {
          t: "p",
          text: "Gehen Sie die Zeilen von oben nach unten durch. Die oberen Ursachen lassen sich schnell ausschließen und haben die größte Wirkung. Wer sofort an ein Google-Update denkt, übersieht leicht eine abgelehnte Änderung oder eine Sperrung.",
        },
      ],
    },
    {
      id: "profilstatus",
      title: "Profil gesperrt, deaktiviert oder eingeschränkt",
      answer:
        "Profile, die gegen Googles Richtlinien verstoßen, können gesperrt oder deaktiviert werden. Ein entferntes Profil ist dann laut Google nicht öffentlich sichtbar, und Inhaber können es nicht mehr bearbeiten. Sie können aber über das Einspruchstool die Wiederherstellung beantragen.",
      blocks: [
        {
          t: "p",
          text: "Öffnen Sie das Profil mit dem Google-Konto, mit dem es verwaltet wird. Achten Sie auf Hinweise zu einer Sperrung oder Einschränkung und auf E-Mails von Google. Im Einspruchstool sehen Sie laut Google das betroffene Profil, den Grund für die Moderation und einen Link auf die verletzte Richtlinie.",
        },
        {
          t: "ul",
          items: [
            "**Profil gesperrt oder deaktiviert:** Das Profil erscheint weder in der Suche noch in Maps. Prüfen Sie zuerst selbst, ob alle Angaben den [Richtlinien](https://support.google.com/business/answer/3038177?hl=de) entsprechen, und legen Sie dann Einspruch ein.",
            "**Konto eingeschränkt:** Dann sind laut Google alle Profile gesperrt, die das Konto verwaltet. Der Einspruch läuft in diesem Fall zuerst über die Kontoeinstellungen, erst danach über das Profil.",
            "**Nachweise:** Google nennt Gewerbeanmeldung, Gewerbeschein, Steuerunterlagen oder Versorgerrechnungen. Name und Adresse darauf müssen zum Profil passen. Ein geöffnetes Nachweisformular muss innerhalb von 60 Minuten abgeschickt werden.",
          ],
        },
        {
          t: "note",
          label: "Wichtig",
          text: "Legen Sie während eines laufenden Einspruchs kein neues Profil für denselben Betrieb an. Google weist ausdrücklich darauf hin. Den vollständigen Ablauf beschreibt der Artikel [Unternehmensprofil gesperrt: so reaktivieren Sie es](/blog/gbp-suspendiert-reaktivieren).",
        },
      ],
    },
    {
      id: "aenderungen",
      title: "Änderungen in Prüfung, abgelehnt oder von Google überschrieben",
      answer:
        "Jede Änderung an einem bestätigten Profil prüft Google, bevor sie sichtbar wird. Das dauert laut Google in der Regel bis zu zehn Minuten, manchmal bis zu 30 Tage. Eine Änderung kann angenommen, nicht genehmigt oder noch in Prüfung sein.",
      blocks: [
        {
          t: "p",
          text: "Viele plötzliche Verluste fallen zeitlich mit einer Änderung zusammen: neuer Name, neue Adresse, andere Hauptkategorie, neue Website. Im Profil finden Sie unter „Status Ihrer Änderungen prüfen“, was aus jeder Änderung geworden ist.",
        },
        {
          t: "table",
          caption: "Status einer Änderung und was er bedeutet",
          head: ["Status", "Bedeutung", "Ihr nächster Schritt"],
          rows: [
            ["In Prüfung", "Google prüft die Änderung noch", "Abwarten, nicht mehrfach neu speichern"],
            ["Nicht genehmigt", "Google konnte die Richtigkeit nicht bestätigen", "Angabe prüfen, belegen und Einspruch gegen die Ablehnung einlegen"],
            ["Angenommen", "Die Änderung ist im Profil sichtbar", "Messen, ob der Verlust damit zusammenhängt"],
          ],
        },
        {
          t: "p",
          text: "Nach einer Namensänderung oder einem Umzug kann laut Google eine **erneute Bestätigung** nötig werden, ebenso nach einer Änderung der Kategorie. Läuft die Bestätigung nicht durch, hilft der Artikel [Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
        {
          t: "note",
          label: "Google ändert auch selbst",
          text: "Erhält Google Meldungen, dass Angaben falsch sind, kann es das Profil aktualisieren. Sie werden benachrichtigt, und im Bereich „Profil bearbeiten“ erscheint ein Hinweis. Prüfen Sie deshalb auch Öffnungszeiten, Adresse und den Status „geschlossen“, selbst wenn Sie nichts geändert haben.",
        },
      ],
    },
    {
      id: "duplikat",
      title: "Als Duplikat eingestuft oder zusammengeführt",
      answer:
        "Stuft Google ein Profil als Duplikat ein, erscheint es laut Google weder in der Suche noch in Maps. Das passiert zum Beispiel, wenn für denselben Betrieb ein zweites Profil existiert oder nach einem Umzug ein neues angelegt wurde.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Eigenes zweites Profil:** Das überzählige Profil lässt sich entfernen, ohne das bestätigte zu beeinträchtigen. Dabei werden alle Inhalte und Verwalter dieses Profils gelöscht. Prüfen Sie also genau, welches Sie löschen.",
            "**Zusammenführen:** Doppelte Einträge können über „Änderung vorschlagen“ in Maps zusammengeführt werden. Rezensionen werden dabei zusammengelegt, Antworten auf Rezensionen können verloren gehen.",
            "**Zu Unrecht als Duplikat eingestuft:** Dann können Sie sich laut Google an den Support wenden, sofern es zwei eigenständige Betriebe sind. Teilen sich beide einen Standort mit Kundenverkehr, verlangt Google dauerhafte Beschilderung für beide.",
            "**Nach einem Umzug:** Ändern Sie die Adresse im bestehenden Profil, statt ein neues anzulegen.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie Duplikate finden und sauber auflösen, steht in [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen). Mehrere echte Standorte behandelt [Mehrere Standorte im Unternehmensprofil](/blog/gbp-mehrere-standorte).",
        },
      ],
    },
    {
      id: "kategorie-adresse",
      title: "Kategorie, Adresse oder Einzugsgebiet geändert",
      answer:
        "Die gewählten Kategorien wirken sich laut Google auf das Ranking in lokalen Suchergebnissen aus. Wer die Hauptkategorie wechselt, erscheint danach für andere Suchen. Bei Adresse und Einzugsgebiet gilt: Angaben müssen der Wirklichkeit entsprechen, sonst drohen Ablehnung oder Sperrung.",
      blocks: [
        {
          t: "p",
          text: "Fällt der Betrieb nur bei bestimmten Begriffen heraus, vergleichen Sie die aktuelle Hauptkategorie mit der früheren. Ein Wechsel von „Zahnarzt“ zu „Kieferorthopäde“ oder von „Hotel“ zu „Pension“ verschiebt, für welche Suchen das Profil als passend gilt. Google empfiehlt die spezifischste passende Hauptkategorie und rät davon ab, für jedes Produkt eine eigene weitere Kategorie anzulegen. Mehr dazu im [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
        },
        {
          t: "ul",
          items: [
            "**Adresse geändert oder umgezogen:** Nach einem Umzug kann laut Google eine erneute Bestätigung nötig sein. Bis sie abgeschlossen ist, prüfen Sie im Profil, ob die neue Adresse schon angenommen wurde.",
            "**Adresse ausgeblendet oder Einzugsgebiet geändert:** Prüfen Sie, ob die Angaben noch der Wirklichkeit entsprechen. Was für Betriebe mit und ohne Kundenverkehr gilt, steht in den [Richtlinien für die Darstellung Ihres Unternehmens](https://support.google.com/business/answer/3038177?hl=de).",
            "**Firmendaten im Netz widersprüchlich:** Stehen in Verzeichnissen andere Adressen oder Namen als im Profil, prüfen Sie diese nach der Methode aus [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
          ],
        },
        {
          t: "p",
          text: "Handwerker und mobile Dienste sind besonders oft betroffen, weil sie ohne sichtbaren Standort arbeiten. Wie wir solche Betriebe betreuen, zeigt unsere [englische Seite für Handwerksbetriebe](/industries/trades).",
        },
      ],
    },
    {
      id: "wettbewerb-spam",
      title: "Neue Wettbewerber und Spam-Einträge",
      answer:
        "Manchmal hat sich am eigenen Profil nichts geändert, aber andere stehen jetzt davor. Das kann ein neuer Betrieb sein, ein Wettbewerber mit besserem Profil oder ein Eintrag, der gegen Googles Richtlinien verstößt, etwa mit Suchbegriffen im Namen oder an einer Scheinadresse.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Wer steht jetzt vorne?",
              text: "Notieren Sie die Betriebe, die an Ihren früheren Positionen stehen, mit Name, Kategorie, Adresse und Zahl der Bewertungen.",
            },
            {
              title: "Echt oder auffällig?",
              text: "Ein Name, der aus Leistung und Ort besteht, eine Adresse ohne Beschilderung oder viele gleichartige Einträge kurz nacheinander sind Warnzeichen. Woran Sie Verstöße erkennen und wie Sie sie melden, steht in [Google-Maps-Spam erkennen](/blog/google-maps-spam-erkennen).",
            },
            {
              title: "Ist der Wettbewerber einfach besser?",
              text: "Mehr aktuelle Bewertungen, vollständigere Angaben, eine bessere Website: Das ist kein Verstoß, sondern ein Hinweis, wo Sie nachlegen. Wie Sie das strukturiert vergleichen, zeigt die [Google-Maps-Konkurrenzanalyse](/blog/google-maps-konkurrenzanalyse).",
            },
          ],
        },
        {
          t: "note",
          label: "Was nicht hilft",
          text: "Gegen einen starken Wettbewerber helfen weder Suchbegriffe im eigenen Namen noch ein zweites Profil. Beides verstößt gegen Googles Richtlinien und kann zur Sperrung führen. Dauerhaft wirken echte Bewertungen, siehe [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen), und ein vollständiges Profil, siehe [Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "google-updates",
      title: "Google-Updates und manuelle Maßnahmen",
      answer:
        "Google ändert seine Ranking-Systeme mehrmals im Jahr grundlegend. Ob ein solches Update lief und wann es abgeschlossen war, zeigt Google im Search Status Dashboard. Ob die eigene Website wegen Spam abgestraft wurde, sehen Sie im Bericht „Manuelle Maßnahmen“ der Search Console.",
      blocks: [
        {
          t: "p",
          text: "Grundlegende Updates zielen laut Google nicht auf einzelne Websites. Google listet sie auf seiner Seite mit Ranking-Updates, und das Search Status Dashboard zeigt Beginn und Ende jeder Einführung. Verlassen Sie sich nur auf diese beiden Quellen. Namen und Ausmaße, die in Foren oder Tools für angebliche lokale Updates kursieren, sind Beobachtungen Dritter, keine Bestätigung.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Zeitraum abgleichen",
              text: "Fiel Ihr Verlust in den Zeitraum eines bestätigten Updates? Wenn nicht, ist eine der oberen Ursachen wahrscheinlicher.",
            },
            {
              title: "Ende abwarten",
              text: "Google empfiehlt, mindestens eine Woche nach Abschluss eines grundlegenden Updates zu warten und diese Woche dann in der Search Console mit der Woche vor dem Beginn zu vergleichen.",
            },
            {
              title: "Seiten und Suchanfragen ansehen",
              text: "Ein kleiner Rückgang braucht laut Google keine drastischen Schritte. Bei einem großen Rückgang prüfen Sie die betroffenen Seiten ehrlich auf ihren Nutzen für Besucher. Von schnellen Lösungen rät Google ab.",
            },
            {
              title: "Manuelle Maßnahmen ausschließen",
              text: "Im Bericht „Manuelle Maßnahmen“ steht, ob ein Prüfer bei Google Verstöße gegen die Spam-Richtlinien festgestellt hat. Ist alles in Ordnung, zeigt der Bericht ein grünes Häkchen. Nach einer Korrektur beantragen Sie dort die Überprüfung. Das dauert laut Google meist mehrere Tage oder Wochen.",
            },
          ],
        },
        {
          t: "p",
          text: "Die Website ist für lokale Rankings wichtig, weil sie Google die Inhalte zu Ihren Leistungen liefert. Eine Prüfliste für Website und Profil finden Sie in der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste), die technischen Grundlagen im [Leitfaden Local SEO](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
    {
      id: "daten-pruefen",
      title: "Wo Sie die Zahlen finden",
      answer:
        "Für das Profil zeigen die Leistungsdaten im Unternehmensprofil, wie oft es aufgerufen wurde und welche Aktionen folgten. Für die Website zeigt die Search Console Klicks und Suchanfragen. Beide zusammen zeigen, ob der Verlust nur das Profil, nur die Website oder beides betrifft.",
      blocks: [
        {
          t: "table",
          caption: "Datenquellen bei einem Einbruch",
          head: ["Quelle", "Was Sie dort sehen", "Worauf Sie achten"],
          rows: [
            ["Leistung im Unternehmensprofil", "Aufrufe in Suche und Maps, Suchanfragen, Wegbeschreibungen, Anrufe, Websiteklicks", "Nur für bestätigte Profile. Suchanfragen werden monatlich aktualisiert, mit bis zu fünf Tagen Verzug."],
            ["Search Console, Leistungsbericht", "Klicks und Suchanfragen der Website", "Zeitraum vor und nach dem Einbruch vergleichen"],
            ["Search Console, Manuelle Maßnahmen", "Abstrafung wegen Spam", "Grünes Häkchen heißt: keine Maßnahme"],
            ["Ihre Raster-Messung", "Positionen je Punkt und Suchbegriff", "Dieselben Einstellungen wie vor dem Einbruch"],
          ],
        },
        {
          t: "p",
          text: "Fallen Aufrufe und Aktionen im Profil gleichzeitig stark, während die Website stabil bleibt, liegt die Ursache eher am Profil. Fällt beides, sollten Sie die Website und bestätigte Updates genauer prüfen. Wie Sie die Profilsichtbarkeit grundsätzlich herstellen, beschreibt [Unternehmensprofil nicht in der Suche sichtbar](/blog/gbp-nicht-in-suche-sichtbar).",
        },
      ],
    },
    {
      id: "massnahmen",
      title: "Was Sie je nach Ursache tun",
      answer:
        "Für jede Ursache gibt es einen eigenen Weg: Einspruch bei Sperrung, Status prüfen bei Änderungen, Zusammenführen oder Entfernen bei Duplikaten, Korrektur bei Kategorie und Adresse, Meldung bei Spam. Bei Google-Updates hilft nur, die Inhalte für Besucher zu verbessern.",
      blocks: [
        {
          t: "table",
          caption: "Ursache und nächster Schritt",
          head: ["Ursache", "Nächster Schritt", "Weiterlesen"],
          rows: [
            ["Gesperrt oder deaktiviert", "Angaben mit Richtlinien abgleichen, Nachweise sammeln, Einspruch einlegen", "[Profil reaktivieren](/blog/gbp-suspendiert-reaktivieren)"],
            ["Änderung abgelehnt", "Angabe belegen und gegen die Ablehnung Einspruch einlegen", "[Bestätigung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen)"],
            ["Duplikat", "Überzähliges Profil entfernen oder zusammenführen lassen", "[Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen)"],
            ["Kategorie unpassend", "Spezifischste passende Hauptkategorie wählen", "[Kategorien-Leitfaden](/blog/google-business-kategorien-guide)"],
            ["Spam im Umfeld", "Belege sammeln und Verstöße melden", "[Spam erkennen](/blog/google-maps-spam-erkennen)"],
            ["Wettbewerber stärker", "Profil vervollständigen, echte Bewertungen, bessere Website", "[Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern)"],
            ["Grundlegendes Update", "Ende abwarten, Seiten und Suchanfragen vergleichen, Inhalte verbessern", "[Lokale Suchmaschinenoptimierung 2026](/blog/lokale-suchmaschinenoptimierung-2026)"],
          ],
        },
        {
          t: "note",
          label: "Was Sie vermeiden sollten",
          text: "Kein zweites Profil anlegen, keine Suchbegriffe in den Namen schreiben, keine Adresse in einem virtuellen Büro angeben und Änderungen nicht im Stundentakt neu speichern. Das verstößt gegen Googles Richtlinien oder verlängert die Prüfung.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Warum sehe ich meinen Betrieb, mein Kunde aber nicht?",
      a: "Google berücksichtigt bei lokalen Ergebnissen die Entfernung zum Suchenden. Sie suchen meist direkt am Betrieb, Ihr Kunde von woanders. Messen Sie deshalb an mehreren Punkten im Einzugsgebiet, statt nur vom eigenen Handy aus.",
    },
    {
      q: "Wie lange dauert es, bis eine Änderung im Profil sichtbar ist?",
      a: "Laut Google dauert die Prüfung einer Änderung in der Regel bis zu zehn Minuten, manchmal bis zu 30 Tage. Den Stand sehen Sie im Profil unter „Status Ihrer Änderungen prüfen“. Speichern Sie die Änderung in dieser Zeit nicht mehrfach neu.",
    },
    {
      q: "Mein Profil ist gesperrt. Soll ich ein neues anlegen?",
      a: "Nein. Google rät ausdrücklich davon ab, während eines Einspruchs ein neues Profil für denselben Betrieb anzulegen. Prüfen Sie die Angaben, sammeln Sie Nachweise und legen Sie im Einspruchstool Einspruch ein.",
    },
    {
      q: "Woran erkenne ich, ob ein Google-Update schuld ist?",
      a: "Gleichen Sie den Zeitpunkt des Verlusts mit dem Search Status Dashboard ab. Dort zeigt Google Beginn und Ende bestätigter Updates. Fällt Ihr Verlust nicht in einen solchen Zeitraum, liegt die Ursache wahrscheinlich am Profil, an Änderungen oder am Wettbewerb.",
    },
    {
      q: "Kann ich das alte Ranking durch Bezahlung zurückbekommen?",
      a: "Nein. Google schreibt, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung. Bezahlt werden können nur Anzeigen, die getrennt und gekennzeichnet erscheinen.",
    },
    {
      q: "Was kostet eine Prüfung durch LocalDominate?",
      a: "Die erste Einschätzung ist kostenlos. Der Profil Quick-Fix kostet 79 €, die vollständige Profil-Optimierung 390 €. Umfang und Preis stehen vor dem Start schriftlich fest. Eine bestimmte Position oder Rückkehr in den Kartenblock kann niemand seriös zusagen.",
    },
  ],
  sources: [
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Probleme mit gesperrten oder deaktivierten Profilen beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4569145?hl=de" },
    { title: "Was passiert mit Änderungen am Unternehmensprofil?", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038311?hl=de" },
    { title: "Probleme mit doppelten Profilen und Eigentumsrechten beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/12756178?hl=de" },
    { title: "Unternehmenskategorie verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7249669?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Grundlegende Updates der Google Suche (Core Updates)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-updates?hl=de" },
    { title: "Bericht „Manuelle Maßnahmen“", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9044175?hl=de" },
  ],
  related: [
    { slug: "gbp-suspendiert-reaktivieren", title: "Unternehmensprofil gesperrt: so reaktivieren Sie es" },
    { slug: "duplicate-listing-entfernen", title: "Doppelte Einträge in Google Maps entfernen" },
    { slug: "gbp-nicht-in-suche-sichtbar", title: "Unternehmensprofil nicht in der Suche sichtbar" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Ihr Betrieb ist aus Maps verschwunden?",
    text: "Schicken Sie uns den Namen und den Ort. Wir prüfen Profilstatus, Änderungen und Wettbewerbsumfeld und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst klären sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
