import Link from 'next/link'
import { DEMO_REGISTRATION_URL, ROOTS_URL, CANOPY_URL } from '@/lib/site'
import SendMessageButton from '@/components/MessageModal'

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
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px'

const btnGhost =
  'inline-block bg-transparent text-[14px] font-medium tracking-[0.04em] px-8 py-[15px] border-[1.5px] rounded-[3px] no-underline transition-all duration-200 hover:-translate-y-px'

const cardLink =
  'text-[13px] font-semibold text-orange no-underline tracking-[0.04em] flex items-center gap-2 transition-[gap] duration-200 hover:gap-4'

const offerings = [
  {
    tag: 'Take a course',
    name: 'The Roots',
    desc: "Learn the fundamentals of putting AI to work in a real business. This is teaching with you doing the building.",
    bullets: ['Self-paced video course, on your schedule', 'The four layers: prompt, skill, project, automation', '12 months of access'],
    art: { src: '/art/tree-roots.png', alt: 'Illustrated sapling with visible roots' },
    cta: { label: 'See The Roots', href: ROOTS_URL, external: false },
  },
  {
    tag: 'Join the membership',
    name: 'The Canopy',
    desc: "This is where operators who've decided they need a system come to build one, next to other people doing the same thing.",
    bullets: ['One new build session every month', "Every session's starter prompt, yours to run", 'The full library included from day one'],
    art: { src: '/art/tree-canopy.png', alt: 'Illustrated tree with a full green canopy' },
    cta: { label: 'See The Canopy', href: CANOPY_URL, external: false },
  },
  {
    tag: 'Hire us',
    name: 'The Greenhouse',
    desc: 'For operators who want it built with them. Our team works alongside yours to design and build the systems, with advisory layered on top. We do it with you, and it starts with a conversation.',
    bullets: ['AI integrated into your back office, built together', 'One department at a time', 'Starts with a conversation'],
    art: { src: '/art/greenhouse.png', alt: 'Illustrated greenhouse full of plants' },
    cta: { label: 'Start a conversation', href: '/contact', external: false },
  },
]

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
              href="/work-with-us"
              className={`${btnGhost} border-cream/25 text-cream/75 hover:border-cream/60 hover:text-cream text-center`}
            >
              See how we work together
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-9 left-[60px] text-[12px] font-medium tracking-[0.14em] uppercase max-md:left-6"
          style={{ color: 'rgba(253,246,236,0.3)' }}
        >
          Scroll to explore
        </div>
      </section>

      {/* ── FREE DEMO ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
          {/* Left */}
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
              Start Here
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              <em className="text-orange italic">Free</em> live demos every month.
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
              Every month we take one real workflow from a business and show you what an AI assistant can take off your plate. Come watch how it works, ask your questions, and leave with a clear picture of what's possible in your own business.
            </p>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-6">
              The standing rhythm is one demo a month. Right now, during our interior design series, we're running every other week: five sessions across ten weeks, starting in August. If you run a design business, this one was built for you. If you run something else, the methodology travels.
            </p>

            {/* Next session: Profit Levers */}
            <div className="border border-brown/15 rounded-lg bg-white/60 p-6 mb-9">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange/85 mb-2">
                Next session &middot; Wednesday, August 19 &middot; 1pm ET
              </p>
              <p className="font-serif font-bold text-brown text-[22px] leading-[1.3] mb-4">
                Profit Levers: am I charging enough?
              </p>

              {/* A peek at the dashboard, live HTML in the teaser's visual language */}
              <div className="rounded-lg border border-brown/10 bg-cream p-4 mb-4" aria-label="A preview of the pricing dashboard built in the session">
                <div className="bg-white rounded-md border border-brown/10 p-4 mb-3">
                  <div className="flex justify-between gap-4 text-[12.5px] text-brown/85 py-[3px]">
                    <span>What clients paid you</span><span className="font-semibold">$2,901,645</span>
                  </div>
                  <div className="flex justify-between gap-4 text-[12px] text-brown/60 py-[3px] pl-3">
                    <span>less what you paid furniture vendors</span><span>&minus;$1,600,000</span>
                  </div>
                  <div className="flex justify-between gap-4 text-[12px] text-brown/60 py-[3px] pl-3">
                    <span>less what you paid for freight and receiving</span><span>&minus;$85,000</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-4 border-t border-brown/15 mt-2 pt-2.5">
                    <span className="text-[13px] font-semibold text-brown">What you keep before overhead</span>
                    <span className="font-serif font-bold text-brown text-[21px]">$996,645</span>
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

              <p className="text-[15.5px] text-brown/80 leading-[1.75] mb-3">
                We built a fictional Tampa design studio with eight years of books, resembling many interior design firms we&rsquo;ve seen and helped, and you&rsquo;ll watch Claude read the whole workspace and turn it into a live pricing dashboard: where the money went, what the numbers say in plain words, one move worth making first, and dials you can use to map out the impact of real, tangible changes you can make to your business.
              </p>
              <p className="text-[13px] text-brown/60 leading-[1.6]">
                You leave with the starter prompt the whole build begins from, ready to point at your own numbers. The demo firm is fictional, so we can show you everything with nothing to hide.
              </p>
            </div>

            <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={btnPrimary}>
              Save your seat for August 19
            </a>
          </div>
        </div>
      </section>

      {/* ── THREE WAYS TO WORK TOGETHER ── */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        {/* Header */}
        <div className="max-w-[1080px] mx-auto mb-[60px]">
          <h2
            className="font-serif font-bold text-brown leading-[1.2] tracking-[-0.01em] max-w-[480px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Three ways to work <em className="text-orange italic">together.</em>
          </h2>
        </div>

        {/* Cards: whole tile is the link; subgrid keeps bullets and CTAs aligned across columns */}
        <div className="max-w-[1080px] mx-auto grid grid-cols-3 gap-x-6 gap-y-0 [grid-template-rows:repeat(6,auto)] max-md:grid-cols-1 max-md:gap-y-6 max-md:[grid-template-rows:none]">
          {offerings.map(({ tag, name, desc, bullets, art, cta }) => (
            <Link
              key={name}
              href={cta.href}
              className="row-span-6 grid [grid-template-rows:subgrid] max-md:flex max-md:flex-col bg-cream rounded-[4px] px-9 py-10 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,30,8,0.1)] border-t-[3px] border-orange no-underline"
            >
              <p className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                {tag}
              </p>
              <h3 className="font-serif text-[28px] font-bold text-brown mb-4 leading-[1.15] whitespace-nowrap">
                {name}
              </h3>
              <img src={art.src} alt={art.alt} className="h-[160px] w-auto mx-auto mb-5 self-center" />
              <p className="text-[14.5px] text-brown/72 leading-[1.7] mb-5">{desc}</p>
              <ul className="list-none m-0 p-0 mb-7">
                {bullets.map((b) => (
                  <li key={b} className="text-[13.5px] font-medium text-brown/85 py-[7px] flex items-start gap-[10px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0 mt-[7px]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className={cardLink}>
                {cta.label}&nbsp;→
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
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

      {/* ── WHAT WE WON'T TELL YOU ── */}
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
            What we <em className="text-orange italic">can</em> do.
          </h2>
          <p className="text-[16.5px] font-light leading-[1.85]" style={{ color: 'rgba(253,246,236,0.75)' }}>
            AI is the lever, not the product. Humans stay in the picture. What we can do is teach you the methodology and show you the work we run inside real client back offices every day. What we won't do is tell you to replace your team, promise you'll hit seven figures, or sell you the tool of the week. We don't make revenue guarantees or hours-saved guarantees, because we can't know your business before we've seen it.
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
          <p className="text-[17px] font-light leading-[1.7] mb-10" style={{ color: 'rgba(253,246,236,0.75)' }}>
            If you're the bottleneck in your own business and you know it, come to the next demo. It's free, and it's the clearest picture you'll get of what AI can do in a business like yours.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <a
              href={DEMO_REGISTRATION_URL}
              target="_blank"
              rel="noopener"
              className="inline-block bg-cream text-orange text-[14px] font-bold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#f0e8d6] hover:-translate-y-px w-[220px] text-center"
            >
              Join the next demo
            </a>
            <SendMessageButton className="inline-block bg-transparent text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] border-[1.5px] border-cream/40 rounded-[3px] transition-all duration-200 hover:border-cream/85 hover:-translate-y-px w-[220px] text-center cursor-pointer">
              Send us a message
            </SendMessageButton>
          </div>
        </div>
      </section>
    </>
  )
}
