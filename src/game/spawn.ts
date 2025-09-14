import type { BoardSize, Position } from './types';
import { keyOf, randInt } from './utils';

export const spawnFood = (board: BoardSize, occupied: Set<string>): Position => {
  const empties: Position[] = [];
  for (let y = 0; y < board.h; y++) {
    for (let x = 0; x < board.w; x++) {
      if (!occupied.has(keyOf(x, y))) empties.push({ x, y });
    }
  }
  if (empties.length === 0) {
    return { x: 0, y: 0 };
  }
  return empties[randInt(empties.length)];
};
