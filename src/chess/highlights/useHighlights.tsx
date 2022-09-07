import type { RefObject } from 'react';
import { useEffect, useCallback, useState } from 'react';

import { getPositionFromEvent } from '../getPositionFromEvent';
import { MOUSE_BUTTONS } from '../MouseButtonEnum';
import { positionCreate } from '../position/positionCreate';
import { highlightPosition } from './highlightPosition';
import { highlightsInitial } from './highlightsInitial';

export const useHighlights = (ref: RefObject<HTMLDivElement>) => {
  const [highlights, setHighlights] = useState(highlightsInitial);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== MOUSE_BUTTONS.RIGHT_BUTTON) return;

      const { x, y } = getPositionFromEvent(ref, event);

      const row = Math.floor(y);
      const column = Math.floor(x);

      setHighlights(highlightPosition(highlights, positionCreate(row, column)));

      return;
    },
    [ref, highlights],
  );

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [onMouseDown]);

  return {
    highlights,
  };
};
