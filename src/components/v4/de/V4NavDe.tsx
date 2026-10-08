import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LanguageLinks } from "@/components/v4/LanguageLinks";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { CHECK_CREATORS, CHECK_PATH } from "@/lib/check";
import { DE_BOOKING_LABEL, DE_CHECK, DE_CHROME, DE_LANDING, DE_NAV, DE_OPENS_NEW_TAB } from "@/data/de/chrome.de";
import { dePath } from "@/lib/v4Locale";

/**
 * Deutsche V4-Navigation. Gleicher Aufbau wie V4Nav: Der kostenlose Check ist die eine
 * Hauptaktion, das Gespräch die zweite im mobilen Menü. Zwei Seiten haben eine eigene
 * Hauptaktion auf der Seite selbst: /de/creators ("Meine Seite anfragen") und die Seite
 * /de/direktbuchung (Formular auf derselben Seite).
 */
const bookingProps = BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {};
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal";

export function V4NavDe() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  // Der Pfad ist beim Vorrendern und im Browser gleich, also hydrationssicher.
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const creators = path === dePath(CHECK_CREATORS.prefix);
  const landing = path === DE_LANDING.path;

  const check = creators
    ? { to: `#${CHECK_CREATORS.anchor}`, label: DE_CHECK.creatorsLabel, short: DE_CHECK.creatorsShort, anchor: true }
    : landing
      ? { to: `${DE_LANDING.path}#${DE_LANDING.anchor}`, label: DE_CHECK.label, short: DE_CHECK.short, anchor: false }
      : { to: dePath(CHECK_PATH), label: DE_CHECK.label, short: DE_CHECK.short, anchor: false };

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

  return (
    <header className="v4 sticky top-0 z-40 border-b border-v4-ivory/10 bg-v4-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2.5 md:px-10 lg:py-4">
        <Link
          to="/de"
          onClick={closeMenu}
          className={cn("font-v4-sans text-sm font-semibold tracking-tight text-v4-ivory", focusRing)}
        >
          LocalDominate
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label={DE_CHROME.navLabel}>
          {DE_NAV.map((l) => (
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
          <span className="flex items-center gap-3 border-l border-v4-ivory/15 pl-6">
            <LanguageLinks
              variant="short"
              className={cn("font-v4-sans text-xs text-v4-ivory/60 transition-colors hover:text-v4-ivory", focusRing)}
            />
          </span>
          {action(
            "rounded-full bg-v4-signal px-5 py-2 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
            check.label
          )}
        </nav>

        {/* Handy und Tablet: Die Hauptaktion bleibt neben dem Menüknopf sichtbar */}
        <div className="flex items-center gap-4 lg:hidden">
          {action(
            "inline-flex min-h-[44px] items-center rounded-full bg-v4-signal px-4 py-2 font-v4-sans text-xs font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
            check.short
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="v4-mobile-menu-de"
            className={cn("inline-flex min-h-[44px] items-center py-2 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory", focusRing)}
          >
            {menuOpen ? DE_CHROME.menuClose : DE_CHROME.menuOpen}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="v4-mobile-menu-de"
          aria-label={DE_CHROME.navLabel}
          className="flex flex-col gap-1 border-t border-v4-ivory/10 px-6 pb-8 pt-4 lg:hidden"
        >
          {DE_NAV.map((l) => (
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
            {DE_BOOKING_LABEL}
            {BOOKING_IS_EXTERNAL && <span className="sr-only">{DE_OPENS_NEW_TAB}</span>}
          </a>
          <div className="mt-4 flex justify-center gap-8">
            <LanguageLinks
              onNavigate={closeMenu}
              className="inline-flex min-h-[44px] items-center font-v4-sans text-sm text-v4-ivory/70"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
