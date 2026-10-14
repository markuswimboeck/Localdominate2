import type { V4Article } from "../types";

const article: V4Article = {
  slug: "local-seo-reporting-template",
  lang: "de",
  seoTitle: "Local-SEO-Reporting: Monatsbericht auf einer Seite",
  seoDescription:
    "Vorlage für einen einseitigen Local-SEO-Monatsbericht: welche Zahl woher kommt, wie Sie Saison und kleine Zahlen lesen und was in die nächsten Schritte gehört.",
  h1: "Local-SEO-Reporting: die Vorlage für einen Monatsbericht auf einer Seite",
  kicker: "Messen",
  lead:
    "Für Inhaber lokaler Betriebe, die jeden Monat entscheiden wollen, was als Nächstes zu tun ist, und für Agenturen, die einem Inhaber berichten. Sie bekommen eine Vorlage für eine Seite, erfahren, welche Zahl Sie aus welchem Werkzeug holen, wie Sie Saison und kleine Zahlen richtig lesen und wie Sie den Teil „Maßnahmen und nächste Schritte“ schreiben.",
  answer:
    "Ein guter Local-SEO-Monatsbericht passt auf eine Seite und dient einer Entscheidung. Er enthält wenige Zahlen aus dem Google-Unternehmensprofil, der Search Console, der Web-Analyse und dem eigenen Anfrage- und Buchungseingang, jeweils mit Vorjahresmonat. Darunter steht, was im Monat geändert wurde, was die Zahlen zeigen und welche zwei oder drei Schritte als Nächstes folgen, mit Verantwortlichem und Termin.",
  takeaways: [
    "Der Bericht dient einer Entscheidung, nicht der Sammlung. Sechs bis zehn Zahlen auf einer Seite reichen, dazu ein kurzer Text mit Maßnahmen und nächsten Schritten.",
    "Die Leistungsdaten im Unternehmensprofil zählen Klicks auf die Anruftaste, nicht geführte Gespräche, und enthalten laut Google auch Aufrufe und Aktionen aus Google Ads.",
    "Vergleichen Sie mit dem Vorjahresmonat, nicht nur mit dem Vormonat. Die Search Console speichert laut Google nur 16 Monate, notieren Sie die Werte deshalb jeden Monat.",
    "Bei kleinen Zahlen sind Schwankungen von wenigen Anrufen oder Anfragen normal. Zeigen Sie absolute Werte und ziehen Sie Schlüsse erst über mehrere Monate.",
    "Der wichtigste Teil steht unten: was geändert wurde, was die Zahlen zeigen und was als Nächstes kommt, mit Namen und Datum.",
  ],
  publishedAt: "2026-03-05",
  updatedAt: "2026-10-13",
  readingTime: 13,
  sections: [
    {
      id: "wozu",
      title: "Wozu ein Monatsbericht auf einer Seite",
      answer:
        "Ein Monatsbericht soll eine Frage beantworten: Machen wir weiter wie bisher, ändern wir etwas oder hören wir mit etwas auf? Dafür braucht es wenige, gut erklärte Zahlen und einen klaren Text, keine dreißig Diagramme.",
      blocks: [
        {
          t: "p",
          text: "Viele Berichte zeigen alles, was ein Werkzeug hergibt, und der Inhaber weiß danach nicht, was er tun soll. Ein einseitiger Bericht zwingt zur Auswahl: Nur was eine Entscheidung stützt, kommt hinein.",
        },
        {
          t: "p",
          text: "Dieser Artikel ergänzt drei andere. Welche Zahlen zur lokalen Suche überhaupt eine Quelle haben und wie Sie Ihre Rohdaten monatlich erheben, steht in [Local-SEO-Zahlen](/blog/local-seo-statistiken-daten#monatstabelle). Wie Sie Positionen in Google Maps über Ihr Einzugsgebiet messen, zeigt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker). Welche Kennzahlen sich grundsätzlich eignen, beschreibt [Local SEO Tracking und KPIs](/blog/local-seo-tracking-kpis). Hier geht es um den nächsten Schritt: aus diesen Daten einen Bericht zu machen, nach dem jemand handelt.",
        },
      ],
    },
    {
      id: "aufbau",
      title: "Die Vorlage: fünf Blöcke auf einer Seite",
      answer:
        "Die Vorlage hat fünf Blöcke: Kopf mit Zeitraum, Ergebnis im Betrieb, Sichtbarkeit im Unternehmensprofil, Website und Suche, und zum Schluss Maßnahmen und nächste Schritte. Jede Zahl steht neben dem Vorjahresmonat.",
      blocks: [
        {
          t: "table",
          caption: "Vorlage Monatsbericht (Platzhalter in eckigen Klammern ersetzen)",
          head: ["Block", "Zeile", "Quelle", "[Monat Jahr]", "[Vorjahresmonat]", "[Vormonat]"],
          rows: [
            ["1 Kopf", "Betrieb, Standort, Zeitraum, erstellt am", "", "", "", ""],
            ["2 Ergebnis", "Anfragen, Termine oder Aufträge mit Quelle Google", "Eigener Eingang, Anmeldebogen", "", "", ""],
            ["2 Ergebnis", "Buchungen online", "Buchungssystem", "", "", ""],
            ["3 Profil", "Aufrufe", "Unternehmensprofil, Leistung", "", "", ""],
            ["3 Profil", "Anrufe (Klicks auf die Anruftaste)", "Unternehmensprofil, Leistung", "", "", ""],
            ["3 Profil", "Wegbeschreibungen", "Unternehmensprofil, Leistung", "", "", ""],
            ["3 Profil", "Website-Klicks", "Unternehmensprofil, Leistung", "", "", ""],
            ["3 Profil", "Neue Bewertungen, Durchschnitt", "Unternehmensprofil", "", "", ""],
            ["4 Website", "Klicks aus der Google Suche, ohne Markensuchen", "Search Console, Leistung", "", "", ""],
            ["4 Website", "Impressionen in Übersichten mit KI und KI-Modus", "Search Console, generative KI-Funktionen", "", "", ""],
            ["4 Website", "Besuche über den Profil-Link, Schlüsselereignisse", "Web-Analyse", "", "", ""],
            ["5 Text", "Was wir geändert haben, was die Zahlen zeigen, nächste Schritte", "Eigene Notiz", "", "", ""],
          ],
        },
        {
          t: "p",
          text: "Ergebnis steht bewusst vor Sichtbarkeit: Anfragen und Buchungen sind das, wofür der Betrieb bezahlt, Aufrufe und Klicks erklären, woher sie kommen könnten. Fehlt eine Zeile, weil Sie etwa keine Online-Buchung haben, streichen Sie sie, statt sie leer zu lassen.",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Positionen aus einem Ranking-Tracker gehören nur in den Bericht, wenn Sie sie nach derselben Methode jeden Monat messen. Eine einzelne Position vom eigenen Handy ist für einen Bericht ungeeignet, weil die Entfernung zum Suchenden in das lokale Ranking einfließt.",
        },
      ],
    },
    {
      id: "quellen",
      title: "Welche Zahl Sie woher nehmen",
      answer:
        "Das Unternehmensprofil liefert Aufrufe, Suchbegriffe, Anrufe, Wegbeschreibungen, Website-Klicks und je nach Branche Buchungen, die Search Console Klicks und Impressionen der Website, die Web-Analyse Besuche und Schlüsselereignisse. Jede Zahl misst etwas anderes, deshalb werden sie nie addiert.",
      blocks: [
        {
          t: "table",
          caption: "Werte im Leistungsbericht des Unternehmensprofils laut Google-Hilfe",
          head: ["Wert", "Was Google zählt", "Was Sie im Bericht dazuschreiben"],
          rows: [
            ["Aufrufe", "Personen, die Ihr Profil in Suche und Maps angesehen haben, je Person höchstens einmal pro Tag", "Reichweite, kein Interesse"],
            ["Suchanfragen", "Suchbegriffe, über die Ihr Profil gefunden wurde. Aktualisierung zu Monatsbeginn, Anzeige bis zu fünf Tage später", "Die drei häufigsten Begriffe ohne Ihren Namen"],
            ["Anrufe", "Klicks auf die Anrufschaltfläche im Profil", "Ein Klick ist noch kein Gespräch"],
            ["Wegbeschreibungen", "Routenanfragen, bereinigt um Mehrfachtipps, Abbrüche und Spam", "Wichtig bei Kundenverkehr vor Ort"],
            ["Website-Klicks", "Klicks auf den Website-Link im Profil", "Mit den Besuchen in der Web-Analyse vergleichen"],
            ["Buchungen", "Abgeschlossene Buchungen über einen angebundenen Buchungsanbieter", "Nur wenn eingerichtet"],
          ],
        },
        {
          t: "p",
          text: "Zwei Hinweise aus Googles Hilfe sind für Berichte wichtig. Die Leistungsdaten gibt es nur für bestätigte Profile. Und sie enthalten Aufrufe, Suchen und Aktionen aus den organischen Ergebnissen **und aus Google Ads**. Schalten Sie Anzeigen, schreiben Sie das in den Kopf des Berichts, sonst schreiben Sie einen Anstieg womöglich der Profilpflege zu, obwohl er aus der Werbung kommt.",
        },
        {
          t: "table",
          caption: "Search Console und Web-Analyse",
          head: ["Zahl", "Wo Sie sie finden", "Was Sie wissen sollten"],
          rows: [
            ["Klicks, Impressionen, Klickrate, durchschnittliche Position", "Search Console, Leistung, Suchergebnisse", "Standardansicht sind die letzten drei Monate. Die neuesten Daten können vorläufig sein"],
            ["Klicks ohne Markensuchen", "Search Console, Filter für Markensuchanfragen", "Nicht verfügbar für Websites mit wenigen Impressionen. Google ordnet die Suchanfragen automatisch zu, einzelne können laut Google falsch eingeordnet sein"],
            ["Impressionen in Übersichten mit KI und KI-Modus", "Search Console, Leistungsbericht zu generativen KI-Funktionen", "Laut Google seit 31. August 2026 für alle Websites. Erscheint bei zu wenigen Impressionen meist nicht"],
            ["Besuche über den Profil-Link", "Web-Analyse, Kampagnen", "Nur wenn der Website-Link im Profil UTM-Parameter trägt"],
            ["Schlüsselereignisse", "Google Analytics 4", "Zum Beispiel Formular gesendet oder Telefonnummer angetippt. Bis zu 30 in Standard-Properties"],
          ],
        },
        {
          t: "p",
          text: "Für den markierten Profil-Link verlangt Google Analytics immer utm_source, utm_medium und utm_campaign, und die Werte unterscheiden Groß- und Kleinschreibung. Legen Sie die Schreibweise einmal fest und ändern Sie sie nicht mehr, sonst zerfallen Ihre Monatswerte in mehrere Zeilen. Wie Sie den KI-Bericht der Search Console im Detail lesen, steht in [KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026#search-console).",
        },
      ],
    },
    {
      id: "anrufe-buchungen",
      title: "Anrufe und Buchungen: die Zahlen aus dem Betrieb",
      answer:
        "Die wichtigsten Zahlen stehen in keinem Google-Werkzeug: angenommene Anrufe, Anfragen und Buchungen, die tatsächlich bei Ihnen ankommen. Halten Sie sie im eigenen Eingang fest und fragen Sie neue Kunden, wie sie Sie gefunden haben.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Telefonanlage oder Mobilfunkvertrag:** angenommene und verpasste Anrufe pro Monat. Viele verpasste Anrufe zu bestimmten Zeiten sind oft wichtiger als jede Sichtbarkeitszahl.",
            "**Frage nach der Quelle:** im Anmeldebogen, im Buchungsformular oder am Telefon. Die Antwort „Google“ unterscheidet nicht zwischen Profil, Suche und Anzeige, ist aber die einzige Zahl, die einen echten Kunden mit Google verbindet.",
            "**Buchungssystem:** Buchungen pro Monat, wenn möglich nach Quelle getrennt.",
            "**Anfragen per Formular und E-Mail:** Anzahl, und wie viele davon aus Ihrem Einzugsgebiet kamen und zu Ihrem Angebot passten.",
          ],
        },
        {
          t: "p",
          text: "Laut Googles Richtlinien muss die Telefonnummer im Profil unter der direkten Kontrolle des Betriebs stehen und zu Ihrem Standort führen. Weiterleitungsnummern, über die Anrufer nicht direkt mit Ihrem Betrieb verbunden werden, sind nicht erlaubt. Neben der primären Nummer können Sie bis zu zwei weitere angeben.",
        },
        {
          t: "note",
          label: "Einschätzung zu Tracking-Nummern",
          text: "Eine ausdrückliche Regel zu Tracking-Nummern haben wir in den Richtlinien nicht gefunden. Wir raten, im Profil Ihre echte Nummer zu lassen, weil die Anrufe aus dem Profil ohnehin in den Leistungsdaten gezählt werden. Wer Anrufe von der Website getrennt messen will, setzt eine eigene Nummer besser nur auf der Website ein und klärt den Datenschutz mit dem Anbieter.",
        },
      ],
    },
    {
      id: "lesen",
      title: "Die Zahlen richtig lesen: Saison und Vorjahr",
      answer:
        "Vergleichen Sie jeden Monat mit demselben Monat im Vorjahr, weil lokale Nachfrage oft saisonal schwankt. Der Vergleich mit dem Vormonat zeigt vor allem die Saison, nicht Ihre Arbeit.",
      blocks: [
        {
          t: "p",
          text: "Bei einem Gartenbaubetrieb sind im März oft mehr Anfragen zu erwarten als im Januar, bei einer Heizungsfirma im Oktober mehr als im Juni (Annahme, keine Messung). Solche Unterschiede sagen nichts über die Wirkung von Maßnahmen. Google empfiehlt selbst, bei einem Rückgang einen längeren Zeitraum anzusehen, um wiederkehrende Muster im Jahr auszuschließen, und mit Google Trends zu prüfen, ob sich das Interesse in Ihrer Branche insgesamt verändert hat.",
        },
        {
          t: "table",
          caption: "Lesehilfen für den Bericht",
          head: ["Situation", "So lesen Sie sie"],
          rows: [
            ["Vormonat schlechter, Vorjahresmonat besser", "Wahrscheinlich Saison. Kein Grund zum Umsteuern"],
            ["Vorjahresmonat schlechter, mehrere Monate in Folge", "Echter Rückgang möglich. Profil, Website und Wettbewerb prüfen"],
            ["Aufrufe steigen, Anrufe und Anfragen nicht", "Sichtbar, aber nicht überzeugend. Fotos, Bewertungen, Öffnungszeiten und Website aus Kundensicht prüfen"],
            ["Ein Wert springt in einem einzigen Monat", "Sondereffekt suchen: Feiertage, Betriebsurlaub, Anzeigen, Presseartikel, Messfehler"],
            ["Website-Klicks im Profil und Besuche in der Web-Analyse weichen ab", "Normal. Sie zählen Verschiedenes, und Besuche ohne Einwilligung können je nach Einrichtung in der Analyse fehlen"],
          ],
        },
        {
          t: "p",
          text: "Die Search Console hält laut Google nur die letzten 16 Monate vor. Für den Unternehmensprofil-Bericht nennt die Hilfeseite keinen Zeitraum. Tragen Sie die Werte deshalb jeden Monat in Ihre eigene Tabelle ein, so haben Sie den Vorjahresmonat auch in zwei Jahren noch. Wer mehrere Profile verwaltet, kann die Leistungsdaten laut Google im Business Profile Manager als Tabelle herunterladen.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Der Leistungsbericht zu generativen KI-Funktionen ist laut Google seit dem 31. August 2026 für alle Websites verfügbar. Prüfen Sie, ab welchem Datum er für Ihre Website Werte zeigt. Fehlt der Vorjahresmonat, schreiben Sie in diese Zeile „neu, noch kein Vergleich“, statt einen Trend zu behaupten.",
        },
      ],
    },
    {
      id: "kleine-zahlen",
      title: "Kleine Zahlen ehrlich darstellen",
      answer:
        "Bei kleinen Betrieben ist ein Unterschied von wenigen Anrufen oder Anfragen meist Zufall. Zeigen Sie absolute Zahlen statt Prozenten und urteilen Sie erst über drei Monate oder den Vorjahresvergleich.",
      blocks: [
        {
          t: "p",
          text: "Angenommen, ein Betrieb zählt statt 8 nun 12 Formularanfragen (erfundenes Rechenbeispiel): Das sind rechnerisch 50 % mehr. Das klingt nach Erfolg, sind aber vier Anfragen. Schon eine Woche Urlaub, ein Feiertag oder ein einzelner Großkunde erklärt solche Unterschiede.",
        },
        {
          t: "ul",
          items: [
            "**Absolut statt relativ:** „12 statt 8 Anfragen“ ist ehrlicher als „+50 %“.",
            "**Drei Monate zusammen:** Summieren Sie zusätzlich die letzten drei Monate und vergleichen Sie mit denselben drei Monaten im Vorjahr.",
            "**Richtung statt Ausschlag:** Erst wenn ein Wert mehrere Monate in dieselbe Richtung läuft, ist er eine Aussage.",
            "**Keine Branchenwerte als Maßstab:** Prozentwerte wie „gute Klickrate“ ohne Quelle für Ihre Branche und Region taugen nicht als Ziel. Ihr eigener Vorjahreswert ist der bessere Vergleich.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine feste Grenze, ab der eine Veränderung „echt“ ist, gibt es für Monatsberichte kleiner Betriebe nicht. Als Faustregel nutzen wir: Je kleiner die Zahl, desto mehr Monate brauchen Sie, bevor Sie eine Entscheidung darauf stützen.",
        },
      ],
    },
    {
      id: "massnahmen",
      title: "Der Teil „Maßnahmen und nächste Schritte“",
      answer:
        "Unter den Zahlen stehen drei kurze Absätze: was im Monat geändert wurde (mit Datum), was die Zahlen zeigen und was nicht, und zwei bis drei nächste Schritte mit Verantwortlichem und Termin. Dieser Teil ist der Grund, warum es den Bericht gibt.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Was wir geändert haben", text: "Jede Änderung mit Datum: neue Leistungsseite online am 9., Hauptkategorie geändert am 14., Sonderöffnungszeiten eingetragen. Ohne Datum lässt sich ein Ausschlag später keiner Ursache zuordnen." },
            { title: "Was die Zahlen zeigen", text: "Zwei bis vier Sätze, nüchtern. Was ist gegenüber dem Vorjahresmonat anders, was ist vermutlich Saison, was ist zu klein für eine Aussage." },
            { title: "Was wir noch nicht wissen", text: "Offen benennen, was der Bericht nicht beantworten kann, etwa ob eine Änderung schon wirkt." },
            { title: "Nächste Schritte", text: "Höchstens drei, jeder mit Verantwortlichem und Termin. Dazu, woran Sie in den nächsten Berichten sehen, ob der Schritt etwas gebracht hat." },
          ],
        },
        {
          t: "table",
          caption: "Formulierungen im Vergleich (Zahlen erfunden)",
          head: ["Unbrauchbar", "Brauchbar"],
          rows: [
            ["„Sichtbarkeit deutlich verbessert“", "„Aufrufe 1.180 statt 1.050 im Vorjahresmonat, Anrufe fast gleich“"],
            ["„Ranking optimiert“", "„Hauptkategorie am 14. geändert. Wirkung frühestens im nächsten Bericht prüfbar“"],
            ["„Weiter Content erstellen“", "„Leistungsseite Rückenschmerzen bis 20. November, verantwortlich: Praxisleitung“"],
            ["„KI-Sichtbarkeit gestiegen“", "„Bericht zu KI-Funktionen zeigt 210 Impressionen, neu, noch kein Vergleich“"],
          ],
        },
        {
          t: "p",
          text: "Nächste Schritte sollten aus Ihrer Routine kommen, nicht aus einer Ideenliste. Was sich monatlich prüfen lässt, steht in [Local SEO jeden Monat](/blog/local-seo-monthly-checklist#woche-4-messen). Und kein Bericht kann eine bestimmte Position oder eine Nennung in KI-Antworten zusagen. Google schreibt, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung.",
        },
      ],
    },
    {
      id: "beispiel",
      title: "Ausgefülltes Beispiel (erfunden)",
      answer:
        "Das folgende Beispiel zeigt, wie ein ausgefüllter Bericht aussehen kann. Betrieb und alle Zahlen sind erfunden, sie sind weder ein Ergebnis noch ein Richtwert.",
      blocks: [
        {
          t: "note",
          label: "Erfundenes Beispiel",
          text: "„Physiotherapie Beispiel“ in Wels gibt es nicht. Die Zahlen sind ausgedacht und bewusst klein gewählt, wie sie bei einer Praxis mit einem Standort vorkommen können. Ziehen Sie daraus keine Schlüsse für Ihren Betrieb.",
        },
        {
          t: "table",
          caption: "Monatsbericht September 2026, Physiotherapie Beispiel, Wels (erfundene Werte). Keine Google Ads im Zeitraum",
          head: ["Zeile", "Sep. 2026", "Sep. 2025", "Aug. 2026"],
          rows: [
            ["Neue Patienten mit Angabe „Google“ (Anmeldebogen)", "14", "12", "9"],
            ["Online-Terminbuchungen", "6", "5", "4"],
            ["Profil: Aufrufe", "1.180", "1.050", "1.010"],
            ["Profil: Anrufe (Klicks)", "64", "58", "47"],
            ["Profil: Wegbeschreibungen", "31", "29", "26"],
            ["Profil: Website-Klicks", "88", "70", "72"],
            ["Profil: neue Bewertungen, Durchschnitt gesamt", "5, 4,8", "3, 4,7", "2, 4,8"],
            ["Search Console: Klicks ohne Markensuchen", "142", "118", "121"],
            ["Search Console: Impressionen in KI-Funktionen", "210", "nicht verfügbar", "nicht verfügbar"],
            ["Web-Analyse: Besuche über Profil-Link, Terminanfragen", "79, 9", "61, 7", "64, 6"],
          ],
        },
        {
          t: "h3",
          text: "Maßnahmen und nächste Schritte (Beispieltext)",
        },
        {
          t: "p",
          text: "**Geändert:** Am 9. September ging die Seite „Physiotherapie nach Knie-OP“ online. Am 14. September haben wir die Leistungen im Profil vervollständigt. Seit 1. September schickt die Praxis jedem Patienten nach der letzten Behandlung den Bewertungslink per E-Mail, ohne Gegenleistung.",
        },
        {
          t: "p",
          text: "**Was die Zahlen zeigen:** Fast alle Werte liegen etwas über dem Vorjahresmonat, die Unterschiede sind aber klein. Der Abstand zum August ist größer. Das kann Saison sein und ist kein Beleg für unsere Maßnahmen. Ob die neue Seite wirkt, lässt sich nach drei Wochen nicht sagen.",
        },
        {
          t: "p",
          text: "**Nächste Schritte:** Erstens die Suchbegriffe der neuen Seite in der Search Console im Oktober und November beobachten (Agentur, Bericht Anfang Dezember). Zweitens verpasste Anrufe zwischen 12 und 14 Uhr aus der Telefonanlage auswerten, weil Patienten von Rückrufproblemen berichten (Praxisleitung, bis 31. Oktober). Drittens keine weitere Leistungsseite, bevor die erste bewertet ist.",
        },
      ],
    },
    {
      id: "agentur",
      title: "Wenn eine Agentur Ihnen berichtet",
      answer:
        "Verlangen Sie von einer Agentur einen Bericht, den Sie selbst nachprüfen können: eigener Zugang zu Profil, Search Console und Analyse, Definitionen jeder Zahl, Vorjahresvergleich und einen ehrlichen Teil zu dem, was nicht funktioniert hat.",
      blocks: [
        {
          t: "table",
          caption: "Prüffragen an einen Agenturbericht",
          head: ["Frage", "Warum sie wichtig ist"],
          rows: [
            ["Habe ich selbst Zugriff auf Profil, Search Console und Analyse?", "Nur dann können Sie die Zahlen prüfen und behalten die Daten bei einem Wechsel"],
            ["Steht bei jeder Zahl die Quelle und was sie zählt?", "Ein Anruf-Klick ist kein Gespräch, ein Aufruf kein Kunde"],
            ["Sind Anzeigen und organische Werte getrennt?", "Die Leistungsdaten im Profil enthalten laut Google auch Werte aus Google Ads"],
            ["Wird mit dem Vorjahresmonat verglichen?", "Sonst sieht jeder Saisonanstieg wie ein Erfolg aus"],
            ["Werden Branchenwerte ohne Quelle als Ziel genannt?", "Solche Werte lassen sich nicht prüfen"],
            ["Wird eine Platzierung garantiert?", "Google schließt bezahlte Verbesserungen des lokalen Rankings aus"],
          ],
        },
        {
          t: "p",
          text: "Ein guter Bericht nennt auch, welche Maßnahme nichts gebracht hat und deshalb eingestellt wird. Wer zusätzlich Nennungen in KI-Antworten messen will, findet eine prüfbare Methode in [Sichtbarkeit in KI-Antworten messen](/blog/ai-visibility-index-local-seo-metrik).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Kennzahlen gehören in einen Local-SEO-Monatsbericht?",
      a: "Für einen Betrieb mit einem Standort reichen sechs bis zehn Zahlen auf einer Seite. Wichtiger als die Menge ist, dass jede Zahl eine Quelle, einen Vorjahreswert und eine Bedeutung für eine Entscheidung hat. Alles andere gehört in die Messtabelle, nicht in den Bericht.",
    },
    {
      q: "Warum zeigt mein Profil andere Website-Klicks als Google Analytics?",
      a: "Die beiden Werkzeuge zählen Verschiedenes. Das Profil zählt Klicks auf den Website-Link, die Analyse zählt Besuche, die je nach Einrichtung und Einwilligung erfasst werden. Zeigen Sie beide Werte nebeneinander und addieren Sie sie nie.",
    },
    {
      q: "Sollte ich mit dem Vormonat oder dem Vorjahresmonat vergleichen?",
      a: "Mit beiden, aber entscheiden Sie anhand des Vorjahresmonats. Der Vormonat zeigt vor allem saisonale Schwankungen. Weil die Search Console laut Google nur 16 Monate speichert, tragen Sie die Werte jeden Monat in eine eigene Tabelle ein.",
    },
    {
      q: "Gehört der Bericht zu generativen KI-Funktionen in den Monatsbericht?",
      a: "Ja, als eine Zeile, wenn er für Ihre Website angezeigt wird. Er zeigt laut Google, wie oft Links zu Ihrer Website in Übersichten mit KI und im KI-Modus angezeigt wurden. Bei wenigen Impressionen fehlt der Bericht meist. Ob ein Vorjahresvergleich möglich ist, hängt davon ab, ab wann der Bericht für Ihre Website Werte zeigt.",
    },
    {
      q: "Wie oft sollte eine Agentur berichten?",
      a: "Monatlich reicht für die meisten lokalen Betriebe. Die Suchbegriffe im Unternehmensprofil werden laut Google ohnehin nur zu Monatsbeginn aktualisiert. Wöchentliche Berichte zeigen aus unserer Sicht vor allem Zufallsschwankungen.",
    },
  ],
  sources: [
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Google-Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistungsbericht (Suchergebnisse): Dimensionen und Datengruppierungen (Filter für Markensuchanfragen)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/17011259" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "Was sind Impressionen, Position und Klicks?", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7042828?hl=de" },
    { title: "Bericht „Suchanfragen“ mit Search Console-Daten (16 Monate Speicherdauer)", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/13682862?hl=en" },
    { title: "Rückgänge bei der Zugriffszahl aus der Google Suche analysieren (Stand 18. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=de" },
    { title: "Kampagnendaten mithilfe benutzerdefinierter URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "Ereignisse als Schlüsselereignisse markieren", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/13128484?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Telefonnummer hinzufügen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/16750496?hl=de" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
  ],
  related: [
    { slug: "local-seo-statistiken-daten", title: "Local-SEO-Zahlen: was belegt ist und was Sie selbst messen" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
    { slug: "local-seo-monthly-checklist", title: "Local SEO jeden Monat: die Routine-Checkliste" },
    { slug: "local-seo-tracking-kpis", title: "Local SEO Tracking und KPIs" },
  ],
  cta: {
    title: "Welche Zahlen gehören in Ihren Bericht?",
    text: "Wir sehen uns Ihr Google-Unternehmensprofil, Ihre Website und Ihre Messung an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten, und einen Hinweis, welche Zeilen in Ihren Monatsbericht gehören. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
