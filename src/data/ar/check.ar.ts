import type { Commitment } from "@/data/v4HowWeWork";
import type { Faq } from "@/data/v4Faq";

/**
 * Arabic copy of the free-check page (/ar/start-a-project) and of its form. Mirrors
 * src/data/v4Check.ts, src/pages/v4/StartProjectV4.tsx and START_FAQ. Reply time, prices and
 * conditions are identical to the English source (CHECK_REPLY_TIME = "two working days").
 */
export const REPLY_TIME_AR = "يومَي عمل";

export type CheckFormTextsAr = {
  formLabel: string;
  name: string;
  email: string;
  link: string;
  linkHint: string;
  businessType: string;
  businessTypePlaceholder: string;
  /** `value` is the canonical English label that goes into the payload (the backend is unchanged); `label` is shown. */
  businessTypes: readonly { value: string; label: string }[];
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

export const CHECK_FORM_AR: CheckFormTextsAr = {
  formLabel: "اطلب فحصك المجاني",
  name: "اسمك",
  email: "البريد الإلكتروني",
  link: "رابط ملفك على Google أو موقعك",
  linkHint: "مثلًا عنوان موقعك أو عنوان نشاطك على خرائط Google.",
  businessType: "نوع النشاط",
  businessTypePlaceholder: "يرجى الاختيار",
  businessTypes: [
    { value: "Hotel or guesthouse", label: "فندق أو بيت ضيافة" },
    { value: "Holiday rentals", label: "إيجارات سياحية" },
    { value: "Trade or craft business", label: "نشاط حرفي أو مهني" },
    { value: "Practice, law firm or tax adviser", label: "عيادة أو مكتب محاماة أو مستشار ضرائب" },
    { value: "Other business", label: "نشاط آخر" },
  ],
  goal: "ما الذي تريد تحسينه؟",
  goalHint: "اختياري. تكفي جملة أو جملتان. مثلًا: حجوزات مباشرة أكثر، أو ملف Google مكتمل، أو موقع أسرع.",
  consentBefore: "أوافق على استخدام بياناتي للرد على هذا الطلب. راجع ",
  consentBeforeWithService:
    "أوافق على استخدام بياناتي للرد على هذا الطلب وعلى إرسالها إلى LocalDominate عبر خدمة النماذج Web3Forms. يمكنني سحب موافقتي في أي وقت. راجع ",
  consentLink: "سياسة الخصوصية",
  consentAfter: " (DE).",
  submit: "إرسال الطلب",
  sending: "جارٍ الإرسال…",
  mailNote: "سيفتح هذا برنامج البريد لديك وطلبك مكتوب فيه. اضغط على «إرسال» فقط.",
  errors: {
    summary: "يرجى مراجعة الحقول المُعلَّمة.",
    name: "يرجى إدخال اسمك.",
    email: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    link: "يرجى إدخال رابط ملفك أو موقعك.",
    businessType: "يرجى اختيار نوع النشاط.",
    consent: "يرجى تأكيد الموافقة على إشعار الخصوصية.",
    failed: "تعذّر إرسال الطلب. يرجى مراسلتنا على info@localdominate.org.",
  },
  success: {
    title: "شكرًا لك. وصل طلبك.",
    body: `ننظر إلى ملفك أو موقعك ونردّ عليك بالبريد الإلكتروني خلال ${REPLY_TIME_AR} بما يصل إلى ثلاث نقاط ملموسة.`,
  },
  mailOpened: {
    title: "يفترض أن برنامج البريد لديك قد فُتح.",
    body: "أرسل الرسالة الجاهزة ويكون طلبك قد انطلق. وإن لم يُفتح شيء، فراسلنا على info@localdominate.org.",
  },
};

export const START_AR = {
  title: "احصل على فحص مجاني لملفك أو موقعك | LocalDominate",
  description:
    "أرسل رابط ملفك على Google أو موقعك الإلكتروني. نفحصه يدويًا ونرسل لك بالبريد الإلكتروني ما يصل إلى ثلاث نقاط للإصلاح أولًا، مع سبب كل نقطة. دون أي التزام.",
  breadcrumbHome: "الرئيسية",
  breadcrumbCheck: "فحص مجاني",
  label: "فحص مجاني · دون أي التزام",
  h1: "احصل على فحص مجاني لملفك على Google أو لموقعك.",
  lead: `أرسل لنا الرابط. نخبرك بالبريد الإلكتروني بما سنصلحه أولًا ولماذا، خلال ${REPLY_TIME_AR}. لا يترتب عليك أي شيء مقابل ذلك.`,
  whatYouGet: [
    "ننظر إلى ملفك على Google Business Profile أو إلى موقعك كما يفعل عميل جديد.",
    "تحصل على ما يصل إلى ثلاث نقاط ملموسة لتبدأ بإصلاحها، مع شرح موجز لكل نقطة.",
    "إذا ناسبك أحد عروضنا بسعر ثابت، نذكر أيّها ولماذا. وإذا لم يناسبك أي منها، نقول ذلك أيضًا.",
  ],
  nextLabel: "ما الذي يحدث بعد ذلك",
  nextTitle: "ثلاث خطوات. اثنتان منها علينا.",
  nextSteps: [
    { title: "ترسل الرابط", body: "الاسم والبريد الإلكتروني والرابط ونوع النشاط. هذا كل ما نحتاجه." },
    { title: "نفحص يدويًا", body: "شخص حقيقي يراجع الملف أو الصفحة. لا درجة آلية ولا تقرير عام جاهز." },
    {
      title: "تصلك النقاط بالبريد",
      body: `خلال ${REPLY_TIME_AR}. وأنت تقرر إن كنت ستصلحها بنفسك أم تكلّفنا بذلك بسعر ثابت.`,
    },
  ],
  howLabel: "إذا عملنا معًا",
  howTitle: "أربعة التزامات مكتوبة.",
  faqLabel: "أسئلة",
  faqTitle: "إجابات قصيرة قبل أن ترسل الرابط.",
  callTitle: "تفضّل أن نتحدث أولًا؟",
  callBody: "خمس عشرة دقيقة عبر الفيديو. تصف لنا أين تعثّر نشاطك، ونقول لك إن كان بإمكاننا المساعدة.",
} as const;

export const HOW_WE_WORK_AR: readonly Commitment[] = [
  {
    title: "النطاق والسعر كتابةً أولًا",
    body: "تحصل على النطاق الدقيق وسعر ثابت كتابةً قبل أن يبدأ أي عمل. لا يُحاسَب أي بند لم يتم الاتفاق عليه.",
  },
  {
    title: "الدفع على دفعتين",
    body: "النصف عند تقديم الطلب، والنصف عند قبولك للنطاق المتفق عليه. وتشمل الخدمة جولة تعديلات واحدة.",
  },
  {
    title: "كل شيء يعود لك",
    body: "الموقع وملف Google ملكٌ لك. ويمكن إلغاء الرعاية المستمرة شهريًا.",
  },
  {
    title: "لا وعود بالترتيب",
    body: "لا نعد بمراكز في نتائج البحث ولا بإيرادات. تحصل على قائمة مكتوبة بما غيّرناه ولماذا.",
  },
];

// U+2066 / U+2069 isolate the Latin name and the price so "79 €" keeps its order inside Arabic text.
export const HOW_WE_WORK_NOTE_AR =
  "عرض ⁦Google Profile Quick-Fix⁩ بسعر ⁦79 €⁩ هو الاستثناء: يُدفع كاملًا مع الطلب ولا تتضمن جولة تعديلات.";

export const START_FAQ_AR: readonly Faq[] = [
  {
    q: "ماذا أحصل عليه من الفحص المجاني؟",
    a: "ننظر إلى ملفك على Google Business Profile أو إلى موقعك كما يفعل عميل جديد. تحصل على ما يصل إلى ثلاث نقاط ملموسة لتبدأ بإصلاحها، مع شرح موجز لكل نقطة.",
  },
  {
    q: "ماذا يجب أن أرسل؟",
    a: "الاسم والبريد الإلكتروني والرابط ونوع النشاط. هذا كل ما نحتاجه.",
  },
  {
    q: "من يراجع طلبي، وما مدة الانتظار؟",
    a: `شخص حقيقي يراجع الملف أو الصفحة. لا درجة آلية ولا تقرير عام جاهز. تصلك النقاط بالبريد الإلكتروني خلال ${REPLY_TIME_AR}.`,
  },
  {
    q: "هل الفحص المجاني يكلّف شيئًا؟",
    a: "لا يترتب عليك أي شيء مقابل ذلك. دون أي التزام. إذا ناسبك أحد عروضنا بسعر ثابت، نذكر أيّها ولماذا. وإذا لم يناسبك أي منها، نقول ذلك أيضًا.",
  },
];
