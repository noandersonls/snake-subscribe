# Architecture

## Goals

- Deterministic, testable core
- Minimal but explicit state transitions
- Clear separation of concerns

## High-level

- **Engine (/game)**: Pure functions (tick, collisions, spawn, direction). No React.
- **State (/state)**: Single reducer as a tiny FSM: `idle → running → paused ↔ running → gameover`.
- **Hooks (/hooks)**: Side effects (interval, keyboard) isolated.
- **UI (/ui)**: Pure render (DOM grid, score, controls).

## Data model

- `snake: Position[]` (head at index 0)
- `occupied: Set<string>` for O(1) self-collision
- `dir` vs `nextDir`: input is intent; applied at next tick
- Board size is data (`{w,h}`), default 20×20

## Rendering

- DOM + CSS Grid for 20×20

## Why this design

- Pure logic means easy tests and refactors
- One source of truth for transitions (reducer + tick) and I like working with Redux/Reducers too.
- Hooks prevent race conditions (single interval; keyboard intent) - Also opted for the trick of the callback ref in the gameplay loop!
