import { getServerSideURL } from '@/lib/url'

export const revalidate = 3600

export async function GET(): Promise<Response> {
  const base = getServerSideURL()
  const body = `# UPSC OWL Sociology

> UPSC Civil Services Examination — Sociology Optional Paper 1 & Paper 2 notes, thinkers, previous year questions (PYQs), daily current affairs linkages, and deep-dive blog articles in Hinglish (Roman script).

## Key sections
- [Home](${base}/): Daily sociological current affairs, featured thinker, and syllabus overview
- [Blog](${base}/blog): Deep-dive articles on Paper 1 & Paper 2 concepts, thinkers, and answer writing
- [Blog RSS Feed](${base}/blog/rss.xml): Latest 30 blog articles in RSS 2.0
- [Current Affairs](${base}/current-affairs): Daily news mapped to UPSC Sociology Optional syllabus topics
- [Syllabus](${base}/syllabus): Complete Paper 1 (Fundamentals of Sociology) and Paper 2 (Indian Society) topic tree
- [Thinkers](${base}/thinkers): Key sociological thinkers (Marx, Weber, Durkheim, Parson, Merton, Mead, Ghurye, Srinivas, Ambedkar, Beteille, and more)
- [PYQ Bank](${base}/pyq): Topic-wise and year-wise UPSC Sociology Optional Previous Year Questions
- [Sitemap](${base}/sitemap.xml): Full XML sitemap
`
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
