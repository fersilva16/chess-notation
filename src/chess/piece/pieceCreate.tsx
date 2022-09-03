import { createRef } from 'react';

import type { IPosition } from '../position/IPosition';
import type { IPiece } from './IPiece';
import type { PIECE_COLORS } from './PieceColorEnum';
import type { PIECE_TYPES } from './PieceTypeEnum';

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
