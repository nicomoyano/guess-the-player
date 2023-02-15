import clubs from '../db/clubs.json';
import { clubsImages } from '../../images/clubsImages';
import { Club } from '../../types/Club';
import { getLeague } from './getLeague';

export const getClub = (clubId: string): Club => {
  const rawClub = clubs.find((club) => club.id === clubId);

  const league = getLeague(rawClub!.league);
  const image = clubsImages.find((image) => image.id === clubId)?.image;

  const club: Club = {
    id: rawClub!.id,
    name: rawClub!.name,
    league,
    image,
  };

  return club;
};
