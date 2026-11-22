import type { Topic } from '@/payload-types'

export function hasTopicNotes(
  topic: Pick<Topic, 'layout' | 'notebookContent' | 'notebookContentHinglish'>,
): boolean {
  return Boolean(
    topic.layout?.length ||
      topic.notebookContent?.root.children.length ||
      topic.notebookContentHinglish?.root.children.length,
  )
}
