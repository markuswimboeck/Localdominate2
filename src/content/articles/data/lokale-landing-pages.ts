import type { V4Article } from "../types";

const article: V4Article = {
  slug: "lokale-landing-pages",
  lang: "de",
  seoTitle: "Lokale Landing Pages: Standortseiten ohne Brückenseiten",
  seoDescription:
    "Wann sich eine Seite je Standort oder Ort lohnt, was Google als Brückenseite wertet, was auf eine gute Standortseite gehört und wie Profil und Schema passen.",
  h1: "Lokale Landing Pages erstellen: Standortseiten, die Kunden wirklich helfen",
  kicker: "Website",
  lead:
    "Für Betriebe in Deutschland, Österreich und der Schweiz mit einem oder mehreren Standorten oder einem festen Einzugsgebiet. Sie erfahren, wann eine eigene Seite für einen Ort sinnvoll ist, wo Google die Grenze zur Brückenseite zieht, welche Bausteine eine gute Standortseite braucht und wie Sie sie mit Unternehmensprofil und strukturierten Daten verbinden.",
  answer:
    "Eine lokale Landing Page lohnt sich, wenn Sie am Ort einen echten Standort haben oder dort regelmäßig arbeiten und Eigenes über den Ort sagen können. Seiten, die sich nur im Ortsnamen unterscheiden, sind nach unserer Einschätzung riskant, weil Google Städteseiten, die Nutzer zur selben Seite leiten, als Brückenseiten nennt.",
  takeaways: [
    "Google nennt als Missbrauch von Brückenseiten unter anderem Seiten für bestimmte Regionen oder Städte, die Nutzer zur selben Seite leiten, und im Wesentlichen ähnliche Seiten, „die eher Suchergebnissen ähneln als einer klar definierten, durchsuchbaren Hierarchie“.",
    "Eine eigene Seite braucht einen echten Grund: einen Standort mit Adresse oder ein Gebiet, in dem Sie nachweisbar arbeiten und über das Sie Eigenes sagen können.",
    "Der Website-Link im Unternehmensprofil darf laut Google auf eine Seite zeigen, die Ihren konkreten Standort präsentiert. Bei mehreren Filialen ist das die jeweilige Standortseite.",
    "Google empfiehlt, jeden Standort als eigenes LocalBusiness zu definieren. Google hält eine Seite mit Informationen zum Unternehmen für sinnvoll, das Markup muss zum sichtbaren Inhalt passen.",
    "Messen Sie jede Standortseite einzeln in der Search Console und über einen markierten Link aus dem Profil. Seiten ohne eigenen Inhalt legen Sie besser zusammen.",
  ],
  publishedAt: "2026-02-10",
  updatedAt: "2026-10-13",
  readingTime: 10,
  sections: [
    {
      id: "wann",
      title: "Wann sich eine eigene Standortseite lohnt",
      answer:
        "Eine eigene Seite lohnt sich bei einem echten Standort mit Adresse und bei einem Gebiet, in dem Sie regelmäßig arbeiten und über das Sie etwas sagen können, das auf der allgemeinen Leistungsseite fehlt. Fehlt dieser eigene Inhalt, gehört der Ort als Satz auf die Leistungsseite.",
      blocks: [
        {
          t: "table",
          caption: "Eigene Seite oder nicht? Typische Fälle (unsere Einschätzung)",
          head: ["Ausgangslage", "Empfehlung", "Warum"],
          rows: [
            ["Zweite Filiale mit eigener Adresse, eigenem Team und eigenen Öffnungszeiten", "Eigene Standortseite", "Die Seite beschreibt einen echten Ort und dient als Website im Profil dieser Filiale"],
            ["Servicebetrieb, der in einem Nachbarort regelmäßig arbeitet und dort Referenzen hat", "Eigene Seite möglich, wenn genug Eigenes vorhanden ist", "Anfahrt, typische Aufträge und Projekte aus dem Ort machen die Seite eigenständig"],
            ["Zwanzig Umlandgemeinden ohne eigene Inhalte", "Keine eigenen Seiten, Gebiet auf der Leistungsseite nennen", "Die Seiten würden sich nur im Ortsnamen unterscheiden"],
            ["Eine einzige Adresse, Kunden kommen aus der ganzen Stadt", "Keine Ortsseiten nötig", "Startseite, Kontaktseite und Leistungsseiten decken den Bedarf"],
          ],
        },
        {
          t: "note",
          label: "Unsere Faustregel",
          text: "Wenn Sie auf einer Seite den Ortsnamen austauschen können, ohne dass ein Satz falsch wird, ist die Seite nicht eigenständig. Erfährt ein Kunde aus diesem Ort dort nichts, was auf der allgemeinen Seite fehlt, braucht er die Seite nicht.",
        },
        {
          t: "p",
          text: "Wie Betriebe mit einem einzigen Standort ihre Website insgesamt aufbauen, steht in [Local Content Marketing](/blog/local-content-marketing#leistungs-und-ortsseiten). Für Filialbetriebe ist [Mehrere Standorte bei Google verwalten](/blog/gbp-mehrere-standorte#standortseiten) der passende Einstieg.",
        },
      ],
    },
    {
      id: "brueckenseiten",
      title: "Was Google als Brückenseite wertet",
      answer:
        "Google beschreibt Brückenseiten als Seiten, die für bestimmte, ähnliche Suchanfragen erstellt werden und Nutzer auf Zwischenseiten führen, die weniger nützlich sind als das eigentliche Ziel. Ortsseiten aus einer Vorlage, in der nur der Ortsname wechselt, fallen nach unserer Einschätzung genau darunter.",
      blocks: [
        {
          t: "p",
          text: "Googles Spam-Richtlinien nennen als Beispiele für den Missbrauch von Brückenseiten unter anderem mehrere Domainnamen oder Seiten, die auf bestimmte Regionen oder Städte ausgerichtet sind und Nutzer zu einer einzigen Seite leiten. Außerdem nennt Google im Wesentlichen ähnliche Seiten, „die eher Suchergebnissen ähneln als einer klar definierten, durchsuchbaren Hierarchie“.",
        },
        {
          t: "ul",
          items: [
            "**Ortslisten:** Unter überflüssigen Keywords nennt Google ausdrücklich Textblöcke, die Städte und Regionen aufzählen, für die eine Seite ranken soll.",
            "**Massenhaft erzeugte Seiten:** Als missbräuchliche Nutzung skalierter Inhalte nennt Google viele Seiten, die vor allem zur Manipulation des Rankings erstellt werden, etwa mit generativer KI und ohne Mehrwert für Nutzer.",
            "**Folgen:** Laut Google können Websites, die gegen die Richtlinien verstoßen, schlechter ranken oder gar nicht in den Ergebnissen erscheinen. Google erkennt Verstöße automatisch und, wenn nötig, durch manuelle Prüfung.",
          ],
        },
        {
          t: "p",
          text: "Googles Leitfaden für hilfreiche Inhalte fragt unter anderem, ob Inhalte eigene Informationen bieten und ob Sie viele Inhalte zu vielen Themen erstellen in der Hoffnung, dass einige davon in der Suche gut abschneiden. Für Ortsseiten ist das ein brauchbarer Test.",
        },
      ],
    },
    {
      id: "aufbau",
      title: "Was auf eine gute Standortseite gehört",
      answer:
        "Eine gute Standortseite beantwortet die Fragen, die ein Kunde vor dem Besuch oder Anruf hat: wo, wann, wer, wie hinkommen und was genau dieser Standort anbietet. Alles, was dort steht, sollte zu Ihrem Unternehmensprofil passen.",
      blocks: [
        {
          t: "table",
          caption: "Bausteine einer Standortseite (unsere Empfehlung)",
          head: ["Baustein", "Inhalt", "Hinweis"],
          rows: [
            ["Überschrift", "Leistung und Ort in einer natürlichen Zeile", "Keine Aufzählung von Orten"],
            ["Name, Adresse, Telefon", "Genau wie im Unternehmensprofil des Standorts", "Telefonnummer auf dem Handy antippbar"],
            ["Öffnungszeiten", "Regelzeiten und Sonderzeiten", "Bei Änderungen zuerst Profil und Seite gleichzeitig pflegen"],
            ["Team vor Ort", "Ansprechpartner mit Funktion, auf Wunsch mit Foto", "Nur mit Einverständnis der Mitarbeiter"],
            ["Anfahrt", "Öffentliche Verkehrsmittel, Parken, Eingang, Barrierefreiheit", "Text plus eingebettete Karte"],
            ["Leistungen vor Ort", "Was es nur hier gibt oder hier anders läuft", "Auf die allgemeinen Leistungsseiten verlinken"],
            ["Eigene Fotos", "Außenansicht, Räume, Team, Arbeiten aus dem Ort", "Keine Bilder aus Bilddatenbanken"],
            ["Kundenstimmen", "Echte Rückmeldungen mit Einverständnis", "Kein Sterne-Markup für Bewertungen über sich selbst"],
          ],
        },
        {
          t: "p",
          text: "Zu den Kundenstimmen: Google zeigt keine Bewertungssterne für Seiten mit LocalBusiness-Markup, wenn das bewertete Unternehmen die Bewertungen über sich selbst kontrolliert. Das gilt auch für eingebettete Widgets von Drittanbietern. Zitate dürfen auf der Seite stehen, ein Sterne-Snippet bringen sie nicht. Mehr dazu in [Review Schema implementieren](/blog/review-schema-implementierung).",
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Ein eigenes Formular je Standortseite macht später sichtbar, welche Seite Anfragen bringt. Das ist keine Google-Vorgabe, aber für die Auswertung sehr hilfreich.",
        },
      ],
    },
    {
      id: "einzugsgebiet",
      title: "Seiten für Einzugsgebiete ohne Ladenlokal",
      answer:
        "Betriebe, die beim Kunden arbeiten, zeigen ihr Einzugsgebiet zuerst auf der Leistungsseite und im Profil. Eine eigene Ortsseite lohnt sich nur, wenn Sie dort nachweisbar viel arbeiten und mit Referenzen, typischen Aufträgen und Anfahrtszeiten etwas Eigenes zeigen können.",
      blocks: [
        {
          t: "p",
          text: "Im Unternehmensprofil geben Betriebe ohne Kundenverkehr ihr Gebiet als Städte, Postleitzahlen oder andere Regionen an. Google erlaubt höchstens 20 Einzugsgebiete und empfiehlt, dass die Grenzen nicht mehr als etwa zwei Autostunden vom Standort entfernt sind. Empfangen Sie an der Geschäftsadresse keine Kunden, entfernen Sie die Adresse aus dem Profil.",
        },
        {
          t: "steps",
          items: [
            { title: "Gebiet auf der Leistungsseite nennen", text: "Ein Satz oder eine kurze Liste der Orte, in denen Sie arbeiten, so wie im Profil. Keine langen Ortsblöcke im Fußbereich." },
            { title: "Eigenes sammeln", text: "Referenzprojekte aus dem Ort mit Einverständnis der Kunden, typische Gebäude oder Aufgaben, Anfahrtszeit, Fragen, die Kunden dort häufig stellen." },
            { title: "Erst dann eine Seite bauen", text: "Wenn genug Eigenes für eine Seite zusammenkommt, die einem Kunden aus diesem Ort mehr sagt als die Leistungsseite." },
          ],
        },
        {
          t: "p",
          text: "Beispiele für Gewerke stehen in [Local SEO für Handwerker](/blog/local-seo-handwerker#leistungsseiten), Beispiele für Großstädte mit vielen Bezirken in [Local SEO in Berlin](/blog/local-seo-berlin#bezirksseiten).",
        },
      ],
    },
    {
      id: "struktur",
      title: "URL-Struktur und interne Links",
      answer:
        "Google empfiehlt lesbare Wörter statt langer IDs, Bindestriche zwischen Wörtern und Wörter in der Sprache Ihrer Kunden. Jede Seite, die Ihnen wichtig ist, sollte von mindestens einer anderen Seite Ihrer Website verlinkt sein.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Adresse:** Ein einheitliches Muster wie /standorte/graz oder /badsanierung-rosenheim. Welches Muster Sie wählen, ist nach unserer Einschätzung zweitrangig. Wichtig ist, dass es lesbar ist und nicht ständig wechselt.",
            "**Übersichtsseite:** Eine Seite „Standorte“ verlinkt alle Standortseiten, jede Standortseite verlinkt zurück. Das ergibt nach unserer Einschätzung die klar gegliederte Struktur, die Google von Brückenseiten abgrenzt.",
            "**Leistungsseiten:** Verlinken Sie von der Leistungsseite auf die Standorte, an denen es diese Leistung gibt, und umgekehrt.",
            "**Linktexte:** Google rät zu beschreibenden, knappen Linktexten. „Unsere Praxis in Wels“ sagt mehr als „hier klicken“.",
            "**Technik:** Google kann Links in der Regel nur folgen, wenn sie als HTML-Element a mit href-Attribut gesetzt sind.",
          ],
        },
        {
          t: "p",
          text: "Wie Sitemap, Indexierung und Ladezeit dazu passen, beschreibt [Technisches Local SEO](/blog/technisches-local-seo-guide#standortseiten).",
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "LocalBusiness-Markup je Standortseite",
      answer:
        "Google empfiehlt, jeden Standort als eigenes LocalBusiness mit dem passendsten Untertyp zu definieren. Pflicht sind Name und Adresse. Die Eigenschaft url soll auf die Seite des konkreten Standorts zeigen, und das Markup muss den sichtbaren Inhalt wiedergeben.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Pflichtangaben:** name und address. Empfohlen sind unter anderem telephone, openingHoursSpecification, geo mit mindestens fünf Nachkommastellen und url.",
            "**Ein Block je Standort:** Jeder Standort bekommt seinen eigenen Block. Abteilungen mit eigenen Zeiten oder Nummern lassen sich mit department auszeichnen.",
            "**Sichtbar und wahr:** Google verlangt, dass strukturierte Daten den Inhalt der Seite wahrheitsgemäß abbilden. Inhalte, die Besucher nicht sehen, dürfen nicht ausgezeichnet werden.",
            "**Keine Garantie:** Laut Google ermöglicht Markup eine Darstellung, garantiert sie aber nicht.",
          ],
        },
        {
          t: "p",
          text: "Ein vollständiges Beispiel mit allen Feldern und dem Test im Rich-Results-Test steht in [LocalBusiness Schema implementieren](/blog/localbusiness-schema-implementierung#beispiel).",
        },
      ],
    },
    {
      id: "unternehmensprofil",
      title: "Standortseite und Unternehmensprofil verbinden",
      answer:
        "Laut Google dürfen Sie im Profil eine Website angeben, auf der Ihr konkreter Standort präsentiert wird. Bei mehreren Filialen verweist deshalb jedes Profil auf seine eigene Standortseite. Weiterleitungs-URLs, etwa auf soziale Netzwerke, sind im Website-Feld nicht erlaubt.",
      blocks: [
        {
          t: "p",
          text: "Die Richtlinien für das Unternehmensprofil sagen dazu: „Oder fügen Sie eine Website hinzu, auf der Ihr konkreter Unternehmensstandort präsentiert wird.“ Name, Adresse, Telefonnummer und Öffnungszeiten auf der Seite sollten mit dem Profil übereinstimmen. Hilfe beim Abgleich bietet [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
        },
        {
          t: "steps",
          items: [
            { title: "Link setzen", text: "Im Profil jedes Standorts die Adresse seiner Standortseite als Website eintragen." },
            { title: "Link markieren", text: "Parameter anhängen, zum Beispiel ?utm_source=google&utm_medium=organic&utm_campaign=profil-graz. Laut Google Analytics sollten utm_source, utm_medium und utm_campaign immer gesetzt sein; Google empfiehlt Kleinbuchstaben." },
            { title: "Zurückverlinken", text: "Auf der Standortseite einen Link zur Bewertungsseite dieses Standorts anbieten, damit Rezensionen beim richtigen Profil landen (unsere Empfehlung)." },
          ],
        },
        {
          t: "note",
          label: "Name im Profil",
          text: "Der Ortsname gehört auf die Seite, nicht in den Profilnamen. Google verbietet unnötige Zusätze im Namen, auch Standortangaben: Aus „Sportpalast in Berlin-Mitte“ wird laut Google „Sportpalast Berlin“. Verwenden Sie den Namen, den Sie auch auf Schild, Website und Briefpapier führen.",
        },
      ],
    },
    {
      id: "messung",
      title: "Erfolg messen und aufräumen",
      answer:
        "Werten Sie jede Standortseite einzeln aus: Klicks und Impressionen in der Search Console, Besuche über den markierten Profillink und Anfragen über das Formular der Seite. Seiten, die nach einigen Monaten weder gefunden werden noch Anfragen bringen, legen Sie nach unserer Einschätzung zusammen oder bauen sie aus.",
      blocks: [
        {
          t: "table",
          caption: "Kennzahlen je Standortseite",
          head: ["Kennzahl", "Wo", "Was sie zeigt"],
          rows: [
            ["Klicks, Impressionen, Position je Seite", "Search Console, Leistungsbericht, Tab „Seiten“", "Ob die Seite in der Suche erscheint und angeklickt wird"],
            ["Impressionen in generativen KI-Funktionen", "Search Console, Bericht seit 31. August 2026 für alle Websites", "Ob die Seite in Übersicht mit KI oder KI-Modus verlinkt wurde (keine Klicks)"],
            ["Websiteklicks, Anrufe, Wegbeschreibungen", "Leistungsbericht im Unternehmensprofil des Standorts", "Was Nutzer im Profil getan haben"],
            ["Besuche über den Profillink", "Web-Analyse, Kampagne aus dem UTM-Link", "Wie viele über das Profil auf die Seite kamen"],
          ],
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Prüfen Sie Standortseiten einmal im Quartal. Zusammenlegen ist kein Scheitern: Eine starke Seite für die Region hilft Kunden mehr als fünf schwache Ortsseiten. Kennzahlen für den Monatsbericht nennt [Local SEO Reporting](/blog/local-seo-reporting-template).",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Version dieses Artikels behauptete, Google erkenne Vorlagentexte zuverlässig und werte sie als Duplikate, dünne Ortsseiten schadeten der ganzen Domain, und nannte feste Mindestwerte wie drei ortsspezifische Belege oder zwei bis fünf Projekte je Seite. Dafür haben wir keine Google-Quelle gefunden. Wir haben diese Aussagen entfernt oder als unsere Einschätzung gekennzeichnet und Googles tatsächliche Regeln ergänzt.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wann braucht ein Betrieb eine eigene lokale Landing Page?",
      a: "Wenn es am Ort einen echten Standort gibt oder ein Gebiet, in dem Sie regelmäßig arbeiten, und wenn Sie über diesen Ort etwas sagen können, das auf der allgemeinen Leistungsseite fehlt. Sonst nennen Sie den Ort auf der Leistungsseite.",
    },
    {
      q: "Sind Seiten für jede Stadt im Umland erlaubt?",
      a: "Seiten, die sich nur im Ortsnamen unterscheiden, sind nach unserer Einschätzung riskant. Googles Spam-Richtlinien nennen als Missbrauch von Brückenseiten Seiten für einzelne Regionen oder Städte, die Nutzer zur selben Seite leiten, und im Wesentlichen ähnliche Seiten, die eher Suchergebnissen ähneln als einer klar definierten, durchsuchbaren Hierarchie.",
    },
    {
      q: "Wohin soll der Website-Link im Unternehmensprofil zeigen?",
      a: "Laut Google auf eine Website, die Ihren konkreten Standort präsentiert. Bei mehreren Filialen ist das die jeweilige Standortseite, bei einem einzigen Standort nach unserer Erfahrung meist die Startseite. Weiterleitungs-URLs, etwa auf soziale Netzwerke, sind nicht erlaubt.",
    },
    {
      q: "Brauche ich auf jeder Standortseite strukturierte Daten?",
      a: "Google empfiehlt, jeden Standort als eigenes LocalBusiness zu definieren, mit Name und Adresse als Pflichtangaben und der URL der Standortseite. Das Markup muss zum sichtbaren Inhalt passen. Eine Anzeige in den Suchergebnissen garantiert Google nicht.",
    },
    {
      q: "Darf ich Google-Bewertungen auf der Standortseite zeigen?",
      a: "Kundenstimmen dürfen Sie mit Einverständnis zeigen. Sterne in den Suchergebnissen bringen sie nicht: Google schließt Seiten mit LocalBusiness-Markup von Bewertungssternen aus, wenn das Unternehmen die Bewertungen über sich selbst kontrolliert, auch über eingebettete Widgets.",
    },
  ],
  sources: [
    { title: "Spamrichtlinien für die Google Websuche (Missbrauch von Brückenseiten, überflüssige Keywords, skalierte Inhalte)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "Hilfreiche, zuverlässige Inhalte erstellen, bei denen die Nutzer im Vordergrund stehen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Einzugsgebiete für Unternehmen ohne festen Standort und Hybridunternehmen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9157481?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business" },
    { title: "Allgemeine Richtlinien für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies" },
    { title: "Strukturierte Daten für Rezensions-Snippets", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet" },
    { title: "Best Practices für die URL-Struktur", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/url-structure" },
    { title: "Best Practices für Links", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable" },
    { title: "Leistungsbericht (Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Kampagnendaten mithilfe benutzerdefinierter URLs erfassen", publisher: "Google Analytics-Hilfe", url: "https://support.google.com/analytics/answer/10917952?hl=de" },
  ],
  related: [
    { slug: "gbp-mehrere-standorte", title: "Mehrere Standorte bei Google verwalten" },
    { slug: "localbusiness-schema-implementierung", title: "LocalBusiness Schema implementieren" },
    { slug: "local-content-marketing", title: "Local Content Marketing" },
    { slug: "technisches-local-seo-guide", title: "Technisches Local SEO" },
  ],
  cta: {
    title: "Helfen Ihre Standortseiten wirklich?",
    text: "Wir prüfen Ihre Standort- und Leistungsseiten, die Verknüpfung mit Ihren Unternehmensprofilen und das LocalBusiness-Markup. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
