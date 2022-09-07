import type { IBoard, IBoardRow } from './IBoard';

export const BOARD_LENGTH = 8;

export const boardEmptyRow = () => {
  return Array.from({ length: BOARD_LENGTH }, () => undefined) as IBoardRow;
};

export const boardEmpty = () => {
  return Array.from({ length: BOARD_LENGTH }, () => boardEmptyRow()) as IBoard;
};
