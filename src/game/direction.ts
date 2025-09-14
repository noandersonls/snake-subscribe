import type { Direction, Position } from './types';

export const isOpposite = (a: Direction, b: Direction): boolean => {
  return (
    (a === 'Up' && b === 'Down') ||
    (a === 'Down' && b === 'Up') ||
    (a === 'Left' && b === 'Right') ||
    (a === 'Right' && b === 'Left')
  );
};

export const guardOpposite = (current: Direction, next: Direction): Direction =>
  isOpposite(current, next) ? current : next;

export const nextHead = (dir: Direction, head: Position): Position => {
  switch (dir) {
    case 'Up':
      return { x: head.x, y: head.y - 1 };
    case 'Down':
      return { x: head.x, y: head.y + 1 };
    case 'Left':
      return { x: head.x - 1, y: head.y };
    case 'Right':
      return { x: head.x + 1, y: head.y };
  }
};
