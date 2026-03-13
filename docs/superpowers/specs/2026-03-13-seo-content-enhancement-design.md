# PhoneRepairPOS Website SEO & Content Enhancement

**Date:** 2026-03-13
**Goal:** Increase organic search traffic by building SEO infrastructure and a content library targeting phone repair shop owners globally.
**Approach:** SEO-First Content Engine — focus on discoverability and content volume over visual redesign.
**Tech:** Static HTML on GitHub Pages (no build tools, no framework change).
**App Store URL:** https://apps.apple.com/gb/app/phone-repair-pos/id6759859240

---

## 1. SEO Infrastructure

### 1.1 sitemap.xml
Static XML file at site root listing all pages:
- Homepage: priority 1.0, changefreq weekly
- Blog index: priority 0.9, changefreq weekly
- Blog posts (21 total): priority 0.8, changefreq monthly
- Privacy/Terms: priority 0.5, changefreq monthly

Update manually when new pages are added.

### 1.2 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://phonerepairpos.app/sitemap.xml
```

Note: `.superpowers/` is gitignored and never deployed, so no need to disallow it.

### 1.3 Structured Data (JSON-LD)

**Homepage:**
- `SoftwareApplication`: name, applicationCategory (BusinessApplication), operatingSystem (iPadOS), offers (price "0", priceCurrency "USD", availability), installUrl (App Store URL), description
- `Organization`: name, url, logo, foundingDate

**Blog index:**
- `Blog`: name, description, url, publisher

**Blog posts:**
- `BlogPosting`: headline, datePublished, dateModified, author (Person), publisher (Organization), description, mainEntityOfPage

**Landing page FAQ section:**
- `FAQPage`: array of `Question` + `acceptedAnswer` pairs

### 1.4 Enhanced Meta Tags (all pages)
- `<link rel="canonical" href="...">` — absolute URL for each page
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title">`, `<meta name="twitter:description">`
- `<meta property="og:image">` — default branded social share image (see section 1.6)
- `<meta property="og:locale" content="en">`

### 1.5 Favicon
Create a simple inline SVG favicon using the brand's purple color (#5B5EF4) with a wrench/repair motif. Delivered as:
- `favicon.svg` — primary, inline SVG
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- `<link rel="icon" type="image/png" href="/favicon-32x32.png">` — fallback PNG
- `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` — 180x180 PNG

All favicon files stored at site root. Referenced in `<head>` of every page.

