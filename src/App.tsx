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
import BlogBadPreOpening from '@/pages/BlogBadPreOpening'
import BlogHotelFB from '@/pages/BlogHotelFB'
import BlogMiamiLabor from '@/pages/BlogMiamiLabor'
import BlogTraining from '@/pages/BlogTraining'
import BlogLaborCostFull from '@/pages/BlogLaborCostFull'
import Shop from '@/pages/Shop'
import CaseStudies from '@/pages/CaseStudies'
import Products from '@/pages/Products'
import Book from '@/pages/Book'
import Blueprint from '@/pages/Blueprint'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pre-opening" element={<PreOpening />} />
        <Route path="experience" element={<Experience />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />

        {/* ORM brand page — redirect to canonical /about */}
        <Route path="orm" element={<Navigate to="/about" replace />} />

        {/* Insights — canonical long-form slugs */}
        <Route path="insights" element={<BlogIndex />} />
        <Route path="insights/what-a-fractional-gm-actually-does" element={<BlogFractionalGM />} />
        <Route path="insights/why-fractional-leadership-works" element={<BlogPreOpening />} />
        <Route path="insights/pre-opening-timeline" element={<BlogPreOpening />} />
        <Route path="insights/miami-pre-opening-playbook" element={<BlogPreOpening />} />
        <Route path="insights/real-cost-of-bad-pre-opening" element={<BlogBadPreOpening />} />
        <Route path="insights/labor-cost-control-miami-restaurants" element={<BlogLaborCost />} />
        <Route path="insights/reduce-labor-cost-without-cutting-service" element={<BlogLaborCostFull />} />
        <Route path="insights/hotel-fb-why-your-restaurant-underperforms" element={<BlogHotelFB />} />
        <Route path="insights/miami-restaurant-labor-market-2026" element={<BlogMiamiLabor />} />
        <Route path="insights/building-training-program-that-works" element={<BlogTraining />} />

        {/* Legacy short slugs — client-side redirect to canonical URLs */}
        <Route path="insights/timeline" element={<Navigate to="/insights/pre-opening-timeline" replace />} />
        <Route path="insights/bad-pre-opening" element={<Navigate to="/insights/real-cost-of-bad-pre-opening" replace />} />
        <Route path="insights/why-fractional" element={<Navigate to="/insights/why-fractional-leadership-works" replace />} />
        <Route path="insights/labor-cost-full" element={<Navigate to="/insights/reduce-labor-cost-without-cutting-service" replace />} />
        <Route path="insights/hotel-fb" element={<Navigate to="/insights/hotel-fb-why-your-restaurant-underperforms" replace />} />
        <Route path="insights/miami-labor" element={<Navigate to="/insights/miami-restaurant-labor-market-2026" replace />} />
        <Route path="insights/training" element={<Navigate to="/insights/building-training-program-that-works" replace />} />

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