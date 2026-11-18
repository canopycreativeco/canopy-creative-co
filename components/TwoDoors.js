import Link from 'next/link'
import { CANOPY_URL, BACK_OFFICE_URL } from '@/lib/site'
import { IconLearning, IconSystems } from '@/components/Icons'

/* "Work with us" on the homepage. The two doors from /start-here, slimmed down to scan in
   a few seconds: badge, name, one line, three short points, button. No price here, the
   homepage stays price-free (the price lives on /the-canopy and /start-here).

   The whole card is the click target. The button carries a stretched ::after overlay
   so there is one real link per card and no nested anchors. */

const cardBtn =
  'block w-full bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-6 py-[14px] rounded-full no-underline text-center transition-colors duration-200 group-hover:bg-[#b04400] after:absolute after:inset-0 after:z-[1] after:content-[""] after:rounded-[8px]'
const card =
  'group relative flex flex-col rounded-[8px] overflow-hidden shadow-[0_2px_12px_rgba(59,30,8,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(59,30,8,0.14)]'
const cardTop = 'px-8 pt-8 pb-7 border-b-2 border-orange flex items-start justify-between gap-5 max-md:px-6'
const cardBody = 'flex flex-col flex-1 px-8 pt-6 pb-8 max-md:px-6'
const badge = 'inline-block text-[10.5px] font-bold tracking-[0.18em] uppercase px-3 py-[5px] rounded-full mb-4'
const iconRing = 'shrink-0 w-14 h-14 rounded-full bg-orange text-cream flex items-center justify-center'

const DOORS = [
  {
    dark: false,
    badge: 'Learn it with us',
    name: 'The Canopy',
    tagline: 'One membership, everything inside',
    points: [
      'The Roots, the foundations course',
      'A new session every month',
      'The Tool Shed, 25+ finished tools',
    ],
    button: 'See The Canopy',
    href: CANOPY_URL,
    Icon: IconLearning,
  },
  {
    dark: true,
    badge: 'Hand it to us',
    name: 'The Back Office',
    tagline: 'Starts with a conversation',
    points: [
      'The books, kept every month',
      'The numbers, from cash flow to profit',
      'The systems behind it all',
    ],
    button: 'See The Back Office',
    href: BACK_OFFICE_URL,
    Icon: IconSystems,
  },
]

export default function TwoDoors() {
  return (
    <div className="max-w-[940px] mx-auto grid grid-cols-2 gap-8 items-stretch max-md:grid-cols-1 max-md:gap-6">
      {DOORS.map(({ dark, badge: label, name, tagline, points, button, href, Icon }) => (
        <div key={name} className={`${card} ${dark ? 'bg-brown' : 'bg-[#FFFCF6]'}`}>
          <div className={`${cardTop} ${dark ? 'bg-brown-dark' : 'bg-cream'}`}>
            <div>
              <span className={`${badge} ${dark ? 'bg-[#FFEB99] text-brown' : 'bg-orange text-cream'}`}>
                {label}
              </span>
              <h3
                className={`font-serif text-[32px] font-bold leading-[1.1] max-md:text-[28px] ${dark ? 'text-cream' : 'text-brown'}`}
              >
                {name}
              </h3>
              <p className={`text-[15px] font-bold mt-2 ${dark ? 'text-[#FFEB99]' : 'text-orange'}`}>{tagline}</p>
            </div>
            <span className={iconRing}>
              <Icon size={28} />
            </span>
          </div>
          <div className={cardBody}>
            <ul className="list-none m-0 p-0 mb-7">
              {points.map((p) => (
                <li
                  key={p}
                  className={`text-[15px] font-medium py-[6px] flex items-start gap-[11px] ${dark ? 'text-cream/85' : 'text-brown/85'}`}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[9px]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link href={href} className={cardBtn}>
                {button}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
