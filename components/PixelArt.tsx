import type { GameAccent } from '@/lib/games'

interface PixelArtProps {
  accent?: GameAccent
  className?: string
}

const ACCENT_COLORS: Record<GameAccent, string> = {
  lila:  '#7B6CF6',
  coral: '#F08775',
  ink:   '#241B2E',
}

// Joystick/gamepad pixel sprite — 10×10 grid, 1=fill, 0=empty
const SPRITE = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,0,0,1,1,0,0,1,1],
  [1,1,0,0,1,1,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,0,0,1,1,0,1],
  [1,0,1,1,0,0,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,0,0,1,1,0,0],
]

const S = 6

export function PixelArt({ accent = 'lila', className }: PixelArtProps) {
  const color = ACCENT_COLORS[accent]
  const cols = SPRITE[0].length
  const rows = SPRITE.length

  return (
    <svg
      width={cols * S}
      height={rows * S}
      viewBox={`0 0 ${cols * S} ${rows * S}`}
      className={className}
      aria-hidden="true"
    >
      {SPRITE.flatMap((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * S}
              y={y * S}
              width={S}
              height={S}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  )
}
