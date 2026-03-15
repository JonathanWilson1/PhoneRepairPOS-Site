# Jekyll Conversion Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert phonerepairpos-site from 25 plain static HTML files to Jekyll so shared elements (GA tag, nav, footer, head meta) live in one place, deployed via GitHub Pages.

**Architecture:** Introduce Jekyll layout and includes. Extract shared CSS (root variables, body, footer) to `assets/css/shared.css`. Extract page-specific CSS to individual files. Use a Python migration script to convert all 25 HTML files in one pass — extracting front matter values from existing meta tags and stripping the boilerplate.

**Tech Stack:** Jekyll (GitHub Pages default version), Liquid templating, Python 3 (migration script only)

**Spec:** `docs/superpowers/specs/2026-03-15-jekyll-conversion-design.md`

---

## Chunk 1: Scaffold, Includes, and CSS

### Task 1: Jekyll scaffold

**Files:**
- Create: `_config.yml`
- Create: `_layouts/default.html`
- Modify: `.gitignore`

- [ ] **Step 1: Create `_config.yml`**

```yaml
title: PhoneRepairPOS
url: https://phonerepairpos.app
baseurl: ""
og_image: https://phonerepairpos.app/og-image.png
```

- [ ] **Step 2: Create `_layouts/default.html`**

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

- [ ] **Step 3: Add Jekyll build outputs to `.gitignore`**

Append to `.gitignore`:
```
_site/
.jekyll-cache/
Gemfile.lock
```

Note: CSS paths in the layout use root-relative `/assets/css/...` which requires `baseurl: ""` in `_config.yml` (already set). Do not change `baseurl` — it would break all CSS and asset paths.

- [ ] **Step 4: Commit**

```bash
git add _config.yml _layouts/default.html .gitignore
git commit -m "feat: add Jekyll scaffold (config, layout, gitignore)"
```

---

### Task 2: Create includes

**Files:**
- Create: `_includes/head-meta.html`
- Create: `_includes/nav.html`
- Create: `_includes/footer.html`

- [ ] **Step 1: Create `_includes/head-meta.html`**

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

Note: `index.html` uses `Instrument+Serif` (no italic), blog posts use `Instrument+Serif:ital@0;1`. Use the blog post's superset URL here — it covers both and avoids loading two different font requests across the site.

- [ ] **Step 2: Create `_includes/nav.html`**

Note: Use absolute paths so this works from any page depth. The `/#features` links work identically to `#features` when already on the homepage.

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

- [ ] **Step 3: Create `_includes/footer.html`**

Note: Nav scroll JS is homepage-specific and stays in `index.html` content — it does NOT go here.

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

- [ ] **Step 4: Commit**

```bash
git add _includes/
git commit -m "feat: add Jekyll includes (head-meta, nav, footer)"
```

---

### Task 3: Create shared CSS

**Files:**
- Create: `assets/css/shared.css`

Source: copy from `index.html` the reset/`:root`/`html`/`body` block and the footer CSS block.

- [ ] **Step 1: Create `assets/css/` directory and `shared.css`**

The file should contain in this order:
1. The `*, *::before, *::after` reset (from `index.html`)
2. The `:root` CSS variables block (from `index.html` — this is the canonical superset)
3. `html { scroll-behavior: smooth; }`
4. The `body` styles
5. All `/* ===== FOOTER =====*/` styles (nav-independent, identical on all pages)
6. Responsive footer rules from the `@media (max-width: 768px)` block

**Do NOT include nav styles** — nav CSS differs between homepage (fixed, dark) and blog pages (sticky, white) so it lives in page-specific CSS files.

Copy these sections verbatim from `index.html` by CSS selector, not line number:
- Everything from `*, *::before, *::after {` through the closing `}` of the `body` rule (stop before the `/* ===== NAVIGATION =====*/` comment)
- The entire `/* ===== FOOTER =====*/` section (all `.footer*` and `footer` rules)

**There are no footer-specific rules in the `@media` responsive block** — the entire responsive block belongs in `index.css`. Do not add any responsive rules to `shared.css`.

