import {
  CARE_FIRST_YEAR,
  CREATOR_ANCHORS,
  CREATOR_PRICES,
  type CreatorOptionId,
  CREATOR_FORM_OPTIONS,
} from "@/data/v4Creators";
import { faqPageJsonLd } from "@/lib/seoFaq";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";

/**
 * Arabic copy of /creators (route /ar/creators). Every number comes from CREATOR_PRICES in
 * v4Creators.ts, so prices, terms and scope stay identical to the English page.
 *
 * Strings may contain {{...}} around fragments that must stay left-to-right inside Arabic text
 * (prices, percentages, handles, emails). `Rich` turns them into <span class="ltr-run">, `plain`
 * removes them (meta, JSON-LD) and `isolate` wraps them in Unicode isolates (option labels, form
 * messages), so the order is right everywhere.
 */

const SITE = "https://localdominate.org";
export const CREATORS_AR_PATH = "/ar/creators";
export const CREATORS_AR_URL = `${SITE}${CREATORS_AR_PATH}`;
export const CREATORS_EN_URL = `${SITE}/creators`;
export const CREATORS_OG_IMAGE = `${SITE}/images/v4/social/ld-social-creators-1200x630.jpg`;

export const plain = (text: string): string => text.replace(/\{\{(.*?)\}\}/g, "$1");
export const isolate = (text: string): string => text.replace(/\{\{(.*?)\}\}/g, "⁦$1⁩");

const P = CREATOR_PRICES;
const amount = (value: number): string => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
/** Figure and euro sign stay on one line (no-break space). */
const eur = (value: number): string => `${amount(value)} €`;
const eurPlain = (value: number): string => `${amount(value)} €`;
/** The reply time of the English page is "two working days" (CHECK_REPLY_TIME). */
const REPLY_TIME = "يومَي عمل";

/* ------------------------------------------------------------------ SEO */

export const CREATORS_AR_SEO = {
  /** "| Local Dominator" is appended by SEOHead, as on the English page. */
  title: "صفحات بورتفوليو وملف إعلامي للمبدعين",
  description: `نبني بورتفوليو المبدع في صفحة حيّة: أرقام بتاريخها ومصدرها، والجمهور، والأعمال السابقة، ومخطط تعاون، على اسم نطاقك الخاص. ${eurPlain(P.onePage)} مرة واحدة أو ${eurPlain(P.careMonthly)} شهريًا.`,
} as const;

/* ------------------------------------------------------------------ demo (the demo itself is English) */

export const DEMO_AR = {
  iframeTitle: "عرض تجريبي لبورتفوليو المبدعة الخيالية Noa Valmère (بالإنجليزية)",
  phoneAlt: "الشاشة الأولى من العرض التجريبي لبورتفوليو المبدعة الخيالية Noa Valmère، عرض الجوال (النص بالإنجليزية)",
  desktopAlt: "الشاشة الأولى من العرض التجريبي لبورتفوليو المبدعة الخيالية Noa Valmère، عرض الحاسوب (النص بالإنجليزية)",
  phonePortraitAlt: "قسم الصورة الشخصية من العرض التجريبي لبورتفوليو المبدعة الخيالية Noa Valmère، عرض الجوال",
} as const;

/* ------------------------------------------------------------------ 1 hero */

export const HERO_AR = {
  label: "للمبدعين · صفحات البورتفوليو والملف الإعلامي",
  titleLines: ["ملفك الإعلامي في صفحة حيّة.", "نبنيها نحن لأجلك."],
  text: "رابط واحد يُري العلامة التجارية من يتابعك، ومدى وصولك، وما أنجزته، وكيف تحجز التعاون معك. لا يُنشر شيء قبل أن توافق عليه.",
  primary: "احصل على صفحتي",
  secondary: "جرّب العرض التجريبي",
  caption: "ملف تجريبي للمبدعة الخيالية Noa Valmère. الصور مولّدة بالذكاء الاصطناعي. العرض التجريبي بالإنجليزية.",
  terms: ["معاينة قبل نشر أي شيء", "بلا كلمة مرور، تكفي لقطات الشاشة", "اسم نطاقك الخاص، مسجَّل باسمك"],
  pricesLabel: "الأسعار",
} as const;

