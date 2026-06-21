import { AppStoreLink } from '@/components/AppStoreLink'

// Static, evergreen intro that sits above the changelog feed on the homepage.
// Gives crawlers keyword-rich body content (the dated feed entries change every
// release) and renders an in-content H2 for the primary "cell phone repair POS"
// term. Column alignment mirrors ContentWrapper in components/mdx.tsx.
export function HomeHero() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
          <h2 className="font-display text-3xl/tight font-light text-white">
            The free POS system for{' '}
            <span className="text-violet-300">cell phone repair shops</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm/6 text-gray-300">
            <p>
              PhoneRepairPOS is a free point-of-sale and repair-ticketing app
              built for cell phone repair shops. Run your whole counter from an
              iPhone or iPad — create repair tickets in seconds, track every job
              from drop-off to collection, message customers, and record
              payments in one fast app that works offline.
            </p>
            <p>
              Most repair shop software charges a monthly subscription per seat.
              PhoneRepairPOS gives you the core tools that run a busy repair shop
              for free, and every feature we ship stays free. Open it and start
              logging repairs in under a minute — no account, no credit card.
            </p>
          </div>
          <AppStoreLink>Download free on the App Store</AppStoreLink>
        </div>
      </div>
    </div>
  )
}
