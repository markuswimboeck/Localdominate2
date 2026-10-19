import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-ranking-case-studies",
  lang: "de",
  seoTitle: "Google-Maps-Fallstudien prüfen und selbst erstellen",
  seoDescription:
    "Woran Sie belastbare Google-Maps-Fallstudien erkennen und wie Sie selbst eine führen: Ausgangslage, Messgrößen, Änderungsprotokoll, Störfaktoren, Auswertung.",
  h1: "Google-Maps-Ranking-Fallstudien: Ergebnisse prüfen und selbst sauber dokumentieren",
  kicker: "Google Maps",
  lead:
    "Für Betriebe und Marketingverantwortliche, die Erfolgsgeschichten über Maps-Rankings einordnen oder eigene Fortschritte belegen wollen. Sie erfahren, welche Fragen eine Fallstudie beantworten muss und wie Sie Ihre eigene mit einfachen Vorlagen führen.",
  answer:
    "Eine belastbare Fallstudie zum Google-Maps-Ranking braucht eine dokumentierte **Ausgangslage**, feste Suchbegriffe und Messpunkte, ein Protokoll aller Änderungen mit Datum und denselben Messungen danach. Dazu gehören Leistungsdaten wie Anrufe und Websiteklicks, nicht nur Positionen. Ohne diese Angaben ist eine Vorher-nachher-Geschichte eine Behauptung, kein Beleg. Mit ihnen können Sie Ihre eigenen Ergebnisse ehrlich beurteilen.",
  takeaways: [
    "Ein einzelner Screenshot vom eigenen Handy belegt nichts, weil Google Ergebnisse unter anderem nach Ort, Gerät und Suchverlauf anpasst.",
    "Vergleichbar wird es erst mit festen Suchbegriffen, festen Messpunkten und gleichem Messrhythmus vor und nach den Änderungen.",
    "Ein Änderungsprotokoll mit Datum ist das wichtigste Werkzeug, um Wirkung und Zufall auseinanderzuhalten.",
    "Saison, Google-Updates, Wettbewerber und Anzeigen können Ergebnisse verändern, ohne dass Ihre Maßnahme etwas damit zu tun hat.",
    "Laut Google kann es Stunden bis Monate dauern, bis Änderungen wirken. Planen Sie die Auswertung nach mehreren Wochen, nicht nach wenigen Tagen.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "warum-vorsicht",
      title: "Warum viele Ranking-Fallstudien wenig beweisen",
      answer:
        "Die meisten veröffentlichten Erfolgsgeschichten zeigen ein Vorher und ein Nachher, aber nicht, wie gemessen wurde. Damit lässt sich nicht prüfen, ob die genannten Maßnahmen die Ursache waren.",
      blocks: [
        {
          t: "p",
          text: "„Von unsichtbar auf Platz 1 in sechs Monaten“ klingt überzeugend. Ob die Aussage stimmt, hängt an Details, die selten genannt werden: Für welchen Suchbegriff? Von welchem Ort aus? Wie oft gemessen? Was hat sich in derselben Zeit sonst verändert?",
        },
        {
          t: "table",
          caption: "Häufige Schwächen von Fallstudien",
          head: ["Schwäche", "Warum sie das Ergebnis verzerrt"],
          rows: [
            ["Nur eine Messung vom eigenen Standort", "Google berücksichtigt die Entfernung zum Suchenden. Am eigenen Standort steht fast jeder Betrieb weit vorne"],
            ["Keine Ausgangsmessung mit Datum", "Ohne festen Startpunkt ist jede Verbesserung eine Schätzung"],
            ["Viele Maßnahmen gleichzeitig", "Man sieht, dass sich etwas geändert hat, aber nicht, welche Maßnahme gewirkt hat"],
            ["Nur Positionen, keine Anfragen", "Eine bessere Position ist wertlos, wenn sie nicht zu Anrufen, Routen oder Buchungen führt"],
            ["Zeitraum fällt in die Hochsaison", "Mehr Anrufe im Sommer sagen bei einem Eiscafé wenig über die Maßnahmen aus"],
            ["Nur Erfolge werden gezeigt", "Projekte ohne Wirkung tauchen nicht auf. Das Bild wird zu positiv"],
          ],
        },
        {
          t: "note",
          label: "Hinweis zu diesem Artikel",
          text: "In einer früheren Fassung standen hier sechs Erfolgsgeschichten aus verschiedenen Branchen mit Zahlen und Zitaten. Sie waren nicht belegt. Wir haben sie entfernt und zeigen stattdessen, wie Sie solche Geschichten prüfen und eigene Ergebnisse nachvollziehbar festhalten.",
        },
      ],
    },
    {
      id: "fremde-fallstudie-pruefen",
      title: "Sieben Fragen an jede fremde Fallstudie",
      answer:
        "Prüfen Sie, ob eine Fallstudie Ausgangslage, Messmethode, Zeitraum, Maßnahmen und Geschäftszahlen offenlegt. Fehlt mehr als eine dieser Angaben, sollten Sie sie als Werbung lesen, nicht als Beleg.",
      blocks: [
        {
          t: "table",
          caption: "Prüffragen für Fallstudien von Agenturen, Werkzeugen und Kollegen",
          head: ["Frage", "Woran Sie eine gute Antwort erkennen"],
          rows: [
            ["Ist der Betrieb echt und nachprüfbar?", "Name oder zumindest Branche und Ort sind genannt, der Betrieb hat zugestimmt"],
            ["Welche Suchbegriffe wurden gemessen?", "Konkrete Begriffe, nicht „wichtige Keywords“"],
            ["Von wo aus wurde gemessen?", "Raster aus mehreren Punkten oder klar benannte Orte, nicht nur „Platz 1“"],
            ["Wie lang war der Zeitraum?", "Start- und Enddatum, idealerweise mit Zwischenmessungen"],
            ["Was genau wurde geändert und wann?", "Liste der Maßnahmen mit Datum"],
            ["Was ist sonst passiert?", "Hinweise auf Saison, Google-Updates, neue Wettbewerber oder Anzeigen"],
            ["Was hat es dem Betrieb gebracht?", "Anrufe, Routen, Websiteklicks oder Anfragen mit Quelle, nicht nur Positionen"],
          ],
        },
        {
          t: "p",
          text: "Prozentzahlen wie „plus 400 Prozent Anrufe“ wirken groß, wenn die Ausgangszahl klein war. Fragen Sie immer nach den absoluten Werten.",
        },
      ],
    },
    {
      id: "aufbau",
      title: "Eine eigene Fallstudie aufsetzen",
      answer:
        "Legen Sie vor der ersten Änderung fest, was Sie erreichen wollen, welche Begriffe und Punkte Sie messen und wie lange die Ausgangsphase dauert. Diese Festlegung schreiben Sie auf und ändern sie während des Versuchs nicht.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Ziel und Annahme formulieren",
              text: "Zum Beispiel: „Wenn wir die Hauptkategorie präzisieren und jede Leistung einzeln eintragen, stehen wir für ‚Kinderzahnarzt‘ in unserem Stadtteil weiter vorne und bekommen mehr Anrufe über das Profil.“",
            },
            {
              title: "Suchbegriffe festlegen",
              text: "Drei bis fünf Begriffe, die Kunden wirklich nutzen. Die Suchanfragen in den Leistungsdaten des Unternehmensprofils geben Hinweise.",
            },
            {
              title: "Messpunkte festlegen",
              text: "Ein Raster über Ihr Einzugsgebiet, zum Beispiel 3 × 3 oder 5 × 5 Punkte. Notieren Sie Koordinaten oder Adressen, damit Sie später exakt dieselben Punkte messen.",
            },
            {
              title: "Ausgangsphase messen",
              text: "Mindestens vier Wochen vor der ersten Änderung messen, damit Sie normale Schwankungen kennen. Zusätzlich die Leistungsdaten der letzten zwölf Monate sichern, wenn möglich.",
            },
            {
              title: "Nur dann ändern",
              text: "Erst nach der Ausgangsphase beginnen. Jede Änderung kommt mit Datum ins Protokoll.",
            },
          ],
        },
      ],
    },
    {
      id: "messgroessen",
      title: "Was Sie messen und woher die Zahlen kommen",
      answer:
        "Messen Sie zwei Dinge: Sichtbarkeit (Positionen im Raster) und Wirkung (Aktionen im Profil, Website-Besuche und echte Anfragen). Erst beides zusammen ergibt ein Bild.",
      blocks: [
        {
          t: "table",
          caption: "Messgrößen für eine Maps-Fallstudie",
          head: ["Messgröße", "Quelle", "Rhythmus", "Hinweis"],
          rows: [
            ["Position je Suchbegriff und Messpunkt", "Raster-Werkzeug oder Messung von Hand", "Alle zwei bis vier Wochen", "Immer gleiche Uhrzeit, ohne Anmeldung, Anzeigen nicht mitzählen"],
            ["Aufrufe des Profils", "Leistungsdaten im Unternehmensprofil", "Monatlich", "Eine Person zählt laut Google höchstens einmal pro Tag"],
            ["Suchanfragen", "Leistungsdaten im Unternehmensprofil", "Monatlich", "Wird laut Google zu Monatsbeginn aktualisiert, mit bis zu fünf Tagen Verzögerung"],
            ["Anrufe, Wegbeschreibungen, Websiteklicks", "Leistungsdaten im Unternehmensprofil", "Monatlich", "Enthalten laut Google auch Aktionen aus Google Ads"],
            ["Besuche über den Profil-Link", "Google Analytics mit UTM-Parametern am Website-Link", "Monatlich", "Zum Beispiel utm_source=google und utm_medium=organic"],
            ["Klicks und Impressionen der Website", "Search Console, Leistungsbericht", "Monatlich", "Ergebnisse sind laut Google an Uhrzeit, Ort, Gerät und Suchverlauf angepasst"],
            ["Anfragen und Buchungen", "Ihr Telefon, Postfach, Buchungs- oder Kassensystem", "Monatlich", "Wenn möglich fragen: „Wie haben Sie uns gefunden?“"],
            ["Rezensionen", "Profil", "Monatlich", "Anzahl gesamt und neue im Monat"],
          ],
        },
        {
          t: "note",
          label: "Anzeigen beachten",
          text: "Wenn Sie während der Fallstudie Google Ads starten oder stoppen, verändern sich die Leistungsdaten Ihres Profils, auch ohne jede Änderung am Ranking. Notieren Sie Anzeigenkampagnen deshalb im Protokoll.",
        },
      ],
    },
    {
      id: "vorlagen",
      title: "Vorlagen: Ausgangsbogen und Änderungsprotokoll",
      answer:
        "Zwei Tabellen reichen: ein Ausgangsbogen mit allen Werten am Start und ein Protokoll, in das jede Änderung mit Datum kommt. Übernehmen Sie beide in eine Tabellenkalkulation.",
      blocks: [
        {
          t: "h3",
          text: "Ausgangsbogen",
        },
        {
          t: "table",
          caption: "Ausgangsbogen (eine Zeile je Messgröße, Spalten für Start, Monat 1, Monat 2, Monat 3 ergänzen)",
          head: ["Messgröße", "Wert am Start", "Datum", "Quelle"],
          rows: [
            ["Durchschnittliche Position „Begriff 1“ über alle Messpunkte", "", "", "Raster"],
            ["Anzahl Messpunkte unter den ersten drei, „Begriff 1“", "", "", "Raster"],
            ["Aufrufe des Profils im Vormonat", "", "", "Leistungsdaten"],
            ["Anrufe im Vormonat", "", "", "Leistungsdaten"],
            ["Wegbeschreibungen im Vormonat", "", "", "Leistungsdaten"],
            ["Websiteklicks im Vormonat", "", "", "Leistungsdaten"],
            ["Anfragen oder Buchungen im Vormonat", "", "", "Eigenes System"],
            ["Rezensionen gesamt und Durchschnitt", "", "", "Profil"],
          ],
        },
        {
          t: "h3",
          text: "Änderungsprotokoll",
        },
        {
          t: "table",
          caption: "Änderungsprotokoll (jede Änderung am Profil, an der Website und an Anzeigen)",
          head: ["Datum", "Was geändert", "Wo", "Erwartete Wirkung", "Bemerkung"],
          rows: [
            ["TT.MM.JJJJ", "Beispiel: Hauptkategorie von „Zahnarzt“ auf „Kinderzahnarzt“", "Unternehmensprofil", "Bessere Position für „Kinderzahnarzt“", "Von Google übernommen am …"],
            ["TT.MM.JJJJ", "Beispiel: Leistungsseite „Zahnreinigung“ neu", "Website", "Mehr Relevanz für „Zahnreinigung“", "Im Profil als Leistung verlinkt"],
            ["TT.MM.JJJJ", "Beispiel: Anzeigenkampagne gestartet", "Google Ads", "Mehr Anrufe, unabhängig vom Ranking", "Bei der Auswertung herausrechnen"],
          ],
        },
        {
          t: "p",
          text: "Für die laufende Messung der Positionen eignet sich der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker), für den Monatsbericht die [Reporting-Vorlage](/blog/local-seo-reporting-template).",
        },
      ],
    },
    {
      id: "stoerfaktoren",
      title: "Störfaktoren, die Sie mitschreiben sollten",
      answer:
        "Viele Veränderungen haben nichts mit Ihren Maßnahmen zu tun. Notieren Sie Saison, Google-Updates, Änderungen bei Wettbewerbern und eigene Werbung, damit Sie sie bei der Auswertung berücksichtigen können.",
      blocks: [
        {
          t: "table",
          caption: "Störfaktoren und wie Sie damit umgehen",
          head: ["Störfaktor", "Wie Sie ihn erkennen", "Wie Sie damit umgehen"],
          rows: [
            ["Saison und Feiertage", "Vorjahreswerte in den Leistungsdaten", "Mit demselben Zeitraum des Vorjahres vergleichen, nicht nur mit dem Vormonat"],
            ["Google-Updates", "Google Search Status Dashboard, Bereich Ranking", "Datum im Protokoll vermerken und Veränderungen um dieses Datum vorsichtig deuten"],
            ["Wettbewerber", "Neue Betriebe im Raster, geschlossene Betriebe, gesperrte Profile", "Bei jeder Messung die ersten fünf Betriebe mitschreiben"],
            ["Eigene Werbung", "Anzeigen, Aktionen, Presse", "Im Protokoll vermerken, Zeitraum getrennt auswerten"],
            ["Profilprobleme", "Hinweise im Unternehmensprofil, Profil nicht auffindbar", "Ursache klären, bevor Sie weiter messen"],
          ],
        },
      ],
    },
    {
      id: "auswerten",
      title: "Ehrlich auswerten und formulieren",
      answer:
        "Vergleichen Sie Ausgangsbogen und letzte Messung, prüfen Sie die Störfaktoren und formulieren Sie das Ergebnis so, wie es die Daten tragen. Ein zeitlicher Zusammenhang ist noch kein Beweis für eine Ursache.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt im SEO-Startleitfaden, dass manche Änderungen innerhalb weniger Stunden wirken und andere mehrere Monate brauchen. Google empfiehlt, einige Wochen zu warten, bevor Sie die Wirkung beurteilen. Werten Sie deshalb frühestens nach sechs bis acht Wochen aus und ziehen Sie die Bilanz nach drei Monaten.",
        },
        {
          t: "table",
          caption: "Wie Sie Ergebnisse formulieren (Zahlen sind Beispielwerte, keine Kundendaten)",
          head: ["Statt", "Besser"],
          rows: [
            ["„Die neue Kategorie hat uns auf Platz 1 gebracht.“", "„Nach der Änderung der Kategorie am 3. März standen wir für ‚Kinderzahnarzt‘ an 14 von 25 Messpunkten unter den ersten drei, vorher an 4.“"],
            ["„Anrufe plus 300 Prozent.“", "„Anrufe über das Profil: 12 im Februar, 36 im Mai. Im Mai lief zusätzlich eine Anzeigenkampagne.“"],
            ["„Local SEO wirkt immer.“", "„Für zwei von drei Begriffen haben sich die Positionen verbessert, für den dritten nicht.“"],
          ],
        },
        {
          t: "note",
          label: "Auch ein Nein ist ein Ergebnis",
          text: "Wenn sich nach drei Monaten nichts bewegt hat, ist das eine wichtige Information. Prüfen Sie dann die Annahme vom Anfang: War die Maßnahme die richtige für diesen Suchbegriff, oder liegt die Lücke bei Bekanntheit und Entfernung?",
        },
      ],
    },
    {
      id: "veroeffentlichen",
      title: "Wenn Sie eine Fallstudie veröffentlichen",
      answer:
        "Veröffentlichen Sie nur, was der Betrieb freigegeben hat, und nennen Sie Methode, Zeitraum und Einschränkungen. So bleibt die Fallstudie glaubwürdig.",
      blocks: [
        {
          t: "ul",
          items: [
            "Holen Sie die schriftliche Freigabe des Betriebs für Name, Zahlen und Zitate ein.",
            "Nennen Sie Suchbegriffe, Messpunkte, Zeitraum und Messwerkzeug.",
            "Zeigen Sie absolute Werte neben Prozentangaben.",
            "Nennen Sie Störfaktoren und was nicht funktioniert hat.",
            "Versprechen Sie keine Positionen. Google schreibt, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung.",
          ],
        },
        {
          t: "p",
          text: "Wenn Sie Unterstützung bei der Ausgangsmessung möchten, sehen wir uns Ihr Profil im [kostenlosen Check](/de#check) an und sagen Ihnen, welche Begriffe und Messpunkte wir an Ihrer Stelle festlegen würden.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Sind Fallstudien von Agenturen grundsätzlich unseriös?",
      a: "Nein. Viele beruhen auf echter Arbeit. Prüfen Sie aber, ob Methode, Zeitraum und absolute Zahlen genannt sind. Fehlen diese Angaben, können Sie das Ergebnis nicht einschätzen.",
    },
    {
      q: "Wie lange sollte eine eigene Fallstudie laufen?",
      a: "Mindestens vier Wochen Ausgangsmessung und drei Monate nach der ersten Änderung. Bei stark saisonalen Betrieben ist ein Vergleich mit dem Vorjahreszeitraum sinnvoller als mit dem Vormonat.",
    },
    {
      q: "Reicht es, mit dem Handy im Betrieb zu suchen?",
      a: "Nein. Google berücksichtigt die Entfernung zum Suchenden und passt Ergebnisse an Ort, Gerät und Suchverlauf an. Ein Raster aus mehreren Messpunkten zeigt, was Kunden an anderen Orten sehen.",
    },
    {
      q: "Warum zählen Anfragen mehr als Positionen?",
      a: "Positionen sind ein Zwischenschritt. Für den Betrieb zählt, ob mehr Menschen anrufen, kommen oder buchen. Deshalb gehören Leistungsdaten des Profils und Ihre eigenen Anfragen in jede Auswertung.",
    },
    {
      q: "Kann ich mehrere Maßnahmen gleichzeitig testen?",
      a: "Sie können, aber Sie erfahren dann nicht, welche gewirkt hat. Wenn es die Zeit erlaubt, setzen Sie Änderungen im Abstand einiger Wochen um und protokollieren jede mit Datum.",
    },
  ],
  sources: [
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Leistungsbericht (Google-Suchergebnisse): Übersicht", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Kampagnendaten mit benutzerdefinierten URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "Startleitfaden zur Suchmaschinenoptimierung (SEO)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    { title: "Google Search Status Dashboard: Ranking", publisher: "Google", url: "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history?hl=de" },
  ],
  related: [
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "local-seo-tracking-kpis", title: "Local SEO messen: Kennzahlen" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
    { slug: "google-business-insights-verstehen", title: "Leistungsdaten im Unternehmensprofil verstehen" },
  ],
  cta: {
    title: "Wo stehen Sie heute?",
    text: "Eine gute Fallstudie beginnt mit einer ehrlichen Ausgangslage. Wir sehen uns Ihr Google-Profil und Ihre Sichtbarkeit in Maps an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, mit denen wir anfangen würden. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
