import manifest from '@/data/thinker-assets.json'

export type PortraitAsset = { src: string; srcSm: string; width: number; height: number; attribution: string | null }

type ManifestEntry = {
  slug: string
  status: string
  file: string | null
  fileSm: string | null
  width: number | null
  height: number | null
  attribution: string | null
}

const BY_SLUG = new Map(
  (manifest as ManifestEntry[])
    .filter((entry) => entry.status === 'ok' && entry.file && entry.fileSm)
    .map((entry) => [
      entry.slug,
      {
        src: entry.file as string,
        srcSm: entry.fileSm as string,
        width: entry.width ?? 1000,
        height: entry.height ?? 1250,
        attribution: entry.attribution,
      },
    ]),
)

/** Licensed cut-out from Task 02's manifest (static, two sizes), or null. */
export function getPortraitAsset(slug: string): PortraitAsset | null {
  return BY_SLUG.get(slug) ?? null
}
