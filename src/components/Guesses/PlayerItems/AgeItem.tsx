import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ItemContainer from './ItemContainer';

type Props = {
  playerAge: number;
  playerToGuessAge: number;
};

const AgeItem = ({ playerAge, playerToGuessAge }: Props) => {
  const isCorrect = playerAge === playerToGuessAge;

  const ageArrow = playerAge < playerToGuessAge ? '↑' : '↓';

  return (
    <ItemContainer isCorrect={isCorrect}>
      <Text style={styles.age}>
        {playerAge}
        {playerAge !== playerToGuessAge && ageArrow}
      </Text>
    </ItemContainer>
  );
};

const styles = StyleSheet.create({
  age: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default AgeItem;
