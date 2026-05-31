import { useState, useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnnouncementBar from '@/components/AnnouncementBar'
import CommandMenu from '@/components/CommandMenu'
import ThemeToggle from '@/components/ThemeToggle'
import CalendlyModal from '@/components/CalendlyModal'

export default function Layout() {
  const { pathname } = useLocation()
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <AnnouncementBar />
      <Navigation />
      <CommandMenu />
      <ThemeToggle />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </div>
  )
}