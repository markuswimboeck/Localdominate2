import { Link } from "react-router-dom";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { LanguageLinks } from "@/components/v4/LanguageLinks";
import { PILLAR_INDEX, pillarPath } from "@/data/v4PillarIndex";
import { DE_CHECK, DE_FOOTER, DE_OPENS_NEW_TAB, DE_STEP_NAMES } from "@/data/de/chrome.de";
import { dePath } from "@/lib/v4Locale";
import { CHECK_PATH } from "@/lib/check";

/**
 * Deutsche V4-Fußzeile. Links auf übersetzte Seiten führen nach /de/..., Seiten, die es nur auf
 * Englisch gibt, sind mit (EN) markiert. Impressum, Datenschutz und AGB sind auf jeder Seite
 * erreichbar.
 */
const EXPLORE_SAUDI_URL = "https://explore-saudi.com";

const linkClass =
  "font-v4-sans text-sm text-v4-ivory/70 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";
const inlineLink =
  "underline underline-offset-4 transition-colors hover:text-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

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
            <Link to={l.to} className={linkClass} {...(l.marker ? { hrefLang: "en" } : {})}>
              {l.label}
              {l.marker ? <span className="text-v4-ivory/40">{l.marker}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function V4CookieSettingsButtonDe() {
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
      {DE_FOOTER.cookieSettings}
    </button>
  );
}

export function V4FooterDe() {
  const steps: FooterLink[] = PILLAR_INDEX.map((p) => ({
    to: pillarPath(p.id),
    label: `${p.n} ${DE_STEP_NAMES[p.id]}`,
    marker: DE_FOOTER.englishMarker,
  }));
  const explore: FooterLink[] = [
    ...DE_FOOTER.explore,
    ...DE_FOOTER.exploreEnglish.map((l) => ({ ...l, marker: DE_FOOTER.englishMarker })),
  ];

  return (
    <footer className="v4 border-t border-v4-ivory/10 bg-v4-ink text-v4-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3 lg:grid-cols-5 md:px-10">
        <div className="flex flex-col gap-3">
          <Link to="/de" className="self-start font-v4-sans text-base font-semibold tracking-tight text-v4-ivory">
            LocalDominate
          </Link>
          <p className="max-w-xs font-v4-sans text-sm text-v4-ivory/60">{DE_FOOTER.tagline}</p>
          <Link to={dePath(CHECK_PATH)} className={`${linkClass} text-v4-signal hover:text-v4-signal`}>
            {DE_CHECK.label} →
          </Link>
          <a href="mailto:info@localdominate.org" className={linkClass}>
            info@localdominate.org
          </a>
          <address className="mt-2 max-w-xs font-v4-sans text-xs not-italic leading-relaxed text-v4-ivory/60">
            {DE_FOOTER.address}
          </address>
          <p className="max-w-xs font-v4-sans text-xs leading-relaxed text-v4-ivory/60">
            <a href={EXPLORE_SAUDI_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
              Explore Saudi<span className="sr-only">{DE_OPENS_NEW_TAB}</span>
            </a>{" "}
            {DE_FOOTER.exploreSaudiAfter}{" "}
            <Link to="/de/work" className={inlineLink}>
              {DE_FOOTER.exploreSaudiLink}
            </Link>
            .
          </p>
        </div>
        <LinkGroup title={DE_FOOTER.groups.explore} links={explore} />
        <LinkGroup title={DE_FOOTER.groups.steps} links={steps} />
        <LinkGroup title={DE_FOOTER.groups.industries} links={DE_FOOTER.industries} />
        <LinkGroup title={DE_FOOTER.groups.legal} links={DE_FOOTER.legal} />
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-v4-ivory/10 px-6 py-6 md:px-10">
        <p className="font-v4-sans text-xs text-v4-ivory/50">© {new Date().getFullYear()} LocalDominate</p>
        <div className="flex flex-wrap items-center gap-6">
          <LanguageLinks className="font-v4-sans text-xs text-v4-ivory/60 underline-offset-4 transition-colors hover:text-v4-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal" />
          <V4CookieSettingsButtonDe />
        </div>
      </div>
    </footer>
  );
}
