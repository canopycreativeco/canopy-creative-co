import Link from 'next/link'
import { CANOPY_FOUNDING_CHECKOUT_URL, DEMO_REGISTRATION_URL } from '@/lib/site'

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
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const SESSIONS = [
  {
    date: 'Aug 19',
    aired: true,
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
    title: 'Watch the build.',
    body: 'One session a month, airing with live Q&A. Free to watch, every time.',
  },
  {
    title: 'Run it on your own business.',
    body: 'Every session ships a starter prompt, plus the use cases members run afterward to take it deeper.',
  },
  {
    title: 'Keep all of it.',
    body: 'Recordings, starters, use cases, and a bonus tool from every session. Join in month one or month nine and you get everything that came before.',
  },
]

const FAQS = [
  {
    q: 'What if I miss a session live?',
    a: 'The recording and the starters land in the library within a couple of days of airing. The membership promise is a new session every month, and the library is where everything lives.',
  },
  {
    q: 'If the sessions are free, why pay?',
    a: 'Because you will miss some. The session is free the day it airs. The membership is the recording when you can’t make it, the use cases that take the prompt further, the bonus tool from each session, and every build that ran before you joined.',
  },
  {
    q: 'Why annual instead of monthly?',
    a: 'The library is the product, and it’s worth more across twelve months than any single month. Annual keeps the price low and the math simple. Monthly may come later at a higher rate.',
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
    q: 'What does it cost after year one?',
    a: 'The Canopy is an annual membership: 12 months of access at a time, $497 a year for everyone, founders included. The founding rate is a first-year discount, stated plainly at checkout, and the renewal terms sit right beside the buy button.',
  },
  {
    q: 'How do I cancel?',
    a: 'From your account in two clicks. Your renewal cancellation takes effect immediately.',
  },
]

function PriceCard() {
  return (
    <div className="bg-[#FFFCF6] rounded-[10px] px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-brown/10">
      <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted mb-2">
        Annual membership
      </p>
      <p className="font-serif text-[24px] font-bold text-brown mb-2">The Canopy</p>
      {/* CCC-EXPIRES-OCT14: on Oct 15 the standing price is $497, no founding rate. */}
      <p className="text-[30px] font-semibold text-brown">
        <span className="text-[20px] font-normal text-brown/45 line-through mr-2">$497</span>
        $347 <span className="text-[15px] font-normal text-brown/60">your first year</span>
      </p>
      <p className="text-[13.5px] text-brown/80 bg-cream-dark rounded-[6px] px-3 py-2 mt-2 mb-4">
        Lock in our founding-member rate of $347 your first year. Offer valid for the first 20
        seats, through October 14.
      </p>
      <a href={CANOPY_FOUNDING_CHECKOUT_URL} target="_blank" rel="noopener" className={`${btnPrimary} block w-full`}>
        Claim a founding seat
      </a>
      <p className="text-[12.5px] leading-[1.55] text-brown/60 mt-3">
        20 founding seats. Renews twelve months from your purchase date at the regular $497
        unless you cancel. Cancel renewal anytime.
      </p>
    </div>
  )
}


