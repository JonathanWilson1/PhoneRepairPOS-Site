# PhoneRepairPOS SEO & Content Enhancement Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add SEO infrastructure (sitemap, robots.txt, structured data, favicons) and ~20 blog posts to drive organic search traffic to phonerepairpos.app.

**Architecture:** Static HTML site on GitHub Pages. No build tools. All CSS inline per page. Blog posts follow the existing template pattern from `5-ways-to-speed-up-your-repair-workflow.html`. Content is AI-generated at implementation time.

**Tech Stack:** HTML5, inline CSS, vanilla JavaScript, GitHub Pages hosting.

**Spec:** `docs/superpowers/specs/2026-03-13-seo-content-enhancement-design.md`

**App Store URL:** `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`

---

## File Structure

### New Files
```
/ (site root)
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── favicon-32x32.png          (placeholder — manual asset)
├── apple-touch-icon.png        (placeholder — manual asset)
├── og-image.png                (placeholder — manual asset)
└── blog/
    ├── why-paper-tickets-are-costing-you-money.html
    ├── how-to-handle-customer-disputes.html
    ├── ipad-pos-vs-traditional-till.html
    ├── tracking-repair-status-why-it-matters.html
    ├── setting-repair-prices-guide.html
    ├── phone-repair-shop-marketing.html
    ├── best-pos-systems-for-phone-repair-shops-2026.html
    ├── phone-repair-shop-software-what-to-look-for.html
    ├── repairdesk-vs-phonerepairpos.html
    ├── free-vs-paid-repair-shop-software.html
    ├── do-you-need-a-pos-system-for-your-repair-shop.html
    ├── how-to-start-a-phone-repair-business.html
    ├── how-to-manage-repair-tickets.html
    ├── 7-common-mistakes-new-repair-shop-owners-make.html
    ├── how-to-price-screen-repairs-for-profit.html
    ├── building-customer-trust-in-your-repair-shop.html
    ├── going-paperless-a-guide-for-repair-shops.html
    ├── why-offline-first-software-matters-for-repair-shops.html
    ├── using-an-ipad-to-run-your-repair-shop.html
    └── how-to-track-parts-and-inventory.html
```

### Modified Files
```
├── index.html                  (FAQ section, footer, meta tags, structured data, fix CTAs)
├── privacy.html                (canonical, meta, favicon refs)
├── terms.html                  (canonical, meta, favicon refs)
└── blog/
    ├── index.html              (category pills, expanded grid, App Store CTA, fix nav links)
    └── 5-ways-to-speed-up-your-repair-workflow.html  (structured data, canonical, meta, fix CTAs)
```

---

## Chunk 1: Infrastructure & Landing Page

### Task 1: Create robots.txt and sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create robots.txt**

Write to `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://phonerepairpos.app/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

Write to `sitemap.xml` with all 25 pages. Use 2026-03-13 as lastmod for new content, 2026-03-06 for existing content.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://phonerepairpos.app/</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/5-ways-to-speed-up-your-repair-workflow.html</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/why-paper-tickets-are-costing-you-money.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/how-to-handle-customer-disputes.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/ipad-pos-vs-traditional-till.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/tracking-repair-status-why-it-matters.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/setting-repair-prices-guide.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/phone-repair-shop-marketing.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/best-pos-systems-for-phone-repair-shops-2026.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/phone-repair-shop-software-what-to-look-for.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/repairdesk-vs-phonerepairpos.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/free-vs-paid-repair-shop-software.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/do-you-need-a-pos-system-for-your-repair-shop.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/how-to-start-a-phone-repair-business.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/how-to-manage-repair-tickets.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/7-common-mistakes-new-repair-shop-owners-make.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/how-to-price-screen-repairs-for-profit.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/building-customer-trust-in-your-repair-shop.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/going-paperless-a-guide-for-repair-shops.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/why-offline-first-software-matters-for-repair-shops.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/using-an-ipad-to-run-your-repair-shop.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/blog/how-to-track-parts-and-inventory.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/privacy.html</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://phonerepairpos.app/terms.html</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Verify XML is well-formed**

Run: `xmllint --noout sitemap.xml`
Expected: No output (valid XML)

- [ ] **Step 4: Commit**

```bash
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

### Task 2: Create favicon.svg

**Files:**
- Create: `favicon.svg`

Note: `favicon-32x32.png`, `apple-touch-icon.png`, and `og-image.png` are image assets that need to be created manually or with an image tool. For now, create only the SVG favicon which can be generated as code. The PNG assets are out of scope for this plan and should be created separately.

- [ ] **Step 1: Create favicon.svg**

