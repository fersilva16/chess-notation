import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';

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
  const [holdingPiece, setHoldingPiece] = useState<IPiece | undefined>(
    undefined,
  );
  const [highlights, setHighlights] = useState(highlightsInitial);

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const pos = event.currentTarget.getBoundingClientRect();

    setX((event.clientX - pos.x) / (pos.width / 8));
    setY((event.clientY - pos.y) / (pos.height / 8));
  };

  const onMouseDown: MouseEventHandler<unknown> = (event) => {
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

  const onMouseUp: MouseEventHandler<unknown> = () => {
    if (!holdingPiece) return;

    holdingPiece.ref.current?.removeAttribute('style');

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

  useEffect(() => {
    if (holdingPiece?.ref.current) {
      const row = positionClamp(x) * 100 - 50;
      const column = positionClamp(y) * 100 - 50;

      holdingPiece.ref.current.style.transform = `translate(${row}%, ${column}%)`;
    }
  }, [x, y, holdingPiece]);

  return (
    <Container
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onContextMenu={onContextMenu}
    >
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
