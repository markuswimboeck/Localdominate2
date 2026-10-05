import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { INDUSTRY_WORLDS_AR } from "@/data/ar/industries.ar";
import { IND_AR } from "@/data/ar/industries.ar";
import type { WorldId } from "@/data/v4Industries";

/**
 * Arabic copy of WorldNav. Same behaviour; the row starts at the right edge and scrolls inside
 * itself (RTL scrollLeft is negative, so the target position is computed from the element's centre).
 * Plain anchors, no state at first render, so the prerendered HTML matches hydration.
 */
export function WorldNavAr() {
  const [active, setActive] = useState<WorldId | null>(null);
  const row = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = INDUSTRY_WORLDS_AR.map((w) => document.getElementById(w.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as WorldId;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? null : current));
        }
      },
      { rootMargin: "-35% 0px -64% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const list = row.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const overflow = list.scrollWidth - list.clientWidth;
    const link = active ? list.querySelector<HTMLElement>(`[data-world="${active}"]`) : null;
    // RTL: scrollLeft runs from -overflow (left end) to 0 (right end, where the row starts).
    const target = link ? link.offsetLeft + link.offsetWidth / 2 - list.clientWidth / 2 - overflow : 0;
    list.scrollTo({ left: Math.min(0, Math.max(-overflow, target)), behavior: "auto" });
  }, [active]);

  return (
    <nav
      aria-label={IND_AR.navLabel}
      className="v4 sticky top-[64px] z-30 border-y border-v4-ivory/10 bg-v4-ink/95 backdrop-blur lg:top-[68px]"
    >
      <ul
        ref={row}
        className="relative mx-auto flex scroll-smooth max-w-[1300px] gap-x-2 overflow-x-auto px-4 [scrollbar-width:none] md:px-8 lg:grid lg:grid-cols-4 lg:gap-x-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {INDUSTRY_WORLDS_AR.map((world) => {
          const isActive = world.id === active;
          return (
            <li key={world.id} className="shrink-0 lg:min-w-0 lg:border-s lg:border-v4-ivory/10 lg:first:border-s-0">
              <a
                href={`#${world.id}`}
                data-world={world.id}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex min-h-[48px] flex-col justify-center whitespace-nowrap px-2 py-2 font-v4-sans lg:whitespace-normal lg:px-5 lg:py-3.5 lg:first:ps-2",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-v4-signal"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200",
                      isActive ? "bg-v4-signal" : "bg-v4-ivory/30 group-hover:bg-v4-ivory"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      isActive ? "text-v4-ivory" : "text-v4-ivory/80 group-hover:text-v4-ivory"
                    )}
                  >
                    {world.navLabel}
                  </span>
                </span>
                <span className="hidden ps-4 pt-1 text-xs leading-snug text-v4-ivory/60 lg:block">{world.navNote}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
