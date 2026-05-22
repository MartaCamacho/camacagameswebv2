'use client'

import { useLanguage } from './LanguageProvider'

export function Footer() {
  const { tr } = useLanguage()
  const f = tr.footer

  return (
    <footer id="footer" className="border-t border-rule bg-paper mt-auto">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <h3 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-[-0.04em] leading-tight mb-6">
          {f.h3_pre}{' '}
          <span className="font-serif font-normal italic tracking-[-0.02em]">{f.h3_serif}</span>
        </h3>
        <a
          href={`mailto:${f.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill
                     bg-coral text-ink font-mono text-sm font-medium
                     hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200
                     focus-visible:ring-2 focus-visible:ring-lila outline-none"
        >
          {f.email}
        </a>

        <div className="border-t border-rule mt-16 pt-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Camaca Games. {f.copyright}
          </p>
          <a
            href="/privacy-policy"
            className="font-mono text-xs text-muted hover:text-ink transition-colors"
          >
            {f.privacyLink}
          </a>
        </div>
      </div>
    </footer>
  )
}
