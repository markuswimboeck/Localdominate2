import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { StepRailAr } from "@/components/v4/ar/approach/StepRailAr";
import { PILLAR_BASE, PILLAR_INDEX, pillarById, pillarPath } from "@/data/v4PillarIndex";
import type { PillarId, PillarIndexEntry } from "@/data/v4PillarIndex";
import { PILLAR_COPY_AR } from "@/data/ar/pillars.ar";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { STEP_AR } from "@/data/ar/home.ar";
import { OFFERS_AR, offerNameAr } from "@/data/ar/services.ar";
import { arCases } from "@/data/ar/work.ar";
import type { ArCase } from "@/data/ar/work.ar";
import { arPath } from "@/lib/v4Locale";

const SITE = "https://localdominate.org";

/** Arabic interface text of the step pages (the copy of each step is in pillars.ar.ts). */
const UI = {
  stepOf: (n: string, name: string) => `الخطوة ${n} من 07 · ${name}`,
  inThisStep: "في هذه الخطوة: ",
  allSteps: "كل الخطوات السبع",
  overview: "نظرة عامة",
  overviewNext: "هذه هي بداية التسلسل.",
  overviewLast: "هذه آخر خطوة. اختر أي خطوة أخرى لقراءتها.",
  previous: (n: string) => `الخطوة السابقة · ${n}`,
  next: (n: string) => `الخطوة التالية · ${n}`,
  moveLabel: "التنقل بين الخطوات",
  questionLabel: "السؤال الذي تجيب عنه هذه الخطوة",
  whatHappens: "ما يحدث في هذه الخطوة",
  whatYouGet: "ما تحصل عليه",
  signsTitle: "علامات تدل على أنك تحتاجها",
  signsLead: "إذا بدا لك أحد هذه الأمور مألوفًا، فهذه الخطوة تستحق النظر.",
  casesTitle: "أين تظهر هذه الخطوة في أعمالنا",
  casesEmpty:
    "لا نعرض مشروعًا لهذه الخطوة وحدها بعد. نضيفه حين نستطيع توثيقه.",
  casesAll: "كل المشاريع وكيف نصنّفها",
  offersTitle: "ابدأ من هذه الخطوة",
  offersAll: "النطاق والتفاصيل لكل العروض",
  offersNone:
    "هذه الخطوة جزء من مشاريع أكبر. يُتفق على النطاق والسعر في مكالمة، ويُؤكَّدان كتابةً قبل بدء العمل.",
  faqTitle: "أسئلة حول هذه الخطوة",
  notSure: "لست متأكدًا أي خطوة تحتاج؟",
  notSureBody:
    "أخبرنا بما لا يعمل في مكالمة مدتها 15 دقيقة. تحصل على جواب صادق عن مكان البداية.",
} as const;

const linkClass =
  "font-v4-sans text-sm text-v4-ink/70 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

const caseLabelAr = (c: ArCase): string => (c.kind === c.status ? c.kind : `${c.kind} · ${c.status}`);

