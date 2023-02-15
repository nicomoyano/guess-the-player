import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import PlayerRow from './PlayerRow';
import GuessedPlayer from './GuessedPlayer';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';
import { getPlayers } from '../api/getPlayers';

type Props = {
  handleGuessPlayer: (player: Player) => void;
};

const PlayersList = ({ handleGuessPlayer }: Props) => {
  const gameState = useContext(gameContext);

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredPlayers(getPlayers(searchText));
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearchText(text.toUpperCase())}
        value={searchText}
        style={styles.input}
      />
      <FlatList
        data={filteredPlayers}
        renderItem={({ item: player }) => (
          <PlayerRow
            player={player}
            handleGuessPlayer={handleGuessPlayer}
            emptySearch={() => setSearchText('')}
          />
        )}
        style={styles.list}
        keyboardShouldPersistTaps={'always'}
      />
      <FlatList
        data={gameState?.playersGuessed}
        renderItem={({ item: player }) => (
          <GuessedPlayer key={player.id} player={player} />
        )}
        style={styles.guessedList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    width: '100%',
    maxWidth: 800,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  list: {
    maxHeight: 162,
    borderRadius: 3,
    marginHorizontal: 10,
  },
  guessedList: {
    marginTop: 25,
    marginBottom: 50,
  },
});

export default PlayersList;
