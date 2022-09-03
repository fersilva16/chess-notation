import type { IPiece } from '../piece/IPiece';
import { boardAddPiece } from './boardAddPiece';
import type { IBoard } from './IBoard';

export const boardAddPieces = (board: IBoard, pieces: IPiece[]) => {
  return pieces.reduce(boardAddPiece, board);
};
