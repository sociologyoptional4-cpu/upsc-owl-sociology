export async function GET(request: Request): Promise<Response> {
  const expected = process.env.INDEXNOW_KEY
  const key = new URL(request.url).searchParams.get('key')
  if (!expected || !key || key !== expected) return new Response('Not found', { status: 404 })
  return new Response(expected, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=86400',
    },
  })
}
