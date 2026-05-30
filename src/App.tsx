import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import PreOpening from '@/pages/PreOpening'
import Experience from '@/pages/Experience'
import Philosophy from '@/pages/Philosophy'
import Contact from '@/pages/Contact'
import Profile from '@/pages/Profile'
import Book from '@/pages/Book'
import CaseStudies from '@/pages/CaseStudies'
import Insights from '@/pages/Insights'
import BlogIndex from '@/pages/BlogIndex'
import BlogPreOpening from '@/pages/BlogPreOpening'
import BlogFractionalGM from '@/pages/BlogFractionalGM'
import BlogLaborCost from '@/pages/BlogLaborCost'

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
        <Route path="profile" element={<Profile />} />
        <Route path="book" element={<Book />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="insights" element={<Insights />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/pre-opening" element={<BlogPreOpening />} />
        <Route path="blog/fractional-gm" element={<BlogFractionalGM />} />
        <Route path="blog/labor-cost" element={<BlogLaborCost />} />
      </Route>
    </Routes>
  )
}
