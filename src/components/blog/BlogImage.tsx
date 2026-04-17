import Image, { type StaticImageData } from 'next/image'

export function BlogImage({
  src,
  alt,
  caption,
  children,
}: {
  src: StaticImageData
  alt: string
  caption?: string
  children?: React.ReactNode
}) {
  if (!children) {
    return (
      <figure className="my-10 flex flex-col items-center [&]:!mt-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
          <Image
            src={src}
            alt={alt}
            className="h-auto max-h-[28rem] w-auto object-contain"
            sizes="(min-width: 1024px) 32rem, 80vw"
            placeholder="blur"
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <div className="flow-root [&]:!mt-10 [&>*+*]:mt-6 [&>p+p]:mt-8 [&>:is(h2,h3,h4)]:mt-8 [&>p:first-of-type]:mt-0">
      <figure className="mx-auto mb-8 block w-48 sm:float-right sm:mx-0 sm:mt-1 sm:mb-14 sm:ml-8 sm:w-44">
        <div className="relative overflow-hidden rounded-xl bg-gray-900">
          <Image src={src} alt={alt} sizes="12rem" className="w-full" placeholder="blur" />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-violet-500 ring-inset" />
        </div>
        {caption && (
          <figcaption className="mt-4 text-center text-xs text-gray-500">
            {caption}
          </figcaption>
        )}
      </figure>
      {children}
    </div>
  )
}
