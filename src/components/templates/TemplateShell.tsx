import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { PrintButton } from '@/components/templates/PrintButton'

// Shared shell for printable template pages. Everything outside <PrintArea>
// is hidden when printing; the sheet itself prints black-on-white.

export function TemplateShell({
  title,
  intro,
  children,
}: {
  title: string
  intro: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-full bg-gray-950 print:bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-violet-500/10 to-transparent print:hidden" />
      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24 print:max-w-none print:p-0">
        <header className="mb-12 print:hidden">
          <Link href="/">
            <Logo className="inline-block" />
          </Link>
          <nav className="mt-6 flex gap-6 text-sm font-medium text-gray-400">
            <Link href="/" className="transition hover:text-white [text-decoration:none]">
              Home
            </Link>
            <Link href="/templates" className="transition hover:text-white [text-decoration:none]">
              Templates
            </Link>
            <Link href="/blog" className="transition hover:text-white [text-decoration:none]">
              Blog
            </Link>
          </nav>
        </header>

        <div className="print:hidden">
          <h1 className="font-display text-3xl font-light text-white">{title}</h1>
          <div className="mt-4 space-y-4 text-sm/6 text-gray-400">{intro}</div>
          <div className="mt-8 flex items-center gap-4">
            <PrintButton>Print / Save as PDF</PrintButton>
            <span className="text-xs text-gray-500">
              Free to use — no sign-up, no watermark.
            </span>
          </div>
        </div>

        <div className="mt-12 print:mt-0">{children}</div>

        <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-8 print:hidden">
          <p className="text-sm/6 text-gray-300">
            Tired of printing these? The free PhoneRepairPOS app for iPhone and
            iPad does everything this template does — tickets in 30 seconds,
            status tracking, customer SMS/WhatsApp updates, and PDF receipts —
            with no monthly fee.
          </p>
          <div className="mt-4">
            <Link
              href="https://apps.apple.com/app/id6759859240"
              className="text-sm font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Get the free app &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Sheet({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-8 text-gray-900 shadow-2xl print:rounded-none print:p-0 print:shadow-none">
      {children}
    </div>
  )
}

export function Field({
  label,
  width = 'full',
}: {
  label: string
  width?: 'full' | 'half' | 'third'
}) {
  const widths = { full: 'w-full', half: 'w-1/2', third: 'w-1/3' }
  return (
    <div className={`${widths[width]} px-1.5 pb-4`}>
      <div className="text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
        {label}
      </div>
      <div className="mt-4 border-b border-gray-400" />
    </div>
  )
}

export function CheckRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 px-1.5 pb-4">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-1.5 text-xs text-gray-700">
          <span className="inline-block h-3.5 w-3.5 rounded-sm border border-gray-500" />
          {item}
        </span>
      ))}
    </div>
  )
}

export function SheetHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-end justify-between border-b-2 border-gray-900 pb-3">
      <div>
        <div className="text-[0.65rem] font-semibold tracking-wide text-gray-500 uppercase">
          Shop name
        </div>
        <div className="mt-3 w-56 border-b border-gray-400" />
      </div>
      <div className="text-right font-display text-lg font-bold tracking-tight">
        {title}
      </div>
    </div>
  )
}
