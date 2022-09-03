import { PIECE_COLORS } from '../piece/PieceColorEnum';
import { pieceCreate } from '../piece/pieceCreate';
import { PIECE_TYPES } from '../piece/PieceTypeEnum';
import { positionCreate } from '../position/positionCreate';
import { boardFromPieces } from './boardFromPieces';

export const boardInitial = () => {
  return boardFromPieces([
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.ROOK, positionCreate(7, 0)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.KNIGHT, positionCreate(7, 1)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.BISHOP, positionCreate(7, 2)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.QUEEN, positionCreate(7, 3)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.KING, positionCreate(7, 4)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.BISHOP, positionCreate(7, 5)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.KNIGHT, positionCreate(7, 6)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.ROOK, positionCreate(7, 7)),

    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 0)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 1)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 2)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 3)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 4)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 5)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 6)),
    pieceCreate(PIECE_COLORS.WHITE, PIECE_TYPES.PAWN, positionCreate(6, 7)),

    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 0)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 1)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 2)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 3)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 4)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 5)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 6)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.PAWN, positionCreate(1, 7)),

    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.ROOK, positionCreate(0, 0)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.KNIGHT, positionCreate(0, 1)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.BISHOP, positionCreate(0, 2)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.QUEEN, positionCreate(0, 3)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.KING, positionCreate(0, 4)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.BISHOP, positionCreate(0, 5)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.KNIGHT, positionCreate(0, 6)),
    pieceCreate(PIECE_COLORS.BLACK, PIECE_TYPES.ROOK, positionCreate(0, 7)),
  ]);
};
