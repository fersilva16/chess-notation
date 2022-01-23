import styled from '@emotion/styled';
import { memo } from 'react';
import {
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
} from 'styled-system';

import { Piece } from '../chess/Piece';

type ContainerProps = {
  row: number;
  column: number;
};

const Container = styled.div<LayoutProps & BackgroundProps & PositionProps & ContainerProps>`
  ${layout}
  ${background}
  ${position}

  transform: ${({ row, column }) => `translate(${column * 100}%, ${row * 100}%)`};
`;

export type UIPieceProps = {
  piece: Piece.T;
};

export const UIPiece = memo(({ piece }: UIPieceProps) => (
  <Container
    ref={piece.ref}
    position="absolute"
    row={piece.position.row}
    column={piece.position.column}
    width="12.5%"
    height="12.5%"
    backgroundImage={`url(${Piece.getImageUrl(piece)})`}
    backgroundSize="100%"
  />
));
