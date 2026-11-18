'use client'

import { useEffect, useState } from 'react'
import { currentSession } from '@/lib/session'
import SessionWatchCard from '@/components/SessionWatchCard'

/* The watch card for whichever session is current, for static pages (/the-canopy).
   The build renders the session current at build time, then the browser re-checks the
   time on load, so the card follows lib/session.js on its own. Renders nothing if no
   session is up. */
export default function CurrentWatchCard({ initialSession, eyebrowText = null }) {
  const [session, setSession] = useState(initialSession)

  useEffect(() => {
    // Deliberate: the time check has to run after hydration, in the visitor's browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSession(currentSession(new Date()))
  }, [])

  return <SessionWatchCard session={session} eyebrowText={eyebrowText} />
}
