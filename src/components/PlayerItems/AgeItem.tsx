import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ItemContainer from './ItemContainer';

type Props = {
  playerAge: number;
  playerToGuessAge: number;
};

const AgeItem = ({ playerAge, playerToGuessAge }: Props) => {
  const isCorrect = playerAge === playerToGuessAge;

  const ageStyle = [
    styles.age,
    isCorrect ? styles.correctAge : styles.incorrectAge,
  ];

  const ageArrow = playerAge < playerToGuessAge ? '↑' : '↓';

  return (
    <ItemContainer isCorrect={isCorrect}>
      <Text style={ageStyle}>
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
  correctAge: {
    color: 'green',
  },
  incorrectAge: {
    color: 'red',
  },
});

export default AgeItem;
