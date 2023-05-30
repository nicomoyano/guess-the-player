import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import GameProvider from './src/store/GameProvider';
import PlayerToGuess from './src/components/PlayerToGuess/PlayerToGuess';
import GuessedList from './src/components/Guesses/GuessedList';
import Header from './src/components/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(63,6,75)', 'rgb(16,0,16)']}
        style={styles.background}
      />
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
    paddingTop: Constants.statusBarHeight + 30,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
  game: {
    height: '100%',
    width: '100%',
    maxWidth: 480,
  },
});
