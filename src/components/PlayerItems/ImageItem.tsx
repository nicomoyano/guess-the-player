import { ImageSourcePropType, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import ItemContainer from './ItemContainer';

type Props = {
  image: ImageSourcePropType;
  isCorrect: boolean;
};

const ImageItem = ({ image, isCorrect }: Props) => {
  return (
    <ItemContainer isCorrect={isCorrect}>
      <Image source={image} style={styles.image} />
    </ItemContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ImageItem;
