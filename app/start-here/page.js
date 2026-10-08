import Link from 'next/link'
import { CANOPY_URL, BACK_OFFICE_URL, DEMO_REGISTRATION_URL } from '@/lib/site'
import { IconLearning, IconHandHeart } from '@/components/Icons'

export const metadata = {
  title: 'Start here',
  description: 'Two ways to work with Canopy Creative Co. Learn it with us in The Canopy, or hand it to us with The Back Office.',
  openGraph: {
    title: 'Start here | Canopy Creative Co',
    description: 'Two ways to work with Canopy Creative Co. Learn it with us in The Canopy, or hand it to us with The Back Office.',
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
  'block w-full bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-6 py-[14px] rounded-full no-underline text-center transition-colors duration-200 group-hover:bg-[#b04400] after:absolute after:inset-0 after:z-[1] after:content-[""] after:rounded-[8px]'

/* Two doors, one light and one dark, so they read as a choice before anyone reads a word.
   Each has a tonal top band with the badge, the name, the price line and a brand icon. */
const card =
  'group relative flex flex-col rounded-[8px] overflow-hidden shadow-[0_2px_12px_rgba(59,30,8,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(59,30,8,0.14)]'
const cardTop = 'px-8 pt-8 pb-7 border-b-2 border-orange flex items-start justify-between gap-5 max-md:px-6'
const cardBody = 'flex flex-col flex-1 px-8 pt-7 pb-8 max-md:px-6'
const badge = 'inline-block text-[10.5px] font-bold tracking-[0.18em] uppercase px-3 py-[5px] rounded-full mb-4'
const iconRing = 'shrink-0 w-14 h-14 rounded-full bg-orange text-cream flex items-center justify-center'
const kicker = 'text-[13px] font-bold leading-[1.5] mb-4'

const ctaBtn =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

function Bullets({ items, dark }) {
  return (
    <ul className="list-none m-0 p-0 mb-7">
      {items.map((b) => (
        <li
          key={b}
          className={`text-[14px] font-medium py-[7px] flex items-start gap-[11px] ${dark ? 'text-cream/85' : 'text-brown/85'}`}
        >
          <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>
  )
}

export default function StartHerePage() {
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
            Two ways to work <em className="text-orange italic">together.</em>
          </h1>
          <p
            className="text-[17px] font-light max-w-[520px] mx-auto leading-[1.7] text-balance"
            style={{ color: 'rgba(253,246,236,0.72)' }}
          >
            We teach operators to run lean businesses with AI, and we run the back office for
            creative businesses that would rather hand it off.
          </p>
        </div>
      </section>

      {/* TWO DOORS */}
      <section className="bg-cream-dark py-[80px] px-[60px] max-md:py-[56px] max-md:px-6">
        <div className="max-w-[940px] mx-auto grid grid-cols-2 gap-8 items-stretch max-md:grid-cols-1 max-md:gap-10">

          {/* ── DOOR 1 · THE CANOPY (light) ── */}
          <div className={`${card} bg-[#FFFCF6]`}>
            <div className={`${cardTop} bg-cream`}>
              <div>
                <span className={`${badge} bg-orange text-cream`}>Learn it with us</span>
                <h2 className="font-serif text-[32px] font-bold text-brown leading-[1.1]">The Canopy</h2>
                <p className="text-[15px] font-bold text-orange mt-2">
                  $497 a year <span className="font-normal text-brown/55">&middot; or $65 a month</span>
                </p>
              </div>
              <span className={iconRing}>
                <IconLearning size={28} />
              </span>
            </div>
            <div className={cardBody}>
              <p className="text-[15px] text-brown/85 leading-[1.75] mb-6">
                One membership with everything inside: the foundations course, every live session,
                and a growing library of skills and prompts built for real operators.
              </p>
              <Bullets
                items={[
                  'The Roots, the foundations track: the video course, the prompt cheat sheet and the starter workspaces',
                  'A live session every month, plus its recording, starter prompt, use cases and bonus tool',
                  'The Tool Shed, the full library of finished skills and prompts',
                  'New skills and prompts added regularly',
                  'Everything from day one, for as long as you are a member',
                ]}
              />
              <div className="mt-auto">
                <p className={`${kicker} text-orange`}>Watch a live session free first, then decide.</p>
                <Link href={CANOPY_URL} className={cardBtn}>
                  See The Canopy
                </Link>
              </div>
            </div>
          </div>

          {/* ── DOOR 2 · THE BACK OFFICE (dark) ── */}
          <div className={`${card} bg-brown`}>
            <div className={`${cardTop} bg-brown-dark`}>
              <div>
                <span className={`${badge} bg-[#FFEB99] text-brown`}>Hand it to us</span>
                <h2 className="font-serif text-[32px] font-bold text-cream leading-[1.1]">The Back Office</h2>
                <p className="text-[15px] font-bold text-[#FFEB99] mt-2">Starts with a conversation</p>
              </div>
              <span className={iconRing}>
                <IconHandHeart size={28} />
              </span>
            </div>
            <div className={cardBody}>
              <p className="text-[15px] leading-[1.75] mb-6" style={{ color: 'rgba(253,246,236,0.8)' }}>
                Finance and operations for creative businesses, from the monthly books to the
                systems behind them. Our team does the work.
              </p>
              <Bullets
                dark
                items={[
                  'The books: categorization, reconciliation, sales tax, payroll support, 1099s',
                  'The numbers: cash flow, budgets and forecasts, project profitability',
                  'The systems: software selection and setup, workflow design, launch support',
                  'You pick from the menu. We handle the rest.',
                ]}
              />
              <div className="mt-auto">
                <p className={`${kicker} text-[#FFEB99]`}>A 30-minute call to see if it fits.</p>
                <Link href={BACK_OFFICE_URL} className={cardBtn}>
                  See The Back Office
                </Link>
              </div>
            </div>
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
          <p
            className="text-[16px] font-light leading-[1.75] mb-9"
            style={{ color: 'rgba(253,246,236,0.7)' }}
          >
            If you&rsquo;re the bottleneck in your own business and you know it, come to the next
            demo. It&rsquo;s free, it happens once a month, and it&rsquo;s the clearest picture
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
