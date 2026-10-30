import type { V4Article } from "../types";

const article: V4Article = {
  slug: "duplicate-listing-entfernen",
  lang: "de",
  seoTitle: "Doppelte Google-Einträge entfernen: die Anleitung",
  seoDescription:
    "Doppelte Google-Profile finden und bereinigen: entfernen, Zugriff anfordern oder in Maps melden. Mit Sonderfällen wie Praxis, Umzug, neuer Name und Abteilung.",
  h1: "Doppelte Google-Einträge finden und entfernen: alle offiziellen Wege",
  kicker: "Google-Unternehmensprofil",
  lead:
    "Für Inhaber, die ihren Betrieb zweimal in Google Maps finden, etwa nach einem Umzug, einem Agenturwechsel oder weil eine Ärztin neben der Praxis ein eigenes Profil hat. Sie erfahren, wie Sie alle Duplikate aufspüren, welchen Weg Google für welchen Fall vorsieht und was mit den Bewertungen passiert.",
  answer:
    "Google erlaubt ein Profil pro Unternehmen und Standort. Ein Duplikat bereinigen Sie je nach Lage auf einem von drei Wegen: ein eigenes doppeltes Profil **aus dem Konto entfernen**, beim fremden Inhaber **Zugriff anfordern** oder in Maps über „Änderung vorschlagen“ ein **Duplikat melden**. Bei einer Zusammenführung legt Google die Rezensionen zusammen, Antworten darauf können verloren gehen.",
  takeaways: [
    "Pro Unternehmen und Standort ist ein Profil erlaubt. Ein als Duplikat markiertes Profil erscheint laut Google weder in der Suche noch in Maps.",
    "Suchen Sie nicht nur nach dem Namen. Telefonnummern, alte Adressen, frühere Namen und Namen einzelner Fachkräfte führen zu vergessenen Einträgen.",
    "Ein eigenes Duplikat entfernen Sie im Profil-Dashboard. Das löscht dessen Inhalte und Verwalter endgültig, deshalb zuerst prüfen, welches Profil bleibt.",
    "Gehört das Duplikat jemand anderem, fordern Sie Zugriff an. Der Inhaber hat drei Tage Zeit zu antworten.",
    "Nicht jeder zweite Eintrag ist ein Duplikat: Einzelne Fachkräfte, echte Abteilungen und eigenständige Marken am selben Ort dürfen unter Bedingungen eigene Profile haben.",
  ],
  publishedAt: "2025-01-10",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-ist-ein-duplikat",
      title: "Was bei Google als Duplikat gilt",
      answer:
        "Ein Duplikat ist ein zweites Profil für denselben Betrieb am selben Standort. Google nennt drei typische Auslöser: Es gibt schon ein bestätigtes Profil, mehrere Profile teilen sich eine Adresse, oder ein Betrieb hat für verschiedene Leistungen getrennte Profile angelegt.",
      blocks: [
        {
          t: "p",
          text: "Googles Richtlinien sind eindeutig: Pro Unternehmen soll nur ein Profil angelegt werden, und pro Standort nicht mehr als eine Seite, egal ob in einem Konto oder in mehreren. Wer für „Zahnreinigung“ und „Implantate“ zwei Profile anlegt, hat kein zweites Angebot, sondern ein Duplikat. Leistungen gehören laut Google gesammelt in das eine Profil.",
        },
        {
          t: "table",
          caption: "Duplikat oder zulässiges eigenes Profil (nach Googles Richtlinien)",
          head: ["Situation", "Einordnung"],
          rows: [
            ["Zweites Profil mit gleichem Betrieb und gleicher Adresse", "Duplikat"],
            ["Getrennte Profile je Leistung oder Fachgebiet", "Duplikat, Leistungen gehören in ein Profil"],
            ["Altes Profil an der früheren Adresse nach einem Umzug", "Duplikat, das bestehende Profil hätte umziehen sollen"],
            ["Ärztin oder Anwalt mit Kundenverkehr, direkt erreichbar am Standort", "Zulässig als eigenes Profil der Fachkraft, bei mehreren Fachkräften zusätzlich zum Profil der Organisation"],
            ["Abteilung mit eigenem Namen, eigener Kategorie und eigenen Öffnungszeiten", "Zulässig, etwa in Kliniken, Hochschulen oder Behörden"],
            ["Fleischtheke im Supermarkt, Markenbereich im Elektronikmarkt", "Nicht zulässig, Google nennt genau diese Beispiele"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie mehrere echte Standorte sauber anlegen, steht im Artikel [Mehrere Standorte im Google-Profil](/blog/gbp-mehrere-standorte). Warum einheitliche Firmendaten neuen Duplikaten vorbeugen, erklärt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
      ],
    },
    {
      id: "warum-bereinigen",
      title: "Warum Sie Duplikate nicht liegen lassen sollten",
      answer:
        "Doppelte Profile führen laut Google dazu, dass Ihre Angaben in Maps und der Suche falsch erscheinen können. Kunden landen bei veralteten Nummern oder Adressen, und Bewertungen verteilen sich auf zwei Einträge statt auf einen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Für Kunden:** Ein Eintrag mit alter Telefonnummer oder alter Adresse kostet Anrufe und Besuche. Der Kunde merkt nicht, dass es zwei Einträge gibt, er sieht nur den, der zuerst erscheint.",
            "**Für Bewertungen:** Wer auf dem alten Eintrag bewertet, stärkt nicht Ihr gepflegtes Profil. Antworten auf diese Bewertungen schreiben Sie nur, wenn Sie den Eintrag überhaupt verwalten.",
            "**Für Google:** Markiert Google ein Profil als Duplikat, erscheint es weder in der Suche noch in Maps. Trifft das versehentlich Ihr gepflegtes Profil statt des alten, verschwindet genau der Eintrag, den Sie optimiert haben.",
          ],
        },
        {
          t: "note",
          label: "Keine erfundenen Zahlen",
          text: "Verlässliche Messungen, wie stark ein Duplikat das Ranking drückt, gibt es nicht. Google selbst nennt keinen Wert. Wenn Ihr Profil plötzlich nicht mehr erscheint, prüfen Sie Duplikate als eine von mehreren Ursachen, wie im Artikel [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden) beschrieben.",
        },
      ],
    },
    {
      id: "duplikate-finden",
      title: "Duplikate finden: die Suchmethoden",
      answer:
        "Suchen Sie in Google Maps nicht nur nach dem aktuellen Namen, sondern nach jeder Telefonnummer, jeder früheren Adresse, jedem früheren Namen und den Namen Ihrer Fachkräfte. Prüfen Sie außerdem, welche Profile in Ihren eigenen Google-Konten und in alten Agenturkonten liegen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Telefonnummern in Maps suchen",
              text: "Geben Sie jede aktuelle und frühere Nummer direkt in das Suchfeld von Google Maps ein, in mehreren Schreibweisen: mit Vorwahl, mit +49, +43 oder +41 und mit Schrägstrich. Eine Nummer, die zwei Orte liefert, ist der schnellste Hinweis auf ein Duplikat.",
            },
            {
              title: "Frühere Namen und Schreibweisen",
              text: "Suchen Sie nach dem Namen vor einer Umbenennung, nach dem Namen des Vorbesitzers, nach Abkürzungen und nach dem Namen mit und ohne Rechtsform. Wiederholen Sie die Suche mit dem Ortsnamen dahinter.",
            },
            {
              title: "Alte Adressen",
              text: "Zoomen Sie in Maps auf jede frühere Adresse und sehen Sie nach, ob dort noch ein Eintrag Ihres Betriebs steht. Suchen Sie zusätzlich nach Straße plus Firmenname.",
            },
            {
              title: "Namen der Fachkräfte",
              text: "In Praxen, Kanzleien und Maklerbüros: Suchen Sie nach dem Namen jeder Ärztin, jedes Anwalts und jedes früheren Mitarbeiters. Profile von Personen, die längst woanders arbeiten, stehen oft noch an Ihrer Adresse.",
            },
            {
              title: "Profil hinzufügen als Prüfung",
              text: "Geben Sie auf business.google.com/add Ihren Namen und Ihre Adresse ein, ohne etwas abzuschicken. Die Liste zeigt bestehende Einträge. Steht dort der Hinweis, dass das Profil möglicherweise von jemand anderem verwaltet wird, kennen Sie den nächsten Schritt.",
            },
            {
              title: "Eigene Konten durchgehen",
              text: "Öffnen Sie das Profil-Dashboard mit jedem Google-Konto, das jemals für den Betrieb genutzt wurde. Fragen Sie frühere Agenturen und Mitarbeiter, ob sie Profile angelegt haben. Zugangsdaten zu einem vergessenen Konto stellen Sie über Googles Kontowiederherstellung wieder her.",
            },
          ],
        },
        {
          t: "p",
          text: "Halten Sie jeden Fund mit Link, Name, Adresse, Nummer, Anzahl der Rezensionen und Verwalter in einer Tabelle fest. Die Spalten dafür finden Sie im Audit-Abschnitt von [NAP-Konsistenz](/blog/nap-konsistenz-local-seo) und in der [Citation-Tracking-Vorlage](/blog/citation-tracking-template). Ein vollständiger Profil-Check gehört auch in die [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste).",
        },
      ],
    },
    {
      id: "welcher-weg",
      title: "Den richtigen Weg wählen",
      answer:
        "Entscheidend ist, wer das Duplikat verwaltet. Liegt es in Ihrem Konto, entfernen Sie es selbst. Gehört es jemand anderem, fordern Sie Zugriff an. Verwaltet es niemand, melden Sie es in Maps als Duplikat. Ist Ihr Betrieb nur unbestätigt eingetragen, beanspruchen Sie diesen Eintrag statt ein neues Profil anzulegen.",
      blocks: [
        {
          t: "table",
          caption: "Welcher Weg für welches Duplikat (nach Googles Hilfe zu doppelten Profilen)",
          head: ["Lage", "Weg", "Was Sie beachten"],
          rows: [
            ["Beide Profile liegen in Ihrem Konto, eines ist bestätigt", "Duplikat aus dem Konto entfernen", "Das bestätigte Profil bleibt unberührt. Inhalte und Verwalter des entfernten Profils sind endgültig weg"],
            ["Duplikat gehört einer früheren Agentur, einem Vorbesitzer oder Mitarbeiter", "Zugriff beim Inhaber anfordern", "Drei Tage Antwortfrist. Danach ist eine eigene Bestätigung manchmal möglich"],
            ["Niemand verwaltet das Duplikat erkennbar", "In Maps „Duplikat eines anderen Orts“ melden", "Google prüft jede Meldung. Sie brauchen ein Google-Konto"],
            ["Ihr Betrieb steht unbestätigt in Maps", "Eintrag beanspruchen und bestätigen", "Kein neues Profil anlegen, sonst entsteht das nächste Duplikat"],
            ["Ihr Profil wurde zu Unrecht als Duplikat markiert", "Einspruch beim Support", "Nur bei wirklich getrennten Betrieben, am selben Ort mit dauerhafter Beschilderung beider Betriebe als Nachweis"],
          ],
        },
        {
          t: "note",
          label: "Bevor Sie etwas löschen",
          text: "Behalten Sie das Profil mit dem richtigen Namen, der richtigen Adresse, der Bestätigung und der längeren Bewertungshistorie. Notieren Sie vorher Link, Fotos und wichtige Texte des Profils, das wegfällt.",
        },
      ],
    },
    {
      id: "eigenes-duplikat-entfernen",
      title: "Ein eigenes Duplikat aus dem Konto entfernen",
      answer:
        "Im Profil-Dashboard öffnen Sie über das Drei-Punkte-Menü die Einstellungen und wählen „Unternehmensprofil entfernen“, dann „Profilinhalt und Administratoren entfernen“. Das darf nur der primäre Inhaber. Neue Inhaber und Administratoren müssen sieben Tage warten.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Mit dem richtigen Konto anmelden",
              text: "Melden Sie sich mit dem Google-Konto an, das mit dem doppelten Profil verknüpft ist, und öffnen Sie das Profil-Dashboard. Prüfen Sie Name und Adresse zweimal, damit Sie nicht das falsche Profil wählen.",
            },
            {
              title: "Einstellungen öffnen",
              text: "Wählen Sie im Drei-Punkte-Menü „Einstellungen für das Unternehmensprofil“.",
            },
            {
              title: "Profil entfernen",
              text: "Wählen Sie „Unternehmensprofil entfernen“ und dann „Profilinhalt und Administratoren entfernen“. Optional können Sie den Betrieb dabei als dauerhaft geschlossen markieren.",
            },
            {
              title: "Bestätigen",
              text: "Wählen Sie „Weiter“, „Entfernen“ und „Fertig“.",
            },
          ],
        },
        {
          t: "p",
          text: "Wichtig: Das Entfernen aus dem Konto löscht Beiträge, Fotos, Videos und Ihre Antworten auf Rezensionen endgültig. Rezensionen und andere Inhalte von Nutzern bleiben bestehen. Laut Google kann der Eintrag danach weiterhin in Suche und Maps erscheinen, solange er nicht als unzulässig gilt. Zeigt das entfernte Profil denselben Betrieb wie Ihr Hauptprofil, melden Sie es deshalb zusätzlich in Maps als Duplikat (siehe unten).",
        },
        {
          t: "note",
          label: "Geschlossen markieren ist kein Duplikat-Fix",
          text: "„Dauerhaft geschlossen“ entfernt einen Eintrag laut Google nicht sofort, er verschwindet nach und nach aus den Suchergebnissen. Für einen Betrieb, der weiter existiert, ist das die falsche Markierung. Sie gehört zu einem Betrieb, der tatsächlich geschlossen hat oder unter neuem Namen als neues Unternehmen weitermacht.",
        },
      ],
    },
    {
      id: "zugriff-anfordern",
      title: "Zugriff anfordern, wenn jemand anderes das Duplikat verwaltet",
      answer:
        "Über business.google.com/add suchen Sie Ihren Betrieb, wählen „Zugriff anfordern“ und füllen das Formular aus. Der aktuelle Inhaber hat drei Tage Zeit. Antwortet er nicht, können Sie das Profil unter Umständen selbst bestätigen und danach bereinigen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Betrieb suchen",
              text: "Rufen Sie business.google.com/add auf, geben Sie Name und Adresse ein und wählen Sie den Eintrag aus der Liste. Google weist darauf hin, dass das Profil möglicherweise von jemand anderem verwaltet wird.",
            },
            {
              title: "Zugriff anfordern",
              text: "Wählen Sie „Zugriff anfordern“, füllen Sie das Formular aus und senden Sie es ab. Sie bekommen eine Bestätigung per E-Mail, der Inhaber wird ebenfalls benachrichtigt.",
            },
            {
              title: "Drei Tage abwarten",
              text: "Den Stand sehen Sie im Konto oder über den Link in der Bestätigungsmail.",
            },
            {
              title: "Ergebnis nutzen",
              text: "Bei Zustimmung verwalten Sie das Profil und können es entfernen oder als Hauptprofil behalten. Bei Ablehnung können Sie Einspruch einlegen und Änderungen in Maps vorschlagen. Ohne Antwort öffnen Sie die Bestätigungsmail, wählen „Anfrage ansehen“ und „Bestätigen“ und folgen der Bestätigung. Diese Möglichkeit gibt es laut Google nicht immer.",
            },
          ],
        },
        {
          t: "p",
          text: "Betriebe ohne Ladengeschäft, die nur ein Einzugsgebiet angeben, gehen anders vor: Sie wenden sich an den Support und wählen als Problem „Inhaberschaft des Eintrags übertragen“. Scheitert die anschließende Bestätigung, hilft der Artikel [Google-Profil lässt sich nicht bestätigen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
      ],
    },
    {
      id: "in-maps-melden",
      title: "Ein Duplikat in Google Maps melden",
      answer:
        "Öffnen Sie den doppelten Eintrag in Google Maps, wählen Sie „Änderung vorschlagen“, dann „Ort ist geschlossen oder nicht hier“ und „Duplikat eines anderen Orts“, und senden Sie ab. Google prüft jede Meldung, bevor sich etwas auf der Karte ändert.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Anmelden und Eintrag öffnen",
              text: "Melden Sie sich mit einem Google-Konto an. Suchen Sie den doppelten Eintrag in Maps oder wählen Sie ihn auf der Karte aus.",
            },
            {
              title: "Änderung vorschlagen",
              text: "Wählen Sie „Änderung vorschlagen“ und dann „Ort ist geschlossen oder nicht hier“.",
            },
            {
              title: "Duplikat wählen",
              text: "Wählen Sie „Duplikat eines anderen Orts“ und dann „Senden“.",
            },
            {
              title: "Ergebnis prüfen",
              text: "Änderungen werden geprüft, bevor sie erscheinen. Sehen Sie nach einigen Tagen wieder nach und notieren Sie das Datum der Meldung in Ihrer Tabelle.",
            },
          ],
        },
        {
          t: "p",
          text: "Wählen Sie die passende Option, nicht die schärfste. „Gibt es hier nicht“ ist für Orte gedacht, die nie existiert haben oder nicht dort sind. Für zwei Einträge desselben Betriebs ist „Duplikat eines anderen Orts“ richtig. Steht der alte Eintrag an einer früheren Adresse, gibt es die Option „Umgezogen“: Dort markieren Sie den neuen Standort auf der Karte.",
        },
        {
          t: "note",
          label: "Was Google voraussetzt",
          text: "Eine Zusammenführung klappt laut Google nur, wenn beide Einträge denselben Betrieb zeigen und dieselben Angaben enthalten. Gleichen Sie deshalb vorher Name, Adresse und Telefonnummer Ihres Hauptprofils ab. Wer einen Wettbewerber mit Scheinadressen oder mehreren Profilen meldet, findet die passenden Wege in [Google-Maps-Spam erkennen und melden](/blog/google-maps-spam-erkennen).",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Was mit den Bewertungen passiert",
      answer:
        "Bei einer Zusammenführung zweier Einträge legt Google die Rezensionen zusammen, Antworten auf Rezensionen können dabei verloren gehen. Entfernen Sie ein Profil aus Ihrem Konto, verschwinden Ihre Antworten endgültig, die Rezensionen der Nutzer bleiben am Eintrag.",
      blocks: [
        {
          t: "table",
          caption: "Bewertungen je nach Weg (nur was Google dazu schreibt)",
          head: ["Weg", "Rezensionen der Nutzer", "Ihre Antworten"],
          rows: [
            ["Zusammenführung zweier Einträge in Maps", "Werden zusammengelegt", "Können verloren gehen"],
            ["Profil aus dem eigenen Konto entfernen", "Bleiben am Eintrag bestehen", "Werden endgültig gelöscht"],
            ["Eintrag als „Gibt es hier nicht“ entfernen lassen", "Google beschreibt es nicht", "Google beschreibt es nicht"],
          ],
        },
        {
          t: "p",
          text: "Eine Quote, wie viele Bewertungen bei einer Zusammenführung erhalten bleiben, nennt Google nicht. Angaben wie „70 bis 80 Prozent“ sind Erfahrungswerte ohne Beleg. Sichern Sie wichtige Antworten vorher als Text, damit Sie sie bei Bedarf neu schreiben können.",
        },
        {
          t: "p",
          text: "Wenn Sie eine einzelne unzulässige Bewertung loswerden wollen, ist das ein anderer Vorgang, beschrieben in [Google-Bewertung löschen lassen](/blog/gbp-bewertung-loeschen-anleitung). Wie Sie nach der Bereinigung neue Bewertungen auf dem richtigen Profil sammeln, steht in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "sonderfaelle",
      title: "Sonderfälle: Praxis, Umzug, neuer Name, Abteilung",
      answer:
        "Fachkräfte mit eigenem Kundenstamm dürfen neben der Praxis ein eigenes Profil haben, Angestellte nicht. Nach einem Umzug ändern Sie die Adresse im bestehenden Profil. Bei einer kleinen Umbenennung bleibt das Profil, bei einer echten Neugründung wird das alte als geschlossen markiert.",
      blocks: [
        {
          t: "h3",
          text: "Praxis und einzelne Fachkräfte",
        },
        {
          t: "p",
          text: "Ärztinnen, Zahnärzte, Anwälte, Finanzberater, Versicherungsvertreter und Makler gelten bei Google als Fachkräfte mit eigenem Kundenstamm. Sie dürfen ein eigenes Profil haben, wenn sie Kundenverkehr haben und am bestätigten Standort zu den Öffnungszeiten direkt erreichbar sind. Arbeiten mehrere Fachkräfte mit Kundenverkehr am Standort, sollte die Organisation zusätzlich ein eigenes Profil für den Standort anlegen. Die Profile der Fachkräfte tragen dann nur den Namen der Person, nicht den der Organisation. Angestellte dürfen keine eigenen Profile anlegen, und niemand darf getrennte Profile je Fachgebiet führen.",
        },
        {
          t: "p",
          text: "Ist eine Fachkraft die einzige Ansprechperson an einem Standort einer Marke, gibt es nur ein gemeinsames Profil nach dem Muster „Marke: Name der Fachkraft“. Ein zweites Profil mit nur dem Markennamen wäre dann ein Duplikat. Wie Praxen ihr Profil im Rahmen des Berufsrechts aufbauen, steht in [Local SEO für Arztpraxen](/blog/local-seo-aerzte-praxen) und [Local SEO für Kanzleien](/blog/local-seo-anwaelte-kanzleien). Unsere Seite für Praxen finden Sie unter [Practices](/industries/practices) (englische Seite).",
        },
        {
          t: "h3",
          text: "Umzug und alte Adresse",
        },
        {
          t: "p",
          text: "Google schreibt: Wenn Ihr Betrieb umzieht, erstellen Sie kein neues Profil, sondern ändern die Adresse im bestehenden. Wurde trotzdem ein neues angelegt, behalten Sie das mit der längeren Geschichte, tragen dort die neue Adresse ein und entfernen das andere. Steht an der alten Adresse ein Eintrag, den Sie nicht verwalten, melden Sie ihn in Maps mit „Umgezogen“ und markieren den neuen Standort. Die übrige Reihenfolge nach einem Umzug beschreibt die Checkliste in [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "h3",
          text: "Neuer Name oder neuer Inhaber",
        },
        {
          t: "p",
          text: "Ist die Namensänderung klein und bleiben Eigennamen, Leistungen und Kategorie gleich, bearbeiten Sie einfach den Namen im bestehenden Profil. Das gilt auch, wenn ein Betrieb mit mehreren Standorten seinen Namen ändert. Erfüllt die Änderung diese Bedingungen nicht, wertet Google den Betrieb als neues Unternehmen: Das alte Profil wird als geschlossen markiert, und Sie legen ein neues unter dem neuen Namen an. Übernehmen Sie einen Betrieb, muss Sie der bisherige Inhaber zuerst als Inhaber hinzufügen, bevor er die Inhaberschaft übertragen kann.",
        },
        {
          t: "h3",
          text: "Abteilungen und mehrere Marken am selben Ort",
        },
        {
          t: "p",
          text: "Abteilungen in Unternehmen, Hochschulen, Krankenhäusern und Behörden dürfen eigene Profile haben, wenn Name und passendste Kategorie sich vom Hauptbetrieb und den anderen Abteilungen unterscheiden. Ihre Öffnungszeiten stehen dann im jeweils eigenen Profil. Restaurant oder Bar im Hotel bekommen ein eigenes Profil unter eigenem Namen, wenn sie eine andere Kategorie brauchen. Unabhängige Marken am selben Standort dürfen je ein Profil haben, aber nie ein gemeinsames mit zusammengesetztem Namen. Für Marken, deren Produkte Sie nur verkaufen, gibt es kein eigenes Profil. Welche Kategorie zu welchem Profil passt, klärt der [Kategorien-Leitfaden](/blog/google-business-kategorien-guide). Für Hotels mit Restaurant gibt es die Seite [Hotels](/industries/hotels) (englische Seite).",
        },
      ],
    },
    {
      id: "support-einspruch",
      title: "Wenn nichts hilft: Support und Einspruch",
      answer:
        "Wird ein Zugriffsantrag abgelehnt, bleibt eine Maps-Meldung ohne Wirkung oder wurde Ihr eigenes Profil zu Unrecht als Duplikat markiert, wenden Sie sich an den Support des Unternehmensprofils. Ein Einspruch hat nur Aussicht, wenn die Betriebe wirklich getrennt sind und Sie das belegen können.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Belege sammeln:** Links zu beiden Einträgen, Fotos der Beschilderung, Gewerbe- oder Registerauszug, Impressum der Website, bei Umzug Mietvertrag oder Ummeldung.",
            "**Fall knapp beschreiben:** welcher Eintrag bleibt, welcher weg soll, welche Schritte Sie schon unternommen haben, mit Datum.",
            "**Bei getrennten Betrieben am selben Ort:** Google verlangt den Nachweis einer dauerhaften Beschilderung, die beide Betriebe deutlich zeigt.",
            "**Bei falschem Namen, falscher Nummer oder Website eines fremden Eintrags:** Dafür gibt es Googles Beschwerdeformular für Unternehmensangaben, nicht den Duplikat-Weg.",
          ],
        },
        {
          t: "p",
          text: "Verschwindet nach der Bereinigung Ihr gepflegtes Profil statt des Duplikats aus der Suche, gehen Sie die Prüfschritte in [Google-Profil nicht in der Suche sichtbar](/blog/gbp-nicht-in-suche-sichtbar) durch. Wurde das Profil gesperrt, hilft [Google-Profil gesperrt: so reaktivieren Sie es](/blog/gbp-suspendiert-reaktivieren).",
        },
      ],
    },
    {
      id: "vorbeugen",
      title: "Neue Duplikate vermeiden",
      answer:
        "Duplikate entstehen, wenn jemand ein neues Profil anlegt, statt das bestehende zu suchen, zu beanspruchen oder zu ändern. Ein klarer Zuständiger, dokumentierte Zugänge und eine feste Regel für Umzug und Umbenennung verhindern das.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Ein Hauptkonto als primärer Inhaber,** das dem Betrieb gehört, nicht einem Mitarbeiter oder einer Agentur. Agenturen bekommen Verwalterzugriff.",
            "**Vor jedem neuen Profil suchen:** über business.google.com/add mit Name und Adresse. Erscheint ein Eintrag, beanspruchen Sie ihn.",
            "**Umzug und Umbenennung im bestehenden Profil** erledigen, nie über ein neues.",
            "**Fachkräfte informieren:** Wer die Praxis verlässt, nimmt sein Profil mit oder pflegt die neue Adresse. Angestellte legen keine Profile an.",
            "**Zweimal im Jahr suchen,** mit denselben Anfragen wie oben: Nummern, alte Namen, alte Adressen, Namen der Fachkräfte.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie das bereinigte Profil anschließend vollständig ausbauen, zeigt [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren). Den Zusammenhang mit dem Ranking in Maps erklärt [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern), den Gesamtrahmen der [Local-SEO-Leitfaden](/blog/ultimate-guide-local-seo).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert es, bis ein Duplikat verschwindet?",
      a: "Google nennt keine feste Dauer. Vorschläge in Maps werden geprüft, bevor sie erscheinen. Bei einem Zugriffsantrag hat der Inhaber drei Tage Zeit zu antworten. Neue Inhaber müssen sieben Tage warten, bevor sie Profilinhalte und Verwalter entfernen dürfen.",
    },
    {
      q: "Bleiben die Bewertungen erhalten, wenn zwei Einträge zusammengeführt werden?",
      a: "Laut Google werden die Rezensionen bei einer Zusammenführung zusammengelegt. Antworten auf Rezensionen können verloren gehen. Eine Garantie für jede einzelne Bewertung gibt Google nicht, sichern Sie wichtige Antworten deshalb vorher als Text.",
    },
    {
      q: "Verschwindet ein Eintrag, wenn ich ihn aus meinem Konto entferne?",
      a: "Nicht unbedingt. Google schreibt, dass ein Betrieb auch ohne Inhaber und Inhalte weiter in Suche und Maps erscheinen kann. Zeigt er denselben Betrieb wie Ihr Hauptprofil, melden Sie ihn zusätzlich in Maps als „Duplikat eines anderen Orts“.",
    },
    {
      q: "Darf eine Ärztin neben der Praxis ein eigenes Profil haben?",
      a: "Ja, wenn sie Kundenverkehr hat und am Standort zu den Öffnungszeiten direkt erreichbar ist. Arbeiten mehrere Fachkräfte am Standort, trägt ihr Profil nur ihren Namen, die Praxis bekommt ein eigenes. Angestellte dürfen keine eigenen Profile anlegen, und getrennte Profile je Fachgebiet sind nicht erlaubt.",
    },
    {
      q: "Was mache ich, wenn eine frühere Agentur das Profil verwaltet?",
      a: "Fordern Sie über business.google.com/add Zugriff an. Antwortet die Agentur nicht innerhalb von drei Tagen, können Sie das Profil unter Umständen selbst bestätigen. Google bietet diese Option nicht immer an. Lehnt sie ab, legen Sie Einspruch ein. Künftig gehört der primäre Inhaberzugang dem Betrieb.",
    },
    {
      q: "Wir sind umgezogen und haben jetzt zwei Einträge. Welcher bleibt?",
      a: "Google sieht vor, dass Sie die Adresse im bestehenden Profil ändern. Behalten Sie das Profil mit Bestätigung und Bewertungshistorie, tragen Sie dort die neue Adresse ein und entfernen oder melden Sie das andere. Einen fremden Eintrag an der alten Adresse melden Sie in Maps als „Umgezogen“.",
    },
  ],
  sources: [
    { title: "Probleme mit doppelten Profilen und Eigentumsrechten beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/12756178?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Unternehmensprofil aus Ihrem Google-Konto entfernen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4669092?hl=de" },
    { title: "Inhaberschaft eines Unternehmensprofils beantragen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4566671?hl=de" },
    { title: "Ort auf Google Maps als geschlossen oder wieder geöffnet kennzeichnen", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/10552932?hl=de" },
    { title: "Entfernung eines Unternehmensprofils aus der Google Suche und Google Maps beantragen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/16043467?hl=de" },
  ],
  related: [
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "gbp-mehrere-standorte", title: "Mehrere Standorte im Google-Profil" },
    { slug: "gbp-nicht-in-suche-sichtbar", title: "Google-Profil nicht in der Suche sichtbar" },
    { slug: "google-maps-spam-erkennen", title: "Google-Maps-Spam erkennen und melden" },
  ],
  cta: {
    title: "Steht Ihr Betrieb zweimal bei Google?",
    text: "Wir suchen nach doppelten und veralteten Einträgen Ihres Betriebs in Google Maps und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, welche Einträge bleiben und welcher Weg zur Bereinigung passt. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
