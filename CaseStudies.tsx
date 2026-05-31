import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Generate chart data from case study metrics
const generateChartData = (caseStudy: (typeof caseStudies)[0]) => {
  if (caseStudy.id === '2') {
    return [
      { month: 'Month 1', value: 100, label: 'Baseline' },
      { month: 'Month 2', value: 96, label: '-4%' },
      { month: 'Month 3', value: 91, label: '-9%' },
      { month: 'Month 4', value: 87, label: '-13%' },
      { month: 'Month 5', value: 84, label: '-16%' },
      { month: 'Month 6', value: 82, label: '-18%' },
    ];
  }
  if (caseStudy.id === '4') {
    return [
      { month: 'Start', value: 12, label: '12 properties' },
      { month: 'Q1', value: 18, label: '+6' },
      { month: 'Q2', value: 23, label: '+11' },
      { month: 'Q3', value: 26, label: '+14' },
      { month: 'End', value: 28, label: '+16 (2.3x)' },
    ];
  }
  if (caseStudy.id === '1') {
    return [
      { month: 'Week 1', value: 0, label: 'Start' },
      { month: 'Week 4', value: 12, label: '12 hired' },
      { month: 'Week 8', value: 25, label: '25 hired' },
      { month: 'Week 12', value: 35, label: '35 hired' },
    ];
  }
  if (caseStudy.id === '3') {
    return [
      { month: 'Setup', value: 0, label: 'Building' },
      { month: 'Soft Open', value: 50, label: '50 guests' },
      { month: 'Launch', value: 200, label: '200 guests' },
      { month: 'Scale', value: 500, label: '500 guests' },
    ];
  }
  return [];
};

const COLORS = ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b'];

function CaseStudyCard({ study, index }: { study: (typeof caseStudies)[0]; index: number }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartData = generateChartData(study);

  useEffect(() => {
    if (!chartRef.current) return;
    gsap.fromTo(
      chartRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 bg-slate-100 overflow-hidden">
        <img
          src={study.image}
          alt={study.client}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-white/90 text-slate-900 text-xs font-medium rounded-full mb-2">
            {study.industry}
          </span>
          <h3 className="text-white text-xl font-bold">{study.client}</h3>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h4>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{study.challenge}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.results.map((result, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-slate-900">{result.metric}</div>
              <div className="text-xs text-slate-500">{result.label}</div>
            </div>
          ))}
        </div>

        {chartData.length > 0 && (
          <div ref={chartRef} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Progression</span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={chartData} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                  cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((_, i) => (
                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {study.services.map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
            >
              {service}
            </span>
          ))}
        </div>

        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
        >
          Read full case study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            Proven Results
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Client Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real outcomes from real engagements. Every metric is documented, every result is measurable.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-slate-600 mb-8">
            Every engagement starts with a conversation. Let's discuss your challenges and build a roadmap.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
