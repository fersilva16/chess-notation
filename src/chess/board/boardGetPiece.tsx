import type { IPosition } from '../position/IPosition';
import type { IBoard } from './IBoard';

export const boardGetPiece = (board: IBoard, position: IPosition) =>
  board[position.row][position.column];
