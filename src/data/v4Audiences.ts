/**
 * Audience pages /industries/<slug>: one page per kind of business, so each search intent
 * ("website for a hotel", "Google profile for a trade business") has its own URL.
 *
 * Rules (Project Bible V4, Hard Rule 06 "Truth first"):
 * - No client results, rankings, ratings or market statistics. Situations are described in plain
 *   words; money questions are shown as a calculation with the owner's own numbers.
 * - Offers are referenced by id only; name, price and delivery come from `v4Offers.ts`.
 * - Where a page matches a world on /industries, checks, builds, offers and the first step are read
 *   from `v4Industries.ts`, so the two pages can never disagree.
 * - FAQ answers only use promises already published on the site (v4Faq.ts, v4HowWeWork.ts).
 * - Linked articles must be V4 articles (src/content/articles/data). They are German; the page says so.
 */

import { CHECK_REPLY_TIME } from "@/lib/check";
import type { PillarId } from "@/data/v4PillarIndex";
import type { Faq } from "@/data/v4Faq";
import type { WorldCheck, WorldId, WorldOfferRef } from "@/data/v4Industries";

import type { AudienceId } from "@/data/v4AudienceSlugs";

export type { AudienceId };
export { AUDIENCE_SLUGS, AUDIENCE_BASE, audiencePath } from "@/data/v4AudienceSlugs";

type AudienceOwnContent = {
  claim: string;
  situation: string;
  checks: readonly WorldCheck[];
  builds: readonly string[];
  buildNote?: string;
  offers: readonly WorldOfferRef[];
  step: { id: PillarId; why: string };
  checkLine: string;
};

export type Audience = {
  slug: AudienceId;
  /** Short name used in lists and breadcrumbs. */
  name: string;
  /** Who exactly is meant (mono label). */
  descriptor: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  /** Two or three sentences: what LocalDominate does for this kind of business. */
  lead: string;
  /** Answer-first summary for search and AI assistants, 40 to 70 words. */
  inShort: string;
  /** Questions owners of this kind of business ask themselves. */
  signs: readonly string[];
  /** Reuse the matching world on /industries, or bring own content. */
  source: { world: WorldId } | { own: AudienceOwnContent };
  /** Show the commission calculator (hotels, holiday rentals). */
  calculator?: boolean;
  /** A real, published project that fits (id from v4Cases.ts), with what it shows here. */
  caseRef?: { id: string; note: string };
  /** German V4 articles for this audience. */
  articles: readonly { slug: string; title: string }[];
  faq: readonly Faq[];
};

const NO_PROMISE: Faq = {
  q: "Do you promise rankings or bookings?",
  a: "No. We do not promise positions or revenue. You get a written list of what we changed and why.",
};

const OWNERSHIP: Faq = {
  q: "Who owns the website and the Google profile?",
  a: "You do. The website and the Google profile are yours. Ongoing care can be cancelled monthly.",
};

const FREE_CHECK: Faq = {
  q: "What does the free check include?",
  a: `A person looks at your Google profile or your website the way a new customer would. You get up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}. No obligation.`,
};

