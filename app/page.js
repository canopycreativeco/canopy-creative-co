import Link from 'next/link'

export const metadata = {
  title: {
    absolute: 'Canopy Creative Co',
  },
  description: 'Your back office, finally working for you. Canopy Creative Co provides on-demand bookkeeping, financial advisory, and operations support for creative businesses across the US.',
  openGraph: {
    title: 'Canopy Creative Co',
    description: 'Your back office, finally working for you. Canopy Creative Co provides on-demand bookkeeping, financial advisory, and operations support for creative businesses across the US.',
    url: 'https://canopycreativeco.com',
    siteName: 'Canopy Creative Co',
  },
}

/* ── Shared button styles ── */
const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px'

const btnGhost =
  'inline-block bg-transparent text-[14px] font-medium tracking-[0.04em] px-8 py-[15px] border-[1.5px] rounded-[3px] no-underline transition-all duration-200 hover:-translate-y-px'

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

        <div className="relative max-w-[800px]">
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-orange mb-7">
            Operations &amp; Finance Consulting for Creative Businesses
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-cream leading-[1.12] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}
          >
            Your back office,
            <br />
            <em className="text-orange italic">finally</em> working
            <br />
            for you.
          </h1>

          {/* Subtext */}
          <p className="text-[18px] font-light max-w-[520px] leading-[1.75] mb-12" style={{ color: 'rgba(253,246,236,0.65)' }}>
            Wherever you are — just starting out, scaling fast, or ready to get serious about your numbers — we build the financial and operational infrastructure that lets your creative business actually run.
          </p>

          {/* Buttons */}
          <div className="flex gap-[14px] flex-wrap">
            <Link href="/contact" className={`${btnPrimary} w-[220px] text-center`}>
              Book a discovery call
            </Link>
            <Link
              href="/services"
              className={`${btnGhost} border-cream/25 text-cream/75 hover:border-cream/60 hover:text-cream w-[220px] text-center`}
            >
              See our services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-9 left-[60px] text-[11px] font-medium tracking-[0.14em] uppercase max-md:left-6"
          style={{ color: 'rgba(253,246,236,0.3)' }}
        >
          Scroll to explore
        </div>
      </section>

      {/* ── POSITIONING STRIP ── */}
      <div className="bg-orange py-5 px-[60px] flex flex-col items-center gap-3 max-md:px-6">
        {[
          ['Interior Design Studios', 'Creative Agencies', 'Artists & Makers'],
          ['Independent Creatives', 'Creative Service Businesses'],
        ].map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-center gap-10 flex-wrap justify-center max-md:gap-5">
            {row.map((label, i) => (
              <span key={label} className="flex items-center gap-10 max-md:gap-5">
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-cream/90">
                  {label}
                </span>
                {i < row.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-cream/40 shrink-0" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ── INTRO ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[1fr_1.4fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">
          {/* Left */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
              Who We Are
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Not your average
              <br />
              <em className="text-orange italic">consulting firm.</em>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {[
              "Most creative business owners didn't start their business to manage spreadsheets, reconcile accounts, or figure out which software actually talks to each other. That's where we come in.",
              'Canopy Creative Co is an operations and finance consultancy built specifically for creative businesses. We cover the full back office — from keeping your books clean and your taxes filed, to building the systems and infrastructure that let you grow without the chaos.',
              'Hourly, on-demand, and always transparent. No bloated retainers, no mystery pricing, no surprise scope creep. Just the work your business actually needs.',
            ].map((text) => (
              <p key={text.slice(0, 20)} className="text-[16.5px] text-brown/80 leading-[1.8]">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE TIER CARDS ── */}
      <section className="bg-cream-dark py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        {/* Header */}
        <div className="max-w-[960px] mx-auto flex items-end justify-between gap-10 mb-[60px] max-md:flex-col max-md:items-start max-md:gap-4">
          <h2
            className="font-serif font-bold text-brown leading-[1.2] tracking-[-0.01em] max-w-[400px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Three ways we can work together.
          </h2>
          <Link
            href="/services"
            className="text-[13px] font-semibold text-orange no-underline tracking-[0.04em] whitespace-nowrap flex items-center gap-2 transition-[gap] duration-200 hover:gap-4"
          >
            View all services &nbsp;→
          </Link>
        </div>

        {/* Cards */}
        <div className="max-w-[960px] mx-auto grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {[
            {
              tag: 'Foundation',
              name: 'The Roots',
              desc: 'The ongoing fundamentals that keep your business running day to day — so you can stop doing it yourself.',
              services: ['Bookkeeping', 'Sales tax filing', 'Payroll support', '1099 preparation and filing', 'Ongoing systems operation'],
            },
            {
              tag: 'Advisory',
              name: 'The Canopy',
              desc: 'Financial clarity that protects and guides everything underneath — so every decision is grounded in the full picture.',
              services: ['Financial planning & analysis', 'Cash flow analysis', 'Budgeting and forecasting', 'Project & product profitability', 'Finance & accounting coaching'],
            },
            {
              tag: 'Operations & Systems',
              name: 'The Build',
              desc: "For businesses that need the infrastructure to actually operate — whether you're starting from scratch or outgrowing what you have.",
              services: ['Software selection & implementation', 'Workflow and process design', 'Business launch support'],
            },
          ].map(({ tag, name, desc, services }) => (
            <div
              key={name}
              className="bg-cream rounded-[4px] px-9 py-10 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,30,8,0.1)] border-t-[3px] border-orange"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                {tag}
              </p>
              <h3 className="font-serif text-[28px] font-bold text-brown mb-[18px] leading-[1.15]">
                {name}
              </h3>
              <p className="text-[14.5px] text-brown/72 leading-[1.7] mb-7">{desc}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {services.map((s) => (
                  <li key={s} className="text-[13px] text-brown/65 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange/60 shrink-0" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-brown py-[100px] px-[60px] relative overflow-hidden max-md:py-[70px] max-md:px-6">
        {/* Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(204,78,0,0.12) 0%, transparent 60%)' }}
        />

        <div className="max-w-[960px] mx-auto relative">
          <p className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            How It Works
          </p>
          <h2
            className="font-serif font-bold text-cream leading-[1.25] mb-16 max-w-[480px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            From first conversation to fully supported.
          </h2>

          <div className="grid grid-cols-3 gap-0 relative max-md:grid-cols-2 max-md:gap-10">
            {/* Connecting line (desktop only) */}
            <div
              className="absolute top-[22px] left-5 right-5 h-px pointer-events-none max-md:hidden"
              aria-hidden="true"
              style={{ background: 'rgba(253,246,236,0.1)' }}
            />

            {[
              {
                n: '1',
                title: 'Discovery Call',
                body: "A 30-minute conversation to understand where you are, what's not working, and where you want to go.",
              },
              {
                n: '2',
                title: 'Scope & Agreement',
                body: "We define exactly what we're doing together, agree on rates, and get everything in writing before work begins.",
              },
              {
                n: '3',
                title: 'Active Support',
                body: 'Ongoing, on-demand work billed hourly and transparently — with room to expand as your business grows.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="pr-6 max-md:pr-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-serif text-[15px] font-bold text-orange mb-6 relative z-[1]"
                  style={{ background: '#3B1E08', border: '1.5px solid rgba(204,78,0,0.3)' }}
                >
                  {n}
                </div>
                <h3 className="font-serif text-[17px] font-bold text-cream mb-[10px] leading-[1.3]">
                  {title}
                </h3>
                <p className="text-[13.5px] font-light leading-[1.65]" style={{ color: 'rgba(253,246,236,0.5)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[70px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[1.2fr_1fr] gap-[80px] items-center max-md:grid-cols-1 max-md:gap-12">
          {/* Left */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
              Who We Work With
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] mb-6"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Built for creative businesses
              <br />
              <em className="text-orange italic">at every stage.</em>
            </h2>
            <p className="text-[16px] text-brown/75 leading-[1.8] mb-9">
              We work with studios, agencies, independent creatives, and the vendors and collaborators in their world. If you run a creative business and your back office feels like a second job, you're in the right place.
            </p>
            <ul className="list-none m-0 p-0">
              {[
                'Interior design studios and firms',
                'Creative agencies and brand studios',
                'Artists, photographers, and makers',
                'Musicians and entertainment businesses',
                'Vendors and service providers in the creative space',
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
          </div>

          {/* Right — testimonial card */}
          <div
            className="bg-brown rounded-[4px] px-11 py-12 relative overflow-hidden border-t-[3px] border-orange"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-orange/85 mb-5">
              Why clients choose us
            </p>
            <p className="font-serif text-[20px] italic text-cream/90 leading-[1.6] mb-7">
              "Finally a company that doesn't make me feel like I'm just a number. I get exactly what I need, when I need it — nothing more, nothing less."
            </p>
            <p className="text-[13px] font-medium tracking-[0.04em]" style={{ color: 'rgba(253,246,236,0.4)' }}>
              — A Canopy Creative Co client
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            Wherever you are, we've got you covered.
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mb-10" style={{ color: 'rgba(253,246,236,0.75)' }}>
            Book a free discovery call and we'll figure out the right fit together. No pressure, no commitment — just a conversation.
          </p>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-cream text-orange text-[14px] font-bold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#f0e8d6] hover:-translate-y-px w-[220px] text-center"
            >
              Book a discovery call
            </Link>
            <a
              href="mailto:hello@canopycreativeco.com"
              className="inline-block bg-transparent text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] border-[1.5px] border-cream/40 rounded-[3px] no-underline transition-all duration-200 hover:border-cream/85 hover:-translate-y-px w-[220px] text-center"
            >
              Send us a message
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
