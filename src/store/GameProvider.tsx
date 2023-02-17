import { ReactNode } from 'react';
import { useGameReducer } from './useGameReducer';
import { gameContext } from './gameContext';

type Props = {
  children: ReactNode;
};

const GameProvider = ({ children }: Props) => {
  const { gameState, gameActions } = useGameReducer();

  return (
    <gameContext.Provider
      value={{
        gameState,
        gameActions,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
