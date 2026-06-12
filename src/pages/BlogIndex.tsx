import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: '/insights/what-a-fractional-gm-actually-does',
    title: 'What a Fractional F&B Director Actually Does',
    description: 'The role explained for operators who are considering it - scope, schedule, deliverables, and real expectations.',
    kicker: 'Fractional Leadership',
    date: '2024-02-29',
  },
  {
    slug: '/insights/labor-cost-control-miami-restaurants',
    title: 'Labor Cost Control in Miami Restaurants',
    description: 'Practical tactics for reducing labor cost percentage without cutting service quality or burning out your team.',
    kicker: 'Operations',
    date: '2024-03-15',
  },
  {
    slug: '/insights/pre-opening-timeline',
    title: 'The Pre-Opening Timeline Most Operators Get Wrong',
    description: 'Why most restaurant pre-openings run behind - and the 120-day framework that fixes it.',
    kicker: 'Pre-Opening',
    date: '2024-04-01',
  },
  {
    slug: '/insights/why-fractional-leadership-works',
    title: 'Why Fractional F&B Leadership Works',
    description: 'How operators are replacing full-time directors with fractional leaders - and getting better results at a fraction of the cost.',
    kicker: 'Leadership',
    date: '2024-04-20',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="F&B operations insights from Leander Mena - pre-opening, labor cost, fractional leadership, and more."
        path="/insights"
        schemaType="insights"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Insights</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight mb-3">
            F&B Operations Insights
          </h1>
          <p className="section-intro">Practical thinking on restaurant and hotel operations from the floor up.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                style={{
                  display: 'block',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  textDecoration: 'none',
                }}
              >
                <span className="kicker" style={{ marginBottom: '0.35rem' }}>{p.kicker}</span>
                <h2 style={{ fontSize: 'clamp(1.05rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.4rem', lineHeight: 1.35 }}>{p.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.description}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', display: 'block' }}>
                  {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
