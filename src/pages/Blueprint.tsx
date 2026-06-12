import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, CheckCircle, Loader2, ExternalLink, ArrowRight, FileText, Clock, Star } from 'lucide-react'
import SEO from '@/components/SEO'

const WORKER_URL = 'https://blueprint-lead-capture.httpsskytabtechupdate011pagesdev.workers.dev/subscribe'

const chapters = [
  { num: '01', days: 'Days 1-15', title: 'Foundation & Systems Setup', items: ['Org chart & hiring plan', 'Vendor selection & contracts', 'POS & tech stack decisions', 'Brand standards documentation'] },
  { num: '02', days: 'Days 16-30', title: 'Hiring & Training Framework', items: ['Interview & onboarding SOPs', 'Service sequence training', 'Back-of-house standards', 'Management accountability systems'] },
  { num: '03', days: 'Days 31-60', title: 'Menu, Cost & Operations', items: ['Menu costing & pricing strategy', 'Food cost control targets', 'Ordering par levels', 'Kitchen flow & line setup'] },
  { num: '04', days: 'Days 61-75', title: 'Soft-Open Strategy', items: ['Friends & family run playbook', 'Feedback collection system', 'Adjustment protocol', 'Team confidence building'] },
  { num: '05', days: 'Days 76-90', title: 'Grand Opening & Beyond', items: ['Opening week staffing plan', 'Marketing & press coordination', 'Day-1 operations checklist', 'Week 1 KPI benchmarks'] },
]

const socialProof = [
  { quote: 'Leander\'s framework saved us from a chaotic opening. We hit 80% occupancy in week two.', name: 'Maria R.', role: 'Hotel F&B Director, Miami' },
  { quote: 'The 90-day structure gave my team a roadmap. We opened on budget for the first time ever.', name: 'Carlos T.', role: 'Restaurant Owner, Brickell' },
  { quote: 'I\'ve opened 6 restaurants. This is the checklist I wish I\'d had from day one.', name: 'Sophie L.', role: 'Multi-Unit Operator, Miami Beach' },
]

