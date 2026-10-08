import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { SERVICES_DE } from "@/data/de/services.de";
import { STEPS_DE } from "@/data/de/shared.de";
import { PILLAR_BASE, PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { dePath } from "@/lib/v4Locale";

/**
 * German copy of services/FullProject. The overview link goes to /de/approach. The seven step
 * pages exist in English only, so each step links there and carries a visible "(EN)" marker.
 * Step names and questions come from shared.de.ts (STEPS_DE).
 */
export function FullProjectDe() {
  const t = SERVICES_DE.full;
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
          to={dePath(PILLAR_BASE)}
          className="mt-6 inline-flex min-h-[44px] items-center font-v4-sans text-sm text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal"
        >
          {t.link} →
        </Link>
      </div>

      <ol className="self-end border-b border-v4-ivory/15">
        {PILLAR_INDEX.map((p) => (
          <li key={p.id} className="border-t border-v4-ivory/15">
            <Link
              to={pillarPath(p.id)}
              hrefLang="en"
              className="group grid min-h-[44px] gap-1 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="flex items-baseline gap-3">
                <SystemLabel className="text-v4-signal">{p.n}</SystemLabel>
                <span className="font-v4-sans text-base font-semibold tracking-tight text-v4-ivory group-hover:underline group-hover:underline-offset-4">
                  {STEPS_DE[p.id].name}
                  <span className="ml-1.5 text-xs font-normal tracking-normal text-v4-ivory/50">{t.englishMarker}</span>
                </span>
              </span>
              <span className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">{STEPS_DE[p.id].question}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
