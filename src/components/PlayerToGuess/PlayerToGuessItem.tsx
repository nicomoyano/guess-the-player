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
  category: string;
};

const PlayerToGuessItem = ({ isCorrect, image, category }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <View style={styles.itemContainer}>
        {isCorrect ? (
          <Image source={image} style={styles.image} />
        ) : (
          <Text style={styles.questionMark}>?</Text>
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
  },
  itemContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 6,
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
