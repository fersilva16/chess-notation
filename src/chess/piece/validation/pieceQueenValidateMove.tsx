import type { PieceValidateMoveArgs } from './PieceValidateMove';

export const pieceQueenValidateMove = ({
  piece,
  position,
}: PieceValidateMoveArgs) => {
  const columnDifference = Math.abs(position.column - piece.position.column);
  const rowDifference = Math.abs(position.row - piece.position.row);

  if (columnDifference === rowDifference) {
    return true;
  }

  if (
    piece.position.row === position.row ||
    piece.position.column === position.column
  ) {
    return true;
  }

  return false;
};
