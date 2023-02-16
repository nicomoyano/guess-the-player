import { View, StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';
import PlayerToGuessItem from './PlayerToGuessItem';
import PlayerToGuessAge from './PlayerToGuessAge';

type Props = {
  playerToGuess: Player;
};

const PlayerToGuess = ({ playerToGuess }: Props) => {
  const gameState = useContext(gameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>
        {gameState?.isGuessCorrect ? playerToGuess.name : '?'}
      </Text>
      <View style={styles.itemsContainer}>
        <PlayerToGuessItem
          isCorrect={gameState!.isRegionCorrect}
          image={playerToGuess.country.regionImage}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.isCountryCorrect}
          image={playerToGuess.country.image}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.isLeagueCorrect}
          image={playerToGuess.club.league.image}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.isClubCorrect}
          image={playerToGuess.club.image}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.isPositionCorrect}
          image={playerToGuess.position.image}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.isFootCorrect}
          image={
            playerToGuess.foot === 'Right'
              ? require('../images/feet/foot_right.png')
              : require('../images/feet/foot_left.png')
          }
        />
        <PlayerToGuessAge
          isCorrect={gameState!.isAgeCorrect}
          age={playerToGuess.age}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  playerName: {
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  itemsContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default PlayerToGuess;
