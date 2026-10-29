'use client'

import { useEffect, useState } from 'react'
import { CANOPY_CHECKOUT_URL } from '@/lib/site'
import { SESSION, sessionState, nextSessionLabel } from '@/lib/session'
import SessionPlayer from '@/components/SessionPlayer'
import SessionSignupForm from '@/components/SessionSignupForm'

/* "This month's session" on the homepage. The homepage is a static page, so the build
   renders the between-sessions view and the browser re-checks the time (against Eastern
   time, from lib/session.js) on load. During the free week it swaps in the video, the
   same player as /session. */

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

// initialLabel is worked out at build time and passed in, so the first browser render
// matches the server HTML. The effect then updates it to the visitor's current time.
export default function HomeSession({ initialLabel }) {
  const [state, setState] = useState('between')
  const [label, setLabel] = useState(initialLabel)

  useEffect(() => {
    const now = new Date()
    // Deliberate: the time check has to run after hydration, in the visitor's browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(sessionState(now))
    setLabel(nextSessionLabel(now))
  }, [])

  if (state === 'watch') {
    return (
      <div>
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
          This month&rsquo;s session
        </p>
        <h2
          className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-8"
          style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
        >
          Free to watch through <em className="text-orange italic">Friday.</em>
        </h2>
        <SessionPlayer videoId={SESSION.videoId} title="The monthly session from Canopy Creative Co" />
        <div className="flex items-center justify-between gap-8 flex-wrap mt-8 max-md:flex-col max-md:items-start">
          <p className="text-[15.5px] text-brown/80 leading-[1.7] max-w-[56ch]">
            The replay, the starter prompt, the use cases and the session&rsquo;s tools live in
            The Canopy.
          </p>
          <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={btnPrimary}>
            Join The Canopy
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[1.1fr_1fr] gap-12 items-center max-md:grid-cols-1 max-md:gap-8">
      <div>
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
          The monthly session
        </p>
        <h2
          className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
          style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
        >
          {label ? (
            <>
              New session <em className="text-orange italic">{label}.</em>
            </>
          ) : (
            <>
              A new session, <em className="text-orange italic">every month.</em>
            </>
          )}
        </h2>
        <p className="text-[16.5px] text-brown/80 leading-[1.8] max-w-[560px]">
          Every month we take one real workflow and build it start to finish, so you can see what
          AI takes off your plate. It&rsquo;s free to watch through the Friday of release week.
          Missed it? The replay lives in The Canopy.
        </p>
      </div>
      <div className="bg-cream-dark rounded-[8px] border-2 border-orange px-8 py-8 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6">
        <p className="font-serif text-[20px] font-bold text-brown mb-2">Send me the session.</p>
        <p className="text-[14.5px] text-brown/75 leading-[1.7] mb-5">
          Leave your email and we&rsquo;ll send you the link on release day.
        </p>
        <SessionSignupForm stacked />
      </div>
    </div>
  )
}
