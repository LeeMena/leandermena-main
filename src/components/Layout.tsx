import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import CommandMenu from './CommandMenu'
import ScrollToTop from './ScrollToTop'
import { useConversionTracking } from '@/lib/analytics'

export default function Layout() {
  const navigate = useNavigate()
  const { trackBookCall } = useConversionTracking()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <AnnouncementBar />
      <Navigation onBookCall={() => { trackBookCall(); navigate('/book') }} />
      <CommandMenu />
      <main id="main-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
