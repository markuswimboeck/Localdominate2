import type { V4Article } from "../types";

const article: V4Article = {
  slug: "lokale-events-marketing",
  lang: "de",
  seoTitle: "Lokale Events bewerben: Profil, Website und Kalender",
  seoDescription:
    "So finden Gäste Ihre Veranstaltung: Beitrag im Unternehmensprofil, Event-Daten auf der Website, Stadtkalender und Ticketportale, Zeitplan und Nachbereitung.",
  h1: "Lokales Event-Marketing: So finden Menschen in Ihrer Stadt Ihre Veranstaltung",
  kicker: "Strategie",
  lead:
    "Für Cafés, Hotels, Salons, Werkstätten und Geschäfte, die eigene Veranstaltungen anbieten, etwa eine Weinprobe, einen Tag der offenen Tür oder einen Workshop. Sie erfahren, welche Wege Google für Veranstaltungen und Angebote vorsieht, wann sich Event-Daten auf der Website lohnen und wie Sie mit Zeitplan und Nachbereitung mehr aus jedem Termin machen.",
  answer:
    "Damit eine eigene Veranstaltung gefunden werden kann, gehört sie an drei Stellen hin: als Beitrag vom Typ „Veranstaltung“ ins Google-Unternehmensprofil, auf eine eigene Seite Ihrer Website mit Event-Daten und in die Kalender Ihrer Stadt. Google nennt Deutschland unter den Regionen der Veranstaltungssuche, verlangt aber öffentliche, buchbare Termine an einem realen Ort. Eine Anzeige garantiert Google nicht.",
  takeaways: [
    "Im Unternehmensprofil gibt es drei Beitragstypen: Aktuelles, Angebot und Veranstaltung. Eine Veranstaltung braucht Titel, Start- und Enddatum; ohne Uhrzeiten erscheint sie als ganztägig.",
    "Hotels dürfen laut Google keine Beiträge vom Typ „Angebot“ erstellen und keine Beiträge, in denen Angebote, Werbeaktionen oder Rabatte erwähnt werden.",
    "Event-Daten auf der Website unterstützt Google weiterhin. Deutschland mit Deutsch steht auf der Liste der Regionen. Pflicht sind name, startDate, location und location.address.",
    "Veranstaltungen müssen laut Google an einem realen Ort stattfinden und für die Allgemeinheit buchbar sein; Google hat das am 5. Juni 2025 in seiner Dokumentation mit weiteren Beispielen ergänzt. Öffnungszeiten, Gutscheine und reine Online-Termine zählen nicht.",
    "Öffentliche Veranstaltungen auf Eventbrite erscheinen laut Eventbrite im eigenen Verzeichnis, in großen Suchmaschinen und bei Partnerseiten.",
    "Nach der Veranstaltung dürfen Sie um Bewertungen bitten, aber ohne Anreize und ohne gezielt nur zufriedene Gäste zu fragen.",
  ],
  publishedAt: "2026-02-10",
  updatedAt: "2026-10-12",
  readingTime: 10,
  sections: [
    {
      id: "wo-gesucht-wird",
      title: "Wo Menschen nach Veranstaltungen suchen",
      answer:
        "Eine Veranstaltung kann über Google, über den Veranstaltungskalender der Stadt oder über eine Ticketplattform gefunden werden. Tragen Sie Ihren Termin deshalb an allen drei Stellen mit denselben Angaben ein und verlinken Sie jeweils auf eine Seite Ihrer Website.",
      blocks: [
        {
          t: "table",
          caption: "Orte für eine eigene Veranstaltung (Aufwand: unsere Einschätzung)",
          head: ["Ort", "Was dort hingehört", "Aufwand"],
          rows: [
            ["Google-Unternehmensprofil", "Beitrag vom Typ „Veranstaltung“, bei Bedarf ein „Angebot“ (nicht für Hotels)", "Gering, einige Minuten je Termin"],
            ["Eigene Website", "Eine Seite je Veranstaltung mit allen Fakten und Event-Daten", "Einmalig eine Vorlage, danach gering"],
            ["Ticket- oder Eventplattform", "Öffentlicher Eintrag mit Buchung", "Gering, Bedingungen je nach Anbieter"],
            ["Kalender von Stadt, Tourismusverband und Lokalmedien", "Eintrag mit Datum, Ort und Link", "Mittel, Fristen und Bedingungen je Kalender"],
            ["Eigene Kanäle", "Newsletter und Social Media mit Link zur Veranstaltungsseite", "Mittel, je nach Häufigkeit"],
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine Veranstaltung, die nur in sozialen Netzwerken angekündigt wird, finden Menschen über Google schwer. Die eigene Seite auf der Website ist die feste Adresse, auf die alle anderen Einträge verweisen. Wie Sie solche Inhalte planen, beschreibt [Local Content Marketing](/blog/local-content-marketing).",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Die Veranstaltung im Unternehmensprofil",
      answer:
        "Im Google-Unternehmensprofil legen Sie einen Beitrag vom Typ „Veranstaltung“ an. Dafür sind ein Titel sowie Start- und Enddatum nötig; ohne Uhrzeiten erscheint der Termin als ganztägig. Beiträge erscheinen in der Google-Suche und in Google Maps und lassen sich vorab planen.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Beitrag anlegen", text: "Im Unternehmensprofil einen neuen Beitrag erstellen und den Typ „Veranstaltung“ wählen." },
            { title: "Pflichtangaben", text: "Titel, Start- und Enddatum sowie Uhrzeiten eintragen. Ohne Uhrzeiten zeigt Google die Veranstaltung an den jeweiligen Tagen als ganztägig an." },
            { title: "Beschreibung und Bild", text: "In wenigen Sätzen sagen, was passiert, für wen es gedacht ist, was es kostet und wie man sich anmeldet. Ein eigenes Foto vom Ort oder einer früheren Veranstaltung zeigt mehr als ein Symbolbild." },
            { title: "Kontakt", text: "Google entfernt laut seinen Inhaltsrichtlinien unter Umständen Beiträge mit nicht bestätigten Kontaktdaten. Statt einer Telefonnummer im Text nutzen Sie den Button „Jetzt anrufen“." },
            { title: "Planen", text: "Mit „Diesen Beitrag planen“ legen Sie Datum und Uhrzeit der Veröffentlichung fest. Für wiederkehrende Beiträge gibt es das Menü „Wiederholungen“." },
          ],
        },
        {
          t: "p",
          text: "Auf Mobilgeräten erscheinen Beiträge laut Google in den Tabs „Aktuelle Informationen“ oder „Übersicht“, auf Computern im Bereich „Vom Inhaber“. Beiträge ohne Zeitraum archiviert Google nach sechs Monaten.",
        },
        {
          t: "p",
          text: "Öffnet Ihr Betrieb am Tag der Veranstaltung länger oder bleibt er für Gäste geschlossen, tragen Sie zusätzlich spezielle Öffnungszeiten ein. Wie das geht, steht in [Öffnungszeiten und Sonderzeiten](/blog/gbp-oeffnungszeiten-sondertage#spezielle-zeiten).",
        },
      ],
    },
    {
      id: "angebote",
      title: "Angebote rund um die Veranstaltung",
      answer:
        "Ein Beitrag vom Typ „Angebot“ eignet sich für einen Frühbucherpreis oder ein Paket zur Veranstaltung. Google verlangt dafür Titel, Datumsangaben und eine Uhrzeit; Gutscheincode, Link und Bedingungen sind optional. Hotels dürfen keine Angebote posten.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Pflichtangaben:** Titel, Datumsangaben und Uhrzeit. Optional sind Beschreibung, Foto oder Video, Gutscheincode, Link und Nutzungsbedingungen.",
            "**Button:** In einen Angebotsbeitrag fügt Google automatisch den Button „Angebot ansehen“ ein.",
            "**Beispiel:** „Frühbucherpreis für den Brotbackkurs bis 31. Oktober“ mit Code und Link zur Anmeldung. Das Beispiel ist erfunden und dient nur der Veranschaulichung.",
            "**Hotels:** Laut Google dürfen Hotels keine Beiträge vom Typ „Angebot“ erstellen. Auch Beiträge, in denen Angebote, Werbeaktionen oder Rabatte erwähnt oder verlinkt werden, sind für Hotels unzulässig. Eine Veranstaltung im Hotel kündigen Sie deshalb ohne Preisnachlass an.",
          ],
        },
        {
          t: "note",
          label: "Wichtig",
          text: "Ein Angebot darf nie an eine Bewertung geknüpft sein. Rabatte oder Geschenke gegen Rezensionen verbietet Google ausdrücklich.",
        },
      ],
    },
    {
      id: "eventseite",
      title: "Eine eigene Seite für jede Veranstaltung",
      answer:
        "Jede Veranstaltung braucht eine eigene Seite auf Ihrer Website mit allen Fakten als Text: Datum, Uhrzeit, Ort mit Adresse, Preis, Anmeldung und was enthalten ist. Auf diese Seite verlinken Profil, Kalender und soziale Netzwerke. Sie ist auch die Grundlage für Event-Daten.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Eigene Adresse", text: "Eine URL je Veranstaltung, etwa /veranstaltungen/weinprobe-november. Eine Sammelseite mit allen Terminen ist zusätzlich hilfreich." },
            { title: "Fakten zuerst", text: "Datum, Uhrzeit, Ort, Preis und Anmeldung stehen ganz oben und als Text, nicht nur im Bild eines Plakats." },
            { title: "Details danach", text: "Ablauf, für wen die Veranstaltung gedacht ist, Barrierefreiheit, Anreise und Parken, was Gäste mitbringen sollen." },
            { title: "Indexierung anstoßen", text: "In der Search Console können Sie mit der URL-Prüfung das Crawling einzelner Seiten beantragen. Laut Google kann das einige Tage bis wenige Wochen dauern; mehrfaches Beantragen beschleunigt nichts." },
            { title: "Nach dem Termin", text: "Die Seite nicht löschen, sondern als Rückblick mit Fotos und dem nächsten Termin weiterführen." },
          ],
        },
        {
          t: "p",
          text: "Weil das Crawling Tage bis Wochen dauern kann, sollte die Seite einige Wochen vor der Veranstaltung online sein. Eine feste Frist nennt Google nicht.",
        },
      ],
    },
    {
      id: "event-daten",
      title: "Event-Daten auf der Website: Stand Oktober 2026",
      answer:
        "Google unterstützt strukturierte Daten vom Typ Event weiterhin; die Dokumentation wurde zuletzt im September 2026 aktualisiert. Deutschland mit Deutsch steht auf der Liste der Regionen, in denen die Veranstaltungssuche verfügbar ist. Die Veranstaltung muss an einem realen Ort stattfinden und für die Allgemeinheit buchbar sein. Eine Anzeige garantiert Google nicht.",
      blocks: [
        {
          t: "table",
          caption: "Was Google für Event-Daten verlangt (Search Central, englische Fassung, Stand 8. September 2026)",
          head: ["Thema", "Was Google schreibt"],
          rows: [
            ["Pflichtangaben", "name, startDate, location und location.address"],
            ["Ort", "Veranstaltungen müssen an einem realen Ort stattfinden; rein virtuelle Termine ohne realen Teil werden nicht unterstützt"],
            ["Zugang", "Für die Allgemeinheit buchbar; Veranstaltungen nur für Mitglieder oder auf Einladung sind ausgeschlossen"],
            ["Nicht als Veranstaltung", "Öffnungszeiten, Gutscheine, kurzfristige Rabatte und Produkte oder Leistungen, die keine Veranstaltung sind"],
            ["Mehrtägig", "Start- und Enddatum angeben; Vorstellungen an verschiedenen Tagen mit eigenen Tickets erhalten je ein eigenes Event-Element"],
            ["Absage und Verschiebung", "eventStatus auf abgesagt, verschoben oder neu terminiert setzen; startDate dabei nicht löschen"],
            ["Prüfen", "Mit dem Test für Rich-Suchergebnisse prüfen und kritische Fehler beheben"],
          ],
        },
        {
          t: "note",
          label: "Stand Oktober 2026",
          text: "Am 5. Juni 2025 hat Google seine Hinweise zu Event-Daten geändert: Die Eigenschaften für Online-Veranstaltungen wurden entfernt und weitere Beispiele für zulässige und unzulässige Veranstaltungen ergänzt. Google nennt dabei als Voraussetzung, dass Veranstaltungen öffentlich buchbar sind und an einem realen Ort stattfinden. Eine Einstellung der Funktion haben wir in den Dokumentationsänderungen bis zum 12. Oktober 2026 nicht gefunden.",
        },
        {
          t: "p",
          text: "Wenn Sie über eine Ticketplattform verkaufen, empfiehlt Google zu prüfen, ob diese Plattform bereits an der Veranstaltungssuche teilnimmt. Dann können Sie Ihre Termine weiter dort einstellen. Ohne Zugriff auf den HTML-Code hilft laut Google ein Plug-in Ihres Content-Management-Systems. Welche weiteren Typen sich für lokale Betriebe lohnen, steht in [Schema Markup für Local SEO](/blog/schema-markup-local-seo#welche-typen).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Ein wöchentlicher Mittagstisch oder eine Happy Hour sind nach diesen Regeln eher Öffnungszeiten oder Rabatte als Veranstaltungen. Zeichnen Sie nur echte Termine aus, etwa eine Lesung, einen Kurs oder ein Konzert, sonst riskieren Sie laut Google eine manuelle Maßnahme.",
        },
      ],
    },
    {
      id: "kalender-und-plattformen",
      title: "Kalender, Portale und Ticketplattformen",
      answer:
        "Tragen Sie die Veranstaltung in die Kalender Ihrer Stadt, Ihres Tourismusverbands und der Lokalmedien ein und nutzen Sie bei Bedarf eine Ticketplattform. Öffentliche Veranstaltungen auf Eventbrite erscheinen laut Eventbrite im eigenen Verzeichnis, in großen Suchmaschinen und bei Partnerseiten.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Kalender finden", text: "Suchen Sie nach „Veranstaltungskalender“ mit dem Namen Ihrer Stadt oder Region. Prüfen Sie auch Stadtmarketing, Tourismusverband, Lokalzeitung und Vereine." },
            { title: "Bedingungen lesen", text: "Prüfen Sie, ob der Kalender eine Registrierung verlangt, Einträge vor der Veröffentlichung prüft oder Fristen setzt, und planen Sie dafür Zeit ein." },
            { title: "Dieselben Angaben", text: "Name, Adresse, Datum und Uhrzeit genau wie auf Ihrer Website und im Unternehmensprofil. Warum das wichtig ist, erklärt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo)." },
            { title: "Auf die eigene Seite verlinken", text: "Jeder Eintrag verweist auf die Veranstaltungsseite Ihrer Website, nicht nur auf die Startseite." },
          ],
        },
        {
          t: "p",
          text: "Bei Eventbrite steuern Sie die Sichtbarkeit über die Datenschutzeinstellungen der Veranstaltung. Private Veranstaltungen erscheinen laut Eventbrite nicht im Verzeichnis, in Suchmaschinen oder bei Partnerseiten. Wird eine öffentliche Veranstaltung nachträglich auf privat gestellt, verschwindet sie nicht automatisch aus Suchergebnissen, die bereits erfasst wurden. Andere Plattformen haben eigene Einstellungen; deren Hilfeseiten haben wir für diesen Artikel nicht geprüft.",
        },
        {
          t: "p",
          text: "Welche lokalen Quellen außerdem Links und Erwähnungen bringen, beschreibt [Local Link Building](/blog/local-link-building#quellen). Wenn Sie Creators aus der Region einladen, hilft [Lokale Influencer-Kooperationen](/blog/lokale-influencer-kooperationen).",
        },
      ],
    },
    {
      id: "zeitplan",
      title: "Zeitplan: wann was passiert",
      answer:
        "Planen Sie rückwärts vom Termin: zuerst die Seite auf der Website, dann die Kalender mit ihren Fristen, danach Beitrag und Angebot im Unternehmensprofil, kurz vorher die Erinnerung. Der Plan unten ist ein Vorschlag von uns, keine Vorgabe von Google.",
      blocks: [
        {
          t: "table",
          caption: "Vorschlag für einen Zeitplan (Einschätzung)",
          head: ["Wann", "Was", "Warum"],
          rows: [
            ["Vier bis sechs Wochen vorher", "Veranstaltungsseite mit Event-Daten online, Crawling beantragen", "Crawling kann laut Google Tage bis Wochen dauern"],
            ["Drei bis vier Wochen vorher", "Kalender von Stadt, Tourismus und Lokalmedien, Ticketplattform", "Mögliche Prüfung und Fristen der Kalender"],
            ["Zwei bis drei Wochen vorher", "Beitrag „Veranstaltung“ im Unternehmensprofil, bei Bedarf „Angebot“ (Hotels: kein Angebot)", "Der Termin erscheint in Suche und Maps"],
            ["In der Woche davor", "Erinnerung per Newsletter und Social Media, spezielle Öffnungszeiten prüfen", "Unentschlossene erinnern, richtige Zeiten zeigen"],
            ["Am Tag danach", "Dank, Fotos mit Einwilligung, Bitte um Bewertung ohne Anreiz", "Eindrücke sind noch frisch"],
            ["Bei Absage oder Verschiebung", "Seite, eventStatus, Beitrag und Kalendereinträge sofort ändern", "Niemand steht vor verschlossener Tür"],
          ],
        },
      ],
    },
    {
      id: "nachbereitung",
      title: "Nachbereitung: Bewertungen, Fotos und Auswertung",
      answer:
        "Bitten Sie alle Gäste nach der Veranstaltung um eine Bewertung, mit Link oder QR-Code, ohne Gegenleistung und ohne Druck. Google verbietet Anreize und das gezielte Einholen nur positiver Rezensionen. Fotos mit erkennbaren Personen veröffentlichen Sie nur mit Einwilligung. Werten Sie aus, über welchen Kanal die Anmeldungen kamen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Bewertungen:** Laut Google können Sie Kunden bitten, auf einen Link zu klicken oder einen QR-Code zu scannen. Verboten sind Anreize wie kostenlose oder vergünstigte Produkte und das gezielte Bitten um positive Rezensionen. Außerdem dürfen Sie Kunden nicht zur Bewertung auffordern oder unter Druck setzen, solange sie noch vor Ort sind. Unsere Empfehlung: Fragen Sie alle Gäste gleich, nicht nur die zufriedenen, und erst nach der Veranstaltung. Mehr in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen#regeln).",
            "**Fotos:** Nach § 22 KUG dürfen Bildnisse grundsätzlich nur mit Einwilligung der abgebildeten Person verbreitet werden. § 23 KUG nennt Ausnahmen, etwa Bilder von Versammlungen und ähnlichen Vorgängen, aber nicht, wenn ein berechtigtes Interesse der abgebildeten Person verletzt wird. Ob eine Ausnahme greift, ist eine Rechtsfrage. Der einfachere Weg: bei der Anmeldung auf Fotos hinweisen und Einwilligungen einholen, bevor Sie Bilder veröffentlichen.",
            "**Kanäle messen:** Versehen Sie Links in Newsletter, Kalendern und Social Media mit UTM-Parametern. Google Analytics verlangt dafür utm_source, utm_medium und utm_campaign und unterscheidet Groß- und Kleinschreibung.",
            "**Fragen:** Bei der Anmeldung kurz fragen, wie Gäste von der Veranstaltung erfahren haben. Das ist ungenau, zeigt aber Richtungen.",
          ],
        },
        {
          t: "p",
          text: "Halten Sie nach jeder Veranstaltung fest, welche Kanäle Anmeldungen gebracht haben. So wissen Sie beim nächsten Termin, wo sich der Aufwand lohnt. Auf kritische Bewertungen reagieren Sie sachlich, wie in [Negative Google-Bewertungen](/blog/negative-google-bewertungen) beschrieben.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Kann ich im Google-Unternehmensprofil eine Veranstaltung anlegen?",
      a: "Ja, als Beitrag vom Typ „Veranstaltung“. Sie brauchen einen Titel sowie Start- und Enddatum; ohne Uhrzeiten erscheint die Veranstaltung als ganztägig. Den Beitrag können Sie vorab planen.",
    },
    {
      q: "Zeigt Google Veranstaltungen in Deutschland gesondert an?",
      a: "Laut Search Central ist die Veranstaltungssuche in Deutschland auf Deutsch verfügbar. Für die Darstellung verlangt Google die Pflichtangaben in den Event-Daten, einen realen Ort und eine öffentlich buchbare Veranstaltung. Google garantiert nicht, dass strukturierte Daten in den Suchergebnissen erscheinen.",
    },
    {
      q: "Funktionieren Event-Daten für Online-Veranstaltungen?",
      a: "Nein. Google unterstützt laut Dokumentation keine virtuellen Veranstaltungen ohne realen Teil. Die Eigenschaften für Online-Veranstaltungen hat Google am 5. Juni 2025 aus seinen Hinweisen entfernt.",
    },
    {
      q: "Darf ich Gästen für eine Bewertung ein Getränk oder einen Rabatt anbieten?",
      a: "Nein. Google verbietet Anreize wie Zahlungen, Rabatte oder kostenlose Produkte und Dienstleistungen für Rezensionen. Bitten Sie alle Gäste ohne Gegenleistung.",
    },
    {
      q: "Darf ein Hotel im Unternehmensprofil Angebote zur Veranstaltung posten?",
      a: "Nein. Laut Google dürfen Hotels keine Beiträge vom Typ „Angebot“ erstellen und keine Beiträge, in denen Angebote, Werbeaktionen oder Rabatte erwähnt oder verlinkt werden. Eine Ankündigung ohne Preisnachlass ist möglich.",
    },
    {
      q: "Brauche ich Event-Daten, wenn ich Tickets über eine Plattform verkaufe?",
      a: "Nicht unbedingt. Google empfiehlt zu prüfen, ob die Plattform bereits an der Veranstaltungssuche teilnimmt; dann können Sie Ihre Termine weiter dort einstellen. Eine eigene Seite auf Ihrer Website lohnt sich trotzdem als feste Adresse.",
    },
  ],
  sources: [
    { title: "Strukturierte Daten für Veranstaltungen (Event), englische Fassung, Stand 8. September 2026", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/event" },
    { title: "Latest Google Search Documentation Updates (Eintrag vom 5. Juni 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Beiträge in Ihrem Unternehmensprofil erstellen und verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7342169?hl=de" },
    { title: "Inhaltsrichtlinien für Fotos, Videos und Beiträge im Unternehmensprofil", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7213077?hl=de" },
    { title: "Ask Google to recrawl your URLs (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" },
    { title: "Manage your event privacy settings", publisher: "Eventbrite Help Center", url: "https://www.eventbrite.com/help/en-us/articles/305873/how-to-manage-the-privacy-settings-for-your-event/" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Richtlinien für Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Tipps für mehr Rezensionen", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3474122?hl=de" },
    { title: "Tools zur URL-Erstellung: Kampagnendaten mithilfe benutzerdefinierter URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
    { title: "§ 22 KunstUrhG (Recht am eigenen Bild)", publisher: "dejure.org", url: "https://dejure.org/gesetze/KunstUrhG/22.html" },
    { title: "§ 23 KunstUrhG (Ausnahmen zu § 22)", publisher: "dejure.org", url: "https://dejure.org/gesetze/KunstUrhG/23.html" },
  ],
  related: [
    { slug: "local-content-marketing", title: "Local Content Marketing" },
    { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
    { slug: "gbp-oeffnungszeiten-sondertage", title: "Öffnungszeiten und Sonderzeiten" },
    { slug: "lokale-influencer-kooperationen", title: "Lokale Influencer-Kooperationen" },
  ],
  cta: {
    title: "Finden Gäste Ihre nächste Veranstaltung?",
    text: "Wir prüfen Ihr Google-Unternehmensprofil, Ihre Veranstaltungsseiten und ob Ihre Event-Daten den Regeln von Google entsprechen. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
