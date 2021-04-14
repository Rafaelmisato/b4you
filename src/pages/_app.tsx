import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import MenuContext from '../context/MenuContextProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MenuContext>
        <Component {...pageProps} />
      </MenuContext>
    </ThemeProvider>
  )
}

export default MyApp
