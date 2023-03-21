import rawPlayers from './db/players.json';
import { Player } from '../types/Player';
import { getPlayer } from './utils/getPlayer';

export const getRandomPlayer = (): Player => {
  const filteredRawPlayers = rawPlayers.filter(
    (rawPlayer) => rawPlayer.overall >= 80
  );

  const rawPlayer =
    filteredRawPlayers[Math.floor(Math.random() * filteredRawPlayers.length)];
  const player = getPlayer(rawPlayer!);

  return player;
};
