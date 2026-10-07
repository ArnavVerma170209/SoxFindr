SoxFindr

Find your passion. Build your skills. Connect with like-minded individuals.

SoxFindr is a student-focused platform designed to help students discover and explore societies at Netaji Subhas University of Technology (NSUT).

Instead of searching through scattered information about different societies, SoxFindr provides a centralized platform where students can explore societies, learn more about them, and take the next step toward getting involved.

Live Demo: https://sox-findr-plum.vercel.app/

Features

Browse and explore student societies

Dedicated pages for individual societies

Society descriptions and categories

User authentication with Clerk

Student dashboard

Society registration flow

FAQ section

Responsive design for desktop and mobile

Interactive UI and page transitions

Tech Stack
Frontend

Next.js 16

React 19

TypeScript

Tailwind CSS

Framer Motion

Lucide React

Phosphor Icons

Authentication

Clerk

Database

PostgreSQL

Neon

Drizzle ORM

Prisma PostgreSQL Adapter

Development

Bun

ESLint

TypeScript

Drizzle Kit

Project Structure
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

Getting Started
Prerequisites

Make sure you have the following installed:

Node.js

Bun

You will also need accounts/configuration for the required authentication and database services.

1. Clone the repository
git clone https://github.com/ArnavVerma170209/SoxFindr.git
cd SoxFindr

2. Install dependencies

Using Bun:

bun install


Or using npm:

npm install

3. Configure environment variables

Create a .env.local file in the root directory.

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url


Add any other environment variables required by your local configuration.

Never commit .env.local or other files containing secrets to the repository.

4. Start the development server

Using Bun:

bun dev


Or using npm:

npm run dev


The application will be available at:

http://localhost:3000

Available Scripts
Command	Description
bun dev	Start the development server
bun run build	Create a production build
bun start	Start the production server
bun run lint	Run ESLint

With npm:

npm run dev
npm run build
npm start
npm run lint

How It Works

SoxFindr provides a centralized discovery experience for student societies.

The homepage displays societies through reusable society cards containing relevant information such as:

Society name

Description

Category

Image

Users can select a society to access its dedicated page.

Society pages follow a URL structure similar to:

/society/society-name


This makes individual societies easy to navigate and share.

Authentication

SoxFindr uses Clerk for authentication.

The application supports different experiences depending on the user's authentication state.

Unauthenticated
      |
      v
  Register / Login
      |
      v
 Authenticated
      |
      v
   Dashboard


Authentication state is used throughout the application to control access to user-specific functionality.

Design

SoxFindr uses a modern interface focused on simplicity and usability.

The application includes:

Responsive layouts

Animated transitions

Interactive components

Society cards

FAQ sections

Countdown functionality

Responsive navigation

Mobile-friendly layouts

The UI is built using reusable React components and Tailwind CSS.

Deployment

The project is deployed using Vercel.

Production:
https://sox-findr-plum.vercel.app/

To deploy your own instance, connect the repository to Vercel and configure the required environment variables.

Contributing

Contributions and improvements are welcome.

Fork the repository
git clone https://github.com/ArnavVerma170209/SoxFindr.git
cd SoxFindr


Create a feature branch:

git checkout -b feature/your-feature


Make your changes and commit them:

git add .
git commit -m "feat: add your feature"


Push the branch:

git push origin feature/your-feature


Then open a Pull Request.

Future Improvements

Potential improvements include:

Advanced society search

Society filtering by category

Society event calendar

Notifications

Saved or favorite societies

Society analytics

Improved student profiles

Richer society profiles and galleries

Improved registration management

Progressive Web App support

About

SoxFindr was developed as a college project for the enrollment process of the Google Developer Group (GDG) at Netaji Subhas University of Technology (NSUT).

The goal of the project is to make it easier for students to discover communities, explore their interests, and get involved in campus life.

Author

Arnav Verma

GitHub:
https://github.com/ArnavVerma170209
