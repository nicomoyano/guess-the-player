import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { useGameContext } from '../../store/useGameContext';

type Props = {
  isCorrect: boolean;
  kitNumber: number;
};

const PlayerToGuessShirtNumber = ({ isCorrect, kitNumber }: Props) => {
  const { gameState } = useGameContext();
  const numbersArray: number[] = [];
  gameState!.playersGuessed.forEach((player) =>
    numbersArray.push(player.kitNumber)
  );

  const numberRange = () => {
    let maxBefore = -Infinity;
    let minAfter = Infinity;

    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] < kitNumber && numbersArray[i] > maxBefore) {
        maxBefore = numbersArray[i];
      } else if (numbersArray[i] > kitNumber && numbersArray[i] < minAfter) {
        minAfter = numbersArray[i];
      }
    }

    return {
      maxBefore: maxBefore === -Infinity ? null : maxBefore,
      minAfter: minAfter === Infinity ? null : minAfter,
    };
  };

  const numberRangeText = () => {
    const range = numberRange();
    if (range.maxBefore && range.minAfter) {
      return `${range.maxBefore}-${range.minAfter}`;
    } else if (range.maxBefore) {
      return `${range.maxBefore}-?`;
    } else if (range.minAfter) {
      return `?-${range.minAfter}`;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DORSAL</Text>
      <View style={styles.itemContainer}>
        {isCorrect ? (
          <Text style={styles.number}>{kitNumber}</Text>
        ) : (
          <Text
            style={
              numberRange().maxBefore || numberRange().minAfter
                ? styles.range
                : styles.questionMark
            }
          >
            {numberRange().maxBefore || numberRange().minAfter
              ? numberRangeText()
              : '?'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 8,
    color: 'white',
  },
  itemContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
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
  number: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default PlayerToGuessShirtNumber;
