import { boardEmpty } from '../board/boardEmpty';
import { PIECE_COLORS } from '../piece/PieceColorEnum';
import type { IGame } from './IGame';

export const gameEmpty = (): IGame => ({
  board: boardEmpty(),
  currentPlayer: PIECE_COLORS.WHITE,
});
