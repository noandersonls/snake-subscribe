import type { BoardSize, Position } from './types';
import { keyOf } from './utils';

export const hitsWall = (pos: Position, board: BoardSize) =>
  pos.x < 0 || pos.y < 0 || pos.x >= board.w || pos.y >= board.h;

export const hitsSelf = (pos: Position, occupied: Set<string>) => occupied.has(keyOf(pos.x, pos.y));
