'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between px-[60px] border-b border-brown/[0.08]"
      style={{ background: 'rgba(253,246,236,0.95)', backdropFilter: 'blur(8px)' }}
    >
      <Link
        href="/"
        className="text-[25px] font-bold tracking-[0.2em] uppercase text-orange no-underline"
        style={{ fontFamily: "'Alta', serif" }}
      >
        Canopy Creative Co.
      </Link>

      <ul className="flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={[
                  'text-[13px] font-medium tracking-[0.05em] no-underline transition-opacity duration-200',
                  isActive ? 'text-orange opacity-100' : 'text-brown opacity-60 hover:opacity-100',
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          )
        })}
        <li>
          <Link
            href="/contact"
            className="bg-orange text-cream text-[13px] font-semibold tracking-[0.04em] px-5 py-[9px] rounded-[3px] no-underline transition-colors duration-200 hover:bg-[#b04400]"
          >
            Book a call
          </Link>
        </li>
      </ul>
    </nav>
  )
}
