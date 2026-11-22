'use client'

import { useRef, useState, type ClipboardEvent, type DragEvent, type ReactNode } from 'react'

import styles from './write-desk.module.css'

type Props = {
  label: string
  accept: string
  multiple?: boolean
  disabled?: boolean
  /** Receives raw files from click, drop or (when `acceptPaste`) clipboard. */
  onFiles: (files: File[]) => void
  acceptPaste?: boolean
  children?: ReactNode
}

/** Keyboard-reachable drop target: click/Enter opens the file picker, drop and (optionally) Ctrl/Cmd+V add files. */
export function DropZone({ label, accept, multiple = false, disabled = false, onFiles, acceptPaste = false, children }: Props) {
  const input = useRef<HTMLInputElement>(null)
  const [over, setOver] = useState(false)

  const take = (files: File[]) => { if (files.length > 0 && !disabled) onFiles(multiple ? files : files.slice(0, 1)) }
  const onDrop = (event: DragEvent) => { event.preventDefault(); setOver(false); take(Array.from(event.dataTransfer.files)) }
  const onPaste = (event: ClipboardEvent) => {
    if (!acceptPaste) return
    const files = Array.from(event.clipboardData.files)
    if (files.length > 0) { event.preventDefault(); take(files) }
  }

  return (
    <div
      className={styles.zone}
      data-over={over}
      data-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={label}
      onClick={() => input.current?.click()}
      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); input.current?.click() } }}
      onDragOver={(event) => { event.preventDefault(); setOver(true) }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      onPaste={onPaste}
    >
      <input
        ref={input}
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        onChange={(event) => { take(Array.from(event.target.files ?? [])); event.target.value = '' }}
      />
      {children ?? <span>{label}</span>}
    </div>
  )
}
