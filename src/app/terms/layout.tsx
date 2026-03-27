import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-full bg-gray-950">
      <ThemeToggle />
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <Link href="/">
            <Logo className="inline-block" />
          </Link>
          <nav className="mt-6 flex gap-6 text-sm font-medium text-gray-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </nav>
        </header>
        <main className="typography">{children}</main>
      </div>
    </div>
  )
}
