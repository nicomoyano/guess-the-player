import { positionsImages } from '../../images/positionsImages';
import { Position } from '../../types/Position';

export const getPosition = (specific: string): Position => {
  const general = getGeneralPosition(specific);
  const image = positionsImages.find((image) => image.id === general)?.image;

  const position: Position = {
    general,
    specific,
    image,
  };

  return position;
};

const getGeneralPosition = (specific: string) => {
  switch (specific) {
    case 'GK':
      return 'POR';
    case 'CB':
    case 'LB':
    case 'LWB':
    case 'RB':
    case 'RWB':
      return 'DEF';
    case 'CDM':
    case 'CM':
    case 'CAM':
    case 'RM':
    case 'LM':
      return 'MED';
    case 'CF':
    case 'ST':
    case 'RF':
    case 'RW':
    case 'LF':
    case 'LW':
      return 'DEL';
    default:
      return specific;
  }
};
