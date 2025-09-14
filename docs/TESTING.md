# Testing Strategy

## What we test

- **Unit (pure)**: movement, direction guard, collisions, spawn, scoring/growth.
- **Reducer**: phase gating (running/paused) with a tick.
<!-- - **UI (light)**: render grid and score updates (smoke). (TO DO) -->

## Patterns

- Position snake/food to resolve in a single tick.

## Commands

- `npm run test` — run all tests
- `npm run coverage` — generate coverage report

## Examples

- moves one cell per tick
- eats food and grows + scores
- dies on wall collision
- self collision detection works
- applies direction change on next tick
