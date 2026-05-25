import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 200)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)' }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo / Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-24 h-24"
            >
              <div className="w-full h-full rounded-2xl border border-purple-500/40 flex items-center justify-center glass"
                style={{ boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}>
                <span className="font-display text-3xl font-black gradient-text">HN</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-purple-400/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h1 className="font-display text-2xl font-bold gradient-text">HARAM NASEEB</h1>
              <p className="text-purple-400/60 text-sm mt-1 font-mono">Initializing portfolio...</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.6 }}
              className="w-64"
            >
              <div className="flex justify-between text-xs text-purple-400/50 font-mono mb-2">
                <span>Loading</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full loading-bar rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </motion.div>

            {/* Scanning lines */}
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-purple-500"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
