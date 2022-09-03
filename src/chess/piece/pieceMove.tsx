import { IPosition } from '../position/IPosition';
import { IPiece } from './IPiece';

export const pieceMove = (piece: IPiece, position: IPosition): IPiece => ({
  ...piece,
  position,
});