Write an SVG favicon — a simple wrench/repair icon in brand purple (#5B5EF4) on a rounded square background:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#5B5EF4"/>
  <text x="16" y="22" text-anchor="middle" font-size="18" font-family="system-ui, sans-serif" font-weight="800" fill="white">R</text>
</svg>
```

This is a placeholder. A proper icon can replace it later.

- [ ] **Step 2: Commit**

```bash
git add favicon.svg
git commit -m "feat: add SVG favicon"
```

---

### Task 3: Enhance landing page (index.html)

**Files:**
- Modify: `index.html`

This task adds: FAQ section with FAQPage schema, enhanced footer, structured data (SoftwareApplication + Organization), canonical URL, Twitter/OG meta enhancements, favicon refs, and fixes all broken CTA links.

- [ ] **Step 1: Add favicon and enhanced meta tags to `<head>`**

In `index.html`, after the existing `<meta property="og:url"...>` tag (line ~11):

First, update the existing `og:url` to include trailing slash for consistency:
Change `content="https://phonerepairpos.app"` to `content="https://phonerepairpos.app/"`

Then add these tags immediately after:

```html
    <link rel="canonical" href="https://phonerepairpos.app/">
    <meta property="og:locale" content="en">
    <meta property="og:image" content="https://phonerepairpos.app/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="PhoneRepairPOS — iPad POS for Phone Repair Shops">
    <meta name="twitter:description" content="Manage jobs, track repairs, and get paid faster with the POS built for repair shops.">
    <meta name="twitter:image" content="https://phonerepairpos.app/og-image.png">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

- [ ] **Step 2: Add structured data before closing `</head>`**

Insert this JSON-LD script block just before `</head>`:

```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "PhoneRepairPOS",
          "url": "https://phonerepairpos.app",
          "logo": "https://phonerepairpos.app/favicon.svg",
          "foundingDate": "2026",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "support@phonerepairpos.app",
            "contactType": "customer support"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "PhoneRepairPOS",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "iPadOS",
          "description": "The all-in-one iPad point-of-sale system designed specifically for phone repair shops. Manage jobs, track repairs, and get paid faster.",
          "url": "https://phonerepairpos.app",
          "installUrl": "https://apps.apple.com/gb/app/phone-repair-pos/id6759859240",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    }
    </script>
```

- [ ] **Step 3: Add FAQ section before the CTA banner**

Find the `<!-- CTA Banner -->` comment (~line 2336) and insert the FAQ section above it. The FAQ section uses `<details>`/`<summary>` elements.

Add this CSS inside the existing `<style>` block:

```css
/* ===== FAQ ===== */
.faq-section {
    max-width: 760px;
    margin: 0 auto;
    padding: 5rem 2rem;
}

.faq-section .section-label {
    text-align: center;
}

.faq-section h2 {
    text-align: center;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: var(--dark);
    letter-spacing: -0.03em;
    margin-bottom: 2.5rem;
}

.faq-item {
    border-bottom: 1px solid var(--border, #E4E4EE);
    padding: 0;
}

.faq-item summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--dark);
    cursor: pointer;
    list-style: none;
    transition: color 0.2s;
}

.faq-item summary::-webkit-details-marker { display: none; }

.faq-item summary::after {
    content: '+';
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text-light);
    transition: transform 0.2s;
    flex-shrink: 0;
    margin-left: 1rem;
}

.faq-item[open] summary::after {
    content: '−';
}

.faq-item summary:hover { color: var(--primary); }

.faq-answer {
    padding: 0 0 1.25rem;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-light);
}
```

Add this HTML before `<!-- CTA Banner -->`:

```html
    <!-- FAQ -->
    <section class="faq-section" id="faq">
        <div class="section-label">FAQ</div>
        <h2>Frequently asked questions</h2>

        <details class="faq-item">
            <summary>What is PhoneRepairPOS?</summary>
            <div class="faq-answer">PhoneRepairPOS is an iPad app that replaces paper tickets, spreadsheets, and sticky notes with a simple digital system for managing phone repairs. Create tickets, track repair status, record payments, and keep customer records — all from your iPad.</div>
        </details>

        <details class="faq-item">
            <summary>Who is PhoneRepairPOS for?</summary>
            <div class="faq-answer">It's built for phone repair shop owners and technicians — whether you're a solo repairer working from a market stall or a multi-staff high street shop. If you fix phones and need a better way to manage jobs, it's for you.</div>
        </details>

        <details class="faq-item">
            <summary>Does it work offline?</summary>
            <div class="faq-answer">Yes. PhoneRepairPOS is 100% offline capable. All your data is stored locally on your iPad. No internet connection is required to create tickets, update statuses, or record payments. If you use iCloud, your data syncs when you're back online.</div>
        </details>

        <details class="faq-item">
            <summary>What devices does it support?</summary>
            <div class="faq-answer">PhoneRepairPOS runs on iPad. It's designed specifically for the iPad's larger screen, so you get a full dashboard view — not a stretched-out phone app.</div>
        </details>

        <details class="faq-item">
            <summary>How much does it cost?</summary>
            <div class="faq-answer">PhoneRepairPOS is free to download from the App Store. Download it and start using it straight away — no sign-up, no credit card, no trial period.</div>
        </details>

        <details class="faq-item">
            <summary>Can I track repair status with it?</summary>
            <div class="faq-answer">Yes. Every repair ticket moves through status stages — Received, Diagnosing, Repairing, Waiting for Parts, Ready for Collection, and Collected. You and your team can see where every job stands at a glance.</div>
        </details>

        <details class="faq-item">
            <summary>Is my customer data private and secure?</summary>
            <div class="faq-answer">Your data stays on your iPad. PhoneRepairPOS uses local storage (Core Data) and optionally iCloud for sync. There is no third-party server, no analytics tracking, and no one else has access to your customer records.</div>
        </details>

        <details class="faq-item">
            <summary>How do I get started?</summary>
            <div class="faq-answer">Download PhoneRepairPOS from the App Store, open it on your iPad, and create your first ticket. There's no account to set up and no configuration needed. You'll be managing repairs in under a minute.</div>
        </details>
    </section>
```

- [ ] **Step 4: Add FAQPage structured data**

Add a second `<script type="application/ld+json">` block after the first one (or merge into the `@graph` array). This contains the FAQPage schema:

```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is PhoneRepairPOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PhoneRepairPOS is an iPad app that replaces paper tickets, spreadsheets, and sticky notes with a simple digital system for managing phone repairs. Create tickets, track repair status, record payments, and keep customer records — all from your iPad."
          }
        },
        {
          "@type": "Question",
          "name": "Who is PhoneRepairPOS for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's built for phone repair shop owners and technicians — whether you're a solo repairer working from a market stall or a multi-staff high street shop. If you fix phones and need a better way to manage jobs, it's for you."
          }
        },
        {
          "@type": "Question",
          "name": "Does it work offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. PhoneRepairPOS is 100% offline capable. All your data is stored locally on your iPad. No internet connection is required to create tickets, update statuses, or record payments. If you use iCloud, your data syncs when you're back online."
          }
        },
        {
          "@type": "Question",
          "name": "What devices does it support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PhoneRepairPOS runs on iPad. It's designed specifically for the iPad's larger screen, so you get a full dashboard view — not a stretched-out phone app."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PhoneRepairPOS is free to download from the App Store. Download it and start using it straight away — no sign-up, no credit card, no trial period."
          }
        },
        {
          "@type": "Question",
          "name": "Can I track repair status with it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every repair ticket moves through status stages — Received, Diagnosing, Repairing, Waiting for Parts, Ready for Collection, and Collected. You and your team can see where every job stands at a glance."
          }
        },
        {
          "@type": "Question",
          "name": "Is my customer data private and secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your data stays on your iPad. PhoneRepairPOS uses local storage (Core Data) and optionally iCloud for sync. There is no third-party server, no analytics tracking, and no one else has access to your customer records."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Download PhoneRepairPOS from the App Store, open it on your iPad, and create your first ticket. There's no account to set up and no configuration needed. You'll be managing repairs in under a minute."
          }
        }
      ]
    }
    </script>
```

- [ ] **Step 5: Fix all CTA and nav links**

Fix these 4 specific links in `index.html`:

1. **Nav logo link** (currently `<a href="#" class="nav-logo">`): Change to `href="/"`
2. **Nav "Download" button** (currently `<a href="#" class="nav-cta">Download</a>`): Change to `href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240"`
3. **Hero App Store badge** (currently `<a href="#" class="app-store-badge"`): Change to `href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240"`
4. **CTA banner App Store badge** (currently `<a href="#" class="app-store-badge"`): Change to `href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240"`

- [ ] **Step 6: Enhance the footer**

Replace the existing footer HTML with:

```html
    <footer>
        <div class="footer-content">
            <div class="footer-logo">Phone<span>Repair</span>POS</div>
            <p class="footer-tagline">Built for repair shops worldwide.</p>
            <div class="footer-links">
                <a href="blog/">Blog</a>
                <a href="mailto:support@phonerepairpos.app">Contact</a>
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Use</a>
            </div>
            <p>&copy; 2026 PhoneRepairPOS. All rights reserved.</p>
        </div>
    </footer>
```

Add this CSS for the tagline inside the `<style>` block, after the existing `footer p { font-size: 0.8rem; }` rule:

```css
.footer-tagline {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 1rem;
}
```

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "feat: add FAQ section, structured data, enhanced footer, and fix CTA links on landing page"
```

---

### Task 4: Update existing pages with enhanced meta

**Files:**
- Modify: `blog/5-ways-to-speed-up-your-repair-workflow.html`
- Modify: `privacy.html`
- Modify: `terms.html`

- [ ] **Step 1: Enhance the existing blog post**

In `blog/5-ways-to-speed-up-your-repair-workflow.html`, add to `<head>`:

```html
    <link rel="canonical" href="https://phonerepairpos.app/blog/5-ways-to-speed-up-your-repair-workflow.html">
    <meta property="og:url" content="https://phonerepairpos.app/blog/5-ways-to-speed-up-your-repair-workflow.html">
    <meta property="og:locale" content="en">
    <meta property="og:image" content="https://phonerepairpos.app/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="5 Ways to Speed Up Your Repair Workflow — PhoneRepairPOS">
    <meta name="twitter:description" content="Small changes to how you receive, diagnose, and track repairs can save hours every week.">
    <meta name="twitter:image" content="https://phonerepairpos.app/og-image.png">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Add BlogPosting JSON-LD before `</head>`:

```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "5 Ways to Speed Up Your Repair Workflow Without Cutting Corners",
      "datePublished": "2026-03-06",
      "dateModified": "2026-03-06",
      "author": {
        "@type": "Person",
        "name": "PhoneRepairPOS Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PhoneRepairPOS",
        "url": "https://phonerepairpos.app"
      },
      "description": "Small changes to how you receive, diagnose, and track repairs can save hours every week. Here's what actually works for phone repair shops.",
      "mainEntityOfPage": "https://phonerepairpos.app/blog/5-ways-to-speed-up-your-repair-workflow.html"
    }
    </script>
```

Fix the nav Download link to: `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`

Fix the article CTA link (`<a href="../index.html#" class="article-cta-btn">`) to: `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`

Update the blog post footer. Note: blog pages use relative paths (e.g., `../privacy.html`). Replace the existing `<footer>` with:

```html
    <footer>
        <div class="footer-content">
            <div class="footer-logo">Phone<span>Repair</span>POS</div>
            <p class="footer-tagline">Built for repair shops worldwide.</p>
            <div class="footer-links">
                <a href="index.html">Blog</a>
                <a href="mailto:support@phonerepairpos.app">Contact</a>
                <a href="../privacy.html">Privacy Policy</a>
                <a href="../terms.html">Terms of Use</a>
            </div>
            <p>&copy; 2026 PhoneRepairPOS. All rights reserved.</p>
        </div>
    </footer>
```

Add the `.footer-tagline` CSS rule inside the `<style>` block, after the existing `footer p { font-size: 0.8rem; }` rule:

```css
        .footer-tagline {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.4);
            margin-bottom: 1rem;
        }
```

- [ ] **Step 2: Add canonical and meta to privacy.html**

Read `privacy.html`, then add these tags inside `<head>`, after the existing `<meta name="viewport"...>` tag:

```html
    <link rel="canonical" href="https://phonerepairpos.app/privacy.html">
    <meta property="og:title" content="Privacy Policy — PhoneRepairPOS">
    <meta property="og:description" content="How PhoneRepairPOS handles your data. Your data stays on your iPad.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://phonerepairpos.app/privacy.html">
    <meta property="og:locale" content="en">
    <meta name="twitter:card" content="summary">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

- [ ] **Step 3: Add canonical and meta to terms.html**

Read `terms.html`, then add these tags inside `<head>`, after the existing `<meta name="viewport"...>` tag:

```html
    <link rel="canonical" href="https://phonerepairpos.app/terms.html">
    <meta property="og:title" content="Terms of Use — PhoneRepairPOS">
    <meta property="og:description" content="Terms of use for the PhoneRepairPOS iPad app.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://phonerepairpos.app/terms.html">
    <meta property="og:locale" content="en">
    <meta name="twitter:card" content="summary">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

- [ ] **Step 4: Commit**

```bash
git add blog/5-ways-to-speed-up-your-repair-workflow.html privacy.html terms.html
git commit -m "feat: add structured data, canonical URLs, and enhanced meta to existing pages"
```

---

## Chunk 2: Blog Index & Referenced Posts

### Task 5: Enhance blog index page

**Files:**
- Modify: `blog/index.html`

- [ ] **Step 1: Add enhanced meta tags and structured data to `<head>`**

Add canonical, OG, Twitter meta, favicon refs, and Blog JSON-LD schema. Same pattern as Task 3/4 but with Blog schema:

```html
    <link rel="canonical" href="https://phonerepairpos.app/blog/">
    <meta property="og:url" content="https://phonerepairpos.app/blog/">
    <meta property="og:locale" content="en">
    <meta property="og:image" content="https://phonerepairpos.app/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Blog — PhoneRepairPOS">
    <meta name="twitter:description" content="Tips, guides, and insights for phone repair shop owners.">
    <meta name="twitter:image" content="https://phonerepairpos.app/og-image.png">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "PhoneRepairPOS Blog",
      "description": "Tips, guides, and insights for phone repair shop owners.",
      "url": "https://phonerepairpos.app/blog/",
      "publisher": {
        "@type": "Organization",
        "name": "PhoneRepairPOS",
        "url": "https://phonerepairpos.app"
      }
    }
    </script>
```

- [ ] **Step 2: Fix nav Download link**

Change `<a href="../index.html#" class="nav-cta">Download</a>` to:
`<a href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240" class="nav-cta">Download</a>`

- [ ] **Step 3: Add category filter pills**

Add CSS for filter pills:

```css
/* ===== FILTER PILLS ===== */
.filter-pills {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;
    flex-wrap: wrap;
}

.filter-pill {
    padding: 0.4rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: var(--white);
    color: var(--text-light);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
}

.filter-pill:hover {
    border-color: var(--vibrant);
    color: var(--vibrant);
}

.filter-pill.active {
    background: var(--vibrant);
    color: var(--white);
    border-color: var(--vibrant);
}
```

Add HTML between `.blog-header` and `.featured`:

```html
    <div class="filter-pills">
        <button class="filter-pill active" data-filter="all">All</button>
        <button class="filter-pill" data-filter="business">Business</button>
        <button class="filter-pill" data-filter="tips">Tips</button>
        <button class="filter-pill" data-filter="guide">Guide</button>
        <button class="filter-pill" data-filter="workflow">Workflow</button>
    </div>
```

- [ ] **Step 4: Add `data-category` attributes to existing cards**

Add `data-category="workflow"` to the featured card, and appropriate `data-category` values to each existing post card:
- Featured (5 Ways): `data-category="workflow"`
- Paper Tickets: `data-category="business"`
- Customer Disputes: `data-category="tips"`
- iPad POS vs Till: `data-category="guide"`
- Tracking Status: `data-category="workflow"`
- Setting Prices: `data-category="business"`
- Marketing: `data-category="tips"`

- [ ] **Step 5: Add cards for 14 new blog posts to the grid**

Append 14 new `<a>` card elements to the `.posts-grid`, following the exact same markup pattern as existing cards. Each card needs:
- `href` matching the filename from the spec
- `data-category` attribute matching the post's category (lowercase)
- Appropriate `.post-tag` class (business, tips, guide, or default for workflow)
- Background class (cycle through `bg-indigo`, `bg-warm`, `bg-teal`, `bg-slate`)
- An emoji icon, title, excerpt, date, and read time

The 14 new posts to add cards for:

| File | Category | Emoji | Title | Excerpt | Date | Read |
|------|----------|-------|-------|---------|------|------|
| best-pos-systems-for-phone-repair-shops-2026.html | guide | &#127942; | Best POS Systems for Phone Repair Shops in 2026 | A look at the top POS options for repair shops — what they do, what they cost, and which one fits your workflow. | 12 Mar 2026 | 7 min |
| phone-repair-shop-software-what-to-look-for.html | guide | &#128269; | Phone Repair Shop Software: What to Look For | The features that matter, the ones that don't, and how to avoid paying for things you'll never use. | 10 Mar 2026 | 6 min |
| repairdesk-vs-phonerepairpos.html | guide | &#9878; | RepairDesk vs PhoneRepairPOS | Two very different approaches to managing repairs. Here's how they compare on price, features, and simplicity. | 8 Mar 2026 | 7 min |
| free-vs-paid-repair-shop-software.html | business | &#128176; | Free vs Paid Repair Shop Software | What you actually get with free tools, where they fall short, and when it's worth paying. | 6 Mar 2026 | 5 min |
| do-you-need-a-pos-system-for-your-repair-shop.html | business | &#129300; | Do You Really Need a POS System for Your Repair Shop? | If your current system works, maybe you don't. But here's how to tell when it's time to switch. | 4 Mar 2026 | 5 min |
| how-to-start-a-phone-repair-business.html | guide | &#128640; | How to Start a Phone Repair Business: A Practical Guide | Everything from tools and parts to pricing and your first customer — without the fluff. | 2 Mar 2026 | 8 min |
| how-to-manage-repair-tickets.html | tips | &#127915; | How to Manage Repair Tickets Without Losing Your Mind | A simple system for keeping track of every repair, from intake to collection. | 28 Feb 2026 | 5 min |
| 7-common-mistakes-new-repair-shop-owners-make.html | tips | &#9888; | 7 Common Mistakes New Repair Shop Owners Make | The pitfalls that catch most people out — and how to avoid them. | 24 Feb 2026 | 6 min |
| how-to-price-screen-repairs-for-profit.html | business | &#128178; | How to Price Screen Repairs for Profit | Actual pricing strategies, not guesswork. Factor in parts, labour, and what your market will bear. | 20 Feb 2026 | 6 min |
| building-customer-trust-in-your-repair-shop.html | tips | &#129309; | Building Customer Trust in Your Repair Shop | Trust turns one-time fixes into repeat customers and referrals. Here's how to earn it. | 16 Feb 2026 | 5 min |
| going-paperless-a-guide-for-repair-shops.html | workflow | &#128196; | Going Paperless: A Guide for Repair Shops | How to ditch paper tickets and spreadsheets without disrupting your workflow. | 12 Feb 2026 | 5 min |
| why-offline-first-software-matters-for-repair-shops.html | workflow | &#128268; | Why Offline-First Software Matters for Repair Shops | When your Wi-Fi drops, your shop shouldn't stop. Here's why offline capability is non-negotiable. | 8 Feb 2026 | 4 min |
| using-an-ipad-to-run-your-repair-shop.html | guide | &#128241; | Using an iPad to Run Your Repair Shop | Why more repair shops are swapping tills and laptops for an iPad on the counter. | 4 Feb 2026 | 5 min |
| how-to-track-parts-and-inventory.html | workflow | &#128230; | How to Track Parts and Inventory as a Solo Repairer | Simple inventory tracking that works when you don't have time for a full stock system. | 1 Feb 2026 | 5 min |

- [ ] **Step 6: Replace newsletter CTA with App Store CTA**

Remove the existing `.newsletter` section and its CSS. Replace with:

```html
    <!-- Download CTA -->
    <div class="download-cta">
        <div class="download-cta-card">
            <h2>Try PhoneRepairPOS</h2>
            <p>Download free on the App Store. No sign-up needed.</p>
            <a href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240" class="download-cta-btn">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 44px;">
            </a>
        </div>
    </div>
```

Add CSS:

```css
/* ===== DOWNLOAD CTA ===== */
.download-cta {
    max-width: 600px;
    margin: 0 auto 5rem;
    padding: 0 2rem;
}

.download-cta-card {
    background: var(--dark);
    border-radius: 20px;
    padding: 3rem 2.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.download-cta-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 250px 200px at 80% 20%, rgba(91, 94, 244, 0.25), transparent),
        radial-gradient(ellipse 200px 150px at 20% 80%, rgba(255, 107, 74, 0.1), transparent);
}

.download-cta-card > * { position: relative; }

.download-cta-card h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
}

.download-cta-card p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1.5rem;
}

.download-cta-btn {
    display: inline-block;
    transition: transform 0.2s;
}

.download-cta-btn:hover {
    transform: translateY(-2px);
}
```

- [ ] **Step 7: Add filter JavaScript**

Add this filtering logic to the existing `<script>` block:

```javascript
// Category filter pills
const pills = document.querySelectorAll('.filter-pill');
const featured = document.querySelector('.featured');
const cards = document.querySelectorAll('.post-card');

pills.forEach(pill => {
    pill.addEventListener('click', () => {
        const filter = pill.dataset.filter;

        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        if (filter === 'all') {
            featured.style.display = '';
            cards.forEach(c => c.style.display = '');
        } else {
            // Show/hide featured
            const featuredCategory = featured.querySelector('.featured-card').dataset.category;
            featured.style.display = featuredCategory === filter ? '' : 'none';

            // Show/hide cards
            cards.forEach(card => {
                card.style.display = card.dataset.category === filter ? '' : 'none';
            });
        }
    });
});
```

- [ ] **Step 8: Add footer blog link and tagline**

Update footer to match the landing page footer pattern (add Blog link, tagline).

- [ ] **Step 9: Commit**

```bash
git add blog/index.html
git commit -m "feat: enhance blog index with category filters, expanded grid, structured data, and App Store CTA"
```

---

### Task 6: Create referenced blog posts — batch 1 (posts 2-4)

**Files:**
- Create: `blog/why-paper-tickets-are-costing-you-money.html`
- Create: `blog/how-to-handle-customer-disputes.html`
- Create: `blog/ipad-pos-vs-traditional-till.html`

Each post follows the exact HTML template from `blog/5-ways-to-speed-up-your-repair-workflow.html`. Key elements per post:
- Same inline CSS (copy from the existing post)
- Same nav, footer, article structure
- Unique: title, meta description, category badge, date, read time, article body, related posts, JSON-LD
- All CTA links point to: `https://apps.apple.com/gb/app/phone-repair-pos/id6759859240`
- Nav Download link points to App Store URL
- Favicon refs in `<head>`
- Canonical URL, OG, Twitter meta tags

- [ ] **Step 1: Create `blog/why-paper-tickets-are-costing-you-money.html`**

Post metadata:
- Title: "Why Paper Tickets Are Costing You Money"
- Meta description: "Lost tickets, illegible handwriting, and no payment records. Here's what going digital actually saves your phone repair shop."
- Category: Business (badge class: `business`)
- Date: 4 Mar 2026
- Read time: 4 min
- Primary keyword: "paper tickets repair shop"
- Canonical: `https://phonerepairpos.app/blog/why-paper-tickets-are-costing-you-money.html`
- Related posts: `setting-repair-prices-guide.html`, `going-paperless-a-guide-for-repair-shops.html`, `5-ways-to-speed-up-your-repair-workflow.html`

Write 1,200-1,500 words of practical, actionable content covering:
- The hidden costs of paper tickets (lost tickets, miscommunication, disputes)
- Time wasted searching for information
- Payment tracking gaps
- How digital systems solve each problem
- Soft CTA to PhoneRepairPOS at the end

- [ ] **Step 2: Create `blog/how-to-handle-customer-disputes.html`**

Post metadata:
- Title: "How to Handle Customer Disputes Like a Pro"
- Meta description: "Every repair shop gets complaints. The difference is how you handle them — and what records you keep."
- Category: Tips (badge class: `tips`)
- Date: 1 Mar 2026
- Read time: 6 min
- Primary keyword: "customer disputes repair shop"
- Canonical: `https://phonerepairpos.app/blog/how-to-handle-customer-disputes.html`
- Related posts: `building-customer-trust-in-your-repair-shop.html`, `why-paper-tickets-are-costing-you-money.html`, `tracking-repair-status-why-it-matters.html`

Write 1,200-1,500 words covering:
- Common types of disputes in repair shops
- The role of documentation in resolving disputes
- Communication strategies
- When and how to offer refunds/redo repairs
- Preventing disputes before they happen

- [ ] **Step 3: Create `blog/ipad-pos-vs-traditional-till.html`**

Post metadata:
- Title: "iPad POS vs Traditional Till: Which Is Right for Your Shop?"
- Meta description: "A no-nonsense comparison of cost, flexibility, and features for small repair businesses."
- Category: Guide (badge class: `guide`)
- Date: 26 Feb 2026
- Read time: 7 min
- Primary keyword: "iPad POS vs till"
- Canonical: `https://phonerepairpos.app/blog/ipad-pos-vs-traditional-till.html`
- Related posts: `using-an-ipad-to-run-your-repair-shop.html`, `best-pos-systems-for-phone-repair-shops-2026.html`, `do-you-need-a-pos-system-for-your-repair-shop.html`

Write 1,200-1,800 words covering:
- Cost comparison (upfront and ongoing)
- Feature comparison
- Flexibility and portability
- Software updates vs hardware limitations
- Which type suits which shop size/style

- [ ] **Step 4: Commit**

```bash
git add blog/why-paper-tickets-are-costing-you-money.html blog/how-to-handle-customer-disputes.html blog/ipad-pos-vs-traditional-till.html
git commit -m "feat: add blog posts — paper tickets, customer disputes, iPad vs till"
```

---

### Task 7: Create referenced blog posts — batch 2 (posts 5-7)

**Files:**
- Create: `blog/tracking-repair-status-why-it-matters.html`
- Create: `blog/setting-repair-prices-guide.html`
- Create: `blog/phone-repair-shop-marketing.html`

Same template pattern as Task 6.

- [ ] **Step 1: Create `blog/tracking-repair-status-why-it-matters.html`**

Post metadata:
- Title: "Tracking Repair Status: Why It Matters More Than You Think"
- Meta description: "When every repair has a clear status, your team moves faster and customers stop calling to ask 'is it ready yet?'"
- Category: Workflow (default badge, no extra class)
- Date: 22 Feb 2026
- Read time: 4 min
- Primary keyword: "repair status tracking"
- Canonical: `https://phonerepairpos.app/blog/tracking-repair-status-why-it-matters.html`
- Related posts: `5-ways-to-speed-up-your-repair-workflow.html`, `how-to-manage-repair-tickets.html`, `going-paperless-a-guide-for-repair-shops.html`

Content (1,200-1,500 words): benefits of status stages, reducing customer calls, spotting bottlenecks, team visibility.

- [ ] **Step 2: Create `blog/setting-repair-prices-guide.html`**

Post metadata:
- Title: "A Straightforward Guide to Setting Repair Prices"
- Meta description: "How to price screen replacements, battery swaps, and diagnostics without leaving money on the table."
- Category: Business (badge class: `business`)
- Date: 18 Feb 2026
- Read time: 5 min
- Primary keyword: "repair pricing guide"
- Canonical: `https://phonerepairpos.app/blog/setting-repair-prices-guide.html`
- Related posts: `how-to-price-screen-repairs-for-profit.html`, `free-vs-paid-repair-shop-software.html`, `why-paper-tickets-are-costing-you-money.html`

Content (1,200-1,500 words): pricing strategies, cost calculation, competitor research, when to adjust prices.

- [ ] **Step 3: Create `blog/phone-repair-shop-marketing.html`**

Post metadata:
- Title: "Marketing Your Repair Shop on a Budget"
- Meta description: "Google Business Profile, local SEO, and word of mouth — the channels that actually bring walk-ins through the door."
- Category: Tips (badge class: `tips`)
- Date: 14 Feb 2026
- Read time: 6 min
- Primary keyword: "repair shop marketing"
- Canonical: `https://phonerepairpos.app/blog/phone-repair-shop-marketing.html`
- Related posts: `building-customer-trust-in-your-repair-shop.html`, `how-to-start-a-phone-repair-business.html`, `7-common-mistakes-new-repair-shop-owners-make.html`

Content (1,200-1,500 words): Google Business Profile optimization, local SEO, reviews, social media, word of mouth.

- [ ] **Step 4: Commit**

```bash
git add blog/tracking-repair-status-why-it-matters.html blog/setting-repair-prices-guide.html blog/phone-repair-shop-marketing.html
git commit -m "feat: add blog posts — repair status, pricing guide, marketing"
```

---

## Chunk 3: New Blog Posts — Comparison & High Intent

### Task 8: Create comparison blog posts — batch 1 (posts 8-10)

**Files:**
- Create: `blog/best-pos-systems-for-phone-repair-shops-2026.html`
- Create: `blog/phone-repair-shop-software-what-to-look-for.html`
- Create: `blog/repairdesk-vs-phonerepairpos.html`

Same template pattern as Task 6.

- [ ] **Step 1: Create `blog/best-pos-systems-for-phone-repair-shops-2026.html`**

Post metadata:
- Title: "Best POS Systems for Phone Repair Shops in 2026"
- Meta description: "A look at the top POS options for repair shops — what they do, what they cost, and which one fits your workflow."
- Category: Guide (badge class: `guide`)
- Date: 12 Mar 2026
- Read time: 7 min
- Primary keyword: "best POS phone repair shop"
- Canonical: `https://phonerepairpos.app/blog/best-pos-systems-for-phone-repair-shops-2026.html`
- Related posts: `repairdesk-vs-phonerepairpos.html`, `phone-repair-shop-software-what-to-look-for.html`, `ipad-pos-vs-traditional-till.html`

Content (1,500-1,800 words): overview of POS options for repair shops, including PhoneRepairPOS, RepairDesk, RepairShopr, Square. Compare on price, features, ease of use. Be fair and honest — don't make competitors look bad.

- [ ] **Step 2: Create `blog/phone-repair-shop-software-what-to-look-for.html`**

Post metadata:
- Title: "Phone Repair Shop Software: What to Look For"
- Meta description: "The features that matter, the ones that don't, and how to avoid paying for things you'll never use."
- Category: Guide (badge class: `guide`)
- Date: 10 Mar 2026
- Read time: 6 min
- Primary keyword: "phone repair shop software"
- Canonical: `https://phonerepairpos.app/blog/phone-repair-shop-software-what-to-look-for.html`
- Related posts: `best-pos-systems-for-phone-repair-shops-2026.html`, `do-you-need-a-pos-system-for-your-repair-shop.html`, `free-vs-paid-repair-shop-software.html`

Content (1,200-1,500 words): essential features (ticket management, status tracking, payments), nice-to-haves, red flags, questions to ask before buying.

- [ ] **Step 3: Create `blog/repairdesk-vs-phonerepairpos.html`**

Post metadata:
- Title: "RepairDesk vs PhoneRepairPOS: Which Is Right for You?"
- Meta description: "Two very different approaches to managing repairs. Here's how they compare on price, features, and simplicity."
- Category: Guide (badge class: `guide`)
- Date: 8 Mar 2026
- Read time: 7 min
- Primary keyword: "RepairDesk alternative"
- Canonical: `https://phonerepairpos.app/blog/repairdesk-vs-phonerepairpos.html`
- Related posts: `best-pos-systems-for-phone-repair-shops-2026.html`, `phone-repair-shop-software-what-to-look-for.html`, `free-vs-paid-repair-shop-software.html`

Content (1,500-1,800 words): honest comparison — RepairDesk is a full-featured cloud platform, PhoneRepairPOS is a lightweight iPad-first app. Compare on pricing, feature set, learning curve, offline capability, target user. Be fair to both.

- [ ] **Step 4: Commit**

```bash
git add blog/best-pos-systems-for-phone-repair-shops-2026.html blog/phone-repair-shop-software-what-to-look-for.html blog/repairdesk-vs-phonerepairpos.html
git commit -m "feat: add blog posts — best POS systems, software guide, RepairDesk comparison"
```

---

### Task 9: Create comparison blog posts — batch 2 (posts 11-12)

**Files:**
- Create: `blog/free-vs-paid-repair-shop-software.html`
- Create: `blog/do-you-need-a-pos-system-for-your-repair-shop.html`

- [ ] **Step 1: Create `blog/free-vs-paid-repair-shop-software.html`**

Post metadata:
- Title: "Free vs Paid Repair Shop Software: What You Actually Get"
- Meta description: "What you actually get with free tools, where they fall short, and when it's worth paying."
- Category: Business (badge class: `business`)
- Date: 6 Mar 2026
- Read time: 5 min
- Primary keyword: "free repair shop software"
- Canonical: `https://phonerepairpos.app/blog/free-vs-paid-repair-shop-software.html`
- Related posts: `phone-repair-shop-software-what-to-look-for.html`, `setting-repair-prices-guide.html`, `do-you-need-a-pos-system-for-your-repair-shop.html`

Content (1,200-1,500 words): what free tools typically include, limitations, hidden costs (time, workarounds), when paid is worth it.

- [ ] **Step 2: Create `blog/do-you-need-a-pos-system-for-your-repair-shop.html`**

Post metadata:
- Title: "Do You Really Need a POS System for Your Repair Shop?"
- Meta description: "If your current system works, maybe you don't. But here's how to tell when it's time to switch."
- Category: Business (badge class: `business`)
- Date: 4 Mar 2026
- Read time: 5 min
- Primary keyword: "POS system repair shop"
- Canonical: `https://phonerepairpos.app/blog/do-you-need-a-pos-system-for-your-repair-shop.html`
- Related posts: `ipad-pos-vs-traditional-till.html`, `why-paper-tickets-are-costing-you-money.html`, `best-pos-systems-for-phone-repair-shops-2026.html`

Content (1,200-1,500 words): signs you've outgrown paper, when spreadsheets stop working, what a POS actually gives you, honest take on when you don't need one.

- [ ] **Step 3: Commit**

```bash
git add blog/free-vs-paid-repair-shop-software.html blog/do-you-need-a-pos-system-for-your-repair-shop.html
git commit -m "feat: add blog posts — free vs paid software, do you need a POS"
```

---

### Task 10: Create top-of-funnel blog posts — batch 1 (posts 13-15)

**Files:**
- Create: `blog/how-to-start-a-phone-repair-business.html`
- Create: `blog/how-to-manage-repair-tickets.html`
- Create: `blog/7-common-mistakes-new-repair-shop-owners-make.html`

- [ ] **Step 1: Create `blog/how-to-start-a-phone-repair-business.html`**

Post metadata:
- Title: "How to Start a Phone Repair Business: A Practical Guide"
- Meta description: "Everything from tools and parts to pricing and your first customer — without the fluff."
- Category: Guide (badge class: `guide`)
- Date: 2 Mar 2026
- Read time: 8 min
- Primary keyword: "how to start phone repair business"
- Canonical: `https://phonerepairpos.app/blog/how-to-start-a-phone-repair-business.html`
- Related posts: `setting-repair-prices-guide.html`, `phone-repair-shop-marketing.html`, `7-common-mistakes-new-repair-shop-owners-make.html`

Content (1,500-1,800 words): skills needed, tools and parts sourcing, setting up a workspace, pricing, finding customers, legal basics.

- [ ] **Step 2: Create `blog/how-to-manage-repair-tickets.html`**

Post metadata:
- Title: "How to Manage Repair Tickets Without Losing Your Mind"
- Meta description: "A simple system for keeping track of every repair, from intake to collection."
- Category: Tips (badge class: `tips`)
- Date: 28 Feb 2026
- Read time: 5 min
- Primary keyword: "manage repair tickets"
- Canonical: `https://phonerepairpos.app/blog/how-to-manage-repair-tickets.html`
- Related posts: `tracking-repair-status-why-it-matters.html`, `5-ways-to-speed-up-your-repair-workflow.html`, `going-paperless-a-guide-for-repair-shops.html`

Content (1,200-1,500 words): ticket management fundamentals, common systems, what to capture, status tracking, retrieval.

- [ ] **Step 3: Create `blog/7-common-mistakes-new-repair-shop-owners-make.html`**

Post metadata:
- Title: "7 Common Mistakes New Repair Shop Owners Make"
- Meta description: "The pitfalls that catch most people out — and how to avoid them before they cost you."
- Category: Tips (badge class: `tips`)
- Date: 24 Feb 2026
- Read time: 6 min
- Primary keyword: "repair shop mistakes"
- Canonical: `https://phonerepairpos.app/blog/7-common-mistakes-new-repair-shop-owners-make.html`
- Related posts: `how-to-start-a-phone-repair-business.html`, `setting-repair-prices-guide.html`, `building-customer-trust-in-your-repair-shop.html`

Content (1,200-1,500 words): 7 specific mistakes (e.g., underpricing, no records, ignoring reviews, poor communication, no intake process, not tracking inventory, skipping insurance).

- [ ] **Step 4: Commit**

```bash
git add blog/how-to-start-a-phone-repair-business.html blog/how-to-manage-repair-tickets.html blog/7-common-mistakes-new-repair-shop-owners-make.html
git commit -m "feat: add blog posts — starting a business, managing tickets, common mistakes"
```

---

## Chunk 4: Remaining Blog Posts & Final Integration

### Task 11: Create top-of-funnel blog posts — batch 2 (posts 16-17)

**Files:**
- Create: `blog/how-to-price-screen-repairs-for-profit.html`
- Create: `blog/building-customer-trust-in-your-repair-shop.html`

- [ ] **Step 1: Create `blog/how-to-price-screen-repairs-for-profit.html`**

Post metadata:
- Title: "How to Price Screen Repairs for Profit"
- Meta description: "Actual pricing strategies, not guesswork. Factor in parts, labour, and what your market will bear."
- Category: Business (badge class: `business`)
- Date: 20 Feb 2026
- Read time: 6 min
- Primary keyword: "screen repair pricing"
- Canonical: `https://phonerepairpos.app/blog/how-to-price-screen-repairs-for-profit.html`
- Related posts: `setting-repair-prices-guide.html`, `free-vs-paid-repair-shop-software.html`, `7-common-mistakes-new-repair-shop-owners-make.html`

Content (1,200-1,500 words): cost breakdown (parts, labour, overheads), markup strategies, competitor pricing, volume vs margin.

- [ ] **Step 2: Create `blog/building-customer-trust-in-your-repair-shop.html`**

Post metadata:
- Title: "Building Customer Trust in Your Repair Shop"
- Meta description: "Trust turns one-time fixes into repeat customers and referrals. Here's how to earn it."
- Category: Tips (badge class: `tips`)
- Date: 16 Feb 2026
- Read time: 5 min
- Primary keyword: "customer trust repair shop"
- Canonical: `https://phonerepairpos.app/blog/building-customer-trust-in-your-repair-shop.html`
- Related posts: `how-to-handle-customer-disputes.html`, `phone-repair-shop-marketing.html`, `tracking-repair-status-why-it-matters.html`

Content (1,200-1,500 words): transparency in pricing, communication during repairs, warranties, reviews, professional presentation.

- [ ] **Step 3: Commit**

```bash
git add blog/how-to-price-screen-repairs-for-profit.html blog/building-customer-trust-in-your-repair-shop.html
git commit -m "feat: add blog posts — screen repair pricing, customer trust"
```

---

### Task 12: Create workflow blog posts (posts 18-21)

**Files:**
- Create: `blog/going-paperless-a-guide-for-repair-shops.html`
- Create: `blog/why-offline-first-software-matters-for-repair-shops.html`
- Create: `blog/using-an-ipad-to-run-your-repair-shop.html`
- Create: `blog/how-to-track-parts-and-inventory.html`

- [ ] **Step 1: Create `blog/going-paperless-a-guide-for-repair-shops.html`**

Post metadata:
- Title: "Going Paperless: A Guide for Repair Shops"
- Meta description: "How to ditch paper tickets and spreadsheets without disrupting your workflow."
- Category: Workflow (default badge, no extra class)
- Date: 12 Feb 2026
- Read time: 5 min
- Primary keyword: "paperless repair shop"
- Canonical: `https://phonerepairpos.app/blog/going-paperless-a-guide-for-repair-shops.html`
- Related posts: `why-paper-tickets-are-costing-you-money.html`, `5-ways-to-speed-up-your-repair-workflow.html`, `how-to-manage-repair-tickets.html`

Content (1,200-1,500 words): transition steps, what to digitize first, common fears, practical tips.

- [ ] **Step 2: Create `blog/why-offline-first-software-matters-for-repair-shops.html`**

Post metadata:
- Title: "Why Offline-First Software Matters for Repair Shops"
- Meta description: "When your Wi-Fi drops, your shop shouldn't stop. Here's why offline capability is non-negotiable."
- Category: Workflow (default badge)
- Date: 8 Feb 2026
- Read time: 4 min
- Primary keyword: "offline POS repair shop"
- Canonical: `https://phonerepairpos.app/blog/why-offline-first-software-matters-for-repair-shops.html`
- Related posts: `ipad-pos-vs-traditional-till.html`, `phone-repair-shop-software-what-to-look-for.html`, `using-an-ipad-to-run-your-repair-shop.html`

Content (1,200-1,400 words): why internet dependency is risky, real scenarios, how offline-first works, sync when reconnected.

- [ ] **Step 3: Create `blog/using-an-ipad-to-run-your-repair-shop.html`**

Post metadata:
- Title: "Using an iPad to Run Your Repair Shop"
- Meta description: "Why more repair shops are swapping tills and laptops for an iPad on the counter."
- Category: Guide (badge class: `guide`)
- Date: 4 Feb 2026
- Read time: 5 min
- Primary keyword: "iPad repair shop"
- Canonical: `https://phonerepairpos.app/blog/using-an-ipad-to-run-your-repair-shop.html`
- Related posts: `ipad-pos-vs-traditional-till.html`, `best-pos-systems-for-phone-repair-shops-2026.html`, `why-offline-first-software-matters-for-repair-shops.html`

Content (1,200-1,500 words): iPad advantages (portability, touch interface, cost), what apps to use, hardware setup, real-world use cases.

- [ ] **Step 4: Create `blog/how-to-track-parts-and-inventory.html`**

Post metadata:
- Title: "How to Track Parts and Inventory as a Solo Repairer"
- Meta description: "Simple inventory tracking that works when you don't have time for a full stock system."
- Category: Workflow (default badge)
- Date: 1 Feb 2026
- Read time: 5 min
- Primary keyword: "repair parts inventory tracking"
- Canonical: `https://phonerepairpos.app/blog/how-to-track-parts-and-inventory.html`
- Related posts: `5-ways-to-speed-up-your-repair-workflow.html`, `going-paperless-a-guide-for-repair-shops.html`, `7-common-mistakes-new-repair-shop-owners-make.html`

Content (1,200-1,500 words): simple tracking methods, when to reorder, supplier management, minimum viable inventory system.

- [ ] **Step 5: Commit**

```bash
git add blog/going-paperless-a-guide-for-repair-shops.html blog/why-offline-first-software-matters-for-repair-shops.html blog/using-an-ipad-to-run-your-repair-shop.html blog/how-to-track-parts-and-inventory.html
git commit -m "feat: add blog posts — paperless guide, offline-first, iPad guide, inventory tracking"
```

---

### Task 13: Final verification and sitemap update

**Files:**
- Modify: `sitemap.xml` (verify all URLs are correct)

- [ ] **Step 1: Verify all blog post files exist**

Run: `ls -la blog/*.html | wc -l`
Expected: 22 (21 posts + index.html)

- [ ] **Step 2: Check for broken internal links**

Run a grep across all blog posts to verify internal links point to files that exist:

```bash
grep -oh 'href="[^"]*\.html"' blog/*.html | sort -u
```

Cross-reference each linked file against the actual files in `blog/`.

- [ ] **Step 3: Verify all blog posts have structured data**

```bash
grep -l "BlogPosting" blog/*.html | wc -l
```

Expected: 21 (all posts including the original)

- [ ] **Step 4: Verify all pages have canonical URLs**

```bash
grep -l 'rel="canonical"' *.html blog/*.html | wc -l
```

Expected: 25 (index.html, privacy.html, terms.html, blog/index.html, 21 blog posts)

- [ ] **Step 5: Verify sitemap.xml has all URLs**

```bash
grep -c '<loc>' sitemap.xml
```

Expected: 25

- [ ] **Step 6: Verify no broken CTA links remain**

```bash
grep -rn 'index.html#' blog/*.html index.html
```

Expected: No output (all `#` links should be replaced with App Store URL)

- [ ] **Step 7: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final verification fixes"
```

Only run if Step 2-6 revealed issues that needed fixing.
