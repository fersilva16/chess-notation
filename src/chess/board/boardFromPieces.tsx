import type { IPiece } from '../piece/IPiece';
import { boardAddPieces } from './boardAddPieces';
import { boardEmpty } from './boardEmpty';

export const boardFromPieces = (pieces: IPiece[]) =>
  boardAddPieces(boardEmpty(), pieces);
