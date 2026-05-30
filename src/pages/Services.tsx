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

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[280px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Services.jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Services</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational leadership, tailored to your stage.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Every engagement is scoped to the specific gaps and goals of your operation.
            No retainers, no vague deliverables — just clear work and measurable outcomes.
          </p>
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
            <Link to="/book" className="btn btn-primary">
              Book a Discovery Call
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
