import Link from 'next/link'
import { ROOTS_URL, CANOPY_URL, GREENHOUSE_URL, DEMO_REGISTRATION_URL } from '@/lib/site'

export const metadata = {
  title: 'Start here',
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
  openGraph: {
    title: 'Start here | Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
    url: 'https://www.canopycreativeco.com/start-here',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/start-here',
  },
}

/* The whole card is the click target. The button carries a stretched ::after overlay
   so there is one real link per card and no nested anchors. */
const cardBtn =
  'block w-full bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-6 py-[14px] rounded-full no-underline text-center transition-colors duration-200 group-hover:bg-[#b04400] after:absolute after:inset-0 after:z-[1] after:content-[""] after:rounded-[4px]'

/* All decoration is drawn with shadows, never borders, so the three content boxes stay
   pixel-identical and the kickers and buttons hold one baseline. */
const cardBase =
  'group relative flex flex-col bg-[#FFFCF6] rounded-[4px] px-8 py-9 transition-all duration-200 hover:-translate-y-1 max-md:px-6'

/* Roots and Greenhouse: a 3px orange rule across the top only. */
const cardShadow =
  'shadow-[inset_0_3px_0_0_#CC4E00,0_2px_12px_rgba(59,30,8,0.05)] hover:shadow-[inset_0_3px_0_0_#CC4E00,0_14px_44px_rgba(59,30,8,0.12)]'
/* The Canopy: one 2.5px orange ring at the same weight on all four sides. */
const cardShadowRing =
  'shadow-[inset_0_0_0_2.5px_#CC4E00,0_2px_12px_rgba(59,30,8,0.05)] hover:shadow-[inset_0_0_0_2.5px_#CC4E00,0_14px_44px_rgba(59,30,8,0.12)]'

const ctaBtn =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const eyebrow = 'text-[11.5px] font-semibold tracking-[0.2em] uppercase mb-[14px]'
const cardHeading = 'font-serif text-[30px] font-bold text-brown leading-[1.15] mb-[10px]'
const kicker = 'text-[13px] font-bold text-orange leading-[1.5] mb-4'
const bandLabel = 'text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-4'

/* Tan panel on a cream section, with a heavy orange edge. The tone flip is what makes
   these two bands read as separate objects instead of more page. */
const band =
  'max-w-[1080px] mx-auto bg-cream-dark rounded-[6px] border-2 border-orange px-10 py-9 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6'

