/* Brand iconography, inlined from Brand Book/Iconography so the stroke takes currentColor.
   Same 24-unit grid and 2px round strokes as the source SVGs. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

/* Graduation cap */
export function IconLearning({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
    </svg>
  )
}

/* Hand holding a heart */
export function IconHandHeart({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.7L16 12Z" />
    </svg>
  )
}

/* Open book */
export function IconLedger({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

/* Dollar coin */
export function IconFinance({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.3C14.5 8.4 13.4 8 12 8s-2.5.6-2.5 1.7S10.6 11.4 12 11.4s2.5.6 2.5 1.8S13.4 15.5 12 15.5s-2.5-.5-2.5-1.4" />
      <path d="M12 6.5v11" />
    </svg>
  )
}

/* Sprout */
export function IconSprout({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-1.4.4-2.7.4-3.8-.3-1-.7-1.5-1.9-2-3.4 1.5-.5 2.7-.4 3.5.4z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  )
}

/* Calendar */
export function IconCalendar({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
    </svg>
  )
}

/* Clipboard with a check */
export function IconChecklist({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}

/* Five-node pentagon loop */
export function IconSystems({ size = 28, className }) {
  return (
    <svg width={size} height={size} className={className} {...base}>
      <path d="M12 4 19.6 9.5 16.7 18.5 7.3 18.5 4.4 9.5Z" />
      <path d="M12 12 12 4M12 12 19.6 9.5M12 12 16.7 18.5M12 12 7.3 18.5M12 12 4.4 9.5" />
      {[[12, 4], [19.6, 9.5], [16.7, 18.5], [7.3, 18.5], [4.4, 9.5]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.4" fill="currentColor" stroke="none" />
      ))}
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
