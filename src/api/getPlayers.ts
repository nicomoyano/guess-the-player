import rawPlayers from './db/players.json';
import { getPlayer } from './utils/getPlayer';
import { RawPlayer } from '../types/RawPlayer';
import { Player } from '../types/Player';

export const getPlayers = (searchText: String | null): Player[] => {
  if (searchText === null) {
    const players = rawPlayers.map((rawPlayer) => getPlayer(rawPlayer));

    return players;
  } else {
    if (searchText.length < 2) return [];

    const rawFilteredPlayers: RawPlayer[] = [];

    const normalizedSearchText = searchText
      .toLowerCase()
      .split(' ')
      .filter((w) => w !== '');

    for (let i = 0; i < rawPlayers.length; i++) {
      if (rawFilteredPlayers.length === 5) {
        break;
      }

      const rawPlayer = rawPlayers[i];

      const normalizedFullName = rawPlayer.fullName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      const normalizedName = rawPlayer.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (
        normalizedSearchText.every(
          (word) =>
            normalizedFullName.includes(word) || normalizedName.includes(word)
        )
      ) {
        rawFilteredPlayers.push(rawPlayer);
      }
    }

    const players = rawFilteredPlayers.map((rawPlayer) => getPlayer(rawPlayer));

    return players;
  }
};
