import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

import { P1_POSTER_SPECS } from './poster-specs-p1'
import { P2A_POSTER_SPECS } from './poster-specs-p2a'
import { P2B_POSTER_SPECS } from './poster-specs-p2b'

export type CardTone = 'mint' | 'yellow' | 'lavender' | 'pink' | 'teal' | 'indigo' | 'terracotta' | 'cream'
export type IconKind = 'scale' | 'network' | 'gear' | 'book' | 'temple' | 'village' | 'factory' | 'pyramid' | 'shield' | 'leaf' | 'chart' | 'globe'

export type PosterCard = {
  title: string
  subtitle?: string
  tone: CardTone
  icon?: IconKind
  bullets: string[]
}

export type PosterSpec = {
  file: string
  paper: 'P1' | 'P2'
  unitLabel: string
  footer: string
  banner: string
  title: string
  subtitle?: string
  layout: 'matrix2x2' | 'layers3' | 'columns3' | 'flowSplit'
  flowSteps?: { label: string; sub?: string; tone?: CardTone }[]
  cards: PosterCard[]
}

const TONE_HEX: Record<CardTone, { bg: string; header?: string; headerText?: string }> = {
  mint: { bg: '#DDF0E4' },
  yellow: { bg: '#F7EAB8' },
  lavender: { bg: '#E6E0F4' },
  pink: { bg: '#F6DFDF' },
  cream: { bg: '#FFFDF8' },
  teal: { bg: '#F7F3E8', header: '#2F7D6D', headerText: '#FFFFFF' },
  indigo: { bg: '#F7F3E8', header: '#3B5BA9', headerText: '#FFFFFF' },
  terracotta: { bg: '#F7F3E8', header: '#C2621F', headerText: '#FFFFFF' },
}

const esc = (s: string): string =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    if (!cur) cur = w
    else if (cur.length + 1 + w.length <= maxChars) cur += ' ' + w
    else {
      lines.push(cur)
      cur = w
    }
  }
  if (cur) lines.push(cur)
  return lines
}

