import Link from 'next/link'

export const metadata = {
  title: 'Services — Canopy Creative Co.',
  description: 'Operations and finance services for creative businesses — bookkeeping, advisory, and systems implementation.',
}

const tiers = [
  {
    bg: 'bg-cream',
    tag: 'Foundation',
    name: 'The Roots',
    descriptor:
      "You didn't start your business to spend Sunday nights catching up on receipts — or troubleshooting software, or chasing down reports. The Roots covers the ongoing fundamentals that keep your business running day to day, so you can stay focused on the work that actually lights you up.",
    services: [
      'Bookkeeping (transaction categorization and account reconciliation)',
      'Sales tax filing',
      'Payroll support',
      '1099 preparation and filing',
      'Ongoing software and systems operation',
    ],
    note: null,
  },
  {
    bg: 'bg-cream-mid',
    tag: 'Advisory',
    name: 'The Canopy',
    descriptor:
      "Your business grows best when there's something solid overhead. The Canopy brings the financial clarity that protects and guides everything underneath — what's driving your revenue, where margin is slipping, and what the road ahead actually looks like. So every decision you make is grounded in the full picture, not just a feeling.",
    services: [
      'Financial Planning & Analysis',
      'Cash flow analysis',
      'Budgeting and forecasting',
      'Project and product profitability',
      'Finance & accounting coaching',
    ],
    note: null,
  },
  {
    bg: 'bg-cream',
    tag: 'Operations & Systems',
    name: 'The Build',
    descriptor:
      "Whether you're starting from scratch or tired of the duct-tape systems you've been running on, The Build gets your operations in order. Software selection and implementation, workflow design, process documentation, and the unglamorous-but-essential infrastructure that lets a creative business actually run — we work through it together, methodically, so you're set up to grow without the chaos.",
    services: [
      'Software discovery, selection, and implementation',
      'Workflow and process design',
      'Business launch support',
    ],
    note: "Many Build engagements naturally flow into ongoing Roots support once your systems are in place — whether that's keeping your books clean, operating your software, or both.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-brown pt-[100px] pb-[90px] px-[60px] text-center relative overflow-hidden max-md:pt-[70px] max-md:pb-[60px] max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 60% 0%, rgba(204,78,0,0.18) 0%, transparent 65%), radial-gradient(ellipse at 20% 100%, rgba(204,78,0,0.1) 0%, transparent 55%)',
          }}
        />
        <div className="relative max-w-[720px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange/90 mb-6">
            What We Offer
          </p>
          <h1
            className="font-serif font-bold text-cream leading-[1.2] tracking-[-0.01em] mb-7"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Wherever you are, we've
            <br />
            <em className="text-orange italic">got you covered.</em>
          </h1>
          <p
            className="text-[17px] font-light max-w-[560px] mx-auto leading-[1.7]"
            style={{ color: 'rgba(253,246,236,0.72)' }}
          >
            Whether you're just getting started, growing faster than your systems can keep up, or ready to get serious about your numbers — Canopy Creative Co. works with creative businesses at every stage, across every part of the back office.
          </p>
        </div>
      </section>

      {/* ── TIER SECTIONS ── */}
      {tiers.map(({ bg, tag, name, descriptor, services, note }, i) => (
        <div key={name}>
          <section className={`${bg} py-[90px] px-[60px] max-md:py-[60px] max-md:px-6`}>
            <div className="max-w-[800px] mx-auto grid grid-cols-2 gap-[60px] items-start max-md:grid-cols-1 max-md:gap-10">
              {/* Left */}
              <div>
                <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-orange border border-orange rounded-[2px] px-[10px] py-1 mb-[18px] opacity-80">
                  {tag}
                </span>
                <h2
                  className="font-serif font-bold text-brown leading-[1.15] tracking-[-0.01em] mb-6"
                  style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
                >
                  {name}
                </h2>
                <p className="text-[16px] text-brown/85 leading-[1.75] italic">{descriptor}</p>
              </div>

              {/* Right */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted mb-5">
                  What's Included
                </p>
                <ul className="list-none m-0 p-0">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="text-[15px] text-brown py-[13px] border-b border-brown/10 flex items-center gap-3 first:border-t first:border-brown/10"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-orange/70 shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                {note && (
                  <div
                    className="mt-6 py-[14px] px-[18px] text-[13.5px] italic leading-[1.6] rounded-[0_4px_4px_0] border-l-[3px] border-orange"
                    style={{ background: 'rgba(204,78,0,0.07)', color: '#8A6E55' }}
                  >
                    {note}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Divider between tiers (not after last) */}
          {i < tiers.length - 1 && (
            <div
              className="h-px mx-[60px] max-md:mx-6"
              style={{ background: 'linear-gradient(to right, transparent, rgba(59,30,8,0.12), transparent)' }}
            />
          )}
        </div>
      ))}

      {/* ── NOT SURE WHERE YOU LAND ── */}
      <section className="bg-brown py-20 px-[60px] text-center relative overflow-hidden max-md:px-6 max-md:py-[60px]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(204,78,0,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-[640px] mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Not Sure Where You Land?
          </p>
          <h2
            className="font-serif font-bold text-cream leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
          >
            Most clients don't fit neatly into one tier — and that's the point.
          </h2>
          <p className="text-[16px] font-light leading-[1.75]" style={{ color: 'rgba(253,246,236,0.7)' }}>
            You might start with The Build to get your systems in place, then move into The Roots to keep everything running. Or you're already a Roots client who's ready to get a clearer picture with The Canopy. Wherever you're starting, we'll figure out the right fit together.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream-dark py-20 px-[60px] text-center max-md:px-6 max-md:py-[60px]">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[15px] leading-[1.6] mb-9" style={{ color: '#8A6E55' }}>
            Ready to get started? Book a discovery call or send us a message and we'll take it from there.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px"
            >
              Book a discovery call
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent text-brown text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] border-[1.5px] border-brown rounded-[3px] no-underline transition-all duration-200 hover:bg-brown hover:text-cream hover:-translate-y-px"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
