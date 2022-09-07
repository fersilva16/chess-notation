import type { PieceValidateMoveArgs } from './PieceValidateMove';

export const pieceBishopValidateMove = ({
  piece,
  position,
}: PieceValidateMoveArgs) => {
  const columnDifference = Math.abs(position.column - piece.position.column);
  const rowDifference = Math.abs(position.row - piece.position.row);

  if (columnDifference !== rowDifference) {
    return false;
  }

  return true;
};
