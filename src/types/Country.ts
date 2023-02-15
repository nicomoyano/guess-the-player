import { ImageSourcePropType } from 'react-native';

export type Country = {
  id: string;
  name: string;
  region: string;
  image: ImageSourcePropType;
  regionImage: ImageSourcePropType;
};
