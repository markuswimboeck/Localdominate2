import { lazy, Suspense, useEffect } from "react";
import { V4Nav } from "@/components/v4/V4Nav";
import { V4Footer } from "@/components/v4/V4Footer";
import { V4NavAr } from "@/components/v4/ar/V4NavAr";
import { V4FooterAr } from "@/components/v4/ar/V4FooterAr";
import { V4NavDe } from "@/components/v4/de/V4NavDe";
import { V4FooterDe } from "@/components/v4/de/V4FooterDe";
import { AfterMount } from "@/components/v4/AfterMount";
import { AR_CHROME } from "@/data/ar/chrome.ar";
import { DE_CHROME } from "@/data/de/chrome.de";
import { useV4Locale } from "@/lib/v4Locale";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

/**
 * Shared frame of the V4 pages: skip link, navigation, main landmark, footer and cookie banner.
 * The locale comes from the URL path (/de/... = German, /ar/... = Arabic, right-to-left), so the
 * prerendered HTML and the first client render always agree.
 */
export function V4Page({ children }: { children: React.ReactNode }) {
  const locale = useV4Locale();
  const ar = locale === "ar";
  const de = locale === "de";
  // The wrapper below carries dir="rtl" already; this also flips the document (scrollbar side,
  // body background edge cases). The language provider sets dir after mount, so this runs a tick
  // later, and it restores the old value when the visitor leaves for an English page.
  useEffect(() => {
    if (!ar) return;
    const root = document.documentElement;
    const previous = root.dir;
    const timer = window.setTimeout(() => {
      root.dir = "rtl";
      root.lang = "ar";
    }, 0);
    return () => {
      window.clearTimeout(timer);
      root.dir = previous || "ltr";
    };
  }, [ar]);
  return (
    <div
      className={ar ? "v4 v4-ar font-v4-sans" : "v4 font-v4-sans"}
      {...(ar ? { dir: "rtl", lang: "ar" } : de ? { lang: "de" } : {})}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        {ar ? AR_CHROME.skipLink : de ? DE_CHROME.skipLink : "Skip to content"}
      </a>
      {ar ? <V4NavAr /> : de ? <V4NavDe /> : <V4Nav />}
      <main id="main-content">{children}</main>
      {ar ? <V4FooterAr /> : de ? <V4FooterDe /> : <V4Footer />}
      <AfterMount>
        <Suspense fallback={null}>
          <CookieBanner variant="v4" forceLanguage={ar ? "ar" : de ? "de" : undefined} />
        </Suspense>
      </AfterMount>
    </div>
  );
}