function renderIcon(kind: IconKind | undefined, cx: number, cy: number): string {
  const s = 'stroke="#14213D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"'
  switch (kind ?? 'book') {
    case 'scale':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M18 4v26M8 30h20M6 12h24M6 12l-3 9h6zM30 12l-3 9h6z" ${s}/></g>`
    case 'network':
      return `<g transform="translate(${cx - 18},${cy - 18})"><circle cx="18" cy="8" r="4" fill="#E8833A" stroke="#14213D" stroke-width="2"/><circle cx="7" cy="27" r="4" fill="#2F7D6D" stroke="#14213D" stroke-width="2"/><circle cx="29" cy="27" r="4" fill="#3B5BA9" stroke="#14213D" stroke-width="2"/><path d="M15 11L9 23M21 11l6 12M11 27h14" ${s}/></g>`
    case 'gear':
      return `<g transform="translate(${cx - 18},${cy - 18})"><circle cx="18" cy="18" r="10" fill="#FFFDF8" stroke="#14213D" stroke-width="2.2"/><circle cx="18" cy="18" r="4" fill="#E8833A" stroke="#14213D" stroke-width="2"/><path d="M18 4v4M18 28v4M4 18h4M28 18h4M8 8l3 3M25 25l3 3M28 8l-3 3M11 25l-3 3" ${s}/></g>`
    case 'pyramid':
      return `<g transform="translate(${cx - 18},${cy - 18})"><polygon points="18,4 33,31 3,31" fill="#DDF0E4" stroke="#14213D" stroke-width="2.2"/><path d="M12 15h12M8 23h20" ${s}/></g>`
    case 'factory':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M4 31V15l9 6V15l9 6V8h9v23z" fill="#F7EAB8" stroke="#14213D" stroke-width="2.2"/><path d="M10 25h3M18 25h3M25 14h3" ${s}/></g>`
    case 'village':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M4 19L18 7l14 12v12H4z" fill="#F7EAB8" stroke="#14213D" stroke-width="2.2"/><rect x="14" y="21" width="8" height="10" fill="#E8833A" stroke="#14213D" stroke-width="2"/></g>`
    case 'shield':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M18 4l12 5v9c0 8-5 12-12 14C11 30 6 26 6 18V9z" fill="#E6E0F4" stroke="#14213D" stroke-width="2.2"/><path d="M13 18l3 3 7-7" ${s}/></g>`
    case 'leaf':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M7 29C7 15 17 7 30 6c-1 13-9 23-23 23z" fill="#DDF0E4" stroke="#14213D" stroke-width="2.2"/><path d="M7 29L22 14" ${s}/></g>`
    case 'chart':
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M5 30h26M9 30V20M18 30V12M27 30V16" ${s}/><rect x="7" y="19" width="5" height="11" fill="#3B5BA9" stroke="#14213D" stroke-width="1.8"/><rect x="16" y="11" width="5" height="19" fill="#E8833A" stroke="#14213D" stroke-width="1.8"/><rect x="25" y="15" width="5" height="15" fill="#2F7D6D" stroke="#14213D" stroke-width="1.8"/></g>`
    case 'globe':
      return `<g transform="translate(${cx - 18},${cy - 18})"><circle cx="18" cy="18" r="13" fill="#E6E0F4" stroke="#14213D" stroke-width="2.2"/><ellipse cx="18" cy="18" rx="6" ry="13" ${s}/><path d="M5 18h26M7 12h22M7 24h22" ${s}/></g>`
    case 'temple':
      return `<g transform="translate(${cx - 18},${cy - 18})"><polygon points="5,14 31,14 18,5" fill="#F7EAB8" stroke="#14213D" stroke-width="2.2" stroke-linejoin="round"/><path d="M8 14v13M18 14v13M28 14v13M4 30h28" ${s}/></g>`
    default:
      return `<g transform="translate(${cx - 18},${cy - 18})"><path d="M5 8c5-2 9 0 13 2 4-2 8-4 13-2v20c-5-2-9 0-13 2-4-2-8-4-13-2zM18 10v20" fill="#FFFDF8" stroke="#14213D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>`
  }
}

function renderHeader(spec: PosterSpec): string {
  const titleLines = wrapText(spec.title, 28)
  const titleY = titleLines.length === 1 ? 150 : 138
  const titleSvg = titleLines
    .map(
      (line, idx) =>
        `<text x="409.5" y="${titleY + idx * 42}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="37" font-weight="bold" fill="#14213D">${esc(line)}</text>`,
    )
    .join('\n')
  const ruleY = titleY + titleLines.length * 42 + (spec.subtitle ? 20 : 2)
  const subSvg = spec.subtitle
    ? `<text x="409.5" y="${titleY + titleLines.length * 42 + 6}" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#3D4A66">${esc(spec.subtitle)}</text>`
    : ''
  return `
  <g>
    <polygon points="150,48 669,48 654,67 669,86 150,86 165,67" fill="#C2621F" stroke="#14213D" stroke-width="2"/>
    <text x="409.5" y="73" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="bold" letter-spacing="0.4" fill="#FFFFFF">${esc(spec.banner)}</text>
    ${titleSvg}
    ${subSvg}
    <line x1="72" y1="${ruleY}" x2="747" y2="${ruleY}" stroke="#14213D" stroke-width="2.2"/>
    <line x1="72" y1="${ruleY + 5}" x2="747" y2="${ruleY + 5}" stroke="#D9CFBC" stroke-width="1.2"/>
  </g>`
}

