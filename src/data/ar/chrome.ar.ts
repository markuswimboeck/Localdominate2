/**
 * Arabic strings of the shared V4 frame (navigation, footer, buttons). One place, so the pages
 * and the frame always use the same wording.
 */
export const AR_CHROME = {
  skipLink: "انتقل إلى المحتوى",
  navLabel: "التنقل الرئيسي",
  menuOpen: "القائمة",
  menuClose: "إغلاق",
  switchToEnglish: "English",
  switchToArabic: "العربية",
  /** Spoken label of the language links (accessibility only). */
  switchToEnglishLabel: "Read this page in English",
  switchToArabicLabel: "قراءة هذه الصفحة بالعربية",
} as const;

export const AR_CHECK = {
  label: "احصل على فحص مجاني",
  short: "فحص مجاني",
  creatorsLabel: "احصل على صفحتي",
  creatorsShort: "احصل على صفحتي",
} as const;

export const AR_BOOKING_LABEL = "احجز مكالمة لمدة 15 دقيقة";

/** Navigation labels, keyed by the English path of the page. */
export const AR_NAV: readonly { to: string; label: string }[] = [
  { to: "/ar/approach", label: "المنهج" },
  { to: "/ar/services", label: "الخدمات" },
  { to: "/ar/work", label: "أعمالنا" },
  { to: "/ar/industries", label: "القطاعات" },
  { to: "/ar/creators", label: "المبدعون" },
];

export const AR_STEP_NAMES: Record<string, string> = {
  diagnose: "التشخيص",
  position: "التموضع",
  create: "الإبداع",
  build: "البناء",
  launch: "الإطلاق",
  grow: "النمو",
  scale: "التوسع",
};

export const AR_FOOTER = {
  tagline: "الاستراتيجية والعلامة التجارية والموقع والنمو، في نظام واحد مترابط.",
  address:
    "تتولى شركة ⁦Explore Saudi Arabia Ltd⁩ تشغيل LocalDominate، وعنوانها: ⁦128 City Road, London EC1V 2NX⁩، المملكة المتحدة (رقم التسجيل لدى ⁦Companies House⁩: ⁦16902019⁩).",
  exploreSaudiBefore: "هي منصة المؤسس الخاصة للسفر إلى المملكة العربية السعودية، وهي مدرجة في صفحة",
  exploreSaudiLink: "أعمالنا",
  exploreSaudiOpensNewTab: " (تُفتح في تبويب جديد)",
  groups: {
    explore: "استكشف",
    steps: "الخطوات السبع",
    industries: "القطاعات",
    legal: "المعلومات القانونية",
  },
  /** Pages that exist only in English or German are marked, so nobody is surprised by the language. */
  englishMarker: " (EN)",
  germanMarker: " (DE)",
  explore: [
    { to: "/ar", label: "الرئيسية" },
    { to: "/ar/approach", label: "المنهج" },
    { to: "/ar/services", label: "الخدمات" },
    { to: "/ar/work", label: "أعمالنا" },
    { to: "/ar/industries", label: "القطاعات" },
    { to: "/ar/creators", label: "المبدعون" },
  ] as readonly { to: string; label: string }[],
  exploreEnglish: [
    { to: "/insights", label: "المقالات" },
    { to: "/about", label: "من نحن" },
    { to: "/blog", label: "المدونة" },
  ] as readonly { to: string; label: string }[],
  industries: [
    { to: "/restaurant-marketing", label: "تسويق المطاعم" },
    { to: "/handwerker-marketing", label: "تسويق الحرف والمهن" },
    { to: "/arztpraxis-marketing", label: "تسويق العيادات الطبية" },
    { to: "/anwalt-marketing", label: "تسويق مكاتب المحاماة" },
  ] as readonly { to: string; label: string }[],
  legal: [
    { to: "/impressum", label: "البيانات القانونية (Impressum)" },
    { to: "/datenschutz", label: "سياسة الخصوصية" },
    { to: "/agb", label: "الشروط والأحكام (AGB)" },
  ] as readonly { to: string; label: string }[],
  cookieSettings: "إعدادات ملفات تعريف الارتباط",
} as const;
