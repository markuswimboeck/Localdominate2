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
  link: "رابط ملفك التجاري على Google أو موقعك",
  linkHint: "مثل رابط موقعك أو رابط نشاطك على خرائط Google.",
  businessType: "نوع النشاط",
  businessTypePlaceholder: "اختر",
  businessTypes: [
    { value: "Hotel or guesthouse", label: "فندق أو بيت ضيافة" },
    { value: "Holiday rentals", label: "إيجارات سياحية" },
    { value: "Trade or craft business", label: "نشاط حرفي أو مهني" },
    { value: "Practice, law firm or tax adviser", label: "عيادة أو مكتب محاماة أو مستشار ضريبي" },
    { value: "Other business", label: "نشاط آخر" },
  ],
  goal: "ما الذي تريد تحسينه؟",
  goalHint: "اختياري. تكفي جملة أو جملتان. مثلًا: حجوزات مباشرة أكثر، أو ملف تجاري مكتمل على Google، أو موقع أسرع.",
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
    link: "يرجى إدخال رابط ملفك أو موقعك.",
    businessType: "يرجى اختيار نوع النشاط.",
    consent: "يرجى تأكيد الموافقة على إشعار الخصوصية.",
    failed: "تعذّر إرسال الطلب. يرجى مراسلتنا على info@localdominate.org.",
  },
  success: {
    title: "شكرًا لك. وصل طلبك.",
    body: `نراجع ملفك أو موقعك ونردّ عليك بالبريد الإلكتروني خلال ${REPLY_TIME_AR} بثلاث نقاط محددة على الأكثر.`,
  },
  mailOpened: {
    title: "يفترض أن برنامج البريد لديك قد فُتح.",
    body: "أرسل الرسالة الجاهزة ليصلنا طلبك. وإن لم يُفتح شيء، فراسلنا على info@localdominate.org.",
  },
};

export const START_AR = {
  title: "احصل على فحص مجاني لملفك أو موقعك | LocalDominate",
  description:
    "أرسل رابط ملفك التجاري على Google أو موقعك. نفحصه يدويًا ونرسل إليك بالبريد الإلكتروني ثلاث نقاط على الأكثر لتبدأ بإصلاحها، مع سبب كل نقطة. دون أي التزام.",
  breadcrumbHome: "الرئيسية",
  breadcrumbCheck: "فحص مجاني",
  label: "فحص مجاني · دون أي التزام",
  h1: "احصل على فحص مجاني لملفك التجاري على Google أو لموقعك.",
  lead: `أرسل إلينا الرابط. نخبرك بالبريد الإلكتروني، خلال ${REPLY_TIME_AR}، بما كنا سنصلحه أولًا ولماذا. ولا يكلّفك ذلك شيئًا.`,
  whatYouGet: [
    "نراجع ملفك التجاري على Google أو موقعك كما يراه عميل جديد.",
    "تحصل على ثلاث نقاط محددة على الأكثر لتبدأ بإصلاحها، مع شرح موجز لكل نقطة.",
    "إذا ناسبك أحد عروضنا ذات السعر الثابت، نخبرك أيّها ولماذا. وإن لم يناسبك أيٌّ منها، نخبرك بذلك أيضًا.",
  ],
  nextLabel: "ما يحدث بعد ذلك",
  nextTitle: "ثلاث خطوات. اثنتان منها علينا.",
  nextSteps: [
    { title: "ترسل الرابط", body: "الاسم والبريد الإلكتروني والرابط ونوع النشاط. هذا كل ما نحتاجه." },
    { title: "نفحص يدويًا", body: "شخص حقيقي يراجع الملف أو الصفحة. لا تقييم آلي ولا تقرير عام جاهز." },
    {
      title: "تصلك النقاط بالبريد",
      body: `خلال ${REPLY_TIME_AR}. ثم تقرّر: أن تصلحها بنفسك، أو أن نتولى ذلك بسعر ثابت.`,
    },
  ],
  howLabel: "إذا عملنا معًا",
  howTitle: "أربعة التزامات مكتوبة.",
  faqLabel: "أسئلة",
  faqTitle: "إجابات قصيرة قبل أن ترسل الرابط.",
  callTitle: "تفضّل أن نتحدث أولًا؟",
  callBody: "مكالمة لمدة 15 دقيقة عبر الفيديو. تصف لنا أين يتعثر نشاطك، ونخبرك هل نستطيع المساعدة.",
} as const;

export const HOW_WE_WORK_AR: readonly Commitment[] = [
  {
    title: "نطاق العمل والسعر كتابةً أولًا",
    body: "تحصل على نطاق العمل الدقيق وسعر ثابت كتابةً قبل أن يبدأ أي عمل. ولا نُصدر فاتورة بأي بند لم نتفق عليه.",
  },
  {
    title: "الدفع على دفعتين",
    body: "النصف عند تقديم الطلب، والنصف الآخر عند قبولك نطاق العمل المتفق عليه. وتشمل الخدمة جولة تعديلات واحدة.",
  },
  {
    title: "كل شيء ملك لك",
    body: "الموقع والملف التجاري على Google ملك لك. ويمكن إلغاء العناية المستمرة شهريًا.",
  },
  {
    title: "لا وعود بالترتيب",
    body: "لا نعد بمراكز في نتائج البحث ولا بإيرادات. تحصل على قائمة مكتوبة بما غيّرناه ولماذا.",
  },
];

// U+2066 / U+2069 isolate the Latin name and the price so "79 €" keeps its order inside Arabic text.
export const HOW_WE_WORK_NOTE_AR =
  "الاستثناء هو عرض «إصلاح سريع لملف Google» بسعر ⁦79 €⁩: يُدفع كاملًا عند تقديم الطلب، ولا يشمل جولة تعديلات.";

export const START_FAQ_AR: readonly Faq[] = [
  {
    q: "ما الذي أحصل عليه في الفحص المجاني؟",
    a: "نراجع ملفك التجاري على Google أو موقعك كما يراه عميل جديد. تحصل على ثلاث نقاط محددة على الأكثر لتبدأ بإصلاحها، مع شرح موجز لكل نقطة.",
  },
  {
    q: "ماذا يجب أن أرسل؟",
    a: "الاسم والبريد الإلكتروني والرابط ونوع النشاط. هذا كل ما نحتاجه.",
  },
  {
    q: "من يراجع طلبي، وما مدة الانتظار؟",
    a: `شخص حقيقي يراجع الملف أو الصفحة. لا تقييم آلي ولا تقرير عام جاهز. تصلك النقاط بالبريد الإلكتروني خلال ${REPLY_TIME_AR}.`,
  },
  {
    q: "هل يكلّفني الفحص المجاني شيئًا؟",
    a: "لا يكلّفك شيئًا. دون أي التزام. إذا ناسبك أحد عروضنا ذات السعر الثابت، نخبرك أيّها ولماذا. وإن لم يناسبك أيٌّ منها، نخبرك بذلك أيضًا.",
  },
];
