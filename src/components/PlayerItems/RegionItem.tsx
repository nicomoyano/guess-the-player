import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  image: ImageSourcePropType;
  isCorrect: boolean;
};

const RegionItem = ({ name, image, isCorrect }: Props) => {
  const shortName = name.slice(0, 2).toUpperCase();

  const containerStyle = [
    styles.container,
    isCorrect ? styles.correctBorder : styles.incorrectBorder,
  ];

  return (
    <View>
      <View style={containerStyle}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlayContainer}>
          <View style={styles.overlay}></View>
          <Text style={styles.name}>{shortName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderColor: 'transparent',
  },
  correctBorder: {
    borderColor: 'green',
  },
  incorrectBorder: {
    borderColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    backgroundColor: 'white',
    opacity: 0.7,
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '900',
    color: 'black',
    zIndex: 1,
  },
});

export default RegionItem;
