import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <main>
      <div className="page-header container">
        <span className="kicker">Miami, Florida</span>
        <h1>Leander Mena — Miami Hospitality &amp; F&amp;B Operations Leader</h1>
        <p>18+ years opening, stabilizing, and scaling restaurants, hotels, banquets, and catering operations across South Florida.</p>
      </div>
      <div className="content-body">
        <div className="profile-wrap">
          <img src="/about.jpg" alt="Leander Mena — Miami hospitality consultant" width="220" height="280" loading="lazy" />
          <div>
            <span className="dateline">Miami, Florida</span>
            <p>Leander Mena is a Miami-based hospitality and food-and-beverage operations leader with more than 18 years of experience opening, leading, and stabilizing restaurants, hotels, banquets, and catering operations across South Florida.</p>
            <p>He has served as General Manager, Director of Banquets, and Fractional Operations Leader for properties ranging from independent Miami restaurants to luxury hotel groups. His work spans pre-opening builds, operations recovery, labor cost control, SOP development, and team training.</p>
            <p>Leander Mena is available for fractional F&amp;B leadership engagements, pre-opening consulting, and project-based operations support across Miami and South Florida.</p>
          </div>
        </div>
        <h2>Core Competencies</h2>
        <div className="skills-wall">
          {['Restaurant Operations','Hotel F&B Management','Pre-Opening GM','Banquet Operations','Catering Management','P&L Management','Labor Cost Control','SOP Development','Team Training','Guest Experience','Vendor Management','Fractional Leadership'].map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
        <h2>Selected Roles</h2>
        <div className="role-list" style={{marginTop:'1.5rem'}}>
          <div className="role"><div className="role-meta">Opening GM</div><h3>Maska Indian Kitchen + Bar — Miami</h3><p>Built the full opening team, vendor relationships, service standards, and operating systems for a concept led by a Michelin-starred chef.</p></div>
          <div className="role"><div className="role-meta">Director of Banquets — Pre-Opening</div><h3>SLS Brickell — Miami</h3><p>Created staffing models, event workflows, and banquet execution systems before first guest arrival at a luxury urban hotel.</p></div>
          <div className="role"><div className="role-meta">General Manager</div><h3>Marabu Restaurant | Coal Fire Cuban Cuisine — Miami</h3><p>Led labor optimization, service consistency, and guest-experience improvement for a high-volume Miami concept.</p></div>
          <div className="role"><div className="role-meta">General Manager</div><h3>Viceroy Miami</h3><p>Managed F&amp;B operations across restaurant, pool, and banquet outlets at an iconic Miami Beach luxury property.</p></div>
        </div>
        <div className="inline-cta" style={{marginTop:'2.5rem'}}>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          <Link to="/experience" className="btn btn-secondary">Full Career History</Link>
        </div>
      </div>
    </main>
  )
}
