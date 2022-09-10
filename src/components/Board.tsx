import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';

import { gameInitial } from '../chess/game/gameInitial';
import { gameMovePiece } from '../chess/game/gameMovePiece';
import { highlightPosition } from '../chess/highlights/highlightPosition';
import { highlightsInitial } from '../chess/highlights/highlightsInitial';
import { MOUSE_BUTTONS } from '../chess/MouseButtonEnum';
import { moveClamp } from '../chess/move/moveClamp';
import type { IPiece } from '../chess/piece/IPiece';
import { pieceKey } from '../chess/piece/pieceKey';
import { positionClamp } from '../chess/position/positionClamp';
import { positionCreate } from '../chess/position/positionCreate';
import Highlight from './Highlight';
import Piece from './Piece';

const Container = styled.div`
  background-image: url('https://images.chesscomfiles.com/chess-themes/boards/green/150.png');
  background-size: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Board = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [game, setGame] = useState(gameInitial);
  const [holdingPiece, setHoldingPiece] = useState<IPiece | undefined>();
  const [highlights, setHighlights] = useState(highlightsInitial);
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  const getPositionFromEvent = (event: MouseEvent) => {
    const pos = ref.current!.getBoundingClientRect();

    const x = (event.clientX - pos.x) / (pos.width / 8);
    const y = (event.clientY - pos.y) / (pos.height / 8);

    setX && setX(positionClamp(x));
    setY && setY(positionClamp(y));

    return {
      x,
      y,
    };
  };

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!holdingPiece?.ref.current) return;

      const { x, y } = getPositionFromEvent(event);

      const row = moveClamp(x) * 100 - 50;
      const column = moveClamp(y) * 100 - 50;

      holdingPiece.ref.current.style.transform = `translate(${row}%, ${column}%)`;
    },
    [holdingPiece],
  );

  const handleMoveMouseDown = useCallback(
    (event: MouseEvent) => {
      const { x, y } = getPositionFromEvent(event);

      const row = Math.floor(y);
      const column = Math.floor(x);

      const piece = game.board[row][column];

      if (piece?.ref.current) {
        piece.ref.current.style.zIndex = '1';

        setHoldingPiece(piece);
      }
    },
    [game],
  );

  const handleHighlightsMouseDown = useCallback(
    (event: MouseEvent) => {
      const { x, y } = getPositionFromEvent(event);

      const row = Math.floor(y);
      const column = Math.floor(x);

      setHighlights(highlightPosition(highlights, positionCreate(row, column)));
    },
    [highlights],
  );

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      const mouseDownHandlersMap: Record<number, (event: MouseEvent) => void> =
        {
          [MOUSE_BUTTONS.LEFT_BUTTON]: handleMoveMouseDown,
          [MOUSE_BUTTONS.RIGHT_BUTTON]: handleHighlightsMouseDown,
        };

      const handler = mouseDownHandlersMap[event.button];

      if (handler) handler(event);
    },
    [handleHighlightsMouseDown, handleMoveMouseDown],
  );

  const onMouseUp = useCallback(
    (event: MouseEvent) => {
      if (!holdingPiece) return;

      holdingPiece.ref.current?.removeAttribute('style');

      const { x, y } = getPositionFromEvent(event);

      const row = Math.floor(y);
      const column = Math.floor(x);

      setGame(gameMovePiece(game, holdingPiece, positionCreate(row, column)));

      setHoldingPiece(undefined);
    },
    [game, holdingPiece],
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

  return (
    <Container ref={ref} onContextMenu={(event) => event.preventDefault()}>
      {holdingPiece && x !== undefined && y !== undefined && (
        <Highlight row={Math.floor(y)} column={Math.floor(x)} />
      )}
      {holdingPiece && (
        <Highlight
          row={holdingPiece.position.row}
          column={holdingPiece.position.column}
        />
      )}
      {highlights.map((row, rowIndex) =>
        row.map(
          (value, columnIndex) =>
            value && (
              <Highlight
                key={`${rowIndex}${columnIndex}`}
                row={rowIndex}
                column={columnIndex}
              />
            ),
        ),
      )}
      {game.board.map((row) =>
        row.map(
          (square) => square && <Piece key={pieceKey(square)} piece={square} />,
        ),
      )}
    </Container>
  );
};

export default Board;
