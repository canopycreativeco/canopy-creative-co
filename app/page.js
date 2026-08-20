import Link from 'next/link'
import { DEMO_REGISTRATION_URL } from '@/lib/site'

export const metadata = {
  title: {
    absolute: 'Canopy Creative Co',
  },
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
  openGraph: {
    title: 'Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
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

const btnGhost =
  'inline-block bg-transparent text-[14px] font-medium tracking-[0.04em] px-8 py-[15px] border-[1.5px] rounded-full no-underline transition-all duration-200 hover:-translate-y-px'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen bg-brown flex flex-col justify-center pt-[120px] pb-20 px-[60px] relative overflow-hidden max-md:px-6 max-md:pt-[110px] max-md:pb-[70px]"
      >
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
          {/* Eyebrow */}
          <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-7">
            Teaching operators to run lean businesses with AI
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(34px, 4.8vw, 58px)' }}
          >
            Most operators are already doing everything right. They're just doing all of it{' '}
            <em className="text-orange italic">themselves.</em>
          </h1>

          {/* Subtext */}
          <p className="text-[18px] font-light max-w-[560px] leading-[1.75] mb-12" style={{ color: 'rgba(253,246,236,0.65)' }}>
            We teach operators how to design the systems that do the work, so the work only you can do finally gets the time it deserves. AI is the lever, not the product.
          </p>

          {/* Buttons */}
          <div className="flex gap-[14px] flex-wrap">
            <a
              href={DEMO_REGISTRATION_URL}
              target="_blank"
              rel="noopener"
              className={`${btnPrimary} text-center`}
            >
              Join the next live demo. It's free.
            </a>
            <Link
              href="/start-here"
              className={`${btnGhost} border-cream/25 text-cream/75 hover:border-cream/60 hover:text-cream text-center`}
            >
              See how we work together
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-9 left-[60px] flex flex-col items-start gap-[10px] max-md:left-6">
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange">
            Scroll to explore
          </span>
          {/* Arrowheads only, no shaft */}
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            aria-hidden="true"
            className="text-orange animate-bounce motion-reduce:animate-none ml-[2px]"
          >
            <path
              d="M4 5 L12 13 L20 5"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 14 L12 22 L20 14"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />
          </svg>
        </div>
      </section>

      {/* ── FREE DEMO ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto">
          {/* Header, full width */}
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Start Here
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            <em className="text-orange italic">Free</em> live demos every month.
          </h2>
          <p className="text-[16.5px] text-brown/80 leading-[1.8] max-w-[680px]">
            Every month we take one real workflow and build it in front of you, so you can see what
            AI takes off your plate. Watch, ask questions, and leave with a clear picture of what it
            does in a business like yours.
          </p>
          {/* CCC-EXPIRES-OCT14: after the series the cadence is the third Wednesday of every month. */}
          <p className="text-[13.5px] text-brown/60 leading-[1.7] mt-3 max-w-[680px]">
            One demo a month. During the interior design series we run every other week, through
            October 14.
          </p>

          {/* Look back, and look ahead */}
          <div className="grid grid-cols-2 gap-8 items-stretch mt-12 max-md:grid-cols-1 max-md:gap-6">

            {/* ── LEFT · WHAT AIRED ── */}
            <div className="flex flex-col border border-brown/15 rounded-lg bg-[#FFFCF6] p-6 shadow-[0_2px_12px_rgba(59,30,8,0.05)] max-md:p-5">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">
                Look back &middot; Aired August 19
              </p>
              <h3 className="font-serif font-bold text-brown text-[21px] leading-[1.3] mb-1">
                Profit Levers: am I charging enough
              </h3>
              <p className="text-[13px] text-brown/60 leading-[1.6] mb-4">
                Here&rsquo;s what the room saw.
              </p>

              {/* A peek at the dashboard built in the session */}
              <div className="rounded-lg border border-brown/10 bg-cream p-4 mb-4" aria-label="A preview of the pricing dashboard built in the session">
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

              <p className="text-[14.5px] text-brown/80 leading-[1.75] mb-3">
                A fictional Florida design studio with eight years of books. Claude read the whole
                workspace and turned it into a live pricing dashboard, then came the dials. Change a
                markup, change a fee, watch what it does to the year.
              </p>
              <p className="text-[13px] text-brown/60 leading-[1.6] mt-auto">
                The firm is fictional, so we could show everything with nothing to hide.
              </p>
            </div>

            {/* ── RIGHT · WHAT'S NEXT ── */}
            {/* CCC-EXPIRES-OCT14: swap to the next scheduled session once Sep 2 airs. */}
            <div className="flex flex-col border-2 border-orange rounded-lg bg-[#FFFCF6] p-6 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:p-5">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange mb-2">
                Coming up &middot; Wednesday, September 2 &middot; 1pm ET
              </p>
              <h3 className="font-serif font-bold text-brown text-[21px] leading-[1.3] mb-3">
                Where&rsquo;s my stuff: the order and PO tracker
              </h3>
              <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-6">
                Every order, every vendor, one view, so the answer is one search away. Built live,
                start to finish, with your questions along the way.
              </p>

              {/* Placeholder for the Sep 2 build graphic.
                  Deliberately abstract: bars, not numbers, so nothing here reads as data about a
                  session that has not aired. Swap this whole block for the real dashboard preview
                  once the build exists, matching the Aug 19 markup in the left column. */}
              <div
                className="relative rounded-lg border border-brown/10 bg-cream p-4 mb-6 overflow-hidden"
                role="img"
                aria-label="Placeholder for the September 2 build. The graphic is made after the session is built."
              >
                <div className="blur-[6px] opacity-70 select-none pointer-events-none" aria-hidden="true">
                  <div className="bg-white rounded-md border border-brown/10 overflow-hidden mb-3">
                    <div className="bg-orange h-[22px]" />
                    <div className="p-4">
                      {[['70%', '26%'], ['58%', '20%'], ['52%', '18%']].map(([w, v], i) => (
                        <div key={i} className="flex justify-between items-center gap-4 py-[5px]">
                          <span className="h-[9px] rounded-full bg-brown/20" style={{ width: w }} />
                          <span className="h-[9px] rounded-full bg-brown/30" style={{ width: v }} />
                        </div>
                      ))}
                      <div className="flex justify-between items-center gap-4 border-t border-brown/15 mt-2 pt-3">
                        <span className="h-[11px] rounded-full bg-brown/30 w-[54%]" />
                        <span className="h-[18px] rounded-full bg-brown/35 w-[28%]" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-md border border-brown/10 border-l-[3px] border-l-orange p-4 mb-3">
                    <span className="block h-[7px] rounded-full bg-orange/60 w-[26%] mb-2.5" />
                    <span className="block h-[10px] rounded-full bg-brown/25 w-[92%] mb-1.5" />
                    <span className="block h-[10px] rounded-full bg-brown/25 w-[64%]" />
                  </div>
                  <div className="bg-white rounded-md border border-brown/10 p-4">
                    <div className="flex justify-between items-center gap-4 mb-3">
                      <span className="h-[9px] rounded-full bg-brown/25 w-[46%]" />
                      <span className="h-[9px] rounded-full bg-brown/30 w-[14%]" />
                    </div>
                    <div className="relative h-[16px]">
                      <div className="absolute top-[4px] h-[8px] rounded-full bg-[#D5E7DC]" style={{ left: '72%', width: '15%' }} />
                      <div className="absolute top-[4px] h-[8px] rounded-full bg-[#F6DFC8]" style={{ left: '87%', right: 0 }} />
                      <div className="absolute top-[6.5px] h-[3px] rounded-full bg-brown/10 inset-x-0" />
                      <div className="absolute top-[6.5px] h-[3px] rounded-full bg-orange w-[38%]" />
                      <div className="absolute top-[1.5px] w-[13px] h-[13px] rounded-full bg-orange border-2 border-white" style={{ left: 'calc(38% - 6px)' }} />
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-2">
                      <span className="h-[14px] rounded-full bg-brown/15 w-[30%]" />
                      <span className="h-[8px] rounded-full bg-brown/20 w-[22%]" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-orange text-cream text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-[0_4px_18px_rgba(59,30,8,0.28)]">
                    Coming soon
                  </span>
                </div>
              </div>

              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                Also in the series
              </p>
              <div className="border-t border-brown/10">
                {[
                  { date: 'Sep 16', title: 'Project pulse: budget, status, and the client update' },
                  { date: 'Sep 30', title: 'The proposal and follow-up builder' },
                  { date: 'Oct 14', title: 'The money coach' },
                ].map(({ date, title }) => (
                  <div key={date} className="grid grid-cols-[64px_1fr] gap-3 py-[11px] border-b border-brown/10 items-baseline">
                    <span className="text-[11.5px] font-semibold tracking-[0.06em] uppercase text-orange">
                      {date}
                    </span>
                    <span className="text-[14px] text-brown/80 leading-[1.55]">{title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={`${btnPrimary} block text-center`}>
                  Save your seat for Sep 2
                </a>
                <p className="text-[12.5px] text-brown/60 leading-[1.6] mt-3 text-center">
                  Free to watch. Register and show up.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Who This Is For
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Built for operators who are done <em className="text-orange italic">stacking</em> tools.
          </h2>
          <p className="text-[16px] text-brown/75 leading-[1.8] mb-9">
            Most of the operators we work with run businesses between $250K and $3M. They've paid for ChatGPT or Claude, stacked two or three more tools on top, and worked out that none of it added up to a system. They aren't looking to replace their team with AI and they aren't looking for the tool of the week. They want a system, not another tool.
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

      {/* ── WHAT WE DO ── */}
      <section className="bg-brown py-[100px] px-[60px] relative overflow-hidden max-md:py-[70px] max-md:px-6">
        {/* Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(204,78,0,0.12) 0%, transparent 60%)' }}
        />
        <div className="max-w-[720px] mx-auto relative">
          <h2
            className="font-serif font-bold text-cream leading-[1.25] mb-8"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            What we <em className="text-orange italic">do.</em>
          </h2>
          <p className="text-[16.5px] font-light leading-[1.85]" style={{ color: 'rgba(253,246,236,0.75)' }}>
            AI is the lever, not the product. Humans stay in the picture. We teach the methodology and show you the work we run inside real client back offices every day. We won't tell you to replace your team, promise you seven figures, or sell you the tool of the week.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange py-[90px] px-[60px] text-center relative overflow-hidden max-md:px-6">
        {/* Highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[600px] mx-auto">
          <h2
            className="font-serif font-bold text-cream leading-[1.2] tracking-[-0.01em] mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}
          >
            Start with a demo.
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mb-10 text-balance" style={{ color: 'rgba(253,246,236,0.75)' }}>
            If you're the bottleneck in your own business and you know it, come to the next demo. It's free, and it's the clearest picture you'll get of what AI can do in a business like yours.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <a
              href={DEMO_REGISTRATION_URL}
              target="_blank"
              rel="noopener"
              className="inline-block bg-cream text-orange text-[14px] font-bold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#f0e8d6] hover:-translate-y-px w-[220px] text-center"
            >
              Join the next demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
