import type { IBoardSquare } from '../../board/IBoard';
import type { IPosition } from '../../position/IPosition';
import { positionRelative } from '../../position/positionRelative';
import type { IPiece } from '../IPiece';

const PAWN_START_POSITION = 1;

export const piecePawnValidateMove = (
  piece: IPiece,
  position: IPosition,
  boardSquare?: IBoardSquare,
) => {
  const piecePositionRelative = positionRelative(piece.position, piece.color);
  const newPositionRelativate = positionRelative(position, piece.color);

  if (newPositionRelativate.row <= piecePositionRelative.row) {
    return false;
  }

  if (boardSquare) {
    if (newPositionRelativate.row - piecePositionRelative.row > 1) {
      return false;
    }

    if (newPositionRelativate.column === piecePositionRelative.column + 1) {
      return true;
    }

    if (newPositionRelativate.column === piecePositionRelative.column - 1) {
      return true;
    }

    return false;
  }

  if (piecePositionRelative.row === PAWN_START_POSITION) {
    if (newPositionRelativate.row - piecePositionRelative.row > 2) {
      return false;
    }

    return true;
  }

  if (newPositionRelativate.row - piecePositionRelative.row > 1) {
    return false;
  }

  if (position.column !== piece.position.column) {
    return false;
  }

  return true;
};
