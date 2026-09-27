# PhoneRepairPOS Site

Marketing site for the PhoneRepairPOS iPad app — lives at https://phonerepairpos.app.

---

## Tech Stack

- Next.js 16 (App Router) with static export (`output: 'export'`)
- React 19
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- MDX for content pages (blog posts, privacy, terms, homepage)
- Mona Sans (local variable font) + Inter (Google Fonts)
- next-themes (dark mode forced on via `forcedTheme="dark"`)

---

## Running Locally

```bash
npm install
npm run dev
```

Dev server runs on http://localhost:3000.

Build for production:

```bash
npm run build
```

Static output goes to `/out`.

---

## Project Structure

```
src/
  app/
    layout.tsx        — Root layout, metadata, structured data, GA4 script
    sitemap.ts        — Generates /sitemap.xml
    page.mdx          — Homepage (features, how it works, FAQ)
    providers.tsx      — ThemeProvider wrapper
    not-found.tsx      — 404 page
    blog/
      page.tsx         — Blog index
      *.../page.mdx    — Individual blog posts
    privacy/           — Privacy policy (MDX)
    terms/             — Terms of service (MDX)
  components/          — React components (Layout, Intro, Button, mdx, etc.)
  fonts/               — Mona-Sans.var.woff2
  images/              — Screenshots used on the site
  styles/
    tailwind.css       — Tailwind entry point + theme config
    typography.css     — Prose typography styles
mdx/                   — MDX plugins (remark, rehype, recma)
public/                — Static assets (favicons, OG image, robots.txt, CNAME)
```

---

## Deployment

Deploys automatically to **GitHub Pages** on push to `main`.

- Workflow: `.github/workflows/deploy.yml`
- Builds with `npm ci && npm run build`, uploads `/out` as a Pages artifact
- Custom domain: `phonerepairpos.app` (set via `CNAME` file in both root and `/public`)

---

## Key Details

- The site uses `output: 'export'` — no server-side features (no API routes, no SSR, no ISR). All pages must be statically exportable.
- Images are unoptimized (`images: { unoptimized: true }`) because GitHub Pages does not support Next.js image optimization.
- Dark mode is forced on — the `ThemeProvider` uses `forcedTheme="dark"`. The `ThemeToggle` component exists but the forced theme overrides it.
- Path alias: `@/*` maps to `./src/*`.
- Prettier config uses single quotes, no semicolons, and the Tailwind CSS plugin.
- `/sitemap.xml` is generated from `src/app/sitemap.ts` at build time. Each page has a hand-set `lastModified` there: add a row when you add a page, and bump its date when you change its content. `robots.txt` is still hand-maintained in `/public`.
- Localized landing pages (`src/app/<locale>/page.tsx`, 13 locales incl. RTL `he`/`ar`) all render `LocalizedLanding`. A new locale needs its page, a `lang` (and `dir="rtl"` if RTL), an entry in `src/components/landingAlternates.ts`, the language nav in `src/components/Intro.tsx`, and a sitemap row.
- `npm run lint` runs ESLint directly (`eslint.config.mjs`, flat config from `eslint-config-next`).
- Blog posts are MDX files inside `src/app/blog/<slug>/page.mdx`.
- The homepage layout is a fixed sidebar (intro + star field) with a scrollable main content area.
