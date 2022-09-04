import type { PieceValidateMoveArgs } from './PieceValidateMove';

export const pieceRookValidateMove = ({
  piece,
  position,
}: PieceValidateMoveArgs) => {
  if (
    piece.position.row !== position.row &&
    piece.position.column !== position.column
  ) {
    return false;
  }

  return true;
};
