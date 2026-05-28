import { Link } from 'react-router-dom'

export default function BlogIndex() {
  return (
    <main>
      <div className="page-header container">
        <span className="kicker">Insights from the floor</span>
        <h1>Articles by Leander Mena</h1>
        <p>Practical writing on restaurant operations, pre-opening strategy, and fractional F&amp;B leadership from 18+ years in Miami hospitality.</p>
      </div>
      <section className="section">
        <div className="container grid-3">
          <article className="card">
            <div className="eyebrow">Pre-Opening</div>
            <h3>The Miami Pre-Opening Playbook</h3>
            <p>The 90-day framework for taking a Miami restaurant from empty shell to opening night — staffing, SOPs, vendors, and training.</p>
            <Link to="/blog/miami-pre-opening-playbook">Read article →</Link>
          </article>
          <article className="card">
            <div className="eyebrow">Fractional Leadership</div>
            <h3>What a Fractional GM Actually Does</h3>
            <p>Most restaurant owners have heard the term. Few understand what fractional F&amp;B leadership actually looks like week to week.</p>
            <Link to="/blog/what-fractional-gm-does">Read article →</Link>
          </article>
          <article className="card">
            <div className="eyebrow">Operations</div>
            <h3>Labor Cost Control in Miami Restaurants</h3>
            <p>The scheduling and productivity systems used across 18+ years to keep labor cost in line without sacrificing service.</p>
            <Link to="/blog/labor-cost-control-miami-restaurants">Read article →</Link>
          </article>
        </div>
      </section>
    </main>
  )
}
