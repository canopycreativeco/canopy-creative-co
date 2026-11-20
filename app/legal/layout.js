import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  ...pageMetadata({
    title: 'Legal',
    description: 'Privacy policy, terms of use, and disclaimers for Canopy Creative Co.',
    path: '/legal',
  }),
  robots: 'noindex',
}

export default function LegalLayout({ children }) {
  return children
}
