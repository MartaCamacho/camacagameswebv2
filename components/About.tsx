'use client'

import { PixelHeart } from './PixelHeart'
import { useLanguage } from './LanguageProvider'

export function About() {
  const { tr } = useLanguage()
  const a = tr.about

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Columna texto */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-xs text-lila tracking-[.12em] uppercase mb-4">
              {a.eyebrow}
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-[-0.04em] leading-tight">
              {a.h2_pre}{' '}
              <span className="font-serif font-normal italic tracking-[-0.02em]">{a.h2_serif}</span>{' '}
              {a.h2_post}
            </h2>
          </div>

          <p className="font-sans text-ink-2 leading-relaxed">{a.bio1}</p>
          <p className="font-sans text-ink-2 leading-relaxed">{a.bio2}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {a.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-pill text-xs font-mono bg-soft text-ink-2 border border-rule"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Columna imagen + sticker */}
        <div className="relative flex justify-center">
          <div className="w-72 h-80 rounded-card bg-soft flex items-center justify-center overflow-hidden">
            <PixelHeart className="w-24 h-20" />
          </div>

          {/* Sticker rotado */}
          <div
            className="absolute -bottom-4 -right-4 md:right-4 inline-flex items-center gap-2
                       px-4 py-2.5 border-2 border-ink rounded-card bg-cream
                       font-mono text-sm font-bold shadow-sm"
            style={{ rotate: '6deg' }}
          >
            <PixelHeart className="w-6 h-5" />
            {a.sticker}
          </div>
        </div>
      </div>
    </section>
  )
}
