import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../themes/theme'
import { SessionProvider } from 'next-auth/react'
import NextProgress from "next-progress";

function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextProgress />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
