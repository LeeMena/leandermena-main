import { Link } from 'react-router-dom'

export default function BlogPreOpening() {
  return (
    <main>
      <div className="article-header">
        <span className="kicker">Pre-Opening</span>
        <h1>The Miami Pre-Opening Playbook</h1>
        <p>By <Link to="/leander-mena-miami-hospitality">Leander Mena</Link> — Miami F&amp;B Operations</p>
      </div>
      <div className="article-body">
        <p>Opening a restaurant in Miami requires more than a great concept and a lease. The 90 days before doors open determine whether a team performs under pressure or collapses under it. This playbook outlines how Leander Mena approaches pre-opening builds from day one of engagement.</p>
        <h2>Days 90–60: Foundation</h2>
        <p>The first phase is about building the operating backbone before a single hire is made. That means walking the space, understanding the concept deeply, mapping the service flow, and writing the first draft of every core SOP.</p>
        <ul>
          <li>Space walkthrough and operational gap assessment</li>
          <li>Vendor identification and preliminary outreach</li>
          <li>Org chart and staffing plan by role and phase</li>
          <li>Draft service flow for each daypart</li>
          <li>Opening budget alignment with ownership</li>
        </ul>
        <h2>Days 60–30: Hiring and Systems</h2>
        <p>Miami's hospitality labor market is competitive. Hiring has to start early, and onboarding has to be structured from the first day an employee walks in.</p>
        <ul>
          <li>Management team hired and onboarded</li>
          <li>Line staff recruitment and selection</li>
          <li>POS configuration and reporting setup</li>
          <li>Menu training materials and knowledge tests</li>
          <li>Vendor contracts finalized and delivery schedules confirmed</li>
        </ul>
        <h2>Days 30–0: Training and Execution</h2>
        <p>The final 30 days compress weeks of learning into days. The goal is a team that has failed safely before guests arrive.</p>
        <ul>
          <li>Two to three soft opening services with real guests</li>
          <li>Daily pre-shift meetings and post-service debriefs</li>
          <li>Final SOP sign-off by all managers</li>
          <li>Opening night execution plan distributed to all staff</li>
        </ul>
        <div className="inline-cta" style={{marginTop:'2rem'}}>
          <Link to="/contact" className="btn btn-primary">Discuss your pre-opening project</Link>
          <Link to="/pre-opening" className="btn btn-secondary">Pre-Opening Services</Link>
        </div>
      </div>
    </main>
  )
}
