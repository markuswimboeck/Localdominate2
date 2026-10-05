import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BROWSER_SHELL, BrowserBar } from "@/components/v4/creators/DeviceFrames";
import { AnchorButtonAr, GetPageButtonAr } from "@/components/v4/ar/creators/AnchorButtonAr";
import { Rich } from "@/components/v4/ar/creators/Rich";
import { CREATOR_ANCHORS, DEMO } from "@/data/v4Creators";
import { DEMO_AR, HERO_AR, HERO_PRICES_AR } from "@/data/ar/creators.ar";

/**
 * HERO (Arabic). Same structure as the English one, mirrored: the claim on the right, the figure on
 * the left, the phone in front of the browser window on the figure's start (right) side.
 */
export function CreatorsHeroAr() {
  const { desktopPreview, phonePortrait } = DEMO;
  return (
    <StateField field="dark" as="section" aria-labelledby="creators-hero" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1300px] gap-y-9 px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-[1fr_1fr] lg:gap-x-14 lg:gap-y-8">
        <div className="flex min-w-0 flex-col gap-6 md:gap-7 lg:self-end">
          <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
            {HERO_AR.label}
          </SystemLabel>
          <h1
            id="creators-hero"
            className="font-v4-sans text-[length:clamp(min(2.25rem,9.4vw),1.1rem+2.5vw,3.6rem)] font-bold text-v4-ivory"
          >
            <span className="block text-balance">{HERO_AR.titleLines[0]}</span>{" "}
            <span className="block text-balance">{HERO_AR.titleLines[1]}</span>
          </h1>
          <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">{HERO_AR.text}</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <GetPageButtonAr />
            <AnchorButtonAr href={`#${CREATOR_ANCHORS.demo}`} tone="outline">
              {HERO_AR.secondary}
            </AnchorButtonAr>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[560px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-v4-ivory/10 blur-3xl"
          />
          <div className="relative pb-[34%] ps-[30%] pt-[6%] lg:pb-[16%] lg:ps-[22%] lg:pt-0">
            <div className={BROWSER_SHELL} dir="ltr">
              <BrowserBar address={DEMO.address} />
              <img
                src={desktopPreview.src}
                srcSet={`${desktopPreview.small} 800w, ${desktopPreview.src} 1600w`}
                sizes="(min-width: 1024px) 480px, 70vw"
                width={desktopPreview.width}
                height={desktopPreview.height}
                alt={DEMO_AR.desktopAlt}
                decoding="async"
                {...{ fetchpriority: "high" }}
                className="block aspect-[16/10] w-full bg-v4-ivory object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 start-0 w-[44%] rotate-[3deg] rounded-[1.4rem] border border-v4-ivory/25 bg-[#1A1A18] p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ring-1 ring-inset ring-white/10 sm:rounded-[1.9rem] sm:p-2 lg:w-[26%] lg:rotate-[4deg] lg:rounded-[1.6rem]">
              <img
                src={phonePortrait.src}
                srcSet={`${phonePortrait.small} 390w, ${phonePortrait.src} 780w`}
                sizes="(min-width: 1024px) 170px, 44vw"
                width={phonePortrait.width}
                height={phonePortrait.height}
                alt={DEMO_AR.phonePortraitAlt}
                decoding="async"
                {...{ fetchpriority: "high" }}
                className="block aspect-[1/2] w-full rounded-[1.05rem] bg-v4-ivory object-cover object-top sm:rounded-[1.45rem] lg:rounded-[1.15rem]"
              />
            </div>
          </div>
          <figcaption className="relative mt-5 text-center font-v4-sans text-sm text-v4-ivory/60 lg:ps-[22%]">
            {HERO_AR.caption}
          </figcaption>
        </figure>

        <div className="flex min-w-0 flex-col gap-6 md:gap-7 lg:col-start-1 lg:row-start-2 lg:self-start">
          <ul
            aria-label={HERO_AR.pricesLabel}
            className="grid max-w-2xl border-y border-v4-ivory/15 min-[360px]:grid-cols-[1.25fr_1fr_1.15fr] sm:grid-cols-[1.5fr_0.9fr_1fr]"
          >
            {HERO_PRICES_AR.map((price, i) => (
              <li
                key={price.figure}
                className="border-t border-v4-ivory/15 first:border-t-0 min-[360px]:border-s min-[360px]:border-t-0 min-[360px]:first:border-s-0"
              >
                <a
                  href={`#${CREATOR_ANCHORS.prices}`}
                  className={cn(
                    "group flex h-full min-h-[48px] flex-col gap-1 py-3 pe-2 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-v4-signal sm:px-5 sm:py-4",
                    i > 0 && "min-[360px]:ps-3"
                  )}
                >
                  <span className="font-v4-sans text-base font-semibold text-v4-ivory sm:text-xl">
                    <Rich text={price.figure} />
                  </span>
                  <span className="font-v4-sans text-xs leading-snug text-v4-ivory/80 group-hover:text-v4-ivory sm:text-sm">
                    <Rich text={price.note} />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {HERO_AR.terms.map((term) => (
              <li key={term} className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StateField>
  );
}
