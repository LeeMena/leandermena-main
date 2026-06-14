import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'

// Main pages
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import PreOpening from '@/pages/PreOpening'
import Experience from '@/pages/Experience'
import Philosophy from '@/pages/Philosophy'
import Contact from '@/pages/Contact'
import Profile from '@/pages/Profile'
import Blueprint from '@/pages/Blueprint'
import CaseStudies from '@/pages/CaseStudies'
import Book from '@/pages/Book'
import Shop from '@/pages/Shop'
import NotFound from '@/pages/NotFound'

// Insights index
import BlogIndex from '@/pages/BlogIndex'

// Insights articles
import BlogFractionalGM from '@/pages/BlogFractionalGM'
import BlogWhyFractionalLeadership from '@/pages/BlogWhyFractionalLeadership'
import BlogPreOpeningTimeline from '@/pages/BlogPreOpeningTimeline'
import BlogPreOpening from '@/pages/BlogPreOpening'
import BlogBadPreOpening from '@/pages/BlogBadPreOpening'
import BlogLaborCost from '@/pages/BlogLaborCost'
import BlogLaborCostFull from '@/pages/BlogLaborCostFull'
import BlogHotelFB from '@/pages/BlogHotelFB'
import BlogMiamiLabor from '@/pages/BlogMiamiLabor'
import BlogTraining from '@/pages/BlogTraining'

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pre-opening" element={<PreOpening />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />

        {/* Insights */}
        <Route path="/insights" element={<BlogIndex />} />
        <Route path="/insights/what-a-fractional-gm-actually-does" element={<BlogFractionalGM />} />
        <Route path="/insights/why-fractional-leadership-works" element={<BlogWhyFractionalLeadership />} />
        <Route path="/insights/pre-opening-timeline" element={<BlogPreOpeningTimeline />} />
        <Route path="/insights/miami-pre-opening-playbook" element={<BlogPreOpening />} />
        <Route path="/insights/real-cost-of-bad-pre-opening" element={<BlogBadPreOpening />} />
        <Route path="/insights/labor-cost-control-miami-restaurants" element={<BlogLaborCost />} />
        <Route path="/insights/reduce-labor-cost-without-cutting-service" element={<BlogLaborCostFull />} />
        <Route path="/insights/hotel-fb-why-your-restaurant-underperforms" element={<BlogHotelFB />} />
        <Route path="/insights/miami-restaurant-labor-market-2026" element={<BlogMiamiLabor />} />
        <Route path="/insights/building-training-program-that-works" element={<BlogTraining />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
