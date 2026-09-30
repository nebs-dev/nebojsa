# nebojsa-stojanovic

Personal website for Nebojsa Stojanovic, Senior Software Engineer & Technical Consultant.

## Stack

Next.js (App Router), React, TypeScript, plain CSS. Fonts via `next/font/google`. No UI framework.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Structure

```
app/
  layout.tsx        fonts (next/font), metadata
  page.tsx          homepage composition
  globals.css       all styles (tokens, mobile-first, desktop >= 1100px)
components/         one component per homepage section
content/site.ts     all copy and links
design/             approved reference boards (open in a browser)
```

## Config

- Contact details: `CONTACT` in `content/site.ts` (email lives in one constant).
- Production domain: set `NEXT_PUBLIC_SITE_URL` (enables canonical URL, `metadataBase`, sitemap).
- Product links: add `href` to an entry in `PRODUCTS` only when a real URL exists.

## Alternative hero headlines (not applied)

1. I take ownership of backend systems, integrations and the product decisions around them.
2. Senior software engineer for backend systems and integrations that have to work in production.
3. Technical ownership for B2B products: architecture, integrations and delivery, end to end.

Current: "I build and improve backend systems, integrations and digital products." Change in `HERO.headline`.
