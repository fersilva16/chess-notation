import styled from '@emotion/styled';
import { MouseEventHandler, useEffect, useState } from 'react';

import { GameState } from '../chess/GameState';
import { Piece } from '../chess/Piece';
import { Position } from '../chess/Position';
import UIPiece from './UIPiece';

const Container = styled.div`
  background-image: url('https://images.chesscomfiles.com/chess-themes/boards/green/150.png');
  background-size: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
`;

function UIBoard() {
  const [gameState, setGameState] = useState(GameState.initial);
  const [holdingPiece, setHoldingPiece] = useState<Piece.T | undefined>(undefined);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const pos = event.currentTarget.getBoundingClientRect();

    setX((event.clientX - pos.x) / (pos.width / 8));
    setY((event.clientY - pos.y) / (pos.height / 8));
  };

  const onMouseDown: MouseEventHandler<any> = () => {
    const row = Math.floor(y) as Position.Index;
    const column = Math.floor(x) as Position.Index;

    const piece = gameState.board[row][column];

    if (piece) {
      piece.ref.current!.style.zIndex = '1';

      setHoldingPiece(piece);
    }
  };

  const onMouseUp: MouseEventHandler<any> = () => {
    if (!holdingPiece) return;

    holdingPiece.ref.current!.removeAttribute('style');

    const row = Math.floor(y) as Position.Index;
    const column = Math.floor(x) as Position.Index;

    setGameState(GameState.move(gameState, holdingPiece, Position.create(row, column)));

    setHoldingPiece(undefined);
  };

  useEffect(() => {
    if (holdingPiece) {
      const row = Position.clamp(x) * 100 - 50;
      const column = Position.clamp(y) * 100 - 50;

      holdingPiece.ref.current!.style.transform = `translate(${row}%, ${column}%)`;
    }
  }, [x, y, holdingPiece]);

  return (
    <Container onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {gameState.board.map((row) =>
        row.map((square) => square && <UIPiece key={Piece.key(square)} piece={square} />),
      )}
    </Container>
  );
}

export default UIBoard;
