import { SystemLabel } from "@/components/v4/SystemLabel";
import type { WorldVisualKind } from "@/data/v4Industries";
import { WORLD_AR } from "@/data/ar/industries.ar";

import hospitality from "@/assets/v4/industries/ld-industries-hospitality-16-10-1600.webp";
import hospitalitySmall from "@/assets/v4/industries/ld-industries-hospitality-16-10-800.webp";
import rentals from "@/assets/v4/industries/ld-industries-holiday-rentals-16-10-1600.webp";
import rentalsSmall from "@/assets/v4/industries/ld-industries-holiday-rentals-16-10-800.webp";
import trades from "@/assets/v4/industries/ld-industries-trades-16-10-1600.webp";
import tradesSmall from "@/assets/v4/industries/ld-industries-trades-16-10-800.webp";
import premium from "@/assets/v4/industries/ld-industries-premium-services-16-10-1600.webp";
import premiumSmall from "@/assets/v4/industries/ld-industries-premium-services-16-10-800.webp";

/** Arabic copy of WorldVisual: same images, Arabic alt text and captions, mirrored schematic. */

function Photo({ src, srcSmall, alt }: { src: string; srcSmall: string; alt: string }) {
  return (
    <figure>
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-v4-ink/5">
        <img
          src={srcSmall}
          srcSet={`${srcSmall} 800w, ${src} 1600w`}
          sizes="(max-width: 1023px) 92vw, 440px"
          alt={alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 font-v4-sans text-xs text-v4-ink/60">{WORLD_AR.illustrationCaption}</figcaption>
    </figure>
  );
}

const PROFILE_FIELDS = [
  { field: "الاسم", against: "كما هو في فاتورتك وعلى سيارتك" },
  { field: "الفئة", against: "المهنة التي تريد أن يُعثر عليك بها" },
  { field: "منطقة الخدمة", against: "الأماكن التي تصل إليها فعلًا" },
  { field: "مواعيد العمل", against: "شاملةً ساعات الطوارئ، إن كنت تقدّمها" },
  { field: "الهاتف", against: "الرقم الذي يُجاب عليه" },
  { field: "الخدمات", against: "بند واحد لكل نوع من الأعمال" },
  { field: "الصور", against: "أعمالك المنجزة أنت" },
] as const;

function ProfileFields() {
  return (
    <figure className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5 sm:p-6">
      <div aria-hidden="true" className="flex items-center gap-4 border-b border-v4-ink/10 pb-5">
        <svg viewBox="0 0 32 40" className="h-10 w-8 shrink-0" fill="none">
          <path
            d="M16 38.5C16 38.5 30.5 25.2 30.5 15.5C30.5 7.5 24 1.5 16 1.5C8 1.5 1.5 7.5 1.5 15.5C1.5 25.2 16 38.5 16 38.5Z"
            className="stroke-v4-ink"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="15.5" r="5" className="fill-v4-signal stroke-v4-ink" strokeWidth="1.5" />
        </svg>
        <span className="flex flex-1 flex-col gap-2">
          <span className="h-2.5 w-3/5 rounded-full bg-v4-ink/80" />
          <span className="h-2 w-2/5 rounded-full bg-v4-ink/20" />
        </span>
      </div>
      <dl>
        {PROFILE_FIELDS.map((row) => (
          <div key={row.field} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-3 border-b border-v4-ink/10 py-2.5 last:border-b-0 last:pb-0">
            <dt>
              <SystemLabel className="text-v4-ink/60">{row.field}</SystemLabel>
            </dt>
            <dd className="font-v4-sans text-sm leading-snug text-v4-ink">{row.against}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="sr-only">
        مخطط توضيحي للملف التجاري على Google: الحقول السبعة التي نراجعها وما يُقارَن به كل حقل.
      </figcaption>
    </figure>
  );
}

/** Mirrored copy of the English schematic: locations on the right, the shared standard on the left. */
const LOCATION_Y = [34, 110, 186] as const;
const STANDARD_FIELDS = ["الاسم", "العنوان", "الهاتف", "مواعيد العمل", "الفئات"] as const;

function Locations() {
  return (
    <figure className="rounded-2xl border border-v4-ink/10 bg-v4-white p-5 sm:p-6">
      <svg
        viewBox="0 0 300 220"
        role="img"
        aria-label="مخطط توضيحي: ثلاثة فروع، يرتبط كل منها بمعيار موحّد واحد للاسم والعنوان والهاتف ومواعيد العمل والفئات."
        className="block h-auto w-full"
        fill="none"
      >
        {LOCATION_Y.map((y, i) => (
          <g key={y}>
            <path d={`M 188 ${y} C 160 ${y}, 164 110, 136 110`} className="stroke-v4-ink/30" strokeWidth="1.25" />
            <circle cx="292" cy={y} r="6.5" className="fill-v4-white stroke-v4-ink" strokeWidth="1.5" />
            <circle cx="292" cy={y} r="2" className="fill-v4-ink" />
            <text x="276" y={y + 4} textAnchor="start" className="fill-v4-ink font-v4-sans text-[12px]">
              {`الفرع ${i + 1}`}
            </text>
          </g>
        ))}
        <rect x="1" y="14" width="129" height="192" rx="14" className="fill-v4-ivory stroke-v4-ink/20" strokeWidth="1" />
        <circle cx="132" cy="110" r="6.5" className="fill-v4-signal stroke-v4-ink" strokeWidth="1.5" />
        <text x="114" y="44" textAnchor="start" className="fill-v4-ink/60 font-v4-sans text-[12px]">
          معيار موحّد
        </text>
        {STANDARD_FIELDS.map((field, i) => (
          <g key={field}>
            <line x1="15" x2="114" y1={58 + i * 29} y2={58 + i * 29} className="stroke-v4-ink/15" strokeWidth="1" />
            <text x="114" y={78 + i * 29} textAnchor="start" className="fill-v4-ink font-v4-sans text-[13px]">
              {field}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-5 border-t border-v4-ink/10 pt-4 font-v4-sans text-sm leading-snug text-v4-ink/70">
        لكل فرع صفحته وملفه الخاص. أما البيانات التي يجب أن تتطابق فتأتي من مصدر واحد.
      </figcaption>
    </figure>
  );
}

export function WorldVisualAr({ kind }: { kind: WorldVisualKind }) {
  switch (kind) {
    case "hotel-photo":
      return (
        <Photo
          src={hospitality}
          srcSmall={hospitalitySmall}
          alt="رسم توضيحي: مبنى فندق خشبي بشرفات وتراس فوق بحيرة جبلية عند الغروب"
        />
      );
    case "lake-photo":
      return (
        <Photo
          src={rentals}
          srcSmall={rentalsSmall}
          alt="رسم توضيحي: غرفة معيشة في شقة عطلات بنافذة كبيرة تطل على بحيرة جبلية عند الغروب"
        />
      );
    case "profile-fields":
      return (
        <div className="flex flex-col gap-6">
          <Photo
            src={trades}
            srcSmall={tradesSmall}
            alt="رسم توضيحي: ورشة نجارة بأدوات يدوية على طاولة عمل ونافذة تطل على تلال خضراء"
          />
          <ProfileFields />
        </div>
      );
    case "locations":
      return (
        <div className="flex flex-col gap-6">
          <Photo
            src={premium}
            srcSmall={premiumSmall}
            alt="رسم توضيحي: مكتب هادئ بطاولة أمام نافذة من الأرض إلى السقف تطل على تلال خضراء عند الغروب"
          />
          <Locations />
        </div>
      );
  }
}
