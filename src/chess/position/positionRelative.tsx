import { PIECE_COLORS } from '../piece/PieceColorEnum';
import { IPosition } from './IPosition';
import { positionFlipIndex } from './positionFlipIndex';

export const positionRelative = (
  position: IPosition,
  color: keyof typeof PIECE_COLORS,
): IPosition => {
  if (color === PIECE_COLORS.BLACK) return position;

  return {
    column: position.column,
    row: positionFlipIndex(position.row),
  };
};