/** "0 € set-up" never stands without the monthly fee and the minimum term. */
export const HERO_PRICES_AR: readonly { figure: string; note: string }[] = [
  {
    figure: `{{${eur(P.careSetup)}}} رسوم إعداد`,
    note: `خطة العناية: ثم {{${eur(P.careMonthly)}}} شهريًا، بحد أدنى ${P.careMinimumMonths} شهرًا`,
  },
  { figure: `{{${eur(P.onePage)}}} مرة واحدة`, note: "الصفحة الواحدة" },
  { figure: `ابتداءً من {{${eur(P.studioFrom)}}}`, note: "نظام الاستوديو" },
];

/* ------------------------------------------------------------------ 2 what brands check */

export const WHY_AR = {
  label: "ما تتحقق منه العلامات التجارية",
  title: "تريد العلامة التجارية خمس إجابات. وقائمة الروابط العادية لا تعطيها أيًّا منها.",
  text: "تذكر أدلة Hootsuite وLater وShopify للمبدعين الأمور نفسها التي ينبغي أن يعرضها الملف الإعلامي. صفحتك تجمعها في شاشة واحدة، ومع كل رقم تاريخه ومصدره.",
  answers: [
    {
      title: "الوصول والتفاعل",
      body: "عدد المتابعين ومتوسط الوصول ومعدل التفاعل لكل منصة، ومع كل رقم تاريخ التحقق منه.",
    },
    { title: "الجمهور", body: "الدول والفئات العمرية والجنس، من إحصاءات حسابك، في رسم بياني." },
    { title: "الأعمال السابقة", body: "التعاونات التي يحق لك عرضها، وما سلّمته فيها." },
    {
      title: "الصيغ والأسعار",
      body: "ما يمكن حجزه: مجموعة ستوري، أو ريل، أو منشور، أو حزمة إقامة. الأسعار معروضة أو عند الطلب، والخيار لك.",
    },
    {
      title: "طريقة للحجز",
      body: "مخطط تعاون يحوّل فكرة العلامة التجارية إلى موجز (brief)، وجهة اتصال واضحة.",
    },
  ],
  quote: {
    text: "«أكثر ما تهتم به العلامات التجارية هو وصولك وتفاعلك وخصائص جمهورك.»",
    source: "Hootsuite، سبتمبر 2025",
    note: "ترجمتنا عن الإنجليزية",
    url: "https://blog.hootsuite.com/influencer-media-kit/",
  },
  contrasts: [
    "ملف PDF يجيب عن هذه الأسئلة مرة واحدة. ثم تتغير أرقامك.",
    "قائمة الروابط العادية توجّه المتابعين إلى روابطك، لكنها لا تجيب عن أسئلة العلامة التجارية.",
  ],
  sourcesLabel: "المصادر (بالإنجليزية)",
  sources: [
    { name: "Hootsuite", date: "سبتمبر 2025", url: "https://blog.hootsuite.com/influencer-media-kit/" },
    { name: "Later", date: "يونيو 2025", url: "https://later.com/blog/influencer-media-kit/" },
    { name: "Shopify", date: "2023", url: "https://www.shopify.com/blog/influencer-media-kit" },
  ],
  newTab: "تُفتح الروابط في تبويب جديد.",
} as const;

/* ------------------------------------------------------------------ 3 live demo */

export const DEMO_SECTION_AR = {
  label: "عرض تجريبي حيّ",
  title: "جرّب الصفحة قبل أن تطلب صفحتك.",
  text: "هذه صفحة كاملة للمبدعة Noa Valmère، وهي شخصية ابتكرناها لهذا العرض. أرقامها وعلاماتها التجارية واقتباساتها أمثلة، وصورها مولّدة بالذكاء الاصطناعي. صفحتك تُبنى من الأجزاء نفسها بمحتواك أنت. والأجزاء التي تحتاجها تُحدَّد في العرض المكتوب.",
  languageNote: "العرض التجريبي نفسه مكتوب بالإنجليزية.",
  scale:
    "تمثّل Noa حساب سفر كبيرًا. صفحتك تعرض أرقامك وأسعارك أنت، سواء كان لديك {{20K}} متابع أو {{2M}}. ويمكن أن تُعرض الأسعار أيضًا بعبارة «عند الطلب».",
  tryLabel: "جرّب هذا",
  tries: [
    "اسحب الشريط في الشاشة الأولى.",
    "غيّر لون الوشاح. تتبعه الصفحة كلها.",
    "خطّط لتعاون: اختر نوع العلامة التجارية وهدفًا وصيغًا، ثم انسخ الموجز.",
    "افتح خريطة السفر وتصفّح إقامة في فندق.",
  ],
  open: "افتح العرض في تبويب جديد (بالإنجليزية)",
  openShort: "افتح العرض التجريبي (EN)",
  caption: "مبدعة خيالية. بيانات توضيحية. الصور مولّدة بالذكاء الاصطناعي. العرض بالإنجليزية.",
  action: "احصل على صفحة مثلها",
  devices: { phone: "جوال", desktop: "حاسوب" },
  switchLabel: "حجم العرض",
} as const;

