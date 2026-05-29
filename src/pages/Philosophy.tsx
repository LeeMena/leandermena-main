import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const pillars = [
  {
    number: '01',
    title: 'Understand Before Acting',
    body: 'I spend the first week observing, listening, and reviewing data before making recommendations. The best solutions come from understanding what is actually happening, not what should be happening.',
  },
  {
    number: '02',
    title: 'Systems Over Personality',
    body: 'A great operator should make the business better, not dependent. Every process I install is documented, trainable, and designed to outlast my engagement.',
  },
  {
    number: '03',
    title: 'Accountability at Every Level',
    body: 'Clear expectations, consistent follow-through, and honest feedback create teams that perform without constant supervision. I coach managers to lead this way.',
  },
  {
    number: '04',
    title: 'Guest Experience Is the Scoreboard',
    body: 'Reviews, repeat visits, and word-of-mouth are the true measures of operational health. Every system I build is judged by whether guests leave happier.',
  },
  {
    number: '05',
    title: 'Financial Discipline Is Non-Negotiable',
    body: 'Great hospitality is sustainable only when the numbers work. I manage labor, COGS, and controllables with the same rigor as service standards.',
  },
  {
    number: '06',
    title: 'Stay Until It Sticks',
    body: 'Consulting that leaves before systems take hold is wasted money. I design handoff plans and stay accountable until the team owns the new standards.',
  },
]

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Philosophy"
        description="How Leander Mena thinks about hospitality operations â€” principles that show up in how he runs shifts, structures training, and gives feedback to managers."
        path="/philosophy"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">How I Think About Operations</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Leadership Philosophy
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            These are not mission-statement buzzwords. They are the principles that show up
            in how I run a shift, structure a training, and give feedback to a manager.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 100}>
                <div className="card h-full">
                  <span className="text-4xl font-extrabold text-[#b8a080]/15">{p.number}</span>
                  <h3 className="font-display text-lg font-bold text-[#e8e8e8] mt-2 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">
              Work With These Principles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}



