# Portfolio — Marek Kacprzak

Single-page personal site built with Next.js 16, TypeScript, Tailwind v4, and MDX (wired up but unused in v1).

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
  ClarityAnalytics.tsx  # Microsoft Clarity loader, mounted from the root layout
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
  resume.pdf       # embedded leadership CV; Hero links to /resume.pdf
```

## Editing content

All copy lives in [lib/content.ts](lib/content.ts):

- `profile` — name, tagline, contact links
- `about` — array of paragraphs
- `projects` — project cards (slug, title, tagline, description, tech, year, optional links)
- `experience` — role / org / period / summary
- `skillGroups` — grouped skills shown two-up

## Analytics

Microsoft Clarity loads through the [@microsoft/clarity](https://www.npmjs.com/package/@microsoft/clarity) package. Copy `.env.example` to `.env.local` and set the project id from clarity.microsoft.com → your project → Settings → Overview:

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=abcd1234
```

[components/ClarityAnalytics.tsx](components/ClarityAnalytics.tsx) calls `Clarity.init` after mount, which appends the `clarity.ms` tag to the document head. Leave the variable unset and the site ships with no tag and no request to Clarity.

The id is inlined at build time, so a change needs a rebuild.

## Visual system

Tailwind v4 with a tiny theme defined in [app/globals.css](app/globals.css):

- `--color-bg` / `--color-fg` — warm off-white + near-black
- `--color-muted` / `--color-subtle` — secondary + tertiary text
- `--color-accent` — burnt orange (`#c2410c`), used sparingly for the hero rule, the CTA hover, and external-link callouts
- `--color-border` — section dividers and card hairlines

Geist Sans + Geist Mono via `next/font/google`.

## Deploying to Cloudflare Pages

This site is configured for **static export** (`output: "export"` in [next.config.ts](next.config.ts)), so Cloudflare Pages serves it as plain HTML/CSS/JS — no Workers runtime needed.

1. Push the repo to GitHub.
2. <https://dash.cloudflare.com> → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 24 (set via env var `NODE_VERSION=24`, or rely on `.nvmrc`)
4. Add `NEXT_PUBLIC_CLARITY_PROJECT_ID` under **Settings → Environment variables** to run Clarity on the deployed site.
5. Save and deploy. Live at `<project>.pages.dev` in ~90s.

Every push to `main` → production deploy. Every PR / branch → preview URL.

The only environment variable is the optional Clarity project id described under [Analytics](#analytics).

## TODO before going live

- [x] Leadership CV embedded at `public/resume.pdf`
- [ ] Add repo / demo links to the projects in `lib/content.ts` (`links` field)
- [ ] Consider an OG image at `app/opengraph-image.tsx` (Next.js will pick it up automatically)
- [ ] Sanity-check accessibility: tab order, focus rings, contrast on the muted text
