import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { CHECK_CREATORS, CHECK_PATH } from "@/lib/check";
import { AR_BOOKING_LABEL, AR_CHECK, AR_CHROME, AR_NAV } from "@/data/ar/chrome.ar";
import { arPath, enPathOf } from "@/lib/v4Locale";

/**
 * Arabic V4 navigation (right-to-left). Same structure as V4Nav: the free check is the one
 * primary action, "book a call" is the second one in the mobile menu. The language link leads to
 * the English version of the page the visitor is on. Written with logical utilities (ms-, me-,
 * text-start) so the layout follows the document direction.
 */
const bookingProps = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal";

export function V4NavAr() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { pathname } = useLocation();
  const creators = pathname.replace(/\/+$/, "") === arPath(CHECK_CREATORS.prefix);
  const englishHref = enPathOf(pathname);

  const check = creators
    ? { to: `#${CHECK_CREATORS.anchor}`, label: AR_CHECK.creatorsLabel, short: AR_CHECK.creatorsShort, anchor: true }
    : { to: arPath(CHECK_PATH), label: AR_CHECK.label, short: AR_CHECK.short, anchor: false };

  const action = (className: string, children: string) =>
    check.anchor ? (
      <a href={check.to} onClick={closeMenu} className={className}>
        {children}
      </a>
    ) : (
      <Link to={check.to} onClick={closeMenu} className={className}>
        {children}
      </Link>
    );

  const languageLink = (className: string) => (
    <Link
      to={englishHref}
      lang="en"
      dir="ltr"
      hrefLang="en"
      aria-label={AR_CHROME.switchToEnglishLabel}
      onClick={closeMenu}
      className={className}
    >
      {AR_CHROME.switchToEnglish}
    </Link>
  );

  return (
    <header className="v4 sticky top-0 z-40 border-b border-v4-ivory/10 bg-v4-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2.5 md:px-10 lg:py-4">
        <Link
          to="/ar"
          lang="en"
          dir="ltr"
          onClick={closeMenu}
          className={cn("font-v4-sans text-sm font-semibold text-v4-ivory", focusRing)}
        >
          LocalDominate
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label={AR_CHROME.navLabel}>
          {AR_NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-v4-sans text-sm transition-colors hover:text-v4-ivory",
                  isActive ? "text-v4-ivory" : "text-v4-ivory/70",
                  focusRing
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          {languageLink(cn("font-v4-sans text-sm text-v4-ivory/70 transition-colors hover:text-v4-ivory", focusRing))}
          {action(
            "rounded-full bg-v4-signal px-5 py-2 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
            check.label
          )}
        </nav>

        {/* Mobile and tablet: the primary action stays visible next to the menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          {action(
            "inline-flex min-h-[44px] items-center rounded-full bg-v4-signal px-4 py-2 font-v4-sans text-xs font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
            check.short
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="v4-mobile-menu-ar"
            className={cn("inline-flex min-h-[44px] items-center py-2 font-v4-sans text-sm text-v4-ivory", focusRing)}
          >
            {menuOpen ? AR_CHROME.menuClose : AR_CHROME.menuOpen}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="v4-mobile-menu-ar"
          aria-label={AR_CHROME.navLabel}
          className="flex flex-col gap-1 border-t border-v4-ivory/10 px-6 pb-8 pt-4 lg:hidden"
        >
          {AR_NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  "border-b border-v4-ivory/10 py-4 font-v4-serif text-2xl",
                  isActive ? "text-v4-signal" : "text-v4-ivory"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          {action(
            "mt-6 rounded-full bg-v4-signal px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ink",
            check.label
          )}
          <a
            href={BOOKING_URL}
            {...bookingProps}
            onClick={closeMenu}
            className="mt-2 rounded-full border border-v4-ivory/30 px-5 py-3 text-center font-v4-sans text-sm font-medium text-v4-ivory/90"
          >
            {AR_BOOKING_LABEL}
          </a>
          {languageLink("mt-4 py-3 text-center font-v4-sans text-sm text-v4-ivory/70")}
        </nav>
      )}
    </header>
  );
}
