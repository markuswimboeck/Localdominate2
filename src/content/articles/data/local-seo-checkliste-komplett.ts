import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-checkliste-komplett",
  lang: "de",
  seoTitle: "Local SEO Checkliste: Die Ersteinrichtung in 6 Phasen",
  seoDescription:
    "Die Checkliste für die erste Einrichtung: Unternehmensprofil, Website, Verzeichnisse, Bewertungen, Messung und KI-Suche, jeder Punkt mit Begründung.",
  h1: "Local SEO Checkliste: Die komplette Ersteinrichtung für lokale Betriebe",
  kicker: "Checkliste",
  lead:
    "Für Inhaber, die einen Betrieb neu eröffnen, ihr Google-Unternehmensprofil zum ersten Mal richtig aufsetzen oder nach Jahren ohne Pflege einmal sauber von vorn beginnen. Sie bekommen jeden Punkt der Ersteinrichtung in der richtigen Reihenfolge, mit einer Zeile, warum er zählt, und einem Link zur ausführlichen Anleitung.",
  answer:
    "Die Ersteinrichtung für Local SEO läuft in sechs Phasen: Stammdaten festlegen, das Google-Unternehmensprofil anlegen, bestätigen und vollständig ausfüllen, die Website mit einer Seite je Leistung und strukturierten Daten aufbauen, die wichtigsten Verzeichnisse angleichen, einen Ablauf für Bewertungen einrichten und Ausgangswerte messen. Grundlage sind Googles Richtlinien, denn Google sortiert lokal nach Relevanz, Entfernung und Bekanntheit.",
  takeaways: [
    "Legen Sie Name, Adresse oder Einzugsgebiet, Telefonnummer und Öffnungszeiten einmal schriftlich fest und verwenden Sie sie danach überall gleich.",
    "Prüfen Sie vor dem Anlegen, ob es schon ein Profil gibt. Ein zweites Profil für denselben Standort verstößt gegen Googles Richtlinien.",
    "Der Firmenname im Profil ist der echte Name ohne Orte, Leistungen oder „24 Stunden“. Zusätze können zur Sperrung führen.",
    "Bewertungen sammeln Sie von allen Kunden, ohne Gegenleistung, ohne Quoten für Mitarbeitende und ohne Druck vor Ort.",
    "Für Übersichten mit KI und den KI-Modus gibt es laut Google keine Sonderoptimierung. Eine Platzierung kann niemand garantieren.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-13",
  readingTime: 12,
  sections: [
    {
      id: "welche-liste",
      title: "Ersteinrichtung, Audit oder Routine: welche Liste Sie brauchen",
      answer:
        "Diese Checkliste ist für den Start: Sie richten alles einmal vollständig und richtig ein. Wer schon ein gepflegtes Profil hat, prüft es besser mit dem Audit, und für danach gibt es die Monatsroutine.",
      blocks: [
        {
          t: "table",
          caption: "Drei Listen für drei Situationen",
          head: ["Ihre Lage", "Passende Liste"],
          rows: [
            ["Neuer Betrieb, neues Profil oder Neustart nach langer Pause", "Diese Checkliste zur Ersteinrichtung"],
            ["Profil und Website existieren, Sie wollen wissen, was fehlt", "[Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste)"],
            ["Einrichtung steht, es geht um die laufende Pflege", "[Monatliche Local-SEO-Checkliste](/blog/local-seo-monthly-checklist)"],
            ["Sie wollen die Arbeit über drei Monate verteilen", "[Local SEO in 12 Wochen](/blog/local-seo-roadmap-90-tage)"],
          ],
        },
        {
          t: "note",
          label: "Was Sie nicht erwarten sollten",
          text: "Google schreibt in seiner Hilfe zum lokalen Ranking, dass sich eine bessere Position weder anfordern noch kaufen lässt. Die Checkliste schafft die Voraussetzungen, damit Google Ihren Betrieb richtig zuordnen kann. Eine bestimmte Position verspricht sie nicht.",
        },
      ],
    },
    {
      id: "phase-0-stammdaten",
      title: "Phase 0: Stammdaten festlegen",
      answer:
        "Bevor Sie irgendwo etwas eintragen, schreiben Sie einmal verbindlich auf, wie Ihr Betrieb heißt, wo er ist oder welches Gebiet er bedient, unter welcher Nummer er erreichbar ist und wann er geöffnet hat. Diese Fassung kopieren Sie danach überall hin.",
      blocks: [
        {
          t: "table",
          caption: "Stammdatenblatt: Punkt und Begründung",
          head: ["Punkt", "Warum"],
          rows: [
            ["Firmenname so, wie er auf Schild, Website und Briefpapier steht", "Google verlangt den Namen, der im echten Leben einheitlich verwendet wird."],
            ["Adresse mit Kundenverkehr oder Liste der Orte im Einzugsgebiet", "Davon hängt ab, ob Sie im Profil eine Adresse zeigen oder ausblenden."],
            ["Eine Telefonnummer, die Ihr Betrieb selbst verwaltet", "Google verlangt eine Nummer unter direkter Kontrolle des Betriebs, keine Sonderrufnummer."],
            ["Website-Adresse des Standorts", "Profil und Website sollen auf dieselbe, passende Seite zeigen."],
            ["Reguläre Öffnungszeiten und bekannte Sondertage", "Falsche Zeiten fallen Kunden sofort auf, vollständige Angaben helfen laut Google beim Ranking."],
            ["Hauptleistung in einem Satz", "Daraus leiten Sie später die Hauptkategorie und die Leistungsseiten ab."],
            ["Ein Google-Konto des Betriebs, nicht das private Konto einer Aushilfe", "Wer das Konto hat, hat das Profil. Ein Wechsel ist später mühsam."],
          ],
        },
      ],
    },
    {
      id: "phase-1-anlegen-bestaetigen",
      title: "Phase 1a: Unternehmensprofil anlegen und bestätigen",
      answer:
        "Suchen Sie zuerst, ob Google schon ein Profil für Ihren Betrieb hat, und beanspruchen Sie es, statt ein neues anzulegen. Danach bestätigen Sie das Profil mit der Methode, die Google Ihnen anbietet.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Vorhandenes Profil suchen", text: "Suchen Sie Ihren Namen und Ihre Adresse in Google Maps und unter business.google.com/add. Google erlaubt nur ein Profil je Betrieb und Standort. Warum: Ein Duplikat teilt Bewertungen auf und kann entfernt werden." },
            { title: "Inhaberschaft anfordern, falls nötig", text: "Verwaltet jemand anderes das Profil, etwa eine frühere Agentur, fordern Sie über dasselbe Formular den Zugriff an. Laut Google hat der bisherige Inhaber drei Tage Zeit zu antworten. Warum: So behalten Sie die vorhandenen Bewertungen." },
            { title: "Neues Profil anlegen", text: "Nur wenn es keines gibt, über „Unternehmen zu Google hinzufügen“. Warum: Name, Kategorie und Adresse bestimmen, für welche Suchen Sie infrage kommen." },
            { title: "Bestätigen", text: "Google wählt die Methode automatisch: Telefon oder SMS, E-Mail, Video oder Postkarte. Ist eine Videobestätigung möglich, empfiehlt Google sie. Warum: Erst die Bestätigung zeigt Google, dass Sie den Betrieb vertreten dürfen." },
            { title: "Während der Prüfung nichts ändern", text: "Bei der Postkarte gilt der Code 30 Tage. Bis Sie ihn eingegeben haben, ändern Sie laut Google weder Name noch Adresse noch Kategorie, sonst funktioniert der Code nicht. Warum: Jede Änderung kann die Prüfung neu starten." },
          ],
        },
        {
          t: "p",
          text: "Die Prüfung dauert laut Google bis zu fünf Werktage, in seltenen Fällen länger. Was bei einer abgelehnten oder hängenden Bestätigung hilft, steht in [Verifizierung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
        },
      ],
    },
    {
      id: "phase-1-ausfuellen",
      title: "Phase 1b: Unternehmensprofil vollständig ausfüllen",
      answer:
        "Füllen Sie alle Felder aus, die für Ihre Kategorie angeboten werden, und halten Sie sich dabei an Googles Richtlinien. Google schreibt, dass Betriebe mit vollständigen und genauen Angaben eher in lokalen Ergebnissen erscheinen.",
      blocks: [
        {
          t: "table",
          caption: "Profilfelder bei der Ersteinrichtung",
          head: ["Punkt", "Warum"],
          rows: [
            ["**Name** ohne Zusätze: keine Orte, Leistungen, Slogans, Öffnungshinweise wie „24 Stunden geöffnet“, keine Großbuchstaben-Schreibweise", "Unnötige Angaben im Namen sind nicht erlaubt und können zur Sperrung des Profils führen."],
            ["**Hauptkategorie** so genau wie möglich, wenige weitere Kategorien nur für echte Abteilungen oder Leistungen", "Google rät zu so wenigen und so spezifischen Kategorien wie möglich, nicht zu einer je Leistung."],
            ["**Adresse** nur, wenn Kunden Sie dort besuchen und während der Öffnungszeiten jemand da ist", "Virtuelle Büros, entfernte Postfächer und Coworking-Plätze ohne Beschilderung und Personal sind nicht zulässig."],
            ["**Einzugsgebiet** als benannte Orte, Postleitzahlen oder Regionen, höchstens 20", "Ein Radius ist nicht möglich. Google rät zu höchstens etwa zwei Autostunden um den Betrieb."],
            ["**Telefonnummer** aus dem Stammdatenblatt", "Sie muss zu Ihrem Standort führen, Sonderrufnummern sind unabhängig vom Tarif ausgeschlossen."],
            ["**Website-Link** auf die Seite des Standorts", "Links, die auf Zwischenseiten umleiten, lässt Google nicht zu."],
            ["**Öffnungszeiten** und **spezielle Öffnungszeiten** für Feiertage", "Google nennt aktuelle reguläre und besondere Zeiten ausdrücklich. Wer nur nach Termin arbeitet, gibt laut Richtlinien keine Zeiten an."],
            ["**Beschreibung** bis 750 Zeichen, ohne Links und ohne Aktionen oder Preise", "Sie erklärt, was den Betrieb ausmacht. URLs und HTML sind nicht erlaubt."],
            ["**Attribute** wie Parkplatz oder WLAN, soweit für Ihre Kategorie angeboten", "Google nennt Attribute als Teil vollständiger Angaben."],
          ],
        },
        {
          t: "h3",
          text: "Leistungen und Produkte",
        },
        {
          t: "p",
          text: "Dienstleister in bestimmten Kategorien tragen **Leistungen** aus Vorschlägen oder als eigene Leistung ein, auf Wunsch mit Preis und Beschreibung. Eigene Leistungsnamen mit Telefonnummern oder Preisen lehnt Google ab. Geschäfte mit physischen Waren nutzen den **Produkt-Editor**, dessen Einträge den Richtlinien für Shopping-Anzeigen entsprechen müssen. Warum: So sieht man, was Sie konkret anbieten. Die Details stehen in [Produkte und Leistungen im Profil](/blog/google-business-produkte-services).",
        },
        {
          t: "h3",
          text: "Fotos, Logo und Titelbild",
        },
        {
          t: "table",
          caption: "Technische Vorgaben laut Google",
          head: ["Medium", "Vorgabe"],
          rows: [
            ["Foto", "JPG oder PNG, 10 KB bis 5 MB, mindestens 250 × 250 Pixel, empfohlen 720 × 720 Pixel"],
            ["Video", "bis 30 Sekunden, bis 75 MB"],
            ["Logo und Titelbild", "Logo zur Wiedererkennung, Titelbild, das den Betrieb am besten zeigt"],
          ],
        },
        {
          t: "p",
          text: "Laden Sie zum Start Außenansicht, Innenräume, Team und typische Arbeiten hoch. Bilder müssen laut Google die Wirklichkeit zeigen. Warum: Ein schwaches Titelbild kann Google durch ein Kundenfoto ersetzen.",
        },
        {
          t: "note",
          label: "Nicht mehr einplanen",
          text: "Den Chat im Profil gibt es laut Google seit dem 31. Juli 2024 nicht mehr. Die Rubrik „Fragen und Antworten“ sollten Sie ebenfalls nicht mehr einplanen: Google hat die zugehörige Schnittstelle am 3. November 2025 eingestellt, und Whitespark berichtet, dass die Rubrik in Profilen nicht mehr erscheint. Eine neue Frage-Funktion in der Maps-App hat Whitespark bisher nur bei Betrieben in den USA gesehen. Häufige Kundenfragen beantworten Sie deshalb auf Ihrer Website.",
        },
        {
          t: "p",
          text: "Wie Sie die passende Hauptkategorie finden, zeigt der [Kategorien-Leitfaden](/blog/google-business-kategorien-guide).",
        },
      ],
    },
    {
      id: "phase-2-website",
      title: "Phase 2: Website einrichten",
      answer:
        "Die Website liefert die Inhalte, mit denen Google Ihre Leistungen und Ihren Ort versteht. Zur Ersteinrichtung gehören eine Seite je Hauptleistung, Kontaktdaten als Text, strukturierte Daten und die Search Console.",
      blocks: [
        {
          t: "table",
          caption: "Website-Punkte bei der Ersteinrichtung",
          head: ["Punkt", "Warum"],
          rows: [
            ["Eine Seite je Hauptleistung mit Ort, Ablauf und Kontaktweg", "Eine Sammelseite „Leistungen“ beantwortet keine einzelne Suche gut."],
            ["Name, Adresse und Telefon als Text auf Kontaktseite, Impressum und in der Fußzeile, gleich wie im Stammdatenblatt", "Gleiche Angaben erleichtern die Zuordnung von Website und Profil."],
            ["Keine Ortsseiten auf Vorrat, die sich nur im Ortsnamen unterscheiden", "Google nennt Seiten für einzelne Städte, die zum selben Ziel führen, als Beispiel für Brückenseiten-Missbrauch."],
            ["Strukturierte Daten vom Typ LocalBusiness oder einem genaueren Untertyp", "Pflicht sind laut Google Name und Adresse, empfohlen unter anderem Telefon, Öffnungszeiten und URL."],
            ["Ladezeit und Bedienbarkeit am Handy prüfen", "Google nennt als gute Werte LCP innerhalb von 2,5 Sekunden, INP unter 200 Millisekunden, CLS unter 0,1."],
            ["Google Search Console einrichten, am besten als Domain-Property", "Eine Domain-Property umfasst alle Subdomains und Protokolle und wird per DNS-Eintrag bestätigt."],
          ],
        },
        {
          t: "p",
          text: "Die strukturierten Daten müssen zu dem passen, was sichtbar auf der Seite steht. Wie Sie das Markup Schritt für Schritt einbauen und testen, zeigt [LocalBusiness-Schema implementieren](/blog/localbusiness-schema-implementierung).",
        },
      ],
    },
    {
      id: "phase-3-verzeichnisse",
      title: "Phase 3: Daten in Verzeichnissen und Kartendiensten",
      answer:
        "Tragen Sie Ihre Stammdaten in die Kartendienste von Microsoft und Apple, in die großen Verzeichnisse Ihres Landes und bei Kammer oder Verband ein. Es geht um richtige Einträge, nicht um möglichst viele.",
      blocks: [
        {
          t: "table",
          caption: "Einträge bei der Ersteinrichtung (Auswahl, ohne Rangfolge)",
          head: ["Punkt", "Warum"],
          rows: [
            ["Bing Places for Business", "Kostenlos, Einträge erscheinen in der Bing-Suche und in Bing Maps. Microsoft bietet einen Import von Google an."],
            ["Apple Business (seit 14. April 2026 Nachfolger von Apple Business Connect)", "Kostenlos, dort pflegen Sie Ihre Ortskarte in Apple Karten mit Fotos und Öffnungszeiten."],
            ["Große Verzeichnisse Ihres Landes, zum Beispiel Das Örtliche oder Gelbe Seiten in Deutschland, Herold in Österreich, local.ch oder search.ch in der Schweiz", "Dort suchen Kunden, und dort stehen oft alte Daten, die Sie korrigieren sollten."],
            ["Kammer, Innung, Verband, Tourismusverband und wichtige Branchenportale", "Einträge von Organisationen vor Ort zeigen, dass Ihr Betrieb dort eine Rolle spielt."],
          ],
        },
        {
          t: "p",
          text: "Notieren Sie, wo Sie welchen Eintrag mit welchem Zugang angelegt haben. Welche Verzeichnisse sich in Deutschland, Österreich und der Schweiz lohnen, beschreibt [Local Citations](/blog/local-citations-2025).",
        },
      ],
    },
    {
      id: "phase-4-bewertungen",
      title: "Phase 4: Einen Ablauf für Bewertungen einrichten",
      answer:
        "Erstellen Sie den Bewertungslink und den QR-Code im Profil und legen Sie einen festen Moment fest, an dem jeder Kunde gefragt wird. Google erlaubt die Bitte um echte Bewertungen, verbietet aber Anreize, Vorauswahl, Quoten und Druck vor Ort.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Link und QR-Code erstellen", text: "Im Profil unter „Rezensionen lesen“ und „Mehr Rezensionen erhalten“. Den QR-Code erzeugt Google laut Hilfe nur im Browser am Computer. Warum: Ein direkter Link senkt die Hürde für Kunden." },
            { title: "Festen Moment wählen", text: "Rechnung, Dankesmail oder Abschlussnachricht. Google nennt solche Stellen selbst als Beispiele. Warum: Wer jeden Kunden zum gleichen Zeitpunkt fragt, wählt nicht nach Zufriedenheit aus." },
            { title: "Team einweisen", text: "Wer fragt, mit welchem Satz, über welchen Kanal. Keine Vorgaben zu einer Anzahl. Warum: Quoten verbietet Google ausdrücklich." },
            { title: "Antworten einplanen", text: "Antworten ist erst nach der Bestätigung möglich. Legen Sie fest, wer antwortet. Warum: Google schreibt, dass Antworten zeigen, dass Sie Rückmeldungen ernst nehmen." },
          ],
        },
        {
          t: "table",
          caption: "Was Googles Richtlinien für Rezensionen ausschließen",
          head: ["Nicht erlaubt", "Beispiel"],
          rows: [
            ["Anreize", "Rabatt, Gratisleistung oder Geld für eine Bewertung"],
            ["Vorauswahl", "Nur zufriedene Kunden fragen oder von negativen Bewertungen abraten"],
            ["Quoten und Inhaltsvorgaben", "Mitarbeitende sollen eine bestimmte Zahl einholen oder ihren Namen nennen lassen"],
            ["Druck vor Ort", "Kunden im Geschäft zur Bewertung drängen"],
            ["Interessenkonflikt", "Bewertungen von Mitarbeitenden, früheren Mitarbeitenden oder Vertragspartnern"],
          ],
        },
        {
          t: "p",
          text: "Formulierungen für die Bitte und einen vollständigen Ablauf finden Sie in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen#ablauf).",
        },
      ],
    },
    {
      id: "phase-5-messung",
      title: "Phase 5: Messung einrichten und Ausgangswerte festhalten",
      answer:
        "Notieren Sie vor allen weiteren Änderungen, wo Sie stehen: Leistungsdaten des Profils, Zahlen aus der Search Console und Ihre Anfragen. Markieren Sie den Website-Link im Profil, damit Sie Besuche aus dem Profil erkennen.",
      blocks: [
        {
          t: "table",
          caption: "Messpunkte für den Start",
          head: ["Punkt", "Warum"],
          rows: [
            ["Leistungsdaten im Profil: Aufrufe, Suchbegriffe, Anrufe, Routen, Website-Klicks, Buchungen", "Kostenlos und direkt von Google. Anrufe sind Klicks auf die Anruftaste, keine geführten Gespräche."],
            ["Suchbegriffe monatlich ablesen", "Google aktualisiert diesen Wert zu Beginn jedes Monats."],
            ["Search Console: Klicks, Impressionen und Suchanfragen der Website", "Zeigt, welche Leistungsseiten gefunden werden. Klicks aus Übersichten mit KI und dem KI-Modus zählen laut Google dort mit."],
            ["Website-Link im Profil mit UTM-Parametern versehen", "Laut Google Analytics immer utm_source, utm_medium und utm_campaign angeben. Groß- und Kleinschreibung zählt."],
            ["Anfragen, Buchungen und Anrufe im eigenen System", "Nur hier sehen Sie, ob Sichtbarkeit zu Aufträgen führt."],
          ],
        },
        {
          t: "p",
          text: "Ein Beispiel für den markierten Link: „?utm_source=google&utm_medium=organic&utm_campaign=unternehmensprofil“. Notieren Sie alle Werte mit Datum und Zeitraum.",
        },
      ],
    },
    {
      id: "phase-6-ki-suche",
      title: "Phase 6: Grundlagen für KI-Suche",
      answer:
        "Google schreibt, dass es für Übersichten mit KI und den KI-Modus keine zusätzlichen Anforderungen und keine Sonderoptimierung gibt. Eine Seite muss indexiert sein und als Snippet infrage kommen, ein Erscheinen garantiert aber auch das nicht.",
      blocks: [
        {
          t: "table",
          caption: "KI-Grundlagen bei der Ersteinrichtung",
          head: ["Punkt", "Warum"],
          rows: [
            ["Crawling in der robots.txt nicht versehentlich sperren", "Google empfiehlt in seiner Dokumentation zu KI-Funktionen, das Crawling zu erlauben."],
            ["Wichtige Angaben als Text, nicht nur in Bildern oder PDFs", "Google empfiehlt, wichtige Inhalte in Textform bereitzustellen."],
            ["Strukturierte Daten passend zum sichtbaren Text", "Google verlangt diese Übereinstimmung ausdrücklich."],
            ["Unternehmensprofil aktuell halten", "Google nennt aktuelle Angaben im Profil in derselben Dokumentation."],
            ["Häufige Kundenfragen auf der Website beantworten, jeweils mit einem klaren ersten Satz", "Seit dem Ende der Fragen und Antworten im Profil ist die Website der Ort dafür."],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Andere KI-Assistenten veröffentlichen ihre Quellen und Regeln weniger genau als Google. Unsere Einschätzung: Einheitliche Stammdaten in Profil, Website und Verzeichnissen sind die beste Grundlage. Belegen lässt sich das für einzelne Systeme nicht, und niemand kann eine Nennung in KI-Antworten zusagen.",
        },
        {
          t: "p",
          text: "Die vollständige Liste mit Crawler-Zugang und Prüfung steht in der [KI-Sichtbarkeits-Checkliste](/blog/ai-visibility-checklist).",
        },
      ],
    },
    {
      id: "danach",
      title: "Nach der Einrichtung: was als Nächstes kommt",
      answer:
        "Ist die Ersteinrichtung abgeschlossen, wechseln Sie zur Monatsroutine und prüfen den Stand etwa einmal im Jahr mit dem Audit. Größere Änderungen wie Umzug oder neue Nummer beginnen wieder beim Stammdatenblatt.",
      blocks: [
        {
          t: "ol",
          items: [
            "Warten Sie auf die Prüfung durch Google, bevor Sie Profilangaben erneut ändern.",
            "Vergleichen Sie Ihre Ausgangswerte nach einigen Monaten mit gleich langen Zeiträumen, möglichst in derselben Saison.",
            "Prüfen Sie den Gesamtstand regelmäßig mit dem Audit, statt die Ersteinrichtung zu wiederholen.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert die Ersteinrichtung?",
      a: "Die Bestätigung des Profils dauert laut Google bis zu fünf Werktage, bei der Postkarte kommt der Versand hinzu, laut Google meist innerhalb von 14 Tagen. Wie lange es danach bis zu sichtbaren Veränderungen dauert, hängt vom Wettbewerb im Ort ab.",
    },
    {
      q: "Kann ich die Bestätigungsmethode selbst auswählen?",
      a: "Nein. Google legt die Methode automatisch fest, abhängig von Unternehmensart, öffentlichen Informationen, Region und Öffnungszeiten. Manchmal sind mehrere Schritte nötig. Ist eine Videobestätigung möglich, empfiehlt Google sie.",
    },
    {
      q: "Darf ich ohne Ladengeschäft ein Profil anlegen?",
      a: "Ja. Betriebe ohne Kundenverkehr an der Adresse entfernen die Adresse aus dem Profil und geben ein Einzugsgebiet aus bis zu 20 Orten, Postleitzahlen oder Regionen an. Virtuelle Büros und gemietete Postanschriften ohne echten Betrieb sind nicht zulässig.",
    },
    {
      q: "Soll ich die Fragen und Antworten im Profil vorausfüllen?",
      a: "Nein. Google hat die Schnittstelle dafür im November 2025 eingestellt, und die Rubrik erscheint laut Whitespark in Profilen nicht mehr. Beantworten Sie häufige Fragen auf Ihrer Website und halten Sie das Profil vollständig.",
    },
    {
      q: "Kann ich mir bei der Einrichtung eine Top-Position sichern?",
      a: "Nein. Google schreibt, dass sich ein besseres lokales Ranking weder anfordern noch bezahlen lässt. Eine vollständige, richtige Einrichtung schafft die Voraussetzungen, eine Position garantiert sie nicht.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Unternehmensprofil hinzufügen oder beanspruchen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/2911778?hl=de" },
    { title: "Inhaberschaft eines Unternehmensprofils anfordern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/4566671?hl=de" },
    { title: "Unternehmen bei Google bestätigen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7107242?hl=de" },
    { title: "Unternehmenskategorie verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7249669?hl=de" },
    { title: "Einzugsgebiete für Unternehmen ohne festen Standort und Hybridunternehmen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9157481?hl=de" },
    { title: "Unternehmensprofil bearbeiten (Beschreibung, Eröffnungsdatum)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3039617?hl=de" },
    { title: "Dienstleistungen in Ihrem Unternehmensprofil verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9455399?hl=de" },
    { title: "About product editor", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9330323?hl=en" },
    { title: "Fotos und Videos in Ihrem Unternehmensprofil verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6103862?hl=de" },
    { title: "Änderungen an der Chatfunktion und Anrufliste in Google Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14919056?hl=de" },
    { title: "My Business Q&A API: Change log (Einstellung am 3. November 2025)", publisher: "Google for Developers", url: "https://developers.google.com/my-business/content/qanda/change-log" },
    { title: "With Google Q&A Gone, You Need a Maps Ask A Question Strategy (26. Januar 2026)", publisher: "Whitespark", url: "https://whitespark.ca/blog/with-google-qa-gone-you-need-a-maps-ask-a-question-strategy/" },
    { title: "Google-Link oder QR-Code zum Anfordern von Rezensionen erstellen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/16816815?hl=de" },
    { title: "Kundenrezensionen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3474050?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Richtlinien für Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness), Stand 8. September 2026", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche (Missbrauch von Brückenseiten), Stand 28. August 2026", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Website- oder Plattform-Property zur Search Console hinzufügen", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/34592?hl=de" },
    { title: "Kampagnendaten mithilfe benutzerdefinierter URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "KI-Funktionen und Ihre Website, Stand 10. Dezember 2025", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Introducing the New Bing Places for Business (Oktober 2025)", publisher: "Microsoft Bing Blog", url: "https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research" },
    { title: "Apple stellt Apple Business vor (aktualisiert 24. März 2026)", publisher: "Apple Newsroom", url: "https://www.apple.com/de/newsroom/2026/03/introducing-apple-business/" },
  ],
  related: [
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "gbp-fotos-optimieren", title: "Fotos im Unternehmensprofil" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: einheitliche Firmendaten" },
    { slug: "local-seo-reporting-template", title: "Local-SEO-Reporting-Vorlage" },
  ],
  cta: {
    title: "Ist Ihre Einrichtung vollständig?",
    text: "Wir sehen uns Ihr Google-Unternehmensprofil, Ihre Website und die wichtigsten Einträge an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die bei der Einrichtung noch fehlen. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
