import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext'

const SERVICE_ID = 'service_pi17xmv'
const TEMPLATE_ID = 'template_ovjd3ja'
const PUBLIC_KEY = '80_SpOYh3pfzPl-dR'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState(null)
  const { isDark } = useTheme()

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      })
      
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(true), 400)
    } catch (error) {
      console.error('Email send error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const socials = [
    { icon: FaGithub, label: 'GitHub', sub: 'github.com/haramnaseeb', href: 'https://github.com/haram-naseeb', color: '#8B5CF6' },
    { icon: FaLinkedin, label: 'LinkedIn', sub: 'linkedin.com/in/haram-naseeb', href: 'https://www.linkedin.com/in/haram-naseeb-0106a425b', color: '#22D3EE' },
    { icon: FaInstagram, label: 'Instagram', sub: 'instagram.com/', href: 'https://www.instagram.com/haram_naseeb/', color: '#A855F7' },
    { icon: FaWhatsapp, label: 'WhatsApp', sub: '+92 308 0466303', href: 'https://wa.me/923080466303', color: '#22a261' },
    { icon: Mail, label: 'Email', sub: 'haramnaseeb15@gmail.com', href: 'mailto:haramnaseeb15@gmail.com', color: '#C084FC' },
    { icon: Phone, label: 'Phone', sub: '+92 308 0466303', href: 'tel:+923080466303', color: '#8B5CF6' },
    { icon: MapPin, label: 'Location', sub: 'Lahore, Pakistan', href: null, color: '#22D3EE' },
  ]

  const inputBase = `w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 font-body input-glow`
  const inputTheme = isDark
    ? 'bg-white/8 text-black placeholder:text-gray-600'
    : 'bg-white/90 text-gray-900 placeholder:text-gray-400'

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="blob w-80 h-80 bg-purple-700 bottom-0 left-0 opacity-8" />
      <div className="blob w-64 h-64 bg-cyan-700 top-1/4 right-0 opacity-8" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-500" />
            <span className="text-purple-400 text-sm font-mono">06. CONTACT</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className={`mt-4 max-w-md text-sm leading-relaxed ${isDark ? 'text-white/45' : 'text-gray-500'}`}>
            Open to internships, freelance projects, and collaborations. Drop a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Socials */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
            <h3 className={`font-display text-xs font-bold mb-5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>FIND ME ON</h3>
            {socials.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ x: 5 }}>
                {s.href ? (
                  <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className={`flex items-center gap-3 glass rounded-xl p-3.5 border transition-all group ${isDark ? 'border-white/5 hover:border-purple-500/25' : 'border-purple-100 hover:border-purple-300/60'}`}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                      <s.icon size={16} style={{ color: s.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-sm font-medium group-hover:text-purple-400 transition-colors ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{s.label}</div>
                      <div className={`text-xs font-mono truncate ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{s.sub}</div>
                    </div>
                    <div className={`ml-auto text-sm ${isDark ? 'text-white/15 group-hover:text-purple-400' : 'text-gray-300 group-hover:text-purple-500'} transition-colors`}>→</div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-3 glass rounded-xl p-3.5 border ${isDark ? 'border-white/5' : 'border-purple-100'}`}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                      <s.icon size={16} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{s.label}</div>
                      <div className={`text-xs font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{s.sub}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Status */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="glass-strong rounded-xl p-4 border border-green-500/20 mt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for Internships</span>
              </div>
              <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-white/35' : 'text-gray-500'}`}>
                Seeking backend or full-stack internships. Response time: &lt; 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className={`glass-strong rounded-2xl p-7 border ${isDark ? 'border-purple-500/12' : 'border-purple-200/40'}`}>
              <h3 className={`font-display text-xs font-bold mb-6 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>SEND A MESSAGE</h3>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={44} className="text-green-400" />
                  <h4 className={`font-display text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h4>
                  <p className={`text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Thanks! I'll reply within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="btn-outline px-4 py-2 rounded-xl text-sm mt-1" style={{ color: isDark ? 'white' : '#4c1d95' }}>
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'name', label: 'YOUR NAME', placeholder: 'John Doe', type: 'text' },
                      { name: 'email', label: 'EMAIL', placeholder: 'john@example.com', type: 'email' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className={`text-xs mb-1.5 block font-mono ${isDark ? 'text-white/35' : 'text-gray-500'}`}>{f.label}</label>
                        <input name={f.name} type={f.type} value={form[f.name]} onChange={handleChange}
                          onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                          placeholder={f.placeholder} required
                          className={`${inputBase} ${inputTheme} ${focused === f.name ? 'border-purple-500/60' : isDark ? 'border-white/8' : 'border-purple-200/50'}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className={`text-xs mb-1.5 block font-mono ${isDark ? 'text-white/35' : 'text-gray-500'}`}>SUBJECT</label>
                    <input name="subject" type="text" value={form.subject} onChange={handleChange}
                      onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                      placeholder="Internship / Freelance / Collaboration..." required
                      className={`${inputBase} ${inputTheme} ${focused === 'subject' ? 'border-purple-500/60' : isDark ? 'border-white/8' : 'border-purple-200/50'}`}
                    />
                  </div>
                  <div>
                    <label className={`text-xs mb-1.5 block font-mono ${isDark ? 'text-white/35' : 'text-gray-500'}`}>MESSAGE</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      placeholder="Tell me about the opportunity..." rows={5} required
                      className={`${inputBase} ${inputTheme} resize-none ${focused === 'message' ? 'border-purple-500/60' : isDark ? 'border-white/8' : 'border-purple-200/50'}`}
                    />
                  </div>
                  <motion.button type="submit" disabled={sending} className="w-full btn-primary py-3 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: sending ? 1 : 1.02 }} whileTap={{ scale: sending ? 1 : 0.98 }}>
                    <Send size={15} /> {sending ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
