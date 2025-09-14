import type { FC } from 'react';
import type { BoardSize, Position } from '../game/types';
import { keyOf } from '../game/utils';

type Props = {
  board: BoardSize;
  snake: Position[];
  food: Position;
};

export const GameBoard: FC<Props> = ({ board, snake, food }) => {
  const occupied = new Set(snake.map(p => keyOf(p.x, p.y)));
  const cells: React.ReactNode[] = [];
  for (let y = 0; y < board.h; y++) {
    for (let x = 0; x < board.w; x++) {
      const k = keyOf(x, y);
      const isSnake = occupied.has(k);
      const isFood = food.x === x && food.y === y;
      cells.push(
        <div
          key={k}
          className={[
            'border border-slate-800',
            isSnake ? 'bg-green-500' : isFood ? 'bg-blue-500' : 'bg-slate-900',
          ].join(' ')}
        />
      );
    }
  }

  return (
    <div
      className="grid aspect-square w-[min(92vw,560px)]"
      style={{ gridTemplateColumns: `repeat(${board.w}, 1fr)` }}
      role="grid"
      aria-label="Snake board"
    >
      {cells}
    </div>
  );
};
