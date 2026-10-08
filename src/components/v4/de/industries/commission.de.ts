import { parseCommissionField } from "@/components/v4/industries/commission";
import type { CommissionFieldId } from "@/components/v4/industries/commission";
import { CALC_DE } from "@/data/de/industries.de";

/** Zahlenformat der deutschen Seite. Die Rechenlogik kommt unverändert aus der englischen commission.ts. */
const WHOLE = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });

export const formatWholeDe = (value: number): string => WHOLE.format(Math.round(value));
export const formatEuroDe = (value: number): string => `${formatWholeDe(value)} €`;

/** Wie die englische Fassung, aber mit deutscher Meldung. Gültigkeit entscheidet dieselbe Regel. */
export function commissionFieldErrorDe(id: CommissionFieldId, raw: string): string | null {
  if (raw.trim() === "") return null;
  return parseCommissionField(id, raw) === null ? CALC_DE.errors[id] : null;
}

