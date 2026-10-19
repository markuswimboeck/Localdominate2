import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-business-insights-verstehen",
  lang: "de",
  seoTitle: "Google Business Insights: Leistungsdaten richtig lesen",
  seoDescription:
    "Was die Leistungsdaten im Google-Unternehmensprofil zählen: Aufrufe, Suchanfragen, Anrufe, Wegbeschreibungen, Websiteklicks. Mit Googles Einschränkungen.",
  h1: "Google Business Insights verstehen: die Leistungsdaten im Unternehmensprofil richtig lesen",
  kicker: "Unternehmensprofil",
  lead:
    "Für Inhaber lokaler Betriebe, die in ihrem Google-Unternehmensprofil auf „Leistung“ klicken und wissen wollen, was die Zahlen bedeuten. Sie erfahren, welche Messwerte es gibt, wie Google sie zählt, wo die Grenzen liegen und welche Schlüsse Sie daraus ziehen können und welche nicht.",
  answer:
    "Was früher oft „Insights“ genannt wurde, heißt im Unternehmensprofil heute „Leistung“. Dort zeigt Google für bestätigte Profile Aufrufe, Suchanfragen und Interaktionen wie Anrufe, Wegbeschreibungen und Websiteklicks. Die Werte enthalten organische Ergebnisse und Google Ads. Ein Aufruf zählt je Person höchstens einmal am Tag, ein Anruf ist ein Tippen auf die Anruftaste, kein geführtes Gespräch.",
  takeaways: [
    "Die Leistungsdaten finden Sie im Profil unter „Leistung“. Google zeigt sie nur für bestätigte Profile und nur die Messwerte, die für Ihren Betrieb relevant sind.",
    "Aufrufe zählen Personen, nicht Seitenaufrufe. Eine Person wird höchstens einmal pro Tag gezählt, deshalb kann der Wert niedriger sein als in E-Mail-Benachrichtigungen.",
    "Anrufe sind Klicks auf die Anruftaste, Wegbeschreibungen sind um Mehrfachtipps, Abbrüche und Spam bereinigt. Beides sind Absichten, noch keine Kunden.",
    "Die Suchanfragen aktualisiert Google zu Monatsbeginn, es kann bis zu fünf Tage dauern. Werten Sie deshalb abgeschlossene Monate aus.",
    "Die Daten enthalten auch Aufrufe und Aktionen aus Google Ads. Wer Anzeigen schaltet, muss das beim Lesen berücksichtigen.",
  ],
  publishedAt: "2026-02-20",
  updatedAt: "2026-10-13",
  readingTime: 10,
  sections: [
    {
      id: "wo-finden",
      title: "Aus Insights wird Leistung: wo Sie die Daten finden",
      answer:
        "Die Statistiken zu Ihrem Profil stehen heute im Bereich „Leistung“. Sie öffnen ihn in der Google Suche über Ihr Profil oder in der Google Maps App unter „Unternehmen“. Die Daten gibt es nur für bestätigte Profile, und Sie müssen mit dem verknüpften Google-Konto angemeldet sein.",
      blocks: [
        {
          t: "p",
          text: "Der englische Begriff „Insights“ hat sich im Sprachgebrauch gehalten. Search Engine Land berichtete über die Einführung der neuen Leistungsberichte, die den alten Insights-Bericht ablösen sollten. In der aktuellen Google-Hilfe heißt der Bereich „Leistung“ (englisch „Performance“).",
        },
        {
          t: "steps",
          items: [
            { title: "In der Google Suche", text: "Profil öffnen, auf „Leistung“ klicken, einen Zeitraum wählen und mit „Übernehmen“ bestätigen." },
            { title: "In der Google Maps App", text: "Auf „Unternehmen“ tippen, neben „Leistung“ auf „Mehr anzeigen“ tippen, Zeitraum wählen, „Übernehmen“." },
            { title: "Mehrere Profile", text: "Im Dashboard des Business Profile Managers die Profile auswählen und über „Aktionen“ und „Statistiken“ einen Bericht herunterladen. Mehr dazu im Abschnitt zum Export." },
          ],
        },
        {
          t: "ul",
          items: [
            "**Nur bestätigte Profile:** Ist Ihr Profil nicht bestätigt, sehen Sie keine Leistungsdaten. Hilfe dazu gibt [Verifizierung fehlgeschlagen](/blog/gbp-verifizierung-fehlgeschlagen).",
            "**Nur relevante Werte:** Google zeigt nur Messwerte, die für Ihr Unternehmen relevant sind. Ein Handwerksbetrieb sieht also zum Beispiel keine Speisekarten-Klicks.",
            "**Suche und Maps zusammen:** Die Daten beschreiben, wie Nutzer Ihr Profil in der Google Suche und in Google Maps finden.",
            "**Organisch und Anzeigen:** Laut Google enthalten die Werte Aktionen aus organischen Suchergebnissen und aus Google Ads.",
          ],
        },
      ],
    },
    {
      id: "messwerte",
      title: "Alle Messwerte mit Googles Namen",
      answer:
        "Google führt in der Hilfe zwölf Messwerte auf, von „Interaktionen“ über „Aufrufe“ und „Suchanfragen“ bis zu „Angebote“. Welche Sie sehen, hängt von Branche und Einrichtung ab, etwa ob eine Telefonnummer oder ein Buchungsanbieter hinterlegt ist.",
      blocks: [
        {
          t: "table",
          caption: "Messwerte im Bereich „Leistung“ laut Google-Hilfe (Stand Oktober 2026)",
          head: ["Messwert", "Was Google zählt", "Voraussetzung oder Hinweis"],
          rows: [
            ["Interaktionen", "Zusammenfassung aller Interaktionen mit Ihrem Profil", "Summe, keine eigene Handlung"],
            ["Aufrufe", "Personen, die Ihr Profil in Suche oder Maps angesehen haben", "Je Person höchstens einmal pro Tag"],
            ["Suchanfragen", "Suchbegriffe, über die Nutzer Ihr Profil gefunden haben", "Aktualisierung zu Monatsbeginn, Anzeige bis zu fünf Tage später"],
            ["Wegbeschreibungen", "Anfragen nach einer Route zu Ihrem Betrieb", "Bereinigt um Mehrfachtipps, Abbrüche und Spam"],
            ["Anrufe", "Klicks auf die Anrufschaltfläche im Profil", "Telefonnummer im Profil nötig"],
            ["Websiteklicks", "Klicks auf den Website-Link im Profil", "Website-Link im Profil"],
            ["Nachrichten", "Anzahl unterschiedlicher Unterhaltungen über Nachrichten", "Die Chatfunktion gibt es seit 31. Juli 2024 nicht mehr"],
            ["Buchungen", "Abgeschlossene Buchungen", "Nur über einen angebundenen Buchungsanbieter"],
            ["Buchungsklicks", "Klicks auf den Buchungslink", "Nur Hotels"],
            ["Produkte", "Aufrufe von Produkten, die am Standort verkauft werden", "Reine Online-Artikel zählen nicht"],
            ["Speisekarten", "Tägliche Klicks auf Speisekarte, Speisekartenfotos und Speisekartenlinks", "Gastronomie"],
            ["Angebote", "Aufrufe von und Klicks auf Angebote im Profil", "Nur wenn Sie Angebote veröffentlichen"],
          ],
        },
        {
          t: "p",
          text: "Hotels sehen zusätzlich einen Preisvergleich: Google zeigt in der Übersicht den durchschnittlich niedrigsten Preis über alle Anbieter für die nächsten 30 Tage und in den Details die Preise anderer Hotels nach Tag.",
        },
        {
          t: "note",
          label: "Nachrichten",
          text: "Laut Google sind die Funktionen „Chat“ und „Anrufliste“ seit dem 31. Juli 2024 nicht mehr im Unternehmensprofil verfügbar. Den zugehörigen Messwert gibt es in der Schnittstelle (Performance API) nicht mehr. Steht bei „Nachrichten“ eine Null oder fehlt der Wert, liegt das nach unserer Einschätzung an der eingestellten Funktion und nicht an Ihrem Profil. Welche Kontaktwege es stattdessen gibt, zeigt [Nachrichten im Unternehmensprofil](/blog/google-business-messaging).",
        },
      ],
    },
    {
      id: "aufrufe",
      title: "Aufrufe: warum die Zahl kleiner ist als erwartet",
      answer:
        "Aufrufe zählen Personen, nicht jedes Anzeigen des Profils. Google zählt eine Person höchstens einmal pro Tag und über mehrere Geräte und Plattformen nur begrenzt oft. Deshalb kann der Wert niedriger sein als die Zahlen in E-Mail-Benachrichtigungen.",
      blocks: [
        {
          t: "p",
          text: "Die Google-Hilfe nennt mehrere Gründe, warum „Aufrufe“ niedriger ausfallen kann als andere Zahlen, die Sie von Google sehen:",
        },
        {
          t: "ul",
          items: [
            "Der Messwert zählt eindeutige Besucher, die Ihr Profil angesehen haben.",
            "Wer Ihr Profil am selben Tag mehrmals ansieht, wird nur einmal gezählt.",
            "Wer Ihr Profil auf mehreren Geräten (Computer, Smartphone) und Plattformen (Maps, Suche) ansieht, wird nur begrenzt oft gezählt.",
            "Gezählt werden nur Aufrufe Ihres Unternehmensprofils, nicht alle Stellen, an denen Ihr Betrieb bei Google auftaucht.",
          ],
        },
        {
          t: "p",
          text: "Für die Praxis heißt das: Aufrufe beschreiben Reichweite unter Menschen, die Ihr Profil tatsächlich geöffnet oder gesehen haben. Sie sagen nichts darüber, ob diese Menschen Kunden werden. Vergleichen Sie Aufrufe deshalb immer mit den Interaktionen desselben Zeitraums.",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Eine Aufteilung nach Suche und Maps oder nach Gerät haben wir auf der aktuellen Hilfeseite nicht gefunden. Werten Sie Aufrufe deshalb als Gesamtzahl und ziehen Sie aus einem einzelnen Monat keine Schlüsse über einen Kanal.",
        },
      ],
    },
    {
      id: "suchanfragen",
      title: "Suchanfragen: welche Begriffe zu Ihrem Profil führen",
      answer:
        "Unter „Suchanfragen“ sehen Sie die Begriffe, über die Nutzer Ihr Profil gefunden haben. Google aktualisiert sie zu Beginn jedes Monats, es kann bis zu fünf Tage dauern. Sie können die Liste nicht selbst bearbeiten, aber daraus ablesen, ob Ihre Leistungen gefunden werden.",
      blocks: [
        {
          t: "p",
          text: "Teilen Sie die Begriffe beim Lesen in zwei Gruppen: Suchen nach Ihrem Namen und Suchen nach einer Leistung oder Kategorie. Die erste Gruppe zeigt, wie bekannt Sie schon sind. Die zweite zeigt, ob Menschen Sie finden, die Sie noch nicht kennen. Diese Einteilung machen Sie selbst, Google liefert sie in der Hilfe nicht mit.",
        },
        {
          t: "table",
          caption: "Was Sie aus den Suchanfragen ablesen können (unsere Einschätzung)",
          head: ["Beobachtung", "Mögliche Bedeutung", "Was Sie prüfen"],
          rows: [
            ["Fast nur Suchen nach Ihrem Namen", "Neue Kunden finden Sie über Leistungsbegriffe kaum", "Hauptkategorie, weitere Kategorien, eingetragene Leistungen"],
            ["Eine wichtige Leistung fehlt in der Liste", "Google bringt Ihr Profil damit selten in Verbindung", "Ist die Leistung im Profil und auf der Website beschrieben"],
            ["Begriffe, die nicht zu Ihnen passen", "Kategorie zu breit oder missverständlich", "Ob eine genauere Kategorie existiert"],
            ["Saisonale Begriffe tauchen auf", "Nachfrage ändert sich im Jahr", "Vergleich mit demselben Monat im Vorjahr"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie die passende Kategorie finden, steht in [Google-Unternehmensprofil-Kategorien](/blog/google-business-kategorien-guide#richtige-kategorie-finden). Leistungen tragen Sie wie in [Produkte und Leistungen im Profil](/blog/google-business-produkte-services) beschrieben ein.",
        },
        {
          t: "note",
          label: "Nicht tun",
          text: "Häufige Suchbegriffe gehören nicht in den Unternehmensnamen. Googles Richtlinien erlauben dort nur den Namen, den Sie auch im Alltag führen, ohne unnötige Zusätze. Auch eine Rechtsform wie GmbH gehört nur hinein, wenn sie Teil des tatsächlich verwendeten Namens ist.",
        },
      ],
    },
    {
      id: "interaktionen",
      title: "Interaktionen: was als Anruf, Route und Klick zählt",
      answer:
        "„Interaktionen“ ist die Summe aller Handlungen im Profil. Die wichtigsten Einzelwerte sind Anrufe, Wegbeschreibungen und Websiteklicks. Alle drei messen eine Absicht im Profil, nicht das Ergebnis: ein angenommenes Gespräch, einen Besuch vor Ort oder eine Anfrage über die Website.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Anrufe:** Google zählt Klicks auf die Anrufschaltfläche. Ob das Gespräch zustande kam, wie lange es dauerte oder ob jemand abgenommen hat, steht nicht in den Leistungsdaten. Das zeigt nur Ihre Telefonanlage.",
            "**Wegbeschreibungen:** Google hat die Zählung geändert, um den Wert besser abzubilden. Mehrfache Tipps, abgebrochene Anfragen und Spam werden herausgerechnet. Für Betriebe mit Kundenverkehr vor Ort halten wir das oft für den aussagekräftigsten Wert.",
            "**Websiteklicks:** Klicks auf den Website-Link im Profil. Was danach passiert, sehen Sie nur in Ihrer Web-Analyse. Hängen Sie dafür UTM-Parameter an den Link, mehr dazu in [Local SEO Tracking](/blog/local-seo-tracking-kpis#ga4).",
            "**Buchungen:** nur, wenn Ihre Buchungen über einen angebundenen Buchungsanbieter laufen.",
          ],
        },
        {
          t: "p",
          text: "Beiträge haben einen eigenen Wert: Seit September 2026 zeigt Google laut seiner Ankündigung im Small-Business-Bulletin an, wie oft jeder Beitrag gesehen wurde, für die letzten 18 Monate und zusammengefasst für Suche und Maps. Laut PPC Land stehen diese Zahlen auf der Beitragskarte im Dashboard, und über die Schnittstelle sind sie noch nicht abrufbar. Details in [Google-Beiträge](/blog/google-posts-ranking-faktor#messen).",
        },
        {
          t: "note",
          label: "Google Ads",
          text: "Laut Google enthalten die Leistungsdaten Aktionen aus organischen Suchergebnissen und aus Google Ads. Steigen Anrufe in einem Monat, in dem Sie Anzeigen geschaltet haben, wissen Sie aus den Leistungsdaten allein nicht, ob das Profil oder die Anzeige gewirkt hat. Notieren Sie Anzeigenzeiträume deshalb neben Ihren Monatswerten.",
        },
      ],
    },
    {
      id: "lesen",
      title: "Die Zahlen lesen: typische Muster und was dahinterstecken kann",
      answer:
        "Lesen Sie Aufrufe und Interaktionen immer zusammen und im Vergleich zum selben Monat des Vorjahres. Steigen Aufrufe, Interaktionen aber nicht, ist Ihr Profil sichtbar, überzeugt aber nicht. Fallen beide, kann es Saison, ein Wettbewerber oder ein Problem im Profil sein.",
      blocks: [
        {
          t: "table",
          caption: "Lesehilfe für die Leistungsdaten (unsere Einschätzung, keine Google-Regeln)",
          head: ["Muster", "Mögliche Ursachen", "Erste Prüfung"],
          rows: [
            ["Aufrufe steigen, Anrufe und Klicks nicht", "Profil überzeugt nicht: Fotos, Bewertungen, Öffnungszeiten", "Profil aus Kundensicht auf dem Smartphone ansehen"],
            ["Aufrufe und Interaktionen fallen gemeinsam", "Saison, Feiertage, Wettbewerb, Profiländerung", "Vorjahresmonat, Änderungen im Profil, Ranking-Messung"],
            ["Ein Monat springt stark nach oben", "Anzeigen, Presseartikel, Sondereffekt", "Ob Google Ads lief, was sonst passierte"],
            ["Viele Wegbeschreibungen, wenig Anrufe", "Kunden kommen lieber direkt vorbei", "Öffnungszeiten und Erreichbarkeit vor Ort"],
            ["Viele Websiteklicks, wenige Anfragen", "Die Zielseite überzeugt nicht", "Ob der Link auf die passende Seite führt"],
          ],
        },
        {
          t: "ul",
          items: [
            "**Abgeschlossene Monate:** Weil die Suchanfragen erst zu Monatsbeginn aktualisiert werden, vergleichen Sie am besten ganze Monate. Eine allgemeine Verzögerung für die übrigen Werte haben wir auf der Hilfeseite nicht gefunden.",
            "**Vorjahresmonat statt Vormonat:** Lokale Nachfrage schwankt oft mit der Saison. Der Vormonat zeigt deshalb vor allem die Saison.",
            "**Absolute Zahlen:** Bei kleinen Betrieben sind „12 statt 8 Anrufe“ ehrlicher als „+50 %“.",
            "**Änderungen mit Datum notieren:** Neue Kategorie, neue Fotos, geänderte Öffnungszeiten. Ohne Datum lässt sich später kein Ausschlag erklären.",
          ],
        },
        {
          t: "p",
          text: "Ob Ihr Profil in den Ergebnissen weiter oben steht, zeigen die Leistungsdaten nicht. Die Position hängt laut Google auch von der Entfernung zum Suchenden ab. Wie Sie Positionen über Ihr Einzugsgebiet messen, zeigt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker). Wie Sie die Werte zu einem Monatsbericht verdichten, steht in [Local-SEO-Reporting](/blog/local-seo-reporting-template#quellen).",
        },
      ],
    },
    {
      id: "export-statistiken",
      title: "Daten herunterladen und die Funktion „Statistiken“",
      answer:
        "Für mehrere Profile laden Sie einen Bericht im Dashboard über „Aktionen“ und „Statistiken“ herunter. Davon getrennt gibt es die Funktion „Statistiken“, die Verbesserungsvorschläge auf Basis öffentlicher, standortbezogener Informationen macht. Sie ist nicht für alle Profile verfügbar.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Profile auswählen", text: "Im Dashboard des Business Profile Managers die Profile markieren, die Sie vergleichen möchten." },
            { title: "Bericht anfordern", text: "Auf „Aktionen“ und dann „Statistiken“ klicken, einen Zeitraum wählen und „Bericht herunterladen“." },
            { title: "Sterne prüfen", text: "Stehen in Zellen drei Sternchen, sind laut Google für dieses Profil keine Downloads aktiviert." },
            { title: "Eigene Tabelle führen", text: "Wie weit die Daten zurückreichen, haben wir auf der Hilfeseite nicht gefunden. Tragen Sie die Monatswerte deshalb selbst in eine Tabelle ein." },
          ],
        },
        {
          t: "p",
          text: "Die Funktion „Statistiken“ ist kein Bericht über Ihre eigenen Zahlen. Laut Google beruht sie auf öffentlichen, standortbezogenen Informationen wie Rezensionen, Fotos und lokalen Suchtrends und gibt daraus Vorschläge für Ihr Profil. Sie können die Vorschläge mit Daumen hoch oder runter bewerten. Prüfen Sie jeden Vorschlag gegen Googles Richtlinien, bevor Sie ihn umsetzen.",
        },
      ],
    },
    {
      id: "korrektur",
      title: "Was sich gegenüber der früheren Fassung geändert hat",
      answer:
        "Wir haben diesen Artikel im Oktober 2026 vollständig überarbeitet und an die aktuelle Google-Hilfe angepasst. Aussagen, für die wir keine Quelle gefunden haben oder die sich auf frühere Funktionen beziehen, haben wir gestrichen.",
      blocks: [
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Version nannte Aktualisierungszeiten von 24 bis 48 und bis zu 72 Stunden. Dafür haben wir keine Quelle gefunden. Sie beschrieb Foto-Aufrufe mit einem Vergleich zu ähnlichen Unternehmen und eine Aufteilung in direkte Suchen, Discovery-Suchen und Marken-Suchen. Beides haben wir auf der aktuellen Hilfeseite nicht gefunden. „Nachrichten“ wurde als aktive Kontaktfunktion dargestellt, obwohl der Chat seit Juli 2024 eingestellt ist. Den Rat, Kategorien und Beschreibung „mit mehr Keywords“ zu füllen, haben wir gestrichen, weil er nach unserer Einschätzung leicht zu Verstößen gegen Googles Richtlinien führt.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wo finde ich Google Business Insights heute?",
      a: "Im Unternehmensprofil unter „Leistung“. In der Google Suche öffnen Sie Ihr Profil und klicken auf „Leistung“, in der Google Maps App tippen Sie auf „Unternehmen“ und neben „Leistung“ auf „Mehr anzeigen“. Die Daten gibt es nur für bestätigte Profile.",
    },
    {
      q: "Warum zeigt das Profil weniger Aufrufe als die E-Mail von Google?",
      a: "Weil „Aufrufe“ Personen zählt. Laut Google wird eine Person höchstens einmal pro Tag gezählt und über mehrere Geräte und Plattformen nur begrenzt oft. Außerdem zählt der Wert nur Aufrufe des Profils, nicht alle Stellen, an denen Ihr Betrieb bei Google erscheint.",
    },
    {
      q: "Ist jeder Anruf in den Leistungsdaten ein echtes Telefonat?",
      a: "Nein. Google zählt Klicks auf die Anrufschaltfläche im Profil. Ob jemand abgenommen hat und wie lange gesprochen wurde, zeigt nur Ihre Telefonanlage. Vergleichen Sie beide Zahlen nebeneinander, statt sie gleichzusetzen.",
    },
    {
      q: "Wann werden die Suchanfragen aktualisiert?",
      a: "Laut Google zu Beginn jedes Monats. Es kann bis zu fünf Tage dauern, bis die neuen Werte angezeigt werden. Werten Sie deshalb abgeschlossene Monate aus und vergleichen Sie mit demselben Monat im Vorjahr.",
    },
    {
      q: "Enthalten die Leistungsdaten auch Werbung?",
      a: "Ja. Laut Google enthalten sie Aktionen aus organischen Suchergebnissen und aus Google Ads. Wenn Sie Anzeigen schalten, notieren Sie die Zeiträume, damit Sie einen Anstieg nicht fälschlich der Profilpflege zuschreiben.",
    },
  ],
  sources: [
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Performance metrics (englische Fassung derselben Hilfeseite)", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=en" },
    { title: "Änderungen an der Chatfunktion und Anrufliste in Google Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/14919056?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Google adds post view counts to Business Profile, no API access yet (11. September 2026)", publisher: "PPC Land", url: "https://ppc.land/google-adds-post-view-counts-to-business-profile-no-api-access-yet/" },
    { title: "Google My Business launches new performance reporting", publisher: "Search Engine Land", url: "https://searchengineland.com/google-my-business-launches-new-performance-reporting-345252" },
  ],
  related: [
    { slug: "local-seo-tracking-kpis", title: "Local SEO Tracking: KPIs und ihre Quellen" },
    { slug: "local-seo-reporting-template", title: "Local-SEO-Reporting: Monatsbericht auf einer Seite" },
    { slug: "google-posts-ranking-faktor", title: "Beiträge im Google-Unternehmensprofil" },
    { slug: "google-business-kategorien-guide", title: "Kategorien im Unternehmensprofil" },
  ],
  cta: {
    title: "Wissen Sie, was Ihre Leistungsdaten sagen?",
    text: "Wir sehen uns Ihr Google-Unternehmensprofil an und sagen Ihnen, welche Werte für Ihren Betrieb zählen und wo das Profil Interessenten verliert. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
