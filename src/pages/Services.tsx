import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { heroImages } from '@/data/heroImages'

export default function Services() {
  const { lang } = useLanguage()
  const t = getT(lang)

  return (
    <>
      <SEO
        title="F&B Operations & Pre-Opening Consulting Services | Leander Mena"
        description="Four ways to work with an F&B operations consultant: pre-opening builds, ongoing operations consulting, turnaround engagements, and on-site + remote hybrid support - anywhere in the U.S."
        path="/services"
        schemaType="services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.services.url}), url(${heroImages.services.fallback})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">{t('nav.workWithMe')}</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            {t('services.heroTitle')}
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            {t('services.heroSub')}
          </p>
        </div>
      </section>

      {/* SEO intro section */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            {t('services.intro1.pre')}<strong style={{ color: 'var(--color-text)' }}>{t('services.intro1.strong')}</strong>{t('services.intro1.post')}
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            {t('services.intro2.pre')}<Link to="/pre-opening" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('services.intro2.link')}</Link>{t('services.intro2.post')}
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            {t('services.intro3.pre')}<Link to="/about" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('services.intro3.link')}</Link>{t('services.intro3.post')}
          </p>
        </div>
      </section>

      {/* How national engagements work */}
      <section className="section" style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <span className="kicker">{t('services.natl.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('services.natl.heading')}</h2>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            {t('services.natl.body')}
          </p>
          <div className="grid-3" style={{ marginTop: '1.5rem' }}>
            {[
              { title: t('services.natl.m1.title'), anchor: t('services.natl.m1.anchor'), detail: t('services.natl.m1.detail') },
              { title: t('services.natl.m2.title'), anchor: t('services.natl.m2.anchor'), detail: t('services.natl.m2.detail') },
              { title: t('services.natl.m3.title'), anchor: t('services.natl.m3.anchor'), detail: t('services.natl.m3.detail') },
            ].map((m) => (
              <div key={m.title} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>{m.title}</strong>
                <span style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{m.anchor}</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map((s) => (
              <div key={s.id} className="card" style={{ position: 'relative' }}>
                {s.popular && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'var(--color-primary)', color: '#0a0a0a',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>{t('services.mostPopular')}</span>
                )}
                <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <span className="kicker">{s.subtitle}</span>
                    <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 700, marginBottom: '0.75rem' }}>{s.title}</h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.description}</p>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{s.price}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>{s.priceNote}</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>{s.cta}</Link>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>{t('services.included')}</strong>
                      <ul className="list">
                        {s.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>{t('services.deliverables')}</strong>
                      <ul className="list">
                        {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook cross-sell (tier 1 bridge) */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">{t('services.playbook.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('services.playbook.heading')}</h2>
          <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
            {t('services.playbook.body')}
          </p>
          <Link to="/products" className="btn btn-secondary">{t('services.playbook.cta')}</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">{t('services.cta.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('services.cta.heading')}</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>{t('services.cta.body')}</p>
          <Link to="/contact" className="btn btn-primary">{t('services.cta.button')}</Link>
        </div>
      </section>
    </>
  )
}
