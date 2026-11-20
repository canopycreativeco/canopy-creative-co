import { headlineImage, ogSize, ogContentType } from '@/lib/og'

export const alt = 'The Back Office, finance and operations for creative businesses, from Canopy Creative Co'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return headlineImage({
    headline: ['Finance and operations,', { accent: 'handled.' }],
    subline: 'The Back Office, for creative businesses. It starts with a conversation.',
  })
}
