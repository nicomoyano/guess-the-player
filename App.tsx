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
  isGuessCorrect: false,
  isRegionCorrect: false,
  isCountryCorrect: false,
  isLeagueCorrect: false,
  isClubCorrect: false,
  isPositionCorrect: false,
  isFootCorrect: false,
  isAgeCorrect: false,
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
    gameDispatch({
      type: 'reset',
      payload: { playerToGuess: getRandomPlayer() },
    });
  };

  const handleReveal = () => {
    gameDispatch({
      type: 'reveal',
    });
  };

  return (
    <View style={styles.container}>
      <gameContext.Provider value={gameState}>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={handleReveal}>
            <Text style={styles.buttonText}>Revelar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </Pressable>
        </View>
        <PlayersList handleGuessPlayer={handleGuessPlayer} />
      </gameContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 25,
    backgroundColor: 'black',
    padding: 5,
  },
  buttonText: {
    color: 'white',
  },
});
