import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import PlayerRow from './PlayerRow';
import { Player } from '../types/Player';
import { getPlayers } from '../api/getPlayers';

const SearchPlayers = () => {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredPlayers(getPlayers(searchText));
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearchText(text.toUpperCase())}
        placeholder="Buscar jugador"
        placeholderTextColor="#888"
        value={searchText}
        style={styles.input}
      />
      <FlatList
        data={filteredPlayers}
        renderItem={({ item: player }) => (
          <PlayerRow player={player} emptySearch={() => setSearchText('')} />
        )}
        keyboardShouldPersistTaps={'always'}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 2,
    overflow: 'hidden',
  },
});

export default SearchPlayers;
