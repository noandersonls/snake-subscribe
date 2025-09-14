export const keyOf = (x: number, y: number) => `${x},${y}`;
export const keyOfPos = (p: { x: number; y: number }) => keyOf(p.x, p.y);

// Simple deterministic RNG
export const randInt = (maxExclusive: number) => Math.floor(Math.random() * maxExclusive);
