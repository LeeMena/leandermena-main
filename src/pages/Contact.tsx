import { useState } from 'react'
import SEO from '@/components/SEO'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
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
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error \u2014 please email leander@leandermena.com directly.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Leander Mena \u2014 Miami F&B operations consultant. Response within one business day."
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
          <span className="kicker">Start the conversation</span>
          <h1
            className="font-display font-light leading-[1.05] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem,5.5vw,4.25rem)', maxWidth: '16ch', marginBottom: 'var(--space-5)' }}
          >
            Let&rsquo;s Talk About Your Operation
          </h1>
          <p style={{ color: '#b8b8b8', fontSize: 'var(--text-base)', maxWidth: '48ch', lineHeight: 1.75 }}>
            Whether you&rsquo;re opening, recovering, or scaling &mdash; tell me what you&rsquo;re working through.
            I read every message and respond within one business day.
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
              { stat: '18+', label: 'Years in Miami F&B' },
              { stat: '< 24h', label: 'Response time' },
              { stat: '30+', label: 'Properties opened' },
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
                Currently accepting clients
              </div>

              <span className="kicker">Direct line</span>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.4rem,2.8vw,2rem)', fontWeight: 400, marginBottom: 'var(--space-5)', lineHeight: 1.15 }}
              >
                Talk to Leander,
                <br />
                <em>not a team</em>
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
                Every inquiry goes directly to me. No intake coordinators, no discovery calls
                with junior staff. You tell me what you need &mdash; I&rsquo;ll tell you honestly
                whether I can help.
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
                  &ldquo;He fixed our labor costs inside the first 30 days. We went from 38% to 26% without losing a single team member.&rdquo;
                </p>
                <p style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  GM &mdash; South Beach Hotel Group
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
                    Message Received
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: '36ch', marginInline: 'auto' }}>
                    I&rsquo;ll read your message and respond within one business day with honest
                    thoughts on whether and how I can help.
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
                    <span className="kicker">Inquiry form</span>
                    <h2
                      className="font-display"
                      style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, lineHeight: 1.2 }}
                    >
                      Tell Me About Your Operation
                    </h2>
                  </div>

                  <span className="gold-rule" style={{ marginBlock: 0 }} />

                  {/* Name + Email */}
                  <div className="field-row">
                    <div>
                      <label className="form-label" htmlFor="name">Your name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="First and last"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Email address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div>
                    <label className="form-label" htmlFor="business">Restaurant or hotel name</label>
                    <input
                      id="business"
                      type="text"
                      value={form.business}
                      onChange={set('business')}
                      placeholder="Optional \u2014 helps me understand the context"
                      className="form-input"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="form-label" htmlFor="interest">What are you looking for?</label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={set('interest')}
                      required
                      className="form-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Select one...</option>
                      <option value="fractional">Fractional F&amp;B Leadership</option>
                      <option value="pre-opening">Pre-Opening Support</option>
                      <option value="recovery">Operations Recovery</option>
                      <option value="speaking">Speaking or Training</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="form-label" htmlFor="details">Tell me about your situation</label>
                    <textarea
                      id="details"
                      rows={6}
                      value={form.details}
                      onChange={set('details')}
                      placeholder="What's the challenge? What have you already tried? What does success look like in 90 days?"
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
                    {status === 'sending' ? 'Sending\u2026' : 'Send Message'}
                  </button>

                  <p style={{ fontSize: '0.625rem', letterSpacing: '0.10em', color: 'var(--color-text-faint)', marginTop: 'var(--space-1)' }}>
                    I respond within one business day. No sales pitch &mdash; just a straight answer.
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
            <span className="kicker">The process</span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 400 }}
            >
              What Happens After You Send
            </h2>
          </div>

          <div className="steps-grid">
            {[
              {
                step: '01',
                title: 'I Read It',
                body: 'Every message goes directly to me \u2014 no intake team, no triage. I read it the same day.'
              },
              {
                step: '02',
                title: 'Honest Reply',
                body: 'Within one business day you get a direct response on whether I can help, and what that looks like.'
              },
              {
                step: '03',
                title: 'We Decide Together',
                body: "If there's a fit, we do a short call to confirm scope and get started. No pressure, no pitch deck."
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
