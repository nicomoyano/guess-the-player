import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import { Player } from '../types/Player';

type Props = {
  player: Player;
  handleGuessPlayer: (player: Player) => void;
  emptySearch: () => void;
};

const PlayerRow = ({ player, handleGuessPlayer, emptySearch }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleGuessPlayer(player);
        emptySearch();
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Image source={player.image} style={styles.image} />
          <View>
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.fullName}>{player.fullName}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    paddingLeft: 8,
    fontSize: 16,
  },
  fullName: {
    paddingLeft: 8,
    fontSize: 10,
    color: 'gray',
  },
  button: {
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: 'blue',
  },
});

export default PlayerRow;
