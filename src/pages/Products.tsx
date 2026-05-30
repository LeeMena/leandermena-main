import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'pre-opening-playbook',
    title: 'Pre-Opening Playbook',
    tagline: 'The complete operational framework for restaurant & hotel openings.',
    description:
      'A battle-tested system covering staffing models, SOP templates, training schedules, vendor coordination checklists, and 30/60/90-day audit frameworks. Built from 18+ real pre-opening engagements across Miami.',
    price: '$197',
    format: 'Digital download — PDF + Excel templates',
    cta: 'Get the Playbook',
  },
  {
    id: 'labor-cost-toolkit',
    title: 'Labor Cost Control Toolkit',
    tagline: 'Stop guessing. Start managing labor like an operator.',
    description:
      'Scheduling templates, labor percentage calculators, and a manager accountability system that has helped operations reduce labor cost by 4–6 points within 60 days.',
    price: '$97',
    format: 'Digital download — Excel + Google Sheets',
    cta: 'Get the Toolkit',
  },
  {
    id: 'sop-starter-bundle',
    title: 'SOP Starter Bundle',
    tagline: '12 ready-to-customize standard operating procedures.',
    description:
      'Opening and closing checklists, line check procedures, side work assignments, manager shift logs, and daily communication templates. Plug in your venue name and deploy.',
    price: '$67',
    format: 'Digital download — Word + PDF',
    cta: 'Get the Bundle',
  },
]

export default function Products() {
  return (
    <>
      <SEO
        title="Products & Resources"
        description="Operational toolkits, SOP templates, and playbooks built from 18+ years leading F&B operations across Miami restaurants and hotels."
        path="/products"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[240px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Resources & Tools</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational tools built in the field.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Every template, framework, and system I've used to open, stabilize, and scale
            hospitality operations — packaged for operators who want results, not theory.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-8">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 100}>
                <div className="card flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-1">{p.title}</h2>
                    <p className="text-[#b8a080] text-sm italic mb-4">{p.tagline}</p>
                    <p className="text-[#888888] max-w-[64ch] mb-3">{p.description}</p>
                    <p className="text-xs text-[#555555]">{p.format}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                    <strong className="text-2xl font-extrabold text-[#d4b896]">{p.price}</strong>
                    <Link to="/contact" className="btn btn-primary text-sm">{p.cta}</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="card mt-12 text-center max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-2">Need something custom?</h3>
              <p className="text-[#888888] text-sm mb-6">
                If your operation has a specific gap — staffing models, training programs, financial dashboards —
                I build custom tools as part of consulting engagements.
              </p>
              <a
                href="https://calendly.com/leandermena/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Book a Discovery Call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
