import { View, StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';
import PlayerToGuessItem from './PlayerToGuessItem';
import PlayerToGuessAge from './PlayerToGuessAge';
import PlayerToGuessRegion from './PlayerToGuessRegion';

type Props = {
  playerToGuess: Player;
};

const PlayerToGuess = ({ playerToGuess }: Props) => {
  const gameState = useContext(gameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>
        {gameState?.isGuessCorrect ? playerToGuess.name : '? ? ?'}
      </Text>
      <View style={styles.itemsContainer}>
        <PlayerToGuessRegion
          name={playerToGuess.country.region}
          isCorrect={gameState!.correctItems.region}
          image={playerToGuess.country.regionImage}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.country}
          image={playerToGuess.country.image}
          category="PAIS"
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.league}
          image={playerToGuess.club.league.image}
          category="LIGA"
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.club}
          image={playerToGuess.club.image}
          category="CLUB"
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.position}
          image={playerToGuess.position.image}
          category="POS"
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.foot}
          image={
            playerToGuess.foot === 'Right'
              ? require('../images/feet/foot_right.png')
              : require('../images/feet/foot_left.png')
          }
          category="PIE"
        />
        <PlayerToGuessAge
          isCorrect={gameState!.correctItems.age}
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
    marginBottom: 20,
    paddingVertical: 10,
    alignItems: 'center',
    cursor: 'default',
    userSelect: 'none',
  },
  playerName: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 24,
    backgroundColor: '#eee',
    paddingHorizontal: 4,
  },
  itemsContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default PlayerToGuess;
