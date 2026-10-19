import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";  
import { ABTestProvider } from "@/hooks/useABTest";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AfterMount } from "@/components/v4/AfterMount";
import SalesChatMount from "@/components/salesChat/SalesChatMount";
import { lazyV4Page } from "@/lib/v4Pages";
import { arPath } from "@/lib/v4Locale";
import { DE_INDUSTRY_SLUGS, deIndustryPath } from "@/data/v4DeIndustrySlugs";
import { V4_ARTICLE_SLUGS, v4ArticlePath } from "@/content/articles";
import { AUDIENCE_SLUGS, audiencePath } from "@/data/v4AudienceSlugs";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";


// Lazy load non-critical pages
const RestaurantMarketing = lazy(() => import("./pages/RestaurantMarketing"));
const HandwerkerMarketing = lazy(() => import("./pages/HandwerkerMarketing"));
const ArztpraxisMarketing = lazy(() => import("./pages/ArztpraxisMarketing"));
const AnwaltMarketing = lazy(() => import("./pages/AnwaltMarketing"));
const DIYToolkit = lazy(() => import("./pages/DIYToolkit"));
const Danke = lazy(() => import("./pages/Danke"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const Blog = lazy(() => import("./pages/Blog"));
const Analytics = lazy(() => import("./pages/Analytics"));
const ABTestDashboard = lazy(() => import("./pages/ABTestDashboard"));
const ABTestZentrale = lazy(() => import("./pages/ABTestZentrale"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TestB = lazy(() => import("./pages/TestB"));
const ContentPlanDashboard = lazy(() => import("./pages/ContentPlanDashboard"));
const MeineKunden = lazy(() => import("./pages/MeineKunden"));
const SeoLexikon = lazy(() => import("./pages/SeoLexikon"));
const ArticleFeedbackDashboard = lazy(() => import("./pages/ArticleFeedbackDashboard"));
const BlogAnalytics = lazy(() => import("./pages/BlogAnalytics"));
const ContentPerformanceDashboard = lazy(() => import("./pages/ContentPerformanceDashboard"));
const ConversionOptimizationReport = lazy(() => import("./pages/ConversionOptimizationReport"));
const InternalLinkingDashboard = lazy(() => import("./pages/InternalLinkingDashboard"));
const ResetPassword = lazy(() => import("./pages/admin/ResetPassword"));
const UpdatePassword = lazy(() => import("./pages/admin/UpdatePassword"));
const ContentUpdateCalendar = lazy(() => import("./pages/ContentUpdateCalendar"));
const ContentFormattingGuidelines = lazy(() => import("./pages/ContentFormattingGuidelines"));
const Admin = lazy(() => import("./pages/Admin"));
const HairdressersMunich = lazy(() => import("./pages/HairdressersMunich"));
const DentistsMunich = lazy(() => import("./pages/DentistsMunich"));
const GymsMunich = lazy(() => import("./pages/GymsMunich"));
const RestaurantsMunich = lazy(() => import("./pages/RestaurantsMunich"));
const BarbersMunich = lazy(() => import("./pages/BarbersMunich"));
const AIVisibilityAudit = lazy(() => import("./pages/AIVisibilityAudit"));
const PlumbersBerlin = lazy(() => import("./pages/PlumbersBerlin"));
const LawyersHamburg = lazy(() => import("./pages/LawyersHamburg"));
const PhysiotherapyVienna = lazy(() => import("./pages/PhysiotherapyVienna"));
const DentistsZurich = lazy(() => import("./pages/DentistsZurich"));
const BakeriesCologne = lazy(() => import("./pages/BakeriesCologne"));
const Campsites = lazy(() => import("./pages/Campsites"));
const LocalSeoFahrschule = lazy(() => import("./pages/blog/LocalSeoFahrschule"));
const LocalSeoSprachschule = lazy(() => import("./pages/blog/LocalSeoSprachschule"));
const LocalSeoHochzeitsdienstleister = lazy(() => import("./pages/blog/LocalSeoHochzeitsdienstleister"));
const WhatsappBusinessLocalSeo2026 = lazy(() => import("./pages/blog/WhatsappBusinessLocalSeo2026"));


// Troubleshooting & neue Artikel
const LocalSeoVsMaps = lazy(() => import("./pages/blog/LocalSeoVsMaps"));
const Partner = lazy(() => import("./pages/Partner"));
const Redaktionsrichtlinien = lazy(() => import("./pages/Redaktionsrichtlinien"));
const Forschungsmethodik = lazy(() => import("./pages/Forschungsmethodik"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const CitationVerzeichnisse = lazy(() => import("./pages/CitationVerzeichnisse"));
const FaqSubHub = lazy(() => import("./pages/blog/FaqSubHub"));

// V4 redesign: HomeV4 is the live "/" and ServicesV4 the live "/services" (see docs/B1_SCOPE.md).
// "/preview/home-v3" and "/design-system" stay noindex.
const HomeV4 = lazyV4Page("/");
const ServicesV4 = lazyV4Page("/services");
const WorkV4 = lazyV4Page("/work");
const ApproachV4 = lazyV4Page(PILLAR_BASE);
const PillarV4 = lazyV4Page(pillarPath("diagnose")); // one module serves all seven step pages
const PillarAr = lazyV4Page(arPath(pillarPath("diagnose"))); // Arabic step pages, one module as well
const IndustriesV4 = lazyV4Page("/industries");
const AudienceV4 = lazyV4Page(audiencePath("hotels")); // one module serves all audience pages
const DeIndustryV4 = lazyV4Page(deIndustryPath("friseur")); // one module serves both German industry pages
const CreatorsV4 = lazyV4Page("/creators");
const InsightsV4 = lazyV4Page("/insights");
const AboutV4 = lazyV4Page("/about");
const StartProjectV4 = lazyV4Page("/start-a-project");
const DeV4 = lazyV4Page("/de");
// Arabic (right-to-left) versions of the seven main pages.
const HomeAr = lazyV4Page("/ar");
const ServicesAr = lazyV4Page("/ar/services");
const WorkAr = lazyV4Page("/ar/work");
const ApproachAr = lazyV4Page("/ar/approach");
const IndustriesAr = lazyV4Page("/ar/industries");
const CreatorsAr = lazyV4Page("/ar/creators");
const StartProjectAr = lazyV4Page("/ar/start-a-project");
const AiV4 = lazyV4Page("/ai");
const AiDeV4 = lazyV4Page("/de/ki");
// Blog articles already migrated to the V4 layout (src/content/articles/data). Their routes come
// before the old blog routes below.
const V4_ARTICLE_PAGES = V4_ARTICLE_SLUGS.map((slug) => [slug, lazyV4Page(v4ArticlePath(slug))] as const);
const DesignSystemPreview = lazy(() => import("./pages/v4/DesignSystemPreview"));

// Lazy load CoreWebVitalsTracker - not needed for initial render
const CoreWebVitalsTracker = lazy(() => import("@/components/CoreWebVitalsTracker"));
// Toast containers only matter after an interaction, so they are not part of the entry chunk.
// Every component that shows a tooltip brings its own TooltipProvider.
const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ABTestProvider>
        <LanguageProvider>
            <AfterMount>
              <Suspense fallback={null}>
                <Toaster />
                <Sonner />
              </Suspense>
            </AfterMount>
            <AfterMount>
              <Suspense fallback={null}>
                <CoreWebVitalsTracker trackToDatabase={false} />
              </Suspense>
            </AfterMount>
            <BrowserRouter>
              <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<HomeV4 />} />
                <Route path="/services" element={<ServicesV4 />} />
                <Route path="/work" element={<WorkV4 />} />
                <Route path="/industries" element={<IndustriesV4 />} />
                {AUDIENCE_SLUGS.map((slug) => (
                  <Route key={slug} path={audiencePath(slug)} element={<AudienceV4 />} />
                ))}
                <Route path="/creators" element={<CreatorsV4 />} />
                <Route path="/insights" element={<InsightsV4 />} />
                <Route path="/about" element={<AboutV4 />} />
                <Route path="/start-a-project" element={<StartProjectV4 />} />
                <Route path="/de" element={<DeV4 />} />
                <Route path="/ar" element={<HomeAr />} />
                <Route path="/ar/services" element={<ServicesAr />} />
                <Route path="/ar/work" element={<WorkAr />} />
                <Route path="/ar/approach" element={<ApproachAr />} />
                <Route path="/ar/industries" element={<IndustriesAr />} />
                <Route path="/ar/creators" element={<CreatorsAr />} />
                <Route path="/ar/start-a-project" element={<StartProjectAr />} />
                <Route path="/ai" element={<AiV4 />} />
                <Route path="/de/ki" element={<AiDeV4 />} />
                {DE_INDUSTRY_SLUGS.map((slug) => (
                  <Route key={slug} path={deIndustryPath(slug)} element={<DeIndustryV4 />} />
                ))}
                <Route path={PILLAR_BASE} element={<ApproachV4 />} />
                {PILLAR_INDEX.map((p) => (
                  <Route key={p.id} path={pillarPath(p.id)} element={<PillarV4 />} />
                ))}
                {PILLAR_INDEX.map((p) => (
                  <Route key={`ar-${p.id}`} path={arPath(pillarPath(p.id))} element={<PillarAr />} />
                ))}
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/ab-test" element={<ABTestDashboard />} />
                <Route path="/ab-test-zentrale" element={<ABTestZentrale />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/content-plan" element={<ContentPlanDashboard />} />
                <Route path="/admin/kunden" element={<MeineKunden />} />
                <Route path="/admin/article-feedback" element={<ArticleFeedbackDashboard />} />
                <Route path="/admin/blog-analytics" element={<BlogAnalytics />} />
                <Route path="/admin/content-performance" element={<ContentPerformanceDashboard />} />
                <Route path="/admin/conversion-report" element={<ConversionOptimizationReport />} />
                <Route path="/admin/internal-linking" element={<InternalLinkingDashboard />} />
                <Route path="/admin/ab-test-zentrale" element={<ABTestZentrale />} />
                <Route path="/admin/reset-password" element={<ResetPassword />} />
                <Route path="/admin/update-password" element={<UpdatePassword />} />
                <Route path="/admin/content-calendar" element={<ContentUpdateCalendar />} />
                <Route path="/restaurant-marketing" element={<RestaurantMarketing />} />
                <Route path="/handwerker-marketing" element={<HandwerkerMarketing />} />
                <Route path="/arztpraxis-marketing" element={<ArztpraxisMarketing />} />
                <Route path="/hairdressers-munich" element={<HairdressersMunich />} />
                <Route path="/dentists-munich" element={<DentistsMunich />} />
                <Route path="/gyms-munich" element={<GymsMunich />} />
                <Route path="/restaurants-munich" element={<RestaurantsMunich />} />
                <Route path="/barbers-munich" element={<BarbersMunich />} />
                <Route path="/plumbers-berlin" element={<PlumbersBerlin />} />
                <Route path="/lawyers-hamburg" element={<LawyersHamburg />} />
                <Route path="/physiotherapy-vienna" element={<PhysiotherapyVienna />} />
                <Route path="/dentists-zurich" element={<DentistsZurich />} />
                <Route path="/bakeries-cologne" element={<BakeriesCologne />} />
                <Route path="/campsites" element={<Campsites />} />
                {V4_ARTICLE_PAGES.map(([slug, Page]) => (
                  <Route key={slug} path={v4ArticlePath(slug)} element={<Page />} />
                ))}
                <Route path="/blog/whatsapp-business-local-seo-2026" element={<WhatsappBusinessLocalSeo2026 />} />
                <Route path="/blog/local-seo-fahrschule" element={<LocalSeoFahrschule />} />
                <Route path="/blog/local-seo-sprachschule" element={<LocalSeoSprachschule />} />
                <Route path="/blog/local-seo-hochzeitsdienstleister" element={<LocalSeoHochzeitsdienstleister />} />
                <Route path="/ai-visibility-audit" element={<AIVisibilityAudit />} />
                <Route path="/anwalt-marketing" element={<AnwaltMarketing />} />
                <Route path="/diy-toolkit" element={<DIYToolkit />} />
                <Route path="/danke" element={<Danke />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/redaktionsrichtlinien" element={<Redaktionsrichtlinien />} />
                <Route path="/forschungsmethodik" element={<Forschungsmethodik />} />
                <Route path="/content-formatting-guidelines" element={<ContentFormattingGuidelines />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/seo-lexikon" element={<SeoLexikon />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/local-seo-vs-maps-seo" element={<LocalSeoVsMaps />} />
                <Route path="/blog/faq-local-seo-grundlagen" element={<FaqSubHub />} />
                <Route path="/blog/faq-google-business-profil" element={<FaqSubHub />} />
                <Route path="/blog/faq-bewertungen-reputation" element={<FaqSubHub />} />
                <Route path="/blog/faq-technisches-seo" element={<FaqSubHub />} />
                <Route path="/blog/faq-ai-zukunft-local-seo" element={<FaqSubHub />} />
                <Route path="/blog/faq-content-marketing-local-seo" element={<FaqSubHub />} />
                <Route path="/citation-verzeichnisse" element={<CitationVerzeichnisse />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/test-b" element={<TestB />} />
                {/* V4 redesign — B1 preview routes, noindex, not linked from nav/sitemap */}
                <Route path="/preview/home-v3" element={<HomeV4 preview />} />
                <Route path="/design-system" element={<DesignSystemPreview />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <AfterMount>
              <SalesChatMount />
            </AfterMount>
          </BrowserRouter>
      </LanguageProvider>
    </ABTestProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
