import { headlineImage, ogSize, ogContentType } from '@/lib/og'

export const alt = 'The monthly session from Canopy Creative Co'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return headlineImage({
    headline: ['The monthly', { accent: 'session.' }],
    subline: 'A new session every month, free to watch until the next one drops.',
  })
}
