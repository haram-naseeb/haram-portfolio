import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    id: 2,
    title: 'Database Learning Platform',
    subtitle: 'React · PostgreSQL · MongoDB · Neo4j',
    description: 'Multi-database learning platform covering 3 paradigms. Includes quiz engine, per-user progress tracking, and automated certificate generation upon passing assessments.',
    tags: ['React', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Node.js'],
    category: 'Full Stack',
    color: '#8B5CF6',
    emoji: '🗄️',
    gradient: 'from-purple-900/80 via-purple-800/50 to-indigo-900/30',
    github: 'https://github.com/haram-naseeb/Tribase-Database-Learning-System',
    demo: null,
    year: '2025',
    highlights: ['3 database paradigms', 'Quiz engine + scoring', 'Certificate generation', 'Progress tracking'],
  },
  {
    id: 3,
    title: 'StegoSec Security Platform',
    subtitle: 'React · JWT · AES-256 · IndexedDB',
    description: 'Security simulation platform with JWT RBAC authentication, AES-256 encryption walkthroughs, network interception tools, and admin-level audit logging across user sessions.',
    tags: ['React', 'JWT', 'AES-256', 'IndexedDB', 'RBAC'],
    category: 'Full Stack',
    color: '#C084FC',
    emoji: '🔐',
    gradient: 'from-fuchsia-900/80 via-purple-900/50 to-violet-900/30',
    github: 'https://github.com/haram-naseeb/StegoSec-InformationSecurity',
    demo: null,
    year: '2025',
    highlights: ['JWT + RBAC auth', 'AES-256 walkthroughs', 'Admin audit logs', 'Attack simulations'],
  },
  {
    id: 4,
    title: 'Smart IoT Notice Board',
    subtitle: 'ESP32 · MQTT · Node.js · MySQL',
    description: 'Real-time IoT notice board using ESP32 firmware with MQTT messaging. Features a web dashboard for sending messages to physical displays over WiFi using pub-sub architecture.',
    tags: ['ESP32', 'MQTT', 'Node.js', 'MySQL', 'WiFi'],
    category: 'IoT',
    color: '#22D3EE',
    emoji: '📡',
    gradient: 'from-cyan-900/70 via-teal-900/50 to-blue-900/30',
    github: 'https://github.com/haram-naseeb/Digital_Notice_Board',
    demo: null,
    year: '2025',
    highlights: ['ESP32 firmware', 'MQTT pub-sub', 'Web dashboard', 'Real-time sync'],
  },
  {
    id: 5,
    title: 'Airline Management System',
    subtitle: 'C# · .NET · WinForms · MySQL',
    description: 'Full-stack airline desktop app with strict 3-layer architecture (UI / BLL / DAL via ADO.NET). Complete flight, booking, and passenger management with normalized MySQL schema.',
    tags: ['C#', '.NET', 'WinForms', 'MySQL', 'ADO.NET'],
    category: 'Desktop',
    color: '#22D3EE',
    emoji: '✈️',
    gradient: 'from-blue-900/80 via-cyan-900/50 to-teal-900/30',
    github: 'https://github.com/haram-naseeb/Airline-Management-System-DBMS',
    demo: null,
    year: '2024',
    image: 'Airline.png',
    highlights: ['3-layer architecture', 'ADO.NET DAL', 'Full booking system', 'Normalised schema'],
  },
  {
    id: 6,
    title: 'AI Simulation Engine',
    subtitle: 'Python · C# · OOP · SOLID',
    description: 'Step-by-step AI problem simulation environments — 8-Queens, Vacuum Agent, Wumpus World. Visualises state transitions and algorithm decisions with modular, extensible OOP architecture.',
    tags: ['Python', 'C#', 'OOP', 'SOLID', 'AI Algorithms'],
    category: 'AI / Academic',
    color: '#8B5CF6',
    emoji: '🤖',
    gradient: 'from-indigo-900/80 via-purple-900/50 to-violet-900/30',
    github: null,
    demo: null,
    year: '2025',
    highlights: ['8-Queens & Wumpus World', 'Backtracking search', 'Visual state transitions', 'Modular architecture'],
  },
  {
    id: 7,
    title: 'DSA Visualization System',
    subtitle: 'C# · .NET · OOP · Analytics',
    description: 'Interactive DSA learning platform with user auth, personal profiles, and a leaderboard driven by data structure-based ranking. Includes analytics dashboards for visualising user progress and algorithm demo modules.',
    tags: ['C#', '.NET', 'OOP', 'DSA', 'Analytics', 'Leaderboard'],
    category: 'Desktop',
    color: '#8B5CF6',
    emoji: '📊',
    gradient: 'from-indigo-900/80 via-purple-900/50 to-blue-900/30',
    github: 'https://github.com/haram-naseeb/DSA-Learning-Platform',
    demo: null,
    year: '2025',
    image: 'DSA.png',
    highlights: ['Auth + profile system', 'Leaderboard ranking', 'Progress analytics', 'Algorithm demos'],
  },
  {
    id: 1,
    title: 'BuzzUp — Social Media App',
    subtitle: 'C# · WinForms · MySQL · BCrypt',
    description: 'Full-featured Windows desktop social media app built for a DSA course. Features posts, likes, comments, friend requests, trending feed, and real-time search — all powered by custom data structures.',
    tags: ['C#', 'WinForms', 'MySQL', 'BCrypt', 'DSA', 'QuickSort'],
    category: 'Desktop',
    color: '#A855F7',
    emoji: '💬',
    gradient: 'from-purple-900/80 via-violet-900/60 to-indigo-900/40',
    github: 'https://github.com/haram-naseeb/buzzup-social-media-app',
    demo: null,
    year: '2025',
    image: 'BuzzUp.png',
    highlights: ['Linked List user management', 'Queue-based post feed', 'Stack back-navigation', 'QuickSort friend list O(n log n)'],
  },
]

