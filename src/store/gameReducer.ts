import { Player } from '../types/Player';

export type GameState = {
  playerToGuess: Player;
  playersGuessed: Player[];
};

type GameAction =
  | {
      type: 'set_player_to_guess';
      payload: {
        player: Player;
      };
    }
  | {
      type: 'guess_player';
      payload: {
        player: Player;
      };
    }
  | {
      type: 'reset';
      payload: {
        playerToGuess: Player;
      };
    };

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'set_player_to_guess':
      return {
        ...state,
        playerToGuess: action.payload.player,
      };
    case 'guess_player':
      return {
        ...state,
        playersGuessed: [action.payload.player, ...state.playersGuessed],
        guessIsCorrect: action.payload.player.id === state.playerToGuess.id,
      };
    case 'reset':
      return {
        ...state,
        playerToGuess: action.payload.playerToGuess,
        playersGuessed: [],
      };
  }
};
