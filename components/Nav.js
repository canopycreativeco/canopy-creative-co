'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CANOPY_CHECKOUT_URL, MEMBER_LOGIN_URL } from '@/lib/site'

/* Minimal header: the logo, one link to the page where people choose between the two
   doors, and Login + Join Now (straight to Circle checkout). About lives in the footer. Contact is reached only from
   The Back Office page. */
const navLinks = [{ href: '/start-here', label: 'Work with us' }]

const btnLogin =
  'bg-transparent text-brown text-[12.5px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap px-5 py-[8px] border-[1.5px] border-brown/70 rounded-[8px] no-underline transition-colors duration-200 hover:bg-brown hover:text-cream'

const btnJoin =
  'bg-orange text-cream text-[12.5px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap px-5 py-[9.5px] rounded-[8px] no-underline transition-colors duration-200 hover:bg-[#b04400]'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

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

        <ul className="flex items-center gap-4 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href} className="mr-4">
                <Link
                  href={href}
                  className={[
                    'text-[13px] font-medium tracking-[0.05em] whitespace-nowrap no-underline transition-opacity duration-200',
                    isActive ? 'text-orange opacity-100' : 'text-brown opacity-60 hover:opacity-100',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <a href={MEMBER_LOGIN_URL} target="_blank" rel="noopener" className={btnLogin}>
              Login
            </a>
          </li>
          <li>
            <a href={CANOPY_CHECKOUT_URL} target="_blank" rel="noopener" className={btnJoin}>
              Join Now
            </a>
          </li>
        </ul>
      </div>

      {/* ── MOBILE ── Join stays visible, the rest sits behind the menu so the logo fits. */}
      <div className="md:hidden border-b border-brown/[0.08]">
        <div className="h-[60px] flex items-center justify-between gap-2 px-4">
          <Link
            href="/"
            className="text-[14px] font-bold tracking-[0.12em] uppercase text-orange no-underline whitespace-nowrap"
            style={{ fontFamily: "'Alta', serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Canopy Creative Co.
          </Link>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CANOPY_CHECKOUT_URL}
              target="_blank"
              rel="noopener"
              className={`${btnJoin} !px-3 !py-[8px] !text-[11px] !tracking-[0.06em]`}
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
            >
              <span className="block h-[2px] w-5 bg-brown rounded-full" />
              <span className="block h-[2px] w-5 bg-brown rounded-full" />
              <span className="block h-[2px] w-5 bg-brown rounded-full" />
            </button>
          </div>
        </div>

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
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3 text-[14px] font-medium tracking-[0.04em] no-underline text-brown/70"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
