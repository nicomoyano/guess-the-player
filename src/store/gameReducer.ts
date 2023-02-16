import { Player } from '../types/Player';

export type GameState = {
  playerToGuess: Player;
  playersGuessed: Player[];
  isGuessCorrect: boolean;
  isRegionCorrect: boolean;
  isCountryCorrect: boolean;
  isLeagueCorrect: boolean;
  isClubCorrect: boolean;
  isPositionCorrect: boolean;
  isFootCorrect: boolean;
  isAgeCorrect: boolean;
};

type GameAction =
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
      type: 'reveal';
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
          playersGuessed: [player, ...state.playersGuessed],
          isGuessCorrect: state.isGuessCorrect
            ? true
            : player.id === playerToGuess.id,
          isRegionCorrect: state.isRegionCorrect
            ? true
            : player.country.region === playerToGuess.country.region,
          isCountryCorrect: state.isCountryCorrect
            ? true
            : player.country.id === playerToGuess.country.id,
          isLeagueCorrect: state.isLeagueCorrect
            ? true
            : player.club.league.id === playerToGuess.club.league.id,
          isClubCorrect: state.isClubCorrect
            ? true
            : player.club.id === playerToGuess.club.id,
          isPositionCorrect: state.isPositionCorrect
            ? true
            : player.position.general === playerToGuess.position.general,
          isFootCorrect: state.isFootCorrect
            ? true
            : player.foot === playerToGuess.foot,
          isAgeCorrect: state.isAgeCorrect
            ? true
            : player.age === playerToGuess.age,
        };
      }
    case 'reset':
      return {
        ...state,
        playerToGuess: action.payload.playerToGuess,
        playersGuessed: [],
        isGuessCorrect: false,
        isRegionCorrect: false,
        isCountryCorrect: false,
        isLeagueCorrect: false,
        isClubCorrect: false,
        isPositionCorrect: false,
        isFootCorrect: false,
        isAgeCorrect: false,
      };
    case 'reveal':
      return {
        ...state,
        isGuessCorrect: true,
        isRegionCorrect: true,
        isCountryCorrect: true,
        isLeagueCorrect: true,
        isClubCorrect: true,
        isPositionCorrect: true,
        isFootCorrect: true,
        isAgeCorrect: true,
      };
  }
};
