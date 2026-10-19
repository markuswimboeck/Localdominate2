import { LucideIcon, Scissors, Dumbbell, UtensilsCrossed, Stethoscope, Sparkles, Wrench, Scale, HeartPulse, Croissant } from "lucide-react";

export interface NicheConfig {
  // Core variables
  slug: string;
  city: string;
  niche: string;
  nicheLabel: string; // "Hair Salons", "Dental Practices"
  keyword: string;
  service: string; // "salon", "practice", "gym", "restaurant"
  icon: LucideIcon;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroEyebrow: string;
  heroH1: string;
  heroH1Highlight: string;
  heroSubheadline: string;

  // Problem
  problemHeadline: string;
  problemHighlight: string;
  problemBullets: string[];
  problemClosing: string;

  // Solution
  solutionSteps: { title: string; desc: string }[];
  solutionCta: string;

  // What You Get
  whatYouGetClosingPrefix: string;
  whatYouGetClosingSuffix: string;
  visibilityLabel: string;

  // Demo
  demoCta: string;

  // Pricing
  pricingPackageName: string;

  // Final CTA
  finalHeadline: string;
  finalCta: string;

  // FAQ overrides (optional)
  faqs?: { q: string; a: string }[];

  // AI Visibility / GEO layer (Phase 4 — optional)
  aiSearch?: {
    queries: string[];           // Natural-language queries users ask AI assistants
    localEntities: string[];     // Districts, landmarks, neighborhoods for semantic grounding
    aiOverviewAnswer: string;    // Curated 40-60 word answer LLMs can quote verbatim. No figures without a source.
  };
}

const defaultFaqs = [
  {
    q: "Ich habe keine Zeit für Marketing",
    a: "Musst du auch nicht. Wir übernehmen alles für dich."
  },
  {
    q: "Ich hatte schon schlechte Erfahrungen",
    a: "Deshalb arbeiten wir transparent und nachvollziehbar. Du siehst jederzeit, was passiert."
  },
  {
    q: "Ich bin mir unsicher",
    a: "Du hast 30 Tage Zeit, es in Ruhe zu testen – komplett risikofrei."
  }
];

