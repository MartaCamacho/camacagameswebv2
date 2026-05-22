'use client'

import { localizeGames } from '@/lib/games'
import { GameCard } from './GameCard'
import { useLanguage } from './LanguageProvider'

export function Games() {
  const { tr, lang } = useLanguage()
  const g = tr.games

  const games = localizeGames(lang)

  return (
    <section id="games" className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-lila tracking-[.12em] uppercase mb-4">
        {g.eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-[-0.04em] mb-10">
        {g.h2}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map(game => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  )
}
