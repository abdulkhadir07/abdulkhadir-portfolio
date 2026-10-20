import { useState } from 'react'
import type { Technology } from '../data/site'

type TechnologyBadgeProps = {
  technology: Technology
  size?: 'compact' | 'large'
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TechnologyBadge({
  technology,
  size = 'compact',
}: TechnologyBadgeProps) {
  const [iconFailed, setIconFailed] = useState(false)
  const isLarge = size === 'large'

  return (
    <span
      className={`inline-flex items-center border border-line bg-chip font-medium text-body ${
        isLarge ? 'gap-2.5 rounded-lg px-3 py-2 text-sm' : 'gap-2 rounded-full px-2.5 py-1 text-sm'
      }`}
    >
      <span
        className={`grid shrink-0 place-items-center rounded-md border border-black/8 bg-white shadow-sm ${
          isLarge ? 'h-7 w-7' : 'h-5 w-5'
        }`}
        aria-hidden="true"
      >
        {technology.icon && !iconFailed ? (
          <img
            src={`https://cdn.simpleicons.org/${technology.icon}`}
            alt=""
            width={isLarge ? 18 : 14}
            height={isLarge ? 18 : 14}
            loading="lazy"
            decoding="async"
            onError={() => setIconFailed(true)}
          />
        ) : (
          <span className={`${isLarge ? 'text-[9px]' : 'text-[7px]'} font-bold text-zinc-700`}>
            {initials(technology.name)}
          </span>
        )}
      </span>
      <span>{technology.name}</span>
    </span>
  )
}
