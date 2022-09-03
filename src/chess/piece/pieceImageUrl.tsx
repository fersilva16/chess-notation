import type { IPiece } from './IPiece';
import type { PIECE_COLORS } from './PieceColorEnum';
import type { PIECE_TYPES } from './PieceTypeEnum';

const pieceTypeImageMap: Record<keyof typeof PIECE_TYPES, string> = {
  BISHOP: 'b',
  KING: 'k',
  KNIGHT: 'n',
  PAWN: 'p',
  QUEEN: 'q',
  ROOK: 'r',
};

const pieceColorImageMap: Record<keyof typeof PIECE_COLORS, string> = {
  BLACK: 'b',
  WHITE: 'w',
};

export const pieceImageUrl = (piece: IPiece) => {
  const color = pieceColorImageMap[piece.color];
  const type = pieceTypeImageMap[piece.type];

  return `https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${color}${type}.png`;
};
