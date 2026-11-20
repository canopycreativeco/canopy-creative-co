// Shared Open Graph / Twitter card images (1200x630), rendered at build time with next/og.
// Two registers from Brand Book v4: the logo leads (site default) or a headline leads (key pages).
// Fonts: all bundled in public/fonts, so a build never depends on Google Fonts being reachable.
// Alta for the wordmark. Libre Baskerville and DM Sans (the site's own Google fonts, SIL Open Font
// License, see the OFL-*.txt files beside them) for the headline cards. A missing file fails the
// build loudly instead of quietly rendering the cards in the wrong font.
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

const font = (file) => readFile(join(process.cwd(), 'public/fonts', file))

async function loadFonts({ withHeadline }) {
  const fonts = [{ name: 'Alta', data: await font('alta-regular.otf'), style: 'normal', weight: 400 }]
  if (!withHeadline) return fonts
  const [baskerville, baskervilleItalic, dmSans] = await Promise.all([
    font('libre-baskerville-regular.ttf'),
    font('libre-baskerville-italic.ttf'),
    font('dm-sans-regular.ttf'),
  ])
  fonts.push(
    { name: 'Libre Baskerville', data: baskerville, style: 'normal', weight: 400 },
    { name: 'Libre Baskerville', data: baskervilleItalic, style: 'italic', weight: 400 },
    { name: 'DM Sans', data: dmSans, style: 'normal', weight: 400 }
  )
  return fonts
}

function Wordmark({ size, color, tracking = '0.06em', stroke = 0 }) {
  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'Alta',
        fontSize: size,
        color,
        letterSpacing: tracking,
        textTransform: 'uppercase',
        // Alta only comes in one light weight. A stroke in the same color thickens the
        // letters so the wordmark holds up at the small size share previews show.
        ...(stroke ? { WebkitTextStroke: `${stroke}px ${color}` } : {}),
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
        <Wordmark size={44} color={ORANGE} tracking="0.16em" stroke={1.6} />
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
