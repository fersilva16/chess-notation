import type { IPiece } from './IPiece';

export const pieceKey = (piece: IPiece) => {
  return `${piece.position.row}${piece.position.column}`;
};
