import type { V4Article } from "../types";

const article: V4Article = {
  slug: "review-schema-implementierung",
  lang: "de",
  seoTitle: "Review Schema: Wann Google Sterne zeigt und wann nicht",
  seoDescription:
    "Review- und AggregateRating-Markup ehrlich erklärt: warum eigene Bewertungen lokaler Betriebe keine Sterne bringen, wo Markup erlaubt ist und wie Sie es testen.",
  h1: "Review Schema richtig einsetzen: Wann Google Bewertungssterne zeigt",
  kicker: "Technik",
  lead:
    "Für Inhaber und Website-Verantwortliche lokaler Betriebe, die Sterne in den Google-Treffern ihrer Website sehen möchten. Sie erfahren, warum das für Ihren eigenen Betrieb seit 2019 nicht mehr funktioniert, wo Bewertungs-Markup weiterhin sinnvoll ist und wie Sie es sauber umsetzen.",
  answer:
    "Seit September 2019 zeigt Google keine Bewertungssterne mehr für Seiten mit LocalBusiness- oder Organization-Markup, wenn der Betrieb die Bewertungen über sich selbst kontrolliert. Das gilt auch für eingebettete Google-Bewertungen. Review- und AggregateRating-Markup lohnt sich nur für unterstützte Typen wie Produkte, Rezepte, Bücher, Kurse oder Software. Für lokale Betriebe zählen echte Rezensionen im Google-Unternehmensprofil.",
  takeaways: [
    "Bewertungen über den eigenen Betrieb auf der eigenen Website gelten für Google als „self-serving“. Seiten mit LocalBusiness- oder Organization-Markup bekommen dafür keine Sterne.",
    "Das gilt auch, wenn Sie Google- oder Facebook-Bewertungen per Widget einbinden. Bewertungen von anderen Websites dürfen ohnehin nicht im Markup zusammengefasst werden.",
    "Für Produkte, Rezepte, Bücher, Kurse, Veranstaltungen, Filme und Software können Sterne weiterhin erscheinen, wenn die Bewertungen echt und auf der Seite sichtbar sind.",
    "Gefälschte oder nicht offengelegte bezahlte Bewertungen im Markup können zu einer manuellen Maßnahme führen. Die Seite verliert dann ihre Rich-Suchergebnisse.",
    "Wer in Deutschland Kundenbewertungen auf der Website zeigt, muss nach § 5b Abs. 3 UWG angeben, ob und wie er deren Echtheit prüft.",
  ],
  publishedAt: "2026-03-05",
  updatedAt: "2026-10-10",
  readingTime: 11,
  sections: [
    {
      id: "review-und-aggregaterating",
      title: "Review und AggregateRating: die zwei Bausteine",
      answer:
        "Review beschreibt eine einzelne Bewertung mit Autor und Wertung. AggregateRating fasst viele Bewertungen zu einem Durchschnitt und einer Anzahl zusammen. Beide sind Typen aus schema.org, die Google in Form von Rezensions-Snippets auswerten kann.",
      blocks: [
        {
          t: "p",
          text: "Strukturierte Daten sind ein maschinenlesbarer Zusatz im Quelltext. Meist werden sie als JSON-LD in den Seitenkopf geschrieben. Für Bewertungen gibt es zwei Typen, die sich ergänzen.",
        },
        {
          t: "table",
          caption: "Die beiden Bewertungstypen im Vergleich",
          head: ["Typ", "Beschreibt", "Pflichtangaben laut Google"],
          rows: [
            ["Review", "Eine einzelne Bewertung, etwa eines Kunden oder einer Redaktion", "author (Person oder Organisation mit Namen unter 100 Zeichen), reviewRating mit ratingValue, Name des bewerteten Objekts"],
            ["AggregateRating", "Den Durchschnitt aus vielen Bewertungen", "ratingValue, ratingCount oder reviewCount, Name des bewerteten Objekts"],
          ],
        },
        {
          t: "p",
          text: "Ohne Angabe nimmt Google eine Skala von 1 bis 5 an. Wer eine andere Skala nutzt, etwa 1 bis 10, gibt bestRating und worstRating ausdrücklich an. Zeigen Sie mehrere Einzelbewertungen, verlangt Google zusätzlich eine Gesamtbewertung.",
        },
        {
          t: "note",
          label: "Begriff",
          text: "Ein **Rezensions-Snippet** (Review Snippet) ist der kurze Auszug mit Sternen und Wertung, den Google unter einem Suchtreffer oder in einem Knowledge Panel zeigen kann. Ob es erscheint, entscheidet Google. Korrektes Markup macht die Anzeige nur möglich.",
        },
      ],
    },
    {
      id: "self-serving",
      title: "Warum eigene Bewertungen keine Sterne bringen",
      answer:
        "Google nennt Bewertungen „self-serving“, wenn Bewertungen über Unternehmen A auf der Website von Unternehmen A stehen. Seit dem 16. September 2019 zeigt Google dafür bei LocalBusiness und Organization samt Untertypen keine Sterne mehr, egal ob das Markup selbst geschrieben oder über ein Widget eingebunden ist.",
      blocks: [
        {
          t: "p",
          text: "Vor 2019 reichte es oft, auf der Startseite ein AggregateRating für den eigenen Betrieb einzubauen, und schon erschienen Sterne neben dem Treffer. Google hat das im Blogbeitrag „Making Review Rich Results more helpful“ beendet. Begründung: Bewertungen, die ein Betrieb über sich selbst auswählt und auszeichnet, helfen Suchenden wenig.",
        },
        {
          t: "p",
          text: "Die heutige Dokumentation zu Rezensions-Snippets sagt es deutlich: Kontrolliert das bewertete Unternehmen die Bewertungen über sich selbst, sind seine Seiten mit LocalBusiness- oder einem anderen Organization-Markup **nicht für Sterne berechtigt**. Als Beispiel nennt Google ausdrücklich eingebettete Widgets für Google-Bewertungen oder Facebook-Bewertungen.",
        },
        {
          t: "table",
          caption: "Typische Fälle bei lokalen Betrieben",
          head: ["Situation", "Sterne in der Google-Suche?"],
          rows: [
            ["Hotel zeichnet auf der eigenen Website Gästebewertungen als AggregateRating im Typ Hotel aus", "Nein, Hotel ist ein Untertyp von LocalBusiness"],
            ["Praxis bindet ein Widget mit ihren Google-Rezensionen ein", "Nein, Google sieht das Einbetten als Kontrolle über die Bewertungen"],
            ["Handwerksbetrieb schreibt Kundenstimmen von einem Bewertungsportal ins Markup", "Nein, zusätzlich verboten: Bewertungen anderer Websites dürfen nicht zusammengefasst werden"],
            ["Ein unabhängiges Portal sammelt Bewertungen über viele Restaurants", "Möglich, das Portal bewertet andere Betriebe"],
          ],
        },
        {
          t: "p",
          text: "Laut Googles FAQ zum Blogbeitrag müssen Sie vorhandenes Markup dieser Art nicht entfernen. Sie erhalten dafür allein auch keine manuelle Maßnahme. Es bringt nur keine Sterne mehr. Das Google-Unternehmensprofil ist von der Regel nicht betroffen, sie betrifft nur die organische Suche.",
        },
      ],
    },
    {
      id: "wann-sterne",
      title: "Wann Bewertungs-Markup erlaubt ist und angezeigt werden kann",
      answer:
        "Google kann Rezensions-Snippets für Bücher, Kurslisten, Veranstaltungen, Filme, Produkte, Rezepte und Software zeigen, außerdem für lokale Betriebe und Organisationen, wenn eine Website über andere Betriebe berichtet. Voraussetzung sind echte Bewertungen, die auf der Seite sichtbar sind.",
      blocks: [
        {
          t: "table",
          caption: "Wo Rezensions-Snippets laut Google möglich sind (Stand Oktober 2026)",
          head: ["Typ", "Beispiel aus der Praxis", "Hinweis"],
          rows: [
            ["Product", "Ein Onlineshop zeigt Kundenbewertungen zu einem eigenen Produkt", "Auch im eigenen Shop möglich, die Regel gegen self-serving betrifft nur Betriebe und Organisationen"],
            ["Recipe", "Ein Restaurant veröffentlicht ein Rezept, Besucher bewerten es", "Bewertet wird das Rezept, nicht das Restaurant"],
            ["Book", "Ein Verlag oder Autor mit Leserbewertungen zu einem Buch", ""],
            ["Course", "Eine Schule zeigt Bewertungen zu einem bestimmten Kurs", "Bewertet wird der Kurs, nicht die Schule"],
            ["Event", "Bewertungen zu einer wiederkehrenden Veranstaltung", ""],
            ["Movie", "Filmkritiken", ""],
            ["SoftwareApplication", "Bewertungen zu einer App oder Software", ""],
            ["LocalBusiness, Organization", "Ein Portal, das Bewertungen über andere Betriebe sammelt", "Nur für Bewertungen über fremde Betriebe"],
          ],
        },
        {
          t: "p",
          text: "Daneben akzeptiert Google Bewertungen für weitere schema.org-Typen wie Game, Episode, MusicRecording oder MediaObject. Für lokale Betriebe sind sie selten relevant.",
        },
        {
          t: "p",
          text: "Auch eine **redaktionelle Bewertung** ist ein Review: Ein Testmagazin bewertet ein Produkt, ein Kritiker einen Film. Dann steht als author die Person und als publisher die Redaktion. Für lokale Betriebe gilt eine Einschränkung: Wertungen müssen direkt von Nutzern stammen, nicht von Redakteuren zusammengestellt sein.",
        },
      ],
    },
    {
      id: "google-bewertungen-auf-der-website",
      title: "Google-Bewertungen auf der eigenen Website zeigen",
      answer:
        "Sie dürfen Ihre Google-Bewertungen auf der Website zeigen, sie bringen dort aber keine Sterne in der Suche. In Deutschland müssen Sie bei veröffentlichten Kundenbewertungen angeben, ob und wie Sie ihre Echtheit sicherstellen. Das verlangt § 5b Abs. 3 UWG.",
      blocks: [
        {
          t: "p",
          text: "Für Besucher sind echte Kundenstimmen auf der Website trotzdem nützlich. Ein Gast, der zwischen zwei Pensionen schwankt, liest gern, was andere erlebt haben. Zeigen Sie die Bewertungen also, wenn sie Ihnen helfen, aber erwarten Sie davon keine Sterne in der Suche.",
        },
        {
          t: "ul",
          items: [
            "**Offenlegen, woher die Bewertungen kommen.** Ein Satz wie „Diese Bewertungen stammen aus unserem Google-Unternehmensprofil. Wir prüfen nicht selbst, ob die Verfasser bei uns Kunden waren.“ erfüllt den Zweck von § 5b Abs. 3 UWG.",
            "**Nicht nur die besten auswählen, ohne es zu sagen.** Wer gefiltert zeigt, sollte das kennzeichnen, etwa „Auswahl aktueller Bewertungen“, und auf das vollständige Profil verlinken.",
            "**Keine Bewertungen umschreiben oder kürzen**, sodass der Sinn sich ändert.",
            "**Kein AggregateRating aus Google-Bewertungen ins Markup schreiben.** Google verbietet, Bewertungen anderer Websites im Markup zusammenzufassen, und Sterne gibt es dafür ohnehin nicht.",
          ],
        },
        {
          t: "p",
          text: "Die rechtlichen Regeln in Deutschland, darunter die Verbote aus dem Anhang des UWG zu gefälschten Bewertungen, erklärt der Artikel [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen) ausführlicher. Für Österreich und die Schweiz gelten eigene Gesetze. Dieser Abschnitt ist kein Rechtsrat.",
        },
      ],
    },
    {
      id: "was-stattdessen",
      title: "Was lokale Betriebe stattdessen tun sollten",
      answer:
        "Für einen lokalen Betrieb erscheinen Sterne dort, wo Suchende ohnehin entscheiden: im Google-Unternehmensprofil in Maps und im Kartenblock. Investieren Sie die Zeit in echte Rezensionen dort, in Antworten darauf und in sauberes LocalBusiness-Markup ohne Bewertungen.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Rezensionen im Profil aufbauen",
              text: "Bitten Sie jeden Kunden nach dem Termin um eine Bewertung, mit direktem Link. Ohne Gegenleistung und ohne vorher auszusortieren. Den Ablauf beschreibt [Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen).",
            },
            {
              title: "Auf Bewertungen antworten",
              text: "Antworten Sie sachlich, auch auf Kritik. Wie Sie mit unfairen oder falschen Bewertungen umgehen, steht in [Negative Google-Bewertungen](/blog/negative-google-bewertungen).",
            },
            {
              title: "LocalBusiness-Markup ohne Sterne pflegen",
              text: "Name, Adresse, Telefon, Öffnungszeiten und Website im passenden Typ (Dentist, Hotel, Restaurant, Plumber). Das hilft Google beim Verstehen. Die Anleitung steht in [Schema Markup für Local SEO](/blog/schema-markup-local-seo).",
            },
            {
              title: "Profil und Website abgleichen",
              text: "Dieselben Firmendaten überall. Wie Sie Abweichungen finden, zeigt [NAP-Konsistenz](/blog/nap-konsistenz-local-seo).",
            },
            {
              title: "Auf das Profil verweisen",
              text: "Verlinken Sie von der Website auf Ihr Unternehmensprofil, etwa mit „Alle Bewertungen bei Google lesen“. So sehen Interessenten die vollständige, nicht von Ihnen kontrollierte Liste.",
            },
          ],
        },
        {
          t: "p",
          text: "Google schreibt in seiner Hilfe zum lokalen Ranking, dass mehr Rezensionen und positive Bewertungen das lokale Ranking verbessern können. Mehr dazu in [Google-Maps-Ranking verbessern](/blog/google-maps-ranking-verbessern) und [Google Unternehmensprofil optimieren](/blog/google-my-business-optimieren).",
        },
      ],
    },
    {
      id: "korrekt-umsetzen",
      title: "Review und AggregateRating korrekt umsetzen, wo es erlaubt ist",
      answer:
        "Betten Sie die Bewertung in den Typ des bewerteten Objekts ein, etwa in Product oder Recipe. Zeichnen Sie nur Bewertungen aus, die auf der Seite sichtbar sind, nehmen Sie alle sichtbaren auf und halten Sie Durchschnitt und Anzahl mit der Anzeige gleich.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Berechtigung prüfen",
              text: "Ist das bewertete Objekt ein unterstützter Typ (Produkt, Rezept, Kurs, Buch, Veranstaltung, Software)? Bewerten die Kunden dieses Objekt und nicht Ihren Betrieb als Ganzes? Nur dann weitermachen.",
            },
            {
              title: "Bewertungen sichtbar machen",
              text: "Die Bewertungen und der Durchschnitt müssen auf derselben Seite für Besucher lesbar sein. Google verlangt außerdem, dass das Markup alle sichtbaren Bewertungen umfasst.",
            },
            {
              title: "Markup einbetten",
              text: "AggregateRating und einzelne Reviews gehören als Eigenschaft in das Objekt, das bewertet wird. Dann entfällt itemReviewed, Google übernimmt den Namen des übergeordneten Objekts.",
            },
            {
              title: "Werte automatisch erzeugen",
              text: "Lassen Sie Durchschnitt und Anzahl aus derselben Datenquelle berechnen, die auch die Anzeige speist. Von Hand gepflegte Zahlen weichen schnell ab.",
            },
            {
              title: "Testen und veröffentlichen",
              text: "Code im Test für Rich-Suchergebnisse prüfen, einige Seiten live stellen, mit der URL-Prüfung in der Search Console kontrollieren, dann ausrollen.",
            },
          ],
        },
        {
          t: "note",
          label: "Bewertungen mit Gegenleistung",
          text: "Google schließt gefälschte Bewertungen und nicht offengelegte Bewertungen gegen Vorteile wie Rabatte, Gutscheine oder Gratisprodukte aus, sowohl auf der Seite als auch im Markup. Für Bewertungen im Google-Unternehmensprofil sind Anreize ganz verboten.",
        },
      ],
    },
    {
      id: "beispiel",
      title: "Beispiel: Produktbewertungen im eigenen Onlineshop",
      answer:
        "Ein Hofladen verkauft online ein Glas Honig, Kunden haben es auf der Produktseite bewertet. Hier ist Markup erlaubt, weil das Produkt bewertet wird. Die Tabelle zeigt die JSON-LD-Angaben Zeile für Zeile, mit Beispielwerten.",
      blocks: [
        {
          t: "table",
          caption: "JSON-LD für ein Produkt mit Bewertungen (Beispielwerte, keine echten Daten)",
          head: ["Eigenschaft", "Beispielwert", "Erklärung"],
          rows: [
            ["@context", "https://schema.org", "Immer gleich"],
            ["@type", "Product", "Das bewertete Objekt"],
            ["name", "Blütenhonig 500 g", "Name wie auf der Seite"],
            ["aggregateRating › @type", "AggregateRating", "Gesamtbewertung, eingebettet im Produkt"],
            ["aggregateRating › ratingValue", "4,6 (im Code mit Punkt: 4.6)", "Durchschnitt, genau wie angezeigt"],
            ["aggregateRating › reviewCount", "27", "Anzahl der Bewertungen, genau wie angezeigt"],
            ["review › @type", "Review", "Je eine Einzelbewertung, alle sichtbaren aufnehmen"],
            ["review › author › @type und name", "Person, „Anna K.“", "Name, wie er auf der Seite steht"],
            ["review › reviewRating › ratingValue", "5", "Wertung dieser Einzelbewertung"],
            ["review › datePublished", "2026-09-14", "Datum im ISO-Format"],
            ["review › reviewBody", "Text der Bewertung", "Optional, aber hilfreich"],
          ],
        },
        {
          t: "p",
          text: "bestRating und worstRating fehlen hier absichtlich: Bei einer Skala von 1 bis 5 nimmt Google diese Werte an. Der Code steht als Skript vom Typ application/ld+json im Kopf oder Körper der Produktseite. Viele Shopsysteme erzeugen ihn über ein Bewertungs-Plugin, das prüfen Sie dann nur noch.",
        },
        {
          t: "p",
          text: "Für ein Restaurant mit eigenem Rezeptblog funktioniert dasselbe mit Recipe statt Product. Branchenbezogene Hinweise finden Sie in [Local SEO für Restaurants](/blog/local-seo-fuer-restaurants). Für Onlineshops haben wir eine [englische Seite zu Online Stores](/industries/online-stores).",
        },
      ],
    },
    {
      id: "testen",
      title: "Testen mit dem Test für Rich-Suchergebnisse",
      answer:
        "Prüfen Sie den Code oder die URL im Test für Rich-Suchergebnisse von Google und beheben Sie kritische Fehler. Nach dem Livegang zeigt die URL-Prüfung in der Search Console, wie Google die Seite sieht. Ein fehlerfreier Test garantiert aber keine Sterne.",
      blocks: [
        {
          t: "ol",
          items: [
            "Test für Rich-Suchergebnisse öffnen (search.google.com/test/rich-results) und URL oder Code eingeben.",
            "Kritische Fehler beheben. Hinweise auf fehlende empfohlene Angaben sind kein Ausschlussgrund, verbessern aber die Daten.",
            "Bei einer URL: Die Seite muss ohne Anmeldung aus dem Internet erreichbar sein.",
            "Nach dem Livegang die URL-Prüfung in der Search Console nutzen und später die Berichte zu Rich-Suchergebnissen beobachten.",
          ],
        },
        {
          t: "note",
          label: "Grenzen des Tests",
          text: "Der Test prüft Syntax und Pflichtangaben. Ob eine Seite die inhaltlichen Richtlinien erfüllt, etwa die Regel gegen self-serving Bewertungen, beurteilt er nicht vollständig. Google schreibt selbst, dass auch korrekt ausgezeichnete Seiten keine Garantie auf Rich-Suchergebnisse haben.",
        },
      ],
    },
    {
      id: "risiken",
      title: "Risiko: manuelle Maßnahme bei Spam im Markup",
      answer:
        "Verstößt Markup gegen Googles Richtlinien, kann Google eine manuelle Maßnahme verhängen. Die betroffenen Seiten verlieren dann ihre Berechtigung für Rich-Suchergebnisse. Laut Google ändert eine solche Maßnahme für strukturierte Daten das Ranking in der Websuche nicht.",
      blocks: [
        {
          t: "table",
          caption: "Häufige Verstöße und ihre Folgen",
          head: ["Verstoß", "Was Google dazu sagt"],
          rows: [
            ["Bewertungen im Markup, die auf der Seite nicht zu sehen sind", "Nicht sichtbare Inhalte dürfen nicht ausgezeichnet werden"],
            ["Erfundene Bewertungen oder Wertungen nicht von echten Nutzern", "Kann zu einer manuellen Maßnahme führen"],
            ["Nur ausgewählte Bewertungen ins Markup, andere sichtbare weglassen", "Alle sichtbaren Bewertungen sollen enthalten sein"],
            ["Bewertungen von anderen Websites zusammenfassen", "Ausdrücklich nicht erlaubt"],
            ["Ein Rating für eine ganze Kategorie oder Liste statt für ein Objekt", "Bewertungen müssen ein bestimmtes Objekt betreffen"],
            ["Self-serving Markup für den eigenen Betrieb", "Keine Sterne, aber allein dafür keine manuelle Maßnahme"],
          ],
        },
        {
          t: "p",
          text: "Ob gegen Ihre Website eine Maßnahme vorliegt, sehen Sie im Bericht „Manuelle Maßnahmen“ der Search Console. Nach der Behebung können Sie dort einen Antrag auf erneute Überprüfung stellen. Eine vollständige Prüfliste für Ihre Website finden Sie in der [Local-SEO-Audit-Checkliste](/blog/local-seo-audit-checkliste).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Bekomme ich Sterne in Google, wenn ich Review Schema für meinen Betrieb einbaue?",
      a: "Nein. Seit September 2019 zeigt Google für Seiten mit LocalBusiness- oder Organization-Markup keine Sterne, wenn der Betrieb die Bewertungen über sich selbst kontrolliert. Das gilt für selbst geschriebenes Markup und für Widgets.",
    },
    {
      q: "Darf ich Google-Bewertungen per Widget auf meiner Website zeigen?",
      a: "Ja. Sterne in der Suche bringen sie dort aber nicht, weil Google das Einbetten als Kontrolle über die Bewertungen wertet. In Deutschland sollten Sie bei den Bewertungen angeben, ob und wie Sie deren Echtheit prüfen.",
    },
    {
      q: "Muss ich altes AggregateRating-Markup von meiner Startseite entfernen?",
      a: "Laut Google nicht zwingend, allein dafür gibt es keine manuelle Maßnahme. Es bringt nur keine Sterne mehr. Enthält es aber Werte, die nicht auf der Seite stehen oder aus anderen Websites stammen, sollten Sie es korrigieren oder entfernen.",
    },
    {
      q: "Für welche Inhalte lohnt sich Review-Markup?",
      a: "Für Produkte im eigenen Shop, Rezepte, Bücher, Kurse, Veranstaltungen, Filme und Software, jeweils mit echten Bewertungen auf der Seite. Und für Portale, die Bewertungen über andere Betriebe sammeln.",
    },
    {
      q: "Beeinflussen Sterne das Ranking?",
      a: "Sterne sind eine Darstellungsform im Suchergebnis. Google nennt Bewertungsmarkup nicht als Rankingfaktor. Eine manuelle Maßnahme wegen strukturierter Daten kostet laut Google die Rich-Suchergebnisse, nicht die Position in der Websuche.",
    },
    {
      q: "Zeigt der Test für Rich-Suchergebnisse, ob ich Sterne bekomme?",
      a: "Nein. Er zeigt, ob der Code gültig ist und die Pflichtangaben enthält. Ob Google Sterne anzeigt, entscheidet der Algorithmus. Google garantiert die Anzeige auch bei korrektem Markup nicht.",
    },
  ],
  sources: [
    { title: "Making Review Rich Results more helpful (16. September 2019)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful" },
    { title: "Strukturierte Daten für Rezensions-Snippets (Review, AggregateRating)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet" },
    { title: "Allgemeine Richtlinien für strukturierte Daten", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies" },
    { title: "Test für Rich-Suchergebnisse", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7445569" },
    { title: "Bericht zu manuellen Maßnahmen", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9044175" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Richtlinien für Rezensionen: verbotene und eingeschränkte Inhalte", publisher: "Google Maps-Hilfe", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=de" },
    { title: "Gesetz gegen den unlauteren Wettbewerb (UWG), § 5b Wesentliche Informationen", publisher: "Bundesministerium der Justiz, gesetze-im-internet.de", url: "https://www.gesetze-im-internet.de/uwg_2004/__5b.html" },
  ],
  related: [
    { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
    { slug: "google-bewertungen-bekommen", title: "Mehr Google-Bewertungen bekommen" },
    { slug: "negative-google-bewertungen", title: "Negative Google-Bewertungen" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
  ],
  cta: {
    title: "Stimmen Ihre strukturierten Daten?",
    text: "Wir prüfen Ihr Markup, Ihre Bewertungsanzeige auf der Website und Ihr Google-Profil und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
