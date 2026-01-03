# Iðunn Garðarsdóttir

Professional portfolio website for Iðunn Garðarsdóttir - Icelandic language specialist, proofreader, and legal professional.

## About

This website showcases professional services including:
- **Prófarkalestur** (Proofreading) - Professional proofreading and editing services
- **Textagerð** (Content Creation) - High-quality writing and content development
- **Lögfræði** (Legal Expertise) - Legal consulting and advisory services

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Motion library (Framer Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Features

- Fully responsive design optimized for all devices
- Smooth scrolling navigation with anchor links
- Animated hero section with gradient effects
- Contact section with multiple communication channels
- Optimized performance with lazy loading
- Accessible UI components (WCAG compliant)

## Development

Install dependencies:
```bash
pnpm install
```

Start development server (with hot reload):
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview production build locally:
```bash
pnpm preview
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx        # Main app component
│   ├── assets/            # Images and static files
│   ├── styles/            # CSS and theme files
│   └── main.tsx           # Application entry point
├── public/                # Static assets
└── .github/workflows/     # CI/CD configuration
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to the main branch. The deployment process includes:

1. Dependency installation with pnpm
2. Production build with Vite
3. Deployment to GitHub Pages
4. Custom domain configuration (idunn.is)

**Live site**: https://idunn.is

## License

All rights reserved © 2026 Iðunn Garðarsdóttir
  
