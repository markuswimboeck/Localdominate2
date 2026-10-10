import type { V4Article } from "../types";

const article: V4Article = {
  slug: "mobile-local-seo",
  lang: "de",
  seoTitle: "Mobile Local SEO: die Website am Handy prüfen",
  seoDescription:
    "Wie lokale Betriebe ihre Website für Smartphone-Nutzer prüfen: mobile Indexierung, Anruf- und Routenlink, Ladezeit, Pop-ups und Formulare nach Googles Vorgaben.",
  h1: "Mobile Local SEO: der Weg vom Suchtreffer zum Anruf auf dem Smartphone",
  kicker: "Technik",
  lead:
    "Für Inhaber lokaler Betriebe und ihre Webverantwortlichen, die sicher sein wollen, dass Kunden auf dem Handy schnell anrufen, die Route finden oder anfragen können. Sie bekommen eine Prüfliste, die Sie in einer Stunde am eigenen Smartphone durchgehen können, und die Vorgaben, die Google dazu tatsächlich macht.",
  answer:
    "Google indexiert und bewertet Websites anhand ihrer mobilen Version. Für lokale Betriebe heißt das: Auf dem Handy müssen alle Inhalte, Adresse, Öffnungszeiten und strukturierte Daten vorhanden sein, Anruf und Route mit einem Tippen funktionieren und die Seite schnell und stabil laden. Prüfen Sie das am eigenen Gerät und in der Search Console, nicht mit dem eingestellten Test auf Optimierung für Mobilgeräte.",
  takeaways: [
    "Google verwendet für Indexierung und Ranking die mobile Version Ihrer Seiten. Was dort fehlt, fehlt für Google.",
    "Google empfiehlt responsives Webdesign, also dieselbe Seite für alle Geräte mit angepasster Darstellung.",
    "Für die Core Web Vitals nennt Google als gute Werte: LCP bis 2,5 Sekunden, INP unter 200 Millisekunden, CLS unter 0,1.",
    "Telefonnummer als Anruflink und ein Routenlink zu Google Maps sind einfach umzusetzen und für lokale Kunden die wichtigsten Aktionen.",
    "Den Test auf Optimierung für Mobilgeräte und den Bericht zur mobilen Nutzerfreundlichkeit hat Google Ende 2023 eingestellt.",
  ],
  publishedAt: "2026-01-26",
  updatedAt: "2026-10-10",
  readingTime: 10,
  sections: [
    {
      id: "eigene-daten",
      title: "Wie viele Ihrer Besucher mobil kommen",
      answer:
        "Pauschale Prozentzahlen zur mobilen Suche helfen Ihnen nicht weiter. Wie groß der Anteil bei Ihnen ist, zeigt die Search Console mit der Aufteilung nach Geräten.",
      blocks: [
        {
          t: "p",
          text: "Viele Artikel beginnen mit Zahlen wie „80 Prozent aller lokalen Suchen sind mobil“. Woher diese Werte stammen und ob sie für Ihre Branche gelten, bleibt meist offen. Messen Sie lieber selbst:",
        },
        {
          t: "steps",
          items: [
            { title: "Search Console öffnen", text: "Im Leistungsbericht für die Websuche den Tab „Geräte“ wählen. Sie sehen Klicks und Impressionen getrennt nach Mobilgerät, Computer und Tablet." },
            { title: "Wichtige Seiten getrennt ansehen", text: "Filtern Sie auf Kontaktseite, Standortseiten und Ihre wichtigsten Leistungsseiten. Dort ist der mobile Anteil oft anders als im Durchschnitt." },
            { title: "Profilaktionen dazunehmen", text: "Im Leistungsbericht Ihres Unternehmensprofils stehen Anrufe, Routenanfragen und Website-Klicks. Sie zeigen, wie oft Kunden direkt aus der Suche heraus handeln." },
          ],
        },
        {
          t: "p",
          text: "Unabhängig vom Anteil gilt: Google beurteilt Ihre Website anhand der mobilen Version. Selbst wenn Ihre Kunden überwiegend am Computer suchen, muss die mobile Fassung vollständig sein.",
        },
      ],
    },
    {
      id: "mobile-first",
      title: "Mobile-First-Indexierung: was Google erwartet",
      answer:
        "Google crawlt Ihre Seiten mit einem Smartphone-Agenten und nutzt diese Version für Indexierung und Ranking. Inhalte, Metadaten, strukturierte Daten und robots-Angaben müssen mobil vollständig sein.",
      blocks: [
        {
          t: "p",
          text: "Google empfiehlt **responsives Webdesign**: Alle Geräte bekommen denselben HTML-Code, die Darstellung passt sich der Bildschirmgröße an. Das ist laut Google am einfachsten umzusetzen und zu pflegen. Separate mobile Seiten unter eigener Adresse sind möglich, verlangen aber deutlich mehr Sorgfalt.",
        },
        {
          t: "table",
          caption: "Prüfpunkte aus Googles Best Practices für die Mobile-First-Indexierung",
          head: ["Prüfpunkt", "Warum er wichtig ist"],
          rows: [
            ["Gleiche Inhalte mobil wie am Computer", "Was mobil fehlt, kennt Google nicht. Das betrifft auch Texte in eingeklappten Bereichen, die erst nach Klick nachgeladen werden"],
            ["Kein Nachladen der Hauptinhalte erst nach Tippen oder Wischen", "Google lädt keine Inhalte, die eine Nutzerinteraktion voraussetzen"],
            ["Gleicher Title und gleiche Meta-Beschreibung", "Google verlangt bei getrennten Versionen identische Angaben; fehlt die Beschreibung mobil, fehlt sie für Google"],
            ["Gleiche strukturierte Daten", "Fehlt das LocalBusiness-Markup mobil, fehlt es für Google ganz"],
            ["Gleiche robots-Angaben", "Ein noindex nur auf der mobilen Version kann die Seite aus dem Index nehmen"],
          ],
        },
        {
          t: "p",
          text: "Ob Google eine bestimmte Seite so sieht wie gedacht, zeigt das URL-Prüftool der Search Console mit einem Screenshot der gerenderten mobilen Seite.",
        },
      ],
    },
    {
      id: "kontakt",
      title: "Anruf, Route, Öffnungszeiten: die drei Aktionen lokaler Kunden",
      answer:
        "Wer auf dem Handy eine lokale Seite öffnet, will meist anrufen, hinfahren oder wissen, ob geöffnet ist. Diese drei Dinge gehören auf jeder Standort- und Kontaktseite in den ersten sichtbaren Bereich.",
      blocks: [
        {
          t: "h3",
          text: "Telefonnummer als Anruflink",
        },
        {
          t: "p",
          text: "Ein Link im Format **tel:+49891234567** öffnet auf dem Handy direkt die Telefon-App. Schreiben Sie die Nummer im internationalen Format mit Landesvorwahl, dann funktioniert der Link auch bei Gästen aus dem Ausland. Zeigen Sie daneben die Nummer als Text, damit sie auch am Computer lesbar ist.",
        },
        {
          t: "h3",
          text: "Routenlink zu Google Maps",
        },
        {
          t: "p",
          text: "Google bietet mit den **Maps URLs** eine einfache Form für Links, die Google Maps mit einem Ziel öffnen, ohne API-Schlüssel. Ein Link wie https://www.google.com/maps/dir/?api=1&destination=… mit Ihrer Adresse startet die Routenplanung zu Ihnen. Eine eingebettete Karte ist schön, ersetzt aber weder Adresse als Text noch Routenlink.",
        },
        {
          t: "h3",
          text: "Öffnungszeiten als Text",
        },
        {
          t: "p",
          text: "Öffnungszeiten gehören als lesbarer Text auf die Seite, nicht nur in ein Bild oder ein eingebettetes Widget. Halten Sie sie identisch mit dem Unternehmensprofil und Ihrem Markup. Wie Sie Sonderzeiten pflegen, steht im Artikel [Öffnungszeiten und Sondertage](/blog/gbp-oeffnungszeiten-sondertage).",
        },
        {
          t: "note",
          label: "Tippflächen",
          text: "Die Barrierefreiheitsrichtlinie WCAG 2.2 verlangt auf Stufe AA für Bedienelemente mindestens 24 × 24 CSS-Pixel oder ausreichend Abstand zu Nachbarelementen. Das ist eine Untergrenze. Ein Anrufknopf, den man mit dem Daumen trifft, darf deutlich größer sein.",
        },
      ],
    },
    {
      id: "ladezeit",
      title: "Ladezeit und Stabilität: die Core Web Vitals",
      answer:
        "Google empfiehlt gute Werte bei den Core Web Vitals: LCP bis 2,5 Sekunden, INP unter 200 Millisekunden und CLS unter 0,1. Sie sind ein Teil der Nutzerfreundlichkeit, Relevanz geht laut Google aber vor.",
      blocks: [
        {
          t: "table",
          caption: "Core Web Vitals und gute Werte laut Google",
          head: ["Messwert", "Was er misst", "Guter Wert", "Typische Ursache bei lokalen Websites"],
          rows: [
            ["LCP (Largest Contentful Paint)", "Wann der größte sichtbare Inhalt geladen ist", "bis 2,5 Sekunden", "Großes Titelbild ohne Komprimierung, langsamer Server"],
            ["INP (Interaction to Next Paint)", "Wie schnell die Seite auf Tippen reagiert", "unter 200 Millisekunden", "Viele Skripte von Chat-Widgets, Buchungstools und Tracking"],
            ["CLS (Cumulative Layout Shift)", "Wie stark Inhalte beim Laden springen", "unter 0,1", "Bilder ohne feste Größe, nachträglich eingeblendete Banner"],
          ],
        },
        {
          t: "p",
          text: "Google schreibt, dass es kein einzelnes Signal für die Nutzerfreundlichkeit von Seiten gibt und dass die Suche auch Seiten mit schwächerer Nutzerfreundlichkeit zeigt, wenn sie am relevantesten sind. Gute Werte helfen vor allem dort, wo viele ähnlich gute Seiten konkurrieren, und sie helfen in jedem Fall Ihren Kunden.",
        },
        {
          t: "p",
          text: "Die Werte Ihrer Seiten sehen Sie im Bericht Core Web Vitals der Search Console, einzelne Seiten prüfen Sie mit PageSpeed Insights oder Lighthouse in Chrome. Konkrete Maßnahmen beschreibt der Artikel [Core Web Vitals für lokale Websites](/blog/core-web-vitals-local-seo).",
        },
        {
          t: "note",
          label: "Veraltet",
          text: "First Input Delay (FID) ist kein Core Web Vital mehr. Google hat ihn durch INP ersetzt. Berichte und Tools, die noch FID ausweisen, sind nicht aktuell.",
        },
      ],
    },
    {
      id: "pop-ups",
      title: "Pop-ups und Overlays",
      answer:
        "Google rät von störenden Interstitials ab, die den Inhalt verdecken. Nutzen Sie stattdessen kleine Banner, die nur einen Teil des Bildschirms einnehmen.",
      blocks: [
        {
          t: "p",
          text: "Auf dem Handy verdeckt ein Newsletter-Fenster oder ein großer Gutschein-Hinweis oft die ganze Seite. Google beschreibt solche Overlays als störend, weil sie Nutzern und Suchmaschinen den Zugang zum Inhalt erschweren, und empfiehlt Banner statt ganzseitiger Einblendungen. Prüfen Sie besonders Saisonaktionen und Chat-Fenster, die sich automatisch öffnen.",
        },
      ],
    },
    {
      id: "formulare",
      title: "Formulare, die man mit dem Daumen ausfüllt",
      answer:
        "Je weniger Felder, desto eher wird ein Formular auf dem Handy abgeschickt. Fragen Sie nur ab, was Sie für den ersten Rückruf oder die Terminvergabe wirklich brauchen.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Wenige Felder:** Name, Telefon oder E-Mail, kurze Nachricht. Alles Weitere klären Sie im Gespräch.",
            "**Passende Eingabetypen:** Felder für Telefon und E-Mail so auszeichnen, dass das Handy die passende Tastatur zeigt.",
            "**Sichtbare Beschriftung:** Die Bezeichnung steht über dem Feld und verschwindet nicht beim Tippen.",
            "**Fehler direkt am Feld** erklären, nicht erst nach dem Absenden am Seitenende.",
            "**Bestätigung nach dem Absenden** mit dem, was als Nächstes passiert und wann.",
          ],
        },
        {
          t: "p",
          text: "Prüfen Sie außerdem, ob Formulare überhaupt ankommen. Schicken Sie einmal im Monat eine Testanfrage vom Handy. Ein Formular, das stillschweigend nicht zustellt, kostet mehr Anfragen als jede langsame Seite.",
        },
      ],
    },
    {
      id: "pruefen",
      title: "So prüfen Sie Ihre Seite in einer Stunde",
      answer:
        "Gehen Sie die Website auf dem eigenen Smartphone über mobile Daten durch, als wären Sie ein neuer Kunde. Ergänzen Sie das um URL-Prüftool und Core-Web-Vitals-Bericht der Search Console.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Als Kunde suchen", text: "WLAN aus, mobile Daten an. Ihren Betrieb in Google suchen und vom Profil auf die Website tippen." },
            { title: "Erste Sekunden beobachten", text: "Was sehen Sie, bevor Sie scrollen? Steht dort, was Sie anbieten, wo und wie man Sie erreicht?" },
            { title: "Anrufen und Route starten", text: "Den Anruflink antippen, die Route öffnen. Beides muss ohne Umweg funktionieren." },
            { title: "Formular abschicken", text: "Eine Testanfrage senden und prüfen, ob sie ankommt." },
            { title: "Seitlich wischen", text: "Lässt sich die Seite zur Seite schieben, ist etwas zu breit. Häufige Ursachen sind Tabellen, Bilder und eingebettete Karten." },
            { title: "Search Console prüfen", text: "URL-Prüftool für Startseite und Kontaktseite, dazu der Bericht Core Web Vitals für die mobile Version." },
          ],
        },
        {
          t: "note",
          label: "Eingestellte Werkzeuge",
          text: "Den Test auf Optimierung für Mobilgeräte und den Bericht zur mobilen Nutzerfreundlichkeit gibt es seit Dezember 2023 nicht mehr. Für eine Gerätesimulation am Computer eignen sich die Entwicklertools von Chrome und Lighthouse.",
        },
        {
          t: "p",
          text: "Wenn Sie eine zweite Meinung möchten, sehen wir uns Ihre mobile Seite und Ihr Profil im [kostenlosen Check](/de#check) an.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Was bedeutet Mobile-First-Indexierung?",
      a: "Google crawlt Ihre Seiten mit einem Smartphone-Agenten und nutzt diese mobile Version für Indexierung und Ranking. Eine eigene mobile Fassung ist nicht vorgeschrieben, Google empfiehlt sie aber dringend, am besten als responsives Design.",
    },
    {
      q: "Wie schnell muss meine Seite auf dem Handy laden?",
      a: "Google nennt für den Largest Contentful Paint einen guten Wert von bis zu 2,5 Sekunden. Dazu kommen eine schnelle Reaktion auf Eingaben (INP unter 200 Millisekunden) und ein stabiles Layout (CLS unter 0,1).",
    },
    {
      q: "Brauche ich AMP für Local SEO?",
      a: "Nein. Google indexiert AMP-Seiten wie andere Seiten und legt laut eigener Dokumentation dieselben Maßstäbe an, unabhängig von der Technik. Für eine lokale Website reicht eine schnelle, responsive Seite.",
    },
    {
      q: "Darf ich Inhalte auf dem Handy einklappen?",
      a: "Ja, wenn sie im HTML vorhanden sind und nicht erst nach einem Tippen nachgeladen werden. Google lädt keine Inhalte, die eine Nutzerinteraktion voraussetzen. Prüfen Sie im URL-Prüftool, ob der Text in der gerenderten Seite steht.",
    },
    {
      q: "Wie teste ich ohne den alten Mobile-Friendly-Test?",
      a: "Mit dem eigenen Smartphone, dem URL-Prüftool und dem Bericht Core Web Vitals der Search Console sowie mit PageSpeed Insights oder Lighthouse in Chrome.",
    },
    {
      q: "Was kostet eine mobile Prüfung meiner Buchungsseite?",
      a: "Für Hotels, Ferienwohnungen und Shops bietet LocalDominate den 72h Conversion Sprint ab 390 € an: Prüfung einer Seite auf mobile Darstellung, Geschwindigkeit und Tracking, fünf umgesetzte Korrekturen und ein kurzer Bericht. Details auf der Seite [Leistungen](/services).",
    },
  ],
  sources: [
    { title: "Best Practices für die Mobile-First-Indexierung", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=de" },
    { title: "Core Web Vitals und Google-Suchergebnisse", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Nutzerfreundlichkeit von Seiten in den Google-Suchergebnissen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/page-experience?hl=de" },
    { title: "Störende Interstitials und Dialogfelder vermeiden", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials?hl=de" },
    { title: "AMP-Seiten in der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/amp?hl=de" },
    { title: "Latest documentation updates (Mobile-Friendly-Test eingestellt, INP ersetzt FID)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Leistungsbericht (Suchergebnisse)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/7576553?hl=de" },
    { title: "Leistung und Statistiken Ihres Unternehmensprofils", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9918094?hl=de" },
    { title: "Get started with Maps URLs", publisher: "Google for Developers", url: "https://developers.google.com/maps/documentation/urls/get-started" },
    { title: "Understanding Success Criterion 2.5.8: Target Size (Minimum)", publisher: "W3C", url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html" },
  ],
  related: [
    { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für lokale Websites" },
    { slug: "technisches-local-seo-guide", title: "Technisches Local SEO" },
    { slug: "lokale-landing-pages", title: "Lokale Landingpages" },
    { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
  ],
  cta: {
    title: "Funktioniert Ihre Website auf dem Handy?",
    text: "Wir öffnen Ihre Website so, wie Ihre Kunden es tun, prüfen Anruf, Route, Ladezeit und Profil und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die am meisten bringen. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
