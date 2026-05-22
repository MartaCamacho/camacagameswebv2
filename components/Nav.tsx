'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PixelMark } from './PixelMark'
import { useLanguage } from './LanguageProvider'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, tr } = useLanguage()

  const NAV_LINKS = [
    { href: '/',       label: tr.nav.home    },
    { href: '#games',  label: tr.nav.games   },
    { href: '#about',  label: tr.nav.about   },
    { href: '#footer', label: tr.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-rule">
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Wordmark */}
        <Link href="/" className="text-xl font-display font-bold tracking-tight">
          <PixelMark />
        </Link>

        {/* Pill nav + selector idioma — escritorio */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-4 py-1.5 rounded-pill text-sm font-sans font-medium text-ink-2
                             hover:bg-soft transition-colors duration-200
                             focus-visible:ring-2 focus-visible:ring-lila outline-none"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-0.5 ml-4 border border-rule rounded-pill px-1 py-0.5">
            <button
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
              className={`px-2.5 py-1 rounded-pill text-xs font-mono transition-colors duration-200
                focus-visible:ring-2 focus-visible:ring-lila outline-none
                ${lang === 'es' ? 'bg-ink text-paper' : 'text-muted hover:text-ink'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-pill text-xs font-mono transition-colors duration-200
                focus-visible:ring-2 focus-visible:ring-lila outline-none
                ${lang === 'en' ? 'bg-ink text-paper' : 'text-muted hover:text-ink'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger — móvil */}
        <button
          className="md:hidden p-2 rounded-pill hover:bg-soft transition-colors focus-visible:ring-2 focus-visible:ring-lila outline-none"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4"  y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Drawer móvil */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden bg-paper/95 backdrop-blur-md border-b border-rule px-6 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-pill text-sm font-sans font-medium text-ink-2
                         hover:bg-soft transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <div className="flex gap-1 mt-3 px-4">
            {(['es', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false) }}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 rounded-pill text-xs font-mono uppercase transition-colors duration-200
                  ${lang === l ? 'bg-ink text-paper' : 'border border-rule text-muted hover:text-ink'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
