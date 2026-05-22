'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// App Router uses client-side soft navigation, so gtag('config') only ever
// sends a page_view for the initial hard load. This fires a page_view on each
// subsequent route change so in-site navigation is tracked with a real path.
export function Analytics() {
  const pathname = usePathname()
  const isInitialLoad = useRef(true)

  useEffect(() => {
    // gtag('config') already sent the initial page_view; skip it to avoid
    // double-counting, then track every soft navigation after that.
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}
