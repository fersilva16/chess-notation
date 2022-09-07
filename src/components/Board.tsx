import styled from '@emotion/styled';
import type { MouseEvent, MouseEventHandler } from 'react';
import { useState } from 'react';

import { gameStateInitial } from '../chess/gameState/gameStateInitial';
import { gameStateMovePiece } from '../chess/gameState/gameStateMovePiece';
import { highlightPosition } from '../chess/highlights/highlightPosition';
import { highlightsInitial } from '../chess/highlights/highlightsInitial';
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
  const [gameState, setGameState] = useState(gameStateInitial);
  const [holdingPiece, setHoldingPiece] = useState<IPiece | undefined>();
  const [highlights, setHighlights] = useState(highlightsInitial);

  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  const getPositionFromEvent = (event: MouseEvent<HTMLDivElement>) => {
    const pos = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - pos.x) / (pos.width / 8);
    const y = (event.clientY - pos.y) / (pos.height / 8);

    setX(x);
    setY(y);

    return {
      x,
      y,
    };
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!holdingPiece?.ref.current) return;

    const { x, y } = getPositionFromEvent(event);

    const row = positionClamp(x) * 100 - 50;
    const column = positionClamp(y) * 100 - 50;

    holdingPiece.ref.current.style.transform = `translate(${row}%, ${column}%)`;
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    const { x, y } = getPositionFromEvent(event);

    const row = Math.floor(y);
    const column = Math.floor(x);

    if (event.button === 2) {
      setHighlights(highlightPosition(highlights, positionCreate(row, column)));

      return;
    }

    const piece = gameState.board[row][column];

    if (piece?.ref.current) {
      piece.ref.current.style.zIndex = '1';

      setHoldingPiece(piece);
    }
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!holdingPiece) return;

    holdingPiece.ref.current?.removeAttribute('style');

    const { x, y } = getPositionFromEvent(event);

    const row = Math.floor(y);
    const column = Math.floor(x);

    setGameState(
      gameStateMovePiece(gameState, holdingPiece, positionCreate(row, column)),
    );

    setHoldingPiece(undefined);
  };

  const onContextMenu: MouseEventHandler<unknown> = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onContextMenu={onContextMenu}
    >
      {holdingPiece && x && y && (
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
      {gameState.board.map((row) =>
        row.map(
          (square) => square && <Piece key={pieceKey(square)} piece={square} />,
        ),
      )}
    </Container>
  );
};

export default Board;
