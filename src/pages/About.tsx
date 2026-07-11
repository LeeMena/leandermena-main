import { useEffect, useRef } from 'react'
import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: 'translateY(18px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }}
    >
      {children}
    </div>
  )
}

export default function About() {
  const { lang } = useLanguage()
  const t = getT(lang)
  return (
    <>
      <SEO
        title="About Leander Mena | 18+ Years in F&B Operations"
        description="From Miami's most demanding restaurants and luxury hotels to a nationally available consultant. Meet Leander Mena - pre-opening, turnaround, and F&B operations specialist."
        path="/about"
        schemaType="about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroImages.about.url}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = heroImages.about.fallback }}
            alt=""
            width="1920"
            height="1080"
            className="w-full h-full"
            loading="eager"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <Reveal>
              <span className="kicker">{t('nav.about')}</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                {t('about.heroTitle')}
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                {t('about.heroSub')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary">{t('about.ctaStart')}</Link>
                <Link to="/experience" className="btn btn-secondary">{t('about.ctaExperience')}</Link>
              </div>
            </Reveal>

            <Reveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">{t('about.numbers.kicker')}</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {[
                    { num: '18+', label: t('about.numbers.years') },
                    { num: '5+', label: t('about.numbers.projects') },
                    { num: '$9.1M', label: t('about.numbers.revenue') },
                    { num: '3', label: t('about.numbers.languages') },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'clamp(2rem,5vw,4rem)', alignItems: 'start' }}>
            <Reveal>
              <span className="kicker">{t('about.bio.kicker')}</span>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-6">{t('about.bio.heading')}</h2>
              <div className="prose-article">
                <p>
                  {t('about.bio.p1.pre')}<Link to="/pre-opening" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('about.bio.p1.link')}</Link>{t('about.bio.p1.post')}
                </p>
                <p>
                  {t('about.bio.p2')}
                </p>
                <p>
                  {t('about.bio.p3.pre')}<Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{t('about.bio.p3.link')}</Link>{t('about.bio.p3.post')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              {/* Source photo is 414x418 - render at (or below) native size and
                  keep its natural square ratio so it never upscales or crops. */}
              <img
                src="/images/about.jpg"
                alt="Leander Mena - F&B Operations Consultant and Restaurant Consultant, Miami"
                width="414"
                height="418"
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '400px',
                  marginInline: 'auto',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <span className="kicker">{t('about.principles.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-3">{t('about.principles.heading')}</h2>
          <p className="section-intro">{t('about.principles.intro')}</p>
          <div className="grid-3">
            {[
              { title: t('about.principles.p1.title'), body: t('about.principles.p1.body') },
              { title: t('about.principles.p2.title'), body: t('about.principles.p2.body') },
              { title: t('about.principles.p3.title'), body: t('about.principles.p3.body') },
              { title: t('about.principles.p4.title'), body: t('about.principles.p4.body') },
              { title: t('about.principles.p5.title'), body: t('about.principles.p5.body') },
              { title: t('about.principles.p6.title'), body: t('about.principles.p6.body') },
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="card">
                  <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{p.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">{t('about.cta.kicker')}</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{t('about.cta.heading')}</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>{t('about.cta.body')}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">{t('about.ctaStart')}</Link>
            <Link to="/services" className="btn btn-secondary">{t('about.cta.services')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
