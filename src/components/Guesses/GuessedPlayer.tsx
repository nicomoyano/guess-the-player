import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Player } from '../../types/Player';
import AgeItem from './PlayerItems/AgeItem';
import RegionItem from './PlayerItems/RegionItem';
import ImageItem from './PlayerItems/ImageItem';
import { useGameContext } from '../../store/useGameContext';
import ShirtNumberItem from './PlayerItems/ShirtNumberItem';

type Props = {
  player: Player;
  index: number;
};

const GuessedPlayer = ({ player, index }: Props) => {
  const { gameState } = useGameContext();
  const playerToGuess = gameState!.playerToGuess;

  const containerStyle = [
    styles.container,
    player.id === playerToGuess.id && { borderColor: 'green', borderWidth: 4 },
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.playerName}>{player.name}</Text>
      <View style={styles.itemsContainer}>
        <AgeItem playerAge={player.age} playerToGuessAge={playerToGuess.age} />
        <RegionItem
          name={player.country.region}
          image={player.country.regionImage}
          isCorrect={player.country.region === playerToGuess.country.region}
        />
        <ImageItem
          image={player.country.image}
          isCorrect={player.country.id === playerToGuess.country.id}
        />
        <ImageItem
          image={player.club.league.image}
          isCorrect={player.club.league.id === playerToGuess.club.league.id}
        />
        <ImageItem
          image={player.club.image}
          isCorrect={player.club.id === playerToGuess.club.id}
        />
        <ImageItem
          image={player.position.image}
          isCorrect={player.position.general === playerToGuess.position.general}
        />
        <ShirtNumberItem
          playerNum={player.kitNumber}
          playerToGuessNum={playerToGuess.kitNumber}
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
    cursor: 'default',
    userSelect: 'none',
  },
  index: {
    fontSize: 16,
    fontWeight: '700',
  },
  playerName: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
  itemsContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    rowGap: 8,
  },
});

export default GuessedPlayer;
