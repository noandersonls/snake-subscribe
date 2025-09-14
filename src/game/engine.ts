import type { GameState, TickResult, BoardSize } from './types';
import { DEFAULT_BOARD, INITIAL_SNAKE, SCORE_PER_FOOD, WIN_SCORE } from './constants';
import { guardOpposite, nextHead } from './direction';
import { hitsSelf, hitsWall } from './collisions';
import { keyOfPos } from './utils';
import { spawnFood } from './spawn';

export const createInitialState = (board: BoardSize = DEFAULT_BOARD): GameState => {
  const snake = [...INITIAL_SNAKE.body];
  const occupied = new Set<string>(snake.map(keyOfPos));
  const food = spawnFood(board, occupied);
  return {
    board,
    snake,
    occupied,
    dir: INITIAL_SNAKE.dir,
    nextDir: INITIAL_SNAKE.dir,
    food,
    score: 0,
    phase: 'idle',
  };
};

export const tick = (state: GameState): TickResult => {
  const dir = guardOpposite(state.dir, state.nextDir);
  const head = state.snake[0];
  const newHead = nextHead(dir, head);

  const wall = hitsWall(newHead, state.board);
  const self = hitsSelf(newHead, state.occupied);
  if (wall || self) {
    return {
      state: { ...state, dir, phase: 'gameover' },
      ateFood: false,
      collided: true,
      won: false,
    };
  }

  const ateFood = newHead.x === state.food.x && newHead.y === state.food.y;

  const newSnake = [newHead, ...state.snake];
  const newOccupied = new Set(state.occupied);
  newOccupied.add(keyOfPos(newHead));

  if (!ateFood) {
    // remove tail
    const tail = newSnake.pop()!;
    newOccupied.delete(keyOfPos(tail));
  }

  const score = state.score + (ateFood ? SCORE_PER_FOOD : 0);
  let food = state.food;
  if (ateFood) {
    food = spawnFood(state.board, newOccupied);
  }

  const won = score >= WIN_SCORE;

  return {
    state: {
      ...state,
      snake: newSnake,
      occupied: newOccupied,
      dir,
      food,
      score,
      phase: won ? 'gameover' : state.phase,
    },
    ateFood,
    collided: false,
    won,
  };
};
