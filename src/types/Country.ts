import { ImageSourcePropType } from 'react-native';
import { Region } from './Region';

export type Country = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  region: Region;
};
