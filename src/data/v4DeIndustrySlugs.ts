/**
 * Slugs and paths of the German industry pages (/de/friseur, /de/fitnessstudio), kept apart from
 * the page copy (v4DeIndustries.ts) so the router can import them without loading the copy.
 * Keep in sync with scripts/prerender.mjs (DE_INDUSTRY_SLUGS).
 */
export const DE_INDUSTRY_SLUGS = ["friseur", "fitnessstudio"] as const;
export type DeIndustryId = (typeof DE_INDUSTRY_SLUGS)[number];
export const DE_INDUSTRY_BASE = "/de";
export const deIndustryPath = (slug: DeIndustryId): string => `${DE_INDUSTRY_BASE}/${slug}`;
