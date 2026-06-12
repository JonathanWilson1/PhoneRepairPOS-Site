import Link from 'next/link'
import { type Metadata } from 'next'

import { Logo } from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Free Printable Templates for Phone Repair Shops',
  description:
    'Free printable templates for phone repair shops — repair ticket, customer intake form, and price list. Print or save as PDF. No sign-up, no watermark, no catch.',
  alternates: { canonical: '/templates' },
}

const templates = [
  {
    slug: 'repair-ticket-template',
    title: 'Repair Ticket Template',
    description:
      'A one-page repair ticket with customer details, device info, fault, estimate, status checkboxes, and a tear-off customer stub.',
  },
  {
    slug: 'phone-repair-intake-form',
    title: 'Phone Repair Intake Form',
    description:
      'A device check-in form with a condition checklist, accessories record, passcode and data consent, and a customer signature that prevents disputes.',
  },
  {
    slug: 'repair-price-list-template',
    title: 'Repair Price List Template',
    description:
      'A counter or window price list with the most common repairs pre-filled — add your prices, turnaround times, and warranty terms.',
  },
]

export default function TemplatesIndex() {
  return (
    <div className="relative min-h-full bg-gray-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-violet-500/10 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <Link href="/">
            <Logo className="inline-block" />
          </Link>
          <nav className="mt-6 flex gap-6 text-sm font-medium text-gray-400">
            <Link href="/" className="transition hover:text-white [text-decoration:none]">
              Home
            </Link>
            <Link href="/templates" className="text-white transition [text-decoration:none]">
              Templates
            </Link>
            <Link href="/blog" className="transition hover:text-white [text-decoration:none]">
              Blog
            </Link>
          </nav>
        </header>

        <h1 className="font-display text-3xl font-light text-white">
          Free templates for phone repair shops
        </h1>
        <p className="mt-4 text-sm/6 text-gray-400">
          Printable forms for running a repair counter on paper — free, no
          sign-up, no watermark. Print them directly or save as PDF from the
          print dialog. And when you are ready to stop printing forms, the free
          PhoneRepairPOS app does all of this digitally.
        </p>

        <div className="mt-10 space-y-6">
          {templates.map((t) => (
            <Link
              key={t.slug}
              href={`/templates/${t.slug}`}
              className="group block [text-decoration:none]"
            >
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-200 group-hover:border-violet-500/40 group-hover:bg-white/[0.06]">
                <h2 className="font-display text-lg font-semibold text-white transition group-hover:text-violet-300">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm/6 text-gray-400">{t.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-400 transition group-hover:text-violet-300">
                  View &amp; print &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
