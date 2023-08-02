import About from './containers/About/About'
import Projects from './containers/Projects/Projects'
import Sidebar from './containers/Sidebar/Sidebar'

import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
