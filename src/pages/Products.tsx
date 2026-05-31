import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'

const products = [
  {
    id: 'pre-opening-playbook',
    title: 'Pre-Opening Playbook',
    subtitle: 'The complete operational framework for restaurant launches',
    description: 'A battle-tested system covering every phase from groundbreaking to opening night. SOPs, hiring timelines, vendor checklists, training frameworks, and P&L templates — built from 5 real pre-openings.',
    price: '$297',
    tag: 'Digital Download',
    available: false,
  },
  {
    id: 'labor-cost-toolkit',
    title: 'Labor Cost Control Toolkit',
    subtitle: 'Scheduling, forecasting, and overtime management templates',
    description: 'The exact Excel/Sheets templates used to reduce FOH overtime by 23% at Plomo. Includes weekly scheduling matrix, labor-to-revenue tracker, and manager accountability dashboard.',
    price: '$147',
    tag: 'Digital Download',
    available: false,
  },
  {
    id: 'fnb-audit',
    title: 'F&B Operations Audit',
    subtitle: 'A structured 90-minute assessment of your current operation',
    description: 'A live working session where we assess your current P&L, staffing model, menu performance, and operational gaps. You walk away with a prioritized action list, not a generic report.',
    price: '$500',
    tag: 'Consulting Session',
    available: true,
  },
]

export default function Products() {
  return (
    <>
      <SEO
        title="Products & Tools — F&B Operations | Leander Mena"
        description="Operational templates, playbooks, and consulting sessions for restaurant and hospitality operators."
        path="/products"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: 'clamp(420px, 60vw, 680px)' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/services.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Tools & Resources</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4 lg:mb-6">
                Products & Consulting
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                Operational templates, playbooks, and direct consulting sessions built from 18 years running Miami’s most demanding F&B operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Session</Link>
                <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">What’s Inside</span>
                <div className="flex flex-col gap-4 mt-4">
                  {[
                    { label: 'Pre-Opening Playbook', detail: 'Full launch system — coming soon' },
                    { label: 'Labor Cost Toolkit', detail: 'Scheduling & overtime control — coming soon' },
                    { label: 'F&B Operations Audit', detail: '90-min live session — available now' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[#e8e8e8]">{item.label}</span>
                      <span className="text-xs text-[#888888]">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 80}>
                <div className="card flex flex-col h-full" style={{ position: 'relative' }}>
                  {!p.available && (
                    <span style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--color-border)', color: 'var(--color-text-muted)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>Coming Soon</span>
                  )}
                  {p.available && (
                    <span style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--color-primary)', color: '#0a0a0a', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>Available Now</span>
                  )}
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', marginBottom: 'var(--space-3)' }}>{p.tag}</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-1)', lineHeight: 1.2 }}>{p.title}</h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>{p.subtitle}</p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{p.description}</p>
                  </div>
                  <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)' }}>{p.price}</span>
                    {p.available
                      ? <Link to="/book" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}>Book Now</Link>
                      : <span className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', cursor: 'default', opacity: 0.5 }}>Notify Me</span>
                    }
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Need Something Custom?</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>Let’s build it together.</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', maxWidth: '52ch', marginInline: 'auto' }}>Every operation is different. If none of these fit exactly, reach out and we’ll scope something specific to your needs.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
