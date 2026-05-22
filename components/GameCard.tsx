import type { Game, GameAccent, GameStatus, GameTheme } from '@/lib/games'
import { PixelArt } from './PixelArt'
import { cn } from '@/lib/cn'

const THEME: Record<GameTheme, string> = {
  light: 'bg-cream text-ink',
  dark:  'bg-ink text-paper',
  soft:  'bg-soft text-ink',
  coral: 'bg-coral text-ink',
}

const ART_BG: Record<GameTheme, string> = {
  light: 'bg-rule',
  dark:  'bg-gradient-to-br from-lila to-coral',
  soft:  'bg-rule',
  coral: 'bg-rule',
}

const STATUS_DOT: Record<GameStatus, { symbol: string; colorClass: string }> = {
  available: { symbol: '●', colorClass: 'text-[#22c55e]' },
  qa:        { symbol: '◐', colorClass: 'text-lila'      },
  sketch:    { symbol: '○', colorClass: 'text-muted'     },
  archived:  { symbol: '○', colorClass: 'text-muted'     },
}

const ACCENT_LINK: Record<GameAccent, string> = {
  lila:  'border-lila text-lila hover:bg-lila hover:text-paper',
  coral: 'border-coral text-coral hover:bg-coral hover:text-ink',
  ink:   'border-ink text-ink hover:bg-ink hover:text-paper',
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const themeClass   = THEME[game.theme]
  const artBgClass   = ART_BG[game.theme]
  const dot          = STATUS_DOT[game.status]
  const accentLink   = ACCENT_LINK[game.accent]
  const hasLinks     = game.links && (game.links.ios || game.links.android || game.links.more)

  return (
    <article
      className={cn(
        'rounded-card overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5',
        themeClass
      )}
    >
      {/* Área pixel art */}
      <div className={cn('h-40 flex items-center justify-center', artBgClass)}>
        <PixelArt accent={game.accent} />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Status */}
        <div className="flex items-center gap-1.5">
          <span className={cn('text-xs font-mono', dot.colorClass)} aria-hidden="true">
            {dot.symbol}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase opacity-70">
            {game.statusLabel}
          </span>
        </div>

        <div>
          <h3 className="font-display font-bold text-2xl leading-tight tracking-tight">
            {game.title}
          </h3>
          <p className="font-sans text-sm opacity-70 mt-0.5">{game.subtitle}</p>
        </div>

        <p className="font-sans text-sm leading-relaxed opacity-60 flex-1">{game.body}</p>

        {/* Plataformas + tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {game.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-pill text-xs font-mono border border-current opacity-50"
            >
              {tag}
            </span>
          ))}
          {game.platforms.map(p => (
            <span
              key={p}
              className="px-2.5 py-0.5 rounded-pill text-xs font-mono border border-current opacity-30"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Links */}
        {hasLinks && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {game.links?.ios && (
              <a
                href={game.links.ios}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${game.title} en App Store`}
                className={cn(
                  'px-4 py-1.5 rounded-pill border text-xs font-mono transition-all duration-200',
                  accentLink
                )}
              >
                iOS
              </a>
            )}
            {game.links?.android && (
              <a
                href={game.links.android}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${game.title} en Google Play`}
                className={cn(
                  'px-4 py-1.5 rounded-pill border text-xs font-mono transition-all duration-200',
                  accentLink
                )}
              >
                Android
              </a>
            )}
            {game.links?.more && (
              <a
                href={game.links.more}
                className={cn(
                  'px-4 py-1.5 rounded-pill border text-xs font-mono transition-all duration-200',
                  accentLink
                )}
              >
                Más info →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
