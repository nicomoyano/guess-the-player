import { regionsImages } from '../../images/regionsImages';
import { Region } from '../../types/Region';

export const getRegion = (name: string): Region => {
  const id = name.slice(0, 2).toUpperCase();
  const image = regionsImages.find((image) => image.id === id)?.image;

  const region: Region = {
    id,
    image,
  };

  return region;
};
