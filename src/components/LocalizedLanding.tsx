import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

// Locale-neutral App Store URL — lands each visitor on their own storefront,
// unlike the /gb/ URL used on the English pages.
const APP_STORE_URL = 'https://apps.apple.com/app/id6759859240'

export interface LandingStrings {
  langName: string
  heroTitle: string
  heroAccent: string // the word inside heroTitle to highlight (must appear in heroTitle)
  heroSubtitle: string
  cta: string
  featuresHeading: string
  features: { title: string; body: string }[]
  stepsHeading: string
  steps: { title: string; body: string }[]
  faqHeading: string
  faq: { q: string; a: string }[]
  footerNote: string
  inEnglish: string
}

function highlight(title: string, accent: string) {
  const i = title.indexOf(accent)
  if (i === -1) return title
  return (
    <>
      {title.slice(0, i)}
      <span className="text-violet-300">{accent}</span>
      {title.slice(i + accent.length)}
    </>
  )
}

export function LocalizedLanding({ strings }: { strings: LandingStrings }) {
  return (
    <div className="relative min-h-full bg-gray-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-violet-500/10 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-16 flex items-center justify-between">
          <Link href="/">
            <Logo className="inline-block" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 transition hover:text-white [text-decoration:none]"
          >
            {strings.inEnglish}
          </Link>
        </header>

        <main>
          <h1 className="font-display text-4xl/tight font-light text-white">
            {highlight(strings.heroTitle, strings.heroAccent)}
          </h1>
          <p className="mt-4 max-w-xl text-base/7 text-gray-300">
            {strings.heroSubtitle}
          </p>
          <div className="mt-8">
            <Button href={APP_STORE_URL} arrow>
              {strings.cta}
            </Button>
          </div>

          <h2 className="mt-20 font-display text-2xl font-semibold text-white">
            {strings.featuresHeading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {strings.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm/6 text-gray-400">{f.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 font-display text-2xl font-semibold text-white">
            {strings.stepsHeading}
          </h2>
          <ol className="mt-8 space-y-6">
            {strings.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-violet-600/20 font-display text-sm font-semibold text-violet-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm/6 text-gray-400">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-20 font-display text-2xl font-semibold text-white">
            {strings.faqHeading}
          </h2>
          <div className="mt-8 space-y-8">
            {strings.faq.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm/6 text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-8 text-center">
            <p className="text-sm/6 text-gray-300">{strings.footerNote}</p>
            <div className="mt-6">
              <Button href={APP_STORE_URL} arrow>
                {strings.cta}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
