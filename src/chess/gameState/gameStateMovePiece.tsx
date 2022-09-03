import { boardMovePiece } from '../board/boardMovePiece';
import { IPiece } from '../piece/IPiece';
import { pieceColorNext } from '../piece/pieceColorNext';
import { IPosition } from '../position/IPosition';
import { IGameState } from './IGameState';

export const gameStateMovePiece = (
  gameState: IGameState,
  piece: IPiece,
  position: IPosition,
): IGameState => ({
  currentPlayer: pieceColorNext(gameState.currentPlayer),
  board: boardMovePiece(gameState.board, piece, position),
});
