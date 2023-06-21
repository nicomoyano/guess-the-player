import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Player } from '../../types/Player';
import AgeItem from './PlayerItems/AgeItem';
import RegionItem from './PlayerItems/RegionItem';
import ImageItem from './PlayerItems/ImageItem';
import { useGameContext } from '../../store/useGameContext';
import ShirtNumberItem from './PlayerItems/ShirtNumberItem';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  player: Player;
  index: number;
};

const GuessedPlayer = ({ player, index }: Props) => {
  const { gameState } = useGameContext();
  const playerToGuess = gameState!.playerToGuess;

  const containerStyle = [
    styles.container,
    player.id === playerToGuess.id && {
      borderColor: 'green',
      borderWidth: 5,
      marginHorizontal: 0,
    },
  ];

  return (
    <View style={containerStyle}>
      <LinearGradient
        colors={['white', 'lightgray']}
        style={styles.background}
      />
      <Text style={styles.playerName}>{player.name}</Text>
      <View style={styles.itemsContainer}>
        <AgeItem playerAge={player.age} playerToGuessAge={playerToGuess.age} />
        <RegionItem
          id={player.country.region.id}
          image={player.country.region.image}
          isCorrect={
            player.country.region.id === playerToGuess.country.region.id
          }
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
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    cursor: 'default',
    userSelect: 'none',
    position: 'relative',
  },
  background: {
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  index: {
    fontSize: 16,
    fontWeight: '700',
  },
  playerName: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  itemsContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    rowGap: 8,
    paddingHorizontal: 5,
  },
});

export default GuessedPlayer;
