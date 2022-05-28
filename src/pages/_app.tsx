import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../themes/theme'
import { SessionProvider } from 'next-auth/react'
import NextProgress from "next-progress";
import Layout from '../Layout';

function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <Layout>
        <GlobalStyle />
          <NextProgress />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
