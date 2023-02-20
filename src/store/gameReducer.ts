import { getRandomPlayer } from '../api/getRandomPlayer';
import { Player } from '../types/Player';
import { GameAction } from './GameAction';

export type GameState = {
  playerToGuess: Player;
  playersGuessed: Player[];
  isGuessCorrect: boolean;
  correctItems: {
    age: boolean;
    region: boolean;
    country: boolean;
    league: boolean;
    club: boolean;
    position: boolean;
    kitNumber: boolean;
  };
};

export const initialGameState: GameState = {
  playerToGuess: getRandomPlayer(),
  playersGuessed: [],
  isGuessCorrect: false,
  correctItems: {
    age: false,
    region: false,
    country: false,
    league: false,
    club: false,
    position: false,
    kitNumber: false,
  },
};

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'guess_player':
      const player = action.payload.player;
      const { playerToGuess } = state;

      if (state.playersGuessed.some((p) => p.id === player.id)) {
        return state;
      } else {
        return {
          ...state,
          playersGuessed: [...state.playersGuessed, player],
          isGuessCorrect: state.isGuessCorrect
            ? true
            : player.id === playerToGuess.id,
          correctItems: {
            age: state.correctItems.age
              ? true
              : player.age === playerToGuess.age,
            region: state.correctItems.region
              ? true
              : player.country.region === playerToGuess.country.region,
            country: state.correctItems.country
              ? true
              : player.country.id === playerToGuess.country.id,
            league: state.correctItems.league
              ? true
              : player.club.league.id === playerToGuess.club.league.id,
            club: state.correctItems.club
              ? true
              : player.club.id === playerToGuess.club.id,
            position: state.correctItems.position
              ? true
              : player.position.general === playerToGuess.position.general,
            kitNumber: state.correctItems.kitNumber
              ? true
              : player.kitNumber === playerToGuess.kitNumber,
          },
        };
      }
    case 'reset':
      return {
        ...state,
        playerToGuess: action.payload.playerToGuess,
        playersGuessed: [],
        isGuessCorrect: false,
        correctItems: {
          age: false,
          region: false,
          country: false,
          league: false,
          club: false,
          position: false,
          kitNumber: false,
        },
      };
    case 'reveal':
      return {
        ...state,
        isGuessCorrect: true,
        correctItems: {
          age: true,
          region: true,
          country: true,
          league: true,
          club: true,
          position: true,
          kitNumber: true,
        },
      };
    case 'get_hint':
      const newCorrectItems = { ...state.correctItems };

      for (const key in newCorrectItems) {
        if ((newCorrectItems as any)[key] === true) {
          continue;
        } else {
          (newCorrectItems as any)[key] = true;
          break;
        }
      }
      return { ...state, correctItems: newCorrectItems };
  }
};
