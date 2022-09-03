import { IBoard } from '../board/IBoard';
import { PIECE_COLORS } from '../piece/PieceColorEnum';

export type IGameState = {
  board: IBoard;
  currentPlayer: keyof typeof PIECE_COLORS;
};
