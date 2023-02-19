import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameProvider from './src/store/GameProvider';
import PlayerToGuess from './src/components/PlayerToGuess/PlayerToGuess';
import GuessedList from './src/components/Guesses/GuessedList';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <GameProvider>
        <View style={styles.game}>
          <Header />
          <PlayerToGuess />
          <GuessedList />
        </View>
      </GameProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    marginTop: 20,
  },
  game: {
    height: '100%',
    width: '100%',
    maxWidth: 480,
  },
});
