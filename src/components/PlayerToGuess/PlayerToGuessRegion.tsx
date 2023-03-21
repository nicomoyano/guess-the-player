import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';

type Props = {
  id: string;
  image: ImageSourcePropType;
  isCorrect: boolean;
};

const PlayerToGuessRegion = ({ id, image, isCorrect }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGION</Text>
      <View>
        <View style={styles.itemContainer}>
          {isCorrect ? (
            <>
              <Image source={image} style={styles.image} />
              <View style={styles.overlayContainer}>
                <View style={styles.overlay}></View>
                <Text style={styles.name}>{id}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.questionMark}>?</Text>
          )}
        </View>
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
    color: 'black',
  },
  itemContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderColor: 'transparent',
    padding: 4,
  },
  questionMark: {
    fontSize: 24,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
    zIndex: 1,
  },
});

export default PlayerToGuessRegion;
