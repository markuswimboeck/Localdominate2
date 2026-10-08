import { useState } from "react";
import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EMPTY_COMMISSION_VALUES, NIGHTS_PER_YEAR, commissionResult } from "@/components/v4/industries/commission";
import { commissionFieldErrorDe, formatEuroDe, formatWholeDe } from "@/components/v4/de/industries/commission.de";
import { CALC_DE } from "@/data/de/industries.de";
import type { CommissionFieldId, CommissionValues } from "@/components/v4/industries/commission";

/**
 * The signature element of /industries: what platform bookings cost a hotel or a host per year,
 * worked out from the visitor's own five numbers. Nothing is prefilled, nothing is sent anywhere,
 * and the formula is printed next to the form so the sum can be checked by hand (and still read
 * without JavaScript).
 *
 * Hydration: the state starts from fixed empty strings, so the prerendered HTML and the first
 * client render are identical. Ids use a fixed prefix (no `useId`).
 */

type FieldConfig = {
  id: CommissionFieldId;
  label: string;
  placeholder: string;
  unit?: string;
  hint?: string;
  inputMode: "numeric" | "decimal";
};

const F = CALC_DE.fields;

const FIELDS: readonly FieldConfig[] = [
  { id: "units", label: F.units.label, placeholder: F.units.placeholder, inputMode: "numeric" },
  { id: "rate", label: F.rate.label, placeholder: F.rate.placeholder, unit: "€", inputMode: "decimal" },
  { id: "occupancy", ...F.occupancy, unit: "%", inputMode: "decimal" },
  { id: "platformShare", ...F.platformShare, unit: "%", inputMode: "decimal" },
  { id: "commission", ...F.commission, unit: "%", inputMode: "decimal" },
];

const FORMULA = [
  { name: CALC_DE.formulaNightsName, sum: CALC_DE.formulaNights(NIGHTS_PER_YEAR) },
  ...CALC_DE.formulaRest,
];

const fieldId = (id: CommissionFieldId) => `calc-${id}`;

const NO_TOUCH: Record<CommissionFieldId, boolean> = {
  units: false,
  rate: false,
  occupancy: false,
  platformShare: false,
  commission: false,
};

function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  /** `null` while the result is not calculated yet. */
  value: string | null;
  strong?: boolean;
}) {
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
        className={cn(
          "shrink-0 text-right font-v4-serif tabular-nums leading-none",
          strong ? "text-[length:var(--v4-text-subhead)]" : "text-2xl"
        )}
      >
        {value ?? (
          <>
            <span aria-hidden="true" className={cn("inline-block h-px w-10 align-middle", strong ? "bg-v4-ivory/40" : "bg-v4-ink/30")} />
            <span className="sr-only">{CALC_DE.notYet}</span>
          </>
        )}
      </dd>
    </div>
  );
}

export function CommissionCalculatorDe({ id, className }: { id: string; className?: string }) {
  const [values, setValues] = useState<CommissionValues>(EMPTY_COMMISSION_VALUES);
  const [touched, setTouched] = useState(NO_TOUCH);

  const result = commissionResult(values);
  const filled = FIELDS.filter((f) => values[f.id].trim() !== "").length;
  const hasError = FIELDS.some((f) => commissionFieldErrorDe(f.id, values[f.id]) !== null);

  const status = result
    ? CALC_DE.status.done
    : hasError
      ? CALC_DE.status.invalid
      : filled === 0
        ? CALC_DE.status.empty
        : CALC_DE.status.partial(filled, FIELDS.length);

  // One short sentence for screen readers, announced when the result appears or changes.
  const announcement = result
    ? CALC_DE.announce(formatWholeDe(result.roomNights), formatEuroDe(result.platformRevenue), formatEuroDe(result.commissionPaid))
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
            {CALC_DE.label}
          </SystemLabel>
          <h3
            id={`${id}-title`}
            className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
          >
            {CALC_DE.title}
          </h3>
          <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {CALC_DE.intro}
          </p>

          <SystemLabel as="p" className="mb-1 mt-10 block text-v4-ivory/60">
            {CALC_DE.howLabel}
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
            {CALC_DE.disclaimer}
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
              const error = touched[field.id] ? commissionFieldErrorDe(field.id, values[field.id]) : null;
              const describedBy =
                [field.hint ? `${inputId}-hint` : null, error ? `${inputId}-error` : null].filter(Boolean).join(" ") ||
                undefined;
              return (
                <div key={field.id} className={cn("flex flex-col", field.hint ? "col-span-2 sm:col-span-1" : "justify-end")}>
                  <label htmlFor={inputId} className="font-v4-sans text-sm font-medium text-v4-ink">
                    {field.label}
                    {field.unit && <span className="font-normal text-v4-ink/60">
                        {" "}
                        {CALC_DE.unitWord} {field.unit}
                      </span>}
                  </label>
                  <div className="relative mt-2">
                    <input
                      id={inputId}
                      name={field.id}
                      type="text"
                      inputMode={field.inputMode}
                      autoComplete="off"
                      placeholder={field.placeholder}
                      value={values[field.id]}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={describedBy}
                      onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, [field.id]: true }))}
                      className={cn(
                        "h-12 w-full rounded-lg border bg-v4-white px-4 font-v4-sans text-base tabular-nums text-v4-ink placeholder:text-v4-ink/40",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink",
                        field.unit && "pr-10",
                        error ? "border-v4-coral" : "border-v4-ink/25"
                      )}
                    />
                    {field.unit && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-v4-sans text-sm text-v4-ink/60"
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
                {CALC_DE.clear}
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-v4-ink/15 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <SystemLabel as="p" className="text-v4-ink/60">
                {CALC_DE.resultLabel}
              </SystemLabel>
              <p className="font-v4-sans text-xs leading-relaxed text-v4-ink/60">{status}</p>
            </div>
            <dl className="mt-4 flex flex-col">
              <ResultRow label={CALC_DE.rows.nights} value={result ? formatWholeDe(result.roomNights) : null} />
              <ResultRow label={CALC_DE.rows.revenue} value={result ? formatEuroDe(result.platformRevenue) : null} />
              <ResultRow
                strong
                label={CALC_DE.rows.commission}
                value={result ? formatEuroDe(result.commissionPaid) : null}
              />
              <ResultRow
                label={CALC_DE.rows.point}
                value={result ? (result.hasPointToMove ? formatEuroDe(result.keptPerPoint) : "0\u00a0€") : null}
              />
            </dl>
            {result && !result.hasPointToMove && (
              <p className="mt-3 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
                {CALC_DE.noPoint}
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
