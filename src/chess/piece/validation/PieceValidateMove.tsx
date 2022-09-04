import type { IBoardSquare } from '../../board/IBoard';
import type { IPosition } from '../../position/IPosition';
import type { IPiece } from '../IPiece';

export type PieceValidateMoveArgs = {
  piece: IPiece;
  position: IPosition;
  boardSquare: IBoardSquare;
};

export type PieceValidateMoveFunction = (
  args: PieceValidateMoveArgs,
) => boolean;
