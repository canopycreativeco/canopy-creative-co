import Link from 'next/link'
import { CANOPY_FOUNDING_CHECKOUT_URL } from '@/lib/site'

export const metadata = {
  title: 'The Canopy',
  description:
    'The Canopy is the ongoing membership for operators who want AI doing real work in their business. A new build session every month, the full library of recordings and starter prompts from day one.',
  openGraph: {
    title: 'The Canopy | Canopy Creative Co',
    description:
      'The ongoing membership for operators building an AI-run back office. A new session every month, the full library included from day one.',
    url: 'https://www.canopycreativeco.com/the-canopy',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/the-canopy',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const SESSIONS = [
  {
    date: 'Aug 19',
    title: 'Profit Levers: am I charging enough',
    blurb: 'Design fee, hourly, markup, or the mix. Pricing that pays you properly without scaring clients away.',
  },
  { date: 'Sep 2', title: "Where's my stuff: the order and PO tracker", blurb: 'Every order, every vendor, one view, so the answer is one search away.' },
  { date: 'Sep 16', title: 'Project pulse: budget, status, and the client update', blurb: 'The Monday update, drafted before Monday.' },
  { date: 'Sep 30', title: 'The proposal and follow-up builder', blurb: 'From call notes to a clean proposal, plus the follow-up drafts you never get to.' },
  { date: 'Oct 14', title: 'The money coach', blurb: 'A morning money check you can actually keep.' },
]

const BEATS = [
  {
    title: 'Watch the build',
    body: 'One session a month, airing with live Q&A. You watch a complete back-office workflow operate with AI on a business with real-shaped numbers and real-shaped mess, so nothing is hand-waved.',
  },
  {
    title: 'Take the starter home',
    body: 'Every session delivers its starter prompt, written to paste into Claude or ChatGPT and give you a real first answer on your own business the same day.',
  },
  {
    title: 'Let the library compound',
    body: 'Every recording and every starter stays. Join in month one or month nine and you get all of it. Lock in the current price before it goes up.',
  },
]

const FAQS = [
  {
    q: 'What if I miss a session live?',
    a: 'The recording and the starters land in the library within a couple of days of airing. The membership promise is a new session every month, and the library is where everything lives.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. If you can paste text into Claude or ChatGPT, you can run every starter. The sessions show the full build so you understand what you are running, and the starter is written to work on day one.',
  },
  {
    q: 'What do I need?',
    a: 'One AI tool. Claude is what you will see on screen, and ChatGPT works too. We recommend a paid plan, but feel free to start on a free plan and decide when it makes sense to upgrade as you use AI more often in your work.',
  },
  {
    q: 'Do members get the prompts from the sessions?',
    a: 'Absolutely! You get the starter prompt every single time.',
  },
  {
    q: 'What does it cost after year one?',
    a: 'The Canopy is an annual membership: 12 months of access at a time, $497 a year for everyone, founders included. The founding rate is a first-year discount, stated plainly at checkout, and the renewal terms sit right beside the buy button.',
  },
  {
    q: 'How do I cancel?',
    a: 'From your account in two clicks. Your renewal cancellation takes effect immediately.',
  },
]

function PriceCard({ compact = false }) {
  return (
    <div className="bg-[#FFFCF6] rounded-[10px] px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-brown/10">
      <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted mb-2">
        Annual membership
      </p>
      <p className="font-serif text-[24px] font-bold text-brown mb-2">The Canopy</p>
      {compact ? (
        <p className="text-[26px] font-semibold text-brown mb-4">
          <span className="text-[17px] font-normal text-brown/45 line-through mr-2">$497</span>
          $347 <span className="text-[14px] font-normal text-brown/60">first year, then $497 / year</span>
        </p>
      ) : (
        <>
          <p className="text-[30px] font-semibold text-brown">
            <span className="text-[20px] font-normal text-brown/45 line-through mr-2">$497</span>
            $347 <span className="text-[15px] font-normal text-brown/60">your first year</span>
          </p>
          <p className="text-[13.5px] text-brown/80 bg-cream-dark rounded-[6px] px-3 py-2 mt-2 mb-4">
            Lock in our founding-member rate of $347 your first year. Offer valid for the first 20
            seats, through October 14.
          </p>
        </>
      )}
      <a href={CANOPY_FOUNDING_CHECKOUT_URL} target="_blank" rel="noopener" className={`${btnPrimary} block w-full`}>
        Claim a founding seat
      </a>
      {compact ? (
        <p className="text-[12.5px] leading-[1.55] text-brown/60 mt-3">
          $347 valid for 20 founding seats. Renews at the regular $497 unless you cancel. Cancel
          any time.
        </p>
      ) : (
        <p className="text-[12.5px] leading-[1.55] text-brown/60 mt-3">
          20 founding seats. Renews at the regular $497 unless you cancel. Cancel renewal anytime.
        </p>
      )}
    </div>
  )
}

export default function TheCanopyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brown pt-[130px] pb-[90px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[110px] max-md:pb-[70px]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(204,78,0,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-[1080px] mx-auto grid grid-cols-[1.2fr_280px_1fr] gap-11 items-center max-md:grid-cols-1">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-6">
              The AI Operator
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-7"
              style={{ fontSize: 'clamp(32px, 4.2vw, 50px)' }}
            >
              Your back office, one <em className="text-orange italic">working</em> build at a
              time.
            </h1>
            <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(253,246,236,0.7)' }}>
              The Canopy is a membership with one moving part: each month you watch a real
              back-office workflow operate with AI, then take home the starter prompt to run it on
              your own. Every past build is included from the day you join.
            </p>
          </div>
          <img
            src="/art/tree-canopy.png"
            alt="Illustrated tree with a full green canopy"
            className="w-full max-md:max-w-[300px] max-md:mx-auto"
          />
          <PriceCard />
        </div>
      </section>

      {/* ── THE PILE ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            The Second Job
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Prevent the work from <em className="text-orange italic">piling up.</em>
          </h2>
          <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
            The invoices you meant to send Tuesday. The purchase orders living somewhere in your
            inbox. The proposal you owe one client by Friday, and the status updates you owe all of
            them by Monday. You built this business on work you love, and the back office quietly
            became a second job you never applied for.
          </p>
          <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
            Almost none of it is <strong>the work only you can do</strong>. Almost all of it is work
            a well-built AI workflow can carry, once someone builds that workflow in front of you
            and hands you the starting point.
          </p>
          <p className="text-[16.5px] text-brown/80 leading-[1.8]">
            That is the whole idea of <strong>The Canopy</strong>.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            How It Works
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-12"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            One build a month, <em className="text-orange italic">yours</em> to keep.
          </h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {BEATS.map(({ title, body }) => (
              <div
                key={title}
                className="bg-cream rounded-[4px] px-8 py-9 border-t-[3px] border-orange"
              >
                <h3 className="font-serif text-[21px] font-bold text-brown mb-3">{title}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERIES 1 ── */}
      <section className="bg-orange py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#FFEB99] mb-5">
            The first series · August 19 to October 14
          </p>
          <h2
            className="font-serif font-bold text-cream leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Five builds for the <em className="italic text-[#FFEB99]">back office.</em>
          </h2>
          <div className="border-t border-[#FFEB99]/35">
            {SESSIONS.map(({ date, title, blurb }) => (
              <div
                key={date}
                className="grid grid-cols-[90px_1fr] gap-5 py-[18px] border-b border-[#FFEB99]/35 items-baseline max-md:grid-cols-1 max-md:gap-1"
              >
                <p className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#FFEB99]">
                  {date}
                </p>
                <div>
                  <p className="font-serif text-[18.5px] font-bold text-cream">{title}</p>
                  {blurb ? (
                    <p className="text-[13.5px] leading-[1.6] mt-1" style={{ color: 'rgba(255,225,196,0.95)' }}>
                      {blurb}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING + BUY ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-[1.3fr_1fr] gap-[60px] items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
              Founding Membership
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] mb-6"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Twenty seats, priced <em className="text-orange italic">early.</em>
            </h2>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
              The first 20 members get the first year at $347, which is $150 off the standing $497.
              After that, everyone pays $497 a year, founders included, when the year renews. The
              coupon retires when our first series ends on October 14, and it never comes back.
            </p>
            <p className="text-[16.5px] text-brown/80 leading-[1.8]">
              Founding memberships are priced lower while the library grows. The library holds five
              builds by mid-October and has a new build every month after.
            </p>
          </div>
          <div>
            <PriceCard compact />
          </div>
        </div>
      </section>

      {/* ── THE TERMS ── */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            The Terms
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-12"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Three things stated <em className="text-orange italic">plainly.</em>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {[
              {
                t: 'The sessions stay free to watch',
                b: 'Each month there is a live demo that anyone can watch for free. The membership is what stays after a session airs: the recording, the starter prompts, all bonuses provided, and the entire library.',
              },
              {
                t: 'No outcome guarantees',
                b: 'AI tooling moves monthly and every business is different. What you can hold us to is cadence: a new session every month, and a library that only grows.',
              },
              {
                t: 'Leaving is two clicks',
                b: 'Cancel your renewal at any time. No questions asked.',
              },
            ].map(({ t, b }) => (
              <div key={t} className="border-t-2 border-orange pt-4">
                <h3 className="font-serif text-[19px] font-bold text-brown mb-2">{t}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Questions, Answered
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Before you <em className="text-orange italic">join.</em>
          </h2>
          <div>
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group border-b border-brown/10 py-5">
                <summary className="font-serif text-[18px] font-bold text-brown cursor-pointer list-none flex justify-between items-center gap-4">
                  {q}
                  <span className="text-orange text-[20px] leading-none group-open:rotate-45 transition-transform duration-200" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-[16px] text-brown/75 leading-[1.75] mt-3 max-w-[62ch]">{a}</p>
              </details>
            ))}
          </div>
          <p className="text-[16px] text-brown/75 leading-[1.7] mt-12 text-center max-w-[60ch] mx-auto">
            The Canopy is the middle of three ways to work with Canopy Creative Co.{' '}
            <Link href="/the-roots" className="text-orange underline underline-offset-[3px]">
              The Roots
            </Link>{' '}
            is the self-paced foundation, and{' '}
            <Link href="/work-with-us#the-greenhouse" className="text-orange underline underline-offset-[3px]">
              The Greenhouse
            </Link>{' '}
            is where we build it with you.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange py-[90px] px-[60px] text-center relative overflow-hidden max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[620px] mx-auto">
          <h2
            className="font-serif font-bold text-cream leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            A new build airs <em className="italic text-[#FFEB99]">every month.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mb-9" style={{ color: 'rgba(255,225,196,0.95)' }}>
            Founding pricing ends after the first 20 seats or October 14,{' '}
            <span className="whitespace-nowrap">whichever comes first.</span>
          </p>
          <a
            href={CANOPY_FOUNDING_CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-brown text-[#FFEB99] text-[14px] font-bold tracking-[0.04em] px-9 py-[16px] rounded-[3px] no-underline transition-all duration-200 hover:bg-brown-dark hover:-translate-y-px"
          >
            Claim a founding seat
          </a>
          <p className="text-[17px] leading-[1.6] mt-6 max-w-[560px] mx-auto" style={{ color: 'rgba(255,225,196,0.95)' }}>
            $347 your first year with the founding rate. Renews at the regular $497 unless you
            cancel. Cancel renewal anytime.
          </p>
        </div>
      </section>
    </>
  )
}
