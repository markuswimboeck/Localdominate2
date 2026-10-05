import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CHECK_LABEL, CHECK_PATH } from "@/lib/check";
import { AR_CHECK } from "@/data/ar/chrome.ar";
import { arPath, useV4Locale } from "@/lib/v4Locale";

/**
 * The primary action of the V4 pages: "Get a free check", leading to the form. On the Arabic pages
 * (/ar/...) the label, the target (/ar/start-a-project) and the arrow direction follow the locale.
 */
export function CheckButton({
  className,
  label,
  to,
}: {
  className?: string;
  /** Override only for another language (the German page). */
  label?: string;
  to?: string;
}) {
  const ar = useV4Locale() === "ar";
  const text = label ?? (ar ? AR_CHECK.label : CHECK_LABEL);
  const target = to ?? (ar ? arPath(CHECK_PATH) : CHECK_PATH);
  return (
    <Link
      to={target}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-v4-signal px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink",
        "transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.97]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        className
      )}
    >
      {text}
      <span aria-hidden="true" {...(ar ? { "data-arrow": "" } : {})}>→</span>
    </Link>
  );
}
