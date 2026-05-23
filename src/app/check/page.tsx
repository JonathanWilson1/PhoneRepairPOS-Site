'use client'

import { useCallback, useEffect, useState } from 'react'

import { ImeiCapture } from './ImeiCapture'

// Device-capability probe. Throwaway test page: opens on a phone, attempts every
// browser API we might use for web-based self-intake / diagnostics, and shows what
// is actually available on this device. No data leaves the phone — display only.
// Decoupled from the iOS app and the Firestore work on purpose.

type Status = 'ok' | 'na' | 'blocked' | 'pending'

type Metric = {
  label: string
  value: string
  status: Status
}

const PAGE_VERSION = '2026-05-23.1'

// --- helpers -----------------------------------------------------------------

function yesNo(v: unknown): Status {
  return v ? 'ok' : 'na'
}

async function safe<T>(fn: () => T | Promise<T>): Promise<T | undefined> {
  try {
    return await fn()
  } catch {
    return undefined
  }
}

function webglRenderer(): { vendor?: string; renderer?: string } {
  try {
    const canvas = document.createElement('canvas')
    const gl = (canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (!gl) return {}
    const dbg = gl.getExtension('WEBGL_debug_renderer_info')
    if (!dbg) return { renderer: gl.getParameter(gl.VERSION) as string }
    return {
      vendor: gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) as string,
      renderer: gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) as string,
    }
  } catch {
    return {}
  }
}

// --- passive probes ----------------------------------------------------------

async function collectPassive(): Promise<Metric[]> {
  const nav = navigator as any
  const out: Metric[] = []
  const add = (label: string, value: unknown, status?: Status) =>
    out.push({
      label,
      value: value === undefined || value === null || value === '' ? '—' : String(value),
      status: status ?? (value === undefined || value === null || value === '' ? 'na' : 'ok'),
    })

  add('User-Agent', navigator.userAgent)
  add('Platform (legacy)', (navigator as any).platform)
  add('Timezone', safeSync(() => Intl.DateTimeFormat().resolvedOptions().timeZone))
  add('Languages', navigator.languages?.join(', '))

  // userAgentData (Chromium / Android — absent on iOS Safari)
  const uad = nav.userAgentData
  add('userAgentData present', uad ? 'yes' : 'no', yesNo(uad))
  if (uad) {
    add('UA-CH mobile', uad.mobile)
    add('UA-CH platform', uad.platform)
    add('UA-CH brands', (uad.brands || []).map((b: any) => `${b.brand} ${b.version}`).join(', '))
    const high = await safe(() =>
      uad.getHighEntropyValues([
        'model',
        'platformVersion',
        'architecture',
        'bitness',
        'fullVersionList',
      ]),
    )
    if (high) {
      add('UA-CH model', (high as any).model)
      add('UA-CH platformVersion', (high as any).platformVersion)
      add('UA-CH architecture', (high as any).architecture)
    }
  }

  // Screen / display
  add('Screen size', `${screen.width} × ${screen.height}`)
  add('Avail size', `${screen.availWidth} × ${screen.availHeight}`)
  add('Viewport', `${window.innerWidth} × ${window.innerHeight}`)
  add('devicePixelRatio', window.devicePixelRatio)
  add('Color depth', screen.colorDepth)
  add('Orientation', (screen.orientation && screen.orientation.type) || undefined)

  // Hardware hints
  add('maxTouchPoints', navigator.maxTouchPoints)
  add('hardwareConcurrency (cores)', navigator.hardwareConcurrency)
  add('deviceMemory (GB)', nav.deviceMemory) // Chrome only
  add('GPU vendor', webglRenderer().vendor)
  add('GPU renderer', webglRenderer().renderer)

  // Network
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection
  add('Network type', conn?.effectiveType)
  add('Downlink (Mb/s)', conn?.downlink)
  add('RTT (ms)', conn?.rtt)
  add('Save-data', conn?.saveData)
  add('Online', navigator.onLine)

  // Storage quota (browser quota, not device storage)
  const est = await safe(() => navigator.storage?.estimate())
  if (est) {
    const fmt = (b?: number) => (b ? `${(b / 1024 / 1024).toFixed(0)} MB` : '—')
    add('Storage quota', fmt((est as any).quota))
    add('Storage usage', fmt((est as any).usage))
  } else {
    add('Storage estimate API', 'unavailable', 'na')
  }

  // Display preferences
  add('prefers-color-scheme dark', matchMedia('(prefers-color-scheme: dark)').matches)
  add('prefers-reduced-motion', matchMedia('(prefers-reduced-motion: reduce)').matches)
  add('pointer: coarse (touch)', matchMedia('(pointer: coarse)').matches)
  add('hover: hover', matchMedia('(hover: hover)').matches)

  // API availability — the App-Clip-relevant ones
  add(
    'Battery API',
    typeof nav.getBattery === 'function' ? 'available' : 'NOT available',
    typeof nav.getBattery === 'function' ? 'ok' : 'blocked',
  )
  add(
    'Vibration API',
    typeof navigator.vibrate === 'function' ? 'available' : 'NOT available',
    typeof navigator.vibrate === 'function' ? 'ok' : 'blocked',
  )
  add(
    'Web Bluetooth',
    nav.bluetooth ? 'available' : 'NOT available',
    nav.bluetooth ? 'ok' : 'blocked',
  )
  const hasGUM = typeof navigator.mediaDevices?.getUserMedia === 'function'
  add('getUserMedia (cam/mic)', hasGUM ? 'available' : 'NOT available', hasGUM ? 'ok' : 'blocked')
  add('Geolocation API', navigator.geolocation ? 'available' : 'NOT available', yesNo(navigator.geolocation))

  const motionNeedsPermission =
    typeof (window as any).DeviceMotionEvent?.requestPermission === 'function'
  add('DeviceMotionEvent', (window as any).DeviceMotionEvent ? 'present' : 'absent', yesNo((window as any).DeviceMotionEvent))
  add('Motion needs permission', motionNeedsPermission ? 'yes (iOS-style)' : 'no')

  // Battery values (call it if present)
  if (typeof nav.getBattery === 'function') {
    const bat = await safe(() => nav.getBattery())
    if (bat) {
      add('Battery level', `${Math.round((bat as any).level * 100)}%`)
      add('Battery charging', (bat as any).charging)
    }
  }

  return out
}

