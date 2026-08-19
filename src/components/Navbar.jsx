import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-soft' : 'bg-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <Code2 size={17} className="text-white" />
            </span>
            <span>
              Josh<span className="text-gradient">Tech</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="w-10 h-10 rounded-xl card-base flex items-center justify-center hover:border-primary/50 text-slate-700 dark:text-slate-200 transition-all"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex btn-glow items-center rounded-xl bg-primary hover:bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white transition-all shadow-sm"
            >
              Let&apos;s Talk
            </a>

            <button
              className="md:hidden w-10 h-10 rounded-xl card-base flex items-center justify-center text-slate-700 dark:text-slate-200"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass rounded-2xl p-4 flex flex-col gap-1 shadow-soft">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
