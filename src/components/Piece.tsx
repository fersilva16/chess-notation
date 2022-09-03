import styled from '@emotion/styled';
import { memo } from 'react';

import { IPiece } from '../chess/piece/IPiece';
import { pieceImageUrl } from '../chess/piece/pieceImageUrl';

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

export type PieceProps = {
  piece: IPiece;
};

const Piece = memo(({ piece }: PieceProps) => (
  <Container
    ref={piece.ref}
    row={piece.position.row}
    column={piece.position.column}
    imageUrl={pieceImageUrl(piece)}
  />
));

export default Piece;
