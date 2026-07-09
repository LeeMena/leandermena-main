import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import PreOpening from '@/pages/PreOpening'
import Experience from '@/pages/Experience'
import Skills from '@/pages/Skills'
import Philosophy from '@/pages/Philosophy'
import Contact from '@/pages/Contact'
import Profile from '@/pages/Profile'
import Blueprint from '@/pages/Blueprint'
import CaseStudies from '@/pages/CaseStudies'
import CaseStudyDetail from '@/pages/CaseStudyDetail'
import Book from '@/pages/Book'
import Shop from '@/pages/Shop'
import Products from '@/pages/Products'
import Industries from '@/pages/Industries'
import MiamiRestaurantConsultant from '@/pages/MiamiRestaurantConsultant'
import NotFound from '@/pages/NotFound'

import BlogIndex from '@/pages/BlogIndex'
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
import BlogLaborCostUS from '@/pages/BlogLaborCostUS'
import BlogLaborCostEurope from '@/pages/BlogLaborCostEurope'
import BlogLaborCostLatAm from '@/pages/BlogLaborCostLatAm'
import BlogLaborCostCaribbean from '@/pages/BlogLaborCostCaribbean'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pre-opening" element={<PreOpening />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/miami-restaurant-consultant" element={<MiamiRestaurantConsultant />} />

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
        <Route path="/insights/labor-cost-control-us-restaurants" element={<BlogLaborCostUS />} />
        <Route path="/insights/labor-cost-control-europe-restaurants" element={<BlogLaborCostEurope />} />
        <Route path="/insights/labor-cost-control-latin-america" element={<BlogLaborCostLatAm />} />
        <Route path="/insights/labor-cost-control-caribbean" element={<BlogLaborCostCaribbean />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
