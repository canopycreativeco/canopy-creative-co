import Link from 'next/link'
import { CANOPY_CHECKOUT_URL, BACK_OFFICE_URL, DEMO_REGISTRATION_URL } from '@/lib/site'
import { IconSprout, IconCalendar, IconChecklist } from '@/components/Icons'

export const metadata = {
  title: 'The Canopy',
  description:
    'The Canopy is one membership with everything inside: the foundations course, every live session, and a growing library of skills and prompts built for real operators.',
  openGraph: {
    title: 'The Canopy | Canopy Creative Co',
    description:
      'One membership with everything inside: the foundations course, every live session, and a growing library of skills and prompts built for real operators.',
    url: 'https://www.canopycreativeco.com/the-canopy',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/the-canopy',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const btnGhost =
  'inline-block bg-[#FFFCF6] text-orange text-[14px] font-semibold tracking-[0.04em] px-8 py-[14px] border-[1.5px] border-orange rounded-full no-underline transition-all duration-200 hover:bg-orange hover:text-cream hover:-translate-y-px text-center'

/* Tan panel on a cream section, with a heavy orange edge. Same object as the menu panel
   on The Back Office page, so the two doors read as siblings. */
const band =
  'max-w-[1080px] mx-auto bg-cream-dark rounded-[6px] border-2 border-orange px-10 py-10 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6'

/* The three parts of the membership. Same order everywhere on the site. */
const INSIDE = [
  {
    title: 'The Roots',
    Icon: IconSprout,
    items: [
      'The foundations track, where you start',
      'The video course',
      'The prompt cheat sheet',
      'The starter workspaces',
    ],
  },
  {
    title: 'The live session',
    Icon: IconCalendar,
    items: [
      'One live session a month, with Q&A',
      'The recording, if you miss it live',
      'The starter prompt',
      'Use cases that take it deeper',
      'A bonus tool from every session',
    ],
  },
  {
    title: 'The Tool Shed',
    Icon: IconChecklist,
    items: [
      'The full library of finished skills and prompts',
      'New skills and prompts added regularly',
      'Every session that aired before you joined',
      'Everything from day one',
    ],
  },
]

const SESSIONS = [
  {
    date: 'Aug 19',
    aired: true,
    title: 'Profit Levers: am I charging enough',
    blurb: 'Design fee, hourly, markup, or the mix. Pricing that pays you properly without scaring clients away.',
  },
  { date: 'Sep 2', aired: true, title: "Where's my stuff: the order and PO tracker", blurb: 'Every order, every vendor, one view, so the answer is one search away.' },
  { date: 'Sep 16', aired: true, title: 'Project pulse: budget, status, and the client update', blurb: 'The Monday update, drafted before Monday.' },
  { date: 'Sep 30', aired: true, title: 'The proposal and follow-up builder', blurb: 'From call notes to a proposal that goes out the same week, plus the follow-ups that keep a warm lead from going quiet.' },
  { date: 'Oct 14', title: 'The money coach', blurb: 'The other half of Profit Levers: where the money goes each month, and which costs are worth a second look.' },
]

const FAQS = [
  {
    q: 'What if I miss a session live?',
    a: 'The recording and the starters land in the library after each session. The membership promise is a live session every month, and the library is where everything lives.',
  },
  {
    q: 'If the sessions are free, why pay?',
    a: 'Because the live session is one piece. The membership is The Roots, the recording when you can’t make it live, the use cases that take each prompt further, the bonus tool from each session, and The Tool Shed with every finished skill and prompt.',
  },
  {
    q: 'Annual or monthly?',
    a: 'Both include everything. Annual is $497 a year, monthly is $65 a month, and annual saves $283 a year compared to monthly. You pick at checkout.',
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
    q: 'What happens at renewal?',
    a: 'Your membership renews automatically at the end of each period, yearly or monthly, until you cancel. The full terms are in our Terms of Use, and they are the same at checkout.',
  },
  {
    q: 'How do I cancel?',
    a: 'From your account, any time. Cancelling stops future charges, and your access runs to the end of the period you already paid for. Payments are non-refundable, and there are no prorated refunds.',
  },
]

function PriceCard() {
  return (
    <div className="bg-[#FFFCF6] rounded-[10px] px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-brown/10">
      <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted mb-2">
        The membership
      </p>
      <p className="font-serif text-[24px] font-bold text-brown mb-2">The Canopy</p>
      <p className="text-[30px] font-semibold text-brown leading-[1.2]">
        $497 <span className="text-[15px] font-normal text-brown/60">a year</span>
      </p>
      <p className="text-[17px] font-medium text-brown/80 mt-1">
        or $65 <span className="text-[14px] font-normal text-brown/60">a month</span>
      </p>
      <p className="text-[13.5px] text-brown/80 bg-cream-dark rounded-[6px] px-3 py-2 mt-3 mb-4">
        Annual saves $283 a year compared to monthly. Pick either at checkout.
      </p>
      <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={`${btnPrimary} block w-full`}>
        Join The Canopy
      </a>
      {/* The one-line renewal notice. Auto-renewal has to be stated near the purchase
          button, the long version lives in the Terms. */}
      <p className="text-[12.5px] leading-[1.55] text-brown/60 mt-3">
        Auto-renews until you cancel. Details in the{' '}
        <Link href="/legal#terms" className="underline underline-offset-[2px] hover:text-brown">
          Terms
        </Link>
        .
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
        <div className="relative max-w-[1080px] mx-auto grid grid-cols-[1.3fr_1fr] gap-12 items-center max-md:grid-cols-1">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-6">
              Learn it with us
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(32px, 4.2vw, 50px)' }}
            >
              Everything we teach, in one <em className="text-orange italic">place.</em>
            </h1>
            <p className="text-[17px] font-light leading-[1.75] max-w-[520px]" style={{ color: 'rgba(253,246,236,0.72)' }}>
              The live session is free to watch. The membership is everything else.
            </p>

            {/* The three parts of the membership, as a quiet visual beside the price. */}
            <ul className="list-none m-0 p-0 mt-8 flex flex-wrap gap-3" aria-label="The three parts of The Canopy">
              {INSIDE.map(({ title, Icon }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-[8px] border border-cream/15 bg-cream/5 pl-3 pr-5 py-3"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-orange text-cream flex items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <span className="font-serif text-[17px] font-bold text-cream whitespace-nowrap">{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <PriceCard />
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="bg-cream py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className={band}>
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-4">
            What&rsquo;s inside
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            Everything inside, from <em className="text-orange italic">day one.</em>
          </h2>
          <p className="text-[15.5px] text-brown/85 leading-[1.8] mb-9 max-w-[70ch]">
            Join in month one or month nine and you get all of it, for as long as your membership
            is active.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-10 max-md:grid-cols-1 max-md:gap-7">
            {INSIDE.map(({ title, Icon, items }) => (
              <div key={title}>
                <h3 className="flex items-center gap-3 text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-3">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-orange text-cream flex items-center justify-center">
                    <Icon size={18} />
                  </span>
                  {title}
                </h3>
                <ul className="list-none m-0 p-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-[14.5px] font-medium text-brown/85 py-[7px] border-b border-brown/10 flex items-start gap-[11px] first:border-t first:border-brown/10"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* See one first. Swap the named session once Oct 14 airs. */}
          <div className="flex items-center justify-between gap-8 flex-wrap border-t border-brown/15 pt-8 max-md:flex-col max-md:items-start">
            <div className="max-w-[60ch]">
              <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-2">
                See one first
              </p>
              <p className="text-[15.5px] text-brown/85 leading-[1.7]">
                Every session airs live and free, once a month. The next one is{' '}
                <strong className="font-bold">The money coach</strong>, Wednesday, October 14 at
                1pm ET.
              </p>
            </div>
            <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={btnGhost}>
              Save your seat for Oct 14
            </a>
          </div>
        </div>
      </section>

      {/* ── IN THE LIBRARY ── */}
      <section className="bg-cream-dark py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            In the library
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Every session so far, <em className="text-orange italic">yours</em> from day one.
          </h2>
          <div className="border-t border-brown/15">
            {SESSIONS.map(({ date, title, blurb, aired }) => (
              <div
                key={date}
                className="grid grid-cols-[110px_1fr] gap-5 py-[18px] border-b border-brown/15 items-baseline max-md:grid-cols-1 max-md:gap-1"
              >
                <div>
                  <p className="text-[12.5px] font-bold tracking-[0.08em] uppercase text-orange">{date}</p>
                  <p className="text-[12px] text-brown/50 mt-[2px]">{aired ? 'Aired' : 'Next up'}</p>
                </div>
                <div>
                  <p className="font-serif text-[18.5px] font-bold text-brown">{title}</p>
                  <p className="text-[13.5px] text-brown/70 leading-[1.6] mt-1">{blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof section. Approved copy, do not edit the quotes. */}
      <section className="bg-cream py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[880px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Who we do this with
          </h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {[
              {
                quote: 'We are building the foundation that needs to be there for the growth for the company.',
                who: 'Oscar M., design firm founder',
              },
              {
                quote: 'He is a skilled facilitator and an engaging instructor.',
                who: 'Rachael Z., university faculty',
              },
            ].map(({ quote, who }, i) => (
              <div key={i} className="bg-[#FFFCF6] border-l-[3px] border-orange rounded-r-[6px] px-7 py-6 shadow-[0_2px_12px_rgba(59,30,8,0.05)]">
                <p className="font-serif italic text-[17px] text-brown leading-[1.6] mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] text-brown/55">{who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream-dark py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
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
            The Canopy is how you learn it with us. If you would rather hand it to us,{' '}
            <Link href={BACK_OFFICE_URL} className="text-orange underline underline-offset-[3px]">
              The Back Office
            </Link>{' '}
            runs finance and operations for creative businesses.
          </p>
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
            className="font-serif font-bold text-cream leading-[1.2] mb-9"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            One membership, everything <em className="italic text-[#FFEB99]">inside.</em>
          </h2>
          <a
            href={CANOPY_CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-brown text-[#FFEB99] text-[14px] font-bold tracking-[0.04em] px-9 py-[16px] rounded-full no-underline transition-all duration-200 hover:bg-brown-dark hover:-translate-y-px"
          >
            Join The Canopy
          </a>
        </div>
      </section>
    </>
  )
}
