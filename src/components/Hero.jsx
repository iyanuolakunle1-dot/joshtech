import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowRight, FolderGit2, MessageSquare, Mail } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { typingRoles, socials } from '../data/content'

export default function Hero() {
  const typed = useTypingEffect(typingRoles)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-base text-xs font-mono text-primary dark:text-primary-light mb-6 border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Opportunities • Fast Chat on WhatsApp</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
        >
          Hi, I&apos;m Joshua <span className="text-gradient">Olakunle</span>
          <br />
          <span className="text-slate-800 dark:text-slate-200">Software Engineer.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 flex items-center gap-2.5 font-mono text-lg sm:text-2xl text-slate-700 dark:text-slate-300"
        >
          <span className="muted">Specialized in</span>
          <span className="text-primary dark:text-primary-light font-semibold min-w-[2ch]">
            {typed}
            <span className="animate-blink">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl muted text-base sm:text-lg leading-relaxed"
        >
          Full Stack Developer building high-performance web applications, multi-portal SaaS platforms,
          and robust RESTful APIs — with production experience spanning React, Node.js, Express, PostgreSQL, Supabase, and PHP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="btn-glow inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark px-6 sm:px-7 py-3.5 text-sm font-semibold text-white shadow-sm"
          >
            <FolderGit2 size={16} /> View Featured Work
          </a>
          <a
            href={socials.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 sm:px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all"
          >
            <MessageSquare size={16} /> Chat on WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl card-base px-5 sm:px-6 py-3.5 text-sm font-semibold hover:border-slate-400 dark:hover:border-slate-700 transition-all text-slate-800 dark:text-white"
          >
            Contact Me <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold muted hover:text-primary dark:hover:text-white transition-colors"
          >
            <Download size={16} /> CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all hover:-translate-y-0.5 duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-xl card-base flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all hover:-translate-y-0.5 duration-200 text-emerald-500"
          >
            <MessageSquare size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="w-11 h-11 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all hover:-translate-y-0.5 duration-200"
          >
            <Mail size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all hover:-translate-y-0.5 duration-200"
          >
            <Linkedin size={18} />
          </a>
          <span className="text-xs font-mono muted border-l border-slate-300 dark:border-slate-800 pl-4 py-1">
            07040087040 • iyanuolakunle1@gmail.com
          </span>
        </motion.div>
      </div>
    </section>
  )
}

