import { Link } from 'react-router-dom'

export default function BlogFractionalGM() {
  return (
    <main>
      <div className="article-header">
        <span className="kicker">Fractional Leadership</span>
        <h1>What a Fractional GM Actually Does</h1>
        <p>By <Link to="/leander-mena-miami-hospitality">Leander Mena</Link> — Miami F&amp;B Operations</p>
      </div>
      <div className="article-body">
        <p>The term fractional GM gets used loosely. Some people mean a consultant who sends reports. Others mean a part-time employee. What Leander Mena delivers is something more specific: senior operational leadership on a structured schedule, embedded in your business, accountable for real outcomes.</p>
        <h2>What Fractional Means in Practice</h2>
        <p>A fractional engagement typically runs two to four days per week on-site, with availability for calls and planning outside those days. The fractional GM operates inside the business — attending pre-shifts, reviewing numbers, developing managers, and making operational decisions with the owner.</p>
        <h2>What Gets Done Week to Week</h2>
        <ul>
          <li>On-site leadership during peak service periods</li>
          <li>Weekly P&amp;L review with ownership</li>
          <li>Manager coaching and accountability check-ins</li>
          <li>SOP compliance review and correction</li>
          <li>Scheduling review and labor cost monitoring</li>
          <li>Vendor relationship management and cost negotiation</li>
          <li>Guest experience monitoring and service recovery</li>
        </ul>
        <h2>Who It's Right For</h2>
        <p>Fractional F&amp;B leadership works best for independent operators who have outgrown their current management structure but aren't ready to hire a full-time director. It also works for multi-unit groups that need senior oversight across locations without duplicating a full-time salary at each one.</p>
        <h2>What It Is Not</h2>
        <p>A fractional GM is not a mystery shopper, a trainer who visits once, or a consultant who delivers a deck and disappears. The value is in continuity — showing up, staying accountable, and making decisions that compound over time.</p>
        <div className="inline-cta" style={{marginTop:'2rem'}}>
          <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
          <Link to="/services" className="btn btn-secondary">View services</Link>
        </div>
      </div>
    </main>
  )
}