- [ ] **Step 2: Commit**

```bash
git add assets/css/shared.css
git commit -m "feat: add shared.css (reset, variables, footer styles)"
```

---

### Task 4: Create page-specific CSS files

**Files:**
- Create: `assets/css/index.css`
- Create: `assets/css/blog-post.css`
- Create: `assets/css/blog-index.css`
- Create: `assets/css/page.css`

- [ ] **Step 1: Create `assets/css/index.css`**

Copy from `index.html` `<style>` block everything **except** what's already in `shared.css`. Copy by CSS section name, not line number:

**Include:**
- `/* ===== NAVIGATION =====*/` and all nav rules (fixed nav, dark, scroll effect)
- Every content section: `/* ===== HERO =====*/`, `/* ===== iPad MOCKUP FRAME =====*/`, `/* ===== REAL APP MOCKUP STYLES =====*/`, `/* ===== FEATURE SHOWCASE PANELS =====*/`, `/* ===== SECTION STYLING =====*/`, `/* ===== FEATURES =====*/`, `/* ===== HOW IT WORKS =====*/`, `/* ===== SOCIAL PROOF =====*/`, `/* ===== CTA BANNER =====*/`, `/* ===== FAQ =====*/`
- The entire `/* ===== RESPONSIVE =====*/` `@media` block
- The `/* ===== ANIMATION DELAY UTILITIES =====*/` section (appears after the responsive block, before `</style>`)

**Do NOT copy:** the reset (`*, *::before, *::after`), `:root`, `html`, `body`, or `/* ===== FOOTER =====*/` — these are in `shared.css`.

- [ ] **Step 2: Create `assets/css/blog-post.css`**

Source: open `blog/best-pos-systems-for-phone-repair-shops-2026.html` and copy the content **inside** the `<style>...</style>` tags (not the tags themselves).

The file should contain in this order:
1. A `:root` override block — these values differ from index.html and must override `shared.css`:
   ```css
   :root {
       --primary: #2B2D7C;
       --accent: #3F41B2;
       --vibrant: #5B5EF4;
       --dark: #111136;
       --border: #E4E4EE;
   }
   ```
2. `/* ===== NAV =====*/` styles (sticky white nav — different from homepage fixed nav)
3. All article content sections: `/* ===== ARTICLE HEADER =====*/`, `/* ===== ARTICLE BODY =====*/`, `/* ===== ARTICLE FOOTER / CTA =====*/`, the Back link styles, `/* ===== RESPONSIVE =====*/`

**Do NOT copy:** reset (`*, *::before, *::after`), `html`, `body`, or `/* ===== FOOTER =====*/` — these come from `shared.css`.

- [ ] **Step 3: Create `assets/css/blog-index.css`**

Source: copy the `<style>` block from `blog/index.html`, excluding reset, `html`, `body`, and footer styles.

Include:
- `:root` override block (same values as blog-post.css)
- Nav styles
- Blog index page styles

- [ ] **Step 4: Create `assets/css/page.css`**

Source: open `privacy.html` and copy the content **inside** the `<style>...</style>` tags (not the tags themselves).

`privacy.html` has no CSS section comments. Copy these rule groups in order:
1. `:root` override block — copy verbatim from `privacy.html` (values differ from blog-post.css; do not reuse the blog post block)
2. `nav` and all `.nav-*` rules (sticky white nav, starts at `nav {`)
3. `.page-header` and all `.page-header *` rules
4. `.legal-content` and all `.legal-content *` rules
5. The `@media (max-width: 768px)` block

**Do NOT copy:** reset (`*, *::before, *::after`), `html { scroll-behavior: smooth; }`, `body { ... }`, or `footer` / `.footer-*` rules — these come from `shared.css`.

- [ ] **Step 5: Commit**

```bash
git add assets/css/
git commit -m "feat: add page-specific CSS files (index, blog-post, blog-index, page)"
```

---

## Chunk 2: Migration and Deployment

### Task 5: Write the migration script

