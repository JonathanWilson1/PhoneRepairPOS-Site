import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-full bg-gray-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-violet-500/10 to-transparent" />
      <ThemeToggle />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="mb-16">
          <Link href="/">
            <Logo className="inline-block" />
          </Link>
          <nav className="mt-6 flex gap-6 text-sm font-medium text-gray-400">
            <Link
              href="/"
              className="transition hover:text-white [text-decoration:none]"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-white transition [text-decoration:none]"
            >
              Blog
            </Link>
          </nav>
        </header>
        <main className="typography">{children}</main>
      </div>
    </div>
  )
}
