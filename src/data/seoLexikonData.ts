export interface RelatedArticle {
  slug: string;
  title: string;
}

export interface BestPracticeExample {
  title: string;
  description: string;
  url: string;
  source: string;
}

export interface SEOTerm {
  letter: string;
  term: string;
  shortDescription: string;
  fullDescription: string;
  /** Concise 40-60 word definition optimized for Google Featured Snippets. Starts with "[Term] ist/bezeichnet/sind..." */
  snippetDefinition?: string;
  features: string[];
  benefits: string[];
  relatedTerms: string[];
  difficulty: "anfänger" | "fortgeschritten" | "experte";
  importance: 1 | 2 | 3 | 4 | 5;
  relatedArticles?: RelatedArticle[];
  bestPracticeExample?: BestPracticeExample;
}

export const seoLexikonData: SEOTerm[] = [
  // === A ===
  {
    letter: "A",
    term: "Algorithmus-Update",
    shortDescription: "Ein Algorithmus-Update ist eine Änderung an Googles Ranking-Systemen, die die Platzierung von Websites verändern kann.",
    snippetDefinition: "Ein Algorithmus-Update ist eine Änderung, die Google an seinen Ranking-Systemen vornimmt, um die Qualität der Suchergebnisse zu verbessern. Größere Änderungen wie Core Updates oder Spam Updates können die Platzierungen vieler Websites verändern. Google passt seine Systeme laufend an; größere Updates kündigt Google im Search Status Dashboard an.",
    fullDescription: "Algorithmus-Updates sind Änderungen an Googles Ranking-Systemen. Core Updates und Spam Updates können die Platzierungen vieler Websites verändern. Wer nach einem Update verliert, hat nicht zwingend einen Fehler gemacht. Für lokale Unternehmen heißt das: Angaben aktuell halten und Inhalte veröffentlichen, die Kunden wirklich weiterhelfen.",
    features: [
      "Core Updates",
      "Spam Updates",
      "Laufende kleinere Änderungen",
      "Statusmeldungen im Google Search Status Dashboard"
    ],
    benefits: [
      "Ranking-Schwankungen besser einordnen",
      "Nicht auf jede Schwankung überreagieren",
      "Qualität statt Tricks",
      "Entwicklung in der Search Console beobachten"
    ],
    relatedTerms: ["E-E-A-T", "Quality Raters", "White Hat SEO", "Technical SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Core Updates verstehen",
      description: "Offizielle Google-Dokumentation über Core Updates und wie man sich darauf vorbereitet.",
      url: "https://developers.google.com/search/updates/core-updates",
      source: "Google Search Central"
    }
  },
  {
    letter: "A",
    term: "Alt-Text",
    shortDescription: "Alt-Text ist ein alternativer Beschreibungstext für Bilder, den Screenreader vorlesen und den Suchmaschinen zum Verständnis des Bildes nutzen.",
    snippetDefinition: "Alt-Text (Alternativtext) ist eine im HTML-Code hinterlegte Beschreibung eines Bildes. Screenreader lesen sie sehbehinderten Nutzern vor, Suchmaschinen nutzen sie gemeinsam mit dem Umfeld des Bildes, um den Inhalt zu verstehen. Gut ist ein kurzer, sachlicher Text, der beschreibt, was zu sehen ist. Ein Ortsname gehört hinein, wenn er zum Bild passt.",
    fullDescription: "Alt-Text (Alternativtext) ist eine Beschreibung von Bildern, die im HTML-Code hinterlegt wird. Er wird Nutzern mit Sehbehinderung vorgelesen und hilft Suchmaschinen zu verstehen, was auf einem Bild zu sehen ist. Er sollte beschreiben, was tatsächlich zu sehen ist, und kein Platz für aneinandergereihte Suchbegriffe sein.",
    features: [
      "Barrierefreiheit für sehbehinderte Nutzer",
      "Bildverständnis für Suchmaschinen",
      "Erscheint, wenn das Bild nicht lädt",
      "Ortsnamen nur, wenn sie zum Bild passen"
    ],
    benefits: [
      "Bessere Barrierefreiheit der Website",
      "Hilft Suchmaschinen, Bilder zu verstehen",
      "Bilder können in der Google-Bildersuche auffindbar sein",
      "Bessere Nutzbarkeit, wenn Bilder nicht laden"
    ],
    relatedTerms: ["Image SEO", "On-Page SEO", "Technical SEO", "Barrierefreiheit"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: Der ultimative Guide" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google: Bild-SEO Best Practices",
      description: "Offizielle Google-Richtlinien für optimalen Alt-Text und Bilder-SEO mit praktischen Beispielen.",
      url: "https://developers.google.com/search/docs/appearance/google-images",
      source: "Google Search Central"
    }
  },
  {
    letter: "A",
    term: "Anchor Text",
    shortDescription: "Anchor Text ist der sichtbare, klickbare Text eines Hyperlinks, der Suchmaschinen und Nutzern zeigt, worum es auf der Zielseite geht.",
    snippetDefinition: "Anchor Text (Ankertext) ist der sichtbare, klickbare Text eines Hyperlinks. Er gibt Nutzern und Suchmaschinen einen Hinweis auf den Inhalt der verlinkten Seite. Aussagekräftige, natürlich formulierte Linktexte sind sinnvoll. Wer massenhaft Links mit immer demselben Keyword als Linktext aufbaut, riskiert, dass Google sie als Linkspam wertet.",
    fullDescription: "Anchor Text (Ankertext) ist der sichtbare, klickbare Text eines Links. Er gibt Suchmaschinen und Nutzern einen Hinweis auf den Inhalt der verlinkten Seite. Aussagekräftige, natürliche Linktexte sind besser als „hier klicken“ oder aneinandergereihte Keywords.",
    features: [
      "Gibt einen Hinweis auf die Zielseite",
      "Verschiedene Typen: Exact Match, Partial Match, Branded, Generic",
      "Interne und externe Verlinkung",
      "Natürliche Formulierung statt Keyword-Wiederholung"
    ],
    benefits: [
      "Hinweis auf den Inhalt der Zielseite",
      "Bessere Orientierung für Nutzer",
      "Klare interne Verlinkung",
      "Weniger Risiko durch unnatürliche Linktexte"
    ],
    relatedTerms: ["Backlinks", "Internal Linking", "Link Building", "Off-Page SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Moz: Anchor Text Best Practices",
      description: "Umfassender Guide zur optimalen Verwendung von Anchor Texten für SEO.",
      url: "https://moz.com/learn/seo/anchor-text",
      source: "Moz"
    }
  },
  // === B ===
  {
    letter: "B",
    term: "Backlinks",
    shortDescription: "Backlinks sind eingehende Links von anderen Websites auf die eigene Website.",
    snippetDefinition: "Backlinks sind externe Links, die von anderen Websites auf die eigene Website verweisen. Links gehören laut Google zu den Faktoren der Websuche; eine Gewichtung veröffentlicht Google nicht. Gekaufte oder getauschte Links, die nur das Ranking beeinflussen sollen, verstoßen gegen die Spamrichtlinien. Lokale Verlinkungen entstehen natürlich, etwa durch Vereine, Kammern oder regionale Medien.",
    fullDescription: "Backlinks sind externe Links, die von anderen Websites auf die eigene Website verweisen. Sie gelten als eine Art Empfehlung und gehören laut Google zu den Faktoren der Websuche, ohne dass Google eine Gewichtung nennt. Im Local SEO sind Links von regionalen Websites, Zeitungen, Vereinen und Partnern naheliegend, wenn sie aus einem echten Bezug entstehen.",
    features: [
      "DoFollow vs. NoFollow Links",
      "Qualität vor Menge",
      "Anchor-Text natürlich halten",
      "Lokale Backlink-Quellen"
    ],
    benefits: [
      "Empfehlungen anderer Websites",
      "Mehr Besucher über Verweise",
      "Stärkere regionale Verankerung",
      "Bekanntheit im Umfeld"
    ],
    relatedTerms: ["Link Building", "Domain Authority", "Anchor Text", "Off-Page SEO", "Nofollow Link"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Moz: The Beginner's Guide to Link Building",
      description: "Umfassender Guide zum strategischen Aufbau von Backlinks mit bewährten Methoden und Fallstudien.",
      url: "https://moz.com/beginners-guide-to-link-building",
      source: "Moz"
    }
  },
  {
    letter: "B",
    term: "Black Hat SEO",
    shortDescription: "Black Hat SEO bezeichnet manipulative Optimierungsmethoden, die gegen die Richtlinien von Google verstoßen.",
    snippetDefinition: "Black Hat SEO bezeichnet Techniken, die gegen Googles Spamrichtlinien verstoßen. Dazu gehören Keyword Stuffing, versteckter Text, Linkkauf und Cloaking. Google kann solche Seiten mit automatischen Systemen herabstufen oder durch manuelle Maßnahmen aus den Suchergebnissen entfernen. Wer sich darauf einlässt, riskiert die Sichtbarkeit der ganzen Website.",
    fullDescription: "Black Hat SEO bezeichnet Optimierungstechniken, die gegen Googles Spamrichtlinien verstoßen. Dazu gehören Keyword Stuffing, versteckter Text, Linkkauf und Cloaking. Google kann betroffene Seiten herabstufen oder aus den Suchergebnissen entfernen.",
    features: [
      "Keyword Stuffing (Überoptimierung)",
      "Linkkauf und Linkfarmen",
      "Cloaking (Nutzern anderen Inhalt zeigen als der Suchmaschine)",
      "Private Blog Networks (PBN)"
    ],
    benefits: [
      "Wissen, was man vermeiden sollte",
      "Angebote von Dienstleistern besser einschätzen",
      "Risiken von Methoden bewerten",
      "Langfristige Sichtbarkeit schützen"
    ],
    relatedTerms: ["White Hat SEO", "Algorithmus-Update", "Keyword Stuffing", "Link Building"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "B",
    term: "Bounce Rate",
    shortDescription: "Die Bounce Rate (Absprungrate) zeigt in der Webanalyse den Anteil der Besuche, nach denen Nutzer die Website ohne weitere Interaktion verlassen.",
    snippetDefinition: "Die Bounce Rate (Absprungrate) ist eine Kennzahl der Webanalyse. In Google Analytics 4 ist sie der Anteil der Sitzungen, die nicht als engagiert gelten, also das Gegenstück zur Engagement-Rate. Eine hohe Absprungrate kann auf Probleme mit Inhalt, Ladezeit oder Erwartung hindeuten, muss es aber nicht: Bei einer Seite mit Telefonnummer reicht oft ein einziger Besuch.",
    fullDescription: "Die Bounce Rate (Absprungrate) zeigt, wie viele Besuche ohne weitere Interaktion enden. Wie sie berechnet wird, hängt vom Analyse-Tool ab. In Google Analytics 4 ist sie das Gegenstück zur Engagement-Rate. Aussagekräftig ist sie nur im Zusammenhang mit dem Seitentyp: Eine Kontaktseite mit Telefonnummer hat einen anderen Zweck als ein Ratgeberartikel.",
    features: [
      "Wird in Google Analytics gemessen",
      "Berechnung je nach Tool unterschiedlich",
      "Unterschied zwischen Absprung und Ausstieg",
      "Abhängig von Seitentyp und Suchintention"
    ],
    benefits: [
      "Hinweis auf Probleme bei Inhalt oder Ladezeit",
      "Probleme in der Nutzerführung erkennen",
      "Grundlage für Optimierungen",
      "Engagement einordnen"
    ],
    relatedTerms: ["User Experience", "Dwell Time", "CTR", "Conversion Rate"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "B",
    term: "Branchenverzeichnis",
    shortDescription: "Ein Branchenverzeichnis ist eine Online-Plattform, in der Unternehmen ihre Kontaktdaten, Öffnungszeiten und Leistungen eintragen.",
    snippetDefinition: "Ein Branchenverzeichnis ist eine Online-Plattform, auf der Unternehmen ihre Kontaktdaten, Öffnungszeiten und Leistungen eintragen können. Einträge sind eine Quelle für Citations, also Nennungen mit Name, Adresse und Telefonnummer. In Deutschland gibt es unter anderem Das Örtliche, Gelbe Seiten und branchenspezifische Portale. Wichtig sind korrekte, einheitliche Angaben.",
    fullDescription: "Branchenverzeichnisse sind Online-Plattformen, auf denen Unternehmen ihre Kontaktdaten und Informationen eintragen können. Sie sind eine Quelle für Citations. In Deutschland gibt es unter anderem Das Örtliche, Gelbe Seiten und branchenspezifische Portale. Entscheidend ist, dass die Angaben stimmen und überall gleich lauten.",
    features: [
      "Strukturierte Unternehmenseinträge",
      "NAP-Daten konsistent halten",
      "Branchenspezifische Verzeichnisse",
      "Regionale Verzeichnisse"
    ],
    benefits: [
      "Zusätzliche Fundstellen für Kunden",
      "Einheitliche Angaben im Web",
      "Mehr Citations",
      "Zusätzliche Besucherquellen"
    ],
    relatedTerms: ["Citations", "NAP", "Local SEO", "Google Business Profile"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz für Local SEO" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Top Business Directories",
      description: "Übersicht der wichtigsten Branchenverzeichnisse für lokale Unternehmen nach Land.",
      url: "https://www.brightlocal.com/learn/local-citations/",
      source: "BrightLocal"
    }
  },
  // === C ===
  {
    letter: "C",
    term: "Citations",
    shortDescription: "Citations sind Online-Erwähnungen eines Unternehmens mit Name, Adresse und Telefonnummer (NAP-Daten).",
    snippetDefinition: "Citations sind Online-Erwähnungen eines Unternehmens, die Name, Adresse und Telefonnummer (NAP-Daten) enthalten. Sie erscheinen auf Branchenverzeichnissen, Social-Media-Profilen und Bewertungsportalen. Laut Googles Hilfe fließen Informationen aus dem Web, etwa Links, Artikel und Verzeichniseinträge, in die Bekanntheit eines Unternehmens ein. Wichtig ist, dass die Angaben überall übereinstimmen.",
    fullDescription: "Citations sind Online-Erwähnungen deines Unternehmens, die Name, Adresse und Telefonnummer (NAP) enthalten. Sie können auf Branchenverzeichnissen, Social-Media-Profilen, Bewertungsportalen oder lokalen Websites erscheinen. Einheitliche Angaben vermeiden Verwechslungen. Eine feste Gewichtung für das lokale Ranking nennt Google nicht.",
    features: [
      "Strukturierte Citations (Verzeichnisse)",
      "Unstrukturierte Citations (Erwähnungen)",
      "Einheitliche NAP-Angaben",
      "Branchenspezifische Verzeichnisse"
    ],
    benefits: [
      "Einheitliche Unternehmensdaten im Web",
      "Weniger Verwechslungen bei Kunden",
      "Zusätzliche Fundstellen",
      "Stützt die Bekanntheit im Web"
    ],
    relatedTerms: ["NAP", "Branchenverzeichnis", "Google Business Profile", "Local SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Citation Building Guide",
      description: "Praxisnaher Guide zum Aufbau konsistenter Citations für lokale Unternehmen.",
      url: "https://www.brightlocal.com/learn/local-citations/",
      source: "BrightLocal"
    }
  },
  {
    letter: "C",
    term: "Canonical URL",
    shortDescription: "Eine Canonical URL ist die bevorzugte URL-Version einer Seite, wenn derselbe Inhalt unter mehreren Adressen erreichbar ist.",
    snippetDefinition: "Eine Canonical URL ist die Adresse, die Google als Hauptversion einer Seite verwenden soll, wenn derselbe Inhalt unter mehreren URLs erreichbar ist. Man gibt sie per rel='canonical' im HTML an. Das ist ein Hinweis, keine Anweisung: Google kann eine andere Version wählen. Es bündelt Signale auf eine Adresse und vermeidet doppelte Treffer.",
    fullDescription: "Eine Canonical URL gibt an, welche Version einer Seite die Hauptversion ist, zum Beispiel bei Aufrufen mit und ohne www oder mit Parametern. Das canonical-Tag im HTML-Head ist ein Hinweis für Suchmaschinen, keine verbindliche Anweisung.",
    features: [
      "rel='canonical' HTML-Tag",
      "Selbstreferenzierende Canonicals sind üblich",
      "Cross-Domain Canonicals möglich",
      "Hilft bei URL-Parametern"
    ],
    benefits: [
      "Klare Hauptversion einer Seite",
      "Signale auf eine URL bündeln",
      "Weniger doppelte Treffer",
      "Klare Hinweise an Suchmaschinen"
    ],
    relatedTerms: ["Duplicate Content", "URL-Struktur", "Technical SEO", "Crawling"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ],
    bestPracticeExample: {
      title: "Google: Canonical URLs",
      description: "Offizielle Google-Dokumentation zur korrekten Verwendung von Canonical Tags.",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
      source: "Google Search Central"
    }
  },
  {
    letter: "C",
    term: "Content-Strategie",
    shortDescription: "Eine Content-Strategie ist die systematische Planung und Erstellung von Inhalten zur Erreichung von SEO- und Geschäftszielen.",
    snippetDefinition: "Eine Content-Strategie ist ein Plan, der festlegt, welche Inhalte für welche Zielgruppen erstellt werden, um bestimmte Geschäfts- und SEO-Ziele zu erreichen. Für lokale Unternehmen kann das bedeuten: Inhalte zu echten Kundenfragen, zu den eigenen Leistungen und zu den Orten, an denen man tatsächlich arbeitet.",
    fullDescription: "Eine Content-Strategie definiert, welche Inhalte für welche Zielgruppen erstellt werden, um bestimmte Geschäfts- und SEO-Ziele zu erreichen. Für lokale Unternehmen bedeutet das: Fragen echter Kunden beantworten, Leistungen verständlich erklären und nur über Orte schreiben, an denen das Unternehmen wirklich tätig ist.",
    features: [
      "Content-Audit und Lückenanalyse",
      "Themenplanung nach Kundenfragen",
      "Content-Formate definieren",
      "Redaktionskalender erstellen"
    ],
    benefits: [
      "Zielgerichtete Inhalte",
      "Bessere Abdeckung der Kundenfragen",
      "Regelmäßige Veröffentlichung",
      "Klare Prioritäten"
    ],
    relatedTerms: ["Keywords", "Search Intent", "On-Page SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-content-marketing", title: "Local Content Marketing" },
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Content Marketing Institute: Strategy Guide",
      description: "Umfassender Leitfaden zur Entwicklung einer erfolgreichen Content-Strategie.",
      url: "https://contentmarketinginstitute.com/developing-a-strategy/",
      source: "Content Marketing Institute"
    }
  },
  {
    letter: "C",
    term: "Conversion Rate",
    shortDescription: "Die Conversion Rate ist der Anteil der Website-Besucher, die eine gewünschte Aktion wie Kauf oder Kontaktaufnahme ausführen.",
    snippetDefinition: "Die Conversion Rate ist eine Kennzahl, die angibt, wie viel Prozent der Website-Besucher eine gewünschte Aktion ausführen, etwa ein Formular ausfüllen, anrufen oder kaufen. Welche Rate gut ist, hängt von Branche, Angebot und Besucherquelle ab; allgemeine Durchschnittswerte taugen kaum als Maßstab. Sinnvoll ist der Vergleich mit der eigenen Entwicklung.",
    fullDescription: "Die Conversion Rate gibt an, wie viel Prozent der Website-Besucher eine bestimmte Aktion durchführen, zum Beispiel ein Formular ausfüllen, anrufen oder kaufen. Für lokale Unternehmen zählt vor allem, wie viele Besucher tatsächlich Kontakt aufnehmen. Vergleichen Sie die Rate mit Ihrem eigenen Verlauf, nicht mit Branchendurchschnitten.",
    features: [
      "Verschiedene Conversion-Typen",
      "Micro- vs. Macro-Conversions",
      "A/B-Tests zur Optimierung",
      "Tracking in Analytics"
    ],
    benefits: [
      "Mehr Anfragen bei gleichem Besucheraufkommen",
      "Marketingausgaben besser einordnen",
      "Datenbasierte Optimierung",
      "Schwachstellen im Ablauf erkennen"
    ],
    relatedTerms: ["CTR", "User Experience", "Bounce Rate", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  {
    letter: "C",
    term: "Core Web Vitals",
    shortDescription: "Core Web Vitals sind drei Google-Metriken (LCP, INP, CLS), die Ladegeschwindigkeit, Reaktionsfähigkeit und visuelle Stabilität einer Seite messen.",
    snippetDefinition: "Core Web Vitals sind drei von Google definierte Metriken zur Nutzererfahrung: LCP (Largest Contentful Paint) misst die Ladezeit des größten Elements, INP (Interaction to Next Paint) die Reaktion auf Eingaben und CLS (Cumulative Layout Shift) die visuelle Stabilität. Laut Google nutzen die Ranking-Systeme der Websuche sie; gute Werte garantieren aber keine Top-Position, die Relevanz geht vor.",
    fullDescription: "Core Web Vitals sind drei Metriken, die Google zur Messung der Nutzererfahrung verwendet: LCP, INP und CLS. Google nennt als Richtwerte für eine gute Nutzererfahrung: LCP innerhalb von 2,5 Sekunden, INP unter 200 Millisekunden und CLS unter 0,1. Laut Google werden sie von den Ranking-Systemen der Websuche genutzt, ersetzen aber nicht die Relevanz des Inhalts.",
    features: [
      "LCP: Ladezeit des größten Elements (Richtwert: innerhalb von 2,5 Sekunden)",
      "INP: Reaktion auf Eingaben (Richtwert: unter 200 Millisekunden)",
      "CLS: Visuelle Stabilität (Richtwert: unter 0,1)",
      "Messbar in Search Console und PageSpeed Insights"
    ],
    benefits: [
      "Schnelle, stabile Seiten für Nutzer",
      "Von Googles Ranking-Systemen genutzt, aber ohne Garantie",
      "Weniger Abbrüche durch Ladeprobleme",
      "Messbare Technikziele"
    ],
    relatedTerms: ["PageSpeed", "User Experience", "Technical SEO", "Mobile First Index"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "web.dev: Core Web Vitals Guide",
      description: "Offizielle Google-Dokumentation mit detaillierten Anleitungen zur Optimierung aller Core Web Vitals.",
      url: "https://web.dev/vitals/",
      source: "Google web.dev"
    }
  },
  {
    letter: "C",
    term: "Crawling",
    shortDescription: "Crawling ist der Prozess, bei dem Suchmaschinen-Bots wie Googlebot Websites besuchen, deren Inhalte lesen und Links folgen.",
    snippetDefinition: "Crawling ist der automatisierte Vorgang, bei dem Suchmaschinen-Bots wie der Googlebot Websites aufrufen, Inhalte lesen und Links folgen, um neue oder geänderte Seiten zu entdecken. Damit eine Seite in den Suchergebnissen erscheinen kann, muss Google sie kennen und in der Regel auch abrufen können. Wie oft eine Seite besucht wird, hängt von der Website ab und lässt sich nicht pauschal angeben.",
    fullDescription: "Crawling ist der Vorgang, bei dem Suchmaschinen-Bots wie Googlebot Websites besuchen und deren Inhalte lesen. Der Crawler folgt Links, um neue und geänderte Seiten zu entdecken. Wird eine Seite blockiert oder ist sie nicht erreichbar, kann Google ihren Inhalt nicht auswerten.",
    features: [
      "Googlebot besucht Websites automatisch",
      "Crawl-Budget betrifft vor allem sehr große Websites",
      "Steuerung über robots.txt möglich",
      "Sitemap hilft beim Entdecken von Seiten"
    ],
    benefits: [
      "Grundlage dafür, dass Inhalte gefunden werden",
      "Änderungen können erkannt werden",
      "Strukturprobleme aufdecken",
      "SEO-Grundlagen verstehen"
    ],
    relatedTerms: ["Indexierung", "Robots.txt", "XML-Sitemap", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "C",
    term: "CTR",
    shortDescription: "Die CTR (Click-Through-Rate) ist das Verhältnis von Klicks zu Impressionen in den Suchergebnissen.",
    snippetDefinition: "Die Click-Through-Rate (CTR) ist eine Kennzahl, die zeigt, wie oft Nutzer auf ein Suchergebnis klicken, im Verhältnis zu den angezeigten Impressionen. Sie hängt stark von Position, Suchanfrage und weiteren Elementen der Ergebnisseite ab. Titel und Beschreibung, die zur Suchanfrage passen, helfen, aber allgemeine Durchschnittswerte pro Position taugen kaum als Maßstab.",
    fullDescription: "Die Click-Through-Rate (CTR) zeigt, wie oft Nutzer auf ein Suchergebnis klicken, im Verhältnis zu den Impressionen. Sie lässt sich in der Google Search Console je Seite und Suchanfrage ablesen. Sie hängt von Position, Suchanfrage und weiteren Elementen der Ergebnisseite ab. Ein passender Titel und eine sachliche Beschreibung sind die wichtigsten eigenen Stellschrauben.",
    features: [
      "Gemessen in der Google Search Console",
      "Abhängig von Position und weiteren Elementen der Ergebnisseite",
      "Beeinflusst durch Titel und Beschreibung",
      "Starke Schwankung je nach Suchanfrage"
    ],
    benefits: [
      "Mehr Besucher bei gleicher Position",
      "Passung von Titel und Suchanfrage prüfen",
      "Optimierungspotenzial erkennen",
      "Verlauf über die Zeit beobachten"
    ],
    relatedTerms: ["Title Tag", "Meta-Tags", "SERP", "Conversion Rate"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Backlinko: CTR Study 2024",
      description: "Studie eines SEO-Anbieters zu organischen Klickraten nach Position (Drittquelle, nicht von Google).",
      url: "https://backlinko.com/google-ctr-stats",
      source: "Backlinko"
    }
  },
  // === D ===
  {
    letter: "D",
    term: "Domain Authority",
    shortDescription: "Domain Authority (DA) ist eine von Moz entwickelte Kennzahl auf einer Skala von 1 bis 100, die die Stärke einer Website einschätzen soll.",
    snippetDefinition: "Domain Authority (DA) ist eine von Moz entwickelte Kennzahl auf einer Skala von 1 bis 100. Sie soll schätzen, wie gut eine Website in Suchergebnissen abschneidet, und wird vor allem aus Link-Daten berechnet. Es ist keine Kennzahl von Google. Wer sie nutzt, sollte sie nur als grobe Vergleichsgröße zwischen Websites verstehen.",
    fullDescription: "Domain Authority (DA) ist eine von Moz entwickelte Kennzahl auf einer Skala von 1 bis 100. Sie wird aus Link-Daten berechnet und soll die Stärke einer Website einschätzen. Sie stammt nicht von Google. SEO-Fachleute nutzen sie als grobe Vergleichsgröße, etwa um Linkquellen zu vergleichen.",
    features: [
      "Skala von 1 bis 100",
      "Berechnet aus Link-Daten von Moz",
      "Vergleich mit Wettbewerbern",
      "Entwickelt von Moz, nicht von Google"
    ],
    benefits: [
      "Grober Vergleich von Websites",
      "Einordnung potenzieller Linkquellen",
      "Verlauf über die Zeit beobachten",
      "Nur als Orientierung, nicht als Ziel"
    ],
    relatedTerms: ["Backlinks", "Link Building", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  {
    letter: "D",
    term: "Duplicate Content",
    shortDescription: "Duplicate Content ist identischer oder nahezu identischer Inhalt, der unter mehreren URLs erreichbar ist.",
    snippetDefinition: "Duplicate Content bezeichnet identische oder sehr ähnliche Inhalte, die unter verschiedenen URLs erreichbar sind. Ursachen sind oft technisch, etwa URL-Parameter oder www/non-www-Varianten. Google fasst solche Seiten zusammen und zeigt in der Regel eine Version. Eine pauschale Strafe gibt es dafür nicht, solange keine Täuschungsabsicht vorliegt. Canonical-Tags helfen, die Hauptversion festzulegen.",
    fullDescription: "Duplicate Content bezeichnet identische oder sehr ähnliche Inhalte, die unter verschiedenen URLs auffindbar sind. Das entsteht oft technisch (URL-Parameter, www/non-www) oder durch kopierte Texte. Google wählt in der Regel eine Version zur Anzeige. Ein Eingriff gegen die Website erfolgt nach Googles Dokumentation nur bei Täuschungsabsicht.",
    features: [
      "Interne vs. externe Duplikate",
      "Canonical-Tags zur Festlegung der Hauptversion",
      "Erkennung mit Crawler-Tools",
      "Google wählt in der Regel eine Version aus"
    ],
    benefits: [
      "Probleme erkennen und beheben",
      "Klare Hauptversion festlegen",
      "Signale bündeln",
      "Klare Hinweise an Google"
    ],
    relatedTerms: ["Canonical URL", "Robots.txt", "Technical SEO", "Indexierung"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "D",
    term: "Dwell Time",
    shortDescription: "Dwell Time ist die Zeit zwischen dem Klick auf ein Suchergebnis und der Rückkehr zu den Suchergebnissen.",
    snippetDefinition: "Dwell Time beschreibt die Zeitspanne zwischen dem Klick auf ein Suchergebnis und der Rückkehr des Nutzers zu den Suchergebnissen. Als Website-Betreiber können Sie sie nicht direkt messen. Ob und wie Google solche Nutzersignale für das Ranking verwendet, ist nicht belegt. Sie ist etwas anderes als die Engagement-Zeit in Analytics-Tools.",
    fullDescription: "Dwell Time ist die Zeit, die vergeht, bis ein Nutzer nach dem Klick auf ein Suchergebnis zu Google zurückkehrt. Sie lässt sich von außen nicht messen und ist nicht mit der Verweildauer oder Engagement-Zeit in Analytics gleichzusetzen. Dass Google sie als Ranking-Signal verwendet, ist nicht belegt.",
    features: [
      "Zeit zwischen Klick und Rückkehr zu den Suchergebnissen",
      "Für Website-Betreiber nicht direkt messbar",
      "Nicht identisch mit Verweildauer in Analytics",
      "Nutzung durch Google nicht belegt"
    ],
    benefits: [
      "Begriff einordnen können",
      "Nicht auf unbelegte Signale optimieren",
      "Nutzerverhalten besser verstehen",
      "Stattdessen echte Antworten auf Suchfragen liefern"
    ],
    relatedTerms: ["Bounce Rate", "User Experience", "Search Intent", "CTR"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" }
    ]
  },
  // === E ===
  {
    letter: "E",
    term: "E-E-A-T",
    shortDescription: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness, den Rahmen, mit dem Googles Qualitätsprüfer Inhalte beurteilen.",
    snippetDefinition: "E-E-A-T steht für Experience (Erfahrung), Expertise, Authoritativeness (Autorität) und Trustworthiness (Vertrauenswürdigkeit). Es ist ein Rahmen aus den Search Quality Rater Guidelines, mit dem Menschen die Qualität von Inhalten beurteilen. Laut Google ist E-E-A-T selbst kein spezifischer Ranking-Faktor. Besonders hoch sind die Anforderungen bei Themen rund um Gesundheit, Finanzen und Sicherheit (YMYL).",
    fullDescription: "E-E-A-T steht für Experience (Erfahrung), Expertise, Authoritativeness (Autorität) und Trustworthiness (Vertrauenswürdigkeit). Der Rahmen stammt aus den Quality Rater Guidelines. Laut Google ist E-E-A-T selbst kein spezifischer Ranking-Faktor. Für lokale Unternehmen heißt das: echte Erfahrung zeigen, Angaben belegen und transparent sein, wer hinter dem Angebot steht.",
    features: [
      "Experience: Praktische Erfahrung zeigen",
      "Expertise: Fachwissen nachvollziehbar machen",
      "Authoritativeness: Anerkennung im Fachumfeld",
      "Trust: Transparenz über Anbieter und Angaben"
    ],
    benefits: [
      "Verständnis für Googles Qualitätsmaßstäbe",
      "Mehr Vertrauen bei Nutzern",
      "Klare Angaben zu Anbieter und Autoren",
      "Orientierung für Inhalte bei sensiblen Themen"
    ],
    relatedTerms: ["YMYL", "Quality Raters", "Reviews (Bewertungen)", "White Hat SEO", "Algorithmus-Update"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte" },
      { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Google Quality Rater Guidelines",
      description: "Die offiziellen Richtlinien, nach denen Google-Bewerter Websites auf E-E-A-T prüfen.",
      url: "https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf",
      source: "Google"
    }
  },
  // === F ===
  {
    letter: "F",
    term: "Featured Snippet",
    shortDescription: "Ein Featured Snippet ist eine hervorgehobene Antwortbox, die Google über den übrigen Suchergebnissen anzeigen kann.",
    snippetDefinition: "Ein Featured Snippet ist eine hervorgehobene Antwortbox, die Google in manchen Fällen über den übrigen Suchergebnissen anzeigt. Sie beantwortet die Frage als Textabsatz, Liste oder Tabelle und verweist auf die Quelle. Welche Seite Google hervorhebt, wählt Google automatisch; eine Garantie gibt es nicht. Klare, kurze Antworten auf eine konkrete Frage erhöhen die Chance, passend ausgewählt zu werden.",
    fullDescription: "Featured Snippets sind hervorgehobene Antwortboxen, die Google bei manchen Suchanfragen über den übrigen Ergebnissen anzeigt. Sie beantworten die Frage direkt und verlinken die Quelle. Welche Seite hervorgehoben wird, entscheidet Google automatisch.",
    features: [
      "Absatz-Snippets (Textantworten)",
      "Listen-Snippets (Aufzählungen)",
      "Tabellen-Snippets",
      "Auswahl erfolgt automatisch durch Google"
    ],
    benefits: [
      "Hohe Sichtbarkeit, wenn Google die Seite auswählt",
      "Klare Antworten für Nutzer",
      "Zeigt Fachwissen zu konkreten Fragen",
      "Anlass, Inhalte klar zu strukturieren"
    ],
    relatedTerms: ["SERP", "Voice Search", "Zero-Click Search", "Rich Snippets"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: How to Earn Featured Snippets",
      description: "Strategien zur Optimierung für Featured Snippets mit Praxisbeispielen.",
      url: "https://ahrefs.com/blog/find-featured-snippets/",
      source: "Ahrefs"
    }
  },
  // === G ===
  {
    letter: "G",
    term: "Google Business Profile",
    shortDescription: "Google Business Profile ist der kostenlose Unternehmenseintrag bei Google für Auftritte in Maps und in der Suche.",
    snippetDefinition: "Google Business Profile (früher Google My Business) ist der kostenlose Unternehmenseintrag bei Google. Er ermöglicht Betrieben, in Google Maps und in lokalen Suchergebnissen mit Adresse, Öffnungszeiten, Fotos und Bewertungen zu erscheinen. Lokale Treffer sortiert Google nach Relevanz, Entfernung und Bekanntheit; eine Gewichtung veröffentlicht Google nicht.",
    fullDescription: "Google Business Profile (früher Google My Business) ist der kostenlose Unternehmenseintrag bei Google. Er ermöglicht Betrieben, in Google Maps und in lokalen Suchergebnissen zu erscheinen. Ein vollständig und korrekt gepflegtes Profil mit Fotos, Öffnungszeiten, Leistungen und Bewertungen ist die Grundlage für lokale Sichtbarkeit. Lokale Treffer sortiert Google nach Relevanz, Entfernung und Bekanntheit.",
    features: [
      "Vollständige Unternehmensinformationen",
      "Fotos hochladen",
      "Kundenbewertungen verwalten",
      "Beiträge (Posts) erstellen"
    ],
    benefits: [
      "Kostenlos nutzbar",
      "Direkter Kontakt zu Kunden",
      "Bewertungen im Blick behalten",
      "Leistungsdaten zum Profil"
    ],
    relatedTerms: ["Local Pack", "NAP", "Google Maps", "Reviews (Bewertungen)", "Local SEO"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Business Profile Optimierung",
      description: "Offizielle Google-Anleitung zur vollständigen Optimierung deines Unternehmensprofils.",
      url: "https://support.google.com/business/answer/7091?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "G",
    term: "Google Maps",
    shortDescription: "Google Maps ist Googles Kartendienst, in dem Nutzer lokale Unternehmen suchen und Routen planen.",
    snippetDefinition: "Google Maps ist Googles Kartendienst und eine wichtige Anlaufstelle für lokale Suchanfragen. Unternehmen mit einem Google Business Profile erscheinen dort mit Standort, Bewertungen und Kontaktdaten. Lokale Treffer sortiert Google nach Relevanz, Entfernung und Bekanntheit.",
    fullDescription: "Google Maps ist Googles Kartendienst und eine Anlaufstelle für lokale Suchanfragen. Unternehmen mit einem Google Business Profile erscheinen auf Google Maps mit Standort, Bewertungen und Kontaktdaten. Die Pflege des Profils ist ein Kernbestandteil des Local SEO.",
    features: [
      "Karteneinbettung in Websites",
      "Wegbeschreibungen für Kunden",
      "Unternehmensfotos und Street View",
      "Öffnungszeiten und aktuelle Angaben"
    ],
    benefits: [
      "Sichtbar bei Suchen nach Orten in der Nähe",
      "Wegführung direkt zum Geschäft",
      "Kundenbewertungen sichtbar",
      "Fotos und Eindrücke zeigen"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "NAP", "Proximity (Entfernung)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ],
    bestPracticeExample: {
      title: "Google: Präsenz in Google Maps verbessern",
      description: "Offizielle Tipps von Google zur Verbesserung der Sichtbarkeit in Google Maps.",
      url: "https://support.google.com/business/answer/7091?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "G",
    term: "Geo-Targeting",
    shortDescription: "Geo-Targeting ist die Ausrichtung von Website-Inhalten auf bestimmte geografische Regionen oder Standorte.",
    snippetDefinition: "Geo-Targeting bezeichnet die Ausrichtung von Website-Inhalten auf bestimmte Regionen oder Standorte. Für Local SEO bedeutet das, Orte zu nennen, an denen das Unternehmen tatsächlich tätig ist. Eigene Seiten pro Standort sind sinnvoll, wenn es dort echte Standorte oder Leistungen gibt. Viele inhaltsgleiche Stadtseiten, die nur den Ortsnamen austauschen, gelten als Doorway-Seiten und widersprechen Googles Richtlinien.",
    fullDescription: "Geo-Targeting bezeichnet die Ausrichtung von Inhalten auf bestimmte Regionen oder Standorte. Für Local SEO bedeutet das, Inhalte zu den Orten zu erstellen, an denen das Unternehmen wirklich tätig ist. Seiten, die sich nur im Ortsnamen unterscheiden, verstoßen gegen Googles Richtlinien zu Doorway-Seiten.",
    features: [
      "Standortseiten nur mit echtem Bezug",
      "Ortsbezug in Inhalten, wo er stimmt",
      "Hreflang für Sprach- und Regionalversionen",
      "Keine inhaltsgleichen Stadtseiten"
    ],
    benefits: [
      "Passende Inhalte für den tatsächlichen Einzugsbereich",
      "Klare Ortsangaben für Nutzer",
      "Weniger Risiko durch Doorway-Seiten",
      "Ehrliche lokale Präsenz"
    ],
    relatedTerms: ["Local SEO", "Local Pack", "Proximity (Entfernung)", "Hreflang"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" },
      { slug: "local-seo-zuerich", title: "Local SEO Zürich" },
      { slug: "local-seo-muenchen", title: "Local SEO München" },
      { slug: "local-seo-berlin", title: "Local SEO Berlin" }
    ]
  },
  // === H ===
  {
    letter: "H",
    term: "Heading Tags (H1-H6)",
    shortDescription: "Heading Tags (H1–H6) sind HTML-Überschriften, die Inhalte hierarchisch gliedern.",
    snippetDefinition: "Heading Tags (H1 bis H6) sind HTML-Elemente für Überschriften und Zwischenüberschriften. Sie gliedern den Inhalt logisch und helfen Nutzern, Screenreadern und Suchmaschinen, die Struktur zu erfassen. Die H1 beschreibt das Hauptthema der Seite; in der Praxis steht meist eine H1 pro Seite, darunter folgen H2 bis H6 in sinnvoller Hierarchie.",
    fullDescription: "Heading Tags (H1-H6) sind HTML-Elemente, die Überschriften und Unterüberschriften auf Webseiten definieren. Die H1 beschreibt das Hauptthema der Seite. Eine logische Hierarchie hilft Nutzern, Screenreadern und Suchmaschinen, den Inhalt zu verstehen.",
    features: [
      "H1: Hauptthema der Seite",
      "H2-H6: Unterüberschriften in Hierarchie",
      "Suchbegriffe natürlich verwenden",
      "Struktur für Screenreader"
    ],
    benefits: [
      "Klare Content-Struktur",
      "Bessere Lesbarkeit",
      "Bessere Orientierung für Screenreader",
      "Ausgangspunkt für klar gegliederte Antworten"
    ],
    relatedTerms: ["On-Page SEO", "Title Tag", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "H",
    term: "Hreflang",
    shortDescription: "Hreflang ist ein HTML-Attribut, das Suchmaschinen die verfügbaren Sprach- und Regionalversionen einer Webseite mitteilt.",
    snippetDefinition: "Das Hreflang-Attribut teilt Google mit, welche Sprach- und Regionalversionen einer Seite existieren, zum Beispiel de, de-CH und de-AT. So kann Google Nutzern die passende Version zeigen. Wichtig ist die gegenseitige Verknüpfung: Jede Version verweist auf alle anderen und auf sich selbst.",
    fullDescription: "Das Hreflang-Attribut teilt Google mit, welche Sprach- und Regionalversionen einer Seite existieren. Es hilft Google, Nutzern die Version in ihrer Sprache und Region zu zeigen. Jede Version muss auf alle anderen verweisen.",
    features: [
      "Sprach- und Regionalcodes (de, de-CH, de-AT)",
      "Im HTML-Head, im HTTP-Header oder in der Sitemap",
      "x-default für Fallback-Seite",
      "Gegenseitige Verknüpfung nötig"
    ],
    benefits: [
      "Passende Sprachversion für Nutzer",
      "Klare Zuordnung der Versionen",
      "Weniger Verwechslung ähnlicher Seiten",
      "Klare Hinweise an Google"
    ],
    relatedTerms: ["Geo-Targeting", "Canonical URL", "Technical SEO", "Duplicate Content"],
    difficulty: "experte",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" },
      { slug: "local-seo-zuerich", title: "Local SEO Zürich" }
    ],
    bestPracticeExample: {
      title: "Google: Hreflang Implementierung",
      description: "Offizielle Dokumentation zur korrekten Verwendung von Hreflang-Tags.",
      url: "https://developers.google.com/search/docs/specialty/international/localized-versions",
      source: "Google Search Central"
    }
  },
  {
    letter: "H",
    term: "HTTPS",
    shortDescription: "HTTPS ist ein Protokoll zur verschlüsselten Datenübertragung zwischen Browser und Server.",
    snippetDefinition: "HTTPS (Hypertext Transfer Protocol Secure) ist ein Kommunikationsprotokoll, das die Datenübertragung zwischen Browser und Server per TLS verschlüsselt. Google hat 2014 angekündigt, HTTPS als schwaches Ranking-Signal zu nutzen. Browser wie Chrome kennzeichnen Seiten ohne HTTPS als nicht sicher, was Besucher verunsichern kann.",
    fullDescription: "HTTPS (Hypertext Transfer Protocol Secure) verschlüsselt die Datenübertragung zwischen Browser und Server. Google hat 2014 angekündigt, HTTPS als schwaches Ranking-Signal zu nutzen. Für lokale Unternehmen ist HTTPS vor allem wichtig, weil Formulare und Kundendaten geschützt übertragen werden.",
    features: [
      "TLS-Zertifikat erforderlich",
      "Schloss-Symbol im Browser",
      "Schutz sensibler Daten",
      "Von Google 2014 als schwaches Ranking-Signal genannt"
    ],
    benefits: [
      "Grundvoraussetzung für seriöse Websites",
      "Mehr Nutzervertrauen",
      "Schutz von Kundendaten",
      "Keine Warnung des Browsers"
    ],
    relatedTerms: ["SSL-Zertifikat", "Technical SEO", "Core Web Vitals"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === I ===
  {
    letter: "I",
    term: "Image SEO",
    shortDescription: "Image SEO umfasst Maßnahmen, damit Suchmaschinen Bilder verstehen und Nutzer sie schnell sehen.",
    snippetDefinition: "Image SEO umfasst Maßnahmen, mit denen Bilder für Suchmaschinen und Nutzer gut nutzbar sind: beschreibende Dateinamen, passende Alt-Texte, sinnvolle Bildgrößen und Komprimierung sowie ein erreichbares Bildumfeld im Text. Schnell ladende Bilder verbessern die Nutzererfahrung und die Core Web Vitals.",
    fullDescription: "Image SEO umfasst alle Maßnahmen, mit denen Bilder für Suchmaschinen und Nutzer gut nutzbar sind. Dazu gehören beschreibende Dateinamen, Alt-Texte, passende Größen und Komprimierung. Für lokale Unternehmen sind echte, aktuelle Fotos im Google Business Profile und auf der Website besonders wertvoll.",
    features: [
      "Beschreibende Dateinamen",
      "Passende Alt-Texte",
      "Bildkomprimierung für kürzere Ladezeiten",
      "Lazy Loading, wo sinnvoll"
    ],
    benefits: [
      "Bilder können in der Google-Bildersuche gefunden werden",
      "Bessere Nutzererfahrung",
      "Schnellere Ladezeiten",
      "Barrierefreie Bilder"
    ],
    relatedTerms: ["Alt-Text", "PageSpeed", "Core Web Vitals", "On-Page SEO"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google: Image SEO Best Practices",
      description: "Offizielle Richtlinien zur Bildoptimierung für die Google-Suche.",
      url: "https://developers.google.com/search/docs/appearance/google-images",
      source: "Google Search Central"
    }
  },
  {
    letter: "I",
    term: "Indexierung",
    shortDescription: "Indexierung ist der Prozess, bei dem Google eine Webseite analysiert und in seinen Suchindex aufnimmt.",
    snippetDefinition: "Indexierung ist der Prozess, bei dem Google eine abgerufene Webseite analysiert, deren Inhalt auswertet und in seinen Suchindex aufnimmt. Nur indexierte Seiten können in den Suchergebnissen erscheinen. Garantiert ist die Aufnahme nicht. Die Google Search Console zeigt den Indexierungsstatus, und eine XML-Sitemap kann Google helfen, Seiten zu entdecken.",
    fullDescription: "Indexierung ist der Prozess, bei dem Google eine Webseite abruft, analysiert und in seinen Suchindex aufnimmt. Nur indexierte Seiten können in den Suchergebnissen erscheinen, eine Garantie für die Aufnahme gibt es nicht. Die Google Search Console zeigt den Indexierungsstatus und hilft bei der Behebung von Problemen.",
    features: [
      "Google Search Console nutzen",
      "Sitemap einreichen",
      "robots.txt und noindex richtig einsetzen",
      "Canonical-Tags setzen"
    ],
    benefits: [
      "Voraussetzung für Auftritte in den Suchergebnissen",
      "Kontrolle über indexierte Inhalte",
      "Probleme früh erkennen",
      "Doppelte Inhalte vermeiden"
    ],
    relatedTerms: ["Crawling", "XML-Sitemap", "Robots.txt", "Webmaster Tools / Search Console"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "I",
    term: "Internal Linking",
    shortDescription: "Internal Linking ist die Verlinkung zwischen Seiten der eigenen Website.",
    snippetDefinition: "Internal Linking (interne Verlinkung) bezeichnet Links zwischen verschiedenen Seiten derselben Website. Sie führen Nutzer zu passenden Inhalten und helfen Suchmaschinen, Seiten zu finden und die Struktur der Website zu verstehen. Aussagekräftige Linktexte und eine klare Hierarchie sind wichtiger als eine bestimmte Zahl von Links.",
    fullDescription: "Internal Linking bezeichnet die Verlinkung zwischen Seiten derselben Website. Interne Links führen Nutzer zu relevanten Inhalten und helfen Suchmaschinen, Seiten zu entdecken und die Struktur zu verstehen. Aussagekräftige Linktexte und eine klare Struktur zählen mehr als eine bestimmte Zahl von Links.",
    features: [
      "Hilft Nutzern und Crawlern, Seiten zu finden",
      "Zeigt thematische Zusammenhänge",
      "Aussagekräftige Linktexte",
      "Klare Seitenhierarchie"
    ],
    benefits: [
      "Bessere Orientierung für Nutzer",
      "Seiten werden leichter entdeckt",
      "Klare Themenstruktur",
      "Wichtige Seiten stärker verknüpfen"
    ],
    relatedTerms: ["Anchor Text", "On-Page SEO", "Crawling", "Link Building"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Internal Linking for SEO",
      description: "Detaillierter Guide zur Optimierung der internen Verlinkung für bessere Rankings.",
      url: "https://ahrefs.com/blog/internal-links-for-seo/",
      source: "Ahrefs"
    }
  },
  // === J ===
  {
    letter: "J",
    term: "JSON-LD",
    shortDescription: "JSON-LD ist das von Google empfohlene Format für strukturierte Daten, das Webinhalte maschinenlesbar macht.",
    snippetDefinition: "JSON-LD (JavaScript Object Notation for Linked Data) ist das Format, das Google für strukturierte Daten empfiehlt. Es beschreibt Informationen wie Unternehmensname, Adresse, Öffnungszeiten oder Veranstaltungen maschinenlesbar in einem Script-Block, getrennt vom sichtbaren Text. Ein bestimmtes Rich Result ist damit nicht garantiert; Google zeigt es nur, wenn die Seite die Voraussetzungen erfüllt.",
    fullDescription: "JSON-LD (JavaScript Object Notation for Linked Data) ist das von Google empfohlene Format für strukturierte Daten. Es beschreibt Informationen wie Unternehmensname, Adresse, Öffnungszeiten und Veranstaltungen maschinenlesbar. Die Angaben müssen mit dem sichtbaren Inhalt der Seite übereinstimmen.",
    features: [
      "Von Google empfohlen",
      "Als Script-Block im HTML",
      "Schema.org-Vokabular",
      "LocalBusiness-Markup"
    ],
    benefits: [
      "Bessere maschinelle Lesbarkeit",
      "Kann Rich Results ermöglichen, wenn die Seite berechtigt ist",
      "Trennung von Markup und sichtbarem Text",
      "Klare Angaben zum Unternehmen"
    ],
    relatedTerms: ["Schema Markup", "Rich Snippets", "Technical SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Strukturierte Daten einführen",
      description: "Offizielle Dokumentation zur Implementierung von JSON-LD strukturierten Daten.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      source: "Google Search Central"
    }
  },
  // === K ===
  {
    letter: "K",
    term: "Keywords",
    shortDescription: "Keywords sind Suchbegriffe, die Nutzer in Suchmaschinen eingeben und für die Inhalte gezielt geschrieben werden.",
    snippetDefinition: "Keywords sind die Wörter und Phrasen, die Nutzer in Suchmaschinen eingeben, um Informationen, Produkte oder Dienstleistungen zu finden. Im Local SEO werden Suchbegriffe oft mit Ortsnamen kombiniert, zum Beispiel Zahnarzt München. Die Keyword-Recherche zeigt, wie Kunden suchen, damit Inhalte ihre Sprache treffen.",
    fullDescription: "Keywords sind die Wörter und Phrasen, die Nutzer in Suchmaschinen eingeben. Im Local SEO werden sie oft mit Ortsnamen kombiniert, zum Beispiel Zahnarzt München. Die Keyword-Recherche zeigt, wie Kunden suchen, und hilft, Inhalte in deren Sprache zu schreiben.",
    features: [
      "Short-Tail vs. Long-Tail Keywords",
      "Lokale Suchbegriffe mit Ortsbezug",
      "Suchintention verstehen",
      "Ein Hauptthema pro Seite"
    ],
    benefits: [
      "Inhalte in der Sprache der Kunden",
      "Relevante Suchanfragen erkennen",
      "Wettbewerbsumfeld verstehen",
      "Grundlage für die Content-Planung"
    ],
    relatedTerms: ["Long-Tail Keywords", "Search Intent", "Keyword Density", "Content-Strategie"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Complete Keyword Research Guide",
      description: "Umfassender Guide zur Keyword-Recherche mit kostenlosen und Premium-Tools.",
      url: "https://ahrefs.com/blog/keyword-research/",
      source: "Ahrefs"
    }
  },
  {
    letter: "K",
    term: "Keyword Density",
    shortDescription: "Keyword Density ist die prozentuale Häufigkeit eines Keywords im Verhältnis zur Gesamtwortzahl eines Textes.",
    snippetDefinition: "Keyword Density bezeichnet den prozentualen Anteil eines Keywords an der Gesamtwortzahl eines Textes. Früher galt sie als Richtwert für Optimierung. Eine ideale Dichte nennt Google nicht, und ein fester Zielwert ist kein sinnvolles Ziel. Entscheidend ist ein natürlich geschriebener, nützlicher Text; unnatürliche Wiederholungen gelten als Keyword Stuffing.",
    fullDescription: "Keyword Density bezeichnet den prozentualen Anteil eines Keywords an der Gesamtwortzahl eines Textes. Früher war sie ein verbreiteter Richtwert. Eine ideale Dichte nennt Google nicht. Wer Keywords unnatürlich oft wiederholt, riskiert, gegen die Spamrichtlinien zu verstoßen.",
    features: [
      "Formel: (Keyword-Anzahl / Gesamtwörter) × 100",
      "Kein von Google genannter Zielwert",
      "Unnatürliche Wiederholung gilt als Keyword Stuffing",
      "Natürliche Sprache und Varianten statt Wiederholung"
    ],
    benefits: [
      "Natürliche Texte schreiben",
      "Keyword Stuffing vermeiden",
      "Inhalte für Menschen schreiben",
      "Qualität vor Formelwerten"
    ],
    relatedTerms: ["Keyword Stuffing", "On-Page SEO", "Keywords", "Search Intent"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "K",
    term: "Keyword Stuffing",
    shortDescription: "Keyword Stuffing ist die übermäßige, unnatürliche Wiederholung von Keywords in Texten, Meta-Tags oder versteckten Bereichen.",
    snippetDefinition: "Keyword Stuffing bezeichnet die übermäßige und unnatürliche Wiederholung von Keywords in Texten, Meta-Tags oder versteckten Bereichen. Google führt es in seinen Spamrichtlinien auf. Betroffene Seiten können herabgestuft oder durch manuelle Maßnahmen aus den Suchergebnissen entfernt werden. Besser ist ein natürlich geschriebener Text für Menschen.",
    fullDescription: "Keyword Stuffing bezeichnet die übermäßige und unnatürliche Verwendung von Keywords in Texten, Meta-Tags oder versteckten Bereichen. Google führt es in seinen Spamrichtlinien auf. Betroffene Seiten können herabgestuft oder aus den Suchergebnissen entfernt werden.",
    features: [
      "Unnatürliche Keyword-Wiederholung",
      "Versteckte Keywords (weiß auf weiß)",
      "Keyword-Listen in Meta-Tags oder Fußzeilen",
      "Verstößt gegen Googles Spamrichtlinien"
    ],
    benefits: [
      "Wissen, was man vermeiden sollte",
      "Natürliche Texte schreiben",
      "Risiken für die Sichtbarkeit vermeiden",
      "Googles Richtlinien verstehen"
    ],
    relatedTerms: ["Black Hat SEO", "Keyword Density", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" }
    ]
  },
  {
    letter: "K",
    term: "Knowledge Graph",
    shortDescription: "Der Knowledge Graph ist Googles Wissensdatenbank, die Dinge wie Personen, Orte und Organisationen und ihre Beziehungen verknüpft.",
    snippetDefinition: "Der Knowledge Graph ist Googles Wissensdatenbank, die Entitäten wie Personen, Orte, Organisationen und Konzepte sowie ihre Beziehungen verknüpft. Google hat ihn 2012 unter dem Motto „things, not strings“ vorgestellt. Er speist unter anderem Knowledge Panels. Ob ein Eintrag erscheint, entscheidet Google. Konsistente, öffentlich auffindbare Angaben und ein gepflegtes Unternehmensprofil helfen, korrekt dargestellt zu werden.",
    fullDescription: "Der Knowledge Graph ist Googles Wissensdatenbank, die Informationen über Personen, Orte, Organisationen und Konzepte vernetzt. Er speist unter anderem Knowledge Panels. Ob ein Unternehmen darin erscheint, entscheidet Google. Einheitliche Angaben im Web und ein gepflegtes Unternehmensprofil helfen, korrekt dargestellt zu werden.",
    features: [
      "Dinge statt Zeichenketten (2012 vorgestellt)",
      "Vernetzt Entitäten semantisch",
      "Speist unter anderem Knowledge Panels",
      "Basiert auf verschiedenen Datenquellen"
    ],
    benefits: [
      "Verständnis, wie Google Entitäten erfasst",
      "Einheitliche Angaben im Web",
      "Korrekte Darstellung des Unternehmens",
      "Klare Entitätssignale wie Name und Adresse"
    ],
    relatedTerms: ["Knowledge Panel", "Schema Markup", "Google Business Profile", "Zero-Click Search"],
    difficulty: "experte",
    importance: 3,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ]
  },
  {
    letter: "K",
    term: "Knowledge Panel",
    shortDescription: "Ein Knowledge Panel ist die Informationsbox, die Google bei Suchen nach Unternehmen, Personen oder Marken anzeigen kann.",
    snippetDefinition: "Ein Knowledge Panel ist eine Informationsbox, die Google bei Suchen nach Unternehmen, Personen oder Marken anzeigen kann. Bei lokalen Unternehmen stammen die Angaben vor allem aus dem Google Business Profile, etwa Adresse, Öffnungszeiten, Fotos und Bewertungen. Inhaber können das Panel beanspruchen und Änderungen vorschlagen. Ob und wie es erscheint, entscheidet Google.",
    fullDescription: "Ein Knowledge Panel ist die Infobox, die Google bei Suchen nach Unternehmen, Personen oder Marken anzeigen kann. Für lokale Unternehmen zeigt sie Informationen aus dem Google Business Profile wie Adresse, Öffnungszeiten, Fotos und Bewertungen. Ob und wie sie erscheint, entscheidet Google.",
    features: [
      "Basiert vor allem auf dem Google Business Profile",
      "Zeigt Bewertungen und Fotos",
      "Direkte Aktionen wie Anruf und Route",
      "Inhaber können das Panel beanspruchen"
    ],
    benefits: [
      "Korrekte Darstellung des Unternehmens",
      "Direkter Kontakt für Kunden",
      "Vertrauensbildende Angaben",
      "Änderungen können vorgeschlagen werden"
    ],
    relatedTerms: ["Knowledge Graph", "Google Business Profile", "SERP", "Zero-Click Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" }
    ]
  },
  // === L ===
  {
    letter: "L",
    term: "Local SEO",
    shortDescription: "Local SEO ist die Suchmaschinenoptimierung für lokale Unternehmen, damit sie bei standortbezogenen Suchanfragen besser gefunden werden.",
    snippetDefinition: "Local SEO ist die Optimierung der Online-Präsenz eines Unternehmens, damit es bei lokalen Suchanfragen in Google Maps und in lokalen Suchergebnissen gefunden wird. Es umfasst das Google Business Profile, lokale Suchbegriffe, einheitliche Angaben im Web, Bewertungen und die Website. Für lokale Treffer nennt Google drei Kriterien: Relevanz, Entfernung und Bekanntheit.",
    fullDescription: "Local SEO ist die Optimierung einer Online-Präsenz, damit ein Unternehmen bei lokalen Suchanfragen besser gefunden wird. Es umfasst das Google Business Profile, lokale Suchbegriffe, einheitliche Angaben, Bewertungen und die Website. Ziel ist, in Google Maps und in lokalen Suchergebnissen aufzutauchen.",
    features: [
      "Google Business Profile pflegen",
      "Lokale Suchbegriffe berücksichtigen",
      "Einheitliche Angaben im Web",
      "Bewertungen aktiv managen"
    ],
    benefits: [
      "Von lokalen Kunden gefunden werden",
      "Sichtbarkeit in der Region",
      "Direkte Kundenanfragen",
      "Klare Prioritäten für lokale Maßnahmen"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "NAP", "Citations", "Reviews (Bewertungen)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Moz: Local SEO Learning Center",
      description: "Umfassende Ressource zum Lernen und Anwenden von Local SEO Strategien.",
      url: "https://moz.com/learn/seo/local",
      source: "Moz"
    }
  },
  {
    letter: "L",
    term: "Local Pack",
    shortDescription: "Das Local Pack ist ein Block in den Google-Suchergebnissen, der eine kleine Auswahl lokaler Unternehmen mit Karte zeigt.",
    snippetDefinition: "Das Local Pack (auch Kartenblock, 3-Pack oder Map Pack) ist ein Block in den Suchergebnissen, der bei lokalen Suchanfragen eine kleine Auswahl passender Unternehmen mit einer Google-Maps-Karte zeigt, meist drei. Die Treffer sortiert Google nach Relevanz, Entfernung und Bekanntheit. Grundlage ist das Google Business Profile.",
    fullDescription: "Das Local Pack (auch 3-Pack genannt) zeigt bei lokalen Suchanfragen eine kleine Auswahl passender Unternehmen mit einer Google-Maps-Karte. Grundlage der Treffer sind Unternehmensprofile, sortiert nach Relevanz, Entfernung und Bekanntheit. Ein vollständig gepflegtes Profil ist die Voraussetzung, dort aufzutauchen.",
    features: [
      "Google Business Profile erforderlich",
      "Zeigt Name, Bewertungen, Adresse",
      "Anruf-Schaltfläche auf Mobilgeräten",
      "Route direkt verfügbar"
    ],
    benefits: [
      "Sichtbarkeit bei lokalen Suchen",
      "Direkter Kundenkontakt",
      "Kostenlos erreichbar über das Unternehmensprofil",
      "Klare Angaben für Kunden"
    ],
    relatedTerms: ["Google Business Profile", "Local SEO", "Google Maps", "Proximity (Entfernung)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Local Pack Research 2024",
      description: "Studie eines Anbieters zu Klickraten und Nutzerverhalten im Local Pack (Drittquelle, nicht von Google).",
      url: "https://www.brightlocal.com/research/local-pack-click-through-study/",
      source: "BrightLocal"
    }
  },
  {
    letter: "L",
    term: "Long-Tail Keywords",
    shortDescription: "Long-Tail Keywords sind längere, spezifischere Suchanfragen aus mehreren Wörtern mit meist geringerem Suchvolumen.",
    snippetDefinition: "Long-Tail Keywords sind längere, spezifischere Suchphrasen aus mehreren Wörtern, zum Beispiel Notdienst Heizung Regensburg Sonntag. Sie haben meist ein geringeres Suchvolumen als allgemeine Begriffe, zeigen aber oft eine konkretere Absicht. Für lokale Unternehmen sind sie nützlich, weil sie Leistung, Ort und Anlass verbinden.",
    fullDescription: "Long-Tail Keywords sind längere, spezifischere Suchphrasen (meist mehrere Wörter), die ein geringeres Suchvolumen, aber oft eine konkretere Absicht haben. Sie verbinden Leistung, Ort und Anlass und sind für lokale Unternehmen nützlich.",
    features: [
      "Meist mehrere Wörter",
      "Geringeres Suchvolumen",
      "Oft konkretere Absicht",
      "Oft weniger Wettbewerb"
    ],
    benefits: [
      "Konkrete Fragen gezielt beantworten",
      "Passende Besucher ansprechen",
      "Gut für spezielle Leistungen",
      "Ergänzung zu allgemeinen Suchbegriffen"
    ],
    relatedTerms: ["Keywords", "Search Intent", "Content-Strategie", "Voice Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "L",
    term: "Link Building",
    shortDescription: "Link Building ist der Aufbau von Links anderer Websites auf die eigene Website.",
    snippetDefinition: "Link Building ist der Prozess, Links von anderen Websites auf die eigene Website zu gewinnen. Links gehören laut Google zu den Faktoren der Websuche, eine Gewichtung nennt Google nicht. Erlaubt sind Links, die aus echten Empfehlungen, Kooperationen oder Berichten entstehen. Gekaufte oder getauschte Links, die das Ranking beeinflussen sollen, verstoßen gegen die Spamrichtlinien.",
    fullDescription: "Link Building ist der Prozess, Links von anderen Websites zu gewinnen. Seriöse Wege sind Partnerschaften, Berichte in regionalen Medien, Vereinsmitgliedschaften und Inhalte, auf die andere von sich aus verweisen. Gekaufte oder getauschte Links, die nur das Ranking beeinflussen sollen, verstoßen gegen Googles Spamrichtlinien.",
    features: [
      "Qualität vor Menge",
      "Natürlicher Linkaufbau",
      "Kooperationen und Medienarbeit",
      "Linkspam vermeiden"
    ],
    benefits: [
      "Verweise von anderen Websites",
      "Mehr Besucher über Verweise",
      "Bekanntheit im Umfeld",
      "Klare Grenzen zu verbotenen Praktiken"
    ],
    relatedTerms: ["Backlinks", "Domain Authority", "Anchor Text", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Backlinko: Link Building Guide",
      description: "Guide eines SEO-Anbieters zu Strategien für den Linkaufbau (Drittquelle, nicht von Google).",
      url: "https://backlinko.com/link-building",
      source: "Backlinko"
    }
  },
  // === M ===
  {
    letter: "M",
    term: "Meta Description",
    shortDescription: "Die Meta Description ist ein HTML-Tag mit einer Seitenbeschreibung, die Google als Textauszug unter dem Titel verwenden kann.",
    snippetDefinition: "Die Meta Description ist ein HTML-Tag, in dem eine kurze Beschreibung der Seite steht. Google kann sie als Textauszug unter dem Titel in den Suchergebnissen verwenden, nutzt aber oft auch Text aus der Seite selbst. Sie dient dem Snippet, nicht dem Ranking. Eine feste Länge schreibt Google nicht vor; angezeigt werden je nach Gerät unterschiedlich viele Zeichen.",
    fullDescription: "Die Meta Description ist ein HTML-Tag, das die Seite kurz beschreibt. Google kann sie als Textauszug in den Suchergebnissen verwenden oder stattdessen Text aus der Seite wählen. Sie dient dem Snippet, nicht dem Ranking. Eine gute Beschreibung fasst sachlich zusammen, was die Seite bietet.",
    features: [
      "Dient als möglicher Snippet-Text",
      "Keine feste Längenvorgabe von Google",
      "Google wählt den Auszug je nach Suchanfrage",
      "Eindeutig pro Seite"
    ],
    benefits: [
      "Kontrolle über den möglichen Auszug",
      "Passung zur Seite verdeutlichen",
      "Nutzer vor dem Klick informieren",
      "Sachlich zusammenfassen"
    ],
    relatedTerms: ["Title Tag", "Meta-Tags", "CTR", "SERP"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Yoast: Meta Description Guide",
      description: "Best Practices für überzeugende Meta Descriptions mit Beispielen.",
      url: "https://yoast.com/meta-descriptions/",
      source: "Yoast"
    }
  },
  {
    letter: "M",
    term: "Meta-Tags",
    shortDescription: "Meta-Tags sind HTML-Elemente im Kopf einer Seite, die Suchmaschinen und Browsern Informationen über die Seite geben.",
    snippetDefinition: "Meta-Tags sind HTML-Elemente im Quellcode einer Webseite, die Suchmaschinen und Browsern Informationen über die Seite geben. Wichtige Beispiele sind der Title-Tag, die Meta Description und Meta Robots zur Steuerung der Indexierung. Eine feste Zeichengrenze für den Titel gibt Google nicht vor; zu lange Titel werden in der Anzeige gekürzt.",
    fullDescription: "Meta-Tags sind HTML-Elemente, die Suchmaschinen Informationen über eine Seite geben. Wichtige Beispiele sind der Title-Tag, die Meta Description und Meta Robots. Für Local SEO sollten Ortsangaben in Titel und Beschreibung stehen, wenn sie für die Seite tatsächlich zutreffen.",
    features: [
      "Title-Tag: kurz und eindeutig",
      "Meta Description: fasst die Seite zusammen",
      "Meta Robots: Indexierung steuern",
      "Open Graph: Vorschau in sozialen Netzwerken"
    ],
    benefits: [
      "Kontrolle über die Darstellung",
      "Klare Angaben für Suchmaschinen",
      "Steuerung der Indexierung",
      "Bessere Vorschau beim Teilen"
    ],
    relatedTerms: ["Title Tag", "Meta Description", "On-Page SEO", "SERP"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "M",
    term: "Mobile First Index",
    shortDescription: "Mobile-First-Indexierung bedeutet, dass Google die mobile Version einer Website zum Indexieren und Bewerten heranzieht.",
    snippetDefinition: "Mobile-First-Indexierung bedeutet, dass Google Websites anhand ihrer mobilen Version indexiert und bewertet. Für lokale Betriebe heißt das: Auf dem Handy müssen alle wichtigen Inhalte, Adresse, Öffnungszeiten und strukturierte Daten vorhanden sein, und die Seite muss schnell und bedienbar sein. Das gilt auch, wenn Ihre Kunden überwiegend am Computer suchen.",
    fullDescription: "Mobile-First-Indexierung bedeutet, dass Google Websites anhand ihrer mobilen Version indexiert und bewertet. Inhalte, Metadaten und strukturierte Daten sollten mobil und am Desktop gleich vollständig sein. Eine Seite, die mobil Inhalte weglässt, kann sie dadurch auch in der Suche verlieren.",
    features: [
      "Die mobile Version ist maßgeblich",
      "Responsive Design empfohlen",
      "Gleiche Inhalte mobil und am Desktop",
      "Strukturierte Daten auch mobil vorhanden"
    ],
    benefits: [
      "Vollständige Inhalte auch auf dem Handy",
      "Größere Zielgruppe erreichen",
      "Weniger Risiko durch fehlende Inhalte",
      "Bessere Nutzbarkeit"
    ],
    relatedTerms: ["Responsive Design", "Core Web Vitals", "PageSpeed", "User Experience"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" }
    ],
    bestPracticeExample: {
      title: "Google: Mobile First Indexing",
      description: "Offizielle Dokumentation zu Mobile First Indexing Best Practices.",
      url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
      source: "Google Search Central"
    }
  },
  // === N ===
  {
    letter: "N",
    term: "NAP",
    shortDescription: "NAP steht für Name, Address, Phone, die Kontaktdaten eines Unternehmens, die überall im Web gleich lauten sollten.",
    snippetDefinition: "NAP steht für Name, Address, Phone und bezeichnet die grundlegenden Kontaktdaten eines lokalen Unternehmens. Einheitliche Angaben auf Website, Unternehmensprofil, Verzeichnissen und Social Media vermeiden Verwechslungen bei Kunden und bei Suchmaschinen. Im Google Business Profile muss der Name dem tatsächlichen Namen entsprechen, den Kunden vor Ort vorfinden.",
    fullDescription: "NAP steht für Name, Address, Phone und bezeichnet die grundlegenden Kontaktdaten eines Unternehmens. Einheitliche Angaben auf Website, Profil, Verzeichnissen und Social Media vermeiden Verwechslungen. Eine feste Gewichtung für das Ranking nennt Google nicht.",
    features: [
      "Überall gleiche Schreibweise",
      "Einheitliche Telefonnummer",
      "Vollständige Adresse",
      "Strukturierte Daten mit denselben Angaben"
    ],
    benefits: [
      "Einheitliches Auftreten",
      "Weniger Verwechslungen",
      "Verlässliche Angaben für Kunden",
      "Saubere Datenbasis für Google"
    ],
    relatedTerms: ["Citations", "Branchenverzeichnis", "Local SEO", "Google Business Profile"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Moz: NAP Consistency Guide",
      description: "Detaillierter Guide zur NAP-Konsistenz mit Checklisten und Audit-Anleitung.",
      url: "https://moz.com/learn/seo/local-citations",
      source: "Moz"
    }
  },
  {
    letter: "N",
    term: "Nofollow Link",
    shortDescription: "Ein Nofollow Link trägt das Attribut rel='nofollow' und weist Suchmaschinen darauf hin, den Link nicht als Empfehlung zu werten.",
    snippetDefinition: "Ein Nofollow Link enthält das HTML-Attribut rel='nofollow'. Es weist Suchmaschinen darauf hin, den Link nicht als Empfehlung zu werten. Seit 2020 behandelt Google Nofollow als Hinweis statt als strikte Anweisung. Für bezahlte Links ist rel='sponsored' vorgesehen, für Nutzerbeiträge wie Kommentare rel='ugc'.",
    fullDescription: "Ein Nofollow Link enthält das Attribut rel='nofollow'. Es weist Suchmaschinen darauf hin, den Link nicht als Empfehlung zu werten. Seit 2020 behandelt Google Nofollow als Hinweis statt als strikte Anweisung. Für bezahlte Links ist rel='sponsored' vorgesehen, für Nutzerbeiträge wie Kommentare rel='ugc'.",
    features: [
      "rel='nofollow' Attribut",
      "Hinweis statt strikter Anweisung",
      "Seit 2020 als Hinweis behandelt",
      "Weitere Werte: rel='sponsored', rel='ugc'"
    ],
    benefits: [
      "Bezahlte Links richtig kennzeichnen",
      "Nutzerbeiträge kennzeichnen",
      "Regeln der Spamrichtlinien einhalten",
      "Natürliches Linkprofil"
    ],
    relatedTerms: ["Backlinks", "Link Building", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 3
  },
  // === O ===
  {
    letter: "O",
    term: "Off-Page SEO",
    shortDescription: "Off-Page SEO umfasst Optimierungsmaßnahmen außerhalb der eigenen Website, etwa Verlinkungen und Erwähnungen.",
    snippetDefinition: "Off-Page SEO umfasst alle Maßnahmen außerhalb der eigenen Website, die die Sichtbarkeit in Suchmaschinen beeinflussen können. Dazu gehören Links von anderen Websites, Erwähnungen der Marke, Einträge in Verzeichnissen und Bewertungen. Wie stark einzelne Faktoren wirken, veröffentlicht Google nicht; Prozentangaben zu On-Page und Off-Page sind nicht belegt.",
    fullDescription: "Off-Page SEO umfasst alle Optimierungsmaßnahmen außerhalb der eigenen Website. Dazu gehören Links von anderen Websites, Markenerwähnungen, lokale Verzeichniseinträge und Bewertungen. Wie stark einzelne Faktoren wirken, veröffentlicht Google nicht.",
    features: [
      "Links von anderen Websites",
      "Markenerwähnungen",
      "Verzeichniseinträge",
      "Bewertungen und Reputation"
    ],
    benefits: [
      "Bekanntheit im Umfeld aufbauen",
      "Verweise von anderen Websites",
      "Mehr Besucher über Verweise",
      "Ruf im Web pflegen"
    ],
    relatedTerms: ["On-Page SEO", "Link Building", "Backlinks", "Citations", "Technical SEO"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Off-Page SEO Guide",
      description: "Umfassender Guide zu allen Off-Page SEO Faktoren und Strategien.",
      url: "https://ahrefs.com/blog/off-page-seo/",
      source: "Ahrefs"
    }
  },
  {
    letter: "O",
    term: "On-Page SEO",
    shortDescription: "On-Page SEO umfasst Optimierungsmaßnahmen, die direkt auf der eigenen Website durchgeführt werden.",
    snippetDefinition: "On-Page SEO umfasst alle Optimierungsmaßnahmen, die direkt auf der eigenen Website durchgeführt werden: Inhalte, Titel und Überschriften, technische Grundlagen, interne Verlinkung und Nutzerführung. Für lokale Unternehmen gehören auch korrekte Standortangaben, passende Leistungsseiten und strukturierte Daten dazu.",
    fullDescription: "On-Page SEO umfasst alle Optimierungsmaßnahmen, die direkt auf der Website durchgeführt werden. Dazu gehören Inhalte, Titel und Überschriften, technische Aspekte, interne Verlinkung und Nutzerführung. Für lokale Unternehmen sind korrekte Standortangaben, klare Leistungsseiten und strukturierte Daten besonders wichtig.",
    features: [
      "Inhalte optimieren",
      "Titel, Beschreibung und Überschriften",
      "Technische Grundlagen",
      "Interne Verlinkung"
    ],
    benefits: [
      "Volle Kontrolle über die Umsetzung",
      "Schnell umsetzbar",
      "Solide Grundlage",
      "Bessere Nutzererfahrung"
    ],
    relatedTerms: ["Off-Page SEO", "Technical SEO", "Keywords", "Internal Linking", "Title Tag"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Backlinko: On-Page SEO Guide",
      description: "Detaillierter Guide zu allen On-Page SEO Faktoren mit Praxisbeispielen.",
      url: "https://backlinko.com/on-page-seo",
      source: "Backlinko"
    }
  },
  {
    letter: "O",
    term: "Organic Traffic",
    shortDescription: "Organic Traffic sind Besucher, die über unbezahlte Suchergebnisse auf eine Website gelangen.",
    snippetDefinition: "Organic Traffic bezeichnet Besucher, die über unbezahlte (organische) Suchergebnisse auf eine Website gelangen, im Gegensatz zu bezahltem Traffic aus Anzeigen. Er lässt sich in Google Analytics und der Search Console nachvollziehen. Mehr organische Besucher sind ein typisches Ziel der Suchmaschinenoptimierung, aber erst Anfragen und Kunden machen sie wertvoll.",
    fullDescription: "Organic Traffic bezeichnet Besucher, die über unbezahlte Suchergebnisse auf eine Website gelangen, im Gegensatz zu bezahltem Traffic aus Anzeigen. Er lässt sich in Google Analytics und der Search Console nachvollziehen. Mehr organische Besucher sind ein typisches Ziel der Suchmaschinenoptimierung.",
    features: [
      "Keine Klickkosten",
      "Abhängig von Sichtbarkeit in den Suchergebnissen",
      "Messbar in Analytics und Search Console",
      "Entwicklung braucht Zeit"
    ],
    benefits: [
      "Keine Kosten pro Klick",
      "Verlauf über die Zeit beobachten",
      "Hinweis auf Sichtbarkeit",
      "Grundlage für Anfragen und Kunden"
    ],
    relatedTerms: ["SERP", "Keywords", "On-Page SEO", "Off-Page SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === P ===
  {
    letter: "P",
    term: "PageSpeed",
    shortDescription: "PageSpeed bezeichnet die Ladegeschwindigkeit einer Website und wird über Messwerte wie die Core Web Vitals beurteilt.",
    snippetDefinition: "PageSpeed bezeichnet die Ladegeschwindigkeit und das Reaktionsverhalten einer Website. Gemessen wird sie unter anderem über die Core Web Vitals (LCP, INP, CLS), die laut Google von den Ranking-Systemen der Websuche genutzt werden. Gute Werte garantieren keine Top-Position, schaffen aber eine bessere Nutzererfahrung, besonders auf dem Handy.",
    fullDescription: "PageSpeed bezeichnet die Ladezeit und Reaktionsfähigkeit einer Website. Gemessen wird sie unter anderem über die Core Web Vitals. Laut Google werden diese von den Ranking-Systemen der Websuche genutzt, ersetzen aber nicht die Relevanz des Inhalts. Für Besucher auf dem Handy zählt eine schnelle Seite in jedem Fall.",
    features: [
      "Largest Contentful Paint (LCP)",
      "Interaction to Next Paint (INP, ersetzt FID)",
      "Cumulative Layout Shift (CLS)",
      "Time to First Byte (TTFB)"
    ],
    benefits: [
      "Bessere Nutzererfahrung",
      "Weniger Abbrüche",
      "Bessere mobile Erfahrung",
      "Von Googles Ranking-Systemen genutzt, ohne Garantie"
    ],
    relatedTerms: ["Core Web Vitals", "Mobile First Index", "Technical SEO", "User Experience"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google PageSpeed Insights",
      description: "Offizielles Tool zur Analyse und Optimierung der Seitengeschwindigkeit.",
      url: "https://pagespeed.web.dev/",
      source: "Google"
    }
  },
  {
    letter: "P",
    term: "Proximity (Entfernung)",
    shortDescription: "Proximity (Entfernung) ist der Abstand zwischen dem Standort des Suchenden und einem lokalen Unternehmen, eines der drei Kriterien für lokale Treffer.",
    snippetDefinition: "Proximity bezeichnet die Entfernung zwischen dem Suchenden und einem lokalen Unternehmen. Neben Relevanz und Bekanntheit ist sie eines von drei Kriterien, nach denen Google lokale Treffer sortiert. Eine Gewichtung veröffentlicht Google nicht. Die Entfernung können Betriebe nicht beeinflussen; sie können aber ihre Relevanz und Bekanntheit pflegen.",
    fullDescription: "Proximity bezeichnet die Entfernung zwischen dem Suchenden und einem lokalen Unternehmen. Neben Relevanz und Bekanntheit ist sie eines von drei Kriterien für lokale Treffer. Eine Gewichtung veröffentlicht Google nicht. Die Entfernung ist für Betriebe nicht direkt beeinflussbar.",
    features: [
      "Standortbasiert auf Mobilgeräten",
      "Ungefährer Standort am Computer",
      "Stadtteile und Bezirke relevant",
      "Nicht direkt beeinflussbar"
    ],
    benefits: [
      "Verständnis des Kriteriums",
      "Realistische Erwartungen an lokale Treffer",
      "Servicegebiete ehrlich festlegen",
      "Fokus auf Relevanz und Bekanntheit"
    ],
    relatedTerms: ["Local Pack", "Local SEO", "Geo-Targeting", "Google Maps"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  // === Q ===
  {
    letter: "Q",
    term: "Quality Raters",
    shortDescription: "Quality Raters sind externe Prüfer, die Googles Suchergebnisse anhand der Search Quality Rater Guidelines beurteilen.",
    snippetDefinition: "Quality Raters sind externe Prüfer, die Suchergebnisse für Google anhand der Search Quality Rater Guidelines beurteilen. Sie bewerten dabei auch nach dem Rahmen E-E-A-T. Ihre Bewertungen bestimmen laut Google nicht direkt das Ranking einzelner Seiten, sondern helfen, Änderungen an den Suchsystemen zu testen und zu verbessern.",
    fullDescription: "Quality Raters sind externe Prüfer, die Suchergebnisse für Google anhand der Search Quality Rater Guidelines beurteilen. Die Richtlinien beschreiben unter anderem E-E-A-T. Ihre Bewertungen bestimmen laut Google nicht direkt das Ranking einzelner Seiten, sondern helfen, die Suchsysteme zu testen.",
    features: [
      "Arbeiten nach den Quality Rater Guidelines",
      "Beurteilen Suchergebnisse",
      "Beschreiben E-E-A-T",
      "Keine direkte Wirkung auf einzelne Seiten"
    ],
    benefits: [
      "Einblick in Googles Qualitätsmaßstäbe",
      "Verständnis für YMYL-Themen",
      "Orientierung beim Schreiben",
      "Guidelines sind öffentlich einsehbar"
    ],
    relatedTerms: ["E-E-A-T", "YMYL", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "experte",
    importance: 2
  },
  // === R ===
  {
    letter: "R",
    term: "Responsive Design",
    shortDescription: "Responsive Design ist ein Webdesign-Ansatz, bei dem sich Layout und Inhalte automatisch an die Bildschirmgröße anpassen.",
    snippetDefinition: "Responsive Design ist ein Webdesign-Ansatz, bei dem sich Layout, Bilder und Navigation automatisch an verschiedene Bildschirmgrößen und Geräte anpassen. Eine Adresse liefert dabei dieselben Inhalte an alle Geräte. Google empfiehlt Responsive Design als Methode für mobile Websites. Es erleichtert die Pflege, weil es nur eine Version gibt.",
    fullDescription: "Responsive Design ist ein Webdesign-Ansatz, bei dem sich die Website automatisch an verschiedene Bildschirmgrößen und Geräte anpasst. Eine URL liefert dieselben Inhalte an alle Geräte. Google empfiehlt Responsive Design für mobile Websites.",
    features: [
      "Automatische Anpassung an die Bildschirmgröße",
      "Eine URL für alle Geräte",
      "Flexible Raster und Bilder",
      "CSS Media Queries"
    ],
    benefits: [
      "Gute Bedienung auf allen Geräten",
      "Von Google empfohlen",
      "Einfachere Wartung (eine Version)",
      "Gleiche Inhalte mobil und am Desktop"
    ],
    relatedTerms: ["Mobile First Index", "Core Web Vitals", "User Experience", "PageSpeed"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  {
    letter: "R",
    term: "Reviews (Bewertungen)",
    shortDescription: "Reviews (Bewertungen) sind Kundenbewertungen auf Google und anderen Plattformen.",
    snippetDefinition: "Reviews (Bewertungen) sind Kundenbewertungen auf Google, Facebook und Branchenportalen. Laut Googles Hilfe fließen Anzahl und Durchschnitt der Google-Bewertungen in das lokale Ranking ein. Bewertungen dürfen nicht gekauft oder an Gegenleistungen geknüpft werden; auch das Filtern nur positiver Rückmeldungen verstößt gegen Googles Richtlinien.",
    fullDescription: "Reviews sind Kundenbewertungen, die auf Google, Facebook, Branchenportalen und anderen Plattformen hinterlassen werden. Laut Googles Hilfe fließen Anzahl und Durchschnitt der Google-Bewertungen in das lokale Ranking ein. Für Kunden sind sie eine wichtige Entscheidungshilfe. Bewertungen dürfen nicht gekauft oder gegen Gegenleistungen eingesammelt werden.",
    features: [
      "Google-Bewertungen als Grundlage im Profil",
      "Sternebewertung und Text",
      "Antworten auf Bewertungen",
      "Richtlinien: keine Anreize, keine Filterung"
    ],
    benefits: [
      "Fließen laut Google in das lokale Ranking ein",
      "Mehr Vertrauen bei Neukunden",
      "Wertvolles Kundenfeedback",
      "Gelegenheit, öffentlich zu antworten"
    ],
    relatedTerms: ["Google Business Profile", "E-E-A-T", "Local SEO", "Local Pack"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "negative-google-bewertungen", title: "Negative Google Bewertungen managen" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Google: Auf Bewertungen antworten",
      description: "Offizielle Anleitung zum professionellen Umgang mit Google-Bewertungen.",
      url: "https://support.google.com/business/answer/3474050?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "R",
    term: "Rich Snippets",
    shortDescription: "Rich Snippets sind erweiterte Suchergebnisse, die durch strukturierte Daten zusätzliche Informationen anzeigen können.",
    snippetDefinition: "Rich Snippets, bei Google heute meist Rich Results genannt, sind erweiterte Suchergebnisse, die durch strukturierte Daten zusätzliche Informationen wie Preise, Verfügbarkeit oder Veranstaltungen anzeigen können. Ob und in welcher Form Google sie zeigt, hängt vom Markup-Typ und davon ab, ob die Seite die Voraussetzungen erfüllt. Eine Garantie gibt es nicht.",
    fullDescription: "Rich Snippets, bei Google heute meist Rich Results genannt, sind erweiterte Suchergebnisse mit zusätzlichen Informationen wie Preisen, Verfügbarkeit oder Veranstaltungsdaten. Sie entstehen durch strukturierte Daten, werden aber nur gezeigt, wenn Google das für die Seite vorsieht. Nicht jede Auszeichnung führt zu einem Rich Result.",
    features: [
      "Produktpreise und Verfügbarkeit",
      "Veranstaltungsinformationen",
      "Weitere Typen je nach Google-Dokumentation",
      "Anzeige entscheidet Google"
    ],
    benefits: [
      "Mehr Informationen vorab zeigen",
      "Auffälligere Darstellung, wenn sie angezeigt werden",
      "Klare Daten für Nutzer",
      "Grundlage: korrekt umgesetzte strukturierte Daten"
    ],
    relatedTerms: ["Schema Markup", "JSON-LD", "SERP", "Featured Snippet"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ]
  },
  {
    letter: "R",
    term: "Robots.txt",
    shortDescription: "Die robots.txt ist eine Textdatei im Stammverzeichnis einer Website, die Crawlern mitteilt, welche Bereiche sie abrufen dürfen.",
    snippetDefinition: "Die robots.txt ist eine Textdatei im Stammverzeichnis einer Website, die Crawlern wie dem Googlebot mitteilt, welche Bereiche sie abrufen dürfen und welche nicht. Sie steuert das Crawling, nicht die Indexierung: Eine blockierte URL kann trotzdem ohne Inhalt in den Suchergebnissen erscheinen. Um eine Seite aus der Suche auszuschließen, braucht es noindex. Die Datei ist öffentlich lesbar und kein Schutz für vertrauliche Inhalte.",
    fullDescription: "Die robots.txt ist eine Textdatei im Stammverzeichnis einer Website, die Crawlern mitteilt, welche Bereiche sie abrufen dürfen. Sie ist kein Sicherheitsmechanismus, sondern eine Vereinbarung, an die sich seriöse Bots halten. Sie steuert das Crawling, nicht die Indexierung.",
    features: [
      "Liegt im Stammverzeichnis",
      "Steuert Crawling (nicht Indexierung)",
      "Disallow- und Allow-Regeln",
      "Sitemap-Verweis möglich"
    ],
    benefits: [
      "Crawler von unwichtigen Bereichen fernhalten",
      "Zentrale Steuerung des Crawlings",
      "Sitemap für Crawler auffindbar machen",
      "Kein Ersatz für noindex oder Passwortschutz"
    ],
    relatedTerms: ["Crawling", "Indexierung", "Technical SEO", "XML-Sitemap"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === S ===
  {
    letter: "S",
    term: "Schema Markup",
    shortDescription: "Schema Markup ist eine standardisierte Form strukturierter Daten nach dem Schema.org-Vokabular, die Suchmaschinen Inhalte besser verstehen lässt.",
    snippetDefinition: "Schema Markup ist eine standardisierte Form strukturierter Daten auf Grundlage des Schema.org-Vokabulars. Es hilft Suchmaschinen, die Inhalte einer Seite besser zu verstehen, und kann in Formaten wie JSON-LD umgesetzt werden. Es kann Rich Results ermöglichen, garantiert sie aber nicht. Für Local SEO ist das LocalBusiness-Markup mit Name, Adresse und Öffnungszeiten üblich.",
    fullDescription: "Schema Markup ist eine standardisierte Form strukturierter Daten, die Suchmaschinen hilft, Inhalte besser zu verstehen. Es verwendet das Schema.org-Vokabular und kann in verschiedenen Formaten (JSON-LD, Microdata) umgesetzt werden. Die Angaben müssen mit dem sichtbaren Inhalt übereinstimmen.",
    features: [
      "Schema.org-Vokabular",
      "LocalBusiness, Product, Event und weitere Typen",
      "JSON-LD als empfohlenes Format",
      "Kann Rich Results ermöglichen"
    ],
    benefits: [
      "Besseres maschinelles Verständnis der Inhalte",
      "Kann Rich Results ermöglichen, wenn die Seite berechtigt ist",
      "Klare Angaben zum Unternehmen",
      "Einheitliche Datenbasis"
    ],
    relatedTerms: ["JSON-LD", "Rich Snippets", "Technical SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Strukturierte Daten einführen",
      description: "Offizielle Dokumentation zu allen Schema-Typen und deren Implementierung.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      source: "Google Search Central"
    }
  },
  {
    letter: "S",
    term: "Search Intent",
    shortDescription: "Search Intent (Suchintention) beschreibt die Absicht und das Ziel, das ein Nutzer mit einer Suchanfrage verfolgt.",
    snippetDefinition: "Search Intent (Suchintention) beschreibt, was ein Nutzer mit einer Suchanfrage tatsächlich erreichen möchte. Häufig unterscheidet man vier Typen: informational (Wissen suchen), navigational (eine bestimmte Seite finden), commercial (vor dem Kauf vergleichen) und transactional (direkt kaufen oder buchen). Inhalte sollten zur Absicht der Suchanfrage passen.",
    fullDescription: "Search Intent (Suchintention) beschreibt, was ein Nutzer mit einer Suchanfrage tatsächlich erreichen möchte. Häufig unterscheidet man vier Typen: informational, navigational, commercial und transactional. Inhalte, die die Absicht treffen, sind für Nutzer nützlicher als solche, die nur ein Stichwort enthalten.",
    features: [
      "Informational: Wissen suchen",
      "Navigational: Bestimmte Seite finden",
      "Commercial: Recherche vor Kauf",
      "Transactional: Direkt kaufen oder buchen"
    ],
    benefits: [
      "Passende Inhalte erstellen",
      "Besucher mit klarer Absicht abholen",
      "Klare Seitenziele",
      "Nutzer zufriedenstellen"
    ],
    relatedTerms: ["Keywords", "Content-Strategie", "Long-Tail Keywords", "User Experience"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ],
    bestPracticeExample: {
      title: "Backlinko: Search Intent Guide",
      description: "Umfassender Guide zum Verstehen und Nutzen von Suchintentionen.",
      url: "https://backlinko.com/hub/seo/search-intent",
      source: "Backlinko"
    }
  },
  {
    letter: "S",
    term: "SERP",
    shortDescription: "SERP (Search Engine Results Page) ist die Ergebnisseite, die Google nach einer Suchanfrage anzeigt.",
    snippetDefinition: "SERP (Search Engine Results Page) ist die Seite, die Google nach einer Suchanfrage anzeigt. Sie kann organische Ergebnisse, bezahlte Anzeigen, das Local Pack, Featured Snippets und Knowledge Panels enthalten. Welche Elemente erscheinen, hängt von der Suchanfrage und vom Nutzer ab. Wer die SERP zu seinen Suchbegriffen kennt, weiß, wo Sichtbarkeit entsteht.",
    fullDescription: "SERP (Search Engine Results Page) ist die Seite, die Google nach einer Suchanfrage anzeigt. Sie kann organische Ergebnisse, Anzeigen, das Local Pack, Featured Snippets und weitere Elemente enthalten. Welche Elemente erscheinen, hängt von der Suchanfrage ab.",
    features: [
      "Organische Ergebnisse",
      "Google Ads (bezahlte Anzeigen)",
      "Local Pack / Kartenblock",
      "Knowledge Panel und weitere Elemente"
    ],
    benefits: [
      "Verstehen, wo Sichtbarkeit entsteht",
      "Passende Maßnahmen je Suchanfrage wählen",
      "Wettbewerb realistisch einschätzen",
      "Eigene Ergebnisse prüfen"
    ],
    relatedTerms: ["Organic Traffic", "Featured Snippet", "Local Pack", "Rich Snippets", "Zero-Click Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "S",
    term: "Social Signals",
    shortDescription: "Social Signals sind Interaktionen auf Social-Media-Plattformen wie Likes, Shares und Kommentare.",
    snippetDefinition: "Social Signals sind Interaktionen auf Social-Media-Plattformen wie Likes, Shares, Kommentare und Erwähnungen. Dass Google sie als Ranking-Signal nutzt, ist nicht belegt. Indirekt können Social-Media-Beiträge Besucher auf die Website bringen und die Bekanntheit einer Marke steigern.",
    fullDescription: "Social Signals sind Likes, Shares, Kommentare und andere Interaktionen auf Social-Media-Plattformen. Ein Ranking-Effekt ist nicht belegt. Indirekt können Beiträge Besucher auf die Website bringen und die Bekanntheit steigern.",
    features: [
      "Likes und Shares",
      "Kommentare und Erwähnungen",
      "Follower-Zahlen",
      "Engagement-Rate"
    ],
    benefits: [
      "Mehr Website-Besucher",
      "Mehr Bekanntheit",
      "Verbreitung von Inhalten",
      "Kontakt zu Kunden"
    ],
    relatedTerms: ["Off-Page SEO", "Link Building", "E-E-A-T"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ]
  },
  {
    letter: "S",
    term: "SSL-Zertifikat",
    shortDescription: "Ein SSL-Zertifikat (heute meist TLS-Zertifikat) ermöglicht verschlüsselte HTTPS-Verbindungen zwischen Browser und Server.",
    snippetDefinition: "Ein SSL-Zertifikat, heute technisch meist TLS-Zertifikat, ermöglicht die verschlüsselte HTTPS-Kommunikation zwischen Browser und Server. Es zeigt im Browser das Schloss-Symbol und schützt Formulardaten. Google hat 2014 angekündigt, HTTPS als schwaches Ranking-Signal zu nutzen. Kostenlose Zertifikate gibt es unter anderem über Let's Encrypt.",
    fullDescription: "Ein SSL-Zertifikat (heute technisch meist TLS-Zertifikat) ermöglicht die verschlüsselte Kommunikation zwischen Browser und Server (HTTPS). Google hat 2014 angekündigt, HTTPS als schwaches Ranking-Signal zu nutzen. Für lokale Unternehmen schafft es Vertrauen bei Kunden und schützt Formulardaten.",
    features: [
      "Verschlüsselte Datenübertragung",
      "Schloss-Symbol im Browser",
      "Verschiedene Zertifikatstypen",
      "Kostenlos über Let's Encrypt erhältlich"
    ],
    benefits: [
      "Grundlage für moderne Websites",
      "Mehr Nutzervertrauen",
      "Schutz von Formulardaten",
      "Schwaches Ranking-Signal laut Google (2014)"
    ],
    relatedTerms: ["HTTPS", "Technical SEO", "E-E-A-T"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === T ===
  {
    letter: "T",
    term: "Technical SEO",
    shortDescription: "Technical SEO umfasst die technische Optimierung einer Website für Crawling, Indexierung und Rendering durch Suchmaschinen.",
    snippetDefinition: "Technical SEO umfasst alle technischen Aspekte einer Website, die Crawling, Indexierung und Rendering durch Suchmaschinen beeinflussen. Dazu gehören Erreichbarkeit, Seitengeschwindigkeit (Core Web Vitals), mobile Nutzbarkeit, strukturierte Daten, URL-Struktur und Servereinstellungen. Sie bildet die Grundlage, damit gute Inhalte überhaupt gefunden werden.",
    fullDescription: "Technical SEO umfasst alle technischen Aspekte, die Crawling, Indexierung und Rendering einer Website beeinflussen. Dazu gehören Seitengeschwindigkeit, mobile Nutzbarkeit, strukturierte Daten, URL-Struktur und Servereinstellungen.",
    features: [
      "Crawling und Indexierung",
      "Core Web Vitals prüfen",
      "Strukturierte Daten umsetzen",
      "Sitemap und robots.txt"
    ],
    benefits: [
      "Solide Grundlage für Inhalte",
      "Besseres Crawling",
      "Weniger technische Fehler",
      "Klare Hinweise an Suchmaschinen"
    ],
    relatedTerms: ["Core Web Vitals", "Crawling", "Indexierung", "Schema Markup", "PageSpeed"],
    difficulty: "experte",
    importance: 5,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google: Technical SEO Guidelines",
      description: "Offizielle Dokumentation zu allen technischen SEO-Aspekten.",
      url: "https://developers.google.com/search/docs/crawling-indexing",
      source: "Google Search Central"
    }
  },
  {
    letter: "T",
    term: "Title Tag",
    shortDescription: "Der Title Tag ist das HTML-Element, das den Seitentitel festlegt und Google als Quelle für den Titel in den Suchergebnissen dient.",
    snippetDefinition: "Der Title Tag ist ein HTML-Element, das den Seitentitel festlegt. Google nutzt ihn als wichtige Quelle für den Titel in den Suchergebnissen, kann ihn aber umschreiben, wenn er nicht zur Seite passt. Eine feste Zeichengrenze nennt Google nicht; zu lange Titel werden gekürzt dargestellt. Gut ist ein eindeutiger Titel, der den Inhalt der Seite beschreibt.",
    fullDescription: "Der Title Tag ist das HTML-Element, das den Seitentitel festlegt. Google nutzt ihn als wichtige Quelle für den Titel in den Suchergebnissen, kann ihn aber umschreiben. Für Local SEO sind Ortsnamen sinnvoll, wenn sie für die Seite zutreffen.",
    features: [
      "Eindeutig pro Seite",
      "Beschreibt den Inhalt der Seite",
      "Kurz genug, um nicht gekürzt zu werden",
      "Markenname am Ende möglich"
    ],
    benefits: [
      "Kontrolle über den Titel in den Suchergebnissen",
      "Klare Aussage zum Inhalt",
      "Passung zur Suchanfrage verdeutlichen",
      "Google kann den Titel dennoch anpassen"
    ],
    relatedTerms: ["Meta-Tags", "Meta Description", "On-Page SEO", "CTR"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Moz: Title Tag Guide",
      description: "Umfassender Guide zur Optimierung von Title Tags für bessere Rankings.",
      url: "https://moz.com/learn/seo/title-tag",
      source: "Moz"
    }
  },
  // === U ===
  {
    letter: "U",
    term: "URL-Struktur",
    shortDescription: "Die URL-Struktur bezeichnet den Aufbau von Website-Adressen, die verständlich und logisch aufgebaut sein sollten.",
    snippetDefinition: "Die URL-Struktur bezeichnet den Aufbau der Webadressen einer Website. Googles Empfehlung: einfache, verständliche URLs, die den Inhalt beschreiben und einer logischen Hierarchie folgen, mit Bindestrichen als Trennzeichen. Ortsnamen können in URLs vorkommen, wenn die Seite tatsächlich zu diesem Ort gehört. Eine einmal gewählte Adresse sollte stabil bleiben.",
    fullDescription: "Die URL-Struktur bezeichnet den Aufbau der Webadressen einer Website. Einfache, verständliche URLs mit logischer Hierarchie sind für Nutzer und Suchmaschinen leichter nachvollziehbar. Ortsnamen sind sinnvoll, wenn die Seite wirklich zu diesem Ort gehört.",
    features: [
      "Verständlich und beschreibend",
      "Logische Hierarchie",
      "Bindestrich statt Unterstrich",
      "Stabile Adressen"
    ],
    benefits: [
      "Leicht zu verstehende Adressen",
      "Klare Seitenstruktur",
      "Weniger Probleme durch Parameter",
      "Stabile Links"
    ],
    relatedTerms: ["On-Page SEO", "Technical SEO", "Canonical URL"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "U",
    term: "User Experience (UX)",
    shortDescription: "User Experience (UX) beschreibt das Gesamterlebnis eines Nutzers auf einer Website.",
    snippetDefinition: "User Experience (UX) beschreibt das Gesamterlebnis, das Nutzer auf einer Website haben: von Ladezeit über Navigation bis zum Inhalt. Google nennt die Core Web Vitals als Messwerte für Teile davon und empfiehlt, gute Werte anzustreben. Ein einzelnes Signal für Nutzerfreundlichkeit gibt es laut Google nicht. Eine klare Seite hilft Besuchern in jedem Fall, Kontakt aufzunehmen.",
    fullDescription: "User Experience beschreibt, wie Nutzer eine Website erleben, von der Ladezeit über die Navigation bis zum Inhalt. Google empfiehlt, gute Core Web Vitals anzustreben, nennt aber kein einzelnes Signal für Nutzerfreundlichkeit. Für lokale Unternehmen zählt vor allem, dass Besucher Öffnungszeiten, Leistungen und Kontakt schnell finden.",
    features: [
      "Core Web Vitals (LCP, INP, CLS)",
      "Mobile Nutzbarkeit",
      "Verständliche Navigation",
      "Klare Handlungsaufforderungen"
    ],
    benefits: [
      "Einfachere Kontaktaufnahme",
      "Weniger Abbrüche durch Frust",
      "Bessere Orientierung",
      "Mehr zufriedene Besucher"
    ],
    relatedTerms: ["Core Web Vitals", "Mobile First Index", "PageSpeed", "Bounce Rate", "Dwell Time"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  // === V ===
  {
    letter: "V",
    term: "Voice Search",
    shortDescription: "Voice Search ist die Suche per Sprachbefehl über Smartphones, Smart Speaker und andere Geräte.",
    snippetDefinition: "Voice Search ermöglicht die Suche per Sprachbefehl über Smartphones, Smart Speaker und andere Geräte. Sprachanfragen sind oft als ganze Frage formuliert, zum Beispiel Wo ist der nächste Bäcker? Wer klare, vollständige Antworten auf typische Kundenfragen gibt und sein Unternehmensprofil pflegt, ist dafür gut aufgestellt. Eine eigene Optimierungsmethode, die Google vorgibt, gibt es nicht.",
    fullDescription: "Voice Search ermöglicht die Suche per Sprachbefehl über Smartphones, Smart Speaker und andere Geräte. Sprachanfragen sind oft als ganze Frage formuliert. Klare Antworten auf typische Kundenfragen und ein gepflegtes Unternehmensprofil sind die Grundlage.",
    features: [
      "Natürliche Sprache verwenden",
      "Fragen der Kunden beantworten",
      "Gepflegtes Unternehmensprofil",
      "Aktuelle Öffnungszeiten und Kontaktdaten"
    ],
    benefits: [
      "Antworten in der Sprache der Kunden",
      "Lokale Anfragen bedienen",
      "Klare, kurze Antworten",
      "Aktuelle Angaben"
    ],
    relatedTerms: ["Featured Snippet", "Long-Tail Keywords", "Local SEO", "Search Intent"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Think with Google: Voice Search",
      description: "Googles Insights zu Voice Search Trends und Optimierungsstrategien.",
      url: "https://www.thinkwithgoogle.com/marketing-strategies/search/voice-search-mobile-use-statistics/",
      source: "Think with Google"
    }
  },
  // === W ===
  {
    letter: "W",
    term: "Webmaster Tools / Search Console",
    shortDescription: "Die Google Search Console (früher Webmaster Tools) ist ein kostenloses Google-Tool zur Überwachung der Sichtbarkeit einer Website in der Google-Suche.",
    snippetDefinition: "Die Google Search Console (früher Webmaster Tools) ist ein kostenloses Tool von Google, das die Präsenz einer Website in der Google-Suche zeigt. Sie liefert Daten zu Suchanfragen, Klicks und Impressionen, zum Indexierungsstatus, zu Core Web Vitals und zu technischen Problemen und speichert Leistungsdaten bis zu 16 Monate. Die Daten stammen direkt von Google.",
    fullDescription: "Die Google Search Console (früher Webmaster Tools) ist ein kostenloses Tool von Google zur Überwachung der Präsenz einer Website in der Suche. Sie zeigt Indexierungsstatus, Suchanfragen, Klickdaten, Core Web Vitals und technische Probleme.",
    features: [
      "Indexierungsstatus überwachen",
      "Suchanfragen und Klicks analysieren",
      "Core Web Vitals prüfen",
      "Sitemaps einreichen"
    ],
    benefits: [
      "Kostenlos nutzbar",
      "Daten direkt von Google",
      "Technische Probleme erkennen",
      "Entwicklung der Sichtbarkeit beobachten"
    ],
    relatedTerms: ["Indexierung", "Core Web Vitals", "Technical SEO", "Crawling"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google Search Console Hilfe",
      description: "Offizielle Dokumentation und Tutorials zur Google Search Console.",
      url: "https://support.google.com/webmasters/answer/9128668?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "W",
    term: "White Hat SEO",
    shortDescription: "White Hat SEO bezeichnet Optimierungsstrategien, die den Richtlinien von Google entsprechen.",
    snippetDefinition: "White Hat SEO bezeichnet Suchmaschinenoptimierung, die sich an Googles Richtlinien hält und auf nützliche Inhalte, saubere Technik und natürlich entstandene Verlinkung setzt. Im Gegensatz zu Black Hat SEO vermeidet sie Maßnahmen wegen Spams. Ein bestimmtes Ranking garantiert sie nicht.",
    fullDescription: "White Hat SEO bezeichnet Optimierungsstrategien, die Googles Richtlinien entsprechen. Im Gegensatz zu Black Hat SEO setzt White Hat auf nützliche Inhalte, natürliche Verlinkung und saubere Technik. Wer sich an die Richtlinien hält, vermeidet Maßnahmen wegen Spams. Ein bestimmtes Ranking ist damit nicht garantiert.",
    features: [
      "Nützliche Inhalte erstellen",
      "Natürlicher Linkaufbau",
      "Saubere Technik",
      "Nutzerfreundlichkeit priorisieren"
    ],
    benefits: [
      "Weniger Risiko durch Richtlinienverstöße",
      "Nachhaltige Arbeit",
      "Vertrauen bei Kunden",
      "Verlässliche Grundlage"
    ],
    relatedTerms: ["Black Hat SEO", "Algorithmus-Update", "E-E-A-T", "Quality Raters"],
    difficulty: "anfänger",
    importance: 5
  },
  // === X ===
  {
    letter: "X",
    term: "XML-Sitemap",
    shortDescription: "Eine XML-Sitemap ist eine maschinenlesbare Datei, die die wichtigen URLs einer Website auflistet und Suchmaschinen beim Entdecken hilft.",
    snippetDefinition: "Eine XML-Sitemap ist eine maschinenlesbare Datei, die die wichtigen URLs einer Website auflistet. Sie wird über die Google Search Console eingereicht oder in der robots.txt genannt und hilft Google, Seiten zu entdecken. Eine Sitemap darf bis zu 50.000 URLs oder 50 MB unkomprimiert enthalten. Google wertet das Änderungsdatum (lastmod) aus, wenn es verlässlich ist, und ignoriert Priorität und Änderungshäufigkeit.",
    fullDescription: "Eine XML-Sitemap ist eine Datei, die die wichtigen URLs einer Website auflistet und Suchmaschinen beim Entdecken der Seiten hilft. Das Änderungsdatum (lastmod) wertet Google aus, wenn es verlässlich ist. Die Angaben zu Priorität und Änderungshäufigkeit ignoriert Google. Eingereicht wird sie über die Google Search Console.",
    features: [
      "In der Search Console einreichen",
      "Automatisch erzeugbar",
      "Bis zu 50.000 URLs oder 50 MB pro Sitemap",
      "Lastmod-Datum nur, wenn verlässlich"
    ],
    benefits: [
      "Hilft Google, Seiten zu entdecken",
      "Übersicht über alle wichtigen Seiten",
      "Kontrolle über gemeldete URLs",
      "Technische Grundlage"
    ],
    relatedTerms: ["Indexierung", "Crawling", "Webmaster Tools / Search Console", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google: Sitemap erstellen",
      description: "Offizielle Anleitung zur Erstellung und Einreichung von Sitemaps.",
      url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
      source: "Google Search Central"
    }
  },
  // === Y ===
  {
    letter: "Y",
    term: "YMYL",
    shortDescription: "YMYL (Your Money Your Life) bezeichnet Inhalte zu Gesundheit, Finanzen, Sicherheit und wichtigen Lebensentscheidungen, für die in Googles Qualitätsrichtlinien besonders hohe Anforderungen gelten.",
    snippetDefinition: "YMYL (Your Money Your Life) bezeichnet Inhalte, die Gesundheit, Finanzen, Sicherheit oder wichtige Lebensentscheidungen betreffen. In den Search Quality Rater Guidelines gelten für solche Themen besonders hohe Qualitätsanforderungen. Lokale Dienstleister wie Ärzte, Anwälte und Finanzberater sollten deshalb Qualifikationen nachvollziehbar belegen und Angaben sorgfältig prüfen.",
    fullDescription: "YMYL (Your Money Your Life) bezeichnet Inhalte, die Gesundheit, Finanzen, Sicherheit oder wichtige Lebensentscheidungen betreffen. Für solche Themen gelten in den Quality Rater Guidelines besonders hohe Qualitätsanforderungen. Lokale Dienstleister wie Ärzte, Anwälte oder Finanzberater sollten Qualifikationen belegen und Aussagen sorgfältig prüfen.",
    features: [
      "Gesundheitsthemen",
      "Finanzielle Beratung",
      "Rechtliche Informationen",
      "Sicherheitsrelevante Themen"
    ],
    benefits: [
      "Klare Maßstäbe für sensible Themen",
      "Vertrauensaufbau durch Belege",
      "Sorgfalt bei Aussagen",
      "Transparenz über Qualifikation"
    ],
    relatedTerms: ["E-E-A-T", "Quality Raters", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte" },
      { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte" },
      { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater" }
    ]
  },
  // === Z ===
  {
    letter: "Z",
    term: "Zero-Click Search",
    shortDescription: "Zero-Click Searches sind Suchanfragen, bei denen Nutzer die Antwort direkt in den Suchergebnissen finden, ohne eine Website zu besuchen.",
    snippetDefinition: "Zero-Click Searches sind Suchanfragen, bei denen Nutzer die gewünschte Information direkt in den Suchergebnissen finden und keine Website anklicken. Das geschieht zum Beispiel über Featured Snippets, Knowledge Panels und das Google Business Profile mit Öffnungszeiten und Telefonnummer. Für lokale Unternehmen ist ein gepflegtes Profil deshalb besonders wichtig.",
    fullDescription: "Zero-Click Searches sind Suchanfragen, bei denen Nutzer die Antwort direkt in den Suchergebnissen finden und nicht auf eine Website klicken. Featured Snippets, Knowledge Panels und das Google Business Profile zeigen Informationen direkt an. Für lokale Unternehmen ist ein gepflegtes Profil deshalb besonders wichtig.",
    features: [
      "Antwort direkt in den Suchergebnissen",
      "Knowledge Panel",
      "Featured Snippets",
      "Informationen aus dem Unternehmensprofil"
    ],
    benefits: [
      "Sichtbarkeit auch ohne Klick",
      "Pflege des Unternehmensprofils wichtiger",
      "Direkter Kundenkontakt per Anruf oder Route",
      "Erfolgsmessung über Anrufe und Routen"
    ],
    relatedTerms: ["SERP", "Featured Snippet", "Google Business Profile", "Knowledge Panel"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  },
  // === NEW LOCAL SEO TERMS ===
  {
    letter: "D",
    term: "Duplicate Listing",
    shortDescription: "Ein Duplicate Listing ist ein doppelter Eintrag desselben Unternehmens auf Google Maps oder in Verzeichnissen.",
    snippetDefinition: "Ein Duplicate Listing ist ein ungewollter doppelter Eintrag eines Unternehmens auf Google Maps oder in Branchenverzeichnissen. Er entsteht oft durch Umzüge, frühere Inhaber oder automatisch erzeugte Einträge. Doppelte Einträge können Bewertungen und Angaben aufteilen und Kunden verwirren. Sie sollten gemeldet, zusammengeführt oder entfernt werden.",
    fullDescription: "Duplicate Listings entstehen, wenn ein Unternehmen mehrfach auf Google Maps oder in Verzeichnissen eingetragen ist, oft durch frühere Inhaber, automatische Einträge oder Umzüge. Sie teilen Bewertungen und Angaben auf und können Kunden verwirren. Sie sollten gemeldet, zusammengeführt oder entfernt werden.",
    features: [
      "Entstehen durch Umzüge, Inhaberwechsel oder automatische Einträge",
      "Teilen Bewertungen und Angaben auf",
      "Können über Google gemeldet werden",
      "Tools wie Moz Local helfen bei der Erkennung"
    ],
    benefits: [
      "Das Hauptprofil klar abgrenzen",
      "Bewertungen an einer Stelle bündeln",
      "Einheitliche Angaben für Kunden",
      "Weniger Verwechslungen"
    ],
    relatedTerms: ["Google Business Profile", "NAP", "Citations", "Local Pack"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "duplicate-listing-entfernen", title: "Duplicate Listings finden & entfernen" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  },
  {
    letter: "G",
    term: "Geo-Grid Ranking",
    shortDescription: "Geo-Grid Ranking zeigt die lokale Sichtbarkeit eines Unternehmens über ein Raster verschiedener Standortpunkte in einem Gebiet.",
    snippetDefinition: "Geo-Grid Ranking ist eine Analysemethode, bei der die lokale Sichtbarkeit eines Unternehmens über ein Raster verschiedener Standortpunkte in einem Gebiet gemessen wird. Statt eines einzelnen Rankings zeigt ein Geo-Grid, wie sich die Position je nach Entfernung und Richtung verändert. Tools wie Local Falcon oder Local Viking nutzen diese Methode. Es ist eine Momentaufnahme einer Stichprobe, keine Zahl von Google.",
    fullDescription: "Geo-Grid Ranking misst die lokale Sichtbarkeit über ein Raster verschiedener Punkte in einem Gebiet. Es zeigt, wie sich die Position je nach Entfernung und Richtung verändert. Die Werte stammen aus Stichproben der jeweiligen Tools, nicht von Google, und schwanken.",
    features: [
      "Visualisiert Positionen auf einer Karte als Heatmap",
      "Zeigt, wo ein Unternehmen sichtbar ist und wo nicht",
      "Tools: Local Falcon, Local Viking, BrightLocal",
      "Momentaufnahme einer Stichprobe"
    ],
    benefits: [
      "Schwächen im Einzugsgebiet erkennen",
      "Sichtbarkeitsradius einschätzen",
      "Veränderungen im Zeitverlauf beobachten",
      "Wettbewerber vergleichen"
    ],
    relatedTerms: ["Local Pack", "Proximity (Entfernung)", "Google Maps", "Local SEO"],
    difficulty: "experte",
    importance: 3,
    relatedArticles: [
      { slug: "google-maps-seo-ranking-faktoren", title: "Google Maps Ranking-Faktoren" }
    ]
  },
  {
    letter: "G",
    term: "Google Posts",
    shortDescription: "Google Posts sind kurze Beiträge im Google Business Profile, mit denen Unternehmen Neuigkeiten, Angebote oder Veranstaltungen zeigen.",
    snippetDefinition: "Google Posts sind kurze Beiträge, die Unternehmen direkt im Google Business Profile veröffentlichen, etwa Neuigkeiten, Angebote oder Veranstaltungen. Sie erscheinen im Profil in der Google-Suche und in Maps. Posts zeigen Aktivität und aktuelle Informationen. Dass sie das Ranking beeinflussen, ist nicht belegt.",
    fullDescription: "Google Posts ermöglichen es Unternehmen, kurze Beiträge direkt im Google Business Profile zu veröffentlichen. Die Beiträge erscheinen im Profil in der Google-Suche und in Maps. Sie zeigen aktuelle Informationen, ein Einfluss auf das Ranking ist nicht belegt.",
    features: [
      "Neuigkeiten, Angebote und Veranstaltungen",
      "Bilder und Schaltflächen möglich",
      "Erscheinen im Unternehmensprofil",
      "Sachlich und aktuell halten"
    ],
    benefits: [
      "Aktuelle Informationen direkt im Profil",
      "Kostenlose Veröffentlichungsfläche",
      "Zeigt Aktivität",
      "Hinweis auf Aktionen und Termine"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "Google Maps", "Local SEO"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "google-posts-als-ranking-faktor", title: "Google Posts als Ranking-Faktor" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  },
  {
    letter: "L",
    term: "Local Finder",
    shortDescription: "Der Local Finder ist die erweiterte Listenansicht mit lokalen Treffern, die über das Local Pack hinausgeht.",
    snippetDefinition: "Der Local Finder ist die erweiterte Listenansicht lokaler Unternehmen, die erscheint, wenn man im Local Pack auf weitere Orte klickt. Während das Local Pack nur eine kleine Auswahl zeigt, listet der Local Finder mehr Unternehmen mit Angaben wie Bewertungen, Öffnungszeiten und Entfernung. Er ist besonders relevant für Unternehmen, die nicht im Local Pack stehen.",
    fullDescription: "Der Local Finder zeigt die längere Liste lokaler Ergebnisse, die über das Local Pack hinausgeht. Er ist über den Link zu weiteren Orten im Local Pack erreichbar und zeigt Unternehmen mit Karte und Filteroptionen.",
    features: [
      "Zeigt mehr Treffer als das Local Pack",
      "Erreichbar über den Link zu weiteren Orten",
      "Filteroptionen wie Bewertung oder Öffnungszeiten",
      "Mit Karte"
    ],
    benefits: [
      "Sichtbarkeit auch außerhalb des Local Packs",
      "Nutzer mit konkreter Absicht blättern weiter",
      "Filter bevorzugen gut gepflegte Profile",
      "Zweite Chance auf Aufmerksamkeit"
    ],
    relatedTerms: ["Local Pack", "Google Maps", "Google Business Profile", "Proximity (Entfernung)"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "google-maps-seo-ranking-faktoren", title: "Google Maps Ranking-Faktoren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  {
    letter: "L",
    term: "Lokale Backlinks",
    shortDescription: "Lokale Backlinks sind eingehende Links von regionalen Websites, Zeitungen und Organisationen.",
    snippetDefinition: "Lokale Backlinks sind Links von Websites mit regionalem Bezug, etwa lokale Zeitungen, Handelskammern, Sportvereine, Stadtportale oder regionale Blogs. Sie entstehen am besten durch echte Beziehungen vor Ort. Laut Googles Hilfe zählen Links zu den Informationen, die die Bekanntheit eines Unternehmens ausmachen. Gekaufte Links verstoßen gegen die Spamrichtlinien.",
    fullDescription: "Lokale Backlinks sind Links von Websites mit regionalem Bezug. Sie entstehen am besten durch echte Beziehungen vor Ort, etwa durch Sponsoring, Mitgliedschaften oder Berichte. Eine feste Gewichtung nennt Google nicht, gekaufte Links verstoßen gegen die Spamrichtlinien.",
    features: [
      "Links von lokalen Zeitungen und Portalen",
      "Sponsoring von Vereinen und Veranstaltungen",
      "Mitgliedschaft in Kammern und Verbänden",
      "Gastbeiträge auf regionalen Blogs"
    ],
    benefits: [
      "Bekanntheit in der Region",
      "Direkte Besucher über Verweise",
      "Echte lokale Verankerung",
      "Beziehungen vor Ort"
    ],
    relatedTerms: ["Backlinks", "Local SEO", "Domain Authority", "Link Building"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "lokale-backlinks-aufbauen", title: "Lokale Backlinks aufbauen" },
      { slug: "ultimate-guide-local-seo", title: "Ultimate Guide: Local SEO" }
    ]
  },
  {
    letter: "P",
    term: "Prominence (Bekanntheit)",
    shortDescription: "Prominence (Bekanntheit) ist eines der drei Kriterien für lokale Treffer und beschreibt, wie bekannt ein Unternehmen ist.",
    snippetDefinition: "Prominence (Bekanntheit) ist neben Relevanz und Entfernung eines der drei Kriterien für lokale Treffer in Google. Laut Googles Hilfe fließen Informationen aus dem Web ein, etwa Links, Artikel und Verzeichniseinträge, außerdem Anzahl und Durchschnitt der Bewertungen. Auch bekannte Orte in der Offline-Welt können dabei bevorzugt erscheinen. Eine Gewichtung veröffentlicht Google nicht.",
    fullDescription: "Prominence beschreibt die Bekanntheit eines Unternehmens. Laut Googles Hilfe fließen Informationen aus dem Web ein, etwa Links, Artikel und Verzeichniseinträge, außerdem Bewertungen. Sie kann durch echte Bekanntheit, gute Bewertungen und eine saubere Präsenz im Web gestärkt werden. Eine Gewichtung nennt Google nicht.",
    features: [
      "Basiert auf Informationen aus dem Web",
      "Bewertungen und deren Durchschnitt",
      "Links, Artikel und Verzeichniseinträge",
      "Auch Bekanntheit in der Offline-Welt"
    ],
    benefits: [
      "Verständnis eines der drei Kriterien",
      "Bessere Orientierung für Maßnahmen",
      "Langfristig aufbaubar",
      "Echte Bekanntheit statt Tricks"
    ],
    relatedTerms: ["Proximity (Entfernung)", "Relevance (Relevanz)", "Google Maps", "Local Pack"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-seo-ranking-faktoren", title: "Google Maps Ranking-Faktoren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  {
    letter: "R",
    term: "Relevance (Relevanz)",
    shortDescription: "Relevance (Relevanz) ist eines der drei Kriterien für lokale Treffer und beschreibt, wie gut ein Profil zur Suchanfrage passt.",
    snippetDefinition: "Relevance (Relevanz) ist neben Entfernung und Bekanntheit eines der drei Kriterien für lokale Treffer in Google. Sie beschreibt, wie gut ein Unternehmensprofil zur Suchanfrage passt. Laut Google helfen vollständige und detaillierte Angaben, etwa die passende Kategorie, Leistungen und eine sachliche Beschreibung. Eine Gewichtung veröffentlicht Google nicht.",
    fullDescription: "Relevance misst, wie gut ein Google Business Profile zur Suchanfrage passt. Vollständige und genaue Angaben zu Kategorien, Leistungen und Beschreibung helfen Google, das Profil richtig einzuordnen. Eine Gewichtung nennt Google nicht.",
    features: [
      "Primäre und weitere Kategorien",
      "Sachliche Unternehmensbeschreibung",
      "Leistungen und Produkte",
      "Vollständigkeit des Profils"
    ],
    benefits: [
      "Über das Profil direkt beeinflussbar",
      "Hilft bei der richtigen Einordnung",
      "Schnell umsetzbare Verbesserungen",
      "Ehrliche Angaben statt Keywords"
    ],
    relatedTerms: ["Proximity (Entfernung)", "Prominence (Bekanntheit)", "Google Business Profile", "Google Maps"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-seo-ranking-faktoren", title: "Google Maps Ranking-Faktoren" },
      { slug: "google-business-kategorien-guide", title: "Google Business Kategorien Guide" }
    ]
  },
  {
    letter: "R",
    term: "Review Management",
    shortDescription: "Review Management umfasst das Einholen, Beantworten und Auswerten von Online-Bewertungen.",
    snippetDefinition: "Review Management bezeichnet den systematischen Umgang mit Online-Bewertungen auf Google, Facebook und Branchenportalen. Dazu gehören das Einholen neuer Bewertungen im Rahmen der Richtlinien, das sachliche Beantworten, auch negativer Rückmeldungen, und das Auswerten von Trends. Bewertungen dürfen nicht gekauft oder an Gegenleistungen geknüpft werden.",
    fullDescription: "Review Management ist der systematische Umgang mit Online-Bewertungen. Es umfasst das Einholen neuer Bewertungen im Rahmen der Richtlinien, das Beantworten aller Rezensionen und die Auswertung von Trends. Laut Googles Hilfe fließen Anzahl und Durchschnitt der Google-Bewertungen in das lokale Ranking ein.",
    features: [
      "Bewertungen im Rahmen der Richtlinien einholen",
      "Sachlich auf Rezensionen antworten",
      "Umgang mit negativen Bewertungen",
      "Beobachtung über mehrere Plattformen"
    ],
    benefits: [
      "Mehr Vertrauen bei Neukunden",
      "Wertvolles Kundenfeedback",
      "Gelegenheit, öffentlich zu antworten",
      "Früh erkennen, wo Kunden Probleme sehen"
    ],
    relatedTerms: ["Reviews (Bewertungen)", "Google Business Profile", "Local SEO", "Prominence (Bekanntheit)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-bewertungen-bekommen", title: "Mehr Google Bewertungen bekommen" },
      { slug: "negative-bewertung-loeschen", title: "Negative Bewertung löschen" }
    ]
  },
  {
    letter: "S",
    term: "Service Area Business",
    shortDescription: "Ein Service Area Business ist ein Unternehmen, das Kunden bei diesen vor Ort bedient, statt sie an einem festen Standort zu empfangen.",
    snippetDefinition: "Ein Service Area Business (SAB) erbringt seine Leistungen beim Kunden vor Ort, statt Kunden an einem festen Standort zu empfangen. Beispiele sind Handwerker, mobile Friseure oder Schlüsseldienste. Im Google Business Profile wird statt einer Adresse ein Einzugsgebiet angegeben, bis zu 20 Orte oder Postleitzahlen. Die Adresse wird dann nicht öffentlich angezeigt.",
    fullDescription: "Service Area Businesses (SABs) sind Unternehmen, die zu ihren Kunden fahren und keine Kunden am Standort empfangen. Im Google Business Profile wird ein Einzugsgebiet statt einer sichtbaren Adresse angegeben. Google erlaubt dafür bis zu 20 Gebiete, die realistisch erreichbar sein sollten.",
    features: [
      "Einzugsgebiet statt sichtbarer Adresse im Profil",
      "Adresse wird nicht öffentlich angezeigt",
      "Bis zu 20 Gebiete angebbar",
      "Hybridform möglich, wenn Kunden auch vor Ort empfangen werden"
    ],
    benefits: [
      "Profil auch ohne Kundenstandort möglich",
      "Einzugsgebiet ehrlich festlegen",
      "Passt zu mobilen Dienstleistern",
      "Klare Angaben für Kunden"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "Proximity (Entfernung)", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-handwerker", title: "Local SEO für Handwerker" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  },
  {
    letter: "G",
    term: "GBP-Suspendierung",
    shortDescription: "Eine GBP-Suspendierung ist die Sperrung eines Google Business Profiles durch Google wegen vermuteter Richtlinienverstöße.",
    snippetDefinition: "Eine GBP-Suspendierung ist die Sperrung eines Google Business Profiles durch Google wegen vermuteter oder tatsächlicher Verstöße gegen die Richtlinien für Unternehmensprofile. Häufige Ursachen sind Keywords im Unternehmensnamen, unzulässige Adressen wie virtuelle Büros oder nicht nachvollziehbare Angaben. Die Wiederherstellung erfolgt über einen Antrag, mit dem das Unternehmen die Richtlinienkonformität belegt.",
    fullDescription: "Eine GBP-Suspendierung bedeutet, dass Google ein Business Profile wegen vermuteter Richtlinienverstöße gesperrt hat. Das Profil kann dadurch in Maps und der Suche nicht mehr erscheinen. Die Wiederherstellung erfordert einen Antrag mit Nachweisen, dass das Unternehmen den Richtlinien entspricht.",
    features: [
      "Verstoß gegen die Richtlinien für Unternehmensprofile",
      "Häufig: Keywords im Namen, unzulässige Adresse",
      "Antrag auf Wiederherstellung über Google",
      "Nachweise zum Unternehmen bereithalten"
    ],
    benefits: [
      "Richtlinien kennen und Verstöße vermeiden",
      "Vollständige Nachweise erleichtern den Antrag",
      "Frühzeitig reagieren",
      "Profil sauber und wahrheitsgemäß führen"
    ],
    relatedTerms: ["Google Business Profile", "Google Maps", "Local Pack", "NAP"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "gbp-suspendiert-reaktivieren", title: "GBP suspendiert: So reaktivierst du dein Profil" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  },
  {
    letter: "L",
    term: "Local Landing Page",
    shortDescription: "Eine Local Landing Page ist eine Unterseite für einen bestimmten Standort oder ein bestimmtes Einzugsgebiet eines Unternehmens.",
    snippetDefinition: "Eine Local Landing Page ist eine Unterseite einer Website für einen bestimmten Standort. Sie enthält standortspezifische Inhalte wie Adresse, Anfahrt, Ansprechpartner, Leistungen vor Ort und Bewertungen. Sinnvoll ist sie für Unternehmen mit mehreren echten Standorten. Viele inhaltsgleiche Seiten, die nur den Ortsnamen tauschen, gelten als Doorway-Seiten und verstoßen gegen Googles Richtlinien.",
    fullDescription: "Local Landing Pages sind Unterseiten für einen bestimmten Standort. Sie sollten echte, einzigartige Informationen zu diesem Standort enthalten. Seiten, die sich nur im Ortsnamen unterscheiden, verstoßen gegen Googles Richtlinien zu Doorway-Seiten.",
    features: [
      "Einzigartige Inhalte pro Standort",
      "Echte Angaben zu Adresse, Anfahrt und Team",
      "Eingebettete Karte",
      "Standortspezifische Referenzen, wenn vorhanden"
    ],
    benefits: [
      "Passende Informationen für einen Standort",
      "Gut für Unternehmen mit mehreren echten Standorten",
      "Klare Anlaufstelle für Kunden",
      "Kein Risiko durch Doorway-Seiten, wenn sie echt sind"
    ],
    relatedTerms: ["Local SEO", "Geo-Targeting", "Local Pack", "NAP"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "ultimate-guide-local-seo", title: "Ultimate Guide: Local SEO" },
      { slug: "local-seo-keyword-strategie", title: "Local SEO Keyword-Strategie" }
    ]
  },
  {
    letter: "L",
    term: "Local Schema Markup",
    shortDescription: "Local Schema Markup ist strukturierter Code (meist JSON-LD), der Suchmaschinen detaillierte Unternehmensdaten maschinenlesbar übermittelt.",
    snippetDefinition: "Local Schema Markup ist strukturierter Code, meist im JSON-LD-Format, der Suchmaschinen Informationen über ein lokales Unternehmen maschinenlesbar übermittelt. Er umfasst Firmenname, Adresse, Öffnungszeiten und Leistungen. Das Markup hilft Google, die Angaben zu verstehen. Ein bestimmtes Rich Result ist damit nicht garantiert, und die Angaben müssen mit dem sichtbaren Inhalt übereinstimmen.",
    fullDescription: "Local Schema Markup ist strukturierter Code, der Google detaillierte Unternehmensdaten maschinenlesbar bereitstellt. Er hilft Google, die Angaben auf der Seite zu verstehen, und muss mit dem sichtbaren Inhalt übereinstimmen. Ein bestimmtes Rich Result ist damit nicht garantiert.",
    features: [
      "LocalBusiness als Basis",
      "Spezialisierte Typen wie Restaurant oder Dentist",
      "Öffnungszeiten und Kontaktdaten",
      "Angaben wie auf der sichtbaren Seite"
    ],
    benefits: [
      "Maschinenlesbare Unternehmensdaten",
      "Klare Angaben für Suchmaschinen",
      "Einheitliche Datenbasis",
      "Konsistenz zwischen Seite und Markup"
    ],
    relatedTerms: ["Schema Markup", "Local SEO", "Google Business Profile", "NAP"],
    difficulty: "experte",
    importance: 4,
    relatedArticles: [
      { slug: "localbusiness-schema-implementierung", title: "LocalBusiness Schema implementieren" },
      { slug: "technisches-local-seo", title: "Technisches Local SEO" }
    ]
  },
  {
    letter: "N",
    term: "NAP-Audit",
    shortDescription: "Ein NAP-Audit ist die systematische Überprüfung aller Online-Einträge auf einheitliche Geschäftsdaten (Name, Adresse, Telefon).",
    snippetDefinition: "Ein NAP-Audit ist die systematische Überprüfung aller Online-Erwähnungen eines Unternehmens auf einheitliche Name-, Adress- und Telefondaten. Dabei werden Branchenverzeichnisse, Social-Media-Profile und Bewertungsportale geprüft und abweichende Einträge korrigiert. Ein Audit lohnt sich regelmäßig und nach Änderungen wie einem Umzug oder einer neuen Rufnummer.",
    fullDescription: "Ein NAP-Audit prüft systematisch alle Online-Einträge eines Unternehmens auf einheitliche Angaben. Abweichungen werden dokumentiert und korrigiert. Sinnvoll ist er regelmäßig und nach Änderungen wie einem Umzug oder einer neuen Telefonnummer.",
    features: [
      "Verzeichnisse und Profile systematisch prüfen",
      "Abweichungen dokumentieren und korrigieren",
      "Tools wie Moz Local, BrightLocal oder Semrush",
      "Regelmäßig und nach Änderungen wiederholen"
    ],
    benefits: [
      "Einheitliche Angaben im Web",
      "Weniger Verwirrung bei Kunden",
      "Veraltete Einträge finden",
      "Saubere Datenbasis"
    ],
    relatedTerms: ["NAP", "Citations", "Local SEO", "Branchenverzeichnis"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz für Local SEO" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ]
  },
  {
    letter: "V",
    term: "Verifizierung (GBP)",
    shortDescription: "Die GBP-Verifizierung ist der Prozess, mit dem Google bestätigt, dass ein Unternehmen echt ist und am angegebenen Ort existiert.",
    snippetDefinition: "Die GBP-Verifizierung ist der Prozess, mit dem Google die Echtheit eines Unternehmens und seines Standorts bestätigt. Welche Methoden angeboten werden, entscheidet Google je Unternehmen, etwa Telefon, E-Mail, Video oder Postkarte. Ein verifiziertes Profil lässt sich vollständig verwalten. Wie lange es dauert, hängt von der Methode ab.",
    fullDescription: "Die Verifizierung bestätigt Google, dass ein Unternehmen echt ist und am angegebenen Ort existiert. Welche Methoden angeboten werden, entscheidet Google je Unternehmen. Ein verifiziertes Profil lässt sich vollständig verwalten.",
    features: [
      "Methoden je nach Angebot von Google: Telefon, E-Mail, Video, Postkarte",
      "Video-Verifizierung mit Nachweisen vor Ort",
      "Dauer abhängig von der Methode",
      "Wahrheitsgemäße Angaben notwendig"
    ],
    benefits: [
      "Volle Verwaltung des Profils",
      "Schutz vor unbefugten Änderungen",
      "Grundlage für Bewertungen und Beiträge",
      "Nachweis der Echtheit"
    ],
    relatedTerms: ["Google Business Profile", "GBP-Suspendierung", "Google Maps", "Local Pack"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "verifizierung-probleme-loesen", title: "Verifizierungsprobleme lösen" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  }
];
export const getAllLetters = (): string[] => {
  const letters = [...new Set(seoLexikonData.map(term => term.letter))];
  return letters.sort();
};

export const getTermsByLetter = (letter: string): SEOTerm[] => {
  return seoLexikonData.filter(term => term.letter.toLowerCase() === letter.toLowerCase());
};

export const getTermByLetter = (letter: string): SEOTerm | undefined => {
  return seoLexikonData.find(term => term.letter.toLowerCase() === letter.toLowerCase());
};

export const getTermByName = (termName: string): SEOTerm | undefined => {
  return seoLexikonData.find(term => term.term.toLowerCase() === termName.toLowerCase());
};

export const searchTerms = (query: string): SEOTerm[] => {
  const lowerQuery = query.toLowerCase();
  return seoLexikonData.filter(
    term =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.shortDescription.toLowerCase().includes(lowerQuery) ||
      term.fullDescription.toLowerCase().includes(lowerQuery)
  );
};

export const getTotalTermsCount = (): number => {
  return seoLexikonData.length;
};

export const getTermsCountByLetter = (letter: string): number => {
  return seoLexikonData.filter(term => term.letter === letter).length;
};

// Helper to generate slug for anchor links
export const getTermSlug = (term: string): string => {
  return term
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9-]/g, '');
};

// Get all terms that reference a specific term
export const getBacklinksToTerm = (termName: string): SEOTerm[] => {
  return seoLexikonData.filter(term => 
    term.relatedTerms.some(related => related.toLowerCase() === termName.toLowerCase())
  );
};
