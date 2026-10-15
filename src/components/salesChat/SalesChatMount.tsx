import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Entry point of the sales chat. This file is the only part in the main bundle; the widget itself
 * (SalesChat.tsx) is a separate chunk, loaded on the visitor's first interaction or after a few idle
 * seconds, so it costs nothing on first paint (same idea as the GA4 loader in index.html).
 *
 * On/off: VITE_SALES_CHAT=on in the Vercel environment. For testing while it is off, open any page
 * with ?saleschat=1 (kept for the browser session); ?saleschat=0 switches it off again.
 *
 * Never shown to automated browsers (navigator.webdriver): the build-time prerender
 * (scripts/prerender.mjs) scrolls every page, which would otherwise load the widget and bake it into
 * the static HTML, breaking hydration and the SEO baseline. ?saleschat=1 still works for tests.
 */
const SalesChat = lazy(() => import("./SalesChat"));

const ENABLED = (import.meta.env.VITE_SALES_CHAT as string | undefined)?.trim() === "on";
const HIDDEN_ON = /^\/(admin|analytics|ab-test|ab-test-zentrale|design-system|preview|onboarding|danke)(\/|$)/;

function forcedBySession(): boolean | null {
  try {
    const flag = new URLSearchParams(window.location.search).get("saleschat");
    if (flag === "1") sessionStorage.setItem("ld-saleschat-force", "1");
    if (flag === "0") sessionStorage.removeItem("ld-saleschat-force");
    return sessionStorage.getItem("ld-saleschat-force") === "1" ? true : null;
  } catch {
    return null;
  }
}

export default function SalesChatMount() {
  const { pathname } = useLocation();
  const [enabled] = useState(() => {
    const forced = forcedBySession() === true;
    if (forced) return true;
    return ENABLED && !navigator.webdriver;
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled || ready) return;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const go = () => {
      setReady(true);
      events.forEach((e) => window.removeEventListener(e, go));
      window.clearTimeout(timer);
    };
    const timer = window.setTimeout(go, 5000);
    events.forEach((e) => window.addEventListener(e, go, { once: true, passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, go));
      window.clearTimeout(timer);
    };
  }, [enabled, ready]);

  if (!enabled || !ready || HIDDEN_ON.test(pathname)) return null;
  return (
    <Suspense fallback={null}>
      <SalesChat pathname={pathname} />
    </Suspense>
  );
}