function CardBullets({ items }) {
  return (
    <ul className="list-none m-0 p-0 mb-7">
      {items.map((b) => (
        <li key={b} className="text-[14px] font-medium text-brown/85 py-[7px] flex items-start gap-[11px]">
          <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>
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
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/90 mb-6 text-balance">
            Start here
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
            depends on how much you want to do yourself.
          </p>
          <p className="text-[14px] font-light mt-5 text-balance" style={{ color: 'rgba(253,246,236,0.5)' }}>
            Not sure yet?{' '}
            <a
              href={DEMO_REGISTRATION_URL}
              target="_blank"
              rel="noopener"
              className="text-orange underline underline-offset-[3px] transition-opacity duration-200 hover:opacity-80"
            >
              The next live demo is free &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* THREE OFFERINGS */}
      <section className="bg-cream-dark py-[80px] px-[60px] max-md:py-[56px] max-md:px-6">
        <div className="max-w-[1080px] mx-auto grid grid-cols-3 gap-7 items-stretch max-md:grid-cols-1 max-md:gap-10">

          {/* ── CARD 1 · THE ROOTS ── */}
          <div className={`${cardBase} ${cardShadow}`}>
            <p className={`${eyebrow} text-muted`}>Take a Course</p>
            <h2 className={cardHeading}>The Roots</h2>
            {/* CCC-EXPIRES-OCT14: refresh after the first series closes. See swap plan.
                On Oct 15 this price line becomes: $497, one time */}
            <p className="text-[16px] font-bold text-orange mb-5">
              $297 founding, one time{' '}
              <span className="font-normal text-brown/55">&middot; then $497</span>
            </p>
            <p className="text-[15px] text-brown/85 leading-[1.75] mb-6">
              Learn to use AI like a professional, on your own schedule. One task you already do,
              climbed through four layers, from your first sharp prompt to a workspace that runs it
              without you.
            </p>
            <CardBullets
              items={[
                'Self-paced video lessons, start any time',
                'The four layers: prompt, skill, project, automation',
                'A prompt library organized by business function',
                '12 months of access',
              ]}
            />
            <div className="mt-auto">
              {/* CCC-EXPIRES-OCT14: remove this deadline line on Oct 15. */}
              <p className={kicker}>Founding price ends October 14.</p>
              <Link href={ROOTS_URL} className={cardBtn}>
                See The Roots
              </Link>
            </div>
          </div>

          {/* ── CARD 2 · THE CANOPY ── */}
          <div className={`${cardBase} ${cardShadowRing}`}>
            {/* CCC-EXPIRES-OCT14: remove this badge on Oct 15. Keep the orange border. */}
            <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-orange text-cream text-[10.5px] font-bold tracking-[0.16em] uppercase px-4 py-[5px] rounded-full">
              20 Founding Seats
            </span>
            <p className={`${eyebrow} text-orange`}>Join the Membership</p>
            <h2 className={cardHeading}>The Canopy</h2>
            {/* CCC-EXPIRES-OCT14: refresh after the first series closes. See swap plan.
                On Oct 15 this price line becomes: $497 / year */}
            <p className="text-[16px] font-bold text-orange mb-5">
              $347 your first year{' '}
              <span className="font-normal text-brown/55">&middot; then $497</span>
            </p>
            <p className="text-[15px] text-brown/85 leading-[1.75] mb-6">
              Every month a real back-office workflow gets built in front of you.
            </p>

            {/* FREE LIVE box */}
            <div className="relative border-[1.8px] border-dashed border-orange rounded-[6px] px-6 pt-7 pb-5 mb-6 max-md:px-5">
              <span className="absolute -top-[9px] left-6 bg-cream px-2 text-[10.5px] font-bold tracking-[0.16em] uppercase text-orange">
                Free Live
              </span>
              <ul className="list-none m-0 p-0 mb-4">
                {['One live build a month, with Q&A', "That session's starter prompt"].map((b) => (
                  <li key={b} className="text-[14px] font-medium text-brown/85 py-[5px] flex items-start gap-[11px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[12.5px] text-brown/60 leading-[1.6]">
                Free when you attend live. Miss one, and the library below catches you up.
              </p>
            </div>

            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange mb-3">
              The Membership
            </p>
            <CardBullets
              items={[
                'Use cases that take each prompt deeper',
                'A bonus tool every session',
                'The full library from day one: recordings, prompts, use cases, bonuses',
              ]}
            />
            <div className="mt-auto">
              {/* CCC-EXPIRES-OCT14: remove this deadline line on Oct 15. */}
              <p className={kicker}>Founding price ends October 14.</p>
              <Link href={CANOPY_URL} className={cardBtn}>
                See The Canopy
              </Link>
            </div>
          </div>

          {/* ── CARD 3 · THE GREENHOUSE ── */}
          <div
            id="the-greenhouse"
            className={`${cardBase} ${cardShadow} scroll-mt-[90px]`}
          >
            <p className={`${eyebrow} text-muted`}>Hire Us</p>
            <h2 className={cardHeading}>The Greenhouse</h2>
            <p className="text-[16px] font-bold text-orange mb-5">Starts with a conversation</p>
            <p className="text-[15px] text-brown/85 leading-[1.75] mb-6">
              A starter prompt gets you going. Getting from there to something that runs on your
              real business is the slow part. The Greenhouse is where we build that version and
              hand it to you.
            </p>
            <CardBullets
              items={[
                'You get the built version, not the blank page',
                'Set up on your real numbers and your real tools',
                'Your time goes to using it, not building it',
              ]}
            />
            <div className="mt-auto">
              <p className={kicker}>A 30-minute call to see if it fits.</p>
              <Link href={GREENHOUSE_URL} className={cardBtn}>
                See The Greenhouse
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* BOOKKEEPING BAND */}
      <section className="bg-cream py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className={band}>
          <p className="mb-4">
            <span className="font-serif text-[26px] font-bold text-orange tracking-[-0.01em] align-middle">
              Bookkeeping
            </span>
            <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-brown/55 align-middle ml-3">
              The foundation under all three
            </span>
          </p>
          <p className="text-[15.5px] text-brown/85 leading-[1.8] mb-4 max-w-[70ch]">
            Every pricing decision is only as good as the numbers behind it. We keep books clean,
            so the data you decide from is data you trust.
          </p>
          <p className="text-[15.5px] text-brown/85 leading-[1.8] mb-7 max-w-[70ch]">
            Its own service, its own agreement, its own rate. Never required to start, and many
            clients start there.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFFCF6] text-orange text-[14px] font-semibold tracking-[0.04em] px-8 py-[14px] border-[1.5px] border-orange rounded-full no-underline transition-all duration-200 hover:bg-orange hover:text-cream hover:-translate-y-px text-center"
          >
            Ask about bookkeeping
          </Link>
        </div>
      </section>

      {/* Proof section. Approved copy, do not edit the quotes. */}
      <section className="bg-cream-dark py-[90px] px-[60px] max-md:py-[60px] max-md:px-6">
        <div className="max-w-[960px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            From the operators we work with
          </h2>
          <p className="text-[14px] text-brown/60 leading-[1.7] mb-10 max-w-[62ch]">
            These quotes are from bookkeeping and back-office clients. The Roots and The Canopy are
            new. We&rsquo;ll post those as they come in.
          </p>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {[
              { quote: 'This is exactly why I hired you. Quick, useful responses.', who: 'Addy D., interior design firm owner' },
              { quote: "He's the best and takes great care of me!", who: 'Molly C., interior design firm owner' },
              { quote: 'We are building the foundation that needs to be there for the growth for the company.', who: 'Oscar M., design firm founder' },
              { quote: 'I appreciate all your help getting me back on track and squared away!', who: 'Deborah V., interior design firm owner' },
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
          {/* CCC-EXPIRES-OCT14: on Oct 15 this becomes "It's free, third Wednesday of every month". */}
          <p
            className="text-[16px] font-light leading-[1.75] mb-9"
            style={{ color: 'rgba(253,246,236,0.7)' }}
          >
            If you&rsquo;re the bottleneck in your own business and you know it, come to the next
            demo. It&rsquo;s free, it happens every month, and it&rsquo;s the clearest picture
            you&rsquo;ll get of what AI can do in a business like yours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={DEMO_REGISTRATION_URL} target="_blank" rel="noopener" className={`${ctaBtn} w-[220px]`}>
              Join the next demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
