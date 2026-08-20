import Link from 'next/link'
import { DEMO_REGISTRATION_URL } from '@/lib/site'

export const metadata = {
  title: 'The Greenhouse',
  description:
    'The Greenhouse is done-with-you systems work. We build the version that runs on your real business and hand it to you, then stay in the picture while it settles into daily use.',
  openGraph: {
    title: 'The Greenhouse | Canopy Creative Co',
    description:
      'Done-with-you systems work. You get the built version, not the blank page, set up on your real numbers and your real tools.',
    url: 'https://www.canopycreativeco.com/the-greenhouse',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/the-greenhouse',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const STEPS = [
  {
    number: '1',
    title: 'A conversation.',
    body: "Thirty minutes on how your business actually runs and what's eating your week. No deck, no pitch.",
  },
  {
    number: '2',
    title: 'We pick the first thing to build.',
    body: 'One thing, chosen together, priced up front so there are no surprises.',
  },
  {
    number: '3',
    title: 'You get it built, and you start using it.',
    body: 'We stay in the picture while it settles into how you work.',
  },
]

const WHAT_YOU_GET = [
  'You get the built version, not the blank page',
  'Set up on your real numbers and your real tools',
  'Your time goes to using it, not building it',
]


export default function TheGreenhousePage() {
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
        <div className="relative max-w-[980px] mx-auto grid grid-cols-[1.3fr_280px] gap-12 items-center max-md:grid-cols-1">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-6">
              Hire Us
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(32px, 4.2vw, 50px)' }}
            >
              We build it <em className="text-orange italic">with you.</em>
            </h1>
            <p className="text-[17px] font-light leading-[1.75] max-w-[560px]" style={{ color: 'rgba(253,246,236,0.72)' }}>
              A starter prompt gets you going. Getting from there to something that runs on your
              real business is the slow part. The Greenhouse is where we build that version and
              hand it to you.
            </p>
            <p className="text-[15px] font-bold text-orange mt-7">
              Starts with a conversation
            </p>
            <div className="mt-6">
              <Link href="/contact" className={btnPrimary}>
                Start a conversation
              </Link>
            </div>
          </div>
          <img
            src="/art/greenhouse.png"
            alt="Illustrated greenhouse full of plants"
            className="w-full max-md:max-w-[240px] max-md:mx-auto"
          />
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="bg-cream py-[70px] px-[60px] max-md:py-[52px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            What You Get
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-8"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            The built version, on your <em className="text-orange italic">real business.</em>
          </h2>
          <ul className="list-none m-0 p-0">
            {WHAT_YOU_GET.map((item) => (
              <li
                key={item}
                className="text-[15.5px] font-medium text-brown py-[14px] border-b border-brown/10 flex items-start gap-[14px] first:border-t first:border-brown/10"
              >
                <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0 mt-[9px]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-cream-dark py-[60px] px-[60px] max-md:py-[46px] max-md:px-6">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            How <em className="italic">The Greenhouse</em> engagement <em className="text-orange italic">works.</em>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {STEPS.map(({ number, title, body }) => (
              <div
                key={number}
                className="bg-[#FFFCF6] border border-brown/10 border-t-2 border-t-orange rounded-[6px] px-6 py-6 shadow-[0_2px_12px_rgba(59,30,8,0.05)]"
              >
                <p className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-orange mb-2">
                  Step {number}
                </p>
                <h3 className="font-serif text-[19px] font-bold text-brown mb-2">{title}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] font-bold text-orange mt-9">
            A 30-minute call to see if it fits.
          </p>
        </div>
      </section>

      {/* ── WE DO THE BUILDING BAND ── */}
      <section className="bg-cream py-[80px] px-[60px] max-md:py-[56px] max-md:px-6">
        <div className="max-w-[980px] mx-auto bg-cream-dark rounded-[6px] border-l-[5px] border-orange px-10 py-9 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-4">
            We do the building. You do the running.
          </p>
          <p className="text-[15.5px] text-brown/85 leading-[1.8] max-w-[70ch]">
            Left on your own with a starter prompt, most of your time goes into figuring out how to
            build the thing instead of using it. Here you get the built version, set up on your
            business. You tailor it to how you actually work, and your time goes to running it
            instead of constructing it.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange py-[80px] px-[60px] text-center relative overflow-hidden max-md:px-6 max-md:py-[60px]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[600px] mx-auto">
          <h2
            className="font-serif font-bold text-cream leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Start with a <em className="italic text-[#FFEB99]">conversation.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mb-9 text-balance" style={{ color: 'rgba(255,225,196,0.95)' }}>
            Thirty minutes on how your business runs today, and whether this is the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brown text-[#FFEB99] text-[14px] font-bold tracking-[0.04em] px-9 py-[16px] rounded-full no-underline transition-all duration-200 hover:bg-brown-dark hover:-translate-y-px"
          >
            Start a conversation
          </Link>
          <p className="text-[13.5px] leading-[1.6] mt-6 text-balance" style={{ color: 'rgba(255,225,196,0.9)' }}>
            Not ready to talk?{' '}
            <a
              href={DEMO_REGISTRATION_URL}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-[3px] text-cream"
            >
              Come to the next live demo instead &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ── RELATED OFFERINGS ── */}
      <section className="bg-cream-dark py-12 px-[60px] max-md:px-6">
        <p className="text-[14px] text-brown/60 leading-[1.7] text-center max-w-[60ch] mx-auto">
          The Greenhouse is the third way to work with Canopy Creative Co.{' '}
          <Link href="/the-roots" className="text-orange underline underline-offset-[3px]">
            The Roots
          </Link>{' '}
          is the self-paced foundation, and{' '}
          <Link href="/the-canopy" className="text-orange underline underline-offset-[3px]">
            The Canopy
          </Link>{' '}
          is the ongoing membership.
        </p>
      </section>
    </>
  )
}
