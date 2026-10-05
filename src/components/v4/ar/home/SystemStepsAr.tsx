import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { HOME_AR, STEP_AR } from "@/data/ar/home.ar";

/**
 * Arabic copy of SystemSteps: the seven steps as one chain, with the line and the nodes on the
 * right-hand (start) side. The step pages themselves stay English, so each link carries "(EN)".
 */
export function SystemStepsAr() {
  return (
    <ol className="v4-chain relative flex flex-col">
      {PILLAR_INDEX.map((p, i) => {
        const copy = STEP_AR[p.id];
        return (
          <li key={p.id} className="v4-chain-step relative pb-10 ps-12 last:pb-0 md:ps-16">
            {i < PILLAR_INDEX.length - 1 && (
              <span aria-hidden="true" className="absolute bottom-0 start-[9px] top-6 w-px bg-v4-ivory/15 md:start-[11px]" />
            )}
            <span
              aria-hidden="true"
              className="absolute start-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-v4-signal/60 md:h-[23px] md:w-[23px]"
            >
              <span className="v4-chain-node absolute inset-0 rounded-full bg-v4-signal" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-v4-ink" />
            </span>
            <Link
              to={pillarPath(p.id)}
              className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-v4-signal"
            >
              <span className="flex items-baseline gap-4">
                <SystemLabel className="text-v4-signal">{p.n}</SystemLabel>
                <span className="font-v4-sans text-2xl font-semibold text-v4-ivory md:text-3xl">
                  {AR_STEP_NAMES[p.id]}
                  <span className="ms-2 font-v4-sans text-xs font-normal text-v4-ivory/40">(EN)</span>
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block font-v4-sans text-lg text-v4-ivory/40 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-v4-signal"
                >
                  <span data-arrow>→</span>
                </span>
              </span>
              <span className="mt-3 block max-w-xl font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ivory">
                {copy.question}
              </span>
              <span className="mt-4 flex flex-wrap gap-2">
                {copy.parts.map((part) => (
                  <span
                    key={part}
                    className="rounded-full border border-v4-ivory/20 px-3 py-1 font-v4-sans text-xs text-v4-ivory/70"
                  >
                    {part}
                  </span>
                ))}
              </span>
              <span className="mt-4 block max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
                <span className="font-medium text-v4-ivory">{HOME_AR.system.youGet}</span>
                {copy.output}.
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
