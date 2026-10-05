import { useState } from "react";
import { cn } from "@/lib/utils";
import { AR_WORK } from "@/data/ar/work.ar";
import poster from "@/assets/v4/dadication-hero-poster.webp";
import posterSmall from "@/assets/v4/dadication-hero-poster-640.webp";
import video720 from "@/assets/v4/dadication-hero-720.mp4";
import video480 from "@/assets/v4/dadication-hero-480.mp4";

/**
 * Arabic copy of VideoPlayer + DadicationFilm (the English one has an English accessible name).
 * Click-to-play, poster only until the click. The play button is centred with left-1/2 and a
 * translate on purpose: it must not flip, and a video's play triangle keeps pointing right.
 */
export function DadicationFilmAr({ className, priority }: { className?: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const title = AR_WORK.film.title;
  return (
    <div
      dir="ltr"
      className={cn("relative overflow-hidden rounded-2xl bg-v4-ink", className)}
      style={{ aspectRatio: "1280 / 720" }}
    >
      {playing ? (
        <video
          className="h-full w-full object-cover"
          poster={poster}
          controls
          autoPlay
          muted
          playsInline
          preload="none"
          aria-label={title}
        >
          <source src={video480} media="(max-width: 640px)" type="video/mp4" />
          <source src={video720} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${AR_WORK.film.play}${title}`}
          className="group absolute inset-0 block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-v4-signal"
        >
          <img
            src={poster}
            srcSet={`${posterSmall} 640w, ${poster} 1280w`}
            sizes="(max-width: 1023px) 640px, 60vw"
            alt=""
            width={1280}
            height={720}
            loading={priority ? "eager" : "lazy"}
            {...{ fetchpriority: priority ? "high" : "auto" }}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-v4-ink/20 transition-colors group-hover:bg-v4-ink/30" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-v4-signal text-v4-ink md:h-20 md:w-20"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 md:h-7 md:w-7" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
