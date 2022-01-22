/* eslint-disable react/jsx-props-no-spreading */

import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
              Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
