'use client'

import { useCallback, useRef, useState } from 'react'

// IMEI capture test. IMEI can't be read programmatically on any platform (no iOS
// API; Android gates it behind a privileged permission; no web API), so capture is
// always: scan the barcode, or paste/type it. This section trials all three paths.

type Validity = 'empty' | 'incomplete' | 'valid' | 'invalid'

// IMEI is 15 digits with a Luhn check digit as the 15th.
function luhnValid(digits: string): boolean {
  if (!/^\d{15}$/.test(digits)) return false
  let sum = 0
  for (let i = 0; i < 15; i++) {
    let d = digits.charCodeAt(i) - 48
    if (i % 2 === 1) {
      d *= 2
      if (d > 9) d -= 9
    }
    sum += d
  }
  return sum % 10 === 0
}

function validity(digits: string): Validity {
  if (digits.length === 0) return 'empty'
  if (digits.length < 15) return 'incomplete'
  return luhnValid(digits) ? 'valid' : 'invalid'
}

const MESSAGES: Record<Validity, string> = {
  empty: 'Scan, paste, or type a 15-digit IMEI',
  incomplete: 'Keep going…',
  valid: 'Valid IMEI ✓ (Luhn check passes)',
  invalid: 'Not a valid IMEI (Luhn check fails — typo or wrong number)',
}

export function ImeiCapture() {
  const [imei, setImei] = useState('')
  const [scanning, setScanning] = useState(false)
  const [note, setNote] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsRef = useRef<{ stop: () => void } | null>(null)

  const v = validity(imei)

  const stopScan = useCallback(() => {
    controlsRef.current?.stop()
    controlsRef.current = null
    setScanning(false)
  }, [])

  const startScan = useCallback(async () => {
    setNote(null)
    setScanning(true)
    try {
      const { BrowserMultiFormatReader } = await import('@zxing/browser')
      const reader = new BrowserMultiFormatReader()
      // video element is always mounted (collapsed) so the ref is ready here
      if (!videoRef.current) throw new Error('video element missing')
      const controls = await reader.decodeFromConstraints(
        { video: { facingMode: { ideal: 'environment' } } },
        videoRef.current,
        (result) => {
          if (!result) return
          const text = result.getText().replace(/\D/g, '')
          if (text.length >= 14) {
            setImei(text.slice(0, 15))
            setNote('Scanned a barcode')
            stopScan()
          }
        },
      )
      controlsRef.current = controls
    } catch (e) {
      setNote('Scan failed: ' + (e instanceof Error ? e.message : String(e)))
      setScanning(false)
    }
  }, [stopScan])

  const paste = useCallback(async () => {
    setNote(null)
    try {
      const text = await navigator.clipboard.readText()
      const d = text.replace(/\D/g, '')
      if (!d) {
        setNote('Clipboard had no digits')
        return
      }
      setImei(d.slice(0, 15))
    } catch (e) {
      setNote('Paste blocked: ' + (e instanceof Error ? e.message : 'denied'))
    }
  }, [])

  const ring =
    v === 'valid'
      ? 'ring-emerald-400'
      : v === 'invalid'
        ? 'ring-rose-400'
        : v === 'incomplete'
          ? 'ring-amber-400'
          : 'ring-white/15'
  const noteColor =
    v === 'valid' ? 'text-emerald-400' : v === 'invalid' ? 'text-rose-400' : 'text-gray-400'

  return (
    <section className="mt-8">
      <h2 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
        IMEI capture (test)
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {scanning ? (
          <button
            onClick={stopScan}
            className="rounded-lg bg-rose-500/80 px-3 py-2 text-sm hover:bg-rose-500"
          >
            Stop scanning
          </button>
        ) : (
          <button
            onClick={startScan}
            className="rounded-lg bg-indigo-500/80 px-3 py-2 text-sm hover:bg-indigo-500"
          >
            Scan barcode
          </button>
        )}
        <button onClick={paste} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
          Paste
        </button>
        <button
          onClick={() => {
            setImei('')
            setNote(null)
          }}
          className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
        >
          Clear
        </button>
        <a
          href="tel:%2A%2306%23"
          className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
        >
          Try dialling *#06#
        </a>
      </div>

      {/* Video preview — always mounted so the scanner ref is ready; collapsed when idle */}
      <div className={scanning ? 'mt-3' : 'h-0 overflow-hidden'}>
        <video
          ref={videoRef}
          playsInline
          muted
          className="w-full rounded-lg bg-black"
          style={{ maxHeight: 240 }}
        />
        {scanning && (
          <p className="mt-1 text-center text-xs text-gray-500">
            Point at the IMEI/serial barcode on the SIM tray or box
          </p>
        )}
      </div>

      <input
        value={imei}
        onChange={(e) => setImei(e.target.value.replace(/\D/g, '').slice(0, 15))}
        inputMode="numeric"
        placeholder="IMEI"
        className={`mt-3 w-full rounded-lg bg-white/5 px-3 py-3 font-mono text-lg tracking-widest text-white ring-2 outline-none ${ring}`}
      />
      <div className="mt-1 flex items-center justify-between text-xs">
        <span className={noteColor}>{MESSAGES[v]}</span>
        <span className="text-gray-500">{imei.length}/15</span>
      </div>
      {note && <p className="mt-1 text-xs text-gray-500">{note}</p>}
    </section>
  )
}
