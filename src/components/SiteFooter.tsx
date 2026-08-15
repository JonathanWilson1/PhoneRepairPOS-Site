import Link from 'next/link'

import { contactEmail, disclosureLines } from '@/lib/legal'

export function SiteFooter() {
  return (
    <footer
      data-site-footer
      className="relative z-10 border-t border-white/10 bg-gray-950 px-6 py-10"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6 text-[0.8125rem]/6 text-gray-500 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-1">
          {disclosureLines().map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            <a
              href={`mailto:${contactEmail}`}
              className="transition hover:text-gray-300"
            >
              {contactEmail}
            </a>
          </p>
        </div>

        <nav className="flex gap-6 lg:shrink-0">
          <Link href="/privacy" className="transition hover:text-gray-300">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-gray-300">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
