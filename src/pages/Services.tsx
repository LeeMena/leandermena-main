import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import ScrollReveal from '@/components/ScrollReveal'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const SERVICE_FAQ = [
  {
    q: 'How quickly can you start?',
    a: 'For fractional engagements, typically within 1 to 2 weeks of our first call. For pre-opening work, the earlier the better - ideally 120 days out. For diagnostic work, I can usually be on-site within the week.',
  },
  {
    q: 'What does a typical week look like during a fractional engagement?',
    a: 'Usually 2 to 3 days on-site per week, concentrated on high-leverage activities: standing management meetings, service observation, P&L review, and vendor work. The rest of the week is available for calls and decision support. I do not disappear between on-site days.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. All engagements include a mutual NDA as standard. Confidentiality about your operation, your numbers, and your team is non-negotiable.',
  },
  {
    q: 'What happens after the engagement ends?',
    a: 'The goal of every engagement is to make itself unnecessary. I build the systems, develop your management team, and transfer the knowledge so the operation does not depend on my continued presence. Most clients transition to a lighter advisory arrangement after the primary engagement.',
  },
  {
    q: 'Can you work with my existing management team?',
    a: 'Yes. Most of the value in a fractional engagement comes from developing the team that is already there. I am not there to replace your managers - I am there to make them better.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 'var(--space-5) 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: 'var(--space-4)',
        }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 220ms ease' }} />
      </button>
      <div style={{ overflow: 'hidden', maxHeight: open ? '300px' : '0', transition: 'max-height 300ms cubic-bezier(0.16,1,0.3,1)' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.75, paddingBottom: 'var(--space-5)' }}>{a}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <SEO
        title="Hospitality Consulting Services - Miami | Leander Mena"
        description="Fractional GM services, pre-opening builds, and operations recovery for Miami restaurants and hotel F&B teams."
        path="/services"
        schemaType="services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/dining.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Services</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[18ch] mb-4">
              Miami Hospitality Consulting Services
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Every engagement is scoped to the specific gaps and goals of your operation.
              No retainers, no vague deliverables - just clear work and measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Expectation setter */}
      <section style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', paddingBlock: 'var(--space-10)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
              Most operators know within the first conversation whether this is the right fit. The engagement
              models below are starting points - the actual scope is always shaped by what your operation
              needs. If you are not sure which applies to you, start with the diagnostic. It will tell us both
              where to focus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 80}>
                <div className="card" style={{ position: 'relative' }}>
                  {s.popular && (
                    <span style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: 'var(--color-primary)', color: '#0a0a0a',
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)'
                    }}>Most Popular</span>
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
                        <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>What's included</strong>
                        <ul className="list">
                          {s.features.map((f) => <li key={f}>{f}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>Deliverables</strong>
                        <ul className="list">
                          {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>Before You Reach Out</span>
            <h2 style={{ marginBottom: 'var(--space-8)' }}>Questions About the Engagement</h2>
          </ScrollReveal>
          {SERVICE_FAQ.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Get started</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Ready to start?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Tell me what you're working with. I'll tell you honestly whether I can help.</p>
          <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
        </div>
      </section>
    </>
  )
}