/* ------------------------------------------------------------------ 4 what is on the page */

export const INCLUDED_AR = {
  label: "ما تحصل عليه",
  title: "ما تحتويه صفحتك.",
  cards: [
    { icon: "numbers", title: "أرقام بمصادرها", body: "كل رقم يبيّن مصدره وتاريخ التحقق منه." },
    {
      icon: "signature",
      title: "توقيعك الخاص",
      body: "ما يجعل محتواك مميزًا يصبح هوية الصفحة: الألوان والخط وتفصيلة مرحة واحدة.",
    },
    { icon: "pillars", title: "محاور المحتوى", body: "ثلاثة إلى أربعة محاور بأفضل لقطاتك." },
    { icon: "audience", title: "رسوم بيانية للجمهور", body: "الدول والعمر والجنس من إحصاءات حسابك." },
    {
      icon: "map",
      title: "خريطة السفر والإقامات",
      body: "أين سافرت، وما يحصل عليه الفندق من إقامتك.",
    },
    { icon: "brands", title: "للعلامات التجارية", body: "تبويب لكل نوع من العلامات التجارية مع مشروع نموذجي." },
    {
      icon: "planner",
      title: "مخطط التعاون",
      body: "نوع العلامة التجارية والهدف والصيغ تعطي تقديرًا فوريًا وموجزًا جاهزًا للنسخ.",
    },
    {
      icon: "contact",
      title: "آلية العمل والأسئلة الشائعة والتواصل",
      body: "الخطوات وحقوق الاستخدام والمواعيد، وطريقة واضحة واحدة للتواصل معك.",
    },
  ],
  line: "مصمَّمة للجوال أولًا، سريعة، وعلى اسم نطاقك الخاص. بلا تطبيق وبلا تسجيل دخول لزوارك.",
} as const;

/* ------------------------------------------------------------------ 5 comparison */

type CompareColumn = { id: string; name: string; ours: boolean; values: readonly string[] };

export const COMPARE_AR = {
  label: "ما تستخدمه اليوم",
  title: "احتفظ بقائمة روابطك. وأضف الصفحة التي تحتاجها العلامات التجارية.",
  rows: [
    "لمن هي",
    "من يبنيها",
    "الجمهور والأعمال السابقة والحجز في شاشة واحدة",
    "تبقى محدَّثة",
    "اسم نطاق خاص",
  ] as readonly string[],
  columns: [
    {
      id: "link-in-bio",
      name: "أداة رابط السيرة ({{Link-in-bio}})",
      ours: false,
      values: [
        "متابعون يريدون روابطك",
        "أنت",
        "لا تتوافر في قائمة روابط عادية. بعض الأدوات تضيف ملفًا إعلاميًا في الخطط المدفوعة.",
        "تحدّثها أنت",
        "في الخطط المدفوعة",
      ],
    },
    {
      id: "pdf",
      name: "ملف إعلامي بصيغة PDF",
      ours: false,
      values: ["رسالة عرض واحدة", "أنت", "نعم، في ملف ثابت", "تصدّره من جديد", "لا"],
    },
    {
      id: "builder",
      name: "منشئ مواقع",
      ours: false,
      values: ["أي شخص لديه وقت للبناء", "أنت", "إن بنيتها بنفسك", "تحدّثها أنت", "نعم"],
    },
    {
      id: "localdominate",
      name: "صفحتك من LocalDominate",
      ours: true,
      values: [
        "علامات تجارية وفنادق تقرّر التعاون معك",
        "نحن",
        "نعم",
        "نحدّثها كل شهر مع خطة العناية",
        "نعم، مسجَّل باسمك",
      ],
    },
  ] as readonly CompareColumn[],
  /** Checked on the providers' own pages on 2 October 2026 (as on the English page). */
  note: {
    intro: "الأسعار المعلنة بتاريخ {{2}} أكتوبر {{2026}}:",
    beacons: {
      name: "Beacons",
      rest: " لديها خطة مجانية وخطط مدفوعة بسعر {{$10}} و{{$30}} و{{$100}} شهريًا، والملف الإعلامي ضمن الخطط المدفوعة.",
      url: "https://beacons.ai/i/pricing",
    },
    squarespace: {
      name: "Squarespace",
      rest: " تبدأ من {{$19}} شهريًا، بفوترة سنوية.",
      url: "https://www.squarespace.com/pricing",
    },
    canva: {
      name: "Canva",
      rest: " تقدّم قوالب مجانية للملف الإعلامي.",
      url: "https://www.canva.com/media-kits/templates/",
    },
    languageNote: "صفحات هذه الأدوات بالإنجليزية.",
  },
} as const;

