import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogPreOpening() {
  return (
    <>
      <SEO
        title="The Miami Pre-Opening Playbook"
        description="The 90-day framework for taking a Miami restaurant from empty shell to opening night —” staffing, SOPs, vendors, and training."
        path="/blog/pre-opening"
      />

      <article>
        <header className="page-header">
          <div className="container">
            <span className="kicker">Pre-Opening</span>
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
              The Miami Pre-Opening Playbook
            </h1>
            <p className="text-[#888888] text-lg max-w-[54ch]">
              Opening a restaurant in Miami requires more than a great concept and a lease. The 90
              days before doors open determine whether a team performs under pressure or collapses
              under it.
            </p>
          </div>
        </header>

        <section className="content-body">
          <ScrollReveal>
            <h2>Days 90—“60: Foundation</h2>
            <p>
              The first phase is about building the operating backbone before a single hire is made.
              That means walking the space, understanding the concept deeply, mapping the service
              flow, and writing the first draft of every core SOP.
            </p>
            <ul>
              <li>Space walkthrough and operational gap assessment</li>
              <li>Vendor identification and preliminary outreach</li>
              <li>Org chart and staffing plan by role and phase</li>
              <li>Draft service flow for each daypart</li>
              <li>Opening budget alignment with ownership</li>
            </ul>

            <h2>Days 60—“30: Hiring and Systems</h2>
            <p>
              Miami's hospitality labor market is competitive. Hiring has to start early, and
              onboarding has to be structured from the first day an employee walks in.
            </p>
            <ul>
              <li>Management team hired and onboarded</li>
              <li>Line staff recruitment and selection</li>
              <li>POS configuration and reporting setup</li>
              <li>Menu training materials and knowledge tests</li>
              <li>Vendor contracts finalized and delivery schedules confirmed</li>
            </ul>

            <h2>Days 30—“0: Training and Execution</h2>
            <p>
              The final 30 days compress weeks of learning into days. The goal is a team that has
              failed safely before guests arrive.
            </p>
            <ul>
              <li>Two to three soft opening services with real guests</li>
              <li>Daily pre-shift meetings and post-service debriefs</li>
              <li>Final SOP sign-off by all managers</li>
              <li>Opening night execution plan distributed to all staff</li>
            </ul>

            <div className="mt-10 p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl">
              <p className="text-[#888888] mb-4">
                Need help with a pre-opening project in Miami?
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss your pre-opening project
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </>
  )
}




