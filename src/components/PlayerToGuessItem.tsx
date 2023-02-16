import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';

type Props = {
  isCorrect: boolean;
  image: ImageSourcePropType;
};

const PlayerToGuessItem = ({ isCorrect, image }: Props) => {
  return (
    <View style={styles.itemContainer}>
      {isCorrect ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Text style={styles.questionMark}>?</Text>
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
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PlayerToGuessItem;
