import { useState } from "react";
import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import {
  EMPTY_COMMISSION_VALUES,
  NIGHTS_PER_YEAR,
  commissionResult,
  formatEuro,
  formatWhole,
  parseCommissionField,
} from "@/components/v4/industries/commission";
import type { CommissionFieldId, CommissionValues } from "@/components/v4/industries/commission";

/**
 * Arabic copy of CommissionCalculator. The math, the validation rules and the number/currency
 * formatting are imported from commission.ts (not duplicated); only labels, hints and messages are
 * Arabic. Inputs and results are numbers, so they stay dir="ltr". Arabic-Indic digits typed by the
 * visitor are turned into Western digits so that the same rules apply.
 */

type FieldConfig = {
  id: CommissionFieldId;
  label: string;
  placeholder: string;
  unit?: string;
  hint?: string;
  inputMode: "numeric" | "decimal";
  error: string;
};

const FIELDS: readonly FieldConfig[] = [
  {
    id: "units",
    label: "عدد الغرف أو العقارات",
    placeholder: "24",
    inputMode: "numeric",
    error: "أدخل عددًا صحيحًا من 1 فأكثر، أرقامًا فقط.",
  },
  {
    id: "rate",
    label: "متوسط سعر الليلة",
    placeholder: "140",
    unit: "€",
    inputMode: "decimal",
    error: "أدخل مبلغًا أكبر من 0، أرقامًا فقط، مثل 140 أو 139.50.",
  },
  {
    id: "occupancy",
    label: "نسبة الإشغال",
    placeholder: "65",
    unit: "%",
    hint: "الليالي المباعة على مدار السنة كلها. إذا أغلقت في موسم معيّن، فاحسب تلك الليالي فارغة.",
    inputMode: "decimal",
    error: "أدخل نسبة أكبر من 0 وحتى 100.",
  },
  {
    id: "platformShare",
    label: "الحجوزات عبر المنصات",
    placeholder: "50",
    unit: "%",
    hint: "من مجموع حجوزاتك، الجزء الذي يصل عبر منصات الحجز.",
    inputMode: "decimal",
    error: "أدخل نسبة من 0 إلى 100.",
  },
  {
    id: "commission",
    label: "نسبة العمولة",
    placeholder: "15",
    unit: "%",
    hint: "من كشف حساب المنصة، شاملةً أي برامج إضافية تدفع مقابلها.",
    inputMode: "decimal",
    error: "أدخل نسبة أكبر من 0 وحتى 100.",
  },
] as const;

const FORMULA = [
  { name: "ليالي الغرف في السنة", sum: <>عدد الغرف أو العقارات × <span className="ltr-run">{NIGHTS_PER_YEAR}</span> × نسبة الإشغال</> },
  { name: "الإيرادات عبر المنصات", sum: <>ليالي الغرف × سعر الليلة × حصة المنصات</> },
  { name: "العمولة المدفوعة في السنة", sum: <>الإيرادات عبر المنصات × نسبة العمولة</> },
  {
    name: "نقطة مئوية واحدة منقولة إلى الحجز المباشر",
    sum: <>ليالي الغرف × سعر الليلة × <span className="ltr-run">1 %</span> × نسبة العمولة</>,
  },
] as const;

const fieldId = (id: CommissionFieldId) => `calc-${id}`;

const NO_TOUCH: Record<CommissionFieldId, boolean> = {
  units: false,
  rate: false,
  occupancy: false,
  platformShare: false,
  commission: false,
};

const ARABIC_INDIC = "٠١٢٣٤٥٦٧٨٩";
/** Arabic-Indic digits and the Arabic decimal sign become what commission.ts accepts. */
const toWesternDigits = (text: string): string =>
  text.replace(/[٠-٩]/g, (d) => String(ARABIC_INDIC.indexOf(d))).replace(/[٫،]/g, ",");

function ResultRow({ label, value, strong = false }: { label: string; value: string | null; strong?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4",
        strong ? "rounded-xl bg-v4-ink px-4 py-4 text-v4-ivory sm:px-5" : "border-t border-v4-ink/15 px-1 py-3.5"
      )}
    >
      <dt className={cn("font-v4-sans text-sm leading-snug", strong ? "font-medium text-v4-ivory" : "text-v4-ink/70")}>
        {label}
      </dt>
      <dd
        dir="ltr"
        className={cn(
          "shrink-0 text-end font-v4-serif tabular-nums leading-none",
          strong ? "text-[length:var(--v4-text-subhead)]" : "text-2xl"
        )}
      >
        {value ?? (
          <>
            <span aria-hidden="true" className={cn("inline-block h-px w-10 align-middle", strong ? "bg-v4-ivory/40" : "bg-v4-ink/30")} />
            <span className="sr-only">لم تُحسب بعد</span>
          </>
        )}
      </dd>
    </div>
  );
}

