import { CHECK_FORM_EN } from "@/data/v4Check";
import type { CheckFormTexts } from "@/data/v4Check";
import { CHECK_FORM_DE, CHECK_REPLY_TIME_DE, CONTACT_EMAIL } from "@/data/v4De";
import { CHECK_REPLY_TIME } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";

/**
 * Everything the AI landing pages say: /ai (English) and /de/ki (German, Sie-Form).
 * Both pages render the same components with one of the two text sets below.
 *
 * Prices: owner decision of 10 October 2026 ("Premium-zugänglich"). This file is their single
 * source for both pages (hero, ladder, FAQ, form options, JSON-LD).
 *
 * Truth rule: no client names, results, ratings or testimonials. No blanket output figure
 * ("up to 400 %") until a project has been measured before and after (owner decision, same day).
 * The task-map calculator works with the visitor's own hours and two assumptions that stand
 * openly next to the result and can be changed. The only legal statement (EU AI Act, Article 4)
 * is linked to the official text.
 */

const SITE = "https://localdominate.org";
export const AI_PATH_EN = "/ai";
export const AI_PATH_DE = "/de/ki";
export const AI_URL_EN = `${SITE}${AI_PATH_EN}`;
export const AI_URL_DE = `${SITE}${AI_PATH_DE}`;
/** Commission Q&A on Art. 4, updated after the Digital Omnibus on AI (Regulation (EU) 2026/1744). */
const AI_ACT_URL = "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers";

/* ------------------------------------------------------------------ prices */

export const AI_PRICES = {
  audit: 1490,
  auditCreditDays: 60,
  /** Audit guarantee: below this many hours a week of work AI can do or draft, the audit is free. */
  guaranteeHours: 10,
  onboarding: 2900,
  onboardingSeats: 10,
  onboardingExtraSeat: 190,
  sprintFrom: 4900,
  systemFrom: 9900,
  careFrom: 690,
  careMinimumMonths: 3,
  solo: 690,
} as const;

const P = AI_PRICES;

/** 1490 -> "1,490" (en) or "1.490" (de). Written by hand so it never depends on locale data. */
const amount = (value: number, sep: string): string => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
/** On screen the figure and the euro sign stay on one line (no-break space). */
const eurEn = (value: number): string => `${amount(value, ",")} €`;
const eurDe = (value: number): string => `${amount(value, ".")} €`;
const plainEn = (value: number): string => `${amount(value, ",")} €`;
const plainDe = (value: number): string => `${amount(value, ".")} €`;

/* ------------------------------------------------------------------ anchors */

export const AI_ANCHORS = {
  map: "task-map",
  services: "services",
  prices: "prices",
  steps: "how-it-works",
  proof: "proof",
  rules: "rules",
  faq: "faq",
  form: "ai-check",
} as const;

export const AI_ANCHOR_IDS: readonly string[] = Object.values(AI_ANCHORS);

/* ------------------------------------------------------------------ task classes */

/** The three states of a task. They drive the colour of every chip on the page. */
export type TaskClass = "automate" | "assist" | "human";
export const TASK_CLASS_ORDER: readonly TaskClass[] = ["automate", "assist", "human"];
export const nextTaskClass = (c: TaskClass): TaskClass =>
  TASK_CLASS_ORDER[(TASK_CLASS_ORDER.indexOf(c) + 1) % TASK_CLASS_ORDER.length];

/** Working assumptions of the calculator, in percent of the task time. Shown next to the result. */
export const DEFAULT_SAVING = { automate: 70, assist: 40, human: 0 } as const;
export const WORK_WEEKS_PER_YEAR = 46;
export const DEFAULT_HOURLY_COST = 45;

export type RoleTask = { id: string; hours: number; cls: TaskClass };
export type Role = { id: string; tasks: readonly RoleTask[] };

/** The roles of the calculator. Names live in the text sets, ids and default hours here. */
export const ROLES: readonly Role[] = [
  {
    id: "marketing",
    tasks: [
      { id: "social", hours: 6, cls: "assist" },
      { id: "reporting", hours: 3, cls: "automate" },
      { id: "content", hours: 5, cls: "assist" },
      { id: "notes", hours: 2, cls: "automate" },
      { id: "research", hours: 3, cls: "assist" },
      { id: "strategy", hours: 4, cls: "human" },
    ],
  },
  {
    id: "office",
    tasks: [
      { id: "inbox", hours: 6, cls: "assist" },
      { id: "dataEntry", hours: 5, cls: "automate" },
      { id: "scheduling", hours: 2, cls: "automate" },
      { id: "documents", hours: 3, cls: "assist" },
      { id: "calls", hours: 4, cls: "human" },
    ],
  },
  {
    id: "sales",
    tasks: [
      { id: "leadResearch", hours: 5, cls: "automate" },
      { id: "followUps", hours: 4, cls: "assist" },
      { id: "crm", hours: 3, cls: "automate" },
      { id: "proposals", hours: 4, cls: "assist" },
      { id: "meetings", hours: 10, cls: "human" },
    ],
  },
  {
    id: "hotel",
    tasks: [
      { id: "enquiries", hours: 8, cls: "assist" },
      { id: "offers", hours: 4, cls: "assist" },
      { id: "reviews", hours: 2, cls: "assist" },
      { id: "dailyReports", hours: 2, cls: "automate" },
      { id: "guests", hours: 15, cls: "human" },
    ],
  },
  {
    id: "support",
    tasks: [
      { id: "tickets", hours: 8, cls: "assist" },
      { id: "routing", hours: 3, cls: "automate" },
      { id: "kb", hours: 2, cls: "assist" },
      { id: "escalations", hours: 5, cls: "human" },
    ],
  },
];

/** Hours a task frees per week for one person, given the savings in percent. */
export const freedHours = (task: { hours: number; cls: TaskClass }, saving: Record<TaskClass, number>): number =>
  (task.hours * saving[task.cls]) / 100;

/* ------------------------------------------------------------------ option event */

const AI_OPTION_EVENT = "ai:option";
export type AiOptionDetail = { option?: string; note?: string };

/** Called by a price card or the calculator: tells the form what to preselect or prefill. */
export const selectAiOption = (detail: AiOptionDetail): void => {
  window.dispatchEvent(new CustomEvent<AiOptionDetail>(AI_OPTION_EVENT, { detail }));
};

export const onAiOption = (listener: (detail: AiOptionDetail) => void): (() => void) => {
  const handle = (event: Event) => listener((event as CustomEvent<AiOptionDetail>).detail);
  window.addEventListener(AI_OPTION_EVENT, handle);
  return () => window.removeEventListener(AI_OPTION_EVENT, handle);
};

/* ------------------------------------------------------------------ text type */

export type LadderTierId = "check" | "audit" | "onboarding" | "sprint" | "system" | "care";

export type LadderTier = {
  id: LadderTierId;
  step: string;
  name: string;
  overline: string;
  figure: string;
  unit?: string;
  terms: string;
  includes: readonly string[];
  duration: string;
  cta: string;
  /** Text of the form option this card preselects. */
  option: string;
  badge?: string;
  /** Shown as a highlighted line on the card (owner decision of 10 Oct 2026: audit guarantee). */
  guarantee?: string;
};

