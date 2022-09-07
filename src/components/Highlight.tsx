import styled from '@emotion/styled';
import { memo } from 'react';

type ContainerProps = {
  row: number;
  column: number;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  background-color: rgb(235, 97, 80, 0.8);

  transform: ${({ row, column }) =>
    `translate(${column * 100}%, ${row * 100}%)`};
`;

export type HighlightProps = {
  row: number;
  column: number;
};

const Highlight = ({ row, column }: HighlightProps) => {
  return <Container row={row} column={column} />;
};

export default memo(Highlight);
