import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import PreOpening from '@/pages/PreOpening'
import Experience from '@/pages/Experience'
import Philosophy from '@/pages/Philosophy'
import Contact from '@/pages/Contact'
import Profile from '@/pages/Profile'
import BlogIndex from '@/pages/BlogIndex'
import BlogPreOpening from '@/pages/BlogPreOpening'
import BlogFractionalGM from '@/pages/BlogFractionalGM'
import BlogLaborCost from '@/pages/BlogLaborCost'
import Shop from '@/pages/Shop'
import CaseStudies from '@/pages/CaseStudies'
import Products from '@/pages/Products'
import Book from '@/pages/Book'
import Blueprint from '@/pages/Blueprint'
import NotFound from '@/pages/NotFound'

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
        <Route path="insights" element={<BlogIndex />} />
        <Route path="insights/pre-opening" element={<BlogPreOpening />} />
        <Route path="insights/fractional-gm" element={<BlogFractionalGM />} />
        <Route path="insights/labor-cost" element={<BlogLaborCost />} />
        <Route path="shop" element={<Shop />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="products" element={<Products />} />
        <Route path="book" element={<Book />} />
        <Route path="blueprint" element={<Blueprint />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}