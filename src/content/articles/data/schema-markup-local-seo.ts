import type { V4Article } from "../types";

const article: V4Article = {
  slug: "schema-markup-local-seo",
  lang: "de",
  seoTitle: "Schema Markup für Local SEO: was 2026 noch wirkt",
  seoDescription:
    "Welche strukturierten Daten lokale Unternehmen 2026 brauchen, welche Google nicht mehr anzeigt und warum Sterne für das eigene Unternehmen nicht erscheinen.",
  h1: "Schema Markup für lokale Unternehmen: was Google 2026 nutzt und was Sie weglassen können",
  kicker: "Technik",
  lead:
    "Für Inhaber und Webverantwortliche lokaler Betriebe, die wissen wollen, welche strukturierten Daten sich auf ihrer Website lohnen. Sie bekommen einen Überblick über die Typen, die Google heute auswertet, die Felder, auf die es ankommt, und die Darstellungen, die es nicht mehr gibt.",
  answer:
    "Für die meisten lokalen Betriebe reichen strukturierte Daten vom Typ **LocalBusiness** mit dem genauesten Untertyp, ergänzt um Organization und, wenn Sie Veranstaltungen anbieten, Event. Sterne für das eigene Unternehmen zeigt Google nicht an, FAQ- und Anleitungs-Snippets gibt es nicht mehr. Wichtig ist, dass die Daten mit dem sichtbaren Inhalt übereinstimmen und mit dem Test für Rich-Suchergebnisse geprüft sind.",
  takeaways: [
    "Strukturierte Daten helfen Google, Inhalte zu verstehen. Eine besondere Darstellung ermöglichen sie, garantieren sie aber nicht.",
    "Bei LocalBusiness verlangt Google nur Name und Adresse. Empfohlen sind unter anderem Koordinaten, Öffnungszeiten, Telefon mit Vorwahl und URL.",
    "Bewertungen über Ihr eigenes Unternehmen führen auf Ihrer Website nicht zu Sternen in der Suche, auch nicht über ein eingebettetes Google-Widget.",
    "FAQ-Snippets zeigt Google seit dem 7. Mai 2026 nicht mehr an, Anleitungs-Snippets schon seit 2023 nicht mehr. Vorhandenes Markup schadet nicht.",
    "Google empfiehlt JSON-LD und kann es auch lesen, wenn es per JavaScript eingefügt wird.",
  ],
  publishedAt: "2026-01-16",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-schema-leistet",
      title: "Was strukturierte Daten leisten und was nicht",
      answer:
        "Strukturierte Daten beschreiben Inhalte einer Seite in einem festen Format, damit Google sie sicher zuordnen kann. Sie können besondere Darstellungen ermöglichen, eine Garantie dafür gibt es laut Google nicht.",
      blocks: [
        {
          t: "p",
          text: "Ein Mensch erkennt „Mo bis Fr 8 bis 18 Uhr“ sofort als Öffnungszeiten. Eine Maschine muss raten. Strukturierte Daten nehmen ihr das Raten ab: Sie stehen als kleiner Datenblock im Quelltext und sagen, was Name, Adresse, Telefonnummer und Öffnungszeiten sind. Das Vokabular dafür kommt von **schema.org**, daher der Name Schema Markup.",
        },
        {
          t: "p",
          text: "Google schreibt in seinen Richtlinien ausdrücklich, dass strukturierte Daten eine Funktion in der Suche ermöglichen, aber nicht garantieren. Selbst korrektes Markup kann ohne besondere Darstellung bleiben, abhängig von Suchverlauf, Standort und Gerät. Rechnen Sie also nicht mit Sternen oder Zusatzzeilen, nur weil der Code fehlerfrei ist.",
        },
        {
          t: "note",
          label: "Maßgeblich ist Google, nicht schema.org",
          text: "Schema.org kennt hunderte Typen und Felder. Welche davon Google für die Suche nutzt, steht in der Dokumentation von Google Search Central. Google weist selbst darauf hin, dass diese Dokumentation maßgeblich ist und nicht die von schema.org. Viele Felder, die Generatoren anbieten, haben für Google keine Wirkung.",
        },
        {
          t: "p",
          text: "Für die Platzierung im Kartenblock von Google Maps ist das Unternehmensprofil entscheidend, nicht der Code auf Ihrer Website. Google nennt für das lokale Ranking Relevanz, Entfernung und Bekanntheit. Strukturierte Daten sind eine Ergänzung, die Ihre Website eindeutig mit Ihrem Betrieb verbindet.",
        },
      ],
    },
    {
      id: "welche-typen",
      title: "Welche Typen sich für lokale Betriebe lohnen",
      answer:
        "Lohnend sind LocalBusiness, Organization und, bei Veranstaltungen, Event. Sterne für das eigene Unternehmen, FAQ und Anleitungen bringen in der Google-Suche keine Darstellung mehr.",
      blocks: [
        {
          t: "table",
          caption: "Strukturierte Daten für lokale Betriebe im Überblick (Stand Oktober 2026)",
          head: ["Typ", "Wofür Google ihn nutzt", "Empfehlung"],
          rows: [
            ["LocalBusiness mit Untertyp", "Geschäftsangaben wie Öffnungszeiten und Adresse, unter anderem für das Knowledge Panel", "Ja, auf der Seite mit Ihren Unternehmensangaben, je Standort einmal"],
            ["Organization", "Name, Logo, Kontakt und Unternehmenskennungen, etwa für Knowledge Panels", "Ja, meist auf der Startseite"],
            ["Event", "Veranstaltungen in der Google-Suche und in anderen Google-Produkten wie Maps", "Ja, wenn Sie öffentliche Veranstaltungen mit Datum und Ort anbieten"],
            ["Review und AggregateRating für das eigene Unternehmen", "Keine Sterne, wenn das Unternehmen die Bewertungen über sich selbst kontrolliert", "Weglassen"],
            ["FAQPage", "Keine Darstellung mehr seit dem 7. Mai 2026", "Nicht neu einbauen. Vorhandenes Markup schadet nicht"],
            ["HowTo", "Keine Darstellung mehr seit September 2023", "Nicht einbauen"],
            ["BreadcrumbList", "Navigationspfad in den Ergebnissen, laut Google nur noch am Computer", "Optional"],
          ],
        },
        {
          t: "p",
          text: "Für Typen wie Service oder OfferCatalog gibt es in Googles Übersicht der unterstützten Funktionen keinen eigenen Eintrag. Andere Suchmaschinen und Dienste können sie nutzen. Wenn Sie sie einsetzen, dann sparsam und nur für Leistungen, die auf der Seite auch beschrieben sind.",
        },
      ],
    },
    {
      id: "localbusiness",
      title: "LocalBusiness: die Felder, auf die es ankommt",
      answer:
        "Pflicht sind nur Name und Adresse. Ergänzen Sie den genauesten Untertyp, Koordinaten mit mindestens fünf Nachkommastellen, Öffnungszeiten, Telefon mit Landes- und Ortsvorwahl und die URL der Standortseite.",
      blocks: [
        {
          t: "table",
          caption: "Felder für LocalBusiness laut Google Search Central",
          head: ["Feld", "Status", "Worauf Sie achten"],
          rows: [
            ["@type", "Pflicht", "So genau wie möglich, etwa Restaurant, Dentist, HealthClub oder Plumber. Mehrere Typen als Liste, additionalType unterstützt Google nicht"],
            ["name", "Pflicht", "Der echte Name, wie im Unternehmensprofil und auf dem Schild"],
            ["address", "Pflicht", "Vollständige Postanschrift mit Straße, Ort, Postleitzahl und Land"],
            ["geo", "Empfohlen", "Breiten- und Längengrad mit mindestens fünf Nachkommastellen"],
            ["openingHoursSpecification", "Empfohlen", "Tage und Uhrzeiten; mit validFrom und validThrough lassen sich saisonale Schließungen angeben"],
            ["telephone", "Empfohlen", "Mit Landes- und Ortsvorwahl, etwa +49 89 …"],
            ["url", "Empfohlen", "Die Seite dieses Standorts"],
            ["priceRange", "Empfohlen", "Kurze Angabe unter 100 Zeichen, etwa „€€“ oder „20 bis 40 €“"],
            ["department", "Empfohlen", "Für Abteilungen mit eigenen Öffnungszeiten oder Telefonnummern"],
            ["menu, servesCuisine", "Empfohlen für Gastronomie", "Link zur Speisekarte, Art der Küche"],
          ],
        },
        {
          t: "p",
          text: "Google empfiehlt außerdem, die Felder für Organization zu ergänzen, weil LocalBusiness ein Untertyp davon ist, etwa Logo und Profile in sozialen Netzwerken. Die Daten können auf jeder Seite stehen. Sinnvoll ist die Seite, die Ihre Unternehmensangaben auch für Menschen zeigt, bei mehreren Standorten jeweils die Standortseite.",
        },
        {
          t: "p",
          text: "Eine Schritt-für-Schritt-Anleitung mit Codebeispielen finden Sie im Artikel [LocalBusiness Schema implementieren](/blog/localbusiness-schema-implementierung).",
        },
      ],
    },
    {
      id: "uebereinstimmung",
      title: "Daten müssen zum sichtbaren Inhalt passen",
      answer:
        "Google verlangt, dass strukturierte Daten den sichtbaren Inhalt der Seite wiedergeben. Was im Code steht, muss auch auf der Seite zu lesen sein, und es darf nicht irreführend sein.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Keine unsichtbaren Angaben.** Öffnungszeiten, Telefonnummer und Adresse im Markup müssen auch im Text der Seite stehen.",
            "**Nichts Irreführendes.** Google nennt gefälschte Rezensionen ausdrücklich als Beispiel für unzulässiges Markup.",
            "**Mobil und Desktop gleich.** Google indexiert die mobile Version. Fehlen die Daten dort, fehlen sie für Google.",
            "**Gleiche Angaben wie im Profil.** Name, Adresse, Telefon und Öffnungszeiten sollten im Markup, auf der Seite und im Unternehmensprofil identisch sein, damit keine widersprüchlichen Angaben entstehen.",
          ],
        },
        {
          t: "p",
          text: "Ändern sich Öffnungszeiten oder Telefonnummer, ändern Sie alle drei Stellen am selben Tag. Wie Sie Abweichungen systematisch finden, steht im Artikel [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "note",
          label: "Bei Verstößen",
          text: "Verstößt Markup gegen die Richtlinien, kann Google manuelle Maßnahmen gegen die Website ergreifen. Nach der Korrektur stellen Sie in der Search Console einen Antrag auf erneute Überprüfung.",
        },
      ],
    },
    {
      id: "bewertungen",
      title: "Warum Ihre eigenen Bewertungen keine Sterne bringen",
      answer:
        "Kontrolliert ein Unternehmen die Bewertungen über sich selbst, zeigt Google für dessen Seite keine Sterne an. Das gilt auch, wenn die Bewertungen über ein Widget von Google oder Facebook eingebunden sind.",
      blocks: [
        {
          t: "p",
          text: "Viele ältere Anleitungen empfehlen, die Durchschnittsnote mit AggregateRating auszuzeichnen, um gelbe Sterne in der Suche zu bekommen. Google hat das für lokale Unternehmen und Organisationen ausgeschlossen. In der Dokumentation zu LocalBusiness sind aggregateRating und review nur für Websites empfohlen, die Bewertungen zu **anderen** lokalen Unternehmen sammeln, also etwa Bewertungsportale.",
        },
        {
          t: "p",
          text: "Ihre Bewertungen bleiben trotzdem wertvoll. Zeigen Sie ausgewählte Stimmen auf der Website für Menschen, verlinken Sie auf Ihr Google-Profil und sammeln Sie dort laufend neue Rezensionen. Dort zählen sie laut Google zur Bekanntheit. Mehr dazu im Artikel [Review Schema implementieren](/blog/review-schema-implementierung) und in [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
        },
      ],
    },
    {
      id: "eingestellt",
      title: "FAQ und Anleitungen: eingestellte Darstellungen",
      answer:
        "Google zeigt FAQ-Snippets seit dem 7. Mai 2026 nicht mehr an und hat die Dokumentation dazu entfernt. Anleitungs-Snippets gibt es seit September 2023 nicht mehr.",
      blocks: [
        {
          t: "p",
          text: "Schon im August 2023 hatte Google FAQ-Snippets auf bekannte Behörden- und Gesundheitswebsites beschränkt. Im Mai 2026 folgte das Ende für alle. Wer heute noch „mehr Platz in den Suchergebnissen durch FAQ Schema“ verspricht, beschreibt einen Zustand, den es nicht mehr gibt.",
        },
        {
          t: "p",
          text: "Ein Fragen-und-Antworten-Bereich auf der Seite bleibt sinnvoll, weil er Besuchern hilft und Rückfragen am Telefon spart. Vorhandenes FAQPage-Markup müssen Sie laut Google nicht entfernen. Ungenutzte strukturierte Daten verursachen keine Probleme, haben aber auch keine sichtbare Wirkung.",
        },
      ],
    },
    {
      id: "testen",
      title: "Testen und überwachen",
      answer:
        "Prüfen Sie das Markup vor der Veröffentlichung mit dem Test für Rich-Suchergebnisse und danach mit dem URL-Prüftool und den Berichten der Search Console.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Format wählen", text: "Google empfiehlt JSON-LD, weil es am einfachsten zu pflegen ist. Microdata und RDFa sind ebenfalls zulässig, wenn sie gültig sind." },
            { title: "Test für Rich-Suchergebnisse", text: "Kritische Fehler beheben, nicht kritische Hinweise möglichst auch. Das Werkzeug zeigt, ob eine Seite für eine Darstellung in Frage kommt." },
            { title: "Schema Markup Validator", text: "Prüft das Markup gegen das gesamte schema.org-Vokabular, auch Typen, die Google nicht nutzt." },
            { title: "URL-Prüftool", text: "Zeigt, ob Google die veröffentlichte Seite crawlen kann und die Daten findet. Die Seite darf nicht durch robots.txt, noindex oder eine Anmeldung blockiert sein." },
            { title: "Berichte beobachten", text: "Die Statusberichte der Search Console zeigen Fehler, die erst nach Änderungen an Vorlagen oder am System auftreten." },
          ],
        },
        {
          t: "p",
          text: "Wird Ihr Markup per JavaScript eingefügt, etwa durch ein Plugin oder ein Website-System, kann Google es laut eigener Dokumentation trotzdem lesen. Prüfen Sie mit dem URL-Prüftool, dass es in der gerenderten Seite tatsächlich ankommt.",
        },
      ],
    },
    {
      id: "fehler",
      title: "Häufige Fehler",
      answer:
        "Die meisten Probleme entstehen durch zu allgemeine Typen, veraltete Angaben und Markup, das etwas anderes sagt als die Seite.",
      blocks: [
        {
          t: "table",
          caption: "Fehler und Korrektur",
          head: ["Fehler", "Korrektur"],
          rows: [
            ["Nur „LocalBusiness“ statt eines Untertyps", "Den genauesten passenden Untertyp wählen, bei mehreren als Liste"],
            ["AggregateRating mit eigenen Bewertungen", "Entfernen, Bewertungen nur für Menschen zeigen"],
            ["Öffnungszeiten im Markup veraltet", "Bei jeder Änderung Markup, Seite und Profil gemeinsam anpassen"],
            ["Koordinaten zu ungenau", "Mindestens fünf Nachkommastellen, Punkt aus dem Profil übernehmen"],
            ["Telefon ohne Landesvorwahl", "Internationales Format mit Landes- und Ortsvorwahl"],
            ["Ein Standort-Markup für alle Filialen", "Je Standort eine eigene Seite mit eigenem LocalBusiness-Block"],
            ["Markup nur auf der Desktop-Version", "Mobile und Desktop mit denselben strukturierten Daten ausliefern"],
          ],
        },
      ],
    },
    {
      id: "plan",
      title: "So gehen Sie vor",
      answer:
        "Bestandsaufnahme, Bereinigung, Ergänzung, Test. Für einen Betrieb mit einem Standort ist das meist in wenigen Stunden erledigt.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Bestand prüfen", text: "Startseite und Kontakt- oder Standortseite im Test für Rich-Suchergebnisse aufrufen und notieren, welche Typen schon vorhanden sind." },
            { title: "Bereinigen", text: "AggregateRating und Review für das eigene Unternehmen entfernen. HowTo-Markup kann weg, FAQPage darf bleiben." },
            { title: "LocalBusiness vervollständigen", text: "Untertyp, Name, Adresse, Koordinaten, Öffnungszeiten, Telefon und URL so eintragen, wie sie im Profil stehen." },
            { title: "Organization ergänzen", text: "Logo, Kontakt und Profile in sozialen Netzwerken auf der Startseite." },
            { title: "Event, falls zutreffend", text: "Öffentliche Veranstaltungen mit Datum, Ort und Ticketlink auszeichnen." },
            { title: "Testen und Search Console beobachten", text: "Nach der Veröffentlichung URL-Prüftool und Berichte prüfen." },
          ],
        },
        {
          t: "p",
          text: "Wenn Sie wissen wollen, ob Website und Profil zusammenpassen, prüfen wir beides im [kostenlosen Check](/de#check).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Verbessert Schema Markup mein Ranking?",
      a: "Google beschreibt strukturierte Daten als Hilfe, Inhalte zu verstehen, und als Voraussetzung für bestimmte Darstellungen. Eine bessere Position wird nicht versprochen. Für den Kartenblock in Maps ist das Unternehmensprofil entscheidend.",
    },
    {
      q: "Wie lange dauert es, bis Google mein Markup berücksichtigt?",
      a: "Google muss die Seite erst neu crawlen und indexieren. Das kann laut Google einige Tage dauern. Mit dem URL-Prüftool können Sie ein erneutes Crawlen anfordern. Ob eine besondere Darstellung erscheint, entscheidet Google je Suche.",
    },
    {
      q: "Wie zeichne ich mehrere Standorte aus?",
      a: "Jeder Standort bekommt eine eigene Seite mit eigenem LocalBusiness-Block, eigener Adresse, eigenen Öffnungszeiten und eigener Telefonnummer. Mehr im Artikel [Multi-Location SEO](/blog/multi-location-seo).",
    },
    {
      q: "Muss ich FAQ-Markup jetzt löschen?",
      a: "Nein. Google schreibt, dass ungenutzte strukturierte Daten keine Probleme verursachen. Sie können das Markup entfernen, müssen es aber nicht. Den sichtbaren Fragenbereich sollten Sie behalten, wenn er Besuchern hilft.",
    },
    {
      q: "Reicht ein Plugin für WordPress?",
      a: "Für viele Betriebe ja. Google weist selbst darauf hin, dass ein Plugin für das eigene Website-System der einfachere Weg sein kann. Prüfen Sie danach im Test für Rich-Suchergebnisse, was das Plugin tatsächlich ausgibt, und entfernen Sie Bewertungs-Markup für das eigene Unternehmen.",
    },
    {
      q: "Was kostet es, Profil und Website abstimmen zu lassen?",
      a: "Bei LocalDominate kostet der Profil Quick-Fix 79 € und die vollständige Profil-Optimierung 390 €. Was zum Umfang gehört, klären wir vorab im Gespräch. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Einführung in strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de" },
    { title: "Allgemeine Richtlinien für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Rezensions-Snippet: Richtlinien zu eigennützigen Rezensionen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=de" },
    { title: "Unterstützte Funktionen für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=de" },
    { title: "Strukturierte Daten für Veranstaltungen (Event)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/event?hl=de" },
    { title: "Änderungen an Rich-Suchergebnissen für Anleitungen und FAQs", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=de" },
    { title: "Latest documentation updates (FAQ-Snippets eingestellt, Navigationspfade nur am Computer)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Best Practices für die Mobile-First-Indexierung", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=de" },
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
  ],
  related: [
    { slug: "localbusiness-schema-implementierung", title: "LocalBusiness Schema implementieren" },
    { slug: "review-schema-implementierung", title: "Review Schema implementieren" },
    { slug: "technisches-local-seo-guide", title: "Technisches Local SEO" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz im Local SEO" },
  ],
  cta: {
    title: "Passen Website und Google-Profil zusammen?",
    text: "Wir prüfen, ob Name, Adresse, Öffnungszeiten und Markup auf Ihrer Website mit Ihrem Unternehmensprofil übereinstimmen, und schicken Ihnen innerhalb von zwei Werktagen bis zu drei konkrete Korrekturen. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
