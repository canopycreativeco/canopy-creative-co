import Image from 'next/image'
import Link from 'next/link'
import { CANOPY_CHECKOUT_URL, BACK_OFFICE_URL } from '@/lib/site'
import { nextSessionLabel } from '@/lib/session'
import { HOME_FAQS } from '@/lib/faqs'
import HomeSession from '@/components/HomeSession'
import InsideTabs from '@/components/InsideTabs'
import FaqList from '@/components/FaqList'

export const metadata = {
  title: {
    absolute: 'Canopy Creative Co',
  },
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
  openGraph: {
    title: 'Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
    url: 'https://www.canopycreativeco.com',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com',
  },
}

/* ── Shared button styles ── */
const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px'

const eyebrow = 'text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5'
const h2Size = { fontSize: 'clamp(26px, 3.5vw, 38px)' }

/* What's inside, as the hero checklist. Same parts, same order as the cards below. */
const HERO_LIST = [
  'The Roots, the foundations track',
  'A new session every month, free to watch the week it comes out',
  'The Session Library, with every past session',
  'Questions anytime, answered by our team',
  'The Tool Shed, 25+ finished skills and prompts',
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-[5px] text-orange">
      <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-brown pt-[150px] pb-[96px] px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[110px] max-md:pb-[70px]">
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(204,78,0,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(204,78,0,0.1) 0%, transparent 55%)',
          }}
        />
        {/* Decorative large C */}
        <div
          className="absolute right-[-30px] top-1/2 -translate-y-1/2 font-bold leading-none pointer-events-none select-none max-md:hidden"
          aria-hidden="true"
          style={{
            fontFamily: "'Alta', serif",
            fontSize: 'clamp(300px, 35vw, 520px)',
            color: 'rgba(204,78,0,0.06)',
          }}
        >
          C
        </div>

        <div className="relative max-w-[860px]">
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-7">
            Teaching operators to run lean businesses with AI
          </p>

          <h1
            className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(34px, 4.8vw, 58px)' }}
          >
            Most operators are already doing everything right. They&rsquo;re just doing all of it{' '}
            <em className="text-orange italic">themselves.</em>
          </h1>

          <p className="text-[18px] font-light max-w-[560px] leading-[1.75] mb-8" style={{ color: 'rgba(253,246,236,0.65)' }}>
            We teach operators how to design the systems that do the work, so the work only you can do finally gets the time it deserves. AI is the lever, not the product.
          </p>

          <ul className="list-none m-0 p-0 mb-10 max-w-[560px]" aria-label="What's inside The Canopy">
            {HERO_LIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15.5px] leading-[1.6] py-[5px]" style={{ color: 'rgba(253,246,236,0.85)' }}>
                <Check />
                {item}
              </li>
            ))}
          </ul>

          <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={`${btnPrimary} text-center`}>
            Join The Canopy
          </a>
        </div>
      </section>

      {/* ── THIS MONTH'S SESSION ── the video during the free week, the signup the rest of the month */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <HomeSession initialLabel={nextSessionLabel()} />
        </div>
      </section>

      {/* Soft hairline between the two cream sections above the tan run */}
      <div className="bg-cream px-[60px] max-md:px-6" aria-hidden="true">
        <div
          className="max-w-[1080px] mx-auto h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(59,30,8,0.18), transparent)' }}
        />
      </div>

      {/* ── WHAT'S INSIDE ── cream field so the tan panel reads as a filled card */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className={eyebrow}>What&rsquo;s inside The Canopy</p>
          <h2 className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5" style={h2Size}>
            One membership, everything <em className="text-orange italic">inside.</em>
          </h2>
          {/* The approved positioning line. Word for word, do not edit. */}
          <p className="text-[16.5px] text-brown/80 leading-[1.8] max-w-[680px] mb-10">
            Inside The Canopy, we go deeper than one-off prompts. We build AI systems with you,
            wired into how your business runs, so the repeat work stops landing on your desk and
            you get back to the work only you can do.
          </p>
          <InsideTabs />
        </div>
      </section>

      {/* ── WHAT A SESSION BUILDS ── the Aug 19 build, as the picture of what a session is */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-[1fr_1.05fr] gap-14 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className={eyebrow}>What a session builds</p>
            <h2 className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5" style={h2Size}>
              Profit Levers: am I <em className="text-orange italic">charging enough</em>
            </h2>
            <p className="text-[16px] text-brown/80 leading-[1.8] mb-4">
              A fictional Florida design studio with eight years of books. Claude read the whole
              workspace and turned it into a live pricing dashboard, then came the dials. Change a
              markup, change a fee, watch what it does to the year.
            </p>
            <p className="text-[13.5px] text-brown/60 leading-[1.6]">
              From the August 19 session. The firm is fictional, so we could show everything with
              nothing to hide.
            </p>
          </div>

          {/* A peek at the dashboard built in the session */}
          <div className="rounded-lg border border-brown/10 bg-[#FFFCF6] p-5 shadow-[0_6px_26px_rgba(59,30,8,0.10)]" aria-label="A preview of the pricing dashboard built in the session">
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
              <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-orange mb-1.5">Finding 1 of 3</p>
              <p className="font-serif font-bold text-brown text-[15.5px] leading-[1.35]">
                You scaled the team and the volume. You never scaled the pricing.
              </p>
            </div>
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
      </section>

      {/* ── PROOF ── Approved copy, do not edit the quotes. Same two as The Canopy page. */}
      <section className="bg-cream py-[90px] px-[60px] max-md:py-[64px] max-md:px-6">
        <div className="max-w-[880px] mx-auto">
          <p className={eyebrow}>In their words</p>
          <h2 className="font-serif font-bold text-brown leading-[1.25] mb-10" style={h2Size}>
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

      {/* ── WHY CANOPY ── founder story. DRAFT copy for Dave to review, facts from the About page. */}
      <section className="bg-brown py-[100px] px-[60px] relative overflow-hidden max-md:py-[70px] max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 15% 20%, rgba(204,78,0,0.14) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[960px] mx-auto grid grid-cols-[280px_1fr] gap-[70px] items-center max-md:grid-cols-1 max-md:gap-10">
          <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden max-md:max-w-[260px]">
            <Image
              src="/dave-about.jpeg"
              alt="Dave Altshul, Founder of Canopy Creative Co"
              fill
              sizes="(max-width: 768px) 260px, 280px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange mb-5">
              Why Canopy Creative Co
            </p>
            <h2 className="font-serif font-bold text-cream leading-[1.25] mb-7" style={h2Size}>
              Built from the back office <em className="text-orange italic">out.</em>
            </h2>
            <div className="space-y-5 text-[16px] font-light leading-[1.8]" style={{ color: 'rgba(253,246,236,0.75)' }}>
              <p>
                Before Canopy Creative Co, Dave Altshul spent years in corporate finance and
                internal audit, including a seat on the leadership team of a Fortune 500 media
                company&rsquo;s global compliance program, where he helped take it from manual and
                fragmented to streamlined and automated.
              </p>
              <p>
                Then he started working inside design firms. Same kind of
                problems, a much smaller team, and nobody to hand the repeat work to. The owner
                was doing all of it.
              </p>
              <p>
                So Canopy Creative Co does both. We run the back office for creative businesses every day, and
                The Canopy teaches the same method to operators who want to build it themselves.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-[14px] font-semibold text-[#FFEB99] underline underline-offset-[3px] transition-opacity duration-200 hover:opacity-80"
            >
              More about Dave
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className={eyebrow}>Who This Is For</p>
          <h2 className="font-serif font-bold text-brown leading-[1.25] mb-6" style={h2Size}>
            Built for operators who are done <em className="text-orange italic">stacking</em> tools.
          </h2>
          <p className="text-[16px] text-brown/75 leading-[1.8] mb-9">
            Most of the operators we work with run businesses between $250K and $3M. They&rsquo;ve paid for ChatGPT or Claude, stacked two or three more tools on top, and worked out that none of it added up to a system. They aren&rsquo;t looking to replace their team with AI and they aren&rsquo;t looking for the tool of the week. They want a system, not another tool.
          </p>
          <ul className="list-none m-0 p-0 mb-9">
            {[
              'Interior design firms',
              'Professional services',
              'Trades and home services',
              'Creative and marketing businesses',
              'Ecommerce operators',
              'Coaches',
              'Bootstrapped software founders',
            ].map((item) => (
              <li
                key={item}
                className="text-[15px] font-medium text-brown py-[14px] border-b border-brown/10 flex items-center gap-[14px] first:border-t first:border-brown/10"
              >
                <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-brown/75 leading-[1.8]">
            The methodology carries across business types.
          </p>
        </div>
      </section>

      {/* ── FAQ ── the price-free questions from The Canopy page (lib/faqs.js) */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[760px] mx-auto">
          <p className={eyebrow}>Questions, Answered</p>
          <h2 className="font-serif font-bold text-brown leading-[1.25] mb-10" style={h2Size}>
            Before you <em className="text-orange italic">join.</em>
          </h2>
          <FaqList items={HOME_FAQS} />
          <p className="text-[16px] text-brown/75 leading-[1.7] mt-12 text-center max-w-[60ch] mx-auto">
            Rather hand it to us?{' '}
            <Link href={BACK_OFFICE_URL} className="text-orange underline underline-offset-[3px]">
              The Back Office
            </Link>{' '}
            runs finance and operations for creative businesses.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO + FINAL CTA ── */}
      <section className="bg-orange py-[100px] px-[60px] relative overflow-hidden max-md:py-[70px] max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        />
        <div className="max-w-[720px] mx-auto relative text-center">
          <h2 className="font-serif font-bold text-cream leading-[1.25] mb-8" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            What we <em className="italic text-[#FFEB99]">do.</em>
          </h2>
          <p className="text-[16.5px] font-light leading-[1.85] mb-10" style={{ color: 'rgba(255,225,196,0.95)' }}>
            AI is the lever, not the product. Humans stay in the picture. We teach the methodology and show you the work we run inside real client back offices every day. We won&rsquo;t tell you to replace your team, promise you seven figures, or sell you the tool of the week.
          </p>
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
