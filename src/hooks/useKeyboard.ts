import { useEffect } from 'react';
import type { Direction } from '../game/types';

export const useKeyboard = (
  onDir: (d: Direction) => void,
  onTogglePause: () => void,
  onStart: () => void,
) => {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case 'ArrowUp':
          onDir('Up');
          break;
        case 'ArrowRight':
          onDir('Right');
          break;
        case 'ArrowDown':
          onDir('Down');
          break;
        case 'ArrowLeft':
          onDir('Left');
          break;
        case ' ':
          onTogglePause();
          break;
        case 'Enter':
          onStart();
          break;
      }
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onDir, onTogglePause, onStart]);
};
