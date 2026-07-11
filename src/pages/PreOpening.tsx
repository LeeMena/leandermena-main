import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

export default function PreOpening() {
  const { lang } = useLanguage()
  const t = getT(lang)

  return (
    <>
      <SEO
        title="Restaurant & Hotel Pre-Opening Consultant | Leander Mena"
        description="Open on time and on budget. A pre-opening consultant who builds your org chart, SOPs, vendor matrix, training, and soft-launch plan - on-site and remote, nationwide."
        path="/pre-opening"
        schemaType="pre-opening"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImages.preOpening.url}), url(${heroImages.preOpening.fallback})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">{t('nav.preOpening')}</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[24ch] mb-4">
            {t('preOpening.heroTitle')}
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            {t('preOpening.heroSub')}
          </p>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            {t('preOpening.intro1.pre')}<strong style={{ color: 'var(--color-text)' }}>{t('preOpening.intro1.strong')}</strong>{t('preOpening.intro1.post')}
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            {t('preOpening.intro2')}
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            {t('preOpening.intro3')}
          </p>
        </div>
      </section>

      {/* What's covered */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">{t('preOpening.scope.kicker')}</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-8">{t('preOpening.scope.heading')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.25rem' }}>
              {[
                { title: t('preOpening.scope.c1.title'), desc: t('preOpening.scope.c1.desc') },
                { title: t('preOpening.scope.c2.title'), desc: t('preOpening.scope.c2.desc') },
                { title: t('preOpening.scope.c3.title'), desc: t('preOpening.scope.c3.desc') },
                { title: t('preOpening.scope.c4.title'), desc: t('preOpening.scope.c4.desc') },
                { title: t('preOpening.scope.c5.title'), desc: t('preOpening.scope.c5.desc') },
                { title: t('preOpening.scope.c6.title'), desc: t('preOpening.scope.c6.desc') },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Track record */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">{t('preOpening.track.kicker')}</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-6">{t('preOpening.track.heading')}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { name: 'Maska Indian Kitchen + Bar', note: 'Michelin-starred chef partnership · Midtown Miami · $1.2M+ year one' },
                { name: 'Plomo Tequila & Taco Bar', note: '300-cover peak days · Miami' },
                { name: 'La Cervecería de Barrio', note: 'Launch GM · V&E Hospitality · Miami' },
                { name: 'SLS Brickell Hotel Miami', note: 'Director of Banquets & Events pre-opening · SBE' },
                { name: 'Additional hotel F&B programs', note: 'Marriott, Conrad, InterContinental, Hyatt properties across Miami' },
              ].map((c, i) => (
                <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid var(--color-border)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 600 }}>{c.name}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{c.note}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">{t('preOpening.cta.kicker')}</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('preOpening.cta.heading')}</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '2rem' }}>{t('preOpening.cta.body')}</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">{t('services.cta.button')}</Link>
              <Link to="/blueprint" className="btn btn-secondary">{t('preOpening.cta.blueprint')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