export default function TheCanopyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brown pt-[120px] pb-[72px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[56px]">
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
              Your back office, one <em className="text-orange italic">working</em>{' '}build at a
              time.
            </h1>
            <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(253,246,236,0.7)' }}>
              Every month a real back-office workflow gets built in front of you. Watching live is
              free. The membership is what you keep: every recording, every starter prompt, the use
              cases that take each one deeper, and a bonus tool from every session.
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

{/* ── HOW IT WORKS ── */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            How It Works
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-12"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            One build a month, <em className="text-orange italic">yours</em>{' '}to keep.
          </h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {BEATS.map(({ title, body }) => (
              <div
                key={title}
                className="bg-[#FFFCF6] border border-brown/10 border-t-2 border-t-orange rounded-[6px] px-8 py-8 shadow-[0_2px_12px_rgba(59,30,8,0.05)]"
              >
                <h3 className="font-serif text-[21px] font-bold text-brown mb-3">{title}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ── WHAT'S FREE, WHAT'S THE MEMBERSHIP ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-12"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            What&rsquo;s free, and what&rsquo;s the{' '}
            <em className="text-orange italic">membership.</em>
          </h2>

          <div className="grid grid-cols-2 gap-8 items-stretch max-md:grid-cols-1">
            {/* FREE LIVE */}
            <div className="relative flex flex-col border-[1.8px] border-dashed border-orange rounded-[8px] bg-cream px-9 pt-9 pb-8 shadow-[0_2px_12px_rgba(59,30,8,0.05)] max-md:px-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-orange mb-3">
                Free Live
              </p>
              <h3 className="font-serif text-[24px] font-bold text-brown mb-6">
                Come to the session
              </h3>
              <ul className="list-none m-0 p-0 mb-7">
                {['One live build a month, with Q&A', "That session's starter prompt, emailed after"].map((b) => (
                  <li key={b} className="text-[15px] font-medium text-brown/85 py-[8px] flex items-start gap-[12px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[13.5px] text-brown/60 leading-[1.65] mt-auto">
                No membership needed. Register and show up.
              </p>
            </div>

            {/* THE MEMBERSHIP */}
            <div className="relative flex flex-col border-2 border-orange rounded-[8px] bg-[#FFFCF6] px-9 pt-9 pb-8 shadow-[0_6px_24px_rgba(59,30,8,0.09)] max-md:px-6">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-orange mb-3">
                The Membership
              </p>
              <h3 className="font-serif text-[24px] font-bold text-brown mb-6">Keep all of it</h3>
              <ul className="list-none m-0 p-0 mb-7">
                {[
                  'Every recording, including the builds that aired before you joined',
                  'Use cases that take each starter prompt deeper',
                  'A bonus tool from every session',
                  'A library that only grows',
                ].map((b) => (
                  <li key={b} className="text-[15px] font-medium text-brown/85 py-[8px] flex items-start gap-[12px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[13.5px] text-brown/60 leading-[1.65] mt-auto">
                Miss one and you&rsquo;re caught up in a couple of days.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ── SERIES 1 ── */}
      <section className="bg-orange py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
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
            {SESSIONS.map(({ date, title, blurb, aired }) => (
              <div
                key={date}
                className="grid grid-cols-[90px_1fr] gap-5 py-[18px] border-b border-[#FFEB99]/35 items-baseline max-md:grid-cols-1 max-md:gap-1"
              >
                <div>
                  <p className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#FFEB99]">
                    {date}
                  </p>
                  {aired ? (
                    <p className="text-[12px] mt-[2px]" style={{ color: 'rgba(255,225,196,0.6)' }}>
                      Aired
                    </p>
                  ) : null}
                </div>
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

{/* ── PART A · THE NEXT LIVE SESSION ── */}
      {/* CCC-EXPIRES-OCT14: swap to the next scheduled session once Sep 2 airs. See swap plan. */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
              See One First
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              The next session is <em className="text-orange italic">free to watch.</em>
            </h2>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mt-5">
              Every session airs live and free. The membership is what stays afterward: the
              recording, the starter prompt, the use cases, and the whole library. Watch one, then
              decide.
            </p>
          </div>
          <div>
            <div className="border border-brown/15 rounded-lg bg-white/60 p-6">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange/85 mb-2">
                Next session &middot; Wednesday, September 2 &middot; 1pm ET
              </p>
              <h3 className="font-serif font-bold text-brown text-[22px] leading-[1.3] mb-3">
                Where&rsquo;s my stuff: the order and PO tracker
              </h3>
              <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-6">
                Every order, every vendor, one view, so the answer is one search away.
              </p>
              <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={btnPrimary}>
                Save your seat for Sep 2
              </a>
            </div>
          </div>
        </div>
      </section>

{/* ── PART B · THE AIRED BUILD AS A SAMPLE ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
          <div>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Here&rsquo;s what a build <em className="text-orange italic">looks like.</em>
            </h2>
            <p className="text-[16.5px] text-brown/80 leading-[1.8]">
              <strong className="font-bold">Profit Levers: am I charging enough</strong>{' '}aired
              August 19. Members have the recording, the starter prompt, and the use cases that
              came after. Here&rsquo;s what the room saw.
            </p>
          </div>

          <div>
            {/* A peek at the dashboard built in the session, in the teaser's visual language.
                The fictional-data label sits in the table header, above the numbers. */}
            <div
              className="rounded-lg border border-brown/15 bg-white/60 p-6 mb-7 shadow-[0_6px_28px_rgba(59,30,8,0.08)] max-md:p-4"
              aria-label="A preview of the pricing dashboard built in the session"
            >
              <div className="rounded-lg border border-brown/10 bg-cream p-4">
                <div className="bg-white rounded-md border border-brown/10 overflow-hidden mb-3">
                  <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-cream bg-orange px-4 py-2">
                    Sample data &middot; Fictional demo firm
                  </p>
                  <div className="p-4">
                    <div className="flex justify-between gap-4 text-[12.5px] text-brown/85 py-[3px]">
                      <span>What clients paid you</span><span className="font-semibold">$2,901,645</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[12px] text-brown/60 py-[3px] pl-3">
                      <span>Less what you paid vendors</span><span>&minus;$1,600,000</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[12px] text-brown/60 py-[3px] pl-3">
                      <span>Less freight and receiving</span><span>&minus;$85,000</span>
                    </div>
                    <div className="flex justify-between items-baseline gap-4 border-t border-brown/15 mt-2 pt-2.5">
                      <span className="text-[13px] font-semibold text-brown">What you keep before overhead</span>
                      <span className="font-serif font-bold text-brown text-[21px]">$996,645</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-md border border-brown/10 border-l-[3px] border-l-orange p-4 mb-3">
                  <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-orange mb-1.5">
                    Finding 1 of 3
                  </p>
                  <p className="font-serif font-bold text-brown text-[15.5px] leading-[1.35]">
                    You scaled the team and the volume. You never scaled the pricing.
                  </p>
                </div>

                {/* The markup dial from the live build. Stays until there is a next-demo illustration. */}
                <div className="bg-white rounded-md border border-brown/10 p-4">
                  <div className="flex justify-between gap-4 text-[12.5px] font-semibold text-brown mb-2">
                    <span>Product markup, on landed cost</span><span>18.7%</span>
                  </div>
                  <div className="relative h-[16px]">
                    <div className="absolute top-[4px] h-[8px] rounded-full bg-[#D5E7DC]" style={{ left: '75%', width: '13.6%' }}></div>
                    <div className="absolute top-[4px] h-[8px] rounded-full bg-[#F6DFC8]" style={{ left: '88.6%', right: 0 }}></div>
                    <div className="absolute top-[6.5px] h-[3px] rounded-full bg-brown/10 inset-x-0"></div>
                    <div className="absolute top-[6.5px] h-[3px] rounded-full bg-orange" style={{ width: '46.75%' }}></div>
                    <div className="absolute top-[1.5px] w-[13px] h-[13px] rounded-full bg-orange border-2 border-white" style={{ left: 'calc(46.75% - 6px)' }}></div>
                  </div>
                  <div className="flex justify-between items-center gap-4 mt-1.5">
                    <span className="text-[10.5px] font-semibold text-brown/70 bg-cream rounded-full px-2.5 py-[3px]">below typical</span>
                    <span className="text-[11px] text-brown/50">$315,090 a year</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-4">
              We built a fictional Florida design studio with eight years of books, shaped like the
              interior design firms we work with. Claude read the whole workspace and turned it
              into a live pricing dashboard: where the money went, what the numbers say in plain
              words, and the one move worth making first.
            </p>
            <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-4">
              Then came the dials. Change a markup, change a fee, watch what it does to the year.
            </p>
            <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-6">
              Members left with the starter prompt the build begins from, ready to point at their
              own numbers. The firm is fictional, so we could show everything with nothing to hide.
            </p>
            {/* CCC-EXPIRES-OCT14: update the named next session after Sep 2 airs. */}
            <p className="text-[13px] text-brown/60 leading-[1.6]">
              Every session runs this way. The next one airs September 2.
            </p>
          </div>
        </div>
      </section>

{/* Proof section. Approved copy, do not edit the quotes. */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[860px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Who we do this with
          </h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {[
              {
                quote: 'This is exactly why I hired you. Quick, useful responses.',
                who: 'Addy D., interior design firm owner',
              },
              {
                quote: 'He is a skilled facilitator and an engaging instructor.',
                who: 'Rachael Z., university faculty',
              },
            ].map(({ quote, who }, i) => (
              <div key={i} className="bg-[#FFFCF6] border-l-[3px] border-orange rounded-r-[6px] px-7 py-6">
                <p className="font-serif italic text-[17px] text-brown leading-[1.6] mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] text-brown/55">{who}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-brown/60 leading-[1.7] mt-8 max-w-[62ch]">
            The Canopy is new, so there are no member quotes yet. We&rsquo;ll post them as they
            come in.
          </p>
        </div>
      </section>

{/* ── THE PILE ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
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

{/* ── FAQ ── */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
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
              <details
                key={q}
                className="group bg-[#FFFCF6] border border-brown/10 rounded-[6px] px-6 py-[18px] mb-3 shadow-[0_1px_6px_rgba(59,30,8,0.04)] transition-colors duration-200 hover:border-orange/40 max-md:px-5"
              >
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
            The Canopy is the second way to work with Canopy Creative Co.{' '}
            <Link href="/the-roots" className="text-orange underline underline-offset-[3px]">
              The Roots
            </Link>{' '}
            is the self-paced foundation, and{' '}
            <Link href="/the-greenhouse" className="text-orange underline underline-offset-[3px]">
              The Greenhouse
            </Link>{' '}
            is where we build it with you.
          </p>
        </div>
      </section>

{/* ── THE TERMS ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
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
                b: 'Every month there’s a live demo anyone can watch free. The membership is everything that stays after: the recording, the starter prompt, the use cases, the bonus tool, and the whole library.',
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
              <div
                key={t}
                className="bg-[#FFFCF6] border border-brown/10 border-t-2 border-t-orange rounded-[6px] px-6 py-6 shadow-[0_2px_12px_rgba(59,30,8,0.05)]"
              >
                <h3 className="font-serif text-[19px] font-bold text-brown mb-2">{t}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ── FINAL CTA ── */}
      <section className="bg-orange py-[76px] px-[60px] text-center relative overflow-hidden max-md:px-6">
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
          <p className="text-[17px] font-light leading-[1.7] mb-9 text-balance" style={{ color: 'rgba(255,225,196,0.95)' }}>
            Founding pricing ends after the first 20 seats or October 14,{' '}
            <span className="whitespace-nowrap">whichever comes first.</span>
          </p>
          <a
            href={CANOPY_FOUNDING_CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-brown text-[#FFEB99] text-[14px] font-bold tracking-[0.04em] px-9 py-[16px] rounded-full no-underline transition-all duration-200 hover:bg-brown-dark hover:-translate-y-px"
          >
            Claim a founding seat
          </a>
          <p className="text-[17px] leading-[1.6] mt-6 max-w-[560px] mx-auto text-balance" style={{ color: 'rgba(255,225,196,0.95)' }}>
            $347 your first year with the founding rate. Renews twelve months from your purchase
            date at the regular $497 unless you cancel. Cancel renewal anytime.
          </p>
        </div>
      </section>

    </>
  )
}
