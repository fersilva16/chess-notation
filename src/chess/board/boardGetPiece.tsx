import { IPosition } from '../position/IPosition';
import { IBoard } from './IBoard';

export const boardGetPiece = (board: IBoard, position: IPosition) =>
  board[position.row][position.column];
