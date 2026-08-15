# Anoop — Personal Portfolio

A personal developer portfolio built from scratch with plain HTML, CSS and JavaScript — no frameworks, no build tools.

**Live at:** [anoopkv.dev](https://github.com/anoopkv114-ops) *(deploy to go live)*

---

## About

This portfolio showcases my work as a Computer Science Engineering student and Frontend Developer based in Pune, Maharashtra. It includes my projects, skills, internship experience and contact details.

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, role, CTA buttons, profile photo, meta stats |
| About | Personal intro, education facts grid |
| Projects | Task Tracker, CareQueue, Travel Planner — with live mockups |
| Skills | Frontend, Programming, Database, Tools & Design |
| Experience | KP Smart IT Solutions internship + achievements |
| Contact | Email, LinkedIn, GitHub, phone |

---

## Projects Featured

### Task Tracker
- **Stack:** Next.js 16, React 19, TypeScript, plain CSS
- **Live:** [task-tracker-flax-phi.vercel.app](https://task-tracker-flax-phi.vercel.app/)
- **Repo:** [github.com/anoopkv114-ops/task-tracker](https://github.com/anoopkv114-ops/task-tracker)
- Dashboard with stats, real-time search, priority sorting, due-date overdue detection, toast notifications, localStorage persistence

### CareQueue
- **Stack:** Node.js, Express, SQLite, JWT, bcrypt, Zod
- **Repo:** [github.com/anoopkv114-ops/CareQueue](https://github.com/anoopkv114-ops/CareQueue)
- Intelligent OPD queue-management system for Indian hospitals — triage, token assignment, role-based auth

### Travel Planner
- **Stack:** HTML, CSS, JavaScript, Maps API
- **Repo:** [github.com/anoopkv114-ops/Travel-Planner](https://github.com/anoopkv114-ops/Travel-Planner)
- Single-platform trip planner — destination search, weather, interactive maps, collaborative build

---

## Design & Features

- **Split-screen loader** — left panel (dark) reveals name with mask animation, right panel (purple) shows live counter 00→100, panels slide apart on exit
- **Light / dark theme** — defaults to light, toggle persists via `localStorage`
- **Hero background** — animated radial glow blobs (purple + cyan) that drift and scale
- **Animated hero text** — each word slides up with staggered delays
- **Scroll reveal** — `IntersectionObserver` fades sections in as they enter view
- **Scroll progress bar** — top of viewport, purple → cyan gradient
- **Custom cursor** — small dot + trailing ring (desktop only)
- **Magnetic buttons** — subtle pull effect on hover
- **3D project card tilt** — perspective tilt follows mouse on project visuals
- **Task Tracker mockup** — animated stat counters, task rows with priority badges
- **CareQueue mockup** — live token display, patient queue with role badges, progress bar
- **Travel Planner mockup** — animated SVG route path draw, pulsing location pins, destination cards
- **Stat counter animation** — numbers count up when scrolled into view
- **Responsive** — mobile navigation, stacked layouts, touch-friendly
- **Reduced-motion support** — respects `prefers-reduced-motion`

---

## File Structure

```
anoop-portfolio/
├── index.html          # All markup
├── style.css           # All styles + animations + themes
├── script.js           # Theme toggle, cursor, scroll, counters, loader
└── assets/
    ├── profile.png     # Profile photo
    └── Anoop_Resume.pdf
```

---

## Running Locally

Open `index.html` directly in a browser, or use VS Code Live Server:

```
Right-click index.html → Open with Live Server
```

No install, no build step required.

---

## Contact

- **Email:** anoopkv.114@gmail.com
- **LinkedIn:** [linkedin.com/in/anoopkv01](https://linkedin.com/in/anoopkv01)
- **GitHub:** [github.com/anoopkv114-ops](https://github.com/anoopkv114-ops)
- **Phone:** +91 85284 29220
