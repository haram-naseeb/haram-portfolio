import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const skillCategories = [
  { title: 'Languages', icon: '⌨️', color: '#8B5CF6', skills: ['JavaScript', 'C#', 'Python', 'SQL', 'HTML/CSS', 'C'] },
  { title: 'Frontend', icon: '🎨', color: '#C084FC', skills: ['React', 'Tailwind CSS', 'Responsive UI', 'WinForms'] },
  { title: 'Backend & APIs', icon: '⚙️', color: '#A855F7', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { title: 'Databases', icon: '🗄️', color: '#22D3EE', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'IndexedDB'] },
  { title: 'IoT & Embedded', icon: '📡', color: '#22D3EE', skills: ['ESP32', 'Arduino', 'MQTT', 'HiveMQ', 'WiFi Comms'] },
  { title: 'Tools & Concepts', icon: '🧠', color: '#8B5CF6', skills: ['Git & GitHub', 'OOP', 'SOLID', 'DSA', 'VS Code', 'Arduino IDE'] },
]

const proficiencies = [
  { name: 'JavaScript / Node.js', level: 82, color: '#8B5CF6' },
  { name: 'React (Frontend)', level: 78, color: '#A855F7' },
  { name: 'C# / .NET', level: 88, color: '#C084FC' },
  { name: 'SQL / Databases', level: 90, color: '#22D3EE' },
  { name: 'Python', level: 75, color: '#8B5CF6' },
  { name: 'ESP32 / IoT', level: 78, color: '#22D3EE' },
]

export default function Skills() {
  const { isDark } = useTheme()

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-purple-600 bottom-0 left-0 opacity-8" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">03. SKILLS</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Skill badges */}
          <div className="space-y-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ x: 2 }}
                className={`glass rounded-2xl p-5 border transition-all duration-300 ${isDark ? 'border-white/5 hover:border-purple-500/20' : 'border-purple-100 hover:border-purple-300/50'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-display text-sm font-bold" style={{ color: cat.color }}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.03 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono border transition-all cursor-default ${
                        isDark
                          ? 'text-white/65 border-purple-500/12 hover:border-purple-500/35 hover:text-purple-300'
                          : 'text-gray-600 border-purple-200/50 hover:border-purple-400/60 hover:text-purple-700'
                      }`}
                      style={{ background: `${cat.color}08` }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`glass-strong rounded-2xl p-7 border sticky top-24 ${isDark ? 'border-purple-500/12' : 'border-purple-200/40'}`}
            >
              <h3 className={`font-display text-sm font-bold mb-7 flex items-center gap-2 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                <span className="w-1 h-4 bg-purple-500 rounded-full inline-block" />
                Proficiency Levels
              </h3>
              {proficiencies.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="mb-5"
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className={`font-medium text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{p.name}</span>
                    <span className="font-mono text-xs" style={{ color: p.color }}>{p.level}%</span>
                  </div>
                  <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-purple-100'}`}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                      style={{ background: `linear-gradient(90deg, ${p.color}70, ${p.color})` }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Certs */}
              <div className={`mt-7 pt-6 border-t ${isDark ? 'border-white/5' : 'border-purple-100'}`}>
                <h4 className={`text-xs font-mono mb-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>CERTIFICATIONS</h4>
                <div className="space-y-2.5">
                  {[
                    { name: 'SQL Basic', color: '#22D3EE' },
                    { name: 'SQL Intermediate', color: '#8B5CF6' },
                    { name: 'SQL Advanced', color: '#A855F7' },
                  ].map(cert => (
                    <div key={cert.name} className="flex items-center justify-between">
                      <div>
                        <span className={`text-xs font-medium ${isDark ? 'text-white/65' : 'text-gray-700'}`}>{cert.name}</span>
                        <span className={`text-xs ml-2 ${isDark ? 'text-white/25' : 'text-gray-400'}`}>· HackerRank</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}25` }}>
                        ✓ Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