export const AUDIENCES: readonly Audience[] = [
  {
    slug: "hotels",
    name: "Hotels and guesthouses",
    descriptor: "Owner-run · 10 to 60 rooms · DACH",
    seoTitle: "Hotel Websites & Google Visibility for Direct Bookings",
    seoDescription:
      "For owner-run hotels and guesthouses: a direct-booking website, a complete Google hotel profile and tracking that separates direct from platform bookings.",
    h1: "Hotel websites and Google visibility that bring direct bookings.",
    lead: "For owner-run hotels and guesthouses with 10 to 60 rooms. We check what a guest sees on Google and on your website, then build the path from the first search to a booking on your own page.",
    inShort:
      "LocalDominate builds direct-booking websites and Google hotel profiles for owner-run hotels and guesthouses in Germany, Austria and Switzerland. The work starts with a free check of your profile or website, continues with a fixed-price offer such as Website in 5 Days or the 72h Conversion Sprint, and ends with tracking that shows which bookings came direct.",
    signs: [
      "Guests search your hotel by name and still book through a platform.",
      "Your booking page works on a laptop but takes too many taps on a phone.",
      "You cannot tell how many bookings came through your own website last month.",
      "Your Google profile shows old photos or a rate link that is not yours.",
    ],
    source: { world: "hospitality" },
    calculator: true,
    articles: [
      { slug: "local-seo-hotels", title: "Local SEO für Hotels: mehr Direktbuchungen über Google" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
      { slug: "local-seo-trends-oesterreich", title: "Local SEO in Österreich 2026" },
    ],
    faq: [
      {
        q: "Which offer is a sensible start for a hotel?",
        a: "For a hotel without a website that can take a booking: Website in 5 Days, with scope and content agreed on a call before the week starts. For a booking page that gets visits but too few bookings: the 72h Conversion Sprint.",
        link: { to: "/services", text: "See scope and prices" },
      },
      {
        q: "Do I have to replace my booking engine?",
        a: "No. We connect the website to the booking engine you use and check whether dates, rates and the final price match what the platforms show.",
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "holiday-rentals",
    name: "Holiday rentals",
    descriptor: "Hosts with several properties · small property managers",
    seoTitle: "Direct Booking Websites for Holiday Rentals",
    seoDescription:
      "For hosts with several holiday rentals and small property managers: one booking website for all properties, connected to your calendar, plus a kit for returning guests.",
    h1: "One direct-booking website for all your holiday rentals.",
    lead: "For hosts with several properties and small property managers. Returning guests and recommendations should be able to book with you, not only through a platform. We build the page that makes that possible.",
    inShort:
      "LocalDominate builds direct-booking websites for hosts with several holiday rentals and for small property managers in Germany, Austria and Switzerland. One site shows every property, connects to the calendar you already use where your system allows it, and gives returning guests a direct way to book. Single holiday homes do not qualify for a Google Business Profile; a rental business with an office can.",
    signs: [
      "Guests who already stayed with you book again through the platform.",
      "Each property is described differently on each platform.",
      "You keep several calendars in sync by hand.",
      "There is no page you could send a returning guest to.",
    ],
    source: { world: "holiday-rentals" },
    calculator: true,
    articles: [
      { slug: "local-seo-hotels", title: "Local SEO für Hotels und Ferienbetriebe" },
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Firmendaten überall gleich" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "local-seo-schweiz", title: "Local SEO in der Schweiz" },
    ],
    faq: [
      {
        q: "Can a single holiday home have a Google Business Profile?",
        a: "Google's guidelines exclude single holiday homes from Business Profiles. A rental business with an office can qualify. We check this before any profile work.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "Website in 5 Days for the direct-booking site of your properties. If you already have a booking page that is visited but rarely used, the 72h Conversion Sprint.",
        link: { to: "/services", text: "See scope and prices" },
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "trades",
    name: "Trades",
    descriptor: "Plumbing and heating · electrical · roofing · solar",
    seoTitle: "Google Profile & Websites for Trade Businesses",
    seoDescription:
      "For plumbing, heating, electrical, roofing and solar businesses: a correct Google profile with service area, one page per high-value job and enquiries that arrive complete.",
    h1: "Google profiles and websites for trade businesses that get looked up before the call.",
    lead: "For plumbing and heating, electrical, roofing and solar businesses. Recommended customers still check you on Google first. We make sure what they find is correct, recent and leads to a complete enquiry.",
    inShort:
      "LocalDominate sets up Google Business Profiles and websites for trade businesses in Germany, Austria and Switzerland: a profile with the right category and service area, one page per high-value job such as heat pump or bathroom, an enquiry form that asks for what a quote needs, and a routine for reviews after the job. The usual start is the Google Profile Quick-Fix.",
    signs: [
      "Customers say they found you, but your profile still shows old hours.",
      "Your website has one page called “Services” for everything you do.",
      "Enquiries arrive without the place, the job or photos, so you call back first.",
      "The last review is months old and nobody answered it.",
    ],
    source: { world: "trades" },
    articles: [
      { slug: "local-seo-handwerker", title: "Local SEO für Handwerker" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
      { slug: "google-maps-ranking-verbessern", title: "Google-Maps-Ranking verbessern" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen" },
    ],
    faq: [
      {
        q: "We have no shop. Can we still appear on Google Maps?",
        a: "Yes. A business that visits customers can hide its address and set a service area in the Google Business Profile. Virtual offices are not allowed.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "The Google Profile Quick-Fix corrects the fields that matter for local search. For the page that should turn a visit into an enquiry, the 72h Conversion Sprint.",
        link: { to: "/services", text: "See scope and prices" },
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants and cafés",
    descriptor: "Restaurants · cafés · bars",
    seoTitle: "Restaurant Websites & Google Profiles That Fill Tables",
    seoDescription:
      "For restaurants, cafés and bars: a Google profile with menu, hours and reservation link, a mobile website with the menu as text and a simple routine for reviews.",
    h1: "Restaurant websites and Google profiles that guests can decide on.",
    lead: "For restaurants, cafés and bars. Guests choose on their phone, often shortly before they go. We make sure the menu, the hours, the photos and the way to reserve are correct where they look.",
    inShort:
      "LocalDominate sets up Google Business Profiles and mobile websites for restaurants, cafés and bars in Germany, Austria and Switzerland. The profile gets the right category, correct hours including rest days and holidays, menu and reservation links and real photos; the website shows the menu as text instead of a PDF. The usual start is the Google Profile Quick-Fix.",
    signs: [
      "Your menu exists only as a PDF or a photo.",
      "Google showed you as open on a day you were closed.",
      "Guests ask by phone what the reservation link should answer.",
      "Reviews mention dishes you no longer serve, and nobody replies.",
    ],
    source: {
      own: {
        claim: "Guests decide on the menu, the photos and the hours.",
        situation:
          "Most guests choose a restaurant on their phone: the photos, the menu, the opening hours and the reviews on Google, then a call or a reservation. A menu that is only a PDF, hours that are wrong on a holiday, or a reservation link that leads nowhere send them to the next place on the map.",
        checks: [
          {
            where: "On Google",
            text: "Category, opening hours including rest days and holidays, menu link, reservation or order link, and whether the photos show what you serve today.",
          },
          {
            where: "In the reviews",
            text: "How recent they are, what guests mention, and whether anyone answers them.",
          },
          {
            where: "On your website",
            text: "Whether the menu is readable text on a phone, and whether hours and address match the profile.",
          },
          {
            where: "At the reservation",
            text: "How a table is booked: by phone only, by a tool, or by form, and what the guest hears back.",
          },
        ],
        builds: [
          "A complete Google Business Profile with menu, reservation and order links",
          "A mobile website with the menu as text, kept in one place you can update",
          "A clear reservation path, connected to the tool you already use",
          "A simple routine for asking guests for a review and answering every one",
        ],
        buildNote:
          "Allergen information is a legal duty for food businesses. We build the place for it on the website; the content and its legal check stay with you.",
        offers: [
          {
            offerId: "google-profile",
            why: "The profile is where guests decide. The Quick-Fix corrects the fields that matter, from category to hours and links.",
          },
          {
            offerId: "conversion-sprint",
            why: "For the website that gets visits but too few reservations. One page is audited and five fixes go live once you approve them.",
          },
        ],
        step: {
          id: "launch",
          why: "The restaurant and the kitchen are there. What is missing is being found correctly at the moment guests choose where to eat.",
        },
        checkLine: "Send the link to your Google profile or your website.",
      },
    },
    articles: [
      { slug: "local-seo-fuer-restaurants", title: "Local SEO für Restaurants" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Firmendaten überall gleich" },
    ],
    faq: [
      {
        q: "Why should the menu not be a PDF?",
        a: "A PDF is hard to read on a phone and its content is harder for search engines and AI assistants to use. A menu as text on the page can be read, searched and updated in one place.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "The Google Profile Quick-Fix corrects the fields that matter for local search. For a website that gets visits but too few reservations, the 72h Conversion Sprint.",
        link: { to: "/services", text: "See scope and prices" },
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "practices",
    name: "Practices and firms",
    descriptor: "Medical and dental practices · law and tax firms",
    seoTitle: "Websites & Google Profiles for Practices and Law Firms",
    seoDescription:
      "For medical and dental practices, law and tax firms: correct Google profiles per location, pages for people and fields of work, and wording that respects professional rules.",
    h1: "Websites and Google profiles for practices, law firms and tax advisers.",
    lead: "For medical and dental practices, law firms and tax advisers. People compare before they make contact. We make sure what they compare is correct, specific and written within the rules of your profession.",
    inShort:
      "LocalDominate builds websites and Google Business Profiles for medical and dental practices, law firms and tax advisers in Germany, Austria and Switzerland: one correct profile per location, pages for people and fields of work, and an enquiry workflow. Health, legal and tax professions have their own advertising rules, so we make no outcome claims and you clear the wording with your chamber.",
    signs: [
      "Each location shows different hours or a different name on Google.",
      "Your website lists fields of work but says little about the people.",
      "You are unsure how to answer a review without breaking confidentiality.",
      "Enquiries arrive by email and nobody knows who answers them.",
    ],
    source: { world: "premium-services" },
    articles: [
      { slug: "local-seo-aerzte-praxen", title: "Local SEO für Arztpraxen" },
      { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Kanzleien" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen" },
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz: Firmendaten überall gleich" },
    ],
    faq: [
      {
        q: "Do you make outcome claims for medical, legal and tax practices?",
        a: "No. Health, legal and tax professions have their own advertising rules. We leave out any claim about outcomes and ask you to clear the wording with your chamber or adviser where needed.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "The Google Profile Quick-Fix for one profile; for several locations the scope is confirmed on the call. For incoming enquiries, the AI Automation Starter builds one workflow you approve first.",
        link: { to: "/services", text: "See scope and prices" },
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "online-stores",
    name: "Online stores",
    descriptor: "Shopify stores · small e-commerce brands",
    seoTitle: "Shopify Stores That Turn Visits into Orders",
    seoDescription:
      "For small online stores and Shopify brands: product pages, cart and checkout checked on a phone, tracking that shows which channel brought an order, and a store built to launch.",
    h1: "Shopify stores and online shops that turn paid visits into orders.",
    lead: "For small online stores and new e-commerce brands. Most visits are paid for. Whether they become orders is decided on a few pages, on a phone. We check those pages first and build what is missing.",
    inShort:
      "LocalDominate builds and improves Shopify stores for small e-commerce brands: brand and product positioning, product and collection pages, cart and checkout on mobile, and tracking that records purchases per channel. For a store that already gets traffic but too few orders, the usual start is the 72h Conversion Sprint, with one page audited and five fixes implemented.",
    signs: [
      "Ads bring visitors, but the orders do not follow.",
      "Shipping costs and delivery times appear only at the checkout.",
      "You cannot say which channel brought last week's orders.",
      "The store looks fine on a laptop and crowded on a phone.",
    ],
    source: {
      own: {
        claim: "Traffic is paid for. Orders are not guaranteed.",
        situation:
          "A small online store pays for most of its visitors, through ads, social media or marketplaces. Whether those visits turn into orders is decided on a handful of pages: the product page, the cart and the checkout, mostly on a phone. Tracking that cannot tell which channel brought an order turns every budget decision into a guess.",
        checks: [
          {
            where: "On the product page",
            text: "Whether photos, price, shipping, delivery time and returns are clear on a phone before anyone scrolls far.",
          },
          {
            where: "In cart and checkout",
            text: "How many steps it takes, which payment methods are offered, and where costs appear that the customer did not expect.",
          },
          {
            where: "In your tracking",
            text: "Whether purchases are recorded per channel, with consent, and match the orders in your shop system.",
          },
          {
            where: "In speed",
            text: "How fast the most visited pages load and respond on a mid-range phone.",
          },
        ],
        builds: [
          "A Shopify store, from brand direction and structure to a market-ready launch",
          "Product and collection pages that answer the questions buyers ask",
          "Tracking that records purchases per channel with consent",
          "A first automation, for example for enquiries or order notifications",
        ],
        offers: [
          {
            offerId: "conversion-sprint",
            why: "For a store that gets visits but too few orders. One page is audited for mobile view, speed and tracking, and five fixes go live once you approve them.",
          },
          {
            offerId: "ai-automation-starter",
            why: "One workflow that saves manual steps, for example an enquiry that creates a contact, notifies you and replies. Written down and approved by you first.",
          },
        ],
        step: {
          id: "grow",
          why: "The store and the traffic exist. The first thing to fix is what happens between the visit and the order.",
        },
        checkLine: "Send the link to your store or to the product page you sell most.",
      },
    },
    caseRef: {
      id: "dadication",
      note: "Dadication is a US e-commerce brand we built from the first briefing to a market-ready Shopify store. It is pre-launch, so we show the work, not results.",
    },
    articles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: was Sie ohne Budget selbst erledigen" },
      { slug: "local-seo-keywords-finden", title: "Keywords finden: so suchen Ihre Kunden wirklich" },
      { slug: "local-seo-audit-checkliste", title: "SEO-Audit: die Checkliste zum Selbstprüfen" },
      { slug: "lokale-suchmaschinenoptimierung-2026", title: "Suche 2026: KI-Übersichten und was sich ändert" },
    ],
    faq: [
      {
        q: "Do you only work with Shopify?",
        a: "Shopify is where we build new stores. For an existing store on another system, the 72h Conversion Sprint audits one page and implements five fixes; whether that is possible on your system is confirmed before we start.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "For a store with traffic but too few orders: the 72h Conversion Sprint. For a new brand, a full project from brand direction to launch, with scope and price in writing before work starts.",
        link: { to: "/services", text: "See scope and prices" },
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
] as const;

export const audienceBySlug = (slug: string): Audience | undefined => AUDIENCES.find((a) => a.slug === slug);
