import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import { gameInitial } from '../chess/game/gameInitial';
import { useHighlights } from '../chess/highlights/useHighlights';
import { useMove } from '../chess/move/useMove';
import { pieceKey } from '../chess/piece/pieceKey';
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
  const { holdingPiece, x, y } = useMove(ref, game, setGame);
  const { highlights } = useHighlights(ref);

  return (
    <Container ref={ref} onContextMenu={(event) => event.preventDefault()}>
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
      {game.board.map((row) =>
        row.map(
          (square) => square && <Piece key={pieceKey(square)} piece={square} />,
        ),
      )}
    </Container>
  );
};

export default Board;
