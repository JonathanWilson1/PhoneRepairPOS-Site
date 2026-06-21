import type { Metadata } from 'next'

import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Add a device — Phone Repair POS',
  description:
    'Finish adding this device to your Phone Repair POS shop by opening the app and scanning the pairing code.',
  robots: { index: false, follow: false },
}

// Universal-link target for device pairing (`https://phonerepairpos.app/pair`).
//
// When Phone Repair POS is installed on the device, iOS intercepts this link
// and opens the app straight into the redeem flow — this page is never shown.
// It only renders as the fallback when the app isn't installed yet (or the
// link is opened on a desktop), so its whole job is to point the user at the
// app. No query handling needed: the QR's shop id + token are consumed by the
// app, not the website.
export default function PairPage() {
  return (
    <main className="mx-auto flex min-h-full max-w-md flex-col justify-center px-6 py-16 text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-violet-600/20 text-2xl">
          🔗
        </div>
        <h1 className="font-display mt-6 text-2xl font-semibold">
          Add this device to your shop
        </h1>
        <p className="mt-3 text-sm/6 text-gray-400">
          You&rsquo;ve scanned a Phone Repair POS pairing code. To finish, open
          the <span className="text-gray-200">Phone Repair POS</span> app on
          this device and tap <span className="text-gray-200">Scan</span> — if
          you don&rsquo;t have it yet, install it first, then scan again from
          inside the app.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="https://apps.apple.com/app/phone-repair-pos/id6759859240" arrow>
            Get Phone Repair POS
          </Button>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">
        Pairing happens device-to-device. This page can&rsquo;t join a shop on
        its own — only the app on the new device can.
      </p>
    </main>
  )
}
