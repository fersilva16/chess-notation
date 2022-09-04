import { positionRelative } from '../../position/positionRelative';
import type { PieceValidateMoveArgs } from './PieceValidateMove';

const PAWN_START_POSITION = 1;

export const piecePawnValidateMove = ({
  piece,
  position,
  boardSquare,
}: PieceValidateMoveArgs) => {
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
