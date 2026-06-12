import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical advice, real-world insights, and everything we have learned about running a better phone repair shop.',
  alternates: { canonical: '/blog' },
}

const posts = [
  {
    slug: 'repairdesk-alternatives',
    title: 'RepairDesk Alternatives in 2026: Free + Paid POS Options for Phone Repair Shops',
    date: '2026-06-03',
    excerpt:
      'The best RepairDesk alternatives in 2026 for phone repair shops — free, low-cost, and enterprise options compared on price, features, and which size shop each one fits.',
    readTime: '8 min read',
  },
  {
    slug: 'repairdesk-vs-repairshopr',
    title: 'RepairDesk vs RepairShopr: Which POS Wins for Phone Repair? (2026)',
    date: '2026-05-10',
    excerpt:
      'Honest 2026 comparison of RepairDesk and RepairShopr for phone repair shops — features, real pricing, hidden costs, and a free alternative most owners overlook.',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-start-a-phone-repair-business',
    title: 'How to start a phone repair business in 2026',
    date: '2026-04-17',
    excerpt:
      'A practical, step-by-step guide to launching a phone repair business — from tools and skills to finding your first customers.',
    readTime: '6 min read',
  },
  {
    slug: 'cheapest-pos-systems-for-phone-repair-shops',
    title: 'The Cheapest POS Systems for Cell Phone Repair Shops (2026)',
    date: '2026-04-17',
    excerpt:
      'A breakdown of the most affordable cell phone repair POS options — from genuinely free apps to budget subscriptions, compared on price and features.',
    readTime: '5 min read',
  },
  {
    slug: 'best-pos-systems-for-phone-repair-shops',
    title: 'Best POS systems for phone repair shops in 2026',
    date: '2026-04-17',
    excerpt:
      'An honest comparison of the top POS systems built for phone repair — features, pricing, and which one fits your shop.',
    readTime: '6 min read',
  },
  {
    slug: 'how-much-do-phone-repair-shops-make',
    title: 'How much do phone repair shops make?',
    date: '2026-04-17',
    excerpt:
      'Real numbers on revenue, margins, and what it actually costs to run a phone repair shop in 2026.',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-price-phone-repairs',
    title: 'Phone Repair Pricing Guide 2026: Real Margins by Repair Type',
    date: '2026-04-17',
    excerpt:
      'How to price phone repairs profitably — the formula, typical markups by repair type, and the mistakes that quietly kill your margins.',
    readTime: '5 min read',
  },
  {
    slug: 'repair-ticket-workflow-from-intake-to-pickup',
    title: 'Repair ticket workflow: from intake to pickup',
    date: '2026-04-17',
    excerpt:
      'The ideal repair ticket workflow — how to move jobs from intake through diagnosis, repair, and customer pickup without dropping the ball.',
    readTime: '5 min read',
  },
  {
    slug: 'phone-repair-shop-inventory-management',
    title: 'Phone repair shop inventory management: a practical guide',
    date: '2026-04-17',
    excerpt:
      'How to track parts, avoid stockouts, and keep your repair shop running without spreadsheet chaos.',
    readTime: '5 min read',
  },
  {
    slug: 'mistakes-new-phone-repair-shop-owners-make',
    title: '5 Phone Repair Shop Mistakes That Quietly Drain Profit (2026)',
    date: '2026-04-17',
    excerpt:
      'The five mistakes new repair shop owners make in their first year — and exactly how to avoid each one before it costs you money.',
    readTime: '4 min read',
  },
  {
    slug: 'right-to-repair-what-it-means-for-phone-repair-shops',
    title: 'Right to repair: what it means for phone repair shops',
    date: '2026-04-17',
    excerpt:
      'Right-to-repair laws are changing the game for independent repair shops worldwide. Here is what is happening and why it matters.',
    readTime: '5 min read',
  },
  {
    slug: 'phone-repair-vs-replacement',
    title: 'Phone repair vs replacement: when is it worth fixing?',
    date: '2026-04-17',
    excerpt:
      'A practical guide to help you decide whether to repair your phone or buy a new one — based on cost, age, and damage type.',
    readTime: '4 min read',
  },
  {
    slug: 'how-to-get-more-google-reviews-for-your-repair-shop',
    title: 'How to get more Google reviews for your repair shop',
    date: '2026-04-17',
    excerpt:
      'Google reviews are the single best marketing tool for a local repair shop. Here is how to get more of them without being annoying.',
    readTime: '4 min read',
  },
  {
    slug: 'marketing-your-phone-repair-shop-on-a-budget',
    title: 'Marketing your phone repair shop on a budget',
    date: '2026-04-17',
    excerpt:
      'You do not need a big marketing budget to fill your repair bench. Here are the strategies that actually work for small shops.',
    readTime: '5 min read',
  },
  {
    slug: 'why-repair-shops-need-dedicated-pos',
    title: 'Why phone repair shops need a dedicated POS system',
    date: '2026-03-20',
    excerpt:
      'Generic retail POS systems were not designed for repair workflows. Here is why that matters and what to look for instead.',
    readTime: '5 min read',
  },
  {
    slug: 'ipad-vs-laptop-for-repair-counter',
    title: 'iPad vs Laptop for Repair Shop POS: Which Wins at the Counter?',
    date: '2026-03-15',
    excerpt:
      'We tested iPad and laptop POS setups in real phone repair shops. Here is what we found on speed, counter space, and customer experience.',
    readTime: '4 min read',
  },
]

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function BlogIndex() {
  return (
    <div>
      <h1 className="font-display text-3xl font-light text-white">Blog</h1>
      <p className="mt-4 text-sm/6 text-gray-400">
        Practical advice, real-world insights, and everything we have learned about running a better repair shop.
      </p>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block [text-decoration:none]">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-200 group-hover:border-violet-500/40 group-hover:bg-white/[0.06]">
              <div className="flex items-center gap-3 text-2xs font-medium text-gray-500">
                <time dateTime={post.date}>
                  {dateFormatter.format(new Date(post.date))}
                </time>
                <span className="h-1 w-1 rounded-full bg-gray-600" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold text-white transition group-hover:text-violet-300">
                {post.title}
              </h2>
              <p className="mt-2 text-sm/6 text-gray-400">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-400 transition group-hover:text-violet-300">
                Read more
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
