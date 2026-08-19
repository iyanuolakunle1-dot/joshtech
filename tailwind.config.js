/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#090D16',
          light: '#F8FAFC',
        },
        surface: {
          DEFAULT: '#111726',
          elevated: '#172033',
          light: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#4F46E5', // Refined Indigo
          dark: '#4338CA',
          light: '#6366F1',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue
          dark: '#2563EB',
          light: '#60A5FA',
        },
        accent: {
          DEFAULT: '#0284C7', // Slate Sky Accent
          light: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
        'grad-subtle': 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
        'grad-mesh': 'radial-gradient(at 15% 15%, rgba(79,70,229,0.08) 0px, transparent 60%), radial-gradient(at 85% 20%, rgba(59,130,246,0.06) 0px, transparent 60%), radial-gradient(at 50% 85%, rgba(79,70,229,0.05) 0px, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(79,70,229,0.25)',
        'glow-sm': '0 0 15px -3px rgba(79,70,229,0.18)',
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)',
        card: '0 4px 20px -2px rgba(0,0,0,0.06), 0 2px 6px -1px rgba(0,0,0,0.04)',
        'card-dark': '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 1px 1px rgba(255,255,255,0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
