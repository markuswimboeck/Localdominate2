import { audiencePath } from "@/data/v4AudienceSlugs";
import type { AudienceId } from "@/data/v4AudienceSlugs";

/** The audience pages as a short list for /industries and other link blocks (name and one note). */
const NAV: readonly { slug: AudienceId; name: string; note: string }[] = [
  { slug: "hotels", name: "Hotels and guesthouses", note: "Owner-run, 10 to 60 rooms" },
  { slug: "holiday-rentals", name: "Holiday rentals", note: "Hosts with several properties" },
  { slug: "trades", name: "Trades", note: "Heating, electrical, roofing, solar" },
  { slug: "restaurants", name: "Restaurants and cafés", note: "Menu, hours, reservations" },
  { slug: "practices", name: "Practices and firms", note: "Medical, dental, law and tax" },
  { slug: "online-stores", name: "Online stores", note: "Shopify and small e-commerce brands" },
];

export const AUDIENCE_PAGES = NAV.map((n) => ({ ...n, path: audiencePath(n.slug) }));
