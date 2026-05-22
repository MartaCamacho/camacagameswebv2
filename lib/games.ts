import rawGames from '@/content/games.json'
import type { Lang } from './i18n'

export type GameStatus = 'available' | 'qa' | 'sketch' | 'archived'
export type GameTheme  = 'light' | 'dark' | 'soft' | 'coral'
export type GameAccent = 'lila' | 'coral' | 'ink'

interface GameTranslation {
  subtitle:    string
  body:        string
  statusLabel: string
  tags:        string[]
}

interface RawGame {
  slug:         string
  title:        string
  status:       GameStatus
  platforms:    string[]
  accent:       GameAccent
  theme:        GameTheme
  links?:       { ios?: string; android?: string; more?: string }
  translations: Record<string, GameTranslation>
}

export interface Game {
  slug:        string
  title:       string
  subtitle:    string
  body:        string
  status:      GameStatus
  statusLabel: string
  tags:        string[]
  platforms:   string[]
  accent:      GameAccent
  theme:       GameTheme
  links?:      { ios?: string; android?: string; more?: string }
}

export function localizeGames(lang: Lang): Game[] {
  return (rawGames as RawGame[]).map(g => {
    const tr = g.translations[lang] ?? g.translations['es']
    return {
      slug:        g.slug,
      title:       g.title,
      status:      g.status,
      statusLabel: tr.statusLabel,
      subtitle:    tr.subtitle,
      body:        tr.body,
      tags:        tr.tags,
      platforms:   g.platforms,
      accent:      g.accent,
      theme:       g.theme,
      links:       g.links,
    }
  })
}
