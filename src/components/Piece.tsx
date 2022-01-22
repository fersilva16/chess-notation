/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { forwardRef, memo } from 'react';
import {
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
} from 'styled-system';

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

const colorsMap = {
  black: 'b',
  white: 'w',
};

const typesMap = {
  rook: 'r',
  bishop: 'b',
  knight: 'n',
  king: 'k',
  queen: 'q',
  pawn: 'p',
};

export type PieceProps = {
  color: keyof typeof colorsMap;
  type: keyof typeof typesMap;
  row: number;
  column: number;
};

const imageBaseURL = 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150';

export const Piece = memo(
  forwardRef<HTMLDivElement, PieceProps>(({ color, type, row, column }, ref) => (
    <Container
      ref={ref}
      position="absolute"
      row={row}
      column={column}
      width="12.5%"
      height="12.5%"
      backgroundImage={`url(${imageBaseURL}/${colorsMap[color]}${typesMap[type]}.png)`}
      backgroundSize="100%"
    />
  )),
);
