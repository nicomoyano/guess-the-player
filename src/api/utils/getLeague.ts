import { leaguesImages } from '../../images/leaguesImages';
import { League } from '../../types/League';

export const getLeague = (id: string): League => {
  const image = leaguesImages.find((image) => image.id === id)?.image;

  const league: League = {
    id,
    image,
  };

  return league;
};