### 1.6 OG Share Image
Create a static `og-image.png` (1200x630px) stored at site root. Design: solid dark background (#111136) with the PhoneRepairPOS wordmark centered, tagline below ("The iPad POS built for phone repair shops"), and brand purple accent. This will be a simple HTML-to-image or manually created asset.

Path: `/og-image.png`
Referenced as: `<meta property="og:image" content="https://phonerepairpos.app/og-image.png">`

---

## 2. Landing Page Enhancements

### 2.1 FAQ Section
Placed before the final CTA banner. Uses native `<details>`/`<summary>` HTML elements for the accordion — no JavaScript required, accessible by default. Styled to match the existing design language (rounded corners, brand colors, subtle borders).

8 questions:

1. What is PhoneRepairPOS?
2. Who is PhoneRepairPOS for?
3. Does it work offline?
4. What devices does it support?
5. How much does it cost?
6. Can I track repair status with it?
7. Is my customer data private and secure?
8. How do I get started?

Each Q&A pair included in `FAQPage` JSON-LD structured data.

### 2.2 Enhanced Footer
- Add blog link
- Add "Built for repair shops worldwide" tagline
- Keep existing links (privacy, terms, contact)

### 2.3 Fix Broken CTA Links
All "Download" nav links and CTA buttons currently point to `../index.html#` or `#`. Update every CTA across the site to point to the actual App Store URL: `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`

---

## 3. Blog Content Strategy

### 3.1 Content Volume
21 posts total: 1 existing full post + 6 referenced posts (need HTML pages) + 14 new keyword-targeted posts. All across 4 categories: Business, Tips, Guide, Workflow.

All blog post body content will be AI-generated during implementation, targeting 1,200-1,800 words per post. Content should be practical, actionable, and written for repair shop owners — not marketing fluff.

### 3.2 Existing Full Post (1)
Already has a complete HTML page:

| # | Title | Category | File |
|---|-------|----------|------|
| 1 | 5 Ways to Speed Up Your Repair Workflow Without Cutting Corners | Workflow | `5-ways-to-speed-up-your-repair-workflow.html` |

This post will be modified to add structured data, canonical URL, and enhanced meta tags.

### 3.3 Referenced Posts Missing Pages (6)
These appear on the blog index with links but have no HTML pages yet. Filenames must match the existing `href` values in `blog/index.html`:

| # | Title | Category | File (must match existing link) | Primary Keyword |
|---|-------|----------|------|----------------|
| 2 | Why Paper Tickets Are Costing You Money | Business | `why-paper-tickets-are-costing-you-money.html` | paper tickets repair shop |
| 3 | How to Handle Customer Disputes Like a Pro | Tips | `how-to-handle-customer-disputes.html` | customer disputes repair shop |
| 4 | iPad POS vs Traditional Till | Guide | `ipad-pos-vs-traditional-till.html` | iPad POS vs till |
| 5 | Tracking Repair Status: Why It Matters | Workflow | `tracking-repair-status-why-it-matters.html` | repair status tracking |
| 6 | A Straightforward Guide to Setting Repair Prices | Business | `setting-repair-prices-guide.html` | repair pricing guide |
| 7 | Marketing Your Repair Shop on a Budget | Tips | `phone-repair-shop-marketing.html` | repair shop marketing |

### 3.4 New Keyword-Targeted Posts (14)

**Comparison / High Intent (5):**

| # | Title | Category | File | Primary Keyword |
|---|-------|----------|------|----------------|
| 8 | Best POS Systems for Phone Repair Shops in 2026 | Guide | `best-pos-systems-for-phone-repair-shops-2026.html` | best POS phone repair shop |
| 9 | Phone Repair Shop Software: What to Look For | Guide | `phone-repair-shop-software-what-to-look-for.html` | phone repair shop software |
| 10 | RepairDesk vs PhoneRepairPOS: Which Is Right for You? | Guide | `repairdesk-vs-phonerepairpos.html` | RepairDesk alternative |
| 11 | Free vs Paid Repair Shop Software: What You Actually Get | Business | `free-vs-paid-repair-shop-software.html` | free repair shop software |
| 12 | Do You Really Need a POS System for Your Repair Shop? | Business | `do-you-need-a-pos-system-for-your-repair-shop.html` | POS system repair shop |

**How to Run a Repair Shop / Top of Funnel (5):**

| # | Title | Category | File | Primary Keyword |
|---|-------|----------|------|----------------|
| 13 | How to Start a Phone Repair Business: A Practical Guide | Guide | `how-to-start-a-phone-repair-business.html` | how to start phone repair business |
| 14 | How to Manage Repair Tickets Without Losing Your Mind | Tips | `how-to-manage-repair-tickets.html` | manage repair tickets |
| 15 | 7 Common Mistakes New Repair Shop Owners Make | Tips | `7-common-mistakes-new-repair-shop-owners-make.html` | repair shop mistakes |
| 16 | How to Price Screen Repairs for Profit | Business | `how-to-price-screen-repairs-for-profit.html` | screen repair pricing |
| 17 | Building Customer Trust in Your Repair Shop | Tips | `building-customer-trust-in-your-repair-shop.html` | customer trust repair shop |

**Workflow / Productivity / Mid Funnel (4):**

| # | Title | Category | File | Primary Keyword |
|---|-------|----------|------|----------------|
| 18 | Going Paperless: A Guide for Repair Shops | Workflow | `going-paperless-a-guide-for-repair-shops.html` | paperless repair shop |
| 19 | Why Offline-First Software Matters for Repair Shops | Workflow | `why-offline-first-software-matters-for-repair-shops.html` | offline POS repair shop |
| 20 | Using an iPad to Run Your Repair Shop | Guide | `using-an-ipad-to-run-your-repair-shop.html` | iPad repair shop |
| 21 | How to Track Parts and Inventory as a Solo Repairer | Workflow | `how-to-track-parts-and-inventory.html` | repair parts inventory tracking |

### 3.5 Post Specifications
- Length: 1,200-1,800 words each
- One primary keyword per post (used in title, meta description, h1, first paragraph, naturally throughout)
- 2-3 internal links to related posts (see linking map in section 4.3)
- CTA block at end linking to App Store URL: `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`
- Estimated read time in metadata

---

## 4. Blog Template & Structure

### 4.1 HTML Template Per Post
Matches existing `5-ways-to-speed-up-your-repair-workflow.html` style:
- Gradient hero header with category badge
- Title + metadata (date, read time)
- Article body with semantic h2/h3 headings
- Related posts links section (2-3 links)
- CTA block ("Try PhoneRepairPOS" + App Store link)
- Full meta tags (title, description, canonical, OG, Twitter)
- BlogPosting JSON-LD

CSS is inline in each post, matching the existing pattern. While this means duplicated CSS across 21 posts, it is consistent with the current approach and avoids introducing a shared stylesheet at this stage.

### 4.2 Category Badge Colors
Match the existing blog index CSS exactly:

- **Workflow** (default): purple `#5B5EF4` / bg `rgba(91, 94, 244, 0.08)`
- **Business**: orange `#E69326` / bg `rgba(230, 147, 38, 0.08)`
- **Guide**: warm-accent `#FF6B4A` / bg `rgba(255, 107, 74, 0.08)`
- **Tips**: green `#10B981` / bg `rgba(16, 185, 129, 0.08)`

### 4.3 Internal Linking Map
Each post links to 2-3 related posts. Links are chosen by category affinity and topic relevance:

**Business posts** (2, 6, 11, 12, 16) link to each other and to Workflow posts.
**Tips posts** (3, 7, 14, 15, 17) link to each other and to Guide posts.
**Guide posts** (4, 8, 9, 10, 13, 20) link to each other and to Business posts.
**Workflow posts** (1, 5, 18, 19, 21) link to each other and to Tips posts.

Specific linking decisions are made at implementation time based on content overlap, but every post must have at least 2 internal links to other blog posts plus 1 link to the homepage or App Store.

### 4.4 CTA Links
All blog post CTAs and "Download" nav links must point to:
`https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`

Do NOT use `../index.html#` or other broken anchors.

---

## 5. Blog Index Enhancement

### 5.1 Category Filter Pills
Add filter buttons above the post grid:
- All | Business | Tips | Guide | Workflow
- JavaScript-based filtering (show/hide posts by `data-category` attribute on each card)
- "All" selected by default
- Use consistent singular category names throughout (not "Guides")

### 5.2 Expanded Grid
- Show all 21 posts in the existing card grid layout
- Keep featured post highlight for the newest/most important post
- Cards for new posts follow the same markup pattern as existing cards

### 5.3 Newsletter CTA
The existing newsletter form has no backend and submitting it does nothing. Replace the newsletter signup form with a simpler CTA: "Try PhoneRepairPOS — download free on the App Store" with a direct link to the App Store URL. This avoids user frustration from a non-functional form.

---

## 6. Files Created/Modified

### New Files
- `sitemap.xml`
- `robots.txt`
- `favicon.svg`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `og-image.png`
- `blog/why-paper-tickets-are-costing-you-money.html`
- `blog/how-to-handle-customer-disputes.html`
- `blog/ipad-pos-vs-traditional-till.html`
- `blog/tracking-repair-status-why-it-matters.html`
- `blog/setting-repair-prices-guide.html`
- `blog/phone-repair-shop-marketing.html`
- `blog/best-pos-systems-for-phone-repair-shops-2026.html`
- `blog/phone-repair-shop-software-what-to-look-for.html`
- `blog/repairdesk-vs-phonerepairpos.html`
- `blog/free-vs-paid-repair-shop-software.html`
- `blog/do-you-need-a-pos-system-for-your-repair-shop.html`
- `blog/how-to-start-a-phone-repair-business.html`
- `blog/how-to-manage-repair-tickets.html`
- `blog/7-common-mistakes-new-repair-shop-owners-make.html`
- `blog/how-to-price-screen-repairs-for-profit.html`
- `blog/building-customer-trust-in-your-repair-shop.html`
- `blog/going-paperless-a-guide-for-repair-shops.html`
- `blog/why-offline-first-software-matters-for-repair-shops.html`
- `blog/using-an-ipad-to-run-your-repair-shop.html`
- `blog/how-to-track-parts-and-inventory.html`

### Modified Files
- `index.html` — add FAQ section, enhanced footer, structured data, canonical, Twitter/OG meta, favicon refs, fix CTA links to App Store URL
- `blog/index.html` — add category filter pills, expand grid to all 21 posts, add structured data, replace newsletter form with App Store CTA, fix nav Download link to App Store URL
- `blog/5-ways-to-speed-up-your-repair-workflow.html` — add structured data, canonical, enhanced meta, fix CTA links to App Store URL
- `privacy.html` — add canonical, enhanced meta, favicon refs
- `terms.html` — add canonical, enhanced meta, favicon refs

---

## 7. Out of Scope
- Framework migration (stays static HTML)
- Visual redesign of existing sections
- Testimonials / social proof (no customer data yet)
- Niche landing pages (phone vs tablet vs laptop)
- Analytics setup (separate task)
- Newsletter signup backend
- Shared CSS stylesheet (keeping inline CSS to match existing pattern)
