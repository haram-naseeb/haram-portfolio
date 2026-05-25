import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { GraduationCap, Code2, Award, Trophy, Users, Star, Lightbulb } from 'lucide-react'

const timeline = [
  {
    period: '2024 – Present',
    title: 'BS Computer Science',
    org: 'University of Engineering & Technology, Lahore',
    type: 'education',
    icon: GraduationCap,
    color: '#8B5CF6',
    tag: 'Current',
    points: [
      'CGPA: 3.86 / 4.00 — Dean\'s List',
      'Studying: OOP, DSA, Web Dev, Databases, Networks',
      'Expected Graduation: 2028',
    ],
  },
  {
    period: '2022 – 2024',
    title: 'ICS — Intermediate',
    org: 'Punjab College, Lahore',
    type: 'education',
    icon: GraduationCap,
    color: '#22D3EE',
    tag: '89%',
    points: [
      'Achieved 89% marks — strong foundation in mathematics & computing',
      'Developed early programming interest in C++ and logic-building',
    ],
  },
  {
    period: '2025 – Present',
    title: 'Full Stack & Backend Projects',
    org: 'Personal & Academic Work',
    type: 'dev',
    icon: Code2,
    color: '#A855F7',
    tag: 'Builder',
    points: [
      'Built 7+ projects across web, desktop, IoT, and AI domains',
      'Worked in teams of 2–4 developers, owning full development cycles',
      'Shipped production-quality apps with auth, databases, and clean APIs',
    ],
  },
  {
    period: '2025',
    title: 'HackerRank SQL Certifications',
    org: 'HackerRank',
    type: 'cert',
    icon: Award,
    color: '#22D3EE',
    tag: '3 Certs',
    points: [
      'SQL Basic — Verified ✓',
      'SQL Intermediate — Verified ✓',
      'SQL Advanced — Verified ✓',
    ],
  },
  {
    period: '2025',
    title: 'Hackathons & Competitions',
    org: 'Codex 3.0 · ACM Coding Competition',
    type: 'achievement',
    icon: Trophy,
    color: '#C084FC',
    tag: 'Competitor',
    points: [
      'Codex 3.0 Hackathon Participant',
      'ACM Coding Competition Participant',
      'Competed under pressure, sharpened problem-solving skills',
    ],
  },
  {
    period: '2024 – Present',
    title: 'Leadership & Organizations',
    org: 'ACM · GDG · ITEC 25 · Events Team',
    type: 'leadership',
    icon: Star,
    color: '#8B5CF6',
    tag: 'Leader',
    points: [
      'ACM Student Chapter — UET Lahore',
      'Google Developer Group (GDG) — UET Lahore',
      'ITEC 25: Non-Technical Management & Coordination Lead',
      'Events Coordinator at UET Lahore',
    ],
  },
]

export default function Experience() {
  const { isDark } = useTheme()

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-72 h-72 bg-cyan-700 top-0 right-1/3 opacity-8" />

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">05. EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Journey & <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #8B5CF6, #22D3EE40, transparent)' }} />

          <div className="space-y-8 pl-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Circle dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15, type: 'spring' }}
                  className="absolute -left-14 top-1 w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}18`,
                    border: `1.5px solid ${item.color}`,
                    boxShadow: `0 0 14px ${item.color}35`,
                  }}
                >
                  <item.icon size={14} style={{ color: item.color }} />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`glass rounded-2xl p-5 border transition-all ${isDark ? 'border-white/5 hover:border-purple-500/20' : 'border-purple-100 hover:border-purple-300/50'}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{ background: `${item.color}15`, color: item.color }}>
                      {item.tag}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{item.period}</span>
                  </div>
                  <h3 className={`font-display text-sm font-bold mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className="text-purple-400/70 text-xs font-mono mb-3">{item.org}</p>
                  <ul className="space-y-1">
                    {item.points.map(pt => (
                      <li key={pt} className={`text-xs flex items-start gap-2 leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        <span style={{ color: item.color }} className="mt-0.5 shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '3.86', label: 'CGPA', color: '#8B5CF6' },
            { value: '89%', label: 'ICS Score', color: '#22D3EE' },
            { value: '3', label: 'HackerRank Certs', color: '#A855F7' },
            { value: '7+', label: 'Projects Shipped', color: '#C084FC' },
          ].map(s => (
            <motion.div key={s.label} whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-5 text-center border ${isDark ? 'border-white/5' : 'border-purple-100'}`}>
              <div className="font-display text-3xl font-black mb-1"
                style={{ color: s.color, textShadow: `0 0 18px ${s.color}50` }}>
                {s.value}
              </div>
              <div className={`text-xs font-mono ${isDark ? 'text-white/35' : 'text-gray-500'}`}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
