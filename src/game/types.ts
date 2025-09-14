export type Position = { x: number; y: number };

export type Direction = 'Up' | 'Right' | 'Down' | 'Left';

export type GamePhase = 'idle' | 'running' | 'paused' | 'gameover';

export interface BoardSize {
  w: number;
  h: number;
}

export interface GameState {
  board: BoardSize;
  snake: Position[];
  occupied: Set<string>;
  dir: Direction;
  nextDir: Direction;
  food: Position;
  score: number;
  phase: GamePhase;
}

export interface TickResult {
  state: GameState;
  ateFood: boolean;
  collided: boolean;
  won: boolean;
}
