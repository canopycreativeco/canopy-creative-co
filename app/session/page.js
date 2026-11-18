import { connection } from 'next/server'
import { CANOPY_CHECKOUT_URL, MEMBER_LOGIN_URL } from '@/lib/site'
import { SESSIONS, currentSession, nextSessionLabel } from '@/lib/session'
import SessionPlayer from '@/components/SessionPlayer'
import SessionSignupForm from '@/components/SessionSignupForm'
import SessionInside from '@/components/SessionInside'

/* One permanent URL for the monthly session. The videos and dates live in lib/session.js.
   This page renders on every request (connection() below), so the current session plays
   until the next session's showAt, then the next video takes over on its own. No deploy
   needed on release day. The between-sessions view only shows if no session is up. */

export const metadata = {
  title: 'The monthly session',
  description: 'The monthly session from Canopy Creative Co, free to watch until the next one drops.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/session',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

function HeroGlow() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(204,78,0,0.18) 0%, transparent 60%)',
      }}
    />
  )
}

function WatchView({ session }) {
  const label = nextSessionLabel()
  const hasInside = Boolean(session.inside?.items?.length)
  const joinButton = (
    <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={btnPrimary}>
      Join The Canopy
    </a>
  )
  return (
    <>
      <section className="bg-brown pt-[120px] pb-[72px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[56px]">
        <HeroGlow />
        <div className="relative max-w-[960px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-5">
            This month&rsquo;s session
          </p>
          <h1
            className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-10"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            {label ? (
              <>
                Free to watch until the next session drops,{' '}
                <em className="text-orange italic">{label}.</em>
              </>
            ) : (
              <>
                Free to watch until the next session <em className="text-orange italic">drops.</em>
              </>
            )}
          </h1>

          <SessionPlayer
            key={session.videoId}
            videoId={session.videoId}
            title={session.title || 'The monthly session from Canopy Creative Co'}
          />

          {/* The Join button sits beside the "New in The Canopy" label and intro. If a
              session has no inside items yet, it falls back to its own row under the
              replay line. Always visible, so the call to action is there even if the end
              screen fails. */}
          <SessionInside inside={session.inside} action={hasInside ? joinButton : null} />

          <div className="flex items-center justify-between gap-8 flex-wrap mt-6 max-md:flex-col max-md:items-start">
            <p className="text-[16px] font-light leading-[1.7]" style={{ color: 'rgba(253,246,236,0.75)' }}>
              The replay, the starter prompt, the use cases and the session&rsquo;s tools live
              in The Canopy.
            </p>
            {hasInside ? null : joinButton}
          </div>

          {/* Optional, never a gate. */}
          <div className="mt-12 pt-8 border-t border-cream/10 max-md:mt-10">
            <p className="text-[15px] font-light leading-[1.7] mb-4" style={{ color: 'rgba(253,246,236,0.7)' }}>
              Want next month&rsquo;s session in your inbox?
            </p>
            <div className="max-w-[560px]">
              <SessionSignupForm dark />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BetweenView() {
  const label = nextSessionLabel()
  return (
    <>
      <section className="bg-brown pt-[120px] pb-[80px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
        <HeroGlow />
        <div className="relative max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-5">
            The monthly session
          </p>
          <h1
            className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
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
          </h1>
          <p className="text-[17px] font-light leading-[1.75] mb-10" style={{ color: 'rgba(253,246,236,0.72)' }}>
            Each session is free to watch until the next one drops. Leave your email and we will send you the link on release day.
          </p>
          <SessionSignupForm dark />
        </div>
      </section>

      <section className="bg-cream-dark py-[56px] px-[60px] max-md:py-[44px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-2">
            Already a member?
          </p>
          <p className="text-[15.5px] text-brown/85 leading-[1.7]">
            Missed it? The replay lives in The Canopy, along with every past session.{' '}
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener"
              className="text-orange font-semibold underline underline-offset-[3px]"
            >
              Log in to watch.
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default async function SessionPage({ searchParams }) {
  await connection()

  // Local preview only: /session?preview=watch or ?preview=between forces a state.
  let session = currentSession()
  if (process.env.NODE_ENV === 'development') {
    const { preview } = await searchParams
    if (preview === 'between') session = null
    // Falls back to the first session with a video, so the watch view previews even
    // before its showAt.
    if (preview === 'watch' && !session) session = SESSIONS.find((s) => s.title) || null
  }

  return session ? <WatchView session={session} /> : <BetweenView />
}
