import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

const APP_STORE_URL =
  'https://apps.apple.com/app/phone-repair-pos/id6759859240'

export function ScreenshotGrid({
  images,
}: {
  images: { src: StaticImageData; alt: string }[]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {images.map((image, i) => (
        <Link
          key={i}
          href={APP_STORE_URL}
          className="relative block overflow-hidden rounded-xl bg-gray-50 transition-opacity hover:opacity-80 dark:bg-gray-900"
        >
          <Image
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 640px) 12rem, 95vw"
            className="w-full"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-violet-500 ring-inset dark:ring-violet-400" />
        </Link>
      ))}
    </div>
  )
}
