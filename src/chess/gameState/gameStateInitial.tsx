import { boardInitial } from '../board/boardInitial';
import { PIECE_COLORS } from '../piece/PieceColorEnum';
import { IGameState } from './IGameState';

export const gameStateInitial = (): IGameState => ({
  board: boardInitial(),
  currentPlayer: PIECE_COLORS.WHITE,
});
