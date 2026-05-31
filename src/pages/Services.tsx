import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Fractional F&B leadership, pre-opening consulting, operations recovery, and banquet operations for Miami restaurants and hotels."
        path="/services"
        schemaType="services"
      />

      {/* Hero — About-style full-bleed */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/Services.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <ScrollReveal>
            <span className="kicker">Services</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              Operational leadership, tailored to your stage.
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              Every engagement is scoped to the specific gaps and goals of your operation.
              No retainers, no vague deliverables — just clear work and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/contact" className="btn btn-secondary">Send a Message</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-10">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 100}>
                <div className="card">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] mb-3 block">
                    {s.duration}
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">
                    {s.title}
                  </h2>
                  <p className="text-[#b8a080] text-sm italic mb-4">{s.tagline}</p>
                  <p className="text-[#888888] max-w-[68ch] mb-6">{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#888888]">
                        <span className="text-[#b8a080] mt-0.5">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#666666] mt-2">
                    <span className="text-[#b8a080] font-semibold">Ideal for:</span> {s.ideal}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
            <Link to="/contact" className="btn btn-secondary">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
