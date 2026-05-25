import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Globe, Monitor, Server, Code2, Cpu, Database, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    color: '#8B5CF6',
    tagline: 'Modern, responsive web apps',
    items: [
      'Responsive websites with React / Next.js',
      'Full-stack applications with auth & APIs',
      'API integration & third-party services',
      'Database-backed dynamic platforms',
    ],
  },
  {
    icon: Monitor,
    title: 'Desktop App Development',
    color: '#22D3EE',
    tagline: 'Robust Windows applications',
    items: [
      'C# / .NET Windows Forms applications',
      'Business management & admin systems',
      'Database-connected desktop software',
      'Layered architecture & clean codebase',
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    color: '#A855F7',
    tagline: 'Scalable APIs & server systems',
    items: [
      'Node.js / Express REST API development',
      'JWT authentication & role-based access',
      'System architecture & data modelling',
      'Third-party service & webhook integration',
    ],
  },
  {
    icon: Database,
    title: 'Database Design',
    color: '#22D3EE',
    tagline: 'Structured, optimized data layers',
    items: [
      'Relational schema design (MySQL / PostgreSQL)',
      'NoSQL modelling (MongoDB)',
      'Indexing, normalization & query optimization',
      'ER diagrams & data architecture planning',
    ],
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    color: '#C084FC',
    tagline: 'Clean, modern interfaces',
    items: [
      'Modern responsive UI with Tailwind CSS',
      'Component-based React design systems',
      'Smooth animations & micro-interactions',
      'Mobile-first, accessible layouts',
    ],
  },
  {
    icon: Cpu,
    title: 'IoT Prototyping',
    color: '#22D3EE',
    tagline: 'Hardware meets software',
    items: [
      'ESP32 / Arduino firmware development',
      'MQTT real-time messaging systems',
      'Web dashboard for IoT device control',
      'Hardware–software integration',
    ],
    note: 'Offered as prototyping / academic projects',
  },
]

export default function Services() {
  const { isDark } = useTheme()

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-purple-700 top-0 left-0 opacity-10" />
      <div className="blob w-64 h-64 bg-cyan-700 bottom-0 right-0 opacity-8" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">02. SERVICES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                What I Can<br />
                <span className="gradient-text">Build for You</span>
              </h2>
            </div>
            <p className={`max-w-sm text-sm leading-relaxed ${isDark ? 'text-white/45' : 'text-gray-500'}`}>
              I deliver working, production-quality software — not prototypes. Every project is built with clean architecture and real-world reliability in mind.
            </p>
          </div>
        </motion.div>

        {/* Service cards — 6 cards in a 2x3 or 3x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative group glass rounded-2xl p-6 border transition-all duration-300 cursor-default hover:border-purple-500/20 ${
                isDark ? 'border-white/5' : 'border-purple-100'
              }`}
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 32px ${service.color}12`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}40)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3 className={`font-display text-base font-bold mb-1 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className="text-xs mb-4" style={{ color: service.color }}>{service.tagline}</p>

              {/* Items */}
              <ul className="space-y-2">
                {service.items.map(item => (
                  <li key={item} className={`flex items-start gap-2 text-xs leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <ChevronRight size={11} className="mt-0.5 shrink-0" style={{ color: service.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note badge */}
              {service.note && (
                <div className={`mt-4 pt-4 border-t text-xs italic ${isDark ? 'border-white/5 text-white/30' : 'border-purple-100 text-gray-400'}`}>
                  ℹ️ {service.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className={`text-sm mb-4 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            Have a project in mind?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-3 rounded-xl font-semibold text-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}