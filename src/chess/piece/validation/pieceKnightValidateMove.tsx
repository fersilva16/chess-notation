import type { PieceValidateMoveArgs } from './PieceValidateMove';

export const pieceKnightValidateMove = ({
  piece,
  position,
}: PieceValidateMoveArgs) => {
  const columnDifference = Math.abs(position.column - piece.position.column);
  const rowDifference = Math.abs(position.row - piece.position.row);

  if (columnDifference === 2 && rowDifference === 1) {
    return true;
  }

  if (columnDifference === 1 && rowDifference === 2) {
    return true;
  }

  return false;
};
