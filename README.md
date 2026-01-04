# Iðunn Garðarsdóttir

> Professional portfolio website showcasing services in proofreading, content creation, and legal expertise.

[![CI](https://github.com/arnlaugsson/idunn.is/actions/workflows/ci.yml/badge.svg)](https://github.com/arnlaugsson/idunn.is/actions/workflows/ci.yml)
[![Deploy](https://github.com/arnlaugsson/idunn.is/actions/workflows/deploy.yml/badge.svg)](https://github.com/arnlaugsson/idunn.is/actions/workflows/deploy.yml)

**Live Site:** [idunn.is](https://idunn.is)

---

## Overview

A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, accessible UI components, and automatic deployment to GitHub Pages.

### Services Offered

- **Prófarkalestur** — Professional proofreading and editing
- **Textagerð** — High-quality content creation and writing
- **Lögfræði** — Legal consulting and advisory services

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3 with TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Radix UI primitives |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **Forms** | React Hook Form |
| **Code Quality** | ESLint 9 with TypeScript & React plugins |
| **Deployment** | GitHub Pages with GitHub Actions |

---

## Features

- **Responsive Design** — Optimized for all devices from mobile to desktop
- **Smooth Animations** — Animated hero section with gradient effects
- **Accessible UI** — WCAG compliant components with proper semantic HTML
- **Type-Safe** — Full TypeScript coverage for robust development
- **CI/CD** — Automated testing, linting, and deployment
- **Performance** — Optimized builds with lazy loading and code splitting

---

## Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/arnlaugsson/idunn.is.git
cd idunn.is

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server (with hot reload)
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the site.

### Building

```bash
# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

### Linting

```bash
# Run ESLint
pnpm lint
```

---

## Project Structure

```
idunn.is/
├── .github/
│   └── workflows/          # GitHub Actions workflows (CI/CD)
├── public/                 # Static assets
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── app/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # Reusable UI components (Radix UI)
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx        # Main application component
│   ├── assets/            # Images and media files
│   ├── styles/            # Global styles and theme
│   └── main.tsx           # Application entry point
├── eslint.config.js       # ESLint configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

---

## Deployment

### Automatic Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Workflow:**
1. Push changes to GitHub
2. GitHub Actions runs CI checks (lint + build)
3. If successful, deploys to GitHub Pages
4. Site is live at [idunn.is](https://idunn.is) within 2-3 minutes

### Custom Domain

The custom domain `idunn.is` is configured via:
- `public/CNAME` file in the repository
- DNS A records pointing to GitHub Pages servers
- HTTPS enforced via GitHub Pages SSL certificate

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Create optimized production build |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint checks |

---

## Contributing

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Ensure CI passes (linting and build)
4. Submit a pull request

### Code Quality

- All code must pass ESLint checks
- TypeScript strict mode is enabled
- Components should follow React best practices
- Maintain accessibility standards (ARIA, semantic HTML)

---

## License

All rights reserved © 2026 Iðunn Garðarsdóttir

---

## Contact

For inquiries about services:
- Visit [idunn.is](https://idunn.is)
- Email: [idunng@gmail.com](mailto:idunng@gmail.com)
