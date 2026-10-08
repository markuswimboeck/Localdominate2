import { VideoPlayerDe } from "./VideoPlayerDe";
import poster from "@/assets/v4/showreel-poster.webp";
import posterSmall from "@/assets/v4/showreel-poster-640.webp";
import video720 from "@/assets/v4/showreel-720.mp4";
import video480 from "@/assets/v4/showreel-480.mp4";
import { DE_APPROACH } from "@/data/de/approach.de";

/** Deutsche Kopie von ShowreelFilm: derselbe stumme 20-Sekunden-Film, deutscher Name. */
export function ShowreelFilmDe({ className }: { className?: string }) {
  return (
    <VideoPlayerDe
      className={className}
      poster={poster}
      posterSmall={posterSmall}
      title={DE_APPROACH.showreelTitle}
      playLabel={DE_APPROACH.playVideo}
      sources={[{ src: video480, media: "(max-width: 640px)" }, { src: video720 }]}
    />
  );
}
