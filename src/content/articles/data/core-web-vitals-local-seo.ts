import type { V4Article } from "../types";

const article: V4Article = {
  slug: "core-web-vitals-local-seo",
  lang: "de",
  seoTitle: "Core Web Vitals für lokale Websites: messen und verbessern",
  seoDescription:
    "LCP, INP und CLS für kleine lokale Websites: Grenzwerte, was Google zum Ranking sagt, wie Sie richtig messen und welche Ursachen Sie zuerst beheben sollten.",
  h1: "Core Web Vitals für lokale Websites: messen, verstehen, verbessern",
  kicker: "Technik",
  lead:
    "Für Inhaber von Praxen, Handwerksbetrieben, Restaurants und Geschäften, deren Website auf dem Handy langsam lädt, springt oder träge reagiert. Sie erfahren, was die drei Messwerte bedeuten, wie Sie Felddaten und Labortests richtig lesen und welche Ursachen auf kleinen Websites am häufigsten sind.",
  answer:
    "Die Core Web Vitals sind drei Messwerte für das Nutzererlebnis: LCP (Laden des größten Inhalts, gut bis 2,5 Sekunden), INP (Reaktion auf Eingaben, gut bis 200 Millisekunden) und CLS (Layoutstabilität, gut bis 0,1). Google empfiehlt gute Werte, sagt aber auch: Sie garantieren keine Spitzenposition, Relevanz geht vor. Auf kleinen Websites liegen die Ursachen meist bei Titelbild, Server, fremden Skripten, Schriften und Cookie-Banner.",
  takeaways: [
    "LCP, INP und CLS gelten als gut, wenn 75 Prozent der Seitenaufrufe höchstens 2,5 Sekunden, 200 Millisekunden und 0,1 erreichen. INP hat im März 2024 den FID ersetzt.",
    "Google empfiehlt gute Werte, schreibt aber, dass es kein einzelnes Signal für die Nutzerfreundlichkeit gibt und gute Werte keine Top-Position garantieren.",
    "Entscheidend sind Felddaten echter Besucher aus dem Chrome UX Report. Viele kleine Websites haben zu wenige Besucher dafür, dann helfen nur Labortests und eigenes Ausprobieren.",
    "Ein langsamer LCP liegt oft nicht am Bild allein, sondern am Server und daran, dass der Browser das Titelbild zu spät anfordert.",
    "Fremde Skripte wie Cookie-Banner, Chat-Widgets, eingebettete Karten und Videos belasten INP und CLS. Jedes davon sollte seinen Platz auf der Seite rechtfertigen.",
  ],
  publishedAt: "2026-01-17",
  updatedAt: "2026-10-13",
  readingTime: 11,
  sections: [
    {
      id: "drei-messwerte",
      title: "Die drei Messwerte und ihre Grenzwerte",
      answer:
        "LCP misst, wann der größte sichtbare Inhalt geladen ist, INP, wie schnell die Seite auf Tippen und Klicken reagiert, und CLS, wie stark Inhalte beim Laden springen. Für jeden Wert gibt es drei Stufen: gut, verbesserungswürdig und schlecht.",
      blocks: [
        {
          t: "table",
          caption: "Grenzwerte laut web.dev, gemessen am 75. Perzentil",
          head: ["Messwert", "Was er misst", "Gut", "Schlecht"],
          rows: [
            ["LCP (Largest Contentful Paint)", "Ladezeit des größten sichtbaren Elements, meist Titelbild oder Überschrift", "höchstens 2,5 Sekunden", "über 4 Sekunden"],
            ["INP (Interaction to Next Paint)", "Zeit vom Tippen bis zur sichtbaren Reaktion", "höchstens 200 Millisekunden", "über 500 Millisekunden"],
            ["CLS (Cumulative Layout Shift)", "Summe unerwarteter Verschiebungen im Layout", "höchstens 0,1", "über 0,25"],
          ],
        },
        {
          t: "p",
          text: "Dazwischen gilt ein Wert als verbesserungswürdig. Bewertet wird nicht der Durchschnitt, sondern das **75. Perzentil** aller Seitenaufrufe: Drei von vier Besuchen müssen den Grenzwert erreichen. Für Handy und Computer gelten dieselben Grenzwerte, sie werden aber getrennt ausgewertet.",
        },
        {
          t: "note",
          label: "Veraltet: FID",
          text: "Seit März 2024 ist INP ein stabiler Core Web Vital und ersetzt First Input Delay (FID). Chrome hat FID als veraltet eingestuft. Wer Ihnen heute noch FID-Werte vorlegt, arbeitet mit veralteten Werkzeugen.",
        },
      ],
    },
    {
      id: "ranking",
      title: "Was Google zur Bedeutung für das Ranking sagt",
      answer:
        "Google empfiehlt Website-Inhabern, gute Core Web Vitals anzustreben. Zugleich schreibt Google, dass es kein einzelnes Signal für die Nutzerfreundlichkeit gibt, gute Werte keine Top-Position garantieren und die relevantesten Inhalte auch bei schwächerer Nutzerfreundlichkeit gezeigt werden.",
      blocks: [
        {
          t: "p",
          text: "Google schreibt, dass gute Core Web Vitals zu dem passen, was seine Kernranking-Systeme belohnen wollen, und empfiehlt Website-Inhabern, gute Werte anzustreben. Die Seite zur Nutzerfreundlichkeit ergänzt die Grenzen: Gute Werte in der Search Console oder in anderen Tools garantieren nicht, dass Ihre Seiten ganz oben stehen. Google ist bestrebt, immer die relevantesten Inhalte zu zeigen, auch wenn die Nutzerfreundlichkeit nicht optimal ist. Eine gute Nutzerfreundlichkeit hilft vor allem dort, wo viele Seiten ähnlich hilfreiche Inhalte bieten.",
        },
        {
          t: "p",
          text: "Für das lokale Ranking im Kartenblock und in Google Maps nennt Google drei andere Faktoren: Relevanz, Entfernung und Beliebtheit. Eine bessere Position lässt sich dort weder einfordern noch kaufen. Wie diese Faktoren zusammenspielen, erklärt [Wie das Google-Maps-Ranking funktioniert](/blog/wie-google-maps-ranking-funktioniert).",
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Für einen kleinen lokalen Betrieb sind die Core Web Vitals selten der Grund, warum er nicht gefunden wird. Ein unvollständiges Unternehmensprofil oder fehlende Leistungsseiten wiegen meist schwerer. Der Nutzen guter Werte liegt vor allem bei den Besuchern: Wer vom Profil auf Ihre Website tippt, will schnell Telefonnummer, Öffnungszeiten oder Preise sehen.",
        },
      ],
    },
    {
      id: "messen",
      title: "Richtig messen: Felddaten und Labordaten",
      answer:
        "Felddaten stammen von echten Chrome-Nutzern der letzten 28 Tage und zeigen, wie Ihre Seite tatsächlich erlebt wird. Labordaten stammen aus einem simulierten Seitenaufruf und helfen, Ursachen zu finden.",
      blocks: [
        {
          t: "table",
          caption: "Zwei Arten von Daten",
          head: ["", "Felddaten", "Labordaten"],
          rows: [
            ["Quelle", "Chrome UX Report (CrUX), echte Besuche", "Lighthouse, ein simulierter Aufruf"],
            ["Zeitraum", "die letzten 28 Tage", "der Moment des Tests"],
            ["Wo Sie sie sehen", "PageSpeed Insights oben, Search Console", "PageSpeed Insights unten, Lighthouse in Chrome"],
            ["Wofür", "Bewertung: Haben Ihre Besucher ein gutes Erlebnis?", "Diagnose: Welche Datei, welches Skript bremst?"],
          ],
        },
        {
          t: "p",
          text: "PageSpeed Insights zeigt Felddaten getrennt für Handy und Computer. Hat eine einzelne Adresse zu wenige Aufrufe, weicht das Tool auf die ganze Domain aus. Hat auch die Domain zu wenige, erscheinen gar keine Felddaten. In den Chrome UX Report kommen nur öffentlich auffindbare Seiten mit einer Mindestzahl an Besuchern. Gezählt werden nur Chrome-Nutzer, die Nutzungsstatistiken und Synchronisierung aktiviert haben. Chrome auf dem iPhone ist ausgenommen, Safari ohnehin.",
        },
        {
          t: "note",
          label: "Was das für kleine Websites heißt",
          text: "Eine Website mit wenigen Besuchern am Tag hat oft keine eigenen Felddaten. Dann bleibt der Labortest. Er simuliert ein Mittelklasse-Smartphone mit Mobilfunkverbindung und schwankt von Lauf zu Lauf. Testen Sie deshalb mehrmals und vergleichen Sie Tendenzen, nicht einzelne Punktzahlen. Die Gesamtpunktzahl von Lighthouse ist kein Core Web Vital.",
        },
        {
          t: "p",
          text: "Reaktionszeit auf Eingaben lässt sich im Labor schlecht abbilden, weil der Test nicht wie ein Kunde tippt. Fehlen Felddaten, empfiehlt web.dev, typische Abläufe selbst durchzuklicken, auch während die Seite noch lädt: Menü öffnen, Cookie-Banner bestätigen, Anruf-Knopf antippen, Formular ausfüllen.",
        },
      ],
    },
    {
      id: "search-console",
      title: "Den Bericht in der Search Console lesen",
      answer:
        "Der Bericht Core Web Vitals fasst Adressen mit ähnlichem Nutzererlebnis zu Gruppen zusammen und bewertet jede Gruppe nach ihrem schlechtesten Messwert, getrennt für Handy und Computer. Nach einer Korrektur starten Sie eine Überwachung über 28 Tage.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Mobil zuerst öffnen", text: "Im Bericht Core Web Vitals die Ansicht für Mobilgeräte wählen. Lokale Suchen kommen häufig vom Handy. Wie hoch der Anteil bei Ihnen ist, zeigt der Leistungsbericht, siehe [Mobile Local SEO](/blog/mobile-local-seo#eigene-daten)." },
            { title: "Problem und Gruppe ansehen", text: "Jede Zeile nennt ein Problem, etwa einen zu langsamen LCP auf Mobilgeräten. Dahinter stehen Gruppen ähnlicher Seiten mit Beispieladressen. Der Wert gilt für die Gruppe, nicht für jede einzelne Adresse." },
            { title: "Beispieladresse prüfen", text: "Eine Beispieladresse in PageSpeed Insights öffnen und im unteren Teil nachsehen, welches Element der LCP ist und welche Skripte bremsen." },
            { title: "Korrigieren und Überwachung starten", text: "Nach der Korrektur „Tracking starten“ wählen. Google beobachtet die Gruppe dann 28 Tage lang anhand der Felddaten. Ein neues Crawling löst das nicht aus." },
          ],
        },
        {
          t: "p",
          text: "Steht im Bericht „Keine Daten verfügbar“, ist das bei kleinen Websites normal. Gruppen, für die weder bei LCP noch bei CLS ausreichend Daten vorliegen, erscheinen nicht im Bericht.",
        },
      ],
    },
    {
      id: "lcp",
      title: "Langsamer LCP: Titelbild, Server und Reihenfolge",
      answer:
        "Der LCP setzt sich aus vier Teilen zusammen: Serverantwort, Verzögerung bis zum Start des Downloads, Downloaddauer und Darstellung. Bei schlechten Werten liegt der größte Anteil laut web.dev selten im Bild selbst, sondern im Warten davor.",
      blocks: [
        {
          t: "p",
          text: "Auf lokalen Websites ist das LCP-Element meist ein großes Foto vom Team, vom Lokal oder vom Haus. Eine Auswertung des Chrome-Teams zeigt, dass die meisten Websites mit schlechtem LCP weniger als ein Zehntel der Zeit mit dem Download dieses Bildes verbringen. Viel länger wartet der Browser darauf, das Bild überhaupt anzufordern, oder auf die erste Antwort des Servers.",
        },
        {
          t: "ul",
          items: [
            "**Titelbild nie verzögert laden.** web.dev schreibt: „Never lazy-load your LCP image.“ Viele Baukästen und Plugins setzen „lazy loading“ für alle Bilder. Für das erste Bild muss es aus sein.",
            "**Titelbild früh anfordern.** Als normales Bildelement statt als CSS-Hintergrund einbinden und mit dem Attribut fetchpriority=\"high\" markieren. Als CSS-Hintergrund findet der Browser das Bild erst spät.",
            "**Passende Größe und Format.** Kein 5000 Pixel breites Kamerafoto für einen Handybildschirm. Komprimieren, in einem modernen Bildformat ausliefern und je Bildschirmgröße passende Varianten anbieten.",
            "**Serverantwort prüfen.** Weiterleitungsketten vermeiden, Seiten zwischenspeichern und ein Content Delivery Network nutzen, wenn Ihr Anbieter das anbietet.",
          ],
        },
        {
          t: "p",
          text: "Wie Sie gute Fotos auswählen, ohne die Seite zu bremsen, steht auch in [Fotos im Unternehmensprofil](/blog/gbp-fotos-optimieren). Die Regeln für Dateigröße gelten auf der Website genauso.",
        },
      ],
    },
    {
      id: "cls",
      title: "Springende Seiten: Bilder, Banner und Schriften",
      answer:
        "Layoutverschiebungen entstehen, wenn der Browser den Platz für ein Element nicht kennt: Bilder ohne Größenangabe, nachträglich eingeblendete Banner, eingebettete Karten und Webschriften. Die Lösung ist fast immer, den Platz vorab zu reservieren.",
      blocks: [
        {
          t: "table",
          caption: "Häufige Ursachen für CLS auf lokalen Websites",
          head: ["Ursache", "Was passiert", "Abhilfe nach web.dev"],
          rows: [
            ["Bilder ohne Breite und Höhe", "Text rutscht nach unten, wenn das Bild erscheint", "Attribute width und height setzen oder Seitenverhältnis per CSS vorgeben"],
            ["Banner, die oben eingeschoben werden", "Hinweis auf Betriebsurlaub oder Aktion schiebt die Seite weg", "Platz mit Mindesthöhe reservieren oder als Overlay anzeigen, das nichts verschiebt"],
            ["Eingebettete Karte, Video, Bewertungs-Widget", "Rahmen ohne feste Größe wächst beim Laden", "Feste Größe oder Seitenverhältnis vorgeben"],
            ["Webschriften", "Text springt, wenn die Schrift wechselt", "font-display: optional oder Ersatzschrift per size-adjust angleichen"],
          ],
        },
        {
          t: "p",
          text: "Verschiebungen innerhalb von 500 Millisekunden nach einer Eingabe zählen nicht, etwa wenn ein Menü nach einem Tippen aufklappt. Gezählt wird, was ohne Zutun des Besuchers springt.",
        },
        {
          t: "p",
          text: "Bei Schriften schreibt web.dev: Die schnellste Schrift ist die, die gar nicht angefordert wird. Unsere Einschätzung: Zwei Schriftschnitte reichen für die meisten Betriebswebsites. WOFF2 bietet laut web.dev die beste Kompression. Ganzseitige Einblendungen sind zusätzlich ein eigenes Thema, siehe [Pop-ups und Overlays](/blog/mobile-local-seo#pop-ups).",
        },
      ],
    },
    {
      id: "inp",
      title: "Träge Reaktion: Cookie-Banner, Chat und eingebettete Dienste",
      answer:
        "INP wird schlecht, wenn der Browser nach einem Tippen mit JavaScript beschäftigt ist und die Anzeige nicht aktualisieren kann. Auf kleinen Websites stammt dieses JavaScript oft nicht vom Betrieb selbst, sondern von eingebundenen Diensten.",
      blocks: [
        {
          t: "p",
          text: "web.dev teilt jede Interaktion in drei Phasen: Wartezeit bis zur Verarbeitung, Verarbeitung und Darstellung. Lange Aufgaben im Browser verlängern alle drei. Ein Beispiel aus einer Fallstudie auf web.dev: Bei einer Plattform für Cookie-Einwilligungen löste der Klick auf „Akzeptieren“ eine lange Aufgabe aus, und das Banner wirkte für Nutzer wie eingefroren. Der Anbieter hat das in seinem Code behoben.",
        },
        {
          t: "ul",
          items: [
            "**Cookie-Banner:** Fragen Sie Ihren Anbieter, ob sein Banner auf INP optimiert ist, und testen Sie den Klick selbst auf einem älteren Handy. Den Banner aus Geschwindigkeitsgründen wegzulassen, ist keine Option, wenn Sie einwilligungspflichtige Dienste einsetzen.",
            "**Eingebettete Google-Karte:** Für eine Anfahrtsbeschreibung genügt oft ein statisches Kartenbild mit Link zur Route. Wo die interaktive Karte bleibt, mit dem Attribut loading=\"lazy\" einbinden.",
            "**Videos und Chat-Widgets:** Statt des vollen Players oder Chats zunächst eine sogenannte Fassade zeigen, ein statisches Vorschaubild, das den Dienst erst beim Klick lädt.",
            "**Tracking und Plugins:** Jedes Skript prüfen, ob es noch genutzt wird. Doppelte Analyse-Tags, alte Pixel und ungenutzte Plugins entfernen.",
          ],
        },
        {
          t: "note",
          label: "Einschätzung",
          text: "Eine einfache Betriebswebsite braucht wenig eigenes JavaScript. Ist INP schlecht, lohnt zuerst eine Liste aller eingebundenen Dienste mit der Frage, wer sie nutzt. Oft fallen dabei Skripte weg, die niemand vermisst.",
        },
      ],
    },
    {
      id: "baukasten",
      title: "Website-Baukästen und WordPress: was Sie selbst steuern können",
      answer:
        "Bei Baukästen bestimmt der Anbieter Server, Code und viele Skripte. Sie steuern vor allem Bilder, eingebundene Dienste und den Aufbau der Startseite. Bei WordPress kommen Theme und Plugins dazu.",
      blocks: [
        {
          t: "table",
          caption: "Wer was beeinflusst (Einschätzung)",
          head: ["Bereich", "Baukasten", "WordPress und ähnliche Systeme"],
          rows: [
            ["Server und Zwischenspeicher", "Anbieter", "Hoster und Sie über Caching-Einstellungen"],
            ["Titelbild, Format, Größe", "Sie, soweit der Baukasten es zulässt", "Sie"],
            ["Lazy Loading für das erste Bild", "Oft nur über Einstellungen des Anbieters", "Theme oder Plugin, meist abschaltbar"],
            ["Fremde Skripte und Widgets", "Sie: was Sie einbinden", "Sie: Plugins und Tags"],
            ["Schriften", "Auswahl im Design", "Theme, selbst gehostet möglich"],
          ],
        },
        {
          t: "p",
          text: "Wenn ein Baukasten trotz schlanker Inhalte schlechte Felddaten liefert, fragen Sie beim Anbieter nach, welche Werte seine Vorlagen erreichen und ob es eine schnellere gibt. Ein Wechsel des Systems ist eine große Entscheidung. Treffen Sie sie nur, wenn die Felddaten über Monate schlecht bleiben und Sie die Ursachen nicht selbst beheben können. Was bei einem Relaunch technisch zu beachten ist, steht in [Technisches Local SEO](/blog/technisches-local-seo-guide#pruefliste).",
        },
      ],
    },
    {
      id: "vorgehen",
      title: "Vorgehen in vier Schritten",
      answer:
        "Beginnen Sie mit den Felddaten, finden Sie im Labortest die Ursache, beheben Sie zuerst Titelbild und fremde Skripte und bestätigen Sie die Korrektur über die 28-tägige Überwachung in der Search Console.",
      blocks: [
        {
          t: "steps",
          items: [
            { title: "Felddaten ansehen", text: "Startseite, wichtigste Leistungsseite und Kontaktseite in PageSpeed Insights prüfen. Gibt es Felddaten für Handy, sind sie Ihr Maßstab." },
            { title: "Ursache im Labortest suchen", text: "Im unteren Teil nachsehen, welches Element der LCP ist, welche Elemente sich verschieben und welche Skripte von Drittanbietern am längsten laufen." },
            { title: "Beheben", text: "Zuerst das Titelbild, dann Platz für Bilder, Karten und Banner reservieren, dann ungenutzte Skripte entfernen." },
            { title: "Überwachen", text: "In der Search Console „Tracking starten“ wählen und die Werte nach vier Wochen erneut ansehen. Ohne Felddaten den Labortest wiederholen und selbst auf dem Handy durchklicken." },
          ],
        },
        {
          t: "p",
          text: "Die Core Web Vitals sind ein Baustein unter vielen. Wo sie im gesamten technischen Check stehen, zeigt [Technisches Local SEO](/blog/technisches-local-seo-guide#mobil-core-web-vitals). Die vollständige Liste aller Punkte finden Sie in der [Local SEO Audit Checkliste](/blog/local-seo-audit-checkliste).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Sind die Core Web Vitals ein Rankingfaktor?",
      a: "Google schreibt, dass gute Core Web Vitals zu dem passen, was seine Kernranking-Systeme belohnen wollen. Es gibt aber kein einzelnes Signal für die Nutzerfreundlichkeit, und gute Werte garantieren keine Top-Position. Relevante Inhalte gehen vor.",
    },
    {
      q: "Warum zeigt PageSpeed Insights für meine Website keine Felddaten?",
      a: "Der Chrome UX Report nimmt nur Seiten und Domains mit einer Mindestzahl an Besuchern auf. Kleine Websites erreichen diese Schwelle oft nicht. Dann stützen Sie sich auf den Labortest und probieren die wichtigsten Abläufe selbst auf dem Handy aus.",
    },
    {
      q: "Meine Lighthouse-Punktzahl schwankt bei jedem Test. Was stimmt?",
      a: "Labortests simulieren einen einzelnen Aufruf und hängen von Netz und Server im Moment des Tests ab. Schwankungen sind normal. Vergleichen Sie mehrere Läufe und achten Sie auf die einzelnen Messwerte und Hinweise, nicht auf die Gesamtpunktzahl.",
    },
    {
      q: "Wie lange dauert es, bis Verbesserungen in der Search Console sichtbar werden?",
      a: "Die Felddaten umfassen die letzten 28 Tage. Nach einer Korrektur mischen sich daher noch eine Weile alte und neue Besuche. Die Überwachung, die Sie mit „Tracking starten“ auslösen, läuft ebenfalls 28 Tage.",
    },
  ],
  sources: [
    { title: "Core Web Vitals und Google-Suchergebnisse (Stand 10. Dezember 2025)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/core-web-vitals?hl=de" },
    { title: "Understanding page experience in Google Search results (Stand 24. September 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/page-experience" },
    { title: "How the Core Web Vitals metrics thresholds were defined", publisher: "web.dev", url: "https://web.dev/articles/defining-core-web-vitals-thresholds" },
    { title: "Interaction to Next Paint is officially a Core Web Vital", publisher: "web.dev", url: "https://web.dev/blog/inp-cwv-launch" },
    { title: "About PageSpeed Insights", publisher: "Google for Developers", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    { title: "CrUX methodology", publisher: "Chrome for Developers", url: "https://developer.chrome.com/docs/crux/methodology" },
    { title: "Core Web Vitals report", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/9205520?hl=en" },
    { title: "Optimize Largest Contentful Paint", publisher: "web.dev", url: "https://web.dev/articles/optimize-lcp" },
    { title: "Common misconceptions about how to optimize LCP", publisher: "web.dev", url: "https://web.dev/blog/common-misconceptions-lcp" },
    { title: "Optimize resource loading with the Fetch Priority API", publisher: "web.dev", url: "https://web.dev/articles/fetch-priority" },
    { title: "Optimize Cumulative Layout Shift", publisher: "web.dev", url: "https://web.dev/articles/optimize-cls" },
    { title: "Optimize Interaction to Next Paint", publisher: "web.dev", url: "https://web.dev/articles/optimize-inp" },
    { title: "Fallstudie PubConsent: INP einer Plattform für Cookie-Einwilligungen", publisher: "web.dev", url: "https://web.dev/case-studies/pubconsent-inp" },
    { title: "Best practices for using third-party embeds", publisher: "web.dev", url: "https://web.dev/articles/embed-best-practices" },
    { title: "Best practices for fonts", publisher: "web.dev", url: "https://web.dev/articles/font-best-practices" },
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
  ],
  related: [
    { slug: "mobile-local-seo", title: "Mobile Local SEO: vom Suchtreffer zum Anruf" },
    { slug: "technisches-local-seo-guide", title: "Technisches Local SEO" },
    { slug: "local-seo-audit-checkliste", title: "Local SEO Audit: die Checkliste" },
    { slug: "gbp-fotos-optimieren", title: "Fotos im Unternehmensprofil" },
  ],
  cta: {
    title: "Lädt Ihre Website schnell genug für Kunden unterwegs?",
    text: "Wir prüfen Felddaten, Titelbild und eingebundene Dienste Ihrer wichtigsten Seiten auf dem Handy. Innerhalb von zwei Werktagen bekommen Sie bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