export type AiTexts = {
  lang: "en" | "de";
  path: string;
  url: string;
  seo: { title: string; description: string; breadcrumb: string };
  nav: { home: string };
  hero: {
    label: string;
    titleLines: readonly [string, string];
    text: string;
    primary: string;
    secondary: string;
    terms: readonly string[];
    card: {
      label: string;
      role: string;
      week: string;
      legend: Record<TaskClass, string>;
      tasks: readonly { name: string; cls: TaskClass; hours: number }[];
      result: string;
      caption: string;
    };
  };
  shift: {
    label: string;
    title: string;
    text: string;
    points: readonly { title: string; body: string }[];
    turn: string;
  };
  map: {
    label: string;
    title: string;
    text: string;
    roleLabel: string;
    roles: Record<string, string>;
    tasks: Record<string, string>;
    classes: Record<TaskClass, string>;
    classHint: string;
    hoursLabel: string;
    hoursUnit: string;
    peopleLabel: string;
    costLabel: string;
    resultLabel: string;
    perPerson: string;
    perTeamWeek: string;
    perYear: string;
    value: string;
    capacity: (days: string) => string;
    assumptionsLabel: string;
    assumption: (cls: string) => string;
    assumptionsNote: string;
    cta: string;
    ctaNote: string;
    /** Text written into the form's free field when the visitor takes the map along. */
    note: (args: { role: string; people: number; perPerson: string; perYear: string; top: string }) => string;
    formatHours: (h: number) => string;
    formatMoney: (v: number) => string;
  };
  services: {
    label: string;
    title: string;
    text: string;
    items: readonly { kicker: string; title: string; body: string; points: readonly string[] }[];
    forLabel: string;
    audiences: readonly { title: string; body: string; tasks: readonly string[] }[];
  };
  ladder: {
    label: string;
    title: string;
    text: string;
    fitLabel: string;
    fits: readonly { when: string; pick: string }[];
    includesLabel: string;
    durationLabel: string;
    tiers: readonly LadderTier[];
    solo: { title: string; body: string; cta: string; option: string };
    notes: readonly string[];
  };
  steps: {
    label: string;
    title: string;
    items: readonly { n: string; title: string; body: string; meta: string }[];
  };
  proof: {
    label: string;
    title: string;
    text: string;
    roles: readonly { name: string; body: string }[];
    facts: readonly { figure: string; label: string }[];
    note: string;
    who: { lead: string; body: string; link: string; linkTo: string };
  };
  rules: {
    label: string;
    title: string;
    text: string;
    items: readonly { title: string; body: string }[];
    law: { text: string; link: string; url: string };
  };
  faq: { label: string; title: string; items: readonly { q: string; a: string }[] };
  form: {
    label: string;
    title: string;
    text: string;
    terms: readonly string[];
    callTitle: string;
    callLabel: string;
    texts: CheckFormTexts;
    idPrefix: string;
  };
};

/* ------------------------------------------------------------------ English */

const fmtHoursEn = (h: number): string => (Math.round(h * 10) / 10).toFixed(1).replace(/\.0$/, "");
const fmtHoursDe = (h: number): string => fmtHoursEn(h).replace(".", ",");
const fmtMoneyEn = (v: number): string => eurEn(Math.round(v / 10) * 10);
const fmtMoneyDe = (v: number): string => eurDe(Math.round(v / 10) * 10);

const OPTIONS_EN = {
  check: "Free AI task check (one role)",
  audit: `AI Potential Audit: ${plainEn(P.audit)}`,
  onboarding: `Claude Team Onboarding: ${plainEn(P.onboarding)}`,
  sprint: `Workflow Sprint: from ${plainEn(P.sprintFrom)}`,
  system: `AI Operating System: from ${plainEn(P.systemFrom)}`,
  care: `AI Care: from ${plainEn(P.careFrom)} per month`,
  solo: `Solo Setup: ${plainEn(P.solo)}`,
  unsure: "Not sure yet",
} as const;

const OPTIONS_DE = {
  check: "Kostenloser KI-Aufgaben-Check (eine Rolle)",
  audit: `AI Potential Audit: ${plainDe(P.audit)}`,
  onboarding: `Claude-Team-Onboarding: ${plainDe(P.onboarding)}`,
  sprint: `Workflow-Sprint: ab ${plainDe(P.sprintFrom)}`,
  system: `AI Operating System: ab ${plainDe(P.systemFrom)}`,
  care: `KI-Betreuung: ab ${plainDe(P.careFrom)} pro Monat`,
  solo: `Solo-Setup: ${plainDe(P.solo)}`,
  unsure: "Noch unklar",
} as const;

