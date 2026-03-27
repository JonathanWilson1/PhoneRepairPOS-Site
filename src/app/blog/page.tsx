import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - RepairPOS',
  description: 'Tips, guides, and updates for phone repair shop owners.',
}

const posts = [
  {
    slug: 'why-repair-shops-need-dedicated-pos',
    title: 'Why phone repair shops need a dedicated POS system',
    date: '2026-03-20',
    excerpt:
      'Generic retail POS systems were not designed for repair workflows. Here is why that matters and what to look for instead.',
  },
  {
    slug: 'ipad-vs-laptop-for-repair-counter',
    title: 'iPad vs laptop at the repair counter',
    date: '2026-03-15',
    excerpt:
      'We tested both setups in real shops. Here is what we found about speed, portability, and customer experience.',
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
        Tips, guides, and updates for phone repair shop owners.
      </p>
      <div className="mt-12 space-y-12">
        {posts.map((post) => (
          <article key={post.slug}>
            <time
              dateTime={post.date}
              className="text-2xs font-medium text-gray-500"
            >
              {dateFormatter.format(new Date(post.date))}
            </time>
            <h2 className="mt-2 font-display text-xl font-semibold text-white">
              <Link
                href={`/blog/${post.slug}`}
                className="transition hover:text-sky-300"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm/6 text-gray-400">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