export function CommissionCalculatorAr({ id, className }: { id: string; className?: string }) {
  const [values, setValues] = useState<CommissionValues>(EMPTY_COMMISSION_VALUES);
  const [touched, setTouched] = useState(NO_TOUCH);

  const result = commissionResult(values);
  const filled = FIELDS.filter((f) => values[f.id].trim() !== "").length;
  const fieldError = (f: FieldConfig): string | null =>
    values[f.id].trim() === "" ? null : parseCommissionField(f.id, values[f.id]) === null ? f.error : null;
  const hasError = FIELDS.some((f) => fieldError(f) !== null);

  const status = result
    ? "محسوبة من أرقامك الخمسة."
    : hasError
      ? "أحد الحقول يحتوي على قيمة ليست رقمًا صالحًا. صحّحه لتظهر النتيجة."
      : filled === 0
        ? "املأ الحقول الخمسة كلها. تظهر النتيجة هنا."
        : `${filled} من ${FIELDS.length} حقول مملوءة. تظهر النتيجة عندما تكون الحقول الخمسة كلها صالحة.`;

  const announcement = result
    ? `النتيجة: ${formatWhole(result.roomNights)} ليلة غرفة في السنة، ${formatEuro(result.platformRevenue)} إيرادات عبر المنصات، ${formatEuro(result.commissionPaid)} عمولة مدفوعة في السنة.`
    : "";

  const reset = () => {
    setValues(EMPTY_COMMISSION_VALUES);
    setTouched(NO_TOUCH);
  };

  return (
    <div id={id} className={cn("scroll-mt-[114px] lg:scroll-mt-[130px]", className)}>
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SystemLabel as="p" className="mb-6 block leading-relaxed text-v4-ivory/60">
            حاسبة عمولة المنصات · للفنادق والمضيفين
          </SystemLabel>
          <h3
            id={`${id}-title`}
            className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
          >
            كم تكلّفك الحجوزات عبر المنصات في السنة؟
          </h3>
          <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            احسبها بأرقامك أنت. لا شيء يُملأ نيابةً عنك، ولا شيء تكتبه يغادر هذه الصفحة.
          </p>

          <SystemLabel as="p" className="mb-1 mt-10 block text-v4-ivory/60">
            طريقة الحساب
          </SystemLabel>
          <dl>
            {FORMULA.map((line) => (
              <div key={line.name} className="border-b border-v4-ivory/15 py-3.5">
                <dt className="font-v4-sans text-sm font-medium text-v4-ivory">{line.name}</dt>
                <dd className="mt-1 font-v4-sans text-sm leading-relaxed text-v4-ivory/70">= {line.sum}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
            هذه عملية حسابية بأرقامك أنت فقط، وليست توقعًا. وهي تفترض أن كل ليلة تُباع بالسعر المتوسط، ولا
            تشمل ما يكلّفك الحجز المباشر، كرسوم الدفع أو الإعلانات.
          </p>
        </div>

        <form
          aria-labelledby={`${id}-title`}
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="self-start rounded-2xl bg-v4-ivory p-5 text-v4-ink sm:p-8"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6">
            {FIELDS.map((field) => {
              const inputId = fieldId(field.id);
              const error = touched[field.id] ? fieldError(field) : null;
              const describedBy =
                [field.hint ? `${inputId}-hint` : null, error ? `${inputId}-error` : null].filter(Boolean).join(" ") ||
                undefined;
              return (
                <div key={field.id} className={cn("flex flex-col", field.hint ? "col-span-2 sm:col-span-1" : "justify-end")}>
                  <label htmlFor={inputId} className="font-v4-sans text-sm font-medium text-v4-ink">
                    {field.label}
                    {field.unit && (
                      <span className="font-normal text-v4-ink/60">
                        {" "}
                        (<span className="ltr-run">{field.unit}</span>)
                      </span>
                    )}
                  </label>
                  <div dir="ltr" className="relative mt-2">
                    <input
                      id={inputId}
                      name={field.id}
                      type="text"
                      dir="ltr"
                      inputMode={field.inputMode}
                      autoComplete="off"
                      placeholder={field.placeholder}
                      value={values[field.id]}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={describedBy}
                      onChange={(e) => setValues((v) => ({ ...v, [field.id]: toWesternDigits(e.target.value) }))}
                      onBlur={() => setTouched((t) => ({ ...t, [field.id]: true }))}
                      className={cn(
                        "h-12 w-full rounded-lg border bg-v4-white px-4 text-start font-v4-sans text-base tabular-nums text-v4-ink placeholder:text-v4-ink/40",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink",
                        field.unit && "pe-10",
                        error ? "border-v4-coral" : "border-v4-ink/25"
                      )}
                    />
                    {field.unit && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 font-v4-sans text-sm text-v4-ink/60"
                      >
                        {field.unit}
                      </span>
                    )}
                  </div>
                  {field.hint && (
                    <p id={`${inputId}-hint`} className="mt-2 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
                      {field.hint}
                    </p>
                  )}
                  {error && (
                    <p id={`${inputId}-error`} className="mt-2 font-v4-sans text-xs font-medium leading-relaxed text-[#B3261E]">
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="col-span-2 flex items-end sm:col-span-1 sm:justify-end">
              <button
                type="button"
                onClick={reset}
                disabled={filled === 0}
                className="min-h-[44px] font-v4-sans text-sm text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink disabled:text-v4-ink/40 disabled:no-underline"
              >
                مسح كل الحقول
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-v4-ink/15 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <SystemLabel as="p" className="text-v4-ink/60">
                نتيجتك
              </SystemLabel>
              <p className="font-v4-sans text-xs leading-relaxed text-v4-ink/60">{status}</p>
            </div>
            <dl className="mt-4 flex flex-col">
              <ResultRow label="ليالي الغرف في السنة" value={result ? formatWhole(result.roomNights) : null} />
              <ResultRow label="الإيرادات عبر المنصات" value={result ? formatEuro(result.platformRevenue) : null} />
              <ResultRow strong label="العمولة المدفوعة في السنة" value={result ? formatEuro(result.commissionPaid) : null} />
              <ResultRow
                label="ما توفّره عن كل نقطة مئوية من حجوزاتك تنتقل من المنصة إلى الحجز المباشر"
                value={result ? (result.hasPointToMove ? formatEuro(result.keptPerPoint) : "0 €") : null}
              />
            </dl>
            {result && !result.hasPointToMove && (
              <p className="mt-3 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
                حصتك من حجوزات المنصات أقل من نقطة مئوية واحدة، فلا توجد نقطة تُنقل.
              </p>
            )}
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              {announcement}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
