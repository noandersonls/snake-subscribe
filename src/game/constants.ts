export const DEFAULT_BOARD = { w: 20, h: 20 } as const;

export const TICK_MS = 180;

export const SCORE_PER_FOOD = 3;
export const WIN_SCORE = 30;

export const INITIAL_SNAKE: { body: { x: number; y: number }[]; dir: 'Right' } = {
  body: [
    { x: 2, y: 10 },
    { x: 1, y: 10 },
    { x: 0, y: 10 },
  ],
  dir: 'Right',
};
