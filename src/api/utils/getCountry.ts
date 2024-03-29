import countries from '../db/countries.json';
import { countriesImages } from '../../images/countriesImages';
import { Country } from '../../types/Country';
import { regionsImages } from '../../images/regionsImages';
import { getRegion } from './getRegion';

export const getCountry = (countryId: string): Country => {
  const rawCountry = countries.find((country) => country.id === countryId);

  const image = countriesImages.find((image) => image.id === countryId)?.image;

  const region = getRegion(rawCountry!.region);

  const country: Country = {
    id: rawCountry!.id,
    name: rawCountry!.name,
    image,
    region,
  };

  return country;
};
