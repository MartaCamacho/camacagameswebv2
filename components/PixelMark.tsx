interface PixelMarkProps {
  className?: string
}

export function PixelMark({ className }: PixelMarkProps) {
  return (
    <span className={className}>
      camaca<span className="text-lila">.</span>
    </span>
  )
}
