import type { IPosition } from '../../position/IPosition';
import type { IPiece } from '../IPiece';

export const pieceRookValidateMove = (piece: IPiece, position: IPosition) => {
  if (
    piece.position.row !== position.row &&
    piece.position.column !== position.column
  ) {
    return false;
  }

  return true;
};
