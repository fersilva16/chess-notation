import type { RefObject } from 'react';

import type { IPosition } from '../position/IPosition';
import type { PIECE_COLORS } from './PieceColorEnum';
import type { PIECE_TYPES } from './PieceTypeEnum';

export type IPiece = {
  type: keyof typeof PIECE_TYPES;
  color: keyof typeof PIECE_COLORS;
  position: IPosition;
  ref: RefObject<HTMLDivElement>;
};
