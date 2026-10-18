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
    slug: "hair-salons",
    name: "Hair salons and beauty studios",
    descriptor: "Hair salons · barbers · beauty and nail studios",
    seoTitle: "Websites & Google Profiles for Hair Salons",
    seoDescription:
      "For hair salons, barbers and beauty studios: a Google profile with services and prices, a website where booking takes under a minute on a phone, and no invented reviews.",
    h1: "Websites and Google profiles for hair salons and beauty studios.",
    lead: "For hair salons, barbers and beauty studios. People search on their phone, compare photos, prices and free slots, and book the place that makes it easy. We make sure your profile and your website answer those questions first.",
    inShort:
      "LocalDominate builds websites and Google Business Profiles for hair salons, barbers and beauty studios in Germany, Austria and Switzerland: services with duration and price, a booking path that works on a phone, a profile with correct categories, hours and photos, and a calm way to ask for reviews. We make no ranking promises and invent no reviews.",
    signs: [
      "Your prices are only on Instagram, so Google shows none.",
      "People call during appointments, and nobody picks up.",
      "Your Google profile lists the wrong category, old hours or no services.",
      "Booking runs through a tool that is hard to find on your website.",
    ],
    source: {
      own: {
        claim: "A booking is decided in under a minute, on a phone.",
        situation:
          "Someone looks for a hair salon or beauty studio nearby, opens two or three profiles and compares photos, prices and the next free slot. A salon with no prices, old opening hours or a booking link that is hard to find loses that comparison, however good the work is. Your own website can answer all of it in one place.",
        checks: [
          {
            where: "On your Google profile",
            text: "Whether the main category, services, prices, hours and photos are complete and match your website.",
          },
          {
            where: "On your website",
            text: "Whether services show duration and price, and whether the booking button is visible on a phone without scrolling.",
          },
          {
            where: "In your reviews",
            text: "How many recent reviews you have, whether they are answered, and how you ask for them today.",
          },
          {
            where: "In your enquiries",
            text: "What happens to a call or message that arrives while you are with a client.",
          },
        ],
        builds: [
          "A salon or studio website with services, duration, prices and a booking path",
          "A Google Business Profile with correct categories, services, hours and photos",
          "A review request you can send after the appointment, and reply templates",
          "A first automation, for example a confirmation message after an enquiry",
        ],
        buildNote:
          "Before-and-after photos and client names only appear with the client's written consent.",
        offers: [
          {
            offerId: "google-profile",
            why: "For a clean profile without a long project: categories, services, hours and photos reviewed and corrected.",
          },
          {
            offerId: "conversion-sprint",
            why: "For a website or booking page that gets visits but too few bookings. One page is audited and five fixes go live once you approve them.",
          },
          {
            offerId: "ai-automation-starter",
            why: "One workflow for the calls you miss during appointments, written down and approved by you first.",
          },
        ],
        step: {
          id: "diagnose",
          why: "Most salons already have a profile and a booking tool. The first thing to find out is where a new customer drops out.",
        },
        checkLine: "Send the link to your Google profile or your booking page.",
      },
    },
    caseRef: {
      id: "demo-salon",
      note: "Atelier Aurin is a fictional salon we built as a concept website, with a colour picker, services with price and booking in five steps. A concept, not a client. A second concept, for a beauty studio, is on the Work page.",
    },
    articles: [
      { slug: "local-seo-friseursalon-beauty", title: "Local SEO für Friseursalons und Beautystudios" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
      { slug: "google-business-kategorien-guide", title: "Google-Business-Kategorien: die richtige wählen" },
    ],
    faq: [
      {
        q: "Do you build websites for salons, or only improve Google profiles?",
        a: "Both. A website project has its scope and price confirmed in writing before work starts. For a quick start, the Google Profile Quick-Fix or the 72h Conversion Sprint covers one profile or one page.",
        link: { to: "/services", text: "See scope and prices" },
      },
      {
        q: "Can you show before-and-after photos or reviews on the site?",
        a: "Only real ones, and only with consent. We do not write reviews and we do not use stock photos presented as your work.",
      },
      {
        q: "Do you work with my booking tool?",
        a: "Usually yes. Most booking tools can be linked or embedded. Whether yours can is confirmed before we start.",
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
  {
    slug: "fitness-studios",
    name: "Gyms and fitness studios",
    descriptor: "Gyms · fitness and yoga studios · personal training",
    seoTitle: "Websites & Google Profiles for Gyms and Studios",
    seoDescription:
      "For gyms and fitness studios: a trial session bookable in the first screen, class timetable and prices as readable text, a correct Google profile and the legal cancellation button.",
    h1: "Websites and Google profiles for gyms and fitness studios.",
    lead: "For gyms, fitness and yoga studios. People look for a trial session, a timetable and a price they can understand. We make sure they find all three on your profile and your website, on a phone, without a phone call.",
    inShort:
      "LocalDominate builds websites and Google Business Profiles for gyms and fitness studios in Germany, Austria and Switzerland: a trial session bookable in the first screen, class timetable and plans as readable text, correct hours and staffed times, and the cancellation button that German law requires for online contracts. We make no ranking promises and invent no reviews or member numbers.",
    signs: [
      "The timetable is an image or a PDF that nobody can read on a phone.",
      "Prices appear only after a phone call or a form.",
      "Your Google profile shows hours, but not when someone is at the desk.",
      "Members can sign up online, but cannot cancel online.",
    ],
    source: {
      own: {
        claim: "A trial session decides, not the slogan.",
        situation:
          "Someone searching for a gym nearby wants three things: what it costs, when classes run, and a way to try it. A studio whose timetable is a picture, whose prices are hidden and whose trial needs a phone call loses that comparison to the one next door. Since 2022, a contract concluded online also needs a cancellation button in Germany.",
        checks: [
          {
            where: "On your Google profile",
            text: "Whether the category, hours, staffed times, photos and the trial link are correct and match your website.",
          },
          {
            where: "On your website",
            text: "Whether timetable and prices are readable text, and whether a trial session can be booked in the first screen on a phone.",
          },
          {
            where: "In your sign-up and cancellation",
            text: "Whether term, notice period and the cancellation button are shown clearly, as required for contracts concluded online.",
          },
          {
            where: "In your reviews",
            text: "Whether recent reviews are answered, and how new members are asked for one.",
          },
        ],
        builds: [
          "A gym or studio website with trial booking, timetable and plans as text",
          "A Google Business Profile with correct hours, staffed times and photos",
          "A cancellation page that follows § 312k BGB; you clear the final wording with your adviser",
          "A first automation, for example a reminder after a trial booking",
        ],
        buildNote: "We build the cancellation button as a feature. Whether your contract wording is legally sufficient is for your lawyer to confirm.",
        offers: [
          {
            offerId: "google-profile",
            why: "For a clean profile: category, hours, services and photos reviewed and corrected.",
          },
          {
            offerId: "conversion-sprint",
            why: "For a website or sign-up page that gets visits but too few trials. One page is audited and five fixes go live once you approve them.",
          },
          {
            offerId: "ai-automation-starter",
            why: "One workflow, for example a confirmation and reminder for each trial booking, written down and approved by you first.",
          },
        ],
        step: {
          id: "diagnose",
          why: "A studio usually has a profile, a website and a sign-up tool already. The first thing to find out is where a visitor stops before booking a trial.",
        },
        checkLine: "Send the link to your Google profile or your sign-up page.",
      },
    },
    caseRef: {
      id: "demo-fitness",
      note: "Ostwerk Athletik is a fictional gym we built as a concept website: trial booking in the first screen, timetable as text, plans with term and notice, and the cancellation button. A concept, not a client; busy times and free places are labelled example values.",
    },
    articles: [
      { slug: "local-seo-fitness", title: "Local SEO für Fitnessstudios" },
      { slug: "local-seo-yoga-studios", title: "Local SEO für Yoga-Studios" },
      { slug: "google-bewertungen-bekommen", title: "Google-Bewertungen bekommen: so fragen Sie richtig" },
      { slug: "google-my-business-optimieren", title: "Google Unternehmensprofil optimieren" },
    ],
    faq: [
      {
        q: "Do you build the legal cancellation button?",
        a: "We build the button and the cancellation page as part of a website project. Whether your contract terms are sufficient is a legal question that your lawyer or adviser confirms.",
      },
      {
        q: "Which offer is a sensible start?",
        a: "The Google Profile Quick-Fix for one location, or the 72h Conversion Sprint for the sign-up or trial page. A full website project has its scope and price confirmed in writing before work starts.",
        link: { to: "/services", text: "See scope and prices" },
      },
      {
        q: "Do you work with my member-management software?",
        a: "Often. Many systems offer a link or embed for trial booking and sign-up. Whether yours does is confirmed before we start.",
      },
      NO_PROMISE,
      OWNERSHIP,
      FREE_CHECK,
    ],
  },
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
