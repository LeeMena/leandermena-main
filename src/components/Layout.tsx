import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import CommandMenu from './CommandMenu'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
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
    </div>
  )
}