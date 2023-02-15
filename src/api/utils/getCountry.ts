import countries from '../db/countries.json';
import { countriesImages } from '../../images/countriesImages';
import { Country } from '../../types/Country';
import { regionsImages } from '../../images/regionsImages';

export const getCountry = (countryId: string): Country => {
  const rawCountry = countries.find((country) => country.id === countryId);

  const image = countriesImages.find((image) => image.id === countryId)?.image;

  const region = rawCountry!.region;
  const regionImage = regionsImages.find(
    (image) => image.id === region.toLowerCase()
  )?.image;

  const country: Country = {
    id: rawCountry!.id,
    name: rawCountry!.name,
    region,
    image,
    regionImage,
  };

  return country;
};
