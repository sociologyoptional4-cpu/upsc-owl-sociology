import type { NoteLang, ResolvedBlogBlocks, TopicDetail } from '@/lib/data/types'
import { syllabusTopicJsonLd } from '@/lib/seo/jsonld'

import { RenderBlocks } from '@/blocks/RenderBlocks'

import { BlogRichText } from '../blog/BlogRichText'
import { BlogCard } from '../cards/BlogCard'
import { CaCard } from '../cards/CaCard'
import { Reveal } from '../motion/Reveal'
import { BilingualTopicShell } from '../notebook/BilingualTopicShell'
import { ColorLegend } from '../notebook/ColorLegend'
import { MindMap } from '../notebook/MindMap'
import { PyqAnswerAccordion } from '../notebook/PyqAnswerAccordion'
import { TopicSelfCheck } from '../notebook/TopicSelfCheck'
import { EmptyState } from '../ui/Badges'
import { Breadcrumbs, JsonLd } from '../ui/Breadcrumbs'
import { ThinkerChipLink, TopicChipLink } from '../ui/Chips'
import { paperTone } from '../ui/paper'

const EMPTY_RESOLVED: ResolvedBlogBlocks = { thinkers: {}, topics: {}, pyqs: {}, media: {} }

function NotesBody({
  content,
  resolved,
  layout,
  lang,
}: {
  content: unknown
  resolved: ResolvedBlogBlocks | undefined
  layout: TopicDetail['layout']
  lang: NoteLang
}) {
  if (content) {
    return (
      <>
        <ColorLegend className="mb-6" lang={lang} />
        <BlogRichText data={content} resolved={resolved ?? EMPTY_RESOLVED} />
      </>
    )
  }
  if (layout.length > 0) {
    return (
      <div className="blocks-flush">
        <RenderBlocks blocks={layout} />
      </div>
    )
  }
  return (
    <EmptyState
      title={lang === 'hi' ? 'Notes taiyaar ho rahe hain' : 'Notes coming soon'}
      body={lang === 'hi' ? 'Tab tak neeche ke current affairs se is topic ko samjho.' : 'Until then, explore linked current affairs below.'}
    />
  )
}

export function TopicView({ data }: { data: TopicDetail }) {
  const tone = paperTone(data.paper)
  const pyqsEn = data.pyqAnswers ?? []
  const pyqsHi = data.pyqAnswersHinglish ?? []
  const pyqCount = Math.max(pyqsEn.length, pyqsHi.length)
  const blogsCount = data.posts?.length ?? 0

  const caNode =
    data.latestCA.length === 0 ? (
      <EmptyState title="No current affairs linked yet" body="New articles mapped to this topic will appear here automatically." />
    ) : (
      <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
        {data.latestCA.map((item, index) => (
          <Reveal as="li" key={item.id} index={index % 4}>
            <CaCard item={item} />
          </Reveal>
        ))}
      </ul>
    )

  const blogsNode =
    data.posts && data.posts.length > 0 ? (
      <ul className="grid gap-6 md:grid-cols-2">
        {data.posts.map((post, index) => (
          <Reveal as="li" key={post.id} index={index % 4}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </ul>
    ) : null

  const asideExtraNode = (
    <>
      {data.thinkers.length > 0 ? (
        <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
          <p className="mb-3 text-sm font-bold">Key thinkers</p>
          <div className="flex flex-wrap gap-1.5">
            {data.thinkers.map((t) => (
              <ThinkerChipLink key={t.href} thinker={t} />
            ))}
          </div>
        </div>
      ) : null}
      {data.relatedTopics.length > 0 ? (
        <div className="rounded-card border-2 border-ink bg-paper-raised p-5 shadow-paper">
          <p className="mb-3 text-sm font-bold">Related topics</p>
          <div className="flex flex-wrap gap-1.5">
            {data.relatedTopics.map((t) => (
              <TopicChipLink key={t.href} topic={t} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )

  const hasHinglish = Boolean(
    data.notebookContentHinglish || data.mindMapHinglish || pyqsHi.length > 0 || data.summaryHinglish,
  )

  return (
    <>
      <JsonLd data={syllabusTopicJsonLd(data)} />
      <BilingualTopicShell
        paperCode={data.paper}
        paperLabel={tone.label}
        title={data.title}
        canonicalHref={data.href}
        createdAt={data.createdAt ?? null}
        updatedAt={data.updatedAt ?? null}
        summaryEn={data.summary}
        summaryHi={data.summaryHinglish ?? null}
        breadcrumbsNode={<Breadcrumbs items={data.breadcrumbs} />}
        hasMindMapEn={Boolean(data.mindMap)}
        hasMindMapHi={Boolean(data.mindMapHinglish)}
        mindMapEnNode={data.mindMap ? <MindMap data={data.mindMap} eyebrow="Chapter Mind Map" /> : null}
        mindMapHiNode={data.mindMapHinglish ? <MindMap data={data.mindMapHinglish} eyebrow="Chapter Mind Map" /> : null}
        notesEnNode={<NotesBody content={data.notebookContent} resolved={data.resolvedBlocks} layout={data.layout} lang="en" />}
        notesHiNode={
          data.notebookContentHinglish ? (
            <NotesBody content={data.notebookContentHinglish} resolved={data.resolvedBlocksHinglish} layout={[]} lang="hi" />
          ) : null
        }
        selfCheckEnNode={
          <TopicSelfCheck
            slug={data.slug}
            title={data.title}
            thinkers={data.thinkers}
            pyqs={pyqsEn}
            toc={data.toc ?? []}
            lang="en"
          />
        }
        selfCheckHiNode={
          hasHinglish ? (
            <TopicSelfCheck
              slug={data.slug}
              title={data.title}
              thinkers={data.thinkers}
              pyqs={pyqsHi.length > 0 ? pyqsHi : pyqsEn}
              toc={(data.tocHinglish?.length ? data.tocHinglish : data.toc) ?? []}
              lang="hi"
            />
          ) : null
        }
        pyqCount={pyqCount}
        pyqsEnNode={pyqsEn.length > 0 ? <PyqAnswerAccordion items={pyqsEn} lang="en" /> : null}
        pyqsHiNode={pyqsHi.length > 0 ? <PyqAnswerAccordion items={pyqsHi} lang="hi" /> : null}
        caCount={data.caCount}
        caNode={caNode}
        blogsCount={blogsCount}
        blogsNode={blogsNode}
        tocEn={data.toc ?? []}
        tocHi={data.tocHinglish ?? []}
        asideExtraNode={asideExtraNode}
        prevTopic={data.prevTopic ?? null}
        nextTopic={data.nextTopic ?? null}
        unitBreadcrumb={data.breadcrumbs[2]}
        hasHinglish={hasHinglish}
      />
    </>
  )
}
