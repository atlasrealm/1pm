# 1PM — One Per Month

Bundle your monthly $1 donations into meaningful contributions that actually reach the causes you care about.

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 3
- [Husky](https://typicode.github.io/husky/) (pre-commit linting)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (tested with 22)
- npm (comes with Node.js)

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/atlasrealm/1pm.git
   cd 1pm
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles & Tailwind imports
└── components/
    └── AnimatedText.tsx  # Rotating text animation component
```
