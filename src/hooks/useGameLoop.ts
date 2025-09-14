import { useEffect, useRef } from 'react';
import { TICK_MS } from '../game/constants';

export const useGameLoop = (running: boolean, onTick: () => void, intervalMs = TICK_MS) => {
  const cbRef = useRef(onTick);
  cbRef.current = onTick;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => cbRef.current(), intervalMs);
    return () => clearInterval(id);
  }, [running, intervalMs]);
};
