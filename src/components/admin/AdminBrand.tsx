/** Admin graphics (login screen logo + nav icon), same wordmark as the public header. */
export function AdminLogo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, fontFamily: 'Poppins, Inter, sans-serif' }}>
      <span style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
        UPSC <span style={{ color: '#dc2626' }}>OWL</span>
      </span>
      <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.4em', opacity: 0.6, marginTop: 6 }}>SOCIOLOGY · ADMIN</span>
    </div>
  )
}

export function AdminIcon() {
  return (
    <span
      aria-label="UPSC OWL"
      style={{ display: 'grid', placeItems: 'center', width: 30, height: 30, borderRadius: 999, background: '#facc15', color: '#0a0a0a', fontWeight: 800, fontSize: 11, fontFamily: 'Poppins, Inter, sans-serif' }}
    >
      OWL
    </span>
  )
}
