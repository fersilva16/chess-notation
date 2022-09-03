import type { IPiece } from '../piece/IPiece';
import { pieceMove } from '../piece/pieceMove';
import type { IPosition } from '../position/IPosition';
import { boardAddPiece } from './boardAddPiece';
import { boardRemovePiece } from './boardRemovePiece';
import type { IBoard } from './IBoard';

export const boardMovePiece = (board: IBoard, piece: IPiece, position: IPosition) =>
  boardAddPiece(boardRemovePiece(board, piece), pieceMove(piece, position));
