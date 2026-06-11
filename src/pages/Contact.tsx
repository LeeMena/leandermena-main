import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CONTACT_ENDPOINT = 'https://contact.leandermena.com/submit'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.status === 'success') {
        setStatus('sent')
      } else {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error — please email leander@leandermena.com directly.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Leander Mena — Miami F&B operations consultant."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: 'clamp(420px, 60vw, 680px)' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/contact.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Get in Touch</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                Let&rsquo;s Start a Conversation
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                Whether you&rsquo;re opening a new concept, fixing an existing one, or just exploring &mdash; reach out directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Call</Link>
                <a href="mailto:leander@leandermena.com" className="btn btn-secondary">Send an Email</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">Direct Contact</span>
                <div className="flex flex-col gap-5 mt-4">
                  <div>
                    <span className="text-xs text-[#888888] uppercase tracking-widest block mb-1">Email</span>
                    <a href="mailto:leander@leandermena.com" className="text-[#d4b896] text-base font-semibold">leander@leandermena.com</a>
                  </div>
                  <div>
                    <span className="text-xs text-[#888888] uppercase tracking-widest block mb-1">Location</span>
                    <span className="text-[#cccccc] text-sm">Miami, Florida</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            {status === 'sent' ? (
              <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</p>
                <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">Message received</h2>
                <p className="text-[#888888]">I&rsquo;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card flex flex-col gap-5" style={{ padding: 'var(--space-6)' }}>
                <h2 className="font-display text-xl font-bold text-[#e8e8e8]">Send a Message</h2>

                {/* Honeypot — hidden from humans, filled by bots */}
                <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Name</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none' }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none' }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Message</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', fontSize: '0.95rem', color: 'var(--color-text)', outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ fontWeight: 800 }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p style={{ color: 'var(--color-error, #e05)', fontSize: '0.85rem' }}>
                    {errorMsg || 'Something went wrong — try emailing me directly at leander@leandermena.com'}
                  </p>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
