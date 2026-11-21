import { describe, expect, it } from 'vitest'

import { blogBlockSchema, organizeOutputSchema } from '@/blocks/blog/ai-schema'
import { insertLink, makeBlockNode } from '@/lib/blog/markdown'
import { sanitizeOrganize, type Allowed } from '@/lib/blog/organize'
import { checkLexicalPreservation, checkPreservation } from '@/lib/blog/preserve'
import { applyMarkers, contentHash, countWords, extractToc, lexicalToMarkdown, lexicalToPlain, readingTimeMinutes, type LexNode } from '@/lib/blog/text'
import { isReservedTopLevelSlug } from '@/lib/slug'

describe('blog platform utilities', () => {
  it('reserves /blog so CMS pages cannot claim it', () => {
    expect(isReservedTopLevelSlug('blog')).toBe(true)
  })

  it('converts ==highlight== markers into yellow textState nodes and round-trips plain text + markdown', () => {
    const nodes: LexNode[] = [
      {
        type: 'heading',
        tag: 'h2',
        children: [{ type: 'text', text: 'Durkheim Social Facts' }],
      },
      {
        type: 'paragraph',
        children: applyMarkers([{ type: 'text', text: 'Durkheim explained ==social facts== in 1895 with 3 rules.' }]),
      },
      makeBlockNode('keyTerm', { term: 'Anomie', meaning: 'Normlessness in modern society.' }),
    ]
    const doc = { root: { type: 'root', children: nodes } }

    const paraChildren = nodes[1]!.children!
    expect(paraChildren.some((c) => c.text === 'social facts' && c.$?.highlight === 'yellow')).toBe(true)

    const plain = lexicalToPlain(doc)
    expect(plain).toContain('Durkheim Social Facts')
    expect(plain).toContain('social facts')
    expect(plain).toContain('Anomie Normlessness in modern society.')
    expect(countWords(plain)).toBeGreaterThan(10)
    expect(readingTimeMinutes(plain)).toBe(1)
    expect(contentHash(plain)).toHaveLength(64)

    const md = lexicalToMarkdown(doc)
    expect(md).toContain('## Durkheim Social Facts')
    expect(md).toContain('1895')

    const toc = extractToc(doc)
    expect(toc).toEqual([{ id: 'durkheim-social-facts', text: 'Durkheim Social Facts', level: 2 }])
  })

  it('enforces the 97% word, number/year, and proper-name preservation gate', () => {
    const original =
      'Emile Durkheim published The Rules of Sociological Method in 1895 and Suicide in 1897. He analysed 4 types of suicide across European societies and showed how social integration and regulation shape human behaviour in modern industrial life.'
    const validRestructured =
      'Emile Durkheim published The Rules of Sociological Method in 1895 and Suicide in 1897. He analysed 4 types of suicide across European societies and showed how social integration and regulation shape human behaviour in modern industrial life.'

    expect(checkPreservation(original, validRestructured)).toEqual({ ok: true, reasons: [] })

    const lostYear = original.replace('1897', '')
    expect(checkPreservation(original, lostYear).ok).toBe(false)
    expect(checkPreservation(original, lostYear).reasons.join(' ')).toContain('numbers lost: 1897')

    const addedYear = `${original} In 2024 this was revisited.`
    expect(checkPreservation(original, addedYear).ok).toBe(false)
    expect(checkPreservation(original, addedYear).reasons.join(' ')).toContain('numbers added: 2024')

    const addedName = `${original} Later Habermas critiqued this.`
    expect(checkPreservation(original, addedName).ok).toBe(false)
    expect(checkPreservation(original, addedName).reasons.join(' ')).toContain('new proper names: habermas')

    // Block labels/titles are ignored by checkLexicalPreservation while body facts are checked
    const lexOrig = { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: original }] }] } }
    const lexBeautified = {
      root: {
        type: 'root',
        children: [
          makeBlockNode('blogCallout', { variant: 'yaadRakho', title: 'Exam tip', body: original }),
        ],
      },
    }
    expect(checkLexicalPreservation(lexOrig, lexBeautified)).toEqual({ ok: true, reasons: [] })
  })

  it('sanitizes organizer output against allowed DB slugs, links, and verbatim anchor text', () => {
    const allowed: Allowed = {
      papers: [{ id: 1, slug: 'paper-1', title: 'Paper 1', code: 'P1' }],
      units: [{ id: 10, slug: 'sociological-thinkers', title: 'Sociological Thinkers' }],
      topics: [{ id: 20, slug: 'theories-of-stratification', title: 'Theories of Social Stratification', href: '/syllabus/paper-1/stratification-and-mobility/theories-of-stratification' }],
      thinkers: [{ id: 30, slug: 'karl-marx', title: 'Karl Marx' }],
      categories: [{ id: 40, slug: 'thinkers', title: 'Thinkers' }],
      tags: [{ id: 50, slug: 'marxism', title: 'Marxism' }],
      links: [{ href: '/thinkers/karl-marx', label: 'Karl Marx' }],
    }
    const raw = organizeOutputSchema.parse({
      paperCodes: ['P1'],
      unitSlugs: ['sociological-thinkers', 'hallucinated-unit'],
      topicSlugs: ['theories-of-stratification', 'fake-topic'],
      thinkerSlugs: ['karl-marx', 'fake-thinker'],
      category: 'Thinkers',
      tags: ['Marxism', 'Class Conflict'],
      excerpt: 'Karl Marx ke class struggle aur alienation ka crisp revision note.',
      seoTitle: 'Karl Marx Sociology Optional Notes',
      seoDescription: 'UPSC Sociology Optional Paper 1 Karl Marx class struggle, historical materialism and alienation notes in Hinglish.',
      focusKeyword: 'Karl Marx sociology',
      faq: [{ question: 'Alienation kya hai?', answer: 'Worker ka apne product aur labour process se alag ho jaana.' }],
      internalLinks: [
        { anchorText: 'Karl Marx', href: '/thinkers/karl-marx' },
        { anchorText: 'Not in post', href: '/thinkers/karl-marx' },
        { anchorText: 'Karl Marx', href: '/invented-url' },
      ],
    })
    const plain = 'Is post mein hum Karl Marx ke historical materialism aur class struggle ko samjhenge.'
    const clean = sanitizeOrganize(raw, allowed, plain)

    expect(clean.unitSlugs).toEqual(['sociological-thinkers'])
    expect(clean.topicSlugs).toEqual(['theories-of-stratification'])
    expect(clean.thinkerSlugs).toEqual(['karl-marx'])
    expect(clean.tags).toEqual(['Marxism'])
    expect(clean.newTags).toEqual(['Class Conflict'])
    expect(clean.internalLinks).toEqual([{ anchorText: 'Karl Marx', href: '/thinkers/karl-marx' }])
  })

  it('inserts an internal link node once for a verbatim anchor and validates blog blocks', () => {
    const doc = {
      root: {
        type: 'root',
        children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Read about Karl Marx and Karl Marx again.' }] }],
      },
    }
    expect(insertLink(doc, 'Karl Marx', '/thinkers/karl-marx')).toBe(true)
    const children = doc.root.children[0]!.children!
    expect(children.filter((c) => c.type === 'link')).toHaveLength(1)

    expect(
      blogBlockSchema.safeParse({
        blockType: 'thinkerQuote',
        thinkerSlug: 'karl-marx',
        quote: 'The history of all hitherto existing society is the history of class struggles.',
      }).success,
    ).toBe(true)
  })
})
