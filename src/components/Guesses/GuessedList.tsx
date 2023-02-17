import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import GuessedPlayer from './GuessedPlayer';
import { useGameContext } from '../../store/useGameContext';

const GuessedList = () => {
  const { gameState } = useGameContext();
  const { playersGuessed } = gameState;
  const reversedList = [...playersGuessed].reverse();

  return (
    <FlatList
      data={reversedList}
      renderItem={({ item: player, index }) => (
        <GuessedPlayer key={player.id} index={index + 1} player={player} />
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 50,
  },
});

export default GuessedList;
