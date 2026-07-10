import type { Lang } from '@/context/LanguageProvider'

type Dict = Record<string, string>

const en: Dict = {
  // --- nav ---
  'nav.workWithMe': 'Work With Me',
  'nav.preOpening': 'Pre-Opening',
  'nav.products': 'Playbooks',
  'nav.caseStudies': 'Results',
  'nav.experience': 'Experience',
  'nav.insights': 'Insights',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.bookCall': "Let's Talk",

  // --- home hero ---
  'home.heroEyebrow': 'F&B Operations Consulting · U.S. Nationwide',
  'home.heroSub': 'Eighteen years forged in Miami\'s most demanding kitchens, hotels, and banquet halls. Now embedded with operators nationwide - on-site when it matters, remote in between.',
  'home.ctaPrimary': 'Book a Discovery Call',
  'home.ctaSecondary': 'Explore Digital Products',
  'home.heroLocation': 'Based in Miami · US Nationwide · Select International Engagements',

  // --- home stats ---
  'home.stat.years': 'Years Experience',
  'home.stat.revenue': 'Revenue Optimized',
  'home.stat.trained': 'Team Members Trained',
  'home.stat.properties': 'Properties Operated',
  'home.stat.yearsLeading': 'Years Leading',
  'home.stat.team': 'Team Members',

  // --- home problem / solution / difference ---
  'home.problem.accent': 'The Problem',
  'home.problem.line1': 'Most operators',
  'home.problem.line2': "don't need more",
  'home.problem.line3': 'advice.',
  'home.problem.sub': "They need someone who's actually done it, at scale, under pressure, with real consequences.",

  'home.solution.accent': 'The Solution',
  'home.solution.line1': 'Expert',
  'home.solution.line2': 'consulting.',
  'home.solution.line3': 'Real results.',
  'home.solution.sub': 'Senior operational expertise, available without the overhead of a full-time executive hire.',

  'home.diff.accent': 'The Difference',
  'home.diff.line1': 'Why operators',
  'home.diff.line2': 'choose expert',
  'home.diff.line3': 'consulting.',
  'home.diff.sub': "Most hospitality groups don't need another full-time executive. They need a seasoned operator who can diagnose issues fast, implement systems that stick, and transfer knowledge to your existing team.",

  // --- home services section ---
  'home.services.accent': 'Engagement Models',
  'home.services.heading': 'Operational Leadership,',
  'home.services.headingEm': 'On Demand',
  'home.services.viewAll': 'View All Services & Pricing',

  // --- home process section ---
  'home.process.accent': 'How It Works',
  'home.process.heading': 'From First Call to',
  'home.process.headingEm': 'Measurable Results',
  'home.process.step1.title': 'Discovery Call',
  'home.process.step1.body': '30-minute conversation to understand your challenges, timeline, and goals.',
  'home.process.step2.title': 'On-Site Diagnostic',
  'home.process.step2.body': 'Deep-dive assessment of your operations, typically 3-5 days on location.',
  'home.process.step3.title': 'Implementation',
  'home.process.step3.body': 'Execute the action plan with weekly check-ins and real-time adjustments.',
  'home.process.step4.title': 'Sustainable Results',
  'home.process.step4.body': 'Handover systems, train your team, and ensure improvements stick long-term.',

  // --- home products section ---
  'home.products.accent': 'Digital Products',
  'home.products.heading': 'Tools Built from',
  'home.products.headingEm': 'Real Experience',
  'home.products.viewAll': 'Browse All Products',

  // --- home testimonials section ---
  'home.testimonials.accent': 'Client Results',
  'home.testimonials.heading': 'Measurable Impact,',
  'home.testimonials.headingEm': 'Real Words',
  'home.testimonials.viewAll': 'Read Full Case Studies',

  // --- home value props ---
  'home.value1.title': 'Rapid Diagnosis',
  'home.value1.body': 'Identify root causes within the first week, not months',
  'home.value2.title': 'Systems That Stick',
  'home.value2.body': 'SOPs and training programs your team will actually follow',
  'home.value3.title': 'Proven Track Record',
  'home.value3.body': '18+ years across Michelin concepts, luxury hotels, and independents',
  'home.value4.title': 'Measurable ROI',
  'home.value4.body': 'Average 3-5x return on consulting investment within 6 months',
}

