import Link from 'next/link'
import { ROOTS_FOUNDING_CHECKOUT_URL } from '@/lib/site'

export const metadata = {
  title: 'The Roots',
  description:
    'The Roots is the self-paced foundation for putting AI to work in a real business: four layers, from your first sharp prompt to a workspace that runs a task without you. 12 months of access.',
  openGraph: {
    title: 'The Roots | Canopy Creative Co',
    description:
      'The self-paced course that takes an operator from curious to capable, one task at a time. 12 months of access.',
    url: 'https://www.canopycreativeco.com/the-roots',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/the-roots',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

const LAYERS = [
  {
    n: '1',
    title: 'Prompt: get it working once',
    body: 'What a prompt is, how to write one that works, and your first real result on a task you already do.',
  },
  {
    n: '2',
    title: 'Skill: make it repeatable',
    body: 'Turn the prompt that worked into something you can run again without rebuilding it, so good results stop being lucky.',
  },
  {
    n: '3',
    title: 'Project: give it a brain',
    body: 'Give your skills context, so answers come back sounding like your business instead of the internet.',
  },
  {
    n: '4',
    title: 'Automation: take your hands off',
    body: 'A task you used to do by hand now runs on its own. You review instead of doing.',
  },
]

const FAQS = [
  {
    q: 'Do I need a technical background?',
    a: 'No. The course assumes you work in or run a business, not that you write code. Every layer is shown on screen, start to finish, and you follow along in plain English.',
  },
  {
    q: 'What do I need?',
    a: 'One AI tool. Claude is what you will see on screen, and ChatGPT works too. We recommend a paid plan, but feel free to start on a free plan and decide when it makes sense to upgrade as you use AI more often in your work.',
  },
  {
    q: 'How is this different from free videos on YouTube?',
    a: 'YouTube shows you a tool. The Roots gives you a method and makes you run it on your own work. You finish with one task climbed all four layers and a prompt library pointed at your business, not a folder of clips you meant to watch.',
  },
  {
    q: 'Should I buy The Roots or join The Canopy?',
    a: 'Buy The Roots if you want the foundation and want to build it yourself, once. Join The Canopy if you want a new build every month and a library that keeps growing. Plenty of operators do both, starting with The Roots.',
  },
  {
    q: 'How long do I have access?',
    a: '12 months from the day you buy. Lessons are short and self-paced, so most operators work through the climb in a matter of weeks and use the rest of the year to rewatch as they build.',
  },
  {
    q: 'Is there a guarantee?',
    a: 'No outcome guarantees, stated plainly. AI tooling changes monthly and every business is different. The methodology is the constant, and it is what the course teaches.',
  },
]

function PriceCard() {
  return (
    <div className="bg-[#FFFCF6] rounded-[10px] px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-brown/10">
      <p className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-muted mb-2">
        Self-paced course
      </p>
      <p className="font-serif text-[24px] font-bold text-brown mb-2">The Roots</p>
      <p className="text-[28px] font-semibold text-brown mb-4 whitespace-nowrap">
        <span className="text-[18px] font-normal text-brown/45 line-through mr-2">$497</span>
        $297 <span className="text-[13.5px] font-normal text-brown/60">founding price, one time</span>
      </p>
      {/* CCC-EXPIRES-OCT14: remove this deadline line on Oct 15. Price becomes $497. */}
      <p className="text-[13px] font-bold text-orange leading-[1.5] mb-3">
        Founding price ends October 14. After that, $497.
      </p>
      <a href={ROOTS_FOUNDING_CHECKOUT_URL} target="_blank" rel="noopener" className={`${btnPrimary} block w-full`}>
        Get The Roots
      </a>
      <p className="text-[12.5px] leading-[1.55] text-brown/60 mt-3">
        One-time purchase. 12 months of access. No subscription, nothing renews.
      </p>
    </div>
  )
}



export default function TheRootsPage() {
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
        <div className="relative max-w-[1080px] mx-auto grid grid-cols-[1.25fr_250px_1fr] gap-11 items-center max-md:grid-cols-1">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-6">
              The AI Operator
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-7"
              style={{ fontSize: 'clamp(32px, 4.2vw, 50px)' }}
            >
              From curious to <em className="text-orange italic">capable,</em>{' '}one task at a time.
            </h1>
            <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(253,246,236,0.7)' }}>
              The Roots is a self-paced foundational course for putting AI to work in a real
              business.
            </p>
          </div>
          <img
            src="/art/tree-roots.png"
            alt="Illustrated sapling with visible roots"
            className="w-full max-md:max-w-[240px] max-md:mx-auto"
          />
          <PriceCard />
        </div>
      </section>

      {/* ── THE FOUR LAYERS ── */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            The Method
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Four layers, one <em className="text-orange italic">climb.</em>
          </h2>
          <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-12 max-w-[640px]">
            Every layer runs the same way: the concept, a demo on a real customer-reply task, then
            your turn on a task of your own.
          </p>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {LAYERS.map(({ n, title, body }) => (
              <div key={n} className="bg-[#FFFCF6] border border-brown/10 rounded-[4px] px-8 py-8 border-t-[3px] border-t-orange shadow-[0_2px_12px_rgba(59,30,8,0.05)]">
                <span className="w-[34px] h-[34px] rounded-full bg-orange flex items-center justify-center mb-4">
                  {/* digits carry no descender, so the flex box centres the em box a touch high */}
                  <span className="text-cream text-[15px] font-bold leading-none translate-y-[1px]">{n}</span>
                </span>
                <h3 className="font-serif text-[20px] font-bold text-brown mb-2">{title}</h3>
                <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            What You Get
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-8"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Everything recorded, everything <em className="text-orange italic">yours to run.</em>
          </h2>
          <ul className="list-none m-0 p-0">
            {[
              'Short recorded video lessons for every layer, watched on your schedule',
              'The full climb demonstrated on one real task, start to finish',
              'The prompt cheat sheet: power moves that sharpen output and cut the noise',
              'A prompt library organized by business function, ready to adapt to yours',
              'Starter workspaces you can begin using in your business from day one',
              '12 months of access from the day you buy',
            ].map((item) => (
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

      {/* Proof section. Approved copy, do not edit the quotes. */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[860px] mx-auto">
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Taught before, taught well
          </h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {[
              {
                quote: 'His in-depth knowledge of reporting and his natural teaching ability helped me grow to be confident in my role as a new hire.',
                who: 'Kristina D., former colleague',
              },
              {
                quote: 'He is a skilled facilitator and an engaging instructor.',
                who: 'Rachael Z., university faculty',
              },
            ].map(({ quote, who }, i) => (
              <div key={i} className="bg-[#FFFCF6] border-l-[3px] border-orange rounded-r-[6px] px-7 py-6">
                <p className="font-serif italic text-[17px] text-brown leading-[1.6] mb-3">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-[13px] text-brown/55">{who}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-brown/60 leading-[1.7] mt-8 max-w-[62ch]">
            The Roots is new, so there are no course reviews yet. We&rsquo;ll post them as they
            come in.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-cream-dark py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Who This Is For
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            For operators starting from <em className="text-orange italic">curious.</em>
          </h2>
          <p className="text-[16.5px] text-brown/80 leading-[1.8] mb-5">
            You bring one task you keep redoing. The course brings the method.
          </p>
          <p className="text-[16.5px] text-brown/80 leading-[1.8]">
            <strong className="font-bold">This isn&rsquo;t for you if</strong>{' '}you want someone to
            build it for you. That&rsquo;s The Greenhouse. The Roots teaches you to build it
            yourself.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-[68px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
            Questions, Answered
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Before you <em className="text-orange italic">start.</em>
          </h2>
          <div>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-[#FFFCF6] border border-brown/10 rounded-[6px] px-6 py-[18px] mb-3 shadow-[0_1px_6px_rgba(59,30,8,0.04)] transition-colors duration-200 hover:border-orange/40 max-md:px-5"
              >
                <summary className="font-serif text-[18px] font-bold text-brown cursor-pointer list-none flex justify-between items-center gap-4">
                  {q}
                  <span className="text-orange text-[20px] leading-none group-open:rotate-45 transition-transform duration-200" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-[16px] text-brown/75 leading-[1.75] mt-3 max-w-[62ch]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-orange py-[76px] px-[60px] text-center relative overflow-hidden max-md:px-6">
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
            Start the <em className="italic text-[#FFEB99]">climb.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mb-9 text-balance" style={{ color: 'rgba(255,225,196,0.95)' }}>
            One task, four layers, and a back office that finally starts carrying its share.
          </p>
          <a
            href={ROOTS_FOUNDING_CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-brown text-[#FFEB99] text-[14px] font-bold tracking-[0.04em] px-9 py-[16px] rounded-full no-underline transition-all duration-200 hover:bg-brown-dark hover:-translate-y-px"
          >
            Get The Roots
          </a>
          {/* CCC-EXPIRES-OCT14: on Oct 15 drop the deadline sentence. Price is $497. */}
          <p className="text-[17px] leading-[1.6] mt-6 text-balance" style={{ color: 'rgba(255,225,196,0.95)' }}>
            $297 founding, one time. 12 months of access. Nothing renews.
            <br />
            <strong className="font-bold">Founding price ends October 14. After that, $497.</strong>
          </p>
        </div>
      </section>

      {/* ── RELATED OFFERINGS ── */}
      <section className="bg-cream py-12 px-[60px] max-md:px-6">
        <p className="text-[14px] text-brown/60 leading-[1.7] text-center max-w-[60ch] mx-auto">
          The Roots is the first way to work with Canopy Creative Co.{' '}
          <Link href="/the-canopy" className="text-orange underline underline-offset-[3px]">
            The Canopy
          </Link>{' '}
          is the ongoing membership, and{' '}
          <Link href="/the-greenhouse" className="text-orange underline underline-offset-[3px]">
            The Greenhouse
          </Link>{' '}
          is where we build it with you.
        </p>
      </section>
    </>
  )
}
