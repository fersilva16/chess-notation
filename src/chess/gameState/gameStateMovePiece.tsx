import { boardMovePiece } from '../board/boardMovePiece';
import { IPiece } from '../piece/IPiece';
import { IPosition } from '../position/IPosition';
import { IGameState } from './IGameState';

export const gameStateMovePiece = (
  gameState: IGameState,
  piece: IPiece,
  position: IPosition,
): IGameState => ({
  ...gameState,
  board: boardMovePiece(gameState.board, piece, position),
});
