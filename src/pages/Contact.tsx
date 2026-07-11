import { useState } from 'react'
import SEO from '@/components/SEO'
import { useLanguage } from '@/context/LanguageProvider'
import { getT } from '@/i18n/copy'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { lang } = useLanguage()
  const t = getT(lang)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', business: '', interest: '', details: ''
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://contact.leandermena.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.status === 'success') {
        setStatus('success')
      } else {
        setErrorMsg(data.message || t('contact.err.generic'))
        setStatus('error')
      }
    } catch {
      setErrorMsg(t('contact.err.network'))
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Book a Discovery Call | Leander Mena, F&B Consulting"
        description="Tell me about your restaurant or hotel and where it's stuck. Book a free discovery call - engagements available on-site and remote, nationwide."
        path="/contact"
        schemaType="contact"
      />

      {/* Mobile styles: scoped, reliable */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: clamp(260px, 34%, 400px) 1fr;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: start;
        }
        .contact-left {
          position: sticky;
          top: var(--space-16);
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(var(--space-6), 4vw, var(--space-10));
        }
        @media (max-width: 760px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-left {
            position: static;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden border-b border-[#2a2a2a]"
        style={{ minHeight: '420px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/contact.jpg)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(8,8,7,0.96) 35%, rgba(8,8,7,0.60) 75%, rgba(8,8,7,0.30) 100%)'
          }}
        />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(5rem,10vw,8rem)' }}>
          <span className="kicker">{t('contact.kicker')}</span>
          <h1
            className="font-display font-light leading-[1.05] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem,5.5vw,4.25rem)', maxWidth: '16ch', marginBottom: 'var(--space-5)' }}
          >
            {t('contact.heroTitle')}
          </h1>
          <p style={{ color: '#b8b8b8', fontSize: 'var(--text-base)', maxWidth: '48ch', lineHeight: 1.75 }}>
            {t('contact.heroSub')}
          </p>

          {/* Trust bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-6)',
              marginTop: 'var(--space-10)',
              paddingTop: 'var(--space-8)',
              borderTop: '1px solid oklch(1 0 0 / 0.08)'
            }}
          >
            {[
              { stat: '18+', label: t('contact.trust.years') },
              { stat: '< 24h', label: t('contact.trust.response') },
              { stat: '30+', label: t('contact.trust.properties') },
            ].map(({ stat, label }) => (
              <div key={label} style={{ minWidth: '80px' }}>
                <div
                  className="font-display"
                  style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: 'var(--color-primary)', lineHeight: 1 }}
                >
                  {stat}
                </div>
                <div style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8c8780', marginTop: '0.35rem' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main: left panel + form ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Left: credibility panel ── */}
            <div className="contact-left">

              {/* Availability badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: '0.3rem 0.75rem',
                  border: '1px solid oklch(0.72 0.075 68 / 0.25)',
                  marginBottom: 'var(--space-6)',
                  fontSize: '0.5625rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)'
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    flexShrink: 0,
                    boxShadow: '0 0 6px oklch(0.72 0.075 68 / 0.60)'
                  }}
                />
                {t('contact.accepting')}
              </div>

              <span className="kicker">{t('contact.directLine')}</span>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.4rem,2.8vw,2rem)', fontWeight: 400, marginBottom: 'var(--space-5)', lineHeight: 1.15 }}
              >
                {t('contact.talkTo.line1')}
                <br />
                <em>{t('contact.talkTo.line2')}</em>
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-8)',
                  maxWidth: '36ch'
                }}
              >
                {t('contact.directBody')}
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-10)' }}>
                <a
                  href="mailto:leander@leandermena.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none'
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-border)',
                      flexShrink: 0
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  leander@leandermena.com
                </a>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-border)',
                      flexShrink: 0
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  Miami, FL
                </span>
              </div>

              {/* Testimonial pull-quote */}
              <div
                style={{
                  borderLeft: '1px solid oklch(0.72 0.075 68 / 0.30)',
                  paddingLeft: 'var(--space-5)',
                  paddingBlock: 'var(--space-2)'
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.95rem,1.6vw,1.1rem)',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-3)',
                    maxWidth: '32ch'
                  }}
                >
                  &ldquo;{t('contact.quote')}&rdquo;
                </p>
                <p style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  {t('contact.quoteAttrib')}
                </p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div>
              {status === 'success' ? (
                <div
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid oklch(from var(--color-text) l c h / 0.06)',
                    padding: 'clamp(2.5rem,6vw,4rem)',
                    textAlign: 'center'
                  }}
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.25"
                    style={{ marginInline: 'auto', marginBottom: 'var(--space-5)' }}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="M22 4 12 14.01l-3-3"/>
                  </svg>
                  <h2
                    className="font-display"
                    style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, marginBottom: 'var(--space-3)' }}
                  >
                    {t('contact.success.heading')}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: '36ch', marginInline: 'auto' }}>
                    {t('contact.success.body')}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid oklch(from var(--color-text) l c h / 0.06)',
                    padding: 'clamp(2rem,5vw,3.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-6)'
                  }}
                >
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <span className="kicker">{t('contact.form.kicker')}</span>
                    <h2
                      className="font-display"
                      style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, lineHeight: 1.2 }}
                    >
                      {t('contact.form.heading')}
                    </h2>
                  </div>

                  <span className="gold-rule" style={{ marginBlock: 0 }} />

                  {/* Name + Email */}
                  <div className="field-row">
                    <div>
                      <label className="form-label" htmlFor="name">{t('contact.form.name')}</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder={t('contact.form.namePh')}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">{t('contact.form.email')}</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder={t('contact.form.emailPh')}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div>
                    <label className="form-label" htmlFor="business">{t('contact.form.business')}</label>
                    <input
                      id="business"
                      type="text"
                      value={form.business}
                      onChange={set('business')}
                      placeholder={t('contact.form.businessPh')}
                      className="form-input"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="form-label" htmlFor="interest">{t('contact.form.interest')}</label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={set('interest')}
                      required
                      className="form-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">{t('contact.form.select')}</option>
                      <option value="fractional">{t('contact.form.opt.fractional')}</option>
                      <option value="pre-opening">{t('contact.form.opt.preOpening')}</option>
                      <option value="recovery">{t('contact.form.opt.recovery')}</option>
                      <option value="speaking">{t('contact.form.opt.speaking')}</option>
                      <option value="other">{t('contact.form.opt.other')}</option>
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="form-label" htmlFor="details">{t('contact.form.details')}</label>
                    <textarea
                      id="details"
                      rows={6}
                      value={form.details}
                      onChange={set('details')}
                      placeholder={t('contact.form.detailsPh')}
                      className="form-input"
                    />
                  </div>

                  {/* Honeypot */}
                  <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  {errorMsg && (
                    <p style={{ color: '#e05555', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                    style={{ fontWeight: 600, alignSelf: 'flex-start', minWidth: '180px' }}
                  >
                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>

                  <p style={{ fontSize: '0.625rem', letterSpacing: '0.10em', color: 'var(--color-text-faint)', marginTop: 'var(--space-1)' }}>
                    {t('contact.form.note')}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-divider)',
          borderBottom: '1px solid var(--color-divider)',
          paddingBlock: 'clamp(var(--space-16),8vw,var(--space-24))'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <span className="kicker">{t('contact.process.kicker')}</span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 400 }}
            >
              {t('contact.process.heading')}
            </h2>
          </div>

          <div className="steps-grid">
            {[
              {
                step: '01',
                title: t('contact.process.s1.title'),
                body: t('contact.process.s1.body')
              },
              {
                step: '02',
                title: t('contact.process.s2.title'),
                body: t('contact.process.s2.body')
              },
              {
                step: '03',
                title: t('contact.process.s3.title'),
                body: t('contact.process.s3.body')
              }
            ].map(({ step, title, body }) => (
              <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div
                  className="font-display"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: 'var(--color-primary)',
                    opacity: 0.35,
                    lineHeight: 1
                  }}
                >
                  {step}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 500, marginBottom: 'var(--space-1)' }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: '32ch' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
