import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import PlayersList from './src/components/PlayersList';
import { gameReducer, GameState } from './src/store/gameReducer';
import { Player } from './src/types/Player';
import { gameContext } from './src/store/gameContext';
import { getRandomPlayer } from './src/api/getRandomPlayer';
import { playersImages } from './src/images/playersImages';

const initialGameState: GameState = {
  playerToGuess: getRandomPlayer(),
  playersGuessed: [],
};

export default function App() {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);
  const [showImage, setShowImage] = useState(false);

  const playerImage = playersImages.find(
    (player) => player.id === gameState.playerToGuess.id
  )?.image;

  const handleGuessPlayer = (player: Player) => {
    gameDispatch({
      type: 'guess_player',
      payload: { player },
    });
  };

  const handleReset = () => {
    setShowImage(false);
    gameDispatch({
      type: 'reset',
      payload: { playerToGuess: getRandomPlayer() },
    });
  };

  return (
    <View style={styles.container}>
      <gameContext.Provider value={gameState}>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setShowImage(!showImage)}
          >
            Revelar
          </Pressable>
          <Pressable style={styles.button} onPress={handleReset}>
            Reiniciar
          </Pressable>
        </View>
        <PlayersList handleGuessPlayer={handleGuessPlayer} />
        {showImage && (
          <View style={styles.revealContainer}>
            <Image source={playerImage} style={styles.revealImage} />
            <Text style={styles.revealText}>
              {gameState.playerToGuess.name}
            </Text>
          </View>
        )}
      </gameContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 25,
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
  },
  revealContainer: {
    position: 'absolute',
    marginTop: 200,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  revealImage: {
    width: 400,
    height: 400,
  },
  revealText: {
    fontSize: 100,
    textAlign: 'center',
  },
});
