# CLAUDE.md — nebojsa (personal professional website)

Next.js (App Router) + TypeScript + plain CSS. No UI framework, no animation library.

## Status
The homepage design is **approved**. It was implemented 1:1 from two reference boards in `design/`:
- `design/homepage-desktop.dc.html` — 1440px board
- `design/homepage-mobile.dc.html` — 390px board

Do not redesign. If a change is requested, keep typography, spacing, palette and layout intact unless told otherwise.

## Positioning (guides all copy)
Senior software engineer + independent technical consultant. Owns ambiguous problems end to end. Not a freelancer selling web dev, not a generic job-seeker.
Avoid: "passionate", "I love coding", skill bars, animated logos, fake metrics/counters, buzzwords, agency language, gradients, glassmorphism, heavy animation, SaaS-style cards.

## Copy rules
- All copy is in `content/site.ts`. Edit there, not in components.
- Never invent metrics, outcomes, clients or scale. Only claims supported by the CV / dossier.
- Notes section removed for now. Case-study links removed until pages exist. Professional experience = names only (no dates, titles, logos). LoadIQ is live (loadiq.fit).
- Placeholders still to replace: `CONTACT.email`, `CONTACT.linkedin` in `content/site.ts`.

## Design tokens (`app/globals.css`)
- Fonts: Newsreader (serif; headlines + reading) and Instrument Sans (labels, lists, UI), via `next/font/google`.
- Colors: paper `#F7F5F0`, ink `#1C1C1A`, body `#33322E`, muted `#66655F`, rule `#DDD9CE`, accent `#1F5B58` (links, index numerals, primary CTA only).
- Desktop layout from 1100px (reference: 1440, 120px margins, 240px label column + 60px gap, 12-col grid, 24px gutter). Mobile-first below (reference: 390, 20px margins).
- Section rhythm: 96px vertical padding desktop, 56px mobile; hairline top rule on every section.
- Keep: no cards, no shadows, no gradients, no decorative art, minimal borders (hairlines only).

## Known implementation choices not in the boards
- Mobile "Menu +" opens a plain text link list using native `<details>` (no JS).
- Product links still point to in-page anchors. Planned routes: `/work/*`, `/projects`, `/notes`, `/about`.

## Commands
`npm run dev` · `npm run build` · `npm run typecheck`
