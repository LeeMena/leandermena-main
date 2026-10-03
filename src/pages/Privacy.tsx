import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const EMAIL = 'info@leandermena.com'

const services = [
  ['Cloudflare', 'hosting, security, and privacy-friendly traffic statistics'],
  ['Formspree', 'delivers contact form messages by email'],
  ['Kit (ConvertKit)', 'delivers the free 90-Day Pre-Opening Blueprint and related follow-up emails'],
  ['Calendly', 'scheduling for discovery calls'],
  ['Gumroad', 'checkout and delivery for digital products'],
  ['Plausible Analytics', 'cookie-free, aggregated website statistics'],
  ['Google Fonts and Unsplash', 'deliver the fonts and some of the photography on this site'],
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Leander Mena"
        description="How leandermena.com collects, uses, and protects the information you share through its forms, scheduling, and analytics."
        path="/privacy"
        noindex
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Legal</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="section-intro">Last updated: October 3, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose">
            <p>
              This policy explains what information leandermena.com (the &ldquo;Site&rdquo;) collects, how it is used,
              and the choices you have. The Site is operated by Leander Mena, an F&amp;B operations consultant based in Miami, Florida.
            </p>

            <h2>Information you provide</h2>
            <ul>
              <li><strong>Contact form:</strong> your name, email address, business name, the service you are interested in, and your message.</li>
              <li><strong>Blueprint download:</strong> your name and email address.</li>
              <li><strong>Scheduling:</strong> the details you enter when booking a call through Calendly.</li>
              <li><strong>Purchases:</strong> handled by Gumroad. Payment details are never collected or stored by this Site.</li>
            </ul>

            <h2>How it is used</h2>
            <ul>
              <li>To respond to your inquiry and prepare for any call you book.</li>
              <li>To send the resource you requested and occasional related emails. Every email includes an unsubscribe link.</li>
              <li>To understand which pages are useful, using aggregated statistics that do not identify you.</li>
            </ul>
            <p>Your information is never sold or rented, and it is not shared with anyone for their own marketing.</p>

            <h2>Analytics and cookies</h2>
            <p>
              Traffic statistics come from Plausible Analytics and Cloudflare Web Analytics, both of which work without
              cookies and do not track you across other websites. No advertising cookies are used. If you open the
              Calendly scheduler, Calendly may set its own cookies under its privacy policy.
            </p>

            <h2>Service providers</h2>
            <p>The Site relies on these providers, each of which handles data under its own privacy policy:</p>
            <ul>
              {services.map(([name, purpose]) => (
                <li key={name}><strong>{name}:</strong> {purpose}</li>
              ))}
            </ul>

            <h2>Retention</h2>
            <p>
              Inquiries are kept only as long as needed to respond and to keep a record of the conversation.
              Email subscribers stay on the list until they unsubscribe or ask to be removed.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask to see, correct, or delete the personal information held about you at any time by emailing{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. You can unsubscribe from emails using the link in any message.
            </p>

            <h2>Children</h2>
            <p>The Site is intended for business professionals and is not directed to children under 13.</p>

            <h2>Changes</h2>
            <p>If this policy changes, the updated version will be posted on this page with a new date.</p>

            <h2>Contact</h2>
            <p>
              Questions about privacy: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or use the{' '}
              <Link to="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
