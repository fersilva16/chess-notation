import { PIECE_TYPES } from '../PieceTypeEnum';
import { pieceBishopValidateMove } from './pieceBishopValidateMove';
import { pieceKingValidateMove } from './pieceKingValidateMove';
import { piecePawnValidateMove } from './piecePawnValidateMove';
import { pieceQueenValidateMove } from './pieceQueenValidateMove';
import { pieceRookValidateMove } from './pieceRookValidateMove';
import type { PieceValidateMoveFunction } from './PieceValidateMove';

export const pieceValidateMoveMap: Record<
  keyof typeof PIECE_TYPES,
  PieceValidateMoveFunction
> = {
  [PIECE_TYPES.BISHOP]: pieceBishopValidateMove,
  [PIECE_TYPES.KING]: pieceKingValidateMove,
  [PIECE_TYPES.KNIGHT]: () => false,
  [PIECE_TYPES.PAWN]: piecePawnValidateMove,
  [PIECE_TYPES.QUEEN]: pieceQueenValidateMove,
  [PIECE_TYPES.ROOK]: pieceRookValidateMove,
};
