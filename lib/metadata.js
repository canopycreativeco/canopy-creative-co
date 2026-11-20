export const SITE_URL = 'https://www.canopycreativeco.com'
export const SITE_NAME = 'Canopy Creative Co'

/* The logo share image from app/opengraph-image.js and app/twitter-image.js. Next drops the
   inherited image whenever a page sets its own openGraph block, so every page names it here.
   An explicit image here also beats a page's own opengraph-image file, so a page that has
   opengraph-image.js / twitter-image.js beside it passes `ownImage: true` (and an alt). */
const DEFAULT_IMAGE = {
  width: 1200,
  height: 630,
  alt: 'Canopy Creative Co. logo, cream lettering on the brand orange',
}

/* Per-page metadata with matching Open Graph and Twitter fields. Use it in every page that
   sets metadata, so the share card always has a title, description, url and image. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  absoluteTitle = false,
  ownImage = false,
  imageAlt,
}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const imageBase = ownImage ? path : ''
  const image = { ...DEFAULT_IMAGE, ...(imageAlt ? { alt: imageAlt } : {}) }
  const shareTitle = ogTitle || (absoluteTitle ? title : `${title} | ${SITE_NAME}`)
  const shareDescription = ogDescription || description
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      title: shareTitle,
      description: shareDescription,
      url,
      images: [{ url: `${imageBase}/opengraph-image`, ...image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: [{ url: `${imageBase}/twitter-image`, ...image }],
    },
    alternates: { canonical: url },
  }
}
