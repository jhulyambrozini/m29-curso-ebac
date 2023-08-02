import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Sidebar from './containers/Sidebar/Sidebar'

import GlobalStyle, { Container } from './styles'
import themeLight from './Themes/light'
import themeDark from './Themes/dark'

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false)

  const changeTheme = () => setIsThemeDark(!isThemeDark)

  return (
    <ThemeProvider theme={isThemeDark ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
