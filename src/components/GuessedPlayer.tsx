import { View, StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';
import ImageItem from './PlayerItems/ImageItem';
import AgeItem from './PlayerItems/AgeItem';
import RegionItem from './PlayerItems/RegionItem';

type Props = {
  player: Player;
  index: number;
};

const GuessedPlayer = ({ player, index }: Props) => {
  const gameState = useContext(gameContext);
  const playerToGuess = gameState!.playerToGuess;

  const containerStyle = [
    styles.container,
    player.id === playerToGuess.id && { borderColor: 'green', borderWidth: 2 },
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.index}>{`#${index}`}</Text>
      <Text style={styles.playerName}>{player.name}</Text>
      <View style={styles.itemsContainer}>
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
        <ImageItem
          image={
            player.foot === 'Right'
              ? require('../images/feet/foot_right.png')
              : require('../images/feet/foot_left.png')
          }
          isCorrect={player.foot === playerToGuess.foot}
        />
        <AgeItem playerAge={player.age} playerToGuessAge={playerToGuess.age} />
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
    position: 'absolute',
    left: 0,
    marginLeft: 20,
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    rowGap: 8,
  },
});

export default GuessedPlayer;
