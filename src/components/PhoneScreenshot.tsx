import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

const APP_STORE_URL =
  'https://apps.apple.com/gb/app/phone-repair-pos/id6759859240'

export function PhoneScreenshot({
  src,
  alt = '',
  children,
}: {
  src: StaticImageData
  alt?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
      <div className="flex-1">{children}</div>
      <Link
        href={APP_STORE_URL}
        className="relative w-48 flex-none overflow-hidden rounded-xl bg-gray-50 transition-opacity hover:opacity-80 sm:w-44 dark:bg-gray-900"
      >
        <Image src={src} alt={alt} sizes="12rem" className="w-full" />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
      </Link>
    </div>
  )
}
