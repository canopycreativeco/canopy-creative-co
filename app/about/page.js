import Image from 'next/image'
import Link from 'next/link'
import SendMessageButton from '@/components/MessageModal'

export const metadata = {
  title: 'About',
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
  openGraph: {
    title: 'About | Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
    url: 'https://www.canopycreativeco.com/about',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-brown pt-[100px] pb-[90px] px-[60px] relative overflow-hidden max-md:pt-[80px] max-md:pb-[60px] max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 90% 10%, rgba(204,78,0,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 90%, rgba(204,78,0,0.08) 0%, transparent 55%)',
          }}
        />
        <div className="relative max-w-[960px] mx-auto grid grid-cols-2 gap-[80px] items-end max-md:grid-cols-1 max-md:gap-8">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange mb-6">
              About
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              From Fortune&nbsp;500
              <br />
              to <em className="text-orange italic">your</em> back office.
            </h1>
          </div>
          <div className="pb-2">
            <p
              className="text-[17px] font-light leading-[1.75]"
              style={{ color: 'rgba(253,246,236,0.65)' }}
            >
              The same rigor applied to million-dollar compliance programs, now applied to the
              operators who keep real businesses running efficiently and cost effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO + PHOTO ── */}
      <section className="bg-cream py-[100px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-[320px_1fr] gap-[80px] items-start max-md:grid-cols-1">

          {/* PHOTO BLOCK */}
          <div className="sticky top-[88px] max-md:static">
            <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden">
              <Image
                src="/dave-about.jpeg"
                alt="Dave Altshul, Founder of Canopy Creative Co"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mt-5">
              <p className="font-serif text-[18px] font-bold text-brown mb-1">Dave Altshul</p>
              <p className="text-[13px] text-muted font-medium tracking-[0.04em]">
                Founder, Canopy Creative Co
              </p>
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="flex flex-col gap-16">

            {/* THE BACKGROUND */}
            <div>
              <p
                className="text-[11.5px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
                style={{ opacity: 0.85 }}
              >
                The Background
              </p>
              <h2
                className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                Built at the highest level.
                <br />
                <em className="text-orange italic">Applied where it matters.</em>
              </h2>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 gap-px rounded-[4px] overflow-hidden mb-7 max-md:grid-cols-1"
                style={{ background: 'rgba(59,30,8,0.1)' }}
              >
                {[
                  {
                    number: 'Fortune 500',
                    label: 'Scale of organization\nDave operated in',
                  },
                  {
                    number: '35,000+',
                    label: 'Employees in the global organization\nDave supported',
                  },
                  {
                    number: '$39B+',
                    label: 'Annual revenue of the global media\ncompany Dave served',
                  },
                ].map(({ number, label }) => (
                  <div key={number} className="bg-cream-dark py-7 px-4 text-center">
                    <p className="font-serif text-[22px] font-bold text-orange mb-[6px] whitespace-nowrap">
                      {number}
                    </p>
                    <p
                      className="text-[12px] text-muted font-medium tracking-[0.04em] leading-[1.4] whitespace-pre-line"
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                Before Canopy Creative Co, Dave Altshul spent years in corporate finance and
                internal audit at the highest level, solving operational problems for organizations
                with no room for error.
              </p>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                Dave's specialty, then and now: take a complex process, identify efficiencies, and
                streamline it with as little disruption to the business as possible. At a Fortune
                500 media company, that meant leading the global compliance program's shift from
                manual and fragmented to streamlined and automated. The scale was different. The
                method is the same one he brings to his clients' businesses.
              </p>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                Dave's financial foundation came earlier, in a leadership development program at a
                leading financial data firm.
              </p>
            </div>

            {/* DIVIDER */}
            <div
              className="h-px"
              style={{ background: 'linear-gradient(to right, rgba(59,30,8,0.12), transparent)' }}
            />

            {/* THE APPROACH */}
            <div>
              <p
                className="text-[11.5px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
                style={{ opacity: 0.85 }}
              >
                The Approach
              </p>
              <h2
                className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                Systems thinking,
                <br />
                <em className="text-orange italic">built in.</em>
              </h2>
              <p className="text-[16px] text-brown leading-[1.85] mb-6" style={{ opacity: 0.82 }}>
                Dave holds a Project Management Professional (PMP) certification, a deliberate
                investment in knowing how implementations actually succeed. When you're building a
                business's operational infrastructure, what connects to what, and in what order,
                matters enormously. It shows up in every engagement.
              </p>

              {/* Pull quote */}
              <div
                className="bg-brown rounded-[4px] px-11 py-10 relative overflow-hidden"
                style={{ borderTop: '3px solid #CC4E00' }}
              >
                <span
                  className="absolute top-[-20px] right-8 font-serif leading-none pointer-events-none select-none"
                  aria-hidden="true"
                  style={{ fontSize: '160px', color: 'rgba(204,78,0,0.08)' }}
                >
                  &ldquo;
                </span>
                <p
                  className="font-serif text-[19px] italic text-cream leading-[1.65] relative"
                  style={{ opacity: 0.92 }}
                >
                  Dave approaches every engagement the way an architect approaches a building:
                  foundation first. Before anything gets built or changed, he maps what exists,
                  identifies what's missing, and determines what needs to happen in what order.
                  Nothing gets patched. Everything gets built with intention.
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div
              className="h-px"
              style={{ background: 'linear-gradient(to right, rgba(59,30,8,0.12), transparent)' }}
            />

            {/* THE MOVE */}
            <div>
              <p
                className="text-[11.5px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
                style={{ opacity: 0.85 }}
              >
                The Move
              </p>
              <h2
                className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                A decade in New York.
                <br />
                <em className="text-orange italic">A deliberate next chapter.</em>
              </h2>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                Dave spent the better part of a decade in New York City, learning from some of the
                best operators the city has to offer, and building a career that looked impressive
                on paper but felt increasingly far from the people it was supposed to serve. He
                wanted to sit across from a business owner, solve a real problem, and watch it
                change something.
              </p>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                So he left. He and his husband relocated to Tampa, and Canopy Creative Co was born.
              </p>
            </div>

            {/* DIVIDER */}
            <div
              className="h-px"
              style={{ background: 'linear-gradient(to right, rgba(59,30,8,0.12), transparent)' }}
            />

            {/* WHY THIS WORK */}
            <div>
              <p
                className="text-[11.5px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
                style={{ opacity: 0.85 }}
              >
                Why This Work
              </p>
              <h2
                className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                This isn't a niche
                <br />
                <em className="text-orange italic">he picked off a list.</em>
              </h2>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                Dave's entry into working with creative businesses wasn't accidental. His husband
                owns an interior design firm, and watching him run it up close showed Dave that
                this space needed better support. Canopy Creative Co goes deepest with interior
                design firms, because that's where it started and where Dave has spent the most
                time inside the back office. The same principles run through professional
                services, trades, ecommerce, and every operator-run business. The problems are
                consistent, and the fix starts the same way: understand what's actually there
                before you touch anything.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PERSONALITY ── */}
      <section className="bg-cream-dark py-[80px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-2 gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p
              className="text-[11.5px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
              style={{ opacity: 0.85 }}
            >
              A Little More About Dave
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
            >
              The person
              <br />
              behind the <em className="text-orange italic">work.</em>
            </h2>
            <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
              Dave previously lived in Chicago and New York City, where he built a career in the
              world's most demanding professional environments. He was taught to move fast, think
              clearly, and never waste anyone's time, a skillset he now brings to every
              engagement.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                label: 'Currently Based In',
                body: 'Tampa, Florida, working with operators across the United States.',
              },
              {
                label: 'Background',
                body: 'Corporate finance, program management, and operational systems, at Fortune 500 scale.',
              },
              {
                label: 'Philosophy',
                body: 'Foundation first. Always. No patching, no shortcuts, and only work that serves the whole.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="bg-cream rounded-[4px] px-7 py-6 border-l-[3px] border-orange">
                <p
                  className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-orange mb-2"
                  style={{ opacity: 0.8 }}
                >
                  {label}
                </p>
                <p className="text-[14.5px] text-brown leading-[1.65]" style={{ opacity: 0.78 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-orange py-[90px] px-[60px] text-center relative overflow-hidden max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-[560px] mx-auto">
          <h2
            className="font-serif font-bold text-cream leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Ready to work together?
          </h2>
          <p
            className="text-[17px] font-light leading-[1.7] mb-10"
            style={{ color: 'rgba(253,246,236,0.75)' }}
          >
            Start with the free monthly demo, or send a message and tell us where your business is
            stuck. Either way, the first step is a conversation.
          </p>
          <div className="flex flex-col items-center gap-3">
            <SendMessageButton className="w-[260px] text-center inline-block bg-[#FFFCF6] text-orange text-[14px] font-bold tracking-[0.04em] px-8 py-[15px] rounded-full transition-all duration-200 hover:bg-[#f0e8d6] hover:-translate-y-px cursor-pointer">
              Send us a message
            </SendMessageButton>
          </div>
        </div>
      </section>
    </>
  )
}
