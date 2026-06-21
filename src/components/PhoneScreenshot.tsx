import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

const APP_STORE_URL =
  'https://apps.apple.com/app/phone-repair-pos/id6759859240'

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
    <div className="flow-root [&>*+*]:mt-6 [&>p+p]:mt-8 [&>:is(h2,h3,h4)]:mt-8 [&>p:first-of-type]:mt-0">
      <Link
        href={APP_STORE_URL}
        className="relative mx-auto mb-8 block w-48 overflow-hidden rounded-xl bg-gray-50 transition-opacity hover:opacity-80 sm:float-right sm:mx-0 sm:-mt-12 sm:mb-4 sm:ml-8 sm:w-44 dark:bg-gray-900"
      >
        <Image src={src} alt={alt} sizes="12rem" className="w-full" />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-violet-500 ring-inset dark:ring-violet-400" />
      </Link>
      {children}
    </div>
  )
}
