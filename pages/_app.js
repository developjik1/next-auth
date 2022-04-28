import { Provider } from 'next-auth/client';

import { Global, ThemeProvider, css, useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { darkTheme, lightTheme } from 'common/theme';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

import useToggle from 'hooks/useToggle';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, toggle] = useToggle();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Provider session={pageProps.session}>
        <Global styles={GLOBAL_STYLE} />
        <Nav isDarkMode={isDarkMode} toggle={toggle} />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

const GLOBAL_STYLE = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default MyApp;
