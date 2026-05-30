import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: '/insights/what-a-fractional-gm-actually-does',
    kicker: 'Fractional Leadership',
    title: 'What a Fractional GM Actually Does',
    excerpt: 'The fractional model isn't a compromise — it's a strategic choice. Here's how it works in practice.',
  },
  {
    slug: '/insights/labor-cost-control-miami-restaurants',
    kicker: 'Operations',
    title: 'How Miami Restaurants Can Control Labor Costs',
    excerpt: 'Labor is your largest controllable cost. These are the systems that actually move the number.',
  },
  {
    slug: '/insights/miami-pre-opening-playbook',
    kicker: 'Pre-Opening',
    title: 'The Miami Pre-Opening Playbook',
    excerpt: 'What the first 90 days before opening should look like — and what most operators get wrong.',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="Operational insights for Miami restaurants and hotels — fractional leadership, labor cost control, and pre-opening strategy."
        path="/insights"
      />

      {/* HERO BANNER — full image, max brightness */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '340px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/dining.jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-20">
          <span className="kicker">Operational Insights</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-white max-w-[36ch] mb-3">
            Insights
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[54ch]">
            Practical thinking on F&B operations, pre-opening strategy, and fractional leadership for Miami hospitality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link to={p.slug} className="card block h-full hover:border-[#c9a87a]/40 transition-colors">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#d4b896] mb-3 block">{p.kicker}</span>
                  <h2 className="font-display text-base font-bold text-white mb-3 leading-snug">{p.title}</h2>
                  <p className="text-sm text-[#bbbbbb]">{p.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
