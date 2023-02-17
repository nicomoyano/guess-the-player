import { createContext } from 'react';
import { Player } from '../types/Player';
import { GameState } from './gameReducer';

export type GameContext = {
  gameState: GameState;
  gameActions: {
    handleGuessPlayer: (player: Player) => void;
    handleHint: () => void;
    handleReset: () => void;
    handleReveal: () => void;
  };
};

export const gameContext = createContext<GameContext | null>(null);
