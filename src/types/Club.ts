import { ImageSourcePropType } from 'react-native';
import { League } from './League';

export type Club = {
  id: string;
  name: string;
  league: League;
  image: ImageSourcePropType;
};
