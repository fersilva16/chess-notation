import type { IPiece } from './IPiece';

export const pieceKey = (piece: IPiece) =>
  `${piece.position.row}${piece.position.column}`;
