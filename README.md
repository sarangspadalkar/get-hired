# Get Hired

A job board web app where developers can browse React jobs and employers can post openings.

This is a **learning project** I built to get hands-on with React, following the freeCodeCamp / Traversy Media tutorial: [React JS Course for Beginners](https://youtu.be/LDB4uaJ87e0?si=U46APLUZ-fkrxcmN).

## Tech Stack

- **React 19** with TypeScript
- **Vite** — dev server and build tooling
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`)
- **ESLint** + **Prettier** — linting and formatting

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server (runs on [http://localhost:3000](http://localhost:3000)):

```bash
npm run dev
```

## Available Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start the Vite dev server with hot reload        |
| `npm run build`        | Type-check and build for production into `dist/` |
| `npm run preview`      | Preview the production build locally             |
| `npm run lint`         | Run ESLint across the project                    |
| `npm run format`       | Format all files with Prettier                   |
| `npm run format:check` | Check formatting without writing changes         |

## Project Structure

```
src/
├── main.tsx          # App entry point
├── App.tsx           # Root component
├── index.css         # Tailwind import
└── components/
    ├── Navbar.tsx    # Top navigation bar
    ├── Hero.tsx      # Hero banner (takes title/subtitle props)
    ├── Cards.tsx     # "For Developers" / "For Employers" cards
    └── Card.tsx      # Reusable card wrapper
```

## What I'm Learning

- Components and props (e.g. `Hero` and `Card` take typed props)
- Composition with reusable components (`Card` used inside `Cards`)
- Styling with Tailwind utility classes
- Setting up a modern React + TypeScript + Vite project
