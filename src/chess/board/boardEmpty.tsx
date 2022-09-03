import type { IBoard, IBoardRow } from './IBoard';

const LENGTH = 8;

export const boardEmptyRow = () => {
  return Array.from({ length: LENGTH }, () => undefined) as IBoardRow;
};

export const boardEmpty = () => {
  return Array.from({ length: LENGTH }, () => boardEmptyRow()) as IBoard;
};
