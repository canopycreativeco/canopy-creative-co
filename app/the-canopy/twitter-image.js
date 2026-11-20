import { headlineImage, ogSize, ogContentType } from '@/lib/og'

export const alt = 'The Canopy, one membership with everything inside, from Canopy Creative Co'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return headlineImage({
    headline: ['One membership with everything', { accent: 'inside.' }],
    subline: 'The Canopy: the foundations course, a new session every month, and The Tool Shed.',
  })
}
