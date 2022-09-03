import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Board from '../components/Board';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardContainer = styled.div`
  position: relative;
  width: 40%;
  padding-bottom: 40%;
`;

const Home: NextPage = function Home() {
  return (
    <Container>
      <BoardContainer>
        <Board />
      </BoardContainer>
    </Container>
  );
};

export default Home;
