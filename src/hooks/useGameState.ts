import { useState, useCallback } from 'react';
import { GameState } from '../types';

export function useGameState<T>(initialState: T): GameState<T> {
  const [state, setState] = useState<T>(initialState);
  const [score, setScore] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const completeGame = useCallback((finalScore: number) => {
    setScore(finalScore);
    setIsComplete(true);
  }, []);

  return {
    state,
    setState,
    score,
    setScore,
    isComplete,
    completeGame,
  };
}
