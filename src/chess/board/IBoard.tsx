import { IPiece } from '../piece/IPiece';

export type IBoardSquare = IPiece | undefined;

export type IBoardRow = [
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
  IBoardSquare,
];

export type IBoard = [
  IBoardRow,
  IBoardRow,
  IBoardRow,
  IBoardRow,
  IBoardRow,
  IBoardRow,
  IBoardRow,
  IBoardRow,
];
