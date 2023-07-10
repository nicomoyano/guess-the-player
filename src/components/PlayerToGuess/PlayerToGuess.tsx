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
      <Image
        source={playerToGuess.image}
        style={[
          styles.playerImage,
          gameState.isGuessCorrect === false && styles.hiddenPlayerImage,
        ]}
      />
      <Text style={styles.playerName}>
        {gameState?.isGuessCorrect ? playerToGuess.name : '? ? ?'}
      </Text>
      <View style={styles.itemsContainer}>
        <PlayerToGuessAge
          isCorrect={gameState!.correctItems.age}
          age={playerToGuess.age}
        />
        <PlayerToGuessRegion
          id={playerToGuess.country.region.id}
          image={playerToGuess.country.region.image}
          isCorrect={gameState!.correctItems.region}
        />
        <PlayerToGuessItem
          isCorrect={gameState!.correctItems.country}
          image={playerToGuess.country.image}
          category="PAÍS"
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
          category="POSICIÓN"
        />
        <PlayerToGuessShirtNumber
          isCorrect={gameState!.correctItems.kitNumber}
          kitNumber={playerToGuess.kitNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    cursor: 'default',
    userSelect: 'none',
    paddingHorizontal: 10,
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
  hiddenPlayerImage: {
    tintColor: 'black',
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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: 1,
    rowGap: 10,
  },
});

export default PlayerToGuess;
