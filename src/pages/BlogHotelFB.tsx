import SEO from '@/components/SEO'
import RelatedArticles from '@/components/RelatedArticles'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogHotelFB() {
  return (
    <>
      <SEO
        title="Hotel F&amp;B: Why Your Restaurant Underperforms"
        description="The structural differences between hotel F&amp;B and standalone restaurants, and why most hotel operators get it wrong."
        path="/insights/hotel-fb-why-your-restaurant-underperforms"
        image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?fm=jpg&w=1200&h=630&fit=crop&crop=edges&q=80&auto=format"
        imageAlt="Plated entree served in a hotel restaurant"
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
                Hotel restaurants are structurally different from independent restaurants. The ownership model, the incentive structure, the guest mix, and the operational constraints are all different. Most hotel F&amp;B programs underperform not because of bad food or bad service, but because they are being run like standalone restaurants when they are not.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have run F&amp;B for Accor properties and led hotel outlet openings in Miami. Here is what I have learned about why hotel restaurants fail and what the operators who get it right do differently.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Captive Guest Problem</h2>
              <p>
                Hotel restaurants often rely too heavily on captive guests: hotel guests who eat on-property because it is convenient, not because they chose you. This creates a false sense of demand that masks the restaurant's actual competitive position. When occupancy drops, so does cover count, and the P&amp;L falls apart because the cost structure was built for a volume that was never sustainable without the hotel feeding it.
              </p>
              <p>
                The fix is to build a local guest base independent of hotel occupancy. That requires a distinct brand identity, a menu that stands on its own, and a marketing budget that treats the restaurant as a separate business. The hotel distribution is an advantage, not a business model. The restaurant needs to survive on its own merits.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>The Incentive Misalignment</h2>
              <p>
                In most hotel structures, the F&amp;B director reports to a general manager whose primary focus is rooms revenue. F&amp;B is often seen as a support function, a guest amenity, rather than a profit center. This creates chronic underinvestment in the restaurant: in staffing, in menu development, in marketing. The restaurant that could drive destination dining becomes a break-even amenity.
              </p>
              <p>
                The properties that fix this create a separate restaurant P&amp;L with a dedicated F&amp;B manager who is accountable for revenue, cost, and guest satisfaction. The GM supports the restaurant but does not own it. The F&amp;B director has a direct line to the owner or asset manager. The reporting structure determines the resources, and the resources determine the result.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Staffing Model Is Wrong</h2>
              <p>
                Hotel F&amp;B staffing is often based on hotel occupancy projections that do not account for local dining demand. Restaurants that could fill from the street are staffed lean because rooms are slow. Alternatively, restaurants are overstaffed for banquet events and underserved during regular dinner service. Labor cost runs high not because of wages but because of poor alignment between staffing models and actual demand patterns.
              </p>
              <p>
                I have restructured hotel F&amp;B staffing models by separating the restaurant from the banquet and room service operations. Each channel has its own labor target, its own forecast, and its own manager. The result is a restaurant that can flex with local demand, and banquet and room service that are costed independently. This is not more complex. It is more honest.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Banquets Are a Hidden P&amp;L Problem</h2>
              <p>
                Most hotel operators ignore the banquet P&amp;L because it is buried in the catering line item. But banquet food cost, banquet labor, and banquet setup time are the most common leak in hotel F&amp;B. A banquet event with a $45 per person food cost and a 45% labor cost is losing money, and the hotel is subsidizing it from the restaurant and room service.
              </p>
              <p>
                The properties I have worked with that fix this create a separate banquet cost sheet for every event. The food cost is tracked per event, the labor is tracked per event, and the margin is calculated before the contract is signed. If the event is below a threshold margin, it is priced accordingly or declined. Banquets are not a volume play. They are a margin play.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <h2>What the Best Hotel F&amp;B Programs Do Differently</h2>
              <p>
                The hotel F&amp;B programs I have seen succeed treat the restaurant as a standalone business with a hotel distribution advantage. They build a local guest base independent of hotel occupancy. They track restaurant P&amp;L separately from hotel financials. They hire F&amp;B operators, not hotel generalists, to run the outlet. And they give those operators the autonomy to make decisions at the speed the restaurant business requires.
              </p>
              <p>
                The Accor properties I worked on were successful precisely because the restaurant had its own identity, its own manager, and its own P&amp;L. The hotel fed the restaurant on busy nights, and the restaurant fed the hotel on slow nights. That balance is the sign of a healthy hotel F&amp;B program.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Running a hotel F&amp;B outlet that is not performing?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I have restructured hotel F&amp;B operations from the staffing model to the P&amp;L. Let us talk about what is holding your outlet back.
                </p>
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      <RelatedArticles currentSlug="hotel-fb-why-your-restaurant-underperforms" />
      </article>
    </>
  )
}
