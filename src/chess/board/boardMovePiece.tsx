import { IPiece } from '../piece/IPiece';
import { pieceMove } from '../piece/pieceMove';
import { IPosition } from '../position/IPosition';
import { boardAddPiece } from './boardAddPiece';
import { boardRemovePiece } from './boardRemovePiece';
import { IBoard } from './IBoard';

export const boardMovePiece = (board: IBoard, piece: IPiece, position: IPosition) =>
  boardAddPiece(boardRemovePiece(board, piece), pieceMove(piece, position));
