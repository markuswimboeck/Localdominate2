import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Phone, Shield, Star, Wrench, Clock, MapPin, Users, TrendingUp, Zap, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openStripeCheckout } from "@/lib/stripe";
import { trackButtonClick } from "@/lib/dataLayer";

const HandwerkerMarketing = () => {
  const { language } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') || '';
            setVisibleSections(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCtaClick = () => {
    trackButtonClick("handwerker_cta", "handwerker_page", 299);
    openStripeCheckout("standard", "handwerker_page", "Handwerker Pro kaufen");
  };

  const t = {
    de: {
      eyebrow: "Für Handwerksbetriebe",
      headline: "Mehr Aufträge.",
      headlineHighlight: "Weniger Kaltakquise.",
      subheadline: "Kunden suchen nach Handwerkern in deiner Region. Wir arbeiten daran, dass sie DICH finden – nicht deine Konkurrenz.",
      problems: {
        headline: "Kennst du das?",
        items: [
          "Kunden rufen bei der Konkurrenz an, obwohl du besser bist",
          "Du verlässt dich auf Mundpropaganda – aber das reicht nicht mehr",
          "Dein Google-Profil sieht aus wie 2015",
          "Du hast keine Zeit für Marketing-Kram",
        ],
      },
      solution: {
        headline: "Deine Lösung: Handwerker Pro",
        subheadline: "Das Komplettpaket für lokale Sichtbarkeit – speziell für Handwerksbetriebe",
        features: [
          { icon: MapPin, title: "Google Maps Sichtbarkeit", text: "Optimierung für die relevanten Suchbegriffe in deiner Region" },
          { icon: Star, title: "Bewertungs-Strategie", text: "System, um zufriedene Kunden nach dem Auftrag um eine Bewertung zu bitten" },
          { icon: Zap, title: "Sofort-Optimierung", text: "In 48h ist dein Profil komplett optimiert" },
          { icon: Users, title: "Branchenspezifisch", text: "Keywords und Strategie speziell für Handwerker optimiert" },
        ],
      },
      included: {
        headline: "Das ist im Paket enthalten",
        items: [
          "Komplette Google Business Profil-Optimierung",
          "Branchenspezifische Keyword-Analyse (Elektriker, Sanitär, Maler, etc.)",
          "Professionelle Bilder-Strategie für Handwerksbetriebe",
          "QR-Code System für Bewertungen nach Auftragsabschluss",
          "Notdienst-Optimierung (falls relevant)",
          "Anleitungen für Mitarbeiter zur Bewertungsanfrage",
          "60 Tage Premium E-Mail Support",
          "Konkurrenzanalyse deiner Region",
        ],
      },
      pricing: {
        price: "299",
        oneTime: "Einmalig • Keine versteckten Kosten",
        cta: "Jetzt Handwerker Pro sichern",
      },
      guarantee: {
        headline: "100% Zufriedenheitsgarantie",
        text: "Keine messbare Verbesserung nach 30 Tagen? Geld zurück – ohne Wenn und Aber.",
      },
      faq: {
        headline: "Häufige Fragen",
        items: [
          { q: "Für welche Gewerke funktioniert das?", a: "Für alle: Elektriker, Sanitär, Heizung, Maler, Tischler, Dachdecker, Schlosser, KFZ-Werkstätten und mehr." },
          { q: "Ich hab keine Zeit für sowas.", a: "Du brauchst 7 Minuten zum Ausfüllen des Fragebogens. Den Rest machen wir." },
          { q: "Warum 349€ statt 299€?", a: "Handwerker Pro enthält branchenspezifische Extras: Notdienst-Optimierung, Konkurrenzanalyse und 60 statt 30 Tage Support." },
        ],
      },
      finalCta: {
        headline: "Bereit für mehr Aufträge?",
        subheadline: "Während du überlegst, rufen deine potenziellen Kunden bei der Konkurrenz an.",
      },
      footer: {
        backToMain: "Zurück zur Hauptseite",
      },
    },
    en: {
      eyebrow: "For Craftsmen",
      headline: "More Jobs.",
      headlineHighlight: "Less Cold Calling.",
      subheadline: "Customers are searching for craftsmen in your area. We work on getting you found – not your competition.",
      problems: {
        headline: "Sound familiar?",
        items: [
          "Customers call your competitors even though you're better",
          "You rely on word of mouth – but it's not enough anymore",
          "Your Google profile looks like it's from 2015",
          "You don't have time for marketing stuff",
        ],
      },
      solution: {
        headline: "Your Solution: Craftsman Pro",
        subheadline: "The complete package for local visibility – made for craftsmen",
        features: [
          { icon: MapPin, title: "Google Maps Visibility", text: "Optimization for the relevant search terms in your region" },
          { icon: Star, title: "Review Strategy", text: "A system for asking satisfied customers for a review after the job" },
          { icon: Zap, title: "Instant Optimization", text: "Your profile is fully optimized within 48h" },
          { icon: Users, title: "Industry-Specific", text: "Keywords and strategy optimized specifically for craftsmen" },
        ],
      },
      included: {
        headline: "What's Included",
        items: [
          "Complete Google Business Profile optimization",
          "Industry-specific keyword analysis (electrician, plumber, painter, etc.)",
          "Professional image strategy for craftsmen",
          "QR code system for reviews after job completion",
          "Emergency service optimization (if relevant)",
          "Staff training for review requests",
          "60 days premium email support",
          "Competitor analysis for your region",
        ],
      },
      pricing: {
        price: "299",
        oneTime: "One-time • No hidden fees",
        cta: "Get Craftsman Pro Now",
      },
      guarantee: {
        headline: "100% Satisfaction Guarantee",
        text: "No measurable improvement after 30 days? Money back – no questions asked.",
      },
      faq: {
        headline: "FAQ",
        items: [
          { q: "What trades does this work for?", a: "All of them: electricians, plumbers, HVAC, painters, carpenters, roofers, locksmiths, auto shops and more." },
          { q: "I don't have time for this.", a: "You need 7 minutes to fill out a form. We do the rest." },
          { q: "Why $349 instead of $299?", a: "Craftsman Pro includes industry-specific extras: emergency service optimization, competitor analysis and 60 instead of 30 days support." },
        ],
      },
      finalCta: {
        headline: "Ready for more jobs?",
        subheadline: "While you're thinking, your potential customers are calling your competition.",
      },
      footer: {
        backToMain: "Back to Homepage",
      },
    },
  };

  const content = t[language];

  const handwerkerJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Handwerker Pro - Local SEO für Handwerksbetriebe",
      "description": "Professionelles Google Maps Marketing für Handwerker. Mehr Aufträge durch Top-Rankings in der lokalen Suche.",
      "provider": { "@type": "Organization", "name": "LocalDominate" },
      "offers": {
        "@type": "Offer",
        "price": "349",
        "priceCurrency": "EUR",
        "priceValidUntil": "2026-12-31"
      },
      "serviceType": "Handwerker Marketing"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faq.items.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Handwerker Pro – Mehr Aufträge durch Google Maps"
        description="Professionelles Local SEO für Handwerksbetriebe. Von Seite 3 auf Platz 1 – in nur 4 Wochen. Einmalzahlung, keine Abokosten."
        canonicalUrl="https://localdominate.org/handwerker-marketing"
        keywords="Handwerker Marketing, Elektriker Google Maps, Sanitär SEO, Maler Online Marketing, Handwerker Kundengewinnung"
        lang={language}
        jsonLd={handwerkerJsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.footer.backToMain}</span>
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-amber-400 font-medium tracking-wide uppercase text-sm">{content.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {content.headline} <span className="text-amber-400">{content.headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            {content.subheadline}
          </p>

          {/* CTA */}
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-500/25"
          >
            {content.pricing.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section 
        data-section="problems"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('problems') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{content.problems.headline}</h2>
          <div className="space-y-4">
            {content.problems.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <span className="text-red-400 text-xl">✕</span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        data-section="solution"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('solution') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{content.solution.headline}</h2>
            <p className="text-slate-400">{content.solution.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solution.features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section 
        data-section="included"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('included') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{content.included.headline}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {content.included.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        data-section="pricing"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-amber-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
            
            {/* Price */}
            <div className="mb-6">
              <p className="text-5xl md:text-6xl font-bold text-white">{content.pricing.price}€</p>
              <p className="text-slate-400 mt-2">{content.pricing.oneTime}</p>
            </div>

            {/* CTA */}
            <Button 
              onClick={handleCtaClick}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg py-6 rounded-xl"
            >
              {content.pricing.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{content.guarantee.headline}</h3>
          <p className="text-slate-400">{content.guarantee.text}</p>
        </div>
      </section>


      {/* FAQ */}
      <section 
        data-section="faq"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">{content.faq.headline}</h2>
          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h4 className="text-white font-medium mb-2">{item.q}</h4>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {language === 'de' ? 'Kostenlose Ressourcen für Handwerker' : 'Free Resources for Craftsmen'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/local-seo-handwerker" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Local SEO für Handwerker Guide' : 'Local SEO for Craftsmen Guide'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? 'Der komplette Leitfaden für mehr Aufträge' : 'The complete guide for more jobs'}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/blog/google-bewertungen-bekommen" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Mehr Google Bewertungen bekommen' : 'Get More Google Reviews'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? '7 bewährte Strategien' : '7 proven strategies'}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/blog/google-maps-ranking-verbessern" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Google Maps Ranking verbessern' : 'Improve Google Maps Ranking'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? 'Die wichtigsten Ranking-Faktoren' : 'The most important ranking factors'}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.finalCta.headline}</h2>
          <p className="text-slate-400 mb-8">{content.finalCta.subheadline}</p>
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-500/25"
          >
            {content.pricing.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="text-slate-500 hover:text-amber-400 transition-colors text-sm"
          >
            ← {content.footer.backToMain}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HandwerkerMarketing;
