import { IPiece } from '../piece/IPiece';
import { boardAddPiece } from './boardAddPiece';
import { IBoard } from './IBoard';

export const boardAddPieces = (board: IBoard, pieces: IPiece[]) =>
  pieces.reduce(boardAddPiece, board);
