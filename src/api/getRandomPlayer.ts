import rawPlayers from './db/players.json';
import { Player } from '../types/Player';
import { getPlayer } from './utils/getPlayer';

export const getRandomPlayer = (): Player => {
  const fileredRawPlayers = rawPlayers.filter(
    (rawPlayer) => rawPlayer.overall >= 80
  );
  console.log(fileredRawPlayers.length);
  const rawPlayer =
    fileredRawPlayers[Math.floor(Math.random() * fileredRawPlayers.length)];
  const player = getPlayer(rawPlayer);

  return player;
};