/* ------------------------------------------------------------------ 6 prices */

export type CreatorTierAr = {
  id: "care" | "one-page" | "studio";
  name: string;
  badge?: string;
  price: { overline: string; figure: string };
  then?: { prefix: string; figure: string; unit: string };
  terms: string;
  total?: string;
  includes: readonly string[];
  ownership?: string;
  cta: string;
  callLink?: string;
};

export const PRICES_SECTION_AR = {
  label: "الأسعار",
  title: "ثلاث طرق للحصول على صفحتك.",
  text: "أسعار ثابتة، تُؤكَّد كتابةً قبل أن نبدأ.",
  includesLabel: "يشمل",
  notes: [
    "لا يشمل: اسم النطاق نفسه، حوالي {{10}} إلى {{15 €}} سنويًا، ويُسجَّل باسمك.",
    "عرض للمبدعين الذين يعدّون العمل مع العلامات التجارية نشاطًا تجاريًا.",
  ],
  fitLabel: "أيّها يناسبك؟",
  fits: [
    { when: "تنشر للعلامات التجارية بين حين وآخر:", pick: "الصفحة الواحدة." },
    { when: "تراسل العلامات التجارية كل شهر ولا تريد تحديث الأرقام بنفسك:", pick: "خطة العناية." },
    { when: "تدير ذلك نشاطًا تجاريًا، مع مدير أعمال أو فريق:", pick: "نظام الاستوديو." },
  ],
} as const;

export const CREATOR_TIERS_AR: readonly CreatorTierAr[] = [
  {
    id: "care",
    name: "خطة العناية",
    badge: "أقل كلفة للبدء",
    price: { overline: "رسوم الإعداد", figure: eur(P.careSetup) },
    then: { prefix: "ثم", figure: eur(P.careMonthly), unit: "شهريًا" },
    terms: `حد أدنى ${P.careMinimumMonths} شهرًا من يوم نشر صفحتك، ثم يمكنك الإلغاء شهريًا.`,
    total: `السنة الأولى: {{${eur(CARE_FIRST_YEAR)}}}.`,
    includes: [
      "صفحة البورتفوليو الواحدة، نبنيها لك",
      "منشورة على اسم نطاقك الخاص",
      "أرقام تُحدَّث كل شهر من الإحصاءات التي ترسلها",
      "تعديلان على المحتوى كل شهر: تعاون جديد أو صور جديدة أو نص جديد",
      "الاستضافة والعناية التقنية مشمولتان",
    ],
    ownership: "إذا ألغيت بعد السنة الأولى، تحصل على ملفات الصفحة دون مقابل.",
    cta: "ابدأ بخطة العناية",
  },
  {
    id: "one-page",
    name: "الصفحة الواحدة",
    price: { overline: "مرة واحدة", figure: eur(P.onePage) },
    terms: "{{50 %}} عند الطلب و{{50 %}} عند القبول. جولة تعديلات واحدة مشمولة.",
    includes: [
      "صفحة البورتفوليو الواحدة نفسها، نبنيها لك",
      "منشورة على اسم نطاقك الخاص",
      "تُسلَّم عند القبول: الصفحة ملكك",
      "استضافة تُعدّ في حسابك أنت، بلا رسوم شهرية لنا",
      "التحديثات لاحقًا: أضف خطة العناية أو احجز تعديلات منفردة",
    ],
    ownership: "بلا اشتراك. الصفحة ملكك من يوم قبولها.",
    cta: "اطلب الصفحة الواحدة",
  },
  {
    id: "studio",
    name: "نظام الاستوديو",
    price: { overline: "ابتداءً من", figure: eur(P.studioFrom) },
    terms: `يتراوح السعر عادةً بين {{${amount(P.studioFrom)}}} و{{${eur(P.studioTo)}}}. نطاق العمل والسعر الثابت بعد مكالمة قصيرة.`,
    includes: [
      "موقع متعدد الصفحات بصفحة لكل تعاون",
      "صندوق استفسارات العلامات التجارية: كل طلب في قائمة واحدة مع حالته",
      "نظام تواصل: قائمة علامات تجارية وقوالب عروض وتذكيرات متابعة",
      "ملف إعلامي PDF يُولَّد من البيانات نفسها التي تغذي الصفحة",
      "أرقام شهرية وتقرير قصير",
    ],
    ownership: "اسم النطاق وحساب الاستضافة والشيفرة باسمك عند التسليم.",
    cta: "خطّط للنظام",
    callLink: "أو احجز مكالمة لمدة 15 دقيقة",
  },
];

