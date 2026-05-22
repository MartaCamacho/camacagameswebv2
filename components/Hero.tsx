'use client'

import { useLanguage } from './LanguageProvider'

export function Hero() {
  const { tr } = useLanguage()
  const h = tr.hero

  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      {/* Eyebrow pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-pill border border-rule bg-cream text-sm font-mono text-ink-2 mb-10">
        <span
          className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0"
          style={{ animation: 'pulse-green 2s ease-in-out infinite' }}
          aria-hidden="true"
        />
        {h.eyebrow}
      </div>

      {/* H1 */}
      <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-none tracking-[-0.04em] text-ink mb-8">
        {h.h1_pre}{' '}
        <span className="text-lila">{h.h1_accent}</span>{' '}
        <span className="font-serif font-normal italic tracking-[-0.02em]">{h.h1_serif}</span>
      </h1>

      {/* Párrafo */}
      <p className="font-sans text-lg md:text-xl text-muted max-w-lg leading-relaxed mb-10">
        {h.body}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <a
          href="#games"
          className="px-7 py-3.5 rounded-pill bg-ink text-paper font-sans font-medium text-sm
                     hover:bg-lila hover:-translate-y-0.5 transition-all duration-200
                     focus-visible:ring-2 focus-visible:ring-lila outline-none"
        >
          {h.cta_games}
        </a>
        <a
          href="#about"
          className="px-7 py-3.5 rounded-pill border border-ink text-ink font-sans font-medium text-sm
                     hover:bg-cream hover:-translate-y-0.5 transition-all duration-200
                     focus-visible:ring-2 focus-visible:ring-lila outline-none"
        >
          {h.cta_about}
        </a>
      </div>
    </section>
  )
}