function jsonLdFor(p: PillarIndexEntry) {
  const copy = PILLAR_COPY_AR[p.id];
  const url = `${SITE}${arPath(pillarPath(p.id))}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: copy.seoTitle,
        description: copy.seoDescription,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "ar",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/ar` },
          { "@type": "ListItem", position: 2, name: "المنهج", item: `${SITE}${arPath(PILLAR_BASE)}` },
          { "@type": "ListItem", position: 3, name: AR_STEP_NAMES[p.id], item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: copy.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/* ------------------------------------------------------------------------------------------
 * Sketches: the same seven drawings as the English page (same geometry), with Arabic labels.
 * Drawn in plain SVG on a 360 x 270 canvas. The figure is hidden from screen readers; its
 * caption (from pillars.ar.ts) says the same in words. The canvas keeps left-to-right geometry
 * so that the drawings stay identical to the English ones.
 * ------------------------------------------------------------------------------------------ */

const C = {
  frame: "fill-v4-ivory/[0.03] stroke-v4-ivory/15",
  panel: "fill-v4-ivory/[0.07] stroke-v4-ivory/30",
  dashed: "fill-none stroke-v4-ivory/50",
  bar: "fill-v4-ivory/30",
  barSoft: "fill-v4-ivory/15",
  hot: "fill-v4-signal",
  stroke: "fill-none stroke-v4-ivory/45",
  strokeSoft: "fill-none stroke-v4-ivory/20",
  strokeHot: "fill-none stroke-v4-signal",
  label: "fill-v4-ivory/80 font-v4-sans text-[11px]",
  labelSoft: "fill-v4-ivory/60 font-v4-sans text-[11px]",
  labelHot: "fill-v4-signal font-v4-sans text-[11px]",
  labelInk: "fill-v4-ink font-v4-sans text-[11px]",
} as const;

const SKETCH_CSS = `
@keyframes ld-sk-in { from { opacity: 0.25; } to { opacity: 1; } }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .ld-sk { animation: ld-sk-in linear both; animation-timeline: view(); animation-range: entry 5% cover 38%; }
  }
}
`;

const Frame = () => <rect x="0.5" y="0.5" width="359" height="269" rx="16" className={C.frame} />;

const Arrow = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x - 6} ${y - 4} L${x} ${y} L${x - 6} ${y + 4}`} className={C.stroke} />
);

function SketchDiagnose() {
  const widths = [250, 205, 160, 112, 72];
  return (
    <>
      <Frame />
      <text x="24" y="34" className={C.label}>
        النتائج مرتبة حسب الأثر والجهد
      </text>
      <g className="ld-sk">
        {widths.map((w, i) => (
          <g key={w}>
            <text x="24" y={67 + i * 32} className={C.labelSoft}>
              {i + 1}
            </text>
            <rect x="44" y={54 + i * 32} width={w} height="18" rx="3" className={i === 0 ? C.hot : C.bar} />
          </g>
        ))}
      </g>
      <line x1="24" x2="336" y1="216" y2="216" className={C.strokeSoft} />
      <text x="24" y="240" className={C.label}>
        التتبع
      </text>
      <g className="ld-sk">
        {Array.from({ length: 8 }, (_, i) => (
          <rect
            key={i}
            x={100 + i * 28}
            y="228"
            width="16"
            height="16"
            rx="3"
            className={i < 5 ? C.bar : C.dashed}
            strokeDasharray={i < 5 ? undefined : "3 3"}
          />
        ))}
      </g>
      <text x="100" y="260" className={C.labelSoft}>
        مُتتبَّع
      </text>
      <text x="240" y="260" className={C.labelSoft}>
        مفقود
      </text>
    </>
  );
}

function SketchPosition() {
  const rivals: readonly (readonly [number, number])[] = [
    [66, 190],
    [92, 132],
    [150, 200],
    [170, 152],
  ];
  return (
    <>
      <Frame />
      <text transform="rotate(-90 16 135)" x="16" y="135" textAnchor="middle" className={C.labelSoft}>
        الدليل: من ضعيف إلى قابل للتحقق
      </text>
      <rect x="30" y="40" width="184" height="190" rx="6" className={C.strokeSoft} />
      <line x1="122" x2="122" y1="40" y2="230" className={C.strokeSoft} strokeDasharray="3 4" />
      <line x1="30" x2="214" y1="135" y2="135" className={C.strokeSoft} strokeDasharray="3 4" />
      <g className="ld-sk">
        {rivals.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" className={C.stroke} />
        ))}
        <circle cx="178" cy="82" r="18" className={C.strokeHot} strokeOpacity="0.5" />
        <circle cx="178" cy="82" r="10" className={C.hot} />
        <text x="146" y="112" className={C.labelHot}>
          أنت
        </text>
      </g>
      <text x="30" y="252" className={C.labelSoft}>
        العرض: من العام إلى المحدد
      </text>
      <text x="234" y="40" className={C.label}>
        الادعاءات
      </text>
      <g className="ld-sk">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx="244" cy={72 + i * 52} r="9" className={C.strokeHot} />
            <path d={`M239.5 ${72 + i * 52} l3.2 3.4 l6 -6.8`} className={C.strokeHot} strokeWidth="1.5" />
            <rect x="262" y={64 + i * 52} width="70" height="7" rx="2" className={C.bar} />
            <rect x="262" y={76 + i * 52} width="48" height="7" rx="2" className={C.barSoft} />
          </g>
        ))}
      </g>
      <text x="234" y="236" className={C.labelSoft}>
        مع دليل
      </text>
    </>
  );
}

function SketchCreate() {
  const phone = (x: number, withButton: boolean) => (
    <g key={x}>
      <rect x={x} y="44" width="64" height="140" rx="10" className={C.panel} />
      <rect x={x + 10} y="56" width="26" height="5" rx="2" className={C.bar} />
      <rect x={x + 10} y="70" width="44" height="40" rx="4" className={C.barSoft} />
      <rect x={x + 10} y="120" width="44" height="5" rx="2" className={C.bar} />
      <rect x={x + 10} y="131" width="34" height="5" rx="2" className={C.barSoft} />
      <rect x={x + 10} y="156" width="44" height="14" rx="7" className={withButton ? C.hot : C.dashed} />
    </g>
  );
  return (
    <>
      <Frame />
      <text x="26" y="122" className="fill-v4-ivory/90 font-v4-serif text-[84px]">
        Aa
      </text>
      <rect x="26" y="140" width="132" height="7" rx="2" className={C.bar} />
      <rect x="26" y="154" width="96" height="7" rx="2" className={C.barSoft} />
      <g className="ld-sk">
        <rect x="26" y="178" width="26" height="26" rx="5" className="fill-v4-ivory" />
        <rect x="64" y="178" width="26" height="26" rx="5" className="fill-v4-ivory/50" />
        <rect x="102" y="178" width="26" height="26" rx="5" className={C.hot} />
        <rect x="140" y="178" width="26" height="26" rx="5" className={C.dashed} />
      </g>
      <text x="26" y="236" className={C.labelSoft}>
        الخط، الألوان
      </text>
      <g className="ld-sk">
        {phone(188, false)}
        {phone(272, true)}
        <path d="M254 114 H268" className={C.strokeHot} />
        <path d="M262 110 L268 114 L262 118" className={C.strokeHot} />
      </g>
      <text x="196" y="236" className={C.labelSoft}>
        الشاشات والمسار
      </text>
    </>
  );
}

function SketchBuild() {
  const box = (x: number, y: number, w: number, label: string, key: string, hot = false) => (
    <g key={key}>
      <rect x={x} y={y} width={w} height="38" rx="8" className={hot ? C.hot : C.panel} />
      <text x={x + w / 2} y={y + 23} textAnchor="middle" className={hot ? C.labelInk : C.label}>
        {label}
      </text>
    </g>
  );
  return (
    <>
      <Frame />
      <g className="ld-sk">
        {box(20, 107, 64, "الموقع", "site")}
        {box(112, 107, 64, "النموذج", "form", true)}
        <path d="M84 126 H112" className={C.stroke} />
        <Arrow x={112} y={126} />
        {box(236, 48, 108, "جهة اتصال CRM", "crm")}
        {box(236, 107, 108, "تنبيه الفريق", "team")}
        {box(236, 166, 108, "أول رد", "reply")}
        <path d="M176 126 H206 V67 H236" className={C.stroke} />
        <path d="M176 126 H236" className={C.stroke} />
        <path d="M176 126 H206 V185 H236" className={C.stroke} />
        <Arrow x={236} y={67} />
        <Arrow x={236} y={126} />
        <Arrow x={236} y={185} />
      </g>
      <rect x="20" y="222" width="324" height="28" rx="6" className={C.dashed} strokeDasharray="3 3" />
      <text x="32" y="240" className={C.labelSoft}>
        التتبع: حجز، طلب، استفسار
      </text>
    </>
  );
}

function SketchLaunch() {
  const COL = 29;
  const X0 = 104;
  const rows: readonly { name: string; from: number; len: number }[] = [
    { name: "الحملات", from: 1, len: 5 },
    { name: "SEO", from: 0, len: 8 },
    { name: "التواصل", from: 1, len: 7 },
    { name: "PR", from: 3, len: 4 },
  ];
  return (
    <>
      <Frame />
      {Array.from({ length: 8 }, (_, i) => (
        <text key={i} x={X0 + i * COL + COL / 2} y="34" textAnchor="middle" className={C.labelSoft}>
          {i + 1}
        </text>
      ))}
      <text x="20" y="34" className={C.labelSoft}>
        الأسبوع
      </text>
      <g className="ld-sk">
        {rows.map((r, i) => (
          <g key={r.name}>
            <text x="20" y={79 + i * 40} className={C.label}>
              {r.name}
            </text>
            <rect x={X0 + r.from * COL} y={62 + i * 40} width={r.len * COL - 3} height="24" rx="4" className={C.bar} />
          </g>
        ))}
      </g>
      <text x={X0 + 6 * COL + 4} y="100" className={C.labelHot}>
        سقف الميزانية
      </text>
      <line x1={X0 + 6 * COL - 2} x2={X0 + 6 * COL - 2} y1="56" y2="92" className={C.strokeHot} strokeDasharray="3 3" />
      <line x1={X0 + COL - 2} x2={X0 + COL - 2} y1="46" y2="222" className={C.strokeHot} />
      <circle cx={X0 + COL - 2} cy="46" r="4" className={C.hot} />
      <text x={X0 + COL + 4} y="236" className={C.labelHot}>
        الإطلاق
      </text>
      <text x="20" y="256" className={C.labelSoft}>
        القنوات والميزانية والمواعيد
      </text>
    </>
  );
}

function SketchGrow() {
  const stages: readonly { label: string; w: number }[] = [
    { label: "زيارة", w: 300 },
    { label: "صفحة العرض", w: 214 },
    { label: "بدء الحجز", w: 130 },
    { label: "تم الحجز", w: 70 },
  ];
  return (
    <>
      <Frame />
      <g className="ld-sk">
        {stages.map((s, i) => (
          <g key={s.label}>
            <rect x={180 - s.w / 2} y={26 + i * 38} width={s.w} height="30" rx="4" className={i === 2 ? C.hot : C.barSoft} />
            <text x={180 - s.w / 2 + 10} y={45 + i * 38} className={i === 2 ? C.labelInk : C.label}>
              {s.label}
            </text>
          </g>
        ))}
      </g>
      <text x="252" y="141" className={C.labelHot}>
        أكبر فاقد
      </text>
      <path d="M246 134 H238" className={C.strokeHot} />
      <g className="ld-sk">
        <path d="M32 214 A18 18 0 1 1 50 232" className={C.stroke} />
        <path d="M57 227 L50 232 L57 237" className={C.stroke} />
        <text x="82" y="218" className={C.label}>
          الزبائن السابقون يعودون
        </text>
      </g>
    </>
  );
}

function SketchScale() {
  return (
    <>
      <Frame />
      <g className="ld-sk">
        <circle cx="72" cy="120" r="40" className={C.strokeHot} />
        <circle cx="72" cy="120" r="34" className="fill-v4-signal/10" />
        <text x="72" y="124" textAnchor="middle" className={C.labelHot}>
          السوق 1
        </text>
        <text x="72" y="186" textAnchor="middle" className={C.labelSoft}>
          قالب قابل لإعادة الاستخدام
        </text>
        <path d="M112 120 H172 V84 H236" className={C.stroke} />
        <path d="M112 120 H172 V156 H236" className={C.stroke} />
        <Arrow x={236} y={84} />
        <Arrow x={236} y={156} />
        <rect x="236" y="62" width="108" height="44" rx="8" className={C.panel} />
        <text x="290" y="89" textAnchor="middle" className={C.label}>
          السوق 2
        </text>
        <rect x="236" y="134" width="108" height="44" rx="8" className={C.dashed} strokeDasharray="4 3" />
        <text x="290" y="161" textAnchor="middle" className={C.label}>
          تجربة
        </text>
      </g>
      <line x1="236" x2="344" y1="206" y2="206" className={C.strokeHot} strokeDasharray="3 3" />
      <text x="344" y="228" textAnchor="end" className={C.labelHot}>
        قاعدة الإيقاف متفق عليها أولًا
      </text>
    </>
  );
}

const SKETCHES: Record<PillarId, () => React.JSX.Element> = {
  diagnose: SketchDiagnose,
  position: SketchPosition,
  create: SketchCreate,
  build: SketchBuild,
  launch: SketchLaunch,
  grow: SketchGrow,
  scale: SketchScale,
};

function SketchFigure({ id, caption }: { id: PillarId; caption: string }) {
  const Sketch = SKETCHES[id];
  return (
    <figure className="m-0">
      <style>{SKETCH_CSS}</style>
      <svg
        viewBox="0 0 360 270"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full"
        style={{ direction: "ltr" }}
        width="360"
        height="270"
      >
        <Sketch />
      </svg>
      <figcaption className="mt-4 max-w-md font-v4-sans text-sm text-v4-ivory/60">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------------------------ */

/** Previous and next step as two large targets. At the ends, the free tile leads to the overview. */
function StepNav({ prev, next }: { prev?: PillarIndexEntry; next?: PillarIndexEntry }) {
  const tile =
    "group relative flex min-h-[8.5rem] flex-col justify-between gap-6 rounded-2xl border border-v4-ivory/15 p-6 transition-[border-color,background-color] duration-200 hover:border-v4-ivory/40 hover:bg-v4-ivory/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal md:p-8";
  const overviewTile = (
    <Link to={arPath(PILLAR_BASE)} className={tile}>
      <SystemLabel className="text-v4-ivory/60">{UI.overview}</SystemLabel>
      <span>
        <span className="block font-v4-sans text-[length:var(--v4-text-subhead)] font-semibold leading-tight text-v4-ivory">
          {UI.allSteps}
        </span>
      </span>
    </Link>
  );
  return (
    <nav aria-label={UI.moveLabel} className="grid gap-4 md:grid-cols-2">
      {prev ? (
        <Link to={arPath(pillarPath(prev.id))} rel="prev" className={tile}>
          <span className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="font-v4-sans text-xl text-v4-ivory/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-v4-ivory"
            >
              →
            </span>
            <SystemLabel className="text-v4-ivory/60">{UI.previous(prev.n)}</SystemLabel>
          </span>
          <span>
            <span className="block font-v4-sans text-[length:var(--v4-text-subhead)] font-semibold leading-tight text-v4-ivory">
              {AR_STEP_NAMES[prev.id]}
            </span>
            <span className="mt-2 block max-w-[34ch] font-v4-sans text-sm text-v4-ivory/70">
              {STEP_AR[prev.id].question}
            </span>
          </span>
        </Link>
      ) : (
        overviewTile
      )}
      {next ? (
        <Link to={arPath(pillarPath(next.id))} rel="next" className={tile}>
          <span className="flex items-center justify-between gap-4">
            <SystemLabel className="text-v4-signal">{UI.next(next.n)}</SystemLabel>
            <span
              aria-hidden="true"
              className="font-v4-sans text-xl text-v4-signal transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
          </span>
          <span>
            <span className="block font-v4-sans text-[length:var(--v4-text-subhead)] font-semibold leading-tight text-v4-ivory">
              {AR_STEP_NAMES[next.id]}
            </span>
            <span className="mt-2 block max-w-[34ch] font-v4-sans text-sm text-v4-ivory/70">
              {STEP_AR[next.id].question}
            </span>
          </span>
        </Link>
      ) : (
        <Link to={arPath(PILLAR_BASE)} className={tile}>
          <SystemLabel className="text-v4-ivory/60">{UI.overview}</SystemLabel>
          <span>
            <span className="block font-v4-sans text-[length:var(--v4-text-subhead)] font-semibold leading-tight text-v4-ivory">
              {UI.allSteps}
            </span>
            <span className="mt-2 block font-v4-sans text-sm text-v4-ivory/70">{UI.overviewLast}</span>
          </span>
        </Link>
      )}
    </nav>
  );
}

/** One of the seven Arabic step pages (/ar/approach/<step>). The step is taken from the URL. */
export default function PillarAr() {
  const { pathname } = useLocation();
  const id = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  const p = pillarById(id);
  if (!p) return null; // unreachable: routes exist only for the known steps

  const copy = PILLAR_COPY_AR[p.id];
  const i = PILLAR_INDEX.findIndex((x) => x.id === p.id);
  const prev = PILLAR_INDEX[i - 1];
  const next = PILLAR_INDEX[i + 1];
  const cases = arCases().filter((c) => copy.caseNotes.some((n) => n.caseId === c.id));
  const notes = Object.fromEntries(copy.caseNotes.map((n) => [n.caseId, n.note]));
  const offers = OFFERS_AR.filter((o) => copy.offerIds.includes(o.id));
  const pageUrl = `${SITE}${arPath(pillarPath(p.id))}`;

  return (
    <V4Page>
      <SEOHead
        title={copy.seoTitle}
        exactTitle
        description={copy.seoDescription}
        canonicalUrl={pageUrl}
        lang="ar"
        alternateUrls={{ en: `${SITE}${pillarPath(p.id)}`, ar: pageUrl }}
        jsonLd={jsonLdFor(p)}
      />

      <StateField field="dark" as="section" className="relative overflow-hidden" aria-labelledby="step-hero">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 top-6 select-none font-v4-serif text-[clamp(9rem,26vw,22rem)] leading-none text-v4-ivory/[0.06]"
        >
          {p.n}
        </span>
        <div className="relative mx-auto max-w-[1000px] px-6 py-20 md:px-10 md:py-32">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {UI.stepOf(p.n, AR_STEP_NAMES[p.id])}
          </SystemLabel>
          <h1
            id="step-hero"
            className="mt-6 max-w-[22ch] text-balance font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[1.25] text-v4-ivory md:max-w-[26ch]"
          >
            {copy.h1}
          </h1>
          <p className="mt-8 max-w-xl text-pretty font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {copy.lead}
          </p>
          <p className="mt-6 max-w-xl font-v4-sans text-sm text-v4-ivory/60">
            <span className="text-v4-ivory/80">{UI.inThisStep}</span>
            {STEP_AR[p.id].parts.join("، ")}.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
            <Link
              to={arPath(PILLAR_BASE)}
              className="font-v4-sans text-sm text-v4-ivory/70 underline-offset-4 hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              {UI.allSteps}
            </Link>
          </div>
        </div>
      </StateField>

      <StateField field="dark" as="div" className="border-t border-v4-ivory/10">
        <StepRailAr current={p.id} />
      </StateField>

      <StateField field="light" as="section" aria-labelledby="step-question">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {UI.questionLabel}
          </SystemLabel>
          <h2
            id="step-question"
            className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.4] text-v4-ink"
          >
            {STEP_AR[p.id].question}
          </h2>
          <p className="mt-6 max-w-xl text-pretty font-v4-sans text-sm text-v4-ink/70">{copy.place}</p>

          <SystemLabel as="p" className="mb-6 mt-16 block text-v4-ink/60">
            {UI.whatHappens}
          </SystemLabel>
          <ul className="grid gap-x-14 md:grid-cols-2">
            {copy.parts.map((part) => (
              <li key={part.name} className="border-t border-v4-ink/15 py-6">
                <h3 className="font-v4-sans text-xl font-semibold text-v4-ink">{part.name}</h3>
                <p className="mt-3 max-w-[60ch] text-pretty font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                  {part.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="step-output">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <SketchFigure id={p.id} caption={copy.sketchCaption} />
          <div>
            <h2
              id="step-output"
              className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ivory"
            >
              {UI.whatYouGet}
            </h2>
            <ul className="mt-6">
              {copy.deliverables.map((d) => (
                <li key={d.name} className="border-t border-v4-ivory/15 py-5">
                  <SystemLabel as="p" className="text-v4-signal">
                    {d.kind}
                  </SystemLabel>
                  <p className="mt-3 font-v4-sans text-lg font-semibold text-v4-ivory">{d.name}</p>
                  <p className="mt-1 max-w-[52ch] text-pretty font-v4-sans text-sm text-v4-ivory/70">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="step-signs">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2
              id="step-signs"
              className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink"
            >
              {UI.signsTitle}
            </h2>
            <p className="mt-4 max-w-sm font-v4-sans text-sm text-v4-ink/70">{UI.signsLead}</p>
          </div>
          <ul className="flex flex-col">
            {copy.signs.map((item) => (
              <li key={item} className="flex gap-4 border-t border-v4-ink/15 py-5 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink/50" />
                <span className="text-pretty font-v4-sans text-base text-v4-ink/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="step-cases">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <h2 id="step-cases" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
            {UI.casesTitle}
          </h2>
          {cases.length > 0 ? (
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {cases.map((c) => (
                <li key={c.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                  <SystemLabel as="p" className="text-v4-ink/60">
                    {caseLabelAr(c)}
                  </SystemLabel>
                  <p className="mt-3 font-v4-sans text-lg font-semibold text-v4-ink">
                    <span className="ltr-run">{c.name}</span>
                  </p>
                  <p className="mt-3 font-v4-sans text-sm text-v4-ink/80">{notes[c.id]}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-xl font-v4-sans text-sm text-v4-ink/70">{UI.casesEmpty}</p>
          )}
          <Link to={arPath("/work")} className={`mt-8 inline-block ${linkClass}`}>
            {UI.casesAll}
          </Link>

          {offers.length > 0 && (
            <div className="mt-16 border-t border-v4-ink/10 pt-12">
              <h2 className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
                {UI.offersTitle}
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-2">
                {offers.map((o) => (
                  <li key={o.id} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                    <p className="font-v4-sans text-lg font-semibold text-v4-ink">{offerNameAr(o)}</p>
                    <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">{o.summary}</p>
                    <p className="mt-4 font-v4-serif text-2xl text-v4-ink">
                      {o.pricePrefix}
                      <span className="ltr-run">{o.priceFigure}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <Link to={arPath("/services#offers")} className={`mt-8 inline-block ${linkClass}`}>
                {UI.offersAll}
              </Link>
            </div>
          )}
          {offers.length === 0 && (
            <p className="mt-12 max-w-xl border-t border-v4-ink/10 pt-8 font-v4-sans text-sm text-v4-ink/70">
              {UI.offersNone}
            </p>
          )}
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="step-faq">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-20">
          <h2 id="step-faq" className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal text-v4-ink">
            {UI.faqTitle}
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {copy.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-v4-sans text-base font-medium text-v4-ink">{f.q}</h3>
                <p className="mt-2 text-pretty font-v4-sans text-sm text-v4-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
          {copy.related.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-v4-ink/10 pt-8">
              {copy.related.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className={linkClass}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-label={UI.moveLabel}>
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <StepNav prev={prev} next={next} />
        </div>
      </StateField>

      <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-labelledby="step-next">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <p id="step-next" className="max-w-md font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ivory">
            {UI.notSure}
          </p>
          <p className="mt-3 max-w-md font-v4-sans text-sm text-v4-ivory/70">{UI.notSureBody}</p>
          <div className="mt-8">
            <span className="flex flex-wrap items-center gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </span>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
