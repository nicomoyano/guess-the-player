import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
  correctItems: {
    region: false,
    country: false,
    league: false,
    club: false,
    position: false,
    foot: false,
    age: false,
  },
};

export default function App() {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);

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

  const handleHint = () => {
    gameDispatch({
      type: 'get_hint',
    });
  };

  return (
    <View style={styles.container}>
      <gameContext.Provider value={gameState}>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={handleReveal}>
            <Text style={styles.buttonText}>Revelar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleHint}>
            <Text style={styles.buttonText}>Pista</Text>
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
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 480,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 70,
    marginVertical: 20,
    backgroundColor: '#09f',
    padding: 5,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    userSelect: 'none',
  },
});
