'use client'

import { useEffect, useRef, useState } from 'react'
import { CANOPY_CHECKOUT_URL } from '@/lib/site'

/* The session video, on YouTube's privacy-enhanced player (youtube-nocookie.com).

   The iframe is plain HTML, so the video plays even if the IFrame Player API never loads.
   The API is only there to catch the "ended" state and cover YouTube's suggested videos
   with our own end screen. If the API fails, the page's call to action under the video is
   the fallback. */

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const ENDED = 0
const PLAYING = 1

function loadYouTubeApi() {
  if (typeof window === 'undefined') return Promise.reject()
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT)
  return new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === 'function') previous()
      resolve(window.YT)
    }
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      tag.async = true
      tag.onerror = reject
      document.head.appendChild(tag)
    }
  })
}

export default function SessionPlayer({ videoId, title }) {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !iframeRef.current) return
        playerRef.current = new YT.Player(iframeRef.current, {
          events: {
            onStateChange: (e) => {
              if (e.data === ENDED) setEnded(true)
              if (e.data === PLAYING) setEnded(false)
            },
          },
        })
      })
      .catch(() => {
        // No end screen. The call to action under the video still shows.
      })
    return () => {
      cancelled = true
    }
  }, [])

  function watchAgain() {
    const player = playerRef.current
    if (player && player.seekTo) {
      player.seekTo(0)
      player.playVideo()
    }
    setEnded(false)
  }

  const src =
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}` +
    '?enablejsapi=1&rel=0&modestbranding=1&playsinline=1'

  return (
    <div className="relative w-full aspect-video rounded-[8px] overflow-hidden bg-brown-dark shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
      <iframe
        ref={iframeRef}
        id="session-player"
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {ended && (
        <div className="absolute inset-0 bg-brown flex flex-col items-center justify-center text-center px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(204,78,0,0.22) 0%, transparent 65%)' }}
          />
          <div className="relative max-w-[460px]">
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-4">
              That&rsquo;s the session
            </p>
            <p
              className="font-serif font-bold text-cream leading-[1.25] mb-7"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
            >
              The replay, the starter prompt and the tools live in{' '}
              <em className="text-orange italic">The Canopy.</em>
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={btnPrimary}>
                Join The Canopy
              </a>
              <button
                type="button"
                onClick={watchAgain}
                className="text-[14px] font-medium tracking-[0.04em] px-8 py-[15px] border-[1.5px] border-cream/25 text-cream/75 rounded-full transition-all duration-200 hover:border-cream/60 hover:text-cream"
              >
                Watch again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
