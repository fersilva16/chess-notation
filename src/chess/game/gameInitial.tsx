import { boardInitial } from '../board/boardInitial';
import { PIECE_COLORS } from '../piece/PieceColorEnum';
import type { IGame } from './IGame';

export const gameInitial = (): IGame => ({
  board: boardInitial(),
  currentPlayer: PIECE_COLORS.WHITE,
});
