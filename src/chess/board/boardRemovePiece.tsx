import { changeArrayIndex } from '../changeArrayIndex';
import { IPiece } from '../piece/IPiece';
import { IBoard } from './IBoard';

export const boardRemovePiece = (board: IBoard, piece: IPiece) =>
  changeArrayIndex(
    board,
    piece.position.row,
    changeArrayIndex(board[piece.position.row], piece.position.column, undefined),
  ) as IBoard;