export const AI_EN: AiTexts = {
  lang: "en",
  path: AI_PATH_EN,
  url: AI_URL_EN,
  seo: {
    title: "AI Consulting, Workflows and Claude Onboarding",
    description: `Find the work AI can take off your team, then we build it in. Free AI task check, audit for ${plainEn(P.audit)} (credited), Claude Team onboarding, workflows. Fixed prices.`,
    breadcrumb: "AI consulting",
  },
  nav: { home: "Home" },
  hero: {
    label: "AI consulting · Workflows · Claude onboarding",
    titleLines: ["Find the work AI can take off your team.", "Then we build it in."],
    text: "We split every role into its tasks and mark each one: AI does it, AI drafts it, or it stays human. You see the hours with your own numbers, and we build the workflows your team will actually use.",
    primary: "Get a free AI task check",
    secondary: "Try the task map",
    terms: ["Fixed prices, written scope first", "Audit with a money-back guarantee", "Tasks, not people"],
    card: {
      label: "Task map · Example",
      role: "Marketing manager",
      week: "One week, 23 hours of desk work",
      legend: { automate: "AI does it", assist: "AI drafts, you decide", human: "Stays human" },
      tasks: [
        { name: "Weekly reporting", cls: "automate", hours: 3 },
        { name: "Meeting notes and briefs", cls: "automate", hours: 2 },
        { name: "Social posts and captions", cls: "assist", hours: 6 },
        { name: "Blog and newsletter drafts", cls: "assist", hours: 5 },
        { name: "Research and ideas", cls: "assist", hours: 3 },
        { name: "Strategy and approvals", cls: "human", hours: 4 },
      ],
      result: "about 9 hours a week back",
      caption: "Example with assumed hours. Your map uses your team's real tasks.",
    },
  },
  shift: {
    label: "Why most AI roll-outs stall",
    title: "Most teams use AI like a search box. The time is saved in the workflow.",
    text: "A licence for everyone and a lunchtime demo rarely change how the work gets done. Three things usually stand in the way.",
    points: [
      {
        title: "Everyone prompts alone",
        body: "Good prompts live in one person's chat history. Nobody else benefits, and the quality depends on who is at the desk.",
      },
      {
        title: "Nobody knows what is allowed",
        body: "Which customer data may go in? Without written rules, careful people stop using it and careless people use it anyway.",
      },
      {
        title: "AI sits next to the process, not in it",
        body: "Copying text between tools is not a workflow. The gain comes when the step before and the step after are connected.",
      },
    ],
    turn: "We start with the tasks, not the tools. That is what the task map is for.",
  },
  map: {
    label: "Task map",
    title: "Build a first map for one role. It takes a minute.",
    text: "Pick a role, adjust the hours, and tap a task to change what AI does with it. The result uses your numbers and the two assumptions shown below it.",
    roleLabel: "Role",
    roles: {
      marketing: "Marketing",
      office: "Office and admin",
      sales: "Sales",
      hotel: "Hotel front office",
      support: "Customer service",
    },
    tasks: {
      social: "Social posts and captions",
      reporting: "Weekly reporting",
      content: "Blog and newsletter drafts",
      notes: "Meeting notes and briefs",
      research: "Research and ideas",
      strategy: "Strategy and approvals",
      inbox: "Inbox and standard replies",
      dataEntry: "Invoices and data entry",
      scheduling: "Scheduling",
      documents: "Letters and document drafts",
      calls: "Calls with customers and suppliers",
      leadResearch: "Lead research",
      followUps: "Follow-up emails",
      crm: "CRM updates",
      proposals: "Proposals",
      meetings: "Calls and meetings",
      enquiries: "Replies to guest enquiries",
      offers: "Offer and package emails",
      reviews: "Replies to reviews",
      dailyReports: "Daily reports",
      guests: "Guests at the desk",
      tickets: "Standard tickets",
      routing: "Tagging and routing",
      kb: "Help-centre articles",
      escalations: "Escalations",
    },
    classes: { automate: "AI does it", assist: "AI drafts", human: "Human" },
    classHint: "Tap to change",
    hoursLabel: "Hours per week",
    hoursUnit: "h",
    peopleLabel: "People in this role",
    costLabel: "Cost per hour (€)",
    resultLabel: "Your first estimate",
    perPerson: "hours a week back, per person",
    perTeamWeek: "hours a week for the team",
    perYear: "hours a year",
    value: "worth of time a year at your hourly cost",
    capacity: (days) => `That is about ${days} working days a month your team can spend on customers, sales or quality instead.`,
    assumptionsLabel: "Assumptions",
    assumption: (cls) => `${cls} saves`,
    assumptionsNote: `${WORK_WEEKS_PER_YEAR} working weeks a year. In a project we measure the real time before and after.`,
    cta: "Get this map for your team, free",
    ctaNote: "Your role and result go into the form below. You only add your name and email.",
    note: ({ role, people, perPerson, perYear, top }) =>
      `Task map from the website: ${role}, ${people} ${people === 1 ? "person" : "people"}. Estimate: ${perPerson} h a week per person, ${perYear} h a year. Biggest tasks: ${top}.`,
    formatHours: fmtHoursEn,
    formatMoney: fmtMoneyEn,
  },
  services: {
    label: "What we do",
    title: "Four kinds of work. One goal: more output from the same team.",
    text: "Each starts with your tasks and ends with something your team uses every day. Prices are in the next section.",
    items: [
      {
        kicker: "Analyse",
        title: "Which tasks can AI take?",
        body: "Every role in your team split into its tasks, each marked as AI does it, AI drafts it, or stays human. You see which roles change and how much time is in play.",
        points: ["Talks with the people doing the work", "Task map with hours", "Roadmap: quick wins first"],
      },
      {
        kicker: "Optimise",
        title: "More output per workplace",
        body: "We rebuild the busiest workflows so AI prepares the work and people decide. Measured before and after, with your numbers.",
        points: ["Enquiries, offers, follow-ups", "Content and reporting", "Before and after timing"],
      },
      {
        kicker: "Onboard",
        title: "Claude for the whole team",
        body: "Claude Team set up properly: a project per department with its instructions and knowledge, templates for recurring work, rules for data and a live training.",
        points: ["Workspace and projects", "Templates and skills per team", "Training with recording"],
      },
      {
        kicker: "Structure",
        title: "Frameworks that run the business",
        body: "Your processes written down as reusable skills, a knowledge base AI can work from, and multi-agent set-ups where one lead session hands work to specialists.",
        points: ["Processes as skills", "Knowledge base", "Lead and specialist sessions"],
      },
    ],
    forLabel: "Who it is for",
    audiences: [
      {
        title: "Companies with 5 to 200 people",
        body: "Owners and managers who want the same team to get more done, without a large consultancy.",
        tasks: ["Inbox and offers", "Reporting", "Internal knowledge"],
      },
      {
        title: "Marketing teams and agencies",
        body: "Content, SEO and social work with Claude as a reliable pipeline, not a chat window.",
        tasks: ["Briefs to drafts", "Research", "Client reports"],
      },
      {
        title: "Hotels and hospitality",
        body: "Seven years in hotels: we know where front office and sales lose their hours.",
        tasks: ["Guest enquiries", "Offers and packages", "Review replies"],
      },
      {
        title: "Founders working alone",
        body: "Your own small team of AI sessions, set up in two sessions with the Solo Setup.",
        tasks: ["Projects", "Templates", "One workflow"],
      },
    ],
  },
  ladder: {
    label: "Prices",
    title: "Start free. Grow only when it pays.",
    text: "Fixed prices, net. Every step ends with a written result you keep, whether you continue or not.",
    fitLabel: "Which one fits?",
    fits: [
      { when: "You want to know where AI helps before you spend anything:", pick: "Free check" },
      { when: "You want the full picture for your team and a plan:", pick: "Audit" },
      { when: "Your team has Claude, or is about to, and needs to use it well:", pick: "Onboarding" },
      { when: "You know the workflow that eats the most time:", pick: "Workflow Sprint" },
    ],
    includesLabel: "Included",
    durationLabel: "Takes",
    tiers: [
      {
        id: "check",
        step: "00",
        name: "Free AI task check",
        overline: "Free",
        figure: eurEn(0),
        terms: "One role, in writing. No call needed, no obligation.",
        includes: [
          "Task map for one role",
          "Which tasks AI can do or draft",
          "Hours in play, with your numbers",
          "The first step we would take",
        ],
        duration: `Reply within ${CHECK_REPLY_TIME}`,
        cta: "Get the free check",
        option: OPTIONS_EN.check,
      },
      {
        id: "audit",
        step: "01",
        name: "AI Potential Audit",
        overline: "Once",
        figure: eurEn(P.audit),
        terms: `Credited in full if you book a Sprint or the System within ${P.auditCreditDays} days.`,
        includes: [
          "Talks with up to five roles",
          "Task map for the whole team",
          "Time in play, with your figures",
          "Roadmap: three quick wins, three projects",
          "Tool and data check (GDPR, AI literacy)",
          "60-minute presentation for your management",
        ],
        duration: "10 working days",
        cta: "Book the audit",
        option: OPTIONS_EN.audit,
        badge: "Start here",
        guarantee: `Guarantee: if the audit finds less than ${P.guaranteeHours} hours a week of work AI can do or draft for your team, you pay nothing.`,
      },
      {
        id: "onboarding",
        step: "02",
        name: "Claude Team Onboarding",
        overline: "Once",
        figure: eurEn(P.onboarding),
        terms: `Up to ${P.onboardingSeats} people, ${eurEn(P.onboardingExtraSeat)} for each further person. Licences are paid to Anthropic directly.`,
        includes: [
          "Workspace and admin set-up",
          "A project per department, with instructions and knowledge",
          "Five templates or skills per team",
          "Half-day live training, remote, recorded",
          "Written rules for data use",
          "30 days of questions by email",
        ],
        duration: "2 weeks",
        cta: "Plan the onboarding",
        option: OPTIONS_EN.onboarding,
      },
      {
        id: "sprint",
        step: "03",
        name: "Workflow Sprint",
        overline: "From",
        figure: eurEn(P.sprintFrom),
        terms: "One workflow end to end. Paid in two halves: at the start and on acceptance.",
        includes: [
          "Workflow mapped and approved by you first",
          "Built and tested with your real data",
          "Time measured before and after",
          "Documentation and hand-over",
        ],
        duration: "3 weeks",
        cta: "Discuss a sprint",
        option: OPTIONS_EN.sprint,
      },
      {
        id: "system",
        step: "04",
        name: "AI Operating System",
        overline: "From",
        figure: eurEn(P.systemFrom),
        terms: "Business structures and frameworks. Paid in two halves.",
        includes: [
          "Processes written as reusable skills",
          "Knowledge base AI can work from",
          "Lead and specialist sessions (multi-agent)",
          "At least three workflows",
          "Approval steps and rules",
        ],
        duration: "8 weeks",
        cta: "Discuss the system",
        option: OPTIONS_EN.system,
      },
      {
        id: "care",
        step: "05",
        name: "AI Care",
        overline: "From",
        figure: eurEn(P.careFrom),
        unit: "per month",
        terms: `${P.careMinimumMonths} months minimum, then cancel monthly.`,
        includes: [
          "Workflows watched and adjusted",
          "Changes when models update",
          "New templates as you need them",
          "Monthly 60-minute session",
        ],
        duration: "Ongoing",
        cta: "Ask about care",
        option: OPTIONS_EN.care,
      },
    ],
    solo: {
      title: `Working alone? Solo Setup, ${eurEn(P.solo)}.`,
      body: "Two live sessions of 90 minutes: your own projects, templates and one workflow, set up on your account.",
      cta: "Ask for the solo setup",
      option: OPTIONS_EN.solo,
    },
    notes: [
      "All prices net, plus VAT where it applies.",
      "Scope and price in writing before we start.",
      "Nothing goes live without your approval.",
    ],
  },
  steps: {
    label: "How it works",
    title: "Four steps. You decide after each one.",
    items: [
      { n: "01", title: "Free check", body: "You name one role. We send its task map and the first step.", meta: `Reply within ${CHECK_REPLY_TIME}` },
      { n: "02", title: "Audit", body: "We talk to your team, map every role and agree the roadmap with you.", meta: "10 working days" },
      { n: "03", title: "Build", body: "Onboarding, a Workflow Sprint or the full system. Measured before and after.", meta: "2 to 8 weeks" },
      { n: "04", title: "Care", body: "We keep the workflows working as models and your business change.", meta: "Monthly, cancellable" },
    ],
  },
  proof: {
    label: "Proof of work",
    title: "We run our own business on the same structure.",
    text: "Instead of logos, a working example: the site you are on. It is built and maintained by one person with a team of Claude sessions, the same set-up we install for you.",
    roles: [
      { name: "Lead session", body: "Plans the work, writes the briefs, checks every result before it ships." },
      { name: "Developer sessions", body: "Build pages and features on their own branch, from a written brief." },
      { name: "Content sessions", body: "Write and fact-check copy, with a source for every number." },
      { name: "Checks", body: "Type check, full static build and screenshots on phone and desktop before each hand-over." },
    ],
    facts: [
      { figure: "300+", label: "pages built and pre-rendered from one repository" },
      { figure: "2", label: "languages from one set of components" },
      { figure: "1", label: "person steering the sessions" },
    ],
    note: "Figures from this site's own build, October 2026.",
    who: {
      lead: "Markus Wimböck runs every project himself.",
      body: "Seven years in hotel and hospitality marketing, then building multilingual web platforms and multi-agent Claude systems.",
      link: "More about Markus",
      linkTo: "/about",
    },
  },
  rules: {
    label: "Our rules",
    title: "AI takes tasks, not people.",
    text: "The analysis tells you plainly which roles change and by how much. We build so your team does better work with the time it gets back, and so they want to use it.",
    items: [
      { title: "Your team in the room", body: "We talk to the people who do the work. They know where the time goes, and they have to like the result." },
      { title: "Data rules first", body: "Before anything is built we agree in writing which data may go into which tool." },
      { title: "Measured with your numbers", body: "No promised percentages. We time the work before and after and show you both." },
      { title: "You own everything", body: "Accounts, prompts, skills and documentation stay yours, whether you keep working with us or not." },
    ],
    law: {
      text: "Article 4 of the EU AI Act asks companies that use AI to take measures for their staff's AI literacy. It has applied since 2 February 2025, in the wording amended in July 2026, and national authorities supervise it. Our onboarding includes a training record you can keep on file.",
      link: "EU Commission: AI literacy Q&A",
      url: AI_ACT_URL,
    },
  },
  faq: {
    label: "Questions",
    title: "What people ask before they start.",
    items: [
      {
        q: "Which jobs can AI replace?",
        a: "Usually not whole jobs, but large parts of them. The audit shows, role by role, which tasks AI can do, which it can draft for a person to check, and which stay human. You get an honest picture of how much each role changes, so you can plan, not guess.",
      },
      {
        q: "How much more output is realistic?",
        a: "It depends on how much of a role is repeatable desk work. We do not promise a percentage. We estimate it with your numbers in the audit and measure the real time before and after each workflow we build.",
      },
      {
        q: "Why Claude?",
        a: "We work with Claude every day and know it in depth: projects, skills and multi-agent set-ups. If you already use another tool, the audit and the workflows still apply, and we tell you honestly where a different tool fits better.",
      },
      {
        q: "Are you an official Anthropic partner?",
        a: "No. We are an independent studio that sets up and trains Claude for teams. Your licences are bought from Anthropic directly and stay in your name.",
      },
      {
        q: "What about data protection?",
        a: "Before we build anything we agree in writing which data may go into which tool and who has access. Personal customer data only goes into a workflow when the legal basis and the tool's settings allow it.",
      },
      {
        q: "What if the audit finds little potential?",
        a: `Then it costs you nothing. If the audit finds less than ${P.guaranteeHours} hours a week of work that AI can do or draft for your team, estimated with your figures, you pay nothing for it and keep the written result.`,
      },
      {
        q: "Is the audit really credited?",
        a: `Yes. If you book a Workflow Sprint or the AI Operating System within ${P.auditCreditDays} days of the audit presentation, the full ${plainEn(P.audit)} are deducted from that price.`,
      },
      {
        q: "Do you work in German?",
        a: "Yes. Workshops, documents and templates in German or English, as your team prefers.",
      },
      {
        q: "How is it paid?",
        a: "Audit, onboarding and solo setup are paid up front at a fixed price. Sprints and the system are paid in two halves: at the start and on acceptance. Care is billed monthly.",
      },
    ],
  },
  form: {
    label: "Free AI task check",
    title: "Name one role. We send you its task map.",
    text: `Tell us which role or team you want looked at. Within ${CHECK_REPLY_TIME} you get a written task map with the first step. No call needed.`,
    terms: ["Free and without obligation", "Written result you keep", "Reply by Markus himself"],
    callTitle: "Rather talk first?",
    callLabel: "Book a 15-min call",
    idPrefix: "ai",
    texts: {
      ...CHECK_FORM_EN,
      formLabel: "Request your free AI task check",
      link: "Your company website",
      linkHint: "So we understand what your business does.",
      businessType: "What interests you?",
      businessTypePlaceholder: "Please choose",
      businessTypes: Object.values(OPTIONS_EN),
      goal: "Which role or team should we look at?",
      goalHint: "One or two sentences. For example: our two marketing people spend too long on reporting.",
      errors: {
        ...CHECK_FORM_EN.errors,
        link: "Please enter your company website.",
        businessType: "Please choose an option.",
      },
      success: {
        title: CHECK_FORM_EN.success.title,
        body: `We reply by email within ${CHECK_REPLY_TIME} with your task map and the first step.`,
      },
      subject: "AI task check request",
    },
  },
};

