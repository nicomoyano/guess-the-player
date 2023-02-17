import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ItemContainer from './ItemContainer';

type Props = {
  playerNum: number;
  playerToGuessNum: number;
};

const ShirtNumberItem = ({ playerNum, playerToGuessNum }: Props) => {
  const isCorrect = playerNum === playerToGuessNum;

  const arrow = playerNum < playerToGuessNum ? '↑' : '↓';

  return (
    <ItemContainer isCorrect={isCorrect}>
      <Text style={styles.number}>
        {playerNum}
        {playerNum !== playerToGuessNum && arrow}
      </Text>
    </ItemContainer>
  );
};

const styles = StyleSheet.create({
  number: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default ShirtNumberItem;
