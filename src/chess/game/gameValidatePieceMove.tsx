import { boardGetPiece } from '../board/boardGetPiece';
import type { IPiece } from '../piece/IPiece';
import { pieceValidateMoveMap } from '../piece/validation/pieceValidateMoveMap';
import type { IPosition } from '../position/IPosition';
import type { IGame } from './IGame';

export const gameValidatePieceMove = (
  game: IGame,
  piece: IPiece,
  position: IPosition,
) => {
  const boardSquare = boardGetPiece(game.board, position);

  if (piece.color !== game.currentPlayer) {
    return false;
  }

  if (piece.color === boardSquare?.color) {
    return false;
  }

  if (
    piece.position.row === position.row &&
    piece.position.column === position.column
  ) {
    return false;
  }

  const pieceValidateMove = pieceValidateMoveMap[piece.type];

  const isPieceMoveValid = pieceValidateMove({
    piece,
    position,
    boardSquare,
  });

  if (!isPieceMoveValid) {
    return false;
  }

  return true;
};
