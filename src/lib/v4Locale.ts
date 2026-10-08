import { useLocation } from "react-router-dom";

/**
 * Locale of the V4 pages, taken from the URL path only. The path is the same in the prerendered
 * HTML and in the browser, so everything derived from it is hydration-safe (unlike the browser
 * language used by the older pages).
 *
 * English lives at "/", German at "/de", Arabic at "/ar" (right-to-left).
 */
export type V4Locale = "en" | "de" | "ar";

export const AR_PREFIX = "/ar";
export const DE_PREFIX = "/de";

const SITE = "https://localdominate.org";

const PREFIX: Record<V4Locale, string> = { en: "", de: DE_PREFIX, ar: AR_PREFIX };

const hasPrefix = (pathname: string, prefix: string): boolean =>
  pathname === prefix || pathname.startsWith(`${prefix}/`);

export const isArabicPath = (pathname: string): boolean => hasPrefix(pathname, AR_PREFIX);
export const isGermanPath = (pathname: string): boolean => hasPrefix(pathname, DE_PREFIX);

export const localeOfPath = (pathname: string): V4Locale =>
  isArabicPath(pathname) ? "ar" : isGermanPath(pathname) ? "de" : "en";

export const useV4Locale = (): V4Locale => localeOfPath(useLocation().pathname);

/** The seven pages that exist in all three languages, keyed by their English path. */
export const TRANSLATED_PAGES = [
  "/",
  "/services",
  "/work",
  "/approach",
  "/industries",
  "/creators",
  "/start-a-project",
] as const;

/** Kept for the Arabic components. Same list as TRANSLATED_PAGES. */
export const AR_PAGES = TRANSLATED_PAGES;

export const isTranslatedPage = (enPath: string): boolean =>
  (TRANSLATED_PAGES as readonly string[]).includes(enPath);

export const hasArabicVersion = isTranslatedPage;

/** ("de", "/services") -> "/de/services", ("ar", "/") -> "/ar", ("en", "/work") -> "/work". */
export const localePath = (locale: V4Locale, enPath: string): string => {
  const prefix = PREFIX[locale];
  if (!prefix) return enPath;
  return enPath === "/" ? prefix : `${prefix}${enPath}`;
};

/** "/services" -> "/ar/services", "/" -> "/ar". */
export const arPath = (enPath: string): string => localePath("ar", enPath);

/** "/services" -> "/de/services", "/" -> "/de". */
export const dePath = (enPath: string): string => localePath("de", enPath);

/** "/ar/services" -> "/services", "/de" -> "/", "/work/" -> "/work". */
export const enPathOf = (pathname: string): string => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const prefix = PREFIX[localeOfPath(clean)];
  if (!prefix) return clean;
  const rest = clean.slice(prefix.length);
  return rest === "" ? "/" : rest;
};

/**
 * The same page in another language. Pages that are not translated (the step pages, About,
 * Insights, the blog, the German landing page) lead to the home page of that language.
 */
export const equivalentPath = (locale: V4Locale, pathname: string): string => {
  const enPath = enPathOf(pathname);
  return localePath(locale, isTranslatedPage(enPath) ? enPath : "/");
};

/** English path -> Arabic path when that page is translated, else the Arabic home page. */
export const arabicEquivalent = (enPath: string): string => equivalentPath("ar", enPath);

/** Names of the languages in their own language, for the language links. */
export const LOCALE_NAMES: Record<V4Locale, { name: string; short: string; label: string }> = {
  en: { name: "English", short: "EN", label: "Read this page in English" },
  de: { name: "Deutsch", short: "DE", label: "Diese Seite auf Deutsch lesen" },
  ar: { name: "العربية", short: "عربي", label: "قراءة هذه الصفحة بالعربية" },
};

/** The two other languages of the page the visitor is on, in a fixed order (en, de, ar). */
export const otherLocales = (pathname: string): readonly { locale: V4Locale; to: string }[] => {
  const current = localeOfPath(pathname);
  return (["en", "de", "ar"] as const)
    .filter((locale) => locale !== current)
    .map((locale) => ({ locale, to: equivalentPath(locale, pathname) }));
};

/**
 * hreflang set of one of the seven translated pages, for SEOHead's `alternateUrls`.
 * x-default is the English page.
 */
export const alternatesFor = (enPath: string): { en: string; de: string; ar: string; xDefault: string } => {
  const url = (locale: V4Locale) => `${SITE}${localePath(locale, enPath)}`;
  return { en: url("en"), de: url("de"), ar: url("ar"), xDefault: url("en") };
};
