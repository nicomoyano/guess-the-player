import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useGameContext } from '../store/useGameContext';

const NewGame = () => {
  const { gameActions } = useGameContext();
  const { handleReset } = gameActions;

  return (
    <View style={styles.container}>
      <Pressable onPress={handleReset} style={styles.button}>
        <Text style={styles.text}>New Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 33,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#09f',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NewGame;
