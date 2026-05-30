import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/dining (1).jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <span className="kicker">404 — Page Not Found</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
            This page doesn't exist.
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[48ch] mb-8 leading-relaxed">
            The URL you followed may be outdated or the page may have moved.
            Let's get you back to something useful.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn btn-primary">Go to Homepage</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Leander</Link>
          </div>
        </div>
      </section>
    </>
  )
}
