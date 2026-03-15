# Jekyll Conversion — Design Spec

**Date:** 2026-03-15
**Project:** phonerepairpos-site
**Goal:** Convert plain static HTML site to Jekyll so shared elements (GA tag, nav, footer, head meta) live in one place, built and deployed via GitHub Pages.

---

## Problem

The site has 25 HTML files. Every shared element (Google Analytics tag, nav, footer, head meta boilerplate) is duplicated across all of them. Changing any shared element requires editing every file.

---

## Solution

Introduce Jekyll with a full layout. Every page inherits shared structure from `_layouts/default.html`. Shared partials live in `_includes/`. Page-specific styles move to external CSS files referenced from front matter.

---

## File Structure

```
_config.yml                     # site title, url, baseurl
_layouts/
  default.html                  # full page wrapper
_includes/
  head-meta.html                # GA tag, charset, viewport, favicons, fonts, OG meta
  nav.html                      # navigation HTML
  footer.html                   # footer HTML (no JS — page-specific JS stays in page content)
assets/
  css/
    shared.css                  # CSS variables, nav, footer, base body/html typography
    index.css                   # homepage styles
    blog-post.css               # individual blog post styles
    blog-index.css              # blog listing page styles
    page.css                    # privacy + terms styles
index.html                      # front matter + page content only
privacy.html
terms.html
blog/
  index.html
  *.html                        # 21 blog post files
```

---

## Layout: `_layouts/default.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  {% include head-meta.html %}
  <link rel="stylesheet" href="/assets/css/shared.css">
  {% if page.stylesheet %}
  <link rel="stylesheet" href="{{ page.stylesheet }}">
  {% endif %}
</head>
<body>
  {% include nav.html %}
  {{ content }}
  {% include footer.html %}
</body>
</html>
```

---

## `_config.yml`

```yaml
title: PhoneRepairPOS
url: https://phonerepairpos.app
baseurl: ""
og_image: https://phonerepairpos.app/og-image.png
```

---

## Includes

### `_includes/head-meta.html`

Contains (all values dynamic via front matter):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SY7WGPSFBF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SY7WGPSFBF');
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ page.title }}</title>
<meta name="description" content="{{ page.description }}">
<meta property="og:title" content="{{ page.og_title | default: page.title }}">
<meta property="og:description" content="{{ page.description }}">
<meta property="og:type" content="{{ page.og_type | default: 'website' }}">
<meta property="og:url" content="{{ page.canonical }}">
<link rel="canonical" href="{{ page.canonical }}">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="PhoneRepairPOS">
<meta property="og:image" content="{{ page.og_image | default: site.og_image }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page.og_title | default: page.title }}">
<meta name="twitter:description" content="{{ page.description }}">
<meta name="twitter:image" content="{{ page.og_image | default: site.og_image }}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

**Note on Google Fonts:** Use the blog post variant (`Instrument+Serif:ital@0;1`) as the canonical URL — it's a superset that covers both homepage and blog needs.

**Note on `og_title`:** Many pages have a shorter OG title than the `<title>` tag. Use `og_title` front matter where they differ; it falls back to `page.title` if not set.

### `_includes/nav.html`

The nav links differ between the homepage (in-page anchors `#features`, `#how-it-works`) and all other pages (absolute links). Use a single canonical nav with absolute paths that work everywhere:

```html
<nav>
  <a href="/" class="nav-logo">Phone<span>Repair</span>POS</a>
  <div class="nav-links">
    <a href="/#features">Features</a>
    <a href="/#how-it-works">How It Works</a>
    <a href="/blog/">Blog</a>
    <a href="https://apps.apple.com/gb/app/phone-repair-pos/id6759859240" class="nav-cta">Download</a>
  </div>
</nav>
```

**Note:** This changes homepage anchor links from `#features` to `/#features`. Behaviour is identical when on the homepage.

### `_includes/footer.html`

Footer HTML only — no JavaScript:

