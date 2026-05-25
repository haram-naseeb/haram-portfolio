import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={`relative py-10 px-6 overflow-hidden ${isDark ? '' : 'bg-white/40'}`}>
      {/* Animated glow line */}
      <div className="relative h-px mb-10 overflow-hidden">
        <motion.div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #22D3EE, #8B5CF6, transparent)' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-white/5' : 'bg-purple-200/30'}`} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <div className="font-display text-lg font-bold gradient-text">Haram Naseeb<span className="text-purple-400">.</span></div>
            <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-white/25' : 'text-gray-400'}`}>Backend · Web · Desktop</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {['hero', 'about', 'services', 'skills', 'projects', 'experience', 'contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`text-xs font-mono capitalize transition-colors ${isDark ? 'text-white/30 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'}`}>
                {id}
              </button>
            ))}
          </div>
          <div className="flex gap-2.5">
            {[
              { icon: FaGithub, href: 'https://github.com/haram-naseeb' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/haram-naseeb-0106a425b' },
              { icon: FaInstagram, href: 'https://www.instagram.com/haram_naseeb/' },
              { icon: FaWhatsapp, href: 'https://wa.me/923080466303' },
              { icon: Mail, href: 'mailto:haramnaseeb15@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className={`w-8 h-8 glass rounded-lg flex items-center justify-center border transition-all ${isDark ? 'text-white/30 hover:text-purple-300 border-white/5 hover:border-purple-500/25' : 'text-gray-400 hover:text-purple-600 border-purple-100 hover:border-purple-300/60'}`}
                whileHover={{ scale: 1.12, y: -2 }}>
                <Icon size={13} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className={`mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono ${isDark ? 'border-white/5 text-white/20' : 'border-purple-100 text-gray-400'}`}>
          <span>© 2025 Haram Naseeb. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <Heart size={9} className="text-purple-400/60" /> using React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
