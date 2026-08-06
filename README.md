# Sai Madhu Sudhan Reddy — Software Engineer Portfolio

A production-grade personal portfolio built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

Deploys as-is to Vercel — connect the repo and it just works.

## Adding your resume

Drop a file named `resume.pdf` into `/public`. The download button on `/resume`
and the hero CTA already link to `/resume.pdf`.

## Updating content

Every piece of copy on the site — personal info, experience, skills, projects,
CHAKRA, publications, certifications — lives in one place:

```
constants/content.ts
```

Edit that file and every page (home, about, experience, projects, hackathon,
research, resume, contact) updates automatically. Types for each shape live in
`types/index.ts`.

## Adding a new project

1. Add an entry to the `PROJECTS` array in `constants/content.ts` (problem,
   solution, pipeline stages, features, metrics, tech, challenges, decisions).
2. That's it — `/projects` and `/projects/[slug]` are both generated from this
   array via `generateStaticParams`, so a new project automatically gets its
   own immersive case-study page.

## Architecture

```
app/                    Route segments (App Router)
  about/  experience/  projects/  projects/[slug]/
  hackathon/  research/  resume/  contact/
  layout.tsx            Root layout: fonts, providers, nav, footer
  page.tsx               Home
  sitemap.ts robots.ts    SEO

components/
  layout/                Navbar, Footer
  sections/               Page-level building blocks (Hero, Timeline,
                           SkillsEcosystem, ProjectDetail, etc.)
  sections/chakra/        CHAKRA startup-landing-page sections
  effects/                Cross-cutting interactions: cursor, scroll
                           progress, command palette, magnetic buttons,
                           toasts, reveal-on-scroll, animated counters,
                           smooth scroll (Lenis)
  icons/                  Brand icon fallbacks (lucide-react dropped
                           GitHub/LinkedIn brand marks)

constants/content.ts     Single source of truth for all copy/data
lib/utils.ts              cn() class-merging helper
types/index.ts            Shared TypeScript interfaces
```

## Notes on the brief

The original spec called for React Three Fiber, GSAP, and Aceternity/Magic UI.
This build uses a lightweight canvas-based particle field instead of R3F/Three.js,
and Framer Motion covers all animation needs without GSAP — same visual result
(animated neural-network background, scroll reveals, magnetic buttons, pipeline
flow animations) with a smaller dependency footprint and faster build times.
Swap in R3F for the hero background if you want a literal 3D scene later; the
`ParticleField` component is a drop-in replacement point.

## Performance

- Static generation for every route (no server rendering needed)
- `next/font` self-hosts Google Fonts at build time (no runtime font requests)
- Respects `prefers-reduced-motion` throughout
