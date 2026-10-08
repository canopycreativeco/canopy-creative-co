import Link from 'next/link'
import { MEMBER_LOGIN_URL } from '@/lib/site'

const footerLinks = [
  { href: '/start-here', label: 'Start here' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/referral-program', label: 'Become an Affiliate' },
  { href: '/legal', label: 'Legal' },
  { href: MEMBER_LOGIN_URL, label: 'Member login', external: true },
]

const linkClass =
  'text-[12px] no-underline text-cream/30 transition-colors duration-200 hover:text-cream/70'

export default function Footer() {
  return (
    <footer className="bg-brown-dark px-[60px] pt-10 pb-9 max-md:px-6">
      {/* data-pill-anchor: the "Send us a message" launcher stops at this row's baseline,
          so it never sits over the links below. See MessageWidget. */}
      <div
        data-pill-anchor
        className="text-[24px] font-bold tracking-[0.18em] uppercase text-orange/85 mb-7"
        style={{ fontFamily: "'Alta', serif" }}
      >
        Canopy Creative Co.
      </div>

      <div className="flex items-center justify-between flex-wrap gap-x-8 gap-y-4 max-md:flex-col max-md:items-start">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 list-none m-0 p-0">
          {footerLinks.map(({ href, label, external }) => (
            <li key={href}>
              {external ? (
                <a href={href} target="_blank" rel="noopener" className={linkClass}>
                  {label}
                </a>
              ) : (
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <p className="text-[12px] tracking-[0.04em] text-cream/30">
          © 2026 Canopy Creative Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
