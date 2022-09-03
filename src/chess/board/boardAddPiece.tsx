import { changeArrayIndex } from '../changeArrayIndex';
import type { IPiece } from '../piece/IPiece';
import type { IBoard } from './IBoard';

export const boardAddPiece = (board: IBoard, piece: IPiece) =>
  changeArrayIndex(
    board,
    piece.position.row,
    changeArrayIndex(board[piece.position.row], piece.position.column, piece),
  ) as IBoard;
