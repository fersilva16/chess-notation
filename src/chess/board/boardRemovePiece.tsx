import { changeArrayIndex } from '../changeArrayIndex';
import type { IPiece } from '../piece/IPiece';
import type { IBoard } from './IBoard';

export const boardRemovePiece = (board: IBoard, piece: IPiece) => {
  return changeArrayIndex(
    board,
    piece.position.row,
    changeArrayIndex(
      board[piece.position.row],
      piece.position.column,
      undefined,
    ),
  ) as IBoard;
};
