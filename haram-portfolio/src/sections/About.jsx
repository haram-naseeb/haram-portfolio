import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'
import { Zap, Target, Users, Coffee } from 'lucide-react'

const traits = [
  { icon: Zap, title: 'Clean Code', desc: 'I write maintainable, well-structured code following SOLID and OOP principles.', color: '#8B5CF6' },
  { icon: Target, title: 'Delivery-Focused', desc: 'I build complete working systems — from database schema to UI — end to end.', color: '#22D3EE' },
  { icon: Users, title: 'Team Player', desc: 'Experience in 2–4 person dev teams, ACM, GDG, and coordinating university events.', color: '#A855F7' },
  { icon: Coffee, title: 'Always Learning', desc: 'Currently deepening skills in web development, system design, and cloud backends.', color: '#C084FC' },
]

export default function About() {
  const ref = useScrollReveal()
  const { isDark } = useTheme()

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-violet-700 top-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="section-fade">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">01. ABOUT ME</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-14 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Who I Am
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Bio */}
            <div className="space-y-5">
              <p className={`text-base leading-relaxed ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                I'm <span className="text-purple-400 font-semibold">Haram Naseeb</span>, a Computer Science student
                at UET Lahore (CGPA 3.86) with a passion for building software that people actually use.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                I focus on <span className="text-purple-400 font-medium">web development</span> and <span className="text-cyan-400 font-medium">backend engineering</span> — 
                crafting full-stack applications with React frontends, Node.js/Express APIs, 
                and solid database architectures. I also build desktop software in C#.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                I've shipped projects with multi-database backends (MySQL, PostgreSQL, MongoDB, Neo4j), 
                secure auth systems, real-time features, and clean layered architecture. 
                I build things I'd be proud to put in front of a client.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  ['📍', 'Lahore, Pakistan'],
                  ['🎓', 'UET Lahore · BSCS 2028'],
                  ['💼', 'Open for Internships'],
                  ['📧', 'haramnaseeb15@gmail.com'],
                ].map(([icon, text]) => (
                  <div key={text} className={`flex items-center gap-2 text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code card */}
            <motion.div
              className="glass-strong rounded-2xl p-6 neon-border font-mono text-xs leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className={`ml-2 text-xs ${isDark ? 'text-white/25' : 'text-gray-400'}`}>haram.config.js</span>
              </div>
              <div className="space-y-0.5">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className={isDark ? 'text-white/40' : 'text-gray-400'}>=</span> <span className={isDark ? 'text-white/50' : 'text-gray-500'}>{'{'}</span></div>
                <div className="ml-4"><span className="text-lavender">name</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>:</span> <span className="text-green-400">"Haram Naseeb"</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span></div>
                <div className="ml-4"><span className="text-lavender">focus</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>:</span> <span className="text-green-400">"Web & Backend Dev"</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span></div>
                <div className="ml-4"><span className="text-lavender">cgpa</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>:</span> <span className="text-orange-300">3.86</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span></div>
                <div className="ml-4"><span className="text-lavender">stack</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>:</span> <span className={isDark ? 'text-white/40' : 'text-gray-500'}>[</span></div>
                <div className="ml-8 text-green-400">"React"<span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span> "Node.js"<span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span></div>
                <div className="ml-8 text-green-400">"C#"<span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span> "MySQL"<span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span> "Python"</div>
                <div className="ml-4"><span className={isDark ? 'text-white/40' : 'text-gray-500'}>]</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>,</span></div>
                <div className="ml-4"><span className="text-lavender">available</span><span className={isDark ? 'text-white/30' : 'text-gray-400'}>:</span> <span className="text-cyan-300">true</span></div>
                <div><span className={isDark ? 'text-white/40' : 'text-gray-500'}>{'}'}</span></div>
                <div className="pt-2 text-purple-400/50">// Open to internships & freelance</div>
              </div>
            </motion.div>
          </div>

          {/* Trait cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-5 border transition-all cursor-default ${isDark ? 'border-white/5 hover:border-purple-500/25' : 'border-purple-100 hover:border-purple-300/50'}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}25` }}>
                  <t.icon size={18} style={{ color: t.color }} />
                </div>
                <h3 className={`font-display text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-white/45' : 'text-gray-500'}`}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
