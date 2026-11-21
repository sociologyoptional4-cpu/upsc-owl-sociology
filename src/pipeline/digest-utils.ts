export type TopicStory = { id: number; topics: (number | { id: number })[] }
export type TopicGroup = { topic: number; items: TopicStory[] }

export function groupStoriesByTopic<T extends TopicStory>(stories: T[]): TopicGroup[] {
  const groups = new Map<number, T[]>()
  for (const story of stories) for (const value of story.topics) {
    const id = typeof value === 'number' ? value : value.id
    const items = groups.get(id) ?? []
    items.push(story)
    groups.set(id, items)
  }
  return [...groups].map(([topic, items]) => ({ topic, items }))
}
