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
    desc: "Self-paced and recorded. Start where you are, learn the fundamentals of putting AI to work in a real business, and walk out with a prompt library organized by what your business actually does. This is teaching with you doing the building.",
    cta: { label: 'See The Roots', href: ROOTS_URL, external: true },
  },
  {
    tag: 'Join the membership',
    name: 'The Canopy',
    desc: "A live session every month, the full library of everything we've built, and the prompts and summary pages that go with them. This is where operators who've decided they need a system come to build one, next to other people doing the same thing.",
    cta: { label: 'See The Canopy', href: CANOPY_URL, external: true },
  },
  {
    tag: 'Hire us',
    name: 'The Greenhouse',
    desc: 'For operators who want it built with them. Our team works alongside yours to design and build the systems, with advisory layered on top. We do it with you, and it starts with a conversation.',
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
              Live demos every month.
              <br />
              <em className="text-orange italic">Free,</em> always.
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
              Every month we take one real workflow from a design firm's back office and show you, live in 30 minutes, what an AI assistant can take off your plate. Come watch how it works, ask your questions, and leave with a clear picture of what's possible in your own business.
            </p>
            <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-9">
              The standing rhythm is one demo a month. Right now, during our interior design series, we're running two a month: five sessions across ten weeks, starting in August. If you run a design business, this one was built for you. If you run something else, the methodology travels.
            </p>
            <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={btnPrimary}>
              Register for the next demo
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

        {/* Cards */}
        <div className="max-w-[1080px] mx-auto grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {offerings.map(({ tag, name, desc, cta }) => (
            <div
              key={name}
              className="bg-cream rounded-[4px] px-9 py-10 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,30,8,0.1)] border-t-[3px] border-orange flex flex-col"
            >
              <p className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                {tag}
              </p>
              <h3 className="font-serif text-[28px] font-bold text-brown mb-[18px] leading-[1.15] whitespace-nowrap">
                {name}
              </h3>
              <p className="text-[14.5px] text-brown/72 leading-[1.7] mb-7 flex-1">{desc}</p>
              {cta.external ? (
                <a href={cta.href} target="_blank" rel="noopener" className={cardLink}>
                  {cta.label}&nbsp;→
                </a>
              ) : (
                <Link href={cta.href} className={cardLink}>
                  {cta.label}&nbsp;→
                </Link>
              )}
            </div>
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
            The methodology doesn't care what you sell. It cares how you run. Interior design is where we go deepest, because that's where we've spent the most time inside the back office.
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
            What we <em className="text-orange italic">won't</em> tell you.
          </h2>
          <p className="text-[16.5px] font-light leading-[1.85]" style={{ color: 'rgba(253,246,236,0.75)' }}>
            AI is the lever, not the product. Humans stay in the picture. We won't tell you to replace your team, we won't promise you'll hit seven figures, and we won't sell you the tool of the week. We don't make revenue guarantees or hours-saved guarantees, because we can't know your business before we've seen it. What we can do is teach you the methodology and show you the work we run inside real client back offices every day.
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
