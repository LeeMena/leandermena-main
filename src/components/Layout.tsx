import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import CommandMenu from './CommandMenu'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <AnnouncementBar />
      <Navigation onBookCall={() => navigate('/book')} />
      <CommandMenu />
      <main id="main-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
