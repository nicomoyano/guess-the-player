import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { gameContext } from '../store/gameContext';

type Props = {
  isCorrect: boolean;
  age: number;
};

const PlayerToGuessAge = ({ isCorrect, age }: Props) => {
  const gameState = useContext(gameContext);
  const agesArray: number[] = [];
  gameState!.playersGuessed.forEach((player) => agesArray.push(player.age));

  const ageRange = () => {
    let maxBefore = -Infinity;
    let minAfter = Infinity;

    for (let i = 0; i < agesArray.length; i++) {
      if (agesArray[i] < age && agesArray[i] > maxBefore) {
        maxBefore = agesArray[i];
      } else if (agesArray[i] > age && agesArray[i] < minAfter) {
        minAfter = agesArray[i];
      }
    }

    return {
      maxBefore: maxBefore === -Infinity ? null : maxBefore,
      minAfter: minAfter === Infinity ? null : minAfter,
    };
  };

  const ageRangeText = () => {
    const range = ageRange();
    if (range.maxBefore && range.minAfter) {
      return `${range.maxBefore}-${range.minAfter}`;
    } else if (range.maxBefore) {
      return `${range.maxBefore}-?`;
    } else if (range.minAfter) {
      return `?-${range.minAfter}`;
    }
  };

  return (
    <View style={styles.itemContainer}>
      {isCorrect ? (
        <Text style={styles.age}>{age}</Text>
      ) : (
        <Text
          style={
            ageRange().maxBefore || ageRange().minAfter
              ? styles.range
              : styles.questionMark
          }
        >
          {ageRange().maxBefore || ageRange().minAfter ? ageRangeText() : '?'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 5,
    borderColor: '#eee',
  },
  questionMark: {
    fontSize: 24,
    fontWeight: '600',
  },
  range: {
    fontSize: 10,
    fontWeight: '600',
  },
  age: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: 'green',
  },
});

export default PlayerToGuessAge;