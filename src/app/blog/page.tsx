import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical advice, real-world insights, and everything we have learned about running a better phone repair shop.',
  alternates: { canonical: '/blog' },
}

const posts = [
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
    title: 'iPad vs laptop at the repair counter',
    date: '2026-03-15',
    excerpt:
      'We tested both setups in real shops. Here is what we found about speed, portability, and customer experience.',
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
