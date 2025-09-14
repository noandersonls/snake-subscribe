import type { Action } from './actions';
import type { GameState } from '../game/types';
import { createInitialState, tick } from '../game/engine';

export const createReducer = (initial?: GameState) => {
  const base = initial ?? createInitialState();
  return (state: GameState = base, action: Action): GameState => {
    switch (action.type) {
      case 'START':
        return { ...createInitialState(state.board), phase: 'running' };
      case 'PAUSE':
        return state.phase === 'running' ? { ...state, phase: 'paused' } : state;
      case 'RESUME':
        return state.phase === 'paused' ? { ...state, phase: 'running' } : state;
      case 'RESET':
        return createInitialState(state.board);
      case 'SET_NEXT_DIR':
        return { ...state, nextDir: action.payload };
      case 'TICK': {
        if (state.phase !== 'running') return state;
        return tick(state).state;
      }
      case 'SET_STATE':
        return action.payload;
      default:
        return state;
    }
  };
};