**Files:**
- Create: `scripts/migrate_to_jekyll.py`

This script converts all 25 HTML files in one pass. It extracts front matter values from existing meta tags, strips the boilerplate (head, body tag, nav, footer, closing tags), moves any JSON-LD from `<head>` into the page content, and writes back.

- [ ] **Step 1: Create `scripts/` directory and write the script**

```python
#!/usr/bin/env python3
"""
migrate_to_jekyll.py

Converts phonerepairpos-site HTML files to Jekyll format.
Run from the root of the repo: python3 scripts/migrate_to_jekyll.py

For each file:
  - Extracts title, description, canonical, og_title, og_type from meta tags
  - Determines layout (default) and stylesheet (from file path)
  - Removes DOCTYPE through </head> (strips all head content)
  - Removes <body> opening tag
  - Removes <nav>...</nav> block
  - Removes <footer>...</footer> block
  - Removes </body> and </html>
  - Moves JSON-LD <script> from head into page content (prepended)
  - Adds YAML front matter at top
"""

import re
import os
import glob

STYLESHEET_MAP = {
    'index.html': '/assets/css/index.css',
    'privacy.html': '/assets/css/page.css',
    'terms.html': '/assets/css/page.css',
    'blog/index.html': '/assets/css/blog-index.css',
}
BLOG_POST_STYLESHEET = '/assets/css/blog-post.css'

def get_meta(html, property_name):
    """Extract content from <meta name="..." or property="...">"""
    patterns = [
        rf'<meta\s+name="{re.escape(property_name)}"\s+content="([^"]*)"',
        rf'<meta\s+property="{re.escape(property_name)}"\s+content="([^"]*)"',
        rf'<meta\s+content="([^"]*)"\s+name="{re.escape(property_name)}"',
        rf'<meta\s+content="([^"]*)"\s+property="{re.escape(property_name)}"',
    ]
    for pattern in patterns:
        m = re.search(pattern, html, re.IGNORECASE)
        if m:
            return m.group(1)
    return None

def get_title(html):
    m = re.search(r'<title>([^<]+)</title>', html)
    return m.group(1).strip() if m else ''

def get_canonical(html):
    m = re.search(r'<link\s+rel="canonical"\s+href="([^"]*)"', html)
    if not m:
        m = re.search(r'<link\s+href="([^"]*)"\s+rel="canonical"', html)
    return m.group(1) if m else ''

def extract_json_ld(html):
    """Extract ALL JSON-LD script blocks from the head section.

    index.html has two JSON-LD blocks (WebSite + FAQPage schema).
    Using findall ensures both are captured; returns them joined by newline.
    """
    head_match = re.search(r'<head>(.*?)</head>', html, re.DOTALL | re.IGNORECASE)
    if not head_match:
        return None
    head_content = head_match.group(1)
    matches = re.findall(
        r'<script\s+type="application/ld\+json">.*?</script>',
        head_content,
        re.DOTALL | re.IGNORECASE
    )
    if not matches:
        return None
    return '\n\n'.join(m.strip() for m in matches)

def remove_head(html):
    """Remove everything from <!DOCTYPE to </head> inclusive."""
    return re.sub(r'(?s)<!DOCTYPE.*?</head>\s*', '', html, flags=re.IGNORECASE)

def remove_body_open(html):
    return re.sub(r'<body[^>]*>\s*', '', html, count=1, flags=re.IGNORECASE)

def remove_nav(html):
    """Remove <nav>...</nav> block, with or without a preceding Navigation comment.

    Some pages (blog posts, privacy, terms) have a bare <nav> with no comment.
    Two-pass approach mirrors remove_footer's fallback pattern.
    """
    # Pass 1: remove nav with Navigation comment
    result = re.sub(r'(?s)\s*<!--\s*Navigation\s*-->\s*<nav>.*?</nav>\s*', '\n', html, flags=re.IGNORECASE)
    # Pass 2: remove any remaining bare <nav>...</nav>
    result = re.sub(r'(?s)\s*<nav>.*?</nav>\s*', '\n', result, flags=re.IGNORECASE)
    return result

def remove_footer(html):
    """Remove <!-- Footer --> comment + <footer>...</footer> block."""
    result = re.sub(r'(?s)\s*<!--\s*Footer\s*-->\s*<footer>.*?</footer>\s*', '\n', html, flags=re.IGNORECASE)
    # Also handle footer without comment
    result = re.sub(r'(?s)\s*<footer>.*?</footer>\s*', '\n', result, flags=re.IGNORECASE)
    return result

def remove_body_close(html):
    return re.sub(r'\s*</body>\s*</html>\s*$', '', html, flags=re.IGNORECASE).rstrip()

def build_front_matter(title, description, canonical, og_title, og_type, stylesheet):
    lines = ['---']
    lines.append(f'layout: default')
    lines.append(f'title: "{title}"')
    if og_title and og_title != title:
        lines.append(f'og_title: "{og_title}"')
    if description:
        lines.append(f'description: "{description}"')
    if canonical:
        lines.append(f'canonical: "{canonical}"')
    # og_type: omit for 'website' pages — head-meta.html defaults to 'website' via Liquid.
    # Only written to front matter for non-website pages (e.g. og_type: article on blog posts).
    if og_type and og_type != 'website':
        lines.append(f'og_type: {og_type}')
    lines.append(f'stylesheet: {stylesheet}')
    lines.append('---')
    return '\n'.join(lines) + '\n'

def get_stylesheet(filepath):
    rel = os.path.relpath(filepath, start=os.getcwd())
    # Normalise to forward slashes
    rel = rel.replace('\\', '/')
    if rel in STYLESHEET_MAP:
        return STYLESHEET_MAP[rel]
    if rel.startswith('blog/') and rel != 'blog/index.html':
        return BLOG_POST_STYLESHEET
    return STYLESHEET_MAP.get(rel, '/assets/css/page.css')

def migrate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Skip already-migrated files (have front matter)
    if html.startswith('---'):
        print(f'  SKIP (already migrated): {filepath}')
        return

    title = get_title(html)
    description = get_meta(html, 'description')
    canonical = get_canonical(html)
    og_title = get_meta(html, 'og:title')
    og_type = get_meta(html, 'og:type') or 'website'
    stylesheet = get_stylesheet(filepath)
    json_ld = extract_json_ld(html)

    content = remove_head(html)
    content = remove_body_open(content)
    content = remove_nav(content)
    content = remove_footer(content)
    content = remove_body_close(content)
    content = content.strip()

    front_matter = build_front_matter(title, description, canonical, og_title, og_type, stylesheet)

    # Prepend JSON-LD to content if present (works fine in <body>)
    if json_ld:
        content = json_ld + '\n\n' + content

    output = front_matter + '\n' + content + '\n'

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(output)

    print(f'  Migrated: {filepath}')

def main():
    files = (
        ['index.html', 'privacy.html', 'terms.html'] +
        sorted(glob.glob('blog/*.html'))
    )
    print(f'Migrating {len(files)} files...')
    for f in files:
        migrate_file(f)
    print('Done.')

if __name__ == '__main__':
    main()
```

