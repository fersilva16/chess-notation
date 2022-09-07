import { boardMovePiece } from '../board/boardMovePiece';
import type { IPiece } from '../piece/IPiece';
import { pieceColorNext } from '../piece/pieceColorNext';
import type { IPosition } from '../position/IPosition';
import { gameValidatePieceMove } from './gameValidatePieceMove';
import type { IGame } from './IGame';

export const gameMovePiece = (
  game: IGame,
  piece: IPiece,
  position: IPosition,
): IGame => {
  const isMoveValid = gameValidatePieceMove(game, piece, position);

  if (!isMoveValid) return game;

  return {
    currentPlayer: pieceColorNext(game.currentPlayer),
    board: boardMovePiece(game.board, piece, position),
  };
};
