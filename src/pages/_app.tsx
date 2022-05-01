import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../themes/theme'
import { SessionProvider } from 'next-auth/react'

function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
