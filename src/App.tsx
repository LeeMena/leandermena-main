import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import PreOpening from '@/pages/PreOpening'
import Experience from '@/pages/Experience'
import Philosophy from '@/pages/Philosophy'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pre-opening" element={<PreOpening />} />
        <Route path="experience" element={<Experience />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
