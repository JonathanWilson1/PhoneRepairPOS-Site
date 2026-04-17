import { BlogCTA } from './BlogCTA'
import { AuthorCard } from './AuthorCard'
import { ArticleSchema } from './ArticleSchema'
import { RelatedPost } from './RelatedPost'

export function PostFooter({
  title,
  description,
  date,
  slug,
  related,
}: {
  title: string
  description: string
  date: string
  slug: string
  related?: {
    slug: string
    title: string
    excerpt: string
  }
}) {
  return (
    <>
      <BlogCTA />
      {related && (
        <RelatedPost
          slug={related.slug}
          title={related.title}
          excerpt={related.excerpt}
        />
      )}
      <AuthorCard />
      <ArticleSchema
        title={title}
        description={description}
        date={date}
        slug={slug}
      />
    </>
  )
}
