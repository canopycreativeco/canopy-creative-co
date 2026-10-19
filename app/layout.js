import { Libre_Baskerville, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MessageWidget from '@/components/MessageWidget'
import Script from 'next/script'

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
  metadataBase: new URL('https://www.canopycreativeco.com'),
  title: {
    default: 'Canopy Creative Co',
    template: '%s | Canopy Creative Co',
  },
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MessageWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Canopy Creative Co',
              url: 'https://www.canopycreativeco.com',
              description: 'Canopy Creative Co teaches operators to run lean businesses with AI. A free session every month, The Canopy membership, and The Back Office for creative businesses that would rather hand it off.',
              areaServed: 'US',
              serviceType: ['AI education for business operators', 'Business operations advisory'],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LYG1SEG3Q5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LYG1SEG3Q5');
          `}
        </Script>
      </body>
    </html>
  )
}
