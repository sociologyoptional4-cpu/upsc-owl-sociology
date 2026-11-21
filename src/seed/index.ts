/**
 * Local/dev seed. Run: npm run seed
 * Idempotent: skips anything that already exists (matched by slug / email).
 */
import type { Payload } from 'payload'
import { getPayload } from 'payload'

import config from '@payload-config'

import { ABOUT_PAGE, SAMPLE_CA, THINKERS, TOPICS, UNITS } from './data'

const CTX = { disableRevalidate: true }

async function ensureAdmin(payload: Payload): Promise<void> {
  const email = process.env.SEED_ADMIN_EMAIL
  const password = process.env.SEED_ADMIN_PASSWORD
  if (!email || !password) {
    payload.logger.warn('SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD missing: skipping admin user')
    return
  }
  const existing = await payload.count({ collection: 'users', where: { email: { equals: email } } })
  if (existing.totalDocs > 0) return
  await payload.create({ collection: 'users', data: { email, password, name: 'Admin', role: 'admin' } })
  payload.logger.info(`admin user created: ${email}`)
}

async function findIdBySlug(payload: Payload, collection: 'papers' | 'units' | 'topics' | 'thinkers' | 'pages' | 'current-affairs', slug: string) {
  const { docs } = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1, depth: 0, draft: true })
  return docs[0]?.id ?? null
}

async function seedSyllabus(payload: Payload): Promise<Map<string, number>> {
  const paperIds = new Map<string, number>()
  for (const paper of [
    { code: 'P1' as const, title: 'Paper 1: Fundamentals of Sociology', slug: 'paper-1' },
    { code: 'P2' as const, title: 'Paper 2: Indian Society — Structure and Change', slug: 'paper-2' },
  ]) {
    const id = (await findIdBySlug(payload, 'papers', paper.slug)) ?? (await payload.create({ collection: 'papers', data: paper })).id
    paperIds.set(paper.code, id)
  }

  const unitIds = new Map<string, number>()
  for (const unit of UNITS) {
    const id =
      (await findIdBySlug(payload, 'units', unit.slug)) ??
      (await payload.create({
        collection: 'units',
        data: { title: unit.title, slug: unit.slug, number: unit.number, paper: paperIds.get(unit.paper)! },
      })).id
    unitIds.set(unit.slug, id)
  }

  const topicIds = new Map<string, number>()
  for (const topic of TOPICS) {
    const id =
      (await findIdBySlug(payload, 'topics', topic.slug)) ??
      (await payload.create({
        collection: 'topics',
        context: CTX,
        data: { title: topic.title, slug: topic.slug, summary: topic.summary, unit: unitIds.get(topic.unit)!, _status: 'published' },
      })).id
    topicIds.set(topic.slug, id)
  }
  return topicIds
}

async function seedThinkers(payload: Payload): Promise<Map<string, number>> {
  const ids = new Map<string, number>()
  for (const thinker of THINKERS) {
    const id =
      (await findIdBySlug(payload, 'thinkers', thinker.slug)) ??
      (await payload.create({
        collection: 'thinkers',
        context: CTX,
        data: { ...thinker, keyIdeas: thinker.keyIdeas.map((idea) => ({ idea })), _status: 'published' },
      })).id
    ids.set(thinker.slug, id)
  }
  return ids
}

