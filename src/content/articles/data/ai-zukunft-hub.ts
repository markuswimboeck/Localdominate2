import type { V4Article } from "../types";

const article: V4Article = {
  slug: "ai-zukunft-hub",
  lang: "de",
  hub: true,
  seoTitle: "KI-Suche und GEO: alle Anleitungen im Überblick",
  seoDescription:
    "KI-Suche für lokale Betriebe an einem Ort: Übersicht mit KI, KI-Modus, ChatGPT, Perplexity, Copilot, KI-Crawler, llms.txt, Messung und falsche Angaben.",
  h1: "KI-Suche und GEO: alle Anleitungen im Überblick",
  kicker: "Themenübersicht",
  lead:
    "Für Betriebe, die wissen wollen, wie sie in Antworten von Google, ChatGPT, Perplexity, Copilot und Claude vorkommen und was sie dafür tun können. Diese Seite ordnet unsere Anleitungen: Grundlagen, die einzelnen Dienste, Technik, Inhalte und Messung.",
  answer:
    "GEO (Generative Engine Optimization) meint Maßnahmen, mit denen Inhalte in KI-Antworten genannt und als Quelle verlinkt werden. Google schreibt, für Übersichten mit KI und den KI-Modus sei **keine spezielle Optimierung** nötig. Für lokale Betriebe zählen deshalb dieselben Grundlagen: eine lesbare Website, ein gepflegtes Unternehmensprofil, einheitliche Daten und Crawler, die Ihre Seiten lesen dürfen. Eine Platzierung garantiert kein Anbieter.",
  takeaways: [
    "Google schreibt, Optimierung für generative KI-Suche sei weiterhin SEO. Zusätzliche Anforderungen für Übersichten mit KI und den KI-Modus nennt Google nicht.",
    "Die Übersicht mit KI zeigt Google in Deutschland, Österreich und der Schweiz seit März 2025, den KI-Modus seit dem 8. Oktober 2025.",
    "Wer in KI-Antworten als Quelle erscheinen will, lässt die Such-Crawler der Anbieter zu. Das Training sperren Sie getrennt.",
    "llms.txt ist ein freiwilliger Vorschlag. Google schreibt, dass die Google-Suche die Datei ignoriert.",
    "Anbieterübergreifend gibt es keinen einheitlichen Messwert für Sichtbarkeit in KI-Antworten. Sie messen mit festen Stichproben und den Berichten von Google und Bing.",
  ],
  publishedAt: "2026-03-09",
  updatedAt: "2026-10-12",
  readingTime: 7,
  sections: [
    {
      id: "grundlagen",
      title: "Grundlagen: was GEO ist und was sich seit Oktober 2025 geändert hat",
      answer:
        "Beginnen Sie mit dem Begriff und den Änderungen des letzten Jahres. Danach wissen Sie, welche der vielen neuen Funktionen in Ihrem Land überhaupt verfügbar sind.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Was ist GEO?](/blog/was-ist-geo-generative-engine-optimization): der Begriff zwischen Forschung, Google-Aussagen und Agenturversprechen.",
            "[KI-Suche für lokale Unternehmen](/blog/ai-suche-lokale-unternehmen): wo Ihr Betrieb heute erscheinen kann und was Sie zuerst tun.",
            "[KI-Suche 2026: was sich geändert hat](/blog/ai-search-optimization-2026): die Entwicklungen zwischen Oktober 2025 und Oktober 2026.",
            "[KI-Suche oder klassische Suche](/blog/ai-search-vs-traditional-search): was lokale Betriebe anders machen sollten.",
            "[Lokale Suchmaschinenoptimierung 2026](/blog/lokale-suchmaschinenoptimierung-2026): die lokale Suche als Ganzes.",
          ],
        },
      ],
    },
    {
      id: "dienste",
      title: "Die einzelnen KI-Dienste",
      answer:
        "Jeder Anbieter dokumentiert eigene Voraussetzungen, meist den Zugriff seines Crawlers. Diese Anleitungen fassen zusammen, was der jeweilige Anbieter selbst schreibt.",
      blocks: [
        {
          t: "table",
          caption: "KI-Dienste und die passende Anleitung",
          head: ["Dienst", "Anleitung"],
          rows: [
            ["Google: Übersicht mit KI", "[Übersicht mit KI und Local SEO](/blog/google-ai-overviews-local-seo)"],
            ["Google: KI-Modus", "[KI-Modus und Local SEO](/blog/google-ai-mode-local-seo-2026)"],
            ["Google-Unternehmensprofil", "[Unternehmensprofil und KI 2026](/blog/unternehmensprofil-ki-funktionen-2026)"],
            ["ChatGPT", "[ChatGPT Search für lokale Unternehmen](/blog/chatgpt-search-lokale-unternehmen-2026) und [wie ChatGPT Quellen zitiert](/blog/chatgpt-zitiert-lokale-unternehmen)"],
            ["Perplexity und Claude", "[Perplexity und Claude](/blog/perplexity-claude-lokale-sichtbarkeit)"],
            ["Bing und Microsoft Copilot", "[Bing und Copilot](/blog/bing-copilot-local-seo-2026)"],
            ["Siri, Gemini und Alexa", "[Sprachassistenten 2026](/blog/voice-search-sprachassistenten-local-seo-2026)"],
            ["Apple Karten", "[Apple Business](/blog/apple-business-connect-local-seo-2026)"],
            ["KI-Agenten, die buchen und anrufen", "[KI-Agenten für lokale Buchungen](/blog/ai-agents-lokale-buchungen-2026)"],
          ],
        },
      ],
    },
    {
      id: "technik",
      title: "Technik: Crawler, strukturierte Daten und llms.txt",
      answer:
        "Technisch entscheidet zuerst, ob die Such-Crawler der Anbieter Ihre Seiten abrufen dürfen und ob die Inhalte als Text lesbar sind. Für die KI-Funktionen der Google-Suche sind strukturierte Daten nicht erforderlich, eine Nennung garantieren sie nicht.",
      blocks: [
        {
          t: "ul",
          items: [
            "[KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026): Such-Crawler zulassen, Training getrennt sperren.",
            "[llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026): was die Datei kann und was nicht.",
            "[Schema-Strategie für die KI-Suche](/blog/schema-strategie-ai-retrieval): was strukturierte Daten leisten und was ein Mythos ist.",
            "[Entity SEO](/blog/entity-seo-guide): wie Suchmaschinen Ihren Betrieb eindeutig erkennen.",
            "Alle weiteren Technik-Themen: [Technisches Local SEO im Überblick](/blog/technisches-seo-hub).",
          ],
        },
      ],
    },
    {
      id: "inhalte",
      title: "Inhalte, die KI-Antworten richtig wiedergeben",
      answer:
        "Google sagt, dass Sie für KI-Funktionen nicht anders schreiben müssen als für Menschen. Sorgfalt lohnt trotzdem: die Antwort im ersten Satz, wichtige Fakten als Text, jede Kundenfrage an ihrem Platz.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Website-Inhalte für KI-Suche](/blog/website-content-ai-suchmaschinen): Seiten, die KI-Systeme richtig wiedergeben.",
            "[GEO-Content-Briefing](/blog/geo-content-briefing-vorlage-2026): die Vorlage vor dem Schreiben.",
            "[Semantic SEO und Themenautorität](/blog/semantic-seo-topical-authority): das eigene Fachgebiet vollständig abdecken.",
            "[Reddit und Foren in KI-Antworten](/blog/reddit-local-seo-ai-zitate-2026): was belegt ist und wie Betriebe ehrlich mitreden.",
            "[TikTok als Suchort](/blog/tiktok-search-local-seo-2026): was TikTok dokumentiert.",
          ],
        },
      ],
    },
    {
      id: "messen-korrigieren",
      title: "Messen und falsche Angaben korrigieren",
      answer:
        "Kein einzelnes Werkzeug zeigt vollständig, ob KI-Dienste Ihren Betrieb nennen. Sie kombinieren feste Stichproben mit den Berichten von Google und Bing und korrigieren Fehler an der Quelle.",
      blocks: [
        {
          t: "ul",
          items: [
            "[KI-Sichtbarkeit prüfen](/blog/ai-visibility-checklist): die Checkliste für Website und Unternehmensprofil.",
            "[Sichtbarkeit in KI-Antworten messen](/blog/ai-visibility-index-local-seo-metrik): eine eigene, ehrliche Kennzahl.",
            "[KI-Zitate überwachen](/blog/ai-zitat-monitoring-local-seo-2026): die Monatsroutine mit Stichproben, Berichten und Logs.",
            "[Falsche Angaben in KI-Antworten korrigieren](/blog/ai-falschangaben-korrigieren-2026): Quelle finden, berichtigen, melden.",
          ],
        },
      ],
    },
    {
      id: "ki-im-betrieb",
      title: "KI im eigenen Betrieb nutzen",
      answer:
        "Neben der Sichtbarkeit in KI-Antworten geht es um die Arbeit im Betrieb: Entwürfe, Auswertungen und Routinen. Unternehmen, die KI-Systeme einsetzen, müssen Maßnahmen ergreifen, um die KI-Kompetenz ihrer Mitarbeitenden zu fördern.",
      blocks: [
        {
          t: "ul",
          items: [
            "[KI-Tools für Local SEO](/blog/ki-tools-local-seo): wofür sie taugen, was Google erlaubt und was Datenschutz verlangt.",
            "[KI-Kompetenzpflicht nach Art. 4 KI-Verordnung](/blog/ki-kompetenzpflicht-art-4-ki-verordnung): was KMU tun müssen.",
            "[Claude im Team einführen](/blog/claude-im-team-einfuehren): Schritt für Schritt.",
            "[KI an der Hotel-Rezeption](/blog/ki-aufgaben-hotel-rezeption): welche Aufgaben KI übernehmen kann.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Brauche ich für die KI-Suche eine eigene Strategie neben SEO?",
      a: "Nein. Google schreibt, Optimierung für generative KI-Suche sei weiterhin SEO, und nennt für Übersichten mit KI und den KI-Modus keine zusätzlichen Anforderungen. Wichtig ist, dass mehrere Crawler Ihre Website lesen dürfen und Ihre Daten überall gleich sind.",
    },
    {
      q: "Soll ich GPTBot und andere KI-Crawler sperren?",
      a: "Das hängt vom Zweck ab. Die Such-Crawler wie OAI-SearchBot, Claude-SearchBot und PerplexityBot sollten Sie zulassen, wenn Sie als Quelle erscheinen wollen. Das Training sperren Sie getrennt, etwa über GPTBot, ClaudeBot und Google-Extended.",
    },
    {
      q: "Kann mir jemand eine Nennung in ChatGPT oder der Übersicht mit KI garantieren?",
      a: "Nein. Keiner der Anbieter garantiert eine Platzierung. Seriös sind nur Maßnahmen an Website, Profilen und Daten sowie eine ehrliche Messung.",
    },
  ],
  sources: [
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Google’s Guide to Optimizing for Generative AI Features on Google Search", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    { title: "Der KI-Modus startet in Deutschland, Österreich und der Schweiz (8. Oktober 2025)", publisher: "Google Blog Deutschland", url: "https://blog.google/intl/de-de/produkte/suchen-entdecken/ki-modus-startet-in-dach/" },
    { title: "Generative AI performance report (Search)", publisher: "Search Console-Hilfe", url: "https://support.google.com/webmasters/answer/16984139?hl=en" },
    { title: "ChatGPT search", publisher: "OpenAI Help Center", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" },
    { title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?", publisher: "Anthropic, Claude Help Center", url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" },
  ],
  related: [
    { slug: "was-ist-geo-generative-engine-optimization", title: "Was ist GEO?" },
    { slug: "ai-suche-lokale-unternehmen", title: "KI-Suche für lokale Unternehmen" },
    { slug: "ai-visibility-checklist", title: "KI-Sichtbarkeit prüfen" },
    { slug: "google-business-profil-hub", title: "Google-Unternehmensprofil: alle Anleitungen" },
  ],
  cta: {
    title: "Was sagen KI-Dienste heute über Ihren Betrieb?",
    text: "Wir sehen uns Ihr Google-Profil und Ihre Website an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
