import { ImageSourcePropType } from 'react-native';
import { Club } from './Club';
import { Country } from './Country';
import { Position } from './Position';

export type Player = {
  id: string;
  name: string;
  fullName: string;
  foot: string;
  overall: number;
  kitNumber: number;
  age: number;
  image: ImageSourcePropType;
  country: Country;
  club: Club;
  position: Position;
};
