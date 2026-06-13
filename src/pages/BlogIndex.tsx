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
    slug: '/insights/why-fractional-leadership-works',
    title: 'Why Fractional F&B Leadership Works',
    description: 'How operators are replacing full-time directors with fractional leaders - and getting better results at a fraction of the cost.',
    kicker: 'Leadership',
    date: '2024-04-20',
  },
  {
    slug: '/insights/pre-opening-timeline',
    title: 'The Pre-Opening Timeline Most Operators Get Wrong',
    description: 'Why most restaurant pre-openings run behind - and the 120-day framework that fixes it.',
    kicker: 'Pre-Opening',
    date: '2024-04-01',
  },
  {
    slug: '/insights/miami-pre-opening-playbook',
    title: 'The Miami Pre-Opening Playbook',
    description: 'A practical framework for opening restaurants and hotel F&B programs in Miami on time and on budget.',
    kicker: 'Pre-Opening',
    date: '2024-05-01',
  },
  {
    slug: '/insights/real-cost-of-bad-pre-opening',
    title: 'The Real Cost of a Bad Pre-Opening',
    description: 'What actually goes wrong when pre-opening planning is skipped or rushed - and the financial impact.',
    kicker: 'Pre-Opening',
    date: '2024-05-15',
  },
  {
    slug: '/insights/labor-cost-control-miami-restaurants',
    title: 'Labor Cost Control in Miami Restaurants',
    description: 'Practical tactics for reducing labor cost percentage without cutting service quality or burning out your team.',
    kicker: 'Operations',
    date: '2024-03-15',
  },
  {
    slug: '/insights/reduce-labor-cost-without-cutting-service',
    title: 'How to Reduce Labor Cost Without Cutting Service',
    description: 'A case study and framework for restructuring labor without degrading guest experience.',
    kicker: 'Operations',
    date: '2024-06-01',
  },
  {
    slug: '/insights/hotel-fb-why-your-restaurant-underperforms',
    title: 'Hotel F&B: Why Your Restaurant Underperforms',
    description: 'The structural differences between hotel F&B and standalone restaurants - and why most hotel operators get it wrong.',
    kicker: 'Hotel F&B',
    date: '2024-06-15',
  },
  {
    slug: '/insights/miami-restaurant-labor-market-2026',
    title: 'Miami Restaurant Labor Market 2026',
    description: 'What operators need to know about hiring, wages, and retention in the current Miami market.',
    kicker: 'Labor Market',
    date: '2024-07-01',
  },
  {
    slug: '/insights/building-training-program-that-works',
    title: 'Building a Training Program That Works',
    description: 'Why most restaurant training fails - and how to build one that actually sticks and improves performance.',
    kicker: 'Training',
    date: '2024-07-15',
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/insights.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Insights</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[18ch] mb-4">
            F&amp;B Operations Insights
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Practical thinking on restaurant and hotel operations from the floor up.
          </p>
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