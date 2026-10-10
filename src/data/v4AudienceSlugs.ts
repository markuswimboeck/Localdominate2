/**
 * Slugs and paths of the audience pages, kept apart from the page copy (v4Audiences.ts) so the
 * router and the hydration setup can import them without loading the copy into the first bundle.
 * Keep in sync with scripts/prerender.mjs (AUDIENCE_SLUGS).
 */
export const AUDIENCE_SLUGS = ["hotels", "holiday-rentals", "trades", "restaurants", "practices", "online-stores"] as const;
export type AudienceId = (typeof AUDIENCE_SLUGS)[number];
export const AUDIENCE_BASE = "/industries";
export const audiencePath = (slug: AudienceId): string => `${AUDIENCE_BASE}/${slug}`;
