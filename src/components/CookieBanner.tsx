'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'prpos-cookie-consent'

type Choice = 'granted' | 'denied'

function readStoredChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    // Private mode / storage disabled — treat as no stored choice. The consent
    // default in layout.tsx is 'denied', so nothing is set until they accept.
    return null
  }
}

function applyChoice(choice: Choice) {
  window.gtag?.('consent', 'update', {
    analytics_storage: choice,
  })
}

/**
 * Analytics cookies may not be set before the visitor agrees (PECR reg. 6), so
 * Consent Mode defaults to denied in the root layout and is only upgraded here.
 * Reject is presented as prominently as Accept, which the ICO expects.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readStoredChoice()
    if (stored) {
      // Re-assert on every load: Consent Mode state is per-page, not persisted.
      applyChoice(stored)
      return
    }
    setVisible(true)
  }, [])

  function choose(choice: Choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // Choice won't persist, but honour it for this page view.
    }
    applyChoice(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-gray-900 px-6 py-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8125rem]/6 text-gray-300">
          We use analytics cookies to understand how the site is used. They are
          only set if you accept. See our{' '}
          <a href="/privacy" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          {/*
            Reject is given the same size and visual weight as Accept — the ICO
            treats a de-emphasised reject option as consent that is not freely
            given.
          */}
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
