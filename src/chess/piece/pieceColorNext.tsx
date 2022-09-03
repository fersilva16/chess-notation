import { PIECE_COLORS } from './PieceColorEnum';

export const pieceColorNext = (color: keyof typeof PIECE_COLORS) => {
  if (color === PIECE_COLORS.WHITE) return PIECE_COLORS.BLACK;

  return PIECE_COLORS.WHITE;
};
