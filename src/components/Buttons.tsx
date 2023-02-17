import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useGameContext } from '../store/useGameContext';

const Buttons = () => {
  const { gameActions } = useGameContext();

  return (
    <View style={styles.buttonsContainer}>
      <Pressable style={styles.button} onPress={gameActions.handleReveal}>
        <Text style={styles.buttonText}>Revelar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={gameActions.handleHint}>
        <Text style={styles.buttonText}>Pista</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={gameActions.handleReset}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
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

export default Buttons;
