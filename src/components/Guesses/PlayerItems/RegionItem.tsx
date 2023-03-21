import {
  ImageSourcePropType,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';
import ItemContainer from './ItemContainer';

type Props = {
  id: string;
  image: ImageSourcePropType;
  isCorrect: boolean;
};

const RegionItem = ({ id, image, isCorrect }: Props) => {
  return (
    <View>
      <ItemContainer isCorrect={isCorrect}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlayContainer}>
          <View style={styles.overlay}></View>
          <Text style={styles.name}>{id}</Text>
        </View>
      </ItemContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
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
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
    zIndex: 1,
  },
});

export default RegionItem;
