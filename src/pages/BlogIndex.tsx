import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: '/insights/what-a-fractional-gm-actually-does',
    kicker: 'Fractional Leadership',
    title: 'What a Fractional GM Actually Does',
    excerpt: "The fractional model isn\u2019t a compromise \u2014 it\u2019s a strategic choice. Here\u2019s how it works in practice.",
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
    excerpt: 'What the first 90 days before opening should look like \u2014 and what most operators get wrong.',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="Operational insights for Miami restaurants and hotels \u2014 fractional leadership, labor cost control, and pre-opening strategy."
        path="/insights"
        schemaType="insights"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/philosophy-banner.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>

        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Operational Insights</span>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
                Insights
              </h1>
              <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
                Practical thinking on F&amp;B operations, pre-opening strategy, and fractional
                leadership for Miami hospitality.
              </p>
              <Link to="/contact" className="btn btn-primary">Work With Leander</Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">In this section</span>
                <h3 className="text-lg font-bold text-white mb-3">Field-tested perspective on Miami hospitality</h3>
                <p className="text-sm text-[#cccccc] mb-6">
                  No theory. Every article draws from real engagements \u2014 opening teams, recovery
                  turnarounds, and fractional leadership in Miami restaurants and hotels.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-[#3a3a3a] pt-6">
                  {[
                    { num: '3', label: 'Articles' },
                    { num: '18+', label: 'Yrs Experience' },
                    { num: '40+', label: 'Properties' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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