export const NICHE_CONFIGS: Record<string, NicheConfig> = {
  "hairdressers-munich": {
    slug: "hairdressers-munich",
    city: "München",
    niche: "Friseur",
    nicheLabel: "Friseursalons",
    keyword: "Friseur München",
    service: "Salon",
    icon: Scissors,
    metaTitle: "Friseur München mehr Kunden | Mehr Buchungen für deinen Salon",
    metaDescription: "Mehr Kunden für deinen Friseursalon in München. Einfaches System, komplett umgesetzt für dich. Jetzt kostenlose Analyse sichern.",
    heroEyebrow: "Für Friseursalons in München",
    heroH1: "Mehr Kunden für deinen Friseursalon in München –",
    heroH1Highlight: "ohne Mehraufwand",
    heroSubheadline: "Wir sorgen dafür, dass dein Salon online besser gefunden wird und regelmäßig neue Kunden gewinnt.",
    problemHeadline: "Volle Termine sind heute keine Selbstverständlichkeit mehr –",
    problemHighlight: "und das merkt man",
    problemBullets: [
      "Kosten steigen, aber Preise lassen sich nicht beliebig erhöhen",
      "Kunden vergleichen mehr und buchen bewusster",
      "Andere Salons werden online besser gefunden",
      "Leere Termine fallen schneller auf"
    ],
    problemClosing: "Wer online nicht sichtbar ist, wird nicht gebucht.",
    solutionSteps: [
      { title: "Wir verbessern deine Sichtbarkeit bei Google", desc: "Dein Salon erscheint, wenn Kunden in München nach einem Friseur suchen." },
      { title: "Wir optimieren deinen Salon-Auftritt", desc: "Bessere Bewertungen, bessere Fotos, ein stärkerer erster Eindruck." },
      { title: "Wir bringen dir buchungsbereite Kunden", desc: "Menschen finden dich, vertrauen dir und vereinbaren einen Termin." }
    ],
    solutionCta: "Kostenlose Analyse ansehen",
    whatYouGetClosingPrefix: "Du konzentrierst dich auf deinen Salon –",
    whatYouGetClosingSuffix: "wir kümmern uns um den Rest.",
    visibilityLabel: "Mehr Sichtbarkeit in München",
    demoCta: "Kostenlose Salon-Analyse",
    pricingPackageName: "Salon Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Salon wieder voll auslasten",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Bester Friseur in München in meiner Nähe",
        "Wo bekomme ich kurzfristig einen Termin beim Friseur in München?",
        "Friseur in Schwabing mit guten Bewertungen"
      ],
      localEntities: ["Schwabing", "Maxvorstadt", "Sendling", "Marienplatz", "Glockenbachviertel"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Friseursalons in München zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, allen Leistungen und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  },

  "dentists-munich": {
    slug: "dentists-munich",
    city: "Munich",
    niche: "Dentist",
    nicheLabel: "Dental Practices",
    keyword: "dentist Munich",
    service: "practice",
    icon: Stethoscope,
    metaTitle: "Dentist Marketing Munich | Get More Patients for Your Practice",
    metaDescription: "Get more patients for your dental practice in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Dental Practices in Munich",
    heroH1: "Get More Patients for Your Practice in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help dental practices appear on Google, attract new patients, and fill your appointment book – fully done for you.",
    problemHeadline: "Empty appointment slots cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on referrals or existing patients",
      "New patients go to competitors on Google",
      "Your practice is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll book elsewhere.",
    solutionSteps: [
      { title: "We work on getting your practice found on Google", desc: "We improve how your practice shows up when people search for dentists in Munich." },
      { title: "We make you look more trustworthy than competitors", desc: "More reviews, professional profile, stronger first impression." },
      { title: "We send you ready-to-book patients", desc: "People find you, trust you, and book an appointment." }
    ],
    solutionCta: "See your practice potential",
    whatYouGetClosingPrefix: "You treat patients.",
    whatYouGetClosingSuffix: "We bring them in.",
    visibilityLabel: "More visibility in Munich",
    demoCta: "Get Free Practice Analysis",
    pricingPackageName: "Practice Growth Package",
    finalHeadline: "Let's fill your appointment book",
    finalCta: "Get My Free Practice Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best dentist in Munich for new patients",
        "Emergency dentist Munich open today",
        "Dental practice Munich with English speaking staff"
      ],
      localEntities: ["Schwabing", "Bogenhausen", "Altstadt", "Lehel", "Maxvorstadt"],
      aiOverviewAnswer: "On local searches Google ranks results by relevance, distance and prominence. For dental practices in Munich that means a complete, up-to-date Google profile with the right category, correct opening hours, services and contact options and genuine reviews that get answered. AI assistants also draw on search results for local questions, according to their providers. Nobody can guarantee a ranking."
    }
  },

  "gyms-munich": {
    slug: "gyms-munich",
    city: "Munich",
    niche: "Gym",
    nicheLabel: "Gyms & Fitness Studios",
    keyword: "gym Munich",
    service: "gym",
    icon: Dumbbell,
    metaTitle: "Gym Marketing Munich | Get More Members for Your Studio",
    metaDescription: "Get more members for your gym in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Gyms & Studios in Munich",
    heroH1: "Get More Members for Your Gym in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help gyms appear on Google, attract new members, and keep your classes full – fully done for you.",
    problemHeadline: "Empty gym floors cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on word of mouth or old members",
      "New members go to competitors on Google",
      "Your gym is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll join somewhere else.",
    solutionSteps: [
      { title: "We work on getting your gym found on Google", desc: "We improve how your gym shows up when people search for fitness studios in Munich." },
      { title: "We make you stand out from competitors", desc: "More reviews, better photos, stronger online presence." },
      { title: "We send you ready-to-sign-up members", desc: "People find you, trust you, and sign up." }
    ],
    solutionCta: "See your gym potential",
    whatYouGetClosingPrefix: "You train members.",
    whatYouGetClosingSuffix: "We bring them in.",
    visibilityLabel: "More visibility in Munich",
    demoCta: "Get Free Gym Analysis",
    pricingPackageName: "Gym Growth Package",
    finalHeadline: "Let's fill your gym",
    finalCta: "Get My Free Gym Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best gym in Munich with personal training",
        "24/7 fitness studio near Marienplatz",
        "Affordable gym Munich with group classes"
      ],
      localEntities: ["Marienplatz", "Schwabing", "Pasing", "Giesing", "Olympiapark"],
      aiOverviewAnswer: "On local searches Google ranks results by relevance, distance and prominence. For gyms & fitness studios in Munich that means a complete, up-to-date Google profile with the right category, correct opening hours, class timetable and prices and genuine reviews that get answered. AI assistants also draw on search results for local questions, according to their providers. Nobody can guarantee a ranking."
    }
  },

  "restaurants-munich": {
    slug: "restaurants-munich",
    city: "Munich",
    niche: "Restaurant",
    nicheLabel: "Restaurants",
    keyword: "restaurant Munich",
    service: "restaurant",
    icon: UtensilsCrossed,
    metaTitle: "Restaurant Marketing Munich | Get More Guests for Your Restaurant",
    metaDescription: "Get more guests for your restaurant in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Restaurants in Munich",
    heroH1: "Get More Guests for Your Restaurant in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help restaurants appear on Google, attract new guests, and fill empty tables – fully done for you.",
    problemHeadline: "Empty tables cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on regulars or random walk-ins",
      "New guests go to competitors on Google",
      "Your restaurant is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they'll eat somewhere else.",
    solutionSteps: [
      { title: "We work on getting your restaurant found on Google", desc: "We improve how your restaurant shows up when people search for dining options in Munich." },
      { title: "We make your restaurant irresistible online", desc: "More reviews, better photos, mouth-watering presentation." },
      { title: "We send you ready-to-reserve guests", desc: "People find you, get hungry, and make a reservation." }
    ],
    solutionCta: "See your restaurant potential",
    whatYouGetClosingPrefix: "You cook.",
    whatYouGetClosingSuffix: "We bring guests.",
    visibilityLabel: "More visibility in Munich",
    demoCta: "Get Free Restaurant Analysis",
    pricingPackageName: "Restaurant Growth Package",
    finalHeadline: "Let's fill your tables",
    finalCta: "Get My Free Restaurant Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best Italian restaurant in Munich for dinner",
        "Romantic restaurant Munich Altstadt with terrace",
        "Where to eat lunch near Marienplatz Munich"
      ],
      localEntities: ["Altstadt", "Glockenbachviertel", "Haidhausen", "Marienplatz", "Viktualienmarkt"],
      aiOverviewAnswer: "On local searches Google ranks results by relevance, distance and prominence. For restaurants in Munich that means a complete, up-to-date Google profile with the right category, correct opening hours, menu and booking link and genuine reviews that get answered. AI assistants also draw on search results for local questions, according to their providers. Nobody can guarantee a ranking."
    }
  },

  "barbers-munich": {
    slug: "barbers-munich",
    city: "Munich",
    niche: "Barber",
    nicheLabel: "Barbershops",
    keyword: "barber Munich",
    service: "shop",
    icon: Scissors,
    metaTitle: "Barber Marketing Munich | Get More Clients for Your Barbershop",
    metaDescription: "Get more clients for your barbershop in Munich. Fully done-for-you system. No effort needed. Free demo available.",
    heroEyebrow: "For Barbershops in Munich",
    heroH1: "Get More Clients for Your Barbershop in Munich –",
    heroH1Highlight: "Without Doing Anything Yourself",
    heroSubheadline: "We help barbershops appear on Google, attract new clients, and keep your chairs busy – fully done for you.",
    problemHeadline: "Empty chairs cost you money –",
    problemHighlight: "every single day",
    problemBullets: [
      "You rely on walk-ins or regulars",
      "New clients go to competitors on Google",
      "Your barbershop is not visible online",
      "You don't have time for marketing"
    ],
    problemClosing: "If people can't find you, they won't book.",
    solutionSteps: [
      { title: "We work on getting your barbershop found on Google", desc: "We improve how your shop shows up when people search for barbers in Munich." },
      { title: "We make you look better than competitors", desc: "More reviews, better photos, stronger street cred." },
      { title: "We send you ready-to-book clients", desc: "People find you, trust you, and book a cut." }
    ],
    solutionCta: "See your barbershop potential",
    whatYouGetClosingPrefix: "You cut hair.",
    whatYouGetClosingSuffix: "We bring clients.",
    visibilityLabel: "More visibility in Munich",
    demoCta: "Get Free Barbershop Analysis",
    pricingPackageName: "Barbershop Growth Package",
    finalHeadline: "Let's fill your chairs",
    finalCta: "Get My Free Barbershop Demo",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Best barbershop in Munich for skin fade",
        "Walk-in barber near Marienplatz Munich",
        "Barbershop Munich with beard trim"
      ],
      localEntities: ["Maxvorstadt", "Schwabing", "Glockenbachviertel", "Marienplatz", "Sendling"],
      aiOverviewAnswer: "On local searches Google ranks results by relevance, distance and prominence. For barbershops in Munich that means a complete, up-to-date Google profile with the right category, correct opening hours, services and prices and genuine reviews that get answered. AI assistants also draw on search results for local questions, according to their providers. Nobody can guarantee a ranking."
    }
  },

  "plumbers-berlin": {
    slug: "plumbers-berlin",
    city: "Berlin",
    niche: "Klempner",
    nicheLabel: "Sanitär- & Klempnerbetriebe",
    keyword: "Klempner Berlin",
    service: "Betrieb",
    icon: Wrench,
    metaTitle: "Klempner Berlin – Mehr Aufträge für deinen Sanitärbetrieb",
    metaDescription: "Mehr Notdienst- und Sanitäranfragen für deinen Klempnerbetrieb in Berlin. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Sanitärbetriebe in Berlin",
    heroH1: "Mehr Aufträge für deinen Sanitärbetrieb in Berlin –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir sorgen dafür, dass dein Betrieb bei Google Maps, ChatGPT und AI Overviews gefunden wird – wenn ein Notfall passiert.",
    problemHeadline: "Notdienst-Anfragen gehen an die Konkurrenz –",
    problemHighlight: "weil du in der AI-Suche fehlst",
    problemBullets: [
      "Kunden googeln 'Klempner Notdienst Berlin' und finden dich nicht",
      "ChatGPT und Gemini empfehlen drei andere Betriebe",
      "Deine Google-Bewertungen sind veraltet oder unvollständig",
      "Bei AI Overviews tauchst du gar nicht erst auf"
    ],
    problemClosing: "Wer in der AI-Suche fehlt, verliert Notdienst-Umsatz täglich.",
    solutionSteps: [
      { title: "Wir machen dich AI-sichtbar", desc: "Optimiert für Google Maps, ChatGPT, Gemini und Perplexity – nicht nur klassisches SEO." },
      { title: "Wir bauen Vertrauen auf", desc: "Echte Bewertungen, Notdienst-Verfügbarkeit, Schema-Markup." },
      { title: "Wir bringen dir Notdienst-Anfragen", desc: "Kunden im Notfall finden dich zuerst – nicht die Konkurrenz." }
    ],
    solutionCta: "Kostenlose AI-Sichtbarkeits-Analyse",
    whatYouGetClosingPrefix: "Du reparierst.",
    whatYouGetClosingSuffix: "Wir bringen die Aufträge.",
    visibilityLabel: "Mehr Sichtbarkeit in Berlin",
    demoCta: "Kostenlose Betriebs-Analyse",
    pricingPackageName: "Sanitärbetrieb Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Notdienst-Anrufe verdoppeln",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Klempner Notdienst Berlin sofort verfügbar",
        "Sanitärbetrieb Berlin Friedrichshain mit guten Bewertungen",
        "Heizung kaputt – wer kommt heute noch in Berlin?"
      ],
      localEntities: ["Mitte", "Friedrichshain", "Kreuzberg", "Charlottenburg", "Prenzlauer Berg", "Neukölln"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Sanitär- & Klempnerbetriebe in Berlin zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, Einsatzgebiet und Erreichbarkeit und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  },

  "lawyers-hamburg": {
    slug: "lawyers-hamburg",
    city: "Hamburg",
    niche: "Anwalt",
    nicheLabel: "Anwaltskanzleien",
    keyword: "Anwalt Hamburg",
    service: "Kanzlei",
    icon: Scale,
    metaTitle: "Anwalt Hamburg – Mehr Mandanten über AI-Suche & Google",
    metaDescription: "Mehr Mandantenanfragen für deine Kanzlei in Hamburg. AI-optimiertes Local-SEO-System für Anwälte. Kostenlose Analyse.",
    heroEyebrow: "Für Anwaltskanzleien in Hamburg",
    heroH1: "Mehr Mandantenanfragen für deine Kanzlei in Hamburg –",
    heroH1Highlight: "über AI-Suche & Google",
    heroSubheadline: "Wir arbeiten daran, dass deine Kanzlei bei Google, ChatGPT und Gemini gut gefunden wird – wenn Mandanten Rechtsrat suchen.",
    problemHeadline: "Mandanten finden dich nicht –",
    problemHighlight: "sondern die Großkanzleien",
    problemBullets: [
      "Mandanten suchen 'Fachanwalt Familienrecht Hamburg' und sehen dich nicht",
      "AI-Assistenten empfehlen drei andere Kanzleien",
      "Deine Bewertungen reichen nicht für E-E-A-T-Signale",
      "Schema-Markup für Attorney fehlt komplett"
    ],
    problemClosing: "Mandanten vertrauen heute AI-Empfehlungen mehr als Anzeigen.",
    solutionSteps: [
      { title: "Wir machen deine Kanzlei AI-zitierfähig", desc: "Strukturierte Daten für Attorney, LegalService und FAQPage." },
      { title: "Wir bauen E-E-A-T-Signale auf", desc: "Echte Bewertungen, Author-Schema, Fachartikel mit klarer Expertise." },
      { title: "Wir bringen dir qualifizierte Mandanten", desc: "Genau die Anfragen, die zu deiner Spezialisierung passen." }
    ],
    solutionCta: "Kostenlose Kanzlei-Analyse",
    whatYouGetClosingPrefix: "Du berätst Mandanten.",
    whatYouGetClosingSuffix: "Wir bringen sie zu dir.",
    visibilityLabel: "Mehr Sichtbarkeit in Hamburg",
    demoCta: "Kostenlose Kanzlei-Analyse",
    pricingPackageName: "Kanzlei Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Mandantenakquise modernisieren",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Fachanwalt Familienrecht Hamburg mit guten Bewertungen",
        "Anwalt Arbeitsrecht Hamburg Altona Erstberatung",
        "Welcher Anwalt für Mietrecht in Hamburg ist empfehlenswert?"
      ],
      localEntities: ["Altstadt", "Eimsbüttel", "Altona", "Winterhude", "St. Pauli", "Harvestehude"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Anwaltskanzleien in Hamburg zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, Fachgebieten und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  },

  "physiotherapy-vienna": {
    slug: "physiotherapy-vienna",
    city: "Wien",
    niche: "Physiotherapie",
    nicheLabel: "Physiotherapie-Praxen",
    keyword: "Physiotherapie Wien",
    service: "Praxis",
    icon: HeartPulse,
    metaTitle: "Physiotherapie Wien – Mehr Patienten über AI- & Google-Suche",
    metaDescription: "Mehr Patientenanfragen für deine Physiotherapie-Praxis in Wien. AI-optimiertes Local-SEO. Kostenlose Analyse.",
    heroEyebrow: "Für Physiotherapie-Praxen in Wien",
    heroH1: "Mehr Patienten für deine Praxis in Wien –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir arbeiten daran, dass deine Praxis bei Google Maps, ChatGPT und AI Overviews gut gefunden wird.",
    problemHeadline: "Patienten finden andere Praxen –",
    problemHighlight: "weil du in AI-Antworten fehlst",
    problemBullets: [
      "Patienten googeln 'Physiotherapie Wien in der Nähe'",
      "AI-Assistenten empfehlen drei andere Praxen",
      "Deine Online-Termine werden nicht gebucht",
      "Wahlarzt-Status wird in der Suche nicht hervorgehoben"
    ],
    problemClosing: "Wer in der AI-Suche fehlt, verliert Patienten – jede Woche.",
    solutionSteps: [
      { title: "Wir machen deine Praxis AI-sichtbar", desc: "Optimiert für ChatGPT, Gemini, Perplexity und Google Maps." },
      { title: "Wir stärken deine Reputation", desc: "Echte Bewertungen, vollständiges Profil, MedicalBusiness Schema." },
      { title: "Wir füllen deinen Terminkalender", desc: "Patienten finden dich, vertrauen dir und buchen online." }
    ],
    solutionCta: "Kostenlose Praxis-Analyse",
    whatYouGetClosingPrefix: "Du behandelst Patienten.",
    whatYouGetClosingSuffix: "Wir bringen sie in deine Praxis.",
    visibilityLabel: "Mehr Sichtbarkeit in Wien",
    demoCta: "Kostenlose Praxis-Analyse",
    pricingPackageName: "Praxis Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Terminkalender füllen",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Physiotherapie Wien Wahlarzt mit kurzfristigen Terminen",
        "Beste Physio in Wien Neubau bei Rückenschmerzen",
        "Physiotherapie in der Nähe von Stephansplatz Wien"
      ],
      localEntities: ["Innere Stadt", "Neubau", "Mariahilf", "Leopoldstadt", "Wieden", "Josefstadt"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Physiotherapie-Praxen in Wien zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, Leistungen und Erreichbarkeit und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  },

  "dentists-zurich": {
    slug: "dentists-zurich",
    city: "Zürich",
    niche: "Zahnarzt",
    nicheLabel: "Zahnarztpraxen",
    keyword: "Zahnarzt Zürich",
    service: "Praxis",
    icon: Stethoscope,
    metaTitle: "Zahnarzt Zürich – Mehr Patienten über AI- & Google-Suche",
    metaDescription: "Mehr Patientenanfragen für deine Zahnarztpraxis in Zürich. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Zahnarztpraxen in Zürich",
    heroH1: "Mehr Patienten für deine Zahnarztpraxis in Zürich –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir arbeiten daran, dass deine Praxis bei Google Maps, ChatGPT und Google AI Overviews gut gefunden wird.",
    problemHeadline: "Neue Patienten finden andere Praxen –",
    problemHighlight: "weil du in AI-Empfehlungen fehlst",
    problemBullets: [
      "Patienten googeln 'Zahnarzt Zürich Notfall' und sehen dich nicht",
      "ChatGPT nennt in deinem Kreis womöglich andere Praxen",
      "Deine Bewertungen reichen für klassisches Local SEO – aber nicht für AI Retrieval",
      "Dentist-Schema und Service-Markup fehlen"
    ],
    problemClosing: "Wer in AI-Antworten fehlt, verliert Patientenanfragen.",
    solutionSteps: [
      { title: "Wir machen deine Praxis AI-sichtbar", desc: "Strukturierte Daten für Dentist, MedicalBusiness und FAQPage." },
      { title: "Wir bauen Vertrauen auf", desc: "Echte Bewertungen, klare Spezialisierungen, vollständiges Profil." },
      { title: "Wir bringen dir Patienten", desc: "Genau die Anfragen, die zu deiner Spezialisierung passen." }
    ],
    solutionCta: "Kostenlose Praxis-Analyse",
    whatYouGetClosingPrefix: "Du behandelst Patienten.",
    whatYouGetClosingSuffix: "Wir bringen sie zu dir.",
    visibilityLabel: "Mehr Sichtbarkeit in Zürich",
    demoCta: "Kostenlose Praxis-Analyse",
    pricingPackageName: "Praxis Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deinen Terminkalender füllen",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Zahnarzt Zürich Notfall heute geöffnet",
        "Beste Zahnarztpraxis in Zürich Kreis 4 mit Implantaten",
        "Zahnarzt in der Nähe von Hauptbahnhof Zürich"
      ],
      localEntities: ["Altstadt", "Kreis 4", "Kreis 5", "Oerlikon", "Wiedikon", "Seefeld"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Zahnarztpraxen in Zürich zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, Leistungen und Erreichbarkeit und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  },

  "bakeries-cologne": {
    slug: "bakeries-cologne",
    city: "Köln",
    niche: "Bäckerei",
    nicheLabel: "Bäckereien & Konditoreien",
    keyword: "Bäckerei Köln",
    service: "Bäckerei",
    icon: Croissant,
    metaTitle: "Bäckerei Köln – Mehr Stammkunden über AI- & Google-Suche",
    metaDescription: "Mehr Stammkunden für deine Bäckerei in Köln. AI-optimiertes Local-SEO-System. Kostenlose Analyse.",
    heroEyebrow: "Für Bäckereien in Köln",
    heroH1: "Mehr Stammkunden für deine Bäckerei in Köln –",
    heroH1Highlight: "auch über AI-Suche",
    heroSubheadline: "Wir arbeiten daran, dass deine Bäckerei bei Google Maps, ChatGPT und AI Overviews gut gefunden wird.",
    problemHeadline: "Kunden gehen zur Filiale nebenan –",
    problemHighlight: "weil du in AI-Empfehlungen fehlst",
    problemBullets: [
      "Kunden googeln 'beste Bäckerei in der Nähe' – und sehen die Kette",
      "AI-Assistenten nennen womöglich andere Bäckereien",
      "Deine Sortimentsinfo fehlt im Google-Profil",
      "Sonntagsöffnungszeiten werden falsch angezeigt"
    ],
    problemClosing: "Wer in AI-Antworten fehlt, verliert Laufkundschaft täglich.",
    solutionSteps: [
      { title: "Wir machen deine Bäckerei AI-sichtbar", desc: "Strukturierte Daten für Bakery, FoodEstablishment und Menu Schema." },
      { title: "Wir stärken deine lokale Reputation", desc: "Echte Bewertungen, schöne Produktfotos, korrekte Öffnungszeiten." },
      { title: "Wir bringen dir Stammkunden", desc: "Mehr Laufkundschaft – auch sonntags und an Feiertagen." }
    ],
    solutionCta: "Kostenlose Bäckerei-Analyse",
    whatYouGetClosingPrefix: "Du backst.",
    whatYouGetClosingSuffix: "Wir bringen die Kunden.",
    visibilityLabel: "Mehr Sichtbarkeit in Köln",
    demoCta: "Kostenlose Bäckerei-Analyse",
    pricingPackageName: "Bäckerei Sichtbarkeits-Paket",
    finalHeadline: "Lass uns deine Filiale füllen – jeden Tag",
    finalCta: "Kostenlose Analyse starten",
    faqs: defaultFaqs,
    aiSearch: {
      queries: [
        "Beste Bäckerei Köln sonntags geöffnet",
        "Bio-Bäckerei in Köln Ehrenfeld mit Sauerteig",
        "Bäckerei in der Nähe vom Kölner Dom"
      ],
      localEntities: ["Altstadt", "Ehrenfeld", "Sülz", "Lindenthal", "Nippes", "Kalk", "Kölner Dom"],
      aiOverviewAnswer: "Bei der lokalen Suche sortiert Google Ergebnisse nach Relevanz, Entfernung und Bekanntheit. Für Bäckereien & Konditoreien in Köln zählt deshalb zuerst ein vollständiges, aktuell gehaltenes Google-Profil mit passender Kategorie, richtigen Öffnungszeiten, Sonn- und Feiertagszeiten und echten Bewertungen, die beantwortet werden. Auch KI-Dienste stützen Antworten zu lokalen Fragen laut ihren Anbietern teilweise auf Suchergebnisse. Eine Platzierung kann niemand garantieren."
    }
  }
};