export default function Blueprint() {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, first_name: form.firstName }),
      })
      if (!res.ok) throw new Error('Worker error')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SEO
        title="Free 90-Day Pre-Opening Blueprint | Restaurant & Hotel Opening Checklist | Leander Mena"
        description="Download the free 90-day pre-opening blueprint used by Miami's top hospitality operators. Day-by-day checklist for opening restaurants and hotels on time and on budget."
        path="/blueprint"
      />

      {/* Hero */}
      <section
        id="top"
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(5rem, 10vw, 8rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-16)',
              alignItems: 'center',
            }}
          >
            {/* Left - headline + form */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="kicker" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>Free Resource - No Cost, No Catch</span>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  lineHeight: 1.05,
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-4)',
                  letterSpacing: '-0.02em',
                }}
              >
                The 90-Day<br />Pre-Opening Blueprint
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  maxWidth: '48ch',
                  marginBottom: 'var(--space-6)',
                }}
              >
                The exact day-by-day framework I've used to open restaurants and hotels across Miami - on time, on budget, and ready for a packed house. Free download.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
                {[
                  { icon: <FileText size={16} />, label: '5 Chapters' },
                  { icon: <Clock size={16} />, label: '90 Days Mapped' },
                  { icon: <CheckCircle size={16} />, label: '50+ Checklist Items' },
                ].map((b) => (
                  <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>{b.icon}</span>
                    {b.label}
                  </div>
                ))}
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-8)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)', display: 'flex', justifyContent: 'center' }}>
                    <CheckCircle size={44} strokeWidth={1.5} />
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>You're in!</h2>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 'var(--space-6)' }}>
                    Access your blueprint below. Open in Chrome and press <strong style={{ color: 'var(--color-text)' }}>Ctrl+P - Save as PDF</strong> to keep a copy.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <a href="/assets/pre-opening-blueprint-ebook.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'center', gap: 'var(--space-2)' }}>
                      <ExternalLink size={16} /> Open Blueprint Ebook
                    </a>
                    <a href="/assets/90-day-pre-opening-blueprint.pdf" download className="btn btn-secondary" style={{ justifyContent: 'center', gap: 'var(--space-2)' }}>
                      <Download size={16} /> Download PDF Version
                    </a>
                  </div>
                </motion.div>
              ) : (
                <div
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-8)',
                  }}
                >
                  <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
                    Get Instant Access
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {[
                      { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Leander' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                      { id: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+1 (305) 000-0000' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                        <label htmlFor={id} style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                          {label}
                        </label>
                        <input
                          id={id} name={id} type={type}
                          required={id !== 'phone'}
                          placeholder={placeholder}
                          value={form[id as keyof typeof form]}
                          onChange={handleChange}
                          style={{
                            padding: 'var(--space-3) var(--space-4)',
                            background: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-text)',
                            fontSize: '0.95rem',
                            outline: 'none',
                            transition: 'border-color 180ms',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                        />
                      </div>
                    ))}
                    {errorMsg && <p style={{ fontSize: '0.82rem', color: 'var(--color-error)' }}>{errorMsg}</p>}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}
                    >
                      {status === 'loading'
                        ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
                        : <><Download size={16} /> Get the Free Blueprint</>
                      }
                    </button>
                    <p style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)', textAlign: 'center' }}>No spam. Unsubscribe anytime.</p>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Right - ebook cover mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                <div style={{ position: 'absolute', inset: 0, transform: 'rotate(4deg) translateY(10px)', background: 'var(--color-surface-offset)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }} />
                <div style={{ position: 'absolute', inset: 0, transform: 'rotate(2deg) translateY(5px)', background: 'var(--color-surface-offset-2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }} />
                <div
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1612 100%)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(184,160,128,0.3)',
                    padding: 'var(--space-10)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                    aspectRatio: '3/4',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-5)' }}>Free Download</p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#ffffff', lineHeight: 1.1, marginBottom: 'var(--space-4)' }}>
                      The 90-Day<br />Pre-Opening<br />Blueprint
                    </h2>
                    <div style={{ height: '1px', background: 'linear-gradient(to right, var(--color-primary), transparent)', marginBottom: 'var(--space-5)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      {['Day-by-day opening timeline', 'Staffing & training checklists', 'Menu costing framework', 'Soft-open playbook'].map((item) => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
                          <CheckCircle size={10} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <img src="/assets/Profile-Headshot.jpg" alt="Leander Mena" width="36" height="36" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(184,160,128,0.4)' }} />
                    <div>
                      <p style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>Leander Mena</p>
                      <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)' }}>18+ Years F&amp;B Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">Inside the Blueprint</span>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Five Chapters. Ninety Days. One Successful Opening.</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>
              Every chapter covers a critical phase of the pre-opening process, with actionable checklists and frameworks you can implement immediately.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  alignItems: 'start',
                }}
              >
                <div style={{ textAlign: 'center', minWidth: '64px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'rgba(184,160,128,0.25)', lineHeight: 1, display: 'block' }}>{ch.num}</span>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>{ch.days}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>{ch.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                    {ch.items.map((item) => (
                      <span key={item} style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        background: 'var(--color-surface-offset)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-full)',
                        padding: 'var(--space-1) var(--space-3)',
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'var(--space-10)' }}>
            <span className="kicker">What Operators Say</span>
            <h2>Used by Miami's Top Hospitality Operators</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            {socialProof.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-1)', marginBottom: 'var(--space-4)' }}>
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={12} style={{ color: 'var(--color-primary)', fill: 'var(--color-primary)' }} />)}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.7, marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="kicker">About the Author</span>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>18+ Years Opening Miami's Best</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: 'var(--space-6)' }}>
                Leander Mena is a fractional F&amp;B operations leader based in Miami, Florida. He's opened, stabilized, and scaled restaurants, hotels, banquets, and catering operations across South Florida - from Michelin-starred concepts to large-scale luxury hotels.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                {[{ num: '18+', label: 'Years' }, { num: '40+', label: 'Properties' }, { num: '$12M+', label: 'Revenue' }].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', lineHeight: 1 }}>{s.num}</p>
                    <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-secondary">Learn More <ArrowRight size={15} /></Link>
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '4/5' }}>
                <img src="/assets/Profile-Headshot.jpg" alt="Leander Mena" width="500" height="625" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          paddingBlock: 'clamp(3rem, 6vw, 5rem)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <span className="kicker">Ready to Open Right?</span>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Download the Blueprint - Free</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
            Whether you're 90 days out or just starting to plan, this framework gives you the structure to open with confidence.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <button onClick={scrollToTop} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Download size={16} /> Get the Free Blueprint
            </button>
            <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              Explore Consulting Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
