'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { currentSession, nextSessionLine } from '@/lib/session'
import SessionInside from '@/components/SessionInside'

/* "See one first" on /the-canopy. Everything on it reads from lib/session.js, so when next
   month's video takes over the card follows on its own, no edit to this page. The page is
   static, so the build renders the session current at build time and the browser re-checks
   the time on load, same as the homepage. */

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const eyebrow = 'text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-2'

// YouTube only has maxresdefault for HD uploads. When it is missing YouTube serves a
// 120x90 grey placeholder (or an error), so fall back to hqdefault in either case.
function Thumbnail({ videoId, alt }) {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`)
  const fallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const switchToFallback = () => setSrc((s) => (s === fallback ? s : fallback))
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={switchToFallback}
      onLoad={(e) => {
        if (e.currentTarget.naturalWidth <= 120) switchToFallback()
      }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}

function PlayBadge() {
  return (
    <span
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="w-[68px] h-[68px] rounded-full bg-orange text-cream flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </span>
    </span>
  )
}

export default function SessionWatchCard({ initialSession, initialLine }) {
  const [session, setSession] = useState(initialSession)
  const [line, setLine] = useState(initialLine)

  useEffect(() => {
    const now = new Date()
    // Deliberate: the time check has to run after hydration, in the visitor's browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSession(currentSession(now))
    setLine(nextSessionLine(now))
  }, [])

  // Safety net, no session up: the old line and the email signup.
  if (!session) {
    return (
      <div className="flex items-center justify-between gap-8 flex-wrap max-md:flex-col max-md:items-start">
        <div className="max-w-[60ch]">
          <p className={eyebrow}>See one first</p>
          <p className="text-[15.5px] text-brown/85 leading-[1.7]">{line}</p>
        </div>
        <Link href="/session/signup" className={btnPrimary}>
          Send me the session
        </Link>
      </div>
    )
  }

  const title = session.title || 'This month’s session'

  return (
    <div className="bg-[#FFFCF6] rounded-[16px] border-2 border-brown overflow-hidden shadow-[0_14px_32px_rgba(59,30,8,0.12)] md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* The thumbnail keeps its 16:9 shape, framed on brown, so nothing gets cropped. */}
      <div className="bg-brown flex items-center px-7 py-7 max-md:px-0 max-md:py-0">
        <Link
          href="/session"
          className="group relative block w-full aspect-video rounded-[10px] overflow-hidden bg-brown-dark shadow-[0_12px_30px_rgba(0,0,0,0.3)] max-md:rounded-none max-md:shadow-none"
          aria-label={`Watch ${title}`}
        >
          <Thumbnail key={session.videoId} videoId={session.videoId} alt="" />
          <span className="absolute inset-0 bg-brown/15 transition-colors duration-200 group-hover:bg-brown/0" aria-hidden="true" />
          <PlayBadge />
        </Link>
      </div>

      <div className="px-8 py-8 max-md:px-6 max-md:py-7">
        <p className={eyebrow}>See one first</p>
        <p className="font-serif text-[24px] font-bold text-brown leading-[1.25] mb-2 max-md:text-[21px]">
          {title}
        </p>
        <p className="text-[14.5px] text-brown/75 leading-[1.65] mb-6">{line}</p>

        {session.inside ? (
          <div className="mb-7">
            <SessionInside inside={session.inside} compact />
          </div>
        ) : null}

        <Link href="/session" className={btnPrimary}>
          Watch it free
        </Link>
        <p className="mt-4">
          <Link
            href="/session/signup"
            className="text-[13.5px] text-brown/65 underline underline-offset-[3px] hover:text-orange"
          >
            Send me the session
          </Link>
        </p>
      </div>
    </div>
  )
}
