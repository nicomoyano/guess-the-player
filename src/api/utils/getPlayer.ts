import { playersImages } from '../../images/playersImages';
import { getClub } from './getClub';
import { getCountry } from './getCountry';
import { Player } from '../../types/Player';
import { RawPlayer } from '../../types/RawPlayer';
import { getPosition } from './getPosition';

export const getPlayer = (rawPlayer: RawPlayer): Player => {
  const getAge = () => {
    var today = new Date();
    var birthDate = new Date(rawPlayer!.birth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const image = playersImages.find((image) => image.id === rawPlayer.id)?.image;
  const country = getCountry(rawPlayer!.countryId);
  const club = getClub(rawPlayer!.clubId);
  const position = getPosition(rawPlayer!.position);

  const player: Player = {
    id: rawPlayer!.id,
    name: rawPlayer!.name,
    fullName: rawPlayer!.fullName,
    foot: rawPlayer!.foot,
    overall: rawPlayer!.overall,
    kitNumber: rawPlayer!.kitNumber,
    age: getAge(),
    image,
    country,
    club,
    position,
  };

  return player;
};
