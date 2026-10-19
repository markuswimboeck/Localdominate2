import { useLocation } from "react-router-dom";

/**
 * Locale of the V4 pages, taken from the URL path only. The path is the same in the prerendered
 * HTML and in the browser, so everything derived from it is hydration-safe (unlike the browser
 * language used by the older pages).
 *
 * English lives at "/", Arabic at "/ar" (right-to-left). German has its own single page at "/de".
 */
export type V4Locale = "en" | "ar";

export const AR_PREFIX = "/ar";

export const isArabicPath = (pathname: string): boolean =>
  pathname === AR_PREFIX || pathname.startsWith(`${AR_PREFIX}/`);

export const useV4Locale = (): V4Locale => (isArabicPath(useLocation().pathname) ? "ar" : "en");

/** The seven pages that have an Arabic version, keyed by their English path. */
export const AR_PAGES = [
  "/",
  "/services",
  "/work",
  "/approach",
  "/industries",
  "/creators",
  "/start-a-project",
] as const;

export const hasArabicVersion = (enPath: string): boolean =>
  (AR_PAGES as readonly string[]).includes(enPath);

/** "/services" -> "/ar/services", "/" -> "/ar". */
export const arPath = (enPath: string): string => (enPath === "/" ? AR_PREFIX : `${AR_PREFIX}${enPath}`);

/** "/ar/services" -> "/services", "/ar" -> "/". */
export const enPathOf = (pathname: string): string => {
  const rest = pathname.replace(/\/+$/, "").slice(AR_PREFIX.length);
  return rest === "" ? "/" : rest;
};

/** English path -> Arabic path when that page is translated, else the Arabic home page. */
export const arabicEquivalent = (enPath: string): string =>
  hasArabicVersion(enPath) ? arPath(enPath) : AR_PREFIX;
