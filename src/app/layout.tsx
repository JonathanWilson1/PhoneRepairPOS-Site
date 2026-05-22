import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Analytics } from '@/components/Analytics'

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
    default:
      'PhoneRepairPOS — Free iPad & iPhone POS for Phone Repair Shops',
    template: '%s — PhoneRepairPOS',
  },
  description:
    'Free POS app for phone repair shops — no monthly fee, no subscription. Track tickets, manage repairs, and record payments on iPad or iPhone. Works offline.',
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
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is PhoneRepairPOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PhoneRepairPOS is a free app for iPhone and iPad that replaces paper tickets, spreadsheets, and sticky notes with a simple digital system for managing phone repairs. Create tickets, track repair status, record payments, and keep customer records — all from your pocket or counter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is PhoneRepairPOS for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is built for phone repair shop owners and technicians — whether you are a solo repairer working from a market stall or a multi-staff high street shop. If you fix phones and need a better way to manage jobs, it is for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does PhoneRepairPOS work offline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PhoneRepairPOS is 100% offline capable. All your data is stored locally on your device. No internet connection is required to create tickets, update statuses, or record payments. If you use iCloud, your data syncs across your devices when you are back online.',
          },
        },
        {
          '@type': 'Question',
          name: 'What devices does PhoneRepairPOS support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PhoneRepairPOS runs on both iPhone and iPad. On iPad you get a full dashboard view designed for the counter. On iPhone you get the same features in your pocket — perfect for mobile repair techs or checking on jobs away from the shop.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does PhoneRepairPOS cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PhoneRepairPOS is free to download from the App Store. Download it and start using it straight away — no sign-up, no credit card, no trial period.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my customer data private and secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your data stays on your device. PhoneRepairPOS uses local storage (Core Data) and optionally iCloud for sync. There is no third-party server, no analytics tracking, and no one else has access to your customer records.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get started with PhoneRepairPOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Download PhoneRepairPOS from the App Store, open it on your iPhone or iPad, and create your first ticket. There is no account to set up and no configuration needed. You will be managing repairs in under a minute.',
          },
        },
      ],
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
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
