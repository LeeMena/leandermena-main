import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Experience from '@/pages/Experience';
import PreOpening from '@/pages/PreOpening';
import Philosophy from '@/pages/Philosophy';
import Contact from '@/pages/Contact';
import Insights from '@/pages/Insights';
import NotFound from '@/pages/NotFound';

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/pre-opening" element={<PreOpening />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
