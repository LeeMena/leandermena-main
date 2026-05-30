import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const items = [
  {
    label: 'Staffing & Org Design',
    desc: 'Aligning headcount, positions, and schedules with the concept, forecast, and budget.',
  },
  {
    label: 'Training Programs',
    desc: 'Sequencing classroom, menu, and floor training so information sticks before opening week.',
  },
  {
    label: 'Service Rehearsals',
    desc: 'Friends-and-family and mock service events that expose real issues before paying guests arrive.',
  },
  {
    label: 'SOPs & Standards',
    desc: 'Checklists, sidework guides, and opening/closing procedures teams can actually follow.',
  },
  {
    label: 'Vendor Coordination',
    desc: 'Working with your F&B vendors to ensure product is right, priced correctly, and delivered on time.',
  },
  {
    label: 'Post-Opening Audits',
    desc: '30, 60, and 90-day check-ins to measure performance against targets and adjust systems as needed.',
  },
]

export default function PreOpening() {
  return (
    <>
      <SEO
        title="Pre-Opening F&B Operations"
        description="Pre-opening restaurant and hotel F&B consulting in Miami. Staffing, training, SOPs, vendor coordination, and post-opening audits."
        path="/pre-opening"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Pre-Opening Restaurant & Hotel F&B — Miami</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Pre-Opening F&B Operations
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Openings are where expectations are highest and tolerance for mistakes is lowest.
            My role is to help you move from construction and design into a calm, organized opening
            where the team is genuinely ready to serve guests on day one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-[#e8e8e8] mb-8">What I Cover</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="text-sm font-bold text-[#e8e8e8] mb-2">{item.label}</h3>
                  <p className="text-sm text-[#888888]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-4">
                How I Work with Development Teams
              </h3>
              <p className="text-[#888888] max-w-[68ch] mb-4">
                I slot in alongside ownership, brand, and design as the operations voice —
                translating the concept into service flows, staffing plans, and standards that can
                be executed in a real room by a real team.
              </p>
              <p className="text-[#888888] max-w-[68ch] mb-6">
                Whether this is your first opening or one of many, I right-size the support around
                the project, timeline, and the internal team you already have in place.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Start a Pre-Opening Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
