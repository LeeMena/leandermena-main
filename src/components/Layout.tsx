import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import CommandMenu from './CommandMenu'

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <AnnouncementBar />
      <Navigation onBookCall={() => navigate('/book')} />
      <CommandMenu />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
