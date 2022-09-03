import { RefObject } from 'react';

import { IPosition } from '../position/IPosition';
import { PIECE_COLORS } from './PieceColorEnum';
import { PIECE_TYPES } from './PieceTypeEnum';

export type IPiece = {
  type: keyof typeof PIECE_TYPES;
  color: keyof typeof PIECE_COLORS;
  position: IPosition;
  ref: RefObject<HTMLDivElement>;
};