/* ------------------------------------------------------------------ Deutsch */

export const AI_DE: AiTexts = {
  lang: "de",
  path: AI_PATH_DE,
  url: AI_URL_DE,
  seo: {
    title: "KI-Beratung, KI-Workflows & Claude-Onboarding",
    description: `Welche Aufgaben kann KI Ihrem Team abnehmen? Kostenloser KI-Check, Audit ${plainDe(P.audit)} (angerechnet), Claude-Team-Onboarding, Workflow-Bau. Festpreise.`,
    breadcrumb: "KI-Beratung",
  },
  nav: { home: "Start" },
  hero: {
    label: "KI-Beratung · Workflows · Claude-Onboarding",
    titleLines: ["Welche Arbeit kann KI Ihrem Team abnehmen?", "Wir finden es heraus und bauen es ein."],
    text: "Wir zerlegen jede Rolle in ihre Aufgaben und markieren jede einzelne: KI erledigt es, KI bereitet es vor, oder es bleibt menschlich. Sie sehen die Stunden mit Ihren eigenen Zahlen, und wir bauen die Abläufe, die Ihr Team wirklich nutzt.",
    primary: "Kostenlosen KI-Check anfordern",
    secondary: "Aufgaben-Landkarte ausprobieren",
    terms: ["Festpreise, Umfang vorher schriftlich", "Audit mit Geld-zurück-Garantie", "Aufgaben, nicht Menschen"],
    card: {
      label: "Aufgaben-Landkarte · Beispiel",
      role: "Marketing-Managerin",
      week: "Eine Woche, 23 Stunden Schreibtischarbeit",
      legend: { automate: "KI erledigt es", assist: "KI bereitet vor, Sie entscheiden", human: "Bleibt menschlich" },
      tasks: [
        { name: "Wöchentliches Reporting", cls: "automate", hours: 3 },
        { name: "Protokolle und Briefings", cls: "automate", hours: 2 },
        { name: "Social-Posts und Texte", cls: "assist", hours: 6 },
        { name: "Blog- und Newsletter-Entwürfe", cls: "assist", hours: 5 },
        { name: "Recherche und Ideen", cls: "assist", hours: 3 },
        { name: "Strategie und Freigaben", cls: "human", hours: 4 },
      ],
      result: "rund 9 Stunden pro Woche zurück",
      caption: "Beispiel mit angenommenen Stunden. Ihre Landkarte nutzt die echten Aufgaben Ihres Teams.",
    },
  },
  shift: {
    label: "Warum KI-Einführungen versanden",
    title: "Die meisten Teams nutzen KI wie eine Suchmaschine. Die Zeit wird im Ablauf gespart.",
    text: "Eine Lizenz für alle und eine Mittagsdemo ändern selten, wie gearbeitet wird. Meist stehen drei Dinge im Weg.",
    points: [
      {
        title: "Jeder promptet allein",
        body: "Gute Prompts liegen im Verlauf einer einzelnen Person. Niemand sonst profitiert, und die Qualität hängt davon ab, wer gerade am Platz sitzt.",
      },
      {
        title: "Niemand weiß, was erlaubt ist",
        body: "Welche Kundendaten dürfen hinein? Ohne schriftliche Regeln hören die Vorsichtigen auf, und die Sorglosen machen trotzdem weiter.",
      },
      {
        title: "KI steht neben dem Prozess, nicht darin",
        body: "Text zwischen Programmen hin und her kopieren ist kein Workflow. Der Gewinn entsteht, wenn der Schritt davor und danach verbunden sind.",
      },
    ],
    turn: "Wir beginnen bei den Aufgaben, nicht bei den Tools. Dafür gibt es die Aufgaben-Landkarte.",
  },
  map: {
    label: "Aufgaben-Landkarte",
    title: "Bauen Sie eine erste Landkarte für eine Rolle. Dauert eine Minute.",
    text: "Wählen Sie eine Rolle, passen Sie die Stunden an und tippen Sie auf eine Aufgabe, um zu ändern, was KI damit macht. Das Ergebnis rechnet mit Ihren Zahlen und den zwei Annahmen darunter.",
    roleLabel: "Rolle",
    roles: {
      marketing: "Marketing",
      office: "Büro und Verwaltung",
      sales: "Vertrieb",
      hotel: "Hotel-Rezeption",
      support: "Kundenservice",
    },
    tasks: {
      social: "Social-Posts und Texte",
      reporting: "Wöchentliches Reporting",
      content: "Blog- und Newsletter-Entwürfe",
      notes: "Protokolle und Briefings",
      research: "Recherche und Ideen",
      strategy: "Strategie und Freigaben",
      inbox: "Posteingang und Standardantworten",
      dataEntry: "Rechnungen und Datenerfassung",
      scheduling: "Terminplanung",
      documents: "Briefe und Dokumententwürfe",
      calls: "Telefonate mit Kunden und Lieferanten",
      leadResearch: "Lead-Recherche",
      followUps: "Nachfass-E-Mails",
      crm: "CRM pflegen",
      proposals: "Angebote schreiben",
      meetings: "Gespräche und Termine",
      enquiries: "Antworten auf Gästeanfragen",
      offers: "Angebots- und Paket-E-Mails",
      reviews: "Antworten auf Bewertungen",
      dailyReports: "Tagesberichte",
      guests: "Gäste an der Rezeption",
      tickets: "Standard-Tickets",
      routing: "Tickets zuordnen",
      kb: "Hilfe-Artikel",
      escalations: "Eskalationen",
    },
    classes: { automate: "KI erledigt", assist: "KI bereitet vor", human: "Mensch" },
    classHint: "Tippen zum Ändern",
    hoursLabel: "Stunden pro Woche",
    hoursUnit: "Std.",
    peopleLabel: "Personen in dieser Rolle",
    costLabel: "Kosten pro Stunde (€)",
    resultLabel: "Ihre erste Schätzung",
    perPerson: "Stunden pro Woche zurück, je Person",
    perTeamWeek: "Stunden pro Woche fürs Team",
    perYear: "Stunden im Jahr",
    value: "Zeitwert im Jahr bei Ihren Stundenkosten",
    capacity: (days) => `Das sind rund ${days} Arbeitstage im Monat, die Ihr Team stattdessen in Kunden, Vertrieb oder Qualität stecken kann.`,
    assumptionsLabel: "Annahmen",
    assumption: (cls) => `${cls} spart`,
    assumptionsNote: `${WORK_WEEKS_PER_YEAR} Arbeitswochen im Jahr. Im Projekt messen wir die echte Zeit vorher und nachher.`,
    cta: "Diese Landkarte fürs Team anfordern, kostenlos",
    ctaNote: "Rolle und Ergebnis landen im Formular unten. Sie ergänzen nur Name und E-Mail.",
    note: ({ role, people, perPerson, perYear, top }) =>
      `Aufgaben-Landkarte von der Website: ${role}, ${people} ${people === 1 ? "Person" : "Personen"}. Schätzung: ${perPerson} Std. pro Woche je Person, ${perYear} Std. im Jahr. Größte Aufgaben: ${top}.`,
    formatHours: fmtHoursDe,
    formatMoney: fmtMoneyDe,
  },
  services: {
    label: "Was wir tun",
    title: "Vier Arten von Arbeit. Ein Ziel: mehr Ergebnis mit demselben Team.",
    text: "Jede beginnt bei Ihren Aufgaben und endet mit etwas, das Ihr Team täglich nutzt. Die Preise stehen im nächsten Abschnitt.",
    items: [
      {
        kicker: "Analysieren",
        title: "Welche Aufgaben kann KI übernehmen?",
        body: "Jede Rolle in Ihrem Team in ihre Aufgaben zerlegt, jede markiert als: KI erledigt es, KI bereitet vor, oder bleibt menschlich. Sie sehen, welche Rollen sich verändern und wie viel Zeit im Spiel ist.",
        points: ["Gespräche mit den Menschen, die die Arbeit machen", "Aufgaben-Landkarte mit Stunden", "Roadmap: schnelle Gewinne zuerst"],
      },
      {
        kicker: "Optimieren",
        title: "Mehr Ergebnis pro Arbeitsplatz",
        body: "Wir bauen die zeitintensivsten Abläufe so um, dass KI die Arbeit vorbereitet und Menschen entscheiden. Gemessen vorher und nachher, mit Ihren Zahlen.",
        points: ["Anfragen, Angebote, Nachfassen", "Content und Reporting", "Zeitmessung vorher und nachher"],
      },
      {
        kicker: "Einführen",
        title: "Claude für das ganze Team",
        body: "Claude Team sauber eingerichtet: ein Projekt je Abteilung mit Anweisungen und Wissen, Vorlagen für wiederkehrende Arbeit, Regeln für Daten und ein Live-Training.",
        points: ["Workspace und Projekte", "Vorlagen und Skills je Team", "Training mit Aufzeichnung"],
      },
      {
        kicker: "Strukturieren",
        title: "Frameworks, die das Geschäft tragen",
        body: "Ihre Prozesse als wiederverwendbare Skills aufgeschrieben, eine Wissensbasis, mit der KI arbeiten kann, und Multi-Agent-Setups, in denen eine leitende Sitzung Arbeit an Spezialisten verteilt.",
        points: ["Prozesse als Skills", "Wissensbasis", "Leitende und spezialisierte Sitzungen"],
      },
    ],
    forLabel: "Für wen",
    audiences: [
      {
        title: "Unternehmen mit 5 bis 200 Mitarbeitenden",
        body: "Inhaber und Geschäftsführer, die mit demselben Team mehr schaffen wollen, ohne Großberatung.",
        tasks: ["Posteingang und Angebote", "Reporting", "Internes Wissen"],
      },
      {
        title: "Marketing-Teams und Agenturen",
        body: "Content, SEO und Social Media mit Claude als verlässliche Pipeline, nicht als Chatfenster.",
        tasks: ["Vom Briefing zum Entwurf", "Recherche", "Kundenberichte"],
      },
      {
        title: "Hotels und Hospitality",
        body: "Sieben Jahre Hotellerie: Wir wissen, wo Rezeption und Verkauf ihre Stunden verlieren.",
        tasks: ["Gästeanfragen", "Angebote und Pakete", "Bewertungsantworten"],
      },
      {
        title: "Gründer, die allein arbeiten",
        body: "Ihr eigenes kleines Team aus KI-Sitzungen, eingerichtet in zwei Terminen mit dem Solo-Setup.",
        tasks: ["Projekte", "Vorlagen", "Ein Workflow"],
      },
    ],
  },
  ladder: {
    label: "Preise",
    title: "Kostenlos beginnen. Nur wachsen, wenn es sich rechnet.",
    text: "Festpreise, netto. Jede Stufe endet mit einem schriftlichen Ergebnis, das Ihnen bleibt, ob Sie weitermachen oder nicht.",
    fitLabel: "Was passt?",
    fits: [
      { when: "Sie wollen wissen, wo KI hilft, bevor Sie etwas ausgeben:", pick: "Kostenloser Check" },
      { when: "Sie wollen das ganze Bild fürs Team und einen Plan:", pick: "Audit" },
      { when: "Ihr Team hat Claude oder bekommt es bald und soll es gut nutzen:", pick: "Onboarding" },
      { when: "Sie kennen den Ablauf, der am meisten Zeit frisst:", pick: "Workflow-Sprint" },
    ],
    includesLabel: "Enthalten",
    durationLabel: "Dauer",
    tiers: [
      {
        id: "check",
        step: "00",
        name: "Kostenloser KI-Aufgaben-Check",
        overline: "Kostenlos",
        figure: eurDe(0),
        terms: "Eine Rolle, schriftlich. Kein Gespräch nötig, keine Verpflichtung.",
        includes: [
          "Aufgaben-Landkarte für eine Rolle",
          "Welche Aufgaben KI erledigen oder vorbereiten kann",
          "Stunden im Spiel, mit Ihren Zahlen",
          "Der erste Schritt, den wir gehen würden",
        ],
        duration: `Antwort ${CHECK_REPLY_TIME_DE}`,
        cta: "Kostenlosen Check anfordern",
        option: OPTIONS_DE.check,
      },
      {
        id: "audit",
        step: "01",
        name: "AI Potential Audit",
        overline: "Einmalig",
        figure: eurDe(P.audit),
        terms: `Voll angerechnet, wenn Sie innerhalb von ${P.auditCreditDays} Tagen einen Sprint oder das System buchen.`,
        includes: [
          "Gespräche mit bis zu fünf Rollen",
          "Aufgaben-Landkarte für das ganze Team",
          "Zeit im Spiel, mit Ihren Zahlen",
          "Roadmap: drei schnelle Gewinne, drei Projekte",
          "Tool- und Datencheck (DSGVO, KI-Kompetenz)",
          "60-Minuten-Präsentation für die Geschäftsführung",
        ],
        duration: "10 Werktage",
        cta: "Audit buchen",
        option: OPTIONS_DE.audit,
        badge: "Hier starten",
        guarantee: `Garantie: Findet das Audit weniger als ${P.guaranteeHours} Stunden pro Woche, die KI in Ihrem Team erledigen oder vorbereiten kann, zahlen Sie nichts.`,
      },
      {
        id: "onboarding",
        step: "02",
        name: "Claude-Team-Onboarding",
        overline: "Einmalig",
        figure: eurDe(P.onboarding),
        terms: `Bis ${P.onboardingSeats} Personen, je weitere Person ${eurDe(P.onboardingExtraSeat)}. Lizenzen zahlen Sie direkt an Anthropic.`,
        includes: [
          "Workspace und Verwaltung eingerichtet",
          "Ein Projekt je Abteilung, mit Anweisungen und Wissen",
          "Fünf Vorlagen oder Skills je Team",
          "Halbtägiges Live-Training, remote, aufgezeichnet",
          "Schriftliche Regeln für Daten",
          "30 Tage Fragen per E-Mail",
        ],
        duration: "2 Wochen",
        cta: "Onboarding planen",
        option: OPTIONS_DE.onboarding,
      },
      {
        id: "sprint",
        step: "03",
        name: "Workflow-Sprint",
        overline: "Ab",
        figure: eurDe(P.sprintFrom),
        terms: "Ein Ablauf von Anfang bis Ende. Zahlung in zwei Hälften: zum Start und bei Abnahme.",
        includes: [
          "Ablauf aufgezeichnet und vorher von Ihnen freigegeben",
          "Gebaut und getestet mit Ihren echten Daten",
          "Zeit gemessen vorher und nachher",
          "Dokumentation und Übergabe",
        ],
        duration: "3 Wochen",
        cta: "Sprint besprechen",
        option: OPTIONS_DE.sprint,
      },
      {
        id: "system",
        step: "04",
        name: "AI Operating System",
        overline: "Ab",
        figure: eurDe(P.systemFrom),
        terms: "Business-Strukturen und Frameworks. Zahlung in zwei Hälften.",
        includes: [
          "Prozesse als wiederverwendbare Skills",
          "Wissensbasis, mit der KI arbeiten kann",
          "Leitende und spezialisierte Sitzungen (Multi-Agent)",
          "Mindestens drei Workflows",
          "Freigabeschritte und Regeln",
        ],
        duration: "8 Wochen",
        cta: "System besprechen",
        option: OPTIONS_DE.system,
      },
      {
        id: "care",
        step: "05",
        name: "KI-Betreuung",
        overline: "Ab",
        figure: eurDe(P.careFrom),
        unit: "pro Monat",
        terms: `${P.careMinimumMonths} Monate Mindestlaufzeit, danach monatlich kündbar.`,
        includes: [
          "Abläufe überwacht und angepasst",
          "Änderungen bei Modell-Updates",
          "Neue Vorlagen nach Bedarf",
          "Monatliche 60-Minuten-Session",
        ],
        duration: "Laufend",
        cta: "Betreuung anfragen",
        option: OPTIONS_DE.care,
      },
    ],
    solo: {
      title: `Allein unterwegs? Solo-Setup, ${eurDe(P.solo)}.`,
      body: "Zwei Live-Sitzungen à 90 Minuten: eigene Projekte, Vorlagen und ein Workflow, eingerichtet auf Ihrem Konto.",
      cta: "Solo-Setup anfragen",
      option: OPTIONS_DE.solo,
    },
    notes: [
      "Alle Preise netto zzgl. USt., wo sie anfällt.",
      "Umfang und Preis schriftlich vor dem Start.",
      "Nichts geht live ohne Ihre Freigabe.",
    ],
  },
  steps: {
    label: "So läuft es",
    title: "Vier Schritte. Nach jedem entscheiden Sie.",
    items: [
      { n: "01", title: "Kostenloser Check", body: "Sie nennen eine Rolle. Wir schicken ihre Aufgaben-Landkarte und den ersten Schritt.", meta: `Antwort ${CHECK_REPLY_TIME_DE}` },
      { n: "02", title: "Audit", body: "Wir sprechen mit Ihrem Team, kartieren jede Rolle und stimmen die Roadmap mit Ihnen ab.", meta: "10 Werktage" },
      { n: "03", title: "Bauen", body: "Onboarding, ein Workflow-Sprint oder das ganze System. Gemessen vorher und nachher.", meta: "2 bis 8 Wochen" },
      { n: "04", title: "Betreuen", body: "Wir halten die Abläufe in Schuss, wenn sich Modelle und Ihr Geschäft ändern.", meta: "Monatlich, kündbar" },
    ],
  },
  proof: {
    label: "Arbeitsprobe",
    title: "Wir führen unser eigenes Geschäft mit derselben Struktur.",
    text: "Statt Logos ein Arbeitsbeispiel: die Website, auf der Sie gerade sind. Sie wird von einer Person mit einem Team aus Claude-Sitzungen gebaut und gepflegt, genau dem Aufbau, den wir bei Ihnen einrichten.",
    roles: [
      { name: "Leitende Sitzung", body: "Plant die Arbeit, schreibt die Aufträge, prüft jedes Ergebnis vor der Abgabe." },
      { name: "Entwickler-Sitzungen", body: "Bauen Seiten und Funktionen auf eigenem Branch, nach schriftlichem Auftrag." },
      { name: "Content-Sitzungen", body: "Schreiben und prüfen Texte, mit einer Quelle für jede Zahl." },
      { name: "Prüfungen", body: "Typprüfung, kompletter statischer Build und Screenshots auf Handy und Desktop vor jeder Übergabe." },
    ],
    facts: [
      { figure: "300+", label: "Seiten aus einem Repository gebaut und vorgerendert" },
      { figure: "2", label: "Sprachen aus einem Satz Komponenten" },
      { figure: "1", label: "Person, die die Sitzungen steuert" },
    ],
    note: "Zahlen aus dem Build dieser Website, Oktober 2026.",
    who: {
      lead: "Markus Wimböck führt jedes Projekt selbst.",
      body: "Sieben Jahre Hotel- und Hospitality-Marketing, danach mehrsprachige Web-Plattformen und Multi-Agent-Systeme mit Claude.",
      link: "Mehr über Markus",
      linkTo: "/about",
    },
  },
  rules: {
    label: "Unsere Regeln",
    title: "KI übernimmt Aufgaben, nicht Menschen.",
    text: "Die Analyse sagt Ihnen klar, welche Rollen sich wie stark verändern. Wir bauen so, dass Ihr Team mit der gewonnenen Zeit bessere Arbeit macht und die Lösung gern nutzt.",
    items: [
      { title: "Ihr Team ist dabei", body: "Wir sprechen mit den Menschen, die die Arbeit machen. Sie wissen, wo die Zeit hingeht, und sie müssen das Ergebnis mögen." },
      { title: "Erst die Datenregeln", body: "Bevor etwas gebaut wird, vereinbaren wir schriftlich, welche Daten in welches Tool dürfen." },
      { title: "Gemessen mit Ihren Zahlen", body: "Keine versprochenen Prozente. Wir messen die Arbeitszeit vorher und nachher und zeigen Ihnen beides." },
      { title: "Alles gehört Ihnen", body: "Konten, Prompts, Skills und Dokumentation bleiben Ihre, ob Sie mit uns weiterarbeiten oder nicht." },
    ],
    law: {
      text: "Artikel 4 der EU-KI-Verordnung verlangt von Unternehmen, die KI einsetzen, Maßnahmen für die KI-Kompetenz ihres Personals. Die Pflicht gilt seit dem 2. Februar 2025, in der im Juli 2026 geänderten Fassung, und wird von nationalen Behörden beaufsichtigt. Unser Onboarding enthält einen Schulungsnachweis für Ihre Unterlagen.",
      link: "EU-Kommission: Fragen und Antworten zur KI-Kompetenz",
      url: AI_ACT_URL,
    },
  },
  faq: {
    label: "Fragen",
    title: "Was vor dem Start gefragt wird.",
    items: [
      {
        q: "Welche Arbeitsplätze kann KI ersetzen?",
        a: "Meist keine ganzen Stellen, aber große Teile davon. Das Audit zeigt Rolle für Rolle, welche Aufgaben KI erledigen kann, welche sie für einen Menschen vorbereitet und welche menschlich bleiben. So sehen Sie ehrlich, wie stark sich jede Rolle verändert, und können planen statt raten.",
      },
      {
        q: "Wie viel mehr Leistung ist realistisch?",
        a: "Das hängt davon ab, wie viel einer Rolle wiederholbare Schreibtischarbeit ist. Wir versprechen keine Prozentzahl. Wir schätzen sie im Audit mit Ihren Zahlen und messen die echte Zeit vor und nach jedem Ablauf, den wir bauen.",
      },
      {
        q: "Warum Claude?",
        a: "Wir arbeiten jeden Tag mit Claude und kennen es genau: Projekte, Skills und Multi-Agent-Setups. Nutzen Sie bereits ein anderes Tool, gelten Audit und Abläufe trotzdem, und wir sagen Ihnen ehrlich, wo ein anderes Tool besser passt.",
      },
      {
        q: "Sind Sie offizieller Anthropic-Partner?",
        a: "Nein. Wir sind ein unabhängiges Studio, das Claude für Teams einrichtet und schult. Ihre Lizenzen kaufen Sie direkt bei Anthropic, sie bleiben auf Ihren Namen.",
      },
      {
        q: "Wie steht es um den Datenschutz?",
        a: "Bevor wir etwas bauen, vereinbaren wir schriftlich, welche Daten in welches Tool dürfen und wer Zugriff hat. Personenbezogene Kundendaten kommen nur in einen Ablauf, wenn Rechtsgrundlage und Einstellungen des Tools es erlauben.",
      },
      {
        q: "Was, wenn das Audit wenig Potenzial findet?",
        a: `Dann kostet es Sie nichts. Findet das Audit weniger als ${P.guaranteeHours} Stunden pro Woche, die KI in Ihrem Team erledigen oder vorbereiten kann, geschätzt mit Ihren Zahlen, zahlen Sie es nicht und behalten das schriftliche Ergebnis.`,
      },
      {
        q: "Wird das Audit wirklich angerechnet?",
        a: `Ja. Buchen Sie innerhalb von ${P.auditCreditDays} Tagen nach der Audit-Präsentation einen Workflow-Sprint oder das AI Operating System, ziehen wir die vollen ${plainDe(P.audit)} von diesem Preis ab.`,
      },
      {
        q: "Arbeiten Sie auf Deutsch?",
        a: "Ja. Workshops, Dokumente und Vorlagen auf Deutsch oder Englisch, wie Ihr Team es möchte.",
      },
      {
        q: "Wie wird bezahlt?",
        a: "Audit, Onboarding und Solo-Setup zahlen Sie vorab zum Festpreis. Sprints und das System in zwei Hälften: zum Start und bei Abnahme. Die Betreuung wird monatlich abgerechnet.",
      },
    ],
  },
  form: {
    label: "Kostenloser KI-Aufgaben-Check",
    title: "Nennen Sie eine Rolle. Wir schicken Ihnen ihre Aufgaben-Landkarte.",
    text: `Sagen Sie uns, welche Rolle oder welches Team wir uns ansehen sollen. ${CHECK_REPLY_TIME_DE.charAt(0).toUpperCase()}${CHECK_REPLY_TIME_DE.slice(1)} erhalten Sie eine schriftliche Aufgaben-Landkarte mit dem ersten Schritt. Kein Gespräch nötig.`,
    terms: ["Kostenlos und unverbindlich", "Schriftliches Ergebnis, das Ihnen bleibt", "Antwort von Markus persönlich"],
    callTitle: "Lieber erst sprechen?",
    callLabel: "15-Minuten-Gespräch buchen",
    idPrefix: "de-ai",
    texts: {
      ...CHECK_FORM_DE,
      formLabel: "Kostenlosen KI-Aufgaben-Check anfordern",
      link: "Website Ihres Unternehmens",
      linkHint: "Damit wir verstehen, was Ihr Unternehmen macht.",
      businessType: "Was interessiert Sie?",
      businessTypePlaceholder: "Bitte wählen",
      businessTypes: Object.values(OPTIONS_DE),
      goal: "Welche Rolle oder welches Team sollen wir ansehen?",
      goalHint: "Ein, zwei Sätze. Zum Beispiel: Unsere zwei Marketing-Leute brauchen zu lange fürs Reporting.",
      submit: "KI-Check anfordern",
      errors: {
        ...CHECK_FORM_DE.errors,
        link: "Bitte geben Sie die Website Ihres Unternehmens an.",
        businessType: "Bitte wählen Sie eine Option.",
        failed: `Das Senden hat nicht geklappt. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie an ${CONTACT_EMAIL}.`,
      },
      success: {
        title: CHECK_FORM_DE.success.title,
        body: `Wir melden uns ${CHECK_REPLY_TIME_DE} per E-Mail mit Ihrer Aufgaben-Landkarte und dem ersten Schritt. Sie gehen dabei keine Verpflichtung ein.`,
      },
      subject: "Anfrage KI-Aufgaben-Check",
    },
  },
};

