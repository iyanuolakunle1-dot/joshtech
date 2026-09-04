export const typingRoles = [
  'Full Stack Developer',
  'Python & Django Developer',
  'Frontend Specialist',
  'Backend & API Architect',
  'React & Node.js Developer',
  'SaaS & Web App Builder',
  'Database Designer',
]

export const skillGroups = [
  {
    title: 'Languages',
    gradient: 'from-primary to-secondary',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML5', 'CSS3 / Sass', 'SQL'],
  },
  {
    title: 'Frontend Frameworks & UI',
    gradient: 'from-primary to-secondary',
    items: ['React.js', 'Vite', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Bootstrap'],
  },
  {
    title: 'Backend & APIs',
    gradient: 'from-primary to-secondary',
    items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express.js', 'RESTful APIs', 'drf-spectacular', 'JWT Auth', 'WebSockets'],
  },
  {
    title: 'Databases & Storage',
    gradient: 'from-primary to-secondary',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'Prisma ORM', 'Cloudinary CDN'],
  },
  {
    title: 'DevOps, Tools & Deployment',
    gradient: 'from-primary to-secondary',
    items: ['Git & GitHub', 'Swagger / OpenAPI', 'Postman', 'Render', 'Vercel', 'Gunicorn & WhiteNoise', 'CI/CD Basics'],
  },
]

export const projectCategories = [
  'All',
  'API & Backend',
  'SaaS & Full Stack',
  'Healthcare & EdTech',
  'E-Commerce & Chat',
]

