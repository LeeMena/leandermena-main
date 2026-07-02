import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle, FileText } from 'lucide-react'
import BlueprintModal from './BlueprintModal'

const highlights = [
  'Day-by-day opening timeline from Day 1 to Day 90',
  'Staffing, training & systems checklists',
  'Menu development & cost control framework',
  'Soft-open strategy & opening week playbook',
]

export default function BlueprintCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BlueprintModal isOpen={open} onClose={() => setOpen(false)} />

      <section
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          paddingBlock: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'center',
            }}
          >
            {/* Left - copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="kicker">Free Resource</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  lineHeight: 1.1,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                The 90-Day Pre-Opening Blueprint
              </h2>
              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)',
                  maxWidth: '46ch',
                }}
              >
                The exact framework I&rsquo;ve used to open restaurants and hotels on time and on budget &mdash; distilled into a free, actionable guide.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                {highlights.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* FIX #10: flex-col on mobile so buttons don't squeeze below 44px touch target */}
              <div className="blueprint-cta-btns">
                <button onClick={() => setOpen(true)} className="btn btn-primary">
                  <Download size={16} /> Get the Free Blueprint
                </button>
                <a
                  href="/assets/pre-opening-blueprint-ebook.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FileText size={16} /> Preview Ebook
                </a>
              </div>
            </motion.div>

            {/* Right - ebook mockup */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '320px',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, transform: 'rotate(3deg) translateY(8px)', background: 'var(--color-surface-offset)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }} />
                <div style={{ position: 'absolute', inset: 0, transform: 'rotate(1.5deg) translateY(4px)', background: 'var(--color-surface-offset-2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }} />

                <div
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1612 100%)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(184,160,128,0.3)',
                    padding: 'var(--space-8)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                    aspectRatio: '3/4',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>Free Resource</p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                        color: '#ffffff',
                        lineHeight: 1.15,
                        marginBottom: 'var(--space-3)',
                      }}
                    >
                      The 90-Day Pre-Opening Blueprint
                    </h3>
                    <div style={{ height: '1px', background: 'linear-gradient(to right, var(--color-primary), transparent)', marginBottom: 'var(--space-4)' }} />
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      Day-by-day framework for opening restaurants &amp; hotels on time and on budget.
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <img
                      src="/assets/Profile-Headshot.jpg"
                      alt="Leander Mena"
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(184,160,128,0.4)' }}
                    />
                    <div>
                      <p style={{ fontSize: '0.72rem', color: '#ffffff', fontWeight: 600 }}>Leander Mena</p>
                      <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>18+ Years F&amp;B Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FIX #10: stack buttons vertically on mobile */}
        <style>{`
          .blueprint-cta-btns {
            display: flex;
            flex-direction: column;
            gap: var(--space-3);
          }
          .blueprint-cta-btns .btn {
            width: 100%;
            justify-content: center;
          }
          @media (min-width: 480px) {
            .blueprint-cta-btns {
              flex-direction: row;
              flex-wrap: wrap;
            }
            .blueprint-cta-btns .btn {
              width: auto;
            }
          }
        `}</style>
      </section>
    </>
  )
}
