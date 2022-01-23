import { createRef, RefObject } from 'react';

import { Color } from './Color';
import { ImageUrls } from './images';
import { PieceType } from './PieceType';
import type { Position } from './Position';

export namespace Piece {
  export type T = {
    type: PieceType.T;
    color: Color.T;
    position: Position.T;
    ref: RefObject<HTMLDivElement>;
  };

  export const create = (color: Color.T, type: PieceType.T, position: Position.T): T => ({
    color,
    type,
    position,
    ref: createRef(),
  });

  export const key = (piece: T) => `${piece.position.row}${piece.position.column}`;

  export const getImageUrl = (piece: Piece.T) =>
    `${ImageUrls.PIECES_BASE_URL}/${Color.toUrl(piece.color)}${PieceType.toUrl(piece.type)}.png`;

  export const move = (piece: T, position: Position.T): T => ({
    ...piece,
    position,
  });
}
