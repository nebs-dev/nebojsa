// All homepage copy lives here. Copy is approved; do not add claims, metrics or
// outcomes that are not supported by the CV / dossier.

export const SITE = {
  name: "Nebojsa Stojanovic",
  role: "Senior Software Engineer & Technical Consultant",
  title: "Nebojsa Stojanovic — Senior Software Engineer & Technical Consultant",
  description:
    "Senior software engineer and technical consultant with 10+ years of experience building backend systems, B2B products, APIs and integrations with TypeScript and Node.js.",
  location: "Osijek, Croatia",
  year: 2026,
} as const;

// Single source for contact details. To move to a custom-domain email, change
// EMAIL_ADDRESS only; the mailto link and label derive from it.
const EMAIL_ADDRESS = "nebojsa.stojanovic0@gmail.com";

export const CONTACT = {
  email: { href: `mailto:${EMAIL_ADDRESS}`, label: EMAIL_ADDRESS, ariaLabel: `Email ${EMAIL_ADDRESS}` },
  linkedin: {
    href: "https://www.linkedin.com/in/nestojanovic/",
    label: "linkedin.com/in/nestojanovic",
    ariaLabel: "Nebojsa Stojanovic on LinkedIn",
  },
  github: {
    href: "https://github.com/nebs-dev",
    label: "github.com/nebs-dev",
    ariaLabel: "Nebojsa Stojanovic on GitHub",
  },
} as const;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  headline: "I build and improve backend systems, integrations and digital products.",
  lede: "Senior software engineer and technical consultant with 10+ years of experience building B2B platforms, APIs, integrations and product systems with TypeScript and Node.js.",
  aside: "I work best on products where technical decisions, reliability and business constraints actually matter.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Contact", href: "#contact" },
  linkedinLabel: "LinkedIn ↗",
} as const;

export const PROFILE = [
  { label: "Focus", value: "Backend systems, integrations and B2B products" },
  { label: "Experience", value: "10+ years building production software" },
  { label: "Location", value: "Osijek, Croatia. Remote." },
  { label: "Open to", value: "Senior roles, consulting, product collaborations" },
] as const;

export type Engagement = {
  index: string;
  name: string;
  context: string;
  problem: string;
  ownership: readonly string[];
  stack: string;
  link?: { label: string; href: string; ariaLabel: string };
};

export const WORK_INTRO =
  "Professional engagements, each described by the problem I was responsible for rather than the screens I shipped.";

export const WORK: readonly Engagement[] = [
  {
    index: "01",
    name: "GoCierge",
    context: "B2B concierge and booking marketplace",
    problem:
      "A booking workflow where payments, providers and customers all have to agree, even when the external systems don’t.",
    ownership: [
      "Booking and Stripe payment flows built to tolerate duplicate actions and partial failure.",
      "An adapter layer over third-party service-provider APIs, with deliberate retry and conflict handling.",
      "Product ownership from requirements to production, across NestJS, PostgreSQL / Prisma and Next.js.",
    ],
    stack: "TypeScript · NestJS · PostgreSQL · Prisma · Next.js · Stripe",
    link: { label: "Product ↗", href: "https://www.gocierge.com", ariaLabel: "GoCierge product website (external link)" },
  },
  {
    index: "02",
    name: "Zeply",
    context: "Fintech and crypto platform",
    problem:
      "A platform of many small services that had to cooperate without waiting on each other.",
    ownership: [
      "Roughly eight Node.js / TypeScript microservices working together as one platform.",
      "Asynchronous, event-driven workflows over RabbitMQ, with services decoupled from each other.",
      "Fastify-based services written in TypeScript.",
    ],
    stack: "TypeScript · Node.js · Fastify · RabbitMQ",
  },
  {
    index: "03",
    name: "Tiketti",
    context: "Product and platform engineering",
    problem: "Several front ends that needed shared foundations, not duplicated ones.",
    ownership: [
      "A TypeScript monorepo carrying multiple Next.js applications on shared foundations.",
      "Shared React and UI architecture, documented in Storybook.",
      "A Blocks Builder / CMS and the backend integrations behind it.",
    ],
    stack: "TypeScript · React · Next.js · Storybook · Monorepo",
  },
];

export const CAPABILITIES = [
  {
    index: "01",
    title: "Backend & API architecture",
    text: "Designing and evolving backend systems, data models and APIs that need to survive real production constraints.",
  },
  {
    index: "02",
    title: "Integrations & workflow reliability",
    text: "Third-party APIs, payments, async workflows, retries, idempotency and failure handling.",
  },
  {
    index: "03",
    title: "Product engineering",
    text: "Taking ambiguous product requirements through architecture and implementation instead of working only from predefined tickets.",
  },
  {
    index: "04",
    title: "Existing systems & modernization",
    text: "Understanding unfamiliar codebases, identifying real constraints and improving systems without unnecessary rewrites.",
  },
  {
    index: "05",
    title: "AI-enabled products & developer tooling",
    text: "Practical LLM integrations, MCP-based tooling and AI-assisted engineering workflows.",
  },
] as const;

export const PRODUCTS_LABEL = "Built independently";
export const PRODUCTS_INTRO =
  "Products I design and build on my own, where I take ideas from concept through implementation.";

type ProductLink = { label: string; href: string; ariaLabel: string };
type Product = { name: string; tag: string; text: string; links?: readonly ProductLink[] };

// Names render as plain text. Add only real, verified external URLs to `links`.
export const PRODUCTS: readonly Product[] = [
  {
    name: "IstakniMe",
    tag: "AI visibility",
    text: "AI visibility and business discovery, with LLM-provider integrations and MCP tooling.",
    links: [{ label: "Live site ↗", href: "https://istaknime.com", ariaLabel: "IstakniMe live site (external link)" }],
  },
  {
    name: "Manifestacije.hr",
    tag: "Local events",
    text: "Local event discovery.",
    links: [{ label: "Live site ↗", href: "https://manifestacije.hr", ariaLabel: "Manifestacije.hr live site (external link)" }],
  },
  {
    name: "Kiroq",
    tag: "Developer tooling",
    text: "Developer CLI and AI-context tooling.",
    links: [
      { label: "npm ↗", href: "https://www.npmjs.com/package/kiroq", ariaLabel: "Kiroq on npm (external link)" },
      { label: "GitHub ↗", href: "https://github.com/nebs-dev/kiroq", ariaLabel: "Kiroq on GitHub (external link)" },
    ],
  },
];

export const CONTACT_STATEMENT =
  "Available for senior engineering roles, consulting engagements and selected product collaborations.";
