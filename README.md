# Jungle Diaries

Website for **Jungle Diaries**, the Jim Corbett travel and wildlife company behind
**Amaltas Villa by Jungle Diaries** and **Destinn Dhela Retreat** (Dhela Road, Ramnagar, Uttarakhand).

Built with Next.js 16 (App Router, Turbopack), React 19, TypeScript and Tailwind CSS v4. Every page is
statically generated.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: brand intro, both stays, links into the rest of the site |
| `/amaltas-villa` | Amaltas Villa: rooms, facilities, who it suits |
| `/destinn-dhela-retreat` | Destinn Dhela Retreat: a day at Destinn, dining, distances |
| `/safaris` | Corbett safari zones and seasons |
| `/journeys` | Uttarakhand tours, groups, weddings, map of destinations |
| `/about` | Beliefs, principles and the team |
| `/plan-a-trip` | Trip planner that opens WhatsApp with a ready message, plus contact details |

`/plan-a-trip#amaltas`, `#destinn`, `#tour` and `#safari` pre-select the matching option in the planner.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project layout

```
src/
  app/            routes, layout, metadata, sitemap, robots, icons, share image
  components/     header, footer, page blocks, trip planner, map, zones table
  fonts/          self-hosted Rozha One, Mukta and Kalam (SIL Open Font License)
  images/         optimised property photos and logos (served through next/image)
  lib/site.ts     phone numbers, WhatsApp number, external links, navigation
```

## Editing content

- **Phone numbers, WhatsApp, email, Instagram and website links:** `src/lib/site.ts`
- **Page copy:** the `page.tsx` file for each route in `src/app/`
- **Colours, type scale and section tones:** `src/app/globals.css` (`@theme` block). Dark mode overrides
  live in the `prefers-color-scheme: dark` block in the same file.
- **Photos:** replace files in `src/images/` with the same names (JPEG, around 1600–2000 px wide).

## Deployment

The repository is connected to Vercel (team **Eazotel**). Every push to `main` deploys to production;
pushes to other branches create preview deployments.

## Content to confirm with the client

- Whether Destinn Dhela Retreat is open for bookings or still "opening soon"
- The sixth room at Amaltas (the fact sheet lists 6 rooms but 5 room types)
- Reservation numbers before launch
- Safari season dates each year (set by Corbett Tiger Reserve)