/* ------------------------------------------------------------------ 7 how it works */

export const STEPS_AR = {
  label: "آلية العمل",
  title: "أربع خطوات. أنت ترسل ونحن نبني.",
  steps: [
    {
      title: "أرسل حسابك",
      body: `أخبرنا بحسابك وبالخيار الذي تريده. نردّ عليك بالبريد الإلكتروني خلال ${REPLY_TIME} بعرض مكتوب وقائمة بما نحتاجه.`,
    },
    {
      title: "أرسل موادّك",
      body: "لقطات شاشة لإحصاءات آخر 30 يومًا، ومن 8 إلى 12 صورة، ونبذة قصيرة، والتعاونات التي يحق لك عرضها. بلا كلمة مرور وبلا دخول إلى حساباتك.",
    },
    {
      title: "نبني وأنت توافق",
      body: "يصلك رابط معاينة. جولة تعديلات واحدة مشمولة. لا يُنشر شيء للعموم دون موافقتك.",
    },
    {
      title: "منشورة على اسم نطاقك",
      body: "نربط اسم نطاقك ونسلّم الصفحة. ومع خطة العناية نحدّث أرقامك كل شهر.",
    },
  ],
  timingLabel: "المدة",
  timing: "منشورة خلال خمسة أيام عمل بعد اكتمال موادّك.",
} as const;

/* ------------------------------------------------------------------ 8 our rules */

export const RULES_AR = {
  label: "قواعدنا",
  title: "لا أرقام إلا ما تستطيع إثباته.",
  rules: [
    "كل رقم يحمل مصدره وتاريخه.",
    "لا شهادات مختلَقة، ولا شعارات علامات تجارية دون إذن.",
    "لا نطلب كلمة مرورك أبدًا. تكفي لقطات شاشة من إحصاءاتك.",
    "اسم نطاقك مسجَّل باسمك. وصفحتك تبقى ملكك.",
  ],
  closing: {
    linkText: "دليل Later للملف الإعلامي (EN)",
    url: "https://later.com/blog/influencer-media-kit/",
    rest: " ينصح المبدعين بأن يقدّموا للعلامات التجارية صورة صادقة عن إحصاءاتهم. ونحن نبني الصفحة على هذا الأساس.",
  },
} as const;

/* ------------------------------------------------------------------ 9 FAQ */