function safeSync<T>(fn: () => T): T | undefined {
  try {
    return fn()
  } catch {
    return undefined
  }
}

// --- UI ----------------------------------------------------------------------

function StatusDot({ status }: { status: Status }) {
  const color =
    status === 'ok'
      ? 'bg-emerald-400'
      : status === 'blocked'
        ? 'bg-rose-400'
        : status === 'pending'
          ? 'bg-amber-400'
          : 'bg-gray-500'
  return <span className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />
}

function Row({ m }: { m: Metric }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 py-2">
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <StatusDot status={m.status} />
        {m.label}
      </div>
      <div className="max-w-[55%] text-right font-mono text-xs break-words text-gray-100">
        {m.value}
      </div>
    </div>
  )
}

export default function CheckPage() {
  const [passive, setPassive] = useState<Metric[]>([])
  const [gated, setGated] = useState<Metric[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    collectPassive().then(setPassive)
  }, [])

  const addGated = useCallback((m: Metric) => {
    setGated((prev) => [...prev.filter((p) => p.label !== m.label), m])
  }, [])

  const runMotion = useCallback(async () => {
    const DME = (window as any).DeviceMotionEvent
    if (!DME) {
      addGated({ label: 'Motion', value: 'DeviceMotionEvent absent', status: 'blocked' })
      return
    }
    addGated({ label: 'Motion', value: 'requesting…', status: 'pending' })
    if (typeof DME.requestPermission === 'function') {
      const perm = await safe(() => DME.requestPermission())
      if (perm !== 'granted') {
        addGated({ label: 'Motion', value: `permission: ${perm ?? 'denied'}`, status: 'blocked' })
        return
      }
    }
    let fired = false
    const handler = (e: DeviceMotionEvent) => {
      fired = true
      const a = e.accelerationIncludingGravity
      addGated({
        label: 'Motion',
        value: a ? `x ${a.x?.toFixed(1)} y ${a.y?.toFixed(1)} z ${a.z?.toFixed(1)}` : 'event fired (no accel data)',
        status: 'ok',
      })
      window.removeEventListener('devicemotion', handler)
    }
    window.addEventListener('devicemotion', handler)
    setTimeout(() => {
      if (!fired) {
        window.removeEventListener('devicemotion', handler)
        addGated({ label: 'Motion', value: 'granted but no events fired', status: 'blocked' })
      }
    }, 2500)
  }, [addGated])

  const runMedia = useCallback(async () => {
    if (typeof navigator.mediaDevices?.getUserMedia !== 'function') {
      addGated({ label: 'Camera/Mic', value: 'getUserMedia unavailable', status: 'blocked' })
      return
    }
    addGated({ label: 'Camera/Mic', value: 'requesting…', status: 'pending' })
    const stream = await safe(() =>
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }),
    )
    if (!stream) {
      addGated({ label: 'Camera/Mic', value: 'permission denied / failed', status: 'blocked' })
      return
    }
    const devices = (await safe(() => navigator.mediaDevices.enumerateDevices())) || []
    const cams = devices.filter((d) => d.kind === 'videoinput')
    const mics = devices.filter((d) => d.kind === 'audioinput')
    let torch = 'unknown'
    const track = stream.getVideoTracks()[0]
    if (track && (track as any).getCapabilities) {
      const caps = safeSync(() => (track as any).getCapabilities()) || {}
      torch = 'torch' in caps ? `supported (${(caps as any).torch})` : 'not supported'
    }
    addGated({
      label: 'Camera/Mic',
      value: `${cams.length} cam, ${mics.length} mic · flash: ${torch}`,
      status: 'ok',
    })
    stream.getTracks().forEach((t) => t.stop())
  }, [addGated])

  const runGeo = useCallback(() => {
    if (!navigator.geolocation) {
      addGated({ label: 'Geolocation', value: 'unavailable', status: 'blocked' })
      return
    }
    addGated({ label: 'Geolocation', value: 'requesting…', status: 'pending' })
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        addGated({
          label: 'Geolocation',
          value: `ok · ±${Math.round(pos.coords.accuracy)}m`,
          status: 'ok',
        })
      },
      (err) => {
        addGated({ label: 'Geolocation', value: `denied / failed: ${err.message}`, status: 'blocked' })
      },
      { enableHighAccuracy: true, timeout: 8000 },
    )
  }, [addGated])

  const copyJson = useCallback(() => {
    const payload = {
      pageVersion: PAGE_VERSION,
      collectedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
      passive: Object.fromEntries(passive.map((m) => [m.label, m.value])),
      gated: Object.fromEntries(gated.map((m) => [m.label, m.value])),
    }
    const text = JSON.stringify(payload, null, 2)
    safe(() => navigator.clipboard.writeText(text)).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [passive, gated])

  return (
    <main className="mx-auto min-h-full max-w-xl px-5 py-8 text-white">
      <h1 className="font-display text-2xl font-semibold">Device capability check</h1>
      <p className="mt-1 text-sm text-gray-400">
        What this browser exposes about your device. Nothing is sent anywhere — this is a test page
        that only displays on screen.
      </p>

      <ImeiCapture />

      <section className="mt-8">
        <h2 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
          Permission checks (tap to run)
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={runMotion} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
            Motion sensors
          </button>
          <button onClick={runMedia} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
            Camera / Mic
          </button>
          <button onClick={runGeo} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
            Location
          </button>
        </div>
        {gated.length > 0 && (
          <div className="mt-3">
            {gated.map((m) => (
              <Row key={m.label} m={m} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
            Detected automatically
          </h2>
          <button
            onClick={copyJson}
            className="rounded-lg bg-indigo-500/80 px-3 py-1.5 text-xs font-medium hover:bg-indigo-500"
          >
            {copied ? 'Copied ✓' : 'Copy all as JSON'}
          </button>
        </div>
        <div className="mt-3">
          {passive.length === 0 ? (
            <p className="text-sm text-gray-500">Collecting…</p>
          ) : (
            passive.map((m) => <Row key={m.label} m={m} />)
          )}
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-gray-600">
        PhoneRepairPOS · diagnostics test · {PAGE_VERSION}
      </p>
    </main>
  )
}
