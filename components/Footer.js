import Link from 'next/link'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal', label: 'Legal' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-dark px-[60px] py-10 flex items-center justify-between flex-wrap gap-5 max-md:px-6 max-md:flex-col max-md:items-start">
      <div className="text-[24px] font-bold tracking-[0.18em] uppercase text-orange/85" style={{ fontFamily: "'Alta', serif" }}>
        Canopy Creative Co.
      </div>

      <p className="text-[12px] tracking-[0.04em] text-cream/30">
        © 2026 Canopy Creative Co. All rights reserved.
      </p>

      <ul className="flex gap-6 list-none m-0 p-0">
        {footerLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[12px] no-underline text-cream/30 transition-colors duration-200 hover:text-cream/70"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