```html
<footer>
  <div class="footer-content">
    <div class="footer-logo">Phone<span>Repair</span>POS</div>
    <p class="footer-tagline">Built for repair shops worldwide.</p>
    <div class="footer-links">
      <a href="/blog/">Blog</a>
      <a href="mailto:support@phonerepairpos.app">Contact</a>
      <a href="/privacy.html">Privacy Policy</a>
      <a href="/terms.html">Terms of Use</a>
    </div>
    <p>&copy; 2026 PhoneRepairPOS. All rights reserved.</p>
  </div>
</footer>
```

**Note:** Nav scroll JS (`window.addEventListener('scroll', ...)`) and other page JS is homepage-specific and stays in `index.html` page content, not in a shared include.

---

## Front Matter Per Page

### Homepage (`index.html`)
```yaml
---
layout: default
title: "PhoneRepairPOS — The iPad POS Built for Phone Repair Shops"
og_title: "PhoneRepairPOS — iPad POS for Phone Repair Shops"
description: "Manage jobs, track repairs, and get paid faster. PhoneRepairPOS is the all-in-one iPad point-of-sale system designed specifically for phone repair shops."
canonical: "https://phonerepairpos.app/"
og_type: website
stylesheet: /assets/css/index.css
---
```

### Blog posts
```yaml
---
layout: default
title: "Post Title — PhoneRepairPOS"
og_title: "Post Title"
description: "Post description."
canonical: "https://phonerepairpos.app/blog/post-slug.html"
og_type: article
stylesheet: /assets/css/blog-post.css
---
```

### Privacy / Terms
```yaml
---
layout: default
title: "Privacy Policy — PhoneRepairPOS"
description: "..."
canonical: "https://phonerepairpos.app/privacy.html"
stylesheet: /assets/css/page.css
---
```

---

## CSS Strategy

### What goes in `shared.css`

Extract from index.html as the canonical source:
- `:root` CSS variables (use index.html's variable set — it is a superset of blog post variables)
- `*, *::before, *::after` reset
- `html { scroll-behavior: smooth; }`
- `body` base styles
- All `.nav*` styles
- All `.footer*` styles

### What goes in page-specific CSS files

The remaining styles from each page's `<style>` block after shared styles are removed:

| File | Source |
|------|--------|
| `index.css` | `index.html` non-shared styles |
| `blog-post.css` | Any single blog post (all blog posts use identical styles) |
| `blog-index.css` | `blog/index.html` |
| `page.css` | `privacy.html` or `terms.html` (identical styles) |

**Note on CSS variables:** `index.html` and blog posts have slightly different `:root` variable values (different hex colours for `--primary`, `--accent`, etc.). Use `index.html` as the canonical set. Blog post pages can override specific variables in `blog-post.css` if needed.

---

## Per-File Transformation

Each of the 25 HTML files must be updated as follows:

1. Remove everything from `<!DOCTYPE html>` through `</head>` (the entire head block)
2. Remove `<body>` opening tag
3. Remove the `<nav>...</nav>` block
4. Remove the `<footer>...</footer>` block
5. Remove `</body>` and `</html>` closing tags
6. Remove the page-specific `<style>...</style>` block (CSS moves to external file)
7. Add YAML front matter at the top of the file
8. What remains is only the page-specific content between nav and footer

---

## URL Preservation

All existing URLs are preserved. Jekyll serves `.html` files at their existing paths. No redirects needed.

- `/` → `index.html`
- `/blog/` → `blog/index.html`
- `/blog/best-pos-systems-for-phone-repair-shops-2026.html` → unchanged

---

## GitHub Pages

- No `Gemfile` needed — GitHub Pages uses its default Jekyll version
- Push to `main` branch triggers automatic build
- Add `_site/` to `.gitignore`

---

## Out of Scope

- Converting blog posts to `_posts` format (no benefit, would change URLs)
- Adding Jekyll pagination or collections
- Any content changes
- Any design changes
