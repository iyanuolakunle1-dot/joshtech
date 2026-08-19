import { Github, Linkedin, Mail, Code2, MessageSquare } from 'lucide-react'
import { socials } from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 py-12 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2.5 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <Code2 size={17} className="text-white" />
          </span>
          <span>
            Josh<span className="text-gradient">Tech</span>
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary dark:hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href={socials.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all text-emerald-500"
          >
            <MessageSquare size={16} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all"
          >
            <Mail size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary hover:text-primary dark:hover:text-white transition-all"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs muted">
        © {new Date().getFullYear()} JoshTech. Built by Joshua Olakunle • WhatsApp: 07040087040 • iyanuolakunle1@gmail.com
      </p>
    </footer>
  )
}