/** Visible FAQ. {{...}} marks left-to-right fragments; the FAQPage JSON-LD uses the same array via plain(). */
export const CREATOR_FAQ_AR: readonly { q: string; a: string }[] = [
  {
    q: "لديّ رابط في السيرة (link in bio) أصلًا. لماذا صفحة أخرى؟",
    a: "احتفظ به. قائمة الروابط توجّه المتابعين إلى روابطك. أما هذه الصفحة فهي لمدير العلامة التجارية الذي يقرّر التعاون ويريد الجمهور والوصول والأعمال السابقة في شاشة واحدة. ويمكنك وضع رابط الصفحة في قائمة روابطك.",
  },
  {
    q: "قالب الملف الإعلامي مجاني. لماذا أدفع؟",
    a: "القالب مناسب إذا كنت تبنيه وتحدّثه بنفسك. أما ملف PDF فيتقادم بمجرد أن تتغير أرقامك، ولا يستقبل طلبات. نحن نبني الصفحة لأجلك، ومع خطة العناية نُبقيها محدَّثة.",
  },
  {
    q: "لماذا خطة شهرية؟",
    a: `لأن أرقامك تتغير كل شهر. تكلّف خطة العناية {{${eur(CARE_FIRST_YEAR)}}} في السنة الأولى، وتكلّف الصفحة الواحدة {{${eur(P.onePage)}}} مرة واحدة. اختر الخطة إن أردت أن نتولى نحن التحديثات. وإن كنت تحدّث نادرًا فاختر الصفحة الواحدة.`,
  },
  {
    q: "من يملك الصفحة واسم النطاق؟",
    a: "أنت. اسم النطاق مسجَّل باسمك. تُسلَّم الصفحة الواحدة عند القبول. ومع خطة العناية تحصل على ملفات الصفحة إذا ألغيت بعد السنة الأولى.",
  },
  {
    q: "ماذا يحدث إن أوقفت خطة العناية؟",
    a: `بعد الحد الأدنى البالغ ${P.careMinimumMonths} شهرًا يمكنك الإلغاء شهريًا. تتسلّم ملفات الصفحة ويمكنك استضافتها أينما شئت. وتتوقف تحديثاتنا.`,
  },
  {
    q: "هل تحتاجون إلى الدخول إلى حساباتي؟",
    a: "لا. نعمل من حسابك العام ومن لقطات الشاشة التي ترسلها.",
  },
  {
    q: "ما المنصات التي تعرضها الصفحة؟",
    a: "Instagram وTikTok وYouTube جنبًا إلى جنب، ولكل منها مصدره. ومنصات أخرى عند الطلب.",
  },
  { q: "كم يستغرق الأمر؟", a: "خمسة أيام عمل من اليوم الذي تكتمل فيه موادّك." },
  {
    q: "هل المبدعة في العرض التجريبي حقيقية؟",
    a: "لا. Noa Valmère شخصية ابتكرناها لهذا العرض، بأرقام توضيحية وصور مولّدة بالذكاء الاصطناعي. صفحتك لا تعرض إلا محتواك أنت وأرقامًا تستطيع إثباتها.",
  },
];

export const FAQ_SECTION_AR = { label: "أسئلة", title: "إجابات قصيرة قبل أن تبدأ." } as const;

/* ------------------------------------------------------------------ more services */

export const MORE_AR = {
  label: "ما بعد الصفحة",
  title: "خدمات أخرى للمبدعين، والسعر عند الطلب.",
  text: "الصفحة هي البداية. إذا أردت أن ننجز أيضًا العمل الذي يقف خلفها، فلدينا ثلاث خدمات أخرى. ونتفق على نطاق العمل والسعر كتابةً بعد مكالمة قصيرة.",
  priceLabel: "السعر عند الطلب",
  services: [
    {
      id: "management",
      name: "إدارة وسائل التواصل الاجتماعي",
      body: "نخطط وننشر معك: تقويم محتوى وتعليقات توضيحية (captions) وجدولة وردود، بأسلوبك أنت. لا يُنشر شيء دون موافقتك.",
      points: ["تقويم محتوى شهري", "جدولة ونشر", "ردود على المتابعين وفق قواعد متفق عليها"],
    },
    {
      id: "analytics",
      name: "تحليلات وسائل التواصل الاجتماعي",
      body: "تقرير شهري يبيّن ما نجح: الوصول والتفاعل والجمهور لكل منصة، مع المصدر والتاريخ، جاهز لتسليمه إلى علامة تجارية.",
      points: ["أرقام لكل منصة وصيغة", "ما يستحق التكرار وما يُترك", "الأرقام نفسها تغذي صفحتك"],
    },
    {
      id: "software",
      name: "برمجيات لوسائل التواصل الاجتماعي، نبنيها لك",
      body: "برمجيات مصمَّمة على طريقة عملك، مثل مخطط محتوى، أو صندوق استفسارات العلامات التجارية، أو لوحة تقارير لك ولفريقك.",
      points: ["نطاق عمل يُحدَّد وفق قنواتك وسير عملك", "نبنيها ونختبرها ببياناتك الفعلية", "مذكرة تسليم مكتوبة، والبرمجيات تبقى ملكك"],
    },
  ],
  action: "اطلب عرض سعر",
} as const;

