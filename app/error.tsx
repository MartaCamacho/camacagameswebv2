'use client'

import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { useLanguage } from '@/components/LanguageProvider'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { tr } = useLanguage()
  const p = tr.error
  const email = tr.footer.email

  return (
    <>
      <Nav />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          <p className="font-mono text-xs text-lila tracking-[.12em] uppercase mb-6">
            {p.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-ink tracking-[-0.04em] leading-tight mb-6">
            {p.h1_pre}{' '}
            <span className="font-serif font-normal italic">{p.h1_serif}</span>
          </h1>
          <p className="font-sans text-ink-2 leading-relaxed mb-10">
            {p.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={reset}
              className="px-6 py-2.5 rounded-pill bg-ink text-paper font-sans font-medium text-sm hover:opacity-80 transition-opacity"
            >
              {p.cta_retry}
            </button>
            <Link
              href="/"
              className="px-6 py-2.5 rounded-pill border border-ink text-ink font-sans font-medium text-sm hover:bg-soft transition-colors"
            >
              {p.cta_home}
            </Link>
            <a
              href={`mailto:${email}`}
              className="px-6 py-2.5 rounded-pill border border-rule text-muted font-sans font-medium text-sm hover:bg-soft transition-colors"
            >
              {p.cta_contact} · {email}
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
