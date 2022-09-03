import { boardMovePiece } from '../board/boardMovePiece';
import type { IPiece } from '../piece/IPiece';
import { pieceColorNext } from '../piece/pieceColorNext';
import type { IPosition } from '../position/IPosition';
import { gameStateValidatePieceMove } from './gameStateValidatePieceMove';
import type { IGameState } from './IGameState';

export const gameStateMovePiece = (
  gameState: IGameState,
  piece: IPiece,
  position: IPosition,
): IGameState => {
  const isMoveValid = gameStateValidatePieceMove(gameState, piece, position);

  if (!isMoveValid) return gameState;

  return {
    currentPlayer: pieceColorNext(gameState.currentPlayer),
    board: boardMovePiece(gameState.board, piece, position),
  };
};
