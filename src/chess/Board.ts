import { Piece } from './Piece';
import { Position } from './Position';

export namespace Board {
  export type Square = Piece.T | undefined;

  export type Row = [Square, Square, Square, Square, Square, Square, Square, Square];

  export type T = [Row, Row, Row, Row, Row, Row, Row, Row];

  export const LENGTH = 8;

  export const emptyRow = () => Array.from({ length: LENGTH }, () => undefined) as Row;

  export const empty = () => Array.from({ length: LENGTH }, () => emptyRow()) as T;

  const changeArrayIndex = <I>(array: I[], index: number, item: I) => [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];

  export const addPiece = (board: T, piece: Piece.T) =>
    changeArrayIndex(
      board,
      piece.position.row,
      changeArrayIndex(board[piece.position.row], piece.position.column, piece) as Row,
    ) as T;

  export const addPieces = (board: T, pieces: Piece.T[]) => pieces.reduce(addPiece, board);

  export const fromPieces = (pieces: Piece.T[]) => addPieces(empty(), pieces);

  export const removePiece = (board: T, piece: Piece.T) =>
    changeArrayIndex(
      board,
      piece.position.row,
      changeArrayIndex(board[piece.position.row], piece.position.column, undefined) as Row,
    ) as T;

  export const move = (board: T, piece: Piece.T, position: Position.T) =>
    Board.addPiece(Board.removePiece(board, piece), Piece.move(piece, position));

  export const initial = () =>
    fromPieces([
      Piece.create('white', 'rook', Position.create(7, 0)),
      Piece.create('white', 'knight', Position.create(7, 1)),
      Piece.create('white', 'bishop', Position.create(7, 2)),
      Piece.create('white', 'queen', Position.create(7, 3)),
      Piece.create('white', 'king', Position.create(7, 4)),
      Piece.create('white', 'bishop', Position.create(7, 5)),
      Piece.create('white', 'knight', Position.create(7, 6)),
      Piece.create('white', 'rook', Position.create(7, 7)),

      Piece.create('white', 'pawn', Position.create(6, 0)),
      Piece.create('white', 'pawn', Position.create(6, 1)),
      Piece.create('white', 'pawn', Position.create(6, 2)),
      Piece.create('white', 'pawn', Position.create(6, 3)),
      Piece.create('white', 'pawn', Position.create(6, 4)),
      Piece.create('white', 'pawn', Position.create(6, 5)),
      Piece.create('white', 'pawn', Position.create(6, 6)),
      Piece.create('white', 'pawn', Position.create(6, 7)),

      Piece.create('black', 'rook', Position.create(0, 0)),
      Piece.create('black', 'knight', Position.create(0, 1)),
      Piece.create('black', 'bishop', Position.create(0, 2)),
      Piece.create('black', 'queen', Position.create(0, 3)),
      Piece.create('black', 'king', Position.create(0, 4)),
      Piece.create('black', 'bishop', Position.create(0, 5)),
      Piece.create('black', 'knight', Position.create(0, 6)),
      Piece.create('black', 'rook', Position.create(0, 7)),

      Piece.create('black', 'pawn', Position.create(1, 0)),
      Piece.create('black', 'pawn', Position.create(1, 1)),
      Piece.create('black', 'pawn', Position.create(1, 2)),
      Piece.create('black', 'pawn', Position.create(1, 3)),
      Piece.create('black', 'pawn', Position.create(1, 4)),
      Piece.create('black', 'pawn', Position.create(1, 5)),
      Piece.create('black', 'pawn', Position.create(1, 6)),
      Piece.create('black', 'pawn', Position.create(1, 7)),
    ]);
}
