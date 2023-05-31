import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useGameContext } from '../store/useGameContext';
import { LinearGradient } from 'expo-linear-gradient';

const NewGame = () => {
  const { gameActions } = useGameContext();
  const { handleReset } = gameActions;

  return (
    <View style={styles.container}>
      <Pressable onPress={handleReset} style={styles.button}>
        <LinearGradient
          colors={['#00c6ff', '#0072ff']}
          style={styles.gradient}
        />
        <Text style={styles.text}>New Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 39,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 4,
    zIndex: -1,
    top: 0,
    left: 0,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NewGame;
