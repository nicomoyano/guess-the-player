import { createContext } from 'react';
import { GameState } from './gameReducer';

export const gameContext = createContext<GameState | null>(null);
