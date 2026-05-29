import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogFractionalGM() {
  return (
    <>
      <SEO
        title="What a Fractional GM Actually Does"
        description="What fractional F&B leadership actually looks like week to week â€” on-site leadership, P&L review, manager coaching, and systems that stick."
        path="/blog/fractional-gm"
      />

      <article>
        <header className="page-header">
          <div className="container">
            <span className="kicker">Fractional Leadership</span>
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
              What a Fractional GM Actually Does
            </h1>
            <p className="text-[#888888] text-lg max-w-[54ch]">
              The term fractional GM gets used loosely. Here is what it actually means in practice.
            </p>
          </div>
        </header>

        <section className="content-body">
          <ScrollReveal>
            <h2>What Fractional Means in Practice</h2>
            <p>
              A fractional engagement typically runs two to four days per week on-site, with
              availability for calls and planning outside those days. The fractional GM operates
              inside the business â€” attending pre-shifts, reviewing numbers, developing managers,
              and making operational decisions with the owner.
            </p>

            <h2>What Gets Done Week to Week</h2>
            <ul>
              <li>On-site leadership during peak service periods</li>
              <li>Weekly P&L review with ownership</li>
              <li>Manager coaching and accountability check-ins</li>
              <li>SOP compliance review and correction</li>
              <li>Scheduling review and labor cost monitoring</li>
              <li>Vendor relationship management and cost negotiation</li>
              <li>Guest experience monitoring and service recovery</li>
            </ul>

            <h2>Who It's Right For</h2>
            <p>
              Fractional F&B leadership works best for independent operators who have outgrown their
              current management structure but aren't ready to hire a full-time director. It also
              works for multi-unit groups that need senior oversight across locations without
              duplicating a full-time salary at each one.
            </p>

            <h2>What It Is Not</h2>
            <p>
              A fractional GM is not a mystery shopper, a trainer who visits once, or a consultant
              who delivers a deck and disappears. The value is in continuity â€” showing up, staying
              accountable, and making decisions that compound over time.
            </p>

            <div className="mt-10 p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl">
              <p className="text-[#888888] mb-4">
                Considering fractional leadership for your operation?
              </p>
              <Link to="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <Link to="/services" className="btn btn-secondary ml-3">
                View services
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </>
  )
}

