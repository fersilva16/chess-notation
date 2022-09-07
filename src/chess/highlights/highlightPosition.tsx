import { changeArrayIndex } from '../changeArrayIndex';
import type { IPosition } from '../position/IPosition';
import type { IHighlights } from './IHighlights';

export const highlightPosition = (
  highlights: IHighlights,
  position: IPosition,
) => {
  return changeArrayIndex(
    highlights,
    position.row,
    changeArrayIndex(
      highlights[position.row],
      position.column,
      !highlights[position.row][position.column],
    ),
  ) as IHighlights;
};
