import { useReducer } from 'react';
import { getRandomPlayer } from '../api/getRandomPlayer';
import { gameReducer, initialGameState } from './gameReducer';
import { Player } from '../types/Player';

export const useGameReducer = () => {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);

  const handleGuessPlayer = (player: Player) => {
    gameDispatch({
      type: 'guess_player',
      payload: { player },
    });
  };

  const handleReset = () => {
    gameDispatch({
      type: 'reset',
      payload: { playerToGuess: getRandomPlayer() },
    });
  };

  const handleReveal = () => {
    gameDispatch({
      type: 'reveal',
    });
  };

  const handleHint = () => {
    gameDispatch({
      type: 'get_hint',
    });
  };

  return {
    gameState,
    gameActions: {
      handleGuessPlayer,
      handleHint,
      handleReset,
      handleReveal,
    },
  };
};
