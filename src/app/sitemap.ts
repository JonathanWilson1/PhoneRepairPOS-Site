import { type MetadataRoute } from 'next'

// The one source for /sitemap.xml (it replaced a hand-kept public/sitemap.xml).
//
// lastModified is a hand-set date per page: the day its content last changed,
// not the build date. Bump a page's date in the same PR that edits the page,
// and add a row here whenever you add a page.

export const dynamic = 'force-static'

const SITE = 'https://phonerepairpos.app'

type Row = [
  path: string,
  lastModified: string,
  changeFrequency: 'weekly' | 'monthly',
  priority: number,
]

const rows: Row[] = [
  ['/', '2026-09-27', 'weekly', 1.0],
  ['/blog', '2026-06-12', 'weekly', 0.9],

  // Localized landing pages (hreflang cluster: src/components/landingAlternates.ts)
  ['/es', '2026-09-27', 'monthly', 0.9],
  ['/pt', '2026-09-27', 'monthly', 0.9],
  ['/fr', '2026-09-27', 'monthly', 0.9],
  ['/de', '2026-09-27', 'monthly', 0.9],
  ['/it', '2026-09-27', 'monthly', 0.9],
  ['/ja', '2026-09-27', 'monthly', 0.9],
  ['/ru', '2026-09-27', 'monthly', 0.9],
  ['/zh', '2026-09-27', 'monthly', 0.9],
  ['/tr', '2026-09-27', 'monthly', 0.9],
  ['/vi', '2026-09-27', 'monthly', 0.9],
  ['/th', '2026-09-27', 'monthly', 0.9],
  ['/he', '2026-09-27', 'monthly', 0.9],
  ['/ar', '2026-09-27', 'monthly', 0.9],

  ['/templates', '2026-06-12', 'monthly', 0.9],
  ['/templates/repair-ticket-template', '2026-06-12', 'monthly', 0.8],
  ['/templates/phone-repair-intake-form', '2026-06-12', 'monthly', 0.8],
  ['/templates/repair-price-list-template', '2026-06-12', 'monthly', 0.8],

  ['/blog/repairdesk-alternatives', '2026-06-03', 'monthly', 0.9],
  ['/blog/repairdesk-vs-repairshopr', '2026-06-03', 'monthly', 0.9],
  ['/blog/repair-shop-software-pricing', '2026-09-27', 'monthly', 0.9],
  ['/blog/square-for-phone-repair-shops', '2026-06-12', 'monthly', 0.9],
  ['/blog/why-repair-shops-need-dedicated-pos', '2026-04-15', 'monthly', 0.8],
  ['/blog/ipad-vs-laptop-for-repair-counter', '2026-05-10', 'monthly', 0.8],
  [
    '/blog/cheapest-pos-systems-for-phone-repair-shops',
    '2026-06-12',
    'monthly',
    0.8,
  ],
  ['/blog/how-to-start-a-phone-repair-business', '2026-04-17', 'monthly', 0.8],
  [
    '/blog/best-pos-systems-for-phone-repair-shops',
    '2026-04-17',
    'monthly',
    0.8,
  ],
  ['/blog/how-much-do-phone-repair-shops-make', '2026-04-17', 'monthly', 0.8],
  ['/blog/how-to-price-phone-repairs', '2026-05-10', 'monthly', 0.8],
  [
    '/blog/repair-ticket-workflow-from-intake-to-pickup',
    '2026-04-17',
    'monthly',
    0.8,
  ],
  [
    '/blog/phone-repair-shop-inventory-management',
    '2026-04-17',
    'monthly',
    0.8,
  ],
  [
    '/blog/mistakes-new-phone-repair-shop-owners-make',
    '2026-05-10',
    'monthly',
    0.8,
  ],
  [
    '/blog/right-to-repair-what-it-means-for-phone-repair-shops',
    '2026-04-17',
    'monthly',
    0.8,
  ],
  ['/blog/phone-repair-vs-replacement', '2026-04-17', 'monthly', 0.8],
  [
    '/blog/how-to-get-more-google-reviews-for-your-repair-shop',
    '2026-04-17',
    'monthly',
    0.8,
  ],
  [
    '/blog/marketing-your-phone-repair-shop-on-a-budget',
    '2026-04-17',
    'monthly',
    0.8,
  ],

  ['/privacy', '2026-08-20', 'monthly', 0.5],
  ['/terms', '2026-08-15', 'monthly', 0.5],
]

export default function sitemap(): MetadataRoute.Sitemap {
  return rows.map(([path, lastModified, changeFrequency, priority]) => ({
    url: path === '/' ? `${SITE}/` : `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
