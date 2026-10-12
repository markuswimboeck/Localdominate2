import type { V4Article } from "../types";

const article: V4Article = {
  slug: "wie-google-maps-ranking-funktioniert",
  lang: "de",
  seoTitle: "Wie Google Maps Treffer auswählt: Schritt für Schritt",
  seoDescription:
    "Was bei einer Suche in Google Maps passiert: Suchanfrage, Standort, Relevanz, Entfernung, Bekanntheit, Filter, Personalisierung und Anzeigen. Mit Testmethode.",
  h1: "Wie Google Maps entscheidet, was Sie sehen: eine Suche Schritt für Schritt",
  kicker: "Google Maps",
  lead:
    "Für Inhaber und Marketingverantwortliche, die verstehen wollen, warum Google Maps bei derselben Suche mal den eigenen Betrieb zeigt und mal nicht. Wir gehen eine einzelne Suche aus Sicht der suchenden Person durch, von der Eingabe bis zur Liste, und zeigen, wie Sie Ergebnisse ehrlich prüfen.",
  answer:
    "Google Maps ermittelt die Treffer laut eigener Hilfe passend zur jeweiligen Suchanfrage. Zuerst zählt, was gesucht wird und wo: Suchbegriff, Ortsangabe und der Standort der suchenden Person. Dann kombiniert Google **Relevanz, Entfernung und Bekanntheit**. Filter wie „Öffnungszeiten“, der eigene Verlauf im Google-Konto und gekennzeichnete Anzeigen verändern zusätzlich, was jemand sieht. Deshalb sehen zwei Personen selten dieselbe Liste.",
  takeaways: [
    "Google beschreibt keine feste Rangliste, sondern Treffer „für die Suchanfrage“. Das Ergebnis hängt nach unserer Einordnung von Suchbegriff, Ort und Person ab.",
    "Google nennt drei Hauptfaktoren: Relevanz, Entfernung und Bekanntheit (in der Unternehmensprofil-Hilfe „Bekanntheit/Beliebtheit“). Eine Gewichtung kennen wir nicht, Google veröffentlicht keine.",
    "Wer angemeldet ist, bekommt laut Google auch Orte angezeigt, die er gesucht, gespeichert oder bewertet hat. Ihr eigenes Handy ist deshalb ein schlechter Messpunkt.",
    "Anzeigen sind in Maps gekennzeichnet, auf der Karte unter anderem als quadratische Markierungen. Zahlungen beeinflussen laut Google die normalen Ergebnisse nicht.",
    "Ein privates Browserfenster ist nach unserer Einschätzung nicht neutral: Google schätzt den ungefähren Standort immer, zum Beispiel über die IP-Adresse. Ehrlich testen heißt, Ort, Gerät und Zeitpunkt festzuhalten.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-12",
  readingTime: 9,
  sections: [
    {
      id: "ablauf",
      title: "Was zwischen Eingabe und Trefferliste passiert",
      answer:
        "Aus Sicht der suchenden Person läuft eine Maps-Suche in fünf Schritten ab: Anfrage verstehen, Ort bestimmen, passende Betriebe auswählen und ordnen, Filter und persönliche Signale anwenden, Anzeigen gekennzeichnet darstellen.",
      blocks: [
        {
          t: "p",
          text: "Google beschreibt die Mechanik nicht als festes Ablaufdiagramm. Die folgende Reihenfolge ist unsere Einordnung dessen, was Google in seinen Hilfeseiten zu Maps, zur Suche und zum Unternehmensprofil schreibt. Sie hilft, die einzelnen Einflüsse auseinanderzuhalten.",
        },
        {
          t: "steps",
          items: [
            { title: "Die Anfrage", text: "Was sucht die Person: einen bestimmten Betrieb, eine Art von Betrieb wie „Zahnarzt“ oder etwas an einem Ort wie „Café in der Nähe des Doms“?" },
            { title: "Der Ort", text: "Für welches Gebiet gilt die Suche: den Ort im Suchbegriff, den Gerätestandort oder einen von Google geschätzten Standort?" },
            { title: "Auswahl und Reihenfolge", text: "Welche Unternehmensprofile passen, wie weit sind sie entfernt und wie bekannt sind sie? Diese Faktoren kombiniert Google laut Maps-Hilfe, um die besten Treffer zu ermitteln." },
            { title: "Filter und persönliche Signale", text: "Hat die Person einen Filter gesetzt, etwa „Öffnungszeiten“? Ist sie angemeldet und hat Orte gespeichert, bewertet oder schon gesucht?" },
            { title: "Anzeigen", text: "Zusätzlich können bezahlte Einträge erscheinen. Sie sind gekennzeichnet, und Zahlungen beeinflussen laut Google die normalen Ergebnisse nicht." },
          ],
        },
      ],
    },
    {
      id: "anfrage",
      title: "Schritt 1: Was gesucht wird",
      answer:
        "Die Suchanfrage legt fest, welche Betriebe überhaupt in Frage kommen. Ein Firmenname führt zu einem Eintrag, eine Kategorie wie „Physiotherapie“ zu einer Auswahl, eine Ortsangabe zu einem bestimmten Gebiet.",
      blocks: [
        {
          t: "p",
          text: "Die Maps-Hilfe nennt als Beispiele für eine Suche einen Firmennamen, eine Kategorie in der Nähe eines bekannten Orts, eine Stadt mit Bundesland, eine Postleitzahl oder eine Kreuzung. Für Betriebe ist vor allem die Suche nach einer Kategorie interessant. Hier entscheidet sich, ob Ihr Profil zur gesuchten Leistung passt, also ob es **relevant** ist.",
        },
        {
          t: "p",
          text: "Zusätze im Suchbegriff verschieben die Auswahl. „Zahnarzt“ und „Zahnarzt Notdienst“ sind für Google zwei verschiedene Fragen. Ein Betrieb, der eine Leistung weder in Kategorie und Leistungen noch auf der Website nennt, hat es bei der genaueren Suche nach unserer Einschätzung schwer. Wie Sie Kategorie und Leistungen richtig wählen, steht im Leitfaden [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern#relevanz).",
        },
      ],
    },
    {
      id: "standort",
      title: "Schritt 2: Wo gesucht wird",
      answer:
        "Steht kein Ort in der Suche, kommt es auf den Standort der suchenden Person an. Wer seinen Standort nicht teilt, wird trotzdem verortet: Google schätzt laut eigener Hilfe immer den ungefähren Ort, etwa über die IP-Adresse.",
      blocks: [
        {
          t: "p",
          text: "Google nennt in der Hilfe zur Standortermittlung mehrere Quellen. Viele Geräte können ihren **genauen Standort** bestimmen, wenn Sie das erlauben. Eine im Google-Konto hinterlegte **Privat- oder Arbeitsadresse** kann den ungefähren Standort bestimmen, wenn Sie sich vermutlich dort aufhalten. Frühere **Aktivitäten** können einen ungefähren Ort enthalten. Und die **IP-Adresse** richtet sich grob nach der geografischen Position. Ohne Anmeldung kann Google laut Hilfe auch Standortinformationen aus früheren Suchanfragen auf Ihrem Gerät heranziehen.",
        },
        {
          t: "p",
          text: "Auch in der normalen Websuche spielt der Ort mit. Google schreibt, dass die Relevanz von Hunderten Faktoren bestimmt wird, darunter Standort, Sprache und Gerät, und dass jemand in Paris bei der Suche nach „Fahrradwerkstatt“ andere Ergebnisse erhält als jemand in Hongkong.",
        },
        {
          t: "h3",
          text: "„In der Nähe“ und der Kartenausschnitt",
        },
        {
          t: "p",
          text: "Die Maps-Hilfe nennt als Beispiel ein Café in der Nähe von Schloss Neuschwanstein. Dass die Suche dann dem genannten Ort statt Ihrem Gerätestandort gilt, ist naheliegend, wird dort aber nicht ausdrücklich erklärt. Wie stark der gerade sichtbare Kartenausschnitt die Auswahl beeinflusst, beschreibt Google in seinen Hilfeseiten nicht. Für Tests heißt das: Notieren Sie neben dem Suchbegriff immer, welcher Bereich der Karte zu sehen war.",
        },
      ],
    },
    {
      id: "drei-faktoren",
      title: "Schritt 3: Relevanz, Entfernung, Bekanntheit",
      answer:
        "Aus den passenden Betrieben bildet Google eine Reihenfolge. Die Unternehmensprofil-Hilfe nennt „Relevanz“, „Entfernung“ und „Bekanntheit/Beliebtheit“, die Maps-Hilfe spricht von Relevanz, Entfernung und Auffälligkeit. Eine veröffentlichte Gewichtung kennen wir nicht.",
      blocks: [
        {
          t: "table",
          caption: "Die drei Faktoren aus Sicht einer einzelnen Suche",
          head: ["Faktor", "Googles Erklärung", "Was das für die Suche bedeutet"],
          rows: [
            ["Relevanz", "Inwieweit ein Unternehmensprofil mit dem Gesuchten übereinstimmt", "Ein Profil ohne passende Kategorie oder Leistung kommt für die Suche kaum in Betracht"],
            ["Entfernung", "Wie weit ein Unternehmen vom suchenden Kunden entfernt ist; ohne geteilten Standort nutzt Google, was es über den Standort weiß", "Dieselbe Suche zwei Straßen weiter kann eine andere Reihenfolge ergeben"],
            ["Bekanntheit/Beliebtheit", "Der Bekanntheitsgrad eines Unternehmens; laut Google zählen dazu die Anzahl der Websites, die auf das Unternehmen verweisen, und die Anzahl der Rezensionen", "Laut Google werden bekannte Orte mit größerer Wahrscheinlichkeit in den Suchergebnissen angezeigt"],
          ],
        },
        {
          t: "p",
          text: "Wichtig ist das Zusammenspiel. Die Maps-Hilfe schreibt: Entspricht das Angebot eines weiter entfernten Unternehmens nach den Algorithmen von Google eher der Suchanfrage, wird es vor näher gelegenen Unternehmen aufgelistet. Die Nähe allein entscheidet also nicht. Zur Bekanntheit schreibt Google außerdem, dass mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern können.",
        },
        {
          t: "p",
          text: "Welche Signale über diese drei Faktoren hinaus vermutet werden und wie belastbar das ist, ordnet der Artikel [Google-Maps-Ranking-Faktoren](/blog/google-maps-seo-ranking-faktoren) ein. Wie sich das lokale Ranking vom Ranking der Website unterscheidet, erklärt [Google Maps SEO und organisches SEO](/blog/google-maps-seo-vs-organic-seo).",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Frühere Versionen dieses Artikels nannten Prozentanteile für die drei Faktoren und für einzelne Signale wie Bewertungen oder Links. Solche Gewichtungen kennen wir von Google nicht, die Zahlen waren nicht belegt. Wir haben sie entfernt.",
        },
      ],
    },
    {
      id: "filter",
      title: "Schritt 4: Filter, die die Liste verkleinern",
      answer:
        "Filter grenzen die Treffer nach einem Merkmal ein. Die Maps-Hilfe nennt für den Computer die Filter Preis, Öffnungszeiten und Informationen zum Hotel. Wer gerade geschlossen ist, fällt bei „Öffnungszeiten“ heraus.",
      blocks: [
        {
          t: "p",
          text: "Laut Maps-Hilfe zeigt der Filter **Öffnungszeiten** Geschäfte und Restaurants, die derzeit geöffnet sind. **Preis** filtert nach Restaurantpreisen, **Informationen zum Hotel** betrifft Check-in-Daten und Bewertungen. In der Android-App finden sich die Filter unter „Mehr Filter“. Google weist darauf hin, dass manche Filteroptionen nicht für alle Sprachen und Länder verfügbar sind. Eine vollständige Liste aller Filter, etwa nach Sternebewertung, nennt die Hilfe nicht. Was in Ihrer App angeboten wird, sehen Sie am zuverlässigsten selbst.",
        },
        {
          t: "p",
          text: "Für Betriebe folgt daraus etwas Praktisches. Google erklärt nicht, woher der Filter seine Zeiten nimmt, naheliegend sind die Angaben im Profil. Sind Ihre Öffnungszeiten falsch oder fehlen Sonderzeiten an Feiertagen, kann Ihr Betrieb bei einem Filter auf geöffnete Betriebe deshalb fehlen, obwohl Sie geöffnet haben. Wie Sie Zeiten und Sondertage pflegen, zeigt der Artikel [Öffnungszeiten und Sonderzeiten im Unternehmensprofil](/blog/gbp-oeffnungszeiten-sondertage). Zu Merkmalen wie Barrierefreiheit oder Zahlungsarten hilft [Attribute im Unternehmensprofil](/blog/gbp-attribute-richtig-nutzen).",
        },
      ],
    },
    {
      id: "personalisierung",
      title: "Schritt 5: Was Google über die suchende Person weiß",
      answer:
        "Wer in Google Maps angemeldet ist, bekommt laut Google genauere Ergebnisse. Dazu können Orte gehören, nach denen die Person schon gesucht hat, die sie gespeichert, bewertet oder rezensiert hat, und ihre Privat- oder Arbeitsadresse.",
      blocks: [
        {
          t: "p",
          text: "Die Maps-Hilfe beschreibt im Abschnitt „Relevante Orte“, dass Suchergebnisse Orte enthalten können, mit denen Sie direkt interagiert haben. Ausdrücklich genannt werden Orte, nach denen Sie schon einmal gesucht haben, gespeicherte oder markierte Orte und Orte, die Sie bewertet oder rezensiert haben. Verlauf und personalisierte Empfehlungen laufen laut Google über die Einstellung **Web- & App-Aktivitäten**, verwaltet unter „Meine Aktivitäten“. Das Speichern des Verlaufs können Sie beenden.",
        },
        {
          t: "p",
          text: "Auch die Google Suche erklärt, warum Ergebnisse von Person zu Person variieren. Personalisierung wirkt dort nicht auf alle Ergebnisse, manche sind personalisiert, andere nicht. Schalten Sie sie ab, gelten Standort und Sprache trotzdem weiter. Ohne Anmeldung lässt sich die Personalisierung über die Einstellung „Suchanpassung“ steuern.",
        },
        {
          t: "note",
          label: "Was das für Inhaber heißt",
          text: "Sie haben Ihren eigenen Betrieb vermutlich oft gesucht, angesehen und vielleicht gespeichert. Wenn Sie ihn auf dem eigenen Handy weit oben sehen, sagt das wenig darüber, was ein neuer Kunde sieht.",
        },
      ],
    },
    {
      id: "unterschiede",
      title: "Warum zwei Menschen verschiedene Listen sehen",
      answer:
        "Unterschiede entstehen fast immer aus Ort, Suchbegriff, Filter oder Konto. Ein Fehler im Profil ist nach unserer Erfahrung erst dann wahrscheinlich, wenn Ihr Betrieb auch unter gleichen Bedingungen fehlt.",
      blocks: [
        {
          t: "table",
          caption: "Typische Ursachen für unterschiedliche Ergebnisse",
          head: ["Unterschied", "Warum er die Liste ändert"],
          rows: [
            ["Anderer Standort", "Die Entfernung zum Betrieb ändert sich, und ohne geteilten Standort schätzt Google den Ort anders"],
            ["Anderer Suchbegriff", "„Friseur“ und „Herrenfriseur“ sind verschiedene Anfragen mit verschiedener Relevanz"],
            ["Filter gesetzt", "Geschlossene Betriebe oder unpassende Preisstufen fallen heraus"],
            ["Angemeldet mit Verlauf", "Gesuchte, gespeicherte oder bewertete Orte können in den Ergebnissen erscheinen"],
            ["Anderes Gerät oder andere Sprache", "Google nennt Standort, Sprache und Gerät als Faktoren der Suche, und manche Filter gibt es nicht überall"],
            ["Anderer Zeitpunkt", "Bei einem Filter auf geöffnete Betriebe kommt es darauf an, wann gesucht wird"],
          ],
        },
        {
          t: "p",
          text: "Ist Ihr Betrieb unter allen Bedingungen verschwunden, hilft der Artikel [Ranking plötzlich verschwunden](/blog/ranking-ploetzlich-verschwunden) bei der Ursachensuche.",
        },
      ],
    },
    {
      id: "anzeigen",
      title: "Anzeigen und normale Treffer",
      answer:
        "Anzeigen sind in Maps gekennzeichnet, auf der Karte unter anderem als quadratische Markierungen. Laut Google haben Zahlungen keinen Einfluss auf die normalen Ergebnisse in Maps. Ein bezahlter Platz ist also eine Anzeige, kein besseres Ranking.",
      blocks: [
        {
          t: "p",
          text: "Die Maps-Hilfe schreibt: „Bezahlte Inhalte sind in Google Maps entsprechend gekennzeichnet.“ Auf der Karte handelt es sich bei den quadratischen Markierungen um Anzeigen, die kleinen Markierungen stehen für die besten Ergebnisse. Laut Google-Ads-Hilfe können lokale Anzeigen in Maps als gesponserte Markierungen auf der Karte, als Anzeigen in den Maps-Suchergebnissen oder als Anzeigenvorschläge erscheinen. Die Ads-Hilfe nennt als ersten Schritt, Standort-Assets im Werbekonto zu aktivieren, und verweist auf die Verknüpfung mit dem Unternehmensprofil.",
        },
        {
          t: "p",
          text: "In der Google Suche wurde das Label laut einem Fachbericht von 2022 in deutschsprachigen Ergebnissen von „Anzeige“ auf „Gesponsert“ umgestellt. Die aktuelle deutsche Bezeichnung nennt Googles Hilfe nicht. Seit Oktober 2025 fasst Google Textanzeigen laut einem weiteren Fachbericht unter einer gemeinsamen Kennzeichnung zusammen, die sich ausblenden lässt. Für Ihre Auswertung zählt: Anzeigen gehören nicht zur Position Ihres Profils. Die Unternehmensprofil-Hilfe sagt dazu klar, dass ein besseres lokales Ranking nicht eingefordert werden kann, auch nicht gegen Bezahlung.",
        },
      ],
    },
    {
      id: "testen",
      title: "Ergebnisse ehrlich testen",
      answer:
        "Ein einzelner Blick ins eigene Handy ist kein Test. Halten Sie Suchbegriff, Ort, Gerät, Anmeldestatus und Zeitpunkt fest, wiederholen Sie dieselbe Suche unter gleichen Bedingungen und zählen Sie Anzeigen nicht mit.",
      blocks: [
        {
          t: "p",
          text: "Viele empfehlen ein privates Browserfenster als neutrale Ansicht. Das stimmt nur zum Teil. Laut Chrome-Hilfe speichert der Inkognitomodus nach der Sitzung keine Websitedaten und keine Aufzeichnungen der besuchten Websites, aber Websites können weiterhin Informationen über Sie erheben. Und Google schätzt laut Hilfe zur Standortermittlung immer den ungefähren Ort, unter anderem über die IP-Adresse. Unsere Einschätzung: Inkognito hält vor allem den eigenen Verlauf aus der Suche heraus, den Standort nicht. Das ist eine Schlussfolgerung aus diesen beiden Hilfeseiten, Google beschreibt es so nicht ausdrücklich.",
        },
        {
          t: "steps",
          items: [
            { title: "Suchbegriffe wählen", text: "Nehmen Sie drei bis fünf Begriffe, mit denen Kunden Sie tatsächlich finden. Die Leistungsdaten Ihres Unternehmensprofils zeigen die Suchbegriffe, mit denen Nutzer nach Ihrem Unternehmen gesucht haben." },
            { title: "Bedingungen festlegen", text: "Abgemeldet oder in einem privaten Fenster, immer dasselbe Gerät, dieselbe Sprache, kein Filter. Notieren Sie, ob der Gerätestandort freigegeben war." },
            { title: "Ort bewusst wählen", text: "Testen Sie von mehreren Punkten Ihres Einzugsgebiets aus, nicht nur aus dem Betrieb. Wie man ein Raster aus Messpunkten anlegt, steht in [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern#ranking-messen)." },
            { title: "Ergebnis festhalten", text: "Position ohne Anzeigen zählen, Bildschirmfoto mit Datum und Uhrzeit speichern, Kartenausschnitt notieren." },
            { title: "Wiederholen und vergleichen", text: "Dieselbe Prüfung in regelmäßigen Abständen wiederholen. Eine Vorlage für die Auswertung über Monate bietet der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker)." },
          ],
        },
        {
          t: "p",
          text: "Positionen sind nur die halbe Wahrheit. Ob aus Sichtbarkeit Kunden werden, zeigen die Leistungsdaten Ihres Profils: Aufrufe in Suche und Maps, Anrufe, Routen und Website-Klicks. Wenn Sie eine zweite Meinung möchten, prüfen wir Ihr Profil im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Gibt es eine feste Rangliste in Google Maps?",
      a: "Eine feste Rangliste beschreibt Google nicht. Laut Maps-Hilfe werden die besten Treffer für die jeweilige Suchanfrage ermittelt, und zwar aus Relevanz, Entfernung und Bekanntheit. Suchbegriff, Ort, Filter und das Konto der suchenden Person verändern das Ergebnis.",
    },
    {
      q: "Warum stehe ich auf meinem Handy oben, mein Kunde sieht mich aber nicht?",
      a: "Sie suchen meist aus dem Betrieb oder dessen Nähe und haben Ihren Betrieb oft angesehen. Laut Google können gesuchte, gespeicherte und bewertete Orte in den Ergebnissen erscheinen. Ihr Kunde sucht von woanders und ohne diesen Verlauf.",
    },
    {
      q: "Ist ein Inkognito-Fenster ein neutraler Test?",
      a: "Nur teilweise. Google schätzt den ungefähren Standort immer, etwa über die IP-Adresse, und Websites können weiterhin Informationen erheben. Dass der eigene Verlauf wegfällt, ist unsere Einschätzung, keine Aussage von Google. Halten Sie deshalb Ort, Gerät und Zeitpunkt fest und vergleichen Sie nur Tests unter gleichen Bedingungen.",
    },
    {
      q: "Kann ich mit Google Ads in Maps nach oben kommen?",
      a: "Sie können eine Anzeige schalten, die gekennzeichnet ist und auf der Karte unter anderem als quadratische Markierung erscheinen kann. Die normalen Ergebnisse beeinflussen Zahlungen laut Google nicht, und ein besseres lokales Ranking lässt sich auch gegen Bezahlung nicht einfordern.",
    },
    {
      q: "Warum fehlt mein Betrieb, wenn jemand nach geöffneten Geschäften filtert?",
      a: "Google erklärt nicht, woher der Filter seine Zeiten nimmt, naheliegend sind die Angaben im Profil. Sind sie falsch oder fehlen Sonderzeiten, kann Ihr Betrieb als geschlossen gelten. Prüfen Sie reguläre Zeiten und Sonderöffnungszeiten im Unternehmensprofil.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "In Google Maps nach Orten suchen (Computer)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/3092445?hl=de&co=GENIE.Platform%3DDesktop" },
    { title: "In Google Maps nach Orten suchen (Android-Smartphone und -Tablet)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/3092445?hl=de&co=GENIE.Platform%3DAndroid" },
    { title: "Nach Orten in der Nähe suchen und die Gegend erkunden", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/4610185?hl=de" },
    { title: "Standortermittlung bei Google und Verwaltung Ihrer Standorteinstellungen", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/179386?hl=de" },
    { title: "Warum Google-Suchergebnisse von Person zu Person variieren können", publisher: "Google Suche-Hilfe", url: "https://support.google.com/websearch/answer/12412910?hl=de" },
    { title: "Wie Google Standortinformationen verwendet", publisher: "Google Datenschutzerklärung & Nutzungsbedingungen", url: "https://policies.google.com/technologies/location-data?hl=de" },
    { title: "Im Inkognitomodus surfen", publisher: "Google Chrome-Hilfe", url: "https://support.google.com/chrome/answer/95464?hl=de" },
    { title: "Umfassender Leitfaden zur Funktionsweise der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=de" },
    { title: "Lokale Suchanzeigen auf Google Maps schalten", publisher: "Google Ads-Hilfe", url: "https://support.google.com/google-ads/answer/7040605?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Google introduces sticky sponsored results label and hide ads control (Bericht, Oktober 2025)", publisher: "PPC Land", url: "https://ppc.land/google-introduces-sticky-sponsored-results-label-and-hide-ads-control/" },
    { title: "Google ändert Werbe-Label „Ad“ zu „Sponsored“ (Bericht, 17. Oktober 2022)", publisher: "OnlineMarketing.de", url: "https://onlinemarketing.de/sea/google-aendert-werbe-label-ad-sponsored" },
  ],
  related: [
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "google-maps-seo-ranking-faktoren", title: "Google-Maps-Ranking-Faktoren: belegt oder vermutet?" },
    { slug: "google-maps-seo-vs-organic-seo", title: "Google Maps SEO und organisches SEO im Vergleich" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
  ],
  cta: {
    title: "Was sehen Ihre Kunden in Google Maps?",
    text: "Wir prüfen Ihr Google-Profil und Ihre Sichtbarkeit in Maps unter festen Bedingungen und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die in Ihrem Fall am meisten bewirken dürften. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
