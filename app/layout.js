import { Libre_Baskerville, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Canopy Creative Co.',
  description: 'Operations & Finance Consulting for Creative Businesses — wherever you are, we\'ve got you covered.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