- [ ] **Step 2: Commit the script**

```bash
git add scripts/migrate_to_jekyll.py
git commit -m "feat: add Jekyll migration script"
```

---

### Task 6: Run the migration and verify

**Files:** All 25 HTML files are modified.

- [ ] **Step 1: Run the migration script from repo root**

```bash
cd /Users/jonathanwilson/Developer/phonerepairpos-site
python3 scripts/migrate_to_jekyll.py
```

Expected output: 25 lines of `Migrated: <filename>`, no SKIP lines.

- [ ] **Step 2: Verify all 25 files were migrated**

```bash
grep -L "^---" *.html blog/*.html
```

Expected: no output. Any file listed was not migrated (missing front matter).

- [ ] **Step 3: Verify front matter on a sample of files**

Check that each file starts with `---` and has the correct values:

```bash
head -10 index.html
head -10 privacy.html
head -10 blog/best-pos-systems-for-phone-repair-shops-2026.html
```

Expected: YAML front matter with `layout: default`, `title`, `description`, `canonical`, `stylesheet`.

- [ ] **Step 4: Verify nav and footer are removed from all files**

```bash
grep -l "<nav>" *.html blog/*.html
grep -l "<footer>" *.html blog/*.html
```

Expected: no output for either command.

- [ ] **Step 5: Verify no `<head>` or `<!DOCTYPE` remain in page files**