/* ------------------------------------------------------------------ JSON-LD */

const ORGANIZATION = { "@id": `${SITE}/#organization` };

/** Only what the page states: the offers with their prices and the FAQ as rendered. */
export const aiJsonLd = (t: AiTexts) => {
  const offer = (tier: LadderTier, price: Record<string, unknown>) => ({
    "@type": "Offer",
    name: tier.name,
    description: tier.terms,
    priceCurrency: "EUR",
    url: `${t.url}#${AI_ANCHORS.prices}`,
    priceSpecification: { priceCurrency: "EUR", valueAddedTaxIncluded: false, ...price },
  });
  const tier = (id: LadderTierId) => {
    const found = t.ladder.tiers.find((x) => x.id === id);
    if (!found) throw new Error(`Unknown tier ${id}`);
    return found;
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${t.url}#webpage`,
        url: t.url,
        name: t.seo.title,
        description: t.seo.description,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${t.url}#service` },
        breadcrumb: { "@id": `${t.url}#breadcrumb` },
        dateModified: SEO_DATE_MODIFIED,
        inLanguage: t.lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${t.url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.nav.home, item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: t.seo.breadcrumb, item: t.url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${t.url}#service`,
        name: t.seo.title,
        serviceType: "AI consulting",
        description: t.seo.description,
        url: t.url,
        provider: ORGANIZATION,
        areaServed: ["DE", "AT", "CH"],
        availableLanguage: ["de", "en"],
        offers: [
          offer(tier("check"), { "@type": "PriceSpecification", price: 0 }),
          offer(tier("audit"), { "@type": "PriceSpecification", price: P.audit }),
          offer(tier("onboarding"), { "@type": "PriceSpecification", price: P.onboarding }),
          offer(tier("sprint"), { "@type": "PriceSpecification", minPrice: P.sprintFrom }),
          offer(tier("system"), { "@type": "PriceSpecification", minPrice: P.systemFrom }),
          offer(tier("care"), {
            "@type": "UnitPriceSpecification",
            minPrice: P.careFrom,
            unitCode: "MON",
            unitText: "MONTH",
          }),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${t.url}#faq`,
        inLanguage: t.lang,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
};
