// Builds the static site icons from the Alta font: app/favicon.ico (16, 32, 48),
// app/icon.png (512), app/apple-icon.png (180) and public/apple-touch-icon.png (180).
// The mark is the brand avatar form: butter Alta "C" on the flat orange field.
// Run from the repo root: node scripts/build-icons.mjs
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createElement as h } from 'react'
import { ImageResponse } from 'next/dist/compiled/@vercel/og/index.node.js'

const ORANGE = '#CC4E00'
const BUTTER = '#FFEB99'
const root = process.cwd()
const alta = await readFile(join(root, 'public/fonts/alta-regular.otf'))

async function mark(size, { rounded = false } = {}) {
  const res = new ImageResponse(
    h(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: ORANGE,
          borderRadius: rounded ? size * 0.22 : 0,
        },
      },
      h(
        'div',
        {
          style: {
            fontFamily: 'Alta',
            // Small favicon sizes get a larger C so the thin Alta strokes still read
            fontSize: size * (size <= 48 ? 0.98 : 0.8),
            color: BUTTER,
            lineHeight: 1,
            // Optical centering for Alta's C inside the em box
            marginTop: size * 0.01,
          },
        },
        'C'
      )
    ),
    { width: size, height: size, fonts: [{ name: 'Alta', data: alta, weight: 400, style: 'normal' }] }
  )
  return Buffer.from(await res.arrayBuffer())
}

// ICO container holding PNG images (supported by every current browser)
function ico(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  const dir = Buffer.alloc(16 * pngs.length)
  let offset = 6 + dir.length
  pngs.forEach(({ size, data }, i) => {
    const o = i * 16
    dir.writeUInt8(size >= 256 ? 0 : size, o)
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1)
    dir.writeUInt8(0, o + 2)
    dir.writeUInt8(0, o + 3)
    dir.writeUInt16LE(1, o + 4)
    dir.writeUInt16LE(32, o + 6)
    dir.writeUInt32LE(data.length, o + 8)
    dir.writeUInt32LE(offset, o + 12)
    offset += data.length
  })
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)])
}

const icoSizes = [16, 32, 48]
const icoPngs = []
for (const size of icoSizes) icoPngs.push({ size, data: await mark(size) })
await writeFile(join(root, 'app/favicon.ico'), ico(icoPngs))

await writeFile(join(root, 'app/icon.png'), await mark(512))

// iOS rounds the corners itself, so the apple icon stays a full square
const apple = await mark(180)
await writeFile(join(root, 'app/apple-icon.png'), apple)
await writeFile(join(root, 'public/apple-touch-icon.png'), apple)

console.log('icons written')
