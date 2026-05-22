'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

const MAILTO_EMAIL = 'hello@camacagames.com'
const MAILTO_SUBJECT = 'Avísame cuando CeroGluten Lab esté para Android'
const MAILTO_BODY =
  'Hola, me gustaría que me apuntaras en la lista para avisarme cuando CeroGluten Lab esté disponible para Android. ¡Muchas gracias!'

export default function AndroidComingSoonPage() {
  const { tr } = useLanguage()

  const mailtoHref = `mailto:${MAILTO_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${encodeURIComponent(MAILTO_BODY)}`

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <nav className="px-6 py-4">
        <Link href="/" className="font-sans text-sm text-lila hover:opacity-80 transition-opacity">
          {tr.androidComingSoon.backLink}
        </Link>
      </nav>
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full flex flex-col items-center gap-8 text-center">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight">
            {tr.androidComingSoon.title}
          </h1>
          <p className="font-sans text-base text-muted leading-relaxed">
            {tr.androidComingSoon.message}
          </p>
          <button
            onClick={() => { window.location.href = mailtoHref }}
            className="rounded-[999px] bg-lila text-paper font-sans font-semibold text-sm px-8 py-3.5 hover:opacity-90 transition-opacity cursor-pointer"
          >
            {tr.androidComingSoon.button}
          </button>
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-xs text-muted">{tr.androidComingSoon.fallback}</p>
            <span className="font-mono text-sm text-ink-2 select-all">{MAILTO_EMAIL}</span>
          </div>
        </div>
      </main>
    </div>
  )
}
