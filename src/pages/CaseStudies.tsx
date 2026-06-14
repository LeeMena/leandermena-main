import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import ScrollReveal from '@/components/ScrollReveal'
import { caseStudies } from '@/data/caseStudies'
import { ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies - F&B Operations Results | Leander Mena"
        description="Real results from Miami restaurant and hotel F&B consulting engagements — pre-opening builds, labor turnarounds, and multi-property scaling."
        path="/case-studies"
        schemaType="caseStudies"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/fnb-manager.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Case Studies</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4">
            Results from the Field
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Named engagements. Real numbers. The kind of operational work that moves the needle on margins, openings, and scale.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 80}>
                <div className="card" style={{ padding: 'var(--space-8)' }}>

                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="kicker" style={{ margin: 0 }}>{cs.kicker}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)' }}>Miami, FL</span>
                  </div>

                  <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-white mb-2">
                    {cs.headline}
                  </h2>
                  <p className="text-[#a0a0a0] mb-6 max-w-[60ch] leading-relaxed" style={{ fontSize: '0.95rem' }}>
                    {cs.subheadline}
                  </p>

                  {/* Metrics row */}
                  <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-[#2a2a2a]">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-display text-2xl font-bold text-[#d4b896] leading-none mb-1">{r.metric}</div>
                        <div className="text-xs uppercase tracking-widest text-[#666]">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote if present */}
                  {cs.quote && (
                    <p className="text-sm italic text-[#888] mb-6 max-w-[60ch]">
                      &ldquo;{cs.quote.text}&rdquo;
                      <span className="block mt-1 not-italic font-bold text-xs uppercase tracking-widest text-[#b8a080]">— {cs.quote.author}</span>
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#b8a080] hover:text-[#d4b896] transition-colors"
                  >
                    Read the full case study <ArrowRight size={14} />
                  </Link>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Your operation</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">What would your result look like?</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>
            Every engagement starts with an honest conversation about where the operation is and what's actually possible.
          </p>
          <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
        </div>
      </section>
    </>
  )
}
