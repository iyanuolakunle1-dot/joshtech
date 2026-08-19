import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle, MessageSquare, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { socials } from '../data/content'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [lastSubmitted, setLastSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const getFormattedWhatsAppUrl = (data = form) => {
    const text = `*New Project Inquiry via JoshTech Portfolio*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name || 'Client'}
📧 *Email:* ${data.email || 'N/A'}
💬 *Message:*
${data.message || 'Hi Joshua, I would like to discuss a project with you.'}`
    return `https://wa.me/2347040087040?text=${encodeURIComponent(text)}`
  }

  const getFormattedMailtoUrl = (data = form) => {
    const subject = encodeURIComponent(`Project Inquiry from ${data.name || 'Client'}`)
    const body = encodeURIComponent(`Hi Joshua,

Name: ${data.name}
Email: ${data.email}

Project Details:
${data.message}
`)
    return `mailto:iyanuolakunle1@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSendWhatsAppDirect = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email and message before sending.')
      return
    }
    window.open(getFormattedWhatsAppUrl(form), '_blank')
    setLastSubmitted({ ...form })
    setStatus('success')
    setForm(initialForm)
  }

  const handleSendEmailDirect = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email and message before sending.')
      return
    }
    window.location.href = getFormattedMailtoUrl(form)
    setLastSubmitted({ ...form })
    setStatus('success')
    setForm(initialForm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setLastSubmitted({ ...form })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      // Also automatically prompt WhatsApp trigger so Joshua receives it instantly
      window.open(getFormattedWhatsAppUrl(form), '_blank')
      setForm(initialForm)
    } catch (err) {
      // Even if server is offline during dev, open WhatsApp directly
      window.open(getFormattedWhatsAppUrl(form), '_blank')
      setStatus('success')
      setForm(initialForm)
    }
  }

  const info = [
    {
      icon: MessageSquare,
      title: 'WhatsApp (Instant Chat)',
      label: '07040087040',
      href: socials.whatsappUrl,
      highlight: true,
    },
    {
      icon: Mail,
      title: 'Direct Email',
      label: socials.email,
      href: `mailto:${socials.email}?subject=Project%20Inquiry%20-%20Joshua%20Olakunle`,
      highlight: false,
    },
    {
      icon: Phone,
      title: 'Phone Line',
      label: socials.whatsapp,
      href: `tel:${socials.whatsapp}`,
      highlight: false,
    },
    {
      icon: Github,
      title: 'GitHub Profile',
      label: 'github.com/iyanuolakunle1-dot',
      href: socials.github,
      highlight: false,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      label: 'linkedin.com/in/joshtech',
      href: socials.linkedin,
      highlight: false,
    },
    {
      icon: MapPin,
      title: 'Location',
      label: socials.location,
      href: null,
      highlight: false,
    },
  ]

  return (
    <section id="contact" className="relative py-28 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl">
            Let&apos;s discuss your next <span className="text-gradient">web project.</span>
          </h2>
          <p className="mt-4 muted max-w-xl text-base">
            Send a message below and I will receive it directly on my WhatsApp (<strong>07040087040</strong>) and Email (<strong>iyanuolakunle1@gmail.com</strong>) in real time.
          </p>
        </Reveal>

        {/* Quick Contact Action Banner */}
        <Reveal delay={0.05}>
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-primary/10 to-indigo-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                <strong className="text-emerald-600 dark:text-emerald-400">Direct Chat Active:</strong> Fast response on WhatsApp &amp; Email for projects, freelancing, and full-time hiring.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={socials.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <Mail size={16} /> Email Joshua
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          <Reveal delay={0.1} className="lg:col-span-2 space-y-3.5">
            {info.map((item) => {
              const content = (
                <div
                  className={`card-base p-4 sm:p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 ${
                    item.highlight
                      ? 'border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-sm'
                      : 'hover:border-primary/40 hover:shadow-soft'
                  }`}
                >
                  <span
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                      item.highlight
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                        : 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light border-primary/20'
                    }`}
                  >
                    <item.icon size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider muted font-semibold">
                      {item.title}
                    </p>
                    <span className="text-sm font-medium break-all text-slate-800 dark:text-slate-200">
                      {item.label}
                    </span>
                  </div>
                  {item.href && <ArrowUpRight size={15} className="text-slate-400 shrink-0" />}
                </div>
              )
              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              )
            })}
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-base p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider muted">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-slate-900 dark:text-white"
                  placeholder="Tell me about your project requirements, timeline, or hiring opportunity..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-glow inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark px-6 py-3.5 text-sm font-semibold text-white shadow-sm disabled:opacity-60 transition-all"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsAppDirect}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all"
                >
                  <MessageSquare size={16} /> Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleSendEmailDirect}
                  className="inline-flex items-center gap-2 rounded-xl card-base px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-all"
                >
                  <Mail size={16} /> Send via Email
                </button>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 size={17} /> Message submitted! Joshua has been notified.
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    If you haven&apos;t opened WhatsApp yet, you can also{' '}
                    <a
                      href={lastSubmitted ? getFormattedWhatsAppUrl(lastSubmitted) : socials.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline font-semibold text-emerald-600 dark:text-emerald-400"
                    >
                      click here to chat directly on WhatsApp
                    </a>{' '}
                    or check your email.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-rose-500 font-medium">
                  <AlertCircle size={16} /> Please reach out directly on WhatsApp at 07040087040 or email iyanuolakunle1@gmail.com.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


