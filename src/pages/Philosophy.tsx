import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const principles = [
  {
    num: '01',
    title: 'Systems before heroics',
    body: 'A well-run operation does not depend on any one person having a great night. It depends on clear systems that any trained team member can execute consistently.',
  },
  {
    num: '02',
    title: 'The floor does not lie',
    body: 'Data matters, but nothing replaces time spent on the floor during service. That is where the real story of an operation becomes visible.',
  },
  {
    num: '03',
    title: 'Fix the root, not the symptom',
    body: 'High turnover, inconsistent service, and runaway labor costs are symptoms. The causes are almost always in the hiring process, the training program, or the schedule structure.',
  },
  {
    num: '04',
    title: 'Ownership earns ownership',
    body: 'Teams follow leaders who are present, fair, and direct. Accountability starts with the person at the top of the org chart — not the bottom.',
  },
]

export default function Philosophy() {
  return (
    <>
      <SEO
        title="Philosophy"
        description="Leander Mena's operational philosophy — systems, floor presence, root-cause thinking, and leadership accountability in Miami F&B."
        path="/philosophy"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">How I Work</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational Philosophy
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            The principles that guide how I assess, structure, and lead F&B operations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-8 mb-12">
            {principles.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 100}>
                <div className="role">
                  <span className="role-meta">{p.num}</span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">{p.title}</h2>
                  <p className="text-[#888888] max-w-[62ch]">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* fix: added cross-link to Experience so philosophy connects to proof */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Work Together
            </Link>
            <Link to="/experience" className="btn btn-ghost">
              See This in Practice &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
