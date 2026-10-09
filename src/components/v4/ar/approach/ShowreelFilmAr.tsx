import { VideoPlayerAr } from "./VideoPlayerAr";
import poster from "@/assets/v4/showreel-poster.webp";
import posterSmall from "@/assets/v4/showreel-poster-640.webp";
import video720 from "@/assets/v4/showreel-720.mp4";
import video480 from "@/assets/v4/showreel-480.mp4";
import { AR_APPROACH } from "@/data/ar/approach.ar";

/** Arabic copy of ShowreelFilm: the same silent 20-second film, Arabic accessible name. */
export function ShowreelFilmAr({ className }: { className?: string }) {
  return (
    <VideoPlayerAr
      className={className}
      poster={poster}
      posterSmall={posterSmall}
      title={AR_APPROACH.showreelTitle}
      playLabel={AR_APPROACH.playVideo}
      sources={[{ src: video480, media: "(max-width: 640px)" }, { src: video720 }]}
    />
  );
}
