import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy, Users, Star } from 'lucide-react'

const timelineItems = [
  {
    year: '2024 – 2028',
    title: 'BS Computer Science',
    org: 'University of Engineering & Technology, Lahore',
    type: 'education',
    icon: GraduationCap,
    color: '#8B5CF6',
    details: ['CGPA: 3.86 / 4.00', "Dean's List", 'Expected Graduation: 2028'],
    tag: 'Ongoing',
  },
  {
    year: '2025',
    title: 'HackerRank SQL Certifications',
    org: 'HackerRank',
    type: 'cert',
    icon: Award,
    color: '#22D3EE',
    details: ['SQL Basic — Verified', 'SQL Intermediate — Verified', 'SQL Advanced — Verified'],
    tag: '3 Certs',
  },
  {
    year: '2025',
    title: 'Hackathons & Competitions',
    org: 'UET Lahore & Community Events',
    type: 'achievement',
    icon: Trophy,
    color: '#A855F7',
    details: ['Codex 3.0 Hackathon Participant', 'ACM Coding Competition Participant'],
    tag: 'Competitor',
  },
  {
    year: '2024 – Present',
    title: 'Technical Organizations',
    org: 'ACM & Google Developer Group',
    type: 'org',
    icon: Users,
    color: '#C084FC',
    details: [
      'ACM Student Chapter — UET Lahore',
      'Google Developer Group (GDG) — UET Lahore',
    ],
    tag: 'Member',
  },
  {
    year: '2025',
    title: 'ITEC 25 — Management Lead',
    org: 'UET Lahore',
    type: 'leadership',
    icon: Star,
    color: '#22D3EE',
    details: [
      'Non-Technical Management & Coordination Lead',
      'Events Coordinator for UET student events',
    ],
    tag: 'Leadership',
  },
]

function TimelineItem({ item, index }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row gap-6 md:gap-8`}
    >
      {/* Left/Right content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/25 transition-all inline-block w-full"
          style={{ boxShadow: `0 0 30px ${item.color}10` }}
        >
          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'} justify-start`}>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: `${item.color}15`, color: item.color }}
            >
              {item.tag}
            </span>
            <span className="text-white/30 text-xs font-mono">{item.year}</span>
          </div>

          <h3 className="font-display text-sm font-bold text-white mb-1">{item.title}</h3>
          <p className="text-purple-400/60 text-xs mb-3 font-mono">{item.org}</p>

          <ul className={`space-y-1 ${index % 2 === 0 ? 'md:items-end' : 'items-start'} items-start flex flex-col`}>
            {item.details.map(d => (
              <li key={d} className="flex items-center gap-2 text-xs text-white/45">
                <span style={{ color: item.color }}>▸</span>
                {d}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Center dot on timeline */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
          className="w-10 h-10 rounded-xl flex items-center justify-center z-10 relative"
          style={{
            background: `${item.color}20`,
            border: `2px solid ${item.color}`,
            boxShadow: `0 0 20px ${item.color}40`
          }}
        >
          <Icon size={16} style={{ color: item.color }} />
        </motion.div>
        {index < timelineItems.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: `linear-gradient(180deg, ${item.color}60, ${timelineItems[index + 1].color}20)`
            }}
          />
        )}
      </div>

      {/* Empty space for desktop alternation */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-72 h-72 bg-cyan-700 top-0 right-1/3 opacity-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">04. EDUCATION & ACHIEVEMENTS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white">
            Journey &<br />
            <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timelineItems.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '3.86', label: 'CGPA', color: '#8B5CF6' },
            { value: '3', label: 'HackerRank Certs', color: '#22D3EE' },
            { value: '2+', label: 'Hackathons', color: '#A855F7' },
            { value: '2', label: 'Tech Orgs', color: '#C084FC' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 text-center border border-white/5"
            >
              <div
                className="font-display text-3xl font-black mb-1"
                style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
