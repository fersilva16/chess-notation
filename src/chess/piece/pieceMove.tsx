import type { IPosition } from '../position/IPosition';
import type { IPiece } from './IPiece';

export const pieceMove = (piece: IPiece, position: IPosition): IPiece => ({
  ...piece,
  position,
});
