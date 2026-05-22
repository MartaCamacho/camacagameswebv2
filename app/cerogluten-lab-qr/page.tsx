'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const IOS_URL = 'https://apps.apple.com/us/app/cerogluten-lab/id6767042384'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function CeroGlutenLabQR() {
  const router = useRouter()

  useEffect(() => {
    const ua = navigator.userAgent
    const isIOS = /iPhone|iPad|iPod/i.test(ua)
    const isAndroid = /Android/i.test(ua)

    const deviceType = isIOS ? 'ios' : isAndroid ? 'android' : 'other'

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'qr_scan', app: 'cerogluten-lab', device_type: deviceType })

    if (isIOS) {
      window.location.href = IOS_URL
    } else if (isAndroid) {
      router.push('/cerogluten-lab-android')
    } else {
      router.push('/')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <nav className="px-6 py-4">
        <a href="/" className="font-sans text-sm text-lila hover:opacity-80 transition-opacity">
          ← Inicio
        </a>
      </nav>
      <main className="flex-1 flex items-center justify-center">
        <p className="font-sans text-base text-muted">Redirigiendo…</p>
      </main>
    </div>
  )
}
