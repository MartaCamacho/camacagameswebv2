'use client'

import { useState } from 'react'
import { localizeGames } from '@/lib/games'
import { GameCard } from './GameCard'
import { useLanguage } from './LanguageProvider'
import { cn } from '@/lib/cn'

export function Games() {
  const { tr, lang } = useLanguage()
  const g = tr.games

  const [activeTag, setActiveTag] = useState<string | null>(null)

  const games = localizeGames(lang)
  const uniqueTags = [null, ...Array.from(new Set(games.flatMap(g => g.tags)))]

  const filtered = activeTag === null
    ? games
    : games.filter(game => game.tags.includes(activeTag))

  return (
    <section id="games" className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-muted tracking-[.12em] uppercase mb-4">
        {g.eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-[-0.04em] mb-10">
        {g.h2}
      </h2>

      {/* Filtros */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrar por categoría"
      >
        {uniqueTags.map(tag => (
          <button
            key={tag ?? '__all__'}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={cn(
              'px-4 py-1.5 rounded-pill text-sm font-mono transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lila outline-none',
              activeTag === tag
                ? 'bg-ink text-paper'
                : 'border border-ink text-ink hover:bg-cream'
            )}
          >
            {tag ?? g.all}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(game => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  )
}
