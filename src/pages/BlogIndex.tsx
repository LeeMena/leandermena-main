import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: '/insights/what-a-fractional-gm-actually-does',
    kicker: 'Fractional Operations',
    title: 'What a Fractional F&B Director Actually Does',
    excerpt:
      'Not a consultant with a binder. Not a part-time manager. Here is what the role looks like in practice — and why more Miami operators are using it.',
    date: 'Updated May 2026',
  },
  {
    slug: '/insights/miami-pre-opening-playbook',
    kicker: 'Pre-Opening',
    title: 'The Miami Pre-Opening Playbook',
    excerpt:
      'What the first 90 days before opening should look like — and the mistakes that cause most new concepts to stumble in week one.',
    date: 'Updated May 2026',
  },
  {
    slug: '/insights/labor-cost-control-miami-restaurants',
    kicker: 'Labor & Finance',
    title: 'Labor Cost Control for Miami Restaurants',
    excerpt:
      'Labor is your biggest controllable cost. Here is how to bring it under control without cutting service quality or burning out your team.',
    date: 'Updated May 2026',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="Operational perspectives on running restaurants and hotel F&B in Miami. Written by Leander Mena."
        path="/insights"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Insights</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational perspectives from the floor.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Practical writing on labor, pre-openings, and running F&B operations in Miami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  to={post.slug}
                  className="card block group hover:border-[#b8a080] transition-colors"
                >
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] mb-2 block">
                    {post.kicker}
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2 group-hover:text-[#b8a080] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#888888] max-w-[68ch] mb-4">{post.excerpt}</p>
                  <span className="text-xs text-[#555555]">{post.date}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
