import type { Direction, GameState } from '../game/types';

export type Action =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'RESET' }
  | { type: 'SET_NEXT_DIR'; payload: Direction }
  | { type: 'TICK' }
  | { type: 'SET_STATE'; payload: GameState }; // test

export const start = (): Action => ({ type: 'START' });
export const pause = (): Action => ({ type: 'PAUSE' });
export const resume = (): Action => ({ type: 'RESUME' });
export const reset = (): Action => ({ type: 'RESET' });
export const setNextDir = (d: Direction): Action => ({ type: 'SET_NEXT_DIR', payload: d });
export const tickAction = (): Action => ({ type: 'TICK' });
