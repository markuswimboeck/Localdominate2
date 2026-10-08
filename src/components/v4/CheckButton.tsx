import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CHECK_LABEL, CHECK_PATH } from "@/lib/check";
import { AR_CHECK } from "@/data/ar/chrome.ar";
import { DE_CHECK } from "@/data/de/chrome.de";
import { localePath, useV4Locale } from "@/lib/v4Locale";

/**
 * The primary action of the V4 pages: "Get a free check", leading to the form. On the German
 * (/de/...) and Arabic (/ar/...) pages the label and the target follow the locale, on the Arabic
 * pages also the arrow direction.
 */
export function CheckButton({
  className,
  label,
  to,
}: {
  className?: string;
  /** Override only where a page has its own form (the German landing page). */
  label?: string;
  to?: string;
}) {
  const locale = useV4Locale();
  const ar = locale === "ar";
  const text = label ?? (ar ? AR_CHECK.label : locale === "de" ? DE_CHECK.label : CHECK_LABEL);
  const target = to ?? localePath(locale, CHECK_PATH);
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
