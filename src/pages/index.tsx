import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { layout, LayoutProps, flexbox, FlexboxProps } from 'styled-system';

import { Board } from '../components/Board';

const Container = styled.div<LayoutProps & FlexboxProps>`
  ${layout}
  ${flexbox}
`;

const BoardContainer = styled.div<LayoutProps>`
  ${layout}
`;

const Home: NextPage = function Home() {
  return (
    <Container
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <BoardContainer width="500px" height="500px">
        <Board />
      </BoardContainer>
    </Container>
  );
};

export default Home;
