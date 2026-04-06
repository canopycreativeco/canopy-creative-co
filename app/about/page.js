import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About — Canopy Creative Co',
  description:
    'From Fortune 500 to your back office. Meet Dave Altshul, founder of Canopy Creative Co',
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange mb-6">
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
              The same rigor applied to billion-dollar compliance programs, now applied to the
              businesses that actually keep creative industries alive.
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
                src="/dave.jpg.jpg"
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
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
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
                    label: 'Employees in the global\norganization he supported',
                  },
                  {
                    number: '$39B+',
                    label: 'Annual revenue of\nWarner Bros. Discovery',
                  },
                ].map(({ number, label }) => (
                  <div key={number} className="bg-cream-dark py-7 px-6 text-center">
                    <p className="font-serif text-[28px] font-bold text-orange mb-[6px]">
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
                Before Canopy Creative Co, Dave Altshul spent years operating at the highest levels
                of corporate finance and internal audit — building programs, leading teams, and
                solving complex operational problems for organizations that don't have room for
                error.
              </p>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                At Warner Bros. Discovery, a Fortune 500 global media and entertainment company with
                35,000 employees, Dave served as the internal audit lead on the company's global SOX
                compliance program — playing a central role in transforming a manual, fragmented
                process into a streamlined, automated system that dramatically reduced the time and
                cost of the compliance cycle while improving the quality of the work. That meant
                redesigning testing architecture, sequencing delivery to minimize disruption to the
                business, building automation that eliminated hours of manual work, and making
                strategic scope decisions that ensured the program reflected exactly what was
                required and nothing more.
              </p>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                It was at Morningstar where Dave built the financial foundation that would define
                everything that came after — starting in a leadership development program with a
                rotation as a General Ledger Accountant before moving into Internal Audit.
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
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
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
                He holds a Project Management Professional (PMP) certification — earned as a
                deliberate investment in understanding how systems integrate and implementations
                actually succeed. When you're helping a business select, implement, and build their
                operational infrastructure, how the pieces connect and in what order matters
                enormously. The PMP sharpened that. It shows up in every engagement.
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
                  He approaches every engagement the way an architect approaches a building —
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
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
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
                Dave spent the better part of a decade in New York City — living in Hell's Kitchen,
                learning from some of the best operators and creative minds the city has to offer,
                and building a career that looked impressive on paper but felt increasingly
                disconnected from the people it was supposed to serve.
              </p>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                That's the part that finally got to him. At the corporate level, the work was
                technically excellent but the humans it affected were abstract. He wanted to see the
                impact. He wanted to sit across from a business owner, solve a real problem, and
                watch it actually change something for them.
              </p>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                So he left. He and his husband relocated to Tampa, started building something new,
                and Canopy Creative Co was born.
              </p>
            </div>

            {/* DIVIDER */}
            <div
              className="h-px"
              style={{ background: 'linear-gradient(to right, rgba(59,30,8,0.12), transparent)' }}
            />

            {/* WHY CREATIVE BUSINESSES */}
            <div>
              <p
                className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
                style={{ opacity: 0.85 }}
              >
                Why Creative Businesses
              </p>
              <h2
                className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                This isn't a niche
                <br />
                <em className="text-orange italic">he picked off a list.</em>
              </h2>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                Dave's entry into working with creative businesses wasn't accidental. His husband
                owns an interior design firm — and watching him navigate the back office chaos of a
                growing creative business up close showed Dave exactly how badly this space needed
                better support. The disorganized books. The software that doesn't talk to each
                other. The late nights trying to figure out cash flow on a gut feeling. The hours
                spent on admin that could have gone toward the actual work.
              </p>
              <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
                That inside perspective isn't a conflict. It's the whole point.
              </p>
              <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
                Today, Canopy Creative Co works with interior design studios, creative agencies,
                artists, workrooms, entertainment companies, and the businesses that support them —
                across the United States. The back office problems are consistent. The chaos is
                familiar. And the solution always starts the same way: understand what's actually
                there before you touch anything.
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
              className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange mb-4"
              style={{ opacity: 0.85 }}
            >
              A Little More Dave
            </p>
            <h2
              className="font-serif font-bold text-brown leading-[1.25] tracking-[-0.01em] mb-5"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
            >
              The person
              <br />
              behind the <em className="text-orange italic">work.</em>
            </h2>
            <p className="text-[16px] text-brown leading-[1.85] mb-4" style={{ opacity: 0.82 }}>
              He moved from the Chicagoland suburbs to New York City at 24 with ambition and not
              much else — and spent years building a career in one of the world's most demanding
              professional environments. NYC teaches you how to move fast, think clearly, and never
              waste anyone's time. He tries to bring all three to every client engagement.
            </p>
            <p className="text-[16px] text-brown leading-[1.85]" style={{ opacity: 0.82 }}>
              He lives in South Tampa with his husband and their dog August, who structures Dave's
              day with the kind of reliability most project plans can only aspire to.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                label: 'Based in',
                body: 'South Tampa, Florida — working with creative businesses across the United States.',
              },
              {
                label: 'Background',
                body: 'Corporate finance, internal audit, SOX compliance, program management, and operational systems — at Fortune 500 scale.',
              },
              {
                label: 'Philosophy',
                body: "Foundation first. Always. No patching, no shortcuts, no work that doesn't serve the whole.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="bg-cream rounded-[4px] px-7 py-6 border-l-[3px] border-orange">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase text-orange mb-2"
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
            Whether you're just getting started or finally ready to get your back office in order,
            the first step is a conversation.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="w-[260px] text-center inline-block bg-cream text-orange text-[14px] font-bold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#f0e8d6] hover:-translate-y-px"
            >
              Book a discovery call
            </Link>
            <Link
              href="/contact"
              className="w-[260px] text-center inline-block bg-transparent text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] border-[1.5px] border-cream/40 rounded-[3px] no-underline transition-all duration-200 hover:border-cream/85 hover:-translate-y-px"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