/* ------------------------------------------------------------------ 10 form */

export const FORM_SECTION_AR = {
  label: "احصل على صفحتك",
  title: `أرسل حسابك. نردّ خلال ${REPLY_TIME}.`,
  text: "يصلك عرض مكتوب وقائمة قصيرة بما نحتاجه منك. الإرسال مجاني ولا يلزمك بشيء.",
  callTitle: "تفضّل أن نتحدث أولًا؟",
  who: { lead: "وراء LocalDominate يقف Markus Wimböck.", link: "عن Markus (EN)" },
  /** Quoted from the verified copy of /about ("One person on the project"), translated. */
  onePerson: "من الفحص الأول حتى التسليم، شخص واحد مسؤول عن مشروعك.",
  portraitAlt: "Markus Wimböck",
} as const;

/**
 * Option labels shown in the select. The submitted VALUE is the English text of the English page
 * (CREATOR_FORM_OPTIONS), so the notification and the email read the same as for /creators.
 */
export const CREATOR_FORM_OPTION_LABELS_AR: Record<CreatorOptionId, string> = {
  care: `خطة العناية: رسوم إعداد {{${eurPlain(P.careSetup)}}}، ثم {{${eurPlain(P.careMonthly)}}} شهريًا، بحد أدنى ${P.careMinimumMonths} شهرًا`,
  "one-page": `الصفحة الواحدة: {{${eurPlain(P.onePage)}}} مرة واحدة`,
  studio: `نظام الاستوديو: ابتداءً من {{${eurPlain(P.studioFrom)}}}`,
  more: "إدارة وسائل التواصل أو التحليلات أو البرمجيات: السعر عند الطلب",
  unsure: "لم أقرر بعد",
};

export const CREATOR_FORM_SELECT_AR: readonly { value: string; label: string }[] = (
  Object.keys(CREATOR_FORM_OPTIONS) as CreatorOptionId[]
).map((id) => ({ value: CREATOR_FORM_OPTIONS[id], label: isolate(CREATOR_FORM_OPTION_LABELS_AR[id]) }));

export type CreatorFormTextsAr = {
  formLabel: string;
  name: string;
  email: string;
  link: string;
  linkHint: string;
  businessType: string;
  businessTypePlaceholder: string;
  goal: string;
  goalHint: string;
  consentBefore: string;
  consentBeforeWithService: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  sending: string;
  mailNote: string;
  errors: {
    summary: string;
    name: string;
    email: string;
    link: string;
    businessType: string;
    consent: string;
    failed: string;
  };
  success: { title: string; body: string };
  mailOpened: { title: string; body: string };
};

