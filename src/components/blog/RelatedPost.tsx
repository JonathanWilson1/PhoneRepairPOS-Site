import Link from 'next/link'

export function RelatedPost({
  slug,
  title,
  excerpt,
}: {
  slug: string
  title: string
  excerpt: string
}) {
  return (
    <div className="mt-8 clear-both border-t border-white/10 pt-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        Related
      </p>
      <Link
        href={`/blog/${slug}`}
        className="mt-3 block rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40 hover:bg-white/[0.06] [text-decoration:none]"
      >
        <h4 className="font-display text-base font-semibold text-white [&]:!mt-0">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-400 [&]:!mt-1">{excerpt}</p>
      </Link>
    </div>
  )
}
