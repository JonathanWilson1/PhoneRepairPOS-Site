#!/usr/bin/env python3
"""
migrate_to_jekyll.py
Converts phonerepairpos-site HTML files to Jekyll format.
Run from the root of the repo: python3 scripts/migrate_to_jekyll.py
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
    return re.sub(r'(?s)<!DOCTYPE.*?</head>\s*', '', html, flags=re.IGNORECASE)

def remove_body_open(html):
    return re.sub(r'<body[^>]*>\s*', '', html, count=1, flags=re.IGNORECASE)

def remove_nav(html):
    result = re.sub(r'(?s)\s*<!--\s*Navigation\s*-->\s*<nav>.*?</nav>\s*', '\n', html, flags=re.IGNORECASE)
    result = re.sub(r'(?s)\s*<nav>.*?</nav>\s*', '\n', result, flags=re.IGNORECASE)
    return result

def remove_footer(html):
    result = re.sub(r'(?s)\s*<!--\s*Footer\s*-->\s*<footer>.*?</footer>\s*', '\n', html, flags=re.IGNORECASE)
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
    if og_type and og_type != 'website':
        lines.append(f'og_type: {og_type}')
    lines.append(f'stylesheet: {stylesheet}')
    lines.append('---')
    return '\n'.join(lines) + '\n'

def get_stylesheet(filepath):
    rel = os.path.relpath(filepath, start=os.getcwd())
    rel = rel.replace('\\', '/')
    if rel in STYLESHEET_MAP:
        return STYLESHEET_MAP[rel]
    if rel.startswith('blog/') and rel != 'blog/index.html':
        return BLOG_POST_STYLESHEET
    return STYLESHEET_MAP.get(rel, '/assets/css/page.css')

def migrate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
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
