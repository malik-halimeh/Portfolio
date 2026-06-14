# Malik Halimeh — AI Engineer Portfolio

A premium, single-page glassmorphism portfolio website built for Malik Halimeh, an AI Engineer, designed specifically to engage recruiters and showcase high-impact enterprise AI capabilities.

---

## 🚀 Overview

This website serves as a technical showcase for Malik Halimeh. Unlike generic developer portfolios, this site focuses strictly on AI Engineering competencies, including:
- **Agentic AI** & **AI Agents**
- **Retrieval-Augmented Generation (RAG)**
- **Enterprise Workflow Automation (e.g. n8n)**
- **AI-Powered Solutions & System Integration**

The site is built as a highly performant, fully responsive Single Page Application (SPA) using React, Vite, and Tailwind CSS. It features professional glassmorphism elements, dynamic entry animations, smooth section scrolling, and persisted dark/light themes.

---

## 🔗 Live Demo
You can view the live, production-ready website here:
👉 **[Launch Live Portfolio](https://portfolio-portfolio-tau.vercel.app/)**

## ✨ Features

- **Responsive Design**: Clean and responsive layout optimized for mobile, tablet, laptop, and ultra-wide desktop monitors.
- **Persisted Dark & Light Themes**: Real-time theme toggler using a custom React hook that saves selection via `localStorage` and applies the theme instantly.
- **Glassmorphism Aesthetic**: Beautiful transluscent containers, subtle frosted gradients, and floating background orbs using Framer Motion.
- **Structured Sections**:
  - **Hero**: Quick profile statement, call-to-actions, and social links.
  - **About**: Focus on computer science background, automation interest, and building AI tools.
  - **Technologies & Tools**: Grouped skills display (AI Engineering, Automation, Software Engineering, Cloud).
  - **Skills**: Proficiency visualization cards.
  - **Projects**: CONDITIONAL card layouts detailing title, descriptions, achievements, and technical architecture.
  - **Why Hire Me**: Recruiter-friendly bullet points showing business-focused problem-solving capabilities.
  - **Contact**: Client-side validated form with mailto fallback integrations.

---

## 🛠️ Technologies Used

- **Core Framework**: React 18 & TypeScript
- **Bundler & Server**: Vite 5
- **Styling**: Tailwind CSS 4 (utilizing the new `@import "tailwindcss"` engine) & Custom CSS variables
- **Animations**: Framer Motion 11
- **Icons**: Lucide React & React Icons (FaGithub, FaLinkedin)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 📂 Folder Structure

The repository is organized as follows after the safe repository audit and cleanup:

```text
Responsive-Design/
├── .replit               # Replit configuration setting up the build environment
├── .replitignore         # Replit upload ignore rules
├── package.json          # Root workspace scripts and dependencies
├── pnpm-workspace.yaml   # Workspace packages map (pruned to portfolio & scripts)
├── tsconfig.json         # Root TypeScript project references configuration
├── tsconfig.base.json    # Shared TypeScript compiler options
├── replit.md             # Running & developer commands documentation
├── README.md             # Main project documentation (this file)
├── REACT_MASTERY_GUIDE.md # Comprehensive React learning guide
├── INTERVIEW_CRAM_GUIDE.md # Interview questions database (230 questions)
├── REPOSITORY_AUDIT_REPORT.md # Audit and cleanup documentation
├── scripts/
│   └── post-merge.sh     # Auto-install shell script trigger
└── artifacts/
    └── portfolio/        # Core Portfolio React Vite Application
        ├── index.html    # HTML Entry point
        ├── vite.config.ts # Vite configuration and path aliases
        ├── package.json  # App dependencies & scripts
        ├── public/       # Favicon, OpenGraph images, and static assets
        └── src/
            ├── App.tsx   # Core Layout Mounting component
            ├── main.tsx  # React DOM Bootstrap client loader
            ├── index.css # Global CSS imports & custom variables
            ├── assets/   # Image assets (ProfileImage.jpeg)
            ├── components/ # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
            │   └── ui/   # Radix primitives & layout elements
            ├── data/     # Project metadata configs (projects.ts, skills.ts, etc.)
            └── hooks/    # Custom React hooks (useTheme, use-mobile)
```

---

## 📦 Installation & Setup

Ensure you have Node.js (version 20 or higher) installed.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/malik-halimeh/Portfolio.git
   cd Responsive-Design
   ```

2. **Install Workspace Dependencies**:
   ```bash
   npm install
   ```

3. **Install Portfolio App Dependencies**:
   Navigate into the portfolio directory and install packages:
   ```bash
   cd artifacts/portfolio
   npm install
   ```

---

## 🏃 Running Locally

To run the development server with Hot Module Replacement (HMR) enabled:

```bash
# From the artifacts/portfolio directory:
npm run dev
```

The app will start at `http://localhost:5173`.

---

## 🏗️ Build Commands

To verify TypeScript compilation and bundle the application for production deployment:

```bash
# Run TypeScript compilation check
npm run typecheck

# Bundle the application using Vite
npm run build
```

The output bundle files will be generated in `artifacts/portfolio/dist/`, which are fully static files optimized for CDN hosting.

---

## 🔧 Customization Guide

### 1. Replacing Profile Headshot
Save your professional headshot image as `ProfileImage.jpeg` inside `artifacts/portfolio/src/assets/`. The application will automatically import and apply it inside the profile card.

### 2. Updating Personal Data
To customize projects, skills, or technologies lists, edit the static data files:
- **Projects**: Edit [projects.ts](file:///c:/Users/malik/Desktop/DigitalHub/Responsive-Design/artifacts/portfolio/src/data/projects.ts).
- **Skills**: Edit [skills.ts](file:///c:/Users/malik/Desktop/DigitalHub/Responsive-Design/artifacts/portfolio/src/data/skills.ts).
- **Technologies**: Edit [technologies.ts](file:///c:/Users/malik/Desktop/DigitalHub/Responsive-Design/artifacts/portfolio/src/data/technologies.ts).

Note: The `ProjectCard` component utilizes conditional rendering. If `githubUrl` or `liveDemoUrl` are set to empty strings (`""`), the corresponding links will hide automatically.

---

## ⚡ Performance Considerations

- **Code Splitting**: Dynamic logic rendering ensures the initial JS payload remains lightweight.
- **Tree-Shaking**: Vite removes unused exports from libraries like `lucide-react` during the production compilation.
- **Tailwind v4 Engine**: Utilizes the modern CSS-based Tailwind compiler, reducing build times and asset overhead.
- **Static Assets**: Images can be served in modern formats (like WebP/JPEG) to optimize network load times.

---

## 📄 License

This project is licensed under the MIT License.
