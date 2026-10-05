import { cn } from "@/lib/utils";
import { CREATOR_ANCHORS } from "@/data/v4Creators";
import { HERO_AR } from "@/data/ar/creators.ar";

type Tone = "signal" | "outline";

/** Arabic copy of AnchorButton: the arrow sits in data-arrow so the CSS mirrors it. */
export function AnchorButtonAr({
  href,
  tone = "signal",
  arrow = tone === "signal",
  className,
  onClick,
  children,
}: {
  href: string;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-v4-sans text-sm font-medium sm:px-7",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        tone === "signal" &&
          "bg-v4-signal text-v4-ink transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.97]",
        tone === "outline" &&
          "border border-v4-ivory/30 text-v4-ivory/90 transition-[opacity,border-color] hover:border-v4-ivory/60",
        className
      )}
    >
      {children}
      {arrow && (
        <span aria-hidden="true" data-arrow="">
          →
        </span>
      )}
    </a>
  );
}

export function GetPageButtonAr({ className, label = HERO_AR.primary }: { className?: string; label?: string }) {
  return (
    <AnchorButtonAr href={`#${CREATOR_ANCHORS.form}`} className={className}>
      {label}
    </AnchorButtonAr>
  );
}
