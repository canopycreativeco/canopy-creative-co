'use client'

import { useState } from 'react'
import Link from 'next/link'
import SessionInside from '@/components/SessionInside'

/* The watch card for this month's session, on the homepage. Thumbnail, title, what the
   session added to The Canopy, and a button to /session. Everything reads from the session
   object in lib/session.js. */

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

// Presentational. The caller works out the current session (see HomeSession), so the
// card always follows lib/session.js and never needs a monthly edit.
export default function SessionWatchCard({ session, line = null, eyebrowText = 'This month’s session' }) {
  if (!session) return null

  const title = session.title || 'This month’s session'

  return (
    <div className="bg-[#FFFCF6] rounded-[16px] border-2 border-brown overflow-hidden shadow-[0_14px_32px_rgba(59,30,8,0.12)] md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* The thumbnail keeps its 16:9 shape, framed on brown, so nothing gets cropped. */}
      <div className="bg-brown-dark flex items-center px-7 py-7 max-md:px-0 max-md:py-0">
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
        {eyebrowText ? <p className={eyebrow}>{eyebrowText}</p> : null}
        <p className="font-serif text-[24px] font-bold text-brown leading-[1.25] mb-2 max-md:text-[21px]">
          {title}
        </p>
        {line ? <p className="text-[14.5px] text-brown/75 leading-[1.65] mb-6">{line}</p> : <div className="mb-5" />}

        {session.inside ? (
          <div className="mb-7">
            <SessionInside inside={session.inside} compact />
          </div>
        ) : null}

        <Link href="/session" className={btnPrimary}>
          Watch it free
        </Link>
      </div>
    </div>
  )
}
