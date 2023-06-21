import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GuessedPlayer from './GuessedPlayer';
import { useGameContext } from '../../store/useGameContext';

const GuessedList = () => {
  const { gameState } = useGameContext();
  const { playersGuessed } = gameState;
  const reversedList = [...playersGuessed].reverse();

  return (
    <View>
      {playersGuessed.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: 'lightgray' }} />
          <View>
            <Text
              style={{ width: 80, textAlign: 'center', color: 'lightgray' }}
            >
              GUESSES
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'lightgray' }} />
        </View>
      )}
      <FlatList
        data={reversedList}
        renderItem={({ item: player, index }) => (
          <GuessedPlayer key={player.id} index={index + 1} player={player} />
        )}
        style={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            enabled={false}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 50,
  },
});

export default GuessedList;