```bash
grep -l "<!DOCTYPE\|</head>" *.html blog/*.html
```

Expected: no output.

- [ ] **Step 6: Verify all files have `layout: default` in front matter**

```bash
grep -L "layout: default" *.html blog/*.html
```

Expected: no output.

- [ ] **Step 7: Verify JSON-LD moved to content**

```bash
grep -l "application/ld+json" blog/best-pos-systems-for-phone-repair-shops-2026.html
```
Expected: file is listed (JSON-LD preserved, now in body content).

```bash
grep -c "application/ld+json" index.html
```
Expected: `2` — index.html has two JSON-LD blocks (WebSite + FAQPage schema), both must be present.

---

### Task 7: Manual cleanup — index.html JS and spot-check

**Files:**
- Modify: `index.html`

After migration, `index.html` contains all the page content but the nav scroll JS (and Intersection Observer animations) was inside `<body>` in the original file, below the footer — the migration should have preserved it. Verify and fix if needed.

- [ ] **Step 1: Check index.html has its JS block**

```bash
grep -n "addEventListener\|IntersectionObserver" index.html | head -5
```

Expected: lines found. If not found, the JS was accidentally stripped — restore from git:
```bash
git show HEAD~1:index.html | grep -A 50 "Nav scroll effect"
```
Then manually append the JS at the end of `index.html` content.

- [ ] **Step 2: Fix nav links in index.html content if needed**

The migration removed the shared nav (which now comes from `_includes/nav.html`). But `index.html` content may have inline anchor links to `#features` and `#how-it-works` in the hero section — these are fine as-is (they're in-page anchors in the content, not nav links). No action needed.

- [ ] **Step 3: Spot-check two more blog posts**

Open `blog/how-to-start-a-phone-repair-business.html` and `blog/repairdesk-vs-phonerepairpos.html` and verify:
- Front matter present at top
- No `<html>`, `<head>`, `<nav>`, `<footer>`, `</body>`, `</html>` remaining
- Page-specific content intact (article hero, article body, CTA section)

- [ ] **Step 4: Commit migrated files**

```bash
git add index.html privacy.html terms.html blog/
git commit -m "feat: convert all HTML files to Jekyll layout with front matter"
```

---

### Task 8: Push and verify on GitHub Pages

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

- [ ] **Step 2: Check GitHub Pages build**

Go to the repo on GitHub → **Actions** tab (or Settings → Pages). Wait for the Jekyll build to complete (~1–2 minutes).

If build fails: read the error in Actions, fix, push again.

- [ ] **Step 3: Verify live site**

Check these URLs in a browser:
- `https://phonerepairpos.app/` — homepage renders with nav, hero, footer
- `https://phonerepairpos.app/blog/` — blog index renders
- `https://phonerepairpos.app/blog/best-pos-systems-for-phone-repair-shops-2026.html` — blog post renders
- `https://phonerepairpos.app/privacy.html` — privacy page renders

In browser DevTools → Network: confirm `shared.css` and the page-specific CSS file both load (200 status).

- [ ] **Step 4: Verify GA tag loads exactly once per page**

In DevTools → Network → filter by "gtag": confirm exactly one request to `googletagmanager.com/gtag/js` per page load. Previously each file had its own hardcoded copy — double-loading here means the migration missed stripping a tag.

- [ ] **Step 5: Rollback if needed**

If pages render broken after push, revert the migration commit and push:

```bash
git log --oneline -5   # find the migration commit SHA
git revert <sha>
git push origin main
```