async function seedContent(payload: Payload, topicIds: Map<string, number>, thinkerIds: Map<string, number>) {
  if (!(await findIdBySlug(payload, 'pages', ABOUT_PAGE.slug))) {
    await payload.create({ collection: 'pages', context: CTX, data: { ...ABOUT_PAGE, _status: 'published' } })
  }
  if (!(await findIdBySlug(payload, 'current-affairs', SAMPLE_CA.slug))) {
    const { topicSlugs, thinkerSlugs, ...ca } = SAMPLE_CA
    const idsFor = (slugs: string[], map: Map<string, number>) =>
      slugs.map((s) => map.get(s)).filter((id): id is number => typeof id === 'number')
    await payload.create({
      collection: 'current-affairs',
      context: CTX,
      draft: true,
      data: {
        ...ca,
        topics: idsFor(topicSlugs, topicIds),
        thinkers: idsFor(thinkerSlugs, thinkerIds),
        _status: 'draft',
      },
    })
  }
  const samples = [
    { headline: '[Sample] Census data and social stratification', slug: 'sample-census-social-stratification', date: '2026-11-21T00:00:00.000Z', topic: 'theories-of-stratification', thinker: 'karl-marx' },
    { headline: '[Sample] Caste mobility in contemporary India', slug: 'sample-caste-mobility', date: '2026-11-22T00:00:00.000Z', topic: 'perspectives-on-caste', thinker: 'mn-srinivas' },
    { headline: '[Sample] Urban communities and social change', slug: 'sample-urban-social-change', date: '2026-11-23T00:00:00.000Z', topic: 'sanskritisation-westernisation', thinker: 'max-weber' },
  ]
  for (const sample of samples) {
    if (await findIdBySlug(payload, 'current-affairs', sample.slug)) continue
    await payload.create({ collection: 'current-affairs', context: CTX, data: {
      headline: sample.headline, slug: sample.slug, date: sample.date, paper: 'P2', summary: 'Sample note for previewing the published current-affairs views.',
      sources: [{ name: 'Press Information Bureau', url: 'https://pib.gov.in' }],
      topics: [topicIds.get(sample.topic)].filter((id): id is number => typeof id === 'number'),
      thinkers: [thinkerIds.get(sample.thinker)].filter((id): id is number => typeof id === 'number'), isAiGenerated: false, _status: 'published',
      layout: [{ blockType: 'summary', heading: 'Khabar kya hai', points: [{ text: 'Yeh sample item published view aur syllabus linking dikhane ke liye hai.' }] }, { blockType: 'callout', tone: 'tip', title: 'Sociology angle', body: 'Is development ko stratification, mobility aur social change ke concepts se joda ja sakta hai.' }],
    } })
  }
  const existingThinker = thinkerIds.get('karl-marx')
  await payload.updateGlobal({ slug: 'site-settings', context: CTX, data: { featuredThinker: existingThinker ?? undefined } })
  const navItems = [{ label: 'Current Affairs', href: '/current-affairs' }, { label: 'Syllabus', href: '/syllabus' }, { label: 'Thinkers', href: '/thinkers' }, { label: 'About', href: '/about' }]
  await payload.updateGlobal({ slug: 'navigation', context: CTX, data: { header: navItems, footer: navItems } })
}

async function seedSources(payload: Payload): Promise<void> {
  const sources = [
    { name: 'PIB Press Releases (English)', feedUrl: 'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=1', kind: 'official' as const, trust: 3, active: true },
    { name: 'The Hindu National', feedUrl: 'https://www.thehindu.com/news/national/feeder/default.rss', kind: 'rss' as const, trust: 2, active: true },
    { name: 'The Hindu Editorial', feedUrl: 'https://www.thehindu.com/opinion/editorial/feeder/default.rss', kind: 'rss' as const, trust: 2, active: true },
    { name: 'Indian Express Explained', feedUrl: 'https://indianexpress.com/section/explained/feed/', kind: 'rss' as const, trust: 2, active: true },
    { name: 'Down To Earth', feedUrl: 'https://www.downtoearth.org.in/feed/', kind: 'rss' as const, trust: 2, active: true },
    { name: 'PRS Legislative Research (manual)', feedUrl: 'https://prsindia.org/', kind: 'manual' as const, trust: 3, active: false },
  ]
  for (const source of sources) {
    const existing = await payload.find({ collection: 'sources', where: { feedUrl: { equals: source.feedUrl } }, limit: 1, overrideAccess: true })
    if (!existing.docs.length) await payload.create({ collection: 'sources', context: CTX, data: source, overrideAccess: true })
  }
}

// Top-level await: `payload run` exits as soon as the module finishes evaluating.
try {
  const payload = await getPayload({ config })
  await ensureAdmin(payload)
  const topicIds = await seedSyllabus(payload)
  const thinkerIds = await seedThinkers(payload)
  await seedContent(payload, topicIds, thinkerIds)
  await seedSources(payload)
  payload.logger.info('seed complete')
  process.exit(0)
} catch (error: unknown) {
  console.error('seed failed:', error)
  process.exit(1)
}
