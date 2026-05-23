# PhoneRepairPOS Site

Marketing website for [PhoneRepairPOS](https://phonerepairpos.app), the iPad point-of-sale app built for phone repair shops.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** MDX
- **Hosting:** GitHub Pages

## Local Development

Prerequisites: Node.js 20+

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:3000.

## Building

```bash
npm run build
```

Produces a static site in the `/out` directory.

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deploy steps.

Custom domain: `phonerepairpos.app`

## Project Structure

- `src/app/` — Pages (homepage, blog, privacy, terms)
- `src/components/` — React components
- `src/styles/` — Tailwind config and typography
- `src/images/` — Site screenshots
- `mdx/` — MDX plugins (remark, rehype, recma)
- `public/` — Static assets (favicons, OG image, sitemap, robots.txt)
