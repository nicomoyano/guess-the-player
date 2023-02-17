import { useContext } from 'react';
import { GameContext, gameContext } from './gameContext';

export const useGameContext = () => {
  const context = useContext(gameContext);

  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context as GameContext;
};
