import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import PlayerRow from './PlayerRow';
import GuessedPlayer from './GuessedPlayer';
import { Player } from '../types/Player';
import { gameContext } from '../store/gameContext';
import { getPlayers } from '../api/getPlayers';
import PlayerToGuess from './PlayerToGuess';

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
      <PlayerToGuess playerToGuess={gameState!.playerToGuess} />
      <TextInput
        onChangeText={(text) => setSearchText(text)}
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
        keyboardShouldPersistTaps={'always'}
        style={styles.list}
      />
      <FlatList
        inverted
        data={gameState?.playersGuessed}
        renderItem={({ item: player, index }) => (
          <GuessedPlayer key={player.id} index={index + 1} player={player} />
        )}
        style={styles.guessedList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    width: '100%',
    maxWidth: 480,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  list: {
    marginTop: 2,
  },
  guessedList: {
    marginTop: 10,
    marginBottom: 50,
  },
});

export default PlayersList;
