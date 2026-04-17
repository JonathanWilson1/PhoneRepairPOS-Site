import Script from 'next/script'

export function ArticleSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string
  description: string
  date: string
  slug: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: 'PhoneRepairPOS',
      url: 'https://phonerepairpos.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PhoneRepairPOS',
      url: 'https://phonerepairpos.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://phonerepairpos.app/icon-512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://phonerepairpos.app/blog/${slug}`,
    },
    image: 'https://phonerepairpos.app/og-image.png',
  }

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
