import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Script from 'next/script'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  title: {
    default: 'PhoneRepairPOS — The POS App Built for Phone Repair Shops',
    template: '%s — PhoneRepairPOS',
  },
  description:
    'Manage jobs, track repairs, and get paid faster. PhoneRepairPOS is the free point-of-sale app designed specifically for phone repair shops. Available on iPhone and iPad.',
  keywords: [
    'phone repair POS',
    'phone repair POS app',
    'repair shop software',
    'phone repair ticket system',
    'repair shop point of sale',
    'phone repair management',
    'iPhone iPad repair shop app',
    'repair tracking software',
  ],
  authors: [{ name: 'Jonathan Wilson' }],
  creator: 'PhoneRepairPOS',
  metadataBase: new URL('https://phonerepairpos.app'),
  openGraph: {
    siteName: 'PhoneRepairPOS',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PhoneRepairPOS — POS App for Phone Repair Shops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'PhoneRepairPOS',
      url: 'https://phonerepairpos.app',
      logo: 'https://phonerepairpos.app/icon-512.png',
      foundingDate: '2026',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@phonerepairpos.app',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'PhoneRepairPOS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS',
      description:
        'The free point-of-sale app designed specifically for phone repair shops. Available on iPhone and iPad. Manage jobs, track repairs, and get paid faster.',
      url: 'https://phonerepairpos.app',
      installUrl:
        'https://apps.apple.com/gb/app/phone-repair-pos/id6759859240',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SY7WGPSFBF"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SY7WGPSFBF');`}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
