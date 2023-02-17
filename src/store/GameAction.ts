import { Player } from '../types/Player';

export type GameAction =
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
    }
  | {
      type: 'get_hint';
    }
  | {
      type: 'reveal';
    };
