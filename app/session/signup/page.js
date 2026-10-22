import { MEMBER_LOGIN_URL } from '@/lib/site'
import { nextSessionLine } from '@/lib/session'
import SessionSignupForm from '@/components/SessionSignupForm'

export const metadata = {
  title: 'Send me the session',
  description: 'Get the monthly session from Canopy Creative Co by email on release day. Free to watch through Friday.',
  openGraph: {
    title: 'Send me the session | Canopy Creative Co',
    description: 'Get the monthly session from Canopy Creative Co by email on release day. Free to watch through Friday.',
    url: 'https://www.canopycreativeco.com/session/signup',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/session/signup',
  },
}

/* [TO SET] One line on what people walk away with. Dave writes it once the November topic
   is locked (October 21). Swap the placeholder below for the line, then delete the box. */
const WALK_AWAY_LINE = null

export default function SessionSignupPage() {
  return (
    <>
      <section className="bg-brown pt-[120px] pb-[80px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(204,78,0,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-5">
            The monthly session
          </p>
          <h1
            className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(32px, 4.4vw, 52px)' }}
          >
            Send me the <em className="text-orange italic">session.</em>
          </h1>

          {WALK_AWAY_LINE ? (
            <p className="text-[18px] font-light leading-[1.75] mb-4" style={{ color: 'rgba(253,246,236,0.8)' }}>
              {WALK_AWAY_LINE}
            </p>
          ) : process.env.NODE_ENV === 'development' ? (
            // Local preview only. The live site shows nothing here until the line is set.
            <p className="text-[15px] font-semibold leading-[1.6] mb-4 text-[#FFEB99] border-2 border-dashed border-[#FFEB99]/60 rounded-[6px] px-4 py-3">
              [TO SET: one line on what people walk away with, once the November topic is locked]
            </p>
          ) : null}

          <p className="text-[16px] font-light leading-[1.75] mb-10" style={{ color: 'rgba(253,246,236,0.72)' }}>
            {nextSessionLine()}
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
            Every session, including the replay, lives in The Canopy.{' '}
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
