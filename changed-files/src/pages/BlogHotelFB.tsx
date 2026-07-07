import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogHotelFB() {
  return (
    <>
      <SEO
        title="Hotel F&B: Why Your Restaurant Underperforms"
        description="The structural differences between hotel F&B and standalone restaurants, and why most hotel operators get it wrong."
        path="/insights/hotel-fb-why-your-restaurant-underperforms"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-hotel-fb.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Hotel F&amp;B</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              Hotel F&amp;B: Why Your Restaurant Underperforms
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              The structural differences between hotel F&amp;B and standalone restaurants, and why most hotel operators get it wrong.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Hotel restaurants are structurally different from independent restaurants. The ownership
                model, the incentive structure, the guest mix, and the operational constraints are all
                different. Most hotel F&amp;B programs underperform not because of bad food or bad
                service, but because they are being run like standalone restaurants when they are not.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have run F&amp;B for Accor properties and led hotel outlet openings in Miami.
                Here is what I have learned about why hotel restaurants fail and what the operators
                who get it right do differently.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Captive Guest Problem</h2>
              <p>
                Hotel restaurants often rely too heavily on captive guests: hotel guests who eat
                on-property because it is convenient, not because they chose you. This creates a
                false sense of demand that masks the restaurant's actual competitive position. When
                occupancy drops, so does cover count, and the P&amp;L falls apart because the cost
                structure was built for a volume that was never sustainable without the hotel feeding it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>The Incentive Misalignment</h2>
              <p>
                In most hotel structures, the F&amp;B director reports to a general manager whose
                primary focus is rooms revenue. F&amp;B is often seen as a support function, a
                guest amenity, rather than a profit center. This creates chronic underinvestment
                in the restaurant: in staffing, in menu development, in marketing. The restaurant
                that could drive destination dining becomes a break-even amenity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Staffing Model Is Wrong</h2>
              <p>
                Hotel F&amp;B staffing is often based on hotel occupancy projections that do not
                account for local dining demand. Restaurants that could fill from the street are
                staffed lean because rooms are slow. Alternatively, restaurants are overstaffed
                for banquet events and underserved during regular dinner service. Labor cost runs
                high not because of wages but because of poor alignment between staffing models
                and actual demand patterns.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>What the Best Hotel F&amp;B Programs Do Differently</h2>
              <p>
                The hotel F&amp;B programs I have seen succeed treat the restaurant as a standalone
                business with a hotel distribution advantage. They build a local guest base
                independent of hotel occupancy. They track restaurant P&amp;L separately from
                hotel financials. They hire F&amp;B operators, not hotel generalists, to run the
                outlet. And they give those operators the autonomy to make decisions at the speed
                the restaurant business requires.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Running a hotel F&amp;B outlet that is not performing?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I have restructured hotel F&amp;B operations from the staffing model to the P&amp;L.
                  Let's talk about what is holding your outlet back.
                </p>
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
                <Link to="/book" className="btn btn-secondary" style={{ marginLeft: '0.75rem' }}>Book a Discovery Call</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>
    </>
  )
}
