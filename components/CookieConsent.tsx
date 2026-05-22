'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

type ConsentValue = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { tr } = useLanguage()

  useEffect(() => {
    const stored = localStorage.getItem('camaca-analytics-consent')
    if (!stored) setVisible(true)
  }, [])

  const updateConsent = (value: ConsentValue) => {
    localStorage.setItem('camaca-analytics-consent', value)
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'consent_update',
      analytics_storage: value,
      ad_storage: value,
    })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-paper border-t border-rule shadow-lg px-6 py-5">
      <p className="font-sans text-sm text-ink-2 leading-relaxed mb-4">
        {tr.cookieConsent.message}{' '}
        <Link
          href="/privacy-policy"
          target="_blank"
          className="underline underline-offset-2 hover:text-ink transition-colors"
        >
          {tr.cookieConsent.privacyLink}
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => updateConsent('granted')}
          className="rounded-[999px] bg-lila text-paper font-sans text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {tr.cookieConsent.accept}
        </button>
        <button
          onClick={() => updateConsent('denied')}
          className="rounded-[999px] border border-rule text-muted font-sans text-sm px-4 py-2 hover:text-ink transition-colors cursor-pointer"
        >
          {tr.cookieConsent.reject}
        </button>
      </div>
    </div>
  )
}
