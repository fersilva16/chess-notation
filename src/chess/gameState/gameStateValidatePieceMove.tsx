import { boardGetPiece } from '../board/boardGetPiece';
import { IPiece } from '../piece/IPiece';
import { pieceValidateMoveMap } from '../piece/validation/pieceValidateMoveMap';
import { IPosition } from '../position/IPosition';
import { IGameState } from './IGameState';

export const gameStateValidatePieceMove = (
  gameState: IGameState,
  piece: IPiece,
  position: IPosition,
) => {
  const boardSquare = boardGetPiece(gameState.board, position);

  if (piece.color !== gameState.currentPlayer) return false;

  if (piece.color === boardSquare?.color) return false;

  const pieceValidateMove = pieceValidateMoveMap[piece.type];

  const isPieceMoveValid = pieceValidateMove(piece, position, boardSquare);

  if (!isPieceMoveValid) return false;

  return true;
};
