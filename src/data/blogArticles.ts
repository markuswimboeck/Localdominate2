import { Language } from "@/i18n/translations";
import { getArticleReviewMeta } from "@/data/articleReviewDates";

export interface BlogArticleContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
}

export interface BlogArticle {
  slug: string;
  de: BlogArticleContent;
  en: BlogArticleContent;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  icon: string;
  keywords: string[];
  featured?: boolean;
}

// Helper type for components that need resolved content
export interface ResolvedBlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  icon: string;
  keywords: string[];
  featured?: boolean;
  lastReviewedAt?: string;
  lastReviewedBy?: string;
}

export const blogArticles: BlogArticle[] = [
  // === KI IM UNTERNEHMEN (AI consulting, /de/ki) ===
  {
    slug: "claude-im-team-einfuehren",
    de: {
      title: "Claude im Team einführen: Schritt für Schritt",
      metaTitle: "Claude im Team einführen: Schritt für Schritt",
      metaDescription: "So führen Sie Claude in Firmen mit 5 bis 200 Mitarbeitenden ein: Plan wählen, Projekte je Abteilung, Datenregeln, Schulung nach Art. 4 KI-VO und Zeit messen.",
      excerpt: "So führen Sie Claude in Firmen mit 5 bis 200 Mitarbeitenden ein: Plan wählen, Projekte je Abteilung, Datenregeln, Schulung nach Art. 4 KI-VO und Zeit messen.",
      category: "KI im Unternehmen"
    },
    en: {
      title: "Rolling out Claude to your team, step by step",
      metaTitle: "Rolling out Claude to your team, step by step",
      metaDescription: "How a company with 5 to 200 people introduces Claude: plan, workspace, projects per department, data rules, training under Art. 4 AI Act and measuring time.",
      excerpt: "How a company with 5 to 200 people introduces Claude: plan, workspace, projects per department, data rules, training under Art. 4 AI Act and measuring time.",
      category: "AI at work"
    },
    readingTime: 13,
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    icon: "🤖",
    keywords: ["claude team", "claude einführen", "claude im unternehmen", "ki einführung kmu", "claude projekte"]
  },
  {
    slug: "ki-kompetenzpflicht-art-4-ki-verordnung",
    de: {
      title: "KI-Kompetenzpflicht nach Art. 4 KI-Verordnung: Was KMU jetzt tun müssen",
      metaTitle: "KI-Kompetenz nach Art. 4 KI-Verordnung: Pflichten für KMU",
      metaDescription: "Art. 4 KI-Verordnung gilt seit Februar 2025 für jedes Unternehmen, das ChatGPT, Claude oder Copilot nutzt. Was seit Juli 2026 gilt, plus Plan in fünf Schritten.",
      excerpt: "Art. 4 KI-Verordnung gilt seit Februar 2025 für jedes Unternehmen, das ChatGPT, Claude oder Copilot nutzt. Was seit Juli 2026 gilt, plus Plan in fünf Schritten.",
      category: "KI im Unternehmen"
    },
    en: {
      title: "AI literacy under Article 4 of the AI Act: what SMEs must do",
      metaTitle: "AI literacy under Article 4 of the AI Act: what SMEs must do",
      metaDescription: "Article 4 of the EU AI Act applies to every company using AI tools. What the amended duty means for SMEs, who supervises it and a plan in five steps.",
      excerpt: "Article 4 of the EU AI Act applies to every company using AI tools. What the amended duty means for SMEs, who supervises it and a plan in five steps.",
      category: "AI at work"
    },
    readingTime: 12,
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    icon: "⚖️",
    keywords: ["ki kompetenz", "art 4 ki verordnung", "ki-kompetenzpflicht", "ai literacy", "ki schulung mitarbeiter"]
  },
  {
    slug: "ki-aufgaben-hotel-rezeption",
    de: {
      title: "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann",
      metaTitle: "KI an der Hotel-Rezeption: Welche Aufgaben sie übernimmt",
      metaDescription: "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann: Anfragen, Angebote, Bewertungen, Berichte. Mit Aufgaben-Landkarte, Datenschutz und KI-Kompetenz.",
      excerpt: "Welche Aufgaben KI an der Hotel-Rezeption übernehmen kann: Anfragen, Angebote, Bewertungen, Berichte. Mit Aufgaben-Landkarte, Datenschutz und KI-Kompetenz.",
      category: "KI in der Hotellerie"
    },
    en: {
      title: "Which front-office tasks AI can take over in a hotel",
      metaTitle: "Which front-office tasks AI can take over in a hotel",
      metaDescription: "Which hotel front-office tasks AI can do, draft or should leave to people: enquiries, offers, reviews, reports. With a task map, data protection and AI literacy.",
      excerpt: "Which hotel front-office tasks AI can do, draft or should leave to people: enquiries, offers, reviews, reports. With a task map, data protection and AI literacy.",
      category: "AI in hospitality"
    },
    readingTime: 12,
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    icon: "🛎️",
    keywords: ["ki hotel", "ki rezeption", "ki hotellerie", "hotel automatisierung", "ki gästeanfragen"]
  },
  // === PILLAR PAGE: ULTIMATE GUIDE LOCAL SEO ===
  {
    slug: "ultimate-guide-local-seo",
    de: {
      title: "Local SEO: Der Leitfaden für lokale Unternehmen",
      metaTitle: "Local SEO Leitfaden 2026: So werden Sie lokal gefunden",
      metaDescription: "Local SEO für Betriebe in Deutschland, Österreich und der Schweiz: wie Google lokal sortiert, was im Unternehmensprofil zählt und ein Plan in zehn Schritten.",
      excerpt: "Local SEO für Betriebe in Deutschland, Österreich und der Schweiz: wie Google lokal sortiert, was im Unternehmensprofil zählt und ein Plan in zehn Schritten.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO: The Ultimate Guide for Local Businesses 2026",
      metaTitle: "Local SEO Guide 2026: Complete Guide for Top Rankings",
      metaDescription: "The most comprehensive Local SEO guide for the DACH region: ranking factors, Google Business Profile, reviews, NAP, Schema Markup & 10-step strategy.",
      excerpt: "Everything about Local SEO in one guide: From Google Business to ranking factors and a 10-step strategy — with examples from Germany, Austria and Switzerland.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "🏆",
    keywords: ["local seo", "local seo guide", "lokale suchmaschinenoptimierung", "local seo strategie", "google business profil", "local seo ranking faktoren", "local seo dach"],
    featured: true
  },
  // === FEATURED: KOSTENLOSES SEO GUIDE ===
  {
    slug: "kostenloses-seo-guide",
    de: {
      title: "Kostenloses SEO: Was Sie ohne Budget selbst erledigen können",
      metaTitle: "Kostenloses SEO: Anleitung für lokale Betriebe 2026",
      metaDescription: "SEO ohne Budget: welche kostenlosen Google-Werkzeuge genügen, was Sie selbst erledigen können und welche alten Tipps Sie sich sparen. Mit Plan in 8 Schritten.",
      excerpt: "SEO ohne Budget: welche kostenlosen Google-Werkzeuge genügen, was Sie selbst erledigen können und welche alten Tipps Sie sich sparen. Mit Plan in 8 Schritten.",
      category: "Strategie"
    },
    en: {
      title: "Free SEO: The Ultimate Beginner's Guide 2026",
      metaTitle: "Free SEO: 50+ Free Strategies & Tools | Guide 2026",
      metaDescription: "Learn SEO completely free! 50+ free tools, step-by-step instructions and proven strategies. The most comprehensive free SEO guide.",
      excerpt: "Everything you need to know about SEO - without spending a cent. From Google Business to Technical SEO.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-01-09",
    updatedAt: "2026-10-12",
    icon: "💡",
    keywords: ["kostenloses seo", "seo kostenlos", "gratis seo tools", "seo für anfänger", "local seo kostenlos", "seo lernen"],
    featured: true
  },
  // === BESTEHENDE ARTIKEL ===
  {
    slug: "local-seo-keywords-finden",
    de: {
      title: "Local SEO Keywords finden: So suchen Ihre Kunden wirklich",
      metaTitle: "Local SEO Keywords finden: Anleitung für Betriebe",
      metaDescription: "Lokale Keywords finden ohne teure Tools: Kundensprache, Google-Vorschläge, Search Console und Profildaten nutzen und jedem Begriff die richtige Seite zuordnen.",
      excerpt: "Lokale Keywords finden ohne teure Tools: Kundensprache, Google-Vorschläge, Search Console und Profildaten nutzen und jedem Begriff die richtige Seite zuordnen.",
      category: "Strategie",
    },
    en: {
      title: "Finding Local SEO Keywords: The Complete Keyword Research Guide 2026",
      metaTitle: "Finding Local SEO Keywords: Keyword Research Guide 2026",
      metaDescription: "Find the perfect local keywords for your business. Free tools, step-by-step guide, and 10 mistakes you must avoid.",
      excerpt: "The complete guide to local keyword research. Learn which keywords bring customers and how to find them.",
      category: "Strategy",
    },
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-09",
    icon: "🔍",
    keywords: ["local seo keywords", "keyword research", "local keywords"],
    featured: true
  },
  {
    slug: "google-maps-ranking-verbessern",
    de: {
      title: "Google-Maps-Ranking verbessern: messen, verstehen, gezielt handeln",
      metaTitle: "Google-Maps-Ranking verbessern: Leitfaden für Betriebe",
      metaDescription: "Wie Google Maps lokale Treffer sortiert, wie Sie Ihr Ranking mit einem Messraster prüfen und welche Schritte im Profil, bei Bewertungen und Website wirken.",
      excerpt: "Wie Google Maps lokale Treffer sortiert, wie Sie Ihr Ranking mit einem Messraster prüfen und welche Schritte im Profil, bei Bewertungen und Website wirken.",
      category: "Local SEO",
    },
    en: {
      title: "Improve Google Maps Ranking: 7-Step Action Plan 2026",
      metaTitle: "Improve Google Maps Ranking: 7-Step Plan 2026",
      metaDescription: "Improve your Google Maps ranking with this concrete 7-step action plan. GBP optimization, reviews, citations and more.",
      excerpt: "The concrete 7-step action plan to improve your Google Maps ranking — with practical examples and checklist.",
      category: "Local SEO",
    },
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-09",
    icon: "📍",
    keywords: ["google maps ranking verbessern", "maps ranking steigern", "google maps optimierung anleitung"],
    featured: true
  },
  {
    slug: "google-bewertungen-bekommen",
    de: {
      title: "Google-Bewertungen bekommen: So fragen Sie richtig",
      metaTitle: "Google-Bewertungen bekommen: fair und regelkonform",
      metaDescription: "Mehr Google-Bewertungen ohne Regelverstoß: Link und QR-Code, der richtige Moment zum Fragen, Antworten mit Datenschutz und Melden falscher Rezensionen.",
      excerpt: "Mehr Google-Bewertungen ohne Regelverstoß: Link und QR-Code, der richtige Moment zum Fragen, Antworten mit Datenschutz und Melden falscher Rezensionen.",
      category: "Bewertungen",
    },
    en: {
      title: "Get Google Reviews: 7 Proven Strategies",
      metaTitle: "Get Google Reviews: 7 Strategies for 2026",
      metaDescription: "Get more Google reviews! 7 ethical strategies for more reviews. With templates and QR code tips.",
      excerpt: "Learn 7 proven methods to get more authentic Google reviews from satisfied customers.",
      category: "Reviews",
    },
    readingTime: 11,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-10",
    icon: "⭐",
    keywords: ["google reviews", "get reviews", "customer reviews"]
  },
  {
    slug: "local-seo-fuer-restaurants",
    de: {
      title: "Local SEO für Restaurants: So finden Gäste Ihren Tisch",
      metaTitle: "Local SEO für Restaurants: mehr Gäste über Google",
      metaDescription: "Local SEO für Restaurants, Cafés und Bars: Speisekarte, Öffnungszeiten, Reservierungslinks, Fotos und Bewertungen im Google-Profil richtig pflegen.",
      excerpt: "Local SEO für Restaurants, Cafés und Bars: Speisekarte, Öffnungszeiten, Reservierungslinks, Fotos und Bewertungen im Google-Profil richtig pflegen.",
      category: "Gastronomie",
    },
    en: {
      title: "Local SEO for Restaurants: More Guests Through Google",
      metaTitle: "Local SEO for Restaurants: More Guests 2026",
      metaDescription: "Local SEO explained specifically for restaurants. From menu optimization to image strategy. Get more reservations now!",
      excerpt: "Specifically for restaurateurs: How to optimize your restaurant for local searches and fill more tables.",
      category: "Restaurants",
    },
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-12",
    icon: "🍽️",
    keywords: ["restaurant seo", "local seo restaurant", "gastro marketing"]
  },
  {
    slug: "google-my-business-optimieren",
    de: {
      title: "Google Unternehmensprofil optimieren: die praktische Anleitung",
      metaTitle: "Google Unternehmensprofil optimieren: Anleitung 2026",
      metaDescription: "Google Unternehmensprofil (früher Google My Business) Feld für Feld einrichten: Bestätigung, Name, Kategorien, Zeiten, Fotos, Beiträge, Zugriff und Sperrungen.",
      excerpt: "Google Unternehmensprofil (früher Google My Business) Feld für Feld einrichten: Bestätigung, Name, Kategorien, Zeiten, Fotos, Beiträge, Zugriff und Sperrungen.",
      category: "Google Business",
    },
    en: {
      title: "Optimize Google My Business: Step-by-Step Guide",
      metaTitle: "Optimize Google My Business: Guide 2026",
      metaDescription: "Optimize your Google My Business profile in 10 steps. Complete guide with screenshots. More visibility guaranteed!",
      excerpt: "The complete guide to optimizing your Google Business Profile for maximum local visibility.",
      category: "Google Business",
    },
    readingTime: 13,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-10",
    icon: "📊",
    keywords: ["google my business", "gmb optimize", "google business profile"]
  },
  {
    slug: "lokale-suchmaschinenoptimierung-2026",
    de: {
      title: "Lokale Suchmaschinenoptimierung 2026: Was sich geändert hat und was Sie jetzt tun sollten",
      metaTitle: "Lokale Suchmaschinenoptimierung 2026: Was sich ändert",
      metaDescription: "Lokale Suchmaschinenoptimierung 2026: KI-Übersichten, KI-Modus, ChatGPT, Apple Business und strengere Bewertungsregeln. Was neu ist und was Betriebe jetzt tun.",
      excerpt: "Lokale Suchmaschinenoptimierung 2026: KI-Übersichten, KI-Modus, ChatGPT, Apple Business und strengere Bewertungsregeln. Was neu ist und was Betriebe jetzt tun.",
      category: "Trends",
    },
    en: {
      title: "Local Search Engine Optimization 2026: What Really Works",
      metaTitle: "Local SEO 2026: Trends & Strategies That Work",
      metaDescription: "Local search engine optimization 2026: Latest trends, AI influence, and voice search. Stay ahead of the competition!",
      excerpt: "The most important trends and strategies for local SEO in 2026. Stay one step ahead of your competition.",
      category: "Trends",
    },
    readingTime: 11,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-11",
    icon: "🚀",
    keywords: ["local seo", "search engine optimization", "local seo 2026"],
    featured: true
  },
  {
    slug: "nap-konsistenz-local-seo",
    de: {
      title: "NAP-Konsistenz: So bringen Sie Ihre Firmendaten überall auf einen Stand",
      metaTitle: "NAP-Konsistenz: Firmendaten finden, prüfen, korrigieren",
      metaDescription: "NAP-Konsistenz für Betriebe in DACH: wie Sie widersprüchliche Firmendaten finden, Verzeichnisse und Google-Profil korrigieren und nach Umzug sauber bleiben.",
      excerpt: "NAP-Konsistenz für Betriebe in DACH: wie Sie widersprüchliche Firmendaten finden, Verzeichnisse und Google-Profil korrigieren und nach Umzug sauber bleiben.",
      category: "Local SEO",
    },
    en: {
      title: "NAP Consistency: Why Uniform Data Boosts Your Ranking",
      metaTitle: "NAP Consistency for Local SEO: The Ultimate Guide 2026",
      metaDescription: "Keep NAP (Name, Address, Phone) consistent for better rankings. Complete guide with checklist and 15+ FAQ.",
      excerpt: "Learn why consistent business data (NAP) is crucial for your local ranking.",
      category: "Local SEO",
    },
    readingTime: 11,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-10",
    icon: "📋",
    keywords: ["nap consistency", "citations", "business directories", "local seo"]
  },
  {
    slug: "local-seo-handwerker",
    de: {
      title: "Local SEO für Handwerker: So finden Kunden Ihren Betrieb",
      metaTitle: "Local SEO für Handwerker: Mehr Anfragen aus der Region",
      metaDescription: "Local SEO für Handwerksbetriebe in DACH: Einzugsgebiet im Google-Profil, eine Seite je Leistung, ehrlicher Notdienst, echte Fotos und Bewertungen nach Abnahme.",
      excerpt: "Local SEO für Handwerksbetriebe in DACH: Einzugsgebiet im Google-Profil, eine Seite je Leistung, ehrlicher Notdienst, echte Fotos und Bewertungen nach Abnahme.",
      category: "Branchen",
    },
    en: {
      title: "Local SEO for Contractors: More Jobs Through Google",
      metaTitle: "Local SEO for Contractors: Complete Guide 2026",
      metaDescription: "Local SEO specifically for contractors. From electricians to painters - get more local jobs through Google.",
      excerpt: "Specifically for contractors: How to optimize your online presence for more local customer inquiries.",
      category: "Industries",
    },
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-10",
    icon: "🔧",
    keywords: ["contractor seo", "local seo contractors", "contractor marketing"]
  },
  {
    slug: "local-seo-audit-checkliste",
    de: {
      title: "Local SEO Audit: Die Checkliste zum Selbstprüfen",
      metaTitle: "Local SEO Audit: Die Checkliste für lokale Betriebe",
      metaDescription: "Local SEO Audit in ein bis zwei Stunden: Google-Profil, Website, Verzeichnisse, Bewertungen, KI-Sichtbarkeit und Messung prüfen, mit klaren nächsten Schritten.",
      excerpt: "Local SEO Audit in ein bis zwei Stunden: Google-Profil, Website, Verzeichnisse, Bewertungen, KI-Sichtbarkeit und Messung prüfen, mit klaren nächsten Schritten.",
      category: "Strategie",
    },
    en: {
      title: "Local SEO Audit: Status Analysis with 50+ Diagnostic Points & Scoring",
      metaTitle: "Local SEO Audit: Status Analysis & Diagnosis | 2026",
      metaDescription: "Conduct a Local SEO audit: 50+ diagnostic points with scoring system. Systematically analyze GBP, website, citations and reviews.",
      excerpt: "Conduct a professional Local SEO status analysis: 50+ diagnostic points with scoring and action recommendations.",
      category: "Strategy",
    },
    readingTime: 11,
    publishedAt: "2026-01-07",
    updatedAt: "2026-10-10",
    icon: "✅",
    keywords: ["local seo audit", "seo diagnose", "local seo analyse", "seo scoring"],
    featured: true
  },

  // === NEUE ARTIKEL: REGIONEN ===
  {
    slug: "local-seo-schweiz",
    de: {
      title: "Local SEO in der Schweiz: Sprachen, Verzeichnisse und Recht",
      metaTitle: "Local SEO Schweiz: Sprachen, Verzeichnisse und Recht",
      metaDescription: "Local SEO für Schweizer KMU: Sprachversionen mit hreflang de-CH, fr-CH und it-CH, local.ch und search.ch, Preise in CHF, revDSG und Impressum nach UWG.",
      excerpt: "Local SEO für Schweizer KMU: Sprachversionen mit hreflang de-CH, fr-CH und it-CH, local.ch und search.ch, Preise in CHF, revDSG und Impressum nach UWG.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Switzerland: The Complete Guide for SMEs",
      metaTitle: "Local SEO Switzerland | SME Guide 2026",
      metaDescription: "The national Local SEO guide for Swiss companies. Multilingualism, Swiss directories and Google Business for all cantons.",
      excerpt: "How Swiss SMEs can attract more customers in their region through local search engine optimization.",
      category: "Regions"
    },
    readingTime: 13,
    publishedAt: "2026-01-10",
    updatedAt: "2026-10-10",
    icon: "🇨🇭",
    keywords: ["local seo schweiz", "schweizer seo", "kmu marketing", "google business schweiz", "lokales marketing schweiz"],
    featured: true
  },
  {
    slug: "local-seo-zuerich",
    de: {
      title: "Local SEO in Zürich: gefunden werden, wo Ihre Kunden sind",
      metaTitle: "Local SEO Zürich: sichtbar in Ihrem Kreis und Quartier",
      metaDescription: "Local SEO in Zürich: warum die Entfernung in der dichten Stadt so stark zählt, wie Sie Quartiere ohne Brückenseiten nutzen und wie Sie über die Stadt messen.",
      excerpt: "Local SEO in Zürich: warum die Entfernung in der dichten Stadt so stark zählt, wie Sie Quartiere ohne Brückenseiten nutzen und wie Sie über die Stadt messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Zurich: How to Dominate the Zurich Market",
      metaTitle: "Local SEO Zurich | Complete Guide 2026",
      metaDescription: "The ultimate Local SEO guide for Zurich businesses. Districts, keywords, directories and strategies for Switzerland's largest city.",
      excerpt: "How to reach position 1 in local Google searches as a Zurich business.",
      category: "Regions"
    },
    readingTime: 12,
    publishedAt: "2026-01-12",
    updatedAt: "2026-10-10",
    icon: "🏔️",
    keywords: ["local seo zürich", "seo zürich", "google ranking zürich", "marketing zürich", "unternehmen zürich"],
    featured: true
  },
  {
    slug: "local-seo-muenchen",
    de: {
      title: "Local SEO in München: sichtbar in den Vierteln, die Sie wirklich bedienen",
      metaTitle: "Local SEO München: gefunden werden, wo Sie arbeiten",
      metaDescription: "Local SEO für Betriebe in München: wie Entfernung in der Großstadt wirkt, wie Sie Stadtbezirke ohne Brückenseiten nutzen und Ihr Ranking im Raster messen.",
      excerpt: "Local SEO für Betriebe in München: wie Entfernung in der Großstadt wirkt, wie Sie Stadtbezirke ohne Brückenseiten nutzen und Ihr Ranking im Raster messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Munich: The Guide for Bavarian Businesses",
      metaTitle: "Local SEO Munich | Bavaria Guide 2026",
      metaDescription: "Local SEO specifically for Munich and Bavaria. District keywords, local directories and strategies for the Bavarian capital.",
      excerpt: "From Schwabing to Giesing: How to be found throughout Munich on Google.",
      category: "Regions"
    },
    readingTime: 12,
    publishedAt: "2026-01-14",
    updatedAt: "2026-10-10",
    icon: "🥨",
    keywords: ["local seo münchen", "seo münchen", "google ranking münchen", "marketing münchen", "bayerische unternehmen"],
    featured: true
  },

  // === REGIONALE TRENDS ===
  {
    slug: "local-seo-trends-schweiz",
    de: {
      title: "Local SEO in der Schweiz 2026: Was neu ist und was es für KMU bedeutet",
      metaTitle: "Local SEO Schweiz 2026: Was für KMU neu ist",
      metaDescription: "Local SEO Schweiz 2026: KI-Übersichten in vier Sprachen, neue BFS-Zahlen zur KI-Nutzung, der Cookie-Leitfaden des EDÖB und der Stand zur Barrierefreiheit.",
      excerpt: "Local SEO Schweiz 2026: KI-Übersichten in vier Sprachen, neue BFS-Zahlen zur KI-Nutzung, der Cookie-Leitfaden des EDÖB und der Stand zur Barrierefreiheit.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Trends Switzerland 2026: What SMEs Need to Know",
      metaTitle: "Local SEO Trends Switzerland 2026 | DACH Report",
      metaDescription: "The most important Local SEO trends for the Swiss market 2026. AI search, multilingual strategies, cantonal optimization and industry developments.",
      excerpt: "From AI search to cantonal SEO: The trends shaping the Swiss Local SEO market in 2026.",
      category: "Regions"
    },
    readingTime: 9,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-11",
    icon: "🇨🇭",
    keywords: ["local seo trends schweiz", "seo schweiz 2026", "local seo trends", "schweizer seo", "ai search schweiz"],
    featured: true
  },
  {
    slug: "local-seo-trends-deutschland",
    de: {
      title: "Local SEO in Deutschland 2026: Was hierzulande anders ist",
      metaTitle: "Local SEO Deutschland 2026: Recht, Verzeichnisse, KI",
      metaDescription: "Local SEO in Deutschland 2026: Impressum nach DDG, Bewertungsregeln im UWG, Cookies nach TDDDG, Barrierefreiheit seit Juni 2025 und Telefonbuchdaten.",
      excerpt: "Local SEO in Deutschland 2026: Impressum nach DDG, Bewertungsregeln im UWG, Cookies nach TDDDG, Barrierefreiheit seit Juni 2025 und Telefonbuchdaten.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Trends Germany 2026: The Big Trend Report",
      metaTitle: "Local SEO Trends Germany 2026 | Report",
      metaDescription: "The most important Local SEO trends in Germany 2026. AI search, regional differences, industry growth and technical developments.",
      excerpt: "AI search, voice search and regional differences: What German SMEs can expect in Local SEO 2026.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-11",
    icon: "🇩🇪",
    keywords: ["local seo trends deutschland", "seo deutschland 2026", "local seo trends", "google seo trends", "ai search deutschland"],
    featured: true
  },
  {
    slug: "local-seo-trends-oesterreich",
    de: {
      title: "Local SEO in Österreich 2026: Was hier anders ist als in Deutschland",
      metaTitle: "Local SEO Österreich 2026: Was nur hier gilt",
      metaDescription: "Local SEO in Österreich 2026: Impressum nach ECG, Offenlegung nach Mediengesetz, Barrierefreiheitsgesetz, österreichische Suchbegriffe, Herold, Saisonbetriebe.",
      excerpt: "Local SEO in Österreich 2026: Impressum nach ECG, Offenlegung nach Mediengesetz, Barrierefreiheitsgesetz, österreichische Suchbegriffe, Herold, Saisonbetriebe.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Trends Austria 2026: The AT Market in Transition",
      metaTitle: "Local SEO Trends Austria 2026 | Report",
      metaDescription: "The most important Local SEO trends for Austria 2026. Federal state strategies, Austrian German as SEO advantage and industry growth.",
      excerpt: "From Vienna to Vorarlberg: The Local SEO trends Austrian businesses need to know in 2026.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🇦🇹",
    keywords: ["local seo trends österreich", "seo österreich 2026", "local seo trends", "google.at seo", "wahlarzt seo"],
    featured: true
  },

  // === NEUE ARTIKEL: BRANCHEN ===
  {
    slug: "local-seo-aerzte-praxen",
    de: {
      title: "Local SEO für Arztpraxen: sichtbar werden, ohne Berufsrecht und Schweigepflicht zu verletzen",
      metaTitle: "Local SEO für Arztpraxen: Google-Profil, Recht, Bewertungen",
      metaDescription: "Local SEO für Ärzte, Zahnärzte und Therapeuten in DACH: Praxis- oder Arztprofil bei Google, Bewertungen mit Schweigepflicht, Werberecht und Leistungsseiten.",
      excerpt: "Local SEO für Ärzte, Zahnärzte und Therapeuten in DACH: Praxis- oder Arztprofil bei Google, Bewertungen mit Schweigepflicht, Werberecht und Leistungsseiten.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Doctors & Practices: Patient Acquisition Through Google",
      metaTitle: "Local SEO for Doctors | Practice Marketing 2026",
      metaDescription: "How medical practices can attract more patients through Local SEO. Doctor portals, YMYL requirements and Google Business for medical practices.",
      excerpt: "The complete guide for doctors, dentists and medical practices for local patient acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-18",
    updatedAt: "2026-10-10",
    icon: "🏥",
    keywords: ["arzt seo", "praxis marketing", "local seo ärzte", "patientengewinnung", "jameda"],
    featured: false
  },
  {
    slug: "local-seo-anwaelte-kanzleien",
    de: {
      title: "Local SEO für Anwälte und Kanzleien: gefunden werden im Rahmen des Berufsrechts",
      metaTitle: "Local SEO für Kanzleien: Google-Profil und Berufsrecht",
      metaDescription: "Local SEO für Anwälte und Steuerberater in DACH: Kanzlei- und Anwaltsprofil bei Google, Werberecht nach BRAO und BORA, Bewertungen mit Schweigepflicht.",
      excerpt: "Local SEO für Anwälte und Steuerberater in DACH: Kanzlei- und Anwaltsprofil bei Google, Werberecht nach BRAO und BORA, Bewertungen mit Schweigepflicht.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Lawyers & Law Firms: Winning Clients Through Google",
      metaTitle: "Local SEO for Lawyers | Law Firm Marketing 2026",
      metaDescription: "How law firms can attract more clients through Local SEO. Legal area keywords, lawyer portals and E-E-A-T for legal professionals.",
      excerpt: "The industry guide for lawyers: How potential clients discover your law firm.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-30",
    updatedAt: "2026-10-10",
    icon: "⚖️",
    keywords: ["anwalt seo", "kanzlei marketing", "local seo anwälte", "mandantengewinnung", "anwalt.de"],
    featured: false
  },
  {
    slug: "local-seo-hotels",
    de: {
      title: "Local SEO für Hotels: So holen Sie mehr Direktbuchungen über Google",
      metaTitle: "Local SEO für Hotels: mehr Direktbuchungen über Google",
      metaDescription: "Local SEO für Hotels, Pensionen und Ferienbetriebe: Hotelprofil bei Google, Free Booking Links, Bewertungen und eine Rechnung für weniger Portalprovision.",
      excerpt: "Local SEO für Hotels, Pensionen und Ferienbetriebe: Hotelprofil bei Google, Free Booking Links, Bewertungen und eine Rechnung für weniger Portalprovision.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Hotels & Accommodations: Increase Direct Bookings",
      metaTitle: "Local SEO for Hotels | More Direct Bookings 2026",
      metaDescription: "How hotels can generate more direct bookings through Local SEO. Google Hotel Ads, review management and strategies against Booking.com.",
      excerpt: "How hotels win the battle against booking portals and increase their direct bookings.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-24",
    updatedAt: "2026-10-10",
    icon: "🏨",
    keywords: ["hotel seo", "direktbuchungen", "local seo hotels", "google hotel ads", "booking alternative"],
    featured: false
  },
  {
    slug: "local-seo-fitness",
    de: {
      title: "Lokales SEO für Fitnessstudios und Personal Trainer: mehr Probetrainings aus der lokalen Suche",
      metaTitle: "Lokales SEO für Fitnessstudios: mehr Probetrainings",
      metaDescription: "Lokales SEO für Fitnessstudios und Personal Trainer: Kategorie, Google-Profil, Bewertungen nach Googles Regeln, Probetraining-Seite und Saisonplanung.",
      excerpt: "Lokales SEO für Fitnessstudios und Personal Trainer: Kategorie, Google-Profil, Bewertungen nach Googles Regeln, Probetraining-Seite und Saisonplanung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Gyms & Personal Trainers",
      metaTitle: "Local SEO for Fitness | Studio Marketing 2026",
      metaDescription: "How gyms and personal trainers can attract more members through Local SEO. Seasonal keywords, before-after content and Google Business.",
      excerpt: "The fitness industry guide: How to fill your studio with new members.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-04",
    updatedAt: "2026-10-12",
    icon: "💪",
    keywords: ["fitnessstudio seo", "personal trainer marketing", "local seo fitness", "mitgliedergewinnung"],
    featured: false
  },

  // === NEUE ARTIKEL: TECHNIK ===
  {
    slug: "schema-markup-local-seo",
    de: {
      title: "Schema Markup für lokale Unternehmen: was Google 2026 nutzt und was Sie weglassen können",
      metaTitle: "Schema Markup für Local SEO: was 2026 noch wirkt",
      metaDescription: "Welche strukturierten Daten lokale Unternehmen 2026 brauchen, welche Google nicht mehr anzeigt und warum Sterne für das eigene Unternehmen nicht erscheinen.",
      excerpt: "Welche strukturierten Daten lokale Unternehmen 2026 brauchen, welche Google nicht mehr anzeigt und warum Sterne für das eigene Unternehmen nicht erscheinen.",
      category: "Technik"
    },
    en: {
      title: "Schema Markup for Local SEO: The Implementation Guide",
      metaTitle: "Schema Markup Local SEO | Technical Guide 2026",
      metaDescription: "Complete guide to Schema Markup implementation for local businesses. LocalBusiness, FAQ, Reviews and more with code examples.",
      excerpt: "How to increase your local visibility in search results with structured data.",
      category: "Technical"
    },
    readingTime: 11,
    publishedAt: "2026-01-16",
    updatedAt: "2026-10-10",
    icon: "🏗️",
    keywords: ["schema markup", "strukturierte daten", "local business schema", "rich snippets", "json-ld"],
    featured: false
  },
  {
    slug: "mobile-local-seo",
    de: {
      title: "Mobile Local SEO: der Weg vom Suchtreffer zum Anruf auf dem Smartphone",
      metaTitle: "Mobile Local SEO: die Website am Handy prüfen",
      metaDescription: "Wie lokale Betriebe ihre Website für Smartphone-Nutzer prüfen: mobile Indexierung, Anruf- und Routenlink, Ladezeit, Pop-ups und Formulare nach Googles Vorgaben.",
      excerpt: "Wie lokale Betriebe ihre Website für Smartphone-Nutzer prüfen: mobile Indexierung, Anruf- und Routenlink, Ladezeit, Pop-ups und Formulare nach Googles Vorgaben.",
      category: "Technik"
    },
    en: {
      title: "Mobile Local SEO: Why 80% of Local Searches Are Mobile",
      metaTitle: "Mobile Local SEO | Optimization 2026",
      metaDescription: "Why Mobile-First is crucial for local businesses. Optimize Page Speed, Click-to-Call, Maps integration and mobile UX.",
      excerpt: "How to optimize your local presence for mobile search – where most of your customers are searching.",
      category: "Technical"
    },
    readingTime: 10,
    publishedAt: "2026-01-26",
    updatedAt: "2026-10-10",
    icon: "📱",
    keywords: ["mobile seo", "mobile first", "local seo mobile", "page speed", "mobile ux"],
    featured: false
  },
  {
    slug: "google-maps-seo-ranking-faktoren",
    de: {
      title: "Google-Maps-Ranking-Faktoren: was Google bestätigt, was Fachleute vermuten und was verboten ist",
      metaTitle: "Google-Maps-Ranking-Faktoren: belegt oder vermutet?",
      metaDescription: "Welche Google-Maps-Ranking-Faktoren Google selbst bestätigt, welche nur aus Expertenumfragen stammen und warum Prozent-Gewichtungen keine Messwerte sind.",
      excerpt: "Welche Google-Maps-Ranking-Faktoren Google selbst bestätigt, welche nur aus Expertenumfragen stammen und warum Prozent-Gewichtungen keine Messwerte sind.",
      category: "Local SEO"
    },
    en: {
      title: "Google Maps SEO 2026: All 20 Ranking Signals with Weighting",
      metaTitle: "Google Maps 20 Ranking Signals & Weighting | 2026",
      metaDescription: "All 20 Google Maps ranking signals with weighting: GBP signals (32%), reviews (16%), citations (11%) and more. Complete signal table.",
      excerpt: "The complete overview of all 20 Google Maps ranking signals with percentage weighting and optimization priority.",
      category: "Local SEO"
    },
    readingTime: 10,
    publishedAt: "2026-01-28",
    updatedAt: "2026-10-10",
    icon: "🗺️",
    keywords: ["google maps ranking signale", "ranking faktoren gewichtung", "local pack signale", "maps seo 2026", "proximity relevance prominence gewichtung"],
    featured: true
  },
  {
    slug: "google-maps-spam-erkennen",
    de: {
      title: "Google-Maps-Spam erkennen und melden: so schützen Sie Ihren Markt und Ihr eigenes Profil",
      metaTitle: "Google-Maps-Spam erkennen und melden: Anleitung",
      metaDescription: "So erkennen Sie gefälschte Einträge, Keyword-Namen und gekaufte Bewertungen in Google Maps, melden sie auf dem richtigen Weg und schützen Ihr eigenes Profil.",
      excerpt: "So erkennen Sie gefälschte Einträge, Keyword-Namen und gekaufte Bewertungen in Google Maps, melden sie auf dem richtigen Weg und schützen Ihr eigenes Profil.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Spam Detection & Reporting: Complete Guide",
      metaTitle: "Google Maps Spam Detection & Reporting | Guide 2026",
      metaDescription: "Learn to identify the 8 most common Google Maps spam types and report them effectively. With checklists, examples, and step-by-step instructions.",
      excerpt: "Fake listings, keyword stuffing, fake reviews: How to detect and report Google Maps spam and protect your own profile.",
      category: "Google Maps"
    },
    readingTime: 10,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🛡️",
    keywords: ["google maps spam", "spam melden", "fake bewertungen", "keyword stuffing", "google business spam", "spam erkennen"],
    featured: false
  },
  {
    slug: "google-maps-konkurrenzanalyse",
    de: {
      title: "Google-Maps-Konkurrenzanalyse: Wettbewerber vergleichen und eigene Lücken finden",
      metaTitle: "Google-Maps-Konkurrenzanalyse: Profile vergleichen",
      metaDescription: "Wer steht in Google Maps vor Ihnen und warum? Mit Vergleichsbogen: Wettbewerber finden, Profile, Rezensionen und Websites prüfen, Lücken in Maßnahmen umsetzen.",
      excerpt: "Wer steht in Google Maps vor Ihnen und warum? Mit Vergleichsbogen: Wettbewerber finden, Profile, Rezensionen und Websites prüfen, Lücken in Maßnahmen umsetzen.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Competitor Analysis: How to Analyze Top Rankings",
      metaTitle: "Google Maps Competitor Analysis | Framework & Tools 2026",
      metaDescription: "Systematic Google Maps competitor analysis in 5 steps: find the businesses ahead of you, compare profiles, reviews and websites, turn gaps into actions.",
      excerpt: "Learn how to systematically analyze your competitors' Google Maps rankings and derive targeted actions to outrank them.",
      category: "Google Maps"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🔍",
    keywords: ["konkurrenzanalyse", "competitor analysis", "google maps", "local pack", "ranking analyse", "wettbewerber"],
    featured: false
  },
  {
    slug: "google-maps-ranking-case-studies",
    de: {
      title: "Google-Maps-Ranking-Fallstudien: Ergebnisse prüfen und selbst sauber dokumentieren",
      metaTitle: "Google-Maps-Fallstudien prüfen und selbst erstellen",
      metaDescription: "Woran Sie belastbare Google-Maps-Fallstudien erkennen und wie Sie selbst eine führen: Ausgangslage, Messgrößen, Änderungsprotokoll, Störfaktoren, Auswertung.",
      excerpt: "Woran Sie belastbare Google-Maps-Fallstudien erkennen und wie Sie selbst eine führen: Ausgangslage, Messgrößen, Änderungsprotokoll, Störfaktoren, Auswertung.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Ranking Case Studies: How to Check Them and Run Your Own",
      metaTitle: "Google Maps Case Studies: Check Them, Run Your Own",
      metaDescription: "How to tell a solid Google Maps ranking case study from a sales story, and how to document your own: baseline, metrics, change log, confounders, evaluation.",
      excerpt: "How to tell a solid Google Maps ranking case study from a sales story, and how to document your own before and after.",
      category: "Google Maps"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🏆",
    keywords: ["case study", "google maps ranking", "local seo erfolg", "ranking verbessern", "fallstudie", "branchenvergleich"],
    featured: true
  },
  {
    slug: "entity-seo-guide",
    de: {
      title: "Entity SEO für lokale Unternehmen: so erkennt Google Ihren Betrieb eindeutig",
      metaTitle: "Entity SEO für lokale Unternehmen: der Leitfaden",
      metaDescription: "Entity SEO verständlich erklärt: wie Google Ihren Betrieb als eindeutige Entität erkennt, welche Rolle Profil, Website und sameAs spielen und wie Sie es prüfen.",
      excerpt: "Entity SEO verständlich erklärt: wie Google Ihren Betrieb als eindeutige Entität erkennt, welche Rolle Profil, Website und sameAs spielen und wie Sie es prüfen.",
      category: "AI & Zukunft"
    },
    en: {
      title: "Entity SEO: How Search Engines Understand Entities",
      metaTitle: "Entity SEO Guide | Knowledge Graph Optimization 2026",
      metaDescription: "What is Entity SEO? How Google and AI search engines recognize entities. Knowledge Graph strategies, Schema Markup & checklist.",
      excerpt: "From keyword SEO to entity SEO: How to establish your business as an entity in the Knowledge Graph and maximize visibility in Google and AI search.",
      category: "AI & Future"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🧠",
    keywords: ["entity seo", "knowledge graph", "schema markup", "sameAs", "structured data", "ai seo", "entität"],
    featured: true
  },
  {
    slug: "semantic-seo-topical-authority",
    de: {
      title: "Semantic SEO und Themenautorität: wie lokale Betriebe ihr Fachgebiet vollständig abdecken",
      metaTitle: "Semantic SEO und Themenautorität für lokale Websites",
      metaDescription: "Semantic SEO für lokale Betriebe: wie Google Bedeutung statt Wörter erkennt, wie Sie Ihr Thema mit Themenplan und internen Links abdecken und was Sie vermeiden.",
      excerpt: "Semantic SEO für lokale Betriebe: wie Google Bedeutung statt Wörter erkennt, wie Sie Ihr Thema mit Themenplan und internen Links abdecken und was Sie vermeiden.",
      category: "AI & Zukunft"
    },
    en: {
      title: "Semantic SEO & Topical Authority: The Complete Guide",
      metaTitle: "Semantic SEO Guide | Build Topical Authority 2026",
      metaDescription: "What is Semantic SEO? How to build topical authority with topic clusters, semantic signals for Google and AI search engines.",
      excerpt: "From keyword SEO to semantic SEO: How to build topical authority with topic clusters, internal links and semantic signals.",
      category: "AI & Future"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🔗",
    keywords: ["semantic seo", "topical authority", "topic cluster", "pillar page", "themenautorität", "interne verlinkung"],
    featured: true
  },

  {
    slug: "google-maps-audit-template",
    de: {
      title: "Google-Maps-Audit: die Vorlage zum Ausfüllen für Ihr Unternehmensprofil",
      metaTitle: "Google-Maps-Audit: Vorlage mit Prüfpunkten",
      metaDescription: "Vorlage für Ihr Google-Maps-Audit: sieben Prüfbögen zu Inhaberschaft, Stammdaten, Kategorien, Fotos, Rezensionen, Sichtbarkeit und Website, mit Auswertung.",
      excerpt: "Vorlage für Ihr Google-Maps-Audit: sieben Prüfbögen zu Inhaberschaft, Stammdaten, Kategorien, Fotos, Rezensionen, Sichtbarkeit und Website, mit Auswertung.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Audit Template: Seven Worksheets for Your Business Profile",
      metaTitle: "Google Maps Audit Template: Seven Worksheets",
      metaDescription: "Google Maps audit template with seven worksheets: ownership, core data, categories, photos, reviews, visibility and website, plus how to prioritise the results.",
      excerpt: "Seven worksheets to audit your Google Business Profile and Maps visibility, with a clear order for fixing what you find.",
      category: "Google Maps"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🗺️",
    keywords: ["google maps audit", "maps audit template", "local seo audit", "gbp audit", "google maps checkliste", "maps ranking audit"],
    featured: false
  },

  {
    slug: "citation-tracking-template",
    de: {
      title: "Citation-Tracking-Vorlage: Ihre Firmeneinträge in einer Tabelle führen",
      metaTitle: "Citation-Tracking-Vorlage: alle Firmeneinträge im Blick",
      metaDescription: "Vorlage für Ihre Verzeichniseinträge: Stammdaten, Eintragsliste, Statuscodes und Änderungsprotokoll als Tabelle, dazu ein Ablauf für die Prüfung je Quartal.",
      excerpt: "Vorlage für Ihre Verzeichniseinträge: Stammdaten, Eintragsliste, Statuscodes und Änderungsprotokoll als Tabelle, dazu ein Ablauf für die Prüfung je Quartal.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Citation Tracking Spreadsheet Template: Manage All Directories",
      metaTitle: "Citation Tracking Template | Spreadsheet for DACH 2026",
      metaDescription: "Free citation tracking template with 22+ directories for DACH market. Interactive checklist, copy-ready spreadsheet and quarterly audit workflow.",
      excerpt: "Systematic citation tracking with interactive checklist, copyable spreadsheet template and quarterly audit workflow for the DACH market.",
      category: "Tools & Resources"
    },
    readingTime: 9,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "📊",
    keywords: ["citation tracking", "citation spreadsheet", "nap tracking", "verzeichnis tracking", "citation audit", "local citations template"],
    featured: false
  },

  {
    slug: "local-keyword-research-template",
    de: {
      title: "Vorlage für die lokale Keyword-Recherche: Liste, Bewertung und Seitenzuordnung",
      metaTitle: "Vorlage: lokale Keyword-Recherche als Tabelle",
      metaDescription: "Tabellenvorlage für lokale Suchbegriffe: Spalten, Quellen, Bewertung und Seitenzuordnung. So halten Sie Ihre Keyword-Liste mit wenig Aufwand aktuell.",
      excerpt: "Tabellenvorlage für lokale Suchbegriffe: Spalten, Quellen, Bewertung und Seitenzuordnung. So halten Sie Ihre Keyword-Liste mit wenig Aufwand aktuell.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local Keyword Research Template: Systematic Keyword Research for Local Businesses",
      metaTitle: "Local Keyword Research Template | Workflow 2026",
      metaDescription: "Free keyword research template for local SEO. 6 keyword types, 5-step workflow, copy-ready spreadsheet with keyword mapping and ranking tracker.",
      excerpt: "Systematic local keyword research with 6 keyword types, interactive 5-step workflow and copyable spreadsheet template for the DACH market.",
      category: "Tools & Resources"
    },
    readingTime: 9,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🔍",
    keywords: ["keyword recherche", "keyword research template", "lokale keywords", "keyword mapping", "keyword spreadsheet", "local seo keywords"],
    featured: false
  },

  {
    slug: "local-seo-monthly-checklist",
    de: {
      title: "Local SEO jeden Monat: die Routine-Checkliste mit Wochenplan",
      metaTitle: "Local SEO jeden Monat: die Checkliste mit Wochenplan",
      metaDescription: "Die monatliche Local-SEO-Routine zum Abhaken: Profil, Bewertungen, Website, Einträge und Messung in vier Wochen, mit Vorlage für Ihren Monatsbericht.",
      excerpt: "Die monatliche Local-SEO-Routine zum Abhaken: Profil, Bewertungen, Website, Einträge und Messung in vier Wochen, mit Vorlage für Ihren Monatsbericht.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO Monthly Checklist: The Monthly Routine for Top Rankings",
      metaTitle: "Local SEO Monthly Checklist | Monthly Routine 2026",
      metaDescription: "Monthly local SEO checklist with 45+ tasks in 8 areas. Interactive with time estimates, prioritization and copyable template.",
      excerpt: "The complete monthly local SEO routine: 45+ tasks in 8 areas with time estimates, prioritization and weekly plan for sustainable rankings.",
      category: "Tools & Resources"
    },
    readingTime: 9,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "📅",
    keywords: ["monthly checklist", "monatliche checkliste", "local seo routine", "local seo pflege", "seo maintenance", "monatliches seo"],
    featured: false
  },

  {
    slug: "ai-visibility-checklist",
    de: {
      title: "KI-Sichtbarkeit prüfen: die Checkliste für Website und Unternehmensprofil",
      metaTitle: "KI-Sichtbarkeit prüfen: Checkliste für lokale Betriebe",
      metaDescription: "Checkliste für KI-Suche: Crawler-Zugang, lesbare Inhalte, klare Fakten, Profile und Messung, belegt mit Angaben von Google, OpenAI, Anthropic und Perplexity.",
      excerpt: "Checkliste für KI-Suche: Crawler-Zugang, lesbare Inhalte, klare Fakten, Profile und Messung, belegt mit Angaben von Google, OpenAI, Anthropic und Perplexity.",
      category: "AI & Zukunft"
    },
    en: {
      title: "AI Visibility Checklist: Is Your Website Ready for AI Search?",
      metaTitle: "AI Visibility Checklist | Check AI Readiness 2026",
      metaDescription: "Interactive AI visibility checklist with 57+ checkpoints. Schema markup, voice search, LLM optimization, AI Overviews — with score and template.",
      excerpt: "Check your website for AI visibility: 57+ points across 8 areas with AI impact score, progress saving and copyable audit template.",
      category: "AI & Future"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🤖",
    keywords: ["ai visibility", "ai sichtbarkeit", "ai checklist", "ai overviews optimierung", "llm optimierung", "voice search checklist", "ai search optimization"],
    featured: false
  },

  {
    slug: "google-maps-ranking-tracker",
    de: {
      title: "Google-Maps-Ranking-Tracker: Positionen über Monate protokollieren und auswerten",
      metaTitle: "Google-Maps-Ranking-Tracker: Vorlage und Auswertung",
      metaDescription: "Maps-Positionen dauerhaft protokollieren: Einstellungen, Messprotokoll, Monatsübersicht und Wettbewerber als Tabellen, dazu Kennzahlen und ein Plan bei Verlust.",
      excerpt: "Maps-Positionen dauerhaft protokollieren: Einstellungen, Messprotokoll, Monatsübersicht und Wettbewerber als Tabellen, dazu Kennzahlen und ein Plan bei Verlust.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Ranking Tracker: How to Track Your Local Rankings",
      metaTitle: "Google Maps Ranking Tracker | Grid Tracking & Tools 2026",
      metaDescription: "How to systematically track Google Maps rankings. Grid tracking explained, 7 tools compared, free tracker template and action plan for ranking loss.",
      excerpt: "Concept guide for Maps ranking tracking: grid tracking, tool comparison, interpretation and free template for systematic local ranking monitoring.",
      category: "Google Maps"
    },
    readingTime: 10,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "📈",
    keywords: ["ranking tracker", "google maps ranking", "local rank tracking", "grid tracking", "geo grid", "maps position tracken"],
    featured: false
  },

  {
    slug: "local-seo-strategy-planner",
    de: {
      title: "Local-SEO-Strategie planen: Ein Plan, der zu Ihrem Betrieb passt",
      metaTitle: "Local-SEO-Strategie planen: Ziele, Reihenfolge, Aufwand",
      metaDescription: "Local-SEO-Strategie für kleine Betriebe: Ausgangslage erfassen, messbare Ziele setzen, Aufgaben nach Wirkung ordnen und den Aufwand ehrlich schätzen.",
      excerpt: "Local-SEO-Strategie für kleine Betriebe: Ausgangslage erfassen, messbare Ziele setzen, Aufgaben nach Wirkung ordnen und den Aufwand ehrlich schätzen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO Strategy Planner: 7-Phase Task Plan with Budget & Checklist",
      metaTitle: "Local SEO Strategy Planner | 7-Phase Task Plan 2026",
      metaDescription: "Free local SEO strategy plan with 49 tasks in 7 phases. Interactive task checklist, budget planning and copyable template.",
      excerpt: "Systematic 7-phase task plan for local SEO: 49 concrete tasks with budget estimates and priorities — as interactive checklist.",
      category: "Tools & Resources"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🎯",
    keywords: ["local seo aufgabenplan", "seo strategy planner", "seo aufgaben checkliste", "local seo budget planung", "seo phasen plan"],
    featured: false
  },

  {
    slug: "local-seo-roadmap-90-tage",
    de: {
      title: "Local SEO in 12 Wochen: Der Wochenplan zum Abarbeiten",
      metaTitle: "Local SEO in 12 Wochen: Wochenplan mit Prüfpunkten",
      metaDescription: "Local SEO in 12 Wochen: ein Wochenplan von der Bestandsaufnahme über Profil, Website und Bewertungen bis zur Auswertung, mit Prüfpunkten und Messtabelle.",
      excerpt: "Local SEO in 12 Wochen: ein Wochenplan von der Bestandsaufnahme über Profil, Website und Bewertungen bis zur Auswertung, mit Prüfpunkten und Messtabelle.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO Weekly Plan: 12-Week Timeline with Gantt Chart & KPI Milestones",
      metaTitle: "Local SEO 12-Week Timeline | Gantt & KPIs 2026",
      metaDescription: "Visual 12-week plan for local SEO: Gantt timeline, weekly milestones and KPI checkpoints for measurable progress.",
      excerpt: "Week by week to the goal: Visual 12-week plan with Gantt chart and measurable KPI milestones.",
      category: "Tools & Resources"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-10",
    icon: "🗺️",
    keywords: ["local seo wochenplan", "12 wochen timeline", "seo gantt diagramm", "local seo meilensteine", "seo kpi tracking"],
    featured: false
  },

  // === NEUE ARTIKEL: STRATEGIE ===
  {
    slug: "local-link-building",
    de: {
      title: "Local Link Building: Lokale Links ohne Regelverstoß aufbauen",
      metaTitle: "Lokale Backlinks aufbauen: Wege, die Google erlaubt",
      metaDescription: "Lokale Backlinks für Betriebe in DACH: Kammer, Verband, Partner, Vereine und Presse richtig nutzen, Sponsoring korrekt kennzeichnen, Linkspam vermeiden.",
      excerpt: "Lokale Backlinks für Betriebe in DACH: Kammer, Verband, Partner, Vereine und Presse richtig nutzen, Sponsoring korrekt kennzeichnen, Linkspam vermeiden.",
      category: "Strategie"
    },
    en: {
      title: "Local Link Building: Building Backlinks for Local Businesses",
      metaTitle: "Local Link Building | Backlinks 2026",
      metaDescription: "How local businesses build quality backlinks. Sponsoring, associations, local press and creative strategies for more authority.",
      excerpt: "The best strategies for local businesses to gain valuable backlinks.",
      category: "Strategy"
    },
    readingTime: 10,
    publishedAt: "2026-01-22",
    updatedAt: "2026-10-10",
    icon: "🔗",
    keywords: ["local link building", "lokale backlinks", "linkaufbau", "backlink strategie", "local authority"],
    featured: false
  },
  {
    slug: "negative-google-bewertungen",
    de: {
      title: "Negative Google-Bewertungen: Richtig antworten, richtig melden",
      metaTitle: "Negative Google-Bewertungen: antworten, melden, handeln",
      metaDescription: "Negative Google-Bewertung erhalten? So antworten Sie sachlich, melden Richtlinienverstöße, reagieren auf Erpressung und erkennen rechtswidrige Inhalte.",
      excerpt: "Negative Google-Bewertung erhalten? So antworten Sie sachlich, melden Richtlinienverstöße, reagieren auf Erpressung und erkennen rechtswidrige Inhalte.",
      category: "Bewertungen"
    },
    en: {
      title: "Negative Google Reviews: How to Respond Professionally",
      metaTitle: "Responding to Negative Reviews | Guide 2026",
      metaDescription: "How to respond professionally to negative Google reviews. Response strategies, requesting deletion and prevention for your business.",
      excerpt: "The art of turning negative reviews into positive customer experiences.",
      category: "Reviews"
    },
    readingTime: 12,
    publishedAt: "2026-01-20",
    updatedAt: "2026-10-10",
    icon: "😤",
    keywords: ["negative bewertungen", "bewertungen beantworten", "reputation management", "schlechte bewertung", "bewertung löschen"],
    featured: false
  },
  {
    slug: "local-content-marketing",
    de: {
      title: "Local Content Marketing: Inhalte, die Kunden vor Ort wirklich helfen",
      metaTitle: "Local Content Marketing: Inhalte mit echtem Ortsbezug",
      metaDescription: "Local Content Marketing für kleine Betriebe: Themen aus Kundenfragen finden, Leistungs- und Ortsseiten ohne Brückenseiten, Beiträge im Profil, Erfolg messen.",
      excerpt: "Local Content Marketing für kleine Betriebe: Themen aus Kundenfragen finden, Leistungs- und Ortsseiten ohne Brückenseiten, Beiträge im Profil, Erfolg messen.",
      category: "Strategie"
    },
    en: {
      title: "Local Content Marketing: Content Strategy for Local Businesses",
      metaTitle: "Local Content Marketing | Strategy 2026",
      metaDescription: "How local businesses attract more customers through targeted content marketing. Local guides, district pages and community content.",
      excerpt: "Content ideas specifically for local businesses that actually bring customers.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2026-01-26",
    updatedAt: "2026-10-10",
    icon: "✍️",
    keywords: ["local content", "content marketing", "lokaler content", "stadtteil seiten", "lokale guides"],
    featured: false
  },

  // === NEUE ARTIKEL: CASE STUDIES ===
  {
    slug: "local-seo-case-study-baecker",
    de: {
      title: "Bäckerei-Profil prüfen: der Check in sechs Schritten",
      metaTitle: "Bäckerei-Profil bei Google prüfen: Schritt für Schritt",
      metaDescription: "Profil-Check für Bäckereien in sechs Schritten: Name, Kategorien, Fotos, Öffnungszeiten, Leistungen und Bewertungen prüfen, mit den Regeln aus Googles Hilfe.",
      excerpt: "Profil-Check für Bäckereien in sechs Schritten: Name, Kategorien, Fotos, Öffnungszeiten, Leistungen und Bewertungen prüfen, mit den Regeln aus Googles Hilfe.",
      category: "Case Study"
    },
    en: {
      title: "Bakery Google Profile Check: Six Steps",
      metaTitle: "Bakery Profile Check: Six Steps | Local SEO",
      metaDescription: "Check a bakery Google profile in six steps: name, categories, photos, opening hours, services and reviews, based on Google help pages.",
      excerpt: "A step-by-step profile check for bakeries, based on Google help pages.",
      category: "Google Business"
    },
    readingTime: 10,
    publishedAt: "2026-02-02",
    updatedAt: "2026-10-10",
    icon: "🥐",
    keywords: ["local seo case study", "erfolgsgeschichte", "bäckerei marketing", "local seo beispiel", "kundengewinnung"],
    featured: true
  },
  {
    slug: "local-seo-fehler",
    de: {
      title: "Local SEO Fehler: Warum Ihr Betrieb lokal nicht gefunden wird",
      metaTitle: "Local SEO Fehler: Warum Sie lokal nicht gefunden werden",
      metaDescription: "Die häufigsten Local SEO Fehler bei Profil, Website und Bewertungen, mit den Regeln von Google und einer Reihenfolge zur Korrektur für Ihren Betrieb.",
      excerpt: "Die häufigsten Local SEO Fehler bei Profil, Website und Bewertungen, mit den Regeln von Google und einer Reihenfolge zur Korrektur für Ihren Betrieb.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Mistakes: 15 Reasons Why You're Not Found",
      metaTitle: "Avoid Local SEO Mistakes | 15 Problems 2026",
      metaDescription: "The 15 most common Local SEO mistakes and how to avoid them. With interactive diagnosis quiz and solutions for each problem.",
      excerpt: "Find out which mistakes are making you invisible – and how to fix them immediately.",
      category: "Strategy"
    },
    readingTime: 8,
    publishedAt: "2026-02-06",
    updatedAt: "2026-10-10",
    icon: "🚫",
    keywords: ["local seo fehler", "seo probleme", "nicht gefunden werden", "seo diagnose", "ranking probleme"],
    featured: true
  },

  // === NEUER MEGA-ARTIKEL: DÖNER ===
  {
    slug: "local-seo-doener-kebab-imbiss",
    de: {
      title: "Local SEO für Döner- und Kebab-Imbisse: So finden Kunden Ihren Laden",
      metaTitle: "Local SEO für Döner-Imbisse: Google-Profil richtig nutzen",
      metaDescription: "Local SEO für Döner- und Kebab-Imbisse: Unternehmensprofil, Speisekarte, Fotos und Bewertungen. Was Google erlaubt, was es verbietet und wo Sie anfangen.",
      excerpt: "Local SEO für Döner- und Kebab-Imbisse: Unternehmensprofil, Speisekarte, Fotos und Bewertungen. Was Google erlaubt, was es verbietet und wo Sie anfangen.",
      category: "Gastronomie"
    },
    en: {
      title: "Local SEO for Döner & Kebab Shops: The Ultimate Marketing Guide 2026",
      metaTitle: "Local SEO for Döner Shops | Kebab Marketing 2026",
      metaDescription: "Complete SEO guide for Döner shops: Keywords, Google Business, reviews, delivery platforms & social media. With 3 interactive tools!",
      excerpt: "From keywords to reviews to delivery platforms: Everything Döner shops need to be found on Google.",
      category: "Restaurants"
    },
    readingTime: 8,
    publishedAt: "2026-01-08",
    updatedAt: "2026-10-10",
    icon: "🥙",
    keywords: ["döner seo", "kebab marketing", "imbiss google", "döner laden mehr kunden", "döner bewertungen", "döner lieferando", "türkisches restaurant seo"],
    featured: true
  },
  {
    slug: "local-seo-friseursalon-beauty",
    de: {
      title: "SEO für Friseure und Kosmetikstudios: So finden Kunden Ihren Salon über Google",
      metaTitle: "SEO für Friseure und Kosmetikstudios: der Leitfaden",
      metaDescription: "SEO für Friseure, Kosmetik- und Nagelstudios: Google-Unternehmensprofil, eine Seite je Leistung, echte Bewertungen und Online-Termine nach Googles Regeln.",
      excerpt: "SEO für Friseure, Kosmetik- und Nagelstudios: Google-Unternehmensprofil, eine Seite je Leistung, echte Bewertungen und Online-Termine nach Googles Regeln.",
      category: "Beauty & Wellness"
    },
    en: {
      title: "Local SEO for Hair Salons & Beauty Studios: The Ultimate Guide with Booking Integration 2026",
      metaTitle: "Local SEO Hair Salons & Beauty Studios | Guide 2026",
      metaDescription: "The longest SEO guide for hair salons, beauty studios & barbershops. With booking integration, keyword generator and portfolio tips. 6,000+ words!",
      excerpt: "From keywords to booking systems to social media: Everything hair salons and beauty studios need to be found on Google.",
      category: "Beauty & Wellness"
    },
    readingTime: 11,
    publishedAt: "2026-01-08",
    updatedAt: "2026-10-12",
    icon: "💇",
    keywords: ["friseur seo", "beauty marketing", "friseursalon google", "kosmetikstudio marketing", "friseur mehr kunden", "buchungssystem friseur"],
    featured: true
  },

  // === CONTENT PLAN: JANUAR - APRIL 2026 (55 neue Artikel) ===

  // BRANCHEN-SPEZIFISCHE GUIDES
  {
    slug: "local-seo-immobilienmakler",
    de: {
      title: "Local SEO für Immobilienmakler: So kommen Verkäufer und Käufer über Google zu Ihnen",
      metaTitle: "Local SEO für Immobilienmakler: Objektanfragen durch Google",
      metaDescription: "Wie Makler mit Local SEO mehr Anfragen über Google bekommen: Unternehmensprofil, Objekt- und Stadtteilseiten, Firmendaten, Bewertungen und die richtige Messung.",
      excerpt: "Wie Makler mit Local SEO mehr Anfragen über Google bekommen: Unternehmensprofil, Objekt- und Stadtteilseiten, Firmendaten, Bewertungen und die richtige Messung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Real Estate Agents: Property Inquiries Through Google",
      metaTitle: "Local SEO for Real Estate Agents | More Inquiries 2026",
      metaDescription: "How real estate agents generate more property inquiries through Local SEO. District keywords, property portals and Google Business for agents.",
      excerpt: "How property buyers and sellers discover your real estate office.",
      category: "Industries"
    },
    readingTime: 10,
    publishedAt: "2026-01-11",
    updatedAt: "2026-10-10",
    icon: "🏠",
    keywords: ["immobilienmakler seo", "makler marketing", "local seo immobilien", "objektanfragen"],
    featured: false
  },
  {
    slug: "local-seo-steuerberater",
    de: {
      title: "Local SEO für Steuerberater: Mandanten gewinnen im Rahmen von StBerG und BOStB",
      metaTitle: "Local SEO für Steuerberater: Profil, Berufsrecht, Anfragen",
      metaDescription: "Local SEO für Steuerkanzleien: Werbung nach § 57a StBerG und § 9 BOStB, Fachberater, Google-Profil je Standort, Leistungsseiten und sichere Dokumenten-Uploads.",
      excerpt: "Local SEO für Steuerkanzleien: Werbung nach § 57a StBerG und § 9 BOStB, Fachberater, Google-Profil je Standort, Leistungsseiten und sichere Dokumenten-Uploads.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Tax Consultants & Accountants: Winning Clients",
      metaTitle: "Local SEO for Tax Consultants | Client Acquisition 2026",
      metaDescription: "How tax consultants and accountants win new clients through Local SEO. Tax keywords, industry portals and E-E-A-T for financial experts.",
      excerpt: "The industry guide for tax consultants: How potential clients find your practice.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-15",
    updatedAt: "2026-10-10",
    icon: "📊",
    keywords: ["steuerberater seo", "buchhalter marketing", "local seo steuerberater", "mandantengewinnung"],
    featured: false
  },
  {
    slug: "local-seo-autowerkstatt",
    de: {
      title: "Local SEO für Autowerkstätten: so werden Sie in Ihrer Region gefunden",
      metaTitle: "Local SEO für Autowerkstätten: so werden Sie gefunden",
      metaDescription: "Local SEO für Autowerkstätten: Profil, Leistungsseiten und Bewertungen richtig einrichten. Was Google erlaubt, was verboten ist und wie Sie Erfolg messen.",
      excerpt: "Local SEO für Autowerkstätten: Profil, Leistungsseiten und Bewertungen richtig einrichten. Was Google erlaubt, was verboten ist und wie Sie Erfolg messen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Auto Repair Shops & Car Dealerships",
      metaTitle: "Local SEO for Auto Repair Shops | Automotive Marketing 2026",
      metaDescription: "How auto repair shops win more customers through Local SEO. Emergency keywords, Google Business for automotive businesses and review strategies.",
      excerpt: "How your workshop becomes the first choice for car problems in the region.",
      category: "Industries"
    },
    readingTime: 9,
    publishedAt: "2026-01-19",
    updatedAt: "2026-10-10",
    icon: "🚗",
    keywords: ["autowerkstatt seo", "kfz marketing", "local seo werkstatt", "autohaus seo"],
    featured: false
  },
  {
    slug: "local-seo-tierarzt",
    de: {
      title: "Local SEO für Tierärzte und Tierpraxen",
      metaTitle: "Local SEO für Tierärzte: So finden Tierbesitzer Ihre Praxis",
      metaDescription: "Local SEO für Tierarztpraxen: Unternehmensprofil, Notdienst-Angaben und Bewertungen nach Googles Regeln, dazu eine Website, die Tierbesitzer schnell überzeugt.",
      excerpt: "Local SEO für Tierarztpraxen: Unternehmensprofil, Notdienst-Angaben und Bewertungen nach Googles Regeln, dazu eine Website, die Tierbesitzer schnell überzeugt.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Veterinarians & Animal Clinics",
      metaTitle: "Local SEO for Veterinarians | Practice Marketing 2026",
      metaDescription: "How veterinary practices win more patients through Local SEO. Emergency keywords, pet portals and emotional content marketing.",
      excerpt: "The complete guide for veterinarians for local patient acquisition.",
      category: "Industries"
    },
    readingTime: 9,
    publishedAt: "2026-01-23",
    updatedAt: "2026-10-10",
    icon: "🐕",
    keywords: ["tierarzt seo", "tierpraxis marketing", "local seo tierarzt", "veterinär marketing"],
    featured: false
  },
  {
    slug: "local-seo-fotograf",
    de: {
      title: "Local SEO für Fotografen: Gefunden werden, wenn Kunden in der Region suchen",
      metaTitle: "Local SEO für Fotografen: So finden Kunden Sie bei Google",
      metaDescription: "Local SEO für Fotografen: So richten Sie Profil, Website, Portfolio und Bewertungen ein, damit Kunden in Ihrer Region Sie bei Google finden und kontaktieren.",
      excerpt: "Local SEO für Fotografen: So richten Sie Profil, Website, Portfolio und Bewertungen ein, damit Kunden in Ihrer Region Sie bei Google finden und kontaktieren.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Photographers: More Bookings Through Google",
      metaTitle: "Local SEO for Photographers | More Bookings 2026",
      metaDescription: "How photographers generate more bookings through Local SEO. Portfolio SEO, wedding keywords and Google Business for photographers.",
      excerpt: "How to become the most sought-after photographer in your region.",
      category: "Industries"
    },
    readingTime: 9,
    publishedAt: "2026-01-29",
    updatedAt: "2026-10-10",
    icon: "📸",
    keywords: ["fotograf seo", "fotografen marketing", "local seo fotograf", "hochzeitsfotograf seo"],
    featured: false
  },
  {
    slug: "local-seo-yoga-studios",
    de: {
      title: "Local SEO für Yoga- und Pilates-Studios: So finden Interessierte Ihr Studio",
      metaTitle: "Local SEO für Yoga- und Pilates-Studios: Leitfaden",
      metaDescription: "Wie Yoga- und Pilates-Studios bei lokalen Suchen gefunden werden: Profil einrichten, Kursseiten bauen, Bewertungen regelkonform sammeln und Erfolge messen.",
      excerpt: "Wie Yoga- und Pilates-Studios bei lokalen Suchen gefunden werden: Profil einrichten, Kursseiten bauen, Bewertungen regelkonform sammeln und Erfolge messen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Yoga Studios & Pilates",
      metaTitle: "Local SEO for Yoga Studios | More Participants 2026",
      metaDescription: "How yoga and pilates studios win more participants through Local SEO. Course keywords, wellness content and community building.",
      excerpt: "The guide for yoga studios: How to fill your classes with local searchers.",
      category: "Industries"
    },
    readingTime: 8,
    publishedAt: "2026-02-02",
    updatedAt: "2026-10-10",
    icon: "🧘",
    keywords: ["yoga studio seo", "pilates marketing", "local seo yoga", "wellness studio seo"],
    featured: false
  },
  {
    slug: "local-seo-tattoo-studios",
    de: {
      title: "Local SEO für Tattoo-Studios und Piercing: so finden Kunden Ihr Studio",
      metaTitle: "Local SEO für Tattoo- und Piercing-Studios 2026",
      metaDescription: "Local SEO für Tattoo- und Piercing-Studios: Google-Profil, Stil-Seiten, Fotos und Bewertungen. Was Google zählt, was verboten ist und wo Sie anfangen.",
      excerpt: "Local SEO für Tattoo- und Piercing-Studios: Google-Profil, Stil-Seiten, Fotos und Bewertungen. Was Google zählt, was verboten ist und wo Sie anfangen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Tattoo Studios & Piercing",
      metaTitle: "Local SEO for Tattoo Studios | More Customers 2026",
      metaDescription: "How tattoo and piercing studios win more customers through Local SEO. Portfolio optimization, style keywords and Instagram integration.",
      excerpt: "The ultimate guide for tattoo artists for local customer acquisition.",
      category: "Industries"
    },
    readingTime: 8,
    publishedAt: "2026-02-08",
    updatedAt: "2026-10-10",
    icon: "🎨",
    keywords: ["tattoo studio seo", "piercing marketing", "local seo tattoo", "tattoo künstler seo"],
    featured: false
  },
  {
    slug: "local-seo-apotheken",
    de: {
      title: "Local SEO für Apotheken: Profil, Notdienst, E-Rezept und Werberecht",
      metaTitle: "Local SEO für Apotheken: Profil, Notdienst, E-Rezept, Recht",
      metaDescription: "Local SEO für Apotheken: Google-Profil, Notdienst richtig zeigen, E-Rezept und Vorbestellung, Leistungen, Bewertungen und Werberecht nach HWG und Berufsordnung.",
      excerpt: "Local SEO für Apotheken: Google-Profil, Notdienst richtig zeigen, E-Rezept und Vorbestellung, Leistungen, Bewertungen und Werberecht nach HWG und Berufsordnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Pharmacies: Local Healthcare",
      metaTitle: "Local SEO for Pharmacies | Health Marketing 2026",
      metaDescription: "How pharmacies win more customers through Local SEO. Emergency service keywords, health advice content and local positioning.",
      excerpt: "The guide for pharmacies: How to become the go-to pharmacy in your region.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-14",
    updatedAt: "2026-10-12",
    icon: "💊",
    keywords: ["apotheke seo", "apotheken marketing", "local seo apotheke", "notdienst apotheke"],
    featured: false
  },
  {
    slug: "local-seo-fahrschule",
    de: {
      title: "Local SEO für Fahrschulen: Mehr Fahrschüler gewinnen",
      metaTitle: "Local SEO für Fahrschulen | Mehr Fahrschüler 2026",
      metaDescription: "Wie Fahrschulen durch Local SEO mehr Fahrschüler gewinnen. Führerschein-Keywords, Preisgestaltung und Bewertungsmanagement.",
      excerpt: "Der komplette Guide für Fahrschulen zur lokalen Schülergewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Driving Schools: Win More Students",
      metaTitle: "Local SEO for Driving Schools | More Students 2026",
      metaDescription: "How driving schools win more students through Local SEO. License keywords, pricing and review management.",
      excerpt: "The complete guide for driving schools for local student acquisition.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    icon: "🚦",
    keywords: ["fahrschule seo", "fahrschüler gewinnen", "local seo fahrschule", "führerschein marketing"],
    featured: false
  },
  {
    slug: "local-seo-hochzeitsdienstleister",
    de: {
      title: "Local SEO für Hochzeitsdienstleister: Florist bis DJ",
      metaTitle: "Local SEO Hochzeitsdienstleister | Mehr Buchungen 2026",
      metaDescription: "Wie Hochzeitsdienstleister durch Local SEO mehr Buchungen bekommen. Saisonale Keywords, Hochzeitsportale und Emotionale Bildsprache.",
      excerpt: "Der Guide für alle Hochzeitsdienstleister: Floristen, DJs, Caterer und mehr.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Wedding Vendors: Florist to DJ",
      metaTitle: "Local SEO Wedding Vendors | More Bookings 2026",
      metaDescription: "How wedding vendors get more bookings through Local SEO. Seasonal keywords, wedding portals and emotional imagery.",
      excerpt: "The guide for all wedding vendors: Florists, DJs, caterers and more.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-02-26",
    updatedAt: "2026-02-26",
    icon: "💒",
    keywords: ["hochzeitsdienstleister seo", "hochzeit marketing", "local seo hochzeit", "wedding vendor seo"],
    featured: false
  },
  {
    slug: "local-seo-umzugsunternehmen",
    de: {
      title: "Local SEO für Umzugsunternehmen: Ehrlich in zwei Städten gefunden werden",
      metaTitle: "Local SEO für Umzugsunternehmen: in zwei Städten gefunden",
      metaDescription: "Local SEO für Umzugsfirmen: Profil mit Einzugsgebiet, ehrlich in zwei Städten sichtbar, Seiten für Leistungen und Strecken, Angebot, Haftung und Bewertungen.",
      excerpt: "Local SEO für Umzugsfirmen: Profil mit Einzugsgebiet, ehrlich in zwei Städten sichtbar, Seiten für Leistungen und Strecken, Angebot, Haftung und Bewertungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Moving Companies: Being Found in Two Cities",
      metaTitle: "Local SEO Moving Companies 2026 | Routes & Leads",
      metaDescription: "Local SEO for movers: origin and destination pages, real route pages, price ranges, review routines and a 90-day plan.",
      excerpt: "Moving customers search in two places at once. How movers cover both origin and destination markets.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F69A}",
    keywords: [
      "local seo umzugsunternehmen",
      "umzugsfirma kunden gewinnen",
      "umzug google ranking",
      "umzugsanfragen generieren",
      "fernumzug marketing",
      "umzugsunternehmen sichtbarkeit"
    ],
    featured: false,
  },
  {
    slug: "local-seo-reinigungsunternehmen",
    de: {
      title: "Local SEO für Reinigungsunternehmen & Gebäudereinigung",
      metaTitle: "Local SEO für Reinigungsunternehmen | Mehr Kunden 2026",
      metaDescription: "Wie Reinigungsunternehmen durch Local SEO mehr Kunden gewinnen. Service-Keywords, B2B-Content und lokale Positionierung.",
      excerpt: "Der Guide für Reinigungsunternehmen: So gewinnen Sie mehr Aufträge.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Cleaning Companies & Building Maintenance",
      metaTitle: "Local SEO for Cleaning Companies | More Customers 2026",
      metaDescription: "How cleaning companies win more customers through Local SEO. Service keywords, B2B content and local positioning.",
      excerpt: "The guide for cleaning companies: How to win more contracts.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    icon: "🧹",
    keywords: ["reinigungsunternehmen seo", "gebäudereinigung marketing", "local seo reinigung", "putzfirma seo"],
    featured: false
  },
  {
    slug: "local-seo-sprachschule",
    de: {
      title: "Local SEO für Sprachschulen & Nachhilfe-Institute",
      metaTitle: "Local SEO für Sprachschulen | Mehr Schüler 2026",
      metaDescription: "Wie Sprachschulen durch Local SEO mehr Schüler gewinnen. Sprach-Keywords, Kursangebote und saisonale Kampagnen.",
      excerpt: "Der Guide für Sprachschulen: So füllen Sie Ihre Kurse.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Language Schools & Tutoring Institutes",
      metaTitle: "Local SEO for Language Schools | More Students 2026",
      metaDescription: "How language schools win more students through Local SEO. Language keywords, course offerings and seasonal campaigns.",
      excerpt: "The guide for language schools: How to fill your courses.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-16",
    icon: "📚",
    keywords: ["sprachschule seo", "nachhilfe marketing", "local seo sprachschule", "bildung seo"],
    featured: false
  },
  {
    slug: "local-seo-cafe-coffeeshop",
    de: {
      title: "SEO für Cafés und Coffee Shops: So finden Gäste Ihr Café auf Google",
      metaTitle: "SEO für Cafés: Google-Profil, Karte und Bewertungen",
      metaDescription: "SEO für Cafés: Kategorie, Öffnungszeiten, Speisekarte als Text, Attribute wie WLAN, Fotos, Bewertungen und Instagram im Google-Profil richtig pflegen.",
      excerpt: "SEO für Cafés: Kategorie, Öffnungszeiten, Speisekarte als Text, Attribute wie WLAN, Fotos, Bewertungen und Instagram im Google-Profil richtig pflegen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Cafés & Coffee Shops",
      metaTitle: "Local SEO for Cafés | More Guests 2026",
      metaDescription: "How cafés win more guests through Local SEO. Atmosphere keywords, Instagram integration and workspace positioning.",
      excerpt: "The guide for cafés: How to become the neighborhood meeting spot.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-03-28",
    updatedAt: "2026-10-12",
    icon: "☕",
    keywords: ["cafe seo", "coffeeshop marketing", "local seo cafe", "kaffee seo"],
    featured: false
  },

  // REGIONALE GUIDES
  {
    slug: "local-seo-hamburg",
    de: {
      title: "Local SEO in Hamburg: gefunden werden in den Bezirken und Stadtteilen, die Sie bedienen",
      metaTitle: "Local SEO Hamburg: sichtbar in Bezirk und Stadtteil",
      metaDescription: "Local SEO für Betriebe in Hamburg: wie Entfernung über Bezirke und Elbe wirkt, wie Sie Stadtteile ohne Brückenseiten nennen und Ihre Sichtbarkeit messen.",
      excerpt: "Local SEO für Betriebe in Hamburg: wie Entfernung über Bezirke und Elbe wirkt, wie Sie Stadtteile ohne Brückenseiten nennen und Ihre Sichtbarkeit messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Hamburg: The Hanseatic Marketing Guide",
      metaTitle: "Local SEO Hamburg | The Hanseatic City Guide 2026",
      metaDescription: "Local SEO specifically for Hamburg. District keywords from Altona to Winterhude, Hamburg directories and strategies for the Elbe metropolis.",
      excerpt: "From Reeperbahn to Hafencity: How to be found in Hamburg.",
      category: "Regions"
    },
    readingTime: 10,
    publishedAt: "2026-01-13",
    updatedAt: "2026-10-12",
    icon: "⚓",
    keywords: ["local seo hamburg", "seo hamburg", "marketing hamburg", "hamburger unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-frankfurt",
    de: {
      title: "Local SEO in Frankfurt am Main: sichtbar in den Stadtteilen und Gemeinden, die Sie wirklich bedienen",
      metaTitle: "Local SEO Frankfurt: in Ihren Stadtteilen gefunden werden",
      metaDescription: "Local SEO für Betriebe in Frankfurt am Main: Stadtteile und Umland ehrlich abdecken, Messen und Feste einplanen, Kammern nutzen und die Sichtbarkeit messen.",
      excerpt: "Local SEO für Betriebe in Frankfurt am Main: Stadtteile und Umland ehrlich abdecken, Messen und Feste einplanen, Kammern nutzen und die Sichtbarkeit messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Frankfurt: Leveraging the Financial Metropolis",
      metaTitle: "Local SEO Frankfurt | Finance Hub Guide 2026",
      metaDescription: "Local SEO specifically for Frankfurt am Main. B2B keywords, financial services strategies and local visibility in the Main metropolis.",
      excerpt: "How to leverage the potential of the financial metropolis for your business.",
      category: "Regions"
    },
    readingTime: 10,
    publishedAt: "2026-01-21",
    updatedAt: "2026-10-12",
    icon: "🏦",
    keywords: ["local seo frankfurt", "seo frankfurt", "marketing frankfurt", "frankfurter unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-koeln",
    de: {
      title: "Local SEO in Köln: sichtbar in den Bezirken und Veedeln, die Sie wirklich bedienen",
      metaTitle: "Local SEO Köln: gefunden werden in Bezirk und Veedel",
      metaDescription: "Local SEO für Betriebe in Köln: wie die Entfernung in neun Stadtbezirken wirkt, wie Sie Veedel ohne Brückenseiten nennen und Ihre Sichtbarkeit im Raster messen.",
      excerpt: "Local SEO für Betriebe in Köln: wie die Entfernung in neun Stadtbezirken wirkt, wie Sie Veedel ohne Brückenseiten nennen und Ihre Sichtbarkeit im Raster messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Cologne: Rhineland Marketing for Local Businesses",
      metaTitle: "Local SEO Cologne | Rhineland Guide 2026",
      metaDescription: "Local SEO specifically for Cologne and the Rhineland. Cologne keywords, neighborhood strategies and local visibility at the cathedral.",
      excerpt: "From Ehrenfeld to Deutz: How to be found throughout Cologne.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-01-27",
    updatedAt: "2026-10-12",
    icon: "🎭",
    keywords: ["local seo köln", "seo köln", "marketing köln", "kölner unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-wien",
    de: {
      title: "Local SEO in Wien: gefunden werden in den Bezirken, die Sie bedienen",
      metaTitle: "Local SEO Wien: sichtbar in Ihrem Bezirk und Grätzl",
      metaDescription: "Local SEO in Wien: wie Sie in den 23 Bezirken ehrlich sichtbar werden, Bezirksseiten ohne Brückenseiten bauen, Herold und WK Wien nutzen und richtig messen.",
      excerpt: "Local SEO in Wien: wie Sie in den 23 Bezirken ehrlich sichtbar werden, Bezirksseiten ohne Brückenseiten bauen, Herold und WK Wien nutzen und richtig messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Vienna: The Austria Guide for SMEs",
      metaTitle: "Local SEO Vienna | Austria Guide 2026",
      metaDescription: "Local SEO specifically for Vienna and Austria. District keywords, Austrian directories and strategies for the Danube metropolis.",
      excerpt: "The complete guide for Viennese businesses for local visibility.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-02-06",
    updatedAt: "2026-10-12",
    icon: "🇦🇹",
    keywords: ["local seo wien", "seo wien", "marketing wien", "österreich seo"],
    featured: false
  },
  {
    slug: "local-seo-stuttgart",
    de: {
      title: "Local SEO in Stuttgart: sichtbar in den Stadtbezirken und Gemeinden, die Sie wirklich bedienen",
      metaTitle: "Local SEO Stuttgart: sichtbar in den 23 Stadtbezirken",
      metaDescription: "Local SEO für Betriebe in Stuttgart: wie die Entfernung in 23 Stadtbezirken und der Region wirkt, wie Sie Bezirke ehrlich nennen und Ihre Sichtbarkeit messen.",
      excerpt: "Local SEO für Betriebe in Stuttgart: wie die Entfernung in 23 Stadtbezirken und der Region wirkt, wie Sie Bezirke ehrlich nennen und Ihre Sichtbarkeit messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Stuttgart: Automotive Region & More",
      metaTitle: "Local SEO Stuttgart | Baden-Württemberg Guide 2026",
      metaDescription: "Local SEO specifically for Stuttgart and the region. Industry keywords, supplier strategies and local visibility in the Ländle.",
      excerpt: "How to be found in Germany's automotive capital.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-02-12",
    updatedAt: "2026-10-12",
    icon: "🚙",
    keywords: ["local seo stuttgart", "seo stuttgart", "marketing stuttgart", "schwaben seo"],
    featured: false
  },
  {
    slug: "local-seo-duesseldorf",
    de: {
      title: "Local SEO in Düsseldorf: sichtbar in den Stadtteilen, die Sie wirklich bedienen",
      metaTitle: "Local SEO Düsseldorf: sichtbar in Ihrem Stadtteil",
      metaDescription: "Local SEO für Betriebe in Düsseldorf: wie die Entfernung in zehn Stadtbezirken wirkt, wie Sie Messen und Karneval einplanen und Ihre Sichtbarkeit messen.",
      excerpt: "Local SEO für Betriebe in Düsseldorf: wie die Entfernung in zehn Stadtbezirken wirkt, wie Sie Messen und Karneval einplanen und Ihre Sichtbarkeit messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Düsseldorf: Fashion, Trade Fairs & More Customers",
      metaTitle: "Local SEO Düsseldorf | NRW Guide 2026",
      metaDescription: "Local SEO specifically for Düsseldorf. Fashion keywords, trade fair strategies and local visibility in the NRW capital.",
      excerpt: "The guide for Düsseldorf businesses: From the Kö to Flingern.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-02-18",
    updatedAt: "2026-10-12",
    icon: "👔",
    keywords: ["local seo düsseldorf", "seo düsseldorf", "marketing düsseldorf", "nrw seo"],
    featured: false
  },
  {
    slug: "local-seo-basel",
    de: {
      title: "Local SEO in Basel: gefunden werden im Quartier, im Kanton und jenseits der Grenze",
      metaTitle: "Local SEO Basel: sichtbar im Quartier und über die Grenze",
      metaDescription: "Local SEO in Basel: wie die Entfernung in 19 Stadtvierteln wirkt, wie Sie Kunden aus Deutschland und Frankreich ehrlich ansprechen und richtig messen.",
      excerpt: "Local SEO in Basel: wie die Entfernung in 19 Stadtvierteln wirkt, wie Sie Kunden aus Deutschland und Frankreich ehrlich ansprechen und richtig messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Basel: Border Region Switzerland-Germany-France",
      metaTitle: "Local SEO Basel | Tri-Border Guide 2026",
      metaDescription: "Local SEO for Basel and the tri-border region. Multilingual keywords, pharma industry and cross-border marketing.",
      excerpt: "The unique guide for Basel businesses in the tri-border region.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-02-24",
    updatedAt: "2026-10-12",
    icon: "🌉",
    keywords: ["local seo basel", "seo basel", "marketing basel", "dreiländereck seo"],
    featured: false
  },
  {
    slug: "local-seo-leipzig-dresden",
    de: {
      title: "Local SEO Leipzig & Dresden: Ostdeutschland-Guide",
      metaTitle: "Local SEO Leipzig Dresden | Sachsen-Guide 2026",
      metaDescription: "Local SEO für Leipzig, Dresden und Sachsen. Aufstrebende Städte, Start-up-Szene und regionale Besonderheiten.",
      excerpt: "Der Guide für sächsische Unternehmen: Zwei Städte, ein Ziel.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Leipzig & Dresden: East Germany Guide",
      metaTitle: "Local SEO Leipzig Dresden | Saxony Guide 2026",
      metaDescription: "Local SEO for Leipzig, Dresden and Saxony. Emerging cities, start-up scene and regional specifics.",
      excerpt: "The guide for Saxon businesses: Two cities, one goal.",
      category: "Regions"
    },
    readingTime: 15,
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-02",
    icon: "🎵",
    keywords: ["local seo leipzig", "local seo dresden", "seo sachsen", "ostdeutschland seo"],
    featured: false
  },

  // === PILLAR PAGE: TECHNISCHES LOCAL SEO GUIDE ===
  {
    slug: "technisches-local-seo-guide",
    de: {
      title: "Technisches Local SEO: die Prüfliste für die Website eines lokalen Betriebs",
      metaTitle: "Technisches Local SEO: die Prüfliste für Ihre Website",
      metaDescription: "Technisches Local SEO Schritt für Schritt: Search Console, Indexierung, Sitemap, Canonicals, HTTPS, Core Web Vitals, Standortseiten und KI-Crawler nach Google.",
      excerpt: "Technisches Local SEO Schritt für Schritt: Search Console, Indexierung, Sitemap, Canonicals, HTTPS, Core Web Vitals, Standortseiten und KI-Crawler nach Google.",
      category: "Technik"
    },
    en: {
      title: "Technical Local SEO: The Complete Guide for Local Businesses 2026",
      metaTitle: "Technical Local SEO | Complete Guide 2026",
      metaDescription: "Technical Local SEO guide: LocalBusiness Schema, Core Web Vitals, Mobile-First, internal linking & indexing. With 40-point checklist.",
      excerpt: "Everything about technical Local SEO: From LocalBusiness Schema and Geo Markup to Core Web Vitals, mobile optimization, internal linking and indexing strategies.",
      category: "Technical"
    },
    readingTime: 13,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "⚙️",
    keywords: ["technical seo", "technisches seo", "localbusiness schema", "schema markup", "core web vitals", "mobile seo", "interne verlinkung local seo", "geo markup", "indexierung local seo", "site speed lokale website"],
    featured: true
  },

  {
    slug: "localbusiness-schema-implementierung",
    de: {
      title: "LocalBusiness Schema implementieren: ein vollständiges Beispiel, Feld für Feld erklärt und getestet",
      metaTitle: "LocalBusiness Schema einbauen: Anleitung mit Beispiel",
      metaDescription: "LocalBusiness Schema Schritt für Schritt einbauen: ein vollständiges JSON-LD-Beispiel, jedes Feld erklärt, Einbau in HTML oder CMS, Test und typische Fehler.",
      excerpt: "LocalBusiness Schema Schritt für Schritt einbauen: ein vollständiges JSON-LD-Beispiel, jedes Feld erklärt, Einbau in HTML oder CMS, Test und typische Fehler.",
      category: "Technik"
    },
    en: {
      title: "Implementing LocalBusiness Schema: Complete Guide with Code Examples",
      metaTitle: "LocalBusiness Schema Markup | Implementation Guide 2026",
      metaDescription: "Implement LocalBusiness Schema Markup correctly: JSON-LD code examples for every industry, opening hours, reviews & multi-location. Copy-ready!",
      excerpt: "Step-by-step guide to LocalBusiness Schema implementation with copy-ready JSON-LD code examples for all industries.",
      category: "Technical"
    },
    readingTime: 12,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "🏢",
    keywords: ["localbusiness schema", "schema markup", "json-ld", "structured data", "local seo schema", "rich snippets"],
    featured: false
  },

  {
    slug: "review-schema-implementierung",
    de: {
      title: "Review Schema richtig einsetzen: Wann Google Bewertungssterne zeigt",
      metaTitle: "Review Schema: Wann Google Sterne zeigt und wann nicht",
      metaDescription: "Review- und AggregateRating-Markup ehrlich erklärt: warum eigene Bewertungen lokaler Betriebe keine Sterne bringen, wo Markup erlaubt ist und wie Sie es testen.",
      excerpt: "Review- und AggregateRating-Markup ehrlich erklärt: warum eigene Bewertungen lokaler Betriebe keine Sterne bringen, wo Markup erlaubt ist und wie Sie es testen.",
      category: "Technik"
    },
    en: {
      title: "Implementing Review Schema: Get Star Ratings in Google",
      metaTitle: "Review Schema Markup | Stars in Google Search 2026",
      metaDescription: "Implement Review & AggregateRating Schema correctly: JSON-LD code examples, Google guidelines and industry examples. Stars in SERPs!",
      excerpt: "How to implement Review Schema correctly and get star ratings in Google search results – with copy-ready code examples.",
      category: "Technical"
    },
    readingTime: 11,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-10",
    icon: "⭐",
    keywords: ["review schema", "aggregaterating", "sterne google", "rich snippets bewertungen", "schema markup bewertungen", "json-ld review"],
    featured: false
  },

  // TECHNISCHE DEEP-DIVES
  {
    slug: "core-web-vitals-local-seo",
    de: {
      title: "Core Web Vitals für lokale Websites: messen, verstehen, verbessern",
      metaTitle: "Core Web Vitals für lokale Websites: messen und verbessern",
      metaDescription: "LCP, INP und CLS für kleine lokale Websites: Grenzwerte, was Google zum Ranking sagt, wie Sie richtig messen und welche Ursachen Sie zuerst beheben sollten.",
      excerpt: "LCP, INP und CLS für kleine lokale Websites: Grenzwerte, was Google zum Ranking sagt, wie Sie richtig messen und welche Ursachen Sie zuerst beheben sollten.",
      category: "Technik"
    },
    en: {
      title: "Core Web Vitals for Local Websites: Performance Guide",
      metaTitle: "Core Web Vitals Local SEO | Performance 2026",
      metaDescription: "How local businesses optimize their Core Web Vitals. LCP, FID, CLS for better rankings and more conversions.",
      excerpt: "The technical guide to website performance for local rankings.",
      category: "Technical"
    },
    readingTime: 11,
    publishedAt: "2026-01-17",
    updatedAt: "2026-10-13",
    icon: "⚡",
    keywords: ["core web vitals", "page speed", "local seo performance", "lcp fid cls"],
    featured: false
  },
  {
    slug: "local-seo-voice-search",
    de: {
      title: "Sprachsuche für lokale Betriebe: Welche Angaben gesprochene Fragen beantworten",
      metaTitle: "Sprachsuche und Local SEO: die praktische Checkliste",
      metaDescription: "Wie gesprochene lokale Fragen funktionieren und welche Profilfelder und Seiten sie beantworten: Öffnungszeiten, Telefon, Anfahrt, Fragen-Seite und Checkliste.",
      excerpt: "Wie gesprochene lokale Fragen funktionieren und welche Profilfelder und Seiten sie beantworten: Öffnungszeiten, Telefon, Anfahrt, Fragen-Seite und Checkliste.",
      category: "Technik"
    },
    en: {
      title: "Local SEO & Voice Search: Hey Google, where is...",
      metaTitle: "Voice Search Local SEO | Voice Search 2026",
      metaDescription: "How local businesses optimize for voice search. Conversational keywords, featured snippets and voice-first strategies.",
      excerpt: "How to be found when customers ask Alexa, Siri or Google.",
      category: "Technical"
    },
    readingTime: 12,
    publishedAt: "2026-01-25",
    updatedAt: "2026-10-12",
    icon: "🎤",
    keywords: ["voice search", "sprachsuche", "local seo voice", "alexa siri google"],
    featured: false
  },
  {
    slug: "google-posts-ranking-faktor",
    de: {
      title: "Beiträge im Google-Unternehmensprofil: Was sie für Ranking und Kunden wirklich leisten",
      metaTitle: "Google-Beiträge: Ranking-Faktor oder Kundeninfo?",
      metaDescription: "Sind Beiträge im Google-Unternehmensprofil ein Ranking-Faktor? Was Google dazu sagt, welche Regeln seit 2026 gelten, dazu ein Inhaltsplan und fünf Vorlagen.",
      excerpt: "Sind Beiträge im Google-Unternehmensprofil ein Ranking-Faktor? Was Google dazu sagt, welche Regeln seit 2026 gelten, dazu ein Inhaltsplan und fünf Vorlagen.",
      category: "Technik"
    },
    en: {
      title: "Optimally Using Google Posts: The Underrated Ranking Factor",
      metaTitle: "Google Posts | Underrated Ranking Factor 2026",
      metaDescription: "How Google Posts improve your local ranking. Content strategies, posting frequency and conversion optimization.",
      excerpt: "The forgotten lever for local rankings: Using Google Posts correctly.",
      category: "Technical"
    },
    readingTime: 12,
    publishedAt: "2026-01-31",
    updatedAt: "2026-10-13",
    icon: "📝",
    keywords: ["google posts", "gbp posts", "google business posts", "lokale posts"],
    featured: false
  },
  {
    slug: "lokale-landing-pages",
    de: {
      title: "Lokale Landing Pages erstellen: One-Page pro Standort",
      metaTitle: "Lokale Landing Pages | Standort-Seiten 2026",
      metaDescription: "Wie Sie effektive lokale Landing Pages erstellen. Stadteil-Seiten, Geo-Keywords und Conversion-Optimierung für Multi-Location.",
      excerpt: "Der Guide zur Erstellung von Location-Pages, die ranken und konvertieren.",
      category: "Technik"
    },
    en: {
      title: "Creating Local Landing Pages: One Page Per Location",
      metaTitle: "Local Landing Pages | Location Pages 2026",
      metaDescription: "How to create effective local landing pages. District pages, geo-keywords and conversion optimization for multi-location.",
      excerpt: "The guide to creating location pages that rank and convert.",
      category: "Technical"
    },
    readingTime: 16,
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    icon: "🎯",
    keywords: ["lokale landing pages", "standort seiten", "geo landing pages", "multi location seo"],
    featured: false
  },
  {
    slug: "multi-location-seo",
    de: {
      title: "Multi-Location SEO Technik: Website-Architektur für mehrere Standorte",
      metaTitle: "Multi-Location Website-Architektur | Technischer Guide 2026",
      metaDescription: "Die technische Seite von Multi-Location SEO: URL-Struktur, hreflang, Schema Markup und Seitenarchitektur für 2–200 Standorte.",
      excerpt: "Website-Architektur für Multi-Location: URL-Struktur, Standortseiten-Templates und Schema Markup richtig umsetzen.",
      category: "Technik"
    },
    en: {
      title: "Multi-Location SEO Tech: Website Architecture for Multiple Locations",
      metaTitle: "Multi-Location Website Architecture | Technical Guide 2026",
      metaDescription: "The technical side of multi-location SEO: URL structure, hreflang, Schema Markup and site architecture for 2-200 locations.",
      excerpt: "Website architecture for multi-location: URL structure, location page templates and Schema Markup done right.",
      category: "Technical"
    },
    readingTime: 18,
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    icon: "📍",
    keywords: ["multi location website architektur", "standortseiten url struktur", "multi location schema markup", "mehrere standorte website"],
    featured: false
  },
  {
    slug: "lokale-keyword-kannibalisierung",
    de: {
      title: "Lokale Keyword-Kannibalisierung vermeiden",
      metaTitle: "Keyword-Kannibalisierung Local SEO | Guide 2026",
      metaDescription: "Wie Sie Keyword-Kannibalisierung bei lokalen Seiten vermeiden. Diagnose, Lösung und Prävention für bessere Rankings.",
      excerpt: "Wenn Ihre eigenen Seiten gegeneinander kämpfen: So lösen Sie das Problem.",
      category: "Technik"
    },
    en: {
      title: "Avoiding Local Keyword Cannibalization",
      metaTitle: "Keyword Cannibalization Local SEO | Guide 2026",
      metaDescription: "How to avoid keyword cannibalization with local pages. Diagnosis, solution and prevention for better rankings.",
      excerpt: "When your own pages fight against each other: How to solve the problem.",
      category: "Technical"
    },
    readingTime: 14,
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-06",
    icon: "🦈",
    keywords: ["keyword kannibalisierung", "duplicate content", "lokale seo probleme", "seiten konkurrenz"],
    featured: false
  },
  {
    slug: "ai-overviews-local-seo",
    de: {
      title: "AI-Overviews & Local Pack: Auswirkungen auf lokale Klickraten & Sichtbarkeit",
      metaTitle: "AI-Overviews Auswirkungen Local Pack | CTR-Analyse 2026",
      metaDescription: "Wie AI-Overviews die Klickraten im Local Pack verändern. CTR-Daten, Sichtbarkeits-Einfluss und Anpassungsstrategien für lokale Unternehmen.",
      excerpt: "AI-Overviews verändern das Local Pack: Aktuelle CTR-Daten, Sichtbarkeits-Analysen und konkrete Anpassungsstrategien.",
      category: "Technik"
    },
    en: {
      title: "AI Overviews & Local Pack: Impact on Local Click Rates & Visibility",
      metaTitle: "AI Overviews Impact on Local Pack | CTR Analysis 2026",
      metaDescription: "How AI Overviews are changing click rates in the Local Pack. CTR data, visibility impact and adaptation strategies for local businesses.",
      excerpt: "AI Overviews are changing the Local Pack: Current CTR data, visibility analysis and concrete adaptation strategies.",
      category: "Technical"
    },
    readingTime: 15,
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    icon: "🤖",
    keywords: ["ai overviews auswirkungen", "local pack ctr", "ki suche klickrate", "ai overviews sichtbarkeit"],
    featured: true
  },
  {
    slug: "local-seo-tracking-kpis",
    de: {
      title: "Local SEO Tracking: KPIs und Reporting richtig aufsetzen",
      metaTitle: "Local SEO KPIs | Tracking & Reporting 2026",
      metaDescription: "Die wichtigsten KPIs für Local SEO und wie Sie sie messen. Google Analytics, Search Console und GBP Insights richtig nutzen.",
      excerpt: "Was messen, wie messen, wie berichten: Der KPI-Guide für Local SEO.",
      category: "Technik"
    },
    en: {
      title: "Local SEO Tracking: Setting Up KPIs and Reporting",
      metaTitle: "Local SEO KPIs | Tracking & Reporting 2026",
      metaDescription: "The most important KPIs for Local SEO and how to measure them. Properly using Google Analytics, Search Console and GBP Insights.",
      excerpt: "What to measure, how to measure, how to report: The KPI guide for Local SEO.",
      category: "Technical"
    },
    readingTime: 16,
    publishedAt: "2026-03-30",
    updatedAt: "2026-03-30",
    icon: "📈",
    keywords: ["local seo kpis", "seo tracking", "local seo reporting", "google analytics lokal"],
    featured: false
  },

  // STRATEGIE & BEST PRACTICES
  {
    slug: "wettbewerbsanalyse-local-seo",
    de: {
      title: "Wettbewerbsanalyse im Local SEO: Konkurrenz ausstechen",
      metaTitle: "Wettbewerbsanalyse Local SEO | Konkurrenz 2026",
      metaDescription: "Wie Sie Ihre lokale Konkurrenz analysieren und übertreffen. Tools, Methoden und Strategien für den lokalen Wettbewerbsvorteil.",
      excerpt: "Lernen Sie von der Konkurrenz und werden Sie besser.",
      category: "Strategie"
    },
    en: {
      title: "Competitive Analysis in Local SEO: Outperforming the Competition",
      metaTitle: "Competitive Analysis Local SEO | Competition 2026",
      metaDescription: "How to analyze and outperform your local competition. Tools, methods and strategies for local competitive advantage.",
      excerpt: "Learn from the competition and become better.",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    icon: "🔎",
    keywords: ["wettbewerbsanalyse", "konkurrenzanalyse", "local seo wettbewerb", "konkurrenz ausspähen"],
    featured: false
  },
  {
    slug: "citation-strategie-verzeichnisse",
    de: {
      title: "Lokale Citation-Strategie: Die 50 wichtigsten Verzeichnisse",
      metaTitle: "Citation-Strategie | 50 Verzeichnisse 2026",
      metaDescription: "Die wichtigsten lokalen Verzeichnisse für DACH und wie Sie Ihre Citations optimal aufbauen. Mit vollständiger Verzeichnisliste.",
      excerpt: "Die Blaupause für Ihren Citation-Aufbau in Deutschland, Österreich und Schweiz.",
      category: "Strategie"
    },
    en: {
      title: "Local Citation Strategy: The 50 Most Important Directories",
      metaTitle: "Citation Strategy | 50 Directories 2026",
      metaDescription: "The most important local directories for DACH and how to optimally build your citations. With complete directory list.",
      excerpt: "The blueprint for your citation building in Germany, Austria and Switzerland.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    icon: "📒",
    keywords: ["citations", "branchenverzeichnisse", "lokale verzeichnisse", "nap aufbau"],
    featured: false
  },
  {
    slug: "bewertungs-automation",
    de: {
      title: "Bewertungs-Automation: Systematisch mehr Reviews generieren",
      metaTitle: "Bewertungs-Automation | Mehr Reviews 2026",
      metaDescription: "Wie Sie systematisch und automatisiert mehr Google-Bewertungen sammeln. Tools, Workflows und ethische Methoden.",
      excerpt: "Von 10 auf 100 Bewertungen: Der systematische Ansatz für mehr Reviews.",
      category: "Strategie"
    },
    en: {
      title: "Review Automation: Systematically Generate More Reviews",
      metaTitle: "Review Automation | More Reviews 2026",
      metaDescription: "How to systematically and automatically collect more Google reviews. Tools, workflows and ethical methods.",
      excerpt: "From 10 to 100 reviews: The systematic approach for more reviews.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-02-15",
    updatedAt: "2026-02-15",
    icon: "⚙️",
    keywords: ["bewertungen automatisieren", "review generation", "mehr bewertungen", "rezensionen sammeln"],
    featured: false
  },
  {
    slug: "local-seo-vs-organisch",
    de: {
      title: "Local SEO oder organisches SEO: Was Ihr Betrieb zuerst braucht",
      metaTitle: "Local SEO oder organisches SEO: Was braucht Ihr Betrieb?",
      metaDescription: "Local SEO oder organisches SEO? Wo beides bei Google erscheint, welcher Betrieb was zuerst braucht, ein Plan nach Priorität und wie Sie beides getrennt messen.",
      excerpt: "Local SEO oder organisches SEO? Wo beides bei Google erscheint, welcher Betrieb was zuerst braucht, ein Plan nach Priorität und wie Sie beides getrennt messen.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO vs. Organic SEO: The Key Differences",
      metaTitle: "Local SEO vs Organic SEO | Differences 2026",
      metaDescription: "What distinguishes Local SEO from classic SEO? Similarities, differences and when you need which strategy.",
      excerpt: "Local Pack vs. Organic Search: Understand the differences.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2026-02-21",
    updatedAt: "2026-10-12",
    icon: "⚖️",
    keywords: ["local seo vs seo", "organische suche", "local pack", "seo unterschiede"],
    featured: false
  },
  {
    slug: "google-maps-seo-vs-organic-seo",
    de: {
      title: "Google Maps SEO und organisches SEO: Was Google zu den beiden Rankings sagt",
      metaTitle: "Google Maps SEO vs. organisches SEO: Was Google bewertet",
      metaDescription: "Wie Google lokale Treffer in Maps und normale Suchergebnisse sortiert, welche Signale beide teilen, welche nicht und was daraus für Profil und Website folgt.",
      excerpt: "Wie Google lokale Treffer in Maps und normale Suchergebnisse sortiert, welche Signale beide teilen, welche nicht und was daraus für Profil und Website folgt.",
      category: "Strategie"
    },
    en: {
      title: "Google Maps SEO vs. Organic SEO: Ranking Factors, Strategies & ROI Compared",
      metaTitle: "Google Maps SEO vs Organic SEO | Comparison 2026",
      metaDescription: "Google Maps SEO vs. Organic SEO: ranking factors, costs, ROI and the optimal combination for local businesses. With comparison table.",
      excerpt: "Maps or organic search? Ranking factors, costs and ROI in direct comparison.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "🗺️",
    keywords: ["google maps seo vs organic seo", "maps ranking faktoren", "organic seo vergleich", "local pack vs organic", "maps seo strategie", "seo vergleich"],
    featured: false
  },
  {
    slug: "saisonales-local-seo",
    de: {
      title: "Saisonales Local SEO: Weihnachten, Sommer & Co.",
      metaTitle: "Saisonales Local SEO | Jahreszeiten 2026",
      metaDescription: "Wie Sie saisonale Schwankungen für Ihr Local SEO nutzen. Vorausplanung, Keyword-Strategien und zeitgebundene Optimierung.",
      excerpt: "Die richtige Strategie für jede Jahreszeit: Saisonales Local SEO.",
      category: "Strategie"
    },
    en: {
      title: "Seasonal Local SEO: Christmas, Summer & Co.",
      metaTitle: "Seasonal Local SEO | Seasons 2026",
      metaDescription: "How to leverage seasonal fluctuations for your Local SEO. Advance planning, keyword strategies and time-bound optimization.",
      excerpt: "The right strategy for every season: Seasonal Local SEO.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-02-27",
    updatedAt: "2026-02-27",
    icon: "🎄",
    keywords: ["saisonales seo", "weihnachten seo", "sommer marketing", "jahreszeiten local seo"],
    featured: false
  },
  {
    slug: "local-seo-budget-planen",
    de: {
      title: "Local SEO Budget planen: Was kostet gutes Marketing?",
      metaTitle: "Local SEO Budget | Kosten & Planung 2026",
      metaDescription: "Was kostet Local SEO wirklich? Budget-Planung, ROI-Berechnung und Prioritäten für kleine und mittlere Unternehmen.",
      excerpt: "Der ehrliche Guide zu Local SEO Kosten und Investitionen.",
      category: "Strategie"
    },
    en: {
      title: "Planning Local SEO Budget: What Does Good Marketing Cost?",
      metaTitle: "Local SEO Budget | Costs & Planning 2026",
      metaDescription: "What does Local SEO really cost? Budget planning, ROI calculation and priorities for small and medium businesses.",
      excerpt: "The honest guide to Local SEO costs and investments.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "💰",
    keywords: ["local seo kosten", "seo budget", "marketing budget", "seo investition"],
    featured: false
  },
  {
    slug: "diy-local-seo",
    de: {
      title: "DIY Local SEO: Was kannst du selbst, wann brauchst du Profis?",
      metaTitle: "DIY Local SEO | Selbst vs. Agentur 2026",
      metaDescription: "Was können Sie selbst bei Local SEO machen und wann lohnt sich eine Agentur? Der ehrliche Vergleich mit Zeitaufwand.",
      excerpt: "Die Wahrheit: Was Sie selbst machen können und wo Sie Hilfe brauchen.",
      category: "Strategie"
    },
    en: {
      title: "DIY Local SEO: What Can You Do Yourself, When Do You Need Pros?",
      metaTitle: "DIY Local SEO | Self vs. Agency 2026",
      metaDescription: "What can you do yourself with Local SEO and when is an agency worth it? The honest comparison with time investment.",
      excerpt: "The truth: What you can do yourself and where you need help.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    icon: "🛠️",
    keywords: ["diy seo", "seo selbst machen", "seo agentur", "local seo lernen"],
    featured: false
  },
  {
    slug: "lokales-social-media-marketing",
    de: {
      title: "Lokales Social Media Marketing: Facebook, Instagram & TikTok",
      metaTitle: "Lokales Social Media | Marketing 2026",
      metaDescription: "Wie lokale Unternehmen Social Media für mehr Sichtbarkeit nutzen. Plattform-Strategien, lokaler Content und Community-Aufbau.",
      excerpt: "Social Media für lokale Unternehmen: Was funktioniert wirklich?",
      category: "Strategie"
    },
    en: {
      title: "Local Social Media Marketing: Facebook, Instagram & TikTok",
      metaTitle: "Local Social Media | Marketing 2026",
      metaDescription: "How local businesses use social media for more visibility. Platform strategies, local content and community building.",
      excerpt: "Social media for local businesses: What actually works?",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-17",
    icon: "📱",
    keywords: ["lokales social media", "instagram lokal", "facebook lokal", "tiktok lokal"],
    featured: false
  },
  {
    slug: "lokale-pr-pressearbeit",
    de: {
      title: "Lokale PR & Pressearbeit: Zeitungen, Blogs & Radio",
      metaTitle: "Lokale PR | Pressearbeit 2026",
      metaDescription: "Wie lokale Unternehmen durch PR und Pressearbeit Sichtbarkeit gewinnen. Pressemitteilungen, Blogger-Relations und lokale Medien.",
      excerpt: "Der Guide zur lokalen Öffentlichkeitsarbeit für mehr Reichweite.",
      category: "Strategie"
    },
    en: {
      title: "Local PR & Press Work: Newspapers, Blogs & Radio",
      metaTitle: "Local PR | Press Work 2026",
      metaDescription: "How local businesses gain visibility through PR and press work. Press releases, blogger relations and local media.",
      excerpt: "The guide to local public relations for more reach.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-03-23",
    updatedAt: "2026-03-23",
    icon: "📰",
    keywords: ["lokale pr", "pressearbeit", "pressemitteilung", "lokale medien"],
    featured: false
  },
  {
    slug: "google-business-fotos",
    de: {
      title: "Google Business Fotos: Der visuelle Ranking-Boost",
      metaTitle: "Google Business Fotos | Visuelles SEO 2026",
      metaDescription: "Wie Fotos Ihr Google Business Ranking verbessern. Bildoptimierung, Geotagging und Strategien für mehr Klicks.",
      excerpt: "Der unterschätzte Ranking-Faktor: Bilder in Ihrem Google Business Profil.",
      category: "Strategie"
    },
    en: {
      title: "Google Business Photos: The Visual Ranking Boost",
      metaTitle: "Google Business Photos | Visual SEO 2026",
      metaDescription: "How photos improve your Google Business ranking. Image optimization, geotagging and strategies for more clicks.",
      excerpt: "The underrated ranking factor: Images in your Google Business Profile.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    icon: "📷",
    keywords: ["google business fotos", "bilder seo", "gbp fotos", "visuelles marketing"],
    featured: false
  },

  // CASE STUDIES & ERFOLGSGESCHICHTEN
  {
    slug: "case-study-zahnarzt",
    de: {
      title: "Case Study: Zahnarztpraxis von Seite 3 auf Platz 1",
      metaTitle: "Case Study Zahnarzt | Local SEO Erfolg",
      metaDescription: "Wie eine Zahnarztpraxis durch Local SEO von Seite 3 auf Platz 1 kam. Mit Zahlen, Maßnahmen und Timeline.",
      excerpt: "Eine echte Erfolgsgeschichte: 6 Monate Local SEO für eine Zahnarztpraxis.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Dental Practice from Page 3 to Position 1",
      metaTitle: "Case Study Dentist | Local SEO Success",
      metaDescription: "How a dental practice went from page 3 to position 1 through Local SEO. With numbers, measures and timeline.",
      excerpt: "A real success story: 6 months of Local SEO for a dental practice.",
      category: "Case Study"
    },
    readingTime: 10,
    publishedAt: "2026-03-07",
    updatedAt: "2026-03-07",
    icon: "🦷",
    keywords: ["zahnarzt case study", "local seo erfolg", "ranking erfolg", "praxis marketing"],
    featured: false
  },
  {
    slug: "case-study-restaurant-reservierungen",
    de: {
      title: "Case Study: Restaurant verdreifacht Reservierungen",
      metaTitle: "Case Study Restaurant | 3x Reservierungen",
      metaDescription: "Wie ein Restaurant durch Local SEO seine Reservierungen verdreifachte. Konkrete Maßnahmen und messbare Ergebnisse.",
      excerpt: "Von halb leer zu ausgebucht: Die Local SEO Transformation eines Restaurants.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Restaurant Triples Reservations",
      metaTitle: "Case Study Restaurant | 3x Reservations",
      metaDescription: "How a restaurant tripled its reservations through Local SEO. Concrete measures and measurable results.",
      excerpt: "From half empty to fully booked: The Local SEO transformation of a restaurant.",
      category: "Case Study"
    },
    readingTime: 11,
    publishedAt: "2026-03-13",
    updatedAt: "2026-03-13",
    icon: "🍴",
    keywords: ["restaurant case study", "reservierungen steigern", "gastro marketing", "local seo erfolg"],
    featured: false
  },
  {
    slug: "case-study-handwerker-anfragen",
    de: {
      title: "Case Study: Handwerker-Firma automatisiert Anfragen",
      metaTitle: "Case Study Handwerker | Automatisierte Anfragen",
      metaDescription: "Wie eine Handwerker-Firma durch Local SEO automatisiert Anfragen generiert. Vom Telefon-Chaos zum Lead-System.",
      excerpt: "Wie ein Elektriker-Betrieb heute 80% seiner Anfragen über Google bekommt.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Contractor Automates Inquiries",
      metaTitle: "Case Study Contractor | Automated Inquiries",
      metaDescription: "How a contractor automated inquiries through Local SEO. From phone chaos to lead system.",
      excerpt: "How an electrical contractor now gets 80% of inquiries through Google.",
      category: "Case Study"
    },
    readingTime: 12,
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    icon: "🔨",
    keywords: ["handwerker case study", "anfragen automatisieren", "lead generierung", "elektriker marketing"],
    featured: false
  },
  {
    slug: "case-study-fitnessstudio-corona",
    de: {
      title: "Case Study: Fitnessstudio nach Corona-Comeback",
      metaTitle: "Case Study Fitnessstudio | Corona-Comeback",
      metaDescription: "Wie ein Fitnessstudio nach Corona durch Local SEO wieder durchstartete. Mitgliedergewinnung und Repositionierung.",
      excerpt: "Vom Lockdown zum vollen Studio: Die Comeback-Story eines Fitnessstudios.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Gym's Post-Corona Comeback",
      metaTitle: "Case Study Gym | Corona Comeback",
      metaDescription: "How a gym restarted through Local SEO after Corona. Member acquisition and repositioning.",
      excerpt: "From lockdown to full studio: The comeback story of a gym.",
      category: "Case Study"
    },
    readingTime: 11,
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    icon: "💪",
    keywords: ["fitnessstudio case study", "corona comeback", "mitglieder gewinnen", "fitness marketing"],
    featured: false
  },
  {
    slug: "case-study-hotel-direktbuchungen",
    de: {
      title: "Case Study: Hotel steigert Direktbuchungen um 150%",
      metaTitle: "Case Study Hotel | 150% mehr Direktbuchungen",
      metaDescription: "Wie ein Boutique-Hotel seine Direktbuchungen um 150% steigerte. Strategie gegen Booking.com und Co.",
      excerpt: "Unabhängigkeit von Buchungsportalen: So schaffte es ein Hotel.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Hotel Increases Direct Bookings by 150%",
      metaTitle: "Case Study Hotel | 150% More Direct Bookings",
      metaDescription: "How a boutique hotel increased its direct bookings by 150%. Strategy against Booking.com and Co.",
      excerpt: "Independence from booking portals: How a hotel did it.",
      category: "Case Study"
    },
    readingTime: 12,
    publishedAt: "2026-03-31",
    updatedAt: "2026-03-31",
    icon: "🛎️",
    keywords: ["hotel case study", "direktbuchungen", "booking alternative", "hotel marketing"],
    featured: false
  },
  {
    slug: "case-study-friseur-stadtteile",
    de: {
      title: "Case Study: Friseursalon dominiert 3 Stadtteile",
      metaTitle: "Case Study Friseur | Multi-Location Erfolg",
      metaDescription: "Wie ein Friseursalon in 3 Stadtteilen die lokale Suche dominiert. Multi-Location-Strategie in der Praxis.",
      excerpt: "Ein Salon, drei Standorte, überall auf Platz 1: Die Friseur-Success-Story.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Hair Salon Dominates 3 Districts",
      metaTitle: "Case Study Hair Salon | Multi-Location Success",
      metaDescription: "How a hair salon dominates local search in 3 districts. Multi-location strategy in practice.",
      excerpt: "One salon, three locations, position 1 everywhere: The salon success story.",
      category: "Case Study"
    },
    readingTime: 10,
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    icon: "✂️",
    keywords: ["friseur case study", "multi location", "stadtteil seo", "salon marketing"],
    featured: false
  },

  // TOOLS, CHECKLISTEN & RESSOURCEN
  {
    slug: "local-seo-tools-2026",
    de: {
      title: "Die 25 besten Local SEO Tools 2026: Kostenlos bis Premium",
      metaTitle: "Local SEO Tools 2026 | 25 beste Tools",
      metaDescription: "Die besten Local SEO Tools im Vergleich. Von kostenlosen Google-Tools bis Premium-Suites - für jedes Budget.",
      excerpt: "Der ultimative Tool-Guide für Local SEO: Alle Tools die Sie brauchen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "The 25 Best Local SEO Tools 2026: Free to Premium",
      metaTitle: "Local SEO Tools 2026 | 25 Best Tools",
      metaDescription: "The best Local SEO tools compared. From free Google tools to premium suites - for every budget.",
      excerpt: "The ultimate tool guide for Local SEO: All the tools you need.",
      category: "Tools & Resources"
    },
    readingTime: 22,
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    icon: "🧰",
    keywords: ["local seo tools", "seo software", "kostenlose seo tools", "seo suite"],
    featured: true
  },
  {
    slug: "google-business-api-agenturen",
    de: {
      title: "Google Business API: Automatisierung für Agenturen",
      metaTitle: "Google Business API | Agentur-Automatisierung",
      metaDescription: "Wie Agenturen die Google Business API für Skalierung nutzen. Technische Einrichtung, Use Cases und Best Practices.",
      excerpt: "Der technische Guide zur GBP-Automatisierung für SEO-Agenturen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Google Business API: Automation for Agencies",
      metaTitle: "Google Business API | Agency Automation",
      metaDescription: "How agencies use the Google Business API for scaling. Technical setup, use cases and best practices.",
      excerpt: "The technical guide to GBP automation for SEO agencies.",
      category: "Tools & Resources"
    },
    readingTime: 18,
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    icon: "🔌",
    keywords: ["google business api", "gbp api", "seo automatisierung", "agentur tools"],
    featured: false
  },
  {
    slug: "local-seo-checkliste-pdf",
    de: {
      title: "Local SEO Checkliste zum Ausdrucken (PDF Download)",
      metaTitle: "Local SEO Checkliste PDF | Download",
      metaDescription: "Kostenlose Local SEO Checkliste als PDF Download. Alle wichtigen Punkte zum Abhaken für Ihr Unternehmen.",
      excerpt: "Die praktische Checkliste für Ihren Schreibtisch: Jetzt herunterladen!",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO Checklist for Printing (PDF Download)",
      metaTitle: "Local SEO Checklist PDF | Download",
      metaDescription: "Free Local SEO checklist as PDF download. All important points to check off for your business.",
      excerpt: "The practical checklist for your desk: Download now!",
      category: "Tools & Resources"
    },
    readingTime: 5,
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-12",
    icon: "✅",
    keywords: ["local seo checkliste", "seo pdf", "checkliste download", "kostenlose ressourcen"],
    featured: false
  },
  {
    slug: "kostenlose-local-seo-audit-tools",
    de: {
      title: "Kostenlose Local SEO Audit-Tools im Vergleich",
      metaTitle: "Kostenlose Local SEO Audit Tools | Vergleich",
      metaDescription: "Die besten kostenlosen Tools für Ihren Local SEO Audit. Detaillierter Vergleich mit Stärken und Schwächen.",
      excerpt: "SEO-Audit ohne Budget: Diese kostenlosen Tools helfen wirklich.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Free Local SEO Audit Tools Compared",
      metaTitle: "Free Local SEO Audit Tools | Comparison",
      metaDescription: "The best free tools for your Local SEO audit. Detailed comparison with strengths and weaknesses.",
      excerpt: "SEO audit without budget: These free tools really help.",
      category: "Tools & Resources"
    },
    readingTime: 14,
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    icon: "🔍",
    keywords: ["kostenlose audit tools", "free seo tools", "local seo check", "seo analyse kostenlos"],
    featured: false
  },
  {
    slug: "bewertungs-qr-codes",
    de: {
      title: "Bewertungs-QR-Codes erstellen: Anleitung & Best Practices",
      metaTitle: "Bewertungs-QR-Codes | Anleitung 2026",
      metaDescription: "Wie Sie QR-Codes für Google-Bewertungen erstellen. Schritt-für-Schritt Anleitung mit Design-Tipps und Platzierungsideen.",
      excerpt: "Der einfachste Weg zu mehr Bewertungen: QR-Codes richtig einsetzen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Creating Review QR Codes: Guide & Best Practices",
      metaTitle: "Review QR Codes | Guide 2026",
      metaDescription: "How to create QR codes for Google reviews. Step-by-step guide with design tips and placement ideas.",
      excerpt: "The easiest way to more reviews: Using QR codes correctly.",
      category: "Tools & Resources"
    },
    readingTime: 10,
    publishedAt: "2026-04-16",
    updatedAt: "2026-04-16",
    icon: "📱",
    keywords: ["qr code bewertung", "google review qr", "bewertung link", "rezension qr code"],
    featured: false
  },

  // ZUKUNFT & TRENDS
  {
    slug: "local-seo-trends-2027",
    de: {
      title: "Local SEO Trends 2027: Was kommt als Nächstes?",
      metaTitle: "Local SEO Trends 2027 | Zukunft Prognose",
      metaDescription: "Die Local SEO Trends für 2027 und darüber hinaus. AI, AR, Voice und was Sie jetzt schon vorbereiten sollten.",
      excerpt: "Ein Blick in die Zukunft: Worauf Sie sich jetzt vorbereiten sollten.",
      category: "Trends"
    },
    en: {
      title: "Local SEO Trends 2027: What's Coming Next?",
      metaTitle: "Local SEO Trends 2027 | Future Forecast",
      metaDescription: "The Local SEO trends for 2027 and beyond. AI, AR, Voice and what you should prepare for now.",
      excerpt: "A look into the future: What you should prepare for now.",
      category: "Trends"
    },
    readingTime: 16,
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-18",
    icon: "🔮",
    keywords: ["local seo trends", "seo zukunft", "2027 trends", "seo prognose"],
    featured: true
  },
  {
    slug: "zero-click-searches-local-pack",
    de: {
      title: "Zero-Click-Searches & Local Pack: Die neue Realität",
      metaTitle: "Zero-Click-Searches | Local SEO Realität",
      metaDescription: "Wie Zero-Click-Searches Local SEO verändern. Strategien für die neue SERP-Realität und wie Sie trotzdem gewinnen.",
      excerpt: "Wenn niemand mehr klickt: Wie Sie dennoch erfolgreich sein können.",
      category: "Trends"
    },
    en: {
      title: "Zero-Click Searches & Local Pack: The New Reality",
      metaTitle: "Zero-Click Searches | Local SEO Reality",
      metaDescription: "How zero-click searches are changing Local SEO. Strategies for the new SERP reality and how you still win.",
      excerpt: "When no one clicks anymore: How you can still succeed.",
      category: "Trends"
    },
    readingTime: 14,
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-20",
    icon: "0️⃣",
    keywords: ["zero click", "no click searches", "local pack", "serp features"],
    featured: false
  },
  {
    slug: "google-sge-lokale-suche",
    de: {
      title: "Googles Search Generative Experience: Prognose & Vorbereitung für lokale Unternehmen",
      metaTitle: "Google SGE Prognose | Vorbereitung für lokale KMUs 2026",
      metaDescription: "Was Googles Search Generative Experience für lokale KMUs bedeutet. Prognose, Zeitleiste und 5 Vorbereitungsschritte für die AI-SERP.",
      excerpt: "SGE kommt — bist du vorbereitet? Prognose, Zeitleiste und 5 konkrete Schritte zur Vorbereitung.",
      category: "Trends"
    },
    en: {
      title: "Google's Search Generative Experience: Forecast & Preparation for Local Businesses",
      metaTitle: "Google SGE Forecast | Preparation for Local SMBs 2026",
      metaDescription: "What Google's Search Generative Experience means for local SMBs. Forecast, timeline and 5 preparation steps for the AI SERP.",
      excerpt: "SGE is coming — are you prepared? Forecast, timeline and 5 concrete preparation steps.",
      category: "Trends"
    },
    readingTime: 15,
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
    icon: "🧠",
    keywords: ["google sge vorbereitung", "sge prognose", "generative search lokal", "ai serp vorbereitung"],
    featured: true
  },

  // Zusätzliche Local SEO Grundlagen Berlin (für SEO-Abdeckung)
  {
    slug: "local-seo-berlin",
    de: {
      title: "Local SEO in Berlin: sichtbar in den Bezirken und Kiezen, die Sie wirklich bedienen",
      metaTitle: "Local SEO Berlin: gefunden werden in Bezirk und Kiez",
      metaDescription: "Local SEO für Betriebe in Berlin: wie die Entfernung in zwölf Bezirken wirkt, wie Sie Kieze ohne Brückenseiten nennen und Ihre Sichtbarkeit im Raster messen.",
      excerpt: "Local SEO für Betriebe in Berlin: wie die Entfernung in zwölf Bezirken wirkt, wie Sie Kieze ohne Brückenseiten nennen und Ihre Sichtbarkeit im Raster messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Berlin: The Capital City Guide for Businesses",
      metaTitle: "Local SEO Berlin | Capital City Guide 2026",
      metaDescription: "Local SEO specifically for Berlin. Neighborhood keywords, district strategies and local visibility in Germany's largest city.",
      excerpt: "From Mitte to Neukölln: How to be found throughout Berlin.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-01-09",
    updatedAt: "2026-10-12",
    icon: "🐻",
    keywords: ["local seo berlin", "seo berlin", "marketing berlin", "berliner unternehmen"],
    featured: true
  },

  {
    slug: "ki-tools-local-seo",
    de: {
      title: "KI-Tools für Local SEO: Wofür sie taugen, was Google erlaubt und was Datenschutz verlangt",
      metaTitle: "KI-Tools für Local SEO: sicher nutzen im kleinen Betrieb",
      metaDescription: "Wie Sie ChatGPT, Claude, Gemini und Copilot für Bewertungsantworten, Profiltexte und Inhalte nutzen: Googles Regeln, Datenschutz und KI-Kompetenzpflicht.",
      excerpt: "Wie Sie ChatGPT, Claude, Gemini und Copilot für Bewertungsantworten, Profiltexte und Inhalte nutzen: Googles Regeln, Datenschutz und KI-Kompetenzpflicht.",
      category: "Tools"
    },
    en: {
      title: "AI Tools for Local SEO: The Best AI Helpers 2026",
      metaTitle: "AI Tools Local SEO | AI Helper Guide 2026",
      metaDescription: "The best AI tools for local search engine optimization. From ChatGPT to Gemini - how to use AI for your Local SEO.",
      excerpt: "How artificial intelligence takes your Local SEO to the next level.",
      category: "Tools"
    },
    readingTime: 13,
    publishedAt: "2026-01-10",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: ["ki tools seo", "ai local seo", "chatgpt seo", "künstliche intelligenz seo", "ai marketing"],
    featured: true
  },
  {
    slug: "google-ai-overviews-local-seo",
    de: {
      title: "Google AI Overviews (Übersicht mit KI) und Local SEO: Was Google dokumentiert und was Betriebe tun können",
      metaTitle: "Google AI Overviews und Local SEO: Was belegt ist",
      metaDescription: "Übersicht mit KI in Deutschland, Österreich und der Schweiz: wie Google die Quellen wählt, was Sie steuern, wie die Search Console zählt und was Betriebe tun.",
      excerpt: "Übersicht mit KI in Deutschland, Österreich und der Schweiz: wie Google die Quellen wählt, was Sie steuern, wie die Search Console zählt und was Betriebe tun.",
      category: "Trends"
    },
    en: {
      title: "Google AI Overviews & Local SEO: What's Changing",
      metaTitle: "Google AI Overviews | Local SEO Impact 2026",
      metaDescription: "How Google AI Overviews are changing local search. Strategies for businesses to stay visible in the new AI era.",
      excerpt: "The AI revolution at Google: What local businesses need to know and do now.",
      category: "Trends"
    },
    readingTime: 12,
    publishedAt: "2026-01-10",
    updatedAt: "2026-10-11",
    icon: "✨",
    keywords: ["google ai overviews", "ai suche", "sge local seo", "google ki", "generative search"],
    featured: true
  },
  {
    slug: "seo-toolbox-kostenlose-ressourcen",
    de: {
      title: "Die ultimative SEO-Toolbox: 50+ kostenlose Tools & Ressourcen",
      metaTitle: "SEO Toolbox | 50+ Kostenlose Tools & Links 2026",
      metaDescription: "Deine komplette SEO-Toolbox: Über 50 kostenlose Tools für Local SEO, GEO, Google Business & mehr. Mit direkten Links und Anleitungen.",
      excerpt: "Alle Tools, die du für erfolgreiches SEO brauchst - komplett kostenlos und sofort einsetzbar.",
      category: "Tools"
    },
    en: {
      title: "The Ultimate SEO Toolbox: 50+ Free Tools & Resources",
      metaTitle: "SEO Toolbox | 50+ Free Tools & Links 2026",
      metaDescription: "Your complete SEO toolbox: Over 50 free tools for Local SEO, GEO, Google Business & more. With direct links and guides.",
      excerpt: "All the tools you need for successful SEO - completely free and ready to use.",
      category: "Tools"
    },
    readingTime: 22,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🧰",
    keywords: ["seo tools", "kostenlose seo tools", "seo toolbox", "local seo tools", "geo tools", "google business tools"],
    featured: true
  },



  // === NEUE ARTIKEL: JANUAR-FEBRUAR 2026 CONTENT-PLAN ===
  {
    slug: "gbp-fotos-optimieren",
    de: {
      title: "Fotos und Videos im Google-Unternehmensprofil richtig einsetzen",
      metaTitle: "Google Business Fotos: Vorgaben, Motive und Routine",
      metaDescription: "Fotos und Videos im Google-Unternehmensprofil: Googles Vorgaben zu Format und Größe, passende Motive je Branche, Kundenfotos melden, Datenschutz und Routine.",
      excerpt: "Fotos und Videos im Google-Unternehmensprofil: Googles Vorgaben zu Format und Größe, passende Motive je Branche, Kundenfotos melden, Datenschutz und Routine.",
      category: "Google Business"
    },
    en: {
      title: "Optimize Google Business Photos: The Complete Image Guide",
      metaTitle: "Optimize Google Business Photos | Image Guide 2026",
      metaDescription: "How to optimize photos for your Google Business Profile. Image sizes, categories, alt texts and best practices.",
      excerpt: "The ultimate guide to photo optimization for Google Business Profiles.",
      category: "Google Business"
    },
    readingTime: 11,
    publishedAt: "2026-01-12",
    updatedAt: "2026-10-10",
    icon: "📸",
    keywords: ["google business fotos", "gbp bilder", "google maps bilder", "unternehmensfotos", "foto optimierung"],
    featured: false
  },
  {
    slug: "local-seo-mehrstufig-unternehmen",
    de: {
      title: "Local SEO für Franchise-Systeme und Marken mit mehreren Betreibern",
      metaTitle: "Franchise und Marken bei Google: Profile richtig regeln",
      metaDescription: "Franchise-Systeme bei Google: wem das Unternehmensprofil gehört, welche Rollen Zentrale und Partner brauchen, Namensregeln, Standortseiten und Bewertungen.",
      excerpt: "Franchise-Systeme bei Google: wem das Unternehmensprofil gehört, welche Rollen Zentrale und Partner brauchen, Namensregeln, Standortseiten und Bewertungen.",
      category: "Strategie"
    },
    en: {
      title: "Franchise SEO Strategy: GBP Management & Brand Consistency Across Locations",
      metaTitle: "Franchise SEO | GBP Management & Brand Consistency 2026",
      metaDescription: "How franchise businesses centrally manage GBP profiles, ensure brand consistency and enable local autonomy. Strategy guide.",
      excerpt: "The strategy guide for franchise and chain businesses: Central GBP management, NAP consistency and local adaptation.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2026-01-14",
    updatedAt: "2026-10-13",
    icon: "🏢",
    keywords: ["franchise seo strategie", "gbp management filialen", "markenkonsistenz multi location", "franchise google business"],
    featured: false
  },
  {
    slug: "e-e-a-t-lokale-unternehmen",
    de: {
      title: "E-E-A-T für lokale Unternehmen: Expertise beweisen & Vertrauen aufbauen",
      metaTitle: "E-E-A-T für lokale Unternehmen | Trust-Guide 2026",
      metaDescription: "Wie lokale Unternehmen E-E-A-T (Experience, Expertise, Authority, Trust) für bessere Google Rankings nutzen.",
      excerpt: "So baust du als lokales Unternehmen Glaubwürdigkeit und Autorität für bessere Rankings auf.",
      category: "Strategie"
    },
    en: {
      title: "E-E-A-T for Local Businesses: Prove Expertise & Build Trust",
      metaTitle: "E-E-A-T for Local Businesses | Trust Guide 2026",
      metaDescription: "How local businesses use E-E-A-T (Experience, Expertise, Authority, Trust) for better Google rankings.",
      excerpt: "How to build credibility and authority as a local business for better rankings.",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-01-18",
    updatedAt: "2026-01-18",
    icon: "🏆",
    keywords: ["e-e-a-t", "expertise", "authority", "trust", "lokale autorität", "vertrauen aufbauen"],
    featured: false
  },
  {
    slug: "lokale-seo-fuer-neugruender",
    de: {
      title: "Local SEO für Neugründer: Von Null zur lokalen Sichtbarkeit",
      metaTitle: "Local SEO für Neugründer | Startup Guide 2026",
      metaDescription: "Der komplette Local SEO Guide für Gründer und neue Unternehmen. Von der ersten Minute an lokal sichtbar werden.",
      excerpt: "So startest du als Neugründer mit Local SEO durch - Schritt für Schritt von Null an.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Startups: From Zero to Local Visibility",
      metaTitle: "Local SEO for Startups | Beginner Guide 2026",
      metaDescription: "The complete Local SEO guide for founders and new businesses. Become locally visible from day one.",
      excerpt: "How to succeed with Local SEO as a startup - step by step from zero.",
      category: "Strategy"
    },
    readingTime: 18,
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-20",
    icon: "🚀",
    keywords: ["neugründer seo", "startup local seo", "existenzgründung", "neue firma", "lokales marketing startup"],
    featured: false
  },
  {
    slug: "google-business-messaging",
    de: {
      title: "Google Business Messaging eingestellt: So erreichen Kunden Sie heute",
      metaTitle: "Google Business Chat eingestellt: Was jetzt funktioniert",
      metaDescription: "Google hat den Chat im Unternehmensprofil am 31. Juli 2024 beendet. Was Kunden heute sehen und welche Kontaktwege Anfragen bringen: Telefon, WhatsApp, Formular.",
      excerpt: "Google hat den Chat im Unternehmensprofil am 31. Juli 2024 beendet. Was Kunden heute sehen und welche Kontaktwege Anfragen bringen: Telefon, WhatsApp, Formular.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Messaging: Optimize Customer Communication",
      metaTitle: "Google Business Messaging | Chat Guide 2026",
      metaDescription: "How to use Google Business Messaging for better customer communication. Setup, best practices and automation.",
      excerpt: "The complete guide to using Google Business Messaging for more customer interaction.",
      category: "Google Business"
    },
    readingTime: 9,
    publishedAt: "2026-01-30",
    updatedAt: "2026-10-10",
    icon: "💬",
    keywords: ["google business messaging", "gbp chat", "kundenkommunikation", "google chat", "messaging einrichten"],
    featured: false
  },
  {
    slug: "local-seo-physiotherapie",
    de: {
      title: "SEO für Physiotherapie und Heilpraktiker: Leistungen, Verordnung, Hausbesuche und Werberecht",
      metaTitle: "SEO Physiotherapie: Google-Profil, Rezept und Werberecht",
      metaDescription: "SEO für Physiotherapie und Heilpraktiker: Google-Profil mit Hausbesuchen, eine Seite je Leistung, Verordnung verständlich erklärt, Werberecht und Bewertungen.",
      excerpt: "SEO für Physiotherapie und Heilpraktiker: Google-Profil mit Hausbesuchen, eine Seite je Leistung, Verordnung verständlich erklärt, Werberecht und Bewertungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Physical Therapy & Holistic Practitioners: Win Patients",
      metaTitle: "Local SEO Physical Therapy | Practitioner Marketing 2026",
      metaDescription: "Local SEO specifically for physical therapists and holistic practitioners. From treatment keywords to health portals.",
      excerpt: "The industry-specific guide for physical therapists on local patient acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-01",
    updatedAt: "2026-10-12",
    icon: "🏃",
    keywords: ["physiotherapie seo", "heilpraktiker marketing", "local seo therapie", "patientengewinnung", "wellness marketing"],
    featured: false
  },
  {
    slug: "local-seo-notdienst-keywords",
    de: {
      title: "Notdienst-Keywords: So finden Kunden Ihren Betrieb, wenn es dringend ist",
      metaTitle: "Notdienst-Keywords: Gefunden werden, wenn es eilt",
      metaDescription: "Notdienst-Suchen für Schlüsseldienst, Rohrreinigung, Elektro, Heizung und Glas: ehrliche Zeiten, direkte Rufnummer, offene Preise statt unseriöser Angebote.",
      excerpt: "Notdienst-Suchen für Schlüsseldienst, Rohrreinigung, Elektro, Heizung und Glas: ehrliche Zeiten, direkte Rufnummer, offene Preise statt unseriöser Angebote.",
      category: "Strategie"
    },
    en: {
      title: "Emergency Service Keywords: When Customers Search Urgently",
      metaTitle: "Emergency Service Keywords | SEO Guide 2026",
      metaDescription: "How to optimize for emergency search queries. Keywords, Google Ads and local visibility for urgent customer needs.",
      excerpt: "The guide to optimizing for emergency and immediate need search queries.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-02-03",
    updatedAt: "2026-10-12",
    icon: "🚨",
    keywords: ["notdienst seo", "emergency keywords", "sofort hilfe", "24 stunden service", "dringende suche"],
    featured: false
  },
  {
    slug: "google-business-kategorien-guide",
    de: {
      title: "Google Business Kategorien: So wählen Sie die richtige",
      metaTitle: "Google Business Kategorien richtig wählen: Leitfaden",
      metaDescription: "Google-Unternehmensprofil: Haupt- und weitere Kategorien nach Googles Regeln wählen, passende Kategorie finden, Funktionen verstehen und Änderungen umsetzen.",
      excerpt: "Google-Unternehmensprofil: Haupt- und weitere Kategorien nach Googles Regeln wählen, passende Kategorie finden, Funktionen verstehen und Änderungen umsetzen.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Categories: Which Fits Your Business?",
      metaTitle: "Google Business Categories | Complete Guide 2026",
      metaDescription: "Choosing the right Google Business category. Primary and secondary categories, industry overview and optimization tips.",
      excerpt: "The complete guide to choosing the right Google Business categories.",
      category: "Google Business"
    },
    readingTime: 11,
    publishedAt: "2026-02-05",
    updatedAt: "2026-10-10",
    icon: "📁",
    keywords: ["google business kategorien", "gbp category", "branchenkategorie", "kategorie wählen", "unternehmenskategorie"],
    featured: false
  },
  {
    slug: "local-seo-zahnarzt",
    de: {
      title: "Local SEO für Zahnärzte: Profil, Behandlungen, Bewertungen und Notdienst im Rahmen des Berufsrechts",
      metaTitle: "Local SEO Zahnarzt: Profil, Leistungen, Bewertungen, Recht",
      metaDescription: "Local SEO für Zahnarztpraxen: Kategorie und Leistungen im Google-Profil, Werberecht nach HWG und Berufsordnung, Bewertungen, Jameda, Doctolib und Notdienst.",
      excerpt: "Local SEO für Zahnarztpraxen: Kategorie und Leistungen im Google-Profil, Werberecht nach HWG und Berufsordnung, Bewertungen, Jameda, Doctolib und Notdienst.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Dentists: More Patients Through Google",
      metaTitle: "Local SEO Dentist | Dental Marketing 2026",
      metaDescription: "Local SEO specifically for dental practices. From treatment keywords to doctor review portals to website optimization.",
      excerpt: "The industry-specific guide for dentists on local patient acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-08",
    updatedAt: "2026-10-12",
    icon: "🦷",
    keywords: ["zahnarzt seo", "dental marketing", "local seo zahnarzt", "patientengewinnung zahnarzt", "zahnarztpraxis marketing"],
    featured: false
  },
  {
    slug: "lokale-events-marketing",
    de: {
      title: "Lokales Event-Marketing: So finden Menschen in Ihrer Stadt Ihre Veranstaltung",
      metaTitle: "Lokale Events bewerben: Profil, Website und Kalender",
      metaDescription: "So finden Gäste Ihre Veranstaltung: Beitrag im Unternehmensprofil, Event-Daten auf der Website, Stadtkalender und Ticketportale, Zeitplan und Nachbereitung.",
      excerpt: "So finden Gäste Ihre Veranstaltung: Beitrag im Unternehmensprofil, Event-Daten auf der Website, Stadtkalender und Ticketportale, Zeitplan und Nachbereitung.",
      category: "Strategie"
    },
    en: {
      title: "Using Local Events for SEO: Sponsorship & Events",
      metaTitle: "Local Events for SEO | Event Marketing 2026",
      metaDescription: "How to use local events and sponsorship for better Local SEO. Build backlinks, brand awareness and local authority.",
      excerpt: "The guide to using local events for more visibility and better rankings.",
      category: "Strategy"
    },
    readingTime: 10,
    publishedAt: "2026-02-10",
    updatedAt: "2026-10-12",
    icon: "🎉",
    keywords: ["lokale events seo", "sponsoring marketing", "veranstaltungen", "lokale autorität", "event backlinks"],
    featured: false
  },
  {
    slug: "google-business-produkte-services",
    de: {
      title: "Produkte und Dienstleistungen im Google-Unternehmensprofil richtig eintragen",
      metaTitle: "Produkte und Leistungen im Google-Unternehmensprofil",
      metaDescription: "Produkte und Dienstleistungen im Google-Unternehmensprofil richtig eintragen: Editoren je Branche, eigene Leistungen, Preise, Richtlinien und typische Fehler.",
      excerpt: "Produkte und Dienstleistungen im Google-Unternehmensprofil richtig eintragen: Editoren je Branche, eigene Leistungen, Preise, Richtlinien und typische Fehler.",
      category: "Google Business"
    },
    en: {
      title: "Present Google Business Products & Services Optimally",
      metaTitle: "Google Business Products & Services | Guide 2026",
      metaDescription: "How to use products and services in your Google Business Profile. Create catalogs, prices, descriptions and more.",
      excerpt: "The complete guide to optimal use of products and services in GBP.",
      category: "Google Business"
    },
    readingTime: 11,
    publishedAt: "2026-02-12",
    updatedAt: "2026-10-13",
    icon: "🛍️",
    keywords: ["google business produkte", "gbp services", "produktkatalog", "dienstleistungen präsentieren", "preise google"],
    featured: false
  },
  {
    slug: "local-seo-optiker",
    de: {
      title: "Local SEO für Optiker und Hörakustiker: Profil, Sehtest, Hörtest und Werberecht",
      metaTitle: "Local SEO für Optiker und Hörakustiker: Profil und Recht",
      metaDescription: "Local SEO für Augenoptik und Hörakustik: Kategorie, Leistungen und Terminlinks im Google-Profil, Führerschein-Sehtest, Heilmittelwerbegesetz und Bewertungen.",
      excerpt: "Local SEO für Augenoptik und Hörakustik: Kategorie, Leistungen und Terminlinks im Google-Profil, Führerschein-Sehtest, Heilmittelwerbegesetz und Bewertungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Opticians & Hearing Aid Specialists: Win Customers",
      metaTitle: "Local SEO Opticians | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for opticians and hearing aid specialists. From product catalog to appointment booking.",
      excerpt: "The industry-specific guide for opticians on local customer acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-14",
    updatedAt: "2026-10-12",
    icon: "👓",
    keywords: ["optiker seo", "hörakustiker marketing", "local seo optiker", "brillen marketing", "augenoptik seo"],
    featured: false
  },
  {
    slug: "bewertungs-antworten-vorlagen",
    de: {
      title: "Antworten auf Google-Bewertungen: Vorlagen für jede Situation",
      metaTitle: "Antworten auf Google-Bewertungen: 13 Vorlagen",
      metaDescription: "Vorlagen für Antworten auf Google-Bewertungen: von fünf Sternen bis zur unfairen Kritik, mit Googles Regeln, Hinweisen zum Datenschutz und Tipps zum Anpassen.",
      excerpt: "Vorlagen für Antworten auf Google-Bewertungen: von fünf Sternen bis zur unfairen Kritik, mit Googles Regeln, Hinweisen zum Datenschutz und Tipps zum Anpassen.",
      category: "Bewertungen"
    },
    en: {
      title: "Review Response Templates: 50 Templates for Every Situation",
      metaTitle: "Review Response Templates | 50 Templates 2026",
      metaDescription: "50 templates for professional responses to Google reviews. How to respond to positive, negative and neutral reviews.",
      excerpt: "The ultimate collection of response templates for all types of Google reviews.",
      category: "Reviews"
    },
    readingTime: 12,
    publishedAt: "2026-02-16",
    updatedAt: "2026-10-13",
    icon: "📝",
    keywords: ["bewertungen antworten", "review response", "antwort vorlagen", "google rezensionen", "kundenfeedback"],
    featured: true
  },
  {
    slug: "local-seo-elektrotechnik",
    de: {
      title: "Local SEO für Elektriker: So finden Kunden Ihren Elektrobetrieb in der Region",
      metaTitle: "Local SEO für Elektriker: Profil, Notdienst, Nachweise",
      metaDescription: "Elektrobetriebe in DACH sichtbar machen: Einzugsgebiet im Google-Profil, ehrlicher Notdienst, Seiten für Wallbox und PV, echte Nachweise und Bewertungen.",
      excerpt: "Elektrobetriebe in DACH sichtbar machen: Einzugsgebiet im Google-Profil, ehrlicher Notdienst, Seiten für Wallbox und PV, echte Nachweise und Bewertungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Electricians: More Jobs Through Google",
      metaTitle: "Local SEO Electricians | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for electricians and electrical businesses. Emergency service SEO, project images and local visibility.",
      excerpt: "The industry-specific guide for electricians on local job acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-18",
    updatedAt: "2026-10-12",
    icon: "⚡",
    keywords: ["elektriker seo", "elektrotechnik marketing", "local seo elektriker", "elektro notdienst", "elektrofirma marketing"],
    featured: false
  },
  {
    slug: "google-business-insights-verstehen",
    de: {
      title: "Google Business Insights richtig verstehen & nutzen",
      metaTitle: "Google Business Insights | Analytics Guide 2026",
      metaDescription: "So interpretierst du Google Business Insights richtig. Alle Metriken erklärt, Benchmarks und Optimierungstipps.",
      excerpt: "Der komplette Guide zum Verstehen und Nutzen von Google Business Insights.",
      category: "Google Business"
    },
    en: {
      title: "Understanding & Using Google Business Insights Correctly",
      metaTitle: "Google Business Insights | Analytics Guide 2026",
      metaDescription: "How to interpret Google Business Insights correctly. All metrics explained, benchmarks and optimization tips.",
      excerpt: "The complete guide to understanding and using Google Business Insights.",
      category: "Google Business"
    },
    readingTime: 15,
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    icon: "📊",
    keywords: ["google business insights", "gbp analytics", "statistiken verstehen", "performance messen", "google metriken"],
    featured: false
  },
  {
    slug: "local-seo-maler-lackierer",
    de: {
      title: "Local SEO für Maler und Lackierer: Einzugsgebiet, Projektgalerie, Preise und Bewertungen",
      metaTitle: "Local SEO für Maler und Lackierer: Profil, Fotos, Preise",
      metaDescription: "Local SEO für Malerbetriebe in DACH: Einzugsgebiet im Google-Profil, Projektfotos mit Erlaubnis, Saison planen, Preise nach PAngV und echte Bewertungen.",
      excerpt: "Local SEO für Malerbetriebe in DACH: Einzugsgebiet im Google-Profil, Projektfotos mit Erlaubnis, Saison planen, Preise nach PAngV und echte Bewertungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Painters: Win More Jobs Through Google",
      metaTitle: "Local SEO Painters | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for painting businesses. Before-after gallery, color consultation keywords and local visibility.",
      excerpt: "The industry-specific guide for painters on local job acquisition.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-02-22",
    updatedAt: "2026-10-12",
    icon: "🎨",
    keywords: ["maler seo", "lackierer marketing", "local seo maler", "malerbetrieb marketing", "renovierung seo"],
    featured: false
  },
  {
    slug: "lokale-influencer-kooperationen",
    de: {
      title: "Lokale Influencer-Kooperationen: So arbeiten Betriebe ehrlich und wirksam mit Creators aus der Region",
      metaTitle: "Lokale Influencer-Kooperationen: ehrlich und messbar",
      metaDescription: "Wie Café, Hotel, Salon und Handwerksbetrieb mit Creators aus der Region arbeiten: Partner prüfen, Briefing, Nutzungsrechte, Werbekennzeichnung und Messung.",
      excerpt: "Wie Café, Hotel, Salon und Handwerksbetrieb mit Creators aus der Region arbeiten: Partner prüfen, Briefing, Nutzungsrechte, Werbekennzeichnung und Messung.",
      category: "Strategie"
    },
    en: {
      title: "Local Influencer Marketing: Building Partnerships",
      metaTitle: "Local Influencer Marketing | Partnership Guide 2026",
      metaDescription: "How local businesses partner with micro-influencers. From finding to successful campaigns.",
      excerpt: "The guide for local businesses to build influencer partnerships.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-02-24",
    updatedAt: "2026-10-12",
    icon: "🤳",
    keywords: ["lokale influencer", "micro influencer", "influencer marketing", "kooperationen", "lokale reichweite"],
    featured: false
  },
  {
    slug: "local-seo-jahresplanung",
    de: {
      title: "Local SEO Jahresplanung: 12-Monats-Kalender für lokale Unternehmen",
      metaTitle: "Local SEO Jahresplanung | 12-Monats-Kalender 2026",
      metaDescription: "Der komplette Jahresplan für Local SEO. Monatliche Aufgaben, saisonale Optimierung und strategische Meilensteine.",
      excerpt: "Der strukturierte 12-Monats-Plan für nachhaltige Local SEO Erfolge.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Annual Planning: 12-Month Calendar for Local Businesses",
      metaTitle: "Local SEO Annual Planning | 12-Month Calendar 2026",
      metaDescription: "The complete annual plan for Local SEO. Monthly tasks, seasonal optimization and strategic milestones.",
      excerpt: "The structured 12-month plan for sustainable Local SEO success.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-02-28",
    updatedAt: "2026-02-28",
    icon: "📅",
    keywords: ["local seo jahresplan", "seo kalender", "monatliche aufgaben", "seo planung", "marketing kalender"],
    featured: true
  },
  // === TROUBLESHOOTING ARTIKEL ===
  {
    slug: "gbp-suspendiert-reaktivieren",
    de: {
      title: "Google Unternehmensprofil gesperrt: Status verstehen und Einspruch einlegen",
      metaTitle: "Google-Profil gesperrt: Einspruch Schritt für Schritt",
      metaDescription: "Google Unternehmensprofil gesperrt, deaktiviert oder eingeschränkt? Was der Status bedeutet, welche Nachweise Google annimmt und wie der Einspruch abläuft.",
      excerpt: "Google Unternehmensprofil gesperrt, deaktiviert oder eingeschränkt? Was der Status bedeutet, welche Nachweise Google annimmt und wie der Einspruch abläuft.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Profile Suspended – How to Restore It (2026 Guide)",
      metaTitle: "GBP Suspended? How to Reactivate Your Profile | 2026 Guide",
      metaDescription: "Your Google Business Profile was suspended? Learn step by step how to identify a soft or hard suspension and successfully reactivate your profile.",
      excerpt: "The complete guide to reactivating a suspended Google Business Profile with diagnostic tool and appeal templates.",
      category: "Troubleshooting"
    },
    readingTime: 12,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "🚫",
    keywords: ["gbp suspendiert", "google business suspendiert", "profil reaktivieren", "suspension beheben", "google appeal"]
  },
  {
    slug: "gbp-verifizierung-fehlgeschlagen",
    de: {
      title: "Google-Profil lässt sich nicht bestätigen: Ursachen und Lösungen",
      metaTitle: "Google-Profil Bestätigung fehlgeschlagen: was jetzt hilft",
      metaDescription: "Bestätigung des Google Unternehmensprofils abgelehnt oder hängt fest? Ursachen, Anforderungen an das Video, Prüfzeiten, Support und was Sie lassen sollten.",
      excerpt: "Bestätigung des Google Unternehmensprofils abgelehnt oder hängt fest? Ursachen, Anforderungen an das Video, Prüfzeiten, Support und was Sie lassen sollten.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Verification Fails – 8 Solutions for All Problems (2026)",
      metaTitle: "GBP Verification Failed? 8 Solutions | 2026 Guide",
      metaDescription: "Your Google Business verification isn't working? Postcard not received, code invalid or video rejected? Our problem solver wizard shows you the right solution.",
      excerpt: "The complete troubleshooting guide for all Google Business verification problems with interactive problem solver.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "✅",
    keywords: ["gbp verifizierung", "google verifizierung fehlgeschlagen", "postkarte nicht erhalten", "verifizierungscode", "video verifizierung"]
  },
  {
    slug: "duplicate-listing-entfernen",
    de: {
      title: "Doppelte Google-Einträge finden und entfernen: alle offiziellen Wege",
      metaTitle: "Doppelte Google-Einträge entfernen: die Anleitung",
      metaDescription: "Doppelte Google-Profile finden und bereinigen: entfernen, Zugriff anfordern oder in Maps melden. Mit Sonderfällen wie Praxis, Umzug, neuer Name und Abteilung.",
      excerpt: "Doppelte Google-Profile finden und bereinigen: entfernen, Zugriff anfordern oder in Maps melden. Mit Sonderfällen wie Praxis, Umzug, neuer Name und Abteilung.",
      category: "Troubleshooting"
    },
    en: {
      title: "Delete Duplicate Google Listings – Duplicate Listing Guide (2026)",
      metaTitle: "Remove Duplicate Google Listings | Guide 2026",
      metaDescription: "Do you have multiple Google Business listings for the same location? Learn how to find duplicates, properly remove them and prevent future duplications.",
      excerpt: "The complete guide to finding and removing duplicate Google Business listings with interactive checklist.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "📋",
    keywords: ["duplicate listing", "doppelte einträge", "google business duplicate", "duplicate entfernen", "mehrere google einträge"]
  },
  {
    slug: "gbp-bewertung-loeschen-anleitung",
    de: {
      title: "Google-Bewertung löschen lassen: die Anleitung Schritt für Schritt",
      metaTitle: "Google-Bewertung löschen lassen: Anleitung in 3 Wegen",
      metaDescription: "Google-Bewertung löschen lassen: welcher Grund zu welchem Weg passt, wie Sie im Profil, im Bewertungstool und in Maps melden und wann der rechtliche Weg greift.",
      excerpt: "Google-Bewertung löschen lassen: welcher Grund zu welchem Weg passt, wie Sie im Profil, im Bewertungstool und in Maps melden und wann der rechtliche Weg greift.",
      category: "Troubleshooting"
    },
    en: {
      title: "Get Google Review Deleted – Step-by-Step Guide (2026)",
      metaTitle: "Delete Google Review: Guide to Reporting & Removal | 2026",
      metaDescription: "Fake review or defamation on Google? Learn which reviews can be removed and how to successfully take action against unfair reviews.",
      excerpt: "The complete guide to removing inappropriate Google reviews with success strategies and legal options.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "🗑️",
    keywords: ["google bewertung löschen", "fake bewertung melden", "bewertung entfernen", "negative bewertung löschen", "google review löschen"]
  },
  {
    slug: "ranking-ploetzlich-verschwunden",
    de: {
      title: "Plötzlich nicht mehr in Google Maps: Ursachen finden und richtig handeln",
      metaTitle: "Aus Google Maps verschwunden? Ursachen prüfen",
      metaDescription: "Ihr Betrieb ist plötzlich nicht mehr in Google Maps oder im Kartenblock? So prüfen Sie Profilstatus, Änderungen, Duplikate, Kategorie und Google-Updates.",
      excerpt: "Ihr Betrieb ist plötzlich nicht mehr in Google Maps oder im Kartenblock? So prüfen Sie Profilstatus, Änderungen, Duplikate, Kategorie und Google-Updates.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Ranking Suddenly Disappeared – Causes & Immediate Help (2026)",
      metaTitle: "Ranking Disappeared? Diagnosis & Immediate Help | 2026 Guide",
      metaDescription: "Your Google ranking suddenly gone? Find out if it's due to an update, penalty or technical issues. With diagnostic flowchart.",
      excerpt: "Quick diagnosis and solutions when your local Google ranking suddenly drops or disappears.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "📉",
    keywords: ["ranking verschwunden", "google ranking weg", "ranking einbruch", "google penalty", "ranking verloren"]
  },
  {
    slug: "gbp-nicht-in-suche-sichtbar",
    de: {
      title: "Google-Unternehmensprofil nicht in der Suche sichtbar: Ursachen finden und beheben",
      metaTitle: "Google-Profil nicht sichtbar? Ursachen und Lösungen",
      metaDescription: "Ihr Unternehmensprofil erscheint nicht bei Google? So klären Sie, ob es um Status, Bestätigung, Sperrung oder Duplikat geht oder nur um das lokale Ranking.",
      excerpt: "Ihr Unternehmensprofil erscheint nicht bei Google? So klären Sie, ob es um Status, Bestätigung, Sperrung oder Duplikat geht oder nur um das lokale Ranking.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Profile Not Visible in Search – 12 Solutions (2026)",
      metaTitle: "GBP Not Visible in Google? 12 Solutions | 2026 Guide",
      metaDescription: "Your Google Business Profile doesn't appear in search? Find out why and how to become visible again. With diagnostic tool.",
      excerpt: "All reasons why your GBP isn't showing in Google and how to fix the problem.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "👁️",
    keywords: ["gbp nicht sichtbar", "google business nicht gefunden", "profil nicht angezeigt", "maps eintrag fehlt", "gbp indexierung"]
  },
  {
    slug: "gbp-mehrere-standorte",
    de: {
      title: "Mehrere Standorte bei Google verwalten: ein Leitfaden für 2 bis 50 Filialen",
      metaTitle: "Mehrere Standorte im Google-Unternehmensprofil verwalten",
      metaDescription: "Mehrere Filialen bei Google: ein Profil je Standort, einheitlicher Name, Unternehmensgruppen, Rollen, Sammelbestätigung ab zehn Standorten und Standortseiten.",
      excerpt: "Mehrere Filialen bei Google: ein Profil je Standort, einheitlicher Name, Unternehmensgruppen, Rollen, Sammelbestätigung ab zehn Standorten und Standortseiten.",
      category: "Google Business"
    },
    en: {
      title: "Managing Google Business for Multiple Locations – The Multi-Location Guide (2026)",
      metaTitle: "Manage GBP Multiple Locations | Multi-Location Guide 2026",
      metaDescription: "How to efficiently manage multiple Google Business Profiles. Bulk uploads, location groups and best practices for multi-location businesses.",
      excerpt: "The complete guide to managing multiple Google Business locations with bulk tools and organization tips.",
      category: "Google Business"
    },
    readingTime: 12,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "🏢",
    keywords: ["gbp mehrere standorte", "multi location seo", "standortgruppen", "bulk upload", "filialisten google"]
  },
  {
    slug: "gbp-oeffnungszeiten-sondertage",
    de: {
      title: "Öffnungszeiten, Feiertage und Sonderzeiten im Google-Unternehmensprofil",
      metaTitle: "Google Öffnungszeiten, Feiertage und Sonderzeiten pflegen",
      metaDescription: "Öffnungszeiten im Google-Unternehmensprofil pflegen: Feiertage, spezielle und weitere Zeiten, Saisonbetriebe, vorübergehend geschlossen und Website-Markup.",
      excerpt: "Öffnungszeiten im Google-Unternehmensprofil pflegen: Feiertage, spezielle und weitere Zeiten, Saisonbetriebe, vorübergehend geschlossen und Website-Markup.",
      category: "Google Business"
    },
    en: {
      title: "Setting Google Business Hours & Special Days Correctly (2026)",
      metaTitle: "Setting GBP Hours & Holidays | 2026 Guide",
      metaDescription: "How to correctly set opening hours, holidays and special hours in Google Business. With seasonal tips.",
      excerpt: "The complete guide to opening hours in Google Business incl. holidays, vacation periods and special hours.",
      category: "Google Business"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "🕐",
    keywords: ["gbp öffnungszeiten", "google business feiertage", "sonderöffnungszeiten", "betriebsferien eintragen", "öffnungszeiten ändern"]
  },
  {
    slug: "gbp-attribute-richtig-nutzen",
    de: {
      title: "Attribute im Google-Unternehmensprofil richtig nutzen",
      metaTitle: "Google-Attribute im Unternehmensprofil richtig nutzen",
      metaDescription: "Welche Attribute Sie im Google-Unternehmensprofil selbst setzen, was von Kunden kommt, wann ein Eingang als rollstuhlgerecht gilt und welche Angaben schaden.",
      excerpt: "Welche Attribute Sie im Google-Unternehmensprofil selbst setzen, was von Kunden kommt, wann ein Eingang als rollstuhlgerecht gilt und welche Angaben schaden.",
      category: "Google Business"
    },
    en: {
      title: "Using Google Business Attributes Correctly – All Options Explained (2026)",
      metaTitle: "GBP Attributes Guide | All Options Explained 2026",
      metaDescription: "From LGBTQ+-friendly to wheelchair access: What Google Business attributes exist and how to use them for more visibility.",
      excerpt: "The complete overview of all Google Business attributes and how they improve your ranking and customer appeal.",
      category: "Google Business"
    },
    readingTime: 9,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-10",
    icon: "🏷️",
    keywords: ["gbp attribute", "google business attribute", "barrierefreiheit", "lgbtq freundlich", "ausstattungsmerkmale"]
  },
  {
    slug: "local-seo-vs-maps-seo",
    de: {
      title: "Local SEO vs Maps SEO – Was ist der Unterschied? (2026)",
      metaTitle: "Local SEO vs Maps SEO: Der Unterschied erklärt | 2026",
      metaDescription: "Was ist der Unterschied zwischen Local SEO und Google Maps SEO? Wann brauchst du was und wie optimierst du für beides?",
      excerpt: "Die Unterschiede und Gemeinsamkeiten von Local SEO und Maps SEO verständlich erklärt mit konkreten Optimierungstipps.",
      category: "Local SEO"
    },
    en: {
      title: "Local SEO vs Maps SEO – What's the Difference? (2026)",
      metaTitle: "Local SEO vs Maps SEO: The Difference Explained | 2026",
      metaDescription: "What's the difference between Local SEO and Google Maps SEO? When do you need what and how do you optimize for both?",
      excerpt: "The differences and similarities of Local SEO and Maps SEO explained clearly with specific optimization tips.",
      category: "Local SEO"
    },
    readingTime: 8,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🗺️",
    keywords: ["local seo vs maps seo", "unterschied local seo", "google maps seo", "lokale seo", "maps optimierung"]
  },
  {
    slug: "local-citations-2025",
    de: {
      title: "Verzeichnisse in DACH 2026: Welche Branchenbücher und Portale für Ihren Betrieb zählen",
      metaTitle: "Verzeichnisse DACH 2026: Welche Branchenbücher zählen",
      metaDescription: "Welche Branchenbücher und Portale 2026 in Deutschland, Österreich und der Schweiz zählen: nach Land und Branche geordnet, mit Auswahlmethode statt Scores.",
      excerpt: "Welche Branchenbücher und Portale 2026 in Deutschland, Österreich und der Schweiz zählen: nach Land und Branche geordnet, mit Auswahlmethode statt Scores.",
      category: "Local SEO"
    },
    en: {
      title: "Top DACH Directories 2026: Industry-Specific Citation Sources Ranked by Relevance",
      metaTitle: "Top DACH Directories 2026 | Industry-Specific Rankings",
      metaDescription: "Which business directories are still relevant in 2026? Industry-sorted directory list with relevance scores and DA values for DACH.",
      excerpt: "Industry-specifically prioritized directory list for DACH: relevance scores, domain authority and listing tips.",
      category: "Local SEO"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-10-13",
    icon: "📚",
    keywords: ["top verzeichnisse dach", "branchenbücher 2026", "citation quellen", "verzeichnis relevanz", "nap einträge branche"]
  },
  {
    slug: "local-seo-neugruender",
    de: {
      title: "Local SEO für Neugründer: Der Starter-Guide (2026)",
      metaTitle: "Local SEO für Neugründer: Starter-Guide | 2026",
      metaDescription: "Du hast gerade gegründet? So baust du von Anfang an deine lokale Online-Präsenz auf. Mit 90-Tage-Plan und Prioritäten-Guide.",
      excerpt: "Der perfekte Einstieg in Local SEO für Neugründer mit konkretem Zeitplan und Prioritäten.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Startups: The Starter Guide (2026)",
      metaTitle: "Local SEO for Startups: Starter Guide | 2026",
      metaDescription: "Just started your business? How to build your local online presence from the beginning. With 90-day plan and priority guide.",
      excerpt: "The perfect introduction to Local SEO for startups with concrete timeline and priorities.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2025-01-11",
    updatedAt: "2025-01-11",
    icon: "🚀",
    keywords: ["local seo neugründer", "startup seo", "gründer marketing", "neue firma seo", "existenzgründung seo"]
  },
  // === NEUE ARTIKEL: Februar 2026 ===
  {
    slug: "local-seo-baeckerei",
    de: {
      title: "Local SEO für Bäckereien: mehrere Filialen, frühe Öffnungszeiten und Vorbestellung",
      metaTitle: "Local SEO Bäckerei: Filialen, Öffnungszeiten, Vorbestellung",
      metaDescription: "Local SEO für Filialbäckereien: ein Google-Profil je Filiale, frühe Öffnungszeiten und Feiertage pflegen, Sortiment zeigen und die Vorbestellung verlinken.",
      excerpt: "Local SEO für Filialbäckereien: ein Google-Profil je Filiale, frühe Öffnungszeiten und Feiertage pflegen, Sortiment zeigen und die Vorbestellung verlinken.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Bakeries: More Customers Through Google (2026)",
      metaTitle: "Local SEO for Bakeries | Industry Guide 2026",
      metaDescription: "How bakeries win more customers through Local SEO. Opening hours, food photos, keywords and seasonal marketing.",
      excerpt: "The industry guide for bakeries and pastry shops with specific SEO strategies for more walk-in customers.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-02-16",
    updatedAt: "2026-10-12",
    icon: "🥐",
    keywords: ["bäckerei seo", "bäcker local seo", "bäckerei marketing", "konditorei google", "brot seo"]
  },
  {
    slug: "local-seo-hannover",
    de: {
      title: "Local SEO in Hannover: sichtbar in den Stadtbezirken und Umlandorten, die Sie wirklich bedienen",
      metaTitle: "Local SEO Hannover: sichtbar in Stadt und Region",
      metaDescription: "Local SEO für Betriebe in Hannover: wie die Entfernung in 13 Stadtbezirken und der Region wirkt, was zur Messe zählt und wie Sie Sichtbarkeit ehrlich messen.",
      excerpt: "Local SEO für Betriebe in Hannover: wie die Entfernung in 13 Stadtbezirken und der Region wirkt, was zur Messe zählt und wie Sie Sichtbarkeit ehrlich messen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Hannover: The Guide for Lower Saxony Businesses",
      metaTitle: "Local SEO Hannover | City Guide 2026",
      metaDescription: "Local SEO specifically for Hannover and region. Districts, trade fair SEO, local directories and strategies for the state capital.",
      excerpt: "From Linden to Südstadt: How to be found throughout Hannover on Google.",
      category: "Regions"
    },
    readingTime: 11,
    publishedAt: "2026-02-16",
    updatedAt: "2026-10-12",
    icon: "🏛️",
    keywords: ["local seo hannover", "seo hannover", "marketing hannover", "google ranking hannover", "messe hannover seo"],
    featured: true
  },
  {
    slug: "ai-search-optimization-2026",
    de: {
      title: "KI-Suche 2026: Was sich zwischen Oktober 2025 und Oktober 2026 geändert hat und was es für lokale Betriebe bedeutet",
      metaTitle: "KI-Suche 2026: Was sich in einem Jahr geändert hat",
      metaDescription: "Zeitleiste der KI-Suche von Oktober 2025 bis Oktober 2026: was Google, ChatGPT, Bing und Apple geändert haben, was in DACH gilt und was ausgeblieben ist.",
      excerpt: "Zeitleiste der KI-Suche von Oktober 2025 bis Oktober 2026: was Google, ChatGPT, Bing und Apple geändert haben, was in DACH gilt und was ausgeblieben ist.",
      category: "Trends"
    },
    en: {
      title: "AI Search Optimization 2026: How to Be Found in AI Search",
      metaTitle: "AI Search Optimization 2026 | GEO Guide for Local SEO",
      metaDescription: "How to optimize your business for Google AI Overviews, ChatGPT and Perplexity. The complete GEO guide for local businesses.",
      excerpt: "Search is changing: AI Overviews, ChatGPT Search and Zero-Click. How to stay visible as a local business.",
      category: "Trends"
    },
    readingTime: 12,
    publishedAt: "2026-02-16",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: ["ai search optimization", "geo seo", "ai overviews optimierung", "chatgpt seo", "generative engine optimization"],
    featured: true
  },
  {
    slug: "ai-search-vs-traditional-search",
    de: {
      title: "KI-Suche oder klassische Suche: Was lokale Betriebe anders machen sollten",
      metaTitle: "KI-Suche vs. klassische Suche: Was lokal anders ist",
      metaDescription: "KI-Suche und klassische Google-Suche im Vergleich: wie Antworten entstehen, wie Quellen verlinkt werden, was Sie beeinflussen und messen können. Mit Tabelle.",
      excerpt: "KI-Suche und klassische Google-Suche im Vergleich: wie Antworten entstehen, wie Quellen verlinkt werden, was Sie beeinflussen und messen können. Mit Tabelle.",
      category: "AI & Zukunft"
    },
    en: {
      title: "AI Search vs. Traditional Search: The Complete Comparison for Local Businesses",
      metaTitle: "AI Search vs Traditional Search | Comparison 2026",
      metaDescription: "AI search vs. traditional Google search: zero-click, GEO strategies, ranking factors and what local businesses need to do now. With comparison table.",
      excerpt: "ChatGPT, AI Overviews and Perplexity vs. 10 blue links: How search is changing and what local businesses should do.",
      category: "AI & Future"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-11",
    icon: "🤖",
    keywords: ["ai suche vs traditionelle suche", "ai search vs traditional search", "google ai overviews", "zero click search", "geo optimierung", "chatgpt local seo", "ai suchmaschinen vergleich"],
    featured: false
  },
  {
    slug: "seo-ferienwohnungen",
    de: {
      title: "SEO für Ferienwohnungen: so kommen Gäste direkt zu Ihnen",
      metaTitle: "SEO für Ferienwohnungen: mehr Direktbuchungen",
      metaDescription: "SEO für Ferienwohnungen in DE, AT und CH: warum es meist kein Google-Profil gibt, wie die eigene Website Direktbuchungen bringt und was Portale leisten.",
      excerpt: "SEO für Ferienwohnungen in DE, AT und CH: warum es meist kein Google-Profil gibt, wie die eigene Website Direktbuchungen bringt und was Portale leisten.",
      category: "Branche"
    },
    en: {
      title: "SEO for Vacation Rentals: Switzerland, Bavaria & Austria – Escape the OTA Trap",
      metaTitle: "Vacation Rental SEO | Direct Bookings DACH 2026",
      metaDescription: "How vacation rentals save up to 13,500 CHF in OTA commissions through SEO. Google My Business, AI Search & regional strategies for St. Moritz, Zermatt, Bavaria.",
      excerpt: "15% OTA commission per booking? SEO for vacation rentals drives direct bookings, reduces dependency and boosts margins.",
      category: "Industry"
    },
    readingTime: 12,
    publishedAt: "2026-02-25",
    updatedAt: "2026-10-10",
    icon: "🏔️",
    keywords: ["seo ferienwohnungen", "ferienwohnung seo schweiz", "vacation rental seo", "direktbuchungen seo", "google my business ferienwohnung", "local seo tourismus"]
  },
  {
    slug: "local-seo-reporting-template",
    de: {
      title: "Local-SEO-Reporting: die Vorlage für einen Monatsbericht auf einer Seite",
      metaTitle: "Local-SEO-Reporting: Monatsbericht auf einer Seite",
      metaDescription: "Vorlage für einen einseitigen Local-SEO-Monatsbericht: welche Zahl woher kommt, wie Sie Saison und kleine Zahlen lesen und was in die nächsten Schritte gehört.",
      excerpt: "Vorlage für einen einseitigen Local-SEO-Monatsbericht: welche Zahl woher kommt, wie Sie Saison und kleine Zahlen lesen und was in die nächsten Schritte gehört.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Reporting Template: Monthly Report + KPI Template",
      metaTitle: "Local SEO Reporting Template | KPI Template 2026",
      metaDescription: "Free Local SEO report template with 10 KPIs, weekly checklist and ROI calculation. Create monthly reports like a pro.",
      excerpt: "The complete template for professional Local SEO reporting: 10 KPIs, monthly report structure, competitor comparison and ROI calculation.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-13",
    icon: "📊",
    keywords: ["local seo reporting", "local seo report vorlage", "local seo kpis", "seo reporting template", "google business report", "local seo metriken"]
  },
  // === TOPIC HUB PAGES ===
  {
    slug: "case-studies-hub",
    de: {
      title: "Local-SEO-Fallstudien: Ergebnisse prüfen und selbst dokumentieren",
      metaTitle: "Local-SEO-Fallstudien prüfen und selbst dokumentieren",
      metaDescription: "Woran Sie belastbare Local-SEO-Fallstudien erkennen und wie Sie eigene Ergebnisse dokumentieren: Ausgangslage, Messpunkte, Änderungsprotokoll, Leistungsdaten.",
      excerpt: "Woran Sie belastbare Local-SEO-Fallstudien erkennen und wie Sie eigene Ergebnisse dokumentieren: Ausgangslage, Messpunkte, Änderungsprotokoll, Leistungsdaten.",
      category: "Case Study"
    },
    en: {
      title: "Local SEO case studies: how to check results and document your own",
      metaTitle: "Local SEO case studies: how to check results and document your own",
      metaDescription: "How to recognise reliable local SEO case studies and document your own results: baseline, measuring points, change log and performance data.",
      excerpt: "How to recognise reliable local SEO case studies and document your own results: baseline, measuring points, change log and performance data.",
      category: "Case Study"
    },
    readingTime: 4,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "📈",
    keywords: []
  },
  {
    slug: "tools-ressourcen-hub",
    de: {
      title: "Local-SEO-Vorlagen, Checklisten und Werkzeuge im Überblick",
      metaTitle: "Local-SEO-Vorlagen und Checklisten im Überblick",
      metaDescription: "Alle Vorlagen, Checklisten und Pläne für Local SEO an einem Ort: Audit, Keyword-Liste, Einträge, Ranking-Protokoll, Monatsroutine, 12-Wochen-Plan und Werkzeuge.",
      excerpt: "Alle Vorlagen, Checklisten und Pläne für Local SEO an einem Ort: Audit, Keyword-Liste, Einträge, Ranking-Protokoll, Monatsroutine, 12-Wochen-Plan und Werkzeuge.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO templates, checklists and tools in one place",
      metaTitle: "Local SEO templates, checklists and tools in one place",
      metaDescription: "Every local SEO template, checklist and plan in one place: audit, keyword list, listings, ranking log, monthly routine, 12-week plan and free tools.",
      excerpt: "Every local SEO template, checklist and plan in one place: audit, keyword list, listings, ranking log, monthly routine, 12-week plan and free tools.",
      category: "Tools & Resources"
    },
    readingTime: 5,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "🧰",
    keywords: []
  },
  {
    slug: "content-marketing-hub",
    de: {
      title: "Lokales Content Marketing und Links: alle Anleitungen im Überblick",
      metaTitle: "Lokales Content Marketing: alle Anleitungen",
      metaDescription: "Lokales Content Marketing an einem Ort: Suchbegriffe finden, Inhalte für Kunden vor Ort planen, lokale Links und Erwähnungen aufbauen, Firmeneinträge pflegen.",
      excerpt: "Lokales Content Marketing an einem Ort: Suchbegriffe finden, Inhalte für Kunden vor Ort planen, lokale Links und Erwähnungen aufbauen, Firmeneinträge pflegen.",
      category: "Strategie"
    },
    en: {
      title: "Local content marketing and links: every guide in one place",
      metaTitle: "Local content marketing and links: every guide in one place",
      metaDescription: "Local content marketing in one place: find search terms, plan content for local customers, earn local links and mentions, keep business listings consistent.",
      excerpt: "Local content marketing in one place: find search terms, plan content for local customers, earn local links and mentions, keep business listings consistent.",
      category: "Strategy"
    },
    readingTime: 5,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "✍️",
    keywords: []
  },
  {
    slug: "technisches-seo-hub",
    de: {
      title: "Technisches Local SEO: alle Anleitungen im Überblick",
      metaTitle: "Technisches Local SEO: alle Anleitungen im Überblick",
      metaDescription: "Technisches Local SEO an einem Ort: strukturierte Daten, mobile Website, Ladezeit, Standortseiten, Sprachsuche, KI-Crawler und Messung für lokale Betriebe.",
      excerpt: "Technisches Local SEO an einem Ort: strukturierte Daten, mobile Website, Ladezeit, Standortseiten, Sprachsuche, KI-Crawler und Messung für lokale Betriebe.",
      category: "Technik"
    },
    en: {
      title: "Technical local SEO: every guide in one place",
      metaTitle: "Technical local SEO: every guide in one place",
      metaDescription: "Technical local SEO in one place: structured data, mobile website, page speed, location pages, voice search, AI crawlers and measurement for local businesses.",
      excerpt: "Technical local SEO in one place: structured data, mobile website, page speed, location pages, voice search, AI crawlers and measurement for local businesses.",
      category: "Technical"
    },
    readingTime: 5,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "⚙️",
    keywords: []
  },
  {
    slug: "ai-zukunft-hub",
    de: {
      title: "KI-Suche und GEO: alle Anleitungen im Überblick",
      metaTitle: "KI-Suche und GEO: alle Anleitungen im Überblick",
      metaDescription: "KI-Suche für lokale Betriebe an einem Ort: Übersicht mit KI, KI-Modus, ChatGPT, Perplexity, Copilot, KI-Crawler, llms.txt, Messung und falsche Angaben.",
      excerpt: "KI-Suche für lokale Betriebe an einem Ort: Übersicht mit KI, KI-Modus, ChatGPT, Perplexity, Copilot, KI-Crawler, llms.txt, Messung und falsche Angaben.",
      category: "AI & Zukunft"
    },
    en: {
      title: "AI search and GEO: every guide in one place",
      metaTitle: "AI search and GEO: every guide in one place",
      metaDescription: "AI search for local businesses in one place: AI Overviews, AI Mode, ChatGPT, Perplexity, Copilot, AI crawlers, llms.txt, measuring and fixing wrong answers.",
      excerpt: "AI search for local businesses in one place: AI Overviews, AI Mode, ChatGPT, Perplexity, Copilot, AI crawlers, llms.txt, measuring and fixing wrong answers.",
      category: "AI & Future"
    },
    readingTime: 7,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: []
  },
  {
    slug: "troubleshooting-hub",
    de: {
      title: "Probleme mit dem Google-Unternehmensprofil: alle Lösungen im Überblick",
      metaTitle: "Probleme mit dem Google-Profil: alle Lösungen",
      metaDescription: "Google-Profil gesperrt, nicht bestätigt, doppelt oder plötzlich unsichtbar? Hier finden Sie für jedes Problem die passende Anleitung mit den offiziellen Wegen.",
      excerpt: "Google-Profil gesperrt, nicht bestätigt, doppelt oder plötzlich unsichtbar? Hier finden Sie für jedes Problem die passende Anleitung mit den offiziellen Wegen.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Profile problems: every fix in one place",
      metaTitle: "Google Business Profile problems: every fix in one place",
      metaDescription: "Profile suspended, not verified, duplicated or suddenly invisible? Find the right guide for each Google Business Profile problem and the official way to fix it.",
      excerpt: "Profile suspended, not verified, duplicated or suddenly invisible? Find the right guide for each Google Business Profile problem and the official way to fix it.",
      category: "Troubleshooting"
    },
    readingTime: 5,
    publishedAt: "2026-03-09",
    updatedAt: "2026-10-12",
    icon: "🔧",
    keywords: []
  },
  {
    slug: "google-business-profil-hub",
    de: {
      title: "Google-Unternehmensprofil: alle Anleitungen im Überblick",
      metaTitle: "Google-Unternehmensprofil: alle Anleitungen im Überblick",
      metaDescription: "Alle Anleitungen zum Google-Unternehmensprofil an einem Ort: einrichten, Kategorie wählen, Fotos, Öffnungszeiten, mehrere Standorte, KI-Funktionen und Probleme.",
      excerpt: "Alle Anleitungen zum Google-Unternehmensprofil an einem Ort: einrichten, Kategorie wählen, Fotos, Öffnungszeiten, mehrere Standorte, KI-Funktionen und Probleme.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Profile: every guide in one place",
      metaTitle: "Google Business Profile: every guide in one place",
      metaDescription: "Every guide to the Google Business Profile in one place: setup, categories, photos, hours, several locations, AI features and fixing problems.",
      excerpt: "Every guide to the Google Business Profile in one place: setup, categories, photos, hours, several locations, AI features and fixing problems.",
      category: "Google Business"
    },
    readingTime: 6,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "🏢",
    keywords: ["google business profil", "gbp optimierung", "google my business guide", "google business hub"]
  },
  {
    slug: "local-seo-branchen-hub",
    de: {
      title: "Local SEO nach Branche: alle Leitfäden im Überblick",
      metaTitle: "Local SEO nach Branche: alle Leitfäden im Überblick",
      metaDescription: "Local SEO für Ihre Branche: Leitfäden für Hotels, Gastronomie, Handwerk, Praxen, Kanzleien, Steuerberater, Studios und Dienstleister in Deutschland, AT und CH.",
      excerpt: "Local SEO für Ihre Branche: Leitfäden für Hotels, Gastronomie, Handwerk, Praxen, Kanzleien, Steuerberater, Studios und Dienstleister in Deutschland, AT und CH.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO by industry: every guide in one place",
      metaTitle: "Local SEO by industry: every guide in one place",
      metaDescription: "Local SEO for your industry: guides for hotels, hospitality, trades, practices, law and tax firms, studios and local services in DACH.",
      excerpt: "Local SEO for your industry: guides for hotels, hospitality, trades, practices, law and tax firms, studios and local services in DACH.",
      category: "Industries"
    },
    readingTime: 6,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "🏭",
    keywords: ["local seo branchen", "branchen seo guide", "local seo nach branche", "branchenspezifisches seo"]
  },
  {
    slug: "local-seo-staedte-hub",
    de: {
      title: "Local SEO nach Stadt und Land: alle Leitfäden für Deutschland, Österreich und die Schweiz",
      metaTitle: "Local SEO nach Stadt und Land: DACH im Überblick",
      metaDescription: "Local SEO in Deutschland, Österreich und der Schweiz: Leitfäden zu Recht und Verzeichnissen sowie für Berlin, Hamburg, München, Wien, Zürich und weitere Städte.",
      excerpt: "Local SEO in Deutschland, Österreich und der Schweiz: Leitfäden zu Recht und Verzeichnissen sowie für Berlin, Hamburg, München, Wien, Zürich und weitere Städte.",
      category: "Städte"
    },
    en: {
      title: "Local SEO by city and country: Germany, Austria, Switzerland",
      metaTitle: "Local SEO by city and country: Germany, Austria, Switzerland",
      metaDescription: "Local SEO in Germany, Austria and Switzerland: country guides on law and directories, and city guides from Berlin to Vienna and Zurich.",
      excerpt: "Local SEO in Germany, Austria and Switzerland: country guides on law and directories, and city guides from Berlin to Vienna and Zurich.",
      category: "Cities"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "🏙️",
    keywords: ["local seo städte", "local seo berlin", "local seo münchen", "local seo wien", "städte seo guide"]
  },
  {
    slug: "bewertungen-reputation-hub",
    de: {
      title: "Bewertungen und Reputation: alle Anleitungen im Überblick",
      metaTitle: "Google-Bewertungen: alle Anleitungen im Überblick",
      metaDescription: "Alles zu Google-Bewertungen an einem Ort: richtig um Rezensionen bitten, auf Kritik antworten, unzulässige Bewertungen melden und was Sterne wirklich bringen.",
      excerpt: "Alles zu Google-Bewertungen an einem Ort: richtig um Rezensionen bitten, auf Kritik antworten, unzulässige Bewertungen melden und was Sterne wirklich bringen.",
      category: "Bewertungen"
    },
    en: {
      title: "Reviews and reputation: every guide in one place",
      metaTitle: "Reviews and reputation: every guide in one place",
      metaDescription: "Google reviews in one place: asking for reviews within the rules, replying to criticism, reporting reviews and what review stars really do.",
      excerpt: "Google reviews in one place: asking for reviews within the rules, replying to criticism, reporting reviews and what review stars really do.",
      category: "Reviews"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "⭐",
    keywords: ["google bewertungen", "bewertungen management", "reputation management", "review strategie", "bewertungen hub"]
  },
  {
    slug: "website-content-ai-suchmaschinen",
    de: {
      title: "Website-Inhalte für KI-Suche: So schreiben Sie Seiten, die KI-Systeme richtig wiedergeben",
      metaTitle: "Website-Inhalte für KI-Suche: richtig zitiert werden",
      metaDescription: "Wie lokale Betriebe Seiten schreiben, die KI-Systeme korrekt wiedergeben: Antwort zuerst, Fakten als Text, passende Seitentypen und was Google dazu sagt.",
      excerpt: "Wie lokale Betriebe Seiten schreiben, die KI-Systeme korrekt wiedergeben: Antwort zuerst, Fakten als Text, passende Seitentypen und was Google dazu sagt.",
      category: "Technisches SEO"
    },
    en: {
      title: "How to Structure Website Content for AI Search Engines: Complete Guide",
      metaTitle: "Structure Website Content for AI Search Engines | Guide 2026",
      metaDescription: "Learn how to optimize your website content for ChatGPT, Perplexity and Google AI Overviews. Semantic HTML, Schema Markup, llms.txt and AI attributes.",
      excerpt: "Step by step: How to make your website content machine-readable and citable for AI search engines.",
      category: "Technical SEO"
    },
    readingTime: 12,
    publishedAt: "2026-03-05",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: ["ai suchmaschinen", "content struktur ai", "geo optimierung", "schema markup ai", "llms.txt", "website ai optimierung", "chatgpt seo", "perplexity optimierung"]
  },
  // === PILLAR PAGE: LOCAL SEO STRATEGIE FÜR KLEINE UNTERNEHMEN ===
  {
    slug: "local-seo-strategie-kleine-unternehmen",
    de: {
      title: "Local SEO Strategie für kleine Unternehmen: Der komplette Aktionsplan 2026",
      metaTitle: "Local SEO Strategie KMU | Aktionsplan 2026",
      metaDescription: "Die komplette Local-SEO-Strategie für KMU im DACH-Raum: 90-Tage-Plan, Checklisten, Tools & Branchenbeispiele. Kostenlos umsetzbar — ohne Agentur.",
      excerpt: "Schritt-für-Schritt Local-SEO-Strategie für kleine Unternehmen: Google Business Profil, Bewertungen, Citations, Content & Linkbuilding — mit 90-Tage-Aktionsplan für den DACH-Markt.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Strategy for Small Businesses: Complete Action Plan 2026",
      metaTitle: "Local SEO Strategy for Small Businesses | Action Plan 2026",
      metaDescription: "The complete Local SEO strategy for SMBs in the DACH region: 90-day plan, checklists, tools & industry examples. Free to implement — no agency needed.",
      excerpt: "Step-by-step Local SEO strategy for small businesses: Google Business Profile, reviews, citations, content & link building — with a 90-day action plan for the DACH market.",
      category: "Strategy"
    },
    readingTime: 22,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🏪",
    keywords: ["local seo strategie", "local seo kleine unternehmen", "local seo kmu", "lokale seo strategie", "local seo aktionsplan", "local seo dach", "local seo kostenlos", "seo für kleine unternehmen"],
    featured: true
  },
  // === PILLAR PAGE: LOCAL SEO RANKING-FAKTOREN ERKLÄRT ===
  {
    slug: "local-seo-ranking-faktoren-erklaert",
    de: {
      title: "Local SEO Ranking Faktoren erklärt: Relevanz, Entfernung und Bekanntheit mit Beispielen",
      metaTitle: "Local SEO Ranking Faktoren einfach erklärt",
      metaDescription: "Local SEO Ranking Faktoren für Einsteiger: Relevanz, Entfernung und Bekanntheit mit Beispielen, was Sie beeinflussen können und welche Mythen nicht stimmen.",
      excerpt: "Local SEO Ranking Faktoren für Einsteiger: Relevanz, Entfernung und Bekanntheit mit Beispielen, was Sie beeinflussen können und welche Mythen nicht stimmen.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Ranking Factors Explained: All Signals in Detail 2026",
      metaTitle: "Local SEO Ranking Factors 2026 | Complete Analysis",
      metaDescription: "All Local SEO ranking factors: GBP (36%), on-page (18%), reviews (17%), links (13%), citations (7%). Comparison tables & action plan.",
      excerpt: "Complete analysis of all local ranking factors: Google Business Profile, on-page, reviews, links, citations and behavioral signals — with weighting and comparison tables.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "📊",
    keywords: ["local seo ranking faktoren", "lokale ranking faktoren", "google local ranking", "local pack ranking faktoren", "local seo signale", "ranking faktoren local seo 2026", "gbp ranking faktoren"],
    featured: true
  },
  // === PILLAR PAGE: AI-SUCHE FÜR LOKALE UNTERNEHMEN ===
  {
    slug: "ai-suche-lokale-unternehmen",
    de: {
      title: "KI-Suche für lokale Unternehmen: Wo Ihr Betrieb heute erscheint und was Sie zuerst tun sollten",
      metaTitle: "KI-Suche für lokale Unternehmen: Der Überblick 2026",
      metaDescription: "Wo lokale Betriebe in KI-Antworten erscheinen: Google, ChatGPT, Perplexity, Copilot, Claude und Apple. Was jeder Dienst braucht und was zuerst zählt.",
      excerpt: "Wo lokale Betriebe in KI-Antworten erscheinen: Google, ChatGPT, Perplexity, Copilot, Claude und Apple. Was jeder Dienst braucht und was zuerst zählt.",
      category: "AI & Zukunft"
    },
    en: {
      title: "AI Search Optimization for Local Businesses: Complete Guide 2026",
      metaTitle: "AI Search Optimization for Local Businesses | Guide 2026",
      metaDescription: "How AI search engines choose sources and local businesses appear in AI recommendations. GEO strategies, Schema Markup & llms.txt.",
      excerpt: "Everything about AI Search Optimization for local businesses: How ChatGPT, Google AI Overviews and Perplexity choose sources — and how to make your business visible.",
      category: "AI & Future"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: ["ai search optimization", "geo optimierung", "ai suche lokale unternehmen", "chatgpt local seo", "google ai overviews local", "llms.txt", "ai suchmaschinenoptimierung", "generative engine optimization"],
    featured: true
  },
  // === PILLAR PAGE: LOCAL LINK BUILDING BLUEPRINT ===
  {
    slug: "local-link-building-blueprint",
    de: {
      title: "Local Link Building Blueprint: Der 90-Tage-Plan mit Vorlagen für lokale Links",
      metaTitle: "Lokale Links in 90 Tagen: Wochenplan und Vorlagen",
      metaDescription: "90-Tage-Plan für lokale Links: Kammern, Vereine, Partner, Presse und Veranstaltungen Woche für Woche, mit Tracking-Tabelle und E-Mail-Vorlagen auf Deutsch.",
      excerpt: "90-Tage-Plan für lokale Links: Kammern, Vereine, Partner, Presse und Veranstaltungen Woche für Woche, mit Tracking-Tabelle und E-Mail-Vorlagen auf Deutsch.",
      category: "Content & Marketing"
    },
    en: {
      title: "Local Link Building Blueprint: Complete Guide to Local Backlinks 2026",
      metaTitle: "Local Link Building Blueprint | Guide 2026",
      metaDescription: "Comprehensive local link building guide: partnerships, sponsorships, PR, events, outreach templates & 90-day action plan.",
      excerpt: "All local link building strategies in one blueprint: From chamber of commerce links to sponsorships, local PR and outreach templates — with a 90-day action plan.",
      category: "Content & Marketing"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-13",
    icon: "🔗",
    keywords: ["local link building", "lokale backlinks", "lokales linkbuilding", "ihk backlink", "vereinssponsoring seo", "lokale pr linkbuilding", "backlinks lokale unternehmen", "link building dach"],
    featured: true
  },
  // === PILLAR PAGE: COMPLETE LOCAL SEO CHECKLIST ===
  {
    slug: "local-seo-checkliste-komplett",
    de: {
      title: "Local SEO Checkliste: Die komplette Ersteinrichtung für lokale Betriebe",
      metaTitle: "Local SEO Checkliste: Die Ersteinrichtung in 6 Phasen",
      metaDescription: "Die Checkliste für die erste Einrichtung: Unternehmensprofil, Website, Verzeichnisse, Bewertungen, Messung und KI-Suche, jeder Punkt mit Begründung.",
      excerpt: "Die Checkliste für die erste Einrichtung: Unternehmensprofil, Website, Verzeichnisse, Bewertungen, Messung und KI-Suche, jeder Punkt mit Begründung.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Implementation Checklist: 80+ Actions in 8 Phases Systematically Executed",
      metaTitle: "Local SEO Implementation Checklist | 80+ Actions 2026",
      metaDescription: "Systematic Local SEO implementation: 80+ actions in 8 phases — from GBP setup to Schema Markup to reporting. Industry-specifically prioritized.",
      excerpt: "Systematic Local SEO implementation: 80+ actions in 8 phases — with industry-specific prioritization and timeline.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-13",
    icon: "📋",
    keywords: ["local seo implementierung", "local seo maßnahmen", "lokale seo umsetzung", "local seo schritt für schritt", "seo implementierungsplan", "local seo phasen"],
    featured: true
  },
  // === HUB PAGE: GOOGLE MAPS SEO ===
  {
    slug: "google-maps-seo-hub",
    de: {
      title: "Google Maps SEO: alle Anleitungen im Überblick",
      metaTitle: "Google Maps SEO: alle Anleitungen im Überblick",
      metaDescription: "Google Maps SEO an einem Ort: wie Google lokal sortiert, Ranking messen und verbessern, Konkurrenz analysieren, Spam melden, Vorlagen und Apple sowie Bing.",
      excerpt: "Google Maps SEO an einem Ort: wie Google lokal sortiert, Ranking messen und verbessern, Konkurrenz analysieren, Spam melden, Vorlagen und Apple sowie Bing.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps SEO: every guide in one place",
      metaTitle: "Google Maps SEO: every guide in one place",
      metaDescription: "Google Maps SEO in one place: how Google sorts local results, measuring and improving rankings, competitor analysis, spam, Apple Maps and Bing.",
      excerpt: "Google Maps SEO in one place: how Google sorts local results, measuring and improving rankings, competitor analysis, spam, Apple Maps and Bing.",
      category: "Google Maps"
    },
    readingTime: 6,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "🗺️",
    keywords: ["google maps seo", "google maps ranking", "maps optimierung", "google maps marketing", "lokale sichtbarkeit google maps"],
    featured: true
  },
  // === ARTICLE: WIE GOOGLE MAPS RANKING FUNKTIONIERT ===
  {
    slug: "wie-google-maps-ranking-funktioniert",
    de: {
      title: "Wie Google Maps entscheidet, was Sie sehen: eine Suche Schritt für Schritt",
      metaTitle: "Wie Google Maps Treffer auswählt: Schritt für Schritt",
      metaDescription: "Was bei einer Suche in Google Maps passiert: Suchanfrage, Standort, Relevanz, Entfernung, Bekanntheit, Filter, Personalisierung und Anzeigen. Mit Testmethode.",
      excerpt: "Was bei einer Suche in Google Maps passiert: Suchanfrage, Standort, Relevanz, Entfernung, Bekanntheit, Filter, Personalisierung und Anzeigen. Mit Testmethode.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Algorithm Explained: Proximity, Relevance & Prominence in Detail",
      metaTitle: "Google Maps Algorithm: Proximity, Relevance, Prominence",
      metaDescription: "How the Google Maps algorithm works: The 3 pillars proximity, relevance and prominence with practical examples and influence factor diagrams.",
      excerpt: "The Google Maps algorithm is based on 3 pillars: proximity, relevance and prominence. How they interact — with diagrams and industry examples.",
      category: "Google Maps"
    },
    readingTime: 9,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "🗺️",
    keywords: ["google maps algorithmus", "maps algorithmus erklärt", "proximity relevance prominence", "wie google maps funktioniert", "local pack algorithmus"],
    featured: true
  },
  // === SCHEMA STRATEGY DOCUMENT ===
  {
    slug: "schema-strategie-dokument",
    de: {
      title: "Schema-Strategie als Dokument: Welche Seite welche strukturierten Daten bekommt und wer sie pflegt",
      metaTitle: "Schema-Plan für lokale Websites: Vorlage und Pflege",
      metaDescription: "Ein schriftlicher Plan für strukturierte Daten: welcher Seitentyp welches Markup bekommt, wer es pflegt und wie Sie es mit Googles Werkzeugen regelmäßig prüfen.",
      excerpt: "Ein schriftlicher Plan für strukturierte Daten: welcher Seitentyp welches Markup bekommt, wer es pflegt und wie Sie es mit Googles Werkzeugen regelmäßig prüfen.",
      category: "Technisches SEO"
    },
    en: {
      title: "Schema Strategy: When to Use Article, FAQPage, HowTo & LocalBusiness",
      metaTitle: "Schema Strategy: Article, FAQ, HowTo & LocalBusiness",
      metaDescription: "Sitewide schema strategy for local websites: decision matrix, implementation guide and error checklist for Article, FAQPage, HowTo and LocalBusiness schema.",
      excerpt: "Which schema markup belongs on which page? Decision matrix, code examples and implementation guide for the 4 most important schema types in Local SEO.",
      category: "Technical SEO"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-13",
    icon: "🏗️",
    keywords: ["schema strategie", "structured data strategie", "article schema", "faqpage schema", "howto schema", "localbusiness schema", "schema markup guide", "json-ld strategie"],
  },
  // === LOCAL SEO STATISTICS & DATA ===
  {
    slug: "local-seo-statistiken-daten",
    de: {
      title: "Local-SEO-Zahlen: was belegt ist und wie Sie Ihre eigenen Daten erheben",
      metaTitle: "Local-SEO-Zahlen: was belegt ist und was Sie selbst messen",
      metaDescription: "Welche Local-SEO-Zahlen eine echte Quelle haben, warum viele Statistiken nicht taugen und welche Daten Sie kostenlos selbst erheben, mit Monatsvorlage.",
      excerpt: "Welche Local-SEO-Zahlen eine echte Quelle haben, warum viele Statistiken nicht taugen und welche Daten Sie kostenlos selbst erheben, mit Monatsvorlage.",
      category: "Daten & Statistiken"
    },
    en: {
      title: "Local SEO Statistics & Data 2026: 88+ Data Points for 22 Industries",
      metaTitle: "Local SEO Statistics 2026 – 88+ Data Points",
      metaDescription: "88+ current Local SEO statistics for 22 industries: ranking factors, review data, mobile trends and industry-specific benchmarks with sources.",
      excerpt: "The most comprehensive collection of current Local SEO data: ranking factors, review statistics, industry-specific benchmarks and trend forecasts.",
      category: "Data & Statistics"
    },
    readingTime: 12,
    publishedAt: "2026-03-08",
    updatedAt: "2026-10-12",
    icon: "📊",
    keywords: ["local seo statistiken", "local seo daten", "local seo benchmarks", "ranking faktoren 2026", "bewertungsstatistiken", "lokale suche zahlen", "google business profil statistiken", "branchenspezifische seo daten"],
    featured: true,
  },
  {
    slug: "faq-hub",
    de: { title: "Häufige Fragen zu Local SEO: kurze Antworten und wo Sie mehr finden", metaTitle: "Häufige Fragen zu Local SEO: kurze Antworten", metaDescription: "Kurze Antworten auf häufige Fragen zu Local SEO, Google-Unternehmensprofil, Bewertungen, Technik und KI-Suche, mit Links zu den ausführlichen Leitfäden.", excerpt: "Kurze Antworten auf häufige Fragen zu Local SEO, Google-Unternehmensprofil, Bewertungen, Technik und KI-Suche, mit Links zu den ausführlichen Leitfäden.", category: "Ressourcen" },
    en: { title: "Local SEO FAQ: short answers and where to read more", metaTitle: "Local SEO FAQ: short answers and where to read more", metaDescription: "Short answers to common questions about local SEO, the Google Business Profile, reviews, technical SEO and AI search, with links to the full guides.", excerpt: "Short answers to common questions about local SEO, the Google Business Profile, reviews, technical SEO and AI search, with links to the full guides.", category: "Resources" },
    readingTime: 5, publishedAt: "2026-03-08", updatedAt: "2026-10-12", icon: "❓", keywords: ["local seo faq", "local seo fragen", "google business profil faq", "bewertungen faq", "seo fragen antworten"], featured: false
  },
  {
    slug: "faq-local-seo-grundlagen",
    de: { title: "FAQ: Local SEO Grundlagen", metaTitle: "FAQ Local SEO Grundlagen | 10 Antworten", metaDescription: "Die 10 häufigsten Fragen zu Local SEO Grundlagen: Kosten, Dauer, Unterschiede und erste Schritte.", excerpt: "Grundlegende Fragen zu Local SEO beantwortet.", category: "Ressourcen" },
    en: { title: "FAQ: Local SEO Basics", metaTitle: "FAQ Local SEO Basics | 10 Answers", metaDescription: "The 10 most common Local SEO basic questions answered.", excerpt: "Basic Local SEO questions answered.", category: "Resources" },
    readingTime: 8, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "🏠", keywords: ["local seo grundlagen faq", "was ist local seo", "local seo kosten", "local seo dauer"], featured: false
  },
  {
    slug: "faq-google-business-profil",
    de: { title: "FAQ: Google Business Profil", metaTitle: "FAQ Google Business Profil | 10 Antworten", metaDescription: "10 häufig gestellte Fragen zum Google Business Profil: Einrichtung, Verifizierung, Kategorien und Troubleshooting.", excerpt: "Alles zu GBP: Einrichtung, Optimierung, Probleme.", category: "Ressourcen" },
    en: { title: "FAQ: Google Business Profile", metaTitle: "FAQ Google Business Profile | 10 Answers", metaDescription: "10 frequently asked questions about Google Business Profile.", excerpt: "All about GBP: setup, optimization, troubleshooting.", category: "Resources" },
    readingTime: 8, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "📍", keywords: ["google business profil faq", "gbp fragen", "google maps eintrag faq"], featured: false
  },
  {
    slug: "faq-bewertungen-reputation",
    de: { title: "FAQ: Bewertungen & Reputation", metaTitle: "FAQ Google Bewertungen | 8 Antworten", metaDescription: "8 häufig gestellte Fragen zu Google-Bewertungen: Mehr bekommen, negative managen, Ranking-Einfluss.", excerpt: "Bewertungen einholen, beantworten und managen.", category: "Ressourcen" },
    en: { title: "FAQ: Reviews & Reputation", metaTitle: "FAQ Google Reviews | 8 Answers", metaDescription: "8 frequently asked questions about Google reviews.", excerpt: "Getting, responding to and managing reviews.", category: "Resources" },
    readingTime: 6, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "⭐", keywords: ["google bewertungen faq", "bewertungen bekommen faq", "negative bewertungen faq"], featured: false
  },
  {
    slug: "faq-technisches-seo",
    de: { title: "FAQ: Technisches SEO", metaTitle: "FAQ Technisches Local SEO | 10 Antworten", metaDescription: "10 häufig gestellte Fragen zu Schema Markup, Core Web Vitals, NAP-Konsistenz und Mobile-First.", excerpt: "Schema, CWV, NAP, Mobile — technische Fragen beantwortet.", category: "Ressourcen" },
    en: { title: "FAQ: Technical SEO", metaTitle: "FAQ Technical Local SEO | 10 Answers", metaDescription: "10 frequently asked questions about schema markup, core web vitals, NAP consistency.", excerpt: "Schema, CWV, NAP, mobile — technical questions answered.", category: "Resources" },
    readingTime: 8, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "⚙️", keywords: ["technisches seo faq", "schema markup faq", "core web vitals faq", "nap konsistenz faq"], featured: false
  },
  {
    slug: "faq-ai-zukunft-local-seo",
    de: { title: "FAQ: AI & Zukunft im Local SEO", metaTitle: "FAQ AI Local SEO | 8 Antworten", metaDescription: "8 häufig gestellte Fragen zu AI Overviews, GEO, Voice Search und der Zukunft der lokalen Suche.", excerpt: "AI Overviews, GEO, Voice Search — Zukunftsfragen beantwortet.", category: "Ressourcen" },
    en: { title: "FAQ: AI & Future of Local SEO", metaTitle: "FAQ AI Local SEO | 8 Answers", metaDescription: "8 frequently asked questions about AI Overviews, GEO, Voice Search.", excerpt: "AI Overviews, GEO, Voice Search — future questions answered.", category: "Resources" },
    readingTime: 7, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "🤖", keywords: ["ai local seo faq", "google ai overviews faq", "geo optimierung faq", "voice search faq"], featured: false
  },
  {
    slug: "faq-content-marketing-local-seo",
    de: { title: "FAQ: Content & Marketing für Local SEO", metaTitle: "FAQ Content Marketing Local SEO | 8 Antworten", metaDescription: "8 häufig gestellte Fragen zu lokalem Content, Linkbuilding, Citations und Content-Strategien.", excerpt: "Content, Linkbuilding, Citations — Marketing-Fragen beantwortet.", category: "Ressourcen" },
    en: { title: "FAQ: Content & Marketing for Local SEO", metaTitle: "FAQ Content Marketing Local SEO | 8 Answers", metaDescription: "8 frequently asked questions about local content, link building, citations.", excerpt: "Content, link building, citations — marketing questions answered.", category: "Resources" },
    readingTime: 7, publishedAt: "2026-03-08", updatedAt: "2026-03-08", icon: "✍️", keywords: ["local content marketing faq", "lokales linkbuilding faq", "citations faq"], featured: false
  },

  // === GEO CLUSTER (Phase 5 — AI Search & Generative Engine Optimization) ===
  {
    slug: "was-ist-geo-generative-engine-optimization",
    de: { title: "Was ist GEO? Generative Engine Optimization zwischen Forschung, Google-Aussagen und Agenturversprechen", metaTitle: "Was ist GEO? Generative Engine Optimization erklärt", metaDescription: "GEO erklärt: woher der Begriff stammt, was die Studie dahinter wirklich gemessen hat, was Google offiziell sagt und was lokale Betriebe davon brauchen.", excerpt: "GEO erklärt: woher der Begriff stammt, was die Studie dahinter wirklich gemessen hat, was Google offiziell sagt und was lokale Betriebe davon brauchen.", category: "AI & Zukunft" },
    en: { title: "What is GEO? Generative Engine Optimization explained", metaTitle: "GEO Explained: Generative Engine Optimization 2026 | Guide", metaDescription: "GEO (Generative Engine Optimization) is the discipline of optimizing content for AI search engines like ChatGPT, Gemini and Google AI Overviews.", excerpt: "What GEO is, how it differs from classic SEO, and what concrete steps local businesses should take in 2026.", category: "AI & Future" },
    readingTime: 12, publishedAt: "2026-05-20", updatedAt: "2026-10-11", icon: "🤖", keywords: ["geo", "generative engine optimization", "ai seo", "geo vs seo", "ai search optimization"], featured: true
  },
  {
    slug: "chatgpt-zitiert-lokale-unternehmen",
    de: { title: "Wie ChatGPT lokale Unternehmen zitiert: Quellen verstehen und eigene Seiten zitierfähig machen", metaTitle: "Wie ChatGPT lokale Unternehmen zitiert: Quellen verstehen", metaDescription: "Wie ChatGPT Quellen anzeigt, welche Seiten bei lokalen Fragen verlinkt werden und wie Sie für Ihre Branche und Ihren Ort eine eigene Quellenkarte erstellen.", excerpt: "Wie ChatGPT Quellen anzeigt, welche Seiten bei lokalen Fragen verlinkt werden und wie Sie für Ihre Branche und Ihren Ort eine eigene Quellenkarte erstellen.", category: "AI & Zukunft" },
    en: { title: "How does ChatGPT cite local businesses?", metaTitle: "How ChatGPT Cites Local Businesses | Guide 2026", metaDescription: "Which signals ChatGPT uses to recommend local businesses — and how to get cited. With concrete optimization steps.", excerpt: "ChatGPT recommends millions of local businesses daily. Here's how the model decides — and how to land in its answers.", category: "AI & Future" },
    readingTime: 12, publishedAt: "2026-05-20", updatedAt: "2026-10-11", icon: "💬", keywords: ["chatgpt local business", "chatgpt citations", "ai zitierfähigkeit", "chatgpt seo", "llm visibility"], featured: true
  },
  {
    slug: "ai-visibility-index-local-seo-metrik",
    de: { title: "Sichtbarkeit in KI-Antworten messen: So bauen Sie Ihre eigene, ehrliche Kennzahl", metaTitle: "KI-Sichtbarkeit messen: eine ehrliche eigene Kennzahl", metaDescription: "So bauen Sie eine einfache Kennzahl für Ihre Sichtbarkeit in KI-Antworten: Fragenset, Bewertung, Stichprobe, Schwankung und Grenzen, mit Rechenbeispiel.", excerpt: "So bauen Sie eine einfache Kennzahl für Ihre Sichtbarkeit in KI-Antworten: Fragenset, Bewertung, Stichprobe, Schwankung und Grenzen, mit Rechenbeispiel.", category: "AI & Zukunft" },
    en: { title: "AI Visibility Index – the new Local SEO metric 2026", metaTitle: "AI Visibility Index 2026: New Local SEO Metric | Guide", metaDescription: "The AI Visibility Index measures how visible your business is in AI search results across ChatGPT, Gemini, Perplexity and Google AI Overviews.", excerpt: "Classic ranking is no longer enough. The AI Visibility Index measures visibility across all major AI search engines on a single scale.", category: "AI & Future" },
    readingTime: 13, publishedAt: "2026-05-20", updatedAt: "2026-10-12", icon: "📊", keywords: ["ai visibility index", "ai sichtbarkeit messen", "neue seo metriken", "ai retrievability", "geo metrics"], featured: false
  },
  {
    slug: "schema-strategie-ai-retrieval",
    de: { title: "Schema-Strategie für die KI-Suche: Was strukturierte Daten leisten und was ein Mythos ist", metaTitle: "Strukturierte Daten und KI-Suche: was belegt ist", metaDescription: "Brauchen KI-Antworten eigenes Schema Markup? Was Google und Microsoft dokumentieren, welche Daten lokalen Betrieben helfen und welche Versprechen Mythen sind.", excerpt: "Brauchen KI-Antworten eigenes Schema Markup? Was Google und Microsoft dokumentieren, welche Daten lokalen Betrieben helfen und welche Versprechen Mythen sind.", category: "AI & Zukunft" },
    en: { title: "Schema Strategy for AI Retrieval: How to be read by LLMs", metaTitle: "Schema for AI Retrieval 2026: Complete Strategy | Guide", metaDescription: "Which schema markups AI search engines prefer — with copy-paste JSON-LD for local businesses.", excerpt: "AI search engines read structured data differently than Google. Here's the complete schema strategy for maximum AI retrievability.", category: "AI & Future" },
    readingTime: 11, publishedAt: "2026-05-20", updatedAt: "2026-10-12", icon: "🧬", keywords: ["schema ai retrieval", "jsonld llm", "schema markup ai", "ai friendly schema", "geo schema"], featured: false
  },
  {
    slug: "perplexity-claude-lokale-sichtbarkeit",
    de: { title: "Perplexity und Claude: Wie lokale Betriebe dort gefunden und zitiert werden", metaTitle: "Perplexity und Claude für lokale Betriebe: Was belegt ist", metaDescription: "Wie Perplexity und Claude im Web suchen und Quellen zeigen, welche Crawler zählen, was in DACH gilt und wie lokale Betriebe ihre Sichtbarkeit selbst testen.", excerpt: "Wie Perplexity und Claude im Web suchen und Quellen zeigen, welche Crawler zählen, was in DACH gilt und wie lokale Betriebe ihre Sichtbarkeit selbst testen.", category: "AI & Zukunft" },
    en: { title: "Using Perplexity & Claude for local visibility", metaTitle: "Perplexity & Claude for Local SEO 2026 | Guide", metaDescription: "How Perplexity and Claude cite local businesses — and how to become optimally visible on both platforms.", excerpt: "Besides ChatGPT and Gemini, Perplexity and Claude are becoming increasingly important for local search.", category: "AI & Future" },
    readingTime: 12, publishedAt: "2026-05-20", updatedAt: "2026-10-11", icon: "🔮", keywords: ["perplexity local seo", "claude ai seo", "ai assistants local business", "llm zitate", "perplexity citations"], featured: false
  },
  {
    slug: "chatgpt-search-lokale-unternehmen-2026",
    de: {
      title: "ChatGPT Search für lokale Unternehmen: Was OpenAI dokumentiert und was Sie tun können",
      metaTitle: "ChatGPT Search für lokale Unternehmen: Was belegt ist",
      metaDescription: "Wie lokale Betriebe in der ChatGPT-Suche erscheinen: was OpenAI dokumentiert, welche Crawler zählen, was offen ist und wie Sie Ihre Sichtbarkeit selbst prüfen.",
      excerpt: "Wie lokale Betriebe in der ChatGPT-Suche erscheinen: was OpenAI dokumentiert, welche Crawler zählen, was offen ist und wie Sie Ihre Sichtbarkeit selbst prüfen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "ChatGPT Search for Local Businesses 2026 — The Complete Optimization Guide",
      metaTitle: "ChatGPT Search Local SEO 2026: Guide & Checklist",
      metaDescription: "How to get cited in ChatGPT Search 2026 as a local business: 7 ranking signals, 7-step plan, Bing setup, schema, llms.txt. With checklist.",
      excerpt: "ChatGPT Search recommends millions of local businesses daily. Here is the 7-step plan to land in its answers — from robots.txt to Bing Places, schema and answer blocks.",
      category: "AI & Future",
    },
    readingTime: 10,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-10",
    icon: "💬",
    keywords: [
      "chatgpt search",
      "chatgpt search local seo",
      "chatgpt search lokale unternehmen",
      "openai search optimierung",
      "oai-searchbot",
      "bing places chatgpt",
      "ai visibility chatgpt",
    ],
    featured: true,
  },
  {
    slug: "apple-business-connect-local-seo-2026",
    de: {
      title: "Apple Business Connect 2026: Ihr Eintrag in Apple Karten mit Apple Business",
      metaTitle: "Apple Business Connect 2026: Eintrag in Apple Karten",
      metaDescription: "Apple Business Connect heißt seit April 2026 Apple Business. So beanspruchen Sie Ihren Standort in Apple Karten, pflegen Daten und nutzen Showcases in DACH.",
      excerpt: "Apple Business Connect heißt seit April 2026 Apple Business. So beanspruchen Sie Ihren Standort in Apple Karten, pflegen Daten und nutzen Showcases in DACH.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Apple Business Connect: Local SEO for Apple Maps & Siri 2026",
      metaTitle: "Apple Business Connect 2026: Local SEO for Apple Maps & Siri",
      metaDescription: "Complete guide to Apple Business Connect: setup, showcases, Siri optimization and Apple Intelligence readiness for DACH businesses.",
      excerpt: "A third of DACH smartphone users hold an iPhone — and Apple Maps is the default. Here is how to set up Apple Business Connect and optimize for Siri, Spotlight and Apple Intelligence.",
      category: "AI & Future",
    },
    readingTime: 10,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-10",
    icon: "🍎",
    keywords: [
      "apple business connect",
      "apple maps seo",
      "siri local seo",
      "apple intelligence local seo",
      "apple maps ranking",
      "businessconnect apple",
      "ios local seo dach",
    ],
    featured: true,
  },
  {
    slug: "reddit-local-seo-ai-zitate-2026",
    de: {
      title: "Reddit und Foren in KI-Antworten: Was belegt ist, was erlaubt ist und wie lokale Betriebe ehrlich mitreden",
      metaTitle: "Reddit und KI-Antworten: Was lokale Betriebe wissen sollten",
      metaDescription: "Reddit als Quelle für ChatGPT und Google: was die Verträge regeln, was Reddit bei Eigenwerbung erlaubt, wo das UWG Grenzen zieht und wie Sie Erwähnungen finden.",
      excerpt: "Reddit als Quelle für ChatGPT und Google: was die Verträge regeln, was Reddit bei Eigenwerbung erlaubt, wo das UWG Grenzen zieht und wie Sie Erwähnungen finden.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Reddit for Local SEO 2026: How to Get Cited in ChatGPT & Perplexity",
      metaTitle: "Reddit Local SEO 2026: Strategic AI Citation Building",
      metaDescription: "Reddit is the second-most cited source in AI answers after Wikipedia. How to use DACH subreddits legally for ChatGPT, Perplexity and Google AI visibility.",
      excerpt: "Why Reddit threads appear in ChatGPT answers — and how local DACH businesses can build visibility transparently and within EU consumer law.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-12",
    icon: "💬",
    keywords: [
      "reddit local seo",
      "reddit ai zitate",
      "reddit chatgpt zitiert",
      "reddit perplexity",
      "subreddit dach",
      "geo reddit",
      "ai visibility reddit",
    ],
    featured: true,
  },
  {
    slug: "google-ai-mode-local-seo-2026",
    de: {
      title: "Google AI Mode (KI-Modus) und Local SEO: Was Google dokumentiert und was lokale Betriebe tun können",
      metaTitle: "Google AI Mode und Local SEO: Was der KI-Modus ändert",
      metaDescription: "Google KI-Modus in Deutschland, Österreich und der Schweiz: wie das Fan-out sucht, wo Buchen schon geht, was Google verlangt und wie Sie Ihren Betrieb messen.",
      excerpt: "Google KI-Modus in Deutschland, Österreich und der Schweiz: wie das Fan-out sucht, wo Buchen schon geht, was Google verlangt und wie Sie Ihren Betrieb messen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Google AI Mode 2026: Local SEO for Gemini's Conversational Search",
      metaTitle: "Google AI Mode Local SEO 2026: Strategy & Optimization",
      metaDescription: "Google AI Mode is reshaping local search. Here is how to optimize GBP, schema and content for Gemini's query fan-out — 7-step playbook for DACH businesses.",
      excerpt: "Why classic top-3 ranking is no longer enough — and how to position your business for Google's Gemini-powered AI Mode. Includes comparison table, ranking signals and 7-step plan.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-11",
    icon: "✨",
    keywords: [
      "google ai mode",
      "ai mode local seo",
      "gemini local seo",
      "query fan-out",
      "google ai mode dach",
      "ai mode optimierung",
      "google gemini suche local",
    ],
    featured: true,
  },
  {
    slug: "bing-copilot-local-seo-2026",
    de: {
      title: "Bing und Microsoft Copilot für lokale Betriebe: Bing Places, Webmaster Tools und was Microsoft dokumentiert",
      metaTitle: "Bing Local SEO: Bing Places, Copilot, Webmaster Tools",
      metaDescription: "Bing Places, Bing Webmaster Tools und Microsoft Copilot für lokale Betriebe in DACH: was Microsoft dokumentiert, was offen ist und wie Sie selbst testen.",
      excerpt: "Bing Places, Bing Webmaster Tools und Microsoft Copilot für lokale Betriebe in DACH: was Microsoft dokumentiert, was offen ist und wie Sie selbst testen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Bing & Microsoft Copilot 2026: Local SEO for ChatGPT, Edge & Windows",
      metaTitle: "Bing Copilot Local SEO 2026: Setup & Optimization",
      metaDescription: "Bing powers ChatGPT Search and Microsoft Copilot. Here is how to set up Bing Places and optimize for Copilot, Edge and Windows — 7-step plan.",
      excerpt: "Why Bing is again a critical search source in 2026 — and how to optimize Bing Places, schema and robots.txt for Microsoft Copilot, ChatGPT Search and Edge.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-11",
    icon: "🪟",
    keywords: [
      "bing local seo",
      "microsoft copilot seo",
      "bing places",
      "edge copilot local",
      "bingbot robots txt",
      "microsoft 365 copilot suche",
      "bing webmaster tools dach",
    ],
    featured: true,
  },
  {
    slug: "tiktok-search-local-seo-2026",
    de: {
      title: "TikTok als Suchort für lokale Betriebe: Was TikTok dokumentiert und was Sie tun können",
      metaTitle: "TikTok als Suche für lokale Betriebe: Was belegt ist",
      metaDescription: "TikTok als Suchort für lokale Betriebe in DACH: was TikTok dokumentiert, was der Nearby-Feed in Deutschland zeigt, welche Studien es gibt und was sich lohnt.",
      excerpt: "TikTok als Suchort für lokale Betriebe in DACH: was TikTok dokumentiert, was der Nearby-Feed in Deutschland zeigt, welche Studien es gibt und was sich lohnt.",
      category: "AI & Zukunft",
    },
    en: {
      title: "TikTok Search for Local SEO 2026: Get Found by Gen Z",
      metaTitle: "TikTok Local Search 2026: Ranking Signals & 7-Step Plan",
      metaDescription: "40% of Gen Z search for local recommendations on TikTok instead of Google. How to optimize videos, hashtags and location tags for TikTok local search.",
      excerpt: "Why TikTok became a search engine — and how local DACH businesses can systematically get visible in TikTok Search. With ranking signals, content formats and 7-step plan.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-12",
    icon: "🎵",
    keywords: [
      "tiktok local seo",
      "tiktok search",
      "tiktok suchmaschine",
      "gen z local search",
      "tiktok ranking signale",
      "tiktok hashtags lokal",
      "tiktok dach marketing",
    ],
    featured: true,
  },
  {
    slug: "voice-search-sprachassistenten-local-seo-2026",
    de: {
      title: "Sprachassistenten 2026: Siri, Gemini und Alexa für lokale Betriebe in Deutschland, Österreich und der Schweiz",
      metaTitle: "Sprachassistenten 2026: Siri, Gemini, Alexa für Betriebe",
      metaDescription: "Siri, Gemini und Alexa im Herbst 2026: was in Deutschland, Österreich und der Schweiz läuft, woher die Assistenten Ortsdaten holen und was Betriebe pflegen.",
      excerpt: "Siri, Gemini und Alexa im Herbst 2026: was in Deutschland, Österreich und der Schweiz läuft, woher die Assistenten Ortsdaten holen und was Betriebe pflegen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Voice Search 2026: Local SEO for Alexa, Siri & Google Assistant",
      metaTitle: "Voice Search Local SEO 2026: Alexa, Siri & Google Assistant",
      metaDescription: "Voice search is back in 2026 – and finally works. How to optimize for Alexa, Siri and Google Assistant, with a 7-step plan and a DACH comparison table.",
      excerpt: "How LLM-powered voice assistants answer local queries — and how to systematically land in voice recommendations. With platform comparison, ranking signals and 7-step plan.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-12",
    icon: "🎙️",
    keywords: [
      "voice search local seo",
      "alexa local seo",
      "siri local seo",
      "google assistant local",
      "sprachsuche dach",
      "voice search optimierung",
      "smart speaker seo",
    ],
    featured: true,
  },
  {
    slug: "ai-agents-lokale-buchungen-2026",
    de: {
      title: "KI-Agenten, die buchen und anrufen: Was es gibt, wo es funktioniert und was lokale Betriebe vorbereiten sollten",
      metaTitle: "KI-Agenten und lokale Buchungen: Stand Oktober 2026",
      metaDescription: "Welche KI-Agenten Tische reservieren, Termine buchen oder Betriebe anrufen, in welchen Ländern das geht und wie Sie Buchung und Kontakt für Agenten vorbereiten.",
      excerpt: "Welche KI-Agenten Tische reservieren, Termine buchen oder Betriebe anrufen, in welchen Ländern das geht und wie Sie Buchung und Kontakt für Agenten vorbereiten.",
      category: "AI & Zukunft",
    },
    en: {
      title: "AI Agents 2026: How Operator, ChatGPT Agent & Gemini Book Local Services Autonomously",
      metaTitle: "AI Agents Local SEO 2026: Operator, Gemini & Comet Setup",
      metaDescription: "OpenAI Operator, ChatGPT Agent, Gemini Agents and Perplexity Comet now book local services on their own. Get agent-ready with schema, ARIA and a 7-step plan.",
      excerpt: "How autonomous AI agents handle local bookings — and how to systematically make your website, schema and booking path agent-ready. With platform comparison, ranking signals and 7-step plan.",
      category: "AI & Future",
    },
    readingTime: 13,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-12",
    icon: "🤖",
    keywords: [
      "ai agents local seo",
      "openai operator local",
      "chatgpt agent buchung",
      "gemini agent local",
      "perplexity comet browser",
      "agent ready website",
      "reservation schema dach",
    ],
    featured: true,
  },
  {
    slug: "geo-content-briefing-vorlage-2026",
    de: {
      title: "GEO-Content-Briefing: die Vorlage für eine Seite, die KI-Antworten korrekt zitieren können",
      metaTitle: "GEO-Content-Briefing: Vorlage für zitierfähige Seiten",
      metaDescription: "Briefing-Vorlage für eine Seite, die KI-Suchen korrekt zitieren können: alle Felder, ausgefüllte Beispiele für lokale Betriebe und wie Sie das Ergebnis prüfen.",
      excerpt: "Briefing-Vorlage für eine Seite, die KI-Suchen korrekt zitieren können: alle Felder, ausgefüllte Beispiele für lokale Betriebe und wie Sie das Ergebnis prüfen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "GEO Content Briefing 2026: Template for Citable AI-Search Content",
      metaTitle: "GEO Content Briefing 2026: Template & 8 Building Blocks",
      metaDescription: "What a content brief must contain so ChatGPT, Perplexity and Gemini cite your pages: 8 building blocks, a copy-ready template and a pre-publish checklist.",
      excerpt: "Question-based outlines, 40–60-word answer blocks, entity lists and sourced facts: the complete briefing template for content that AI assistants cite.",
      category: "AI & Future",
    },
    readingTime: 13,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F4DD}",
    keywords: [
      "geo content briefing",
      "content briefing vorlage",
      "ai suche content",
      "zitierfaehige texte",
      "answer block seo",
      "generative engine optimization content",
    ],
    featured: true,
  },
  {
    slug: "ai-falschangaben-korrigieren-2026",
    de: {
      title: "Falsche Angaben in KI-Antworten korrigieren: Quelle finden, berichtigen, melden",
      metaTitle: "Falsche Angaben in KI-Antworten korrigieren: der Ablauf",
      metaDescription: "ChatGPT, Google oder Perplexity nennen falsche Zeiten oder Nummern? So finden Sie die Quelle, berichtigen sie und nutzen die Meldewege der Anbieter richtig.",
      excerpt: "ChatGPT, Google oder Perplexity nennen falsche Zeiten oder Nummern? So finden Sie die Quelle, berichtigen sie und nutzen die Meldewege der Anbieter richtig.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Fixing Wrong Business Data in AI Answers 2026: A 6-Step Process",
      metaTitle: "Fix Incorrect AI Answers 2026: Process & Prevention",
      metaDescription: "ChatGPT, Perplexity or Gemini stating wrong numbers, hours or locations? How to trace the source, correct it properly and verify the result.",
      excerpt: "Wrong data in AI answers almost always comes from conflicting sources. The full correction process, from root cause to follow-up measurement.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-11",
    icon: "\u{26A0}\u{FE0F}",
    keywords: [
      "falsche angaben chatgpt unternehmen",
      "ai halluzination firmendaten",
      "nap fehler korrigieren",
      "perplexity falsche oeffnungszeiten",
      "unternehmensdaten bereinigen",
      "ai antwort korrigieren",
    ],
    featured: true,
  },
  {
    slug: "unternehmensprofil-ki-funktionen-2026",
    de: {
      title: "Google-Unternehmensprofil und KI 2026: Was Google dokumentiert und welche Felder Sie pflegen sollten",
      metaTitle: "Unternehmensprofil und Google-KI: Was 2026 belegt ist",
      metaDescription: "Welche KI-Funktionen Google beim Unternehmensprofil nutzt: Rezensions-Zusammenfassungen, Ask Maps, Ersatz für Fragen und Antworten, Stand in DACH und Pflege.",
      excerpt: "Welche KI-Funktionen Google beim Unternehmensprofil nutzt: Rezensions-Zusammenfassungen, Ask Maps, Ersatz für Fragen und Antworten, Stand in DACH und Pflege.",
      category: "Google Business Profile",
    },
    en: {
      title: "Business Profile & AI 2026: Which Fields Reach AI Answers",
      metaTitle: "Business Profile AI Optimization 2026: 7 Fields",
      metaDescription: "Category, services, attributes, Q&A: which profile fields AI summaries actually use and how to fill them — including a monthly maintenance routine.",
      excerpt: "Structured profile fields get cited more often than body copy. The 7 decisive fields, the Q&A format and a monthly maintenance routine.",
      category: "Google Business Profile",
    },
    readingTime: 12,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-11",
    icon: "\u{2728}",
    keywords: [
      "google unternehmensprofil ki",
      "gbp ai optimierung",
      "profil kategorien leistungen",
      "fragen und antworten profil",
      "ai zusammenfassung lokal",
      "standortprofil pflege",
    ],
    featured: true,
  },
  {
    slug: "local-seo-heizung-sanitaer",
    de: {
      title: "Heizung Sanitär Notdienst SEO: So finden Kunden im Notfall Ihren Betrieb",
      metaTitle: "Heizung Sanitär Notdienst SEO: Gefunden im Einzugsgebiet",
      metaDescription: "Notdienst für Heizung und Sanitär sichtbar machen: echte Zeiten, eine direkte Rufnummer, ein ehrliches Einzugsgebiet ohne Städteseiten und klare Preise.",
      excerpt: "Notdienst für Heizung und Sanitär sichtbar machen: echte Zeiten, eine direkte Rufnummer, ein ehrliches Einzugsgebiet ohne Städteseiten und klare Preise.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Plumbing & Heating: Emergencies and Projects",
      metaTitle: "Local SEO Plumbing & Heating 2026 | Trade Guide",
      metaDescription: "Local SEO for plumbing and heating businesses: categories, emergency pages, heat pump projects, reviews and a 90-day plan for predictable jobs.",
      excerpt: "Emergency calls and renovation projects are two separate search occasions. How to serve both properly and win jobs on either side.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F525}",
    keywords: [
      "local seo heizung sanitaer",
      "shk betrieb marketing",
      "klempner google ranking",
      "notdienst seite handwerk",
      "waermepumpe anfragen gewinnen",
      "heizungsbauer sichtbarkeit"
    ],
    featured: false,
  },
  {
    slug: "local-seo-gebaeudereinigung",
    de: {
      title: "Lokale SEO für Gebäudereinigung: So finden Firmenkunden und Verwaltungen Ihren Betrieb",
      metaTitle: "Lokale SEO Gebäudereinigung: Anfragen von Firmenkunden",
      metaDescription: "SEO für Reinigungsfirmen: Profil mit Einzugsgebiet, passende Kategorie, eine Seite je Reinigungsart, echte Nachweise und Bewertungen von Geschäftskunden.",
      excerpt: "SEO für Reinigungsfirmen: Profil mit Einzugsgebiet, passende Kategorie, eine Seite je Reinigungsart, echte Nachweise und Bewertungen von Geschäftskunden.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Commercial Cleaning: Qualified Site Enquiries",
      metaTitle: "Local SEO Commercial Cleaning 2026 | B2B Leads",
      metaDescription: "Local SEO for cleaning companies: one page per service, reference structure, service area and an enquiry form that enables real quoting.",
      excerpt: "Commercial cleaning is a contract business. How to generate qualified enquiries with area, frequency and location instead of price-only requests.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F9FD}",
    keywords: [
      "local seo gebaeudereinigung",
      "reinigungsfirma kunden gewinnen",
      "bueroreinigung anfragen",
      "b2b local seo",
      "unterhaltsreinigung marketing",
      "reinigungsdienst sichtbarkeit"
    ],
    featured: false,
  },
  {
    slug: "local-seo-garten-landschaftsbau",
    de: {
      title: "Local SEO für Garten- und Landschaftsbau: So finden Privatkunden, Verwaltungen und Gemeinden Ihren Betrieb",
      metaTitle: "Local SEO für Garten- und Landschaftsbau: das Gartenjahr",
      metaDescription: "Local SEO für GaLaBau-Betriebe: Profil mit Einzugsgebiet, Projektseiten mit echten Fotos, Pflegeverträge, das Gartenjahr und Bewertungen nach Google-Regeln.",
      excerpt: "Local SEO für GaLaBau-Betriebe: Profil mit Einzugsgebiet, Projektseiten mit echten Fotos, Pflegeverträge, das Gartenjahr und Bewertungen nach Google-Regeln.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Landscaping: Using the Season Correctly",
      metaTitle: "Local SEO Landscaping 2026 | Garden & Grounds",
      metaDescription: "Local SEO for landscaping businesses: seasonal planning, service pages, before-and-after references, enquiry qualification and a yearly plan.",
      excerpt: "Summer jobs are decided in winter. How landscaping businesses build visibility before the season starts.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F333}",
    keywords: [
      "local seo garten landschaftsbau",
      "galabau kunden gewinnen",
      "landschaftsgaertner google ranking",
      "gartenpflege anfragen",
      "gartengestaltung marketing",
      "galabau sichtbarkeit"
    ],
    featured: false,
  },
  {
    slug: "whatsapp-business-local-seo-2026",
    de: {
      title: "WhatsApp Business für lokale Unternehmen 2026: Setup, NAP-Regeln & Recht",
      metaTitle: "WhatsApp Business Local SEO 2026: Setup & Rechtsrahmen",
      metaDescription: "WhatsApp Business richtig aufsetzen: Profilangaben, wa.me-Einbindung, NAP-Konsistenz, Antwortzeiten und Datenschutz — mit 7-Schritte-Setup für lokale Betriebe.",
      excerpt: "Der Messenger ist der kürzeste Weg von der Suche zur Anfrage. So richtest du Profil, Website-Einbindung und Standortverknüpfung sauber und rechtssicher ein.",
      category: "Local SEO Grundlagen",
    },
    en: {
      title: "WhatsApp Business for Local Businesses 2026: Setup, NAP Rules & Compliance",
      metaTitle: "WhatsApp Business Local SEO 2026: Setup & Compliance",
      metaDescription: "Set up WhatsApp Business properly: profile fields, wa.me links, NAP consistency, response times and data protection — with a 7-step setup for local businesses.",
      excerpt: "The messenger is the shortest path from search to enquiry. How to set up profile, website integration and location linkage cleanly and compliantly.",
      category: "Local SEO Basics",
    },
    readingTime: 10,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-08",
    icon: "\u{1F4AC}",
    keywords: [
      "whatsapp business local seo",
      "wa.me link website",
      "whatsapp unternehmensprofil",
      "nap konsistenz messenger",
      "whatsapp datenschutz unternehmen",
      "chat kanal lokale kunden",
    ],
    featured: false,
  },
  {
    slug: "ai-crawler-steuern-gptbot-claudebot-2026",
    de: {
      title: "KI-Crawler steuern: GPTBot, ClaudeBot, PerplexityBot und Google-Extended richtig einstellen",
      metaTitle: "KI-Crawler steuern: GPTBot, ClaudeBot, PerplexityBot",
      metaDescription: "Welche KI-Crawler es gibt und wie Sie sie per robots.txt und Bot-Schutz steuern: geprüfte Tabelle, fertige Beispiele und eine Entscheidungshilfe für Betriebe.",
      excerpt: "Welche KI-Crawler es gibt und wie Sie sie per robots.txt und Bot-Schutz steuern: geprüfte Tabelle, fertige Beispiele und eine Entscheidungshilfe für Betriebe.",
      category: "AI & Zukunft",
    },
    en: {
      title: "Managing AI Crawlers 2026: Configure GPTBot, ClaudeBot & PerplexityBot",
      metaTitle: "AI Crawler Control 2026: robots.txt for GPTBot & Co.",
      metaDescription: "Which AI crawlers to allow or block — with a user-agent table, a ready-to-use robots.txt template and a 6-step setup for local businesses.",
      excerpt: "GPTBot, ClaudeBot, PerplexityBot and Google-Extended decide whether your business appears in AI answers. The full configuration guide incl. robots.txt template.",
      category: "AI & Future",
    },
    readingTime: 13,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-11",
    icon: "\u{1F916}",
    keywords: [
      "ai crawler steuern",
      "gptbot robots.txt",
      "claudebot blockieren",
      "perplexitybot",
      "google-extended",
      "applebot-extended",
      "ai crawler local seo",
    ],
    featured: true,
  },
  {
    slug: "ai-zitat-monitoring-local-seo-2026",
    de: {
      title: "KI-Zitate überwachen: die Monatsroutine für lokale Betriebe mit Stichproben, Berichten und Logs",
      metaTitle: "KI-Zitate überwachen: Routine und Werkzeuge 2026",
      metaDescription: "So prüfen Sie, ob KI-Dienste Ihren Betrieb nennen: Stichproben, Search Console, Bing AI Performance, utm_source=chatgpt.com, Server-Logs und ihre Grenzen.",
      excerpt: "So prüfen Sie, ob KI-Dienste Ihren Betrieb nennen: Stichproben, Search Console, Bing AI Performance, utm_source=chatgpt.com, Server-Logs und ihre Grenzen.",
      category: "AI & Zukunft",
    },
    en: {
      title: "AI Citation Monitoring 2026: Measure Mentions in ChatGPT, Perplexity & Gemini",
      metaTitle: "AI Citation Monitoring 2026: 5 Metrics & Prompt Set",
      metaDescription: "How to systematically measure whether ChatGPT, Perplexity, Gemini and Copilot mention your business — with 5 metrics, a prompt set and a monthly routine.",
      excerpt: "Rankings are losing meaning. This monitoring system measures mention rate, link accuracy and factual correctness in AI answers — in under 60 minutes per month.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-08-08",
    updatedAt: "2026-10-12",
    icon: "\u{1F4CA}",
    keywords: [
      "ai zitat monitoring",
      "ai sichtbarkeit messen",
      "chatgpt erwaehnungen tracken",
      "perplexity monitoring",
      "gemini local seo messung",
      "ai visibility kpi",
      "share of model",
    ],
    featured: true,
  },
  {
    slug: "llms-txt-lokale-unternehmen-2026",
    de: {
      title: "llms.txt für lokale Unternehmen: Was die Datei kann, was nicht und ob sie sich lohnt",
      metaTitle: "llms.txt für lokale Unternehmen: Was belegt ist",
      metaDescription: "Was llms.txt ist, wer die Datei vorgeschlagen hat, was Google, OpenAI, Anthropic und Perplexity dazu sagen und ob sich der Aufwand für Ihren Betrieb lohnt.",
      excerpt: "Was llms.txt ist, wer die Datei vorgeschlagen hat, was Google, OpenAI, Anthropic und Perplexity dazu sagen und ob sich der Aufwand für Ihren Betrieb lohnt.",
      category: "AI & Zukunft",
    },
    en: {
      title: "llms.txt for Local Businesses 2026: Setup, Example & Best Practices",
      metaTitle: "llms.txt Local SEO 2026: Spec, Example & 7-Step Setup",
      metaDescription: "A spec-compliant llms.txt makes ChatGPT, Claude and Perplexity cite the right service pages. Structure, example and 7-step setup for local DACH businesses.",
      excerpt: "How a 40–80-line llms.txt at the site root measurably increases citation rates in ChatGPT, Perplexity and Claude — incl. full example and 7-step setup.",
      category: "AI & Future",
    },
    readingTime: 12,
    publishedAt: "2026-05-22",
    updatedAt: "2026-10-11",
    icon: "📄",
    keywords: [
      "llms.txt",
      "llms txt local seo",
      "llms.txt beispiel",
      "chatgpt zitate seo",
      "perplexity crawler optimierung",
      "claudebot llms.txt",
      "ai crawler steuerung",
    ],
    featured: true,
  },
];

// Slugs that have actual page components and routes
const PUBLISHED_SLUGS = new Set([
  "case-studies-hub",
  "tools-ressourcen-hub",
  "content-marketing-hub",
  "technisches-seo-hub",
  "ai-zukunft-hub",
  "troubleshooting-hub",
  "kostenloses-seo-guide",
  "local-seo-keywords-finden",
  "google-maps-ranking-verbessern",
  "google-bewertungen-bekommen",
  "local-seo-fuer-restaurants",
  "google-my-business-optimieren",
  "lokale-suchmaschinenoptimierung-2026",
  "nap-konsistenz-local-seo",
  "local-seo-handwerker",
  "local-seo-audit-checkliste",
  "local-seo-schweiz",
  "local-seo-zuerich",
  "local-seo-muenchen",
  "local-seo-aerzte-praxen",
  "local-seo-anwaelte-kanzleien",
  "local-seo-hotels",
  "local-seo-fitness",
  "schema-markup-local-seo",
  "mobile-local-seo",
  "google-maps-seo-ranking-faktoren",
  "local-link-building",
  "negative-google-bewertungen",
  "local-content-marketing",
  "local-seo-case-study-baecker",
  "local-seo-fehler",
  "local-seo-doener-kebab-imbiss",
  "local-seo-friseursalon-beauty",
  "local-seo-immobilienmakler",
  "local-seo-hamburg",
  "local-seo-steuerberater",
  "local-seo-autowerkstatt",
  "local-seo-frankfurt",
  "core-web-vitals-local-seo",
  "local-seo-berlin",
  "local-seo-koeln",
  "local-seo-wien",
  "local-seo-tierarzt",
  "ki-tools-local-seo",
  "google-ai-overviews-local-seo",
  "seo-toolbox-kostenlose-ressourcen",
  "local-seo-stuttgart",
  "local-seo-duesseldorf",
  "local-seo-basel",
  "local-seo-yoga-studios",
  "local-seo-tattoo-studios",
  "local-seo-apotheken",
  "gbp-fotos-optimieren",
  "local-seo-mehrstufig-unternehmen",
  "e-e-a-t-lokale-unternehmen",
  "lokale-seo-fuer-neugruender",
  "google-business-messaging",
  "local-seo-physiotherapie",
  "local-seo-notdienst-keywords",
  "google-business-kategorien-guide",
  "local-seo-zahnarzt",
  "lokale-events-marketing",
  "google-business-produkte-services",
  "local-seo-optiker",
  "bewertungs-antworten-vorlagen",
  "local-seo-elektrotechnik",
  "google-business-insights-verstehen",
  "local-seo-fotograf",
  "local-seo-voice-search",
  "google-posts-ranking-faktor",
  "gbp-suspendiert-reaktivieren",
  "gbp-verifizierung-fehlgeschlagen",
  "duplicate-listing-entfernen",
  "gbp-bewertung-loeschen-anleitung",
  "ranking-ploetzlich-verschwunden",
  "gbp-nicht-in-suche-sichtbar",
  "gbp-mehrere-standorte",
  "gbp-oeffnungszeiten-sondertage",
  "gbp-attribute-richtig-nutzen",
  "local-seo-vs-maps-seo",
  "local-citations-2025",
  "local-seo-baeckerei",
  "local-seo-hannover",
  "ai-search-optimization-2026",
  "seo-ferienwohnungen",
  "technisches-local-seo-guide",
  "localbusiness-schema-implementierung",
  "review-schema-implementierung",
  "local-seo-reporting-template",
  "google-business-profil-hub",
  "local-seo-branchen-hub",
  "local-seo-staedte-hub",
  "bewertungen-reputation-hub",
  "website-content-ai-suchmaschinen",
  "local-seo-strategie-kleine-unternehmen",
  "local-seo-ranking-faktoren-erklaert",
  "ai-suche-lokale-unternehmen",
  "local-link-building-blueprint",
  "local-seo-checkliste-komplett",
  "google-maps-seo-hub",
  "wie-google-maps-ranking-funktioniert",
  "google-maps-spam-erkennen",
  "google-maps-konkurrenzanalyse",
  "google-maps-ranking-case-studies",
  "google-maps-audit-template",
  "citation-tracking-template",
  "local-keyword-research-template",
  "local-seo-monthly-checklist",
  "google-maps-ranking-tracker",
  "local-seo-strategy-planner",
  "local-seo-roadmap-90-tage",
  "entity-seo-guide",
  "semantic-seo-topical-authority",
  "schema-strategie-dokument",
  "local-seo-statistiken-daten",
  "ai-visibility-checklist",
  "local-seo-vs-organisch",
  "google-maps-seo-vs-organic-seo",
  "ai-search-vs-traditional-search",
  "faq-hub",
  "faq-local-seo-grundlagen",
  "faq-google-business-profil",
  "faq-bewertungen-reputation",
  "faq-technisches-seo",
  "faq-ai-zukunft-local-seo",
  "faq-content-marketing-local-seo",
  "ultimate-guide-local-seo",
  "technisches-seo-hub",
  "content-marketing-hub",
  "tools-ressourcen-hub",
  "ai-zukunft-hub",
  "troubleshooting-hub",
  "case-studies-hub",
  "was-ist-geo-generative-engine-optimization",
  "chatgpt-zitiert-lokale-unternehmen",
  "ai-visibility-index-local-seo-metrik",
  "schema-strategie-ai-retrieval",
  "perplexity-claude-lokale-sichtbarkeit",
  "chatgpt-search-lokale-unternehmen-2026",
  "apple-business-connect-local-seo-2026",
  "reddit-local-seo-ai-zitate-2026",
  "google-ai-mode-local-seo-2026",
  "bing-copilot-local-seo-2026",
  "tiktok-search-local-seo-2026",
  "voice-search-sprachassistenten-local-seo-2026",
  "ai-agents-lokale-buchungen-2026",
  "llms-txt-lokale-unternehmen-2026",
  "ai-crawler-steuern-gptbot-claudebot-2026",
  "ai-zitat-monitoring-local-seo-2026",
  "geo-content-briefing-vorlage-2026",
  "whatsapp-business-local-seo-2026",
  "ai-falschangaben-korrigieren-2026",
  "unternehmensprofil-ki-funktionen-2026",
  "local-seo-heizung-sanitaer",
  "local-seo-gebaeudereinigung",
  "local-seo-garten-landschaftsbau",
  "local-seo-umzugsunternehmen",
  "local-seo-maler-lackierer",
  "local-seo-fahrschule",
  "local-seo-cafe-coffeeshop",
  "local-seo-sprachschule",
  "local-seo-hochzeitsdienstleister",
  "lokale-landing-pages",
  "local-seo-tracking-kpis",
]);

// Get only published articles (with pages), deduplicated
const getPublishedArticles = (): BlogArticle[] => {
  const seen = new Set<string>();
  return blogArticles.filter(a => {
    if (!PUBLISHED_SLUGS.has(a.slug) || seen.has(a.slug)) return false;
    seen.add(a.slug);
    return true;
  });
};

export const resolveArticle = (article: BlogArticle, language: Language): ResolvedBlogArticle => {
  const content = article[language];
  const reviewMeta = getArticleReviewMeta(article.slug);
  return {
    slug: article.slug,
    title: content.title,
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    excerpt: content.excerpt,
    category: content.category,
    readingTime: article.readingTime,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    icon: article.icon,
    keywords: article.keywords,
    featured: article.featured,
    lastReviewedAt: reviewMeta?.lastReviewedAt,
    lastReviewedBy: reviewMeta?.lastReviewedBy,
  };
};

export const getArticleBySlug = (slug: string, language: Language = "de"): ResolvedBlogArticle | undefined => {
  const article = blogArticles.find(a => a.slug === slug);
  if (!article) return undefined;
  return resolveArticle(article, language);
};

export const getAllArticles = (language: Language = "de"): ResolvedBlogArticle[] => {
  return getPublishedArticles().map(a => resolveArticle(a, language));
};

export const getRelatedArticles = (currentSlug: string, count: number = 5, language: Language = "de"): ResolvedBlogArticle[] => {
  const published = getPublishedArticles();
  const current = published.find(a => a.slug === currentSlug);
  if (!current) {
    return published.filter(a => a.slug !== currentSlug).slice(0, count).map(a => resolveArticle(a, language));
  }
  
  const currentCategory = current[language].category;
  const currentKeywords = new Set(current.keywords.map(k => k.toLowerCase()));
  
  // Score each article by relevance: keyword overlap + category match
  const scored = published
    .filter(a => a.slug !== currentSlug)
    .map(a => {
      let score = 0;
      // Keyword overlap (strongest signal)
      const overlap = a.keywords.filter(k => currentKeywords.has(k.toLowerCase())).length;
      score += overlap * 3;
      // Same category
      if (a[language].category === currentCategory) score += 2;
      // Featured articles get a small boost
      if (a.featured) score += 1;
      return { article: a, score };
    })
    .sort((a, b) => b.score - a.score);
  
  return scored.slice(0, count).map(s => resolveArticle(s.article, language));
};

export const getCategories = (language: Language = "de"): string[] => {
  const categories = new Set(getPublishedArticles().map(a => a[language].category));
  return Array.from(categories);
};

export const getArticleCountByCategory = (language: Language = "de"): Record<string, number> => {
  return getPublishedArticles().reduce((acc, article) => {
    const category = article[language].category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};
