import styled from '@emotion/styled';
import { memo } from 'react';

import { Piece } from '../chess/Piece';

type ContainerProps = {
  imageUrl: string;
  row: number;
  column: number;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  background-image: url(${(props) => props.imageUrl});
  background-size: 100%;

  transform: ${({ row, column }) => `translate(${column * 100}%, ${row * 100}%)`};
`;

export type UIPieceProps = {
  piece: Piece.T;
};

export const UIPiece = memo(({ piece }: UIPieceProps) => (
  <Container
    ref={piece.ref}
    row={piece.position.row}
    column={piece.position.column}
    imageUrl={Piece.getImageUrl(piece)}
  />
));
