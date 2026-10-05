import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { SERVICES_AR, STEP_QUESTION_AR } from "@/data/ar/services.ar";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { arPath } from "@/lib/v4Locale";

/**
 * Arabic copy of services/FullProject. The seven step pages exist in English only, so each step
 * links there and carries a small "(EN)" marker; the overview link goes to /ar/approach.
 */
export function FullProjectAr() {
  const t = SERVICES_AR.full;
  return (
    <div className="grid gap-10 rounded-2xl bg-v4-ink p-7 text-v4-ivory md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
          {t.label}
        </SystemLabel>
        <h2
          id="services-full-project"
          className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory"
        >
          {t.h2}
        </h2>
        <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
          {t.p}
        </p>
        <Link
          to={arPath("/approach")}
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-v4-sans text-sm text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
        >
          {t.link}
          <span data-arrow aria-hidden="true">→</span>
        </Link>
      </div>

      <ol className="self-end border-b border-v4-ivory/15">
        {PILLAR_INDEX.map((p) => (
          <li key={p.id} className="border-t border-v4-ivory/15">
            <Link
              to={pillarPath(p.id)}
              className="group grid min-h-[44px] gap-1 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="flex items-baseline gap-3">
                <SystemLabel className="text-v4-signal">{p.n}</SystemLabel>
                <span className="font-v4-sans text-base font-semibold text-v4-ivory group-hover:underline group-hover:underline-offset-4">
                  {AR_STEP_NAMES[p.id]}
                  <span lang="en" className="ms-1.5 text-xs font-normal text-v4-ivory/50">
                    (EN)
                  </span>
                </span>
              </span>
              <span className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{STEP_QUESTION_AR[p.id]}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