function renderCardBlock(card: PosterCard, x: number, y: number, w: number, h: number, maxChars: number): string {
  const style = TONE_HEX[card.tone]
  const hasHeader = Boolean(style.header)
  const shadow = `<rect x="${x + 4}" y="${y + 4}" width="${w}" height="${h}" rx="14" fill="#14213D" opacity="0.9"/>`
  const box = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${style.bg}" stroke="#14213D" stroke-width="2.2"/>`
  let topBar = ''
  let contentStartY = y + 36
  if (hasHeader && style.header) {
    topBar = `<path d="M${x} ${y + 14} Q${x} ${y} ${x + 14} ${y} L${x + w - 14} ${y} Q${x + w} ${y} ${x + w} ${y + 14} L${x + w} ${y + 48} L${x} ${y + 48} Z" fill="${style.header}" stroke="#14213D" stroke-width="2.2"/>`
    const headLines = wrapText(card.title, maxChars - 2)
    topBar += `<text x="${x + 18}" y="${y + 31}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="bold" fill="#FFFFFF">${esc(headLines[0] ?? '')}</text>`
    contentStartY = y + 78
  } else {
    const iconBadge = card.icon ? renderIcon(card.icon, x + w - 32, y + 32) : ''
    const titleMax = w < 400 ? (card.icon ? 19 : 25) : card.icon ? 46 : 56
    const titleLines = wrapText(card.title, titleMax)
    const tFont = w < 400 ? 18.5 : 20
    const tSvg = titleLines
      .map(
        (line, i) =>
          `<text x="${x + 20}" y="${y + 34 + i * 22}" font-family="Georgia, serif" font-size="${tFont}" font-weight="bold" fill="#14213D">${esc(line)}</text>`,
      )
      .join('\n')
    const sub = card.subtitle
      ? `<text x="${x + 20}" y="${y + 38 + titleLines.length * 22}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.5" font-weight="bold" fill="#C2621F">${esc(card.subtitle)}</text>`
      : ''
    topBar = `${iconBadge}${tSvg}${sub}`
    contentStartY = y + 48 + titleLines.length * 22 + (card.subtitle ? 18 : 6)
  }

  let curY = contentStartY + 10
  const bulletsSvg = card.bullets
    .map((b) => {
      const lines = wrapText(b, maxChars)
      const block = lines
        .map((line, idx) => {
          const prefix = idx === 0 ? '• ' : '  '
          const lY = curY + idx * 21
          return `<text x="${x + 20}" y="${lY}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.5" fill="#14213D">${esc(prefix + line)}</text>`
        })
        .join('\n')
      curY += lines.length * 21 + 10
      return block
    })
    .join('\n')

  return `${shadow}${box}${topBar}${bulletsSvg}`
}

function renderMatrix2x2(cards: PosterCard[]): string {
  const positions = [
    [60, 232, 336, 336],
    [418, 232, 336, 336],
    [60, 590, 336, 336],
    [418, 590, 336, 336],
  ] as const
  return cards.slice(0, 4).map((c, i) => {
    const [x, y, w, h] = positions[i]!
    return renderCardBlock(c, x, y, w, h, 31)
  }).join('\n')
}

function renderLayers3(cards: PosterCard[]): string {
  const ys = [232, 476, 720]
  return cards.slice(0, 3).map((c, i) => renderCardBlock(c, 62, ys[i]!, 695, 222, 62)).join('\n')
}

function renderColumns3(spec: PosterSpec): string {
  const xs = [54, 297, 540]
  const cols = spec.cards.slice(0, 3).map((c, i) => renderCardBlock(c, xs[i]!, 240, 224, 530, 21)).join('\n')
  const footerBox = `
    <rect x="58" y="800" width="706" height="122" rx="14" fill="#DDF0E4" stroke="#14213D" stroke-width="2.2"/>
    <text x="411" y="838" text-anchor="middle" font-family="Georgia, serif" font-size="19" font-weight="bold" fill="#14213D">Comparative Synthesis Snapshot</text>
    <text x="411" y="870" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.5" fill="#14213D">${esc(spec.unitLabel)}</text>
    <text x="411" y="898" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="bold" fill="#2F7D6D">Connect Paper 1 Theory • Paper 2 Empirical India • Contemporary Cases</text>`
  return `${cols}\n${footerBox}`
}

