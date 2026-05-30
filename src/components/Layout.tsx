import { useState, useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CalendlyModal from '@/components/CalendlyModal'

export default function Layout() {
  const { pathname } = useLocation()
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Preconnect to Calendly for faster modal load
  useEffect(() => {
    const domains = [
      'https://calendly.com',
      'https://assets.calendly.com',
    ]
    domains.forEach((href) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = href
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      }
    })
  }, [])

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#0a0a0a] text-[#e8e8e8]">
      <Navigation onBookCall={() => setCalendlyOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </div>
  )
}
