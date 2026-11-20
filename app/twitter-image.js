import { logoImage, ogSize, ogContentType } from '@/lib/og'

export const alt = 'Canopy Creative Co. logo, cream lettering on the brand orange'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return logoImage()
}
