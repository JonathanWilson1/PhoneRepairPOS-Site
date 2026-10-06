import { execFileSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { type MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://phonerepairpos.app'
const APP_DIR = path.join(process.cwd(), 'src/app')
const PAGE_FILE = /^page\.(tsx|mdx)$/

// Utility routes that shouldn't be indexed (/pair is a universal-link target).
const EXCLUDED = new Set(['/check', '/pair'])

function findRoutes(
  dir: string,
  route = '',
): { route: string; file: string }[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) {
      return findRoutes(full, `${route}/${entry}`)
    }
    return PAGE_FILE.test(entry) ? [{ route: route || '/', file: full }] : []
  })
}

// Last commit touching the page, so lastmod only moves when content changes.
function lastModified(file: string): Date {
  try {
    const date = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', file],
      {
        encoding: 'utf8',
      },
    ).trim()
    if (date) return new Date(date)
  } catch {}
  return statSync(file).mtime
}

function priority(route: string): number {
  if (route === '/') return 1
  if (route === '/blog' || /^\/[a-z]{2}$/.test(route)) return 0.9
  if (route === '/privacy' || route === '/terms') return 0.3
  return 0.8
}

export default function sitemap(): MetadataRoute.Sitemap {
  return findRoutes(APP_DIR)
    .filter(({ route }) => !EXCLUDED.has(route))
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ route, file }) => ({
      url: route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`,
      lastModified: lastModified(file),
      priority: priority(route),
    }))
}
