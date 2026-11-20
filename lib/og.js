// Shared Open Graph / Twitter card images (1200x630), rendered at build time with next/og.
// Two registers from Brand Book v4: the logo leads (site default) or a headline leads (key pages).
// Fonts: Alta ships in public/fonts. Libre Baskerville and DM Sans (the site's own Google fonts)
// are pulled from Google Fonts at build, and the image still renders with fallbacks if that fails.
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const ORANGE = '#CC4E00'
const BUTTER = '#FFEB99'
const CREAM = '#FDF6EC'
const BROWN = '#3B1E08'
const BROWN_MUTED = '#6F4A2C'

async function googleFont(family, variants) {
  // No browser user agent, so Google Fonts answers with TrueType files, which next/og can read
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family}:${variants}&display=swap`)
  ).text()
  const faces = [...css.matchAll(/font-style:\s*(\w+);[\s\S]*?font-weight:\s*(\d+);[\s\S]*?src:\s*url\(([^)]+)\)/g)]
  return Promise.all(
    faces.map(async ([, style, weight, url]) => ({
      style,
      weight: Number(weight),
      data: await (await fetch(url)).arrayBuffer(),
    }))
  )
}

async function loadFonts({ withHeadline }) {
  const fonts = [
    {
      name: 'Alta',
      data: await readFile(join(process.cwd(), 'public/fonts/alta-regular.otf')),
      style: 'normal',
      weight: 400,
    },
  ]
  if (!withHeadline) return fonts
  try {
    const [baskerville, dmSans] = await Promise.all([
      googleFont('Libre+Baskerville', 'ital,wght@0,400;1,400'),
      googleFont('DM+Sans', 'wght@400'),
    ])
    for (const f of baskerville) fonts.push({ name: 'Libre Baskerville', ...f })
    for (const f of dmSans) fonts.push({ name: 'DM Sans', ...f })
  } catch {
    // Build keeps going with the bundled fallback face rather than failing the deploy
  }
  return fonts
}

function Wordmark({ size, color, tracking = '0.06em' }) {
  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'Alta',
        fontSize: size,
        color,
        letterSpacing: tracking,
        textTransform: 'uppercase',
      }}
    >
      Canopy Creative Co.
    </div>
  )
}

/* Logo register: the stacked wordmark, butter on the flat orange field, as in the logo file. */
export async function logoImage() {
  const fonts = await loadFonts({ withHeadline: false })
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: ORANGE,
          fontFamily: 'Alta',
          color: BUTTER,
          fontSize: 138,
          lineHeight: 1.08,
          letterSpacing: '0.06em',
        }}
      >
        <div style={{ display: 'flex' }}>CANOPY</div>
        <div style={{ display: 'flex' }}>CREATIVE</div>
        <div style={{ display: 'flex' }}>CO.</div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}

/* Headline register: the signature Baskerville line on cream, one key word in orange italic.
   `headline` is a list of parts, e.g. ['The monthly', { accent: 'session.' }]. */
export async function headlineImage({ headline, subline }) {
  const fonts = await loadFonts({ withHeadline: true })
  const words = headline.flatMap((part) =>
    typeof part === 'string'
      ? part.split(' ').filter(Boolean).map((w) => ({ w, accent: false }))
      : part.accent.split(' ').filter(Boolean).map((w) => ({ w, accent: true }))
  )
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: CREAM,
          padding: '72px 84px 0',
        }}
      >
        <Wordmark size={34} color={ORANGE} tracking="0.2em" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Libre Baskerville',
              fontSize: 82,
              lineHeight: 1.2,
              color: BROWN,
            }}
          >
            {words.map(({ w, accent }, i) => (
              <span
                key={i}
                style={{
                  marginRight: i === words.length - 1 ? 0 : '0.26em',
                  ...(accent ? { color: ORANGE, fontStyle: 'italic' } : {}),
                }}
              >
                {w}
              </span>
            ))}
          </div>
          {subline ? (
            <div
              style={{
                display: 'flex',
                marginTop: 28,
                fontFamily: 'DM Sans',
                fontSize: 34,
                lineHeight: 1.4,
                color: BROWN_MUTED,
                maxWidth: 960,
              }}
            >
              {subline}
            </div>
          ) : null}
        </div>
        <div style={{ display: 'flex', height: 22, background: ORANGE, margin: '0 -84px' }} />
      </div>
    ),
    { ...ogSize, fonts }
  )
}
