import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SearchPlayers from './SearchPlayers';
import Buttons from './Buttons';

const Inputs = () => {
  return (
    <View style={styles.container}>
      <SearchPlayers />
      <Buttons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Inputs;
