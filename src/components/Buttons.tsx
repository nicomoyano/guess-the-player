import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useGameContext } from '../store/useGameContext';
import { LinearGradient } from 'expo-linear-gradient';

const Buttons = () => {
  const { gameActions } = useGameContext();
  const { handleHint, handleReveal } = gameActions;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleHint}>
        <LinearGradient
          colors={['#00c6ff', '#0072ff']}
          style={styles.gradient}
        />
        <Ionicons name="ios-bulb" size={20} color="white" />
      </Pressable>
      <Pressable style={styles.button} onPress={handleReveal}>
        <LinearGradient
          colors={['#00c6ff', '#0072ff']}
          style={styles.gradient}
        />
        <Ionicons name="flag" size={20} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 8,
    // marginTop: -1,
  },
  button: {
    borderRadius: 32,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  gradient: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 34,
    zIndex: -1,
  },
});

export default Buttons;
