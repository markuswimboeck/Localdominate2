import { useState } from "react";
import { cn } from "@/lib/utils";
import poster from "@/assets/v4/dadication-hero-poster.webp";
import posterSmall from "@/assets/v4/dadication-hero-poster-640.webp";
import video720 from "@/assets/v4/dadication-hero-720.mp4";
import video480 from "@/assets/v4/dadication-hero-480.mp4";
import showPoster from "@/assets/v4/showreel-poster.webp";
import showPosterSmall from "@/assets/v4/showreel-poster-640.webp";
import showVideo720 from "@/assets/v4/showreel-720.mp4";
import showVideo480 from "@/assets/v4/showreel-480.mp4";

type Source = { src: string; media?: string };

/** Arabic copy of VideoPlayer: same behaviour, Arabic accessible names; the play button is centred and the triangle keeps pointing right (media convention). */
function VideoPlayerAr({
  poster,
  posterSmall,
  sources,
  title,
  className,
}: {
  poster: string;
  posterSmall?: string;
  sources: readonly Source[];
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-v4-ink", className)} style={{ aspectRatio: "1280 / 720" }}>
      {playing ? (
        <video className="h-full w-full object-cover" poster={poster} controls autoPlay muted playsInline preload="none" aria-label={title} dir="ltr">
          {sources.map((s) => (
            <source key={s.src} src={s.src} media={s.media} type="video/mp4" />
          ))}
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`تشغيل الفيديو: ${title}`}
          className="group absolute inset-0 block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-v4-signal"
        >
          <img
            src={poster}
            srcSet={posterSmall ? `${posterSmall} 640w, ${poster} 1280w` : undefined}
            sizes={posterSmall ? "(max-width: 1023px) 640px, 60vw" : undefined}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-v4-ink/20 transition-colors group-hover:bg-v4-ink/30" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-v4-signal text-v4-ink md:h-20 md:w-20"
          >
            <svg viewBox="0 0 24 24" className="ms-1 h-6 w-6 md:h-7 md:w-7" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export function DadicationFilmAr({ title }: { title: string }) {
  return (
    <VideoPlayerAr
      poster={poster}
      posterSmall={posterSmall}
      title={title}
      sources={[{ src: video480, media: "(max-width: 640px)" }, { src: video720 }]}
    />
  );
}

export function ShowreelFilmAr({ title }: { title: string }) {
  return (
    <VideoPlayerAr
      poster={showPoster}
      posterSmall={showPosterSmall}
      title={title}
      sources={[{ src: showVideo480, media: "(max-width: 640px)" }, { src: showVideo720 }]}
    />
  );
}
