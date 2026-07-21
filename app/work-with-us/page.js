import Link from 'next/link'
import { ROOTS_URL, CANOPY_URL, DEMO_REGISTRATION_URL } from '@/lib/site'
import SendMessageButton from '@/components/MessageModal'

export const metadata = {
  title: 'Work with us',
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
  openGraph: {
    title: 'Work with us | Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
    url: 'https://www.canopycreativeco.com/work-with-us',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/work-with-us',
  },
}

const GREENHOUSE_STEPS = [
  {
    number: '1',
    title: 'Discovery call.',
    body: "A 30-minute conversation to understand where you are, what isn't working, and where you want to go.",
  },
  {
    number: '2',
    title: 'Scope and agreement.',
    body: "We define what we're doing together and agree on terms before the work begins.",
  },
  {
    number: '3',
    title: 'Active support.',
    body: 'Ongoing work with room to expand as the business grows.',
  },
]

const ctaBtn =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-[3px] no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

function SectionDivider() {
  return (
    <div
      className="h-px mx-[60px] max-md:mx-6"
      style={{ background: 'linear-gradient(to right, transparent, rgba(59,30,8,0.12), transparent)' }}
    />
  )
}

export default function WorkWithUsPage() {
  return (
    <>
      {/* PAGE HEADER */}
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
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/90 mb-6">
            Work With Us
          </p>
          <h1
            className="font-serif font-bold text-cream leading-[1.2] tracking-[-0.01em] mb-7"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Three ways to work <em className="text-orange italic">together.</em>
          </h1>
          <p
            className="text-[17px] font-light max-w-[560px] mx-auto leading-[1.7]"
            style={{ color: 'rgba(253,246,236,0.72)' }}
          >
            Canopy Creative Co teaches operators to run lean businesses with AI. Where you start
            depends on how much of it you want to do yourself.
          </p>
        </div>
      </section>

      {/* THE ROOTS */}
      <section className="bg-cream py-[90px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <span className="inline-block text-[11.5px] font-semibold tracking-[0.2em] uppercase text-orange border border-orange rounded-[2px] px-[10px] py-1 mb-[18px] opacity-80">
            Take a Course
          </span>
          <h2
            className="font-serif font-bold text-brown leading-[1.15] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
          >
            The Roots
          </h2>
          <p className="text-[16px] text-brown/85 leading-[1.8] mb-4">
            The Roots is the self-paced course. Every lesson is recorded, so you start where you
            are, move at your own pace, and return to any lesson whenever you need it. You learn the
            fundamentals of putting AI to work in a real business, and you walk out with a prompt
            library organized by what your business actually does.
          </p>
          <p className="text-[16px] text-brown/85 leading-[1.8] mb-9">
            This is teaching with you doing the building. A system you build yourself is a system
            you understand, and you can keep extending it long after the course ends.
          </p>
          <a href={ROOTS_URL} target="_blank" rel="noopener" className={ctaBtn}>
            See the course
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* THE CANOPY */}
      <section className="bg-cream-mid py-[90px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <span className="inline-block text-[11.5px] font-semibold tracking-[0.2em] uppercase text-orange border border-orange rounded-[2px] px-[10px] py-1 mb-[18px] opacity-80">
            Join the Membership
          </span>
          <h2
            className="font-serif font-bold text-brown leading-[1.15] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
          >
            The Canopy
          </h2>
          <p className="text-[16px] text-brown/85 leading-[1.8] mb-4">
            The Canopy is the membership. There's a live session every month, and during a
            featured series, like the interior design series running now, there are two. You get
            the full library of everything we've built, each session's prompt turned into a
            reusable skill with a summary page, and a room of operators working through the same
            decisions you are.
          </p>
          <p className="text-[16px] text-brown/85 leading-[1.8] mb-9">
            Every demo we run is recorded and added to the library, along with the prompt from the
            call and a summary page for putting it to work in your own AI tools. If you missed a
            session, the recording is in there with everything else. This is where operators who've
            decided they need a system come to build one, next to other people doing the same
            thing.
          </p>
          <a href={CANOPY_URL} target="_blank" rel="noopener" className={ctaBtn}>
            Join the membership
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* THE GREENHOUSE */}
      <section className="bg-cream py-[90px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <span className="inline-block text-[11.5px] font-semibold tracking-[0.2em] uppercase text-orange border border-orange rounded-[2px] px-[10px] py-1 mb-[18px] opacity-80">
            Hire Us
          </span>
          <h2
            className="font-serif font-bold text-brown leading-[1.15] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}
          >
            The Greenhouse
          </h2>
          <p className="text-[16px] text-brown/85 leading-[1.8] mb-12">
            Some operators want to build it themselves. Others want it moving faster than building
            alone allows. The Greenhouse is for the second group, wherever they started. Our team works alongside yours to design and build the systems, with
            advisory layered on top. We map how the business runs today, decide together what
            belongs in a system, build it, and stay in the picture while it settles into daily use.
          </p>

          {/* Greenhouse process */}
          <div className="bg-cream-dark rounded-[4px] px-10 py-9 mb-10 max-md:px-6">
            <p className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-muted mb-7">
              How a Greenhouse Engagement Works
            </p>
            <div className="flex flex-col gap-7">
              {GREENHOUSE_STEPS.map(({ number, title, body }) => (
                <div key={number} className="flex items-start gap-5">
                  <span
                    className="font-serif text-[26px] font-bold text-orange leading-none shrink-0 w-[28px]"
                    aria-hidden="true"
                  >
                    {number}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-brown mb-1">{title}</p>
                    <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookkeeping */}
          <div className="bg-cream-dark rounded-[4px] px-10 py-9 mb-10 border-l-[3px] border-orange max-md:px-6">
            <p className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-muted mb-4">
              Bookkeeping, On Its Own
            </p>
            <p className="text-[15px] text-brown/85 leading-[1.75]">
              The clearest view of a business is its books. Understanding where a business can grow
              starts with examining and managing them well, and that discipline stands on its own
              here. Bookkeeping is a separate service at its own rate, on its own agreement, whether
              or not we're building systems together. Many clients start there.
            </p>
          </div>

          <Link href="/contact" className={ctaBtn}>
            Start a conversation
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-brown py-20 px-[60px] text-center relative overflow-hidden max-md:px-6 max-md:py-[60px]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(204,78,0,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-[640px] mx-auto">
          <h2
            className="font-serif font-bold text-cream leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
          >
            Start with a <em className="text-orange italic">demo.</em>
          </h2>
          <p
            className="text-[16px] font-light leading-[1.75] mb-9"
            style={{ color: 'rgba(253,246,236,0.7)' }}
          >
            If you're the bottleneck in your own business and you know it, come to the next demo.
            It's free, and it's the clearest picture you'll get of what AI can do in a business
            like yours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={`${ctaBtn} w-[220px]`}>
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
