import { IBoard, IBoardRow } from './IBoard';

const LENGTH = 8;

export const boardEmptyRow = () => Array.from({ length: LENGTH }, () => undefined) as IBoardRow;

export const boardEmpty = () => Array.from({ length: LENGTH }, () => boardEmptyRow()) as IBoard;
