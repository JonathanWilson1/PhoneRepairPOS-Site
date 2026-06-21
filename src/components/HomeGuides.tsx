import Link from 'next/link'

// Persistent internal-linking block at the foot of the homepage. The homepage
// is the most-linked page on the site, so linking the commercial + guide posts
// here passes crawl equity to pages that are otherwise orphaned (and therefore
// going uncrawled in Search Console). Column alignment mirrors ContentWrapper
// in components/mdx.tsx.
const GUIDE_GROUPS = [
  {
    heading: 'Choosing a POS',
    links: [
      ['/blog/best-pos-systems-for-phone-repair-shops', 'Best POS systems for phone repair shops'],
      ['/blog/cheapest-pos-systems-for-phone-repair-shops', 'Cheapest POS systems for repair shops'],
      ['/blog/why-repair-shops-need-dedicated-pos', 'Why repair shops need a dedicated POS'],
      ['/blog/repair-shop-software-pricing', 'Repair shop software pricing in 2026'],
    ],
  },
  {
    heading: 'Comparisons',
    links: [
      ['/blog/repairdesk-alternatives', 'RepairDesk alternatives'],
      ['/blog/repairdesk-vs-repairshopr', 'RepairDesk vs RepairShopr'],
      ['/blog/square-for-phone-repair-shops', 'Square for phone repair shops'],
      ['/blog/ipad-vs-laptop-for-repair-counter', 'iPad vs laptop at the counter'],
    ],
  },
  {
    heading: 'Running your shop',
    links: [
      ['/blog/how-to-start-a-phone-repair-business', 'How to start a phone repair business'],
      ['/blog/how-to-price-phone-repairs', 'How to price phone repairs'],
      ['/blog/phone-repair-shop-inventory-management', 'Inventory management'],
      ['/blog/how-to-get-more-google-reviews-for-your-repair-shop', 'Get more Google reviews'],
    ],
  },
]

export function HomeGuides() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
          <h2 className="font-display text-2xl/tight font-light text-white">
            Guides for phone repair shops
          </h2>
          <p className="mt-3 text-sm/6 text-gray-400">
            Practical, no-fluff advice on choosing repair shop software, pricing
            repairs, and running a busy counter.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {GUIDE_GROUPS.map((group) => (
              <div key={group.heading}>
                <h3 className="text-2xs font-semibold tracking-wide text-gray-500 uppercase">
                  {group.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.links.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm/6 text-gray-300 transition hover:text-violet-300 [text-decoration:none]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex text-sm font-semibold text-violet-400 transition hover:text-violet-300 [text-decoration:none]"
          >
            All guides &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
