import { useMemo, useReducer } from 'react';
import { GameBoard } from '../ui/GameBoard';
import { Score } from '../ui/Score';
import { createInitialState } from '../game/engine';
import { createReducer } from '../state/reducer';
import { pause, reset, resume, setNextDir, start, tickAction } from '../state/actions';
import { useGameLoop } from '../hooks/useGameLoop';
import { useKeyboard } from '../hooks/useKeyboard';

import subscribeLogo from '../assets/subscribe.svg';

export default function App() {
  const initial = useMemo(() => createInitialState(), []);
  const [state, dispatch] = useReducer(createReducer(initial), initial);

  const running = state.phase === 'running';
  useGameLoop(running, () => dispatch(tickAction()));

  useKeyboard(
    (direction) => dispatch(setNextDir(direction)),
    () => dispatch(running ? pause() : resume()),
    () => dispatch(start())
  );

  return (
    <main className="min-h-dvh bg-slate-950 text-slate-100 grid place-items-center p-6">
      <div className="w-full max-w-xl">
        <div className="flex flex-col items-center mb-2">
          <img src={subscribeLogo} alt="SUBSCRIBE logo" className="h-12 mb-2" />
          <h1 className="text-3xl font-bold text-center">SUBSCRIBE Snake</h1>
        </div>
        <Score score={state.score} />

        <div className="flex items-center justify-center mb-4 gap-2">
          <button className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700" onClick={() => dispatch(start())}>
            Start
          </button>
          <button className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700" onClick={() => dispatch(running ? pause() : resume())}>
            {running ? 'Pause' : 'Resume'}
          </button>
          <button className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>

        <GameBoard board={state.board} snake={state.snake} food={state.food} />

        <p className="text-center text-slate-400 mt-3 text-sm">
          Use Arrow Keys to steer. Press <kbd>Enter</kbd> to Start, <kbd>Space</kbd> to Pause/Resume.
        </p>

        {state.phase === 'gameover' && (
          <div className="mt-3 text-center text-red-400 font-medium">Game Over</div>
        )}
      </div>
    </main>
  );
}
