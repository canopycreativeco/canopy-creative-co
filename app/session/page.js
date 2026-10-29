import { connection } from 'next/server'
import { CANOPY_CHECKOUT_URL, MEMBER_LOGIN_URL } from '@/lib/site'
import { SESSION, sessionState, nextSessionLabel } from '@/lib/session'
import SessionPlayer from '@/components/SessionPlayer'
import SessionSignupForm from '@/components/SessionSignupForm'

/* One permanent URL for the monthly session. The video and dates live in lib/session.js.
   This page renders on every request (connection() below), so it switches between the
   video and the between-sessions view on its own at showAt and hideAt. No deploy needed. */

export const metadata = {
  title: 'The monthly session',
  description: 'The monthly session from Canopy Creative Co, free to watch the week it comes out.',
  robots: { index: false, follow: false },
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

function WatchView() {
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
            Free to watch through <em className="text-orange italic">Friday.</em>
          </h1>

          <SessionPlayer videoId={SESSION.videoId} title="The monthly session from Canopy Creative Co" />

          {/* Always visible, so the call to action is there even if the end screen fails. */}
          <div className="flex items-center justify-between gap-8 flex-wrap mt-8 max-md:flex-col max-md:items-start">
            <p className="text-[16px] font-light leading-[1.7] max-w-[56ch]" style={{ color: 'rgba(253,246,236,0.75)' }}>
              The replay, the starter prompt, the use cases and the session&rsquo;s tools live
              in The Canopy.
            </p>
            <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={btnPrimary}>
              Join The Canopy
            </a>
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
            {label
              ? 'Free to watch through Friday.'
              : 'Free to watch through the Friday of release week.'}{' '}
            Leave your email and we will send you the link on release day.
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
  let state = sessionState()
  if (process.env.NODE_ENV === 'development') {
    const { preview } = await searchParams
    if (preview === 'watch' || preview === 'between') state = preview
  }

  return state === 'watch' ? <WatchView /> : <BetweenView />
}
