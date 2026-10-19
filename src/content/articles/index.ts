import type { V4Article } from "./types";

/**
 * The migrated articles, found by file name. Nothing is loaded here: each entry is a loader, so
 * the article text only travels with its own page.
 */
const MODULES = import.meta.glob<{ default: V4Article }>("./data/*.ts");

const slugOf = (file: string): string => file.replace("./data/", "").replace(/\.ts$/, "");

export const V4_ARTICLE_LOADERS: Record<string, () => Promise<V4Article>> = Object.fromEntries(
  Object.entries(MODULES).map(([file, load]) => [slugOf(file), async () => (await load()).default]),
);

/** Slugs of all articles that already use the V4 layout. */
export const V4_ARTICLE_SLUGS: readonly string[] = Object.keys(V4_ARTICLE_LOADERS).sort();

export const v4ArticlePath = (slug: string): string => `/blog/${slug}`;