export const CREATOR_FORM_AR: CreatorFormTextsAr = {
  formLabel: "اطلب صفحتك",
  name: "اسمك",
  email: "البريد الإلكتروني",
  link: "رابط حسابك الرئيسي",
  linkHint: "Instagram أو TikTok أو YouTube.",
  businessType: "أيّ خيار يهمّك؟",
  businessTypePlaceholder: "اختر",
  goal: "هل هناك ما يجب أن نعرفه؟",
  goalHint: "اختياري. مثل مجالك أو عدد متابعيك التقريبي أو موعد نهائي.",
  consentBefore: "أوافق على استخدام بياناتي للرد على هذا الطلب. راجع ",
  consentBeforeWithService:
    "أوافق على استخدام بياناتي للرد على هذا الطلب وعلى إرسالها إلى LocalDominate عبر خدمة النماذج Web3Forms. يمكنني سحب موافقتي في أي وقت. راجع ",
  consentLink: "سياسة الخصوصية",
  consentAfter: " (بالألمانية).",
  submit: "أرسل الطلب",
  sending: "جارٍ الإرسال…",
  mailNote: "سيُفتح برنامج البريد لديك وفيه طلبك جاهزًا. ما عليك إلا الضغط على «إرسال».",
  errors: {
    summary: "يرجى مراجعة الحقول المعلَّمة.",
    name: "يرجى إدخال اسمك.",
    email: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    link: "يرجى إدخال رابط حسابك.",
    businessType: "يرجى اختيار أحد الخيارات.",
    consent: "يرجى تأكيد الموافقة على إشعار الخصوصية.",
    failed: isolate("تعذّر إرسال الطلب. يرجى مراسلتنا على {{info@localdominate.org}}."),
  },
  success: {
    title: "شكرًا لك. وصل طلبك.",
    body: `نردّ عليك بالبريد الإلكتروني خلال ${REPLY_TIME} بعرض مكتوب وقائمة بالمواد التي نحتاجها.`,
  },
  mailOpened: {
    title: "يفترض أن برنامج البريد لديك قد فُتح.",
    body: isolate("أرسل الرسالة الجاهزة ليصلنا طلبك. وإن لم يُفتح شيء، فراسلنا على {{info@localdominate.org}}."),
  },
};

/** The notification and the pre-filled email go to the German-speaking owner: same wording as /creators. */
export const CREATOR_FORM_MAIL = {
  subject: "Creator page request",
  name: "Your name",
  email: "Email",
  link: "Link to your main profile",
  businessType: "Which option interests you?",
  goal: "Anything we should know?",
} as const;

/* ------------------------------------------------------------------ JSON-LD */

const ORGANIZATION = { "@id": `${SITE}/#organization` };
const FAQ_PLAIN = CREATOR_FAQ_AR.map((item) => ({ q: plain(item.q), a: plain(item.a) }));

const offer = (name: string, description: string, priceSpecification: Record<string, unknown>) => ({
  "@type": "Offer",
  name,
  description,
  priceCurrency: "EUR",
  url: `${CREATORS_AR_URL}#${CREATOR_ANCHORS.prices}`,
  priceSpecification: { priceCurrency: "EUR", ...priceSpecification },
});

export const CREATORS_AR_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CREATORS_AR_URL}#webpage`,
      url: CREATORS_AR_URL,
      name: CREATORS_AR_SEO.title,
      description: CREATORS_AR_SEO.description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${CREATORS_AR_URL}#service` },
      breadcrumb: { "@id": `${CREATORS_AR_URL}#breadcrumb` },
      dateModified: SEO_DATE_MODIFIED,
      inLanguage: "ar",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CREATORS_AR_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: "المبدعون", item: CREATORS_AR_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CREATORS_AR_URL}#service`,
      name: CREATORS_AR_SEO.title,
      serviceType: "موقع بورتفوليو للمبدعين",
      description: CREATORS_AR_SEO.description,
      url: CREATORS_AR_URL,
      inLanguage: "ar",
      provider: ORGANIZATION,
      offers: [
        offer("الصفحة الواحدة", "صفحة بورتفوليو واحدة للمبدع، نبنيها لك وتُسلَّم عند القبول. سعر لمرة واحدة.", {
          "@type": "PriceSpecification",
          price: P.onePage,
        }),
        offer(
          "خطة العناية",
          `صفحة بورتفوليو واحدة للمبدع مع تحديثات شهرية. بلا رسوم إعداد، وحد أدنى ${P.careMinimumMonths} شهرًا ثم إلغاء شهري. السنة الأولى: ${CARE_FIRST_YEAR} يورو.`,
          {
            "@type": "UnitPriceSpecification",
            price: P.careMonthly,
            unitCode: "MON",
            unitText: "MONTH",
            billingIncrement: 1,
          }
        ),
        offer("نظام الاستوديو", "موقع متعدد الصفحات للمبدع مع صندوق استفسارات ونظام تواصل. نطاق العمل والسعر الثابت بعد مكالمة قصيرة.", {
          "@type": "PriceSpecification",
          minPrice: P.studioFrom,
        }),
      ],
    },
    { ...faqPageJsonLd(CREATORS_AR_URL, FAQ_PLAIN), inLanguage: "ar" },
  ],
};
