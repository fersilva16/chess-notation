import { changeArrayIndex } from '../changeArrayIndex';
import { IPiece } from '../piece/IPiece';
import { IBoard } from './IBoard';

export const boardAddPiece = (board: IBoard, piece: IPiece) =>
  changeArrayIndex(
    board,
    piece.position.row,
    changeArrayIndex(board[piece.position.row], piece.position.column, piece),
  ) as IBoard;
