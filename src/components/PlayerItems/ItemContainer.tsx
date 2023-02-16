import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isCorrect: boolean;
};

const ItemContainer = ({ children, isCorrect }: Props) => {
  const containerStyle = [
    styles.container,
    isCorrect ? styles.correctBorder : styles.incorrectBorder,
  ];

  return <View style={containerStyle}>{children}</View>;
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
    padding: 6,
    borderColor: 'transparent',
  },
  correctBorder: {
    borderColor: 'green',
  },
  incorrectBorder: {
    borderColor: 'red',
  },
});

export default ItemContainer;
