import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import AuthProvider from './hooks/context/auth-context'
import Routes from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles/>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
