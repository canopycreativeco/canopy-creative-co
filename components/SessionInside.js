/* "New in The Canopy from this session". What the current session added to the
   membership, read from the session's `inside` in lib/session.js, so it changes with the
   video each month. It names additions to a membership that already holds much more.

   `compact` is the small version for the watch card on /the-canopy (light card).
   The default is the full version under the video on /session (dark brown section). */

export const INSIDE_LABEL = 'New in The Canopy from this session'

export default function SessionInside({ inside, compact = false }) {
  if (!inside || !inside.items?.length) return null

  if (compact) {
    return (
      <div>
        <p className="text-[11.5px] font-bold tracking-[0.16em] uppercase text-orange mb-3">
          {INSIDE_LABEL}
        </p>
        <ul className="list-none m-0 p-0">
          {inside.items.map(({ emoji, name, line }) => (
            <li
              key={name}
              className="flex items-start gap-3 py-[9px] border-b border-brown/10 first:border-t first:border-brown/10"
            >
              <span className="text-[22px] leading-none shrink-0 mt-[1px]" aria-hidden="true">
                {emoji}
              </span>
              <span className="text-[14px] text-brown/80 leading-[1.55]">
                <span className="font-serif font-bold text-brown text-[15.5px]">{name}.</span> {line}
              </span>
            </li>
          ))}
        </ul>
        {inside.more ? (
          <p className="text-[13px] text-brown/65 leading-[1.6] mt-3">{inside.more}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="mt-12 max-md:mt-10">
      <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-3">
        {INSIDE_LABEL}
      </p>
      {inside.intro ? (
        <p className="text-[16px] font-light leading-[1.7] mb-7 max-w-[60ch]" style={{ color: 'rgba(253,246,236,0.75)' }}>
          {inside.intro}
        </p>
      ) : null}
      <ul className="list-none m-0 p-0 grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
        {inside.items.map(({ emoji, name, line }) => (
          <li
            key={name}
            className="rounded-[16px] border border-cream/15 bg-cream/5 px-6 py-6 flex flex-col"
          >
            <span className="text-[40px] leading-none mb-4" aria-hidden="true">
              {emoji}
            </span>
            <h3 className="font-serif text-[20px] font-bold text-cream leading-[1.25] mb-2">{name}</h3>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: 'rgba(253,246,236,0.72)' }}>
              {line}
            </p>
          </li>
        ))}
      </ul>
      {inside.more ? (
        <p className="text-[14.5px] leading-[1.7] mt-6 max-w-[64ch]" style={{ color: 'rgba(253,246,236,0.65)' }}>
          {inside.more}
        </p>
      ) : null}
    </div>
  )
}
