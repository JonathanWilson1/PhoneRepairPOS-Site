import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Analytics } from '@/components/Analytics'
import { CookieBanner } from '@/components/CookieBanner'
import { SiteFooter } from '@/components/SiteFooter'

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
      'Free POS for Cell Phone Repair Shops — PhoneRepairPOS',
    template: '%s — PhoneRepairPOS',
  },
  description:
    'Free cell phone repair POS — no monthly fee, no subscription. Track repair tickets, message customers, and record payments on iPhone or iPad. Works offline.',
  keywords: [
    'cell phone repair POS',
    'cell phone repair POS system',
    'cell phone repair shop software',
    'phone repair POS',
    'phone repair POS app',
    'free repair shop POS',
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
    locale: 'en_US',
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
        'The free point-of-sale app designed specifically for cell phone repair shops. Available on iPhone and iPad. Manage jobs, track repairs, message customers, and get paid faster.',
      url: 'https://phonerepairpos.app',
      installUrl:
        'https://apps.apple.com/app/phone-repair-pos/id6759859240',
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
            text: 'Yes. No internet connection is required to create tickets, update statuses, or record payments — the app works fully offline and stores your data on your device. When you are back online, your data syncs to your secure cloud account so it is backed up and available on your other devices.',
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
          name: 'How does PhoneRepairPOS compare to RepairDesk, RepairShopr, or CellStore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RepairDesk ($149/month), RepairShopr, and CellStore ($39/month) are subscription platforms with features like multi-location support and accounting integrations. PhoneRepairPOS is free and focuses on the core repair workflow — tickets, status tracking, customer messaging, and payments — which is everything a solo tech or small cell phone repair shop needs without the monthly bill.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my customer data private and secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your repair records are stored on your device and synced to our secure cloud database hosted on Google Cloud Platform. We never sell your data, never share it for advertising, and only access it to operate the service or fix a fault you report. We collect anonymous usage and crash analytics to improve the app — these contain no customer names, numbers, or repair details. Full details are in our privacy policy.',
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
        {/*
          Consent Mode defaults must be queued BEFORE gtag.js loads, or GA sets
          analytics cookies on first paint — which PECR reg. 6 does not allow.
          A plain inline script guarantees document-order execution ahead of the
          afterInteractive tag below; CookieBanner upgrades this to 'granted'
          only once the visitor accepts.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SY7WGPSFBF"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`gtag('js', new Date());
gtag('config', 'G-SY7WGPSFBF');`}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
        <Providers>{children}</Providers>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
