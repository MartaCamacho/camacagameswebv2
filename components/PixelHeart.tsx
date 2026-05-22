interface PixelHeartProps {
  className?: string
}

const HEART = [
  [0,1,1,0,1,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0],
]

const S = 10

export function PixelHeart({ className }: PixelHeartProps) {
  const cols = HEART[0].length
  const rows = HEART.length

  return (
    <svg
      width={cols * S}
      height={rows * S}
      viewBox={`0 0 ${cols * S} ${rows * S}`}
      className={className}
      aria-hidden="true"
    >
      {HEART.flatMap((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * S}
              y={y * S}
              width={S}
              height={S}
              fill="#F08775"
            />
          ) : null
        )
      )}
    </svg>
  )
}
