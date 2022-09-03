import { PIECES_BASE_URL } from '../images';
import { IPiece } from './IPiece';
import { PIECE_COLORS } from './PieceColorEnum';
import { PIECE_TYPES } from './PieceTypeEnum';

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

export const pieceImageUrl = (piece: IPiece) =>
  `${PIECES_BASE_URL}/${pieceColorImageMap[piece.color]}${pieceTypeImageMap[piece.type]}.png`;