function renderFlowSplit(spec: PosterSpec): string {
  const steps = spec.flowSteps ?? []
  const count = Math.max(2, Math.min(4, steps.length))
  const boxW = Math.floor((675 - (count - 1) * 26) / count)
  const stepSvg = steps.slice(0, count).map((st, i) => {
    const sx = 72 + i * (boxW + 26)
    const stFill = TONE_HEX[st.tone ?? 'yellow'].bg
    const arrow =
      i < count - 1
        ? `<path d="M${sx + boxW + 4} 318 L${sx + boxW + 21} 318 M${sx + boxW + 15} 312 L${sx + boxW + 21} 318 L${sx + boxW + 15} 324" stroke="#14213D" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
        : ''
    const labelLines = wrapText(st.label, Math.floor(boxW / 9.5))
    const subLines = st.sub ? wrapText(st.sub, Math.floor(boxW / 8)) : []
    return `
      <rect x="${sx}" y="274" width="${boxW}" height="88" rx="11" fill="${stFill}" stroke="#14213D" stroke-width="2"/>
      ${labelLines.map((l, li) => `<text x="${sx + boxW / 2}" y="${302 + li * 19}" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" font-weight="bold" fill="#14213D">${esc(l)}</text>`).join('')}
      ${subLines.map((l, li) => `<text x="${sx + boxW / 2}" y="${336 + li * 16}" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.5" fill="#3D4A66">${esc(l)}</text>`).join('')}
      ${arrow}`
  }).join('\n')

  const flowBox = `
    <rect x="60" y="232" width="699" height="154" rx="14" fill="#FFFDF8" stroke="#14213D" stroke-width="2.2"/>
    <text x="409.5" y="259" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="bold" fill="#14213D">${esc(spec.unitLabel)}</text>
    ${stepSvg}`

  const bottomCards = [
    renderCardBlock(spec.cards[0]!, 60, 410, 336, 520, 31),
    renderCardBlock(spec.cards[1]!, 418, 410, 336, 520, 31),
  ].join('\n')
  return `${flowBox}\n${bottomCards}`
}

function buildSvg(spec: PosterSpec): string {
  const body =
    spec.layout === 'matrix2x2'
      ? renderMatrix2x2(spec.cards)
      : spec.layout === 'layers3'
        ? renderLayers3(spec.cards)
        : spec.layout === 'columns3'
          ? renderColumns3(spec)
          : renderFlowSplit(spec)

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="819" height="1024" viewBox="0 0 819 1024">
  <defs>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="0.8" fill="#D9CFBC" opacity="0.45"/>
      <circle cx="16" cy="14" r="0.6" fill="#D9CFBC" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="819" height="1024" fill="#F6F1E7"/>
  <rect width="819" height="1024" fill="url(#dots)"/>
  <rect x="26" y="26" width="767" height="952" rx="22" fill="none" stroke="#14213D" stroke-width="2.6"/>
  ${renderHeader(spec)}
  ${body}
  <rect x="255" y="960" width="309" height="36" rx="18" fill="#14213D"/>
  <text x="409.5" y="984" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="0.8" fill="#F6F1E7">${esc(spec.footer)}</text>
</svg>`
}

async function main(): Promise<void> {
  const outDir = path.resolve(process.cwd(), 'public/assets/infographics')
  fs.mkdirSync(outDir, { recursive: true })
  const specs = [...P1_POSTER_SPECS, ...P2A_POSTER_SPECS, ...P2B_POSTER_SPECS]
  for (const spec of specs) {
    const svg = buildSvg(spec)
    const outPath = path.join(outDir, spec.file)
    await sharp(Buffer.from(svg)).resize(819, 1024).webp({ quality: 86 }).toFile(outPath)
    const kb = Math.round(fs.statSync(outPath).size / 1024)
    console.log(`Rendered ${spec.file} (${kb} KB)`)
  }
}

await main()