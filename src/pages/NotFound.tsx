import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ minHeight: '100dvh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/landing-hero.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 40%)' }} />
        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <span className="kicker">404 - Page Not Found</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
            This page doesn't exist.
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[38ch] leading-relaxed mb-8">
            It may have moved or never existed. Head back to the homepage or explore the site.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Leander</Link>
          </div>
        </div>
      </section>
    </>
  )
}
