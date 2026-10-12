import type { V4Article } from "../types";

const article: V4Article = {
  slug: "google-maps-seo-vs-organic-seo",
  lang: "de",
  seoTitle: "Google Maps SEO vs. organisches SEO: Was Google bewertet",
  seoDescription:
    "Wie Google lokale Treffer in Maps und normale Suchergebnisse sortiert, welche Signale beide teilen, welche nicht und was daraus für Profil und Website folgt.",
  h1: "Google Maps SEO und organisches SEO: Wie Google die beiden Rankings berechnet",
  kicker: "Google Maps",
  lead:
    "Für Inhaber und Marketingverantwortliche, die verstehen wollen, warum ein Betrieb in Maps vorne und mit der Website weit hinten stehen kann oder umgekehrt. Sie bekommen Googles eigene Beschreibung beider Rankings, einen Vergleich der Signale und die Folgen für die Arbeit an Profil und Website. Welcher Betrieb was zuerst angehen sollte, steht im Entscheidungsleitfaden [Local SEO oder organisches SEO](/blog/local-seo-vs-organisch).",
  answer:
    "Lokale Treffer in Maps und im Kartenblock sortiert Google laut eigener Hilfe nach **Relevanz, Entfernung und Bekanntheit**, Grundlage ist das Unternehmensprofil. Normale Treffer wählt Google aus dem Index der Websuche mit Hunderten Faktoren, darunter Inhalte, Links und der Standort der suchenden Person. Gemeinsam sind vor allem Links und genaue Angaben. Entfernung, Kategorien und Rezensionen nennt Google nur für das lokale Ranking.",
  takeaways: [
    "Für lokale Ergebnisse nennt Google drei Faktoren: Relevanz, Entfernung und Bekanntheit. Für die Websuche spricht Google von Hunderten Faktoren. Eine Gewichtung veröffentlicht Google für keines der beiden.",
    "Links zählen in beiden Systemen: lokal über die Anzahl der Websites, die auf Ihr Unternehmen verweisen, in der Websuche als Signal für die Relevanz von Seiten.",
    "Kategorien wirken laut Google auf das lokale Ranking. In der Websuche zählen stattdessen erreichbare, hilfreiche Inhalte und eine gute Nutzerfreundlichkeit der Website.",
    "Der Standort zählt in beiden Fällen, aber unterschiedlich: lokal als Entfernung zwischen Betrieb und Suchendem, in der Websuche als einer von vielen Faktoren.",
    "Rezensionen nennt Google nur für das lokale Ranking. Sterne aus eigenem Markup zeigt Google für lokale Unternehmen auf deren Website nicht an.",
    "Kaufen lässt sich keines der beiden Rankings. Das schreibt Google für lokale Ergebnisse und für die Websuche.",
  ],
  publishedAt: "2026-03-08",
  updatedAt: "2026-10-12",
  readingTime: 12,
  sections: [
    {
      id: "zwei-rankings",
      title: "Zwei Rankings auf einer Ergebnisseite",
      answer:
        "Bei einer Suche mit Ortsbezug zeigt Google oft zwei getrennt sortierte Listen: lokale Ergebnisse aus Unternehmensprofilen und normale Treffer aus dem Index der Websuche. Ihr Betrieb kann in der einen vorne und in der anderen gar nicht stehen.",
      blocks: [
        {
          t: "p",
          text: "Lokale Ergebnisse erscheinen laut Google in Google Maps und in der Google Suche, wenn jemand nach Unternehmen oder Orten in der Nähe sucht. Ein Eintrag dort ist ein Unternehmensprofil. Die normalen Treffer sind Seiten von Websites. Für sie beschreibt Google drei Phasen: Crawling, Indexierung und Bereitstellung der Suchergebnisse, wobei nicht jede Seite alle drei durchläuft.",
        },
        {
          t: "p",
          text: "Diese Trennung erklärt ein häufiges Bild. Ein Handwerksbetrieb mit gepflegtem Profil kann im Kartenblock stehen, während seine Website bei derselben Suche erst weit unten auftaucht. Umgekehrt kann der Ratgeberartikel einer Praxis in den normalen Treffern oben stehen, während die Praxis in Maps fehlt. Das ist kein Widerspruch, sondern die Folge zweier Systeme mit unterschiedlichen Daten.",
        },
        {
          t: "note",
          label: "Abgrenzung",
          text: "Dieser Artikel erklärt die Mechanik. Welcher Betriebstyp was zuerst angehen sollte und wie Sie beides messen, steht in [Local SEO oder organisches SEO](/blog/local-seo-vs-organisch). Apple Karten und Bing pflegen eigene Verzeichnisse, mehr dazu in [Apple Business Connect 2026](/blog/apple-business-connect-local-seo-2026) und [Bing und Microsoft Copilot für lokale Betriebe](/blog/bing-copilot-local-seo-2026).",
        },
      ],
    },
    {
      id: "lokales-ranking",
      title: "Wie Google lokale Ergebnisse sortiert",
      answer:
        "Google nennt drei Faktoren: Relevanz, Entfernung und Bekanntheit. Die genaue Rechnung hält Google geheim, und ein besseres lokales Ranking lässt sich laut Google nicht einfordern, auch nicht gegen Bezahlung.",
      blocks: [
        {
          t: "table",
          caption: "Die drei lokalen Faktoren und woher die Daten kommen",
          head: ["Faktor", "Googles Erklärung", "Woher die Daten kommen"],
          rows: [
            ["Relevanz", "Wie gut ein Unternehmensprofil zum Gesuchten passt. Ausführliche Angaben helfen Google bei der Zuordnung.", "Kategorien, Attribute und weitere Angaben im Profil"],
            ["Entfernung", "Wie weit der Betrieb vom Suchenden entfernt ist. Ohne geteilten Standort nutzt Google, was es über den Standort weiß.", "Adresse oder Einzugsgebiet im Profil und Standort der suchenden Person"],
            ["Bekanntheit", "Wie bekannt der Betrieb ist, unter anderem gemessen an der Anzahl der Websites, die auf ihn verweisen, und an Rezensionen.", "Links und Erwähnungen im Web, Rezensionen im Profil"],
          ],
        },
        {
          t: "p",
          text: "Zwei weitere Punkte erhöhen laut Google die Wahrscheinlichkeit, angezeigt zu werden: ein bestätigtes Profil und vollständige, korrekte Informationen. Für die Kategorien wird Google besonders deutlich. Die gewählten Kategorien wirken sich laut Google auf das Ranking in lokalen Suchergebnissen aus.",
        },
        {
          t: "p",
          text: "Viele Ratgeber behaupten, eine gute Position der Website in der Websuche hebe automatisch das lokale Ranking. In Googles aktueller Hilfe zum lokalen Ranking steht das nicht. Belegt ist dort nur der Bezug über Websites, die auf Ihr Unternehmen verweisen. Was Fachleute darüber hinaus vermuten und wie belastbar das ist, ordnet der Artikel [Google-Maps-Ranking-Faktoren](/blog/google-maps-seo-ranking-faktoren) ein.",
        },
      ],
    },
    {
      id: "organisches-ranking",
      title: "Wie Google die normalen Treffer sortiert",
      answer:
        "Für die Websuche sucht Google in seinem Index nach passenden Seiten und zeigt die, die es für die hochwertigsten und relevantesten hält. Die Relevanz bestimmen laut Google Hunderte Faktoren, etwa Standort, Sprache und Gerät der suchenden Person.",
      blocks: [
        {
          t: "steps",
          items: [
            {
              title: "Crawling",
              text: "Automatische Programme laden Inhalte von Seiten herunter. Neue Seiten findet Google unter anderem über Links. Was nicht erreichbar ist, kann nicht erscheinen.",
            },
            {
              title: "Indexierung",
              text: "Google analysiert die geladenen Inhalte und nimmt sie in den Index auf. Nur was dort steht, kommt für die Treffer in Frage.",
            },
            {
              title: "Bereitstellung",
              text: "Bei jeder Suche sucht Google im Index nach passenden Seiten und gibt die Ergebnisse zurück, die es für die hochwertigsten und relevantesten hält.",
            },
          ],
        },
        {
          t: "p",
          text: "Welche Seiten oben stehen, entscheiden laut Googles Leitfaden zu den Ranking-Systemen mehrere automatische Systeme. Genannt werden unter anderem BERT und der neuronale Abgleich, die die Bedeutung von Wörtern und Konzepten in Suchanfragen und auf Seiten erkennen, Linkanalysesysteme mit PageRank, laut Google eines der wichtigsten Ranking-Systeme, sowie Systeme für hilfreiche Originalinhalte und zuverlässige Informationen.",
        },
        {
          t: "p",
          text: "Für Inhalte gibt Google die Richtung vor: Die Systeme sollen hilfreichen, vertrauenswürdigen Informationen für Menschen Vorrang geben. Das oft zitierte E-E-A-T (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit) ist laut Google selbst kein spezifischer Ranking-Faktor. Core Web Vitals werden laut Google von den Ranking-Systemen genutzt, die Relevanz geht aber vor: Google versucht immer, die relevantesten Inhalte zu zeigen.",
        },
        {
          t: "note",
          label: "Gut zu wissen",
          text: "Auch in der Websuche lässt sich nichts kaufen. Laut Search Central akzeptiert Google keine Zahlungen, um eine Website häufiger zu crawlen oder im Ranking höher einzustufen.",
        },
      ],
    },
    {
      id: "gemeinsamkeiten",
      title: "Was beide Rankings teilen",
      answer:
        "Belegt ist die Überschneidung vor allem bei Links: Google nennt sie für die lokale Bekanntheit und für die Relevanz in der Websuche. Dazu kommen genaue Angaben zum Angebot und der Standort als Faktor, während Rezensionen nur lokal belegt sind.",
      blocks: [
        {
          t: "h3",
          text: "Links und Erwähnungen",
        },
        {
          t: "p",
          text: "Für die Bekanntheit im lokalen Ranking zählt laut Google die Anzahl der Websites, die auf Ihr Unternehmen verweisen. In der Websuche nutzt Google Links als Signal für die Relevanz von Seiten und um neue Seiten zu finden. Ein Link von Innung, Tourismusverband oder Lokalzeitung auf Ihre Website kann deshalb in beiden Systemen wirken. Wie Sie solche Links ohne Regelverstoß aufbauen, zeigt [Local Link Building](/blog/local-link-building).",
        },
        {
          t: "h3",
          text: "Genaue Angaben zum Angebot",
        },
        {
          t: "p",
          text: "Lokal helfen laut Google ausführliche Angaben im Profil, damit Google es passenden Suchen zuordnen kann. In der Websuche gleichen Systeme wie BERT und der neuronale Abgleich die Konzepte einer Suchanfrage mit den Inhalten von Seiten ab. In beiden Fällen hilft, wer konkret sagt, was er anbietet. Unsere Einschätzung: Profil und Website sollten dieselben Leistungen mit denselben Begriffen nennen, damit beide eindeutig zu demselben Betrieb passen.",
        },
        {
          t: "h3",
          text: "Standort",
        },
        {
          t: "p",
          text: "Auch die Websuche berücksichtigt den Standort. Google nennt ihn als einen der Faktoren für die Relevanz und gibt ein Beispiel: Wer in Paris nach einer Fahrradwerkstatt sucht, bekommt andere Ergebnisse als jemand in Hongkong. Im lokalen Ranking ist die Entfernung dagegen einer von nur drei Faktoren, die Google überhaupt nennt.",
        },
        {
          t: "h3",
          text: "Rezensionen: lokal belegt, in der Websuche nicht",
        },
        {
          t: "p",
          text: "Für das lokale Ranking schreibt Google, dass mehr Rezensionen und positive Bewertungen helfen können. Für die Websuche nennt Google Kundenbewertungen nicht als Signal. Das Rezensionssystem im Leitfaden zu den Ranking-Systemen betrifft hochwertige Testberichte als Inhalt, nicht Sterne von Kunden. Sternebewertungen aus eigenem Markup zeigt Google nicht an, wenn ein lokales Unternehmen Rezensionen über sich selbst auf der eigenen Website einbindet, auch nicht über ein eingebettetes Widget.",
        },
      ],
    },
    {
      id: "unterschiede",
      title: "Was nur in einem System zählt",
      answer:
        "Entfernung, Kategorien, Bestätigung und Rezensionen im Profil nennt Google nur für das lokale Ranking. Crawling, Indexierung, hilfreiche Inhalte und Nutzerfreundlichkeit betreffen nur die Website, deshalb ersetzt gute Arbeit auf der einen Seite die andere nicht.",
      blocks: [
        {
          t: "ul",
          items: [
            "**Entfernung:** Sie hängt an Adresse oder Einzugsgebiet im Profil. Ein Einzugsgebiet macht das Profil laut Google leichter auffindbar. Zulässig sind bis zu 20 Gebiete, deren Grenzen in der Regel nicht weiter als etwa zwei Autostunden entfernt liegen. Eine Adresse näher am Zentrum dürfen Sie nicht erfinden: Für ein virtuelles Büro ohne Personal ist laut Google kein Profil zulässig.",
            "**Kategorien:** Die Hauptkategorie soll Ihr Unternehmen am besten beschreiben, weitere Kategorien nur zusätzliche Bereiche. Eigene Kategorien lassen sich nicht anlegen. Ein entsprechendes Feld gibt es für die Websuche nicht. Mehr im Leitfaden [Google Business Kategorien](/blog/google-business-kategorien-guide).",
            "**Bestätigung und Profilfelder:** Ein bestätigtes Profil wird laut Google eher angezeigt. Öffnungszeiten, Sonderzeiten und Attribute pflegen Sie im Profil, für die Websuche nennt Google diese Felder nicht.",
            "**Firmenname:** Unnötige Zusätze wie Leistungen oder Slogans im Namen sind laut Google nicht erlaubt. Der Name muss dem entsprechen, den Sie auch außerhalb von Google verwenden.",
            "**Crawling und Indexierung:** Was Google nicht laden oder nicht indexieren kann, erscheint nicht in den normalen Treffern und laut Search Central auch nicht als Quelle in Übersichten mit KI.",
            "**Inhalte und Nutzerfreundlichkeit:** Hilfreiche Inhalte und Core Web Vitals nennt Google für die Websuche. In der Hilfe zum lokalen Ranking kommen sie nicht vor.",
          ],
        },
      ],
    },
    {
      id: "vergleich",
      title: "Die Signale im Vergleich",
      answer:
        "Die Tabelle stellt gegenüber, was Google für lokale Ergebnisse und für die Websuche selbst dokumentiert. Wo Google zu einem Signal nichts sagt, steht das dabei.",
      blocks: [
        {
          t: "table",
          caption: "Lokales Ranking und Websuche: was Google dokumentiert (Stand Oktober 2026)",
          head: ["Signal", "Lokale Ergebnisse (Maps, Kartenblock)", "Normale Treffer (Websuche)"],
          rows: [
            ["Grundlage", "Unternehmensprofil", "Indexierte Seiten Ihrer Website"],
            ["Von Google genannte Faktoren", "Relevanz, Entfernung, Bekanntheit", "Hunderte Faktoren, darunter Standort, Sprache und Gerät"],
            ["Standort", "Entfernung zwischen Betrieb und Suchendem, einer von drei Faktoren", "Einer von vielen Faktoren für die Relevanz"],
            ["Links von anderen Websites", "Teil der Bekanntheit", "Signal für Relevanz, PageRank als eines der wichtigsten Systeme"],
            ["Rezensionen", "Mehr Rezensionen und positive Bewertungen können helfen", "Nicht als Signal genannt, keine Sterne aus eigenem Markup für lokale Unternehmen"],
            ["Kategorien", "Wirken laut Google auf das lokale Ranking", "Kein entsprechendes Feld"],
            ["Bestätigung", "Bestätigtes Profil wird eher angezeigt", "Kein Gegenstück genannt"],
            ["Vollständige, korrekte Angaben", "Erhöhen die Chance, angezeigt zu werden", "Strukturierte Daten können Google etwa über Öffnungszeiten informieren"],
            ["Inhalte", "Ausführliche Angaben im Profil", "Hilfreiche, vertrauenswürdige Inhalte für Menschen"],
            ["Technik und Nutzerfreundlichkeit", "In der Hilfe nicht genannt", "Crawling und Indexierung als Voraussetzung, Core Web Vitals werden genutzt"],
            ["Bezahlung", "Kein besseres Ranking gegen Bezahlung", "Keine Zahlungen für Crawling oder Ranking"],
          ],
        },
        {
          t: "note",
          label: "So lesen Sie die Tabelle",
          text: "„Nicht genannt“ heißt nicht „wirkungslos“. Es heißt nur, dass Google den Zusammenhang nicht bestätigt. Prozentwerte für einzelne Signale, wie sie in vielen Vergleichen stehen, stammen nie von Google.",
        },
      ],
    },
    {
      id: "folgen",
      title: "Was das für die Arbeit an Profil und Website bedeutet",
      answer:
        "Ordnen Sie jede Aufgabe dem System zu, auf das sie wirkt: Kategorie, Adresse oder Einzugsgebiet, Bestätigung und Bewertungen gehören zum Profil, Erreichbarkeit, Inhalte und Nutzerfreundlichkeit zur Website. Links und Erwähnungen wirken auf beides.",
      blocks: [
        {
          t: "table",
          caption: "Aufgaben und wo sie laut Google wirken",
          head: ["Aufgabe", "Wirkt auf", "Vertiefung"],
          rows: [
            ["Hauptkategorie und weitere Kategorien prüfen", "Lokales Ranking", "[Google Business Kategorien](/blog/google-business-kategorien-guide)"],
            ["Profil bestätigen, Angaben vollständig halten", "Lokales Ranking", "[Unternehmensprofil optimieren](/blog/google-my-business-optimieren)"],
            ["Adresse oder Einzugsgebiet korrekt angeben", "Lokales Ranking (Entfernung)", "[Mehrere Standorte verwalten](/blog/gbp-mehrere-standorte)"],
            ["Alle Kunden um ehrliche Bewertungen bitten", "Lokales Ranking (Bekanntheit)", "[Google-Bewertungen bekommen](/blog/google-bewertungen-bekommen)"],
            ["Crawling und Indexierung sicherstellen", "Websuche und Übersichten mit KI", "[Website-Inhalte für KI-Suche](/blog/website-content-ai-suchmaschinen)"],
            ["Hilfreiche Leistungsseiten schreiben", "Websuche", "[Local SEO Keywords finden](/blog/local-seo-keywords-finden)"],
            ["Ladezeit und Bedienbarkeit am Handy verbessern", "Websuche", "[Mobile Local SEO](/blog/mobile-local-seo)"],
            ["Links von Verbänden, Partnern und Presse", "Beides", "[Local Link Building](/blog/local-link-building)"],
            ["LocalBusiness-Markup passend zum Profil", "Darstellung in der Websuche", "[Schema Markup für Local SEO](/blog/schema-markup-local-seo)"],
          ],
        },
        {
          t: "p",
          text: "Zwei Abkürzungen fehlen bewusst: Leistungen oder Slogans im Firmennamen und kopierte Seiten für jeden Nachbarort. Das erste verstößt gegen Googles Richtlinien für das Unternehmensprofil. Das zweite zählt Google zu den Brückenseiten, also zu Spam in der Websuche.",
        },
      ],
    },
    {
      id: "ki-funktionen",
      title: "Wo Übersichten mit KI und der KI-Modus stehen",
      answer:
        "Für Übersichten mit KI und den KI-Modus gibt es laut Google keine zusätzlichen Anforderungen: Quellen müssen indexiert und für ein Snippet geeignet sein, und Google nennt aktuelle Angaben im Unternehmensprofil als weiter geltende Grundlage. Unsere Einschätzung: Die KI-Funktionen verbinden beide Rankings, statt ein drittes zu schaffen.",
      blocks: [
        {
          t: "p",
          text: "Beide Funktionen können laut Search Central eine Frage in mehrere ähnliche Suchanfragen zu Unterthemen und Datenquellen aufteilen. Übersichten mit KI zeigt Google allen Nutzern in Deutschland, Österreich und der Schweiz. Den KI-Modus führt Google dort seit dem 8. Oktober 2025 ein.",
        },
        {
          t: "p",
          text: "Gemessen wird in der Search Console: Klicks aus diesen Funktionen stehen im Suchtyp „Web“ zusammen mit den normalen Klicks. Seit dem 31. August 2026 zeigt der Leistungsbericht zu generativen KI-Funktionen zusätzlich, wie oft Links zu Ihrer Website dort angezeigt wurden, allerdings nur als Impressionen. Mehr dazu in [Google AI Overviews und Local SEO](/blog/google-ai-overviews-local-seo) und [KI-Suche oder klassische Suche](/blog/ai-search-vs-traditional-search).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Warum stehe ich in Google Maps vorne, mit meiner Website aber nicht?",
      a: "Weil Google zwei getrennte Rankings berechnet. Lokal zählen laut Google Relevanz, Entfernung und Bekanntheit, mit Kategorien und Rezensionen im Profil. In den normalen Treffern zählen Inhalte, Links und Erreichbarkeit der Website. Ein starkes Profil hebt die Website nicht automatisch mit.",
    },
    {
      q: "Warum rankt meine Website gut, mein Profil in Maps aber nicht?",
      a: "Mögliche Gründe sind eine zu allgemeine Hauptkategorie, unvollständige Angaben, ein nicht bestätigtes Profil, wenige Rezensionen oder die Entfernung: Wer weiter weg sucht, sieht näher gelegene Betriebe. Prüfen Sie zuerst Kategorie und Profilangaben.",
    },
    {
      q: "Verbessern Google-Bewertungen mein organisches Ranking?",
      a: "Google nennt Rezensionen nur für das lokale Ranking. Sterne aus eigenem Markup zeigt Google für lokale Unternehmen auf deren Website nicht an, auch nicht über ein eingebettetes Widget. Für Menschen, die zwischen Anbietern wählen, bleiben Bewertungen trotzdem wichtig.",
    },
    {
      q: "Hilft LocalBusiness-Markup beim Ranking in Maps?",
      a: "Das sagt Google nicht. Laut Dokumentation können strukturierte Daten Google über Angaben wie Öffnungszeiten informieren, und in der Suche kann ein Knowledge Panel mit Details erscheinen. Für das lokale Ranking nennt Google das Unternehmensprofil.",
    },
    {
      q: "Zählt die Ladezeit meiner Website für Google Maps?",
      a: "In Googles Hilfe zum lokalen Ranking kommt sie nicht vor. Core Web Vitals werden laut Google von den Ranking-Systemen der Websuche genutzt. Für Kunden, die vom Profil auf Ihre Website wechseln, zählt eine schnelle Seite in jedem Fall.",
    },
    {
      q: "Kann mir jemand einen Platz im Kartenblock garantieren?",
      a: "Nein. Ein besseres lokales Ranking lässt sich laut Google nicht einfordern, auch nicht gegen Bezahlung, und für die Websuche nimmt Google keine Zahlungen für ein höheres Ranking an. Seriöse Anbieter versprechen Arbeit an Profil und Website, keine Position.",
    },
  ],
  sources: [
    { title: "Tipps zur Verbesserung des lokalen Rankings bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7091?hl=de" },
    { title: "Unternehmenskategorie verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/7249669?hl=de" },
    { title: "Richtlinien für die Darstellung Ihres Unternehmens bei Google", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/3038177?hl=de" },
    { title: "Einzugsgebiete für Unternehmen ohne festen Standort und Hybridunternehmen verwalten", publisher: "Google Unternehmensprofil-Hilfe", url: "https://support.google.com/business/answer/9157481?hl=de" },
    { title: "Umfassender Leitfaden zur Funktionsweise der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=de" },
    { title: "Leitfaden zu Ranking-Systemen der Google Suche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ranking-systems-guide?hl=de" },
    { title: "Hilfreiche, zuverlässige und nutzerorientierte Inhalte erstellen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=de" },
    { title: "Nutzerfreundlichkeit von Seiten in den Google-Suchergebnissen", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/page-experience?hl=de" },
    { title: "SEO-Link-Best-Practices für Google", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=de" },
    { title: "Strukturierte Daten für Rezensions-Snippets", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet?hl=de" },
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Spamrichtlinien für die Google Websuche (Brückenseiten)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
    { title: "KI-Funktionen und Ihre Website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features?hl=de" },
    { title: "Übersicht mit KI: Informationen in der Google Suche schneller und einfacher finden", publisher: "Google Suche Hilfe", url: "https://support.google.com/websearch/answer/14901683?hl=de" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Leistungsbericht zu generativen KI-Funktionen (Google Suche)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=de" },
  ],
  related: [
    { slug: "local-seo-vs-organisch", title: "Local SEO oder organisches SEO: Was Ihr Betrieb zuerst braucht" },
    { slug: "google-maps-seo-ranking-faktoren", title: "Google-Maps-Ranking-Faktoren: belegt oder vermutet?" },
    { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
    { slug: "ultimate-guide-local-seo", title: "Local SEO: Der Leitfaden für lokale Unternehmen" },
  ],
  cta: {
    title: "Liegt es bei Ihnen am Profil oder an der Website?",
    text: "Wir prüfen Ihr Google-Profil und Ihre Website getrennt und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die in Ihrem Fall am meisten bewirken dürften. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
