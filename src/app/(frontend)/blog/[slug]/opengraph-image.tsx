import { ImageResponse } from 'next/og'

import { getPost } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function BlogOgImage({ params }: Props) {
  const { slug } = await params
  const post = slugParamSchema.safeParse(slug).success ? await getPost(slug) : null
  const title = post?.title ?? 'UPSC OWL Sociology Blog'
  const category = post?.category?.title ?? 'Sociology Optional'
  const papers = post?.papers.length ? post.papers.join(' · ') : 'Paper 1 & 2'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '56px 64px',
          border: '14px solid #0a0a0a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: '#0a0a0a',
              color: '#ffffff',
              padding: '10px 22px',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            <span style={{ background: '#facc15', color: '#0a0a0a', padding: '2px 10px', fontWeight: 900 }}>OWL</span>
            <span>UPSC OWL SOCIOLOGY</span>
          </div>
          <div
            style={{
              background: '#facc15',
              color: '#0a0a0a',
              border: '3px solid #0a0a0a',
              padding: '8px 20px',
              fontSize: 22,
              fontWeight: 800,
              borderRadius: 999,
            }}
          >
            {category} · {papers}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: title.length > 70 ? 48 : 58,
              fontWeight: 900,
              color: '#0a0a0a',
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          {post?.excerpt ? (
            <div style={{ fontSize: 24, color: '#404040', lineHeight: 1.4 }}>
              {post.excerpt.slice(0, 140)}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '3px solid #0a0a0a', paddingTop: '20px', fontSize: 22, fontWeight: 700, color: '#dc2626' }}>
          <span>Syllabus-linked Sociology Optional Notes</span>
          <span style={{ color: '#0a0a0a' }}>{post ? `${post.readingTime} min read` : 'upsc-owl-sociology'}</span>
        </div>
      </div>
    ),
    size,
  )
}
