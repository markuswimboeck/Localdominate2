import { Link, useLocation } from "react-router-dom";
import { SystemLabel } from "../SystemLabel";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { AR_CHECK, AR_CHROME, AR_FOOTER, AR_STEP_NAMES } from "@/data/ar/chrome.ar";
import { arPath, enPathOf } from "@/lib/v4Locale";
import { CHECK_PATH } from "@/lib/check";

/**
 * Arabic V4 footer. Links to the translated pages go to /ar/...; links to pages that exist only in
 * English or German are marked (EN) / (DE) so nobody is surprised by the language. The legal pages
 * stay German/English because they are legal texts of the operator.
 */
const EXPLORE_SAUDI_URL = "https://explore-saudi.com";

const linkClass =
  "font-v4-sans text-sm text-v4-ivory/70 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

type FooterLink = { to: string; label: string; marker?: string };

function LinkGroup({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      <SystemLabel as="p" className="text-v4-ivory/50">
        {title}
      </SystemLabel>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className={linkClass}>
              {l.label}
              {l.marker ? <span lang="en" dir="ltr" className="text-v4-ivory/40">{l.marker}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function V4CookieSettingsButtonAr() {
  const reopen = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };
  return (
    <button
      type="button"
      onClick={reopen}
      className="font-v4-sans text-xs text-v4-ivory/60 underline-offset-4 transition-colors hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
    >
      {AR_FOOTER.cookieSettings}
    </button>
  );
}

export function V4FooterAr() {
  const { pathname } = useLocation();
  const steps: FooterLink[] = PILLAR_INDEX.map((p) => ({
    to: pillarPath(p.id),
    label: `${p.n} ${AR_STEP_NAMES[p.id] ?? p.name}`,
    marker: AR_FOOTER.englishMarker,
  }));
  const explore: FooterLink[] = [
    ...AR_FOOTER.explore,
    ...AR_FOOTER.exploreEnglish.map((l) => ({ ...l, marker: AR_FOOTER.englishMarker })),
  ];
  const industries: FooterLink[] = AR_FOOTER.industries.map((l) => ({ ...l, marker: AR_FOOTER.germanMarker }));
  const legal: FooterLink[] = AR_FOOTER.legal.map((l) => ({ ...l, marker: l.to === "/impressum" || l.to === "/datenschutz" || l.to === "/agb" ? AR_FOOTER.germanMarker : undefined }));

  return (
    <footer className="v4 border-t border-v4-ivory/10 bg-v4-ink text-v4-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3 lg:grid-cols-5 md:px-10">
        <div className="flex flex-col gap-3">
          <Link to="/ar" lang="en" dir="ltr" className="self-start font-v4-sans text-base font-semibold text-v4-ivory">
            LocalDominate
          </Link>
          <p className="max-w-xs font-v4-sans text-sm text-v4-ivory/60">{AR_FOOTER.tagline}</p>
          <Link to={arPath(CHECK_PATH)} className={`${linkClass} text-v4-signal hover:text-v4-signal`}>
            {AR_CHECK.label} <span data-arrow aria-hidden="true">→</span>
          </Link>
          <a href="mailto:info@localdominate.org" className={`${linkClass} ltr-run self-start`}>
            info@localdominate.org
          </a>
          <address className="mt-2 max-w-xs font-v4-sans text-xs not-italic leading-relaxed text-v4-ivory/60">
            {AR_FOOTER.address}
          </address>
          <p className="max-w-xs font-v4-sans text-xs leading-relaxed text-v4-ivory/60">
            <a
              href={EXPLORE_SAUDI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              <span lang="en" dir="ltr">Explore Saudi</span>
              <span className="sr-only">{AR_FOOTER.exploreSaudiOpensNewTab}</span>
            </a>{" "}
            {AR_FOOTER.exploreSaudiBefore}{" "}
            <Link
              to="/ar/work"
              className="underline underline-offset-4 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal"
            >
              {AR_FOOTER.exploreSaudiLink}
            </Link>
            .
          </p>
        </div>
        <LinkGroup title={AR_FOOTER.groups.explore} links={explore} />
        <LinkGroup title={AR_FOOTER.groups.steps} links={steps} />
        <LinkGroup title={AR_FOOTER.groups.industries} links={industries} />
        <LinkGroup title={AR_FOOTER.groups.legal} links={legal} />
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-v4-ivory/10 px-6 py-6 md:px-10">
        <p className="font-v4-sans text-xs text-v4-ivory/50">
          © {new Date().getFullYear()} <span lang="en" dir="ltr">LocalDominate</span>
        </p>
        <div className="flex items-center gap-6">
          <Link
            to={enPathOf(pathname)}
            lang="en"
            dir="ltr"
            hrefLang="en"
            aria-label={AR_CHROME.switchToEnglishLabel}
            className="font-v4-sans text-xs text-v4-ivory/60 underline-offset-4 hover:text-v4-ivory hover:underline"
          >
            {AR_CHROME.switchToEnglish}
          </Link>
          <V4CookieSettingsButtonAr />
        </div>
      </div>
    </footer>
  );
}
