import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useGameContext } from '../store/useGameContext';

const Buttons = () => {
  const { gameActions } = useGameContext();
  const { handleHint, handleReveal } = gameActions;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleHint}>
        <Ionicons name="ios-bulb" size={18} color="white" />
      </Pressable>
      <Pressable style={styles.button} onPress={handleReveal}>
        <Ionicons name="flag" size={18} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#09f',
    borderRadius: 32,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});

export default Buttons;
