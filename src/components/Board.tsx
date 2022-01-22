import styled from '@emotion/styled';
import { createRef, MouseEventHandler, RefObject, useEffect, useState } from 'react';
import { layout, LayoutProps, flexbox, FlexboxProps } from 'styled-system';

import { Piece, PieceProps } from './Piece';

const Container = styled.div<LayoutProps & FlexboxProps>`
  background-image: url('https://images.chesscomfiles.com/chess-themes/boards/green/150.png');
  background-size: 100%;
  position: absolute;

  ${layout}
  ${flexbox}
`;

export const Board = function Board() {
  const [holdingPiece, setHoldingPiece] = useState<
    ({ ref: RefObject<HTMLDivElement> } & PieceProps) | undefined
  >(undefined);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [pieces, setPieces] = useState<Array<{ ref: RefObject<HTMLDivElement> } & PieceProps>>(
    () => [
      { color: 'black', type: 'rook', row: 0, column: 0, ref: createRef() },
      { color: 'black', type: 'knight', row: 0, column: 1, ref: createRef() },
      { color: 'black', type: 'bishop', row: 0, column: 2, ref: createRef() },
      { color: 'black', type: 'queen', row: 0, column: 3, ref: createRef() },
      { color: 'black', type: 'king', row: 0, column: 4, ref: createRef() },
      { color: 'black', type: 'bishop', row: 0, column: 5, ref: createRef() },
      { color: 'black', type: 'knight', row: 0, column: 6, ref: createRef() },
      { color: 'black', type: 'rook', row: 0, column: 7, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 0, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 1, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 2, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 3, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 4, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 5, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 6, ref: createRef() },
      { color: 'black', type: 'pawn', row: 1, column: 7, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 0, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 1, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 2, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 3, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 4, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 5, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 6, ref: createRef() },
      { color: 'white', type: 'pawn', row: 6, column: 7, ref: createRef() },
      { color: 'white', type: 'rook', row: 7, column: 0, ref: createRef() },
      { color: 'white', type: 'knight', row: 7, column: 1, ref: createRef() },
      { color: 'white', type: 'bishop', row: 7, column: 2, ref: createRef() },
      { color: 'white', type: 'queen', row: 7, column: 3, ref: createRef() },
      { color: 'white', type: 'king', row: 7, column: 4, ref: createRef() },
      { color: 'white', type: 'bishop', row: 7, column: 5, ref: createRef() },
      { color: 'white', type: 'knight', row: 7, column: 6, ref: createRef() },
      { color: 'white', type: 'rook', row: 7, column: 7, ref: createRef() },
    ],
  );

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const pos = event.currentTarget.getBoundingClientRect();

    setX((event.clientX - pos.x) / (pos.width / 8));
    setY((event.clientY - pos.y) / (pos.height / 8));
  };

  const onMouseDown: MouseEventHandler<any> = () => {
    const row = Math.floor(y);
    const column = Math.floor(x);

    const piece = pieces.find((p) => p.row === row && p.column === column);

    if (piece) setHoldingPiece(piece);
  };

  const onMouseUp: MouseEventHandler<any> = () => {
    if (!holdingPiece) return;

    holdingPiece.ref.current!.removeAttribute('style');

    const index = pieces.indexOf(holdingPiece);
    const row = Math.floor(y);
    const column = Math.floor(x);

    setPieces([
      ...pieces.slice(0, index),
      ...pieces.slice(index + 1),
      { ...holdingPiece, row, column },
    ]);

    setHoldingPiece(undefined);
  };

  useEffect(() => {
    if (holdingPiece) {
      holdingPiece.ref.current!.style.transform = `translate(${x * 100 - 50}%, ${y * 100 - 50}%)`;
    }
  }, [x, y, holdingPiece]);

  return (
    <Container
      width="100%"
      height="100%"
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {pieces.map((props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Piece key={`${props.row}${props.column}`} {...props} />
      ))}
    </Container>
  );
};
