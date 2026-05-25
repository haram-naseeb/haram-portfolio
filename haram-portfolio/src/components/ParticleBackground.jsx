import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const purpleA = isDark ? 'rgba(139,92,246,' : 'rgba(109,40,217,'
    const cyanA = isDark ? 'rgba(34,211,238,' : 'rgba(6,182,212,'

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.3 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.25
        this.speedY = (Math.random() - 0.5) * 0.25
        this.opacity = Math.random() * (isDark ? 0.45 : 0.25) + 0.05
        this.color = Math.random() > 0.65 ? cyanA : purpleA
      }
      update() {
        this.x += this.speedX; this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color + '1)'
        ctx.shadowBlur = 5
        ctx.shadowColor = this.color + '0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle())

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 90) * (isDark ? 0.07 : 0.04)
            ctx.strokeStyle = '#8B5CF6'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawConnections()
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [isDark])

  return <canvas ref={canvasRef} id="particle-canvas" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }} />
}
