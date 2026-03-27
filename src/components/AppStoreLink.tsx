import Link from 'next/link'

const APP_STORE_URL =
  'https://apps.apple.com/gb/app/phone-repair-pos/id6759859240'

export function AppStoreLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <Link
        href={APP_STORE_URL}
        className="text-sm font-semibold text-sky-400 transition hover:text-sky-300"
      >
        {children} &rarr;
      </Link>
    </div>
  )
}
