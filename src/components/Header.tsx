import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useGameContext } from '../store/useGameContext';
import Inputs from './Inputs';
import NewGame from './NewGame';

const Header = () => {
  const { gameState } = useGameContext();
  const { isGuessCorrect } = gameState;

  return (
    <View style={styles.container}>
      {isGuessCorrect ? <NewGame /> : <Inputs />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default Header;
