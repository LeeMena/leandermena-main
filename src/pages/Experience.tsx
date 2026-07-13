import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import { Link } from 'react-router-dom'

export default function Experience() {
  const { lang } = useLanguage()
  const t = getT(lang)

  const roles = [
    {
      venue: 'V&E Hospitality',
      title: t('experience.r1.title'),
      subtitle: 'Marabu Cuban Coal Fire Restaurant + La Cervezer\u00eda de Barrio \u00b7 Miami, FL',
      body: t('experience.r1.body'),
      link: '/case-studies',
      linkLabel: t('experience.linkCase'),
    },
    {
      venue: 'Maska Indian Kitchen + Bar',
      title: t('experience.r2.title'),
      subtitle: 'Midtown Miami, FL',
      body: t('experience.r2.body'),
      link: '/case-studies',
      linkLabel: t('experience.linkCase'),
    },
    {
      venue: 'Plomo Tequila & Taco Bar',
      title: t('experience.r3.title'),
      subtitle: 'Miami, FL',
      body: t('experience.r3.body'),
      link: '/services',
      linkLabel: t('experience.linkServices'),
    },
    {
      venue: 'SBE | SLS Brickell Hotel Miami',
      title: t('experience.r4.title'),
      subtitle: 'Miami, FL',
      body: t('experience.r4.body'),
      link: '/pre-opening',
      linkLabel: t('experience.linkPreOpening'),
    },
    {
      venue: 'JW Marriott Marquis Miami',
      title: t('experience.r5.title'),
      subtitle: 'Miami, FL',
      body: t('experience.r5.body'),
      link: '/experience',
      linkLabel: t('experience.linkFull'),
    },
  ]

  const earlier = [
    { venue: 'Marriott Biscayne Bay', title: t('experience.e1') },
    { venue: 'Conrad Miami', title: t('experience.e2') },
    { venue: 'InterContinental Miami', title: t('experience.e3') },
    { venue: 'Hyatt Regency Miami', title: t('experience.e4') },
  ]

  return (
    <>
      <SEO
        title="Experience & Track Record | Leander Mena, F&B Operations"
        description="18+ years, 40+ properties, $12M+ in revenue optimized, 500+ team members trained across Michelin concepts, SLS Hotels, and Accor properties."
        path="/experience"
        schemaType="profile"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/fnb-manager.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">{t('nav.experience')}</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[24ch] mb-4">
            {t('experience.heroTitle')}
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            {t('experience.heroSub')}
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {roles.map((r, i) => (
                <article
                  key={i}
                  style={{
                    padding: 'clamp(1.5rem,4vw,2.5rem) 0',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem 1.5rem', marginBottom: '0.25rem' }}>
                    <span className="font-display" style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 700, color: 'var(--color-text)' }}>{r.venue}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{r.title}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{r.subtitle}</div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: '72ch' }}>{r.body}</p>
                  <Link to={r.link} style={{ fontSize: '0.82rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>{r.linkLabel}</Link>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Earlier roles */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-default)' }}>
          <ScrollReveal>
            <span className="kicker">{t('experience.earlier.kicker')}</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">{t('experience.earlier.heading')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
              {earlier.map((e, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{e.venue}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{e.title}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">{t('experience.cta.kicker')}</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('experience.cta.heading')}</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>{t('experience.cta.body')}</p>
            <Link to="/contact" className="btn btn-primary">{t('experience.cta.button')}</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
