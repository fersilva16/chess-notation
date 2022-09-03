import type { IBoardSquare } from '../../board/IBoard';
import type { IPosition } from '../../position/IPosition';
import type { IPiece } from '../IPiece';
import { PIECE_TYPES } from '../PieceTypeEnum';
import { piecePawnValidateMove } from './piecePawnValidateMove';

type PieceValidateMoveFunction = (
  piece: IPiece,
  position: IPosition,
  boardSquare?: IBoardSquare,
) => boolean;

export const pieceValidateMoveMap: Record<
  keyof typeof PIECE_TYPES,
  PieceValidateMoveFunction
> = {
  [PIECE_TYPES.PAWN]: piecePawnValidateMove,
  [PIECE_TYPES.QUEEN]: () => false,
  [PIECE_TYPES.ROOK]: () => false,
  [PIECE_TYPES.BISHOP]: () => false,
  [PIECE_TYPES.KNIGHT]: () => false,
  [PIECE_TYPES.KING]: () => false,
};
