import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-konkurrenzanalyse",
  lang: "de",
  seoTitle: "Google-Maps-Konkurrenzanalyse: Profile vergleichen",
  seoDescription:
    "Wer steht in Google Maps vor Ihnen und warum? Mit Vergleichsbogen: Wettbewerber finden, Profile, Rezensionen und Websites prüfen, Lücken in Maßnahmen umsetzen.",
  h1: "Google-Maps-Konkurrenzanalyse: Wettbewerber vergleichen und eigene Lücken finden",
  kicker: "Google Maps",
  lead:
    "Für Inhaber und Marketingverantwortliche lokaler Betriebe, die wissen wollen, warum andere in Google Maps vor ihnen stehen. Sie bekommen einen Ablauf in fünf Schritten und einen Vergleichsbogen, den Sie direkt übernehmen können.",
  answer:
    "Eine Konkurrenzanalyse in Google Maps vergleicht, was Sie bei Wettbewerbern sehen können: Hauptkategorie, Entfernung, Rezensionen, Profildaten, Website und lokale Erwähnungen. Die Gewichtung der Faktoren hält Google geheim. Deshalb liefert die Analyse keine Formel, sondern **Lücken**: Stellen, an denen Ihr Profil schwächer ist als das der Betriebe, die bei Ihren wichtigsten Suchen vor Ihnen stehen.",
  takeaways: [
    "Google nennt drei Faktoren für lokale Ergebnisse: Relevanz, Entfernung und Bekanntheit. Wie stark jeder zählt, veröffentlicht Google nicht.",
    "Ihre echten Wettbewerber sind die Betriebe, die bei Ihren Suchbegriffen an mehreren Punkten Ihres Einzugsgebiets vor Ihnen stehen, nicht die, die Sie aus dem Alltag kennen.",
    "Ein fester Vergleichsbogen mit denselben Merkmalen für alle Betriebe macht Unterschiede sichtbar und wiederholbar.",
    "Prozentgewichte für einzelne Faktoren sind Schätzungen. Vergleichen Sie Lücken, nicht Punktzahlen.",
    "Verstößt ein Wettbewerber gegen Googles Richtlinien, melden Sie es über Maps. Kopieren Sie den Verstoß nicht.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "was-die-analyse-leistet",
      title: "Was eine Konkurrenzanalyse in Maps leisten kann",
      answer:
        "Sie zeigt, worin sich die Betriebe vor Ihnen von Ihnen unterscheiden. Sie beweist nicht, welcher Unterschied den Ausschlag gibt, weil Google die Gewichtung nicht offenlegt.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt in seiner Hilfe, dass lokale Ergebnisse hauptsächlich auf **Relevanz, Entfernung und Bekanntheit** beruhen. Details zum Algorithmus hält Google geheim. Eine Konkurrenzanalyse arbeitet deshalb mit dem, was sichtbar ist: Kategorie, Lage, Rezensionen, Profilangaben, Website und Erwähnungen im Netz.",
        },
        {
          t: "table",
          caption: "Was Sie vergleichen können und was nicht",
          head: ["Sichtbar und vergleichbar", "Nicht sichtbar"],
          rows: [
            ["Hauptkategorie, Name, Adresse, Öffnungszeiten", "Wie Google die Faktoren gewichtet"],
            ["Anzahl, Durchschnitt und Alter der Rezensionen", "Leistungsdaten fremder Profile (Aufrufe, Anrufe, Klicks)"],
            ["Fotos, Leistungen, Produkte, Beiträge", "Interne Signale wie Klick- oder Routenverhalten"],
            ["Website, Leistungsseiten, strukturierte Daten", "Ob ein Wettbewerber gerade Anzeigen schaltet, außer Sie sehen sie"],
          ],
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Ältere Ratgeber arbeiten oft mit festen Gewichten, etwa „Bewertungen zählen 25 Prozent“. Solche Zahlen stammen nicht von Google. Wir verzichten deshalb auf ein Punktesystem und vergleichen Merkmal für Merkmal.",
        },
      ],
    },
    {
      id: "wettbewerber-finden",
      title: "Schritt 1: die richtigen Wettbewerber finden",
      answer:
        "Wettbewerber in Maps sind die Betriebe, die bei Ihren wichtigsten Suchbegriffen vor Ihnen erscheinen. Weil die Entfernung zählt, prüfen Sie das an mehreren Punkten Ihres Einzugsgebiets.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Suchbegriffe wählen",
              text: "Nehmen Sie drei bis fünf Begriffe, mit denen Kunden Sie finden. Ihr Unternehmensprofil zeigt in den Leistungsdaten unter „Suchanfragen“, mit welchen Begriffen Nutzer Ihr Profil gefunden haben. Der Wert wird monatlich aktualisiert.",
            },
            {
              title: "Messpunkte festlegen",
              text: "Wählen Sie fünf bis neun Punkte: Ihren Standort, Punkte in mittlerer Entfernung und am Rand Ihres Einzugsgebiets. Wie Sie dabei vorgehen, beschreibt der Artikel [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern).",
            },
            {
              title: "Suchen und notieren",
              text: "Suchen Sie an jedem Punkt jeden Begriff, ohne angemeldet zu sein. In den Entwicklertools von Chrome können Sie unter „Sensoren“ einen Standort einstellen. Notieren Sie die ersten fünf Betriebe ohne Anzeigen.",
            },
            {
              title: "Häufigkeit zählen",
              text: "Wer an vielen Punkten und bei mehreren Begriffen vor Ihnen steht, ist ein Hauptwettbewerber. Wählen Sie drei davon für den Vergleich.",
            },
          ],
        },
        {
          t: "p",
          text: "Achten Sie darauf, ob ein Betrieb wirklich dasselbe anbietet. Eine Klinik mit 20 Fachrichtungen ist für eine kleine Praxis kein sinnvoller Maßstab, auch wenn sie im Kartenblock vor ihr steht. Für eine breitere Analyse über Maps hinaus hilft der Artikel [Wettbewerbsanalyse im Local SEO](/blog/wettbewerbsanalyse-local-seo).",
        },
      ],
    },
    {
      id: "vergleichsbogen",
      title: "Schritt 2: der Vergleichsbogen",
      answer:
        "Übernehmen Sie die Tabelle in eine Tabellenkalkulation und füllen Sie für sich und drei Wettbewerber jede Zeile aus. Wichtig ist, dass Sie alle Betriebe am selben Tag und auf dieselbe Weise prüfen.",
      blocks: [
        {
          t: "table",
          caption: "Vergleichsbogen Google Maps (Spalten für Sie und drei Wettbewerber ergänzen)",
          head: ["Merkmal", "Wo Sie es sehen", "Worauf Sie achten"],
          rows: [
            ["Hauptkategorie", "Unter dem Namen im Profil in Maps", "Ist sie genauer als Ihre, etwa „Kieferorthopäde“ statt „Zahnarzt“?"],
            ["Name", "Profilkopf", "Enthält er Orte oder Leistungen, die nicht zum echten Namen gehören?"],
            ["Entfernung zum Suchenden", "Ihre Messpunkte", "Steht der Betrieb nur nahe an seinem Standort vorne oder überall?"],
            ["Anzahl der Rezensionen", "Profil, Reiter „Rezensionen“", "Absolute Zahl im Vergleich zu Ihrer"],
            ["Neue Rezensionen der letzten drei Monate", "Rezensionen nach „Neueste“ sortieren und zählen", "Kommen regelmäßig neue dazu oder liegt die letzte lange zurück?"],
            ["Antworten auf Rezensionen", "Unter den Rezensionen", "Wird geantwortet, wie schnell und wie sachlich?"],
            ["Öffnungszeiten und Feiertage", "Profil", "Sind Sonderzeiten gepflegt?"],
            ["Fotos", "Reiter „Fotos“", "Eigene, aktuelle Bilder von außen, innen und von der Arbeit?"],
            ["Leistungen, Produkte, Speisekarte", "Profil, je nach Kategorie", "Welche Leistungen nennt der Wettbewerber, die bei Ihnen fehlen?"],
            ["Beiträge", "Profil", "Wie aktuell sind sie? Nur als Hinweis auf Pflege werten"],
            ["Website-Link", "Profil", "Führt er auf eine passende Leistungs- oder Standortseite oder nur auf die Startseite?"],
            ["Leistungsseite zum Suchbegriff", "Website des Wettbewerbers", "Gibt es eine eigene Seite mit Ort, Ablauf und Fragen?"],
            ["Strukturierte Daten", "Test für Rich-Suchergebnisse mit der URL", "Ist LocalBusiness oder eine Unterart ausgezeichnet?"],
            ["Ladezeit mobil", "PageSpeed Insights mit der URL", "Liegen die Werte deutlich unter Ihren?"],
            ["Lokale Erwähnungen", "Google-Suche nach Name und Ort", "Lokalzeitung, Verband, Kammer, Partner, Vereine"],
          ],
        },
        {
          t: "note",
          label: "Praktisch",
          text: "Machen Sie von jedem Profil einen Screenshot mit Datum. Bei der nächsten Analyse sehen Sie dann, was sich beim Wettbewerber verändert hat.",
        },
      ],
    },
    {
      id: "rezensionen-lesen",
      title: "Schritt 3: Rezensionen der Wettbewerber lesen",
      answer:
        "Zahlen allein sagen wenig. Lesen Sie die letzten 20 bis 30 Rezensionen jedes Wettbewerbers und notieren Sie, was Kunden loben und was sie bemängeln.",
      blocks: [
        {
          t: "p",
          text: "Laut Google kann ein Unternehmen mit mehr Rezensionen und positiven Bewertungen besser in lokalen Ergebnissen abschneiden. Für die Analyse ist der Inhalt mindestens so wichtig wie die Menge. Er zeigt, welche Leistungen Kunden beim Wettbewerber verbinden und wo Sie sich abheben können.",
        },
        {
          t: "table",
          caption: "Was Sie aus fremden Rezensionen ablesen",
          head: ["Was Sie finden", "Was es nahelegt"],
          rows: [
            ["Viele Kunden nennen dieselbe Leistung", "Der Wettbewerber ist dafür bekannt. Prüfen Sie, ob Sie die Leistung anbieten und klar zeigen"],
            ["Wiederkehrende Kritik, etwa Wartezeit oder Erreichbarkeit", "Eine Stärke, die Sie in Profil und Website sichtbar machen können, wenn sie bei Ihnen stimmt"],
            ["Antworten fehlen oder sind unfreundlich", "Ein einfacher Bereich, in dem Sie besser sein können"],
            ["Viele Rezensionen in kurzer Zeit, danach Stille", "Eine einmalige Aktion. Für Sie zählt ein laufender Ablauf"],
          ],
        },
        {
          t: "note",
          label: "Grenze",
          text: "Schreiben Sie keine Rezensionen über Wettbewerber und lassen Sie niemanden welche schreiben. Googles Richtlinien verbieten Inhalte, die auf einem Interessenkonflikt beruhen, und Inhalte über Mitbewerber, die deren Ruf schaden sollen.",
        },
      ],
    },
    {
      id: "auswerten",
      title: "Schritt 4: Lücken in Maßnahmen übersetzen",
      answer:
        "Markieren Sie im Bogen jede Zeile, in der alle drei Wettbewerber besser sind als Sie. Das sind Ihre Lücken. Beginnen Sie mit denen, die Sie selbst schnell schließen können.",
      blocks: [
        {
          t: "table",
          caption: "Typische Lücken und der passende nächste Schritt",
          head: ["Lücke", "Nächster Schritt", "Mehr dazu"],
          rows: [
            ["Wettbewerber hat genauere Hauptkategorie", "Kategorie prüfen. Sie muss beschreiben, was Ihr Betrieb ist", "[Kategorien-Leitfaden](/blog/google-business-kategorien-guide)"],
            ["Leistungen fehlen in Ihrem Profil", "Jede Leistung, die Kunden gezielt suchen, einzeln eintragen", "[Produkte und Leistungen](/blog/google-business-produkte-services)"],
            ["Deutlich weniger neue Rezensionen", "Eine feste Stelle im Ablauf, an der Sie alle Kunden fragen", "[Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)"],
            ["Keine eigene Leistungsseite", "Seite mit Ort, Ablauf, Preisspanne und häufigen Fragen anlegen", "[Lokale Landingpages](/blog/lokale-landing-pages)"],
            ["Kaum lokale Erwähnungen", "Kammer, Verband, Partner, Lokalpresse mit echten Anlässen", "[Lokales Linkbuilding](/blog/local-link-building)"],
            ["Wettbewerber steht nur nahe seinem Standort vorne", "Keine Lücke bei Ihnen. Konzentrieren Sie sich auf Ihr eigenes Umfeld", "[Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern)"],
          ],
        },
        {
          t: "p",
          text: "Ändern Sie nicht alles auf einmal. Wenn Sie Maßnahmen nacheinander umsetzen und das Datum notieren, können Sie später besser einschätzen, was gewirkt hat. Wie Sie Veränderungen sauber dokumentieren, zeigt der Artikel [Google-Maps-Fallstudien selbst durchführen](/blog/google-maps-ranking-case-studies).",
        },
      ],
    },
    {
      id: "regelverstoesse",
      title: "Schritt 5: Regelverstöße erkennen und melden",
      answer:
        "Manche Betriebe stehen vorne, weil sie gegen Googles Richtlinien verstoßen. Sie können solche Profile über Google Maps melden oder Änderungen vorschlagen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Zusätze im Namen:** Googles Richtlinien erlauben im Namen keine unnötigen Informationen wie Slogans oder Telefonnummern. Bei Nichtbeachtung kann das Profil gesperrt werden.",
            "**Virtuelle Büros:** Für eine angemietete Postanschrift ohne echten Standort darf kein Profil erstellt werden.",
            "**Mehrere Profile:** Pro Unternehmen soll nur ein Profil bestehen.",
            "**Auffällige Rezensionen:** Bewertungen, die durch Anreize entstanden sind, sind laut Google nicht zulässig.",
          ],
        },
        {
          t: "p",
          text: "In Google Maps können Sie für ein Profil eine Bearbeitung vorschlagen oder ein Unternehmen melden, das gegen die Richtlinien verstößt. Bleiben Sie sachlich und melden Sie nur, was Sie belegen können. Woran Sie Spam erkennen, beschreibt der Artikel [Google-Maps-Spam erkennen](/blog/google-maps-spam-erkennen).",
        },
        {
          t: "note",
          label: "Nicht nachahmen",
          text: "Ein Profil mit Ortsnamen im Firmennamen kann eine Zeit lang gut stehen. Das ist kein Beleg dafür, dass es erlaubt ist. Ein Nachahmen gefährdet Ihr eigenes Profil.",
        },
      ],
    },
    {
      id: "rhythmus",
      title: "Wie oft Sie die Analyse wiederholen",
      answer:
        "Eine vollständige Analyse lohnt sich etwa zweimal im Jahr. Dazwischen reicht ein kurzer Blick einmal im Monat auf Messpunkte und neue Rezensionen der drei Hauptwettbewerber.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Monatlich", text: "Dieselben Suchbegriffe an denselben Messpunkten prüfen. Neue Rezensionen der Wettbewerber zählen." },
            { title: "Bei plötzlichen Veränderungen", text: "Wenn Sie an vielen Punkten absinken, zuerst Ihr eigenes Profil prüfen, dann die Wettbewerber, dann das Google Search Status Dashboard auf angekündigte Updates." },
            { title: "Zweimal im Jahr", text: "Den ganzen Vergleichsbogen neu ausfüllen und mit den Screenshots der letzten Runde vergleichen." },
          ],
        },
        {
          t: "p",
          text: "Wenn Sie lieber eine zweite Meinung möchten, sehen wir uns Ihr Profil im [kostenlosen Check](/de#check) an und nennen Ihnen die Lücken, die wir für die wichtigsten halten.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Wie viele Wettbewerber sollte ich vergleichen?",
      a: "Drei sind ein guter Start. Wählen Sie die Betriebe, die bei Ihren wichtigsten Suchbegriffen an den meisten Messpunkten vor Ihnen stehen. Mehr Betriebe kosten viel Zeit und bringen selten neue Erkenntnisse.",
    },
    {
      q: "Sehe ich die weiteren Kategorien eines Wettbewerbers?",
      a: "In Maps steht in der Regel nur die Hauptkategorie unter dem Namen. Einige Browser-Erweiterungen lesen weitere Kategorien aus. Behandeln Sie diese Angaben als Hinweis, nicht als gesicherte Information.",
    },
    {
      q: "Brauche ich ein kostenpflichtiges Werkzeug?",
      a: "Für den Vergleichsbogen nicht. Google Maps, der Test für Rich-Suchergebnisse und PageSpeed Insights sind kostenlos. Werkzeuge für Raster-Messungen sparen Zeit, wenn Sie viele Punkte und Begriffe regelmäßig prüfen wollen.",
    },
    {
      q: "Darf ich die Texte und Fotos eines Wettbewerbers übernehmen?",
      a: "Nein. Lassen Sie sich von der Struktur anregen, etwa welche Leistungen genannt werden, und schreiben Sie eigene Texte mit eigenen Fotos. Kopierte Inhalte helfen Ihnen nicht und können rechtliche Probleme verursachen.",
    },
    {
      q: "Was, wenn alle Wettbewerber in allem besser sind?",
      a: "Dann beginnen Sie mit dem, was Sie selbst steuern: Kategorie, vollständige Daten, Leistungen und ein fester Ablauf für Rezensionen. Bekanntheit wächst langsamer. Messen Sie monatlich, damit Sie Fortschritte sehen.",
    },
  ],
  sources: [
    { title: "Ranking in lokalen Suchergebnissen auf Google verbessern", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Verbotene und eingeschränkt zulässige Inhalte (Rezensionen)", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Daten- oder Inhaltsfehler auf Google Maps melden", publisher: "Google Maps-Hilfe", url: "https://support.google.com/maps/answer/3094088?hl=de" },
    { title: "Test für Rich-Suchergebnisse", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7445569?hl=de" },
    { title: "Über PageSpeed Insights", publisher: "Google for Developers", url: "https://developers.google.com/speed/docs/insights/v5/about?hl=de" },
    { title: "Sensoren: Gerätesensoren emulieren", publisher: "Chrome for Developers", url: "https://developer.chrome.com/docs/devtools/sensors?hl=de" },
    { title: "Google Search Status Dashboard: Ranking", publisher: "Google", url: "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history?hl=de" },
  ],
  related: [
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "wettbewerbsanalyse-local-seo", title: "Wettbewerbsanalyse im Local SEO" },
    { slug: "google-maps-audit-template", title: "Google-Maps-Audit: Vorlage zum Ausfüllen" },
    { slug: "google-maps-spam-erkennen", title: "Google-Maps-Spam erkennen" },
  ],
  cta: {
    title: "Warum stehen andere vor Ihnen?",
    text: "Wir vergleichen Ihr Google-Profil mit den Betrieben, die bei Ihren wichtigsten Suchen vor Ihnen stehen, und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Lücken, die wir zuerst schließen würden. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
