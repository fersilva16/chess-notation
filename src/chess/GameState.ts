import { Board } from './Board';
import { Color } from './Color';
import { Piece } from './Piece';
import { Position } from './Position';

export namespace GameState {
  export type T = {
    board: Board.T;
    currentPlayer: Color.T;
  };

  export const empty = (): T => ({
    board: Board.empty(),
    currentPlayer: 'white',
  });

  export const initial = (): T => ({
    board: Board.initial(),
    currentPlayer: 'white',
  });

  export const move = (gameState: T, piece: Piece.T, position: Position.T): T => ({
    ...gameState,
    board: Board.move(gameState.board, piece, position),
  });
}
