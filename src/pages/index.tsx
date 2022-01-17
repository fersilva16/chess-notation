import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { color, ColorProps } from 'styled-system';

const Title = styled.h1<ColorProps>`
  ${color}
`;

const Home: NextPage = function Home() {
  return <Title color="red">Hello World</Title>;
};

export default Home;
