'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLabel = navLinks.find(({ href }) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)
  )?.label ?? ''

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200]"
      style={{ background: 'rgba(253,246,236,0.95)', backdropFilter: 'blur(8px)' }}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden md:flex h-[68px] items-center justify-between px-[60px] border-b border-brown/[0.08]">
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
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden border-b border-brown/[0.08]">
        {/* Mobile top bar */}
        <div className="h-[60px] flex items-center justify-between px-5">
          <Link
            href="/"
            className="text-[18px] font-bold tracking-[0.2em] uppercase text-orange no-underline"
            style={{ fontFamily: "'Alta', serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Canopy Creative Co.
          </Link>

          <span className="text-[13px] font-medium tracking-[0.05em] text-brown/60 absolute left-1/2 -translate-x-1/2">
            {currentLabel}
          </span>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
          >
            <span className="block h-[2px] w-5 bg-brown rounded-full" />
            <span className="block h-[2px] w-5 bg-brown rounded-full" />
            <span className="block h-[2px] w-5 bg-brown rounded-full" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="border-t border-brown/[0.08] py-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'block px-5 py-3 text-[14px] font-medium tracking-[0.04em] no-underline',
                    isActive ? 'text-orange' : 'text-brown/70',
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
