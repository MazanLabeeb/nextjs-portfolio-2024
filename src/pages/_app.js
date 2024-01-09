import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode } from "next-dark-mode";
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from "../styles/globals";
import Head from "next/head";

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;
  return (
    <>
      <Head>
        <title>Mazan Labeeb</title>
      </Head>
      <ThemeProvider theme={{ darkMode: darkModeActive, ...theme }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);
