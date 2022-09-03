import { boardEmpty } from '../board/boardEmpty';
import { PIECE_COLORS } from '../piece/PieceColorEnum';
import type { IGameState } from './IGameState';

export const gameStateEmpty = (): IGameState => ({
  board: boardEmpty(),
  currentPlayer: PIECE_COLORS.WHITE,
});
