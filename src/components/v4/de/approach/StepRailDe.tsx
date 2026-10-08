import { Link } from "react-router-dom";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { DE_STEP_NAMES } from "@/data/de/chrome.de";
import { DE_APPROACH } from "@/data/de/approach.de";

/**
 * Deutsche Kopie von StepRail für die Ansatz-Seite (ohne aktiven Schritt). Die Schrittseiten gibt es
 * nur auf Englisch, deshalb zeigen die Links auf die englische URL und tragen die Marke "(EN)".
 */
export function StepRailDe() {
  return (
    <nav aria-label={DE_APPROACH.railLabel} className="v4">
      <div className="mx-auto max-w-[1400px] px-6 pb-3 pt-4 md:px-10 md:pb-6 md:pt-6">
        <ol className="flex">
          {PILLAR_INDEX.map((p, i) => (
            <li key={p.id} className="flex min-w-0 flex-1 items-start">
              <Link
                to={pillarPath(p.id)}
                className="group flex min-h-[3.5rem] w-full flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
              >
                <span className="flex items-center">
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 rounded-full border border-v4-ivory/50 transition-[background-color,border-color] duration-200 group-hover:border-v4-ivory"
                  />
                  {i < PILLAR_INDEX.length - 1 && (
                    <span aria-hidden="true" className="mx-1.5 h-px flex-1 bg-v4-ivory/20 md:mx-2" />
                  )}
                </span>
                <span className="font-v4-mono text-[length:var(--v4-text-label)] leading-none tracking-[0.12em] tabular-nums text-v4-ivory/70 group-hover:text-v4-ivory md:tracking-[0.18em]">
                  {p.n}
                </span>
                <span className="sr-only font-v4-sans text-sm text-v4-ivory/70 group-hover:text-v4-ivory md:not-sr-only">
                  {DE_STEP_NAMES[p.id]}
                  {DE_APPROACH.enMarker}
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p aria-hidden="true" className="mt-3 font-v4-sans text-sm text-v4-ivory/70 md:hidden">
          {DE_APPROACH.railHint}
        </p>
      </div>
    </nav>
  );
}
