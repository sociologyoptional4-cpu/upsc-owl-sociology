export type BlogAttachment = { label: string; url: string; sizeKb: number }

const sizeText = (kb: number): string => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(kb))} KB`)

/** PDF downloads attached to a published post. Renders nothing when empty. */
export function AttachmentList({ items }: { items: BlogAttachment[] }) {
  if (items.length === 0) return null
  return (
    <section aria-labelledby="blog-attachments" className="attachments">
      <h2 id="blog-attachments" className="attachments-title">Notes download karo</h2>
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" download>
              <span aria-hidden className="attachments-icon">PDF</span>
              <span className="attachments-label">{item.label}</span>
              <span className="attachments-size">{sizeText(item.sizeKb)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
