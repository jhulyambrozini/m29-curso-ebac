import Title from '../../components/Title/Title'
import Project from '../../components/Project/Project'
import { List } from './styles'

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </List>
    </section>
  )
}

export default Projects
