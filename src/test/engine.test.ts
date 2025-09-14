import { describe, it, expect } from 'vitest';
import { createInitialState, tick } from '../game/engine';
import { SCORE_PER_FOOD } from '../game/constants';
import { keyOf } from '../game/utils';

const Board = { w: 20, h: 20 };

const withRunning = (s: ReturnType<typeof createInitialState>) => ({
  ...s,
  phase: 'running' as const,
});

describe('engine basics', () => {
  it('moves one cell per tick', () => {
    const s0 = createInitialState(Board);
    const h0 = s0.snake[0];
    const s1 = tick(withRunning(s0)).state;
    expect(s1.snake[0].x).toBe(h0.x + 1);
    expect(s1.snake[0].y).toBe(h0.y);
  });

  it('eats food and grows + scores', () => {
    const s0 = createInitialState(Board);
    const head = s0.snake[0];
    // place food right in front of head (still inside 20x20)
    const sPrep = withRunning({ ...s0, food: { x: head.x + 1, y: head.y } });
    const res = tick(sPrep);
    expect(res.ateFood).toBe(true);
    expect(res.state.score).toBe(SCORE_PER_FOOD);
    expect(res.state.snake.length).toBe(s0.snake.length + 1);
  });

  it('dies on wall collision', () => {
    // small board to ensure quick wall hit
    let state = createInitialState({ w: 3, h: 3 });
    state = { ...state, phase: 'running' };
    // move Right until wall
    state = tick(state).state;
    const res = tick(state);
    expect(res.collided).toBe(true);
    expect(res.state.phase).toBe('gameover');
  });

  it('self collision detection works', () => {
    // Craft a U-shape so the next tick runs into itself
    const s0 = createInitialState();
    const snake = [
      { x: 10, y: 10 }, // head
      { x: 9, y: 10 },
      { x: 8, y: 10 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 10, y: 9 }, // directly above head -> going Up will collide
    ];
    const occupied = new Set(snake.map((p) => keyOf(p.x, p.y)));
    const s = withRunning({ ...s0, snake, occupied, dir: 'Up', nextDir: 'Up' });
    const res = tick(s);
    expect(res.collided).toBe(true);
    expect(res.state.phase).toBe('gameover');
  });
});
