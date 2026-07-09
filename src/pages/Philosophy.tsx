import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const principles = [
  {
    title: 'Systems over heroics',
    body: "A well-run operation does not depend on the owner being present 80 hours a week. The goal is always replicable systems that work without you. That means documented SOPs, consistent training, and clear performance metrics that junior managers can read and act on without calling the owner.",
  },
  {
    title: 'Floor presence is not optional',
    body: "You cannot manage a restaurant from a spreadsheet. The numbers tell you what happened. The floor tells you why. The best operators I know spend 60% of their time on the floor, not in the office. Visibility creates accountability, accountability creates consistency, and consistency creates repeat guests.",
  },
  {
    title: 'Root cause over symptom',
    body: "High turnover, missed targets, and inconsistent quality are symptoms. My job is to work backward to the actual problem before recommending anything. Usually the root cause is a hiring process, a training gap, or a leadership vacuum that has been masked for months. Fix the root cause and the symptoms disappear.",
  },
  {
    title: 'Ownership earns ownership',
    body: "Teams follow leaders who are present, fair, and direct. Accountability starts with the person at the top of the org chart, not the bottom. When a manager is willing to run the line during a Friday rush, the team notices. When a leader admits a mistake and fixes it publicly, the team trusts. Ownership is earned in the same place it is exercised: the floor.",
  },
  {
    title: 'Speed with discipline',
    body: "Operators need results quickly. I move fast, but I do not cut corners on the fundamentals. Quick fixes that do not hold are worse than no fix at all. A fast, incomplete labor restructure will collapse in six weeks and cost more in rework than doing it right the first time. Discipline is what makes speed sustainable.",
  },
  {
    title: 'Honest assessment first',
    body: "Before any plan, I need to understand what is actually happening, not what anyone wishes were happening. That requires hard conversations early. I ask questions that expose the gap between the stated process and the actual process. The operators who can handle that conversation are the ones who see results in 90 days.",
  },
]

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Leadership Philosophy"
        description="Leander Mena's operational philosophy: systems thinking, floor presence, root-cause analysis, and leadership accountability in restaurant and hotel F&amp;B."
        path="/philosophy"
        schemaType="philosophy"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/philosophy.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Philosophy</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            How I Think About Operations
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Six principles that govern every decision I make on a property. They are not values on a wall. They are the operational rules behind every diagnosis, every plan, and every result.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {principles.map((p, i) => (
              <div key={p.title} className="card" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.6rem' }}>{p.title}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-12)' }}>
            <span className="kicker">How I Work</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              From First Conversation to Lasting Systems
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', maxWidth: '56ch' }}>
              Every engagement starts with a diagnostic that takes 3 to 5 days on-site. I walk every station, interview every manager, and review the last 90 days of P&amp;L and labor data. Then I build a 90-day plan with weekly milestones and measurable outcomes. The plan is not a report. It is a working document that changes as the property changes. I stay until the systems hold without me.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: '56ch' }}>
              My typical engagements run 3 to 6 months, with weekly check-ins and real-time adjustments. I do not hand off a PDF and disappear. I train the leadership team, observe the first month of independent operation, and return for a 30-day follow-up to make sure the improvements are holding. The goal is not a temporary spike. The goal is a permanent change in how the property operates.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#0a0905' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Work Together</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: '#ffffff' }}>
            Same Values, Different Operation?
          </h2>
          <p className="section-intro" style={{ marginInline: 'auto', color: 'rgba(255,255,255,0.45)' }}>
            If these principles match how you want to run your property, we should talk about what you are building and how I can help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
            <Link to="/about" className="btn btn-secondary">More About Leander</Link>
          </div>
        </div>
      </section>
    </>
  )
}