const es: Dict = {
  // --- nav ---
  'nav.workWithMe': 'Trabaja Conmigo',
  'nav.preOpening': 'Pre-Apertura',
  'nav.products': 'Recursos',
  'nav.caseStudies': 'Resultados',
  'nav.experience': 'Experiencia',
  'nav.insights': 'Artículos',
  'nav.about': 'Perfil',
  'nav.contact': 'Contacto',
  'nav.bookCall': 'Hablemos',

  // --- home hero ---
  'home.heroEyebrow': 'Consultoría de Operaciones de A&B · Todo EE. UU.',
  'home.heroSub': 'Dieciocho años forjados en las cocinas, hoteles y salones de banquetes más exigentes de Miami. Hoy trabajo con operadores de todo el país: presencial cuando importa, remoto entre visitas.',
  'home.ctaPrimary': 'Agenda una Llamada',
  'home.ctaSecondary': 'Ver Productos Digitales',
  'home.heroLocation': 'Con Base en Miami · Todo EE. UU. · Proyectos Internacionales Selectos',

  // --- home stats ---
  'home.stat.years': 'Años de Experiencia',
  'home.stat.revenue': 'Ingresos Optimizados',
  'home.stat.trained': 'Miembros de Equipo Capacitados',
  'home.stat.properties': 'Propiedades Operadas',
  'home.stat.yearsLeading': 'Años Liderando',
  'home.stat.team': 'Miembros de Equipo',

  // --- home problem / solution / difference ---
  'home.problem.accent': 'El Problema',
  'home.problem.line1': 'La mayoría de los',
  'home.problem.line2': 'operadores no necesitan',
  'home.problem.line3': 'más consejos.',
  'home.problem.sub': 'Necesitan a alguien que realmente lo haya hecho, a escala, bajo presión y con consecuencias reales.',

  'home.solution.accent': 'La Solución',
  'home.solution.line1': 'Consultoría',
  'home.solution.line2': 'experta.',
  'home.solution.line3': 'Resultados reales.',
  'home.solution.sub': 'Experiencia operacional senior, disponible sin el costo fijo de una contratación ejecutiva de tiempo completo.',

  'home.diff.accent': 'La Diferencia',
  'home.diff.line1': 'Por qué los operadores',
  'home.diff.line2': 'eligen la consultoría',
  'home.diff.line3': 'experta.',
  'home.diff.sub': 'La mayoría de los grupos de hospitalidad no necesitan otro ejecutivo de tiempo completo. Necesitan un operador experimentado que pueda diagnosticar problemas rápido, implementar sistemas que perduran y transferir conocimiento a su equipo.',

  // --- home services section ---
  'home.services.accent': 'Modelos de Trabajo',
  'home.services.heading': 'Liderazgo Operacional,',
  'home.services.headingEm': 'A la Carta',
  'home.services.viewAll': 'Ver Todos los Servicios y Tarifas',

  // --- home process section ---
  'home.process.accent': 'Cómo Funciona',
  'home.process.heading': 'De la Primera Llamada a',
  'home.process.headingEm': 'Resultados Medibles',
  'home.process.step1.title': 'Llamada de Diagnóstico',
  'home.process.step1.body': 'Conversación de 30 minutos para entender sus desafíos, plazos y objetivos.',
  'home.process.step2.title': 'Diagnóstico en Sitio',
  'home.process.step2.body': 'Evaluación a fondo de sus operaciones, normalmente de 3 a 5 días en sitio.',
  'home.process.step3.title': 'Implementación',
  'home.process.step3.body': 'Ejecución del plan de acción con revisiones semanales y ajustes en tiempo real.',
  'home.process.step4.title': 'Resultados Sostenibles',
  'home.process.step4.body': 'Transferencia de sistemas, capacitación de su equipo y asegurar que las mejoras perduren.',

  // --- home products section ---
  'home.products.accent': 'Productos Digitales',
  'home.products.heading': 'Herramientas Creadas desde',
  'home.products.headingEm': 'Experiencia Real',
  'home.products.viewAll': 'Ver Todos los Productos',

  // --- home testimonials section ---
  'home.testimonials.accent': 'Resultados de Clientes',
  'home.testimonials.heading': 'Impacto Medible,',
  'home.testimonials.headingEm': 'Palabras Reales',
  'home.testimonials.viewAll': 'Leer Casos de Éxito Completos',

  // --- home value props ---
  'home.value1.title': 'Diagnóstico Rápido',
  'home.value1.body': 'Identifica causas raíz en la primera semana, no en meses',
  'home.value2.title': 'Sistemas que Perduran',
  'home.value2.body': 'POEs y programas de capacitación que su equipo realmente seguirá',
  'home.value3.title': 'Trayectoria Comprobada',
  'home.value3.body': 'Más de 18 años en conceptos Michelin, hoteles de lujo e independientes',
  'home.value4.title': 'ROI Medible',
  'home.value4.body': 'Retorno promedio de 3-5x sobre la inversión en consultoría en 6 meses',
}

const dictionaries: Record<Lang, Dict> = { en, es }

// Returns a translator bound to the active language.
// Falls back to the English string, then to the key itself, if a key is missing.
export function getT(lang: Lang) {
  return (key: string): string =>
    dictionaries[lang][key] ?? dictionaries.en[key] ?? key
}
