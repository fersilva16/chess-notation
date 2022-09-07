import type { PieceValidateMoveArgs } from './PieceValidateMove';

export const pieceKingValidateMove = ({
  piece,
  position,
}: PieceValidateMoveArgs) => {
  const columnDifference = Math.abs(position.column - piece.position.column);
  const rowDifference = Math.abs(position.row - piece.position.row);

  if (columnDifference > 1 || rowDifference > 1) {
    return false;
  }

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
