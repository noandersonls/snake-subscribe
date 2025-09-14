# SUBSCRIBE Snake Game – React + TypeScript

A fully playable, browser-based implementation of the classic Snake game.  
Built with React 18, TypeScript, and Tailwind CSS.

## Deployed to GitHub Pages in

[GitHub Pages - SUBSCRIBE Snake Game](https://noandersonls.github.io/snake-subscribe/)

---

## Gameplay Overview

- **Movement**: Snake moves automatically every tick (default `180ms`).
- **Controls**: Arrow keys change direction; direction applies on the **next tick**.
- **Collisions**:
  - Hitting a wall ends the game.
  - Hitting the snake’s own body ends the game.
- **Food**:
  - Exactly one food item exists at all times.
  - Eating food adds **+3 points** and grows the snake by **+1 segment**.
  - New food spawns immediately on an empty cell.
- **Game Over conditions**:
  1. Score ≥ 30
  2. Snake collides with a wall
  3. Snake collides with itself
- **Default board**: `20×20` (trivial to change via constants).

---

## Technologies

- **React 18+** with functional components & hooks
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling & responsive grid layout
- **Vite** for fast bundling/dev server
- **Vitest** + **React Testing Library** for unit & integration tests
- **ESLint (flat config)** + **Prettier** for linting and formatting
- **GitHub Pages** for deployment

---

**Docs quick tour**

- [Architecture](./docs/ARCHITECTURE.md)
- [Testing Strategy](./docs/TESTING.md)
- [Decisions (ADRs)](./docs/ADRS.md)
- [Deployment](./docs/DEPLOYMENT.md)

---

## Project Structure

```bash
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── prettier.config.js
├── public
│   └── vite.svg
├── src
│   ├── app # App entrypoint & composition
│   │   └── App.tsx
│   ├── game # Pure game logic (types, engine, collisions, spawn, etc.)
│   │   ├── collisions.ts
│   │   ├── constants.ts
│   │   ├── direction.ts
│   │   ├── engine.ts
│   │   ├── spawn.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── hooks # Reusable hooks (game loop, keyboard)
│   │   ├── useGameLoop.ts
│   │   └── useKeyboard.ts
│   ├── index.css
│   ├── main.tsx
│   ├── state # Reducer + actions
│   │   ├── actions.ts
│   │   └── reducer.ts
│   ├── styles # Tailwind + global CSS
│   │   └── index.css
│   ├── test # Unit Tests
│   │   └── setup.ts
│   ├── ui # Presentational components (board, score, controls)
│   │   ├── GameBoard.tsx
│   │   └── Score.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

10 directories, 30 files
```

- **Pure logic** lives in `/game` and is tested in isolation.
- **Reducer** (`/state`) funnels all changes through typed actions → deterministic & testable.
- **Hooks** (`/hooks`) manage side effects (timer, keyboard).
- **UI** (`/ui`) is dumb/pure: render grid, score, and controls.

## Getting Started

### Requirements

- Node.js 20+
- npm 9+ (or pnpm/yarn if preferred)

### Installation

```bash
# Clone the repo
cd snake-react

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

### Run Tests

```bash
npm run test
```
