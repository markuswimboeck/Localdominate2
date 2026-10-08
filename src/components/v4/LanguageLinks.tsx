import { Link, useLocation } from "react-router-dom";
import { LOCALE_NAMES, otherLocales } from "@/lib/v4Locale";

/**
 * Links to the same page in the two other languages (English, German, Arabic). Each link is
 * written in its own language. The targets come from the URL path, so the prerendered HTML and
 * the browser agree.
 */
export function LanguageLinks({
  className,
  variant = "name",
  onNavigate,
}: {
  className?: string;
  /** "short" = EN / DE / عربي for the desktop navigation; "name" = English / Deutsch / العربية. */
  variant?: "short" | "name";
  onNavigate?: () => void;
}) {
  const { pathname } = useLocation();
  return (
    <>
      {otherLocales(pathname).map(({ locale, to }) => (
        <Link
          key={locale}
          to={to}
          lang={locale}
          dir={locale === "ar" ? "rtl" : "ltr"}
          hrefLang={locale}
          aria-label={LOCALE_NAMES[locale].label}
          onClick={onNavigate}
          className={className}
        >
          {variant === "short" ? LOCALE_NAMES[locale].short : LOCALE_NAMES[locale].name}
        </Link>
      ))}
    </>
  );
}
