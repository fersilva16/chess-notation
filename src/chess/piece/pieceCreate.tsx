import { createRef } from 'react';

import { IPosition } from '../position/IPosition';
import { IPiece } from './IPiece';
import { PIECE_COLORS } from './PieceColorEnum';
import { PIECE_TYPES } from './PieceTypeEnum';

export const pieceCreate = (
  color: keyof typeof PIECE_COLORS,
  type: keyof typeof PIECE_TYPES,
  position: IPosition,
): IPiece => ({
  color,
  type,
  position,
  ref: createRef(),
});
