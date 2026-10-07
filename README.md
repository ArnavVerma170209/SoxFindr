# SoxFindr

> Find your passion. Build your skills. Connect with like-minded individuals.

SoxFindr is a student-focused platform designed to help students discover and explore societies at **Netaji Subhas University of Technology (NSUT)**.

Instead of searching through scattered information about different societies, SoxFindr provides a centralized platform where students can explore societies, learn more about them, and take the next step toward getting involved.

**Live Demo:** https://sox-findr-plum.vercel.app/

---

## Features

- Browse and explore student societies
- Dedicated pages for individual societies
- Society descriptions and categories
- User authentication with Clerk
- Student dashboard
- Society registration flow
- FAQ section
- Responsive design for desktop and mobile
- Interactive UI and page transitions

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Phosphor Icons

### Authentication

- Clerk

### Database

- PostgreSQL
- Neon
- Drizzle ORM
- Prisma PostgreSQL Adapter

### Development

- Bun
- ESLint
- TypeScript
- Drizzle Kit

---

## Project Structure

```text
SoxFindr/
├── app/                    # Next.js application routes
├── components/             # Reusable UI components
│   ├── Societies/          # Society-related components
│   └── ui/                 # Reusable UI primitives
├── db/                     # Database and seed data
├── drizzle/                # Drizzle configuration
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .gitignore
├── bun.lock
├── components.json
├── drizzle.config.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── proxy.ts
└── tsconfig.json
