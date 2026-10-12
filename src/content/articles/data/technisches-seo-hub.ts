import type { V4Article } from "../types";

const article: V4Article = {
  slug: "technisches-seo-hub",
  lang: "de",
  hub: true,
  seoTitle: "Technisches Local SEO: alle Anleitungen im Überblick",
  seoDescription:
    "Technisches Local SEO an einem Ort: strukturierte Daten, mobile Website, Ladezeit, Standortseiten, Sprachsuche, KI-Crawler und Messung für lokale Betriebe.",
  h1: "Technisches Local SEO: alle Anleitungen im Überblick",
  kicker: "Themenübersicht",
  lead:
    "Für Inhaber und Webverantwortliche, die ihre Website technisch sauber für die lokale Suche aufstellen wollen. Diese Seite ordnet unsere Anleitungen von den strukturierten Daten über die mobile Website bis zur Messung.",
  answer:
    "Technisches Local SEO sorgt dafür, dass Suchmaschinen und KI-Dienste Ihre Website lesen, verstehen und Ihrem Betrieb zuordnen können. Google indexiert und bewertet Websites anhand ihrer mobilen Version. Für die meisten Betriebe reichen strukturierte Daten vom Typ LocalBusiness, die mit dem sichtbaren Text übereinstimmen. Dazu kommen schnelle Seiten, eine Seite je Leistung oder Standort und Crawler, die Ihre Seiten abrufen dürfen.",
  takeaways: [
    "Google bewertet Websites anhand ihrer mobilen Version. Adresse, Öffnungszeiten und strukturierte Daten müssen auf dem Handy vorhanden sein.",
    "LocalBusiness mit dem genauesten Untertyp reicht für die meisten Betriebe. FAQ- und Anleitungs-Snippets zeigt Google nicht mehr.",
    "Bewertungssterne für das eigene Unternehmen zeigt Google nicht an, auch nicht bei eingebundenen Google-Bewertungen.",
    "Für die KI-Funktionen der Google-Suche brauchen Sie laut Google kein besonderes Schema Markup.",
    "Den eingestellten Test auf Optimierung für Mobilgeräte ersetzt die Prüfung am eigenen Gerät und in der Search Console.",
  ],
  publishedAt: "2026-03-09",
  updatedAt: "2026-10-12",
  readingTime: 5,
  sections: [
    {
      id: "einstieg",
      title: "Einstieg: der technische Überblick",
      answer:
        "Wer die Technik einmal vollständig durchgehen will, beginnt mit dem Gesamtleitfaden und prüft dann die einzelnen Bausteine.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Technisches Local SEO](/blog/technisches-local-seo-guide): der Gesamtleitfaden für lokale Websites.",
            "[Local SEO Audit](/blog/local-seo-audit-checkliste): die Checkliste zum Selbstprüfen, mit einem eigenen Teil zur Website.",
          ],
        },
      ],
    },
    {
      id: "strukturierte-daten",
      title: "Strukturierte Daten",
      answer:
        "Strukturierte Daten beschreiben Ihren Betrieb in einer Form, die Maschinen lesen. Entscheidend ist, dass Markup, sichtbarer Text und Unternehmensprofil übereinstimmen.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Schema Markup für lokale Unternehmen](/blog/schema-markup-local-seo): was Google 2026 nutzt und was Sie weglassen können.",
            "[LocalBusiness Schema implementieren](/blog/localbusiness-schema-implementierung): Anleitung mit Code-Beispielen.",
            "[Review Schema richtig einsetzen](/blog/review-schema-implementierung): wann Google Bewertungssterne zeigt.",
            "[Schema-Strategie für die KI-Suche](/blog/schema-strategie-ai-retrieval): was strukturierte Daten für KI-Antworten leisten und was ein Mythos ist.",
            "[Schema-Strategie: welcher Typ wann](/blog/schema-strategie-dokument): Article, FAQPage, HowTo und LocalBusiness im Vergleich.",
            "[Entity SEO](/blog/entity-seo-guide): wie Google Ihren Betrieb eindeutig erkennt, mit sameAs und einheitlichen Daten.",
          ],
        },
        {
          t: "note",
          label: "Stand 2026",
          text: "FAQ-Rich-Results zeigt Google seit dem 7. Mai 2026 nicht mehr an. FAQPage-Markup schadet nicht, bringt aber keine Darstellung in den Suchergebnissen mehr.",
        },
      ],
    },
    {
      id: "mobil-und-ladezeit",
      title: "Mobile Website und Ladezeit",
      answer:
        "Google bewertet Websites anhand ihrer mobilen Version. Auf dem Handy müssen Anruf und Route mit einem Tippen funktionieren und die Seite muss schnell und stabil laden.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Mobile Local SEO](/blog/mobile-local-seo): der Weg vom Suchtreffer zum Anruf auf dem Smartphone.",
            "[Core Web Vitals für lokale Websites](/blog/core-web-vitals-local-seo): Ladezeit, Reaktionszeit und stabile Darstellung.",
          ],
        },
      ],
    },
    {
      id: "seitenstruktur",
      title: "Seitenstruktur: Leistungs- und Standortseiten",
      answer:
        "Jede wichtige Leistung und jeder echte Standort bekommt eine eigene Seite mit eigenem Inhalt. Seiten, die sich nur im Ortsnamen unterscheiden, wertet Google als Brückenseiten, die gegen die Spamrichtlinien verstoßen.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Lokale Landing Pages erstellen](/blog/lokale-landing-pages): eine Seite pro Standort.",
            "[Mehrere Standorte bei Google verwalten](/blog/gbp-mehrere-standorte): Profile und Standortseiten zusammen planen.",
            "[Local SEO Keywords finden](/blog/local-seo-keywords-finden): jedem wichtigen Suchbegriff genau eine Seite zuordnen.",
          ],
        },
      ],
    },
    {
      id: "sprache-und-ki",
      title: "Sprachsuche und KI-Crawler",
      answer:
        "Gesprochene Fragen werden aus denselben Daten beantwortet wie die normale Suche. Für KI-Antworten zählt technisch vor allem, dass die Crawler der Anbieter Ihre Seiten abrufen dürfen.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Sprachsuche für lokale Betriebe](/blog/local-seo-voice-search): welche Angaben gesprochene Fragen beantworten.",
            "[KI-Crawler steuern](/blog/ai-crawler-steuern-gptbot-claudebot-2026): GPTBot, ClaudeBot, PerplexityBot und Google-Extended richtig einstellen.",
            "[llms.txt für lokale Unternehmen](/blog/llms-txt-lokale-unternehmen-2026): was die Datei kann und was nicht.",
            "Alle Themen zur KI-Suche: [KI-Suche und GEO im Überblick](/blog/ai-zukunft-hub).",
          ],
        },
      ],
    },
    {
      id: "messen",
      title: "Messen",
      answer:
        "Technische Verbesserungen sehen Sie in der Search Console und in den Leistungsdaten des Unternehmensprofils, nicht im Gefühl, oben zu stehen.",
      blocks: [
        {
          t: "ul",
          items: [
            "[Local SEO Tracking](/blog/local-seo-tracking-kpis): Kennzahlen und Berichte einrichten.",
            "[Local SEO Reporting Template](/blog/local-seo-reporting-template): die Vorlage für den Monatsbericht.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Welches Schema brauche ich als lokaler Betrieb mindestens?",
      a: "LocalBusiness mit dem genauesten Untertyp, ergänzt um Organization. Wichtig ist, dass die Angaben mit dem sichtbaren Inhalt und Ihrem Unternehmensprofil übereinstimmen.",
    },
    {
      q: "Lohnt sich FAQPage-Markup noch?",
      a: "Für die Darstellung in der Google-Suche nicht mehr, weil Google FAQ-Rich-Results seit dem 7. Mai 2026 nicht mehr zeigt. Das Markup darf bleiben.",
    },
    {
      q: "Wie prüfe ich, ob meine Website mobil funktioniert?",
      a: "Am eigenen Smartphone: Adresse, Öffnungszeiten, Anruf und Route müssen funktionieren. Dazu kommen die Berichte in der Search Console. Den früheren Test auf Optimierung für Mobilgeräte gibt es nicht mehr.",
    },
  ],
  sources: [
    { title: "Strukturierte Daten für lokale Unternehmen (LocalBusiness)", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de" },
    { title: "Updates zur Google-Suchdokumentation (FAQ-Rich-Results eingestellt, Mai 2026)", publisher: "Google Search Central", url: "https://developers.google.com/search/updates" },
    { title: "Making Review Rich Results more helpful (16. September 2019)", publisher: "Google Search Central Blog", url: "https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful" },
    { title: "AI features and your website", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "Spamrichtlinien für die Google-Websuche", publisher: "Google Search Central", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=de" },
  ],
  related: [
    { slug: "schema-markup-local-seo", title: "Schema Markup für lokale Unternehmen" },
    { slug: "mobile-local-seo", title: "Mobile Local SEO" },
    { slug: "ai-zukunft-hub", title: "KI-Suche und GEO: alle Anleitungen" },
    { slug: "google-maps-seo-hub", title: "Google Maps SEO: alle Anleitungen" },
  ],
  cta: {
    title: "Ist Ihre Website technisch bereit?",
    text: "Wir sehen uns Ihre Website und Ihr Google-Profil an und schicken Ihnen innerhalb von zwei Werktagen bis zu drei Punkte, die Sie zuerst angehen sollten. Kostenlos und ohne Verpflichtung.",
  },
};

export default article;
