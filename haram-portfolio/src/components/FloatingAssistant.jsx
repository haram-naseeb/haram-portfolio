import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, ChevronRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const quickLinks = [
  { label: 'View Projects', action: 'projects' },
  { label: 'My Services', action: 'services' },
  { label: 'Download CV', action: 'cv' },
  { label: 'Get in Touch', action: 'contact' },
]

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false)
  const { isDark } = useTheme()

  const handleAction = (action) => {
    if (action === 'cv') {
      const a = document.createElement('a'); a.href = '/Haram_Naseeb_CV.pdf'; a.download = true; a.click()
    } else {
      document.getElementById(action)?.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="glass-strong rounded-2xl p-4 border border-purple-500/20 w-48 shadow-xl">
            <div className={`text-xs font-mono mb-2.5 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Quick Nav</div>
            <div className="space-y-1">
              {quickLinks.map(link => (
                <button key={link.label} onClick={() => handleAction(link.action)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${isDark ? 'text-white/55 hover:text-purple-300 hover:bg-purple-500/10' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}>
                  {link.label}<ChevronRight size={11} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setOpen(v => !v)}
        className="w-12 h-12 rounded-2xl btn-primary flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        style={{ boxShadow: '0 0 25px rgba(139,92,246,0.5)' }}>
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={17} /></motion.div>
            : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageSquare size={17} /></motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
