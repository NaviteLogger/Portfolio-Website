# Portfolio — Marek Kacprzak

Single-page personal site built with Next.js 15, TypeScript, Tailwind v4, and MDX (wired up but unused in v1).

## Run

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # single-page composition
  globals.css       # Tailwind v4 import + theme tokens
components/
  Hero.tsx
  NavBar.tsx
  About.tsx
  Projects.tsx
  Experience.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  Section.tsx      # shared section wrapper (eyebrow + title + content grid)
lib/
  content.ts       # all profile / project / experience / skills data
content/projects/  # reserved for MDX project deep-dives if you add /projects/[slug] later
public/
  resume.pdf       # drop the latest CV here; Hero links to /resume.pdf
```

## Editing content

All copy lives in [lib/content.ts](lib/content.ts):

- `profile` — name, tagline, contact links
- `about` — array of paragraphs
- `projects` — project cards (slug, title, tagline, description, tech, year, optional links)
- `experience` — role / org / period / summary
- `skillGroups` — grouped skills shown two-up

## Visual system

Tailwind v4 with a tiny theme defined in [app/globals.css](app/globals.css):

- `--color-bg` / `--color-fg` — warm off-white + near-black
- `--color-muted` / `--color-subtle` — secondary + tertiary text
- `--color-accent` — burnt orange (`#c2410c`), used sparingly for the hero rule, the CTA hover, and external-link callouts
- `--color-border` — section dividers and card hairlines

Geist Sans + Geist Mono via `next/font/google`.

## Deploying to Vercel

```bash
# from this directory
npx vercel
# or push to GitHub and import the repo at https://vercel.com/new
```

No env vars required.

## TODO before going live

- [ ] Drop the latest `resume.pdf` into `public/`
- [ ] Add repo / demo links to the projects in `lib/content.ts` (`links` field)
- [ ] Replace `https://marekkacprzak.dev` in [app/layout.tsx](app/layout.tsx) `metadataBase` with the real domain
- [ ] Consider an OG image at `app/opengraph-image.tsx` (Next.js will pick it up automatically)
- [ ] Sanity-check accessibility: tab order, focus rings, contrast on the muted text