export const projects = [
  {
    name: 'Blog API',
    category: 'API & Backend',
    tagline: 'Django REST Blog API with JWT Authentication, Posts, Comments & Swagger UI',
    image: '/projects/iyanu-blog.png',
    description:
      'Robust and scalable RESTful Blog API backend developed with Python and Django REST Framework. Features SimpleJWT authentication, full CRUD operations for posts, threaded comments, and likes, django-filter search capabilities, custom user models, and interactive live OpenAPI 3.0 Swagger and ReDoc documentation.',
    tech: ['Python', 'Django', 'Django REST Framework', 'drf-spectacular', 'Swagger UI', 'PostgreSQL', 'SimpleJWT', 'WhiteNoise'],
    features: [
      'Interactive Swagger UI & ReDoc live browser documentation at /api/swagger/',
      'JWT Authentication suite with register, token pair generation, and refresh cycle',
      'Full CRUD APIs for posts, threaded comments, and user likes with pagination',
      'PostgreSQL production architecture with WhiteNoise static storage & Gunicorn',
    ],
    github: 'https://github.com/iyanuolakunle1-dot/iyanu-blog',
    live: 'https://iyanu-blog.onrender.com/api/swagger/',
    swagger: 'https://iyanu-blog.onrender.com/api/swagger/',
    badge: 'Python & Django API',
  },
  {
    name: 'Luxora Hotels & Resorts',
    category: 'SaaS & Full Stack',
    tagline: 'Luxury Hospitality & Multi-Portal Hotel Management Platform',
    image: '/projects/luxora.jpg',
    description:
      'A comprehensive full-stack hotel management platform connecting public room booking, a live guest self-service portal, and a deep admin operations suite managing reservations, rooms, staff, dining, and automated guest checkout metrics.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Cloudinary'],
    features: [
      'Public dynamic room browsing, amenities showcase & live contact desk',
      'Guest portal with live bookings, stay history & loyalty points',
      'Unified admin dashboard for reservations, rooms, housekeeping & rates',
      'PostgreSQL triggers for automated check-out metrics & notification delivery',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://luxora-nine-pi.vercel.app/',
    badge: 'Hospitality SaaS',
  },
  {
    name: 'Clinexa',
    category: 'Healthcare & EdTech',
    tagline: 'Connected Care. Better Health — Multi-Portal Hospital Ecosystem',
    image: '/projects/clinexa.png',
    description:
      'Enterprise healthcare management ecosystem synchronizing clinical operations across 9 distinct role-based portals: Patient, Doctor, Nurse, Reception, Laboratory, Pharmacy, Finance, Hospital Admin, and Super Admin.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Cloudinary'],
    features: [
      '9 synchronized medical portals with strict Row-Level Security',
      'Doctor directory, appointment scheduling & triage management',
      'Real-time lab testing workflows & pharmacy prescriptions',
      'Secured backend endpoints for medical records & document uploads',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://clinexa-rho.vercel.app/',
    badge: 'Enterprise Health',
  },
  {
    name: 'Academora',
    category: 'Healthcare & EdTech',
    tagline: 'Empowering Minds, Shaping Futures — School Management Suite',
    image: '/projects/academora.png',
    description:
      'A unified academic institution suite coordinating 6 authenticated portals (Student, Teacher, Parent, Super Admin, Library, and Public Site) for admissions, grading, attendance tracking, tuition billing, and digital library loans.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Cloudinary'],
    features: [
      '6 synchronized campus portals with tailored UI & permissions',
      'Course enrollment, term gradebooks & timetable scheduling',
      'Parent portal for student academic tracking & fee payment records',
      'Digital campus library catalogue with live loan management',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://academora-phi.vercel.app/',
    badge: 'School Management',
  },
  {
    name: 'PrepDeck',
    category: 'Healthcare & EdTech',
    tagline: "Train for exam day like it's already here — CBT Practice Tests",
    image: '/projects/prepdeck.png',
    description:
      'Full-stack Computer-Based Test (CBT) practice platform built for JAMB, WAEC, NECO, and POST-UTME candidates with 13 Nigerian school subjects, timed mock sessions, real-time question palette, and performance analytics.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Supabase'],
    features: [
      '13 Nigerian syllabus subjects with authentic question banks',
      'Interactive scantron question palette & instant answer evaluation',
      'Timed multi-subject mock exams with in-depth result breakdowns',
      'Student dashboard, study streak tracking & global leaderboard',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://prepdeck-seven.vercel.app/',
    badge: 'EdTech Platform',
  },
  {
    name: 'LinkUp',
    category: 'E-Commerce & Chat',
    tagline: 'Real-Time Chat & Team Collaboration Application',
    image: '/projects/linkup.png',
    description:
      'High-speed real-time messaging application supporting one-on-one direct messages, public & private team channels, live typing indicators, online presence tracking, and media file attachments.',
    tech: ['React', 'Node.js', 'Express', 'WebSockets / Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Instant bidirectional messaging with WebSocket connectivity',
      'Real-time typing indicators & live member presence',
      'Direct user conversations and multi-member channels',
      'Responsive messaging interface with rich media attachments',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://linkoop-2gvo.vercel.app/',
    badge: 'Real-time Chat',
  },
  {
    name: 'FoodVerse',
    category: 'SaaS & Full Stack',
    tagline: 'Delicious Food, Delivered Fast — Online Food Ordering Platform',
    image: '/projects/foodverse.png',
    description:
      'End-to-end food ordering platform enabling customers to customize meals, track delivery orders in real time, and giving restaurant administrators a live dashboard to update menus and fulfill orders.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'Tailwind CSS'],
    features: [
      'Interactive food catalog with live search & dietary filtering',
      'Custom meal add-ons, quantity selectors & seamless cart',
      'Restaurant admin operations dashboard for live order status',
      'Role-based authentication & secure order checkout flow',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://foodverse-three.vercel.app/',
    badge: 'Food Delivery',
  },
  {
    name: 'ShopSphere',
    category: 'E-Commerce & Chat',
    tagline: 'Modern E-Commerce Storefront & Order Management Platform',
    image: '/projects/shopsphere.jpg',
    description:
      'High-performance e-commerce web platform engineered for responsive product discovery, instant category filtering, persistent shopping cart, streamlined multi-step checkout, and real-time order status tracking.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'REST API'],
    features: [
      'Rich product showcase with dynamic search, ratings & instant filters',
      'Persistent cart state, promo-code calculation & fast checkout',
      'Customer order history & delivery status tracking',
      'Fully responsive UI optimized for high mobile conversion',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://shopsphere-sand.vercel.app/',
    badge: 'E-Commerce Store',
  },
  {
    name: 'BuzzHive',
    category: 'SaaS & Full Stack',
    tagline: 'Share Stories. Connect People — Modern Social Platform',
    image: '/projects/buzzhive.jpg',
    description:
      'A full-stack social networking application with infinite-scroll content feeds, Cloudinary media uploads, followers social graphs, real-time post interactions, and instant notifications.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Cloudinary', 'Tailwind CSS'],
    features: [
      'JWT-authenticated user profiles with custom avatars & bios',
      'Infinite-scroll multimedia feed with likes & threaded comments',
      'User follow/unfollow system with personalized timeline generation',
      'Modern dark/light UI with smooth Framer Motion interactions',
    ],
    github: 'https://github.com/iyanuolakunle1-dot',
    live: 'https://buzzhive-nine.vercel.app/login',
    badge: 'Social Media',
  },
]

export const services = [
  {
    title: 'Full Stack Web Applications',
    desc: 'End-to-end web apps crafted from database schema and backend APIs to polished, accessible client interfaces.',
  },
  {
    title: 'Python & Django API Engineering',
    desc: 'Scalable RESTful microservices, JWT authentication workflows, and interactive OpenAPI / Swagger documentation built with Django and DRF.',
  },
  {
    title: 'Frontend & UI Engineering',
    desc: 'High-performance, responsive UIs built with React, Vite, Tailwind CSS, and Framer Motion micro-interactions.',
  },
  {
    title: 'Backend & RESTful Architecture',
    desc: 'Secure, clean, and scalable REST APIs and service layers developed with Node.js, Express, Python, Django, and PHP.',
  },
  {
    title: 'Multi-Portal & SaaS Systems',
    desc: 'Multi-tenant applications featuring role-based access control (RBAC), authentication flows, and administrative tools.',
  },
  {
    title: 'Database Design & Optimization',
    desc: 'Structured data schemas, indexing, and migrations designed across PostgreSQL, Supabase, MySQL, SQLite, and Prisma.',
  },
]

export const experience = [
  {
    year: '2024 — Present',
    role: 'Full Stack & Backend Engineer',
    org: 'Independent Projects & Client Solutions',
    desc: 'Building and shipping production-ready web apps and APIs across Python/Django APIs (Blog Swagger), hospitality (Luxora), healthcare (Clinexa), education (PrepDeck, Academora), and real-time platforms.',
  },
  {
    year: '2023 — 2024',
    role: 'Backend & API Developer',
    org: 'Independent Projects',
    desc: 'Engineered REST APIs in Python (Django DRF) and Node.js (Express), JWT auth layers, PostgreSQL schemas, and database triggers powering multi-portal web applications.',
  },
  {
    year: '2022 — 2023',
    role: 'Frontend Developer',
    org: 'Independent Projects',
    desc: 'Focused on responsive, component-driven web interfaces using React, Tailwind CSS, modern state management, and smooth motion design.',
  },
  {
    year: '2021 — 2022',
    role: 'Foundations & Self-Directed Growth',
    org: 'Software Development',
    desc: 'Mastered core modern web fundamentals — Python, JavaScript (ES6+), PHP, HTML5/CSS3, and SQL — building hands-on projects and problem solving.',
  },
]

export const stats = [
  { label: 'Featured Projects', value: 9, suffix: '+' },
  { label: 'Portals & Systems', value: 22, suffix: '+' },
  { label: 'Technologies & Tools', value: 18, suffix: '+' },
  { label: 'Years of Development', value: 4, suffix: '+' },
  { label: 'Full Stack & API Deployments', value: 10, suffix: '+' },
]

export const socials = {
  github: 'https://github.com/iyanuolakunle1-dot',
  githubUsername: 'iyanuolakunle1-dot',
  linkedin: 'https://linkedin.com/in/joshtech',
  email: 'iyanuolakunle1@gmail.com',
  whatsapp: '07040087040',
  whatsappInternational: '+2347040087040',
  whatsappUrl: 'https://wa.me/2347040087040?text=Hi%20Joshua,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20hire%20you%20for%20a%20project!',
  location: 'Sango-Ota, Ogun State, Nigeria',
}
