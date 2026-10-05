import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'

// Properties and groups where Leander held leadership roles (from the resume).
// Typeset wordmarks rather than official logos: these are employers, not
// consulting clients, and their marks are not ours to reproduce.
const BRANDS: { name: string; style: 'serif' | 'caps' | 'light' }[] = [
  { name: 'SLS Brickell', style: 'caps' },
  { name: 'sbe', style: 'serif' },
  { name: 'Sofitel', style: 'light' },
  { name: 'Pullman', style: 'caps' },
  { name: 'Viceroy', style: 'serif' },
  { name: 'InterContinental', style: 'light' },
  { name: 'The Palms', style: 'serif' },
  { name: 'Maska', style: 'caps' },
  { name: 'Marabú', style: 'serif' },
  { name: 'V&E Hospitality', style: 'light' },
  { name: 'Butler Hospitality', style: 'caps' },
]

const STYLES = {
  serif: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontStyle: 'italic', letterSpacing: '-0.01em' },
  caps: { fontFamily: 'var(--font-body)', fontSize: 'clamp(0.8rem, 1.4vw, 0.95rem)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const },
  light: { fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', fontWeight: 300, letterSpacing: '0.04em' },
}

export default function BrandStrip() {
  const { lang } = useLanguage()
  const t = getT(lang)

  return (
    <section
      aria-label={t('brands.label')}
      style={{
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(var(--space-8), 4vw, var(--space-12)) 0',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.5625rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          marginBottom: 'var(--space-5)',
        }}>
          {t('brands.label')}
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 'clamp(1.5rem, 4vw, 3rem)',
          rowGap: 'var(--space-4)',
        }}>
          {BRANDS.map((b) => (
            <li key={b.name} style={{ ...STYLES[b.style], color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
              {b.name}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', opacity: 0.7, marginTop: 'var(--space-5)' }}>
          {t('brands.note')}
        </p>
      </div>
    </section>
  )
}
