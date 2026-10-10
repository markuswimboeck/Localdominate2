import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-audit-template",
  lang: "de",
  seoTitle: "Google-Maps-Audit: Vorlage mit Prüfpunkten",
  seoDescription:
    "Vorlage für Ihr Google-Maps-Audit: sieben Prüfbögen zu Inhaberschaft, Stammdaten, Kategorien, Fotos, Rezensionen, Sichtbarkeit und Website, mit Auswertung.",
  h1: "Google-Maps-Audit: die Vorlage zum Ausfüllen für Ihr Unternehmensprofil",
  kicker: "Google Maps",
  lead:
    "Für Betriebe, die ihr Google-Unternehmensprofil und ihre Sichtbarkeit in Maps selbst prüfen wollen, und für alle, die das für Kunden tun. Sie bekommen sieben Prüfbögen als Tabellen, die Sie in eine Tabellenkalkulation übernehmen, und eine Anleitung, wie Sie die Ergebnisse ordnen.",
  answer:
    "Ein Google-Maps-Audit prüft in fester Reihenfolge: Inhaberschaft und Status des Profils, Stammdaten, Kategorien und Leistungen, Fotos und Beiträge, Rezensionen, Sichtbarkeit im Einzugsgebiet und die verlinkte Website. Für jeden Punkt notieren Sie **Soll, Ist und Status**. Zuerst beheben Sie, was gegen Googles Richtlinien verstößt oder falsch ist, dann, was fehlt.",
  takeaways: [
    "Die Vorlage besteht aus sieben Prüfbögen. Jeder Punkt hat ein Soll, das sich auf Googles Hilfe stützt.",
    "Zuerst prüfen Sie Inhaberschaft und doppelte Profile. Ohne Zugriff und mit Duplikaten sind alle weiteren Korrekturen unsicher.",
    "Falsche Daten und Richtlinienverstöße haben Vorrang vor fehlenden Angaben.",
    "Die Sichtbarkeit messen Sie mit einem Raster aus mehreren Punkten, nicht mit einer Suche vom eigenen Handy.",
    "Chat und „Fragen und Antworten“ gibt es im Unternehmensprofil nicht mehr. Sie gehören nicht mehr in ein Audit.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 12,
  sections: [
    {
      id: "so-nutzen",
      title: "So nutzen Sie die Vorlage",
      answer:
        "Übernehmen Sie jede Tabelle in ein eigenes Blatt einer Tabellenkalkulation und ergänzen Sie zwei Spalten: „Ist“ und „Status“. Als Status genügen drei Werte: in Ordnung, Lücke, Verstoß.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Zugang klären", text: "Sie brauchen Inhaber- oder Verwalterzugriff auf das Unternehmensprofil, Zugriff auf die Website und, wenn vorhanden, auf Search Console und Google Analytics." },
            { title: "Stammdaten bereitlegen", text: "Offizieller Name, Adresse, Telefonnummer, Website, Öffnungszeiten. So wie sie auf Schild, Briefpapier und im Impressum stehen." },
            { title: "Bögen der Reihe nach ausfüllen", text: "Beginnen Sie mit Bogen 1. Verstöße und Fehler in frühen Bögen beeinflussen alles Weitere." },
            { title: "Status setzen", text: "In Ordnung, Lücke (fehlt oder ist unvollständig) oder Verstoß (widerspricht Googles Richtlinien oder ist falsch)." },
            { title: "Auswerten", text: "Am Ende ordnen Sie alle Lücken und Verstöße nach der Tabelle im Abschnitt „Auswertung“." },
          ],
        },
        {
          t: "note",
          label: "Abgrenzung",
          text: "Diese Vorlage konzentriert sich auf das Unternehmensprofil und die Sichtbarkeit in Maps. Ein Audit über alle Bereiche des Local SEO, mit Verzeichnissen, Technik und KI-Grundlagen, finden Sie in der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste).",
        },
      ],
    },
    {
      id: "bogen-1-inhaberschaft",
      title: "Bogen 1: Inhaberschaft, Status und Duplikate",
      answer:
        "Prüfen Sie, wer Zugriff auf das Profil hat, ob es bestätigt ist und ob es weitere Profile für denselben Betrieb gibt. Google erlaubt ein Profil pro Unternehmen.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 1 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Profil bestätigt", "Unternehmensprofil, Hinweise im Profil", "Bestätigt. Laut Google wird ein bestätigtes Unternehmen eher in den Ergebnissen angezeigt"],
            ["Inhaber und Verwalter", "Unternehmensprofil, Verwaltung der Nutzer", "Mindestens ein Inhaberkonto gehört dem Betrieb selbst, nicht nur einer Agentur oder einem ehemaligen Mitarbeiter"],
            ["Doppelte Profile", "Google Maps: Suche nach Name, Name mit Ort, alter Adresse, Telefonnummer", "Es gibt nur ein Profil pro Standort"],
            ["Hinweise auf Sperrung oder Einschränkung", "Unternehmensprofil", "Keine Hinweise"],
          ],
        },
        {
          t: "p",
          text: "Finden Sie ein zweites Profil, klären Sie das zuerst. Hilfe bieten die Artikel [Doppelte Einträge entfernen](/blog/duplicate-listing-entfernen) und [Profil gesperrt, was nun](/blog/gbp-suspendiert-reaktivieren).",
        },
      ],
    },
    {
      id: "bogen-2-stammdaten",
      title: "Bogen 2: Stammdaten",
      answer:
        "Name, Adresse oder Einzugsgebiet, Kartenpunkt, Telefon, Website und Öffnungszeiten müssen stimmen und mit Website und Impressum übereinstimmen. Laut Google erscheinen Unternehmen mit vollständigen und korrekten Informationen eher in lokalen Ergebnissen.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 2 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Name", "Profil und Schild, Website, Briefpapier", "Genau der Name, der auch außerhalb von Google verwendet wird. Keine Slogans, Telefonnummern, Öffnungszeiten oder sonstigen Zusätze"],
            ["Adresse", "Profil", "Echte Anschrift mit ganzjähriger Beschilderung. Kein virtuelles Büro, kein Postfach als Standort"],
            ["Kartenpunkt", "Google Maps, Satellitenansicht", "Markierung sitzt auf dem Gebäude oder Eingang"],
            ["Einzugsgebiet (nur Betriebe ohne Kundenverkehr vor Ort)", "Profil", "Adresse ausgeblendet. Höchstens 20 Gebiete, Grenzen nicht weiter als etwa zwei Autostunden vom Standort"],
            ["Telefonnummer", "Profil, Testanruf", "Während der Öffnungszeiten erreichbar, gleich wie auf der Website"],
            ["Website-Link", "Profil", "Führt auf die passende Seite, bei mehreren Standorten auf die Standortseite. Optional mit UTM-Parametern zur Messung"],
            ["Öffnungszeiten", "Profil", "Stimmen mit der Realität und der Website überein"],
            ["Feiertage und Sonderzeiten", "Profil, spezielle Öffnungszeiten", "Gesetzliche Feiertage bestätigt, auch wenn die Zeiten gleich bleiben. Betriebsurlaub eingetragen"],
          ],
        },
        {
          t: "p",
          text: "Gleichen Sie die Stammdaten anschließend mit Website und Verzeichnissen ab. Wie das geht, zeigt der Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo). Zu Sonderzeiten finden Sie Details unter [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage).",
        },
      ],
    },
    {
      id: "bogen-3-kategorien",
      title: "Bogen 3: Kategorien, Leistungen, Beschreibung, Attribute",
      answer:
        "Die Hauptkategorie bestimmt mit, für welche Suchen Ihr Profil in Frage kommt. Google verlangt so wenige und so präzise Kategorien wie möglich.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 3 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Hauptkategorie", "Profil", "Die genaueste Kategorie, für die gilt: „Dieser Betrieb IST …“"],
            ["Weitere Kategorien", "Profil", "Nur Kategorien, die auf das Kerngeschäft zutreffen. Keine Kategorien als Ersatz für Suchbegriffe"],
            ["Leistungen oder Produkte", "Profil", "Jede Leistung, die Kunden gezielt suchen, als eigener Eintrag mit kurzer Beschreibung"],
            ["Speisekarte (Gastronomie)", "Profil", "Aktuell, wenn die Kategorie das Feld anbietet"],
            ["Beschreibung", "Profil", "Sachlich: was Sie anbieten und für wen. Keine Aufzählung von Suchbegriffen"],
            ["Attribute", "Profil, Bereich Attribute", "Alle zutreffenden Attribute gesetzt, zum Beispiel Barrierefreiheit oder Zahlungsarten"],
          ],
        },
        {
          t: "p",
          text: "Mehr dazu im [Kategorien-Leitfaden](/blog/google-business-kategorien-guide), unter [Produkte und Leistungen](/blog/google-business-produkte-services) und [Attribute richtig nutzen](/blog/gbp-attribute-richtig-nutzen).",
        },
      ],
    },
    {
      id: "bogen-4-fotos",
      title: "Bogen 4: Fotos und Beiträge",
      answer:
        "Fotos und Beiträge helfen Kunden bei der Entscheidung. Prüfen Sie, ob sie aktuell, eigen und technisch brauchbar sind. Dass sie das Ranking direkt verbessern, sagt Google nicht.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 4 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Außenansicht und Eingang", "Profil, Fotos", "Ein Kunde erkennt den Eingang wieder"],
            ["Innenräume, Team, typische Arbeit", "Profil, Fotos", "Eigene, aktuelle Bilder, keine Archivfotos"],
            ["Technik der Fotos", "Dateien", "JPG oder PNG, 10 KB bis 5 MB. Google empfiehlt 720 × 720 Pixel, mindestens 250 × 250 Pixel"],
            ["Logo und Titelbild", "Profil", "Vorhanden und aktuell"],
            ["Fremde Fotos", "Profil, Fotos von Kunden", "Unpassende oder falsche Bilder gemeldet"],
            ["Beiträge", "Profil", "Bei Angeboten, Veranstaltungen oder Änderungen aktuell. Kein Muss für jeden Betrieb"],
          ],
        },
        {
          t: "p",
          text: "Tipps für bessere Bilder finden Sie unter [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
    {
      id: "bogen-5-rezensionen",
      title: "Bogen 5: Rezensionen",
      answer:
        "Laut Google können mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern. Prüfen Sie Menge, Aktualität, Antworten und ob der Ablauf, mit dem Sie um Rezensionen bitten, Googles Richtlinien einhält.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 5 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Anzahl und Durchschnitt", "Profil", "Notieren, mit den drei Hauptwettbewerbern vergleichen"],
            ["Neue Rezensionen der letzten drei Monate", "Profil, nach „Neueste“ sortiert", "Regelmäßig neue Rezensionen"],
            ["Antworten", "Profil", "Sachliche Antworten, besonders auf Kritik"],
            ["Ablauf für Anfragen", "Intern", "Fester Schritt im Kundenkontakt mit Link oder QR-Code. Alle Kunden werden gefragt, nicht nur zufriedene"],
            ["Anreize", "Intern", "Keine Rabatte, Geschenke oder Zahlungen für Rezensionen"],
            ["Rezensionen von Mitarbeitenden oder Angehörigen", "Profil", "Keine. Inhalte mit Interessenkonflikt sind laut Google nicht zulässig"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie den Ablauf aufbauen, zeigen [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen) und [Bewertungs-QR-Codes](/blog/bewertungs-qr-codes).",
        },
      ],
    },
    {
      id: "bogen-6-sichtbarkeit",
      title: "Bogen 6: Sichtbarkeit im Einzugsgebiet",
      answer:
        "Messen Sie für drei bis fünf Suchbegriffe an mehreren Punkten Ihres Einzugsgebiets, an welcher Stelle Ihr Betrieb erscheint. Ergänzen Sie die Leistungsdaten des Profils.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 6a: Raster (eine Zeile je Messpunkt, eine Spalte je Suchbegriff, Zelle = Position ohne Anzeigen)",
          head: ["Messpunkt", "Begriff 1", "Begriff 2", "Begriff 3"],
          rows: [
            ["Standort des Betriebs", "", "", ""],
            ["Mitte Nord", "", "", ""],
            ["Mitte Ost", "", "", ""],
            ["Mitte Süd", "", "", ""],
            ["Mitte West", "", "", ""],
            ["Rand Nordost", "", "", ""],
            ["Rand Südost", "", "", ""],
            ["Rand Südwest", "", "", ""],
            ["Rand Nordwest", "", "", ""],
          ],
        },
        {
          t: "table",
          caption: "Bogen 6b: Leistungsdaten des Profils (letzter vollständiger Monat)",
          head: ["Messgröße", "Wert", "Vorjahresmonat"],
          rows: [
            ["Aufrufe des Profils", "", ""],
            ["Anrufe", "", ""],
            ["Wegbeschreibungen", "", ""],
            ["Websiteklicks", "", ""],
            ["Häufigste Suchanfragen", "", ""],
          ],
        },
        {
          t: "p",
          text: "Messen Sie ohne Anmeldung, im privaten Fenster und mit einem eingestellten Standort, zum Beispiel über die Sensoren in den Chrome-Entwicklertools. Die Schritte im Detail stehen im Artikel [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern). Was die Leistungsdaten bedeuten, erklärt [Leistungsdaten verstehen](/blog/google-business-insights-verstehen).",
        },
      ],
    },
    {
      id: "bogen-7-website",
      title: "Bogen 7: die verlinkte Website",
      answer:
        "Die Website bestätigt die Angaben im Profil und liefert die Inhalte, die Google für die Relevanz nutzt. Prüfen Sie Landingpage, Firmendaten, strukturierte Daten und mobile Ladezeit.",
      blocks: [
        {
          t: "table",
          caption: "Bogen 7 (Spalten „Ist“ und „Status“ ergänzen)",
          head: ["Prüfpunkt", "Wo prüfen", "Soll"],
          rows: [
            ["Zielseite des Profil-Links", "Website", "Nennt Name, Adresse, Telefon, Öffnungszeiten und die wichtigsten Leistungen"],
            ["Leistungsseiten", "Website", "Eine eigene Seite je wichtiger Leistung, mit Ort, Ablauf und häufigen Fragen"],
            ["Firmendaten", "Impressum, Kontaktseite, Fußzeile", "Gleich wie im Profil"],
            ["Strukturierte Daten", "Test für Rich-Suchergebnisse", "LocalBusiness oder passende Unterart mit Name und Adresse, ohne kritische Fehler"],
            ["Mobile Ladezeit", "PageSpeed Insights", "Bei den Core Web Vitals für echte Nutzer kein Wert in der Kategorie „Schlecht“"],
            ["Indexierung", "Search Console, Bericht zur Seitenindexierung", "Zielseite und Leistungsseiten sind indexiert"],
          ],
        },
        {
          t: "p",
          text: "Anleitungen: [LocalBusiness-Schema implementieren](/blog/localbusiness-schema-implementierung), [Core Web Vitals für Local SEO](/blog/core-web-vitals-local-seo) und [Lokale Landingpages](/blog/lokale-landing-pages).",
        },
      ],
    },
    {
      id: "auswertung",
      title: "Auswertung: in welcher Reihenfolge Sie handeln",
      answer:
        "Ordnen Sie jeden Punkt mit Status „Verstoß“ oder „Lücke“ einer von drei Stufen zu. Erst Stufe 1 vollständig abarbeiten, dann Stufe 2, dann Stufe 3.",
      blocks: [
        {
          t: "table",
          caption: "Prioritäten nach dem Audit",
          head: ["Stufe", "Was dazu gehört", "Warum zuerst"],
          rows: [
            ["1: sofort", "Fehlender Inhaberzugriff, doppelte Profile, Zusätze im Namen, falsche Adresse oder falscher Kartenpunkt, falsche Telefonnummer, Anreize für Rezensionen", "Gefährdet das Profil oder führt Kunden an den falschen Ort"],
            ["2: in den nächsten Wochen", "Ungenaue Hauptkategorie, fehlende Leistungen, fehlende Sonderzeiten, kein Ablauf für Rezensionen, keine passende Zielseite", "Verbessert die Relevanz und die Entscheidung der Kunden"],
            ["3: laufend", "Fotos ergänzen, Beiträge bei Anlässen, Antworten auf Rezensionen, Leistungsseiten ausbauen, Raster monatlich wiederholen", "Pflege, die über Monate wirkt"],
          ],
        },
        {
          t: "note",
          label: "Veraltete Prüfpunkte",
          text: "Ältere Vorlagen fragen nach Chat und „Fragen und Antworten“. Den Chat gibt es laut Google seit dem 31. Juli 2024 nicht mehr. Im Dezember 2025 hat Google angekündigt, „Fragen und Antworten“ in Maps durch eine KI-gestützte Fragefunktion zu ersetzen. Beides gehört nicht mehr in ein Audit.",
        },
        {
          t: "p",
          text: "Wiederholen Sie das vollständige Audit zweimal im Jahr und Bogen 6 jeden Monat. Wenn Sie die Auswertung lieber mit uns besprechen, nutzen Sie den [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie lange dauert ein Google-Maps-Audit mit dieser Vorlage?",
      a: "Für einen Standort rechnen Sie mit zwei bis drei Stunden, davon den größten Teil für das Raster in Bogen 6. Mit einem Raster-Werkzeug geht dieser Teil schneller.",
    },
    {
      q: "Was ist der Unterschied zur Local-SEO-Audit-Checkliste?",
      a: "Diese Vorlage prüft nur das Unternehmensprofil, die Sichtbarkeit in Maps und die verlinkte Website. Die [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste) deckt zusätzlich Verzeichnisse, Technik, Messung und KI-Grundlagen ab.",
    },
    {
      q: "Kann ich die Vorlage für mehrere Standorte nutzen?",
      a: "Ja. Füllen Sie die Bögen je Standort aus. Bogen 1 und die Namensprüfung in Bogen 2 lohnen sich zusätzlich im Vergleich aller Standorte, weil Google für alle Standorte innerhalb eines Landes denselben Namen verlangt, sofern der echte Name nicht abweicht.",
    },
    {
      q: "Welche Punkte sind am wichtigsten?",
      a: "Alles, was gegen Googles Richtlinien verstößt oder falsch ist: Zusätze im Namen, virtuelle Adressen, doppelte Profile, Anreize für Rezensionen und falsche Kontaktdaten. Danach die Hauptkategorie und die Leistungen.",
    },
    {
      q: "Was kostet es, das Audit machen zu lassen?",
      a: "Selbst gemacht kostet es nur Zeit. Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Umfang und Preis stehen vor dem Start fest. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Probleme mit doppelten Profilen und Eigentumsrechten beheben", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/12756178?hl=de" },
    { title: "Einzugsgebiete für Unternehmen ohne festen Standort und Hybridunternehmen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9157481?hl=de" },
    { title: "Spezielle Öffnungszeiten festlegen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6303076?hl=de" },
    { title: "Unternehmensattribute verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9049526?hl=de" },
    { title: "Fotos und Videos in Ihrem Unternehmensprofil verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/6103862?hl=de" },
    { title: "Tipps für mehr Rezensionen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3474122?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Über PageSpeed Insights", publisher: "Google for Developers", url: "https://developers.google.com/speed/docs/insights/v5/about?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Bericht zur Seitenindexierung", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7440203?hl=de" },
    { title: "Test für Rich-Suchergebnisse", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7445569?hl=de" },
    { title: "Sensoren: Gerätesensoren emulieren", publisher: "Chrome for Developers", url: "https://developer.chrome.com/docs/devtools/sensors?hl=de" },
    { title: "Änderungen an der Chatfunktion und Anrufliste in Google Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14919056?hl=de" },
    { title: "Google quietly kills Q&A for an AI button most won't use", publisher: "PPC Land", url: "https://ppc.land/google-quietly-kills-q-a-for-an-ai-button-most-wont-use/" },
  ],
  related: [
    { slug: "local-seo-audit-checkliste", title: "Local-SEO-Audit-Checkliste" },
    { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    { slug: "google-maps-konkurrenzanalyse", title: "Google-Maps-Konkurrenzanalyse" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Lieber einen zweiten Blick auf Ihr Profil?",
    text: "Wir prüfen Ihr Google-Unternehmensprofil nach dieser Vorlage und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die wir zuerst beheben würden. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
