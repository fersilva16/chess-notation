import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { layout, LayoutProps, flexbox, FlexboxProps } from 'styled-system';

import { UIBoard } from '../components/UIBoard';

const Container = styled.div<LayoutProps & FlexboxProps>`
  ${layout}
  ${flexbox}
`;

const BoardContainer = styled.div<LayoutProps>`
  position: relative;
  width: 40%;
  padding-bottom: 40%;

  ${layout};
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
      <BoardContainer>
        <UIBoard />
      </BoardContainer>
    </Container>
  );
};

export default Home;
