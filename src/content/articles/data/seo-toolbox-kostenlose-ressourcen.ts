import type { V4Article } from "../types";

const article: V4Article = {
  slug: "seo-toolbox-kostenlose-ressourcen",
  lang: "de",
  seoTitle: "Kostenlose SEO-Tools 2026: die geprüfte Toolbox",
  seoDescription:
    "Kostenlose SEO-Tools für lokale Betriebe, beim Anbieter geprüft: Profile, Search Console, Keyword-Planer, Crawler, Ladezeit, Bilder und KI-Berichte mit Grenzen.",
  h1: "Die SEO-Toolbox 2026: kostenlose Werkzeuge für lokale Betriebe, beim Anbieter geprüft",
  kicker: "Werkzeuge",
  lead:
    "Für Inhaber und Mitarbeitende lokaler Betriebe, die ihre Sichtbarkeit selbst pflegen und dafür kein Geld für Software ausgeben wollen. Sie bekommen eine nach Aufgaben geordnete Liste kostenloser Werkzeuge, jeweils mit dem, was der Anbieter selbst zu Umfang und Grenzen der kostenlosen Nutzung sagt.",
  answer:
    "Für die meisten lokalen Betriebe reichen wenige kostenlose Werkzeuge: Google-Unternehmensprofil, Apple Business und Bing Places für die Einträge, die Google Search Console zum Messen, der Keyword-Planer für Suchbegriffe, die kostenlose Version von Screaming Frog oder Ahrefs Webmaster Tools für die Technik und Squoosh für Bilder. Alle Angaben haben wir am 13. Oktober 2026 beim Anbieter geprüft.",
  takeaways: [
    "Die Einträge bei Google, Apple und Bing sind laut den Anbietern kostenlos. Sie sind die Grundlage, noch vor jedem Analysewerkzeug.",
    "Die Google Search Console ist laut Google ein kostenloser Dienst und zeigt seit dem 31. August 2026 auch Impressionen aus Übersichten mit KI und KI-Modus, aber keine Klicks daraus.",
    "Der Keyword-Planer ist kostenlos, verlangt aber ein Google-Ads-Konto mit Zahlungsinformationen.",
    "Screaming Frog crawlt kostenlos bis zu 500 URLs. Ahrefs Webmaster Tools ist für verifizierte eigene Websites kostenlos.",
    "Den Mobile-Friendly-Test gibt es seit Dezember 2023 nicht mehr, FAQ-Rich-Results zeigt Google seit dem 7. Mai 2026 nicht mehr an. Listen mit solchen Werkzeugen sind veraltet.",
  ],
  publishedAt: "2026-01-10",
  updatedAt: "2026-10-13",
  readingTime: 9,
  sections: [
    {
      id: "auswahl",
      title: "Wie wir die Werkzeuge ausgewählt haben",
      answer:
        "In diese Liste kommt, was der Anbieter auf seiner eigenen Seite als kostenlos ausweist und was für einen lokalen Betrieb eine klare Aufgabe erfüllt. Wir vergeben keine Sterne und keine Rangfolge. Grenzen nennen wir so, wie der Anbieter sie angibt.",
      blocks: [
        {
          t: "p",
          text: "Kostenlose Angebote ändern sich oft. Prüfen Sie die Bedingungen deshalb vor der Anmeldung selbst. Wo wir auf einer Anbieterseite keine Preisangabe gefunden haben, wie bei PageSpeed Insights, sagen wir das ausdrücklich.",
        },
        {
          t: "note",
          label: "Korrektur zur früheren Fassung",
          text: "Die frühere Version dieses Artikels versprach mehr als 50 Werkzeuge mit Sternebewertungen. Wir haben die Sterne gestrichen, weil sie auf keiner nachvollziehbaren Prüfung beruhten. Gestrichen haben wir auch den Mobile-Friendly-Test, den Google im Dezember 2023 eingestellt hat, ein angebliches „Google AI Test Tool“, das sich als ein anderes Google-Werkzeug herausstellte, Generatoren für FAQ- und HowTo-Markup sowie Grenzwerte von Drittanbietern, die wir beim Anbieter nicht bestätigen konnten.",
        },
      ],
    },
    {
      id: "eintraege",
      title: "Einträge: Google, Apple und Bing",
      answer:
        "Die drei wichtigsten Werkzeuge für lokale Sichtbarkeit sind keine Analyseprogramme, sondern Ihre Einträge bei Google, Apple und Microsoft. Alle drei sind laut Anbieter kostenlos, und jeder Eintrag zeigt Kunden direkt Adresse, Öffnungszeiten und Telefonnummer.",
      blocks: [
        {
          t: "table",
          caption: "Unternehmenseinträge (Stand der Anbieterangaben am 13. Oktober 2026)",
          head: ["Werkzeug", "Wofür", "Was der Anbieter zu den Kosten sagt"],
          rows: [
            ["Google-Unternehmensprofil", "Eintrag in Google Suche und Google Maps", "Erstellung und Präsentation des Eintrags sind kostenlos"],
            ["Apple Business", "Eintrag in Apple Karten, Safari, Spotlight, Wallet und Mail", "Seit dem 14. April 2026 als kostenloser Dienst verfügbar. Ersetzt Apple Business Connect"],
            ["Bing Places for Business", "Eintrag bei Bing", "Kostenlose Plattform. Import aus Google möglich"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie diese Einträge anlegen und welche Verzeichnisse Ihres Landes danach sinnvoll sind, steht in [Verzeichnisse in DACH](/blog/local-citations-2025#grundausstattung).",
        },
      ],
    },
    {
      id: "messen",
      title: "Messen: Search Console und Besucherverhalten",
      answer:
        "Die Google Search Console ist das wichtigste kostenlose Messwerkzeug. Sie zeigt, bei welchen Suchen Ihre Seiten erscheinen, wie oft sie angeklickt werden und ob Google sie aufnehmen kann. Für das Verhalten auf der Website ist Microsoft Clarity laut Microsoft kostenlos.",
      blocks: [
        {
          t: "table",
          caption: "Messwerkzeuge (Stand der Anbieterangaben am 13. Oktober 2026)",
          head: ["Werkzeug", "Was es zeigt", "Kosten und Grenzen laut Anbieter"],
          rows: [
            ["Google Search Console", "Suchbegriffe, Impressionen, Klicks, Klickrate, Indexierungsprobleme. Seit dem 31. August 2026 ein Bericht zu generativen KI-Funktionen mit Impressionen, aber ohne Klicks", "Kostenloser Dienst von Google"],
            ["Microsoft Clarity", "Sitzungsaufzeichnungen und Heatmaps", "Kostenlos. Seit dem 31. Oktober 2025 verlangt Clarity für Besuche aus dem EWR, dem Vereinigten Königreich und der Schweiz ein gültiges Einwilligungssignal. Ohne Einwilligung setzt Clarity dort keine Cookies, und Funktionen wie Aufzeichnungen sind eingeschränkt"],
          ],
        },
        {
          t: "p",
          text: "Wie Sie die Search Console einrichten und lesen, beschreibt [Technisches Local SEO](/blog/technisches-local-seo-guide#search-console).",
        },
      ],
    },
    {
      id: "suchbegriffe",
      title: "Suchbegriffe: Keyword-Planer und Search Console",
      answer:
        "Der Keyword-Planer von Google Ads ist laut Google kostenlos und zeigt geschätzte monatliche Suchanfragen, Trends und Ideen für Suchbegriffe. Für den Zugang müssen Sie die Einrichtung eines Google-Ads-Kontos abschließen und Zahlungsinformationen eingeben.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Keyword-Planer:** Google beschreibt ihn als kostenloses Werkzeug. Laut Google-Ads-Hilfe zeigt er Suchbegriffe mit sehr geringem Suchvolumen nicht an. Für viele lokale Suchen in kleinen Orten bekommen Sie deshalb nach unserer Einschätzung keine Zahl.",
            "**Search Console:** zeigt die Suchbegriffe, mit denen Menschen Ihre Seiten bereits finden. Für einen bestehenden Betrieb halten wir das oft für die ehrlichere Quelle, weil es Ihre eigenen Daten sind.",
          ],
        },
        {
          t: "p",
          text: "Eine Methode ohne kostenpflichtige Werkzeuge, mit Google-Vorschlägen und eigenen Daten, finden Sie in [Local SEO Keywords finden](/blog/local-seo-keywords-finden#google-vorschlaege).",
        },
      ],
    },
    {
      id: "technik",
      title: "Technik: Crawler, Ladezeit und Verweise",
      answer:
        "Für die technische Prüfung einer kleinen Website reichen zwei kostenlose Angebote: die kostenlose Version von Screaming Frog für bis zu 500 URLs und Ahrefs Webmaster Tools für eigene, verifizierte Websites. Die Ladezeit messen Sie mit PageSpeed Insights.",
      blocks: [
        {
          t: "table",
          caption: "Technik-Werkzeuge (Stand der Anbieterangaben am 13. Oktober 2026)",
          head: ["Werkzeug", "Was es prüft", "Kostenlos laut Anbieter"],
          rows: [
            ["Screaming Frog SEO Spider", "Crawlt Ihre Website wie eine Suchmaschine: Fehlerseiten, Weiterleitungen, Titel, Beschreibungen", "Kostenlose Version bis 500 URLs. Die kostenpflichtige Lizenz kostet laut Preisseite ab 279 US-Dollar je Nutzer und Jahr. Läuft unter Windows, macOS und Linux"],
            ["Ahrefs Webmaster Tools (Ahrefs Free)", "Site Audit mit über 170 technischen Prüfungen, Suchbegriffe und Verweise auf Ihre Website", "Kostenlos für verifizierte eigene Websites. Grenzen: 5.000 Crawl-Credits je Projekt und Monat, bis zu 1.000 Verweise und Suchbegriffe gleichzeitig sichtbar. Keine Analyse von Wettbewerbern"],
            ["PageSpeed Insights", "Ladezeit mit Messung im Labor über Lighthouse und Felddaten echter Chrome-Nutzer der letzten 28 Tage", "Die Startseite verlangt keine Anmeldung und nennt keinen Preis"],
          ],
        },
        {
          t: "p",
          text: "PageSpeed Insights bewertet die Core Web Vitals am 75. Perzentil. Als gut gelten laut Google LCP bis 2.500 Millisekunden, INP bis 200 Millisekunden und CLS bis 0,1. Den Mobile-Friendly-Test hat Google im Dezember 2023 eingestellt. Ältere Anleitungen, die ihn empfehlen, sind überholt.",
        },
      ],
    },
    {
      id: "bilder",
      title: "Bilder verkleinern: Squoosh",
      answer:
        "Große Bilder sind nach unserer Einschätzung ein häufiger Grund für langsame Seiten. Squoosh ist eine quelloffene Web-App aus dem Projekt GoogleChromeLabs, die Bilder in verschiedene Formate umwandelt und verkleinert. Die Bilder verlassen dabei laut Projektseite Ihren Rechner nicht.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Lizenz:** quelloffen unter Apache-2.0, laut Projektseite auf GitHub.",
            "**Datenschutz:** Laut Projektseite schickt Squoosh Ihre Bilder an keinen Server, die Komprimierung läuft lokal. Die App erfasst über Google Analytics einfache Besucherdaten und die Bildgröße vor und nach der Komprimierung.",
            "**Aufruf:** im Browser unter squoosh.app.",
          ],
        },
        {
          t: "note",
          label: "Unsere Einschätzung",
          text: "Für Fotos im Google-Unternehmensprofil gelten eigene Vorgaben zu Format, Dateigröße und Mindestauflösung. Verkleinern Sie diese Fotos nicht stärker, als Google erlaubt. Die Vorgaben stehen in [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren).",
        },
      ],
    },
    {
      id: "grenzen",
      title: "Was kostenlose Werkzeuge nicht leisten",
      answer:
        "Kostenlose Werkzeuge zeigen Daten zu Ihrer eigenen Website und Ihren eigenen Einträgen. Was sie nicht zeigen, sind die Positionen in Google Maps an verschiedenen Orten Ihres Einzugsgebiets und die genauen Zahlen Ihrer Wettbewerber.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Maps-Positionen:** Die Search Console zeigt Suchdaten zu Ihrer Website. Die Reihenfolge der Einträge in Google Maps zeigt sie nach unserer Kenntnis nicht. Wie Sie Positionen ohne Software von Hand protokollieren, zeigt der [Google-Maps-Ranking-Tracker](/blog/google-maps-ranking-tracker#einrichten).",
            "**Wettbewerber:** Ahrefs beschränkt die Analyse fremder Websites auf zahlende Kunden. Für einen ersten Vergleich reicht nach unserer Einschätzung der Blick auf die Profile der Wettbewerber in Google Maps: Kategorien, Fotos, Bewertungen, Antworten.",
            "**Kleine Suchvolumen:** Der Keyword-Planer blendet Suchbegriffe mit sehr geringem Suchvolumen aus. Für kleine Orte fehlen deshalb oft Zahlen. Das heißt nicht, dass niemand danach sucht.",
            "**KI-Antworten:** Der Bericht der Search Console zählt Impressionen, keine Klicks und keine Suchbegriffe. Was eine KI-Antwort über Ihren Betrieb sagt, sehen Sie nach unserer Einschätzung nur, wenn Sie selbst nachfragen.",
          ],
        },
      ],
    },
    {
      id: "starter",
      title: "Die Reihenfolge für den Start",
      answer:
        "Wir empfehlen, mit den Einträgen zu beginnen, dann mit der Messung, dann mit Technik und Inhalten. Mehr als die hier genannten Werkzeuge brauchen nach unserer Einschätzung die meisten Betriebe mit einem Standort nicht.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Einträge prüfen", text: "Google-Unternehmensprofil, Apple Business und Bing Places mit denselben Daten." },
            { title: "Search Console einrichten", text: "Website bestätigen und den Leistungsbericht erst lesen, wenn Daten vorliegen." },
            { title: "Website crawlen", text: "Mit Screaming Frog oder Ahrefs Webmaster Tools Fehlerseiten und fehlende Titel finden." },
            { title: "Ladezeit prüfen", text: "Startseite und wichtigste Leistungsseite in PageSpeed Insights testen, große Bilder mit Squoosh verkleinern." },
            { title: "Suchbegriffe sammeln", text: "Aus Search Console und Keyword-Planer eine Liste für Ihre Leistungsseiten machen." },
          ],
        },
        {
          t: "p",
          text: "Was Sie ohne Budget sonst noch selbst erledigen können, steht in [Kostenloses SEO](/blog/kostenloses-seo-guide).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Welche SEO-Tools sind wirklich kostenlos?",
      a: "Laut den Anbietern kostenlos sind unter anderem Google-Unternehmensprofil, Apple Business, Bing Places, die Google Search Console, der Keyword-Planer mit Google-Ads-Konto, Microsoft Clarity, Ahrefs Webmaster Tools für eigene Websites, die Version von Screaming Frog bis 500 URLs. Squoosh ist quelloffen unter der Lizenz Apache-2.0.",
    },
    {
      q: "Brauche ich kostenpflichtige SEO-Software?",
      a: "Für einen Betrieb mit einem Standort und einer kleinen Website nach unserer Einschätzung meist nicht. Kostenpflichtige Werkzeuge lohnen sich eher, wenn Sie Wettbewerber im Detail analysieren, viele Standorte betreuen oder Websites mit mehr als 500 Seiten crawlen wollen.",
    },
    {
      q: "Gibt es den Mobile-Friendly-Test von Google noch?",
      a: "Nein. Google hat den Mobile-Friendly-Test und den Bericht zur mobilen Nutzerfreundlichkeit im Dezember 2023 eingestellt. Die Ladezeit auf Mobilgeräten prüfen Sie mit PageSpeed Insights.",
    },
    {
      q: "Wie sehe ich, ob mein Betrieb in KI-Antworten erscheint?",
      a: "Die Search Console zeigt seit dem 31. August 2026 Impressionen aus Übersichten mit KI und KI-Modus, aber keine Klicks. Der Bericht zeigt nur einen Ausschnitt, denn Suchbegriffe und Klicks fehlen darin.",
    },
    {
      q: "Ist Microsoft Clarity in Deutschland ohne Einwilligung nutzbar?",
      a: "Seit dem 31. Oktober 2025 verlangt Clarity für Besuche aus dem EWR, dem Vereinigten Königreich und der Schweiz ein gültiges Einwilligungssignal. Ohne Einwilligung setzt Clarity dort keine Cookies, Funktionen wie Sitzungsaufzeichnungen sind dann eingeschränkt. Binden Sie Clarity deshalb nach unserer Einschätzung über Ihr Einwilligungsbanner ein. Das ist keine Rechtsberatung.",
    },
  ],
  sources: [
    { title: "Google Unternehmensprofil: Häufige Fragen", publisher: "Google", url: "https://business.google.com/de/business-profile/" },
    { title: "Introducing Apple Business (24. März 2026)", publisher: "Apple Newsroom", url: "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" },
    { title: "Introducing the New Bing Places for Business (3. Oktober 2025)", publisher: "Microsoft Bing Blogs", url: "https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research" },
    { title: "Informationen zur Search Console", publisher: "Google Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9128668?hl=de" },
    { title: "Google Search Console AI performance reports and search generative AI control rolling out globally (31. August 2026)", publisher: "Search Engine Land", url: "https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-486269" },
    { title: "Clarity Pricing", publisher: "Microsoft Clarity", url: "https://clarity.microsoft.com/pricing" },
    { title: "Consent management", publisher: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-management" },
    { title: "So nutzen Sie den Google Ads Keyword-Planer", publisher: "Google", url: "https://business.google.com/de/resources/articles/using-google-ads-keyword-planner/" },
    { title: "Keyword-Planer verwenden", publisher: "Google Ads-Hilfe", url: "https://support.google.com/google-ads/answer/7337243?hl=de" },
    { title: "SEO Spider Pricing", publisher: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/pricing/" },
    { title: "Ahrefs Webmaster Tools", publisher: "Ahrefs", url: "https://ahrefs.com/webmaster-tools/" },
    { title: "PageSpeed Insights", publisher: "Google", url: "https://pagespeed.web.dev" },
    { title: "Informationen zu PageSpeed Insights", publisher: "Google for Developers", url: "https://developers.google.com/speed/docs/insights/v5/about?hl=de" },
    { title: "The Search Console mobile friendly testing tool (Hinweis zur Einstellung im Dezember 2023)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool?hl=en" },
    { title: "Latest documentation updates (FAQ-Rich-Results ab 7. Mai 2026 eingestellt)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Squoosh", publisher: "GoogleChromeLabs auf GitHub", url: "https://github.com/GoogleChromeLabs/squoosh" },
  ],
  related: [
    { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: was Sie selbst erledigen können" },
    { slug: "technisches-local-seo-guide", title: "Technisches Local SEO" },
    { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
    { slug: "google-maps-ranking-tracker", title: "Google-Maps-Ranking-Tracker" },
  ],
  cta: {
    title: "Zu viele Werkzeuge, zu wenig Zeit?",
    text: "Wir prüfen Ihr Google-Unternehmensprofil, Ihre Einträge und die wichtigsten Seiten Ihrer Website. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
