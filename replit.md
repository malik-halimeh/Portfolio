# Malik Halimeh — AI Engineer Portfolio

A single-page glassmorphism portfolio website for Malik Halimeh, an AI Engineer, targeting recruiters.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (uses PORT env var)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, shadcn/ui
- No backend, no database, no authentication

## Where things live

- `artifacts/portfolio/src/sections/` — page sections (Hero, About, Technologies, Skills, Projects, HireMe, Contact)
- `artifacts/portfolio/src/components/` — reusable components (Navbar, Footer, ProjectCard, etc.)
- `artifacts/portfolio/src/data/` — content data (projects.ts, skills.ts, technologies.ts)
- `artifacts/portfolio/src/hooks/useTheme.ts` — dark/light mode with localStorage persistence
- `artifacts/portfolio/src/assets/profile/` — place headshot as `headshot.jpg` here

## Architecture decisions

- Single-page scrolling app — no client-side router, all sections rendered in App.tsx
- Dark/light mode driven by `useTheme` hook toggling `.dark` class on `document.documentElement`
- `@workspace/api-client-react` excluded from dependencies to prevent duplicate React instance
- Project cards conditionally show GitHub/LiveDemo buttons only when URLs are non-empty

## Product

Portfolio website for Malik Halimeh, AI Engineer. Sections: Hero, About, Technologies, Skills, Projects, Why Hire Me, Contact, Footer. Glassmorphism design with animated backgrounds, scroll-triggered reveals, and full mobile responsiveness.

## User preferences

- Mobile responsive is a requirement for all work on this project.

## Gotchas

- Do NOT add `@workspace/api-client-react` as a dependency — it causes a duplicate React instance error.
- When adding Google Fonts, the `@import url(...)` MUST be the very first line of `index.css`.
- All CSS custom properties in `:root` and `.dark` must be real HSL values — never leave the scaffold's `red` placeholders.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- To replace the headshot: drop your photo at `artifacts/portfolio/src/assets/profile/headshot.jpg`
