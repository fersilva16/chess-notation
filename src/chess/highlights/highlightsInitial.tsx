import { BOARD_LENGTH } from '../board/boardEmpty';
import type { IHighlights, IHighlightsRow } from './IHighlights';

export const highlightsRowInitial = () => {
  return Array.from({ length: BOARD_LENGTH }, () => false) as IHighlightsRow;
};

export const highlightsInitial = () => {
  return Array.from(
    { length: BOARD_LENGTH },
    highlightsRowInitial,
  ) as IHighlights;
};
