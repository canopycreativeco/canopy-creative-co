import Link from 'next/link'
import { IconLedger, IconFinance, IconSystems } from '@/components/Icons'

export const metadata = {
  title: 'The Back Office',
  description:
    'The Back Office is finance and operations for creative businesses, from the monthly books to the systems behind them. Our team does the work, and it starts with a conversation.',
  openGraph: {
    title: 'The Back Office | Canopy Creative Co',
    description:
      'Finance and operations for creative businesses, from the monthly books to the systems behind them. Our team does the work.',
    url: 'https://www.canopycreativeco.com/the-back-office',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/the-back-office',
  },
}

const btnPrimary =
  'inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px text-center'

/* Tan panel on a cream section, with a heavy orange edge. The tone flip is what makes
   the panel read as a separate object instead of more page. */
const band =
  'max-w-[1080px] mx-auto bg-cream-dark rounded-[6px] border-2 border-orange px-10 py-10 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6'

/* The service menu. Same items as the client intake form, grouped the same way. */
const MENU = [
  {
    title: 'The books',
    Icon: IconLedger,
    items: [
      'Transaction categorization and reconciliation',
      'Sales tax filing',
      'Payroll support',
      '1099 prep and filing',
    ],
  },
  {
    title: 'The numbers',
    Icon: IconFinance,
    items: [
      'Financial planning and analysis',
      'Cash flow analysis',
      'Budgeting and forecasting',
      'Project and product profitability',
      'Finance and accounting coaching',
    ],
  },
  {
    title: 'The systems',
    Icon: IconSystems,
    items: [
      'Software discovery, selection and implementation',
      'Workflow and process design',
      'Business launch support',
    ],
  },
]

const HOW_IT_STARTS = [
  {
    title: 'A conversation.',
    body: 'Thirty minutes on how the business runs and what is eating the week.',
  },
  {
    title: 'Pick where to start.',
    body: 'Chosen together, priced up front.',
  },
  {
    title: 'We do the work.',
    body: 'You get your back office handled, and we stay in touch as it runs.',
  },
]

export default function TheBackOfficePage() {
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
        <div className="relative max-w-[1080px] mx-auto grid grid-cols-[1.3fr_1fr] gap-12 items-center max-md:grid-cols-1">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.24em] uppercase text-orange mb-6">
              Hand it to us
            </p>
            <h1
              className="font-serif font-bold text-cream leading-[1.15] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(32px, 4.2vw, 50px)' }}
            >
              Your back office, <em className="text-orange italic">handled.</em>
            </h1>
            <p className="text-[17px] font-light leading-[1.75] max-w-[560px]" style={{ color: 'rgba(253,246,236,0.72)' }}>
              Finance and operations for creative businesses, from the monthly books to the
              systems behind them. Our team does the work.
            </p>
            <p className="text-[15px] font-bold text-orange mt-7">Starts with a conversation</p>
            <Link href="/contact" className={`${btnPrimary} mt-4`}>
              Start a conversation
            </Link>
          </div>

          {/* The three parts of the service, as a quiet visual beside the headline. */}
          <ul className="list-none m-0 p-0 flex flex-col gap-3 max-md:hidden" aria-label="The three parts of The Back Office">
            {MENU.map(({ title, Icon }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-[8px] border border-cream/15 bg-cream/5 px-5 py-4"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-orange text-cream flex items-center justify-center">
                  <Icon size={22} />
                </span>
                <span className="font-serif text-[19px] font-bold text-cream">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── THE MENU ── */}
      <section className="bg-cream py-[70px] px-[60px] max-md:py-[50px] max-md:px-6">
        <div className={band}>
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-4">
            The menu
          </p>
          <h2
            className="font-serif font-bold text-brown leading-[1.25] mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            Pick from the menu. We do the <em className="text-orange italic">work.</em>
          </h2>
          <p className="text-[15.5px] text-brown/85 leading-[1.8] mb-9 max-w-[70ch]">
            Every engagement is scoped to what you need, and it starts with a conversation, not a
            rate card.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-10 max-md:grid-cols-1 max-md:gap-7">
            {MENU.map(({ title, Icon, items }) => (
              <div key={title}>
                <h3 className="flex items-center gap-3 text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-3">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-orange text-cream flex items-center justify-center">
                    <Icon size={18} />
                  </span>
                  {title}
                </h3>
                <ul className="list-none m-0 p-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-[14.5px] font-medium text-brown/85 py-[7px] border-b border-brown/10 flex items-start gap-[11px] first:border-t first:border-brown/10"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-orange mb-5">
            How it starts
          </p>
          <div className="grid grid-cols-3 gap-8 mb-9 max-md:grid-cols-1 max-md:gap-5">
            {HOW_IT_STARTS.map(({ title, body }, i) => (
              <div key={title} className="flex gap-4 items-start">
                <span className="font-serif font-bold text-orange text-[22px] leading-[1.2] shrink-0">
                  {i + 1}.
                </span>
                <div>
                  <h3 className="font-serif text-[18px] font-bold text-brown mb-1">{title}</h3>
                  <p className="text-[14.5px] text-brown/75 leading-[1.7]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block bg-[#FFFCF6] text-orange text-[14px] font-semibold tracking-[0.04em] px-8 py-[14px] border-[1.5px] border-orange rounded-full no-underline transition-all duration-200 hover:bg-orange hover:text-cream hover:-translate-y-px text-center"
          >
            Start a conversation
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
            These quotes are from Back Office clients.
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

      {/* ── FINAL CTA ── */}
      <section className="bg-orange py-[76px] px-[60px] text-center relative overflow-hidden max-md:px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[620px] mx-auto">
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
        </div>
      </section>
    </>
  )
}
