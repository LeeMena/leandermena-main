import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const articles = [
  {
    kicker: 'Pre-Opening',
    title: 'The Miami Pre-Opening Playbook',
    body: 'The 90-day framework for taking a Miami restaurant from empty shell to opening night —” staffing, SOPs, vendors, and training.',
    href: '/blog/pre-opening',
  },
  {
    kicker: 'Fractional Leadership',
    title: 'What a Fractional GM Actually Does',
    body: 'Most restaurant owners have heard the term. Few understand what fractional F&B leadership actually looks like week to week.',
    href: '/blog/fractional-gm',
  },
  {
    kicker: 'Operations',
    title: 'Labor Cost Control in Miami Restaurants',
    body: 'The scheduling and productivity systems used across 18+ years to keep labor cost in line without sacrificing service.',
    href: '/blog/labor-cost',
  },
]

export default function BlogIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="Practical writing on restaurant operations, pre-opening strategy, and fractional F&B leadership from 18+ years in Miami hospitality."
        path="/blog"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Insights from the floor</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Articles by Leander Mena
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Practical writing on restaurant operations, pre-opening strategy, and fractional F&B
            leadership from 18+ years in Miami hospitality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 120}>
                <Link to={a.href} className="card h-full flex flex-col group">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] mb-3">
                    {a.kicker}
                  </span>
                  <h3 className="text-base font-bold text-[#e8e8e8] mb-3 leading-snug group-hover:text-[#b8a080] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[#888888] flex-1">{a.body}</p>
                  <span className="text-sm font-semibold text-[#b8a080] mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article →’
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}





