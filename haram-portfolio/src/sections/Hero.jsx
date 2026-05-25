import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const TITLES = [
  'Full Stack Developer',
  'Backend Engineer',
  'Web Developer',
  'Desktop App Builder',
  'IoT Systems Builder',
]

function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  useEffect(() => {
    if (deleting && displayed.length === 0) {
      const timer = setTimeout(() => {
        setTitleIndex(i => (i + 1) % TITLES.length)
        setDeleting(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [displayed, deleting])

  return (
    <span className="gradient-text font-display text-xl md:text-2xl font-semibold">
      {displayed}<span className="text-purple-400 animate-pulse">|</span>
    </span>
  )
}

function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center -mt-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Animated background glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple glow blob - back */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
            filter: 'blur(50px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Cyan glow blob - offset */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-30%, -30%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Glassmorphism card background */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'rgba(15, 10, 30, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
        animate={{
          boxShadow: [
            'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 40px rgba(139, 92, 246, 0.2)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 60px rgba(34, 211, 238, 0.15)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 40px rgba(139, 92, 246, 0.2)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main image container with padding */}
      <motion.div
        className="relative z-20 w-full h-full flex items-center justify-center p-3 md:p-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Image wrapper with premium effects */}
        <motion.div
          className="relative w-full max-w-sm"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Glow effect layers */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.3) 0%, transparent 50%)',
            filter: 'blur(30px)',
            transform: 'scale(1.1)',
            zIndex: 0,
          }} />

          {/* Purple-blue edge glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(34,211,238,0.3) 100%)',
              filter: 'blur(15px)',
              zIndex: 1,
            }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Main image */}
          <motion.img
            src="/Haram.png"
            alt="Haram Naseeb - Full Stack Developer"
            className="relative z-10 w-full h-auto rounded-2xl"
            style={{
              filter: 'contrast(1.1) brightness(1.08) saturate(1.15)',
              dropShadow: '0 20px 25px rgba(0, 0, 0, 0.4)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 30px 50px rgba(139, 92, 246, 0.3)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />

          {/* Top highlight edge */}
          <div
            className="absolute top-0 left-4 right-4 h-px rounded-full z-10"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating tech badges */}
      {[
        { text: 'Node.js ⚡', pos: 'top-16 -right-8 md:-right-12', delay: 0.8 },
        { text: 'React 🎨', pos: 'top-1/3 -right-6 md:-right-14', delay: 1.1 },
        { text: 'C# 🖥', pos: 'bottom-20 -left-6 md:-left-10', delay: 1.4 },
        { text: 'MySQL 🗄', pos: 'top-1/2 -left-8 md:-left-14', delay: 1.7 },
      ].map(({ text, pos, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, type: 'spring' }}
          className={`absolute ${pos} glass rounded-lg px-2.5 py-1 text-xs font-mono text-purple-300 border border-purple-500/25 whitespace-nowrap z-30`}
          style={{ animation: `float ${3 + delay}s ease-in-out infinite` }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const socials = [
    { icon: FaGithub, href: 'https://github.com/haram-naseeb', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/haram-naseeb-0106a425b', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/haram_naseeb/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/923080466303', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:haramnaseeb15@gmail.com', label: 'Email' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="blob w-96 h-96 bg-purple-600 top-1/4 -left-32" />
        <div className="blob w-72 h-72 bg-violet-700 bottom-1/4 right-0" style={{ animationDelay: '2s' }} />
        <div className="blob w-56 h-56 bg-cyan-700 top-1/2 left-1/3" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,${isDark ? '0.04' : '0.06'}) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,${isDark ? '0.04' : '0.06'}) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: Text content */}
          <div className="flex flex-col gap-5 pl-0 lg:pl-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 w-fit border border-purple-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-xs font-mono ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                Available for Internships & Projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className={`font-mono text-sm mb-2 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                Hello, I'm
              </p>
              <h1 className="font-display font-black leading-none whitespace-nowrap text-4xl md:text-5xl xl:text-6xl">
                <span className="gradient-text">Haram Naseeb</span>
              </h1>
            </motion.div>

            {/* Typing title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="h-8 flex items-center"
            >
              <TypingEffect />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className={`text-sm md:text-base max-w-md leading-relaxed ${isDark ? 'text-white/55' : 'text-gray-500'}`}
            >
              CS student at UET Lahore building full-stack web apps,
              desktop software, and backend systems — focused on clean code and real-world delivery.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 }}
              className="flex gap-8"
            >
              {[
                { value: '7+', label: 'Projects' },
                { value: "Dean's", label: 'List' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                  <div className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                className="btn-primary px-6 py-2.5 rounded-xl font-semibold text-white text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ChevronDown size={14} className="-rotate-90" />
              </motion.button>
              <motion.a
                href="/Haram_Naseeb_CV.pdf"
                download
                className="btn-outline px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"
                style={{ color: isDark ? 'white' : '#4c1d95' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={14} /> Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollTo('contact')}
                className="btn-outline px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"
                style={{ color: isDark ? 'white' : '#4c1d95' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={14} /> Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2.5"
            >
              <span className={`text-xs font-mono ${isDark ? 'text-white/25' : 'text-gray-400'}`}>Find me:</span>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 glass rounded-xl flex items-center justify-center transition-all border ${
                    isDark
                      ? 'text-white/45 hover:text-purple-300 border-purple-500/10 hover:border-purple-500/35'
                      : 'text-gray-400 hover:text-purple-600 border-purple-200/40 hover:border-purple-400/60'
                  }`}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile image */}
          <div className="hidden lg:flex items-center justify-center h-full">
            <div className="w-full max-w-xs h-auto max-h-96">
              <ProfileImage />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className={`text-xs font-mono ${isDark ? 'text-white/25' : 'text-gray-400'}`}>scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={14} className="text-purple-400/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}