import { PIECE_TYPES } from '../PieceTypeEnum';
import { pieceBishopValidateMove } from './pieceBishopValidateMove';
import { piecePawnValidateMove } from './piecePawnValidateMove';
import { pieceRookValidateMove } from './pieceRookValidateMove';
import type { PieceValidateMoveFunction } from './PieceValidateMove';

export const pieceValidateMoveMap: Record<
  keyof typeof PIECE_TYPES,
  PieceValidateMoveFunction
> = {
  [PIECE_TYPES.BISHOP]: pieceBishopValidateMove,
  [PIECE_TYPES.KING]: () => false,
  [PIECE_TYPES.KNIGHT]: () => false,
  [PIECE_TYPES.PAWN]: piecePawnValidateMove,
  [PIECE_TYPES.QUEEN]: () => false,
  [PIECE_TYPES.ROOK]: pieceRookValidateMove,
};
