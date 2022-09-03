import { boardMovePiece } from '../board/boardMovePiece';
import { IPiece } from '../piece/IPiece';
import { pieceColorNext } from '../piece/pieceColorNext';
import { IPosition } from '../position/IPosition';
import { gameStateValidatePieceMove } from './gameStateValidatePieceMove';
import { IGameState } from './IGameState';

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
