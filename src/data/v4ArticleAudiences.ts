/**
 * Which industry page (/industries/<slug>) an article in the V4 layout points readers to.
 * Only articles written for one kind of business are mapped; general articles (reviews, NAP, profile
 * basics) are not, so no article links to more than two industry pages.
 *
 * Kept apart from v4Audiences.ts so the article bundle does not load the industry page copy.
 * When an industry page lists a new specific article (v4Audiences.ts `articles`), add it here too.
 */
import { audiencePath, type AudienceId } from "@/data/v4AudienceSlugs";

/** German labels for the article pages; the industry pages themselves are in English. */
const AUDIENCE_LABEL_DE: Record<AudienceId, string> = {
  hotels: "Hotels und Pensionen",
  "holiday-rentals": "Ferienwohnungen und Ferienhäuser",
  trades: "Handwerksbetriebe",
  restaurants: "Restaurants, Cafés und Bäckereien",
  practices: "Praxen, Kanzleien und Steuerberater",
  "online-stores": "Onlineshops",
  "hair-salons": "Friseur- und Kosmetiksalons",
  "fitness-studios": "Fitnessstudios und Personal Trainer",
};

const ARTICLE_AUDIENCES: Readonly<Record<string, readonly AudienceId[]>> = {
  "local-seo-hotels": ["hotels", "holiday-rentals"],
  "ki-aufgaben-hotel-rezeption": ["hotels"],
  "seo-ferienwohnungen": ["holiday-rentals"],
  "local-seo-handwerker": ["trades"],
  "local-seo-autowerkstatt": ["trades"],
  "local-seo-fuer-restaurants": ["restaurants"],
  "local-seo-doener-kebab-imbiss": ["restaurants"],
  "local-seo-case-study-baecker": ["restaurants"],
  "local-seo-aerzte-praxen": ["practices"],
  "local-seo-anwaelte-kanzleien": ["practices"],
  "local-seo-steuerberater": ["practices"],
  "local-seo-tierarzt": ["practices"],
  "local-seo-friseursalon-beauty": ["hair-salons"],
  "local-seo-kosmetikstudio": ["hair-salons"],
  "local-seo-fitness": ["fitness-studios"],
  "local-seo-yoga-studios": ["fitness-studios"],
};

export type ArticleAudienceLink = { id: AudienceId; path: string; label: string };

export const audiencesForArticle = (slug: string): ArticleAudienceLink[] =>
  (ARTICLE_AUDIENCES[slug] ?? []).map((id) => ({ id, path: audiencePath(id), label: AUDIENCE_LABEL_DE[id] }));
