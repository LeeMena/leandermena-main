import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'

const principles = [
  {
    title: 'Systems over heroics',
    body: 'A well-run operation doesn\'t depend on the owner being present 80 hours a week. The goal is always replicable systems that work without you.',
  },
  {
    title: 'Floor presence is not optional',
    body: 'You can\'t manage a restaurant from a spreadsheet. The numbers tell you what happened. The floor tells you why.',
  },
  {
    title: 'Root cause over symptom',
    body: 'High turnover, missed targets, inconsistent quality - these are symptoms. My job is to work backward to the actual problem before recommending anything.',
  },
  {
    title: 'Ownership earns ownership',
    body: 'Teams follow leaders who are present, fair, and direct. Accountability starts with the person at the top of the org chart - not the bottom.',
  },
  {
    title: 'Speed with discipline',
    body: 'Operators need results quickly. I move fast but I don\'t cut corners on the fundamentals. Quick fixes that don\'t hold are worse than no fix at all.',
  },
  {
    title: 'Honest assessment first',
    body: 'Before any plan, I need to understand what is actually happening - not what anyone wishes were happening. That requires hard conversations early.',
  },
]

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Leadership Philosophy"
        description="Leander Mena's operational philosophy - systems, floor presence, root-cause thinking, and leadership accountability in Miami F&B."
        path="/philosophy"
      />

      <section className="page-header">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <span className="kicker">Philosophy</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight mb-3">
            How I Think About Operations
          </h1>
          <p className="section-intro">
            These aren't values on a wall. They're the actual principles behind every decision I make on a property.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {principles.map((p) => (
              <div key={p.title} className="card">
                <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem' }}>{p.title}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Work together</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Same values, different operation?</h2>
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
