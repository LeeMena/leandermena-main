import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import ScrollReveal from '@/components/ScrollReveal'

const principles = [
  {
    title: 'Systems over heroics',
    body: 'A well-run operation does not depend on the owner being present 80 hours a week. The goal is always replicable systems that work without you.',
  },
  {
    title: 'Floor presence is not optional',
    body: 'You cannot manage a restaurant from a spreadsheet. The numbers tell you what happened. The floor tells you why.',
  },
  {
    title: 'Root cause over symptom',
    body: 'High turnover, missed targets, inconsistent quality - these are symptoms. The job is to work backward to the actual problem before recommending anything.',
  },
  {
    title: 'Ownership earns ownership',
    body: 'Teams follow leaders who are present, fair, and direct. Accountability starts with the person at the top of the org chart, not the bottom.',
  },
  {
    title: 'Speed with discipline',
    body: 'Operators need results quickly. Move fast but do not cut corners on the fundamentals. Quick fixes that do not hold are worse than no fix at all.',
  },
  {
    title: 'Honest assessment first',
    body: 'Before any plan, you need to understand what is actually happening - not what anyone wishes were happening. That requires hard conversations early.',
  },
]

const TIMELINE = [
  { year: '2006', note: 'Started on the floor. Bussing tables, learning service from the ground up.' },
  { year: '2010', note: 'First management role. 120-seat independent in Miami. Learned what accountability actually looks like.' },
  { year: '2014', note: 'Hotel F&B. Accor properties. Running multi-outlet operations, banquets, in-room dining.' },
  { year: '2017', note: 'First pre-opening lead. Built a concept from vendor contracts to opening night.' },
  { year: '2020', note: 'Navigated two properties through the hospitality shutdowns. Rebuilt staffing from zero twice.' },
  { year: '2023', note: 'Launched fractional practice. Working with independent operators, hotel groups, and new openings across Miami.' },
]

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Leadership Philosophy"
        description="Leander Mena's operational philosophy - systems, floor presence, root-cause thinking, and leadership accountability in Miami F&B."
        path="/philosophy"
        schemaType="philosophy"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/dining.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Philosophy</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              How I Think About Operations
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Not values on a wall. The actual principles behind every decision I make on a property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Narrative intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 'var(--space-6)' }}>
              I started on the floor. Not in a management training program - on the floor. Bussing tables,
              running food, watching how a service falls apart when communication breaks down and how it
              holds together when the team trusts each other. That experience is the foundation of
              everything I do as an operator.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 'var(--space-6)' }}>
              The biggest mistake I see operators make is treating the people problems and the systems
              problems as separate. They are not. Inconsistent execution is almost always a training
              problem. High turnover is almost always a leadership problem. Labor cost that will not
              move is almost always a scheduling problem that was never properly diagnosed. These are
              fixable. Every single one of them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
              I do not believe in coming into an operation and telling people what is wrong. I believe
              in spending time on the floor, watching what actually happens, and then having a direct
              conversation about what needs to change and why. The operators I work best with want that
              same directness. They are not looking for a consultant who will tell them what they want
              to hear.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="kicker" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>Core Principles</span>
            <h2 style={{ marginBottom: 'var(--space-10)' }}>Six Things That Do Not Change</h2>
          </ScrollReveal>
          <div className="grid-2">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 'var(--space-4)' }}>0{i + 1}</span>
                  <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem' }}>{p.title}</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker" style={{ marginBottom: 'var(--space-2)', display: 'block' }}>Background</span>
            <h2 style={{ marginBottom: 'var(--space-10)' }}>Where the Principles Came From</h2>
          </ScrollReveal>
          <div style={{ position: 'relative', paddingLeft: 'var(--space-8)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--color-border)' }} />
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 70}>
                <div style={{ position: 'relative', marginBottom: 'var(--space-8)' }}>
                  <div style={{
                    position: 'absolute', left: 'calc(-1 * var(--space-8))', top: '0.2rem',
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: 'var(--color-primary)', border: '2px solid var(--color-bg)',
                    transform: 'translateX(-4.5px)',
                  }} />
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 600, display: 'block', marginBottom: 'var(--space-1)' }}>{item.year}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Work together</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Same values. Different operation?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>Let's talk about what you're building and how I can help.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/about" className="btn btn-secondary">More About Leander</Link>
          </div>
        </div>
      </section>
    </>
  )
}
