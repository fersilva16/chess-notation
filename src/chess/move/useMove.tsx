import type { Dispatch, RefObject, SetStateAction } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { gameMovePiece } from '../game/gameMovePiece';
import type { IGame } from '../game/IGame';
import { getPositionFromEvent } from '../getPositionFromEvent';
import { MOUSE_BUTTONS } from '../MouseButtonEnum';
import type { IPiece } from '../piece/IPiece';
import { positionCreate } from '../position/positionCreate';
import { moveClamp } from './moveClamp';

export const useMove = (
  ref: RefObject<HTMLDivElement>,
  game: IGame,
  setGame: Dispatch<SetStateAction<IGame>>,
) => {
  const [holdingPiece, setHoldingPiece] = useState<IPiece | undefined>();
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!holdingPiece?.ref.current) return;

      const { x, y } = getPositionFromEvent(ref, event, setX, setY);

      const row = moveClamp(x) * 100 - 50;
      const column = moveClamp(y) * 100 - 50;

      holdingPiece.ref.current.style.transform = `translate(${row}%, ${column}%)`;
    },
    [ref, holdingPiece],
  );

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.button !== MOUSE_BUTTONS.LEFT_BUTTON) return;

      const { x, y } = getPositionFromEvent(ref, event, setX, setY);

      const row = Math.floor(y);
      const column = Math.floor(x);

      const piece = game.board[row][column];

      if (piece?.ref.current) {
        piece.ref.current.style.zIndex = '1';

        setHoldingPiece(piece);
      }
    },
    [ref, game],
  );

  const onMouseUp = useCallback(
    (event: MouseEvent) => {
      if (!holdingPiece) return;

      holdingPiece.ref.current?.removeAttribute('style');

      const { x, y } = getPositionFromEvent(ref, event, setX, setY);

      const row = Math.floor(y);
      const column = Math.floor(x);

      setGame(gameMovePiece(game, holdingPiece, positionCreate(row, column)));

      setHoldingPiece(undefined);
    },
    [ref, game, setGame, holdingPiece],
  );

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mousedown', onMouseDown);

    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);

      document.removeEventListener('mousedown', onMouseDown);

      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseDown, onMouseUp]);

  return {
    x,
    y,
    holdingPiece,
  };
};
