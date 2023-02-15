import { View, StyleSheet, Image, Text } from 'react-native';
import React, { useContext } from 'react';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';

type Props = {
  player: Player;
};

const GuessedPlayer = ({ player }: Props) => {
  const gameState = useContext(gameContext);
  const playerToGuess = gameState!.playerToGuess;

  return (
    <View style={styles.container}>
      <Image
        source={player.image}
        style={[
          styles.image,
          player.id === playerToGuess.id && styles.correctImage,
        ]}
      />
      <View>
        <Image
          source={player.country.regionImage}
          style={[
            styles.image,
            player.country.region === playerToGuess.country.region &&
              styles.correctImage,
          ]}
        />
        <Text
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '900',
            fontSize: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 50,
          }}
        >
          {player.country.region.slice(0, 2).toUpperCase()}
        </Text>
      </View>
      <Image
        source={player.country.image}
        style={[
          styles.image,
          player.country.id === playerToGuess.country.id && styles.correctImage,
        ]}
      />
      <Image
        source={player.club.league.image}
        style={[
          styles.image,
          player.club.league.id === playerToGuess.club.league.id &&
            styles.correctImage,
        ]}
      />
      <Image
        source={player.club.image}
        style={[
          styles.image,
          player.club.id === playerToGuess.club.id && styles.correctImage,
        ]}
      />
      <Image
        source={player.position.image}
        style={[
          styles.image,
          player.position.general === playerToGuess.position.general &&
            styles.correctImage,
        ]}
      />
      <Image
        source={require('../images/foot.png')}
        style={[
          styles.image,
          player.foot === 'Right' && { transform: [{ scaleX: -1 }] },
          player.foot === playerToGuess.foot && styles.correctImage,
        ]}
      />
      <Text
        style={[
          styles.text,
          player.age === playerToGuess.age && styles.correctText,
        ]}
      >
        {player.age}
        {player.age < playerToGuess.age && '↑'}
        {player.age > playerToGuess.age && '↓'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    width: 50,
    textAlign: 'center',
    // backgroundColor: 'red',
  },
  correctText: {
    color: 'green',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  correctImage: {
    backgroundColor: 'green',
  },
});

export default GuessedPlayer;
