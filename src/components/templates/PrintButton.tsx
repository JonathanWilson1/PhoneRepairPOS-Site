'use client'

import { Button } from '@/components/Button'

export function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <Button onClick={() => window.print()} arrow>
      {children}
    </Button>
  )
}