const categories = ['All', 'Full Stack', 'Desktop', 'IoT', 'AI / Academic']

function ProjectCard({ project, index, isDark }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        isDark ? 'border-white/5 hover:border-purple-500/25' : 'border-purple-100 hover:border-purple-300/50'
      }`}
      style={{ boxShadow: hovered ? `0 16px 40px ${project.color}14` : '0 4px 12px rgba(0,0,0,0.1)' }}
    >
      {/* Image / Preview area */}
      <div className={`relative bg-gradient-to-br ${project.gradient} flex items-center justify-center h-56`}
        style={{}}>
        {project.image ? (
          <img src={`/projects/${project.image}`} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <>
            {/* Pattern */}
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${project.color}18 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${project.color}12 0%, transparent 40%)`,
              }}
            />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
            {/* Emoji + title */}
            <div className="relative z-10 text-center">
              <div className="text-5xl mb-2">{project.emoji}</div>
              <div className="text-xs font-mono text-white/40">{project.year}</div>
            </div>
          </>
        )}
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-5 ${isDark ? 'bg-white/[0.02]' : 'bg-white/80'}`}>
        <div className="flex items-start justify-between mb-1">
          <span className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ background: `${project.color}15`, color: project.color }}>
            {project.category}
          </span>
          <div className="flex gap-1.5">
            {project.github && (
              <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                className={`w-7 h-7 glass rounded-lg flex items-center justify-center transition-colors border ${isDark ? 'text-white/40 hover:text-white border-white/5' : 'text-gray-400 hover:text-gray-700 border-purple-100'}`}
                whileHover={{ scale: 1.1 }} onClick={e => e.stopPropagation()}>
                <FaGithub size={13} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 glass rounded-lg flex items-center justify-center text-white/40 hover:text-cyan-300 transition-colors border border-white/5"
                whileHover={{ scale: 1.1 }}>
                <ExternalLink size={13} />
              </motion.a>
            )}
          </div>
        </div>

        <h3 className={`font-display text-sm font-bold mt-3 mb-1 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: project.color + 'cc' }}>{project.subtitle}</p>
        <p className={`text-xs leading-relaxed mb-4 flex-1 ${isDark ? 'text-white/45' : 'text-gray-500'}`}>
          {project.description}
        </p>

        {/* Highlights on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-3 overflow-hidden"
            >
              <div className="space-y-1">
                {project.highlights.map(h => (
                  <div key={h} className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <ChevronRight size={10} style={{ color: project.color }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${isDark ? 'text-white/35 border-white/8' : 'text-gray-400 border-purple-100'} border`}
              style={{ background: `${project.color}08` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { isDark } = useTheme()

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-violet-800 top-1/2 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">04. PROJECTS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Things I've Built
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/45'
                      : isDark ? 'glass text-white/40 border border-white/5 hover:text-white/70' : 'bg-white/80 text-gray-500 border border-purple-100 hover:text-gray-700'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ delay: i * 0.04 }}>
                <ProjectCard project={project} index={i} isDark={isDark} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
          <a href="https://github.com/haram-naseeb" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 btn-outline px-6 py-2.5 rounded-xl text-sm ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <FaGithub size={15} />
            <span>More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}