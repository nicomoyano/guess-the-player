import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Player } from '../types/Player';

type Props = {
  player: Player;
  handleGuessPlayer: (player: Player) => void;
  emptySearch: () => void;
};

const PlayerRow = ({ player, handleGuessPlayer, emptySearch }: Props) => {
  const [hovering, setHovering] = useState(false);

  const containerStyle = [styles.container, hovering && styles.hover];

  return (
    <Pressable
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}
      onPress={() => {
        handleGuessPlayer(player);
        emptySearch();
        Keyboard.dismiss();
      }}
    >
      <View style={containerStyle}>
        <Image source={player.image} style={styles.image} />
        <View style={styles.description}>
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.fullName}>{player.fullName}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    cursor: 'pointer',
  },
  hover: {
    backgroundColor: '#eee',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  description: {
    justifyContent: 'flex-end',
  },
  name: {
    paddingLeft: 8,
    fontSize: 14,
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  fullName: {
    paddingLeft: 8,
    fontSize: 10,
    color: 'gray',
    cursor: 'pointer',
  },
});

export default PlayerRow;
