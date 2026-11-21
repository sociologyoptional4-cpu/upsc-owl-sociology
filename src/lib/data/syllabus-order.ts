export function compareOrder(a: { order?: number | null }, b: { order?: number | null }): number {
  return (a.order ?? 99) - (b.order ?? 99)
}
