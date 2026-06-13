import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogHotelFB() {
  return (
    <>
      <SEO
        title="Hotel F&B Operations: Why Your Restaurant Is Underperforming"
        description="Five problems seen across every underperforming hotel F&B outlet — from Viceroy Miami's $4.2M portfolio — and the operational fixes that work."
        path="/insights/hotel-fb-why-your-restaurant-underperforms"
        type="article"
        schemaType="article"
        article={{
          headline: 'Hotel F&B Operations: Why Your Restaurant Is Underperforming',
          datePublished: '2026-02-15',
          dateModified: '2026-06-01',
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src="/images/blog-hotel-fb.jpg" alt="" width="1400" height="600" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <span className="kicker">Hotel Operations</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[28ch] mb-4">
            Hotel F&amp;B: Why Your Restaurant Is Underperforming
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[52ch] leading-relaxed">February 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose-article">
            <ScrollReveal>
              <p>
                I've managed F&amp;B operations across restaurant, pool, and banquet outlets at Viceroy Miami —
                a $4.2M annual revenue portfolio. I've also walked into underperforming hotel F&amp;B outlets
                and seen the same five problems every time.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p>
                Hotel F&amp;B is a different animal than independent restaurants. You have brand standards,
                guest expectations, and a captive audience that can just as easily order room service or
                walk across the street. The margin for error is thin, and the cost of fixing it is high.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}><h2>Problem 1: The Menu Is Too Broad</h2></ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card">
                <p>
                  Hotel restaurants try to be everything to everyone — breakfast buffet, lunch, dinner,
                  room service, banquets, pool, minibar. The result is a kitchen that can't execute
                  anything well. At Viceroy, we reduced the dinner menu from 42 items to 28.
                  Food cost dropped 3%, ticket times improved 18%, and guest satisfaction for food
                  quality rose from 3.7 to 4.5.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}><h2>Problem 2: Labor Misallocated Across Outlets</h2></ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                Hotel F&amp;B has multiple revenue centers but one labor pool. The GM sees total labor cost.
                The outlets see individual P&amp;Ls. No one sees the full picture. We restructured from
                department-based to outlet-based labor budgets at Viceroy. The pool outlet went from
                38% labor cost to 29% while increasing revenue 25% through better upsell training.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}><h2>Problem 3: No Brand Identity for the Restaurant</h2></ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="card">
                <p>
                  If guests can't describe your restaurant in one sentence, you don't have a concept.
                  At SLS Brickell, the banquet team struggled because guests didn't understand the F&amp;B
                  concept. We created a culinary story — a 2-minute narrative about the chef's vision,
                  local sourcing, and Miami flavors — that servers used during tastings.
                  Event bookings increased 22%.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}><h2>Problem 4: Inconsistent Guest Experience Across Outlets</h2></ScrollReveal>
            <ScrollReveal delay={500}>
              <p>
                A guest has breakfast, lunch by the pool, and dinner in the restaurant. Three different
                teams, three different service standards, three different experiences. The guest doesn't
                care about your org chart. The fix is one service standard across all outlets,
                cross-outlet training, daily pre-shift with representatives from every outlet,
                and a single guest feedback system regardless of which outlet they visited.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={550}><h2>Problem 5: The P&L Is Invisible to the People Who Run It</h2></ScrollReveal>
            <ScrollReveal delay={600}>
              <div className="card">
                <p>
                  Most hotel F&amp;B outlets don't see their numbers until month-end — 30 days after the
                  damage is done. At Viceroy, we implemented daily flash reports: labor cost, food cost,
                  and revenue by outlet emailed to managers by 10am every day. Labor variance went from
                  8% over budget to 2% under budget within one quarter. Managers started self-correcting
                  before the GM had to intervene.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={650}>
              <p>
                Hotel F&amp;B underperforms because it's treated as an amenity, not a business.
                The fix is operational discipline — clear concepts, smart labor allocation,
                consistent standards, and real-time accountability. The solution is never a new chef
                or a new menu. It's a new operating system.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="mt-4 flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary">Book a Hotel F&amp;B Assessment</Link>
                <Link to="/insights/what-a-fractional-gm-actually-does" className="btn btn-ghost">What a Fractional GM Does &rarr;</Link>
                <Link to="/insights" className="btn btn-ghost">&larr; Back to Insights</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
