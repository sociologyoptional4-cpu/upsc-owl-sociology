import { EXPERIMENTAL_TableFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

/** Shared editor configuration for Payload editing and Markdown ingestion. */
export function richTextEditor() {
  return lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, EXPERIMENTAL_TableFeature()],
  })
}
