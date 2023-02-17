import { View, StyleSheet, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import PlayerToGuessItem from './PlayerToGuessItem';
import PlayerToGuessAge from './PlayerToGuessAge';
import PlayerToGuessRegion from './PlayerToGuessRegion';
import { useGameContext } from '../../store/useGameContext';
import PlayerToGuessShirtNumber from './PlayerToGuessShirtNumber';

const PlayerToGuess = () => {
  const { gameState } = useGameContext();
  const { playerToGuess } = gameState;

  return (
    <View style={styles.container}>
      {gameState.isGuessCorrect && (
        <Image source={playerToGuess.image} style={styles.playerImage} />
      )}
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
        <PlayerToGuessShirtNumber
          isCorrect={gameState!.correctItems.kitNumber}
          kitNumber={playerToGuess.kitNumber}
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
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 6,
    borderColor: '#eee',
    marginBottom: 4,
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
